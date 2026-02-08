'use client';

import { useEffect, useState } from 'react';

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  availability: {
    id: string;
    date: string;
    user: {
      name: string;
    };
  };
  booking?: {
    fullName: string;
    email: string;
  };
}

export default function SlotsPage() {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'ALL' | 'AVAILABLE' | 'BOOKED'>('ALL');

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    try {
      const res = await fetch('/api/slots');
      const data = await res.json();
      setSlots(data.slots);
    } catch (error) {
      console.error('Failed to fetch slots:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSlots = slots.filter((slot) => {
    if (filter === 'AVAILABLE') return !slot.isBooked;
    if (filter === 'BOOKED') return slot.isBooked;
    return true;
  });

  const stats = {
    total: slots.length,
    available: slots.filter((s) => !s.isBooked).length,
    booked: slots.filter((s) => s.isBooked).length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Time Slots</h1>
        <p className="text-slate-600 mt-1">Manage availability and booking slots</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <p className="text-sm font-medium text-blue-700">Total Slots</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{stats.total}</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
          <p className="text-sm font-medium text-green-700">Available</p>
          <p className="text-3xl font-bold text-green-900 mt-2">{stats.available}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
          <p className="text-sm font-medium text-purple-700">Booked</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">{stats.booked}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex gap-3">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
              filter === 'ALL'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Slots ({stats.total})
          </button>
          <button
            onClick={() => setFilter('AVAILABLE')}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
              filter === 'AVAILABLE'
                ? 'bg-green-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Available ({stats.available})
          </button>
          <button
            onClick={() => setFilter('BOOKED')}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
              filter === 'BOOKED'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Booked ({stats.booked})
          </button>
        </div>
      </div>

      {/* Slots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSlots.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200">
            <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-slate-600 font-medium">No slots found</p>
          </div>
        ) : (
          filteredSlots.map((slot) => <SlotCard key={slot.id} slot={slot} />)
        )}
      </div>
    </div>
  );
}

function SlotCard({ slot }: { slot: TimeSlot }) {
  const startTime = new Date(slot.startTime);
  const endTime = new Date(slot.endTime);
  const isPast = startTime < new Date();

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border-2 p-6 transition-all hover:shadow-md ${
        slot.isBooked
          ? 'border-purple-200 bg-purple-50/30'
          : isPast
          ? 'border-slate-200 opacity-50'
          : 'border-green-200 bg-green-50/30'
      }`}
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${
            slot.isBooked
              ? 'bg-purple-100 text-purple-700'
              : isPast
              ? 'bg-slate-100 text-slate-600'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {slot.isBooked ? '● Booked' : isPast ? '● Past' : '● Available'}
        </span>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* Date & Time */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-slate-900">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-semibold">
            {startTime.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">
            {startTime.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}{' '}
            -{' '}
            {endTime.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>

        {slot.booking && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm font-medium text-slate-900">{slot.booking.fullName}</p>
            <p className="text-xs text-slate-500">{slot.booking.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}