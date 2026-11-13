import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { DEMO_FORM_URL } from '../constants/links';

interface HeroSectionProps {
  onTalkClick?: () => void;
}

const clientLogos = [
  { name: 'ByteXL', logoUrl: '/images/company-logos/bytexl.webp' },
  { name: 'Fundbot', logoUrl: '/images/company-logos/fundbot.png' },
  { name: 'Dotcomweavers', logoUrl: '/images/company-logos/dotcomweavers.png' },
  { name: 'Fero Logistics', logoUrl: '/images/company-logos/fero.svg' },
  { name: 'MyBusinessMate', logoUrl: '/images/company-logos/mybusinessmate.png' },
  { name: 'The 1AM', logoUrl: '/images/company-logos/The1AM.png' },
  { name: 'Flexport', logoUrl: '/images/company-logos/flexport-light.svg' },
  { name: 'AiGuroo', logoUrl: '/images/company-logos/AiGuroo.svg' },
  { name: 'EduTech', logoUrl: '/images/company-logos/edutech-logo.png' },
  { name: 'Interzoon', logoUrl: '/images/company-logos/interzoon-logo.png' },
  { name: 'Mindspace.ai', logoUrl: '/images/company-logos/mindspace-ai.png' },
];

const HeroSectionComponent: React.FC<HeroSectionProps> = ({ onTalkClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  const handleDemoClick = () => {
    if (onTalkClick) onTalkClick();
    window.open(DEMO_FORM_URL, '_blank', 'noopener,noreferrer');
  };

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
        paddingTop: '80px',
        paddingBottom: '0px',
      }}
    >
      {/* ========================================================
          MOBILE HERO VIEW (< 860px) - EXACT MATCH TO REFERENCE DESIGN
          Right-anchored AI Robot in suit, left-aligned typography in cream space, stacked pill CTAs
          ======================================================== */}
      <div className="mobile-hero-layout">
        {/* Right-Anchored Background Robot in Suit (Soft fade at lower edge) */}
        <div className="mobile-robot-backdrop">
          <img
            src="/images/robot-hero-mobile.png"
            alt="AI Engineering Robot in Suit"
            className="mobile-robot-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('/images/robot-hero.png')) {
                target.src = '/images/robot-hero.png';
              }
            }}
          />
        </div>

        {/* Ambient Warm Gradient & Orange Glow Overlay behind mobile headline */}
        <div className="mobile-hero-glow-overlay" />

        {/* Left-Aligned Foreground Content Stack in Open Cream Space */}
        <div className="mobile-hero-content">
          <h1 className="mobile-hero-heading">
            Building<br />
            software that<br />
            scales - and AI<br />
            that delivers<br />
            in production.
          </h1>

          <p className="mobile-hero-subtext">
            From high-growth SaaS platforms and mobile apps to production multi-agent AI systems.
          </p>

          <div className="mobile-hero-cta-stack">
            <Button
              variant="primary"
              onClick={handleDemoClick}
              icon={<ArrowRight size={18} strokeWidth={2.4} />}
              iconPosition="right"
              className="mobile-cta-primary"
              style={{
                width: '100%',
                backgroundColor: '#fe6200',
                color: '#ffffff',
                borderRadius: '9999px',
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
                borderRadius: '9999px',
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
          paddingTop: 'clamp(12px, 1.8vh, 24px)',
          paddingBottom: 'clamp(16px, 2.5vh, 32px)',
        }}
      >
        {/* Left Column: Headlines & CTA */}
        <div style={{ maxWidth: '640px', position: 'relative', zIndex: 10, paddingTop: '0px' }}>
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
            Building software that scales - and AI that delivers in production.
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
              onClick={handleDemoClick}
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
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            minHeight: '440px',
          }}
        >
          {/* Subtle Ambient Radial Glow Behind Robot */}
          <div
            style={{
              position: 'absolute',
              width: '460px',
              height: '460px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(254, 98, 0, 0.12) 0%, rgba(254, 98, 0, 0.03) 48%, transparent 72%)',
              filter: 'blur(36px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <img
            src="/images/robot-hero.png"
            srcSet="/images/robot-hero.png 1x, /images/robot-hero-large.png 2x"
            alt="AI Engineering Robot in Bespoke Suit"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: '520px',
              height: 'auto',
              maxHeight: '620px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 48px rgba(0, 0, 0, 0.12))',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('/images/robot-hero.png')) {
                target.src = '/images/robot-hero.png';
              }
            }}
          />
        </div>
      </div>

      {/* ========================================================
          FULL-WIDTH CLIENT LOGO TICKER STRIP (Anchor at Section Bottom)
          ======================================================== */}
      <div
        ref={tickerRef}
        className="hero-client-strip-wrapper"
        style={{
          width: '100%',
          backgroundColor: '#f5e9d9',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          paddingTop: '26px',
          paddingBottom: '26px',
          position: 'relative',
          zIndex: 5,
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span
            style={{
              color: 'rgba(0, 0, 0, 0.65)',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Trusted by Forward-Thinking Product & Engineering Teams
          </span>

          {/* Single-line continuous looping logo marquee (Right to Left, Logos only) */}
          <div
            className="hero-logo-marquee-viewport"
            style={{
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            }}
          >
            <div className="hero-logo-marquee-track">
              {[...clientLogos, ...clientLogos].map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="hero-logo-marquee-item"
                  title={client.name}
                >
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="hero-logo-img"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Responsive Styles */}
      <style>{`
        /* Desktop visibility by default */
        .mobile-hero-layout {
          display: none;
        }

        .desktop-hero-layout {
          display: grid;
        }

        /* Universal Client Strip Single-Line Looping Marquee (Runs on Desktop & Mobile) */
        .hero-logo-marquee-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .hero-logo-marquee-track {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          gap: 64px !important;
          width: max-content !important;
          animation: heroLogoMarquee 26s linear infinite !important;
          will-change: transform;
          padding: 8px 0;
        }

        .hero-logo-marquee-track:hover {
          animation-play-state: paused !important;
        }

        .hero-logo-marquee-item {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          opacity: 0.82;
          transition: opacity 0.25s ease, transform 0.25s ease;
          cursor: pointer;
        }

        .hero-logo-marquee-item:hover {
          opacity: 1;
          transform: scale(1.08);
        }

        .hero-logo-img {
          height: 30px !important;
          max-width: 130px !important;
          width: auto !important;
          object-fit: contain !important;
          filter: grayscale(100%) brightness(0.25);
          transition: filter 0.25s ease, transform 0.25s ease;
          display: block;
        }

        .hero-logo-marquee-item:hover .hero-logo-img {
          filter: grayscale(0%) brightness(1);
        }

        @keyframes heroLogoMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Mobile Layout Breakpoint (< 860px) */
        @media (max-width: 859px) {
          .hero-root-section {
            min-height: auto !important;
            padding-top: 60px !important;
            padding-bottom: 0 !important;
            background-color: #f5e9d9 !important;
          }

          .desktop-hero-layout {
            display: none !important;
          }

          .mobile-hero-layout {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            overflow: hidden;
            padding: 24px 20px 32px 20px;
          }

          /* Robot Positioned Top-Right Behind Text */
          .mobile-robot-backdrop {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 82vw;
            max-width: 360px;
            height: clamp(340px, 50vh, 440px);
            z-index: 2;
            pointer-events: none;
            user-select: none;
            opacity: 1;
            mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
          }

          .mobile-robot-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right top;
            display: block;
          }

          /* Ambient Gradient & Warm Brand Glow Overlay behind mobile headline */
          .mobile-hero-glow-overlay {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 1;
            background:
              radial-gradient(ellipse 95% 75% at 20% 50%, rgba(245, 233, 217, 0.95) 0%, rgba(245, 233, 217, 0.8) 45%, transparent 80%),
              radial-gradient(circle at 18% 35%, rgba(254, 98, 0, 0.14) 0%, rgba(254, 98, 0, 0.04) 50%, transparent 70%);
          }

          /* Left-Aligned Foreground Content in open cream space */
          .mobile-hero-content {
            position: relative;
            z-index: 5;
            width: 100%;
            margin-top: clamp(260px, 35vh, 320px);
            padding: 0;
          }

          .mobile-hero-content::before {
            content: '';
            position: absolute;
            top: -24px;
            left: -20px;
            right: -10px;
            bottom: 40px;
            z-index: -1;
            pointer-events: none;
            background:
              radial-gradient(ellipse 90% 65% at 25% 35%, rgba(254, 98, 0, 0.22) 0%, rgba(254, 98, 0, 0.08) 45%, transparent 75%),
              radial-gradient(ellipse at 35% 35%, rgba(245, 233, 217, 0.95) 0%, rgba(245, 233, 217, 0.82) 48%, transparent 85%);
            filter: blur(16px);
          }

          .mobile-hero-heading {
            color: #111111;
            font-family: var(--typography-display-family, 'BL Pylon Serif', serif);
            font-size: clamp(32px, 8.2vw, 40px);
            font-weight: 400;
            line-height: 1.1;
            letter-spacing: -0.025em;
            margin: 0 0 14px 0;
            max-width: 85%;
            text-shadow: 0 1px 18px rgba(245, 233, 217, 0.7);
          }

          .mobile-hero-subtext {
            color: #2b2b2b;
            font-family: var(--typography-body-family, 'DM Sans'), sans-serif;
            font-size: 15px;
            line-height: 1.45;
            font-weight: 400;
            margin: 0 0 20px 0;
            max-width: 85%;
          }

          .mobile-hero-cta-stack {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            position: relative;
            z-index: 5;
          }

          /* Client Strip Mobile Responsiveness */
          .hero-client-strip-wrapper {
            margin-top: 10px !important;
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }

          .hero-logo-marquee-track {
            gap: 40px !important;
            animation-duration: 20s !important;
          }

          .hero-logo-img {
            height: 24px !important;
            max-width: 100px !important;
          }
        }
      `}</style>
    </section>
  );
};

export const HeroSection = React.memo(HeroSectionComponent);
