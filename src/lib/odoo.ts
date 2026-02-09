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

class OdooClient {
  private config: OdooConfig;
  private uid: number | null = null;

  constructor() {
    this.config = {
      url: process.env.ODOO_URL || "",
      db: process.env.ODOO_DB || "",
      username: process.env.ODOO_USERNAME || "",
      password: process.env.ODOO_API_KEY || "",
    };
  }

  private async authenticate(): Promise<number> {
    if (this.uid) return this.uid;

    try {
      const response = await fetch(`${this.config.url}/web/session/authenticate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            db: this.config.db,
            login: this.config.username,
            password: this.config.password,
          },
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(`Odoo authentication failed: ${data.error.message}`);
      }

      if (!data.result || !data.result.uid) {
        throw new Error("Odoo authentication failed: Invalid credentials");
      }

      this.uid = data.result.uid;
      return this.uid;
    } catch (error) {
      console.error("Odoo authentication error:", error);
      throw new Error("Failed to authenticate with Odoo");
    }
  }

  /**
   * Test the Odoo connection by attempting to authenticate
   * This is used to verify credentials are correct
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
      await this.authenticate();

      const response = await fetch(`${this.config.url}/web/dataset/call_kw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            model: "calendar.event", // Standard Odoo calendar model
            method: "create",
            args: [
              {
                name: `Meeting with ${appointment.partner_name}`,
                partner_ids: [[0, 0, {
                  name: appointment.partner_name,
                  email: appointment.partner_email,
                  phone: appointment.partner_phone,
                }]],
                start: appointment.start_datetime,
                stop: appointment.stop_datetime,
                description: appointment.description || "",
                state: appointment.state || "open",
              },
            ],
            kwargs: {},
          },
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(`Odoo create failed: ${data.error.message}`);
      }

      return data.result; // Returns appointment ID
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
      await this.authenticate();

      const response = await fetch(`${this.config.url}/web/dataset/call_kw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            model: "calendar.event",
            method: "write",
            args: [
              [appointmentId],
              {
                ...(updates.partner_name && { name: `Meeting with ${updates.partner_name}` }),
                ...(updates.start_datetime && { start: updates.start_datetime }),
                ...(updates.stop_datetime && { stop: updates.stop_datetime }),
                ...(updates.description && { description: updates.description }),
                ...(updates.state && { state: updates.state }),
              },
            ],
            kwargs: {},
          },
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(`Odoo update failed: ${data.error.message}`);
      }

      return data.result;
    } catch (error) {
      console.error("Odoo update appointment error:", error);
      throw error;
    }
  }

  async deleteAppointment(appointmentId: number): Promise<boolean> {
    try {
      await this.authenticate();

      const response = await fetch(`${this.config.url}/web/dataset/call_kw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            model: "calendar.event",
            method: "unlink",
            args: [[appointmentId]],
            kwargs: {},
          },
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(`Odoo delete failed: ${data.error.message}`);
      }

      return data.result;
    } catch (error) {
      console.error("Odoo delete appointment error:", error);
      throw error;
    }
  }

  async getAppointment(appointmentId: number): Promise<any> {
    try {
      await this.authenticate();

      const response = await fetch(`${this.config.url}/web/dataset/call_kw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            model: "calendar.event",
            method: "read",
            args: [[appointmentId]],
            kwargs: {
              fields: ["name", "start", "stop", "description", "state", "partner_ids"],
            },
          },
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(`Odoo read failed: ${data.error.message}`);
      }

      return data.result[0];
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