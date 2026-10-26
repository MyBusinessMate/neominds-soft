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
        backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
        borderBottom: '1px solid #351505',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* =========================================================================
            04. TARGET AUDIENCE
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
                  color: '#ffffff',
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
                <p style={{ fontSize: '16px', color: '#868683', lineHeight: 1.6, margin: 0 }}>
                  {targetAudience.description}
                </p>
              )}
            </div>

            {/* Profile Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {targetAudience.profiles.map((profile, idx) => (
                <RevealElement key={idx} variant="card" delay={idx * 0.08}>
                  <div
                    style={{
                      height: '100%',
                      backgroundColor: 'var(--colors-background-dark, #200b00)',
                      border: '1px solid #351505',
                      borderRadius: '8px',
                      padding: '28px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                          border: '1px solid #868683',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '16px',
                        }}
                      >
                        <Users size={13} color="#fe6200" />
                        <span>{profile.role}</span>
                      </div>
                      <p
                        style={{
                          fontSize: '15px',
                          color: '#868683',
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {profile.situation}
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: '20px',
                        paddingTop: '16px',
                        borderTop: '1px dashed #868683',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#fe6200',
                      }}
                    >
                      <CheckCircle2 size={15} />
                      <span>Direct fit for your operational scope</span>
                    </div>
                  </div>
                </RevealElement>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            05. MAIN PROBLEM SOLVED
            ========================================================================= */}
        {mainProblemSolved && (
          <div
            style={{
              backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
              borderRadius: '12px',
              padding: 'clamp(32px, 5vw, 56px)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ marginBottom: '32px' }}>
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
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.2,
                  margin: 0,
                  display: 'block',
                }}
                blurStrength={6}
              >
                The Bottleneck You Are Facing and How We Fix It
              </ScrollReveal>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px',
              }}
            >
              {/* Problem Statement Card */}
              <div
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '8px',
                  padding: '24px 28px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#f87171',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '12px',
                  }}
                >
                  <AlertCircle size={16} />
                  <span>The Pain Point</span>
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#351505',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {mainProblemSolved.problem}
                </p>
              </div>

              {/* Solution & Impact Card */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 85, 0, 0.08)',
                  border: '1px solid rgba(254, 98, 0, 0.3)',
                  borderRadius: '8px',
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '18px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#fe6200',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '12px',
                    }}
                  >
                    <CheckCircle2 size={16} />
                    <span>How We Solve It</span>
                  </div>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#351505',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {mainProblemSolved.solution}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#a3a09b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px',
                    }}
                  >
                    Tangible Result
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#34d399',
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
