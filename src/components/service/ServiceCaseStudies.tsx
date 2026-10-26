import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ServiceCaseStudyRef } from '../../types/service';
import { ScrollReveal } from '../scroll-reveal';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCaseStudiesProps {
  caseStudies: ServiceCaseStudyRef[];
  onViewAllPortfolio: () => void;
  onContactClick?: () => void;
}

export const ServiceCaseStudies: React.FC<ServiceCaseStudiesProps> = ({
  caseStudies,
  onViewAllPortfolio,
  onContactClick,
}) => {
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
    // If mobile, allow standard touch vertical/swipe stacking
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      // GSAP Horizontal Scroll Pinning for Desktop
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 80),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${Math.max(track.scrollWidth - window.innerWidth + 200, 1000)}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, caseStudies]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        backgroundColor: '#0a0d14',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Sticky Case Study Viewport Container */}
      <div
        style={{
          width: '100%',
          minHeight: isMobile ? 'auto' : '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '64px 20px' : '48px 48px',
          boxSizing: 'border-box',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            maxWidth: '1240px',
            width: '100%',
            margin: '0 auto 36px auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#fe6200',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '8px',
              }}
            >
              Verified Track Record
            </div>
            <ScrollReveal
              as="h2"
              style={{
                fontSize: 'clamp(28px, 3.4vw, 42px)',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                color: '#ffffff',
                margin: 0,
                display: 'block',
              }}
              blurStrength={6}
            >
              Featured Client Transformations
            </ScrollReveal>
          </div>

          <button
            onClick={onViewAllPortfolio}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              color: '#ffffff',
              padding: '10px 18px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fe6200';
              e.currentTarget.style.backgroundColor = 'rgba(255, 85, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span>Browse Full Portfolio</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Horizontal Track (Desktop) or Vertical Stack (Mobile) */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '28px',
            alignItems: 'stretch',
            width: isMobile ? '100%' : 'max-content',
            paddingLeft: isMobile ? '0' : 'max(24px, calc((100vw - 1240px) / 2))',
            paddingRight: isMobile ? '0' : '64px',
            boxSizing: 'border-box',
          }}
        >
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.id || idx}
              style={{
                width: isMobile ? '100%' : '520px',
                minWidth: isMobile ? '100%' : '520px',
                backgroundColor: '#121824',
                border: '1px solid #351505',
                borderRadius: '8px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                boxShadow: '0 12px 32px rgba(32, 11, 0,  0.4)',
                position: 'relative',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#fe6200',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      backgroundColor: 'rgba(255, 85, 0, 0.2)',
                      padding: '4px 10px',
                      borderRadius: '3px',
                    }}
                  >
                    {cs.category}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#a3a09b' }}>
                    {cs.client}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: 1.25,
                    marginBottom: '16px',
                  }}
                >
                  {cs.title}
                </h3>

                <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#a3a09b', marginBottom: '24px' }}>
                  {cs.description}
                </p>
              </div>

              {/* Metric Card & Action */}
              <div>
                <div
                  style={{
                    backgroundColor: '#1a2333',
                    borderRadius: '6px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    borderLeft: '4px solid #22c55e',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#22c55e', fontFamily: 'var(--font-heading)' }}>
                      {cs.metric}
                    </div>
                    <div style={{ fontSize: '12px', color: '#a3a09b', marginTop: '2px' }}>
                      {cs.metricLabel}
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#351505', fontWeight: 600 }}>
                    {cs.stats}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px',
                  }}
                >
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: '#351505',
                        color: '#868683',
                        padding: '4px 8px',
                        borderRadius: '2px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onContactClick}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'rgba(255, 85, 0, 0.15)',
                    border: '1px solid #fe6200',
                    borderRadius: '4px',
                    color: '#fe6200',
                    fontWeight: 600,
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fe6200';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 85, 0, 0.15)';
                    e.currentTarget.style.color = '#fe6200';
                  }}
                >
                  <span>Request Solution Architecture Brief</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
