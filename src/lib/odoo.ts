// lib/odoo.ts - UPDATED WITH TIMEOUT HANDLING AND RETRY LOGIC
interface OdooConfig {
  url: string;
  db: string;
  username: string;
  password: string;
}

interface OdooAppointment {
  partner_name: string;
  partner_email: string;
  partner_phone: string;
  start_datetime: string;
  stop_datetime: string;
  description?: string;
  state?: string;
}

interface OdooPartner {
  name: string;
  email: string;
  phone: string;
}

interface OdooCalendarEventUpdate {
  name?: string;
  start?: string;
  stop?: string;
  description?: string;
  // 'state' field removed - not valid in Odoo 19.0
}

// Fixed: Flexible type system for XML-RPC values that handles all Odoo data structures
type XmlPrimitive = string | number | boolean | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type XmlArray = any[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type XmlObject = Record<string, any>;

type XmlValueType = XmlPrimitive | XmlArray | XmlObject;

interface OdooEventData {
  name: string;
  start: string;
  stop: string;
  description: string;
  partner_ids: number[];
}

/**
 * Convert ISO 8601 datetime to Odoo format
 * Odoo expects: 'YYYY-MM-DD HH:MM:SS' (no 'T', no timezone)
 * Input: '2026-02-12T07:00:00.000Z' or Date object
 * Output: '2026-02-12 07:00:00'
 */
function formatDatetimeForOdoo(
  datetime: string | Date,
  targetTimeZone: string = 'Asia/Karachi' 
): string {
  const date = typeof datetime === 'string' ? new Date(datetime) : datetime;

  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: targetTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(date);

  const get = (type: string) =>
    parts.find(p => p.type === type)?.value || '';

  return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')}`;
}


class OdooClient {
  private config: OdooConfig;
  private uid: number | null = null;
  private readonly TIMEOUT_MS = 30000; // 30 seconds timeout
  private readonly MAX_RETRIES = 2; // Retry failed requests

  constructor() {
    this.config = {
      url: process.env.ODOO_URL?.replace(/\/$/, '') || "", // Remove trailing slash
      db: process.env.ODOO_DB || "",
      username: process.env.ODOO_USERNAME || "",
      password: process.env.ODOO_API_KEY || "",
    };
  }

  /**
   * Fetch with timeout and better error handling
   */
  private async fetchWithTimeout(
    url: string, 
    options: RequestInit,
    timeoutMs: number = this.TIMEOUT_MS
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      
      // Provide helpful error messages
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error(
            `Connection timeout after ${timeoutMs}ms. ` +
            `Please check:\n` +
            `1. Is your Odoo instance running? (${this.config.url})\n` +
            `2. Is the URL correct?\n` +
            `3. Are you connected to the internet?\n` +
            `4. Is there a firewall blocking the connection?`
          );
        }
        if (error.message.includes('ENOTFOUND')) {
          throw new Error(
            `Cannot resolve Odoo server: ${this.config.url}\n` +
            `Please verify the URL is correct.`
          );
        }
        if (error.message.includes('ECONNREFUSED')) {
          throw new Error(
            `Connection refused by Odoo server: ${this.config.url}\n` +
            `The server may be down or not accepting connections.`
          );
        }
      }
      
      throw error;
    }
  }

  /**
   * Authenticate using XML-RPC common endpoint (works with Odoo SaaS)
   */
  private async authenticate(): Promise<number> {
    if (this.uid) return this.uid;

    try {
      console.log("🔐 Attempting Odoo authentication...");
      console.log("  URL:", this.config.url);
      console.log("  Database:", this.config.db);
      console.log("  Username:", this.config.username);
      
      // Use XML-RPC authenticate endpoint for Odoo SaaS
      const response = await this.fetchWithTimeout(
        `${this.config.url}/xmlrpc/2/common`,
        {
          method: "POST",
          headers: { 
            "Content-Type": "text/xml",
          },
          body: `<?xml version="1.0"?>
<methodCall>
  <methodName>authenticate</methodName>
  <params>
    <param><value><string>${this.config.db}</string></value></param>
    <param><value><string>${this.config.username}</string></value></param>
    <param><value><string>${this.config.password}</string></value></param>
    <param><value><struct></struct></value></param>
  </params>
</methodCall>`,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      console.log("📄 Raw XML response:", text.substring(0, 200) + "...");

      // Parse XML-RPC response
      const uidMatch = text.match(/<int>(\d+)<\/int>/);
      if (!uidMatch) {
        // Check for fault/error
        const faultMatch = text.match(/<string>(.*?)<\/string>/);
        const errorMsg = faultMatch ? faultMatch[1] : "Authentication failed";
        throw new Error(`Odoo authentication failed: ${errorMsg}`);
      }

      this.uid = parseInt(uidMatch[1], 10);
      
      if (!this.uid || this.uid === 0) {
        throw new Error("Odoo authentication failed: Invalid credentials");
      }

      console.log("✅ Odoo authentication successful. UID:", this.uid);
      return this.uid;
    } catch (error) {
      console.error("❌ Odoo authentication error:", error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to authenticate with Odoo");
    }
  }

  /**
   * Execute a method using XML-RPC object endpoint with retry logic
   */
  private async execute(
    model: string,
    method: string,
    args: XmlValueType[] = [],
    kwargs: Record<string, XmlValueType> = {}
  ): Promise<number | boolean | string | OdooEventData | XmlArray> {
    await this.authenticate();

    const argsXml = args.map(arg => this.valueToXml(arg)).join('');
    const kwargsXml = Object.keys(kwargs).length > 0 ? this.valueToXml(kwargs) : '';

    const xmlBody = `<?xml version="1.0"?>
<methodCall>
  <methodName>execute_kw</methodName>
  <params>
    <param><value><string>${this.config.db}</string></value></param>
    <param><value><int>${this.uid}</int></value></param>
    <param><value><string>${this.config.password}</string></value></param>
    <param><value><string>${model}</string></value></param>
    <param><value><string>${method}</string></value></param>
    <param><value><array><data>${argsXml}</data></array></value></param>
    ${kwargsXml ? `<param>${kwargsXml}</param>` : ''}
  </params>
</methodCall>`;

    let lastError: Error | null = null;
    
    // Retry logic
    for (let attempt = 1; attempt <= this.MAX_RETRIES; attempt++) {
      try {
        console.log(`📡 Executing ${model}.${method} (attempt ${attempt}/${this.MAX_RETRIES})...`);
        
        const response = await this.fetchWithTimeout(
          `${this.config.url}/xmlrpc/2/object`,
          {
            method: "POST",
            headers: { "Content-Type": "text/xml" },
            body: xmlBody,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const text = await response.text();
        return this.parseXmlResponse(text);
        
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        
        if (attempt < this.MAX_RETRIES) {
          console.warn(`⚠️ Attempt ${attempt} failed, retrying...`);
          // Exponential backoff: wait 1s, then 2s
          await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        }
      }
    }
    
    // All retries failed
    console.error(`❌ All ${this.MAX_RETRIES} attempts failed for ${model}.${method}`);
    throw lastError || new Error('Execute failed after retries');
  }

  /**
   * Convert JavaScript value to XML-RPC format
   */
  private valueToXml(value: XmlValueType): string {
    if (value === null || value === undefined) {
      return '<value><boolean>0</boolean></value>';
    }
    if (typeof value === 'boolean') {
      return `<value><boolean>${value ? '1' : '0'}</boolean></value>`;
    }
    if (typeof value === 'number') {
      return Number.isInteger(value)
        ? `<value><int>${value}</int></value>`
        : `<value><double>${value}</double></value>`;
    }
    if (typeof value === 'string') {
      return `<value><string>${this.escapeXml(value)}</string></value>`;
    }
    if (Array.isArray(value)) {
      const items = value.map(v => this.valueToXml(v)).join('');
      return `<value><array><data>${items}</data></array></value>`;
    }
    if (typeof value === 'object') {
      const members = Object.entries(value)
        .map(([key, val]) => `<member><name>${key}</name>${this.valueToXml(val)}</member>`)
        .join('');
      return `<value><struct>${members}</struct></value>`;
    }
    return '<value><boolean>0</boolean></value>';
  }

  /**
   * Escape XML special characters
   */
  private escapeXml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  /**
   * Parse XML-RPC response with detailed logging
   */
  private parseXmlResponse(xml: string): number | boolean | string | OdooEventData | XmlArray {
    // Log abbreviated response for debugging
    console.log("📋 Odoo XML Response (length: " + xml.length + ")");
    if (xml.length > 500) {
      console.log("  Start:", xml.substring(0, 200) + "...");
      console.log("  End:", "..." + xml.substring(xml.length - 200));
    } else {
      console.log("  Full:", xml);
    }

    // Check for fault
    if (xml.includes('<fault>')) {
      console.error("❌ Odoo returned a FAULT response");
      
      // Try multiple patterns to extract the error
      const patterns = [
        /<member>\s*<name>faultString<\/name>\s*<value><string>([\s\S]*?)<\/string>/,
        /<member>\s*<name>string<\/name>\s*<value><string>([\s\S]*?)<\/string>/,
        /<fault>[\s\S]*?<string>([\s\S]*?)<\/string>/,
        /<string>([\s\S]*?)<\/string>/,
      ];
      
      let errorMsg = 'Odoo operation failed';
      let errorCode = 'unknown';
      
      for (const pattern of patterns) {
        const match = xml.match(pattern);
        if (match && match[1]) {
          errorMsg = match[1];
          console.log("✓ Extracted error message:", errorMsg);
          break;
        }
      }
      
      // Try to extract fault code
      const faultCodeMatch = xml.match(/<member>\s*<name>faultCode<\/name>\s*<value><int>(\d+)<\/int>/);
      if (faultCodeMatch) {
        errorCode = faultCodeMatch[1];
      }
      
      throw new Error(`Odoo Error (${errorCode}): ${errorMsg}`);
    }

    // Check for array with integers (common in search operations)  
    if (xml.includes('<array>') && xml.includes('<int>')) {
      const intMatches = xml.match(/<int>(\d+)<\/int>/g);
      if (intMatches && intMatches.length > 0) {
        const ids = intMatches.map(m => {
          const match = m.match(/<int>(\d+)<\/int>/);
          return match ? parseInt(match[1], 10) : 0;
        }).filter(id => id > 0);
        console.log("✅ Extracted array of integers:", ids);
        return ids;
      }
    }

    // Extract integer (most common for create operations)
    const intMatch = xml.match(/<int>(\d+)<\/int>/);
    if (intMatch && !xml.includes('<array>')) {
      const value = parseInt(intMatch[1], 10);
      console.log("✅ Extracted integer value:", value);
      return value;
    }

    // Extract boolean
    const boolMatch = xml.match(/<boolean>([01])<\/boolean>/);
    if (boolMatch) {
      const value = boolMatch[1] === '1';
      console.log("✅ Extracted boolean value:", value);
      return value;
    }

    // Extract string
    const stringMatch = xml.match(/<string>(.*?)<\/string>/);
    if (stringMatch) {
      const value = stringMatch[1];
      console.log("✅ Extracted string value:", value);
      return value;
    }

    // Array or complex structure
    if (xml.includes('<array>') || xml.includes('<struct>')) {
      console.log("✅ Complex structure detected - assuming success");
      return true;
    }

    console.warn("⚠️ Unexpected XML structure");
    return true;
  }

  /**
   * 🆕 Get default appointment type ID for creating real appointments
   * This method fetches the first available appointment.type from Odoo
   */
  private async getDefaultAppointmentTypeId(): Promise<number | null> {
    try {
      console.log("📡 Fetching appointment types...");
      
      // First, use search to get IDs
      const searchResult = await this.execute(
        'appointment.type',
        'search',
        [[]],
        { limit: 1 }
      );

      console.log("Search result:", searchResult);

      // Handle different response types
      let appointmentTypeId: number | null = null;

      if (typeof searchResult === 'number') {
        // Direct ID returned
        appointmentTypeId = searchResult;
      } else if (Array.isArray(searchResult) && searchResult.length > 0) {
        // Array of IDs returned
        appointmentTypeId = searchResult[0];
      }

      if (appointmentTypeId) {
        console.log("✅ Found appointment type ID:", appointmentTypeId);
        return appointmentTypeId;
      }

      console.warn("⚠️ No appointment.type found in Odoo");
      return null;
    } catch (error) {
      console.error("❌ Error fetching appointment type:", error);
      return null;
    }
  }

  /**
   * Test the Odoo connection by attempting to authenticate
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.authenticate();
      return true;
    } catch (error) {
      console.error("Odoo connection test failed:", error);
      throw error;
    }
  }

  /**
   * 🔥 UPDATED: Dual-mode appointment creation
   * 
   * Creates either:
   * 1. Plain calendar event (default) - shows in Calendar only
   * 2. Real appointment booking - shows in Calendar AND Appointment app
   * 
   * @param appointment - Appointment data
   * @param options.createAsAppointment - If true, creates a real appointment with appointment_type_id
   */
  async createAppointment(
    appointment: OdooAppointment,
    options?: { createAsAppointment?: boolean }
  ): Promise<number> {
    try {
      console.log("🔄 Creating Odoo appointment...");
      console.log("  Mode:", options?.createAsAppointment ? "REAL APPOINTMENT" : "PLAIN CALENDAR EVENT");
      console.log("  Name:", appointment.partner_name);
      console.log("  Email:", appointment.partner_email);
      console.log("  Start:", appointment.start_datetime);
      console.log("  Stop:", appointment.stop_datetime);

      // IMPORTANT: Ensure we're authenticated before creating event
      await this.authenticate();

      // Convert ISO 8601 datetime to Odoo format
      const odooStartTime = formatDatetimeForOdoo(appointment.start_datetime);
      const odooStopTime = formatDatetimeForOdoo(appointment.stop_datetime);
      
      console.log("  Odoo Start:", odooStartTime);
      console.log("  Odoo Stop:", odooStopTime);
      
      // Create attendee info for description
      const attendeeInfo = `
📧 Email: ${appointment.partner_email}
📱 Phone: ${appointment.partner_phone}
${appointment.description ? '\n📝 Notes: ' + appointment.description : ''}
      `.trim();
      
      // Base event data (used for both modes)
      const baseEventData: Record<string, XmlValueType> = {
        name: `Appointment: ${appointment.partner_name}`,
        start: odooStartTime,
        stop: odooStopTime,
        description: attendeeInfo,
        user_id: this.uid,
        partner_ids: [[6, 0, []]], // Empty list of partners
        allday: false,
        privacy: 'public',
        show_as: 'busy',
        location: appointment.partner_email,
      };

      // 🔴 CRITICAL: If createAsAppointment is true, add appointment-specific fields
      if (options?.createAsAppointment) {
        console.log("🎯 Fetching appointment type for real appointment creation...");
        const appointmentTypeId = await this.getDefaultAppointmentTypeId();

        if (!appointmentTypeId) {
          throw new Error("No appointment.type found in Odoo. Cannot create real appointment.");
        }

        // Add the fields that make this a "real" appointment
        baseEventData.appointment_type_id = appointmentTypeId;
        baseEventData.appointment_status = 'booked';
        baseEventData.appointment_booker_id = false;
        
        console.log("✅ Appointment fields added:");
        console.log("  appointment_type_id:", appointmentTypeId);
        console.log("  appointment_status: booked");
      }

      const eventId = await this.execute('calendar.event', 'create', [baseEventData]);

      if (typeof eventId !== 'number') {
        console.error("❌ Event creation failed - invalid response type:", typeof eventId);
        throw new Error('Failed to create event: Invalid response');
      }

      console.log("✅ Successfully created event ID:", eventId);
      console.log("📍 Visibility:");
      console.log("  Calendar: ✅ YES");
      console.log("  Appointment app:", options?.createAsAppointment ? "✅ YES" : "❌ NO");
      
      return eventId;
      
    } catch (error) {
      console.error("❌ Odoo createAppointment failed:", error);
      
      // Log detailed error info
      if (error instanceof Error) {
        console.error("  Error message:", error.message);
      }
      
      throw error;
    }
  }

  async updateAppointment(
    appointmentId: number,
    updates: Partial<OdooAppointment>
  ): Promise<boolean> {
    try {
      const updateData: OdooCalendarEventUpdate = {};
      
      if (updates.partner_name) {
        updateData.name = `Meeting with ${updates.partner_name}`;
      }
      if (updates.start_datetime) {
        updateData.start = formatDatetimeForOdoo(updates.start_datetime);
      }
      if (updates.stop_datetime) {
        updateData.stop = formatDatetimeForOdoo(updates.stop_datetime);
      }
      if (updates.description) {
        updateData.description = updates.description;
      }

      const result = await this.execute('calendar.event', 'write', [
        [appointmentId],
        updateData
      ]);

      return typeof result === 'boolean' ? result : true;
    } catch (error) {
      console.error("Odoo update appointment error:", error);
      throw error;
    }
  }

  async deleteAppointment(appointmentId: number): Promise<boolean> {
    try {
      const result = await this.execute('calendar.event', 'unlink', [[appointmentId]]);
      return typeof result === 'boolean' ? result : true;
    } catch (error) {
      console.error("Odoo delete appointment error:", error);
      throw error;
    }
  }

  async getAppointment(appointmentId: number): Promise<OdooEventData> {
    try {
      const result = await this.execute('calendar.event', 'read', [
        [appointmentId],
      ], {
        fields: ["name", "start", "stop", "description", "partner_ids"]
      });
      
      if (typeof result === 'object' && result !== null && 'name' in result) {
        return result as OdooEventData;
      }

      throw new Error('Invalid response from Odoo');
    } catch (error) {
      console.error("Odoo get appointment error:", error);
      throw error;
    }
  }

  isConfigured(): boolean {
    return !!(
      this.config.url &&
      this.config.db &&
      this.config.username &&
      this.config.password
    );
  }

  /**
   * 🔍 DEBUG: List all calendar events to verify they exist
   */
  async listAllEvents(): Promise<XmlArray> {
    try {
      console.log("🔍 Fetching all calendar events...");
      
      const result = await this.execute(
        'calendar.event',
        'search_read',
        [[]],
        { 
          fields: ['id', 'name', 'start', 'stop', 'user_id', 'appointment_type_id', 'appointment_status'],
          limit: 50,
          order: 'start desc'
        }
      );

      console.log("📅 Found events:", result);
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error listing events:", error);
      return [];
    }
  }

  /**
   * 🔍 DEBUG: Get detailed info about a specific event
   */
  async getEventDetails(eventId: number): Promise<XmlObject | null> {
    try {
      console.log(`🔍 Fetching details for event ${eventId}...`);
      
      const result = await this.execute(
        'calendar.event',
        'read',
        [[eventId]],
        { 
          fields: [
            'id', 'name', 'start', 'stop', 'description',
            'user_id', 'partner_ids', 'appointment_type_id', 
            'appointment_status', 'active', 'privacy', 'show_as'
          ]
        }
      );

      if (Array.isArray(result) && result.length > 0) {
        console.log("✅ Event details:", result[0]);
        return result[0] as XmlObject;
      }

      console.warn("⚠️ Event not found");
      return null;
    } catch (error) {
      console.error("Error fetching event details:", error);
      return null;
    }
  }
}

export const odooClient = new OdooClient();

/**
 * 🔥 UPDATED: Helper function to create Odoo appointment with dual-mode support
 * 
 * @param data.asAppointment - If true, creates a real appointment (visible in Appointment app)
 *                            If false, creates a plain calendar event
 *                            DEFAULT: true (creates real appointments by default)
 */
export async function createOdooAppointment(data: {
  fullName: string;
  email: string;
  phone: string;
  startTime: Date;
  endTime: Date;
  notes?: string;
  asAppointment?: boolean; // 🆕 NEW PARAMETER
}): Promise<number> {
  return odooClient.createAppointment(
    {
      partner_name: data.fullName,
      partner_email: data.email,
      partner_phone: data.phone,
      start_datetime: data.startTime.toISOString(),
      stop_datetime: data.endTime.toISOString(),
      description: data.notes,
    },
    {
      createAsAppointment: data.asAppointment ?? true, // 🔥 CHANGED: Default to TRUE (real appointments)
    }
  );
}

// Helper function to update Odoo appointment
export async function updateOdooAppointment(
  appointmentId: number,
  updates: Partial<OdooAppointment>
): Promise<boolean> {
  return odooClient.updateAppointment(appointmentId, updates);
}

// Helper function to delete Odoo appointment
export async function deleteOdooAppointment(appointmentId: number): Promise<boolean> {
  return odooClient.deleteAppointment(appointmentId);
}

// 🔍 DEBUG HELPERS
/**
 * List all calendar events in Odoo (for debugging)
 */
export async function listAllOdooEvents(): Promise<XmlArray> {
  return odooClient.listAllEvents();
}

/**
 * Get detailed information about a specific event (for debugging)
 */
export async function getOdooEventDetails(eventId: number): Promise<XmlObject | null> {
  return odooClient.getEventDetails(eventId);
}