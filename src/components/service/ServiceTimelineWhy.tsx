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
  const rawWhyTitle = whyChooseThisService?.title || `Why Engineering Leaders Pick Neominds for ${title}`;
  let whyEyebrow = 'WHY ENGINEERING LEADERS PICK';
  let whyLeadText = 'Neominds for';
  let whyHighlightText = title;

  if (rawWhyTitle.toLowerCase().includes('why engineering leaders pick')) {
    whyEyebrow = 'WHY ENGINEERING LEADERS PICK';
    const afterEyebrow = rawWhyTitle.replace(/why engineering leaders pick\s*/i, '').trim();
    if (afterEyebrow.toLowerCase().startsWith('neominds for')) {
      whyLeadText = 'Neominds for';
      whyHighlightText = afterEyebrow.replace(/neominds for\s*/i, '').trim() || title;
    } else {
      whyLeadText = afterEyebrow;
      whyHighlightText = title;
    }
  } else if (rawWhyTitle.toLowerCase().startsWith('why choose')) {
    whyEyebrow = 'WHY CHOOSE';
    whyLeadText = 'Neominds for';
    whyHighlightText = title;
  }

  // Duration decomposition for "Realistic Project Timeline: 8 to 14 Weeks Typical Delivery"
  let durationHighlight = timeline?.totalDuration || '';
  let durationSuffix = '';
  if (timeline?.totalDuration && timeline.totalDuration.toLowerCase().includes('typical delivery')) {
    durationHighlight = timeline.totalDuration.replace(/typical delivery/i, '').trim();
    durationSuffix = 'Typical Delivery';
  }

  // Exact 4 icons for Why Choose Pillars matching reference mockup
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

  // Exact 4 icons for Timeline Phases matching reference mockup
  const renderPhaseIcon = (phaseName: string, idx: number) => {
    const p = phaseName.toLowerCase();
    // 1. Discovery / Architecture / Stacked Layers
    if (idx === 0 || p.includes('discovery') || p.includes('architecture') || p.includes('plan')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe6200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5" />
          <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5" />
        </svg>
      );
    }
    // 2. Core Engineering / Integrations / Code </>
    if (idx === 1 || p.includes('engineering') || p.includes('core') || p.includes('build') || p.includes('code') || p.includes('integration')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe6200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    }
    // 3. Security Hardening / Chaos / Shield with Checkmark
    if (idx === 2 || p.includes('security') || p.includes('hardening') || p.includes('test') || p.includes('qa') || p.includes('load')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe6200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    }
    // 4. Zero-Downtime Cutover & Hypercare / Rocket Ship
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe6200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
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
            10. REALISTIC PROJECT TIMELINE (Vertical Rail + Stacked Step Cards)
            ========================================================================= */}
        {timeline && (
          <div style={{ marginBottom: whyChooseThisService ? 'clamp(72px, 8.5vw, 104px)' : 0 }}>
            {/* Header: Centered Eyebrow with flanking lines & Two-Tone Title */}
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(36px, 5vw, 56px)' }}>
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
                  Project Timeline
                </span>
                <span style={{ width: '32px', height: '1.5px', backgroundColor: '#fe6200', opacity: 0.6 }} />
              </div>

              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(32px, 4.2vw, 52px)',
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
                Realistic Project Timeline: <br />
                <span style={{ color: '#fe6200', fontStyle: 'italic' }}>{durationHighlight}</span>{' '}
                <span style={{ color: '#000000' }}>{durationSuffix}</span>
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

            {/* Vertical Timeline Rail & Cards Layout */}
            <div
              className="nm-timeline-container"
              style={{
                position: 'relative',
                maxWidth: '920px',
                margin: '0 auto',
                paddingLeft: '36px',
              }}
            >
              {/* Continuous Vertical Timeline Rail Line */}
              <div
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '32px',
                  bottom: '32px',
                  width: '2px',
                  backgroundColor: 'rgba(254, 98, 0, 0.4)',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {timeline.phases.map((phase, idx) => (
                  <RevealElement key={idx} variant="card" delay={idx * 0.07}>
                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {/* Node Circle on the timeline rail */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '-36px',
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--colors-surface-light, #f1efeb)',
                          border: '2.5px solid #fe6200',
                          zIndex: 2,
                          boxSizing: 'border-box',
                        }}
                      />

                      {/* Step Card with Peach/Cream Tint */}
                      <div
                        className="nm-timeline-card"
                        style={{
                          width: '100%',
                          backgroundColor: '#faf6f0',
                          borderRadius: '12px',
                          padding: 'clamp(18px, 2.5vw, 24px) clamp(18px, 3vw, 28px)',
                          border: '1px solid rgba(228, 226, 225, 0.6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '20px',
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                        }}
                      >
                        {/* Left: Icon + Content */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', flex: 1 }}>
                          {/* Icon inside soft warm box */}
                          <div
                            style={{
                              width: '46px',
                              height: '46px',
                              borderRadius: '10px',
                              backgroundColor: 'rgba(254, 98, 0, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            {renderPhaseIcon(phase.phase, idx)}
                          </div>

                          {/* Text Information */}
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontSize: '11px',
                                fontWeight: 800,
                                letterSpacing: '0.08em',
                                color: '#fe6200',
                                textTransform: 'uppercase',
                                marginBottom: '4px',
                                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                              }}
                            >
                              Step 0{idx + 1}
                            </div>

                            <h3
                              style={{
                                fontSize: '16.5px',
                                fontWeight: 700,
                                color: '#111111',
                                marginBottom: '6px',
                                lineHeight: 1.35,
                                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                              }}
                            >
                              {phase.phase}
                            </h3>

                            {/* Mobile-only Duration Pill */}
                            <div className="nm-timeline-mobile-duration">
                              <span
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                  fontSize: '12px',
                                  fontWeight: 700,
                                  color: '#111111',
                                  padding: '4px 10px',
                                  borderRadius: '6px',
                                  backgroundColor: 'rgba(254, 98, 0, 0.08)',
                                  marginBottom: '8px',
                                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                                }}
                              >
                                <Calendar size={12} color="#fe6200" />
                                {phase.duration}
                              </span>
                            </div>

                            <p
                              style={{
                                fontSize: '14px',
                                color: '#555555',
                                lineHeight: 1.55,
                                margin: 0,
                                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                              }}
                            >
                              {phase.details}
                            </p>
                          </div>
                        </div>

                        {/* Desktop-only Duration Pill on Right */}
                        <div className="nm-timeline-desktop-duration" style={{ flexShrink: 0 }}>
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '7px 14px',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(254, 98, 0, 0.08)',
                              color: '#111111',
                              fontSize: '13px',
                              fontWeight: 700,
                              whiteSpace: 'nowrap',
                              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                            }}
                          >
                            <Calendar size={14} color="#fe6200" />
                            <span>{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealElement>
                ))}
              </div>
            </div>

            <style>{`
              .nm-timeline-desktop-duration {
                display: block;
              }
              .nm-timeline-mobile-duration {
                display: none;
              }

              @media (max-width: 768px) {
                .nm-timeline-desktop-duration {
                  display: none !important;
                }
                .nm-timeline-mobile-duration {
                  display: block !important;
                }
                .nm-timeline-card {
                  padding: 16px !important;
                }
              }
            `}</style>
          </div>
        )}

        {/* =========================================================================
            11. WHY CHOOSE THIS SERVICE (Exact 2x2 Grid with Cross Dividers)
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
                {whyEyebrow}
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
                {whyLeadText} <br />
                <span style={{ color: '#fe6200' }}>{whyHighlightText}</span>
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
