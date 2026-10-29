import React from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
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

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e4e2e1',
        borderBottom: '1px solid #e4e2e1',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* =========================================================================
            10. TIMELINE / DURATION (Cardless Editorial Columns)
            ========================================================================= */}
        {timeline && (
          <div style={{ marginBottom: whyChooseThisService ? 'clamp(64px, 8vw, 92px)' : 0 }}>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  fontWeight: 800,
                  color: '#000000',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.15,
                  marginBottom: '16px',
                  display: 'block',
                }}
                blurStrength={6}
              >
                Realistic Project Timeline: {timeline.totalDuration}
              </ScrollReveal>
              {timeline.sprintCadence && (
                <p style={{ fontSize: '16.5px', color: '#66615c', lineHeight: 1.6, margin: 0 }}>
                  {timeline.sprintCadence}
                </p>
              )}
            </div>

            {/* Timeline Phase Columns (Directly on background, clean top rules) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 'clamp(24px, 3.5vw, 40px)',
              }}
            >
              {timeline.phases.map((phase, idx) => (
                <RevealElement key={idx} variant="text" delay={idx * 0.08}>
                  <div
                    style={{
                      height: '100%',
                      borderTop: '2px solid #fe6200',
                      paddingTop: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '14px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            color: '#fe6200',
                            backgroundColor: 'rgba(254, 98, 0, 0.1)',
                            padding: '3px 8px',
                            borderRadius: '8px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                          }}
                        >
                          Step 0{idx + 1}
                        </span>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            color: '#000000',
                          }}
                        >
                          <Calendar size={13} color="#fe6200" />
                          {phase.duration}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '17px',
                          fontWeight: 700,
                          color: '#000000',
                          marginBottom: '10px',
                          lineHeight: 1.4,
                        }}
                      >
                        {phase.phase}
                      </h3>

                      <p
                        style={{
                          fontSize: '14.5px',
                          color: '#66615c',
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {phase.details}
                      </p>
                    </div>
                  </div>
                </RevealElement>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            11. WHY CHOOSE THIS SERVICE (Seamless Editorial Breakdown)
            ========================================================================= */}
        {whyChooseThisService && (
          <div
            style={{
              paddingTop: timeline ? 'clamp(56px, 7vw, 84px)' : 0,
              borderTop: timeline ? '1px solid #e4e2e1' : 'none',
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  fontWeight: 800,
                  color: '#000000',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.15,
                  margin: 0,
                  display: 'block',
                }}
                blurStrength={6}
              >
                {whyChooseThisService.title || `Why Engineering Leaders Pick Neominds for ${title}`}
              </ScrollReveal>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(28px, 4vw, 44px)',
              }}
            >
              {whyChooseThisService.reasons.map((reason, idx) => (
                <RevealElement key={idx} variant="text" delay={idx * 0.08}>
                  <div
                    style={{
                      height: '100%',
                      borderTop: '2px solid #fe6200',
                      paddingTop: '20px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '16.5px',
                        fontWeight: 700,
                        color: '#000000',
                        marginBottom: '10px',
                        lineHeight: 1.4,
                      }}
                    >
                      <CheckCircle2 size={18} color="#fe6200" style={{ flexShrink: 0 }} />
                      <span>{reason.point}</span>
                    </div>
                    <p
                      style={{
                        fontSize: '14.5px',
                        color: '#66615c',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {reason.detail}
                    </p>
                  </div>
                </RevealElement>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
