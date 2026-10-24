import React, { useState, useEffect } from 'react';
import { Shield, Settings, X } from 'lucide-react';

interface CookieConsentProps {
  onOpenPrivacy: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPrivacy }) => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });

  useEffect(() => {
    const stored = localStorage.getItem('neominds_cookie_consent');
    if (stored) {
      setConsentGiven(true);
    } else {
      setConsentGiven(false);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('neominds_cookie_consent', JSON.stringify({ all: true, date: new Date().toISOString() }));
    setConsentGiven(true);
  };

  const handleDecline = () => {
    localStorage.setItem('neominds_cookie_consent', JSON.stringify({ essentialOnly: true, date: new Date().toISOString() }));
    setConsentGiven(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('neominds_cookie_consent', JSON.stringify({ preferences, date: new Date().toISOString() }));
    setShowSettings(false);
    setConsentGiven(true);
  };

  if (consentGiven === null || consentGiven === true) return null;

  return (
    <>
      {/* Floating Bottom Cookie Banner */}
      <div
        style={{
          position: 'fixed',
          bottom: 'clamp(12px, 2.5vw, 24px)',
          left: 'clamp(12px, 2.5vw, 24px)',
          right: 'clamp(12px, 2.5vw, 24px)',
          maxWidth: '820px',
          margin: '0 auto',
          backgroundColor: '#0d111a',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: 'clamp(18px, 3vw, 24px) clamp(16px, 3vw, 28px)',
          boxShadow: 'none',
          zIndex: 990,
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
        role="region"
        aria-label="Cookie consent banner"
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          <Shield size={22} color="#fe6200" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>
              We value your privacy and cookie transparency
            </h4>
            <p className="body-text" style={{ fontSize: '13px', lineHeight: 1.5, color: '#8893a7' }}>
              Neominds uses necessary cookies to ensure system stability, analyze web traffic, and personalize your experience. Learn more in our{' '}
              <button
                onClick={onOpenPrivacy}
                style={{ color: '#ffffff', textDecoration: 'underline', cursor: 'pointer', fontSize: '13px', background: 'none', border: 'none', padding: 0 }}
              >
                Privacy & Cookie Policy
              </button>
              .
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowSettings(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#d0d3dd',
              fontSize: '13px',
              fontFamily: 'var(--font-heading)',
              minHeight: '44px',
              padding: '8px 16px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
            }}
          >
            <Settings size={14} /> Customize
          </button>

          <button
            onClick={handleDecline}
            style={{
              color: '#ffffff',
              fontSize: '13px',
              fontFamily: 'var(--font-heading)',
              minHeight: '44px',
              padding: '8px 20px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
            }}
          >
            Essential Only
          </button>

          <button
            onClick={handleAcceptAll}
            className="btn-primary"
            style={{ padding: '8px 24px', fontSize: '13px', minHeight: '44px' }}
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Customize Preferences Modal */}
      {showSettings && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={{
              width: '100%',
              maxWidth: '560px',
              backgroundColor: '#0a0e17',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: 'clamp(20px, 4vw, 32px)',
              color: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700 }}>Cookie Preferences</h3>
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  color: '#8893a7',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Close settings"
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700 }}>Strictly Necessary Cookies</h5>
                  <p className="body-text" style={{ fontSize: '12px', color: '#8893a7' }}>Essential for core site navigation and security.</p>
                </div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: '#10b981', fontWeight: 700 }}>Always Active</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700 }}>Performance & Analytics</h5>
                  <p className="body-text" style={{ fontSize: '12px', color: '#8893a7' }}>Helps us measure site traffic and responsiveness.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="custom-checkbox"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700 }}>Marketing & Attribution</h5>
                  <p className="body-text" style={{ fontSize: '12px', color: '#8893a7' }}>Used to evaluate campaign performance.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="custom-checkbox"
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                onClick={() => setShowSettings(false)}
                style={{ padding: '8px 16px', color: '#8893a7', fontSize: '13px', fontFamily: 'var(--font-heading)', minHeight: '44px' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="btn-primary"
                style={{ padding: '8px 24px', fontSize: '13px', minHeight: '44px' }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
