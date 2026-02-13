// app/api/odoo/connect/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { odooClient } from "@/lib/odoo";

/**
 * POST /api/odoo/connect
 * Test Odoo credentials and store connection in database
 */
export async function POST() {
  try {
    // Check if Odoo is configured in environment variables
    if (!odooClient.isConfigured()) {
      return NextResponse.json(
        {
          success: false,
          error: "Odoo is not configured. Please set ODOO_URL, ODOO_DB, ODOO_USERNAME, and ODOO_API_KEY in your environment variables.",
        },
        { status: 400 }
      );
    }

    // Test authentication by attempting to authenticate
    try {
      await odooClient.testConnection();

      // Get config from environment to store in database
      const config = {
        url: process.env.ODOO_URL?.replace(/\/$/, '') || "",
        database: process.env.ODOO_DB || "",
        username: process.env.ODOO_USERNAME || "",
      };

      // Store connection in database
      const odooAuth = await prisma.odooAuth.upsert({
        where: { id: 1 },
        update: {
          url: config.url,
          database: config.database,
          username: config.username,
          isActive: true,
          lastSyncedAt: new Date(),
        },
        create: {
          url: config.url,
          database: config.database,
          username: config.username,
          isActive: true,
        },
      });

      console.log("✅ Odoo connection stored in database:", odooAuth);

      return NextResponse.json({
        success: true,
        isConnected: true,
        url: odooAuth.url,
        database: odooAuth.database,
        username: odooAuth.username,
        connectedAt: odooAuth.createdAt.toISOString(),
        message: "Odoo connected successfully",
      });
    } catch (authError) {
      console.error("❌ Odoo authentication failed:", authError);
      
      return NextResponse.json(
        {
          success: false,
          error: "Authentication failed. Please check your Odoo credentials.",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("❌ Odoo connect error:", error);
    
    return NextResponse.json(
      {
        success: false,
        error: "Failed to connect to Odoo. Please try again.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/odoo/connect
 * Legacy support - redirects to integrations page
 */
export async function GET() {
  // Redirect to integrations page with info message
  return NextResponse.redirect(
    new URL(
      "/admin/integrations?info=use_connect_button",
      process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    )
  );
}