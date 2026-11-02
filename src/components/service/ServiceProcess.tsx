import React from 'react';
import { ServiceProcessStep } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceProcessProps {
  title: string;
  steps: ServiceProcessStep[];
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ title, steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 100px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
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
              A straightforward, transparent engineering cadence. Every stage has clear sign-offs, working demos, and zero fluff.
            </p>
          </RevealElement>
        </div>

        {/* Linear Stages Flow - Completely Cardless, Box-Free, No Click-to-Change */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((st, idx) => {
            const stepNumber = String(idx + 1).padStart(2, '0');
            const isLast = idx === steps.length - 1;

            return (
              <RevealElement key={idx} variant="text" delay={idx * 0.06}>
                <div
                  className="nm-process-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1.4fr 1fr',
                    gap: 'clamp(20px, 3vw, 48px)',
                    alignItems: 'start',
                    padding: 'clamp(28px, 3.5vw, 42px) 0',
                    borderBottom: isLast ? 'none' : '1px solid #e4e2e1',
                  }}
                >
                  {/* Stage Number & Badge */}
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: 'clamp(28px, 3vw, 36px)',
                        fontWeight: 700,
                        color: '#fe6200',
                        lineHeight: 1,
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      {stepNumber}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#88827c',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                    >
                      Stage {stepNumber}
                    </span>
                  </div>

                  {/* Stage Title & Description */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: 'clamp(20px, 2vw, 24px)',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 10px 0',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {st.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        fontSize: '15px',
                        color: '#55514c',
                        lineHeight: 1.65,
                        margin: 0,
                        maxWidth: '560px',
                      }}
                    >
                      {st.description}
                    </p>
                  </div>

                  {/* Concrete Deliverables / Sign-off Requirements */}
                  {st.deliverables && st.deliverables.length > 0 && (
                    <div>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#88827c',
                          marginBottom: '10px',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        Milestone Deliverables
                      </div>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        {st.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              fontSize: '14px',
                              fontWeight: 500,
                              color: '#222222',
                              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fe6200"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ flexShrink: 0 }}
                            >
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="16 12 12 8 8 12" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </RevealElement>
            );
          })}
        </div>

        {/* Responsive CSS for Mobile viewports */}
        <style>{`
          @media (max-width: 860px) {
            .nm-process-row {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
              padding: 24px 0 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceProcess;
