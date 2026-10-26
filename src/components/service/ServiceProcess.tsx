import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ServiceProcessStep } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceProcessProps {
  title: string;
  steps: ServiceProcessStep[];
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ title, steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e4e2e1',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#fe6200',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '10px',
            }}
          >
            Phase-Gate Engineering Delivery
          </div>
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
            How We Deliver {title}
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '16.5px', color: '#66615c', lineHeight: 1.6, margin: 0 }}>
              An agile, multi-stage delivery framework engineered to eliminate delivery drift and achieve zero-defect launches.
            </p>
          </RevealElement>
        </div>

        {/* Linear Stepper Rail (Replaces rectangular buttons) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            marginBottom: '40px',
            paddingBottom: '20px',
            borderBottom: '2px solid #e4e2e1',
            overflowX: 'auto',
          }}
        >
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  position: 'relative',
                  outline: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '3px',
                    backgroundColor: isCurrent ? '#fe6200' : '#f1efeb',
                    color: isCurrent ? '#ffffff' : '#200b00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 800,
                    transition: 'all 0.2s',
                  }}
                >
                  {step.step}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: isCurrent ? '#fe6200' : '#868683', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    STAGE {step.step}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? '#000000' : '#66615c' }}>
                    {step.title}
                  </div>
                </div>

                {/* Bottom Active Indicator Bar */}
                {isCurrent && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-22px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#fe6200',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Phase Focus Console (Seamless Editorial Blend - No Card Boxes) */}
        <div
          style={{
            paddingTop: '20px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px, 5vw, 64px)', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: '#fe6200', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                <span>Active Phase · Stage 0{steps[activeStep].step}</span>
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-heading)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                {steps[activeStep].title}
              </h3>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#333333', margin: 0, fontWeight: 400 }}>
                {steps[activeStep].description}
              </p>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                Milestone Sign-Off Requirements
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {steps[activeStep].deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 0',
                      borderBottom: '1px solid #e4e2e1',
                    }}
                  >
                    <CheckCircle2 size={18} color="#fe6200" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#200b00', letterSpacing: '-0.01em' }}>
                      {del}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
