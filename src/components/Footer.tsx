import React from 'react';

interface FooterColumn {
  title: string;
  links: { label: string; target: string; isLegal?: 'privacy' | 'cookie' | 'security'; isSettings?: boolean }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Custom software development', target: '#services' },
      { label: 'Mobile app development', target: '#services' },
      { label: 'Web & CMS development', target: '#services' },
      { label: 'Cloud software development', target: '#services' },
      { label: 'Product engineering', target: '#services' },
      { label: 'UI/UX design', target: '#services' },
      { label: 'AI development', target: '#services' },
      { label: 'Legacy application modernization', target: '#services' },
      { label: 'Quality assurance & testing', target: '#services' },
      { label: 'DevOps', target: '#services' },
      { label: 'Cybersecurity', target: '#services' },
      { label: 'Software architecture consulting', target: '#services' },
      { label: 'Strategic tech consulting', target: '#services' },
    ],
  },
  {
    title: 'Technologies',
    links: [
      { label: 'Artificial intelligence', target: '#services' },
      { label: 'Machine learning', target: '#services' },
      { label: 'Extended reality', target: '#services' },
      { label: 'Internet of things', target: '#services' },
      { label: 'Blockchain', target: '#services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Financial services', target: '#experience' },
      { label: 'Healthcare', target: '#experience' },
      { label: 'ISV/SaaS', target: '#experience' },
      { label: 'Automotive', target: '#experience' },
      { label: 'Logistics & Supply Chain', target: '#experience' },
      { label: 'CleanTech', target: '#experience' },
      { label: 'Telecommunications', target: '#experience' },
      { label: 'Legal', target: '#experience' },
      { label: 'Energy', target: '#experience' },
      { label: 'Retail', target: '#experience' },
      { label: 'Manufacturing', target: '#experience' },
      { label: 'Biotechnology', target: '#experience' },
      { label: 'AdTech', target: '#experience' },
      { label: 'Real Estate', target: '#experience' },
    ],
  },
  {
    title: 'How we work',
    links: [
      { label: 'Nearshore development', target: '#delivery' },
      { label: 'Agile development', target: '#delivery' },
      { label: 'Staff augmentation', target: '#delivery' },
      { label: 'Dedicated development teams', target: '#delivery' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', target: '#about' },
      { label: 'Case studies', target: '#case-studies' },
      { label: 'Blog', target: '#insights' },
      { label: 'News', target: '#recognition' },
      { label: 'Certifications', target: '#recognition' },
      { label: 'Careers', target: '#contact' },
      { label: 'Privacy policy', target: '#privacy', isLegal: 'privacy' },
      { label: 'Cookie policy', target: '#cookie', isLegal: 'cookie' },
      { label: 'Information security policy', target: '#security', isLegal: 'security' },
      { label: 'Attribution', target: '#attribution' },
      { label: 'Contacts', target: '#contact' },
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
        paddingTop: 'clamp(48px, 6vw, 80px)',
        paddingBottom: '40px',
        borderTop: '1px solid #e4e4e7',
        color: '#121212',
      }}
    >
      <div className="container-large">
        {/* 5-Column Navigation Layout */}
        <div
          className="footer-nav-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '32px 24px',
            marginBottom: '48px',
          }}
        >
          {footerColumns.map((col, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#001334',
                  marginBottom: '16px',
                }}
              >
                {col.title}
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                        fontSize: '13px',
                        color: '#475067',
                        lineHeight: 1.45,
                        transition: 'color 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
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
            </div>
          ))}
        </div>

        {/* Bottom Bar: Clutch Badge, Logo, Copyright */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid #eef2f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div
              onClick={() => onNavigate('#hero')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.5px',
                  width: '18px',
                }}
              >
                <span style={{ height: '2px', backgroundColor: '#001334', width: '100%' }} />
                <span style={{ height: '2px', backgroundColor: '#001334', width: '85%' }} />
                <span style={{ height: '2px', backgroundColor: '#001334', width: '100%' }} />
                <span style={{ height: '2px', backgroundColor: '#001334', width: '70%' }} />
                <span style={{ height: '2px', backgroundColor: '#001334', width: '100%' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em', color: '#001334' }}>
                Neominds
              </span>
            </div>

            {/* Clutch Mini Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '0px',
                boxShadow: 'none',
                fontSize: '12px',
                color: '#334155',
              }}
            >
              <span style={{ fontWeight: 700, color: '#001334' }}>Clutch</span>
              <span style={{ color: '#f59e0b', fontSize: '13px' }}>★★★★★</span>
              <span style={{ fontWeight: 600 }}>4.9</span>
              <span style={{ color: '#94a3b8' }}>•</span>
              <span style={{ color: '#64748b' }}>19 reviews</span>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#64748b', margin: 0 }}>
            © 2026 Neominds. All rights reserved.
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
