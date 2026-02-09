// app/api/odoo/status/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/odoo/status
 * Check if Odoo is connected and return connection details
 */
export async function GET() {
  try {
    const odooAuth = await prisma.odooAuth.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });

    if (!odooAuth) {
      return NextResponse.json({
        isConnected: false,
      });
    }

    return NextResponse.json({
      isConnected: true,
      url: odooAuth.url,
      database: odooAuth.database,
      username: odooAuth.username,
      connectedAt: odooAuth.createdAt.toISOString(),
      lastSyncedAt: odooAuth.lastSyncedAt?.toISOString(),
    });
  } catch (error) {
    console.error("Error checking Odoo auth status:", error);
    return NextResponse.json(
      { error: "Failed to check status" },
      { status: 500 }
    );
  }
}