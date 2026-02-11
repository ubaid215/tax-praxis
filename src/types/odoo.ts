// types/odoo.ts

export interface OdooAuthRecord {
  id: number;
  url: string;
  database: string;
  username: string;
  isActive: boolean;
  lastSyncedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface OdooConnectionConfig {
  url: string;
  db: string;
  username: string;
  password: string;
}

export interface OdooAppointmentParams {
  partner_name: string;
  partner_email: string;
  partner_phone: string;
  start_datetime: string; // ISO 8601 format
  stop_datetime: string;  // ISO 8601 format
  description?: string;
  state?: 'open' | 'done' | 'cancelled';
}

export interface OdooPartnerParams {
  name: string;
  email: string;
  phone: string;
}

export interface OdooCalendarEventParams {
  name: string;
  partner_ids: [number, number, number[]][];
  start: string;
  stop: string;
  description: string;
  state: string;
}

export interface OdooCalendarEventUpdateParams {
  name?: string;
  start?: string;
  stop?: string;
  description?: string;
  state?: string;
}

export interface OdooEventData {
  name: string;
  start: string;
  stop: string;
  description: string;
  state: string;
  partner_ids: number[];
}

export interface OdooAuthResponse {
  success: boolean;
  isConnected: boolean;
  url?: string;
  database?: string;
  username?: string;
  connectedAt?: string;
  message?: string;
  error?: string;
}

export interface OdooSyncResult {
  success: boolean;
  appointmentId?: number;
  error?: string;
}