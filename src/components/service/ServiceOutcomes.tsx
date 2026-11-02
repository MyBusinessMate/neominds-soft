import React from 'react';
import { ServiceOutcome } from '../../types/service';
import { ScrollReveal } from '../scroll-reveal';

interface ServiceOutcomesProps {
  title: string;
  outcomes: ServiceOutcome[];
}

export const ServiceOutcomes: React.FC<ServiceOutcomesProps> = ({ title, outcomes }) => {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Editorial 2-Column Split: Big Headline & Context Left, Clean Metric Strip Right */}
        <div
          className="nm-outcomes-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(36px, 6vw, 64px)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Context */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: '#fe6200',
                textTransform: 'uppercase',
                marginBottom: '14px',
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              Measurable Outcomes
            </div>

            <ScrollReveal
              as="h2"
              style={{
                fontSize: 'clamp(32px, 4.4vw, 48px)',
                fontWeight: 800,
                color: '#000000',
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                lineHeight: 1.15,
                marginBottom: '16px',
                letterSpacing: '-0.025em',
                display: 'block',
              }}
              blurStrength={6}
            >
              Real Numbers Delivered in {title}
            </ScrollReveal>

            <p
              style={{
                fontSize: '15.5px',
                color: '#55514c',
                lineHeight: 1.65,
                margin: 0,
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              We tie engineering work directly to business outcomes. Less downtime, faster load speeds, and systems that your in-house engineers can operate without calling outside consultants at 2 AM.
            </p>
          </div>

          {/* Right Column: Clean Metric Ledger (Zero Cards, Clean Hairline Rows) */}
          <div style={{ borderTop: '1px solid #e4e2e1' }}>
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px 0',
                  borderBottom: '1px solid #e4e2e1',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <div style={{ maxWidth: '360px' }}>
                  <div
                    style={{
                      fontSize: '15.5px',
                      fontWeight: 700,
                      color: '#111111',
                      marginBottom: '4px',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  >
                    {item.label}
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#66615c',
                      lineHeight: 1.55,
                      margin: 0,
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(28px, 3.2vw, 42px)',
                    fontWeight: 800,
                    color: '#fe6200',
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    lineHeight: 1,
                    textAlign: 'right',
                    flexShrink: 0,
                  }}
                >
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .nm-outcomes-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceOutcomes;
