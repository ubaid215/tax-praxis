// types/availability.ts

import { DayOfWeek } from '@prisma/client';

export interface CreateAvailabilityRequest {
  userId: string;
  schedule: AvailabilityScheduleItem[];
  slotDurationMinutes?: number;
  bufferMinutes?: number;
  daysAhead?: number;
}

export interface AvailabilityScheduleItem {
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  isActive?: boolean;
}

export interface UpdateAvailabilityRequest {
  startTime?: string;
  endTime?: string;
  isActive?: boolean;
  validFrom?: string;
  validTo?: string;
}

export interface SlotGenerationConfig {
  slotDurationMinutes?: number;
  bufferMinutes?: number;
  daysAhead?: number;
}

export interface AvailabilityResponse {
  id: string;
  userId: string;
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  isActive: boolean;
  validFrom: Date | null;
  validTo: Date | null;
  createdAt: Date;
  updatedAt: Date;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  slots?: TimeSlotResponse[];
  _count?: {
    slots: number;
  };
}

export interface TimeSlotResponse {
  id: string;
  availabilityId: string;
  startTime: Date;
  endTime: Date;
  isBooked: boolean;
  createdAt: Date;
  booking?: {
    fullName: string;
    email: string;
  } | null;
}