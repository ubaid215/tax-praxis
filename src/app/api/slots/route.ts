import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const slots = await prisma.timeSlot.findMany({
      include: {
        availability: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
        booking: {
          select: {
            fullName: true,
            email: true,
          },
        },
      },
      orderBy: {
        startTime: 'desc',
      },
      take: 100, // Limit to recent 100 slots
    });

    return NextResponse.json({ slots });
  } catch (error) {
    console.error('Error fetching slots:', error);
    return NextResponse.json(
      { error: 'Failed to fetch slots' },
      { status: 500 }
    );
  }
}