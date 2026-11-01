import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ServiceCapability } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceCapabilitiesProps {
  title: string;
  capabilities: ServiceCapability[];
  icon?: LucideIcon;
  styleVariant?: string;
}

export const ServiceCapabilities: React.FC<ServiceCapabilitiesProps> = ({
  title,
  capabilities,
}) => {
  if (!capabilities || capabilities.length === 0) return null;

  // Icon renderer for pillars: Clean code bracket </> icon in orange matching reference mockup
  const renderPillarIcon = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fe6200"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  };

  const rowCount = Math.ceil(capabilities.length / 2);

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header: Centered Eyebrow with flanking hairline rules */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(40px, 5vw, 60px)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '14px',
            }}
          >
            <span style={{ width: '36px', height: '1.5px', backgroundColor: '#fe6200' }} />
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
              Our Expertise
            </span>
            <span style={{ width: '36px', height: '1.5px', backgroundColor: '#fe6200' }} />
          </div>

          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(32px, 4.2vw, 50px)',
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
            Our Core Engineering Pillars
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
              End-to-end {title.toLowerCase()}, from custom architecture to performance engineering.
            </p>
          </RevealElement>
        </div>

        {/* 2-Column Clean Grid matching Reference Mockup */}
        <div className="nm-pillars-grid">
          {capabilities.map((cap, idx) => {
            const rowIndex = Math.floor(idx / 2);
            const isLastRow = rowIndex === rowCount - 1;

            return (
              <RevealElement key={idx} variant="text" delay={idx * 0.05}>
                <div
                  className={`nm-pillar-item ${isLastRow ? 'nm-pillar-last-row' : 'nm-pillar-mid-row'}`}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'clamp(14px, 1.8vw, 20px)',
                    }}
                  >
                    {/* Left: Soft rounded icon box with orange </> bracket */}
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: '#faf6f0',
                        border: '1px solid rgba(228, 226, 225, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {renderPillarIcon()}
                    </div>

                    {/* Right: Content block */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          color: '#fe6200',
                          textTransform: 'uppercase',
                          marginBottom: '6px',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        Pillar 0{idx + 1}
                      </div>

                      <h3
                        style={{
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                          fontSize: 'clamp(18px, 1.8vw, 21px)',
                          fontWeight: 700,
                          color: '#111111',
                          lineHeight: 1.3,
                          margin: '0 0 8px 0',
                          letterSpacing: '-0.015em',
                        }}
                      >
                        {cap.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                          fontSize: '14.5px',
                          color: '#555555',
                          lineHeight: 1.6,
                          margin: '0 0 16px 0',
                        }}
                      >
                        {cap.description}
                      </p>

                      {/* Tech / Tag Pills */}
                      {cap.tags && cap.tags.length > 0 && (
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                          }}
                        >
                          {cap.tags.map((tag) => (
                            <span
                              key={tag}
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
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </RevealElement>
            );
          })}
        </div>

        {/* Scoped CSS for 2-column layout with horizontal row divider and responsive mobile stack */}
        <style>{`
          .nm-pillars-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: clamp(36px, 5vw, 64px);
            max-width: 1100px;
            margin: 0 auto;
          }

          .nm-pillar-mid-row {
            border-bottom: 1px solid #e4e2e1;
            padding-top: 24px;
            padding-bottom: 36px;
          }

          .nm-pillar-last-row {
            padding-top: 36px;
            padding-bottom: 24px;
          }

          @media (max-width: 860px) {
            .nm-pillars-grid {
              grid-template-columns: 1fr !important;
            }
            .nm-pillar-mid-row,
            .nm-pillar-last-row {
              border-bottom: 1px solid #e4e2e1 !important;
              padding-top: 24px !important;
              padding-bottom: 24px !important;
            }
            .nm-pillars-grid > div:last-child .nm-pillar-item {
              border-bottom: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceCapabilities;
