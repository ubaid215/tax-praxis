import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Check Google Calendar connection
    const googleAuth = await prisma.googleAuth.findFirst({
      orderBy: { createdAt: 'desc' },
    });

    // Check Odoo connection (check if any user has odoo credentials)
    const odooUser = await prisma.user.findFirst({
      where: {
        AND: [
          { odooUserId: { not: null } },
          { odooApiKey: { not: null } },
        ],
      },
      select: {
        odooUserId: true,
        createdAt: true,
      },
    });

    // Get sync stats for Google Calendar
    const googleSuccess = await prisma.syncLog.count({
      where: {
        system: 'GOOGLE_CALENDAR',
        status: 'SUCCESS',
      },
    });

    const googleFailed = await prisma.syncLog.count({
      where: {
        system: 'GOOGLE_CALENDAR',
        status: 'FAILED',
      },
    });

    const googlePending = await prisma.syncLog.count({
      where: {
        system: 'GOOGLE_CALENDAR',
        status: 'PENDING',
      },
    });

    // Get sync stats for Odoo
    const odooSuccess = await prisma.syncLog.count({
      where: {
        system: 'ODOO',
        status: 'SUCCESS',
      },
    });

    const odooFailed = await prisma.syncLog.count({
      where: {
        system: 'ODOO',
        status: 'FAILED',
      },
    });

    const odooPending = await prisma.syncLog.count({
      where: {
        system: 'ODOO',
        status: 'PENDING',
      },
    });

    return NextResponse.json({
      google: {
        isConnected: !!googleAuth,
        calendarId: googleAuth?.calendarId,
        connectedAt: googleAuth?.createdAt.toISOString(),
      },
      odoo: {
        isConnected: !!odooUser,
        userId: odooUser?.odooUserId,
        connectedAt: odooUser?.createdAt.toISOString(),
      },
      syncStats: {
        google: {
          success: googleSuccess,
          failed: googleFailed,
          pending: googlePending,
        },
        odoo: {
          success: odooSuccess,
          failed: odooFailed,
          pending: odooPending,
        },
      },
    });
  } catch (error) {
    console.error('Error fetching integration status:', error);
    return NextResponse.json(
      { error: 'Failed to fetch status' },
      { status: 500 }
    );
  }
}