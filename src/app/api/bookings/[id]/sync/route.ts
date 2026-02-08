import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createCalendarEvent } from "@/lib/googleEvent";
import { createOdooAppointment } from "@/lib/odoo";
import { z } from "zod";

const syncRetrySchema = z.object({
  system: z.enum(["GOOGLE_CALENDAR", "ODOO"]),
});

// POST /api/bookings/[id]/sync
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const bookingId = params.id;
    const body = await request.json();
    const validatedData = syncRetrySchema.parse(body);

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        slot: {
          include: {
            availability: {
              include: { user: true }
            }
          }
        },
        guests: true,
        syncLogs: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    let result;
    if (validatedData.system === "GOOGLE_CALENDAR") {
      result = await syncWithGoogleCalendar(booking, true);
    } else if (validatedData.system === "ODOO") {
      result = await syncWithOdoo(booking, true);
    } else {
      return NextResponse.json(
        { error: "Invalid system specified" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: `Sync ${result.success ? "succeeded" : "failed"}`,
      result,
    });

  } catch (error) {
    console.error("Error syncing booking:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.format() },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to sync booking" },
      { status: 500 }
    );
  }
}

interface SyncResult {
  success: boolean;
  eventId?: string;
  appointmentId?: number;
  error?: string;
}

async function syncWithGoogleCalendar(booking: any, isRetry = false): Promise<SyncResult> {
  try {
    const event = await createCalendarEvent({
      summary: `Meeting with ${booking.fullName}`,
      description: booking.notes || "Booking via system",
      startDateTime: booking.slot.startTime.toISOString(),
      endDateTime: booking.slot.endTime.toISOString(),
      attendees: [
        { 
          email: booking.email,
          displayName: booking.fullName 
        },
        ...(booking.guests || []).map((guest: any) => ({
          email: guest.email,
          displayName: guest.email.split('@')[0],
        })),
      ],
      timeZone: booking.timezone,
    });

    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        googleEventId: event.id,
        googleSyncedAt: new Date(),
        status: booking.status === "PENDING" ? "CONFIRMED" : booking.status,
      },
    });

    await prisma.syncLog.create({
      data: {
        bookingId: booking.id,
        system: "GOOGLE_CALENDAR",
        action: isRetry ? "RETRY_CREATE" : "CREATE",
        status: "SUCCESS",
        metadata: { 
          eventId: event.id, 
          hangoutLink: event.hangoutLink 
        },
      },
    });

    return { success: true, eventId: event.id };
  } catch (error: any) {
    await prisma.syncLog.create({
      data: {
        bookingId: booking.id,
        system: "GOOGLE_CALENDAR",
        action: isRetry ? "RETRY_CREATE" : "CREATE",
        status: "FAILED",
        error: error?.message || String(error),
      },
    });

    return { 
      success: false, 
      error: error?.message || String(error) 
    };
  }
}

async function syncWithOdoo(booking: any, isRetry = false): Promise<SyncResult> {
  try {
    const user = booking.slot?.availability?.user;
    if (!user?.odooUserId || !user?.odooApiKey) {
      return { 
        success: false, 
        error: "User not configured for Odoo" 
      };
    }

    const appointment = await createOdooAppointment({
      userId: user.odooUserId,
      apiKey: user.odooApiKey,
      customerName: booking.fullName,
      customerEmail: booking.email,
      customerPhone: booking.phone,
      startTime: booking.slot.startTime,
      endTime: booking.slot.endTime,
      notes: booking.notes,
    });

    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        odooAppointmentId: appointment.id,
        odooSyncedAt: new Date(),
      },
    });

    await prisma.syncLog.create({
      data: {
        bookingId: booking.id,
        system: "ODOO",
        action: isRetry ? "RETRY_CREATE" : "CREATE",
        status: "SUCCESS",
        metadata: { appointmentId: appointment.id },
      },
    });

    return { success: true, appointmentId: appointment.id };
  } catch (error: any) {
    await prisma.syncLog.create({
      data: {
        bookingId: booking.id,
        system: "ODOO",
        action: isRetry ? "RETRY_CREATE" : "CREATE",
        status: "FAILED",
        error: error?.message || String(error),
      },
    });

    return { 
      success: false, 
      error: error?.message || String(error) 
    };
  }
}