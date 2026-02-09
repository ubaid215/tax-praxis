"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, Plus, Edit2, Trash2, Loader2 } from "lucide-react";

interface Availability {
  id: string;
  date: string;
  startAt: string;
  endAt: string;
  user: {
    name: string;
    email: string;
  };
  slots: Array<{
    id: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
  }>;
}

export default function AvailabilityPage() {
  const [availabilities, setAvailabilities] = useState<Availability[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    date: "",
    startAt: "",
    endAt: "",
    slotDuration: 30,
  });

  useEffect(() => {
    fetchAvailabilities();
  }, []);

  const fetchAvailabilities = async () => {
    try {
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        console.error("No user found in localStorage");
        setAvailabilities([]);
        setLoading(false);
        return;
      }

      const user = JSON.parse(userStr);
      if (!user.id) {
        console.error("User ID not found");
        setAvailabilities([]);
        setLoading(false);
        return;
      }

      const res = await fetch(`/api/availability?userId=${user.id}`);
      
      if (!res.ok) {
        console.error("API request failed:", res.status);
        setAvailabilities([]);
        setLoading(false);
        return;
      }

      const data = await res.json();
      
      // Handle different response formats
      if (Array.isArray(data)) {
        setAvailabilities(data);
      } else if (data.availabilities && Array.isArray(data.availabilities)) {
        setAvailabilities(data.availabilities);
      } else {
        console.error("Unexpected API response format:", data);
        setAvailabilities([]);
      }
    } catch (error) {
      console.error("Failed to fetch availabilities:", error);
      setAvailabilities([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get user from localStorage
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      alert("Session expired. Please log in again.");
      window.location.href = "/login";
      return;
    }

    const user = JSON.parse(userStr);
    
    if (!user.id) {
      alert("Invalid user session. Please log in again.");
      window.location.href = "/login";
      return;
    }

    const dateTime = new Date(formData.date);
    const [startHour, startMin] = formData.startAt.split(":");
    const [endHour, endMin] = formData.endAt.split(":");

    const startAt = new Date(dateTime);
    startAt.setHours(parseInt(startHour), parseInt(startMin), 0);

    const endAt = new Date(dateTime);
    endAt.setHours(parseInt(endHour), parseInt(endMin), 0);

    // Validate times
    if (startAt >= endAt) {
      alert("Start time must be before end time");
      return;
    }

    const payload = {
      userId: user.id,
      date: dateTime.toISOString(),
      startAt: startAt.toISOString(),
      endAt: endAt.toISOString(),
      slotDuration: formData.slotDuration,
    };

    try {
      const url = editingId
        ? `/api/availability/${editingId}`
        : "/api/availability";
      const method = editingId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        // Show specific error message from API
        alert(data.error || "Failed to save availability");
        return;
      }

      // Success!
      alert(data.message || "Availability saved successfully!");
      setShowModal(false);
      setEditingId(null);
      setFormData({ date: "", startAt: "", endAt: "", slotDuration: 30 });
      fetchAvailabilities();
    } catch (error) {
      console.error("Failed to save availability:", error);
      alert("Network error. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this availability?")) return;

    try {
      const res = await fetch(`/api/availability/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchAvailabilities();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete availability");
      }
    } catch (error) {
      console.error("Failed to delete availability:", error);
      alert("Network error. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Availability</h1>
          <p className="text-gray-600 mt-1">
            Manage your available time slots
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
        >
          <Plus size={20} />
          Add Availability
        </button>
      </div>

      {/* Availability Grid */}
      {!availabilities || availabilities.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">No availability set</p>
          <p className="text-gray-500 text-sm mt-1">
            Click Add Availability to create your schedule
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availabilities.map((avail) => (
            <AvailabilityCard
              key={avail.id}
              availability={avail}
              onEdit={() => {
                setEditingId(avail.id);
                const date = new Date(avail.date);
                const startAt = new Date(avail.startAt);
                const endAt = new Date(avail.endAt);
                setFormData({
                  date: date.toISOString().split("T")[0],
                  startAt: startAt.toTimeString().slice(0, 5),
                  endAt: endAt.toTimeString().slice(0, 5),
                  slotDuration: 30,
                });
                setShowModal(true);
              }}
              onDelete={() => handleDelete(avail.id)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingId ? "Edit" : "Add"} Availability
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Start Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Time
                </label>
                <input
                  type="time"
                  required
                  value={formData.startAt}
                  onChange={(e) =>
                    setFormData({ ...formData, startAt: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* End Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Time
                </label>
                <input
                  type="time"
                  required
                  value={formData.endAt}
                  onChange={(e) =>
                    setFormData({ ...formData, endAt: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Slot Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slot Duration (minutes)
                </label>
                <select
                  value={formData.slotDuration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      slotDuration: parseInt(e.target.value),
                    })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingId(null);
                    setFormData({
                      date: "",
                      startAt: "",
                      endAt: "",
                      slotDuration: 30,
                    });
                  }}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition"
                >
                  {editingId ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function AvailabilityCard({
  availability,
  onEdit,
  onDelete,
}: {
  availability: Availability;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const date = new Date(availability.date);
  const startTime = new Date(availability.startAt);
  const endTime = new Date(availability.endAt);
  
  // Safety check for slots
  const slots = availability.slots || [];
  const bookedSlots = slots.filter((s) => s.isBooked).length;
  const totalSlots = slots.length;

  const hasBookedSlots = bookedSlots > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Calendar className="text-white" size={24} />
        </div>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            disabled={hasBookedSlots}
            className="p-2 hover:bg-gray-100 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            title={
              hasBookedSlots
                ? "Cannot edit - has booked slots"
                : "Edit availability"
            }
          >
            <Edit2 size={16} className="text-gray-600" />
          </button>
          <button
            onClick={onDelete}
            disabled={hasBookedSlots}
            className="p-2 hover:bg-red-50 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            title={
              hasBookedSlots
                ? "Cannot delete - has booked slots"
                : "Delete availability"
            }
          >
            <Trash2 size={16} className="text-red-600" />
          </button>
        </div>
      </div>

      {/* Date */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </h3>

      {/* Time */}
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <Clock size={16} />
        <span className="text-sm">
          {startTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          -{" "}
          {endTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      {/* Slots */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total Slots</span>
          <span className="font-semibold text-gray-800">{totalSlots}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Booked</span>
          <span
            className={`font-semibold ${
              bookedSlots > 0 ? "text-blue-600" : "text-gray-800"
            }`}
          >
            {bookedSlots}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Available</span>
          <span className="font-semibold text-green-600">
            {totalSlots - bookedSlots}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all"
          style={{ width: totalSlots > 0 ? `${(bookedSlots / totalSlots) * 100}%` : '0%' }}
        />
      </div>
    </div>
  );
}