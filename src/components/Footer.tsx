import React from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';

export interface FooterLink {
  label: string;
  target: string;
  isLegal?: 'privacy' | 'cookie' | 'security';
  isSettings?: boolean;
}

const engineeringServices: FooterLink[] = [
  { label: 'Web Development', target: '#web-development' },
  { label: 'App Development', target: '#app-development' },
  { label: 'Cross-Platform Mobile App', target: '#cross-platform-app-development' },
  { label: 'Custom Software Development', target: '#custom-software-development' },
  { label: 'SaaS Development', target: '#saas-development' },
  { label: 'Legacy Modernisation', target: '#legacy-modernisation' },
  { label: 'Product Engineering', target: '#custom-software-development' },
];

const aiAndCloudServices: FooterLink[] = [
  { label: 'AI Automations', target: '#ai-automations' },
  { label: 'AI Integrations', target: '#ai-integrations' },
  { label: 'AI Systems', target: '#ai-systems' },
  { label: 'AI Native Softwares', target: '#ai-native-software' },
  { label: 'Cloud Based Softwares', target: '#cloud-based-software' },
  { label: 'Analytic Dashboard', target: '#analytics-dashboard' },
  { label: 'Custom Health Softwares', target: '#custom-health-software' },
];

const industriesAndWork: FooterLink[] = [
  { label: 'Case Studies & Portfolio', target: '#portfolio' },
  { label: 'Enterprise Systems', target: '#industries' },
  { label: 'Financial Tech', target: '#industries' },
  { label: 'Healthcare & Life Sciences', target: '#industries' },
  { label: 'E-commerce & Retail', target: '#ecommerce-platform' },
  { label: 'Training as a Service', target: '#training-as-service' },
];

const companyLinks: FooterLink[] = [
  { label: 'About Us', target: '#about-us' },
  { label: 'Leadership', target: '#leaders' },
  { label: 'Careers', target: '#careers' },
  { label: 'Certifications', target: '#certification' },
  { label: 'Insights & Blog', target: '#blog' },
  { label: 'Company Updates', target: '#company-updates' },
  { label: 'Contact Us', target: '#contacts' },
];

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
  onOpenCookies?: () => void;
}

const FooterComponent: React.FC<FooterProps> = ({ onNavigate, onOpenLegal, onOpenCookies }) => {
  const currentYear = new Date().getFullYear();

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
                  <div className="nm-brand-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 3.5H8.8L15.2 15.2V3.5H19.5V20.5H14.8L8.4 8.8V20.5H4V3.5Z" fill="#fe6200" />
                    </svg>
                  </div>
                  <span className="nm-brand-name">NeoMinds</span>
                </div>

                <p className="nm-brand-description">
                  NeoMinds helps teams transform complex challenges into intelligent, high-performance software — everything you need in one place.
                </p>

                {/* Social Channels */}
                <div className="nm-brand-socials">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nm-social-link"
                    aria-label="NeoMinds on LinkedIn"
                  >
                    <Linkedin size={16} />
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
                    href="https://instagram.com"
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
                {/* Column 1: Core Services */}
                <div className="nm-nav-col">
                  <h4 className="nm-col-header">Services</h4>
                  <ul className="nm-col-list">
                    {engineeringServices.map((link) => (
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

                {/* Column 2: AI & Cloud */}
                <div className="nm-nav-col">
                  <h4 className="nm-col-header">AI &amp; Cloud</h4>
                  <ul className="nm-col-list">
                    {aiAndCloudServices.map((link) => (
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

                {/* Column 3: Industries & Work */}
                <div className="nm-nav-col">
                  <h4 className="nm-col-header">Solutions</h4>
                  <ul className="nm-col-list">
                    {industriesAndWork.map((link) => (
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
                  <h4 className="nm-col-header">Company</h4>
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

          {/* GIANT GHOST WATERMARK */}
          <div className="nm-watermark-wrapper" aria-hidden="true">
            <span className="nm-watermark-text">NeoMinds</span>
          </div>
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
          padding: 100px 24px 120px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #120500;
          overflow: hidden;
          box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.08);
        }

        .nm-dark-banner-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 380px;
          background: radial-gradient(circle, rgba(254, 98, 0, 0.16) 0%, rgba(32, 11, 0, 0) 70%);
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
          border-radius: 9999px;
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
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          margin-top: -24px;
          padding: 48px 24px 0 24px;
          overflow: hidden;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.12);
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
          border-radius: 28px;
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
          color: #666666;
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
          color: #555555;
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
          color: #666666;
          text-decoration: none;
          transition: color 0.15s ease, transform 0.15s ease;
          display: inline-block;
          line-height: 1.4;
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
          color: #888888;
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
          color: #666666;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(0, 0, 0, 0.15);
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
          display: flex;
          justify-content: center;
          align-items: flex-end;
          overflow: hidden;
          margin-top: 10px;
          padding-bottom: 0px;
          pointer-events: none;
          user-select: none;
        }

        .nm-watermark-text {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          font-size: clamp(80px, 16vw, 240px);
          font-weight: 900;
          line-height: 0.78;
          letter-spacing: -0.04em;
          color: #e5e3dc;
          text-transform: capitalize;
          white-space: nowrap;
          display: block;
          transform: translateY(12%);
          opacity: 0.85;
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
            border-top-left-radius: 28px;
            border-top-right-radius: 28px;
            padding: 32px 16px 0 16px;
          }

          .nm-floating-card {
            border-radius: 20px;
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

          .nm-watermark-text {
            transform: translateY(8%);
          }
        }
      `}</style>
    </footer>
  );
};

export const Footer = React.memo(FooterComponent);
