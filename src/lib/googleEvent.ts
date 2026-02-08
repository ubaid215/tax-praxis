import { getAccessToken } from "./google";
import type { GoogleCalendarEventParams, GoogleCalendarEvent } from "@/types/google-calendar";

export async function createCalendarEvent({
  summary,
  description,
  startDateTime,
  endDateTime,
  attendees = [],
  location,
  timeZone = "UTC"
}: GoogleCalendarEventParams): Promise<GoogleCalendarEvent> {
  const accessToken = await getAccessToken();

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary,
        description,
        location,
        start: { 
          dateTime: startDateTime,
          timeZone 
        },
        end: { 
          dateTime: endDateTime,
          timeZone 
        },
        attendees: attendees.map(att => ({
          email: att.email,
          displayName: att.displayName,
        })),
        conferenceData: {
          createRequest: {
            requestId: `meet-${Date.now()}`,
            conferenceSolutionKey: { type: "hangoutsMeet" }
          }
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 }, // 1 day before
            { method: "popup", minutes: 30 }        // 30 min before
          ]
        }
      }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to create calendar event: ${error}`);
  }

  return res.json();
}

export async function updateCalendarEvent(
  eventId: string, 
  updates: Partial<GoogleCalendarEventParams>
): Promise<GoogleCalendarEvent> {
  const accessToken = await getAccessToken();
  
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update calendar event");
  }

  return res.json();
}

export async function deleteCalendarEvent(eventId: string): Promise<void> {
  const accessToken = await getAccessToken();
  
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete calendar event");
  }
}