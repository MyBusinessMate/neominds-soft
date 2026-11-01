import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

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

interface StatRow {
  numberPosition: 'left' | 'right';
  target: number;
  suffix: string;
  label: string;
  subtext: string;
}

const alternatingStats: StatRow[] = [
  {
    numberPosition: 'left',
    target: 34,
    suffix: '%',
    label: 'AI-CERTIFIED TALENT',
    subtext: 'Specialised talent to build and deploy real world systems.',
  },
  {
    numberPosition: 'right',
    target: 30,
    suffix: '+',
    label: 'SYSTEMS SHIPPED IN YEAR 1',
    subtext: 'From strategy to production, at scale.',
  },
  {
    numberPosition: 'left',
    target: 86,
    suffix: '%',
    label: 'CLIENTS IN HIGHLY REGULATED INDUSTRIES',
    subtext: 'Trusted by teams in complex, compliance driven sectors.',
  },
  {
    numberPosition: 'right',
    target: 99,
    suffix: '%',
    label: 'DELIVERY RELIABILITY SLA',
    subtext: 'Consistent delivery across every engagement.',
  },
];

const DeliveryPrinciplesComponent: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<string>('');
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

          const duration = 2000;
          const startTime = performance.now();
          const targets = alternatingStats.map((s) => s.target);

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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#f1efeb',
        paddingTop: 'clamp(64px, 8vw, 90px)',
        paddingBottom: 'clamp(64px, 8vw, 90px)',
        color: '#000000',
      }}
    >
      <section
        id="delivery"
        className="container"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.4fr)',
          gap: '0 clamp(40px, 6vw, 80px)',
          alignItems: 'start',
          padding: '0 24px',
        }}
      >
        {/* Left Column: Index & Core Statement */}
        <div
          className="principles-left-col"
          style={{
            gridColumn: 1,
            gridRow: '1 / span 7',
            paddingBottom: 'clamp(48px, 6vw, 64px)',
          }}
        >
          <ScrollReveal
            as="h2"
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(28px, 3.2vw, 40px)',
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
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              fontSize: '16px',
              lineHeight: 1.55,
              color: 'var(--colors-text-muted, #2b2b2b)',
              maxWidth: '440px',
            }}
          >
            Direct senior engineering accountability with zero handoff friction between discovery, sprint velocity, and production rollout.
          </p>
        </div>

        {/* Right Column Principle Buttons & Collapsible Details as Direct Siblings */}
        {principles.map((p, index) => {
          const isActive = activePrinciple === p.id;
          const buttonRow = index * 2 + 1;
          const detailsRow = index * 2 + 2;

          return (
            <React.Fragment key={p.id}>
              <button
                type="button"
                onClick={() => setActivePrinciple(isActive ? '' : p.id)}
                aria-expanded={isActive}
                className="delivery-principle-btn"
                style={{
                  gridColumn: 2,
                  gridRow: buttonRow,
                  width: '100%',
                  padding: '24px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  borderTop: index === 0 ? '1px solid #e4e2e1' : 'none',
                  borderBottom: !isActive ? '1px solid #e4e2e1' : 'none',
                  cursor: 'pointer',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                  <span
                    style={{
                      fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
                      fontSize: '13px',
                      color: isActive ? '#fe6200' : 'var(--colors-text-muted, #2b2b2b)',
                      transition: 'color 0.28s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    }}
                  >
                    {p.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      fontSize: 'clamp(20px, 2vw, 24px)',
                      fontWeight: 400,
                      color: '#000000',
                      letterSpacing: '-0.01em',
                      transition: 'color 0.28s cubic-bezier(0.215, 0.61, 0.355, 1)',
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
                    color: isActive ? '#fe6200' : '#000000',
                    transition: 'color 0.28s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    flexShrink: 0,
                  }}
                >
                  {isActive ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <div
                data-accordion-open={isActive ? 'true' : undefined}
                className={`delivery-principle-details ${isActive ? 'accordion-body-open' : ''}`}
                style={{
                  gridColumn: 2,
                  gridRow: detailsRow,
                  maxHeight: isActive ? '480px' : '0px',
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? 'visible' : 'hidden',
                  overflow: 'hidden',
                  transition: 'max-height 0.28s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.22s ease, visibility 0.28s ease',
                  borderBottom: '1px solid #e4e2e1',
                }}
              >
                <div style={{ paddingBottom: '24px', paddingLeft: '32px' }}>
                  <p
                    style={{
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      fontSize: '15px',
                      lineHeight: 1.55,
                      color: 'var(--colors-text-muted, #2b2b2b)',
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
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
            </React.Fragment>
          );
        })}

        {/* ========================================================
            EXACT MATCH TO REFERENCE IMAGE (media_1793384180376_f76e36fa.png):
            4 Alternating Full-Bleed Stats Rows on Cream Background
            Row 1: Left Number (34%) | Right Label & Subtext
            Row 2: Left Label & Subtext | Right Number (30+)
            Row 3: Left Number (86%) | Right Label & Subtext
            Row 4: Left Label & Subtext | Right Number (99%)
            ======================================================== */}
        <div
          ref={statsRef}
          style={{
            gridColumn: '1 / -1',
            gridRow: 8,
            marginTop: 'clamp(48px, 6vw, 72px)',
          }}
        >
          {/* Desktop View: 4 Individual Cards */}
          <div className="desktop-stats-cards">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(16px, 2vw, 24px)',
              }}
            >
              {alternatingStats.map((stat, idx) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    borderRadius: '8px',
                    padding: 'clamp(24px, 2.4vw, 32px) clamp(18px, 1.8vw, 24px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '190px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                    transition: 'border-color 0.25s ease, transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e4e2e1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: 'clamp(38px, 3.4vw, 52px)',
                        fontWeight: 400,
                        color: '#fe6200',
                        lineHeight: 1.05,
                        letterSpacing: '-0.02em',
                        marginBottom: '12px',
                      }}
                    >
                      {counts[idx]}
                      {stat.suffix}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        color: '#111111',
                        textTransform: 'uppercase',
                        lineHeight: 1.35,
                        marginBottom: '8px',
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      fontSize: '13px',
                      color: '#66615c',
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View: Alternating Stats Rows as in Reference */}
          <div
            className="mobile-stats-alternating"
            style={{
              borderTop: '1px solid #e4e2e1',
              borderBottom: '1px solid #e4e2e1',
            }}
          >
            {alternatingStats.map((stat, idx) => {
              const isNumLeft = stat.numberPosition === 'left';
              return (
                <div
                  key={stat.label}
                  className="nm-stats-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 0',
                    borderTop: idx > 0 ? '1px solid #e4e2e1' : 'none',
                    gap: '20px',
                  }}
                >
                  {/* When Number is on Left */}
                  {isNumLeft ? (
                    <>
                      <div
                        className="nm-stat-num"
                        style={{
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                          fontSize: 'clamp(52px, 12vw, 76px)',
                          fontWeight: 400,
                          color: '#fe6200',
                          lineHeight: 0.95,
                          letterSpacing: '-0.03em',
                          minWidth: 'clamp(110px, 28vw, 150px)',
                        }}
                      >
                        {counts[idx]}
                        {stat.suffix}
                      </div>

                      <div style={{ flex: 1, textAlign: 'left' }}>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#111111',
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                            marginBottom: '6px',
                          }}
                        >
                          {stat.label}
                        </div>
                        <div
                          style={{
                            fontSize: '13.5px',
                            color: '#66615c',
                            lineHeight: 1.45,
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                          }}
                        >
                          {stat.subtext}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* When Number is on Right */
                    <>
                      <div style={{ flex: 1, textAlign: 'left' }}>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#111111',
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                            marginBottom: '6px',
                          }}
                        >
                          {stat.label}
                        </div>
                        <div
                          style={{
                            fontSize: '13.5px',
                            color: '#66615c',
                            lineHeight: 1.45,
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                          }}
                        >
                          {stat.subtext}
                        </div>
                      </div>

                      <div
                        className="nm-stat-num"
                        style={{
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                          fontSize: 'clamp(52px, 12vw, 76px)',
                          fontWeight: 400,
                          color: '#fe6200',
                          lineHeight: 0.95,
                          letterSpacing: '-0.03em',
                          textAlign: 'right',
                          minWidth: 'clamp(110px, 28vw, 150px)',
                        }}
                      >
                        {counts[idx]}
                        {stat.suffix}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .desktop-stats-cards {
            display: block !important;
          }
          .mobile-stats-alternating {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .desktop-stats-cards {
            display: none !important;
          }
          .mobile-stats-alternating {
            display: block !important;
          }
          #delivery {
            display: flex !important;
            flex-direction: column !important;
          }
          .principles-left-col {
            padding-bottom: 28px !important;
          }
          .nm-stats-row {
            padding: 20px 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export const DeliveryPrinciples = React.memo(DeliveryPrinciplesComponent);
