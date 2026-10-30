import React from 'react';
import { ShieldCheck, FileCode, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

const commitmentsList = [
  {
    num: '01',
    title: 'Signed NDA on Request',
    description:
      'Complete confidentiality for your architecture, proprietary data models, and business logic before any discovery begins.',
    icon: <ShieldCheck size={22} color="#fe6200" />,
  },
  {
    num: '02',
    title: '100% Source Code Ownership',
    description:
      'You own all repositories, codebases, pipeline definitions, and artifacts. Zero vendor lock-in or licensing strings attached.',
    icon: <FileCode size={22} color="#fe6200" />,
  },
  {
    num: '03',
    title: 'Weekly Demo Tracking',
    description:
      'Continuous accountability with working software demonstrated in sprint reviews every week, overlapping with your timezone.',
    icon: <CheckCircle2 size={22} color="#fe6200" />,
  },
];

export const IndustryRecognition: React.FC = () => {
  return (
    <section
      id="recognition"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(64px, 8vw, 100px)',
        paddingBottom: 'clamp(64px, 8vw, 100px)',
        borderTop: '1px solid #e4e2e1',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1.1fr) minmax(320px, 1.3fr)',
            alignItems: 'start',
            gap: 'clamp(36px, 5vw, 72px)',
          }}
          className="recognition-grid"
        >
          {/* Left Column Text */}
          <div style={{ maxWidth: '540px' }}>
            <ScrollReveal
              as="h2"
              className="section-title"
              style={{
                color: '#000000',
                marginBottom: '20px',
                display: 'block',
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(30px, 3.8vw, 44px)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
              blurStrength={4}
            >
              Our commitments
            </ScrollReveal>

            <RevealElement variant="text" delay={0.05}>
              <p
                style={{
                  color: '#2b2b2b',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  fontSize: 'clamp(15px, 1.2vw, 17px)',
                  marginBottom: '20px',
                  lineHeight: 1.6,
                }}
              >
                Every NeoMinds project comes with a signed NDA on request, full ownership of your source code, and delivery tracked through weekly demos. Our team works hours that overlap with yours, wherever you are.
              </p>
            </RevealElement>

            <RevealElement variant="text" delay={0.1}>
              <div
                style={{
                  paddingTop: '18px',
                  borderTop: '1px solid #e4e2e1',
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    fontSize: '13.5px',
                    color: '#66615c',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Backed by ISO/IEC 27001:2022 aligned processes, AWS, Microsoft Azure, and Google Cloud engineering standards.
                </p>
              </div>
            </RevealElement>
          </div>

          {/* Right Column: Clean 3 Commitment Pillars (No carousel, no award cards) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            {commitmentsList.map((item, idx) => (
              <RevealElement key={item.num} variant="card" delay={idx * 0.08}>
                <div
                  style={{
                    backgroundColor: 'var(--colors-surface-light, #f1efeb)',
                    border: '1px solid #e4e2e1',
                    borderRadius: '12px',
                    padding: '24px 24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    transition: 'border-color 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e4e2e1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e4e2e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#fe6200',
                          fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
                          letterSpacing: '0.08em',
                        }}
                      >
                        {item.num}
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: '17px',
                          fontWeight: 700,
                          color: '#000000',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        margin: 0,
                        fontSize: '14px',
                        lineHeight: 1.55,
                        color: '#2b2b2b',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .recognition-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
};
