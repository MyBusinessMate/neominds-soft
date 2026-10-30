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
  { name: 'Webbula', url: '/uploads/2026/07/webbula-white.svg' },
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
          { scale: 0.96, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
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
      className="hero-root-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#fbf9f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        paddingTop: 'clamp(80px, 11vh, 120px)',
        paddingBottom: '0px',
      }}
    >
      {/* ========================================================
          MOBILE HERO VIEW (< 860px) - EXACT PIXEL MATCH TO MOCKUP
          ======================================================== */}
      <div className="mobile-hero-layout">
        {/* Foreground Content Stack */}
        <div className="mobile-hero-content">
          <h1 className="mobile-hero-heading">
            Building software that scales — and AI that delivers in production.
          </h1>

          <p className="mobile-hero-subtext">
            From high-growth SaaS platforms and mobile apps to production multi-agent AI systems.
          </p>

          <div className="mobile-hero-cta-stack">
            <Button
              variant="primary"
              onClick={onTalkClick}
              icon={<ArrowRight size={18} strokeWidth={2.4} />}
              iconPosition="right"
              className="mobile-cta-primary"
              style={{
                width: '100%',
                backgroundColor: '#fe6200',
                color: '#ffffff',
                borderRadius: '8px',
                padding: '16px 24px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: '14.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                border: 'none',
                boxShadow: '0 4px 16px rgba(254, 98, 0, 0.32)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              REQUEST A DEMO
            </Button>

            <Button
              variant="secondary"
              asLink
              href="#services"
              className="mobile-cta-secondary"
              style={{
                width: '100%',
                border: '1.5px solid #111111',
                color: '#111111',
                borderRadius: '8px',
                padding: '15px 24px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: '15.5px',
                backgroundColor: 'rgba(251, 249, 245, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Explore Capabilities
            </Button>
          </div>
        </div>

        {/* Properly framed single mobile robot below CTA buttons */}
        <div className="mobile-robot-container">
          <img
            src="/images/mobile-hero.png"
            alt="AI Engineering Robot"
            className="mobile-robot-img"
          />
        </div>
      </div>

      {/* ========================================================
          DESKTOP HERO VIEW (>= 860px) - EXACT PIXEL MATCH TO MOCKUP
          ======================================================== */}
      <div
        className="container desktop-hero-layout"
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1360px',
          width: '100%',
          margin: '0 auto',
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(460px, 1.15fr) minmax(420px, 0.85fr)',
          alignItems: 'center',
          gap: 'clamp(20px, 3.5vw, 48px)',
          paddingBottom: 'clamp(16px, 2.5vh, 32px)',
        }}
      >
        {/* Left Column: Headlines & CTA */}
        <div style={{ maxWidth: '640px', position: 'relative', zIndex: 10 }}>
          <h1
            ref={headlineRef}
            style={{
              color: '#000000',
              marginBottom: '28px',
              letterSpacing: '-0.03em',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(44px, 5.4vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.08,
              textTransform: 'none',
            }}
          >
            Building software that scales — and AI that delivers in production.
          </h1>

          <p
            style={{
              color: '#222222',
              fontSize: 'clamp(16px, 1.25vw, 18px)',
              lineHeight: 1.62,
              fontWeight: 400,
              marginBottom: '38px',
              maxWidth: '560px',
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
            }}
          >
            From high-growth SaaS platforms and mobile apps to production multi-agent AI systems. We partner with product leaders to design, build, and scale reliable software with dedicated engineering teams.
          </p>

          {/* CTA Group: Primary Pill + Subtle Outline Button */}
          <div
            ref={ctaGroupRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <Button
              variant="primary"
              onClick={onTalkClick}
              icon={<ArrowRight size={18} strokeWidth={2.4} />}
              iconPosition="right"
              style={{
                backgroundColor: '#fe6200',
                color: '#ffffff',
                borderRadius: '8px',
                padding: '16px 32px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: '14.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                border: 'none',
                boxShadow: '0 4px 18px rgba(254, 98, 0, 0.38)',
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              REQUEST A DEMO
            </Button>

            <Button
              variant="secondary"
              asLink
              href="#services"
              style={{
                border: '1.5px solid rgba(0, 0, 0, 0.28)',
                color: '#111111',
                borderRadius: '8px',
                padding: '15px 30px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '15px',
                backgroundColor: 'rgba(251, 249, 245, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease',
              }}
            >
              Explore Capabilities
            </Button>
          </div>
        </div>

        {/* Right Column: AI Humanoid Robot in Cream Suit */}
        <div
          ref={emblemRef}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Subtle Ambient Warm Glow behind Head */}
          <div
            style={{
              position: 'absolute',
              top: '12%',
              right: '25%',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(254, 98, 0, 0.14) 0%, rgba(254, 98, 0, 0.03) 48%, transparent 70%)',
              filter: 'blur(36px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Floating Robot Container */}
          <div
            className="hero-robot-float"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              height: 'clamp(460px, 62vh, 660px)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <img
              src="/images/robot-hero.png"
              alt="Autonomous AI Engineering & Intelligence"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.45) 86%, rgba(0,0,0,0.1) 94%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.45) 86%, rgba(0,0,0,0.1) 94%, transparent 100%)',
                userSelect: 'none',
                pointerEvents: 'none',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      {/* Enterprise Partner Logo Strip */}
      <div
        ref={tickerRef}
        className="hero-client-strip-wrapper"
        style={{
          position: 'relative',
          zIndex: 4,
          width: '100%',
          backgroundColor: '#fbf9f5',
          paddingTop: 'clamp(44px, 5.5vh, 68px)',
          paddingBottom: 'clamp(32px, 4.5vh, 52px)',
          marginTop: 'clamp(36px, 4.5vh, 54px)',
        }}
      >
        <div
          className="container hero-client-strip-container"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
            padding: '0 24px',
          }}
        >
          <span
            className="hero-client-strip-label"
            style={{
              color: '#000000',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              opacity: 0.6,
              textAlign: 'center',
              lineHeight: 1.4,
              maxWidth: '92%',
              marginBottom: '2px',
            }}
          >
            TRUSTED BY PRODUCT TEAMS AT HIGH-GROWTH COMPANIES
          </span>

          <div
            className="hero-client-strip-logos"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(20px, 3.2vw, 54px)',
              flexWrap: 'wrap',
              opacity: 0.88,
              width: '100%',
              maxWidth: '1240px',
            }}
          >
            {clientLogos.map((client) => (
              <span
                key={client.name}
                className="hero-client-name"
                style={{
                  color: '#000000',
                  fontFamily: "'BL Pylon Serif', serif",
                  fontSize: 'clamp(15px, 1.5vw, 21px)',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatRobot {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .hero-robot-float {
          animation: floatRobot 5s ease-in-out infinite;
        }

        /* Desktop vs Mobile Hero Displays */
        @media (min-width: 860px) {
          .mobile-hero-layout {
            display: none !important;
          }
          .desktop-hero-layout {
            display: grid !important;
          }
        }

        @media (max-width: 859px) {
          .desktop-hero-layout {
            display: none !important;
          }
          .hero-root-section {
            padding-top: 64px !important;
            min-height: auto !important;
          }
          .mobile-hero-layout {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background-color: #fbf9f5;
          }

          /* Foreground Content */
          .mobile-hero-content {
            position: relative;
            z-index: 2;
            padding: 24px 20px 20px;
          }

          .mobile-hero-heading {
            color: #111111;
            font-family: var(--typography-display-family, 'BL Pylon Serif', serif);
            font-size: clamp(34px, 8.8vw, 42px);
            font-weight: 400;
            line-height: 1.15;
            letter-spacing: -0.025em;
            margin: 0 0 16px 0;
            position: relative;
            z-index: 3;
          }

          .mobile-hero-subtext {
            color: #2b2b2b;
            font-family: var(--typography-body-family, 'DM Sans'), sans-serif;
            font-size: 15.5px;
            line-height: 1.5;
            font-weight: 450;
            margin: 0 0 24px 0;
            max-width: 98%;
            position: relative;
            z-index: 3;
          }

          .mobile-hero-cta-stack {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            position: relative;
            z-index: 3;
          }

          /* Single Mobile Robot Container Framed Below CTA Buttons */
          .mobile-robot-container {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 16px auto 0;
            padding: 0 16px 20px;
            z-index: 2;
          }

          .mobile-robot-img {
            width: 100%;
            max-width: 340px;
            height: auto;
            max-height: 380px;
            object-fit: contain;
            margin: 0 auto;
            display: block;
            user-select: none;
            pointer-events: none;
          }

          /* Client Strip Mobile Responsiveness */
          .hero-client-strip-wrapper {
            margin-top: 16px !important;
            padding-top: 24px !important;
            padding-bottom: 24px !important;
          }

          .hero-client-strip-logos {
            gap: 12px 20px !important;
            padding: 4px 8px !important;
          }

          .hero-client-name {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export const HeroSection = React.memo(HeroSectionComponent);
