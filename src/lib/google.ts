import prisma from "./prisma";

export async function getAccessToken() {
  // Get stored refresh token from database
  const googleAuth = await prisma.googleAuth.findUnique({ where: { id: 1 } });
  if (!googleAuth) throw new Error("Google Calendar not connected");

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

  const data = await res.json();
  return data.access_token; // Fresh token valid for 1 hour
}