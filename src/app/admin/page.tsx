'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Stats {
  total: number;
  today: number;
  thisMonth: number;
  monthlyGrowth: number;
  pending: number;
  confirmed: number;
  cancelled: number;
  completed: number;
  availableSlots: number;
  bookedSlots: number;
}

interface Booking {
  id: string;
  fullName: string;
  email: string;
  status: string;
  createdAt: string;
  slot: {
    startTime: string;
    endTime: string;
  };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentBookings, setRecentBookings] = useState<Booking[]>([]);
  const [upcomingBookings, setUpcomingBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      setStats(data.stats);
      setRecentBookings(data.recentBookings);
      setUpcomingBookings(data.upcomingBookings);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">Welcome back! Here&lsquo;s your booking overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Bookings"
          value={stats?.total || 0}
          icon={<BookingIcon />}
          color="blue"
          subtitle={`${stats?.today || 0} today`}
        />
        <StatCard
          title="This Month"
          value={stats?.thisMonth || 0}
          icon={<TrendIcon />}
          color="green"
          subtitle={`${stats?.monthlyGrowth || 0}% from last month`}
          trend={stats?.monthlyGrowth}
        />
        <StatCard
          title="Confirmed"
          value={stats?.confirmed || 0}
          icon={<CheckIcon />}
          color="indigo"
          subtitle={`${stats?.pending || 0} pending`}
        />
        <StatCard
          title="Available Slots"
          value={stats?.availableSlots || 0}
          icon={<SlotIcon />}
          color="purple"
          subtitle={`${stats?.bookedSlots || 0} booked`}
        />
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <StatusCard
          label="Pending"
          count={stats?.pending || 0}
          color="yellow"
        />
        <StatusCard
          label="Confirmed"
          count={stats?.confirmed || 0}
          color="blue"
        />
        <StatusCard
          label="Completed"
          count={stats?.completed || 0}
          color="green"
        />
        <StatusCard
          label="Cancelled"
          count={stats?.cancelled || 0}
          color="red"
        />
      </div>

      {/* Recent & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Recent Bookings</h2>
            <Link
              href="/admin/bookings"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {recentBookings.length === 0 ? (
              <p className="text-slate-500 text-center py-8">No recent bookings</p>
            ) : (
              recentBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
              ))
            )}
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Upcoming This Week</h2>
            <Link
              href="/admin/bookings"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingBookings.length === 0 ? (
              <p className="text-slate-500 text-center py-8">No upcoming bookings</p>
            ) : (
              upcomingBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} upcoming />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
  subtitle,
  trend,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
  trend?: number;
}) {
  const colors = {
    blue: 'from-blue-600 to-blue-700',
    green: 'from-green-600 to-green-700',
    indigo: 'from-indigo-600 to-indigo-700',
    purple: 'from-purple-600 to-purple-700',
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value.toLocaleString()}</p>
          {subtitle && (
            <div className="flex items-center gap-2 mt-2">
              {trend !== undefined && trend > 0 && (
                <span className="text-green-600 text-sm font-medium">↑ {trend}%</span>
              )}
              {trend !== undefined && trend < 0 && (
                <span className="text-red-600 text-sm font-medium">↓ {Math.abs(trend)}%</span>
              )}
              <p className="text-sm text-slate-500">{subtitle}</p>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${colors[color as keyof typeof colors]} rounded-xl flex items-center justify-center shadow-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function StatusCard({ label, count, color }: { label: string; count: number; color: string }) {
  const colors = {
    yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    red: 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <div className={`rounded-xl border p-4 ${colors[color as keyof typeof colors]}`}>
      <p className="text-sm font-medium opacity-80">{label}</p>
      <p className="text-2xl font-bold mt-1">{count}</p>
    </div>
  );
}

function BookingItem({ booking, upcoming }: { booking: Booking; upcoming?: boolean }) {
  const statusColors = {
    PENDING: 'bg-yellow-100 text-yellow-700',
    CONFIRMED: 'bg-blue-100 text-blue-700',
    CANCELLED: 'bg-red-100 text-red-700',
    COMPLETED: 'bg-green-100 text-green-700',
  };

  const date = new Date(upcoming ? booking.slot.startTime : booking.createdAt);

  return (
    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
      <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center font-bold text-slate-700">
        {booking.fullName.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-900 truncate">{booking.fullName}</p>
        <p className="text-sm text-slate-500 truncate">{booking.email}</p>
      </div>
      <div className="text-right">
        <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold ${statusColors[booking.status as keyof typeof statusColors]}`}>
          {booking.status}
        </span>
        <p className="text-xs text-slate-500 mt-1">
          {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}

// Icons
function BookingIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SlotIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}