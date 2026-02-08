"use client";

import { useEffect, useState } from "react";

type Slot = {
  id: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
};

type Availability = {
  id: string;
  date: string;
  startAt: string;
  endAt: string;
  slots: Slot[];
};

export default function AvailabilityPage() {
  const [availabilities, setAvailabilities] = useState<Availability[]>([]);
  const [loading, setLoading] = useState(false);

  // ⚠️ Replace with logged-in user
  const userId = "USER_ID_HERE";

  useEffect(() => {
    fetchAvailability();
  }, []);

  async function fetchAvailability() {
    const res = await fetch(`/api/availability?userId=${userId}`);
    const data = await res.json();
    setAvailabilities(data);
  }

  async function createAvailability() {
    setLoading(true);

    await fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        date: "2026-02-10",
        startAt: "2026-02-10T09:00:00Z",
        endAt: "2026-02-10T17:00:00Z",
        slotDuration: 30,
      }),
    });

    await fetchAvailability();
    setLoading(false);
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Availability</h1>

      <button
        onClick={createAvailability}
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded mb-6"
      >
        {loading ? "Creating..." : "Add Availability"}
      </button>

      <div className="space-y-6">
        {availabilities.map((a) => (
          <div
            key={a.id}
            className="border rounded-lg p-4"
          >
            <h2 className="font-semibold">
              {new Date(a.date).toDateString()}
            </h2>

            <p className="text-sm text-gray-600">
              {new Date(a.startAt).toLocaleTimeString()} –{" "}
              {new Date(a.endAt).toLocaleTimeString()}
            </p>

            <div className="grid grid-cols-3 gap-2 mt-3">
              {a.slots.map((slot) => (
                <div
                  key={slot.id}
                  className={`text-xs p-2 rounded border ${
                    slot.isBooked
                      ? "bg-red-100"
                      : "bg-green-100"
                  }`}
                >
                  {new Date(slot.startTime).toLocaleTimeString()} -{" "}
                  {new Date(slot.endTime).toLocaleTimeString()}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
