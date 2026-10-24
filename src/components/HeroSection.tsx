import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroSectionProps {
  onTalkClick: () => void;
}

const HeroSectionComponent: React.FC<HeroSectionProps> = ({ onTalkClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const ledgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      if (ribbonRef.current) gsap.set(ribbonRef.current, { scale: 1, opacity: 1 });
      if (tagRef.current) gsap.set(tagRef.current, { opacity: 1, y: 0 });
      if (headlineRef.current) gsap.set(headlineRef.current, { y: 0, opacity: 1 });
      if (ctaGroupRef.current) gsap.set(ctaGroupRef.current, { y: 0, opacity: 1 });
      if (ledgerRef.current) gsap.set(ledgerRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (ribbonRef.current) {
        tl.fromTo(
          ribbonRef.current,
          { scale: 0.96, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }
        );
      }
      if (tagRef.current) {
        tl.fromTo(
          tagRef.current,
          { y: -12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=1.2'
        );
      }
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 },
          '-=0.8'
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
      if (ledgerRef.current) {
        tl.fromTo(
          ledgerRef.current,
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
        backgroundColor: '#200b00',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        paddingTop: 'clamp(110px, 15vh, 160px)',
        paddingBottom: '0px',
      }}
    >
      {/* Background Video with Dark Brown Vignette */}
      <div
        ref={ribbonRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <video
          preload="metadata"
          loop
          muted
          playsInline
          autoPlay
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.65,
            filter: 'contrast(1.05) brightness(0.85)',
          }}
          poster="/images/hero-ribbon.jpg"
        >
          <source src="/uploads/2026/05/new-cover.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Radial Vignette Mask with Freehand Dark Brown Atmosphere */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(32,11,0,0.4) 0%, rgba(32,11,0,0.92) 85%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Main Hero Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: '1280px',
          flex: 1,
          justifyContent: 'center',
          paddingBottom: 'clamp(40px, 6vh, 60px)',
        }}
      >
        {/* Editorial Subheading Eyebrow */}
        <div
          ref={tagRef}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#fe6200',
              borderRadius: '0px',
              display: 'inline-block',
            }}
          />
          <span
            className="eyebrow-tag"
            style={{
              fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: '#fe6200',
              textTransform: 'uppercase',
            }}
          >
            ENTERPRISE SOFTWARE & AI SYSTEMS //
          </span>
        </div>

        {/* Main Headline - Freehand BL Pylon Serif Display 64px */}
        <h1
          ref={headlineRef}
          style={{
            color: '#ffffff',
            maxWidth: '1150px',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            fontSize: 'clamp(40px, 5.5vw, 68px)',
            fontWeight: 400,
            lineHeight: 1.15,
            textTransform: 'none',
          }}
        >
          Building AI-Powered Products
        </h1>

        {/* Sub-line - Fustat 18px */}
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: 'clamp(16px, 1.3vw, 18px)',
            maxWidth: '780px',
            lineHeight: 1.5,
            fontWeight: 400,
            marginBottom: '36px',
            fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
          }}
        >
          Neominds TechHub builds web, mobile, cloud and AI software for businesses across the US, UK, Europe, Australia and the Middle East.
        </p>

        {/* CTA Group: Freehand Button System */}
        <div
          ref={ctaGroupRef}
          className="btn-group-cta"
        >
          <Button
            variant="primary"
            onClick={onTalkClick}
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            See our AI services
          </Button>

          <Button
            variant="secondary"
            asLink
            href="#services"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.4)',
              color: '#ffffff',
            }}
          >
            Explore Services Stack
          </Button>
        </div>
      </div>

      {/* Architectural Ledger Bar */}
      <div
        ref={ledgerRef}
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          borderTop: '1px solid #351505',
          backgroundColor: 'rgba(32, 11, 0, 0.95)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1280px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          <div>
            <span
              style={{
                display: 'block',
                fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: '#fe6200',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              GLOBAL REACH
            </span>
            <span
              style={{
                fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
                fontSize: '13px',
                color: '#ffffff',
                letterSpacing: '0.02em',
              }}
            >
              US · UK · EU · UAE · AUS
            </span>
          </div>

          <div>
            <span
              style={{
                display: 'block',
                fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: '#fe6200',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              CORE CAPABILITIES
            </span>
            <span
              style={{
                fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
                fontSize: '13px',
                color: '#ffffff',
                letterSpacing: '0.02em',
              }}
            >
              WEB · CLOUD · MOBILE · LLMs
            </span>
          </div>

          <div>
            <span
              style={{
                display: 'block',
                fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: '#fe6200',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              ENGAGEMENT MODEL
            </span>
            <span
              style={{
                fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
                fontSize: '13px',
                color: '#ffffff',
                letterSpacing: '0.02em',
              }}
            >
              PRINCIPAL LED · WEEKLY DEMOS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroSection = React.memo(HeroSectionComponent);
