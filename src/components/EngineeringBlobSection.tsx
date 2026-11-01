import React, { useLayoutEffect, useRef } from 'react';
import { Layers, ShieldCheck, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EngineeringBlobSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      if (textContentRef.current) gsap.set(textContentRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current,
          { y: 24, opacity: 0.5 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'top 40%',
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
        backgroundColor: '#fbf7f0', // Seamless warm cream background that blends with the page
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 5,
        paddingTop: 'clamp(72px, 9vw, 110px)',
        paddingBottom: 'clamp(72px, 9vw, 110px)',
        paddingLeft: '24px',
        paddingRight: '24px',
        borderTop: '1px solid #e8e4df',
      }}
    >
      {/* Centered Editorial Content */}
      <div
        ref={textContentRef}
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Headline: 2 Lines with "with AI." in vibrant brand orange italic serif */}
        <h2
          style={{
            fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            fontSize: 'clamp(36px, 5.2vw, 76px)',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            margin: '0 0 24px 0',
            color: '#000000',
          }}
        >
          Strong software.
          <br />
          Made smarter <span style={{ color: '#fe6200', fontStyle: 'italic' }}>with AI.</span>
        </h2>

        {/* Centered Orange Accent Line */}
        <div
          style={{
            width: '52px',
            height: '3.5px',
            backgroundColor: '#fe6200',
            borderRadius: '2px',
            marginBottom: '28px',
          }}
        />

        {/* Lead Paragraph */}
        <p
          style={{
            color: '#3a3a3a',
            maxWidth: '740px',
            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
            fontSize: 'clamp(15px, 1.2vw, 17.5px)',
            lineHeight: 1.65,
            fontWeight: 400,
            letterSpacing: '-0.01em',
            margin: '0 auto clamp(36px, 4.5vw, 48px) auto',
          }}
        >
          AI only creates value when the system underneath is rock solid. We build your core application, cloud architecture, and AI models as one unified system — fast, secure, maintainable, and built to handle real traffic.
        </p>

        {/* 3 Value Pillars Strip */}
        <div
          className="engineering-pillars-strip"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(20px, 3.2vw, 40px)',
            flexWrap: 'wrap',
          }}
        >
          {/* Pillar 1 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Layers size={22} color="#fe6200" strokeWidth={1.8} style={{ flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                fontSize: 'clamp(14.5px, 1.1vw, 16px)',
                fontWeight: 600,
                color: '#111111',
                letterSpacing: '-0.01em',
              }}
            >
              Built for scale
            </span>
          </div>

          {/* Divider */}
          <div
            className="engineering-pillar-divider"
            style={{
              width: '1px',
              height: '22px',
              backgroundColor: '#dcd7cf',
            }}
          />

          {/* Pillar 2 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <ShieldCheck size={22} color="#fe6200" strokeWidth={1.8} style={{ flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                fontSize: 'clamp(14.5px, 1.1vw, 16px)',
                fontWeight: 600,
                color: '#111111',
                letterSpacing: '-0.01em',
              }}
            >
              Secure by design
            </span>
          </div>

          {/* Divider */}
          <div
            className="engineering-pillar-divider"
            style={{
              width: '1px',
              height: '22px',
              backgroundColor: '#dcd7cf',
            }}
          />

          {/* Pillar 3 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Cpu size={22} color="#fe6200" strokeWidth={1.8} style={{ flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                fontSize: 'clamp(14.5px, 1.1vw, 16px)',
                fontWeight: 600,
                color: '#111111',
                letterSpacing: '-0.01em',
              }}
            >
              AI-ready architecture
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .engineering-pillars-strip {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center !important;
          }
          .engineering-pillar-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
