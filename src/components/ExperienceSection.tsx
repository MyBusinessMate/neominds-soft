import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ClientLogo {
  id: string;
  name: string;
  url: string;
}

const clientLogos: ClientLogo[] = [
  { id: 'mindspace', name: 'Mindspace.ai', url: '/images/company-logos/mindspace-ai.png' },
  { id: 'dotcomweavers', name: 'Dotcomweavers', url: '/images/company-logos/dotcomweavers.png' },
  { id: 'mybusinessmate', name: 'MyBusinessMate', url: '/images/company-logos/mybusinessmate.png' },
  { id: 'oden', name: 'Oden', url: '/images/company-logos/oden.png' },
  { id: 'tecnomart', name: 'Tecnomart', url: '/images/company-logos/tecnomart.png' },
  { id: 'laptomart', name: 'Laptomart', url: '/images/company-logos/laptomart.png' },
];

const ExperienceSectionComponent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [logoBatch, setLogoBatch] = useState(0);

  // Word-by-word buttery smooth scroll illumination in black #000000 on light cream
  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      const words = textContainerRef.current?.querySelectorAll('.scroll-word');
      if (words) {
        gsap.set(words, { opacity: 1, color: '#000000', y: 0 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      if (!textContainerRef.current) return;
      const words = textContainerRef.current.querySelectorAll('.scroll-word');
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        {
          opacity: 0.22,
          color: 'rgba(0, 0, 0, 0.22)',
          y: 4,
        },
        {
          opacity: 1,
          color: '#000000',
          y: 0,
          stagger: 0.08,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: 'top 85%',
            end: 'bottom 45%',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Rotate client logos through ticker slots
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoBatch((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const headlineText =
    'Delivering software for businesses in e-commerce, education, healthcare, real estate, enterprise and retail across global markets.';
  const wordsList = headlineText.split(' ');

  const slotSets = [
    [clientLogos[0], clientLogos[4]],
    [clientLogos[1], clientLogos[5]],
    [clientLogos[2], clientLogos[0]],
    [clientLogos[3], clientLogos[1]],
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#f1efeb', // Freehand warm light cream
        paddingTop: 'clamp(72px, 9vw, 100px)',
        paddingBottom: 'clamp(72px, 9vw, 100px)',
        overflow: 'hidden',
        border: 'none',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Big Bold Headline Statement with Freehand Orange Highlight */}
        <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto clamp(48px, 6vw, 68px)' }}>
          <h2
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(32px, 4.4vw, 54px)',
              fontWeight: 400,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: '#000000',
              margin: '0 0 16px 0',
            }}
          >
            We engineered <span style={{ color: '#fe6200' }}>100+</span> production software platforms with <span style={{ color: '#fe6200' }}>99.99%</span> reliability.
          </h2>
          <p
            style={{
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              fontSize: 'clamp(16px, 1.25vw, 19px)',
              color: '#66615c',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Senior engineers embedded directly into your sprints. We ship working features weekly, eliminate technical debt, and keep your production systems resilient.
          </p>
        </div>

        {/* 3 Metric Columns in One Unified Sleek Card Strip with Ambient Orange Corner Glow */}
        <div
          className="experience-metrics-strip nm-corner-glow"
          style={{
            maxWidth: '740px',
            margin: '0 auto clamp(36px, 4.5vw, 54px) auto',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '12px',
            boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="experience-metrics-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              alignItems: 'stretch',
              width: '100%',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Metric 1 */}
            <div
              className="experience-metric-cell"
              style={{
                padding: 'clamp(20px, 2.4vh, 26px) clamp(12px, 1.5vw, 20px)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(34px, 3.4vw, 44px)',
                  fontWeight: 400,
                  color: '#000000',
                  lineHeight: 1.05,
                  marginBottom: '6px',
                  letterSpacing: '-0.02em',
                }}
              >
                100+
              </div>
              <div
                style={{
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  fontSize: 'clamp(11px, 0.9vw, 12px)',
                  color: '#444444',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  lineHeight: 1.35,
                }}
              >
                Enterprise Systems Shipped
              </div>
            </div>

            {/* Metric 2 with Thin Orange Vertical Dividers */}
            <div
              className="experience-metric-cell experience-metric-cell-center"
              style={{
                padding: 'clamp(20px, 2.4vh, 26px) clamp(12px, 1.5vw, 20px)',
                textAlign: 'center',
                borderLeft: '1px solid rgba(254, 98, 0, 0.35)',
                borderRight: '1px solid rgba(254, 98, 0, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(34px, 3.4vw, 44px)',
                  fontWeight: 400,
                  color: '#fe6200',
                  lineHeight: 1.05,
                  marginBottom: '6px',
                  letterSpacing: '-0.02em',
                }}
              >
                30+
              </div>
              <div
                style={{
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  fontSize: 'clamp(11px, 0.9vw, 12px)',
                  color: '#444444',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  lineHeight: 1.35,
                }}
              >
                Systems Built in 1 Year
              </div>
            </div>

            {/* Metric 3 */}
            <div
              className="experience-metric-cell"
              style={{
                padding: 'clamp(20px, 2.4vh, 26px) clamp(12px, 1.5vw, 20px)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(34px, 3.4vw, 44px)',
                  fontWeight: 400,
                  color: '#000000',
                  lineHeight: 1.05,
                  marginBottom: '6px',
                  letterSpacing: '-0.02em',
                }}
              >
                99.99%
              </div>
              <div
                style={{
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  fontSize: 'clamp(11px, 0.9vw, 12px)',
                  color: '#444444',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  lineHeight: 1.35,
                }}
              >
                Production Availability SLA
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Scroll Illumination Headline */}
        <div
          ref={textContainerRef}
          style={{
            maxWidth: '1120px',
            margin: '0 auto clamp(48px, 6vw, 72px)',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(26px, 3.4vw, 42px)',
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '8px',
            }}
          >
            {wordsList.map((word, wIdx) => (
              <span
                key={wIdx}
                className="scroll-word"
                style={{
                  display: 'inline-block',
                  marginRight: '0.28em',
                  opacity: 0.22,
                  color: 'rgba(0, 0, 0, 0.22)',
                  willChange: 'opacity, color, transform',
                }}
              >
                {word}
              </span>
            ))}
          </h3>
        </div>

        {/* 4 Logos at a Time with Rolling Effect Separated by Hairline Dividers */}
        <div
          className="experience-logos-grid"
          style={{
            width: '100%',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            paddingTop: '28px',
            paddingBottom: '28px',
            borderTop: '1px solid #e4e2e1',
            borderBottom: '1px solid #e4e2e1',
          }}
        >
          {slotSets.map((set, slotIdx) => {
            const activeLogo = set[logoBatch] || set[0];

            return (
              <div
                key={slotIdx}
                className="logo-roller-slot"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '220px',
                  height: '48px',
                  overflow: 'hidden',
                  perspective: '800px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  key={`${slotIdx}-${logoBatch}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: `logoRollIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${slotIdx * 0.08}s both`,
                    willChange: 'transform, opacity, filter',
                  }}
                >
                  <img
                    src={activeLogo.url}
                    alt={`${activeLogo.name} - Enterprise Client, Neominds Software Partner`}
                    loading="lazy"
                    style={{
                      maxHeight: '32px',
                      maxWidth: '160px',
                      objectFit: 'contain',
                      opacity: 0.85,
                      filter: 'grayscale(100%) contrast(120%)',
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .experience-logos-grid {
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(20px, 3vw, 40px);
        }

        @media (max-width: 767px) {
          .experience-metrics-grid {
            grid-template-columns: 1fr !important;
          }
          .experience-metric-cell-center {
            border-left: none !important;
            border-right: none !important;
            border-top: 1px solid #fe6200 !important;
            border-bottom: 1px solid #fe6200 !important;
          }
        }

        @media (max-width: 640px) {
          .experience-logos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px 16px !important;
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          .logo-roller-slot {
            max-width: 150px !important;
            height: 42px !important;
          }
        }

        @keyframes logoRollIn {
          0% {
            transform: translateY(110%) rotateX(-70deg);
            opacity: 0;
            filter: blur(4px);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(0%) rotateX(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>
    </section>
  );
};

export const ExperienceSection = React.memo(ExperienceSectionComponent);
