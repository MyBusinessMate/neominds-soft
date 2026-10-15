import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroSectionProps {
  onTalkClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onTalkClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      if (ribbonRef.current) gsap.set(ribbonRef.current, { scale: 1, opacity: 1 });
      if (dotRef.current) gsap.set(dotRef.current, { scale: 1, opacity: 1 });
      if (headlineRef.current) gsap.set(headlineRef.current, { y: 0, opacity: 1 });
      if (ctaRef.current) gsap.set(ctaRef.current, { y: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Subtle float / entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (ribbonRef.current) {
        tl.fromTo(
          ribbonRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }
        );
      }
      if (dotRef.current) {
        tl.fromTo(
          dotRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6 },
          '-=1.2'
        );
      }
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 },
          '-=0.8'
        );
      }
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
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
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 'clamp(100px, 14vh, 160px)',
        paddingBottom: 'clamp(48px, 8vh, 80px)',
      }}
    >
      {/* Background Cover Video & Abstract Ribbon matching EffectiveSoft */}
      <div
        ref={ribbonRef}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
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
            opacity: 0.85,
          }}
          poster="/images/hero-ribbon.jpg"
        >
          <source src="https://www.effectivesoft.com/wp/wp-content/uploads/2026/05/new-cover.webm" type="video/webm" />
          <source src="https://www.effectivesoft.com/wp/wp-content/uploads/2026/05/new-cover.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle overlay vignette for perfect readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 85%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Blue Dot Motif at top-left matching screenshot */}
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: 'clamp(140px, 20vw, 190px)',
          left: 'clamp(16px, 4vw, 50px)',
          zIndex: 3,
        }}
      >
        <span className="blue-dot" style={{ width: '8px', height: '8px' }} />
      </div>

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: '1280px',
        }}
      >
        {/* Main Headline matching EffectiveSoft */}
        <h1
          ref={headlineRef}
          className="display-title"
          style={{
            color: '#ffffff',
            maxWidth: '1150px',
            marginBottom: 'var(--space-5)',
            textShadow: '0 4px 20px rgba(0,0,0,0.6)',
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase',
          }}
        >
          BUILDING AI-POWERED PRODUCTS
        </h1>

        {/* Sub-line from Homepage.md */}
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: 'clamp(16px, 1.4vw, 22px)',
            maxWidth: '780px',
            lineHeight: 1.5,
            fontWeight: 400,
            marginBottom: 'var(--space-8)',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Neominds TechHub builds web, mobile, cloud and AI software for businesses across the US, UK, Europe, Australia and the Middle East.
        </p>

        {/* Blue rectangular CTA button */}
        <button
          ref={ctaRef}
          onClick={onTalkClick}
          className="btn btn-primary btn-lg"
          style={{
            boxShadow: 'none',
            backgroundColor: '#2258e7',
            color: '#ffffff',
            padding: '16px 36px',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '0px',
            cursor: 'pointer',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.25s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#183c9e')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2258e7')}
        >
          See our AI services
        </button>
      </div>
    </section>
  );
};
