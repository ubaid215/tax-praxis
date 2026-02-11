// app/api/google/auth/route.ts
import { NextResponse } from "next/server";

/**
 * GET /api/google/auth
 * Initiate Google OAuth flow
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const returnTo = url.searchParams.get('returnTo') || '/admin/settings';

  // Build OAuth URL
  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  
  authUrl.searchParams.set("client_id", process.env.GOOGLE_CLIENT_ID!);
  authUrl.searchParams.set("redirect_uri", process.env.GOOGLE_REDIRECT_URI!);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", "https://www.googleapis.com/auth/calendar");
  authUrl.searchParams.set("access_type", "offline");
  authUrl.searchParams.set("prompt", "consent");
  
  // Store returnTo in state parameter so we can redirect back after OAuth
  authUrl.searchParams.set("state", returnTo);

  // Redirect to Google's OAuth consent screen
  return NextResponse.redirect(authUrl.toString());
}