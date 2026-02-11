// app/api/integrations/status/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Check Google Calendar integration
    const googleAuth = await prisma.googleAuth.findFirst({
      orderBy: { createdAt: "desc" },
    });

    // ✅ FIX: Check Odoo integration from OdooAuth table (not User table)
    const odooAuth = await prisma.odooAuth.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });

    // Get sync statistics
    const [
      googleSuccess,
      googleFailed,
      googlePending,
      odooSuccess,
      odooFailed,
      odooPending,
    ] = await Promise.all([
      prisma.syncLog.count({
        where: { system: "GOOGLE_CALENDAR", status: "SUCCESS" },
      }),
      prisma.syncLog.count({
        where: { system: "GOOGLE_CALENDAR", status: "FAILED" },
      }),
      prisma.syncLog.count({
        where: { system: "GOOGLE_CALENDAR", status: "PENDING" },
      }),
      prisma.syncLog.count({
        where: { system: "ODOO", status: "SUCCESS" },
      }),
      prisma.syncLog.count({
        where: { system: "ODOO", status: "FAILED" },
      }),
      prisma.syncLog.count({
        where: { system: "ODOO", status: "PENDING" },
      }),
    ]);

    console.log('📊 Integration Status Response:', {
      google: {
        isConnected: !!googleAuth,
        calendarId: googleAuth?.calendarId,
      },
      odoo: {
        isConnected: !!odooAuth,
        url: odooAuth?.url,
        database: odooAuth?.database,
        username: odooAuth?.username,
      }
    });

    return NextResponse.json({
      google: {
        isConnected: !!googleAuth,
        calendarId: googleAuth?.calendarId || undefined,
        connectedAt: googleAuth?.createdAt?.toISOString() || undefined,
      },
      odoo: {
        isConnected: !!odooAuth,
        url: odooAuth?.url || undefined,
        database: odooAuth?.database || undefined,
        username: odooAuth?.username || undefined,
        connectedAt: odooAuth?.createdAt?.toISOString() || undefined,
        lastSyncedAt: odooAuth?.lastSyncedAt?.toISOString() || undefined,
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
    console.error("Failed to fetch integration status:", error);
    return NextResponse.json(
      { error: "Failed to fetch integration status" },
      { status: 500 }
    );
  }
}