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
                  color: '#A3A3A3',
                  marginBottom: '24px',
                  maxWidth: '420px',
                  fontSize: '15px',
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
                gap: '10px',
                color: '#A94F0B',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                transition: 'color 0.2s',
                minHeight: '44px',
                marginBottom: '32px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#BF641A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A94F0B')}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#A94F0B',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
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
                  color: '#A3A3A3',
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
                    borderRadius: '8px',
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                    border: '1px solid #292522',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#A94F0B';
                    e.currentTarget.style.borderColor = '#A94F0B';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.borderColor = '#292522';
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
                    borderRadius: '8px',
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                    border: '1px solid #292522',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#A94F0B';
                    e.currentTarget.style.borderColor = '#A94F0B';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.borderColor = '#292522';
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
                    borderRadius: '8px',
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                    border: '1px solid #292522',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#A94F0B';
                    e.currentTarget.style.borderColor = '#A94F0B';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.borderColor = '#292522';
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
              style={{
                backgroundColor: '#000000',
                border: '1px solid #292522',
                borderRadius: '8px',
                padding: 'clamp(24px, 3.5vw, 36px)',
                position: 'relative',
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
                  borderBottom: '1px solid #292522',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: '#A94F0B',
                      textTransform: 'uppercase',
                    }}
                  >
                    FACILITY // HYD-HQ-01
                  </span>
                  <span style={{ color: '#475569', fontSize: '12px' }}>•</span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#A3A3A3',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
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
                    backgroundColor: '#000000',
                    border: '1px solid #292522',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: '#A3A3A3',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#A94F0B',
                      boxShadow: '0 0 8px #A94F0B',
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
                    fontSize: 'clamp(20px, 2.2vw, 24px)',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.02em',
                    margin: '0 0 4px 0',
                  }}
                >
                  Neominds TechHub
                </h3>
                <p
                  style={{
                    color: '#A3A3A3',
                    fontSize: '13px',
                    margin: 0,
                    fontFamily: 'var(--font-heading)',
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
                  backgroundColor: '#292522',
                  border: '1px solid #292522',
                  marginBottom: '20px',
                }}
              >
                {/* Suite & Level */}
                <div style={{ backgroundColor: '#000000', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#777777',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    SUITE & LEVEL
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>
                    {officeLocation.suite}
                  </span>
                  <span style={{ display: 'block', fontSize: '12px', color: '#A3A3A3', marginTop: '2px' }}>
                    {officeLocation.building}
                  </span>
                </div>

                {/* Locality & Street */}
                <div style={{ backgroundColor: '#000000', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#777777',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    STREET & LOCALITY
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>
                    {officeLocation.locality}
                  </span>
                  <span style={{ display: 'block', fontSize: '12px', color: '#A3A3A3', marginTop: '2px' }}>
                    Basheerbagh Commercial Core
                  </span>
                </div>

                {/* City & Jurisdiction */}
                <div style={{ backgroundColor: '#000000', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#777777',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    CITY & JURISDICTION
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>
                    Hyderabad 500001
                  </span>
                  <span style={{ display: 'block', fontSize: '12px', color: '#A3A3A3', marginTop: '2px' }}>
                    Telangana State, India
                  </span>
                </div>

                {/* Geo Coordinates */}
                <div style={{ backgroundColor: '#000000', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#777777',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    GEO-COORDINATES
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#A94F0B', fontFamily: 'monospace', lineHeight: 1.4 }}>
                    {officeLocation.coordinates}
                  </span>
                  <span style={{ display: 'block', fontSize: '12px', color: '#A3A3A3', marginTop: '2px' }}>
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
                    padding: '8px 14px',
                    backgroundColor: '#000000',
                    border: '1px solid #292522',
                    borderRadius: '8px',
                    color: copied ? '#A94F0B' : '#ffffff',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#A94F0B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#292522';
                  }}
                >
                  {copied ? <Check size={14} color="#A94F0B" /> : <Copy size={14} />}
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
                    padding: '8px 14px',
                    backgroundColor: '#000000',
                    border: '1px solid #292522',
                    borderRadius: '8px',
                    color: '#A3A3A3',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#A94F0B';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#292522';
                    e.currentTarget.style.color = '#A3A3A3';
                  }}
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight size={14} color="#A94F0B" />
                </a>
              </div>

              {/* Direct Communications & Compliance Footer */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid #292522',
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
                      fontWeight: 700,
                      color: '#777777',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                    }}
                  >
                    DIRECT DISPATCH
                  </span>
                  <a
                    href={`mailto:${officeLocation.email}`}
                    style={{
                      color: '#A94F0B',
                      textDecoration: 'none',
                      fontSize: '13px',
                      fontWeight: 600,
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
                      fontWeight: 700,
                      color: '#777777',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                    }}
                  >
                    OPERATING HOURS
                  </span>
                  <span style={{ color: '#A3A3A3', fontSize: '13px' }}>
                    {officeLocation.hours}
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: '#777777',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                    }}
                  >
                    SECURITY STANDARD
                  </span>
                  <span style={{ color: '#A3A3A3', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={13} color="#A94F0B" />
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
            style={{
              padding: 'clamp(24px, 3.5vw, 40px)',
              backgroundColor: '#000000',
              border: '1px solid #292522',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
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
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#A94F0B',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    fontFamily: 'monospace',
                  }}
                >
                  // TECHNICAL DISPATCH
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(20px, 2.4vw, 26px)',
                    fontWeight: 800,
                    color: '#ffffff',
                    margin: '0 0 8px 0',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Neominds Technical Briefings
                </h3>
                <p style={{ color: '#A3A3A3', fontSize: '14.5px', margin: 0, lineHeight: 1.6 }}>
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
                      padding: '4px 10px',
                      backgroundColor: '#000000',
                      border: '1px solid #292522',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#A3A3A3',
                      borderRadius: '8px',
                      letterSpacing: '0.02em',
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
                    backgroundColor: '#050505',
                    border: '1px solid #27272a',
                    borderRadius: '8px',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      paddingLeft: '14px',
                      color: '#A94F0B',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      fontWeight: 700,
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
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                    }}
                    onFocus={(e) => {
                      (e.target.parentElement as HTMLElement).style.borderColor = '#A94F0B';
                    }}
                    onBlur={(e) => {
                      (e.target.parentElement as HTMLElement).style.borderColor = '#27272a';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    height: '46px',
                    paddingInline: '22px',
                    fontWeight: 700,
                    fontSize: '13.5px',
                    borderRadius: '8px',
                    backgroundColor: '#A94F0B',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s ease, transform 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#BF641A';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#A94F0B';
                    e.currentTarget.style.transform = 'none';
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
                    fontSize: '12px',
                    color: '#A3A3A3',
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
                    style={{ marginTop: '2px', accentColor: '#A94F0B' }}
                  />
                  <span>
                    I agree to receive monthly engineering briefings and technical dispatches. Unsubscribe anytime.
                  </span>
                </label>

                <span style={{ fontSize: '11px', color: '#777777', paddingLeft: '20px' }}>
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
