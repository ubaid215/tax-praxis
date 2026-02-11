'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface IntegrationStatus {
  google: {
    isConnected: boolean;
    calendarId?: string;
    connectedAt?: string;
  };
  odoo: {
    isConnected: boolean;
    url?: string;
    database?: string;
    username?: string;
    connectedAt?: string;
    lastSyncedAt?: string;
  };
  syncStats: {
    google: {
      success: number;
      failed: number;
      pending: number;
    };
    odoo: {
      success: number;
      failed: number;
      pending: number;
    };
  };
}

export default function IntegrationsPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<IntegrationStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [disconnecting, setDisconnecting] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  useEffect(() => {
    fetchStatus();
    
    // Check for success/error/info query parameters
    const success = searchParams.get('success');
    const error = searchParams.get('error');
    const info = searchParams.get('info');
    
    // Google Calendar notifications
    if (success === 'google_connected') {
      setNotification({ type: 'success', message: 'Google Calendar connected successfully!' });
      setTimeout(() => setNotification(null), 5000);
    } else if (error === 'no_code') {
      setNotification({ type: 'error', message: 'Google OAuth failed: No authorization code received.' });
      setTimeout(() => setNotification(null), 5000);
    } else if (error === 'no_refresh_token') {
      setNotification({ type: 'error', message: 'Google OAuth failed: No refresh token received. Try again.' });
      setTimeout(() => setNotification(null), 5000);
    } else if (error === 'auth_failed') {
      setNotification({ type: 'error', message: 'Authentication failed. Please try again.' });
      setTimeout(() => setNotification(null), 5000);
    }
    // Odoo notifications
    else if (success === 'odoo_connected') {
      setNotification({ type: 'success', message: 'Odoo connected successfully!' });
      setTimeout(() => setNotification(null), 5000);
    } else if (error === 'odoo_auth_failed') {
      setNotification({ type: 'error', message: 'Odoo authentication failed. Please check your credentials.' });
      setTimeout(() => setNotification(null), 5000);
    } else if (error === 'odoo_not_configured') {
      setNotification({ type: 'error', message: 'Odoo is not configured. Please set environment variables.' });
      setTimeout(() => setNotification(null), 5000);
    } else if (error === 'odoo_connection_failed') {
      setNotification({ type: 'error', message: 'Failed to connect to Odoo. Please try again.' });
      setTimeout(() => setNotification(null), 5000);
    } else if (info === 'use_connect_button') {
      setNotification({ type: 'info', message: 'Please use the Connect button to establish Odoo connection.' });
      setTimeout(() => setNotification(null), 5000);
    }
  }, [searchParams]);

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/integrations/status');
      const data = await res.json();
      
      console.log('🔍 Integration Status:', data);
      setStatus(data);
    } catch (error) {
      console.error('Failed to fetch integration status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleConnectOdoo = async () => {
    setConnecting('odoo');
    
    try {
      const res = await fetch('/api/odoo/connect', {
        method: 'POST',
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to connect to Odoo');
      }

      // Refresh status
      await fetchStatus();
      
      setNotification({ 
        type: 'success', 
        message: 'Odoo connected successfully!' 
      });
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error('Failed to connect Odoo:', error);
      setNotification({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Failed to connect to Odoo. Please try again.' 
      });
      setTimeout(() => setNotification(null), 5000);
    } finally {
      setConnecting(null);
    }
  };

  const handleDisconnect = async (service: 'google' | 'odoo') => {
    if (!confirm(`Are you sure you want to disconnect ${service === 'google' ? 'Google Calendar' : 'Odoo'}?`)) {
      return;
    }

    setDisconnecting(service);
    
    try {
      const endpoint = service === 'google' 
        ? '/api/google/disconnect' 
        : '/api/odoo/disconnect';

      const res = await fetch(endpoint, {
        method: 'POST',
      });

      if (!res.ok) {
        throw new Error('Failed to disconnect');
      }

      // Refresh status
      await fetchStatus();
      
      setNotification({ 
        type: 'success', 
        message: `${service === 'google' ? 'Google Calendar' : 'Odoo'} disconnected successfully` 
      });
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error('Failed to disconnect:', error);
      setNotification({ 
        type: 'error', 
        message: 'Failed to disconnect. Please try again.' 
      });
      setTimeout(() => setNotification(null), 5000);
    } finally {
      setDisconnecting(null);
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
    <div className="space-y-6">
      {/* Notification Banner */}
      {notification && (
        <div
          className={`p-4 rounded-xl border-2 ${
            notification.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : notification.type === 'error'
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-blue-50 border-blue-200 text-blue-800'
          } flex items-center justify-between animate-in slide-in-from-top-5 duration-300`}
        >
          <div className="flex items-center gap-3">
            {notification.type === 'success' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : notification.type === 'error' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <span className="font-medium">{notification.message}</span>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="text-current opacity-70 hover:opacity-100"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Integrations</h1>
        <p className="text-slate-600 mt-1">Manage external service connections</p>
      </div>

      {/* Integration Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Google Calendar */}
        <IntegrationCard
          name="Google Calendar"
          description="Sync bookings with Google Calendar"
          icon={<GoogleIcon />}
          isConnected={status?.google.isConnected || false}
          connectedAt={status?.google.connectedAt}
          details={
            status?.google.isConnected
              ? `Calendar ID: ${status.google.calendarId || 'primary'}`
              : 'Not connected'
          }
          stats={status?.syncStats.google}
          color="blue"
          connectUrl="/api/google/auth?returnTo=/admin/integrations"
          onConnect={undefined}
          onDisconnect={() => handleDisconnect('google')}
          isConnecting={connecting === 'google'}
          isDisconnecting={disconnecting === 'google'}
          useDirectConnection={false}
        />

        {/* Odoo */}
        <IntegrationCard
          name="Odoo"
          description="Sync appointments with Odoo CRM"
          icon={<OdooIcon />}
          isConnected={status?.odoo.isConnected || false}
          connectedAt={status?.odoo.connectedAt}
          details={
            status?.odoo.isConnected
              ? `Database: ${status.odoo.database}`
              : 'Not configured'
          }
          extraDetails={
            status?.odoo.isConnected
              ? [
                  { label: 'URL', value: status.odoo.url || 'N/A' },
                  { label: 'Username', value: status.odoo.username || 'N/A' },
                ]
              : undefined
          }
          stats={status?.syncStats.odoo}
          color="purple"
          connectUrl="/api/odoo/connect"
          onConnect={handleConnectOdoo}
          onDisconnect={() => handleDisconnect('odoo')}
          isConnecting={connecting === 'odoo'}
          isDisconnecting={disconnecting === 'odoo'}
          useDirectConnection={true}
        />
      </div>

      {/* Sync Logs Summary */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Sync Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Stats */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <GoogleIcon className="w-4 h-4" />
              </div>
              Google Calendar
            </h3>
            <div className="space-y-3">
              <StatRow
                label="Successful Syncs"
                value={status?.syncStats.google.success || 0}
                color="green"
              />
              <StatRow
                label="Failed Syncs"
                value={status?.syncStats.google.failed || 0}
                color="red"
              />
              <StatRow
                label="Pending Syncs"
                value={status?.syncStats.google.pending || 0}
                color="yellow"
              />
            </div>
          </div>

          {/* Odoo Stats */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <OdooIcon className="w-4 h-4" />
              </div>
              Odoo
            </h3>
            <div className="space-y-3">
              <StatRow
                label="Successful Syncs"
                value={status?.syncStats.odoo.success || 0}
                color="green"
              />
              <StatRow
                label="Failed Syncs"
                value={status?.syncStats.odoo.failed || 0}
                color="red"
              />
              <StatRow
                label="Pending Syncs"
                value={status?.syncStats.odoo.pending || 0}
                color="yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationCard({
  name,
  description,
  icon,
  isConnected,
  connectedAt,
  details,
  extraDetails,
  stats,
  color,
  connectUrl,
  onConnect,
  onDisconnect,
  isConnecting,
  isDisconnecting,
  useDirectConnection = false,
}: {
  name: string;
  description: string;
  icon: React.ReactNode;
  isConnected: boolean;
  connectedAt?: string;
  details: string;
  extraDetails?: { label: string; value: string }[];
  stats?: { success: number; failed: number; pending: number };
  color: 'blue' | 'purple';
  connectUrl: string;
  onConnect?: () => void;
  onDisconnect: () => void;
  isConnecting: boolean;
  isDisconnecting: boolean;
  useDirectConnection?: boolean;
}) {
  const colors = {
    blue: {
      bg: 'from-blue-600 to-blue-700',
      light: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
    },
    purple: {
      bg: 'from-purple-600 to-purple-700',
      light: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
  };

  const colorScheme = colors[color];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${colorScheme.bg} rounded-xl flex items-center justify-center shadow-lg`}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Status</span>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${
              isConnected
                ? 'bg-green-100 text-green-700'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            {isConnected ? '● Connected' : '○ Not Connected'}
          </span>
        </div>

        {isConnected && connectedAt && (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">Connected At</span>
            <span className="text-sm text-slate-600">
              {new Date(connectedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Details</span>
          <span className="text-sm text-slate-600">{details}</span>
        </div>

        {extraDetails && extraDetails.map((detail, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">{detail.label}</span>
            <span className="text-sm text-slate-600 truncate max-w-[200px]" title={detail.value}>
              {detail.value}
            </span>
          </div>
        ))}

        {stats && isConnected && (
          <div className={`${colorScheme.light} ${colorScheme.border} border rounded-xl p-4 mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-600 mb-1">Success</p>
                <p className="text-lg font-bold text-green-600">{stats.success}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Failed</p>
                <p className="text-lg font-bold text-red-600">{stats.failed}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Pending</p>
                <p className="text-lg font-bold text-yellow-600">{stats.pending}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-6">
        {isConnected ? (
          <button 
            onClick={onDisconnect}
            disabled={isDisconnecting}
            className="w-full px-4 py-3 bg-red-50 text-red-600 font-medium rounded-xl hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isDisconnecting ? (
              <>
                <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                Disconnecting...
              </>
            ) : (
              'Disconnect'
            )}
          </button>
        ) : (
          useDirectConnection && onConnect ? (
            <button
              onClick={onConnect}
              disabled={isConnecting}
              className={`w-full px-4 py-3 bg-gradient-to-r ${colorScheme.bg} text-white font-medium rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
            >
              {isConnecting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Connecting...
                </>
              ) : (
                `Connect ${name}`
              )}
            </button>
          ) : (
            <a
              href={connectUrl}
              className={`block w-full px-4 py-3 bg-gradient-to-r ${colorScheme.bg} text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-center`}
            >
              Connect {name}
            </a>
          )
        )}
      </div>
    </div>
  );
}

function StatRow({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: 'green' | 'red' | 'yellow';
}) {
  const colors = {
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className={`text-sm font-bold ${colors[color]}`}>{value}</span>
    </div>
  );
}

// Icons
function GoogleIcon({ className = 'w-6 h-6 text-white' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function OdooIcon({ className = 'w-6 h-6 text-white' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}