import React from 'react';
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
        padding: 'clamp(64px, 7vw, 100px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* =========================================================================
            THE REALITY: THE BOTTLENECK & OUR ENGINEERING FIX
            ========================================================================= */}
        {mainProblemSolved && (
          <div style={{ marginBottom: targetAudience ? 'clamp(56px, 7vw, 84px)' : 0 }}>
            {/* Flanked Eyebrow */}
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(36px, 4vw, 54px)' }}>
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
                  The Reality
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
                The Bottleneck You Face and How We Fix It
              </ScrollReveal>
            </div>

            {/* 2-Column Editorial Breakdown (Cardless, Box-Free) */}
            <div
              className="nm-problem-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(36px, 5vw, 64px)',
                alignItems: 'start',
              }}
            >
              {/* Left: The Failure Pattern / Pain Point */}
              <div style={{ borderTop: '2px solid #fe6200', paddingTop: '24px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#fe6200',
                    marginBottom: '14px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  Where Projects Break
                </div>
                <h3
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 16px 0',
                    letterSpacing: '-0.015em',
                  }}
                >
                  The Hidden Cost of Fragile Implementations
                </h3>
                <p
                  style={{
                    fontSize: '15.5px',
                    color: '#55514c',
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  {mainProblemSolved.problem}
                </p>
              </div>

              {/* Right: How We Fix It & Measurable Outcome */}
              <div style={{ borderTop: '2px solid #111111', paddingTop: '24px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#111111',
                    marginBottom: '14px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  How We Solve It
                </div>
                <h3
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 16px 0',
                    letterSpacing: '-0.015em',
                  }}
                >
                  Production-Hardened From Day One
                </h3>
                <p
                  style={{
                    fontSize: '15.5px',
                    color: '#55514c',
                    lineHeight: 1.7,
                    margin: '0 0 20px 0',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  {mainProblemSolved.solution}
                </p>

                {/* Direct Result Note */}
                <div style={{ borderLeft: '2px solid #fe6200', paddingLeft: '16px' }}>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#fe6200',
                      marginBottom: '4px',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  >
                    Direct Result
                  </div>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#111111',
                      lineHeight: 1.5,
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  >
                    {mainProblemSolved.result}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            WHO WE BUILD THIS FOR
            ========================================================================= */}
        {targetAudience && (
          <div>
            <div style={{ textAlign: 'left', maxWidth: '820px', marginBottom: '32px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#fe6200',
                  marginBottom: '10px',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                Target Audience
              </div>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  fontWeight: 800,
                  color: '#000000',
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  lineHeight: 1.18,
                  margin: '0 0 12px 0',
                }}
              >
                {targetAudience.heading || `Who We Built ${title} For`}
              </h2>
              {targetAudience.description && (
                <p
                  style={{
                    fontSize: '15.5px',
                    color: '#66615c',
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  {targetAudience.description}
                </p>
              )}
            </div>

            {/* Profile Columns (No cards, pure editorial text list) */}
            <div
              className="nm-profiles-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(28px, 4vw, 40px)',
              }}
            >
              {targetAudience.profiles.map((profile, idx) => (
                <RevealElement key={idx} variant="text" delay={idx * 0.05}>
                  <div style={{ borderTop: '1px solid #e4e2e1', paddingTop: '20px' }}>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: '#fe6200',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '10px',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                    >
                      {profile.role}
                    </div>
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#44403c',
                        lineHeight: 1.65,
                        margin: 0,
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                    >
                      {profile.situation}
                    </p>
                  </div>
                </RevealElement>
              ))}
            </div>
          </div>
        )}

        {/* Responsive CSS */}
        <style>{`
          @media (max-width: 860px) {
            .nm-problem-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .nm-profiles-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceProblemAudience;
