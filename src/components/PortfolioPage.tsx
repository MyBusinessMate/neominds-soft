import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Footer } from './Footer';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { PORTFOLIO_CASE_STUDIES } from '../data/portfolioData';
import { UNIFIED_CASE_STUDIES } from '../data/unifiedCaseStudiesData';
import { getTechIconPath } from '../utils/techIcons';

interface PortfolioPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string, articleId?: string) => void;
  onSuccessToast: (msg: string) => void;
}

type CategoryFilter = 'ALL' | 'AI' | 'HEALTHCARE' | 'FINTECH' | 'ENTERPRISE';

const CATEGORY_MAP: Record<string, CategoryFilter> = {
  // AI & Analytics
  'flooring-inc-dashboard': 'AI',
  'dotcomweavers-project-buddy': 'AI',
  'the1am-content-creator': 'AI',
  'fundbot-sql-chatbot': 'AI',
  'fero-invoice-automation': 'AI',
  'metacognition-qa-automation': 'AI',
  'nda-ai-tracking': 'AI',
  'laptomart-ai-crm': 'AI',
  'nda-ai-agents-model': 'AI',
  'flexport-burn-reports': 'AI',

  // Healthcare & EdTech
  'mindspace-mobile-app': 'HEALTHCARE',
  'mindspace-dashboard': 'HEALTHCARE',
  'edutech-co-teacher': 'HEALTHCARE',
  'ayyo-mobile-app': 'HEALTHCARE',
  'edutech-facial-attendance': 'HEALTHCARE',
  'montessori-os': 'HEALTHCARE',
  'aigooru-fee-manager': 'HEALTHCARE',
  'bytexl-lms': 'HEALTHCARE',

  // FinTech & Logistics
  'nda-fintech-legacy': 'FINTECH',
  'tecnomart-billing': 'FINTECH',
  'keocapital-hr-screening': 'FINTECH',
  'keocapital-hr-joining': 'FINTECH',
  'flavourbombs-security-scan': 'FINTECH',
  'flyover-lead-capture': 'FINTECH',

  // Enterprise & Cloud
  'mybusinessmate-web': 'ENTERPRISE',
  'mybusinessmate-app': 'ENTERPRISE',
  'expiro-app': 'ENTERPRISE',
  'nda-healthcare-hms': 'ENTERPRISE',
  'interzoon-cloud-system': 'ENTERPRISE',
  'nda-realestate-mgmt': 'ENTERPRISE',
};

const EXECUTION_STANDARDS = [
  {
    num: '01',
    title: 'Architecture & Discovery',
    desc: 'Deep technical audits, database schema modeling, and failure-domain mapping before writing a line of code.',
    icon: <Layers size={20} color="#fe6200" />,
  },
  {
    num: '02',
    title: '2-Week Staging Demos',
    desc: 'Transparent Git pull requests, verifiable staging releases, and weekly sprint demos directly with senior engineers.',
    icon: <Zap size={20} color="#fe6200" />,
  },
  {
    num: '03',
    title: 'Automated QA & Gates',
    desc: 'Zero-regression test suites, static analysis, load simulation, and SOC2/HIPAA compliance validation.',
    icon: <ShieldCheck size={20} color="#fe6200" />,
  },
  {
    num: '04',
    title: '100% IP & Code Handover',
    desc: 'Every repository, migration script, and CI/CD workflow belongs entirely to you. No proprietary lock-in.',
    icon: <Cpu size={20} color="#fe6200" />,
  },
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigatePage,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');

  const filteredCases = useMemo(() => {
    if (activeCategory === 'ALL') return PORTFOLIO_CASE_STUDIES;
    return PORTFOLIO_CASE_STUDIES.filter((cs) => {
      const mapped = CATEGORY_MAP[cs.id];
      return mapped === activeCategory;
    });
  }, [activeCategory]);

  const handleDiscussClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigatePage('contacts');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        color: '#111111',
        minHeight: '100vh',
        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
      }}
    >
      {/* ========================================================
          1. HERO SECTION (Aligned with ServicesHubPage)
          ======================================================== */}
      <section
        style={{
          backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
          padding: 'clamp(110px, 13vw, 140px) 24px 64px',
          borderBottom: '1px solid #e4e2e1',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Eyebrow Pill */}
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '11.5px',
                fontWeight: 700,
                color: '#fe6200',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                backgroundColor: 'rgba(254, 98, 0, 0.08)',
                padding: '4px 12px',
                borderRadius: '6px',
                display: 'inline-block',
              }}
            >
              Verified Client Engagements · 30+ Systems Shipped
            </span>
          </div>

          {/* Main Title */}
          <ScrollReveal
            as="h1"
            style={{
              fontSize: 'clamp(34px, 4.8vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#000000',
              marginBottom: '20px',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              maxWidth: '920px',
            }}
          >
            Software We’ve Shipped — And the Numbers to Prove It.
          </ScrollReveal>

          {/* Subtitle / Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.25vw, 18.5px)',
              lineHeight: 1.65,
              color: '#555555',
              maxWidth: '780px',
              margin: '0 0 32px 0',
            }}
          >
            We partner with ambitious startups and global enterprises to design, build, and operate software that stands up to heavy production traffic. From AI-driven SQL query engines to HIPAA-compliant clinical platforms — here is the verified record of how we deliver.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={handleDiscussClick}
              style={{
                backgroundColor: '#fe6200',
                color: '#ffffff',
                border: 'none',
                padding: '13px 26px',
                borderRadius: '8px',
                fontSize: '14.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(254, 98, 0, 0.28)',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cf5000')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fe6200')}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('case-studies-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: '#ffffff',
                color: '#111111',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                padding: '13px 26px',
                borderRadius: '8px',
                fontSize: '14.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s, border-color 0.2s',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fe6200')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)')}
            >
              Explore Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CASE STUDIES CATALOG (Same Showcasing Style as ServicesHubPage)
          ======================================================== */}
      <section
        id="case-studies-catalog"
        style={{
          padding: '60px 24px 80px',
          backgroundColor: 'var(--colors-surface-light, #f1efeb)',
          borderTop: '1px solid #e4e2e1',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Header & Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '36px',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 36px)',
                  fontWeight: 800,
                  color: '#000000',
                  margin: '0 0 8px 0',
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                }}
              >
                Case Study Catalog
              </h2>
              <p style={{ fontSize: '15px', color: '#66615c', margin: 0 }}>
                30 verified client projects engineered across artificial intelligence, enterprise platforms, and digital products.
              </p>
            </div>

            {/* Filter Pill Controls */}
            <div
              style={{
                display: 'inline-flex',
                backgroundColor: '#ffffff',
                padding: '4px',
                borderRadius: '10px',
                border: '1px solid #e4e2e1',
                flexWrap: 'wrap',
                gap: '2px',
              }}
            >
              <button
                onClick={() => setActiveCategory('ALL')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === 'ALL' ? '#fe6200' : 'transparent',
                  color: activeCategory === 'ALL' ? '#ffffff' : '#444444',
                  transition: 'all 0.15s ease',
                }}
              >
                All (30)
              </button>
              <button
                onClick={() => setActiveCategory('AI')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === 'AI' ? '#fe6200' : 'transparent',
                  color: activeCategory === 'AI' ? '#ffffff' : '#444444',
                  transition: 'all 0.15s ease',
                }}
              >
                AI & Analytics (10)
              </button>
              <button
                onClick={() => setActiveCategory('HEALTHCARE')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === 'HEALTHCARE' ? '#fe6200' : 'transparent',
                  color: activeCategory === 'HEALTHCARE' ? '#ffffff' : '#444444',
                  transition: 'all 0.15s ease',
                }}
              >
                Healthcare & EdTech (8)
              </button>
              <button
                onClick={() => setActiveCategory('FINTECH')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === 'FINTECH' ? '#fe6200' : 'transparent',
                  color: activeCategory === 'FINTECH' ? '#ffffff' : '#444444',
                  transition: 'all 0.15s ease',
                }}
              >
                FinTech & Logistics (6)
              </button>
              <button
                onClick={() => setActiveCategory('ENTERPRISE')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === 'ENTERPRISE' ? '#fe6200' : 'transparent',
                  color: activeCategory === 'ENTERPRISE' ? '#ffffff' : '#444444',
                  transition: 'all 0.15s ease',
                }}
              >
                Enterprise & Cloud (6)
              </button>
            </div>
          </div>

          {/* Cards Grid with Corner Glow and Clean Apple HIG Styling */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '22px',
            }}
          >
            {filteredCases.map((cs, idx) => {
              const unified = UNIFIED_CASE_STUDIES[cs.id];
              const timeline = unified?.overview?.projectDuration || '3–4 Months';
              const capabilities = unified?.keyFeatures && unified.keyFeatures.length >= 3
                ? unified.keyFeatures.slice(0, 3)
                : [
                    `Production-hardened ${cs.service} system`,
                    `High-concurrency data resilience`,
                    `Full source code & IP handover`,
                  ];

              const formattedNum = String(idx + 1).padStart(2, '0');

              return (
                <RevealElement key={cs.id} variant="card" delay={(idx % 3) * 0.06}>
                  <div
                    className="nm-corner-glow"
                    onClick={() => onNavigatePage('project', cs.id)}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '12px',
                      padding: '28px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '380px',
                      transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease',
                      boxShadow: '0 6px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(254, 98, 0, 0.4)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 14px 34px -8px rgba(0, 0, 0, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)';
                    }}
                  >
                    <div>
                      {/* Top Row: Number & Category Badge */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '14px',
                        }}
                      >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(254, 98, 0, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '13px',
                              fontWeight: 800,
                              color: '#fe6200',
                              fontFamily: 'monospace',
                            }}
                          >
                            {formattedNum}
                          </div>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              color: '#111111',
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {cs.client}
                          </span>
                        </div>

                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: '#fe6200',
                            backgroundColor: 'rgba(254, 98, 0, 0.1)',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                          }}
                        >
                          {cs.category}
                        </span>
                      </div>

                      {/* Project Timeline & Metric Pill */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '8px',
                          marginBottom: '14px',
                          padding: '6px 10px',
                          backgroundColor: '#faf8f5',
                          borderRadius: '6px',
                          border: '1px solid rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        <span style={{ fontSize: '12px', color: '#66615c', fontWeight: 500 }}>
                          Timeline: <strong style={{ color: '#111111' }}>{timeline.split('(')[0].trim()}</strong>
                        </span>
                        <span style={{ fontSize: '12px', color: '#fe6200', fontWeight: 700 }}>
                          {cs.metric} {cs.metricLabel}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: '18.5px',
                          fontWeight: 700,
                          color: '#000000',
                          lineHeight: 1.35,
                          marginBottom: '10px',
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        }}
                      >
                        {cs.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '13.5px',
                          lineHeight: 1.6,
                          color: '#444444',
                          marginBottom: '18px',
                        }}
                      >
                        {cs.description}
                      </p>

                      {/* Key Capabilities Checklist */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          marginBottom: '20px',
                        }}
                      >
                        {capabilities.map((cap, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontSize: '12.5px',
                              color: '#333333',
                              lineHeight: 1.45,
                            }}
                          >
                            <CheckCircle
                              size={14}
                              color="#fe6200"
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{cap.replace(/^[•\-\*]\s*/, '').slice(0, 85)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Tags with SVGs */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                          marginBottom: '16px',
                        }}
                      >
                        {cs.tags.slice(0, 5).map((tag) => {
                          const icon = getTechIconPath(tag);
                          return (
                            <span
                              key={tag}
                              style={{
                                fontSize: '11px',
                                color: '#1a1a1a',
                                backgroundColor: '#f5f3ee',
                                border: '1px solid rgba(0, 0, 0, 0.06)',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                              }}
                            >
                              {icon && (
                                <img
                                  src={icon}
                                  alt=""
                                  aria-hidden="true"
                                  style={{ width: '12px', height: '12px', objectFit: 'contain' }}
                                />
                              )}
                              <span>{tag}</span>
                            </span>
                          );
                        })}
                      </div>

                      {/* Bottom Action Row */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '12px',
                          borderTop: '1px solid #f1efeb',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#fe6200',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          Read Full Case Study
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </RevealElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR PRODUCTION STANDARDS (Mirroring ServicesHubPage)
          ======================================================== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e4e2e1',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '44px' }}>
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#fe6200',
                fontFamily: 'monospace',
              }}
            >
              Engineering Rigor
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 38px)',
                fontWeight: 800,
                color: '#000000',
                margin: '6px 0 12px 0',
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              }}
            >
              How We Deliver Mission-Critical Systems
            </h2>
            <p style={{ fontSize: '15.5px', color: '#555555', lineHeight: 1.6, margin: 0 }}>
              Every client project follows strict engineering gates: discovery modeling, bi-weekly staging releases, automated regression verification, and full code handover without proprietary lock-in.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '22px',
            }}
          >
            {EXECUTION_STANDARDS.map((std, idx) => (
              <RevealElement key={idx} variant="card" delay={idx * 0.08}>
                <div
                  style={{
                    backgroundColor: 'var(--colors-surface-light, #fbf9f5)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#fe6200',
                        fontFamily: 'monospace',
                        marginBottom: '14px',
                      }}
                    >
                      {std.num}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#000000',
                        margin: '0 0 10px 0',
                      }}
                    >
                      {std.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                      {std.desc}
                    </p>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Contact & Locations */}
      <div id="contact-section">
        <ContactSection />
      </div>
      <LocationsSection />
      <Footer onNavigate={(target) => onNavigatePage(target.replace('#', ''))} />
    </div>
  );
};
