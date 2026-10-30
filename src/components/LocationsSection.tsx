import React, { useState } from 'react';
import { Mail, Facebook, Linkedin, Copy, Check, ArrowUpRight, ArrowRight } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface LocationsSectionProps {
  onSuccessToast?: (msg: string) => void;
  onOpenPrivacy?: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSuccessToast }) => {
  const [email, setEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [subError, setSubError] = useState('');
  const [copied, setCopied] = useState(false);

  const officeLocation = {
    title: 'Headquarters',
    facilityCode: 'Hyderabad Engineering HQ',
    name: 'Neominds TechHub',
    suite: 'Suite No. 704, 7th Floor',
    building: 'Moguls Court Building',
    locality: '5-9-59 & 60, Basheerbagh',
    cityStateZip: 'Hyderabad-500001, Telangana State',
    country: 'India',
    coordinates: '17.4018° N, 78.4772° E',
    fullAddress: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh, Hyderabad-500001, Telangana State, India',
    email: 'contact@neomindstechhub.com',
    hours: 'Mon – Fri: 09:00 – 18:00 IST',
    timezone: 'Asia/Kolkata (UTC+5:30)',
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(officeLocation.fullAddress);
      setCopied(true);
      if (onSuccessToast) onSuccessToast('Headquarters address copied to clipboard');
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = officeLocation.fullAddress;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      if (onSuccessToast) onSuccessToast('Headquarters address copied to clipboard');
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !newsletterConsent) {
      setSubError('Please enter your email and accept dispatch terms.');
      return;
    }
    setSubError('');
    if (onSuccessToast) onSuccessToast(`Subscribed "${email}" to Neominds Engineering Briefings.`);
    setEmail('');
  };

  return (
    <section
      id="locations"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)', // Freehand warm cream beige
        paddingTop: 'clamp(60px, 7vw, 90px)',
        paddingBottom: 'clamp(48px, 6vw, 60px)',
        borderTop: '1px solid var(--colors-border-light, #e4e2e1)',
        color: '#000000',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Main Location Section - Minimal, Clean & Unified */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(28px, 4vw, 48px)',
            marginBottom: 'clamp(48px, 6vw, 72px)',
            alignItems: 'stretch',
          }}
          className="location-grid"
        >
          {/* Left: Clean Unified Address Details */}
          <RevealElement variant="card">
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e4e2e1',
                borderRadius: '8px',
                padding: 'clamp(28px, 4vw, 40px)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#fe6200',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    fontFamily: 'var(--typography-mono-family)',
                  }}
                >
                  Global Engineering HQ
                </div>

                <ScrollReveal
                  as="h2"
                  className="section-title"
                  style={{
                    color: '#000000',
                    marginBottom: '12px',
                    display: 'block',
                    fontFamily: 'var(--typography-display-family)',
                    fontSize: 'clamp(28px, 3.2vw, 38px)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                  blurStrength={6}
                >
                  Our office
                </ScrollReveal>

                <p
                  style={{
                    color: '#66615c',
                    marginBottom: '24px',
                    fontFamily: 'var(--typography-body-family)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                  }}
                >
                  Our global headquarters is centrally located in Hyderabad, connected directly with our product engineering teams worldwide.
                </p>

                {/* Formatted Address */}
                <div
                  style={{
                    padding: '16px 20px',
                    backgroundColor: '#faf8f5',
                    border: '1px solid #ede9e3',
                    borderRadius: '8px',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#000000',
                      marginBottom: '6px',
                      fontFamily: 'var(--typography-heading1-family)',
                    }}
                  >
                    Neominds TechHub
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#444444',
                      fontFamily: 'var(--typography-body-family)',
                    }}
                  >
                    Office Space No. 704, 7th Floor, Moguls Court Building,<br />
                    5-9-59 & 60, Basheerbagh, Hyderabad – 500001,<br />
                    Telangana State, India
                  </div>
                </div>

                {/* Contact & Hours Info */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '16px',
                    marginBottom: '24px',
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#4b5563',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '4px',
                        fontFamily: 'var(--typography-mono-family)',
                      }}
                    >
                      Email Dispatch
                    </span>
                    <a
                      href="mailto:contact@neomindstechhub.com"
                      style={{
                        color: '#fe6200',
                        fontSize: '14px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontFamily: 'var(--typography-body-family)',
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Mail size={14} /> contact@neomindstechhub.com</span>
                    </a>
                  </div>

                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#4b5563',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '4px',
                        fontFamily: 'var(--typography-mono-family)',
                      }}
                    >
                      Operating Hours
                    </span>
                    <span
                      style={{
                        color: '#1a1a1a',
                        fontSize: '14px',
                        fontWeight: 500,
                        fontFamily: 'var(--typography-body-family)',
                      }}
                    >
                      Mon – Fri: 09:00 – 18:00 IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid #e4e2e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e4e2e1',
                      borderRadius: '8px',
                      color: copied ? '#fe6200' : '#1a1a1a',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: 'var(--typography-body-family)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#fe6200';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e4e2e1';
                    }}
                  >
                    {copied ? <Check size={14} color="#fe6200" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy Address'}</span>
                  </button>

                  <a
                    href="https://maps.google.com/?q=Neominds+Tech+Hub+Basheerbagh+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '8px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e4e2e1',
                      borderRadius: '8px',
                      color: '#1a1a1a',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: 'var(--typography-body-family)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#fe6200';
                      e.currentTarget.style.color = '#fe6200';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e4e2e1';
                      e.currentTarget.style.color = '#1a1a1a';
                    }}
                  >
                    <span>Open in Maps</span>
                    <ArrowUpRight size={14} color="#fe6200" />
                  </a>
                </div>

                {/* Social Icons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <a
                    href="https://www.linkedin.com/company/neominds"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#faf8f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1a1a1a',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                      border: '1px solid #e4e2e1',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#fe6200';
                      e.currentTarget.style.borderColor = '#fe6200';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#faf8f5';
                      e.currentTarget.style.borderColor = '#e4e2e1';
                      e.currentTarget.style.color = '#1a1a1a';
                    }}
                  >
                    <Linkedin size={16} />
                  </a>

                  <a
                    href="https://x.com/neominds"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#faf8f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1a1a1a',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                      border: '1px solid #e4e2e1',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#fe6200';
                      e.currentTarget.style.borderColor = '#fe6200';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#faf8f5';
                      e.currentTarget.style.borderColor = '#e4e2e1';
                      e.currentTarget.style.color = '#1a1a1a';
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href="https://facebook.com/neominds"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#faf8f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1a1a1a',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                      border: '1px solid #e4e2e1',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#fe6200';
                      e.currentTarget.style.borderColor = '#fe6200';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#faf8f5';
                      e.currentTarget.style.borderColor = '#e4e2e1';
                      e.currentTarget.style.color = '#1a1a1a';
                    }}
                  >
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </div>
          </RevealElement>

          {/* Right: Embedded Google Map */}
          <RevealElement variant="card">
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '420px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e4e2e1',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                backgroundColor: '#ffffff',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2478606727113!2d78.47230017425652!3d17.39988878348942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6818176fa9aab98f%3A0x1b1e4a4037e0545c!2sNeominds%20Tech%20Hub!5e0!3m2!1sen!2sin!4v1793282847751!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', width: '100%', height: '100%', minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Neominds Tech Hub Location Map"
              />
            </div>
          </RevealElement>
        </div>

        {/* Technical Dispatch Intake Strip - Centered, Compact with Brand Orange Corner Borders */}
        <RevealElement variant="card">
          <div
            className="nm-technical-briefings-card nm-corner-glow"
            style={{
              maxWidth: '740px',
              margin: '0 auto',
              padding: 'clamp(32px, 4vw, 44px) clamp(20px, 3.5vw, 40px)',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header Content */}
            <div style={{ maxWidth: '600px', marginBottom: '18px', textAlign: 'center' }}>
              <h3
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 30px)',
                  fontWeight: 400,
                  color: '#000000',
                  margin: '0 0 10px 0',
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Neominds Technical Briefings
              </h3>
              <p
                style={{
                  color: '#555555',
                  fontSize: '14.5px',
                  margin: 0,
                  lineHeight: 1.6,
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                Monthly engineering dispatches on real systems — LLM latency benchmarks, distributed architecture decisions, and production resilience. No promotional fluff, no spam.
              </p>
            </div>

            {/* Technical Topic Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '8px',
                maxWidth: '620px',
                marginBottom: '26px',
              }}
            >
              {[
                'Distributed Systems',
                'Applied AI & RAG',
                'High-Concurrency',
                'Zero-Trust Architecture',
              ].map((topic) => (
                <span
                  key={topic}
                  style={{
                    padding: '5px 12px',
                    backgroundColor: '#f1efeb',
                    border: '1px solid #e4e2e1',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#2f3437',
                    borderRadius: '6px',
                    letterSpacing: '0.02em',
                    fontFamily: "var(--typography-mono-family, 'Fira Code', monospace)",
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubscribe}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
                width: '100%',
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  width: '100%',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    flex: '1 1 280px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f1efeb',
                    border: '1px solid #e4e2e1',
                    borderRadius: '8px',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      paddingLeft: '14px',
                      color: '#fe6200',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      fontSize: '13px',
                      fontWeight: 600,
                      userSelect: 'none',
                    }}
                  >
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    required
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 14px 0 8px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#000000',
                      fontSize: '15px',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                    onFocus={(e) => {
                      (e.target.parentElement as HTMLElement).style.borderColor = '#fe6200';
                      (e.target.parentElement as HTMLElement).style.boxShadow = '0 0 0 2px rgba(254, 98, 0, 0.2)';
                    }}
                    onBlur={(e) => {
                      (e.target.parentElement as HTMLElement).style.borderColor = '#e4e2e1';
                      (e.target.parentElement as HTMLElement).style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    height: '46px',
                    paddingInline: '24px',
                    fontWeight: 700,
                    fontSize: '14px',
                    borderRadius: '8px',
                    backgroundColor: '#fe6200',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    letterSpacing: '0.02em',
                    transition: 'background-color 0.2s ease, transform 0.15s ease',
                    boxShadow: '0 2px 8px rgba(254, 98, 0, 0.28)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#cf5000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fe6200';
                  }}
                >
                  <span>Subscribe to Dispatch</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '4px',
                }}
              >
                <label
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '12.5px',
                    color: '#555555',
                    cursor: 'pointer',
                    userSelect: 'none',
                    lineHeight: 1.5,
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={newsletterConsent}
                    onChange={(e) => setNewsletterConsent(e.target.checked)}
                    required
                    style={{ accentColor: '#fe6200' }}
                  />
                  <span>
                    I agree to receive monthly engineering briefings and technical dispatches. Unsubscribe anytime.
                  </span>
                </label>

                <span
                  style={{
                    fontSize: '11px',
                    color: '#66615c',
                    fontFamily: "var(--typography-mono-family, 'Fira Code', monospace)",
                    textAlign: 'center',
                  }}
                >
                  Zero spam protocol • Direct engineering communications only • No third-party data sharing
                </span>
              </div>

              {subError && (
                <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0 0', fontWeight: 500 }}>
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
