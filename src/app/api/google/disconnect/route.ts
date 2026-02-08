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