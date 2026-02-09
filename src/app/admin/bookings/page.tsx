'use client';

import { useEffect, useState } from 'react';
import { 
  Calendar, 
  Mail, 
  Phone, 
  Clock, 
  User, 
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  RefreshCw
} from 'lucide-react';

interface SyncLog {
  id: string;
  system: 'GOOGLE_CALENDAR' | 'ODOO';
  action: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  error: string | null;
  metadata: any;
  createdAt: string;
}

interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string | null;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  timezone: string;
  createdAt: string;
  googleEventId: string | null;
  googleSyncedAt: string | null;
  odooAppointmentId: number | null;
  odooSyncedAt: string | null;
  slot: {
    id: string;
    startTime: string;
    endTime: string;
  };
  user: {
    id: string;
    name: string;
  } | null;
  guests: Array<{ 
    id: string;
    email: string 
  }>;
  syncLogs: SyncLog[];
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

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
      booking.email.toLowerCase().includes(search.toLowerCase()) ||
      booking.phone.includes(search);
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Bookings</h1>
          <p className="text-gray-600 mt-1">
            Manage customer appointments and sync status
          </p>
        </div>
        <button
          onClick={fetchBookings}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"
        >
          <RefreshCw size={18} />
          Refresh
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatsCard
          label="All Bookings"
          value={stats.all}
          color="blue"
          active={filter === 'ALL'}
          onClick={() => setFilter('ALL')}
        />
        <StatsCard
          label="Pending"
          value={stats.pending}
          color="yellow"
          active={filter === 'PENDING'}
          onClick={() => setFilter('PENDING')}
        />
        <StatsCard
          label="Confirmed"
          value={stats.confirmed}
          color="blue"
          active={filter === 'CONFIRMED'}
          onClick={() => setFilter('CONFIRMED')}
        />
        <StatsCard
          label="Completed"
          value={stats.completed}
          color="green"
          active={filter === 'COMPLETED'}
          onClick={() => setFilter('COMPLETED')}
        />
        <StatsCard
          label="Cancelled"
          value={stats.cancelled}
          color="red"
          active={filter === 'CANCELLED'}
          onClick={() => setFilter('CANCELLED')}
        />
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 font-medium text-lg">No bookings found</p>
            <p className="text-gray-500 text-sm mt-2">
              {search || filter !== 'ALL'
                ? 'Try adjusting your filters'
                : 'Bookings will appear here once customers make appointments'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Appointment
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Sync Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredBookings.map((booking) => (
                  <BookingRow
                    key={booking.id}
                    booking={booking}
                    onUpdate={fetchBookings}
                    onViewDetails={() => setSelectedBooking(booking)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onUpdate={fetchBookings}
        />
      )}
    </div>
  );
}

function StatsCard({
  label,
  value,
  color,
  active,
  onClick,
}: {
  label: string;
  value: number;
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  const colors = {
    blue: active
      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
      : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300',
    yellow: active
      ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-lg'
      : 'bg-white border border-gray-200 text-gray-700 hover:border-yellow-300',
    green: active
      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg'
      : 'bg-white border border-gray-200 text-gray-700 hover:border-green-300',
    red: active
      ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg'
      : 'bg-white border border-gray-200 text-gray-700 hover:border-red-300',
  };

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl transition-all cursor-pointer ${
        colors[color as keyof typeof colors]
      }`}
    >
      <p className={`text-sm font-medium ${active ? 'text-white/90' : 'text-gray-600'}`}>
        {label}
      </p>
      <p className={`text-3xl font-bold mt-1 ${active ? 'text-white' : 'text-gray-800'}`}>
        {value}
      </p>
    </button>
  );
}

function BookingRow({
  booking,
  onUpdate,
  onViewDetails,
}: {
  booking: Booking;
  onUpdate: () => void;
  onViewDetails: () => void;
}) {
  const statusColors = {
    PENDING: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    CONFIRMED: 'bg-blue-100 text-blue-700 border-blue-300',
    CANCELLED: 'bg-red-100 text-red-700 border-red-300',
    COMPLETED: 'bg-green-100 text-green-700 border-green-300',
  };

  const startTime = new Date(booking.slot.startTime);
  const endTime = new Date(booking.slot.endTime);

  // Get latest sync status for each system
  const googleSync = booking.syncLogs
    ?.filter((log) => log.system === 'GOOGLE_CALENDAR')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];

  const odooSync = booking.syncLogs
    ?.filter((log) => log.system === 'ODOO')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      {/* Customer */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
            {booking.fullName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{booking.fullName}</p>
            <p className="text-sm text-gray-500">
              Booked {new Date(booking.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </td>

      {/* Contact */}
      <td className="px-6 py-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Mail size={14} className="text-gray-400" />
            <span className="truncate max-w-[200px]">{booking.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Phone size={14} className="text-gray-400" />
            <span>{booking.phone}</span>
          </div>
        </div>
      </td>

      {/* Appointment */}
      <td className="px-6 py-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gray-400" />
            <p className="text-sm font-medium text-gray-900">
              {startTime.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-gray-400" />
            <p className="text-sm text-gray-600">
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
          </div>
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold border-2 ${
            statusColors[booking.status as keyof typeof statusColors]
          }`}
        >
          {booking.status}
        </span>
      </td>

      {/* Sync Status */}
      <td className="px-6 py-4">
        <div className="space-y-2">
          {/* Google Calendar Sync */}
          {googleSync ? (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                googleSync.status === 'SUCCESS'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : googleSync.status === 'FAILED'
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
              }`}
              title={googleSync.error || 'Google Calendar sync status'}
            >
              {googleSync.status === 'SUCCESS' ? (
                <CheckCircle size={14} />
              ) : googleSync.status === 'FAILED' ? (
                <XCircle size={14} />
              ) : (
                <AlertCircle size={14} />
              )}
              <span>Google Calendar</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 text-gray-500 border border-gray-200">
              <AlertCircle size={14} />
              <span>No Google Sync</span>
            </div>
          )}

          {/* Odoo Sync */}
          {odooSync ? (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                odooSync.status === 'SUCCESS'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : odooSync.status === 'FAILED'
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
              }`}
              title={odooSync.error || 'Odoo sync status'}
            >
              {odooSync.status === 'SUCCESS' ? (
                <CheckCircle size={14} />
              ) : odooSync.status === 'FAILED' ? (
                <XCircle size={14} />
              ) : (
                <AlertCircle size={14} />
              )}
              <span>Odoo ERP</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 text-gray-500 border border-gray-200">
              <AlertCircle size={14} />
              <span>No Odoo Sync</span>
            </div>
          )}
        </div>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <button
          onClick={onViewDetails}
          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
        >
          View Details
        </button>
      </td>
    </tr>
  );
}

function BookingDetailsModal({
  booking,
  onClose,
  onUpdate,
}: {
  booking: Booking;
  onClose: () => void;
  onUpdate: () => void;
}) {
  const startTime = new Date(booking.slot.startTime);
  const endTime = new Date(booking.slot.endTime);

  const googleSync = booking.syncLogs
    ?.filter((log) => log.system === 'GOOGLE_CALENDAR')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const odooSync = booking.syncLogs
    ?.filter((log) => log.system === 'ODOO')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Booking Details</h2>
              <p className="text-blue-100 text-sm mt-1">ID: {booking.id.slice(0, 8)}...</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Customer Information */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <User size={20} className="text-blue-600" />
              Customer Information
            </h3>
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Full Name</span>
                <span className="font-semibold text-gray-900">{booking.fullName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Email</span>
                <span className="font-medium text-gray-900">{booking.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Phone</span>
                <span className="font-medium text-gray-900">{booking.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Timezone</span>
                <span className="font-medium text-gray-900">{booking.timezone}</span>
              </div>
            </div>
          </section>

          {/* Appointment Details */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-purple-600" />
              Appointment Details
            </h3>
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Date</span>
                <span className="font-semibold text-gray-900">
                  {startTime.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Time</span>
                <span className="font-semibold text-gray-900">
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
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className="font-semibold text-gray-900">{booking.status}</span>
              </div>
              {booking.notes && (
                <div>
                  <span className="text-sm text-gray-600 block mb-2">Notes</span>
                  <p className="text-sm text-gray-900 bg-white p-3 rounded-lg border border-gray-200">
                    {booking.notes}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Sync Status */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <RefreshCw size={20} className="text-green-600" />
              Integration Status
            </h3>

            {/* Google Calendar */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Google Calendar</h4>
              {googleSync && googleSync.length > 0 ? (
                <div className="space-y-2">
                  {googleSync.map((log) => (
                    <div
                      key={log.id}
                      className={`p-3 rounded-lg border-2 ${
                        log.status === 'SUCCESS'
                          ? 'bg-green-50 border-green-200'
                          : log.status === 'FAILED'
                          ? 'bg-red-50 border-red-200'
                          : 'bg-yellow-50 border-yellow-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-bold ${
                            log.status === 'SUCCESS'
                              ? 'text-green-700'
                              : log.status === 'FAILED'
                              ? 'text-red-700'
                              : 'text-yellow-700'
                          }`}
                        >
                          {log.status} - {log.action}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(log.createdAt).toLocaleString()}
                        </span>
                      </div>
                      {log.error && (
                        <p className="text-xs text-red-600 mt-1">{log.error}</p>
                      )}
                      {log.metadata?.eventId && (
                        <p className="text-xs text-gray-600 mt-1">
                          Event ID: {log.metadata.eventId}
                        </p>
                      )}
                      {log.metadata?.hangoutLink && (
                        
                         <a href={log.metadata.hangoutLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline mt-1 block"
                        >
                          Join Google Meet →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 bg-gray-100 rounded-lg text-sm text-gray-600">
                  No Google Calendar sync logs
                </div>
              )}
            </div>

            {/* Odoo */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Odoo ERP</h4>
              {odooSync && odooSync.length > 0 ? (
                <div className="space-y-2">
                  {odooSync.map((log) => (
                    <div
                      key={log.id}
                      className={`p-3 rounded-lg border-2 ${
                        log.status === 'SUCCESS'
                          ? 'bg-green-50 border-green-200'
                          : log.status === 'FAILED'
                          ? 'bg-red-50 border-red-200'
                          : 'bg-yellow-50 border-yellow-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-bold ${
                            log.status === 'SUCCESS'
                              ? 'text-green-700'
                              : log.status === 'FAILED'
                              ? 'text-red-700'
                              : 'text-yellow-700'
                          }`}
                        >
                          {log.status} - {log.action}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(log.createdAt).toLocaleString()}
                        </span>
                      </div>
                      {log.error && (
                        <p className="text-xs text-red-600 mt-1">{log.error}</p>
                      )}
                      {log.metadata?.appointmentId && (
                        <p className="text-xs text-gray-600 mt-1">
                          Appointment ID: {log.metadata.appointmentId}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 bg-gray-100 rounded-lg text-sm text-gray-600">
                  No Odoo sync logs (Odoo may not be configured)
                </div>
              )}
            </div>
          </section>

          {/* Guests */}
          {booking.guests && booking.guests.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Additional Guests</h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                {booking.guests.map((guest) => (
                  <div key={guest.id} className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-700">{guest.email}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 rounded-b-2xl border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 