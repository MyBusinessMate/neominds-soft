import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface Principle {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  points: string[];
}

const principles: Principle[] = [
  {
    id: 'outcomes',
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
  const [activePrinciple, setActivePrinciple] = useState<string>(''); // Collapsed by default until clicked
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const hasAnimatedRef = useRef(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Smooth IntersectionObserver-driven counter animation
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const duration = 2200; // 2.2 seconds smooth counter
          const startTime = performance.now();
          const targets = statsData.map((s) => s.target);

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out curve for natural deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            const nextCounts = targets.map((target) => Math.round(target * easeOutProgress));
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(targets); // Guaranteed exact termination values
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
        paddingTop: 'clamp(70px, 8vw, 100px)',
        paddingBottom: '0px',
        color: '#ffffff',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Top Header & Principle Rows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          {/* Left Column: Label */}
          <div>
            <RevealElement variant="text">
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: '#FF5500',
                  textTransform: 'uppercase',
                }}
              >
                HOW WE WORK
              </span>
            </RevealElement>
          </div>

          {/* Right Column: Statement & Interactive FAQ Principles */}
          <div>
            <ScrollReveal
              as="h3"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(20px, 2.2vw, 32px)',
                fontWeight: 600,
                lineHeight: 1.3,
                color: '#ffffff',
                marginBottom: 'clamp(28px, 4vw, 40px)',
                maxWidth: '650px',
                display: 'block',
              }}
              blurStrength={6}
            >
              We take your project from first idea to launch and long-term support, with one team responsible throughout.
            </ScrollReveal>

            {/* Principle Accordion Items - Pure click-to-expand */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                borderRadius: '0px',
                overflow: 'hidden',
                border: 'none',
              }}
            >
              {principles.map((p) => {
                const isActive = activePrinciple === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setActivePrinciple(isActive ? '' : p.id)}
                    style={{
                      borderBottom: 'none',
                      backgroundColor: isActive ? '#FF5500' : '#0a0a0a',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease',
                      boxShadow: isActive ? '0 10px 30px rgba(255, 85, 0, 0.25)' : 'none',
                      borderRadius: '0px',
                      marginBottom: '8px',
                      border: '1px solid #1e293b',
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActivePrinciple(isActive ? '' : p.id);
                      }
                    }}
                    aria-expanded={isActive}
                    aria-label={`Principle: ${p.title}`}
                  >
                    {/* Header Row: Title & Arrow Indicator */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'clamp(18px, 2.5vw, 24px) clamp(20px, 2.8vw, 32px)',
                        userSelect: 'none',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(17px, 1.7vw, 24px)',
                            fontWeight: 700,
                            letterSpacing: '0.01em',
                            lineHeight: 1.2,
                            color: '#ffffff',
                          }}
                        >
                          {p.title}
                        </span>
                        {!isActive && (
                          <span
                            style={{
                              fontSize: '13px',
                              color: '#94a3b8',
                              fontWeight: 400,
                              marginTop: '2px',
                            }}
                          >
                            {p.tagline}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '0px',
                          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease',
                          transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                        }}
                      >
                        <ArrowRight
                          size={22}
                          color="#ffffff"
                          style={{
                            flexShrink: 0,
                            transition: 'color 0.2s ease',
                          }}
                        />
                      </div>
                    </div>

                    {/* Expandable FAQ Details Panel */}
                    <div
                      style={{
                        maxHeight: isActive ? '360px' : '0px',
                        opacity: isActive ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          padding: '0 clamp(20px, 2.8vw, 32px) clamp(22px, 3vw, 28px)',
                          paddingTop: '8px',
                        }}
                      >
                        <p
                          style={{
                            fontSize: 'clamp(14px, 1.1vw, 16px)',
                            lineHeight: 1.65,
                            color: 'rgba(255, 255, 255, 0.95)',
                            margin: '0 0 16px 0',
                            fontWeight: 400,
                          }}
                        >
                          {p.desc}
                        </p>

                        {/* Bullet Highlights */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {p.points.map((point, i) => (
                            <div
                              key={i}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '10px',
                                fontSize: 'clamp(13px, 1vw, 14px)',
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: 1.5,
                              }}
                            >
                              <CheckCircle2
                                size={16}
                                color="#ffffff"
                                style={{ flexShrink: 0, marginTop: '3px' }}
                              />
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
        </div>

        {/* 4-Column Statistics Grid */}
        <RevealElement variant="card" start="top 92%" end="top 65%">
          <div
            ref={statsRef}
            className="stats-grid"
            onMouseLeave={() => setHoveredCardIndex(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              backgroundColor: '#000000',
              border: 'none',
              gap: '0px',
              borderRadius: '0px',
              overflow: 'hidden',
            }}
          >
            {statsData.map((stat, index) => {
              const isHovered = hoveredCardIndex === index;
              return (
                <div
                  key={stat.label}
                  className="stat-box"
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  style={{
                    padding: 'clamp(28px, 3.5vw, 42px) clamp(20px, 2.5vw, 32px)',
                    border: '1px solid #1e293b',
                    borderRadius: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '190px',
                    backgroundColor: isHovered ? '#FF5500' : '#0a0a0a',
                    cursor: 'pointer',
                    transition: 'background-color 0.22s ease, color 0.22s ease, border-color 0.22s ease',
                    position: 'relative',
                    zIndex: isHovered ? 2 : 1,
                    boxShadow: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: isHovered ? '#ffffff' : '#94a3b8',
                      textTransform: 'uppercase',
                      marginBottom: '24px',
                      lineHeight: 1.4,
                      transition: 'color 0.22s ease',
                    }}
                  >
                    {stat.label}
                  </span>

                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(38px, 4.4vw, 60px)',
                      fontWeight: 700,
                      color: isHovered ? '#ffffff' : '#FF5500',
                      lineHeight: 1,
                      fontVariantNumeric: 'tabular-nums',
                      margin: 0,
                      transition: 'color 0.22s ease',
                    }}
                  >
                    {counts[index]}
                    {stat.suffix}
                  </h4>
                </div>
              );
            })}
          </div>
        </RevealElement>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export const DeliveryPrinciples = React.memo(DeliveryPrinciplesComponent);
