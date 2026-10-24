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

  // Word-by-word slow and buttery smooth scroll illumination
  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      const words = textContainerRef.current?.querySelectorAll('.scroll-word');
      if (words) {
        gsap.set(words, { opacity: 1, color: '#ffffff', y: 0 });
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
          opacity: 0.18,
          color: 'rgba(255, 255, 255, 0.25)',
          y: 4,
        },
        {
          opacity: 1,
          color: '#ffffff',
          y: 0,
          stagger: 0.08,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: 'top 85%',
            end: 'bottom 45%',
            scrub: 1.2, // Generous smooth scrub factor
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
        backgroundColor: '#f1efeb',
        paddingTop: 'clamp(64px, 8vw, 80px)',
        paddingBottom: 'clamp(64px, 8vw, 80px)',
        overflow: 'hidden',
        border: 'none',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Editorial Eyebrow Tag */}
        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#fe6200',
              textTransform: 'uppercase',
            }}
          >
            03 // PROVEN INDUSTRY SCALE
          </span>
        </div>

        {/* Large Editorial Headline with Pure Word-by-Word Smooth Fill */}
        <div
          ref={textContainerRef}
          style={{
            maxWidth: '1120px',
            marginBottom: 'clamp(48px, 6vw, 72px)',
          }}
        >
          <h2
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(30px, 3.8vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
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
                  opacity: 0.2,
                  color: 'rgba(32, 11, 0,  0.25)',
                  willChange: 'opacity, color, transform',
                }}
              >
                {word}
              </span>
            ))}
          </h2>
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
