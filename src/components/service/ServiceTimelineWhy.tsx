import React from 'react';
import { Clock, CheckCircle2, Calendar, Award } from 'lucide-react';
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
        backgroundColor: '#000000',
        borderTop: '1px solid #1e293b',
        borderBottom: '1px solid #1e293b',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* =========================================================================
            10. TIMELINE / DURATION
            ========================================================================= */}
        {timeline && (
          <div style={{ marginBottom: whyChooseThisService ? 'clamp(64px, 8vw, 92px)' : 0 }}>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#FF5500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                }}
              >
                <Clock size={14} />
                <span>Timeline & Duration</span>
              </div>
              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  fontWeight: 800,
                  color: '#ffffff',
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
                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  {timeline.sprintCadence}
                </p>
              )}
            </div>

            {/* Timeline Phase Rail */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
              }}
            >
              {timeline.phases.map((phase, idx) => (
                <RevealElement key={idx} variant="card" delay={idx * 0.08}>
                  <div
                    style={{
                      height: '100%',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #1e293b',
                      borderRadius: '8px',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 4px rgba(15, 23, 42, 0.03)',
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
                            color: '#FF5500',
                            backgroundColor: 'rgba(255, 85, 0, 0.08)',
                            padding: '3px 8px',
                            borderRadius: '3px',
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
                            fontSize: '12px',
                            fontWeight: 700,
                            color: '#ffffff',
                          }}
                        >
                          <Calendar size={13} color="#64748b" />
                          {phase.duration}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '10px',
                          lineHeight: 1.4,
                        }}
                      >
                        {phase.phase}
                      </h3>

                      <p
                        style={{
                          fontSize: '14px',
                          color: '#64748b',
                          lineHeight: 1.6,
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
            11. WHY CHOOSE THIS SERVICE
            ========================================================================= */}
        {whyChooseThisService && (
          <div>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#FF5500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                }}
              >
                <Award size={14} />
                <span>Why Choose This Service</span>
              </div>
              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  fontWeight: 800,
                  color: '#ffffff',
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
                gap: '24px',
              }}
            >
              {whyChooseThisService.reasons.map((reason, idx) => (
                <RevealElement key={idx} variant="card" delay={idx * 0.08}>
                  <div
                    style={{
                      height: '100%',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #1e293b',
                      borderTop: '3px solid #FF5500',
                      borderRadius: '6px',
                      padding: '26px 22px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '10px',
                        lineHeight: 1.4,
                      }}
                    >
                      <CheckCircle2 size={18} color="#FF5500" style={{ flexShrink: 0 }} />
                      <span>{reason.point}</span>
                    </div>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#94a3b8',
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
