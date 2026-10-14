import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ClientLogo {
  id: string;
  name: string;
  render: React.ReactNode;
}

const clientLogos: ClientLogo[] = [
  {
    id: 'plato',
    name: 'plato',
    render: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
          plato
        </span>
      </div>
    ),
  },
  {
    id: 'waterway',
    name: 'waterway',
    render: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '22px', fontWeight: 900, fontStyle: 'italic', color: '#ffffff', letterSpacing: '0.04em' }}>
          /// waterway
        </span>
      </div>
    ),
  },
  {
    id: 'nissin',
    name: 'NISSIN',
    render: (
      <div
        style={{
          border: '2px solid #ffffff',
          borderRadius: '16px',
          padding: '2px 12px',
          color: '#ffffff',
          fontWeight: 900,
          fontSize: '15px',
          letterSpacing: '0.08em',
        }}
      >
        NISSIN
      </div>
    ),
  },
  {
    id: 'cityindex',
    name: 'CITY INDEX',
    render: (
      <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em' }}>
        CITY INDEX
      </span>
    ),
  },
  {
    id: 'midiagnostics',
    name: 'miDiagnostics',
    render: (
      <span style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>
        <i style={{ fontStyle: 'italic', fontWeight: 900 }}>mi</i>Diagnostics
      </span>
    ),
  },
  {
    id: 'authenticom',
    name: 'AUTHENTICOM',
    render: (
      <span style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em' }}>
        AUTHENTICOM
      </span>
    ),
  },
  {
    id: 'maersk',
    name: 'MAERSK BROKER',
    render: (
      <span style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.06em' }}>
        MAERSK BROKER
      </span>
    ),
  },
  {
    id: 'trubridge',
    name: 'TruBridge',
    render: (
      <span style={{ fontSize: '19px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
        TruBridge<sup style={{ fontSize: '10px' }}>®</sup>
      </span>
    ),
  },
];

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [logoBatch, setLogoBatch] = useState(0);

  // Word-by-word slow and buttery smooth scroll illumination
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textContainerRef.current?.querySelectorAll('.scroll-word');
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

  // Premium 4-at-a-time Rolling Slot rotation every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoBatch((prev) => (prev + 1) % 2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Text broken strictly into words
  const headlineText =
    'Delivering software for businesses in e-commerce, education, healthcare, real estate, enterprise and retail across global markets.';
  const wordsList = headlineText.split(' ');

  // Group 8 logos into 4 pairs (one for each slot)
  const slotPairs = [
    [clientLogos[0], clientLogos[4]], // Slot 1: plato <-> miDiagnostics
    [clientLogos[1], clientLogos[5]], // Slot 2: waterway <-> AUTHENTICOM
    [clientLogos[2], clientLogos[6]], // Slot 3: NISSIN <-> MAERSK BROKER
    [clientLogos[3], clientLogos[7]], // Slot 4: CITY INDEX <-> TruBridge
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#001334',
        paddingTop: 'clamp(80px, 9vw, 120px)',
        paddingBottom: 'clamp(60px, 7vw, 100px)',
        overflow: 'hidden',
        border: 'none',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Large Editorial Headline with Pure Word-by-Word Smooth Fill */}
        <div
          ref={textContainerRef}
          style={{
            maxWidth: '1120px',
            marginBottom: 'clamp(36px, 5vw, 56px)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4.2vw, 64px)',
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
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
                  opacity: 0.18,
                  color: 'rgba(255, 255, 255, 0.25)',
                  willChange: 'opacity, color, transform',
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Decorative Blue Dot Motif */}
        <div style={{ margin: 'clamp(24px, 4vw, 36px) 0 clamp(36px, 5vw, 60px) 0', paddingLeft: '4px' }}>
          <span className="blue-dot" style={{ width: '8px', height: '8px' }} />
        </div>

        {/* 4 Logos at a Time with 3D Vertical Rolling Cylinder Effect */}
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            alignItems: 'center',
            justifyItems: 'center',
            gap: 'clamp(20px, 3vw, 40px)',
            paddingTop: '20px',
            borderTop: 'none',
          }}
        >
          {slotPairs.map((pair, slotIdx) => {
            const activeLogo = pair[logoBatch];

            return (
              <div
                key={slotIdx}
                className="logo-roller-slot"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '240px',
                  height: '56px',
                  overflow: 'hidden',
                  perspective: '800px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Rolling Content Container */}
                <div
                  key={logoBatch}
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
                  {activeLogo.render}
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
