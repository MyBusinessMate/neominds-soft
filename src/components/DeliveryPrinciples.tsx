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
        backgroundColor: '#f1efeb',
        paddingTop: 'clamp(64px, 8vw, 80px)',
        paddingBottom: 'clamp(64px, 8vw, 80px)',
        color: '#000000',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Asymmetrical Freehand Editorial Header & Principle Rows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.4fr)',
            gap: 'clamp(40px, 6vw, 80px)',
            marginBottom: 'clamp(48px, 6vw, 64px)',
            alignItems: 'start',
          }}
          className="principles-grid"
        >
          {/* Left Column: Index & Core Statement */}
          <div>
            <ScrollReveal
              as="h2"
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(28px, 3vw, 36px)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#000000',
                marginBottom: '20px',
                letterSpacing: '-0.01em',
                display: 'block',
              }}
              blurStrength={6}
            >
              We take your project from first idea to launch and long-term support, with one team responsible throughout.
            </ScrollReveal>

            <p
              style={{
                fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                fontSize: '16px',
                lineHeight: 1.5,
                color: '#868683',
                maxWidth: '440px',
              }}
            >
              Direct senior engineering accountability with zero handoff friction between discovery, sprint velocity, and production rollout.
            </p>
          </div>

          {/* Right Column: Freehand Principle Rows */}
          <div
            style={{
              borderTop: '1px solid #e4e2e1',
            }}
          >
            {principles.map((p) => {
              const isActive = activePrinciple === p.id;
              return (
                <div
                  key={p.id}
                  style={{
                    borderBottom: '1px solid #e4e2e1',
                    transition: 'border-color 0.38s ease',
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
                          fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
                          fontSize: '13px',
                          color: isActive ? '#fe6200' : '#868683',
                          transition: 'color 0.38s cubic-bezier(0.215, 0.61, 0.355, 1)',
                        }}
                      >
                        {p.num}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                          fontSize: 'clamp(20px, 2vw, 24px)',
                          fontWeight: 400,
                          color: isActive ? '#000000' : '#868683',
                          letterSpacing: '-0.01em',
                          transition: 'color 0.38s cubic-bezier(0.215, 0.61, 0.355, 1)',
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
                        color: isActive ? '#fe6200' : '#868683',
                        transition: 'color 0.38s cubic-bezier(0.215, 0.61, 0.355, 1)',
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
                      transition: 'max-height 0.38s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.25s ease',
                    }}
                  >
                    <div style={{ paddingBottom: '24px', paddingLeft: '32px' }}>
                      <p
                        style={{
                          fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                          fontSize: '16px',
                          lineHeight: 1.5,
                          color: '#868683',
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
                              fontSize: '14px',
                              fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                              color: '#000000',
                              lineHeight: 1.5,
                            }}
                          >
                            <span
                              style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(254, 98, 0, 0.12)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px',
                              }}
                            >
                              <Check size={11} color="#fe6200" />
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

        {/* Freehand Statistics Ledger (10px card radius, surface-light cards on white or elevated) */}
        <RevealElement variant="card">
          <div
            ref={statsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
            className="stats-ledger"
          >
            {statsData.map((stat, index) => (
              <div
                key={stat.label}
                className="card-standard"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e4e2e1',
                  borderRadius: '8px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '170px',
                  transition: 'transform 0.38s cubic-bezier(0.215, 0.61, 0.355, 1), box-shadow 0.38s cubic-bezier(0.215, 0.61, 0.355, 1)',
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: '#868683',
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
                    fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    fontWeight: 400,
                    color: '#fe6200',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
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
