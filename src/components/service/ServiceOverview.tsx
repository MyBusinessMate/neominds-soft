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
        padding: 'clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 48px)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Editorial Eyebrow Tag */}
        <RevealElement variant="text">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#fe6200',
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#fe6200',
                display: 'inline-block',
              }}
            />
            Strategic Overview
          </div>
        </RevealElement>

        {/* Proportional Editorial Lead Headline */}
        <ScrollReveal
          as="h2"
          style={{
            fontSize: 'clamp(24px, 2.5vw, 34px)',
            fontWeight: 700,
            fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            color: '#111111',
            lineHeight: 1.32,
            letterSpacing: '-0.02em',
            maxWidth: '980px',
            marginBottom: 'clamp(32px, 4vw, 48px)',
            display: 'block',
          }}
          blurStrength={5}
        >
          {statement}
        </ScrollReveal>

        {/* Balanced 2-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 4.5vw, 56px)',
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
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: '#333333',
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

          {/* Right Column: Utilitarian Key Takeaway Card */}
          <RevealElement variant="card" delay={0.1}>
            <div
              style={{
                backgroundColor: '#faf8f5',
                border: '1px solid #e4e2e1',
                borderLeft: '3px solid #fe6200',
                borderRadius: '8px',
                padding: 'clamp(22px, 3vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
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
                  fontWeight: 600,
                  color: '#111111',
                  lineHeight: 1.55,
                  margin: 0,
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                {keyTakeaway}
              </p>
            </div>
          </RevealElement>
        </div>
      </div>
    </section>
  );
};
