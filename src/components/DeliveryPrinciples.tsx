import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface Principle {
  id: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  points: string[];
}

const principles: Principle[] = [
  {
    id: 'outcomes',
    num: '01',
    title: 'BUILT FOR OUTCOMES',
    tagline: 'We begin with the result you want and plan every sprint around it.',
    desc: 'We begin with the result you want, such as more sales, lower costs or faster operations, and plan every sprint around it. You see working progress in a demo every week.',
    points: [
      'Sprint planning directly anchored to your business targets',
      'Live working progress demo every single week',
      'Continuous refinement based on real operational feedback',
    ],
  },
  {
    id: 'ai-value',
    num: '02',
    title: 'AI WHERE IT EARNS ITS PLACE',
    tagline: 'Applied only where it saves time or improves results.',
    desc: 'We use AI to speed up our own work and to add smart features to your product, but only where it saves time or improves results.',
    points: [
      'Targeted AI features that solve actual business bottlenecks',
      'Rigorous cost-benefit and latency evaluation before deployment',
      'No vanity demos: production systems designed to work inside your real business',
    ],
  },
  {
    id: 'sector-focused',
    num: '03',
    title: 'MADE FOR YOUR SECTOR',
    tagline: 'Tailored to the rules and workflows of your specific industry.',
    desc: 'Each industry has its own rules and workflows. We learn yours first, including data-privacy needs such as GDPR, so the software fits how you actually operate.',
    points: [
      'Deep domain alignment with your teams and customer processes',
      'Built with data-privacy and compliance rules (GDPR, HIPAA) in mind',
      'Direct, friction-free integration into your existing operational infrastructure',
    ],
  },
];

const statsData = [
  { label: 'AI-CERTIFIED TALENT', target: 34, suffix: '%' },
  { label: 'YEARS OF ENGINEERING EXPERIENCE', target: 23, suffix: '' },
  { label: 'CLIENTS IN HIGHLY REGULATED INDUSTRIES', target: 86, suffix: '%' },
  { label: 'LONGEST ENGAGEMENT IN YEARS', target: 18, suffix: '' },
];

const DeliveryPrinciplesComponent: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<string>('outcomes');
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const hasAnimatedRef = useRef(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const duration = 2200;
          const startTime = performance.now();
          const targets = statsData.map((s) => s.target);

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            const nextCounts = targets.map((target) => Math.round(target * easeOutProgress));
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(targets);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="delivery"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#000000',
        paddingTop: 'clamp(80px, 9vw, 120px)',
        paddingBottom: 'clamp(60px, 7vw, 100px)',
        color: '#F2F0EC',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Asymmetrical Editorial Header & Principle Rows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.4fr)',
            gap: 'clamp(40px, 6vw, 80px)',
            marginBottom: 'clamp(64px, 8vw, 100px)',
            alignItems: 'start',
          }}
          className="principles-grid"
        >
          {/* Left Column: Index & Core Statement */}
          <div>
            <RevealElement variant="text">
              <span
                className="eyebrow-tag"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-subheading)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#A94F0B',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                02 // HOW WE WORK
              </span>
            </RevealElement>

            <ScrollReveal
              as="h2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                lineHeight: 1.22,
                color: '#F2F0EC',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
                display: 'block',
              }}
              blurStrength={6}
            >
              We take your project from first idea to launch and long-term support, with one team responsible throughout.
            </ScrollReveal>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.65,
                color: '#A3A3A3',
                maxWidth: '440px',
              }}
            >
              Direct senior engineering accountability with zero handoff friction between discovery, sprint velocity, and production rollout.
            </p>
          </div>

          {/* Right Column: Architectural Ledger Rows (No Boxed Cards) */}
          <div
            style={{
              borderTop: '1px solid #292522',
            }}
          >
            {principles.map((p) => {
              const isActive = activePrinciple === p.id;
              return (
                <div
                  key={p.id}
                  style={{
                    borderBottom: '1px solid #292522',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActivePrinciple(isActive ? '' : p.id)}
                    style={{
                      width: '100%',
                      padding: '24px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      gap: '16px',
                    }}
                    aria-expanded={isActive}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-metrics)',
                          fontSize: '13px',
                          color: isActive ? '#A94F0B' : '#777777',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {p.num}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(18px, 1.8vw, 22px)',
                          fontWeight: 700,
                          color: isActive ? '#F2F0EC' : '#A3A3A3',
                          letterSpacing: '-0.01em',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {p.title}
                      </span>
                    </div>

                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? '#A94F0B' : '#777777',
                        transition: 'color 0.2s ease, transform 0.25s ease',
                        flexShrink: 0,
                      }}
                    >
                      {isActive ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {/* Expandable Details */}
                  <div
                    style={{
                      maxHeight: isActive ? '320px' : '0px',
                      opacity: isActive ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                    }}
                  >
                    <div style={{ paddingBottom: '24px', paddingLeft: '32px' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          lineHeight: 1.65,
                          color: '#A3A3A3',
                          margin: '0 0 16px 0',
                        }}
                      >
                        {p.desc}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {p.points.map((point, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              fontSize: '13.5px',
                              fontFamily: 'var(--font-body)',
                              color: '#F2F0EC',
                              lineHeight: 1.5,
                            }}
                          >
                            <span
                              style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(169, 79, 11, 0.15)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px',
                              }}
                            >
                              <Check size={11} color="#A94F0B" />
                            </span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architectural Statistics Ledger (No Boxed Cards) */}
        <RevealElement variant="card">
          <div
            ref={statsRef}
            style={{
              borderTop: '1px solid #292522',
              borderBottom: '1px solid #292522',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1px',
              backgroundColor: '#292522',
            }}
            className="stats-ledger"
          >
            {statsData.map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: '#000000',
                  padding: 'clamp(28px, 4vw, 40px) clamp(20px, 2.5vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '170px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(169, 79, 11, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000';
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-subheading)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#A3A3A3',
                    textTransform: 'uppercase',
                    lineHeight: 1.4,
                    marginBottom: '20px',
                  }}
                >
                  {stat.label}
                </span>

                <div
                  className="stat-metric"
                  style={{
                    fontFamily: 'var(--font-metrics)',
                    fontSize: 'clamp(40px, 4.5vw, 64px)',
                    fontWeight: 700,
                    color: '#A94F0B',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {counts[index]}
                  {stat.suffix}
                </div>
              </div>
            ))}
          </div>
        </RevealElement>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .principles-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .stats-ledger {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-ledger {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export const DeliveryPrinciples = React.memo(DeliveryPrinciplesComponent);
