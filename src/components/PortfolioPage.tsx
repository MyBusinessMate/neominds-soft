import React, { useState, useCallback, useMemo } from 'react';
import {
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface PortfolioPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string, articleId?: string) => void;
  onSuccessToast: (msg: string) => void;
}

import { PORTFOLIO_CASE_STUDIES } from '../data/portfolioData';

const FILTERS = [
  'All',
  'Enterprise',
  'Healthcare',
  'EdTech',
  'FinTech',
  'Retail',
  'E-commerce',
  'Real Estate',
] as const;
type FilterType = typeof FILTERS[number];

const PortfolioPageComponent: React.FC<PortfolioPageProps> = ({
  onNavigatePage,
  onSuccessToast,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [leadEmail, setLeadEmail] = useState('');

  const handleLeadSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    onSuccessToast('Thank you! A custom portfolio case study deck has been sent to your email.');
    setLeadEmail('');
  }, [leadEmail, onSuccessToast]);

  const filteredCases = useMemo(
    () =>
      activeFilter === 'All'
        ? PORTFOLIO_CASE_STUDIES
        : PORTFOLIO_CASE_STUDIES.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#000000', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 90px) 24px clamp(48px, 6vw, 70px)',
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                fontWeight: 700,
                color: '#fe6200',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Verified Case Studies · Production Results
            </span>
          </div>

          <ScrollReveal
            as="h1"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#000000',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
              display: 'block',
            }}
            blurStrength={8}
          >
            Engineering <span style={{ color: '#fe6200' }}>Impactful</span> Digital Products
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p
              style={{
                fontSize: 'clamp(16px, 1.2vw, 18px)',
                lineHeight: 1.6,
                color: '#555555',
                marginBottom: '36px',
                maxWidth: '560px',
              }}
            >
              Across finance, healthcare, AI, and enterprise logistics, we turn complex challenges into clear product direction, fragmented workflows into automated systems, and legacy infrastructure into scalable software. In just 1 year, NeoMinds has engineered and deployed 30+ production systems globally.
            </p>
          </RevealElement>

          <div className="btn-group-lg">
            <button
              onClick={() => {
                const el = document.getElementById('portfolio-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary btn-lg"
            >
              <span>Explore Case Studies</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onNavigatePage('contacts')}
              className="btn btn-outline btn-lg"
              style={{ color: '#000000', borderColor: 'rgba(255, 255, 255, 0.35)' }}
            >
              <span>Request Custom Portfolio</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <RevealElement variant="card" start="top 90%" end="top 60%">
          <div
            style={{
              backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
              border: '1px solid #f0ece2',
              borderRadius: '8px',
              padding: '28px',
              boxShadow: '0 20px 48px rgba(32, 11, 0,  0.4)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #f0ece2', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: '#16a34a' }} />
                <span style={{ fontSize: '11px', color: '#16a34a', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.04em' }}>
                  AUDITED PRODUCTION LOG
                </span>
              </div>
              <span style={{ fontSize: '12px', color: '#555555', fontFamily: 'monospace', fontWeight: 600 }}>
                Audited Production Velocity (Year 1)
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
              <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', border: '1px solid #f0ece2', padding: '18px', borderRadius: '8px', borderLeft: '3px solid #fe6200' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#fe6200', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>30+</div>
                <div style={{ fontSize: '13px', color: '#555555', marginTop: '4px', fontWeight: 500 }}>Production Systems Built</div>
              </div>
              <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', border: '1px solid #f0ece2', padding: '18px', borderRadius: '8px', borderLeft: '3px solid #16a34a' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#16a34a', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>100%</div>
                <div style={{ fontSize: '13px', color: '#555555', marginTop: '4px', fontWeight: 500 }}>On-Time Delivery Success</div>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', border: '1px solid #f0ece2', padding: '16px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#555555', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>Top Vertical Specializations</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#000000', marginTop: '4px' }}>Fintech, HealthTech, AI & Automotive</div>
              </div>
              <div style={{ backgroundColor: 'rgba(254, 98, 0, 0.1)', color: '#fe6200', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 700 }}>
                ISO 27001
              </div>
            </div>
          </div>
        </RevealElement>
      </section>

      {/* ========================================================
          FILTER TABS BAR - CREAM BEIGE BACKGROUND
          ======================================================== */}
      <section
        id="portfolio-grid"
        style={{
          borderTop: '1px solid #e4e2e1',
          borderBottom: '1px solid #e4e2e1',
          backgroundColor: 'var(--colors-surface-light, #f1efeb)',
          padding: '16px 24px',
          position: 'sticky',
          top: '68px',
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setExpandedCardId(null);
                }}
                style={{
                  backgroundColor: activeFilter === filter ? '#fe6200' : '#ffffff',
                  color: activeFilter === filter ? '#ffffff' : '#2f3437',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '8px 18px',
                  borderRadius: '8px',
                  border: activeFilter === filter ? '1px solid #fe6200' : '1px solid #e4e2e1',
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                }}
              >
                {filter} {filter === 'All' ? `(${PORTFOLIO_CASE_STUDIES.length})` : ''}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '13px', color: '#66615c', fontWeight: 500 }}>
            Showing <strong>{filteredCases.length}</strong> featured projects
          </div>
        </div>
      </section>

      {/* ========================================================
          CASE STUDIES GRID - CREAM BEIGE BACKGROUND
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--colors-surface-light, #f1efeb)', padding: '60px 24px 80px' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredCases.map((cs, idx) => {
            const isExpanded = expandedCardId === cs.id;
            return (
              <RevealElement key={cs.id} variant="card" delay={(idx % 3) * 0.08} start="top 92%" end="top 65%">
                <div
                  className="nm-corner-glow"
                  style={{
                    backgroundColor: '#ffffff',
                    border: isExpanded ? '2px solid #fe6200' : '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isExpanded ? '0 16px 36px rgba(254, 98, 0, 0.12)' : '0 6px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isExpanded) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'rgba(254, 98, 0, 0.4)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(254, 98, 0, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isExpanded) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)';
                    }
                  }}
                >
                  {/* Category & Metric Pip */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', gap: '12px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#fe6200',
                            display: 'inline-block',
                            boxShadow: '0 0 6px rgba(254, 98, 0, 0.6)',
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#fe6200',
                            fontFamily: 'monospace',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {cs.category}
                        </span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#fe6200', fontFamily: 'var(--font-heading)' }}>{cs.metric}</div>
                        <div style={{ fontSize: '11px', color: '#66615c', fontWeight: 500 }}>{cs.metricLabel}</div>
                      </div>
                    </div>

                    {/* Client & Service Subtitle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                        Client: {cs.client}
                      </span>
                      <span style={{ color: '#66615c' }}>•</span>
                      <span style={{ fontSize: '12px', color: '#fe6200', fontWeight: 600 }}>
                        {cs.service}
                      </span>
                    </div>

                    <h3
                      onClick={() => onNavigatePage('project', cs.id)}
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#000000',
                        lineHeight: 1.3,
                        marginBottom: '12px',
                        fontFamily: 'var(--font-heading)',
                        cursor: 'pointer',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
                    >
                      {cs.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '14.5px',
                        lineHeight: 1.55,
                        color: '#333333',
                        marginBottom: '18px',
                      }}
                    >
                      {cs.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '11.5px',
                            color: '#1a1a1a',
                            backgroundColor: '#f1efeb',
                            border: '1px solid #e4e2e1',
                            padding: '3px 8px',
                            borderRadius: '8px',
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Full Case Study Template Expansion Area */}
                    {isExpanded && (
                      <div
                        style={{
                          backgroundColor: '#f1efeb',
                          border: '1px solid #e4e2e1',
                          borderRadius: '8px',
                          padding: '18px',
                          marginBottom: '18px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                          fontSize: '13px',
                          color: '#2f3437',
                          lineHeight: 1.5,
                        }}
                      >
                        <div>
                          <strong style={{ color: '#000000', display: 'block', marginBottom: '2px' }}>Client Context</strong>
                          {cs.details.clientContext}
                        </div>
                        <div>
                          <strong style={{ color: '#000000', display: 'block', marginBottom: '2px' }}>Challenge & Constraints</strong>
                          {cs.details.challenge} {cs.details.constraints}
                        </div>
                        <div>
                          <strong style={{ color: '#000000', display: 'block', marginBottom: '2px' }}>Engineering Solution</strong>
                          {cs.details.approach} {cs.details.solution}
                        </div>
                        <div>
                          <strong style={{ color: '#059669', display: 'block', marginBottom: '2px' }}>Verified Results</strong>
                          {cs.details.results}
                        </div>
                        <div style={{ backgroundColor: '#ffffff', padding: '10px 12px', borderRadius: '8px', borderLeft: '3px solid #fe6200', border: '1px solid #e4e2e1' }}>
                          <strong style={{ color: '#000000', display: 'block', marginBottom: '2px' }}>Key Takeaway</strong>
                          <span style={{ fontStyle: 'italic', color: '#333333' }}>"{cs.details.takeaway}"</span>
                        </div>
                      </div>
                    )}

                    {/* Bottom Action */}
                    <div
                      style={{
                        borderTop: '1px solid #e4e2e1',
                        paddingTop: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#059669' }}>{cs.stats}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                          onClick={() => setExpandedCardId(isExpanded ? null : cs.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#fe6200',
                            fontSize: '13.5px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            cursor: 'pointer',
                            padding: '4px 6px',
                          }}
                        >
                          <span>{isExpanded ? 'Hide scope' : 'Read scope'}</span>
                          <ChevronRight
                            size={14}
                            style={{
                              transform: isExpanded ? 'rotate(90deg)' : 'none',
                              transition: 'transform 0.2s',
                            }}
                          />
                        </button>
                        <button
                          onClick={() => onNavigatePage('project', cs.id)}
                          style={{
                            backgroundColor: '#fbf9f5',
                            color: '#000000',
                            border: 'none',
                            fontSize: '12px',
                            fontWeight: 600,
                            padding: '6px 12px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <span>Full Project</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealElement>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          LEAD CTA STRIP
          ======================================================== */}
      <RevealElement variant="card" start="top 92%" end="top 68%">
        <section
          style={{
            backgroundColor: '#fe6200',
            padding: '48px 24px',
            color: '#000000',
          }}
        >
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div>
              <ScrollReveal
                as="h3"
                style={{ fontSize: '24px', fontWeight: 800, color: '#000000', marginBottom: '8px', fontFamily: 'var(--font-heading)', display: 'block' }}
                blurStrength={6}
              >
                Looking for a specialized project reference in your industry?
              </ScrollReveal>
              <RevealElement variant="text" delay={0.06}>
                <p style={{ fontSize: '15px', color: '#000000', margin: 0 }}>
                  Over 80% of our enterprise systems operate under strict NDA. Contact us for custom architectures and code walk-throughs.
                </p>
              </RevealElement>
            </div>

            <form onSubmit={handleLeadSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="Enter your corporate email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                required
                style={{
                  padding: '12px 18px',
                  fontSize: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #ffffff',
                  borderRadius: '8px',
                  color: '#000000',
                  minWidth: '280px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn btn-md"
                style={{ backgroundColor: '#fbf9f5', color: '#000000', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
              >
                Get Custom Deck
              </button>
            </form>
          </div>
        </section>
      </RevealElement>

      {/* ========================================================
          GLOBAL FOOTER
          ======================================================== */}
      <Footer
        onNavigate={(target) => {
          if (target === '#contact') {
            onNavigatePage('contacts');
          } else if (target === '#casestudies') {
            onNavigatePage('portfolio');
          } else {
            onNavigatePage('home');
          }
        }}
      />
    </div>
  );
};

export const PortfolioPage = React.memo(PortfolioPageComponent);
