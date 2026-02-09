// app/api/odoo/connect/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { odooClient } from "@/lib/odoo";

/**
 * GET /api/odoo/connect
 * Test Odoo credentials and store configuration if valid
 */
export async function GET() {
  try {
    // Check if Odoo is configured in environment variables
    if (!odooClient.isConfigured()) {
      return NextResponse.json(
        {
          error: "Odoo is not configured. Please set ODOO_URL, ODOO_DB, ODOO_USERNAME, and ODOO_API_KEY in your environment variables.",
        },
        { status: 400 }
      );
    }

    // Test authentication by attempting to authenticate
    try {
      // This will throw an error if credentials are invalid
      await odooClient.testConnection();

      // Store the connection details in the database
      await prisma.odooAuth.upsert({
        where: { id: 1 },
        update: {
          url: process.env.ODOO_URL!,
          database: process.env.ODOO_DB!,
          username: process.env.ODOO_USERNAME!,
          isActive: true,
          lastSyncedAt: new Date(),
        },
        create: {
          url: process.env.ODOO_URL!,
          database: process.env.ODOO_DB!,
          username: process.env.ODOO_USERNAME!,
          isActive: true,
        },
      });

      // Redirect back to integrations page with success
      return NextResponse.redirect(
        new URL("/dashboard/integrations?success=odoo_connected", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000")
      );
    } catch (authError) {
      console.error("Odoo authentication failed:", authError);
      return NextResponse.json(
        {
          error: "Failed to authenticate with Odoo. Please check your credentials.",
          details: authError instanceof Error ? authError.message : String(authError),
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Odoo connect error:", error);
    return NextResponse.json(
      { error: "Failed to connect to Odoo" },
      { status: 500 }
    );
  }
}