import React, { useState } from 'react';
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
                color: '#000000',
                marginBottom: '16px',
                display: 'block',
                fontFamily: 'var(--typography-display-family)',
                fontSize: 'clamp(32px, 3.6vw, 44px)',
                fontWeight: 700,
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
                  color: '#66615c',
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
                color: '#fe6200',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: 'var(--typography-body-family)',
                transition: 'color 0.25s ease',
                minHeight: '44px',
                marginBottom: '32px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#cf5000')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fe6200')}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
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
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: '#66615c',
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
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
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
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#e4e2e1';
                    e.currentTarget.style.color = '#1a1a1a';
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
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
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
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#e4e2e1';
                    e.currentTarget.style.color = '#1a1a1a';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/neominds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
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
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#e4e2e1';
                    e.currentTarget.style.color = '#1a1a1a';
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
                backgroundColor: '#ffffff',
                border: '1px solid #e4e2e1',
                borderRadius: '8px',
                padding: 'clamp(24px, 3.5vw, 36px)',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              }}
            >


              {/* Title & Role */}
              <div style={{ marginBottom: '20px' }}>
                <h3
                  style={{
                    fontSize: 'clamp(22px, 2.4vw, 26px)',
                    fontWeight: 700,
                    color: '#000000',
                    fontFamily: 'var(--typography-heading1-family)',
                    letterSpacing: '-0.02em',
                    margin: '0 0 4px 0',
                  }}
                >
                  Neominds TechHub
                </h3>
                <p
                  style={{
                    color: '#66615c',
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
                  backgroundColor: '#e4e2e1',
                  border: '1px solid #e4e2e1',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {/* Suite & Level */}
                <div style={{ backgroundColor: '#ffffff', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#868683',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    SUITE & LEVEL
                  </span>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#000000', lineHeight: 1.4, fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.suite}
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: '#66615c', marginTop: '2px', fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.building}
                  </span>
                </div>

                {/* Locality & Street */}
                <div style={{ backgroundColor: '#ffffff', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#868683',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    STREET & LOCALITY
                  </span>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#000000', lineHeight: 1.4, fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.locality}
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: '#66615c', marginTop: '2px', fontFamily: 'var(--typography-body-family)' }}>
                    Basheerbagh Commercial Core
                  </span>
                </div>

                {/* City & Jurisdiction */}
                <div style={{ backgroundColor: '#ffffff', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#868683',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    CITY & JURISDICTION
                  </span>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#000000', lineHeight: 1.4, fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.cityStateZip}
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: '#66615c', marginTop: '2px', fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.country}
                  </span>
                </div>

                {/* Geo Coordinates */}
                <div style={{ backgroundColor: '#ffffff', padding: '14px 16px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#868683',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    GEO-COORDINATES
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#fe6200', fontFamily: 'var(--typography-mono-family)', lineHeight: 1.4 }}>
                    {officeLocation.coordinates}
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: '#66615c', marginTop: '2px', fontFamily: 'var(--typography-body-family)' }}>
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
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    borderRadius: '8px',
                    color: '#66615c',
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: 'var(--typography-body-family)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e4e2e1';
                    e.currentTarget.style.color = '#66615c';
                  }}
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight size={14} color="#fe6200" />
                </a>
              </div>

              {/* Direct Communications & Compliance Footer */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid #e4e2e1',
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
                      color: '#868683',
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
                      color: '#fe6200',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
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
                      fontWeight: 700,
                      color: '#868683',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    OPERATING HOURS
                  </span>
                  <span style={{ color: '#fbf9f5', fontSize: '13.5px', fontWeight: 500, fontFamily: 'var(--typography-body-family)' }}>
                    {officeLocation.hours}
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: '#868683',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                      fontFamily: 'var(--typography-mono-family)',
                    }}
                  >
                    SECURITY STANDARD
                  </span>
                  <span style={{ color: '#059669', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--typography-body-family)' }}>
                    <ShieldCheck size={14} color="#059669" />
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
              backgroundColor: '#ffffff',
              border: '1px solid #e4e2e1',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
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
                <h3
                  style={{
                    fontSize: 'clamp(22px, 2.5vw, 28px)',
                    fontWeight: 700,
                    color: '#000000',
                    margin: '0 0 8px 0',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Neominds Technical Briefings
                </h3>
                <p style={{ color: '#555555', fontSize: '15px', margin: 0, lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
                  Monthly engineering dispatches on real systems — LLM latency benchmarks, distributed architecture decisions, and production resilience. No promotional fluff, no spam.
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
                      backgroundColor: '#f1efeb',
                      border: '1px solid #e4e2e1',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#2f3437',
                      borderRadius: '8px',
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
                    backgroundColor: '#f1efeb',
                    border: '1px solid #e4e2e1',
                    borderRadius: '8px',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      paddingLeft: '14px',
                      color: '#fe6200',
                      fontFamily: 'var(--typography-body-family)',
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
                      fontFamily: 'var(--typography-body-family)',
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
                    fontWeight: 600,
                    fontSize: '14px',
                    borderRadius: '8px',
                    backgroundColor: '#fe6200',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--typography-body-family)',
                    transition: 'background-color 0.2s ease',
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '12.5px',
                    color: '#66615c',
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
                    style={{ marginTop: '2px', accentColor: '#fe6200' }}
                  />
                  <span>
                    I agree to receive monthly engineering briefings and technical dispatches. Unsubscribe anytime.
                  </span>
                </label>

                <span style={{ fontSize: '11px', color: '#868683', paddingLeft: '20px', fontFamily: 'var(--typography-mono-family)' }}>
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
