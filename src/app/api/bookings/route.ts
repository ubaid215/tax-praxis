import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createCalendarEvent } from "@/lib/googleEvent";

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        slot: true,
        guests: true,
        user: true,
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

    // 1. Create booking in database with PENDING status
    // Why PENDING? Because we need to:
    // - Reserve the slot first
    // - Then sync with Google Calendar
    // - Only mark as CONFIRMED after successful sync
    // This prevents race conditions and ensures data consistency
    // It shoud be display confimed even when one or both sync with their individual status 
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
        guests: true 
      },
    });

    // 2. Mark slot as booked to prevent double-booking
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
          slotTime: booking.slot.startTime,
        },
      },
    });

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
            displayName: booking.fullName 
          }
        ],
        timeZone: booking.timezone,
      });

      // 5. Update booking to CONFIRMED after successful sync
      await prisma.booking.update({
        where: { id: booking.id },
        data: {
          googleEventId: event.id,
          googleSyncedAt: new Date(),
          status: "CONFIRMED", // Now we can confirm
        },
      });

      // 6. Log successful sync
      await prisma.syncLog.create({
        data: {
          bookingId: booking.id,
          system: "GOOGLE_CALENDAR",
          action: "CREATE",
          status: "SUCCESS",
          metadata: { 
            eventId: event.id, 
            hangoutLink: event.hangoutLink 
          },
        },
      });

      // 7. Create audit log for successful sync
      await prisma.auditLog.create({
        data: {
          action: "SYNC",
          entity: "Booking",
          entityId: booking.id,
          userId: body.userId || null,
          meta: {
            system: "GOOGLE_CALENDAR",
            status: "SUCCESS",
            eventId: event.id,
          },
        },
      });

      return NextResponse.json({ 
        booking: {
          ...booking,
          status: "CONFIRMED",
          googleEventId: event.id,
        }, 
        event: {
          id: event.id,
          link: event.htmlLink,
          meetLink: event.hangoutLink
        }
      }, { status: 201 });

    } catch (googleError) {
      console.error("Google Calendar sync failed:", googleError);

      // Log failed sync
      await prisma.syncLog.create({
        data: {
          bookingId: booking.id,
          system: "GOOGLE_CALENDAR",
          action: "CREATE",
          status: "FAILED",
          error: googleError instanceof Error ? googleError.message : String(googleError),
        },
      });

      // Create audit log for failed sync
      await prisma.auditLog.create({
        data: {
          action: "SYNC",
          entity: "Booking",
          entityId: booking.id,
          userId: body.userId || null,
          meta: {
            system: "GOOGLE_CALENDAR",
            status: "FAILED",
            error: googleError instanceof Error ? googleError.message : String(googleError),
          },
        },
      });

      // Booking remains PENDING if Google sync fails
      // This allows admin to retry sync manually later
      return NextResponse.json({ 
        booking,
        warning: "Booking created but Google Calendar sync failed. Status remains PENDING."
      }, { status: 201 });
    }

  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}