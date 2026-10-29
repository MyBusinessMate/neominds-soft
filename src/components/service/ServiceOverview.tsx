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
        padding: 'clamp(64px, 7vw, 96px) 24px',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Bold Statement */}
          <div>
            <ScrollReveal
              as="h2"
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                color: '#000000',
                lineHeight: 1.2,
                marginBottom: '24px',
                display: 'block',
              }}
              blurStrength={6}
            >
              {statement}
            </ScrollReveal>

            {/* Key Takeaway Editorial Accent (No Box Card) */}
            <RevealElement variant="text">
              <div
                style={{
                  backgroundColor: 'transparent',
                  borderLeft: '3px solid #fe6200',
                  padding: '12px 0 12px 18px',
                  marginTop: '24px',
                }}
              >
                <div style={{ fontSize: '15.5px', fontWeight: 600, color: '#000000', lineHeight: 1.55 }}>
                  {keyTakeaway}
                </div>
              </div>
            </RevealElement>
          </div>

          {/* Right Column: Editorial Body Paragraphs */}
          <RevealElement variant="text" delay={0.06}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '16.5px',
                    lineHeight: 1.75,
                    color: '#333333',
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </RevealElement>
        </div>
      </div>
    </section>
  );
};
