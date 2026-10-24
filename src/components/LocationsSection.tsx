import React, { useState } from 'react';
import { Mail, Facebook, Linkedin } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface LocationsSectionProps {
  onSuccessToast?: (msg: string) => void;
  onOpenPrivacy?: () => void;
}


export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSuccessToast }) => {
  const [email, setEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [subError, setSubError] = useState('');

  const officeLocation = {
    title: 'Headquarters',
    addressLine1: 'Office Space No. 704, 7th Floor, 5-9-59 & 60',
    addressLine2: 'Moguls Court Building, Basheerbagh',
    cityStateZip: 'Hyderabad-500001, Telangana State',
    country: 'India',
    fullAddress: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh, Hyderabad-500001, Telangana State',
    email: 'contact@neomindstechhub.com',
    hours: 'Mon – Fri: 9:00 AM – 6:00 PM IST',
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !newsletterConsent) {
      setSubError('Please enter your email and accept terms.');
      return;
    }
    setSubError('');
    if (onSuccessToast) onSuccessToast(`Subscribed "${email}" to Neominds newsletter.`);
    setEmail('');
  };


  return (
    <section
      id="locations"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(60px, 7vw, 90px)',
        paddingBottom: 'clamp(48px, 6vw, 60px)',
        color: '#121212',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Main Location Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.4fr)',
            gap: 'clamp(36px, 5vw, 64px)',
            marginBottom: 'clamp(48px, 6vw, 80px)',
            alignItems: 'start',
          }}
          className="location-grid"
        >
          {/* Left Column: Heading, Contact Info & Social Media Links */}
          <div>
            <ScrollReveal
              as="h2"
              className="section-title"
              style={{
                color: '#121212',
                marginBottom: '16px',
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(30px, 3.5vw, 44px)',
                fontWeight: 700,
              }}
              blurStrength={6}
            >
              Our office
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p
                className="body-lead"
                style={{
                  color: '#475067',
                  marginBottom: '24px',
                  maxWidth: '420px',
                  fontSize: '15px',
                  lineHeight: 1.6,
                }}
              >
                Our global engineering headquarters is centrally located in Hyderabad. Get in touch with our team directly.
              </p>
            </RevealElement>

            <a
              href="mailto:contact@neomindstechhub.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#2258E7',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                transition: 'color 0.2s',
                minHeight: '44px',
                marginBottom: '32px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#183c9e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2258E7')}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#2258E7',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                }}
              >
                <Mail size={15} />
              </div>
              <span>contact@neomindstechhub.com</span>
            </a>

            {/* Connect with us on social media */}
            <div style={{ marginTop: '8px' }}>
              <span
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#475067',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Connect with us
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/neominds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0px',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0a66c2';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Linkedin size={18} />
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com/neominds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0px',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/neominds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0px',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1877f2';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Single Official Headquarters Card */}
          <RevealElement variant="card">
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderLeft: '4px solid #2258e7',
                borderRadius: '4px',
                padding: 'clamp(28px, 4vw, 36px)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(34, 88, 231, 0.08)',
                  border: '1px solid rgba(34, 88, 231, 0.2)',
                  padding: '4px 10px',
                  borderRadius: '3px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: '#2258e7',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                <span>{officeLocation.title}</span>
              </div>

              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '14px',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                }}
              >
                Neominds TechHub
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                <p style={{ color: '#1e293b', fontSize: '15px', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                  {officeLocation.addressLine1}
                </p>
                <p style={{ color: '#334155', fontSize: '15px', lineHeight: 1.5, margin: 0 }}>
                  {officeLocation.addressLine2}
                </p>
                <p style={{ color: '#334155', fontSize: '15px', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                  {officeLocation.cityStateZip}
                </p>
                <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                  {officeLocation.country}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid #e2e8f0',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ fontSize: '13px', color: '#475569' }}>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>Email: </span>
                  <a href={`mailto:${officeLocation.email}`} style={{ color: '#2258e7', textDecoration: 'none', fontWeight: 600 }}>
                    {officeLocation.email}
                  </a>
                </div>
                <div style={{ fontSize: '13px', color: '#475569' }}>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>Hours: </span>
                  <span>{officeLocation.hours}</span>
                </div>
              </div>
            </div>
          </RevealElement>
        </div>

        {/* Newsletter Subscription Strip matching EffectiveSoft */}
        <RevealElement variant="card">
          <div
            style={{
              padding: 'clamp(28px, 3.5vw, 40px)',
              backgroundColor: '#f5f7fc',
              border: '1px solid #d0d3dd',
              borderRadius: '0px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#475067',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                NEWSLETTER
              </span>
              <h3
                style={{
                  fontSize: 'clamp(20px, 2.2vw, 26px)',
                  fontWeight: 700,
                  color: '#121212',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Get our latest insights
              </h3>
              <p style={{ color: '#475067', fontSize: '15px', margin: 0, lineHeight: 1.5 }}>
                Practical updates on AI, software and cloud, a couple of times a month. Unsubscribe anytime.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                maxWidth: '640px',
              }}
            >
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: '1 1 260px',
                    height: '46px',
                    padding: '0 16px',
                    borderRadius: '0px',
                    border: '1px solid #d0d3dd',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    fontFamily: 'var(--font-body)',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    height: '46px',
                    paddingInline: '26px',
                    fontWeight: 600,
                    borderRadius: '0px',
                    backgroundColor: '#2258e7',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#183c9e')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2258e7')}
                >
                  Subscribe
                </button>
              </div>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '12.5px',
                  color: '#666e85',
                  cursor: 'pointer',
                  userSelect: 'none',
                  lineHeight: 1.5,
                }}
              >
                <input
                  type="checkbox"
                  checked={newsletterConsent}
                  onChange={(e) => setNewsletterConsent(e.target.checked)}
                  required
                  style={{ marginTop: '3px' }}
                />
                <span>I agree to receive practical updates on AI, software and cloud from Neominds TechHub.</span>
              </label>
              {subError && (
                <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px', fontWeight: 500 }}>
                  {subError}
                </p>
              )}
            </form>

          </div>
        </RevealElement>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
