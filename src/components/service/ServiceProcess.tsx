import React, { useState } from 'react';
import { ServiceProcessStep } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceProcessProps {
  title: string;
  steps: ServiceProcessStep[];
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ title, steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!steps || steps.length === 0) return null;

  const currentStep = steps[activeStep] || steps[0];

  // Stage Icons matching the 4 key stages from the reference design
  const renderStepIcon = (stageTitle: string, stepNumber: number, isActive: boolean) => {
    const t = stageTitle.toLowerCase();
    const iconColor = isActive ? '#ffffff' : '#111111';

    // 1. Discovery / Scoping / Stacked Layers
    if (stepNumber === 1 || t.includes('discovery') || t.includes('scoping') || t.includes('architecture & technical')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5" />
          <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5" />
        </svg>
      );
    }

    // 2. Design & Architecture / Vector Pen & Bezier Nodes
    if (stepNumber === 2 || t.includes('design') || t.includes('prototype') || t.includes('wireframe')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M8.5 6h7" />
          <path d="M18 8.5v7" />
          <path d="m6 8.5 9.5 9.5" />
          <path d="m5 19 4-1-1-4-3 5Z" fill={isActive ? 'rgba(255,255,255,0.2)' : 'none'} />
        </svg>
      );
    }

    // 3. Development / Engineering / Code </>
    if (stepNumber === 3 || t.includes('development') || t.includes('engineering') || t.includes('integration') || t.includes('build')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    }

    // 4. Testing & Launch / Rocket Ship
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
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
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Eyebrow with flanking hairline rules */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(40px, 5vw, 64px)' }}>
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
              Our Delivery Process
            </span>
            <span style={{ width: '32px', height: '1.5px', backgroundColor: '#fe6200', opacity: 0.6 }} />
          </div>

          {/* Two-Tone Display Headline */}
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(32px, 4.4vw, 54px)',
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
            How We Deliver <span style={{ color: '#fe6200', fontStyle: 'italic' }}>{title}</span>
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
              An agile, multi-stage delivery framework engineered to eliminate delivery drift and achieve zero-defect launches.
            </p>
          </RevealElement>
        </div>

        {/* =========================================================================
            DESKTOP STEPPER RAIL (Screen width > 768px)
            ========================================================================= */}
        <div className="nm-desktop-stepper-wrapper" style={{ maxWidth: '880px', margin: '0 auto clamp(36px, 5vw, 52px)' }}>
          <div style={{ position: 'relative' }}>
            {/* Horizontal Connecting Guide Line */}
            <div
              style={{
                position: 'absolute',
                top: '32px',
                left: '12%',
                right: '12%',
                height: '2px',
                backgroundColor: '#e4e2e1',
                zIndex: 1,
              }}
            >
              {/* Progress active highlight */}
              <div
                style={{
                  height: '100%',
                  backgroundColor: '#fe6200',
                  width: `${(activeStep / (steps.length - 1)) * 100}%`,
                  transition: 'width 0.35s ease',
                }}
              />
            </div>

            {/* Stepper Buttons Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
                position: 'relative',
                zIndex: 2,
              }}
            >
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = idx < activeStep;
                const stepNum = parseInt(step.step, 10) || idx + 1;

                return (
                  <button
                    key={step.step || idx}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      outline: 'none',
                    }}
                  >
                    {/* Top Icon Box */}
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        backgroundColor: isActive ? '#fe6200' : '#faf6f0',
                        border: `1px solid ${isActive ? '#fe6200' : 'rgba(228, 226, 225, 0.8)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isActive ? '0 8px 24px rgba(254, 98, 0, 0.35)' : 'none',
                        transition: 'all 0.25s ease',
                        marginBottom: '16px',
                      }}
                    >
                      {renderStepIcon(step.title, stepNum, isActive)}
                    </div>

                    {/* Node Dot on the horizontal line */}
                    <div
                      style={{
                        width: isActive ? '14px' : '10px',
                        height: isActive ? '14px' : '10px',
                        borderRadius: '50%',
                        backgroundColor: isActive
                          ? 'var(--colors-surface-light, #f1efeb)'
                          : isPassed
                          ? '#fe6200'
                          : '#dcd7cf',
                        border: isActive ? '2.5px solid #fe6200' : 'none',
                        boxSizing: 'border-box',
                        marginBottom: '14px',
                        transition: 'all 0.25s ease',
                      }}
                    />

                    {/* Step Title Label */}
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? '#fe6200' : '#222222',
                        textAlign: 'center',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        lineHeight: 1.35,
                        maxWidth: '160px',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      0{stepNum}. {step.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE STEPPER RAIL (Screen width <= 768px)
            ========================================================================= */}
        <div className="nm-mobile-stepper-wrapper" style={{ maxWidth: '480px', margin: '0 auto 32px' }}>
          <div
            style={{
              position: 'relative',
              paddingLeft: '32px',
            }}
          >
            {/* Vertical Connecting Rail Line */}
            <div
              style={{
                position: 'absolute',
                left: '6px',
                top: '20px',
                bottom: '20px',
                width: '2px',
                backgroundColor: 'rgba(254, 98, 0, 0.35)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const stepNum = parseInt(step.step, 10) || idx + 1;

                return (
                  <div
                    key={step.step || idx}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {/* Node Dot on vertical line */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-32px',
                        width: isActive ? '14px' : '10px',
                        height: isActive ? '14px' : '10px',
                        borderRadius: '50%',
                        backgroundColor: isActive
                          ? 'var(--colors-surface-light, #f1efeb)'
                          : '#dcd7cf',
                        border: isActive ? '2.5px solid #fe6200' : 'none',
                        zIndex: 2,
                        boxSizing: 'border-box',
                      }}
                    />

                    {/* Row Button */}
                    <button
                      onClick={() => setActiveStep(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: isActive ? '8px 14px' : '6px 8px',
                        backgroundColor: isActive ? 'rgba(254, 98, 0, 0.08)' : 'transparent',
                        borderRadius: '12px',
                        border: 'none',
                        cursor: 'pointer',
                        width: '100%',
                        textAlign: 'left',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          width: isActive ? '42px' : '38px',
                          height: isActive ? '42px' : '38px',
                          borderRadius: '10px',
                          backgroundColor: isActive ? '#fe6200' : '#faf6f0',
                          border: `1px solid ${isActive ? '#fe6200' : 'rgba(228, 226, 225, 0.8)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: isActive ? '0 4px 14px rgba(254, 98, 0, 0.3)' : 'none',
                        }}
                      >
                        {renderStepIcon(step.title, stepNum, isActive)}
                      </div>

                      <span
                        style={{
                          fontSize: isActive ? '14.5px' : '13.5px',
                          fontWeight: isActive ? 700 : 600,
                          color: isActive ? '#fe6200' : '#111111',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        0{stepNum}. {step.title}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            ACTIVE STAGE DETAIL CARD (Exact Layout matching Reference Mockup)
            ========================================================================= */}
        <RevealElement variant="card">
          <div
            className="nm-process-detail-card"
            style={{
              backgroundColor: '#faf6f0',
              borderRadius: '16px',
              padding: 'clamp(28px, 4vw, 44px) clamp(24px, 4.5vw, 48px)',
              border: '1px solid rgba(228, 226, 225, 0.7)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            <div className="nm-process-card-grid">
              {/* Left Column: Stage Tag, Title & Description */}
              <div style={{ flex: 1, maxWidth: '440px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(254, 98, 0, 0.1)',
                    color: '#fe6200',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontWeight: 800,
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  Stage 0{parseInt(currentStep.step, 10) || activeStep + 1}
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(24px, 2.6vw, 32px)',
                    fontWeight: 800,
                    color: '#111111',
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    lineHeight: 1.25,
                    margin: '0 0 14px 0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {currentStep.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#555555',
                    margin: 0,
                    fontWeight: 400,
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  {currentStep.description}
                </p>
              </div>

              {/* Right Column: Milestone Sign-Off Requirements */}
              <div className="nm-process-card-deliverables" style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: '#444444',
                    textTransform: 'uppercase',
                    marginBottom: '18px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  Milestone Sign-Off Requirements
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {currentStep.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(228, 226, 225, 0.7)',
                      }}
                    >
                      {/* Orange Square Checkmark Badge */}
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '5px',
                          backgroundColor: 'rgba(254, 98, 0, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fe6200"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>

                      <span
                        style={{
                          fontSize: '14.5px',
                          fontWeight: 600,
                          color: '#111111',
                          letterSpacing: '-0.01em',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        {del}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealElement>

        {/* Responsive CSS Grid & Layout Styles */}
        <style>{`
          .nm-desktop-stepper-wrapper {
            display: block;
          }
          .nm-mobile-stepper-wrapper {
            display: none;
          }
          .nm-process-card-grid {
            display: flex;
            align-items: flex-start;
            gap: 48px;
          }
          .nm-process-card-deliverables {
            border-left: 1px solid #e4e2e1;
            padding-left: 48px;
          }

          @media (max-width: 768px) {
            .nm-desktop-stepper-wrapper {
              display: none !important;
            }
            .nm-mobile-stepper-wrapper {
              display: block !important;
            }
            .nm-process-card-grid {
              flex-direction: column !important;
              gap: 28px !important;
            }
            .nm-process-card-deliverables {
              border-left: none !important;
              padding-left: 0 !important;
              border-top: 1px solid #e4e2e1;
              padding-top: 24px;
              width: 100%;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
