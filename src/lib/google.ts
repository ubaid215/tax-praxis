// lib/google.ts
import { prisma } from "./prisma";

export async function getAccessToken(): Promise<string> {
  console.log("🔍 Attempting to fetch GoogleAuth record...");
  
  // Try multiple approaches
  const googleAuthById = await prisma.googleAuth.findUnique({ 
    where: { id: 1 } 
  });
  
  const allGoogleAuth = await prisma.googleAuth.findMany();
  const googleAuthFirst = await prisma.googleAuth.findFirst({
    orderBy: { updatedAt: 'desc' }
  });
  
  console.log("📊 GoogleAuth Status:", {
    byId: googleAuthById ? "✅ Found" : "❌ Not found",
    count: allGoogleAuth.length,
    allRecords: allGoogleAuth.map(r => ({ id: r.id, hasToken: !!r.refreshToken })),
    latest: googleAuthFirst ? { id: googleAuthFirst.id } : null
  });

  // Use the most recent record if id:1 doesn't exist
  const googleAuth = googleAuthById || googleAuthFirst;
  
  if (!googleAuth) {
    console.error("❌ No GoogleAuth records found in database");
    console.error("💡 Possible causes:");
    console.error("   1. OAuth callback failed to save");
    console.error("   2. Using different database in dev/prod");
    console.error("   3. Record was deleted");
    throw new Error("Google Calendar not connected");
  }

  console.log("✓ Using GoogleAuth record:", { 
    id: googleAuth.id, 
    calendarId: googleAuth.calendarId,
    createdAt: googleAuth.createdAt 
  });

  // Exchange refresh token for NEW access token
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: googleAuth.refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("❌ Token refresh failed:", error);
    throw new Error(`Failed to refresh access token: ${error}`);
  }

  const data = await res.json();
  
  if (!data.access_token) {
    console.error("❌ No access token in response:", data);
    throw new Error("Invalid token response from Google");
  }

  console.log("✅ Access token refreshed successfully");
  return data.access_token;
}