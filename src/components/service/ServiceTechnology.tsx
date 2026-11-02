import React from 'react';
import { ServiceTechCategory, ServiceDeliverable } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceTechnologyProps {
  techStack: ServiceTechCategory[];
  deliverables: ServiceDeliverable[];
}

export const ServiceTechnology: React.FC<ServiceTechnologyProps> = ({
  techStack,
  deliverables,
}) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 100px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        color: '#000000',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Section Eyebrow with flanking hairline rules */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(40px, 5vw, 64px)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '14px',
            }}
          >
            <span style={{ width: '32px', height: '1.5px', backgroundColor: '#fe6200', opacity: 0.6 }} />
            <span
              style={{
                fontSize: 'clamp(11px, 1.2vw, 12px)',
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: '#fe6200',
                textTransform: 'uppercase',
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              Technology & Deliverables
            </span>
            <span style={{ width: '32px', height: '1.5px', backgroundColor: '#fe6200', opacity: 0.6 }} />
          </div>

          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(32px, 4.4vw, 52px)',
              fontWeight: 800,
              color: '#000000',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              lineHeight: 1.15,
              margin: '0 0 14px 0',
              letterSpacing: '-0.025em',
              display: 'block',
            }}
            blurStrength={6}
          >
            Production Technologies & Concrete Deliverables
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p
              style={{
                fontSize: '15.5px',
                color: '#66615c',
                lineHeight: 1.6,
                margin: '0 auto',
                maxWidth: '680px',
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              Proven production tools your team can actually understand, audit, and run. Plus 100% direct handover of every asset.
            </p>
          </RevealElement>
        </div>

        {/* 2-Column Minimalist Editorial Layout (Zero Boxes, Zero Click-to-Change) */}
        <div
          className="nm-tech-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Left: Production Tech Stack */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fe6200',
                marginBottom: '16px',
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              Production Stack
            </div>
            <h3
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(22px, 2.2vw, 28px)',
                fontWeight: 700,
                color: '#111111',
                margin: '0 0 24px 0',
                letterSpacing: '-0.015em',
              }}
            >
              Engineered With Modern, Maintainable Tooling
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {techStack.map((cat, idx) => (
                <div key={idx} style={{ paddingBottom: '20px', borderBottom: '1px solid #e4e2e1' }}>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#222222',
                      marginBottom: '10px',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  >
                    {cat.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '12px',
                          fontWeight: 500,
                          padding: '5px 14px',
                          borderRadius: '9999px',
                          backgroundColor: '#faf6f0',
                          color: '#222222',
                          border: '1px solid rgba(228, 226, 225, 0.8)',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tangible Deliverables Handover */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fe6200',
                marginBottom: '16px',
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              Handover Guarantee
            </div>
            <h3
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(22px, 2.2vw, 28px)',
                fontWeight: 700,
                color: '#111111',
                margin: '0 0 24px 0',
                letterSpacing: '-0.015em',
              }}
            >
              What You Actually Own & Receive
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {deliverables.map((del, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    paddingBottom: '18px',
                    borderBottom: '1px solid #e4e2e1',
                  }}
                >
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(254, 98, 0, 0.1)',
                      color: '#fe6200',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '15.5px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 4px 0',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                    >
                      {del.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#66615c',
                        lineHeight: 1.55,
                        margin: 0,
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                    >
                      {del.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive CSS */}
        <style>{`
          @media (max-width: 860px) {
            .nm-tech-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceTechnology;
