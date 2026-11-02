import React from 'react';
import { ServiceTimeline, ServiceWhyChoose } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceTimelineWhyProps {
  title: string;
  timeline?: ServiceTimeline;
  whyChooseThisService?: ServiceWhyChoose;
}

export const ServiceTimelineWhy: React.FC<ServiceTimelineWhyProps> = ({
  title,
  timeline,
  whyChooseThisService,
}) => {
  if (!timeline && !whyChooseThisService) return null;

  // Split headline for why choose us
  const rawWhyTitle = whyChooseThisService?.title || `Why Engineering Leaders Pick Neominds for ${title}`;
  const whyLeadText = rawWhyTitle.includes('for')
    ? rawWhyTitle.substring(0, rawWhyTitle.lastIndexOf('for')).trim()
    : 'Why Engineering Leaders Pick Neominds';
  const whyHighlightText = rawWhyTitle.includes('for')
    ? rawWhyTitle.substring(rawWhyTitle.lastIndexOf('for')).trim()
    : `for ${title}`;

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 100px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* =========================================================================
            10. REALISTIC PROJECT TIMELINE (Clean Linear Progress Strip)
            ========================================================================= */}
        {timeline && (
          <div style={{ marginBottom: whyChooseThisService ? 'clamp(64px, 8vw, 96px)' : 0 }}>
            {/* Flanked Eyebrow & Display Headline */}
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(36px, 4vw, 56px)' }}>
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
                  Project Roadmap
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
                Realistic Timeline: <span style={{ color: '#fe6200', fontStyle: 'italic' }}>{timeline.totalDuration}</span>
              </ScrollReveal>

              {timeline.sprintCadence && (
                <p
                  style={{
                    fontSize: '15.5px',
                    color: '#66615c',
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  {timeline.sprintCadence}
                </p>
              )}
            </div>

            {/* Linear Timeline Flow (Zero Cards, Clean Editorial Columns) */}
            <div
              className="nm-timeline-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(20px, 2.5vw, 36px)',
              }}
            >
              {timeline.phases.map((st, idx) => {
                const phaseNum = String(idx + 1).padStart(2, '0');

                return (
                  <RevealElement key={idx} variant="text" delay={idx * 0.05}>
                    <div style={{ borderTop: '2px solid #fe6200', paddingTop: '20px' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '8px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#fe6200',
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                          }}
                        >
                          Phase {phaseNum}
                        </span>
                        <span
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 600,
                            color: '#77726d',
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                          }}
                        >
                          {st.duration}
                        </span>
                      </div>

                      <h4
                        style={{
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                          fontSize: '17.5px',
                          fontWeight: 700,
                          color: '#111111',
                          lineHeight: 1.3,
                          margin: '0 0 8px 0',
                        }}
                      >
                        {st.phase}
                      </h4>

                      <p
                        style={{
                          fontSize: '13.5px',
                          color: '#55514c',
                          lineHeight: 1.6,
                          margin: 0,
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        {st.details}
                      </p>
                    </div>
                  </RevealElement>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            11. WHY CHOOSE THIS SERVICE (Clean Editorial Principles - No Cards)
            ========================================================================= */}
        {whyChooseThisService && (
          <div
            style={{
              paddingTop: timeline ? 'clamp(56px, 7vw, 84px)' : 0,
              borderTop: timeline ? '1px solid #e4e2e1' : 'none',
            }}
          >
            {/* Header */}
            <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto clamp(36px, 4vw, 56px)' }}>
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
                Why Choose Us
              </div>

              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(32px, 4.4vw, 52px)',
                  fontWeight: 800,
                  color: '#000000',
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  lineHeight: 1.15,
                  margin: 0,
                  letterSpacing: '-0.025em',
                  display: 'block',
                }}
                blurStrength={6}
              >
                {whyLeadText} <span style={{ color: '#fe6200', fontStyle: 'italic' }}>{whyHighlightText}</span>
              </ScrollReveal>
            </div>

            {/* 2-Column Clean Editorial Principles (Zero Cards, Hairline Divided) */}
            <div
              className="nm-why-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(28px, 4vw, 48px)',
              }}
            >
              {whyChooseThisService.reasons.map((item, idx) => (
                <RevealElement key={idx} variant="text" delay={idx * 0.05}>
                  <div
                    style={{
                      borderTop: '1px solid #e4e2e1',
                      paddingTop: '20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
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
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: '16.5px',
                          fontWeight: 700,
                          color: '#111111',
                          margin: '0 0 6px 0',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        {item.point}
                      </h4>
                      <p
                        style={{
                          fontSize: '14.5px',
                          color: '#55514c',
                          lineHeight: 1.6,
                          margin: 0,
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </RevealElement>
              ))}
            </div>
          </div>
        )}

        {/* Responsive CSS */}
        <style>{`
          @media (max-width: 860px) {
            .nm-timeline-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
            .nm-why-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceTimelineWhy;
