import React, { useState, useCallback } from 'react';
import { CheckCircle2, Sliders, ArrowRight } from 'lucide-react';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';

interface CookiePolicyPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

const NAV_ITEMS = [
  { id: 'what-are-cookies', label: 'What are cookies?' },
  { id: 'what-cookies-we-use', label: 'What cookies do we use?' },
  { id: 'strictly-necessary', label: 'Strictly necessary cookies' },
  { id: 'performance-cookies', label: 'Performance cookies' },
  { id: 'functional-cookies', label: 'Functional cookies' },
  { id: 'targeting-cookies', label: 'Targeting & marketing cookies' },
  { id: 'manage-preferences', label: 'Manage cookie preferences' },
  { id: 'how-to-manage-cookies', label: 'How to control cookies in browser' },
] as const;

const CookiePolicyPageComponent: React.FC<CookiePolicyPageProps> = ({
  onNavigatePage,
  onOpenLegal,
}) => {
  const [activeSection, setActiveSection] = useState('what-are-cookies');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    performance: true,
    functional: true,
    targeting: false,
  });
  const [savedToast, setSavedToast] = useState(false);

  const scrollTo = useCallback((id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSavePreferences = useCallback(() => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  }, []);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  }, [newsletterEmail]);

  return (
    <div className="p-cookie-policy-page" style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body, system-ui, sans-serif)' }}>
      {/* 1. p-content-intro */}
      <section className="p-content-intro" style={{ backgroundColor: '#0a0a0a', padding: 'clamp(56px, 8vw, 96px) 24px clamp(40px, 6vw, 64px)', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
            Last updated: August 20, 2025
          </p>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.03em', margin: 0, lineHeight: 1.1 }}>
            Cookie Policy
          </h1>
        </div>
      </section>

      {/* 2. s-mediatext with c-sidenav */}
      <section className="g-section theme-light s-mediatext" style={{ padding: 'clamp(48px, 6vw, 84px) 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
          <style>{`
            @media (min-width: 992px) {
              .p-legal-grid {
                display: grid !important;
                grid-template-columns: 280px 1fr !important;
                gap: 64px !important;
                align-items: start !important;
              }
              .c-sidenav-sticky {
                position: sticky !important;
                top: 96px !important;
              }
            }
          `}</style>

          <div className="p-legal-grid" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Sticky Table of Contents Sidebar */}
            <aside className="c-sidenav-sticky" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '8px' }}>
                Table of Contents
              </div>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderLeft: `2px solid ${activeSection === item.id ? '#FF5500' : '#1e293b'}`,
                    padding: '8px 14px',
                    color: activeSection === item.id ? '#FF5500' : '#475569',
                    fontWeight: activeSection === item.id ? 700 : 500,
                    fontSize: '13.5px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </aside>

            {/* Editorial Content */}
            <article style={{ lineHeight: 1.75, color: '#cbd5e1', fontSize: '15px' }}>
              <p style={{ fontSize: '16.5px', color: '#1e293b', marginBottom: '24px', fontWeight: 400 }}>
                Neominds TechHub (“Neominds”) provides this Cookie Policy, which applies to all websites operated by or on behalf of Neominds (“Websites”). This Cookie Policy applies to all visitors, users, and others who access the Neominds Websites (“Users”). It explains how Neominds uses cookies, tags, pixels, and similar tracking technologies (collectively, “cookies”), as well as the options available to you to control them.
              </p>
              <p style={{ marginBottom: '32px' }}>
                When you visit the Neominds Websites, we use different types of cookies to operate the Websites, analyze traffic, and personalize content and technical delivery. We may also share aggregated information collected through these cookies with verified infrastructure providers.
              </p>

              {/* What are cookies */}
              <div id="what-are-cookies" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #1e293b', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#070b14', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  What are cookies?
                </h3>
                <p>
                  Cookies are small pieces of data stored on your device or browser when websites are loaded. They are widely used to “remember” you and your preferences, ensuring a consistent and efficient experience. Cookies personalize visitors’ experiences (e.g., regional routing, dark mode preferences), enable essential functions such as session integrity, help us understand usage patterns, and improve and secure the Websites. Cookies may be set by the website you are visiting (first-party) or by third parties who provide analytics, video streaming, or font delivery services.
                </p>
              </div>

              {/* What cookies do we use */}
              <div id="what-cookies-we-use" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #1e293b', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#070b14', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  What cookies do we use?
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Neominds Websites classify cookies into four distinct functional tiers:
                </p>
              </div>

              {/* Strictly necessary */}
              <div id="strictly-necessary" style={{ scrollMarginTop: '100px', marginBottom: '36px', backgroundColor: '#0a0a0a', border: '1px solid #1e293b', borderRadius: '4px', padding: '24px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#070b14', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>Strictly necessary cookies</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', padding: '2px 8px', backgroundColor: '#FF5500', color: '#ffffff', borderRadius: '2px' }}>Required</span>
                </h4>
                <p style={{ margin: 0, fontSize: '14.5px', color: '#94a3b8' }}>
                  These cookies are essential for the Websites to function and cannot be disabled through our systems. They are usually set in response to actions made by you, such as setting privacy preferences, establishing secure HTTPS connections, or submitting discovery forms. You may configure your browser to block or alert you about these cookies, but certain core features of the Websites will become unavailable. These cookies do not store personally identifiable records.
                </p>
              </div>

              {/* Performance cookies */}
              <div id="performance-cookies" style={{ scrollMarginTop: '100px', marginBottom: '36px', backgroundColor: '#000000', border: '1px solid #1e293b', borderRadius: '4px', padding: '24px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#070b14', marginBottom: '10px' }}>
                  Performance cookies
                </h4>
                <p style={{ margin: 0, fontSize: '14.5px', color: '#94a3b8' }}>
                  These cookies help us count visits and traffic sources to measure and optimize Websites speed and responsiveness. They show which case studies and service architectures are most frequently reviewed and help us identify slow asset loads. All data collected is aggregated and anonymized. If you disable these cookies, we will not know when you visited our Websites and cannot monitor platform latency.
                </p>
              </div>

              {/* Functional cookies */}
              <div id="functional-cookies" style={{ scrollMarginTop: '100px', marginBottom: '36px', backgroundColor: '#000000', border: '1px solid #1e293b', borderRadius: '4px', padding: '24px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#070b14', marginBottom: '10px' }}>
                  Functional cookies
                </h4>
                <p style={{ margin: 0, fontSize: '14.5px', color: '#94a3b8' }}>
                  These cookies enable enhanced platform features and personalization. They remember your selected delivery region (Americas, Europe), your interactive filter preferences, and your RFP draft details so you don’t have to re-enter them if your connection refreshes.
                </p>
              </div>

              {/* Targeting cookies */}
              <div id="targeting-cookies" style={{ scrollMarginTop: '100px', marginBottom: '40px', backgroundColor: '#000000', border: '1px solid #1e293b', borderRadius: '4px', padding: '24px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#070b14', marginBottom: '10px' }}>
                  Targeting &amp; marketing cookies
                </h4>
                <p style={{ margin: 0, fontSize: '14.5px', color: '#94a3b8' }}>
                  These cookies may be set through our site by marketing partners (such as LinkedIn B2B Insight Tag). They do not store direct personal records like names or emails, but uniquely identify your browser and device to show relevant technical whitepapers on professional networks.
                </p>
              </div>

              {/* Manage Preferences Card */}
              <div id="manage-preferences" style={{ scrollMarginTop: '100px', marginBottom: '40px', backgroundColor: '#0a0a0a', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <Sliders size={20} color="#FF5500" />
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#070b14', margin: 0 }}>
                    Manage Your Cookie Preferences
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>Strictly Necessary Cookies</div>
                      <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>Always active for security and core navigation.</div>
                    </div>
                    <input type="checkbox" checked={true} disabled style={{ width: '18px', height: '18px', accentColor: '#FF5500' }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>Performance &amp; Analytics</div>
                      <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>Anonymized Core Web Vitals and load monitoring.</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.performance}
                      onChange={(e) => setPreferences({ ...preferences, performance: e.target.checked })}
                      style={{ width: '18px', height: '18px', accentColor: '#FF5500', cursor: 'pointer' }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>Functional Personalization</div>
                      <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>Remembers timezone and regional delivery hub.</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                      style={{ width: '18px', height: '18px', accentColor: '#FF5500', cursor: 'pointer' }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>Targeting &amp; Retargeting</div>
                      <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>B2B whitepaper and engineering updates.</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.targeting}
                      onChange={(e) => setPreferences({ ...preferences, targeting: e.target.checked })}
                      style={{ width: '18px', height: '18px', accentColor: '#FF5500', cursor: 'pointer' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    style={{
                      padding: '12px 28px',
                      backgroundColor: '#FF5500',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '2px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    Save Preferences
                  </button>
                  {savedToast && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#039855', fontSize: '13.5px', fontWeight: 600 }}>
                      <CheckCircle2 size={16} />
                      <span>Preferences saved successfully.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* How to manage cookies */}
              <div id="how-to-manage-cookies" style={{ scrollMarginTop: '100px', borderTop: '1px solid #1e293b', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#070b14', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  How to manage cookies in your browser?
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Most browsers allow you to view, manage, delete, and block cookies for a specific website or across all domains. Please note that if you delete all cookies, any preferences you have set will be lost, including the option to opt-out of cookies.
                </p>
                <p>
                  For detailed instructions on managing cookie settings in popular browsers, refer to official guides from Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Contact Us Section (theme-dark g-section s-request) */}
      <ContactSection />

      {/* 4. Locations Section (s-contacts g-section theme-light) */}
      <LocationsSection />

      {/* 5. Newsletter Section (s-newsletter g-section js-newsletter theme-light) */}
      <section className="s-newsletter g-section js-newsletter theme-light" style={{ padding: '72px 24px', backgroundColor: '#000000', borderTop: '1px solid #eef2f6' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="s-newsletter__headline">
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#070b14', margin: 0, letterSpacing: '-0.02em' }}>
              Join our newsletter
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', margin: '8px 0 0 0', maxWidth: '580px' }}>
              Stay up to date with the latest engineering insights, tech announcements, and articles.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', maxWidth: '540px' }}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              style={{
                flex: '1 1 280px',
                padding: '14px 18px',
                fontSize: '14px',
                backgroundColor: '#0a0a0a',
                border: '1px solid #cbd5e1',
                borderRadius: '2px',
                color: '#ffffff',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: '#FF5500',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              <span>Subscribe</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {newsletterSubmitted && (
            <div style={{ marginTop: '12px', color: '#039855', fontSize: '13.5px', fontWeight: 500 }}>
              Thank you for subscribing to Neominds TechHub insights.
            </div>
          )}
        </div>
      </section>

      {/* 6. Footer */}
      <Footer onNavigate={(target) => onNavigatePage(target.replace('#', ''))} onOpenLegal={onOpenLegal} />
    </div>
  );
};

export const CookiePolicyPage = React.memo(CookiePolicyPageComponent);
