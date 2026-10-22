import React, { useState, useCallback, useMemo } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface PortfolioPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string) => void;
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
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              backgroundColor: 'rgba(34, 88, 231, 0.08)',
              border: '1px solid rgba(34, 88, 231, 0.25)',
              borderRadius: '2px',
              color: '#2258e7',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={14} />
            <span>Success Stories & Client Results</span>
          </div>

          <ScrollReveal
            as="h1"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#0f172a',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
              display: 'block',
            }}
            blurStrength={8}
          >
            Engineering <span style={{ color: '#2258e7' }}>Impactful</span> Digital Products
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p
              style={{
                fontSize: 'clamp(16px, 1.2vw, 18px)',
                lineHeight: 1.6,
                color: '#475569',
                marginBottom: '36px',
                maxWidth: '560px',
              }}
            >
              Across finance, healthcare, AI, and enterprise logistics, we turn bold ideas into clear product direction, fragmented workflows into automated systems, and legacy tech into scalable platforms. Over 23+ years, Neominds has delivered 1,000+ successful projects globally.
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
              style={{ color: '#0f172a', borderColor: '#cbd5e1' }}
            >
              <span>Request Custom Portfolio</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <RevealElement variant="card" start="top 90%" end="top 60%">
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '28px',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.04)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
              </div>
              <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace', fontWeight: 600 }}>
                DELIVERY METRICS // 2003–2026
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '18px', borderRadius: '6px', borderLeft: '3px solid #2258e7' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#2258e7', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>1,000+</div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>Successful Products Delivered</div>
              </div>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '18px', borderRadius: '6px', borderLeft: '3px solid #16a34a' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#16a34a', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>52%</div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>Clients Partnering &gt; 4 Years</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>Top Vertical Specializations</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>Fintech, HealthTech, AI & Automotive</div>
              </div>
              <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.1)', color: '#2258e7', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 700 }}>
                ISO 27001
              </div>
            </div>
          </div>
        </RevealElement>
      </section>

      {/* ========================================================
          FILTER TABS BAR
          ======================================================== */}
      <section
        id="portfolio-grid"
        style={{
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
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
                  backgroundColor: activeFilter === filter ? '#2258e7' : '#ffffff',
                  color: activeFilter === filter ? '#ffffff' : '#334155',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '8px 18px',
                  borderRadius: '4px',
                  border: activeFilter === filter ? '1px solid #2258e7' : '1px solid #cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                }}
              >
                {filter} {filter === 'All' ? `(${PORTFOLIO_CASE_STUDIES.length})` : ''}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '13px', color: '#64748b' }}>
            Showing <strong>{filteredCases.length}</strong> featured projects
          </div>
        </div>
      </section>

      {/* ========================================================
          CASE STUDIES GRID
          ======================================================== */}
      <section style={{ padding: '60px 24px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
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
                  style={{
                    backgroundColor: '#f8fafc',
                    border: isExpanded ? '2px solid #2258e7' : '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isExpanded ? '0 16px 36px rgba(34, 88, 231, 0.12)' : '0 4px 16px rgba(0, 0, 0, 0.03)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isExpanded) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#2258e7';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(34, 88, 231, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isExpanded) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                    }
                  }}
                >
                  {/* Category & Metric Pill */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#2258e7',
                          backgroundColor: 'rgba(34, 88, 231, 0.08)',
                          padding: '4px 10px',
                          borderRadius: '2px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {cs.category}
                      </span>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#2258e7', fontFamily: 'var(--font-heading)' }}>{cs.metric}</div>
                        <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>{cs.metricLabel}</div>
                      </div>
                    </div>

                    {/* Client & Service Subtitle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                        Client: {cs.client}
                      </span>
                      <span style={{ color: '#cbd5e1' }}>•</span>
                      <span style={{ fontSize: '12px', color: '#2258e7', fontWeight: 600 }}>
                        {cs.service}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#0f172a',
                        lineHeight: 1.3,
                        marginBottom: '12px',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {cs.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '14.5px',
                        lineHeight: 1.55,
                        color: '#475569',
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
                            color: '#334155',
                            backgroundColor: '#ffffff',
                            border: '1px solid #e2e8f0',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            fontWeight: 500,
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
                          backgroundColor: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          padding: '18px',
                          marginBottom: '18px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                          fontSize: '13px',
                          color: '#334155',
                          lineHeight: 1.5,
                        }}
                      >
                        <div>
                          <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>Client Context</strong>
                          {cs.details.clientContext}
                        </div>
                        <div>
                          <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>Challenge & Constraints</strong>
                          {cs.details.challenge} {cs.details.constraints}
                        </div>
                        <div>
                          <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>Engineering Solution</strong>
                          {cs.details.approach} {cs.details.solution}
                        </div>
                        <div>
                          <strong style={{ color: '#16a34a', display: 'block', marginBottom: '2px' }}>Verified Results</strong>
                          {cs.details.results}
                        </div>
                        <div style={{ backgroundColor: '#f1f5f9', padding: '10px 12px', borderRadius: '4px', borderLeft: '3px solid #2258e7' }}>
                          <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>Key Takeaway</strong>
                          <span style={{ fontStyle: 'italic', color: '#475569' }}>"{cs.details.takeaway}"</span>
                        </div>
                      </div>
                    )}

                    {/* Bottom Action */}
                    <div
                      style={{
                        borderTop: '1px solid #e2e8f0',
                        paddingTop: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#16a34a' }}>{cs.stats}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                          onClick={() => setExpandedCardId(isExpanded ? null : cs.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#2258e7',
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
                          onClick={() => onNavigatePage('contacts')}
                          style={{
                            backgroundColor: '#2258e7',
                            color: '#ffffff',
                            border: 'none',
                            fontSize: '12px',
                            fontWeight: 600,
                            padding: '6px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                        >
                          Inquire
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
            backgroundColor: '#2258e7',
            padding: '48px 24px',
            color: '#ffffff',
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
                style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '8px', fontFamily: 'var(--font-heading)', display: 'block' }}
                blurStrength={6}
              >
                Looking for a specialized project reference in your industry?
              </ScrollReveal>
              <RevealElement variant="text" delay={0.06}>
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
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
                  borderRadius: '4px',
                  color: '#0f172a',
                  minWidth: '280px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn btn-white btn-md"
                style={{ backgroundColor: '#ffffff', color: '#2258e7', fontWeight: 700 }}
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
