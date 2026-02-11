import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const googleAuth = await prisma.googleAuth.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!googleAuth) {
      return NextResponse.json({
        isConnected: false,
      });
    }

    return NextResponse.json({
      isConnected: true,
      calendarId: googleAuth.calendarId,
      connectedAt: googleAuth.createdAt.toISOString(),
    });
  } catch (error) {
    console.error("Error checking Google auth status:", error);
    return NextResponse.json(
      { error: "Failed to check status" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    // Delete all Google auth records
    await prisma.googleAuth.deleteMany({});

    return NextResponse.json({
      success: true,
      message: "Google Calendar disconnected successfully",
    });
  } catch (error) {
    console.error("Error disconnecting Google Calendar:", error);
    return NextResponse.json(
      { error: "Failed to disconnect" },
      { status: 500 }
    );
  }
}