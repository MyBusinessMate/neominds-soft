import React, { useState } from 'react';
import { Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface LocationsSectionProps {
  onSuccessToast?: (msg: string) => void;
  onOpenPrivacy?: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSuccessToast }) => {
  const [email, setEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !newsletterConsent) {
      alert('Please enter your email and accept terms.');
      return;
    }
    if (onSuccessToast) onSuccessToast(`Subscribed "${email}" to Neominds technology briefs.`);
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
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(300px, 1.4fr)',
            gap: 'clamp(36px, 5vw, 64px)',
            marginBottom: 'clamp(48px, 6vw, 90px)',
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
              }}
              blurStrength={6}
            >
              Our locations
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p
                className="body-lead"
                style={{
                  color: '#475067',
                  marginBottom: '28px',
                  maxWidth: '380px',
                }}
              >
                Say hello to our friendly engineering team at our headquarters.
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
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e1306c';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Instagram size={18} />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
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

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
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

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
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
              </div>
            </div>
          </div>

          {/* Right Column: Headquarters Location Card */}
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div>
              {/* Region Tab */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
                <button
                  className="btn-primary btn-sm"
                  style={{
                    borderRadius: '0px',
                  }}
                >
                  Global Headquarters
                </button>
              </div>

              {/* Location Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e4e4e7',
                  padding: 'clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 32px)',
                  maxWidth: '480px',
                  boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: '#121212',
                    marginBottom: '12px',
                  }}
                >
                  Hyderabad, India
                </h3>

                <p style={{ color: '#475067', fontSize: '15px', lineHeight: 1.6, marginBottom: '4px', fontFamily: 'var(--font-body)' }}>
                  Moguls Court 7th Floor, Basheer Bagh
                </p>
                <p style={{ color: '#475067', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
                  Hyderabad, Telangana, India
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <a
                    href="tel:+14159685678"
                    style={{
                      color: '#121212',
                      fontSize: '15px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    +1 (415) 968-5678
                  </a>
                </div>
              </div>
            </div>
          </RevealElement>
        </div>

        {/* Newsletter Subscription Strip */}
        <RevealElement variant="card">
          <div
            style={{
              padding: 'clamp(28px, 3.5vw, 44px)',
              backgroundColor: '#ffffff',
              border: '1px solid #e4e4e7',
              borderRadius: '0px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
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
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
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
                gap: '16px',
                maxWidth: '640px',
              }}
            >
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  style={{
                    flex: '1 1 260px',
                    height: '48px',
                    padding: '0 16px',
                    border: '1px solid #d0d3dd',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary btn-md"
                  style={{
                    height: '48px',
                    paddingInline: '24px',
                    fontWeight: 700,
                    borderRadius: '0px',
                  }}
                >
                  Subscribe
                </button>
              </div>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '13px',
                  color: '#64748b',
                  cursor: 'pointer',
                  userSelect: 'none',
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
