import React from 'react';
import { Users, AlertCircle, CheckCircle2, Target } from 'lucide-react';
import { ServiceTargetAudience, ServiceMainProblem } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceProblemAudienceProps {
  title: string;
  targetAudience?: ServiceTargetAudience;
  mainProblemSolved?: ServiceMainProblem;
}

export const ServiceProblemAudience: React.FC<ServiceProblemAudienceProps> = ({
  title,
  targetAudience,
  mainProblemSolved,
}) => {
  if (!targetAudience && !mainProblemSolved) return null;

  return (
    <section
      style={{
        padding: 'clamp(56px, 7vw, 92px) 24px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e4e2e1',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* =========================================================================
            04. TARGET AUDIENCE (Clean Editorial Columns - No Cards)
            ========================================================================= */}
        {targetAudience && (
          <div style={{ marginBottom: mainProblemSolved ? 'clamp(56px, 7vw, 84px)' : 0 }}>
            <div style={{ textAlign: 'left', maxWidth: '820px', marginBottom: '36px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#fe6200',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                }}
              >
                <Target size={15} />
                <span>Target Audience</span>
              </div>
              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  fontWeight: 800,
                  color: '#000000',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.18,
                  marginBottom: '14px',
                  display: 'block',
                }}
                blurStrength={6}
              >
                {targetAudience.heading || `Who We Built ${title} For`}
              </ScrollReveal>
              {targetAudience.description && (
                <p style={{ fontSize: '16.5px', color: '#66615c', lineHeight: 1.6, margin: 0 }}>
                  {targetAudience.description}
                </p>
              )}
            </div>

            {/* Profile Columns (Directly on background, clean hairline rules) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(28px, 4vw, 44px)',
              }}
            >
              {targetAudience.profiles.map((profile, idx) => (
                <RevealElement key={idx} variant="text" delay={idx * 0.06}>
                  <div
                    style={{
                      height: '100%',
                      borderTop: '2px solid #fe6200',
                      paddingTop: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#fe6200',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '14px',
                        }}
                      >
                        <Users size={14} />
                        <span>{profile.role}</span>
                      </div>
                      <p
                        style={{
                          fontSize: '15.5px',
                          color: '#2b2b2b',
                          lineHeight: 1.65,
                          margin: 0,
                          fontWeight: 400,
                        }}
                      >
                        {profile.situation}
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: '20px',
                        paddingTop: '14px',
                        borderTop: '1px solid #e4e2e1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#66615c',
                      }}
                    >
                      <CheckCircle2 size={15} color="#fe6200" />
                      <span>Direct fit for your operational scope</span>
                    </div>
                  </div>
                </RevealElement>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            05. MAIN PROBLEM SOLVED (Cardless Editorial Layout - Seamless Blend)
            ========================================================================= */}
        {mainProblemSolved && (
          <div
            style={{
              paddingTop: targetAudience ? 'clamp(48px, 6vw, 72px)' : 0,
              borderTop: targetAudience ? '1px solid #e4e2e1' : 'none',
            }}
          >
            <div style={{ marginBottom: '36px', maxWidth: '820px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#fe6200',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                }}
              >
                <AlertCircle size={15} />
                <span>Main Problem Solved</span>
              </div>
              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  fontWeight: 800,
                  color: '#000000',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.18,
                  margin: 0,
                  display: 'block',
                }}
                blurStrength={6}
              >
                The Bottleneck You Are Facing and How We Fix It
              </ScrollReveal>
            </div>

            {/* 2-Column Side-by-Side Comparison (No cards, pure editorial blend) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(36px, 5vw, 64px)',
                alignItems: 'start',
              }}
            >
              {/* Column 1: The Pain Point */}
              <div
                style={{
                  borderTop: '2px solid #ef4444',
                  paddingTop: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#dc2626',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '16px',
                  }}
                >
                  <AlertCircle size={16} />
                  <span>The Pain Point</span>
                </div>
                <p
                  style={{
                    fontSize: '17px',
                    color: '#200b00',
                    lineHeight: 1.7,
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {mainProblemSolved.problem}
                </p>
              </div>

              {/* Column 2: How We Solve It & Tangible Result */}
              <div
                style={{
                  borderTop: '2px solid #fe6200',
                  paddingTop: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#fe6200',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '16px',
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>How We Solve It</span>
                </div>
                <p
                  style={{
                    fontSize: '17px',
                    color: '#200b00',
                    lineHeight: 1.7,
                    fontWeight: 400,
                    margin: '0 0 24px 0',
                  }}
                >
                  {mainProblemSolved.solution}
                </p>

                {/* Tangible Result Accent */}
                <div
                  style={{
                    borderLeft: '2px solid #059669',
                    paddingLeft: '16px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#66615c',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '6px',
                    }}
                  >
                    Tangible Result
                  </div>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#059669',
                      lineHeight: 1.5,
                    }}
                  >
                    {mainProblemSolved.result}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
