import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EngineeringBlobSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const dotLeftRef = useRef<HTMLSpanElement>(null);
  const dotRightRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      if (blobRef.current) {
        gsap.set(blobRef.current, {
          width: 'clamp(220px, 24vw, 340px)',
          height: 'clamp(100px, 12vw, 160px)',
          bottom: '-70px',
          borderRadius: '50% 50% 0 0',
          opacity: 0.95,
          filter: 'blur(20px)',
        });
      }
      if (headlineRef.current) gsap.set(headlineRef.current, { color: '#0f172a' });
      const dots = [dotLeftRef.current, dotRightRef.current].filter((el): el is HTMLSpanElement => Boolean(el));
      if (dots.length > 0) gsap.set(dots, { color: '#2258e7' });
      if (paragraphRef.current) gsap.set(paragraphRef.current, { color: '#334155' });
      return;
    }

    const ctx = gsap.context(() => {
      // Pinned scroll-driven transition:
      // Starts with 100% full screen blue background & white text (Screenshot 1)
      // As you scroll, the blue field smoothly shrinks downward into a bottom-center blob (Screenshot 2)
      // and text smoothly turns black/dark with blue punctuation dots!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // 1. Blue background overlay smoothly pulls downward / scales down towards bottom center
      tl.fromTo(
        blobRef.current,
        {
          width: '100%',
          height: '100%',
          bottom: '0%',
          borderRadius: '0%',
          opacity: 1,
          filter: 'blur(0px)',
          transformOrigin: '50% 100%',
        },
        {
          width: 'clamp(220px, 24vw, 340px)',
          height: 'clamp(100px, 12vw, 160px)',
          bottom: '-70px', // Lower and smaller: stays well below the paragraph text
          borderRadius: '50% 50% 0 0',
          opacity: 0.95,
          filter: 'blur(20px)',
          ease: 'power2.inOut',
          duration: 1,
        },
        0
      );

      // 2. Dynamic Text Color Change:
      // Starts crisp White (#ffffff) -> Turns Dark (#0f172a) as the blue shrinks down
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { color: '#ffffff' },
          { color: '#0f172a', ease: 'power1.out', duration: 0.8 },
          0.15
        );
      }

      // Dots color: Starts White (#ffffff) -> Turns vivid electric blue (#2258e7) exactly like screenshot 2
      const dots = [dotLeftRef.current, dotRightRef.current].filter((el): el is HTMLSpanElement => Boolean(el));
      if (dots.length > 0) {
        tl.fromTo(
          dots,
          { color: '#ffffff' },
          { color: '#2258e7', ease: 'power1.out', duration: 0.8 },
          0.15
        );
      }

      // Paragraph subtext: Starts White (rgba(255, 255, 255, 0.95)) -> Turns readable Charcoal (#334155)
      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { color: 'rgba(255, 255, 255, 0.95)' },
          { color: '#334155', ease: 'power1.out', duration: 0.8 },
          0.2
        );
      }
    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) {
          st.kill(true, true);
        }
      });
      ctx.revert();
    };
  }, []);

  return (
    <div
      id="engineering"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 5,
      }}
    >
      {/* The Single Blue Surface that smoothly morphs/shrinks into the bottom-center blob */}
      <div
        ref={blobRef}
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100%',
          borderRadius: '0%',
          background: 'radial-gradient(ellipse at 50% 95%, #1040c0 0%, #1850e0 45%, #2258e7 75%, #1850e0 100%)',
          zIndex: 1,
          pointerEvents: 'none',
          willChange: 'width, height, bottom, border-radius, filter',
        }}
      />

      {/* Centered Editorial Text Content */}
      <div
        ref={textContentRef}
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '940px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 var(--container-padding)',
        }}
      >
        {/* Headline */}
        <h2
          ref={headlineRef}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(38px, 6.2vw, 92px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            marginBottom: 'clamp(24px, 3.8vw, 42px)',
            color: '#ffffff',
            transition: 'color 0.3s ease',
          }}
        >
          Strong software
          <span
            ref={dotLeftRef}
            style={{
              color: '#ffffff',
              marginLeft: '0.04em',
              transition: 'color 0.3s ease',
            }}
          >
            .
          </span>
          <br />
          Made smarter with AI
          <span
            ref={dotRightRef}
            style={{
              color: '#ffffff',
              marginLeft: '0.04em',
              transition: 'color 0.3s ease',
            }}
          >
            .
          </span>
        </h2>

        {/* Lead Paragraph Text */}
        <p
          ref={paragraphRef}
          className="body-lead"
          style={{
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '780px',
            fontSize: 'clamp(15px, 1.45vw, 20px)',
            lineHeight: 1.6,
            fontWeight: 450,
            letterSpacing: '-0.01em',
            margin: '0 auto',
            transition: 'color 0.3s ease',
          }}
        >
          AI adds real value only when the software around it is solid. Neominds TechHub builds the application, the cloud setup and the AI features together, so your product is secure, fast, easy to maintain and ready to grow with your business.
        </p>
      </div>
    </div>
  );
};
