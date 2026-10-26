import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroSectionProps {
  onTalkClick: () => void;
}

const clientLogos = [
  { name: 'Maersk', url: '/uploads/2026/05/maersk-white.svg' },
  { name: 'Authenticom', url: '/uploads/2026/05/authenticom-white.svg' },
  { name: 'Webbula', url: '/uploads/2026/07/webbula-white2.svg' },
  { name: 'TruBridge', url: '/uploads/2025/02/TruBridge.svg' },
  { name: 'Motive Retail', url: '/uploads/2026/05/motiveretail-white.svg' },
  { name: 'MedScope', url: '/uploads/2010/04/MedScope.svg' },
  { name: 'Delphi Vision', url: '/uploads/2026/05/delphivision-white.svg' },
];

const HeroSectionComponent: React.FC<HeroSectionProps> = ({ onTalkClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      if (headlineRef.current) gsap.set(headlineRef.current, { y: 0, opacity: 1 });
      if (ctaGroupRef.current) gsap.set(ctaGroupRef.current, { y: 0, opacity: 1 });
      if (emblemRef.current) gsap.set(emblemRef.current, { opacity: 1, scale: 1 });
      if (tickerRef.current) gsap.set(tickerRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 }
        );
      }
      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
      }
      if (emblemRef.current) {
        tl.fromTo(
          emblemRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
          '-=0.8'
        );
      }
      if (tickerRef.current) {
        tl.fromTo(
          tickerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.4'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#200b00', // Freehand warm dark espresso background
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        paddingTop: 'clamp(110px, 14vh, 150px)',
        paddingBottom: '0px',
      }}
    >
      {/* Background Ambient Warm Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: 'clamp(350px, 45vw, 650px)',
          height: 'clamp(350px, 45vw, 650px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 98, 0, 0.16) 0%, rgba(32, 11, 0, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Main Hero Grid Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: 'clamp(40px, 6vw, 80px)',
          paddingBottom: 'clamp(40px, 6vh, 60px)',
        }}
      >
        {/* Left Column: Headlines & CTA */}
        <div style={{ maxWidth: '640px' }}>
          <h1
            ref={headlineRef}
            style={{
              color: '#ffffff',
              marginBottom: '24px',
              letterSpacing: '-0.025em',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(42px, 5.2vw, 68px)',
              fontWeight: 400,
              lineHeight: 1.12,
              textTransform: 'none',
            }}
          >
            Building AI-Powered Products & Systems
          </h1>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: 'clamp(16px, 1.25vw, 19px)',
              lineHeight: 1.6,
              fontWeight: 400,
              marginBottom: '36px',
              fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
            }}
          >
            Neominds TechHub designs, builds, and modernizes enterprise web, mobile, cloud and applied AI systems for industry leaders worldwide.
          </p>

          {/* CTA Group: Freehand Architectural Buttons */}
          <div
            ref={ctaGroupRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center',
            }}
          >
            <Button
              variant="primary"
              onClick={onTalkClick}
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              style={{
                backgroundColor: '#fe6200',
                color: '#ffffff',
                borderRadius: '0px',
                padding: '14px 28px',
                fontWeight: 600,
                fontSize: '15px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              REQUEST A DEMO
            </Button>

            <Button
              variant="secondary"
              asLink
              href="#services"
              style={{
                borderColor: '#351505',
                color: '#ffffff',
                borderRadius: '0px',
                padding: '14px 24px',
                fontWeight: 500,
                fontSize: '15px',
                backgroundColor: 'transparent',
              }}
            >
              Explore Capabilities
            </Button>
          </div>
        </div>

        {/* Right Column: Freehand 3D Bronze / Glass Medallion Visual */}
        <div
          ref={emblemRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Radial Ambient Glow Behind Medallion */}
          <div
            style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(254, 98, 0, 0.28) 0%, rgba(32, 11, 0, 0) 70%)',
              filter: 'blur(35px)',
              pointerEvents: 'none',
            }}
          />

          {/* Floating 3D Emblem Container with Soft Hover Float */}
          <div
            className="hero-emblem-float"
            style={{
              position: 'relative',
              width: 'clamp(260px, 30vw, 360px)',
              height: 'clamp(260px, 30vw, 360px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* SVG 3D Isometric Glass & Bronze Token with Freehand 8-Arm Spark */}
            <svg
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0 30px 50px rgba(0, 0, 0, 0.75))',
              }}
            >
              <defs>
                <linearGradient id="bronzeFace" x1="40" y1="40" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4a220d" />
                  <stop offset="35%" stopColor="#2c1408" />
                  <stop offset="70%" stopColor="#1a0b04" />
                  <stop offset="100%" stopColor="#3d1b0a" />
                </linearGradient>

                <linearGradient id="bevelLight" x1="40" y1="40" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(254, 150, 60, 0.85)" />
                  <stop offset="40%" stopColor="rgba(254, 98, 0, 0.3)" />
                  <stop offset="70%" stopColor="rgba(53, 21, 5, 0.6)" />
                  <stop offset="100%" stopColor="rgba(254, 98, 0, 0.5)" />
                </linearGradient>

                <linearGradient id="innerGlow" x1="80" y1="80" x2="240" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(254, 98, 0, 0.45)" />
                  <stop offset="100%" stopColor="rgba(32, 11, 0, 0)" />
                </linearGradient>

                <radialGradient id="centerSparkGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff7a1a" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#fe6200" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#fe6200" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 3D Glass/Bronze Rounded Prism Base */}
              <rect
                x="44"
                y="44"
                width="232"
                height="232"
                rx="48"
                fill="url(#bronzeFace)"
                stroke="url(#bevelLight)"
                strokeWidth="3.5"
              />

              {/* Inner Inset Bevel */}
              <rect
                x="56"
                y="56"
                width="208"
                height="208"
                rx="40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
              />

              {/* Inner Warm Shadow / Vignette */}
              <rect
                x="58"
                y="58"
                width="204"
                height="204"
                rx="38"
                fill="url(#innerGlow)"
              />

              {/* Central Ambient Glow */}
              <circle cx="160" cy="160" r="70" fill="url(#centerSparkGlow)" />

              {/* 8-Blade Freehand Asterisk Glyph in Vibrant Orange */}
              <g transform="translate(160, 160)">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <path
                    key={i}
                    d="M-5 -46 C-5 -52 5 -52 5 -46 L5 -12 C5 -8 -5 -8 -5 -12 Z"
                    fill="#fe6200"
                    transform={`rotate(${angle})`}
                    style={{
                      filter: 'drop-shadow(0 2px 6px rgba(254, 98, 0, 0.6))',
                    }}
                  />
                ))}
                {/* Center Core Rivet */}
                <circle cx="0" cy="0" r="14" fill="#ffffff" />
                <circle cx="0" cy="0" r="8" fill="#fe6200" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Enterprise Partner Logo Strip (Matching Freehand Screenshot Bottom Ticker) */}
      <div
        ref={tickerRef}
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          borderTop: '1px solid #351505',
          backgroundColor: 'rgba(26, 9, 2, 0.98)',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <span
            style={{
              fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: 'rgba(255, 255, 255, 0.55)',
              textTransform: 'uppercase',
            }}
          >
            TRUSTED BY HIGH-GROWTH ENTERPRISES & INDUSTRY LEADERS
          </span>

          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'clamp(20px, 4vw, 40px)',
              flexWrap: 'wrap',
              opacity: 0.85,
            }}
          >
            {clientLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.url}
                alt={`${logo.name} logo`}
                loading="lazy"
                style={{
                  maxHeight: '26px',
                  maxWidth: '130px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.75,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatMedallion {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1.5deg);
          }
        }
        .hero-emblem-float {
          animation: floatMedallion 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export const HeroSection = React.memo(HeroSectionComponent);
