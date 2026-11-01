import React from 'react';
import { Calendar } from 'lucide-react';
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

  // Title decomposition for "Why Engineering Leaders Pick Neominds for {Service}"
  const rawTitle = whyChooseThisService?.title || `Why Engineering Leaders Pick Neominds for ${title}`;
  let eyebrow = 'WHY ENGINEERING LEADERS PICK';
  let leadText = 'Neominds for';
  let highlightText = title;

  if (rawTitle.toLowerCase().includes('why engineering leaders pick')) {
    eyebrow = 'WHY ENGINEERING LEADERS PICK';
    const afterEyebrow = rawTitle.replace(/why engineering leaders pick\s*/i, '').trim();
    if (afterEyebrow.toLowerCase().startsWith('neominds for')) {
      leadText = 'Neominds for';
      highlightText = afterEyebrow.replace(/neominds for\s*/i, '').trim() || title;
    } else {
      leadText = afterEyebrow;
      highlightText = title;
    }
  } else if (rawTitle.toLowerCase().startsWith('why choose')) {
    eyebrow = 'WHY CHOOSE';
    leadText = 'Neominds for';
    highlightText = title;
  }

  // Exact icon renderer matching the 4 key pillars in the reference design
  const renderReasonIcon = (point: string, idx: number) => {
    const p = point.toLowerCase();
    // 1. Team / Engineers icon
    if (idx === 0 || p.includes('engineer') || p.includes('bench') || p.includes('team') || p.includes('senior')) {
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fe6200" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    }
    // 2. Handover / Code / IP / Stacked Layers icon
    if (idx === 1 || p.includes('code') || p.includes('ip') || p.includes('handover') || p.includes('repository') || p.includes('ownership')) {
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fe6200" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5" />
          <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5" />
        </svg>
      );
    }
    // 3. Production / Hardened / Code </> icon
    if (idx === 2 || p.includes('production') || p.includes('hardened') || p.includes('resilience') || p.includes('pipeline')) {
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fe6200" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      );
    }
    // 4. Lightning bolt / Cadence / Velocity icon
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fe6200" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  };

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderTop: '1px solid var(--colors-border-light, #e4e2e1)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
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
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  lineHeight: 1.15,
                  marginBottom: '16px',
                  display: 'block',
                }}
                blurStrength={6}
              >
                Realistic Project Timeline: {timeline.totalDuration}
              </ScrollReveal>
              {timeline.sprintCadence && (
                <p style={{ fontSize: '16.5px', color: '#66615c', lineHeight: 1.6, margin: 0, fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif" }}>
                  {timeline.sprintCadence}
                </p>
              )}
            </div>

            {/* Timeline Phase Columns */}
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
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
            11. WHY CHOOSE THIS SERVICE (Exact Reference Layout with Site Fonts)
            ========================================================================= */}
        {whyChooseThisService && (
          <div
            style={{
              paddingTop: timeline ? 'clamp(56px, 7vw, 84px)' : 0,
              borderTop: timeline ? '1px solid #e4e2e1' : 'none',
            }}
          >
            {/* Header: Centered Eyebrow & Two-Tone Headline */}
            <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto clamp(36px, 5vw, 60px)' }}>
              <div
                style={{
                  fontSize: 'clamp(11px, 1.2vw, 12.5px)',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: '#fe6200',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                {eyebrow}
              </div>

              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(32px, 4.4vw, 54px)',
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
                {leadText} <br />
                <span style={{ color: '#fe6200' }}>{highlightText}</span>
              </ScrollReveal>
            </div>

            {/* 2x2 Grid with Cross Dividers on Desktop, Clean Stack on Mobile */}
            <div className="nm-why-pick-grid">
              {whyChooseThisService.reasons.map((reason, idx) => (
                <RevealElement key={idx} variant="text" delay={idx * 0.06}>
                  <div className={`nm-why-item nm-why-item-${idx}`}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'clamp(16px, 2vw, 24px)',
                      }}
                    >
                      <div style={{ flexShrink: 0, marginTop: '2px' }}>
                        {renderReasonIcon(reason.point, idx)}
                      </div>
                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                            fontSize: 'clamp(17px, 1.6vw, 19px)',
                            fontWeight: 700,
                            color: '#111111',
                            lineHeight: 1.35,
                            margin: '0 0 8px 0',
                            letterSpacing: '-0.015em',
                          }}
                        >
                          {reason.point}
                        </h3>
                        <p
                          style={{
                            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                            fontSize: 'clamp(14px, 1.2vw, 15px)',
                            fontWeight: 400,
                            color: '#555555',
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {reason.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealElement>
              ))}
            </div>

            <style>{`
              .nm-why-pick-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                max-width: 1080px;
                margin: 0 auto;
              }

              /* 2x2 Clean Cross Dividers matching Image 2 */
              .nm-why-item-0 {
                border-right: 1px solid #e4e2e1;
                border-bottom: 1px solid #e4e2e1;
                padding: 36px 40px 36px 16px;
              }
              .nm-why-item-1 {
                border-bottom: 1px solid #e4e2e1;
                padding: 36px 16px 36px 40px;
              }
              .nm-why-item-2 {
                border-right: 1px solid #e4e2e1;
                padding: 36px 40px 36px 16px;
              }
              .nm-why-item-3 {
                padding: 36px 16px 36px 40px;
              }

              @media (max-width: 860px) {
                .nm-why-pick-grid {
                  grid-template-columns: 1fr !important;
                }
                .nm-why-item-0,
                .nm-why-item-1,
                .nm-why-item-2,
                .nm-why-item-3 {
                  border-right: none !important;
                  border-bottom: 1px solid #e4e2e1 !important;
                  padding: 24px 0 !important;
                }
                .nm-why-item-3 {
                  border-bottom: none !important;
                }
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
};
