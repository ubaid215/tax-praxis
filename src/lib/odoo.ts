// lib/odoo.ts
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

interface OdooCalendarEvent {
  name: string;
  partner_ids: [number, number, number[]][];
  start: string;
  stop: string;
  description: string;
  state: string;
}

interface OdooCalendarEventUpdate {
  name?: string;
  start?: string;
  stop?: string;
  description?: string;
  state?: string;
}

type XmlValue = string | number | boolean | null | XmlValue[] | Record<string, XmlValue>;

interface OdooEventData {
  name: string;
  start: string;
  stop: string;
  description: string;
  state: string;
  partner_ids: number[];
}

class OdooClient {
  private config: OdooConfig;
  private uid: number | null = null;

  constructor() {
    this.config = {
      url: process.env.ODOO_URL?.replace(/\/$/, '') || "", // Remove trailing slash
      db: process.env.ODOO_DB || "",
      username: process.env.ODOO_USERNAME || "",
      password: process.env.ODOO_API_KEY || "",
    };
  }

  /**
   * Authenticate using XML-RPC common endpoint (works with Odoo SaaS)
   */
  private async authenticate(): Promise<number> {
    if (this.uid) return this.uid;

    try {
      console.log("Attempting Odoo authentication to:", this.config.url);
      console.log("Database:", this.config.db);
      console.log("Username:", this.config.username);
      
      // Use XML-RPC authenticate endpoint for Odoo SaaS
      const response = await fetch(`${this.config.url}/xmlrpc/2/common`, {
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
      });

      const text = await response.text();
      console.log("Raw XML response:", text);

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

      console.log("✓ Odoo authentication successful. UID:", this.uid);
      return this.uid;
    } catch (error) {
      console.error("Odoo authentication error:", error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to authenticate with Odoo");
    }
  }

  /**
   * Execute a method using XML-RPC object endpoint
   */
  private async execute(
    model: string,
    method: string,
    args: XmlValue[] = [],
    kwargs: Record<string, XmlValue> = {}
  ): Promise<number | boolean | string | OdooEventData> {
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

    const response = await fetch(`${this.config.url}/xmlrpc/2/object`, {
      method: "POST",
      headers: { "Content-Type": "text/xml" },
      body: xmlBody,
    });

    const text = await response.text();
    return this.parseXmlResponse(text);
  }

  /**
   * Convert JavaScript value to XML-RPC format
   */
  private valueToXml(value: XmlValue): string {
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
   * Parse XML-RPC response
   */
  private parseXmlResponse(xml: string): number | boolean | string | OdooEventData {
    // Check for fault
    if (xml.includes('<fault>')) {
      const errorMatch = xml.match(/<string>(.*?)<\/string>/);
      throw new Error(errorMatch ? errorMatch[1] : 'Odoo operation failed');
    }

    // Extract value from response
    const intMatch = xml.match(/<int>(\d+)<\/int>/);
    if (intMatch) return parseInt(intMatch[1], 10);

    const boolMatch = xml.match(/<boolean>([01])<\/boolean>/);
    if (boolMatch) return boolMatch[1] === '1';

    const stringMatch = xml.match(/<string>(.*?)<\/string>/);
    if (stringMatch) return stringMatch[1];

    // For complex responses, return true if no fault
    return true;
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

  async createAppointment(appointment: OdooAppointment): Promise<number> {
    try {
      // Create partner
      const partnerData: OdooPartner = {
        name: appointment.partner_name,
        email: appointment.partner_email,
        phone: appointment.partner_phone,
      };

      const partnerId = await this.execute('res.partner', 'create', [partnerData]);

      if (typeof partnerId !== 'number') {
        throw new Error('Failed to create partner: Invalid response');
      }

      // Create calendar event
      const eventData: OdooCalendarEvent = {
        name: `Meeting with ${appointment.partner_name}`,
        partner_ids: [[6, 0, [partnerId]]],
        start: appointment.start_datetime,
        stop: appointment.stop_datetime,
        description: appointment.description || "",
        state: appointment.state || "open",
      };

      const eventId = await this.execute('calendar.event', 'create', [eventData]);

      if (typeof eventId !== 'number') {
        throw new Error('Failed to create event: Invalid response');
      }

      return eventId;
    } catch (error) {
      console.error("Odoo create appointment error:", error);
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
        updateData.start = updates.start_datetime;
      }
      if (updates.stop_datetime) {
        updateData.stop = updates.stop_datetime;
      }
      if (updates.description) {
        updateData.description = updates.description;
      }
      if (updates.state) {
        updateData.state = updates.state;
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
        fields: ["name", "start", "stop", "description", "state", "partner_ids"]
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
}

export const odooClient = new OdooClient();

// Helper function to create Odoo appointment
export async function createOdooAppointment(data: {
  fullName: string;
  email: string;
  phone: string;
  startTime: Date;
  endTime: Date;
  notes?: string;
}): Promise<number> {
  return odooClient.createAppointment({
    partner_name: data.fullName,
    partner_email: data.email,
    partner_phone: data.phone,
    start_datetime: data.startTime.toISOString(),
    stop_datetime: data.endTime.toISOString(),
    description: data.notes,
    state: "open",
  });
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