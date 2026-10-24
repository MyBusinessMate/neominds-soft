import React, { useState, useEffect } from 'react';
import { Mail, Facebook, Linkedin, Copy, Check, ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';
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
  const [istTime, setIstTime] = useState('');

  const officeLocation = {
    title: 'Headquarters',
    facilityCode: 'FACILITY // HYD-HQ-01',
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

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setIstTime(`${timeStr} IST`);
      } catch {
        setIstTime('12:00:00 IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
        backgroundColor: 'var(--colors-background-dark)', // #200b00 Freehand deep dark brown
        paddingTop: 'clamp(60px, 7vw, 90px)',
        paddingBottom: 'clamp(48px, 6vw, 60px)',
        borderTop: '1px solid var(--colors-border-dark)',
        color: 'var(--colors-text-inverse)',
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
                color: 'var(--colors-text-inverse)',
                marginBottom: '16px',
                display: 'block',
                fontFamily: 'var(--typography-display-family)',
                fontSize: 'clamp(32px, 3.6vw, 44px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
              blurStrength={6}
            >
              Our office
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p
                className="body-lead"
                style={{
                  color: 'var(--colors-text-muted)',
                  marginBottom: '24px',
                  maxWidth: '420px',
                  fontFamily: 'var(--typography-body-family)',
                  fontSize: '16px',
                  lineHeight: 1.6,
                }}
              >
                Our global engineering headquarters is centrally located in Hyderabad. Connected directly with our product engineering teams worldwide.
              </p>
            </RevealElement>

            <a
              href="mailto:contact@neomindstechhub.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--colors-primary)',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: 'var(--typography-body-family)',
                transition: 'color 0.38s ease',
                minHeight: '44px',
                marginBottom: '32px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--colors-primary-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--colors-primary)')}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--colors-primary)',
                  color: 'var(--colors-text-inverse)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <Mail size={16} />
              </div>
              <span>contact@neomindstechhub.com</span>
            </a>

            {/* Connect with us on social media */}
            <div style={{ marginTop: '8px' }}>
              <span
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  color: 'var(--colors-text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  fontFamily: 'var(--typography-mono-family)',
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
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--colors-surface-dark-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--colors-text-inverse)',
                    transition: 'all 0.38s ease',
                    textDecoration: 'none',
                    border: '1px solid var(--colors-border-dark)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--colors-primary)';
                    e.currentTarget.style.borderColor = 'var(--colors-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--colors-surface-dark-subtle)';
                    e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
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
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--colors-surface-dark-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--colors-text-inverse)',
                    transition: 'all 0.38s ease',
                    textDecoration: 'none',
                    border: '1px solid var(--colors-border-dark)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--colors-primary)';
                    e.currentTarget.style.borderColor = 'var(--colors-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--colors-surface-dark-subtle)';
                    e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
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
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--colors-surface-dark-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--colors-text-inverse)',
                    transition: 'all 0.38s ease',
                    textDecoration: 'none',
                    border: '1px solid var(--colors-border-dark)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--colors-primary)';
                    e.currentTarget.style.borderColor = 'var(--colors-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--colors-surface-dark-subtle)';
                    e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Engineering Headquarters Facility Ledger */}
          <RevealElement variant="card">
            <div
              className="card-dark"
              style={{
                backgroundColor: 'var(--colors-surface-dark-subtle)', // #351505
                border: '1px solid var(--colors-border-dark)',
                borderRadius: 'var(--radius-md)', // 10px exact Freehand spec
                padding: 'clamp(24px, 3.5vw, 36px)',
                position: 'relative',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Header Status Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  paddingBottom: '18px',
                  borderBottom: '1px solid var(--colors-border-dark)',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--typography-mono-family)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      color: 'var(--colors-primary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    FACILITY // HYD-HQ-01
                  </span>
                  <span style={{ color: 'var(--colors-text-muted)', fontSize: '12px' }}>•</span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'var(--colors-text-muted)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    REGISTERED LAB
                  </span>
                </div>

                {/* Live Status Indicator */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '4px 10px',
                    backgroundColor: 'var(--colors-background-dark)',
                    border: '1px solid var(--colors-border-dark)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '11px',
                    fontFamily: 'var(--typography-mono-family)',
                    color: 'var(--colors-text-muted)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--colors-primary)',
                      boxShadow: '0 0 8px var(--colors-primary)',
                      display: 'inline-block',
                    }}
                  />
                  <span>ACTIVE {istTime ? `// ${istTime}` : '// UTC+5:30'}</span>
                </div>
              </div>

              {/* Title & Role */}
              <div style={{ marginBottom: '20px' }}>
                <h3
                  style={{
                    fontSize: 'clamp(22px, 2.4vw, 26px)',
                    fontWeight: 400,
                    color: 'var(--colors-text-inverse)',
                    fontFamily: 'var(--typography-heading1-family)',
                    letterSpacing: '-0.02em',
                    margin: '0 0 4px 0',
                  }}
                >
                  Neominds TechHub
                </h3>
                <p
                  style={{
                    color: 'var(--colors-text-muted)',
                    fontSize: '14px',
                    margin: 0,
                    fontFamily: 'var(--typography-body-family)',
                  }}
                >
                  Global Engineering Headquarters & Core Technology Center
                </p>
              </div>

              {/* Architectural Facility Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1px',
                  backgroundColor: 'var(--colors-border-dark)',
                  border: '1px solid var(--colors-border-dark)',
                  marginBottom: '20px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                }}
              >
                {/* Suite & Level */}
                <div style={{ backgroundColor: 'var(--colors-background-dark)', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: 'var(--colors-text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    SUITE & LEVEL
                  </span>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--colors-text-inverse)', lineHeight: 1.4, fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.suite}
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: 'var(--colors-text-muted)', marginTop: '2px', fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.building}
                  </span>
                </div>

                {/* Locality & Street */}
                <div style={{ backgroundColor: 'var(--colors-background-dark)', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: 'var(--colors-text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    STREET & LOCALITY
                  </span>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--colors-text-inverse)', lineHeight: 1.4, fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.locality}
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: 'var(--colors-text-muted)', marginTop: '2px', fontFamily: 'var(--typography-body-family)' }}>
                    Basheerbagh Commercial Core
                  </span>
                </div>

                {/* City & Jurisdiction */}
                <div style={{ backgroundColor: 'var(--colors-background-dark)', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: 'var(--colors-text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    CITY & JURISDICTION
                  </span>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--colors-text-inverse)', lineHeight: 1.4, fontFamily: 'var(--typography-body-family)' }}>
                    Hyderabad 500001
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: 'var(--colors-text-muted)', marginTop: '2px', fontFamily: 'var(--typography-body-family)' }}>
                    Telangana State, India
                  </span>
                </div>

                {/* Geo Coordinates */}
                <div style={{ backgroundColor: 'var(--colors-background-dark)', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: 'var(--colors-text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    GEO-COORDINATES
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--colors-primary)', fontFamily: 'var(--typography-mono-family)', lineHeight: 1.4 }}>
                    {officeLocation.coordinates}
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: 'var(--colors-text-muted)', marginTop: '2px', fontFamily: 'var(--typography-body-family)' }}>
                    Zone: Asia/Kolkata (IST)
                  </span>
                </div>
              </div>

              {/* Action Buttons: Copy Address & Map Link */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '20px',
                }}
              >
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: 'var(--colors-background-dark)',
                    border: '1px solid var(--colors-border-dark)',
                    borderRadius: '0px', // strict 0px
                    color: copied ? 'var(--colors-primary)' : 'var(--colors-text-inverse)',
                    fontSize: '13px',
                    fontWeight: 500,
                    fontFamily: 'var(--typography-body-family)',
                    cursor: 'pointer',
                    transition: 'all 0.38s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--colors-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
                  }}
                >
                  {copied ? <Check size={14} color="var(--colors-primary)" /> : <Copy size={14} />}
                  <span>{copied ? 'Address Copied' : 'Copy Full Address'}</span>
                </button>

                <a
                  href="https://maps.google.com/?q=Moguls+Court+Building+Basheerbagh+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    backgroundColor: 'var(--colors-background-dark)',
                    border: '1px solid var(--colors-border-dark)',
                    borderRadius: '0px',
                    color: 'var(--colors-text-muted)',
                    fontSize: '13px',
                    fontWeight: 500,
                    fontFamily: 'var(--typography-body-family)',
                    textDecoration: 'none',
                    transition: 'all 0.38s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--colors-primary)';
                    e.currentTarget.style.color = 'var(--colors-text-inverse)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
                    e.currentTarget.style.color = 'var(--colors-text-muted)';
                  }}
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight size={14} color="var(--colors-primary)" />
                </a>
              </div>

              {/* Direct Communications & Compliance Footer */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--colors-border-dark)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10.5px',
                      fontWeight: 500,
                      color: 'var(--colors-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    DIRECT DISPATCH
                  </span>
                  <a
                    href={`mailto:${officeLocation.email}`}
                    style={{
                      color: 'var(--colors-primary)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 500,
                      fontFamily: 'var(--typography-body-family)',
                    }}
                  >
                    {officeLocation.email}
                  </a>
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10.5px',
                      fontWeight: 500,
                      color: 'var(--colors-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    OPERATING HOURS
                  </span>
                  <span style={{ color: 'var(--colors-text-muted)', fontSize: '13.5px', fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.hours}
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10.5px',
                      fontWeight: 500,
                      color: 'var(--colors-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    SECURITY STANDARD
                  </span>
                  <span style={{ color: 'var(--colors-text-muted)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--typography-body-family)' }}>
                    <ShieldCheck size={14} color="var(--colors-primary)" />
                    SOC 2 & ISO 27001 Aligned
                  </span>
                </div>
              </div>
            </div>
          </RevealElement>
        </div>

        {/* Technical Dispatch Intake Strip */}
        <RevealElement variant="card">
          <div
            className="card-dark"
            style={{
              padding: 'clamp(24px, 3.5vw, 40px)',
              backgroundColor: 'var(--colors-surface-dark-subtle)', // #351505
              border: '1px solid var(--colors-border-dark)',
              borderRadius: 'var(--radius-md)', // 10px exact Freehand spec
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    color: 'var(--colors-primary)',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    fontFamily: 'var(--typography-mono-family)',
                  }}
                >
                  // TECHNICAL DISPATCH
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(22px, 2.5vw, 28px)',
                    fontWeight: 400,
                    color: 'var(--colors-text-inverse)',
                    margin: '0 0 8px 0',
                    fontFamily: 'var(--typography-heading1-family)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Neominds Technical Briefings
                </h3>
                <p style={{ color: 'var(--colors-text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6, fontFamily: 'var(--typography-body-family)' }}>
                  Direct engineering dispatches on distributed systems, applied LLM infrastructure, runtime optimizations, and production resilience. Published monthly. Zero promotional fluff.
                </p>
              </div>

              {/* Technical Topic Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  maxWidth: '400px',
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
                      padding: '6px 12px',
                      backgroundColor: 'var(--colors-background-dark)',
                      border: '1px solid var(--colors-border-dark)',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--colors-text-muted)',
                      borderRadius: 'var(--radius-sm)',
                      letterSpacing: '0.02em',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubscribe}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                maxWidth: '720px',
              }}
            >
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <div
                  style={{
                    flex: '1 1 280px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'var(--colors-background-dark)',
                    border: '1px solid var(--colors-border-dark)',
                    borderRadius: 'var(--radius-sm)', // 1px
                    transition: 'border-color 0.38s ease',
                  }}
                >
                  <span
                    style={{
                      paddingLeft: '14px',
                      color: 'var(--colors-primary)',
                      fontFamily: 'var(--typography-mono-family)',
                      fontSize: '13px',
                      fontWeight: 500,
                      userSelect: 'none',
                    }}
                  >
                    eng://
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
                      color: 'var(--colors-text-inverse)',
                      fontSize: '15px',
                      fontFamily: 'var(--typography-body-family)',
                    }}
                    onFocus={(e) => {
                      (e.target.parentElement as HTMLElement).style.borderColor = 'var(--colors-primary)';
                      (e.target.parentElement as HTMLElement).style.boxShadow = '0 0 0 2px var(--colors-primary)';
                    }}
                    onBlur={(e) => {
                      (e.target.parentElement as HTMLElement).style.borderColor = 'var(--colors-border-dark)';
                      (e.target.parentElement as HTMLElement).style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    height: '46px',
                    paddingInline: '24px',
                    fontWeight: 500,
                    fontSize: '14px',
                    borderRadius: '0px', // 0px button
                    backgroundColor: 'var(--colors-primary)',
                    color: 'var(--colors-text-inverse)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--typography-body-family)',
                    transition: 'background-color 0.38s cubic-bezier(0.187, 0.938, 0.355, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--colors-primary-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--colors-primary)';
                  }}
                >
                  <span>Subscribe to Dispatch</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '12.5px',
                    color: 'var(--colors-text-muted)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    lineHeight: 1.5,
                    fontFamily: 'var(--typography-body-family)',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={newsletterConsent}
                    onChange={(e) => setNewsletterConsent(e.target.checked)}
                    required
                    style={{ marginTop: '2px', accentColor: 'var(--colors-primary)' }}
                  />
                  <span>
                    I agree to receive monthly engineering briefings and technical dispatches. Unsubscribe anytime.
                  </span>
                </label>

                <span style={{ fontSize: '11px', color: 'var(--colors-text-muted)', paddingLeft: '20px', fontFamily: 'var(--typography-mono-family)' }}>
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
