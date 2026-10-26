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
  { id: 'migiagnostics', name: 'Migiagnostics', url: '/uploads/2025/02/Migiagnostics.svg' },
  { id: 'plato', name: 'Plato', url: '/uploads/2010/04/Plato.svg' },
  { id: 'authenticom', name: 'Authenticom', url: '/uploads/2026/05/authenticom-white.svg' },
  { id: 'webbula', name: 'Webbula', url: '/uploads/2026/07/webbula-white2.svg' },
  { id: 'waterway', name: 'Waterway', url: '/uploads/2010/04/Waterway.svg' },
  { id: 'motiveretail', name: 'Motive Retail', url: '/uploads/2026/05/motiveretail-white.svg' },
  { id: 'yfc', name: 'YourFitnessCoach', url: '/uploads/2010/04/YourFitnessCoach.svg' },
  { id: 'maersk', name: 'Maersk', url: '/uploads/2026/05/maersk-white.svg' },
  { id: 'nissin', name: 'Nissin', url: '/uploads/2010/04/Nissin.svg' },
  { id: 'medscope', name: 'MedScope', url: '/uploads/2010/04/MedScope.svg' },
  { id: 'trubridge', name: 'TruBridge', url: '/uploads/2025/02/TruBridge.svg' },
  { id: 'delphivision', name: 'Delphi Vision', url: '/uploads/2026/05/delphivision-white.svg' },
  { id: 'adventr', name: 'Adventr', url: '/uploads/2010/04/Adventr.svg' },
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
    [clientLogos[0], clientLogos[4], clientLogos[8]],
    [clientLogos[1], clientLogos[5], clientLogos[9]],
    [clientLogos[2], clientLogos[6], clientLogos[10]],
    [clientLogos[3], clientLogos[7], clientLogos[11]],
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
        {/* Top Trust & Rating Proof Bar (Matching Freehand Screenshot Section 2) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: 'clamp(28px, 4vw, 44px)',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#868683',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: '#fe6200', fontWeight: 700 }}>★ 4.9 RATING</span>
            <span>·</span>
            <span>G2 LEADER</span>
            <span>·</span>
            <span>CLUTCH TOP AI DEV</span>
            <span>·</span>
            <span>ISO 27001 ALIGNED</span>
          </div>
        </div>

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
              fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
              fontSize: 'clamp(16px, 1.25vw, 19px)',
              color: '#868683',
              lineHeight: 1.55,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            High-performance engineering teams that deliver faster time-to-market and measurable business outcomes.
          </p>
        </div>

        {/* 3 Metric Columns with Thin Orange Vertical Dividers (Exact Freehand Layout) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            alignItems: 'center',
            gap: '0px',
            backgroundColor: '#ffffff',
            border: '1px solid #e4e2e1',
            borderRadius: '0px',
            marginBottom: 'clamp(64px, 8vw, 84px)',
          }}
        >
          {/* Metric 1 */}
          <div style={{ padding: 'clamp(28px, 4vw, 44px)', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(44px, 5vw, 60px)',
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1,
                marginBottom: '10px',
              }}
            >
              100+
            </div>
            <div
              style={{
                fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                fontSize: '14px',
                color: '#868683',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Enterprise Systems Shipped
            </div>
          </div>

          {/* Metric 2 with Left & Right Orange Dividers */}
          <div
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              textAlign: 'center',
              borderLeft: '1px solid #fe6200',
              borderRight: '1px solid #fe6200',
            }}
          >
            <div
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(44px, 5vw, 60px)',
                fontWeight: 400,
                color: '#fe6200',
                lineHeight: 1,
                marginBottom: '10px',
              }}
            >
              20+
            </div>
            <div
              style={{
                fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                fontSize: '14px',
                color: '#868683',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Years Engineering Depth
            </div>
          </div>

          {/* Metric 3 */}
          <div style={{ padding: 'clamp(28px, 4vw, 44px)', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(44px, 5vw, 60px)',
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1,
                marginBottom: '10px',
              }}
            >
              99.99%
            </div>
            <div
              style={{
                fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                fontSize: '14px',
                color: '#868683',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Production Availability SLA
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
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            alignItems: 'center',
            justifyItems: 'center',
            gap: 'clamp(20px, 3vw, 40px)',
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
                      filter: 'invert(1) brightness(0.2)', // crisp dark logo on light background
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
