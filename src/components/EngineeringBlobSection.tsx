import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EngineeringBlobSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      if (textContentRef.current) gsap.set(textContentRef.current, { opacity: 1, y: 0 });
      if (blobRef.current) gsap.set(blobRef.current, { opacity: 0.92, scale: 1, xPercent: -50, yPercent: -50 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Proportional Circle Orb: Stays a pure 1:1 circle, centered with xPercent/yPercent
      if (blobRef.current) {
        gsap.fromTo(
          blobRef.current,
          { scale: 0.86, opacity: 0.65, xPercent: -50, yPercent: -50 },
          {
            scale: 1,
            opacity: 0.92,
            xPercent: -50,
            yPercent: -50,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'center 45%',
              scrub: 1.2,
            },
          }
        );
      }

      // 2. Editorial Text Smooth Entrance
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current,
          { y: 24, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'top 35%',
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="engineering"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(580px, 75vh, 780px)',
        backgroundColor: '#fbf9f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 5,
        padding: 'clamp(90px, 12vh, 150px) 24px',
      }}
    >
      {/* 
        A True Circular Orange Glowing Orb.
        Enforces a strict 1:1 Aspect Ratio with borderRadius: 50%.
        Feathered seamlessly into #fbf9f5 with zero hard cuts or muddy tones.
      */}
      <div
        ref={blobRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(460px, 48vw, 680px)',
          height: 'clamp(460px, 48vw, 680px)',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 50% 50%, #fe6200 0%, #ff7300 28%, rgba(254, 98, 0, 0.62) 50%, rgba(254, 98, 0, 0.20) 72%, rgba(251, 249, 245, 0) 100%)',
          filter: 'blur(36px)',
          zIndex: 1,
          pointerEvents: 'none',
          willChange: 'transform, opacity',
        }}
      />

      {/* Centered Editorial Text Content - High Contrast Black Typography */}
      <div
        ref={textContentRef}
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Headline in BL Pylon Serif Display: 100% Solid Black with Signature Accent Dots */}
        <h2
          style={{
            fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            fontSize: 'clamp(38px, 5.6vw, 82px)',
            fontWeight: 400,
            lineHeight: 1.14,
            letterSpacing: '-0.025em',
            marginBottom: 'clamp(22px, 3.2vw, 34px)',
            color: '#000000',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.25)',
          }}
        >
          Strong software
          <span
            style={{
              color: '#fe6200',
              marginLeft: '0.04em',
            }}
          >
            .
          </span>
          <br />
          Made smarter with AI
          <span
            style={{
              color: '#fe6200',
              marginLeft: '0.04em',
            }}
          >
            .
          </span>
        </h2>

        {/* Lead Paragraph: Crisp Pure Black for Uncompromised Legibility over Orange Glow */}
        <p
          className="body-lead"
          style={{
            color: '#1a1a1a',
            maxWidth: '740px',
            fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
            fontSize: 'clamp(16px, 1.35vw, 19px)',
            lineHeight: 1.65,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            margin: '0 auto',
          }}
        >
          AI only creates value when the system underneath is rock solid. We build your core application, cloud architecture, and AI models as one unified system — fast, secure, maintainable, and built to handle real traffic.
        </p>
      </div>
    </section>
  );
};


