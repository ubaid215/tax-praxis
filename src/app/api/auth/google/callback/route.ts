// app/api/auth/google/callback/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { GoogleTokenResponse } from "@/types/google-calendar";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state"); // This contains the returnTo path
  const returnTo = state || "/admin/settings"; // Default to settings if no state

  if (!code) {
    return NextResponse.redirect(
      new URL(`${returnTo}?error=no_code`, url.origin)
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
        new URL(`${returnTo}?error=no_refresh_token`, url.origin)
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

    console.log("✅ Google Calendar connected successfully");

    // Redirect back to the page that initiated the OAuth flow
    return NextResponse.redirect(
      new URL(`${returnTo}?success=google_connected`, url.origin)
    );
  } catch (error) {
    console.error("OAuth callback error:", error);
    return NextResponse.redirect(
      new URL(`${returnTo}?error=auth_failed`, url.origin)
    );
  }
}