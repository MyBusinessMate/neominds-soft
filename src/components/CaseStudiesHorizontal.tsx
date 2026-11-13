import React, { useLayoutEffect, useRef, useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getTechIconPath } from '../utils/techIcons';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyCard {
  id: string;
  client: string;
  metric: string;
  title: string;
  techs: string[];
  gradient: string;
  borderColor: string;
  shadowColor: string;
  watermark: React.ReactNode;
}

const CASE_STUDY_CARDS: CaseStudyCard[] = [
  {
    id: 'interzoon-cloud-system',
    client: 'INTERZOON',
    metric: '50% Infra Cost Cut · 99.99% Availability',
    title: 'Interzoon: Cloud Enterprise Management System & Auto-Scaling Kubernetes Cluster',
    techs: ['AWS', 'Kubernetes', 'Terraform', 'PostgreSQL', 'React'],
    gradient: 'linear-gradient(155deg, #EEF2FF 0%, #E0E7FF 50%, #C7D2FE 100%)',
    borderColor: 'rgba(99, 102, 241, 0.28)',
    shadowColor: 'rgba(99, 102, 241, 0.16)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="60" width="16" height="40" rx="3" />
        <rect x="44" y="42" width="16" height="58" rx="3" />
        <rect x="68" y="24" width="16" height="76" rx="3" />
        <rect x="92" y="50" width="16" height="50" rx="3" />
        <path d="M15 104h90" />
      </svg>
    ),
  },
  {
    id: 'nda-fintech-legacy',
    client: 'ENTERPRISE FINTECH',
    metric: 'Zero Downtime · 14M Transactions Migrated',
    title: 'Core Financial Systems Modernisation & Zero-Loss Database Migration',
    techs: ['Oracle', 'PostgreSQL', 'Python', 'Docker'],
    gradient: 'linear-gradient(155deg, #ECFDF5 0%, #D1FAE5 50%, #A7F3D0 100%)',
    borderColor: 'rgba(16, 185, 129, 0.28)',
    shadowColor: 'rgba(16, 185, 129, 0.16)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="25" y="45" width="70" height="55" rx="6" />
        <path d="M40 45V30a20 20 0 0 1 40 0v15" />
        <circle cx="60" cy="72" r="6" />
        <path d="M60 78v8" />
      </svg>
    ),
  },
  {
    id: 'fundbot-sql-chatbot',
    client: 'FUNDBOT',
    metric: '98.5% SQL Accuracy · <120ms Latency',
    title: 'Fundbot: Natural Language Financial SQL Query Engine & Automated BI',
    techs: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    gradient: 'linear-gradient(155deg, #FEF9C3 0%, #FEF08A 50%, #FDE047 100%)',
    borderColor: 'rgba(234, 179, 8, 0.32)',
    shadowColor: 'rgba(234, 179, 8, 0.20)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 35l20 25-20 25" />
        <line x1="55" y1="85" x2="95" y2="85" />
        <path d="M85 25l5 10 10 5-10 5-5 10-5-10-10-5 10-5z" fill="currentColor" fillOpacity="0.12" />
      </svg>
    ),
  },
  {
    id: 'bytexl-lms',
    client: 'BYTEXL',
    metric: '100,000+ Active Students · 99.99% SLA',
    title: 'ByteXL: Scalable Learning Management System & Coding Exam Platform',
    techs: ['React', 'Node.js', 'MongoDB', 'AWS'],
    gradient: 'linear-gradient(155deg, #E0F2FE 0%, #BAE6FD 50%, #93C5FD 100%)',
    borderColor: 'rgba(14, 165, 233, 0.28)',
    shadowColor: 'rgba(14, 165, 233, 0.16)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 20L15 45l45 25 45-25-45-25z" />
        <path d="M25 51v35c0 10 15 18 35 18s35-8 35-18V51" />
        <path d="M105 45v40" />
      </svg>
    ),
  },
  {
    id: 'dotcomweavers-project-buddy',
    client: 'DOTCOMWEAVERS',
    metric: '40% Velocity Boost · Multi-Platform Sync',
    title: 'Project Buddy: Multi-Platform AI Knowledge Assistant & Workspace Bridge',
    techs: ['Python', 'FastAPI', 'Docker', 'Next.js'],
    gradient: 'linear-gradient(155deg, #FFEDD5 0%, #FED7AA 50%, #FDBA74 100%)',
    borderColor: 'rgba(249, 115, 22, 0.28)',
    shadowColor: 'rgba(249, 115, 22, 0.16)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="60" cy="35" r="14" />
        <circle cx="30" cy="85" r="14" />
        <circle cx="90" cy="85" r="14" />
        <path d="M52 46L38 74M68 46l14 28M44 85h32" />
      </svg>
    ),
  },
  {
    id: 'fero-invoice-automation',
    client: 'FERO LOGISTICS',
    metric: '85% Automated Audits · 3-Way Rate Match',
    title: 'Fero: AI Freight Invoice Verification & Automated Billing Audit',
    techs: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    gradient: 'linear-gradient(155deg, #FFE4E6 0%, #FECDD3 50%, #FDA4AF 100%)',
    borderColor: 'rgba(244, 63, 94, 0.28)',
    shadowColor: 'rgba(244, 63, 94, 0.16)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 20h40l25 25v55a5 5 0 0 1-5 5H30a5 5 0 0 1-5-5V25a5 5 0 0 1 5-5z" />
        <path d="M45 65l10 10 20-20" />
      </svg>
    ),
  },
];

interface CaseStudiesHorizontalProps {
  onContactClick?: () => void;
  onSelectCaseStudy?: (id: string) => void;
}

export const CaseStudiesHorizontal: React.FC<CaseStudiesHorizontalProps> = ({
  onContactClick,
  onSelectCaseStudy,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reduceMotion, setReduceMotion] = useState(() => (typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false));
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  // Touch swipe tracking for mobile carousel
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const checkMotion = () => {
      setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkMotion();
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener('change', checkMotion);
    return () => mq.removeEventListener('change', checkMotion);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveMobileIndex((prev) => (prev === 0 ? CASE_STUDY_CARDS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveMobileIndex((prev) => (prev === CASE_STUDY_CARDS.length - 1 ? 0 : prev + 1));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // GSAP Curved Scroll Trigger: responsive media matching (>= 768px)
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      if (reduceMotion) return;
      const cards = cardRefs.current;
      if (!cards || cards.length === 0 || !sectionRef.current) return;

      const computeLayoutValues = () => {
        const width = window.innerWidth;
        const isTablet = width >= 768 && width < 1100;

        return {
          cardSpacing: isTablet ? 0.68 : 0.62,
          totalTravel: 5.0,
          startOffset: -0.2,
          horizontalSpan: isTablet ? 230 : 285,
          curveDepth: isTablet ? 75 : 90,
          rotationFactor: isTablet ? 11 : 13,
        };
      };

      const updatePositions = (progress: number) => {
        const {
          cardSpacing,
          totalTravel,
          startOffset,
          horizontalSpan,
          curveDepth,
          rotationFactor,
        } = computeLayoutValues();

        cards.forEach((card, index) => {
          if (!card) return;

          // Position u along normalized arc coordinate (u=0 is center apex)
          const u = startOffset + progress * totalTravel - index * cardSpacing;

          const x = u * horizontalSpan;
          const y = Math.pow(u, 2) * curveDepth;
          const rotation = u * rotationFactor;

          // Peak scale near apex, gentle taper outward
          const scale = Math.max(0.86, Math.min(1.06, 1.06 - 0.075 * Math.pow(u, 2)));

          // Opacity boundary fade for clean entrance and exit
          const absU = Math.abs(u);
          let opacity = 1;
          if (absU > 2.6) {
            opacity = 0;
          } else if (absU > 1.8) {
            opacity = Math.max(0, (2.6 - absU) / 0.8);
          }

          // Center card stays stacked on top of flanking neighbors
          const zIndex = Math.round(100 - absU * 15);

          card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${scale})`;
          card.style.zIndex = `${zIndex}`;
          card.style.opacity = `${opacity}`;
          card.style.pointerEvents = opacity < 0.25 ? 'none' : 'auto';
        });
      };

      // Initialize immediate state at progress 0
      updatePositions(0);

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          updatePositions(self.progress);
        },
        onRefresh: (self) => {
          updatePositions(self.progress);
        },
      });

      return () => {
        st.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [reduceMotion]);

  const handleCardClick = (id: string) => {
    if (onSelectCaseStudy) {
      onSelectCaseStudy(id);
    } else if (onContactClick) {
      onContactClick();
    }
  };

  // 1. Reduced motion accessible fallback
  if (reduceMotion) {
    return (
      <section
        id="casestudies"
        ref={sectionRef}
        className="nm-case-studies-section"
        style={{
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#fe6200',
              marginBottom: '10px',
            }}
          >
            Case Studies & Impact
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.03em',
              margin: '0 0 14px 0',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            }}
          >
            Case Studies in Production Engineering
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#444444',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Explore 6 featured client deployments engineered for high concurrency, zero data loss, and audited security.
          </p>
        </div>

        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {CASE_STUDY_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              style={{
                position: 'relative',
                background: card.gradient,
                border: `1px solid ${card.borderColor}`,
                borderRadius: '16px',
                padding: '30px 26px 80px 26px',
                minHeight: '430px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: `0 14px 38px -10px ${card.shadowColor}, 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 1px rgba(255, 255, 255, 0.9)`,
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 22px 48px -12px ${card.shadowColor}, 0 4px 12px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 14px 38px -10px ${card.shadowColor}, 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 1px rgba(255, 255, 255, 0.9)`;
              }}
            >
              <div>
                <div style={{ marginBottom: '12px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      color: '#444444',
                      textTransform: 'uppercase',
                      fontFamily: "var(--typography-mono-family, 'Fira Code', monospace)",
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {card.client}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#000000',
                    lineHeight: 1.25,
                    letterSpacing: '-0.025em',
                    margin: '0 0 12px 0',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '66px',
                  }}
                >
                  {card.title}
                </h3>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: '#0f172a',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    lineHeight: 1.3,
                  }}
                >
                  <span style={{ color: '#fe6200', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>Outcome:</span>
                  <span>{card.metric}</span>
                </div>

                {/* Tech Stack SVGs */}
                {card.techs && card.techs.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {card.techs.map((tech) => {
                      const icon = getTechIconPath(tech);
                      return (
                        <span
                          key={tech}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            border: '1px solid rgba(0, 0, 0, 0.07)',
                            color: '#1a1a1a',
                          }}
                        >
                          {icon && (
                            <img
                              src={icon}
                              alt=""
                              aria-hidden="true"
                              style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                            />
                          )}
                          <span>{tech}</span>
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '24px',
                  width: '120px',
                  height: '120px',
                  opacity: 0.07,
                  color: '#000000',
                  pointerEvents: 'none',
                }}
              >
                {card.watermark}
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(card.id);
                }}
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '26px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#111111',
                  color: '#ffffff',
                  padding: '9px 18px',
                  borderRadius: '999px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                  cursor: 'pointer',
                  zIndex: 4,
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fe6200';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#111111';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Read case study</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Unified Responsive Case Studies Section: guarantees no DOM unmount conflicts
  return (
    <section
      id="casestudies"
      ref={sectionRef}
      className="nm-case-studies-section"
    >
      {/* 1. Mobile Clean Touch-Friendly Carousel (Viewport < 768px via CSS .nm-cs-mobile) */}
      <div className="nm-cs-mobile">
        {/* Section Heading positioned directly above carousel */}
        <div style={{ textAlign: 'center', marginBottom: '22px', width: '100%', maxWidth: '420px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#fe6200',
              marginBottom: '6px',
            }}
          >
            Case Studies & Impact
          </span>
          <h2
            style={{
              fontSize: 'clamp(26px, 6vw, 32px)',
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.025em',
              margin: '0 0 6px 0',
              lineHeight: 1.2,
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            }}
          >
            Case Studies in Production Engineering
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#444444',
              margin: '0 auto',
              lineHeight: 1.5,
              maxWidth: '360px',
            }}
          >
            Swipe through 6 verified client systems engineered for high concurrency and zero data loss.
          </p>
        </div>

        {/* Carousel Slider Window with Touch Swiping */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto',
            overflow: 'hidden',
            borderRadius: '20px',
            userSelect: 'none',
          }}
        >
          <div
            className="carousel-track"
            style={{
              display: 'flex',
              width: `${CASE_STUDY_CARDS.length * 100}%`,
              transform: `translateX(-${(activeMobileIndex * 100) / CASE_STUDY_CARDS.length}%)`,
              transition: 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
              willChange: 'transform',
            }}
          >
            {CASE_STUDY_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                style={{
                  width: `${100 / CASE_STUDY_CARDS.length}%`,
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  padding: '4px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '430px',
                    height: '430px',
                    background: card.gradient,
                    border: `1px solid ${card.borderColor}`,
                    borderRadius: '20px',
                    padding: '24px 20px 74px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                    boxShadow: `0 16px 36px -10px ${card.shadowColor}, 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 1px rgba(255, 255, 255, 0.9)`,
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top: Client Name & Category Tag */}
                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '10.5px',
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          color: '#444444',
                          textTransform: 'uppercase',
                          fontFamily: "var(--typography-mono-family, 'Fira Code', monospace)",
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {card.client}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#000000',
                        lineHeight: 1.25,
                        letterSpacing: '-0.025em',
                        margin: '0 0 12px 0',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '66px',
                      }}
                    >
                      {card.title}
                    </h3>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#0f172a',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                        lineHeight: 1.3,
                      }}
                    >
                      <span style={{ color: '#fe6200', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>Outcome:</span>
                      <span>{card.metric}</span>
                    </div>

                    {/* Tech Stack SVGs */}
                    {card.techs && card.techs.length > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap', marginTop: '10px' }}>
                        {card.techs.map((tech) => {
                          const icon = getTechIconPath(tech);
                          return (
                            <span
                              key={tech}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '10.5px',
                                fontWeight: 600,
                                padding: '2px 7px',
                                borderRadius: '5px',
                                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                                border: '1px solid rgba(0, 0, 0, 0.07)',
                                color: '#1a1a1a',
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
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Watermark Icon */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '22px',
                      right: '18px',
                      width: '110px',
                      height: '110px',
                      opacity: 0.12,
                      color: '#000000',
                      pointerEvents: 'none',
                    }}
                  >
                    {card.watermark}
                  </div>

                  {/* Bottom: Read case study Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(card.id);
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '22px',
                      left: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#111111',
                      color: '#ffffff',
                      padding: '9px 18px',
                      borderRadius: '8px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                      cursor: 'pointer',
                      zIndex: 4,
                    }}
                  >
                    <span>Read case study</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls: Previous / Indicator / Next */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '20px',
          }}
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous case study"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              cursor: 'pointer',
              transition: 'transform 0.15s ease, background-color 0.15s ease',
            }}
          >
            <ChevronLeft size={19} />
          </button>

          {/* Current Card Indicator: e.g. 1 / 7 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 800,
              fontVariantNumeric: 'tabular-nums',
              color: '#000000',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              padding: '8px 18px',
              borderRadius: '8px',
            }}
          >
            <span style={{ color: '#fe6200' }}>{activeMobileIndex + 1}</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ opacity: 0.65 }}>{CASE_STUDY_CARDS.length}</span>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next case study"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              cursor: 'pointer',
              transition: 'transform 0.15s ease, background-color 0.15s ease',
            }}
          >
            <ChevronRight size={19} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px',
            marginTop: '12px',
          }}
        >
          {CASE_STUDY_CARDS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setActiveMobileIndex(dotIdx)}
              aria-label={`Go to case study ${dotIdx + 1}`}
              style={{
                width: activeMobileIndex === dotIdx ? '22px' : '7px',
                height: '7px',
                borderRadius: '8px',
                backgroundColor: activeMobileIndex === dotIdx ? '#fe6200' : 'rgba(15, 23, 42, 0.18)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. Desktop Smooth Scroll-Controlled Curved Showcase (Viewport >= 768px via CSS .nm-cs-desktop) */}
      <div className="nm-cs-desktop">
        {/* Ambient background soft radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80vw',
            height: '60vh',
            background: 'radial-gradient(ellipse at center, rgba(254, 98, 0, 0.035) 0%, rgba(251, 249, 245, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Showcase Section Heading */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '920px',
            width: '100%',
            marginBottom: 'clamp(20px, 3vh, 32px)',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#fe6200',
              marginBottom: '8px',
            }}
          >
            Case Studies & Impact
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.03em',
              margin: '0 0 10px 0',
              lineHeight: 1.15,
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            }}
          >
            Case Studies in Production Engineering
          </h2>
          <p
            style={{
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              color: '#444444',
              maxWidth: '580px',
              margin: '0 auto',
              lineHeight: 1.55,
            }}
          >
            Scroll to explore 6 enterprise systems engineered for high concurrency, zero data loss, and audited security.
          </p>
        </div>

        {/* Curved Arc Deck Stage */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1200px',
            zIndex: 1,
          }}
        >
          {/* Origin container positioned at center with positive clearance below heading */}
          <div
            style={{
              position: 'absolute',
              top: '52%',
              left: '50%',
              width: 0,
              height: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {CASE_STUDY_CARDS.map((card, idx) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => handleCardClick(card.id)}
                style={{
                  position: 'absolute',
                  width: 'clamp(295px, 23vw, 355px)',
                  height: 'clamp(410px, 49vh, 465px)',
                  left: 'calc(clamp(295px, 23vw, 355px) / -2)',
                  top: 'calc(clamp(410px, 49vh, 465px) / -2)',
                  background: card.gradient,
                  border: `1px solid ${card.borderColor}`,
                  borderRadius: '20px',
                  padding: 'clamp(26px, 3.4vh, 32px) clamp(22px, 2.4vw, 28px) 76px clamp(22px, 2.4vw, 28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  boxSizing: 'border-box',
                  boxShadow: `0 24px 54px -14px ${card.shadowColor}, 0 6px 16px -4px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.9)`,
                  cursor: 'pointer',
                  willChange: 'transform, opacity',
                  transformOrigin: '50% 65%',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 32px 64px -16px ${card.shadowColor}, 0 12px 24px -8px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 24px 54px -14px ${card.shadowColor}, 0 6px 16px -4px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.9)`;
                }}
              >
                {/* Top: Client Name & Category Tag */}
                <div>
                  <div style={{ marginBottom: '12px' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        color: '#444444',
                        textTransform: 'uppercase',
                        fontFamily: "var(--typography-mono-family, 'Fira Code', monospace)",
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {card.client}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(18px, 1.7vw, 21px)',
                      fontWeight: 700,
                      color: '#000000',
                      lineHeight: 1.25,
                      letterSpacing: '-0.025em',
                      margin: '0 0 12px 0',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: '66px',
                    }}
                  >
                    {card.title}
                  </h3>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: '#0f172a',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                      lineHeight: 1.3,
                    }}
                  >
                    <span style={{ color: '#fe6200', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>Outcome:</span>
                    <span>{card.metric}</span>
                  </div>

                  {/* Tech Stack SVGs */}
                  {card.techs && card.techs.length > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                      {card.techs.map((tech) => {
                        const icon = getTechIconPath(tech);
                        return (
                          <span
                            key={tech}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontSize: '11px',
                              fontWeight: 600,
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: 'rgba(255, 255, 255, 0.85)',
                              border: '1px solid rgba(0, 0, 0, 0.07)',
                              color: '#1a1a1a',
                            }}
                          >
                            {icon && (
                              <img
                                src={icon}
                                alt=""
                                aria-hidden="true"
                                style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                              />
                            )}
                            <span>{tech}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Watermark Icon */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    right: '20px',
                    width: 'clamp(110px, 14vw, 150px)',
                    height: 'clamp(110px, 14vw, 150px)',
                    opacity: 0.12,
                    color: '#000000',
                    pointerEvents: 'none',
                  }}
                >
                  {card.watermark}
                </div>

                {/* Bottom: Read case study Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card.id);
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: 'clamp(22px, 2.4vw, 28px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    padding: '9px 18px',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    border: 'none',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                    cursor: 'pointer',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 4,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fe6200';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(254, 98, 0, 0.28)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#111111';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.12)';
                  }}
                >
                  <span>Read case study</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    
      <style>{`
        @media (max-width: 767px) {
          .nm-case-studies-section {
            padding: 40px 16px 36px 16px !important;
            overflow-x: hidden !important;
            min-height: auto !important;
          }
          .nm-cs-desktop {
            display: none !important;
          }
          .nm-cs-mobile {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
        }
        @media (min-width: 768px) {
          .nm-case-studies-section {
            height: 100vh !important;
            overflow: hidden !important;
            padding: clamp(28px, 5vh, 48px) 20px clamp(16px, 3vh, 32px) 20px !important;
            user-select: none !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justifyContent: space-between !important;
          }
          .nm-cs-mobile {
            display: none !important;
          }
          .nm-cs-desktop {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justifyContent: space-between !important;
            width: 100% !important;
            height: 100% !important;
            position: relative !important;
          }
        }
      `}</style>
    </section>
  );
};
