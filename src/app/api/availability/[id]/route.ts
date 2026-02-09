import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single availability
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const availability = await prisma.availability.findUnique({
      where: { id: params.id },
      include: {
        user: {
          select: {
            id: true,   
            name: true,
            email: true,
          },
        },
        slots: {
          orderBy: { startTime: "asc" },
        },
      },
    });

    if (!availability) {
      return NextResponse.json(
        { error: "Availability not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ availability });
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json(
      { error: "Failed to fetch availability" },
      { status: 500 }
    );
  }
}

// UPDATE availability
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { startAt, endAt, slotDuration = 30 } = body;

    const availability = await prisma.availability.findUnique({
      where: { id: params.id },
      include: { slots: true },
    });

    if (!availability) {
      return NextResponse.json(
        { error: "Availability not found" },
        { status: 404 }
      );
    }

    // Check if any slots are booked
    const hasBookedSlots = availability.slots.some((slot) => slot.isBooked);
    if (hasBookedSlots) {
      return NextResponse.json(
        { error: "Cannot update availability with booked slots" },
        { status: 400 }
      );
    }

    // Delete old slots
    await prisma.timeSlot.deleteMany({
      where: { availabilityId: params.id },
    });

    // Update availability
    const startTime = new Date(startAt);
    const endTime = new Date(endAt);

    const updatedAvailability = await prisma.availability.update({
      where: { id: params.id },
      data: {
        startAt: startTime,
        endAt: endTime,
      },
    });

    // Generate new slots
    const slots = [];
    let currentTime = new Date(startTime);

    while (currentTime < endTime) {
      const slotEnd = new Date(currentTime.getTime() + slotDuration * 60000);
      
      if (slotEnd <= endTime) {
        slots.push({
          availabilityId: params.id,
          startTime: new Date(currentTime),
          endTime: slotEnd,
          isBooked: false,
        });
      }

      currentTime = slotEnd;
    }

    await prisma.timeSlot.createMany({
      data: slots,
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        action: "UPDATE",
        entity: "Availability",
        entityId: params.id,
        userId: availability.userId,
        meta: {
          startAt,
          endAt,
          slotsUpdated: slots.length,
        },
      },
    });

    const completeAvailability = await prisma.availability.findUnique({
      where: { id: params.id },
      include: {
        slots: {
          orderBy: { startTime: "asc" },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({ availability: completeAvailability });
  } catch (error) {
    console.error("Error updating availability:", error);
    return NextResponse.json(
      { error: "Failed to update availability" },
      { status: 500 }
    );
  }
}

// DELETE availability
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const availability = await prisma.availability.findUnique({
      where: { id: params.id },
      include: { slots: true },
    });

    if (!availability) {
      return NextResponse.json(
        { error: "Availability not found" },
        { status: 404 }
      );
    }

    // Check if any slots are booked
    const hasBookedSlots = availability.slots.some((slot) => slot.isBooked);
    if (hasBookedSlots) {
      return NextResponse.json(
        { error: "Cannot delete availability with booked slots" },
        { status: 400 }
      );
    }

    // Delete availability (cascade will delete slots)
    await prisma.availability.delete({
      where: { id: params.id },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        action: "DELETE",
        entity: "Availability",
        entityId: params.id,
        userId: availability.userId,
        meta: {
          date: availability.date,
          slotsDeleted: availability.slots.length,
        },
      },
    });

    return NextResponse.json({ message: "Availability deleted successfully" });
  } catch (error) {
    console.error("Error deleting availability:", error);
    return NextResponse.json(
      { error: "Failed to delete availability" },
      { status: 500 }
    );
  }
}