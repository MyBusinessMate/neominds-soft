import React from 'react';
import { Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

const BrandXIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export interface FooterLink {
  label: string;
  target: string;
  isLegal?: 'privacy' | 'cookie' | 'security';
  isSettings?: boolean;
}

const aiServices: FooterLink[] = [
  { label: 'AI Automations', target: '#ai-automations' },
  { label: 'AI Integrations', target: '#ai-integrations' },
  { label: 'AI Systems', target: '#ai-systems' },
  { label: 'AI Native Software', target: '#ai-native-software' },
];

const generalServices: FooterLink[] = [
  { label: 'Web Development', target: '#web-development' },
  { label: 'App Development', target: '#app-development' },
  { label: 'Cross-Platform Mobile App', target: '#cross-platform-app-development' },
  { label: 'Custom Software Development', target: '#custom-software-development' },
  { label: 'Ecommerce Platform', target: '#ecommerce-platform' },
  { label: 'Cloud Based Software', target: '#cloud-based-software' },
  { label: 'SaaS Development', target: '#saas-development' },
  { label: 'Analytic Dashboard', target: '#analytics-dashboard' },
  { label: 'Custom Health Software', target: '#custom-health-software' },
  { label: 'Legacy Modernisation', target: '#legacy-modernisation' },
  { label: 'Training as a Service', target: 'https://training.neomindstechhub.com/' },
];

const solutionsLinks: FooterLink[] = [
  { label: 'Case Studies & Projects', target: '#portfolio' },
  { label: 'Industries We Serve', target: '#industries' },
  { label: 'Technology Stack', target: '#technology' },
];

const companyLinks: FooterLink[] = [
  { label: 'About Us', target: '#about-us' },
  { label: 'Leadership', target: '#leaders' },
  // { label: 'Careers', target: '#careers' }, // Commented out per user request; easily restored by uncommenting
  { label: 'Certifications', target: '#certification' },
  { label: 'Insights & Blog', target: '#blog' },
  { label: 'Company Updates', target: '#company-updates' },
  { label: 'Contact Us', target: '#contacts' },
];

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
  onOpenCookies?: () => void;
}

const FooterComponent: React.FC<FooterProps> = ({ onNavigate = (target: string) => { window.location.href = target; }, onOpenLegal, onOpenCookies }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, link: FooterLink) => {
    if (link.target.startsWith('http://') || link.target.startsWith('https://')) {
      window.location.href = link.target;
      return;
    }
    e.preventDefault();
    if (link.isSettings && onOpenCookies) {
      onOpenCookies();
    } else if (link.isLegal && onOpenLegal) {
      onOpenLegal(link.isLegal);
    } else {
      if (onNavigate) onNavigate(link.target); else window.location.href = link.target;
    }
  };

  return (
    <footer id="footer" className="nm-footer-wrapper" role="contentinfo">
      {/* =========================================================================
          TOP SECTION: DARK CTA BANNER (Exact Reference Inspiration)
          ========================================================================= */}
      <section className="nm-footer-dark-banner" aria-label="Call to Action">
        <div className="nm-dark-banner-glow" aria-hidden="true" />
        
        <div className="nm-dark-banner-content">
          <h2 className="nm-dark-banner-heading">
            Turn your ideas into clarity
          </h2>
          <p className="nm-dark-banner-subheading">
            NeoMinds makes it effortless to build intelligent software, autonomous AI systems, and scalable cloud platforms for your team.
          </p>
          <div className="nm-dark-banner-actions">
            <button
              onClick={() => onNavigate('#contacts')}
              className="nm-dark-banner-btn"
              aria-label="Get Started with NeoMinds"
            >
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM SECTION: LIGHT CANVAS WITH FLOATING WHITE CARD & MASSIVE WATERMARK
          ========================================================================= */}
      <section className="nm-footer-light-canvas" aria-label="Site Navigation and Details">
        <div className="nm-footer-canvas-inner">
          {/* FLOATING INNER CARD */}
          <div className="nm-floating-card">
            {/* Main Links & Brand Grid */}
            <div className="nm-card-grid">
              {/* Brand Column */}
              <div className="nm-card-brand-col">
                <div
                  onClick={() => onNavigate('#hero')}
                  className="nm-brand-badge"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onNavigate('#hero')}
                  aria-label="NeoMinds Home"
                >
                  <img
                    src="/images/neominds-logo.png"
                    alt="NeoMinds"
                    className="nm-footer-logo"
                    style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
                  />
                  <span className="nm-brand-name">NeoMinds</span>
                </div>

                <p className="nm-brand-description">
                  NeoMinds helps teams transform complex challenges into intelligent, high-performance software - everything you need in one place.
                </p>

                {/* Social Channels */}
                <div className="nm-brand-socials">
                  <a
                    href="https://www.linkedin.com/company/neomindstechhub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nm-social-link"
                    aria-label="NeoMinds on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://x.com/neomindstechhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nm-social-link"
                    aria-label="NeoMinds on X"
                  >
                    <BrandXIcon size={15} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61584792628834"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nm-social-link"
                    aria-label="NeoMinds on Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nm-social-link"
                    aria-label="NeoMinds on YouTube"
                  >
                    <Youtube size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/neomindstechhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nm-social-link"
                    aria-label="NeoMinds on Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>

              {/* Navigation Columns */}
              <div className="nm-card-nav-cols">
                {/* Column 1: AI Services */}
                <div className="nm-nav-col">
                  <h4 className="nm-col-header nm-col-header-orange" style={{ color: '#fe6200', fontWeight: 700 }}>AI Services</h4>
                  <ul className="nm-col-list">
                    {aiServices.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.target}
                          onClick={(e) => handleLinkClick(e, link)}
                          className="nm-nav-link"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: General Services */}
                <div className="nm-nav-col">
                  <h4 className="nm-col-header nm-col-header-orange" style={{ color: '#fe6200', fontWeight: 700 }}>General</h4>
                  <ul className="nm-col-list">
                    {generalServices.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.target}
                          onClick={(e) => handleLinkClick(e, link)}
                          className="nm-nav-link"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Solutions */}
                <div className="nm-nav-col">
                  <h4 className="nm-col-header nm-col-header-orange" style={{ color: '#fe6200', fontWeight: 700 }}>Solutions</h4>
                  <ul className="nm-col-list">
                    {solutionsLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.target}
                          onClick={(e) => handleLinkClick(e, link)}
                          className="nm-nav-link"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: Company */}
                <div className="nm-nav-col">
                  <h4 className="nm-col-header nm-col-header-orange" style={{ color: '#fe6200', fontWeight: 700 }}>Company</h4>
                  <ul className="nm-col-list">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.target}
                          onClick={(e) => handleLinkClick(e, link)}
                          className="nm-nav-link"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Row inside Card */}
            <div className="nm-card-bottom-row">
              <span className="nm-card-copyright">
                &copy; {currentYear} NeoMinds. All rights reserved.
              </span>

              <div className="nm-card-legal-links">
                <button
                  onClick={() => onOpenLegal ? onOpenLegal('privacy') : onNavigate('#privacy-policy')}
                  className="nm-legal-btn"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => onOpenLegal ? onOpenLegal('cookie') : onNavigate('#cookie-policy')}
                  className="nm-legal-btn"
                >
                  Cookie Policy
                </button>
                <button
                  onClick={() => onOpenLegal ? onOpenLegal('security') : onNavigate('#security-policy')}
                  className="nm-legal-btn"
                >
                  Terms &amp; Security
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* GIANT GHOST WATERMARK - Positioned directly on the full-width canvas for perfect center alignment */}
        <div
          className="nm-watermark-wrapper"
          aria-hidden="true"
        >
          <span className="nm-watermark-text">
            NeoMinds
          </span>
        </div>
      </section>

      {/* =========================================================================
          EMBEDDED STYLES FOR THE PIXEL-PERFECT FOOTER
          ========================================================================= */}
      <style>{`
        .nm-footer-wrapper {
          width: 100%;
          position: relative;
          background-color: var(--colors-background-dark, #fbf9f5);
          color: #ffffff;
          overflow: hidden;
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* ----------------------------------------------------
           1. TOP DARK CTA BANNER
           ---------------------------------------------------- */
        .nm-footer-dark-banner {
          position: relative;
          width: 100%;
          padding: 100px 24px 110px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #120500;
          overflow: hidden;
          border: none;
        }

        .nm-dark-banner-glow {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 25%, rgba(254, 98, 0, 0.16) 0%, rgba(254, 98, 0, 0.04) 50%, transparent 100%);
          pointer-events: none;
        }

        .nm-dark-banner-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nm-dark-banner-heading {
          font-family: var(--font-heading, 'BL Pylon Serif', serif);
          font-size: clamp(34px, 5.2vw, 54px);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 16px 0;
        }

        .nm-dark-banner-subheading {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(15px, 1.8vw, 17px);
          line-height: 1.6;
          color: #a3a3a3;
          margin: 0 0 32px 0;
          max-width: 540px;
          font-weight: 400;
        }

        .nm-dark-banner-actions {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nm-dark-banner-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: #111111;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, background-color 0.2s ease, color 0.2s ease;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.8);
        }

        .nm-dark-banner-btn:hover {
          background-color: #f7f7f7;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(254, 98, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.9);
          color: #fe6200;
        }

        .nm-dark-banner-btn:active {
          transform: scale(0.975);
        }

        /* ----------------------------------------------------
           2. LIGHT CANVAS SECTION
           ---------------------------------------------------- */
        .nm-footer-light-canvas {
          position: relative;
          width: 100%;
          background-color: #f5f4f0;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          margin-top: 0;
          padding: 48px 24px 0 24px;
          overflow: hidden;
          box-shadow: none;
        }

        .nm-footer-canvas-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
        }

        /* ----------------------------------------------------
           3. FLOATING WHITE CARD (Apple visionOS Depth Elevation)
           ---------------------------------------------------- */
        .nm-floating-card {
          position: relative;
          z-index: 2;
          background-color: #ffffff;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 48px -12px rgba(32, 11, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 1px rgba(255, 255, 255, 0.9);
          padding: clamp(32px, 4vw, 54px);
        }

        .nm-card-grid {
          display: grid;
          grid-template-columns: 1.1fr 2.4fr;
          gap: clamp(32px, 5vw, 64px);
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        /* Brand Column */
        .nm-card-brand-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .nm-brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          margin-bottom: 18px;
          background: none;
          border: none;
          padding: 0;
        }

        .nm-brand-icon-box {
          width: 32px;
          height: 32px;
          background-color: #111111;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .nm-brand-name {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: 21px;
          font-weight: 800;
          color: #111111;
          letter-spacing: -0.025em;
        }

        .nm-brand-description {
          font-size: 13.5px;
          line-height: 1.65;
          color: #2b2b2b;
          margin: 0 0 24px 0;
          max-width: 340px;
        }

        .nm-brand-socials {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nm-social-link {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #f5f4f0;
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
          text-decoration: none;
        }

        .nm-social-link:hover {
          background-color: #fe6200;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Nav Columns */
        .nm-card-nav-cols {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .nm-nav-col {
          display: flex;
          flex-direction: column;
        }

        .nm-col-header {
          font-size: 14px;
          font-weight: 600;
          color: #111111;
          margin: 0 0 18px 0;
          letter-spacing: -0.01em;
        }

        .nm-col-header.nm-col-header-orange {
          color: #fe6200 !important;
          font-weight: 700;
          text-shadow: none !important;
          filter: none !important;
          box-shadow: none !important;
        }

        .nm-col-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nm-nav-link {
          font-size: 13px;
          color: #2b2b2b;
          text-decoration: none;
          transition: color 0.15s ease, transform 0.15s ease;
          display: inline-block;
          line-height: 1.4;
          font-weight: 500;
        }

        .nm-nav-link:hover {
          color: #fe6200;
          transform: translateX(2px);
        }

        /* Card Bottom Row */
        .nm-card-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .nm-card-copyright {
          font-size: 12.5px;
          color: #333333;
        }

        .nm-card-legal-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nm-legal-btn {
          background: none;
          border: none;
          padding: 0;
          font-size: 12.5px;
          color: #2b2b2b;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(0, 0, 0, 0.2);
          transition: color 0.15s ease, text-decoration-color 0.15s ease;
        }

        .nm-legal-btn:hover {
          color: #fe6200;
          text-decoration-color: #fe6200;
        }

        /* ----------------------------------------------------
           4. GIANT GHOST WATERMARK (Exact Match)
           ---------------------------------------------------- */
        .nm-watermark-wrapper {
          width: 100%;
          max-width: 100%;
          display: flex !important;
          justify-content: center !important;
          align-items: flex-end !important;
          text-align: center !important;
          overflow: hidden;
          margin-top: 10px;
          padding-bottom: 0px;
          pointer-events: none;
          user-select: none;
        }

        .nm-watermark-text {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: clamp(96px, 20vw, 260px);
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -0.04em;
          color: #ded9cd;
          text-transform: capitalize;
          white-space: nowrap;
          display: block;
          margin: 0 auto;
          text-align: center;
          transform: translateY(10%);
          opacity: 1;
        }

        /* ----------------------------------------------------
           RESPONSIVE BREAKPOINTS
           ---------------------------------------------------- */
        @media (max-width: 1080px) {
          .nm-card-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .nm-brand-description {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .nm-footer-dark-banner {
            padding: 70px 20px 90px 20px;
          }

          .nm-footer-light-canvas {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            padding: 32px 16px 0 16px;
          }

          .nm-floating-card {
            border-radius: 8px;
            padding: 24px;
          }

          .nm-card-nav-cols {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 20px;
          }

          .nm-card-bottom-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .nm-card-legal-links {
            flex-wrap: wrap;
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .nm-card-nav-cols {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .nm-watermark-wrapper {
            margin-top: 24px !important;
            padding-bottom: 24px !important;
          }
          .nm-watermark-text {
            font-size: clamp(68px, 19vw, 130px) !important;
            color: #8c857b !important;
            font-weight: 900 !important;
            transform: translateY(0) !important;
            line-height: 1 !important;
            opacity: 0.85 !important;
            letter-spacing: -0.04em !important;
          }
        }
      `}</style>
    </footer>
  );
};

export const Footer = React.memo(FooterComponent);
