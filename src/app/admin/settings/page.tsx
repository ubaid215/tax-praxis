"use client";

import { useState, useEffect } from "react";

interface GoogleAuthStatus {
  isConnected: boolean;
  calendarId?: string;
  connectedAt?: string;
}

interface OdooAuthStatus {
  isConnected: boolean;
  userId?: number;
  connectedAt?: string;
}

export default function SettingsPage() {
  const [googleAuth, setGoogleAuth] = useState<GoogleAuthStatus | null>(null);
  const [odooAuth, setOdooAuth] = useState<OdooAuthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);
  
  // Email/Password Change States
  const [showEmailChange, setShowEmailChange] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [emailData, setEmailData] = useState({ currentEmail: '', newEmail: '' });
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });

  useEffect(() => {
    checkIntegrationStatus();
  }, []);

  const checkIntegrationStatus = async () => {
    try {
      const res = await fetch("/api/integrations/status");
      const data = await res.json();
      setGoogleAuth(data.google);
      setOdooAuth(data.odoo);
    } catch (error) {
      console.error("Failed to check integration status:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleConnectGoogle = () => {
    setConnecting(true);
    const root = "https://accounts.google.com/o/oauth2/v2/auth";
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
      response_type: "code",
      scope: "https://www.googleapis.com/auth/calendar",
      access_type: "offline",
      prompt: "consent",
    });

    window.location.href = `${root}?${params.toString()}`;
  };

  const handleDisconnectGoogle = async () => {
    if (!confirm("Are you sure you want to disconnect Google Calendar?")) {
      return;
    }

    try {
      const res = await fetch("/api/google/disconnect", {
        method: "POST",
      });

      if (res.ok) {
        setGoogleAuth({ isConnected: false });
      }
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/change-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Failed to update email');
        return;
      }

      alert('Email updated successfully! Please log in again with your new email.');
      setShowEmailChange(false);
      setEmailData({ currentEmail: '', newEmail: '' });
      
      // Logout user after email change
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('Email change error:', error);
      alert('Failed to update email. Please try again.');
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }

    if (passwordData.newPassword.length < 8) {
      alert("New password must be at least 8 characters long");
      return;
    }

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Failed to update password');
        return;
      }

      alert('Password updated successfully!');
      setShowPasswordChange(false);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      console.error('Password change error:', error);
      alert('Failed to update password. Please try again.');
    }
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loader}></div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Settings</h1>
        <p style={styles.subtitle}>Manage your integrations and account preferences</p>
      </div>

      {/* Account Settings Section */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.iconWrapper}>
            <UserIcon />
          </div>
          <div>
            <h2 style={styles.sectionTitle}>Account Settings</h2>
            <p style={styles.sectionSubtitle}>Update your email and password</p>
          </div>
        </div>

        <div style={styles.sectionContent}>
          {/* Email Change */}
          <div style={styles.settingItem}>
            <div style={styles.settingInfo}>
              <div style={styles.settingIcon}>
                <EmailIcon />
              </div>
              <div>
                <h3 style={styles.settingTitle}>Email Address</h3>
                <p style={styles.settingDescription}>admin@taxpraxis.com</p>
              </div>
            </div>
            <button
              onClick={() => setShowEmailChange(!showEmailChange)}
              style={styles.changeButton}
            >
              Change Email
            </button>
          </div>

          {showEmailChange && (
            <form onSubmit={handleEmailChange} style={styles.changeForm}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Current Email</label>
                <input
                  type="email"
                  value={emailData.currentEmail}
                  onChange={(e) => setEmailData({ ...emailData, currentEmail: e.target.value })}
                  style={styles.input}
                  placeholder="current@email.com"
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>New Email</label>
                <input
                  type="email"
                  value={emailData.newEmail}
                  onChange={(e) => setEmailData({ ...emailData, newEmail: e.target.value })}
                  style={styles.input}
                  placeholder="new@email.com"
                  required
                />
              </div>
              <div style={styles.formActions}>
                <button type="submit" style={styles.saveButton}>
                  Update Email
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailChange(false)}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Password Change */}
          <div style={styles.settingItem}>
            <div style={styles.settingInfo}>
              <div style={styles.settingIcon}>
                <LockIcon />
              </div>
              <div>
                <h3 style={styles.settingTitle}>Password</h3>
                <p style={styles.settingDescription}>Last changed 30 days ago</p>
              </div>
            </div>
            <button
              onClick={() => setShowPasswordChange(!showPasswordChange)}
              style={styles.changeButton}
            >
              Change Password
            </button>
          </div>

          {showPasswordChange && (
            <form onSubmit={handlePasswordChange} style={styles.changeForm}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Current Password</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  style={styles.input}
                  placeholder="••••••••"
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  style={styles.input}
                  placeholder="••••••••"
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  style={styles.input}
                  placeholder="••••••••"
                  required
                />
              </div>
              <div style={styles.formActions}>
                <button type="submit" style={styles.saveButton}>
                  Update Password
                </button>
                <button
                  type="button"
                  onClick={() => setShowPasswordChange(false)}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Google Calendar Integration */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.iconWrapper}>
            <GoogleIcon />
          </div>
          <div>
            <h2 style={styles.sectionTitle}>Google Calendar Integration</h2>
            <p style={styles.sectionSubtitle}>Automatically sync bookings to your calendar</p>
          </div>
        </div>

        <div style={styles.sectionContent}>
          {googleAuth?.isConnected ? (
            <div style={styles.connectedState}>
              {/* Status Badge */}
              <div style={styles.statusBadge}>
                <CheckIcon />
                <div style={{ flex: 1 }}>
                  <p style={styles.statusTitle}>Connected Successfully</p>
                  <p style={styles.statusDetail}>
                    Calendar ID: {googleAuth.calendarId || "primary"}
                  </p>
                  {googleAuth.connectedAt && (
                    <p style={styles.statusTime}>
                      Connected: {new Date(googleAuth.connectedAt).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>

              {/* Features */}
              <div style={styles.featuresList}>
                <p style={styles.featuresTitle}>Active Features:</p>
                {[
                  "Automatic event creation for new bookings",
                  "Calendar invites sent to customers",
                  "Google Meet links included",
                  "Real-time sync with your calendar",
                ].map((feature, i) => (
                  <div key={i} style={styles.featureItem}>
                    <CheckSmallIcon />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={handleDisconnectGoogle} style={styles.disconnectButton}>
                Disconnect Calendar
              </button>
            </div>
          ) : (
            <div style={styles.disconnectedState}>
              {/* Info Box */}
              <div style={styles.infoBox}>
                <InfoIcon />
                <div>
                  <p style={styles.infoTitle}>Why Connect Google Calendar?</p>
                  <p style={styles.infoText}>
                    Automatically sync all bookings to your Google Calendar and send 
                    invites to customers with Google Meet links.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div style={styles.benefitsList}>
                <p style={styles.benefitsTitle}>Benefits:</p>
                {[
                  "Save time with automatic calendar updates",
                  "Never miss an appointment",
                  "Professional calendar invites for clients",
                  "Integrated video conferencing with Google Meet",
                  "Mobile notifications on your phone",
                ].map((benefit, i) => (
                  <div key={i} style={styles.benefitItem}>
                    <div style={styles.benefitNumber}>{i + 1}</div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleConnectGoogle}
                disabled={connecting}
                style={{
                  ...styles.connectButton,
                  ...(connecting ? styles.connectButtonDisabled : {}),
                }}
              >
                {connecting ? (
                  <>
                    <div style={styles.spinner}></div>
                    Connecting...
                  </>
                ) : (
                  <>
                    <CalendarIcon />
                    Connect Google Calendar
                  </>
                )}
              </button>

              <p style={styles.securityNote}>
                🔒 Your data is secure. We only access your calendar to create 
                and manage booking events. You can disconnect at any time.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Odoo Integration */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.iconWrapper}>
            <OdooIcon />
          </div>
          <div>
            <h2 style={styles.sectionTitle}>Odoo Integration</h2>
            <p style={styles.sectionSubtitle}>Sync appointments with Odoo CRM</p>
          </div>
        </div>

        <div style={styles.sectionContent}>
          {odooAuth?.isConnected ? (
            <div style={styles.statusBadge}>
              <CheckIcon />
              <div style={{ flex: 1 }}>
                <p style={styles.statusTitle}>Connected Successfully</p>
                <p style={styles.statusDetail}>User ID: {odooAuth.userId}</p>
                {odooAuth.connectedAt && (
                  <p style={styles.statusTime}>
                    Connected: {new Date(odooAuth.connectedAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div style={styles.infoBox}>
              <InfoIcon />
              <div>
                <p style={styles.infoTitle}>Odoo Not Connected</p>
                <p style={styles.infoText}>
                  Configure Odoo credentials in your user settings to enable CRM synchronization.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Icons
function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function OdooIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

function CheckSmallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

// Styles using CSS variables
const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  loader: {
    width: '40px',
    height: '40px',
    border: '4px solid var(--color-border-soft)',
    borderTop: '4px solid var(--color-blue-500)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--color-blue-900)',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '1rem',
  },
  section: {
    background: 'var(--color-bg-card)',
    border: '1px solid var(--color-border-soft)',
    borderRadius: '16px',
    marginBottom: '1.5rem',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
  },
  sectionHeader: {
    background: 'var(--gradient-soft)',
    padding: '1.5rem',
    borderBottom: '1px solid var(--color-border-soft)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    background: 'white',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-sm)',
    color: 'var(--color-blue-700)',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--color-blue-900)',
    marginBottom: '0.25rem',
  },
  sectionSubtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
  },
  sectionContent: {
    padding: '1.5rem',
  },
  settingItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    background: 'var(--color-bg-soft)',
    borderRadius: '12px',
    marginBottom: '1rem',
  },
  settingInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  settingIcon: {
    width: '40px',
    height: '40px',
    background: 'white',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-blue-700)',
    border: '1px solid var(--color-border-soft)',
  },
  settingTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    marginBottom: '0.25rem',
  },
  settingDescription: {
    fontSize: '0.875rem',
    color: 'var(--color-text-muted)',
  },
  changeButton: {
    padding: '0.5rem 1rem',
    background: 'white',
    border: '1px solid var(--color-border-soft)',
    borderRadius: '8px',
    color: 'var(--color-blue-700)',
    fontWeight: '600',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  changeForm: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid var(--color-border-soft)',
    marginBottom: '1rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    background: 'var(--color-bg-soft)',
    border: '1px solid var(--color-border-soft)',
    borderRadius: '8px',
    fontSize: '0.875rem',
    color: 'var(--color-text-primary)',
    outline: 'none',
    transition: 'all 0.2s',
  },
  formActions: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '1.5rem',
  },
  saveButton: {
    padding: '0.75rem 1.5rem',
    background: 'var(--gradient-primary)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  cancelButton: {
    padding: '0.75rem 1.5rem',
    background: 'white',
    color: 'var(--color-text-secondary)',
    border: '1px solid var(--color-border-soft)',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  connectedState: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  statusBadge: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',
    background: '#ecfdf5',
    borderRadius: '12px',
    border: '1px solid #a7f3d0',
  },
  statusTitle: {
    fontWeight: '600',
    color: '#065f46',
    marginBottom: '0.25rem',
  },
  statusDetail: {
    fontSize: '0.875rem',
    color: '#047857',
    marginTop: '0.25rem',
  },
  statusTime: {
    fontSize: '0.75rem',
    color: '#059669',
    marginTop: '0.25rem',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  featuresTitle: {
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    fontSize: '0.875rem',
    marginBottom: '0.5rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
  },
  disconnectButton: {
    width: '100%',
    padding: '0.75rem 1.5rem',
    background: '#fef2f2',
    color: '#dc2626',
    border: '1px solid #fecaca',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  disconnectedState: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '1rem',
    background: '#eff6ff',
    borderRadius: '12px',
    border: '1px solid #bfdbfe',
  },
  infoTitle: {
    fontWeight: '600',
    color: '#1e40af',
    fontSize: '0.875rem',
    marginBottom: '0.25rem',
  },
  infoText: {
    color: '#1d4ed8',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  },
  benefitsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  benefitsTitle: {
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    fontSize: '0.875rem',
    marginBottom: '0.5rem',
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
  },
  benefitNumber: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: '#dbeafe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2563eb',
    fontWeight: '600',
    fontSize: '0.75rem',
    flexShrink: 0,
  },
  connectButton: {
    width: '100%',
    padding: '1rem 2rem',
    background: 'var(--gradient-primary)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.2s',
  },
  connectButtonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  securityNote: {
    fontSize: '0.75rem',
    color: 'var(--color-text-muted)',
    marginTop: '1rem',
  },
  spinner: {
    width: '20px',
    height: '20px',
    border: '3px solid rgba(255, 255, 255, 0.3)',
    borderTop: '3px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};