'use client';

import { useEffect, useState } from 'react';

interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string | null;
  status: string;
  timezone: string;
  createdAt: string;
  slot: {
    startTime: string;
    endTime: string;
  };
  user: {
    name: string;
  } | null;
  guests: Array<{ email: string }>;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      setBookings(data.bookings);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesFilter = filter === 'ALL' || booking.status === filter;
    const matchesSearch =
      booking.fullName.toLowerCase().includes(search.toLowerCase()) ||
      booking.email.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    all: bookings.length,
    pending: bookings.filter((b) => b.status === 'PENDING').length,
    confirmed: bookings.filter((b) => b.status === 'CONFIRMED').length,
    completed: bookings.filter((b) => b.status === 'COMPLETED').length,
    cancelled: bookings.filter((b) => b.status === 'CANCELLED').length,
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Bookings</h1>
          <p className="text-slate-600 mt-1">Manage all customer bookings</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Filter */}
          <div className="flex gap-2 flex-wrap">
            <FilterButton
              active={filter === 'ALL'}
              onClick={() => setFilter('ALL')}
              count={stats.all}
            >
              All
            </FilterButton>
            <FilterButton
              active={filter === 'PENDING'}
              onClick={() => setFilter('PENDING')}
              count={stats.pending}
              color="yellow"
            >
              Pending
            </FilterButton>
            <FilterButton
              active={filter === 'CONFIRMED'}
              onClick={() => setFilter('CONFIRMED')}
              count={stats.confirmed}
              color="blue"
            >
              Confirmed
            </FilterButton>
            <FilterButton
              active={filter === 'COMPLETED'}
              onClick={() => setFilter('COMPLETED')}
              count={stats.completed}
              color="green"
            >
              Completed
            </FilterButton>
            <FilterButton
              active={filter === 'CANCELLED'}
              onClick={() => setFilter('CANCELLED')}
              count={stats.cancelled}
              color="red"
            >
              Cancelled
            </FilterButton>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-slate-600 font-medium">No bookings found</p>
            <p className="text-slate-500 text-sm mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBookings.map((booking) => (
                  <BookingRow key={booking.id} booking={booking} onUpdate={fetchBookings} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterButton({
  children,
  active,
  onClick,
  count,
  color = 'blue',
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  count: number;
  color?: string;
}) {
  const colors = {
    blue: active ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    yellow: active ? 'bg-yellow-600 text-white' : 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100',
    green: active ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600 hover:bg-green-100',
    red: active ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600 hover:bg-red-100',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${colors[color as keyof typeof colors]}`}
    >
      {children} ({count})
    </button>
  );
}

function BookingRow({ booking, onUpdate }: { booking: Booking; onUpdate: () => void }) {
  const statusColors = {
    PENDING: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    CONFIRMED: 'bg-blue-100 text-blue-700 border-blue-200',
    CANCELLED: 'bg-red-100 text-red-700 border-red-200',
    COMPLETED: 'bg-green-100 text-green-700 border-green-200',
  };

  const startTime = new Date(booking.slot.startTime);
  const endTime = new Date(booking.slot.endTime);

  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
            {booking.fullName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-slate-900">{booking.fullName}</p>
            <p className="text-sm text-slate-500">
              {new Date(booking.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="text-sm text-slate-900">{booking.email}</p>
        <p className="text-sm text-slate-500">{booking.phone}</p>
      </td>
      <td className="px-6 py-4">
        <p className="text-sm font-medium text-slate-900">
          {startTime.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <p className="text-sm text-slate-500">
          {startTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          })}{' '}
          -{' '}
          {endTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold border ${
            statusColors[booking.status as keyof typeof statusColors]
          }`}
        >
          {booking.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <p className="text-sm text-slate-600 max-w-xs truncate">
          {booking.notes || '-'}
        </p>
      </td>
    </tr>
  );
}