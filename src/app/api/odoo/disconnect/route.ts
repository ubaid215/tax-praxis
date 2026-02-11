// app/api/odoo/disconnect/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/odoo/disconnect
 * Disconnect Odoo integration by marking it as inactive
 */
export async function POST() {
  try {
    // Mark all Odoo auth records as inactive
    await prisma.odooAuth.updateMany({
      where: { isActive: true },
      data: { isActive: false },
    });

    return NextResponse.json({
      success: true,
      message: "Odoo disconnected successfully",
    });
  } catch (error) {
    console.error("Failed to disconnect Odoo:", error);
    return NextResponse.json(
      { error: "Failed to disconnect Odoo" },
      { status: 500 }
    );
  }
}