import React from 'react';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceOverviewProps {
  statement: string;
  paragraphs: string[];
  keyTakeaway: string;
}

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  statement,
  paragraphs,
  keyTakeaway,
}) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
        padding: 'clamp(64px, 7vw, 100px) 24px',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Editorial Eyebrow */}
        <RevealElement variant="text">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#fe6200',
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              marginBottom: '14px',
            }}
          >
            Engineering Perspective
          </div>
        </RevealElement>

        {/* Proportional Editorial Lead Headline */}
        <ScrollReveal
          as="h2"
          style={{
            fontSize: 'clamp(28px, 3.4vw, 42px)',
            fontWeight: 800,
            fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            color: '#111111',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            maxWidth: '1000px',
            marginBottom: 'clamp(36px, 4vw, 54px)',
            display: 'block',
          }}
          blurStrength={5}
        >
          {statement}
        </ScrollReveal>

        {/* Balanced 2-Column Editorial Flow (Zero Cards, Zero Boxes) */}
        <div
          className="nm-overview-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Clear Narrative Paragraphs */}
          <RevealElement variant="text" delay={0.05}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.75,
                    color: '#44403c',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </RevealElement>

          {/* Right Column: Clean Editorial Key Takeaway (No Box, Just Clean Accent Line) */}
          <RevealElement variant="text" delay={0.1}>
            <div
              style={{
                borderLeft: '2px solid #fe6200',
                paddingLeft: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#fe6200',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                Key Takeaway
              </span>
              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: 1.7,
                  color: '#111111',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                {keyTakeaway}
              </p>
            </div>
          </RevealElement>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .nm-overview-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceOverview;
