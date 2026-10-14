import React from 'react';

interface FooterColumn {
  title: string;
  links: { label: string; target: string; isLegal?: 'privacy' | 'cookie' | 'security'; isSettings?: boolean }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', target: '#web-cms-development' },
      { label: 'Mobile App Development', target: '#mobile-app-development' },
      { label: 'Cross-Platform Development', target: '#mobile-app-development' },
      { label: 'Legacy App Modernization', target: '#software-development' },
      { label: 'E-commerce Software', target: '#ecommerce-development' },
      { label: 'Custom Software', target: '#software-development' },
      { label: 'AI Integration', target: '#ai-development' },
      { label: 'AI Automation', target: '#ai-automations' },
      { label: 'AI-Native Software', target: '#ai-agents' },
      { label: 'Cloud Apps Development', target: '#devops' },
      { label: 'SaaS Development', target: '#product-engineering' },
    ],
  },
  {
    title: 'Technologies',
    links: [
      { label: 'Artificial Intelligence', target: '#ai-development' },
      { label: 'Machine Learning', target: '#ai-development' },
      { label: 'Web Development', target: '#web-cms-development' },
      { label: 'Database', target: '#analytics-dashboard' },
      { label: 'Cloud Computing', target: '#devops' },
      { label: 'Data Analytics', target: '#analytics-dashboard' },
      { label: 'Automation', target: '#ai-automations' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'E-commerce', target: '#industries' },
      { label: 'Education', target: '#industries' },
      { label: 'Healthcare', target: '#industries' },
      { label: 'Real Estate', target: '#industries' },
      { label: 'Enterprise', target: '#industries' },
      { label: 'Retail', target: '#industries' },
    ],
  },
  {
    title: 'Company',
    links: [
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
    ],
  },
];

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
  onOpenCookies?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal, onOpenCookies }) => {
  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'var(--footer-padding-top)',
        paddingBottom: 'var(--footer-padding-bottom)',
        borderTop: '1px solid #e4e4e7',
        color: '#121212',
      }}
    >
      <div className="container-large">
        {/* 5 Multi-Column Layout matching EffectiveSoft design */}
        <div
          className="footer-nav-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 'var(--footer-col-gap) var(--space-6)',
            marginBottom: 'var(--space-9)',
          }}
        >
          {footerColumns.map((col, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#121212',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {col.title}
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--footer-link-gap)' }}>
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.target}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.isSettings && onOpenCookies) {
                          onOpenCookies();
                        } else if (link.isLegal && onOpenLegal) {
                          onOpenLegal(link.isLegal);
                        } else {
                          onNavigate(link.target);
                        }
                      }}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: '#475067',
                        lineHeight: 1.4,
                        transition: 'color 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        minHeight: '28px',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#2258E7')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#475067')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Decorative blue dot */}
              {idx === 0 && (
                <div style={{ position: 'absolute', bottom: '-20px', left: '0' }}>
                  <span className="blue-dot" style={{ width: '6px', height: '6px' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Bar: Logo Mark, Copyright & Clean Attribution */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid #f0f2f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div
            onClick={() => onNavigate('#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
          >
            {/* Neominds Speed Bars Icon */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5px',
                width: '18px',
              }}
            >
              <span style={{ height: '2px', backgroundColor: '#121212', width: '100%' }} />
              <span style={{ height: '2px', backgroundColor: '#121212', width: '85%' }} />
              <span style={{ height: '2px', backgroundColor: '#121212', width: '100%' }} />
              <span style={{ height: '2px', backgroundColor: '#121212', width: '70%' }} />
              <span style={{ height: '2px', backgroundColor: '#121212', width: '100%' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em', color: '#121212' }}>
              Neominds TechHub
            </span>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#666e85' }}>
            © 2026 Neominds TechHub. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-nav-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-nav-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
};
