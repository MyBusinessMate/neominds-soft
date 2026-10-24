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
        backgroundColor: '#000000',
        paddingTop: 'clamp(60px, 7vw, 90px)',
        paddingBottom: 'clamp(48px, 6vw, 60px)',
        color: '#ffffff',
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
                color: '#ffffff',
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
                  color: '#94a3b8',
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
                color: '#FF5500',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                transition: 'color 0.2s',
                minHeight: '44px',
                marginBottom: '32px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e04a00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FF5500')}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#FF5500',
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
                  color: '#94a3b8',
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
                    backgroundColor: '#111827',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                    border: '1px solid #1e293b',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF5500';
                    e.currentTarget.style.borderColor = '#FF5500';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#111827';
                    e.currentTarget.style.borderColor = '#1e293b';
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
                    backgroundColor: '#111827',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                    border: '1px solid #1e293b',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF5500';
                    e.currentTarget.style.borderColor = '#FF5500';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#111827';
                    e.currentTarget.style.borderColor = '#1e293b';
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
                    backgroundColor: '#111827',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                    border: '1px solid #1e293b',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF5500';
                    e.currentTarget.style.borderColor = '#FF5500';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#111827';
                    e.currentTarget.style.borderColor = '#1e293b';
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
                backgroundColor: '#0a0a0a',
                border: '1px solid #1e293b',
                borderLeft: '4px solid #FF5500',
                borderRadius: '0px',
                padding: 'clamp(28px, 4vw, 36px)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 85, 0, 0.12)',
                  border: '1px solid rgba(255, 85, 0, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '0px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: '#FF5500',
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
                  color: '#ffffff',
                  marginBottom: '14px',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                }}
              >
                Neominds TechHub
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                <p style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                  {officeLocation.addressLine1}
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.5, margin: 0 }}>
                  {officeLocation.addressLine2}
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '15px', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                  {officeLocation.cityStateZip}
                </p>
                <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                  {officeLocation.country}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid #1e293b',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                  <span style={{ fontWeight: 600, color: '#ffffff' }}>Email: </span>
                  <a href={`mailto:${officeLocation.email}`} style={{ color: '#FF5500', textDecoration: 'none', fontWeight: 600 }}>
                    {officeLocation.email}
                  </a>
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                  <span style={{ fontWeight: 600, color: '#ffffff' }}>Hours: </span>
                  <span>{officeLocation.hours}</span>
                </div>
              </div>
            </div>
          </RevealElement>
        </div>

        {/* Newsletter Subscription Strip */}
        <RevealElement variant="card">
          <div
            style={{
              padding: 'clamp(28px, 3.5vw, 40px)',
              backgroundColor: '#0a0a0a',
              border: '1px solid #1e293b',
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
                  color: '#FF5500',
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
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Get our latest insights
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '15px', margin: 0, lineHeight: 1.5 }}>
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
                    border: '1px solid #1e293b',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#111827',
                    color: '#ffffff',
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
                    backgroundColor: '#FF5500',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e04a00')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF5500')}
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
                  color: '#94a3b8',
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
