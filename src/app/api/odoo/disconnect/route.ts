// app/api/odoo/disconnect/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/odoo/disconnect
 * Disconnect Odoo integration by deactivating the stored auth
 */
export async function POST() {
  try {
    const odooAuth = await prisma.odooAuth.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });

    if (!odooAuth) {
      return NextResponse.json(
        { error: "No active Odoo connection found" },
        { status: 404 }
      );
    }

    // Deactivate the connection instead of deleting
    await prisma.odooAuth.update({
      where: { id: odooAuth.id },
      data: {
        isActive: false,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Odoo disconnected successfully",
    });
  } catch (error) {
    console.error("Error disconnecting Odoo:", error);
    return NextResponse.json(
      { error: "Failed to disconnect Odoo" },
      { status: 500 }
    );
  }
}