import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  clientName: string;
  clientLogo?: React.ReactNode;
  categories: string[];
  extraTagsCount?: number;
  title: string;
  description: string;
  bgGradient: string;
  imageUrl?: string;
  isEmblemVisual?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'etl-modernization',
    clientName: 'AUTHENTICOM',
    clientLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
          <path d="M20 4L36 34H4L20 4Z" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" />
          <path d="M20 16L28 30H12L20 16Z" fill="#ffffff" />
        </svg>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.06em',
            fontFamily: 'var(--font-heading)',
          }}
        >
          AUTHENTICOM
        </span>
      </div>
    ),
    categories: ['Artificial intelligence', 'Data related', 'Modernization', 'Data services'],
    extraTagsCount: 1,
    title: 'Mission-critical ETL platform, modernized with agentic AI',
    description:
      'Transformed ETL modernization approach from manual rewrites into a governed, multi-agent AI system designed for scale, control, and long-term growth.',
    bgGradient: 'radial-gradient(ellipse at 40% 30%, #2a5298 0%, #1a3668 50%, #0c1c38 100%)',
    isEmblemVisual: true,
  },
  {
    id: 'trading-platform',
    clientName: 'TRADEX GROUP',
    clientLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '4px',
            backgroundColor: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: '12px',
          }}
        >
          T
        </div>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.06em',
            fontFamily: 'var(--font-heading)',
          }}
        >
          TRADEX
        </span>
      </div>
    ),
    categories: ['Financial services', 'Trading platform', 'High concurrency', 'Cloud native'],
    extraTagsCount: 2,
    title: 'A startup idea engineered into a million-user trading platform',
    description:
      'Neominds TechHub joined the founders to engineer the high-performance infrastructure behind a multi-asset user trading ecosystem.',
    bgGradient: 'radial-gradient(ellipse at 40% 30%, #1e3a5f 0%, #132742 50%, #0a1424 100%)',
    imageUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'medical-coding',
    clientName: 'MEDICORE HEALTH',
    clientLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: '12px',
          }}
        >
          +
        </div>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.06em',
            fontFamily: 'var(--font-heading)',
          }}
        >
          MEDICORE
        </span>
      </div>
    ),
    categories: ['Healthcare', 'Artificial intelligence', 'HIPAA compliant', 'FHIR API'],
    extraTagsCount: 3,
    title: 'AI integration for mission-critical medical coding software',
    description:
      'Integrated clinical NLP chart review models directly with EHR systems, eliminating manual overhead while elevating diagnostic compliance accuracy.',
    bgGradient: 'radial-gradient(ellipse at 40% 30%, #1b4b66 0%, #103247 50%, #091c29 100%)',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
  },
];

interface CaseStudiesProps {
  onContactClick?: () => void;
  onSelectCaseStudy?: (id: string) => void;
}

export const CaseStudiesHorizontal: React.FC<CaseStudiesProps> = ({ onContactClick, onSelectCaseStudy }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 860);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    // On mobile, disable GSAP horizontal pinning so panels stack vertically
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // GSAP Horizontal Scroll Pinning
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) {
          st.kill(true, true);
        }
      });
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <section
      id="casestudies"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? 'auto' : '100vh',
        backgroundColor: '#0a0d14',
        overflow: isMobile ? 'visible' : 'hidden',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        padding: 0,
      }}
    >
      {/* Mobile Header Title */}
      {isMobile && (
        <div style={{ padding: '36px 20px 20px 20px', textAlign: 'left', width: '100%' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            FEATURED WORK
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>
            Case Studies & Impact
          </h2>
        </div>
      )}

      {/* Horizontal Track: Full screen viewport width per case study panel */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'stretch',
          height: isMobile ? 'auto' : '100vh',
          width: isMobile ? '100%' : 'auto',
          margin: 0,
          padding: 0,
          willChange: isMobile ? 'auto' : 'transform',
        }}
      >
        {/* Full-bleed, full-screen case study showcase views */}
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            onClick={() => {
              if (onSelectCaseStudy) {
                onSelectCaseStudy(cs.id);
              } else if (onContactClick) {
                onContactClick();
              }
            }}
            style={{
              position: 'relative',
              width: isMobile ? '100%' : '100vw',
              height: isMobile ? 'auto' : '100vh',
              minHeight: isMobile ? '520px' : '100vh',
              background: cs.bgGradient,
              borderRadius: '0px',
              border: 'none',
              padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexShrink: 0,
              overflow: 'hidden',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            {/* Ambient Background Photography Overlay */}
            {cs.imageUrl && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${cs.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.18,
                  mixBlendMode: 'luminosity',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
            )}

            {/* Top Row: Client Brand & Outlined Frosted Pill Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                zIndex: 3,
                position: 'relative',
                width: '100%',
                maxWidth: '1360px',
                margin: '0 auto',
              }}
            >
              {/* Client Brand Logo on Left */}
              <div>{cs.clientLogo}</div>

              {/* Frosted Outline Pill Badges on Right */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                {cs.categories.map((cat, cIdx) => (
                  <span
                    key={cIdx}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.38)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      padding: '5px 16px',
                      borderRadius: '100px',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {cat}
                  </span>
                ))}
                {cs.extraTagsCount && (
                  <span
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.38)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      padding: '5px 12px',
                      borderRadius: '100px',
                    }}
                  >
                    +{cs.extraTagsCount}
                  </span>
                )}
              </div>
            </div>

            {/* Full-bleed immersive photography background (when not emblem visual) */}
            {cs.imageUrl && !cs.isEmblemVisual && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={cs.imageUrl}
                  alt={cs.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: 0.42,
                    mixBlendMode: 'luminosity',
                    transform: 'scale(1.02)',
                  }}
                />
                {/* Subtle cinematic gradient overlay for seamless contrast */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 12, 26, 0.95) 0%, rgba(6, 12, 26, 0.5) 50%, rgba(6, 12, 26, 0.85) 100%)',
                  }}
                />
              </div>
            )}

            {/* Middle Section: Authentic 3D Emblem (for AuthenticOM) */}
            {cs.isEmblemVisual && (
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  margin: 'auto 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  maxWidth: '1360px',
                  marginInline: 'auto',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      filter: 'drop-shadow(0 24px 48px rgba(0, 0, 0, 0.5))',
                    }}
                  >
                    <svg width="240" height="200" viewBox="0 0 200 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 15L180 155H20L100 15Z"
                        stroke="#ffffff"
                        strokeWidth="18"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        d="M100 55L148 138H52L100 55Z"
                        stroke="#ffffff"
                        strokeWidth="14"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        d="M100 95L118 126H82L100 95Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 'clamp(32px, 4.2vw, 56px)',
                      fontWeight: 800,
                      color: '#ffffff',
                      letterSpacing: '0.04em',
                      fontFamily: 'var(--font-heading)',
                      textShadow: '0 6px 24px rgba(0, 0, 0, 0.45)',
                    }}
                  >
                    AUTHENTICOM
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Row: Full Width Title, Description, and Arrow */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '28px',
                width: '100%',
                maxWidth: '1360px',
                margin: '0 auto',
                paddingTop: '20px',
              }}
            >
              <div style={{ maxWidth: '900px' }}>
                <h3
                  style={{
                    fontSize: 'clamp(24px, 3.2vw, 42px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.2,
                    margin: '0 0 12px 0',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {cs.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(14px, 1.35vw, 18px)',
                    color: 'rgba(255, 255, 255, 0.88)',
                    lineHeight: 1.55,
                    margin: 0,
                    fontWeight: 400,
                    maxWidth: '820px',
                  }}
                >
                  {cs.description}
                </p>
              </div>

              {/* Diagonal Arrow Icon ↗ */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255, 255, 255, 0.4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0,
                  transition: 'transform 0.25s ease, background-color 0.25s ease',
                }}
              >
                <ArrowUpRight size={28} color="#ffffff" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
