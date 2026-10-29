import React, { useLayoutEffect, useRef, useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyCard {
  id: string;
  client: string;
  title: string;
  gradient: string;
  borderColor: string;
  shadowColor: string;
  watermark: React.ReactNode;
}

const CASE_STUDY_CARDS: CaseStudyCard[] = [
  {
    id: 'mindspace-mobile-app',
    client: 'MINDSPACE.AI',
    title: 'Healthcare Telehealth & Clinical Wellness Mobile App',
    gradient: 'linear-gradient(155deg, #F5E8FF 0%, #EDE9FE 50%, #DDD6FE 100%)',
    borderColor: 'rgba(168, 85, 247, 0.28)',
    shadowColor: 'rgba(168, 85, 247, 0.18)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 60h20l10-25 15 50 15-35 10 15h20" />
        <circle cx="60" cy="60" r="50" strokeDasharray="6 6" />
      </svg>
    ),
  },
  {
    id: 'authenticom-ai-etl',
    client: 'AUTHENTICOM',
    title: 'Automotive Data Ingestion & Real-Time DMS Integration Platform',
    gradient: 'linear-gradient(155deg, #E0F2FE 0%, #BAE6FD 50%, #93C5FD 100%)',
    borderColor: 'rgba(14, 165, 233, 0.28)',
    shadowColor: 'rgba(14, 165, 233, 0.18)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="60" cy="30" rx="42" ry="16" />
        <path d="M18 30v30c0 8.8 18.8 16 42 16s42-7.2 42-16V30" />
        <path d="M18 60v30c0 8.8 18.8 16 42 16s42-7.2 42-16V60" />
      </svg>
    ),
  },
  {
    id: 'fundbot-sql-chatbot',
    client: 'FUNDBOT',
    title: 'Natural Language AI SQL Financial Query Engine',
    gradient: 'linear-gradient(155deg, #FEF9C3 0%, #FEF08A 50%, #FDE047 100%)',
    borderColor: 'rgba(234, 179, 8, 0.32)',
    shadowColor: 'rgba(234, 179, 8, 0.22)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 35l20 25-20 25" />
        <line x1="55" y1="85" x2="95" y2="85" />
        <path d="M85 25l5 10 10 5-10 5-5 10-5-10-10-5 10-5z" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    id: 'trubridge-medical-ai',
    client: 'TRUBRIDGE',
    title: 'Automated Medical Coding & Claims Verification Engine',
    gradient: 'linear-gradient(155deg, #FFE4E6 0%, #FECDD3 50%, #FDA4AF 100%)',
    borderColor: 'rgba(244, 63, 94, 0.28)',
    shadowColor: 'rgba(244, 63, 94, 0.18)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 15L22 32v34c0 26 38 42 38 42s38-16 38-42V32L60 15z" />
        <path d="M42 60l12 12 24-24" />
      </svg>
    ),
  },
  {
    id: 'dotcomweavers-project-buddy',
    client: 'DOTCOMWEAVERS',
    title: 'Autonomous Multi-Project AI Assistant & Velocity Engine',
    gradient: 'linear-gradient(155deg, #FFEDD5 0%, #FED7AA 50%, #FDBA74 100%)',
    borderColor: 'rgba(249, 115, 22, 0.28)',
    shadowColor: 'rgba(249, 115, 22, 0.18)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="60" cy="35" r="14" />
        <circle cx="30" cy="85" r="14" />
        <circle cx="90" cy="85" r="14" />
        <path d="M52 46L38 74M68 46l14 28M44 85h32" />
      </svg>
    ),
  },
  {
    id: 'adventr',
    client: 'ADVENTR',
    title: 'Interactive Smart-Video Generation & Analytics Suite',
    gradient: 'linear-gradient(155deg, #D1FAE5 0%, #A7F3D0 50%, #6EE7B7 100%)',
    borderColor: 'rgba(16, 185, 129, 0.28)',
    shadowColor: 'rgba(16, 185, 129, 0.18)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="50,40 80,60 50,80" fill="currentColor" fillOpacity="0.2" />
        <circle cx="60" cy="60" r="45" />
        <path d="M60 15v10M60 95v10M15 60h10M95 60h10" />
      </svg>
    ),
  },
  {
    id: 'flooring-inc-dashboard',
    client: 'FLOORING INC',
    title: 'High-Volume E-Commerce Inventory & Analytics Dashboard',
    gradient: 'linear-gradient(155deg, #E0E7FF 0%, #C7D2FE 50%, #A5B4FC 100%)',
    borderColor: 'rgba(99, 102, 241, 0.28)',
    shadowColor: 'rgba(99, 102, 241, 0.18)',
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="60" width="16" height="40" rx="3" />
        <rect x="44" y="42" width="16" height="58" rx="3" />
        <rect x="68" y="24" width="16" height="76" rx="3" />
        <rect x="92" y="50" width="16" height="50" rx="3" />
        <path d="M15 104h90" />
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
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  // Touch swipe tracking for mobile carousel
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
      setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
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

  // GSAP Curved Scroll Trigger: only active on desktop screens
  useLayoutEffect(() => {
    if (reduceMotion || isMobile) return;

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

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
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
    }, sectionRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [reduceMotion, isMobile]);

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
        style={{
          backgroundColor: '#fbf9f5',
          padding: '80px 24px',
          width: '100%',
          boxSizing: 'border-box',
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
            }}
          >
            Solutions that stack the deck in your favor
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#475569',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.5,
            }}
          >
            Explore enterprise client deployments engineered for scale, reliability, and measurable velocity.
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
                borderRadius: '8px',
                padding: '32px 28px',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: `0 16px 36px -12px ${card.shadowColor}`,
                cursor: 'pointer',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: '#0f172a',
                    opacity: 0.65,
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}
                >
                  {card.client}
                </span>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '24px',
                  width: '120px',
                  height: '120px',
                  opacity: 0.12,
                  color: '#0f172a',
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
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  color: '#0f172a',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer',
                  zIndex: 2,
                }}
              >
                <span>Read More</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 2. Mobile Clean Touch-Friendly Carousel (Viewport < 768px)
  if (isMobile) {
    return (
      <section
        id="casestudies"
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fbf9f5',
          overflowX: 'hidden',
          padding: '48px 18px 42px 18px',
          boxSizing: 'border-box',
        }}
      >
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
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
              fontSize: '26px',
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.025em',
              margin: '0 0 8px 0',
              lineHeight: 1.2,
            }}
          >
            Solutions that stack the deck in your favor
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#475569',
              margin: '0 auto',
              lineHeight: 1.45,
              maxWidth: '320px',
            }}
          >
            Swipe through enterprise engineering solutions delivered with audited velocity.
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
            maxWidth: '360px',
            margin: '0 auto',
            overflow: 'hidden',
            borderRadius: '8px',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              transform: `translateX(-${activeMobileIndex * 100}%)`,
              transition: 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
              width: '100%',
            }}
          >
            {CASE_STUDY_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                style={{
                  minWidth: '100%',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  padding: '6px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '390px',
                    background: card.gradient,
                    border: `1px solid ${card.borderColor}`,
                    borderRadius: '8px',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                    boxShadow: `0 20px 40px -12px ${card.shadowColor}, 0 6px 14px -4px rgba(15, 23, 42, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.9)`,
                    cursor: 'pointer',
                  }}
                >
                  {/* Top: Client Name & Title */}
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        color: '#0f172a',
                        opacity: 0.65,
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {card.client}
                    </span>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#0f172a',
                        lineHeight: 1.3,
                        letterSpacing: '-0.02em',
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Watermark Icon */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '22px',
                      right: '18px',
                      width: '120px',
                      height: '120px',
                      opacity: 0.12,
                      color: '#0f172a',
                      pointerEvents: 'none',
                    }}
                  >
                    {card.watermark}
                  </div>

                  {/* Bottom: Read More Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(card.id);
                    }}
                    style={{
                      alignSelf: 'flex-start',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      color: '#0f172a',
                      padding: '10px 18px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.01em',
                      border: '1px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                      cursor: 'pointer',
                      zIndex: 3,
                    }}
                  >
                    <span>Read More</span>
                    <ArrowUpRight size={15} />
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
            marginTop: '22px',
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
              color: '#0f172a',
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
              color: '#0f172a',
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
              color: '#0f172a',
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
            marginTop: '14px',
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
      </section>
    );
  }

  // 3. Desktop Smooth Scroll-Controlled Curved Showcase (Viewport >= 768px)
  return (
    <section
      id="casestudies"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#fbf9f5',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'clamp(28px, 5vh, 48px) 20px clamp(16px, 3vh, 32px) 20px',
        boxSizing: 'border-box',
        userSelect: 'none',
      }}
    >
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
          }}
        >
          Solutions that stack the deck in your favor
        </h2>
        <p
          style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: '#475569',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.45,
          }}
        >
          Scroll to explore enterprise engineering solutions delivered with high throughput and audited reliability.
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
                width: 'clamp(275px, 22vw, 335px)',
                height: 'clamp(360px, 46vh, 425px)',
                left: 'calc(clamp(275px, 22vw, 335px) / -2)',
                top: 'calc(clamp(360px, 46vh, 425px) / -2)',
                background: card.gradient,
                border: `1px solid ${card.borderColor}`,
                borderRadius: '8px',
                padding: 'clamp(24px, 3.5vh, 32px) clamp(20px, 2.5vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                boxShadow: `0 24px 48px -14px ${card.shadowColor}, 0 8px 18px -6px rgba(15, 23, 42, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.85)`,
                cursor: 'pointer',
                willChange: 'transform, opacity',
                transformOrigin: '50% 65%',
                transition: 'box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 32px 64px -16px ${card.shadowColor}, 0 12px 24px -8px rgba(15, 23, 42, 0.14), inset 0 1px 1px rgba(255, 255, 255, 0.95)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 24px 48px -14px ${card.shadowColor}, 0 8px 18px -6px rgba(15, 23, 42, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.85)`;
              }}
            >
              {/* Top: Client Name & Title */}
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: '#0f172a',
                    opacity: 0.65,
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  {card.client}
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
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
                  color: '#0f172a',
                  pointerEvents: 'none',
                }}
              >
                {card.watermark}
              </div>

              {/* Bottom: Read More Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(card.id);
                }}
                style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#0f172a',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.01em',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: 3,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.92)';
                  e.currentTarget.style.color = '#0f172a';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.05)';
                }}
              >
                <span>Read More</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

