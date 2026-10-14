import React, { useState } from 'react';
import { Mail, Facebook, Linkedin } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface LocationsSectionProps {
  onSuccessToast?: (msg: string) => void;
  onOpenPrivacy?: () => void;
}

interface LocationItem {
  city: string;
  address: string;
  phone: string;
  postalCode?: string;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSuccessToast }) => {
  const [activeTab, setActiveTab] = useState<'americas' | 'europe'>('americas');
  const [email, setEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  const americasLocations: LocationItem[] = [
    {
      city: 'San Diego, California',
      address: '4445 Eastgate Mall, Suite 200',
      postalCode: '92121',
      phone: '1-800-288-9659',
    },
    {
      city: 'San Francisco, California',
      address: '50 California St #1500',
      postalCode: '94111',
      phone: '1-800-288-9659',
    },
    {
      city: 'Pittsburgh, Pennsylvania',
      address: 'One Oxford Centre, 500 Grant St Suite 2900',
      postalCode: '15219',
      phone: '1-800-288-9659',
    },
    {
      city: 'Durham, North Carolina',
      address: 'RTP Meridian, 2530 Meridian Pkwy Suite 300',
      postalCode: '27713',
      phone: '1-800-288-9659',
    },
    {
      city: 'San Jose, Costa Rica',
      address: 'C. 118B, Trejos Montealegre',
      postalCode: '10203',
      phone: '1-800-288-9659',
    },
  ];

  const europeLocations: LocationItem[] = [
    {
      city: 'Warsaw, Poland',
      address: '126/134 Marszalkowska Street',
      postalCode: '00-008',
      phone: '1-800-288-9659',
    },
  ];

  const currentLocations = activeTab === 'americas' ? americasLocations : europeLocations;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !newsletterConsent) {
      alert('Please enter your email and accept terms.');
      return;
    }
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
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.6fr)',
            gap: 'clamp(36px, 5vw, 64px)',
            marginBottom: 'clamp(48px, 6vw, 80px)',
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
              Our locations
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p
                className="body-lead"
                style={{
                  color: '#475067',
                  marginBottom: '24px',
                  maxWidth: '380px',
                  fontSize: '15px',
                  lineHeight: 1.6,
                }}
              >
                Say hello to our friendly team at one of these locations.
              </p>
            </RevealElement>

            <a
              href="mailto:rfq@effectivesoft.com"
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
              <span>rfq@neominds.io</span>
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

          {/* Right Column: Americas & Europe Tabbed Locations */}
          <RevealElement variant="card">
            <div>
              {/* Region Tabs matching EffectiveSoft */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <button
                  onClick={() => setActiveTab('americas')}
                  style={{
                    padding: '8px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid ' + (activeTab === 'americas' ? '#2258e7' : '#d0d3dd'),
                    borderRadius: '0px',
                    backgroundColor: activeTab === 'americas' ? '#2258e7' : '#f5f7fc',
                    color: activeTab === 'americas' ? '#ffffff' : '#475067',
                    transition: 'all 0.25s ease',
                  }}
                >
                  Americas
                </button>
                <button
                  onClick={() => setActiveTab('europe')}
                  style={{
                    padding: '8px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid ' + (activeTab === 'europe' ? '#2258e7' : '#d0d3dd'),
                    borderRadius: '0px',
                    backgroundColor: activeTab === 'europe' ? '#2258e7' : '#f5f7fc',
                    color: activeTab === 'europe' ? '#ffffff' : '#475067',
                    transition: 'all 0.25s ease',
                  }}
                >
                  Europe
                </button>
              </div>

              {/* Location Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '16px',
                }}
              >
                {currentLocations.map((loc, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#f5f7fc',
                      border: '1px solid #e4e4e7',
                      borderRadius: '0px',
                      padding: '20px',
                      transition: 'border-color 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#2258e7';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e4e4e7';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#121212',
                        marginBottom: '8px',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {loc.city}
                    </h4>
                    <p style={{ color: '#666e85', fontSize: '13.5px', lineHeight: 1.5, margin: '0 0 10px 0' }}>
                      {loc.address} {loc.postalCode ? `, ${loc.postalCode}` : ''}
                    </p>
                    <a
                      href={`tel:${loc.phone}`}
                      style={{
                        color: '#2258e7',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      {loc.phone}
                    </a>
                  </div>
                ))}
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
                JOIN OUR NEWSLETTER
              </span>
              <h3
                style={{
                  fontSize: 'clamp(20px, 2.2vw, 26px)',
                  fontWeight: 700,
                  color: '#121212',
                  margin: 0,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Stay up to date with the latest news, announcements, and articles
              </h3>
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
                <span>
                  Subscribe to Neominds newsletter to receive updates. You can unsubscribe at any time. See our Privacy Policy for details.
                </span>
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
