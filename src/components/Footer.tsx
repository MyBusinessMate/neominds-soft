import React from 'react';
import { ArrowRight, Linkedin, Youtube, Instagram } from 'lucide-react';

interface FooterLink {
  label: string;
  target: string;
  isLegal?: 'privacy' | 'cookie' | 'security';
  isSettings?: boolean;
}

const servicesLinks: FooterLink[] = [
  { label: 'Web Development', target: '#web-development' },
  { label: 'App Development', target: '#app-development' },
  { label: 'Cross-Platform Mobile App', target: '#cross-platform-app-development' },
  { label: 'Custom Software Development', target: '#custom-software-development' },
  { label: 'AI Automations', target: '#ai-automations' },
  { label: 'AI Integrations', target: '#ai-integrations' },
  { label: 'AI Systems', target: '#ai-systems' },
  { label: 'E-commerce Platform', target: '#ecommerce-platform' },
  { label: 'AI Native Softwares', target: '#ai-native-software' },
  { label: 'Cloud Based Softwares', target: '#cloud-based-software' },
  { label: 'SaaS Development', target: '#saas-development' },
  { label: 'Analytic Dashboard', target: '#analytics-dashboard' },
  { label: 'Custom Health Softwares', target: '#custom-health-software' },
  { label: 'Legacy Modernisation', target: '#legacy-modernisation' },
  { label: 'Training as a Service', target: '#training-as-service' },
  { label: 'Product Engineering', target: '#product-engineering' },
];

const technologiesLinks: FooterLink[] = [
  { label: 'Web Development', target: '#web-development' },
  { label: 'Artificial Intelligence', target: '#ai-systems' },
  { label: 'Machine Learning', target: '#ai-native-software' },
  { label: 'Data Management', target: '#cloud-based-software' },
  { label: 'Data Analytics', target: '#analytics-dashboard' },
  { label: 'Automations', target: '#ai-automations' },
  { label: 'Product Engineering', target: '#custom-software-development' },
];

const industriesLinks: FooterLink[] = [
  { label: 'Enterprise', target: '#industries' },
  { label: 'Financial Tech', target: '#industries' },
  { label: 'Retail', target: '#industries' },
  { label: 'Education', target: '#industries' },
  { label: 'Healthcare', target: '#industries' },
  { label: 'E-commerce', target: '#industries' },
  { label: 'Real Estate', target: '#industries' },
  { label: 'E-learning', target: '#industries' },
];

const companyLinks: FooterLink[] = [
  { label: 'About Us', target: '#about-us' },
  { label: 'Leadership', target: '#leaders' },
  { label: 'Careers', target: '#careers' },
  { label: 'Certification', target: '#certification' },
  { label: 'Case Studies', target: '#portfolio' },
  { label: 'Blog', target: '#blog' },
  { label: 'News & Updates', target: '#company-updates' },
  { label: 'Contacts', target: '#contacts' },
  { label: 'Privacy Policy', target: '#privacy-policy', isLegal: 'privacy' },
  { label: 'Cookie Policy', target: '#cookie-policy', isLegal: 'cookie' },
];

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
  onOpenCookies?: () => void;
}

const FooterComponent: React.FC<FooterProps> = ({ onNavigate, onOpenLegal, onOpenCookies }) => {
  const handleLinkClick = (e: React.MouseEvent, link: FooterLink) => {
    e.preventDefault();
    if (link.isSettings && onOpenCookies) {
      onOpenCookies();
    } else if (link.isLegal && onOpenLegal) {
      onOpenLegal(link.isLegal);
    } else {
      onNavigate(link.target);
    }
  };

  return (
    <footer
      id="footer"
      className="nm-exact-footer"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: 'var(--font-heading)',
        overflow: 'hidden',
        borderTop: '1px solid #1e293b',
      }}
    >
      {/* =========================================================================
          TOP SECTION: BRAND LOGO + HERO CTA + 4 NUMBERED COLUMNS + PIN DECORATOR
          ========================================================================= */}
      <div className="nm-footer-container">
        {/* Top Header Row: Brand Logo */}
        <div
          onClick={() => onNavigate('#hero')}
          className="nm-footer-logo-row"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '36px',
            cursor: 'pointer',
          }}
        >
          {/* Geometric 'N' Logo Mark */}
          <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 3.5H8.8L15.2 15.2V3.5H19.5V20.5H14.8L8.4 8.8V20.5H4V3.5Z" fill="#FF5500" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
            }}
          >
            NeoMinds
          </span>
        </div>

        {/* Main Grid: Left Hero Content (Let's build what's next) & Right 4 Columns */}
        <div className="nm-footer-grid">
          {/* LEFT COLUMN: Hero Call to Action */}
          <div className="nm-footer-hero">
            {/* Kicker with horizontal line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                }}
              >
                NEXT-GEN INTELLIGENCE
              </span>
              <div style={{ width: '110px', height: '1px', backgroundColor: '#1e293b' }} />
            </div>

            {/* Main Headline */}
            <h2 className="nm-footer-heading" style={{ color: '#ffffff' }}>
              Let’s build <br />
              what’s <span style={{ color: '#FF5500' }}>next.</span>
            </h2>

            {/* Subtext */}
            <p className="nm-footer-subtext" style={{ color: '#94a3b8' }}>
              From powerful software to AI-driven systems, we help businesses turn ideas into real impact.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
              {/* Primary Button: Get in touch */}
              <button
                onClick={() => onNavigate('#contacts')}
                className="nm-btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#FF5500',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '13px 26px',
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 16px rgba(255, 85, 0, 0.25)',
                }}
              >
                Get in touch <ArrowRight size={15} />
              </button>

              {/* Secondary Link: Book a call */}
              <button
                onClick={() => onNavigate('#contacts')}
                className="nm-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: 'none',
                  padding: '4px 0',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  borderBottom: '1.5px solid #FF5500',
                }}
              >
                Book a call <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMNS: 4 Columns + Far-Right Vertical Decorator */}
          <div className="nm-footer-columns-wrap">
            {/* 01 Services */}
            <div className="nm-col">
              <div className="nm-col-header">
                <span className="nm-col-number">01</span>
                <div className="nm-col-line" />
              </div>
              <h4 className="nm-col-title">Services</h4>
              <ul className="nm-col-links">
                {servicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.target}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="nm-footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 02 Technologies */}
            <div className="nm-col">
              <div className="nm-col-header">
                <span className="nm-col-number">02</span>
                <div className="nm-col-line" />
              </div>
              <h4 className="nm-col-title">Technologies</h4>
              <ul className="nm-col-links">
                {technologiesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.target}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="nm-footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 03 Industries */}
            <div className="nm-col">
              <div className="nm-col-header">
                <span className="nm-col-number">03</span>
                <div className="nm-col-line" />
              </div>
              <h4 className="nm-col-title">Industries</h4>
              <ul className="nm-col-links">
                {industriesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.target}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="nm-footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 04 Company */}
            <div className="nm-col">
              <div className="nm-col-header">
                <span className="nm-col-number">04</span>
                <div className="nm-col-line" />
              </div>
              <h4 className="nm-col-title">Company</h4>
              <ul className="nm-col-links">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.target}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="nm-footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Far Right Decorative Pin & Word List */}
            <div className="nm-far-right-decorator">
              {/* Vertical Pin Marker */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#FF5500',
                  }}
                />
                <div
                  style={{
                    width: '1px',
                    height: '110px',
                    backgroundColor: '#1e293b',
                  }}
                />
              </div>

              {/* Vertical Stacked Words */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  lineHeight: 1.85,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                IDEAS <br />
                TECHNOLOGY <br />
                AUTOMATION <br />
                REAL IMPACT
              </div>

              <div style={{ width: '28px', height: '1.5px', backgroundColor: '#FF5500' }} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          GIANT DISPLAY WORDMARK: Neo (#ffffff) + Minds (Vibrant Orange #FF5500)
          Natural typography, perfectly centered with symmetric gaps on both edges
          ========================================================================= */}
      <div className="nm-giant-wordmark-container">
        <div
          onClick={() => onNavigate('#hero')}
          className="nm-giant-wordmark"
          title="NeoMinds"
        >
          <span className="nm-wordmark-neo">Neo</span>
          <span className="nm-wordmark-minds">Minds</span>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM BAR: LOGO + COPYRIGHT + DIVIDER + SOCIALS + SLOGAN BADGE
          ========================================================================= */}
      <div className="nm-footer-bottom">
        <div className="nm-bottom-inner">
          {/* Left: Geometric 'N' icon + vertical bar + copyright */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <div style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 3.5H8.8L15.2 15.2V3.5H19.5V20.5H14.8L8.4 8.8V20.5H4V3.5Z" fill="#FF5500" />
              </svg>
            </div>

            <div style={{ width: '1px', height: '18px', backgroundColor: '#1e293b' }} />

            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#94a3b8' }}>
              © 2026 NeoMinds TechHub. All rights reserved.
            </span>
          </div>

          {/* Center: Subtle horizontal divider line */}
          <div className="nm-bottom-center-line" />

          {/* Right: Social icons + vertical bar + orange dot + slogan */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nm-social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nm-social-icon"
                aria-label="X (Twitter)"
              >
                {/* Clean geometric X logo */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nm-social-icon"
                aria-label="YouTube"
              >
                <Youtube size={17} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nm-social-icon"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>

            <div style={{ width: '1px', height: '18px', backgroundColor: '#1e293b' }} />

            {/* Orange dot + BUILT FOR A SMARTER TOMORROW */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#FF5500',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  lineHeight: 1.25,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                }}
              >
                BUILT FOR <br />
                A SMARTER TOMORROW
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          STYLES FOR PIXEL-PERFECT REPRODUCTION OF THE SCREENSHOT
          ========================================================================= */}
      <style>{`
        .nm-footer-container {
          max-width: 1560px;
          margin: 0 auto;
          padding: clamp(48px, 5.5vw, 76px) clamp(24px, 4vw, 56px) 16px clamp(24px, 4vw, 56px);
        }

        .nm-footer-grid {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: clamp(32px, 4vw, 64px);
        }

        /* Left Hero Section */
        .nm-footer-hero {
          flex: 0 0 clamp(280px, 24vw, 360px);
          max-width: 380px;
        }

        .nm-footer-heading {
          font-family: var(--font-heading);
          font-size: clamp(38px, 4.6vw, 66px);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.035em;
          color: #ffffff;
          margin: 0 0 18px 0;
        }

        .nm-footer-subtext {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.15vw, 16px);
          color: #94a3b8;
          line-height: 1.5;
          margin: 0 0 32px 0;
          max-width: 380px;
        }

        .nm-btn-primary:hover {
          background-color: #e04a00 !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255, 85, 0, 0.35) !important;
        }

        .nm-btn-secondary:hover {
          color: #FF5500 !important;
          border-bottom-color: #FF5500 !important;
        }

        /* Right Columns Wrapper - clean single-line columns with natural flex spacing */
        .nm-footer-columns-wrap {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: clamp(20px, 2.5vw, 44px);
          padding-left: clamp(16px, 2vw, 36px);
        }

        .nm-col {
          display: flex;
          flex-direction: column;
          flex: 0 0 auto;
        }

        .nm-col-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .nm-col-number {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: #FF5500;
        }

        .nm-col-line {
          width: 22px;
          height: 1.5px;
          background-color: #FF5500;
        }

        .nm-col-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 16px 0;
          white-space: nowrap;
        }

        .nm-col-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        /* Strict single-line footer link with no awkward wrapping */
        .nm-footer-link {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: #94a3b8;
          line-height: 1.5;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .nm-footer-link:hover {
          color: #FF5500;
          transform: translateX(2px);
        }

        .nm-far-right-decorator {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-left: 12px;
          flex: 0 0 auto;
        }

        /* GIANT NeoMinds DISPLAY WORDMARK - Natural, Balanced & Centered */
        .nm-giant-wordmark-container {
          width: 100%;
          overflow: hidden;
          padding: clamp(16px, 2.5vw, 32px) clamp(24px, 4.5vw, 68px) clamp(8px, 1.5vw, 16px) clamp(24px, 4.5vw, 68px);
          user-select: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nm-giant-wordmark {
          display: inline-flex;
          align-items: baseline;
          justifyContent: center;
          font-family: var(--font-heading);
          font-size: clamp(64px, 15vw, 215px);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
          cursor: pointer;
          white-space: nowrap;
          margin: 0 auto;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
        }

        .nm-giant-wordmark:hover {
          transform: translateY(-4px);
          opacity: 0.96;
        }

        .nm-wordmark-neo {
          color: #ffffff;
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nm-wordmark-minds {
          color: #FF5500;
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nm-giant-wordmark:hover .nm-wordmark-neo {
          transform: translateY(-2px);
        }

        .nm-giant-wordmark:hover .nm-wordmark-minds {
          transform: translateY(-2px);
        }

        /* BOTTOM BAR */
        .nm-footer-bottom {
          width: 100%;
          border-top: 1px solid #1e293b;
          background-color: #050505;
          padding: 20px clamp(24px, 4.5vw, 68px);
        }

        .nm-bottom-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 24px;
        }

        .nm-bottom-center-line {
          flex: 1;
          height: 1px;
          background-color: #1e293b;
          min-width: 30px;
        }

        .nm-social-icon {
          color: #94a3b8;
          display: inline-flex;
          align-items: center;
          justifyContent: center;
          transition: color 0.2s, transform 0.2s;
        }

        .nm-social-icon:hover {
          color: #FF5500;
          transform: translateY(-1px);
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1280px) {
          .nm-footer-grid {
            flex-direction: column;
            gap: 48px;
          }

          .nm-footer-hero {
            flex: 0 0 100%;
            max-width: 600px;
          }

          .nm-footer-columns-wrap {
            width: 100%;
            padding-left: 0;
            display: grid;
            grid-template-columns: repeat(4, auto);
            gap: 32px;
            justify-content: space-between;
          }

          .nm-far-right-decorator {
            display: none;
          }
        }

        @media (max-width: 860px) {
          .nm-footer-columns-wrap {
            grid-template-columns: repeat(2, auto);
            gap: 36px 32px;
            justify-content: flex-start;
          }

          .nm-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .nm-bottom-center-line {
            display: none;
          }
        }

        @media (max-width: 520px) {
          .nm-footer-columns-wrap {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .nm-footer-heading {
            font-size: 36px;
          }
        }
      `}</style>
    </footer>
  );
};

export const Footer = React.memo(FooterComponent);


