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
    id: 'mindspace-mobile-app',
    clientName: 'MINDSPACE.AI',
    clientLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            backgroundColor: '#A94F0B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#001334',
            fontWeight: 900,
            fontSize: '13px',
          }}
        >
          M
        </div>
        <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em' }}>
          MINDSPACE.AI
        </span>
      </div>
    ),
    categories: ['Healthcare', 'App Development', 'React Native', 'WebRTC'],
    title: 'Mindspace.ai: Healthcare Telehealth & Clinical Wellness Mobile App',
    description:
      'Engineered a HIPAA-compliant iOS and Android telehealth platform with offline biometrics, encrypted WebRTC video, and sub-100ms session sync.',
    bgGradient: 'radial-gradient(ellipse at 40% 30%, #1e3a5f 0%, #132742 50%, #0a1424 100%)',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'fundbot-sql-chatbot',
    clientName: 'FUNDBOT',
    clientLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#001334',
            fontWeight: 900,
            fontSize: '13px',
          }}
        >
          FB
        </div>
        <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em' }}>
          FUNDBOT
        </span>
      </div>
    ),
    categories: ['FinTech', 'Artificial Intelligence', 'Web Development', 'SQL AI'],
    title: 'Natural Language AI SQL Financial Query Engine',
    description:
      'Built an intelligent enterprise SQL copilot converting natural-language finance inquiries into audited, schema-safe read operations in milliseconds.',
    bgGradient: 'radial-gradient(ellipse at 40% 30%, #103247 0%, #0d233a 50%, #081624 100%)',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'dotcomweavers-project-buddy',
    clientName: 'DOTCOMWEAVERS',
    clientLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            backgroundColor: '#6366f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: '13px',
          }}
        >
          DW
        </div>
        <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em' }}>
          DOTCOMWEAVERS
        </span>
      </div>
    ),
    categories: ['Enterprise', 'Artificial Intelligence', 'Automations', 'LLM Agents'],
    title: 'Autonomous Multi-Project AI Assistant & Velocity Engine',
    description:
      'Integrated Claude and multi-agent AI routines to track sprint scope drift, automate client status summaries, and cut delivery overhead by 68%.',
    bgGradient: 'radial-gradient(ellipse at 40% 30%, #2a5298 0%, #1a3668 50%, #0c1c38 100%)',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'flooring-inc-dashboard',
    clientName: 'FLOORING INC',
    clientLogo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            backgroundColor: '#f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#001334',
            fontWeight: 900,
            fontSize: '13px',
          }}
        >
          FI
        </div>
        <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em' }}>
          FLOORING INC
        </span>
      </div>
    ),
    categories: ['E-commerce', 'Data Analytics', 'Dashboards', 'Retail Tech'],
    title: 'High-Volume E-Commerce Inventory & Analytics Dashboard',
    description:
      'Constructed an executive real-time dashboard unifying multi-warehouse inventory telemetry, SKU velocity, and live retail order attribution.',
    bgGradient: 'radial-gradient(ellipse at 40% 30%, #1c3d5a 0%, #0f2438 50%, #091522 100%)',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 860);
      setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const shouldStack = isMobile || reduceMotion;

  useLayoutEffect(() => {
    // Disable GSAP horizontal pinning on mobile or when reduced motion is preferred
    if (shouldStack) return;

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
          anticipatePin: 1,
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
  }, [shouldStack]);

  return (
    <section
      id="casestudies"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: shouldStack ? 'auto' : '100vh',
        backgroundColor: '#000000',
        overflow: shouldStack ? 'visible' : 'hidden',
        display: 'flex',
        flexDirection: shouldStack ? 'column' : 'row',
        alignItems: shouldStack ? 'stretch' : 'center',
        padding: 0,
      }}
    >
      {/* Mobile / Stack Header Title */}
      {shouldStack && (
        <div style={{ padding: '36px 20px 20px 20px', textAlign: 'left', width: '100%' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#A94F0B', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
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
          flexDirection: shouldStack ? 'column' : 'row',
          alignItems: 'stretch',
          height: shouldStack ? 'auto' : '100vh',
          width: shouldStack ? '100%' : 'auto',
          margin: 0,
          padding: 0,
          willChange: shouldStack ? 'auto' : 'transform',
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
              width: shouldStack ? '100%' : '100vw',
              height: shouldStack ? 'auto' : '100vh',
              minHeight: shouldStack ? '520px' : '100vh',
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
                      borderRadius: '0px',
                      boxShadow: 'none',
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
                      borderRadius: '0px',
                      boxShadow: 'none',
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
                  alt={`${cs.title} - ${cs.clientName} Case Study Architecture | Neominds TechHub`}
                  loading="lazy"
                  decoding="async"
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
                {/* Subtle cinematic gradient overlay for readable contrast */}
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
                    DATASTREAM
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
