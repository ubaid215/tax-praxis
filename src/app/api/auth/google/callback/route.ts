/// api/google/callback
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { GoogleTokenResponse } from "@/types/google-calendar";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      new URL("/dashboard/settings?error=no_code", req.url)
    );
  }

  try {
    // Exchange code for tokens
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
        grant_type: "authorization_code",
      }),
    });

    const tokens: GoogleTokenResponse = await tokenRes.json();

    if (!tokens.refresh_token) {
      return NextResponse.redirect(
        new URL("/dashboard/settings?error=no_refresh_token", req.url)
      );
    }

    // Store refresh token in database
    await prisma.googleAuth.upsert({
      where: { id: 1 },
      update: {
        refreshToken: tokens.refresh_token,
      },
      create: {
        refreshToken: tokens.refresh_token,
      },
    });

    // Redirect back to settings with success
    return NextResponse.redirect(
      new URL("/dashboard/settings?success=connected", req.url)
    );
  } catch (error) {
    console.error("OAuth callback error:", error);
    return NextResponse.redirect(
      new URL("/dashboard/settings?error=auth_failed", req.url)
    );
  }
}