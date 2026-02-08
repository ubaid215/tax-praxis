import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get date ranges
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Total bookings
    const totalBookings = await prisma.booking.count();

    // Today's bookings
    const todayBookings = await prisma.booking.count({
      where: {
        createdAt: {
          gte: startOfToday,
        },
      },
    });

    // This month's bookings
    const thisMonthBookings = await prisma.booking.count({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
    });

    // Last month's bookings
    const lastMonthBookings = await prisma.booking.count({
      where: {
        createdAt: {
          gte: startOfLastMonth,
          lte: endOfLastMonth,
        },
      },
    });

    // Pending bookings
    const pendingBookings = await prisma.booking.count({
      where: {
        status: 'PENDING',
      },
    });

    // Confirmed bookings
    const confirmedBookings = await prisma.booking.count({
      where: {
        status: 'CONFIRMED',
      },
    });

    // Cancelled bookings
    const cancelledBookings = await prisma.booking.count({
      where: {
        status: 'CANCELLED',
      },
    });

    // Completed bookings
    const completedBookings = await prisma.booking.count({
      where: {
        status: 'COMPLETED',
      },
    });

    // Available slots
    const availableSlots = await prisma.timeSlot.count({
      where: {
        isBooked: false,
        startTime: {
          gte: now,
        },
      },
    });

    // Booked slots
    const bookedSlots = await prisma.timeSlot.count({
      where: {
        isBooked: true,
      },
    });

    // Recent bookings
    const recentBookings = await prisma.booking.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        slot: true,
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    // Upcoming bookings (next 7 days)
    const nextWeek = new Date(now);
    nextWeek.setDate(now.getDate() + 7);

    const upcomingBookings = await prisma.booking.findMany({
      where: {
        slot: {
          startTime: {
            gte: now,
            lte: nextWeek,
          },
        },
        status: {
          in: ['CONFIRMED', 'PENDING'],
        },
      },
      orderBy: {
        slot: {
          startTime: 'asc',
        },
      },
      include: {
        slot: true,
      },
      take: 10,
    });

    // Sync status
    const googleSyncSuccess = await prisma.syncLog.count({
      where: {
        system: 'GOOGLE_CALENDAR',
        status: 'SUCCESS',
      },
    });

    const googleSyncFailed = await prisma.syncLog.count({
      where: {
        system: 'GOOGLE_CALENDAR',
        status: 'FAILED',
      },
    });

    // Calculate growth
    const monthlyGrowth =
      lastMonthBookings > 0
        ? ((thisMonthBookings - lastMonthBookings) / lastMonthBookings) * 100
        : 0;

    return NextResponse.json({
      stats: {
        total: totalBookings,
        today: todayBookings,
        thisMonth: thisMonthBookings,
        lastMonth: lastMonthBookings,
        monthlyGrowth: Math.round(monthlyGrowth),
        pending: pendingBookings,
        confirmed: confirmedBookings,
        cancelled: cancelledBookings,
        completed: completedBookings,
        availableSlots,
        bookedSlots,
      },
      sync: {
        google: {
          success: googleSyncSuccess,
          failed: googleSyncFailed,
        },
      },
      recentBookings,
      upcomingBookings,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}