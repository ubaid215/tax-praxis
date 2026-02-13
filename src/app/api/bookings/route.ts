import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createCalendarEvent } from "@/lib/googleEvent";
import { createOdooAppointment, odooClient } from "@/lib/odoo";

// Define proper types for sync results
interface GoogleSyncResult {
  eventId: string;
  link: string;
  meetLink?: string;
}

interface OdooSyncResult {
  appointmentId: number;
}

interface SyncResults {
  google: GoogleSyncResult | null;
  odoo: OdooSyncResult | null;
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        slot: true,
        guests: true,
        user: true,
        syncLogs: {
          orderBy: { createdAt: "desc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Create booking with PENDING status
    const booking = await prisma.booking.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        notes: body.notes,
        slotId: body.slotId,
        timezone: body.timezone || "UTC",
        status: "PENDING", // Start as PENDING
      },
      include: {
        slot: true,
        guests: true,
      },
    });

    // 2. Mark slot as booked
    await prisma.timeSlot.update({
      where: { id: body.slotId },
      data: { isBooked: true },
    });

    // 3. Create audit log for booking creation
    await prisma.auditLog.create({
      data: {
        action: "CREATE",
        entity: "Booking",
        entityId: booking.id,
        userId: body.userId || null,
        meta: {
          fullName: booking.fullName,
          email: booking.email,
          slotTime: booking.slot.startTime.toISOString(), // Convert Date to string for JSON
        },
      },
    });

    // Track sync results
    let googleSuccess = false;
    let odooSuccess = false;
    const syncResults: SyncResults = {
      google: null,
      odoo: null,
    };

    // 4. Sync with Google Calendar
    try {
      const event = await createCalendarEvent({
        summary: `Meeting with ${booking.fullName}`,
        description: booking.notes || "Booking via Tax Praxis website",
        startDateTime: booking.slot.startTime.toISOString(),
        endDateTime: booking.slot.endTime.toISOString(),
        attendees: [
          {
            email: booking.email,
            displayName: booking.fullName,
          },
        ],
        timeZone: booking.timezone,
      });

      googleSuccess = true;
      syncResults.google = {
        eventId: event.id,
        link: event.htmlLink,
        meetLink: event.hangoutLink,
      };

      // Update booking with Google event ID
      await prisma.booking.update({
        where: { id: booking.id },
        data: {
          googleEventId: event.id,
          googleSyncedAt: new Date(),
        },
      });

      // Log successful Google sync
      await prisma.syncLog.create({
        data: {
          bookingId: booking.id,
          system: "GOOGLE_CALENDAR",
          action: "CREATE",
          status: "SUCCESS",
          metadata: {
            eventId: event.id,
            hangoutLink: event.hangoutLink || null,
          },
        },
      });
    } catch (googleError) {
      console.error("Google Calendar sync failed:", googleError);

      // Check if it's a network error
      const isNetworkError = 
        googleError instanceof Error && 
        (googleError.message.includes('ENOTFOUND') || 
         googleError.message.includes('fetch failed'));

      // Log failed Google sync
      await prisma.syncLog.create({
        data: {
          bookingId: booking.id,
          system: "GOOGLE_CALENDAR",
          action: "CREATE",
          status: "FAILED",
          error:
            googleError instanceof Error
              ? isNetworkError 
                ? "Network error: Cannot reach Google servers. Check your internet connection or firewall settings."
                : googleError.message
              : String(googleError),
        },
      });
    }

    // 5. Sync with Odoo (if configured)
    if (odooClient.isConfigured()) {
      try {
        const odooAppointmentId = await createOdooAppointment({
          fullName: booking.fullName,
          email: booking.email,
          phone: booking.phone,
          startTime: booking.slot.startTime,
          endTime: booking.slot.endTime,
          notes: booking.notes || undefined,
        });

        odooSuccess = true;
        syncResults.odoo = {
          appointmentId: odooAppointmentId,
        };

        // Update booking with Odoo appointment ID
        await prisma.booking.update({
          where: { id: booking.id },
          data: {
            odooAppointmentId,
            odooSyncedAt: new Date(),
          },
        });

        // Log successful Odoo sync
        await prisma.syncLog.create({
          data: {
            bookingId: booking.id,
            system: "ODOO",
            action: "CREATE",
            status: "SUCCESS",
            metadata: {
              appointmentId: odooAppointmentId,
            },
          },
        });
      } catch (odooError) {
        console.error("Odoo sync failed:", odooError);

        // Check if it's a network error
        const isNetworkError = 
          odooError instanceof Error && 
          (odooError.message.includes('ENOTFOUND') || 
           odooError.message.includes('fetch failed'));

        // Log failed Odoo sync
        await prisma.syncLog.create({
          data: {
            bookingId: booking.id,
            system: "ODOO",
            action: "CREATE",
            status: "FAILED",
            error:
              odooError instanceof Error 
                ? isNetworkError
                  ? "Network error: Cannot reach Odoo servers. Check your internet connection or firewall settings."
                  : odooError.message
                : String(odooError),
          },
        });
      }
    }

    // 6. Update booking status based on sync results
    // CONFIRMED if at least ONE system synced successfully
    const finalStatus = googleSuccess || odooSuccess ? "CONFIRMED" : "PENDING";

    await prisma.booking.update({
      where: { id: booking.id },
      data: { status: finalStatus },
    });

    // 7. Create audit log for final status
    await prisma.auditLog.create({
      data: {
        action: "SYNC_COMPLETE",
        entity: "Booking",
        entityId: booking.id,
        userId: body.userId || null,
        meta: {
          finalStatus,
          googleSuccess,
          odooSuccess,
          syncResults,
        },
      },
    });

    // 8. Fetch updated booking with all relations
    const finalBooking = await prisma.booking.findUnique({
      where: { id: booking.id },
      include: {
        slot: true,
        guests: true,
        syncLogs: true,
      },
    });

    return NextResponse.json(
      {
        booking: finalBooking,
        syncStatus: {
          google: googleSuccess ? "SUCCESS" : "FAILED",
          odoo: odooClient.isConfigured()
            ? odooSuccess
              ? "SUCCESS"
              : "FAILED"
            : "NOT_CONFIGURED",
        },
        syncResults,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}