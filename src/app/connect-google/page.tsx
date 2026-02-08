"use client";

export default function ConnectGoogle() {
  const handleConnect = () => {
    const root = "https://accounts.google.com/o/oauth2/v2/auth";
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
      response_type: "code",
      scope: "https://www.googleapis.com/auth/calendar", // Permission to manage calendar
      access_type: "offline", // CRITICAL: Get refresh token
      prompt: "consent"        // Force showing consent screen
    });

    window.location.href = `${root}?${params.toString()}`;
  };

  return (
    <button onClick={handleConnect}>
      Connect Google Calendar
    </button>
  );
}