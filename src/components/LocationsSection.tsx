import React, { useState } from 'react';
import { Mail, Facebook, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface LocationsSectionProps {
  onSuccessToast?: (msg: string) => void;
  onOpenPrivacy?: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSuccessToast }) => {
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

  
  return (
    <section
      id="locations"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)', // Unified warm cream beige
        paddingTop: 'clamp(12px, 1.8vw, 24px)',
        paddingBottom: 'clamp(64px, 7vw, 96px)',
        borderTop: 'none',
        color: '#000000',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Main Location Section - Minimal, Clean & Unified */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 4.5vw, 64px)',
            marginBottom: 'clamp(32px, 4vw, 48px)',
            alignItems: 'stretch',
          }}
          className="location-grid"
        >
          {/* Left: Clean Address Details Seamlessly Blended (No White Box) */}
          <RevealElement variant="card">
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <ScrollReveal
                  as="h2"
                  className="section-title"
                  style={{
                    color: '#000000',
                    marginBottom: '14px',
                    display: 'block',
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(32px, 3.6vw, 44px)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                  }}
                  blurStrength={6}
                >
                  Our office
                </ScrollReveal>

                <p
                  style={{
                    color: '#444444',
                    marginBottom: '26px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    fontSize: '15.5px',
                    lineHeight: 1.6,
                    maxWidth: '480px',
                  }}
                >
                  Centrally located in Hyderabad, connected directly with our product engineering teams and clients worldwide.
                </p>

                {/* Formatted Address with Orange Brand Accent Bar */}
                <div
                  style={{
                    paddingLeft: '16px',
                    borderLeft: '3px solid #fe6200',
                    marginBottom: '26px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#000000',
                      marginBottom: '6px',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  >
                    Neominds TechHub
                  </div>
                  <div
                    style={{
                      fontSize: '14.5px',
                      lineHeight: 1.6,
                      color: '#3a3a3a',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
                    marginBottom: '26px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e4e2e1',
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#66615c',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '6px',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Mail size={15} /> contact@neomindstechhub.com
                    </a>
                  </div>

                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#66615c',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '6px',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                    >
                      Operating Hours
                    </span>
                    <span
                      style={{
                        color: '#111111',
                        fontSize: '14px',
                        fontWeight: 500,
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
                      padding: '8px 15px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #dcd7cf',
                      borderRadius: '8px',
                      color: copied ? '#fe6200' : '#111111',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#fe6200';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#dcd7cf';
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
                      gap: '6px',
                      padding: '8px 15px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #dcd7cf',
                      borderRadius: '8px',
                      color: '#111111',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#fe6200';
                      e.currentTarget.style.color = '#fe6200';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#dcd7cf';
                      e.currentTarget.style.color = '#111111';
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
