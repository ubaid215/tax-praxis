import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/availability
 * Create availability + timeslots
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      userId,
      date,
      startAt,
      endAt,
      slotDuration = 30, // minutes
    } = body;

    if (!userId || !date || !startAt || !endAt) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const availability = await prisma.availability.create({
      data: {
        userId,
        date: new Date(date),
        startAt: new Date(startAt),
        endAt: new Date(endAt),
      },
    });

    // ---------- SLOT GENERATION ----------
    const slots = [];
    let current = new Date(startAt);
    const end = new Date(endAt);

    while (current < end) {
      const next = new Date(
        current.getTime() + slotDuration * 60 * 1000
      );

      if (next > end) break;

      slots.push({
        availabilityId: availability.id,
        startTime: current,
        endTime: next,
      });

      current = next;
    }

    if (slots.length > 0) {
      await prisma.timeSlot.createMany({ data: slots });
    }

    return NextResponse.json(
      { success: true, availabilityId: availability.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Availability POST error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/availability
 * Optional filters: userId, date
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const date = searchParams.get("date");

    const availability = await prisma.availability.findMany({
      where: {
        ...(userId && { userId }),
        ...(date && {
          date: new Date(date),
        }),
      },
      include: {
        slots: {
          orderBy: { startTime: "asc" },
        },
      },
      orderBy: { date: "asc" },
    });

    return NextResponse.json(availability);
  } catch (error) {
    console.error("Availability GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
