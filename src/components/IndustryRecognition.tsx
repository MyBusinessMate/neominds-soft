import React from 'react';
import { ShieldCheck, Layers, CalendarCheck } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

const commitmentsList = [
  {
    num: '01',
    title: 'Signed NDA on Request',
    description:
      'Complete confidentiality for your architecture, proprietary data models, and business logic before any discovery begins.',
    icon: <ShieldCheck size={36} strokeWidth={1.8} color="#000000" />,
  },
  {
    num: '02',
    title: '100% Source Code Ownership',
    description:
      'You own all repositories, codebases, pipeline definitions, and artifacts. Zero vendor lock-in or licensing strings attached.',
    icon: <Layers size={36} strokeWidth={1.8} color="#000000" />,
  },
  {
    num: '03',
    title: 'Weekly Demo Tracking',
    description:
      'Continuous accountability with working software demonstrated in sprint reviews every week, overlapping with your timezone.',
    icon: <CalendarCheck size={36} strokeWidth={1.8} color="#000000" />,
  },
];

export const IndustryRecognition: React.FC = () => {
  return (
    <section
      id="recognition"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#f1efeb',
        paddingTop: 'clamp(64px, 8vw, 100px)',
        paddingBottom: 'clamp(64px, 8vw, 100px)',
        borderTop: '1px solid #e8e5e0',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1fr) minmax(360px, 1.25fr)',
            alignItems: 'start',
            gap: 'clamp(44px, 6vw, 84px)',
          }}
          className="recognition-grid"
        >
          {/* Left Column Text */}
          <div style={{ maxWidth: '540px' }}>
            <RevealElement variant="text" delay={0.02}>
              {/* Top Orange Accent Bar */}
              <div
                style={{
                  width: '52px',
                  height: '4px',
                  backgroundColor: '#fe6200',
                  borderRadius: '1px',
                  marginBottom: '24px',
                }}
              />
            </RevealElement>

            <ScrollReveal
              as="h2"
              className="commitments-title"
              style={{
                color: '#000000',
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(38px, 4.6vw, 58px)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                margin: '0 0 24px 0',
              }}
              blurStrength={4}
            >
              Our<br />
              Commitments
            </ScrollReveal>

            <RevealElement variant="text" delay={0.05}>
              <p
                style={{
                  color: '#3a3a3a',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  fontSize: 'clamp(15px, 1.15vw, 16.5px)',
                  marginBottom: '32px',
                  lineHeight: 1.65,
                }}
              >
                Every NeoMinds project comes with a signed NDA on request, full ownership of your source code, and delivery tracked through weekly demos. Our team works hours that overlap with yours, wherever you are.
              </p>
            </RevealElement>

            <RevealElement variant="text" delay={0.1}>
              {/* Horizontal Divider */}
              <div
                style={{
                  borderTop: '1px solid #e5e5e5',
                  marginBottom: '26px',
                }}
              />

              {/* Compliance Note with Vertical Orange Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '3.5px',
                    minWidth: '3.5px',
                    height: '38px',
                    backgroundColor: '#fe6200',
                    borderRadius: '2px',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    fontSize: '13.5px',
                    color: '#555555',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Backed by ISO/IEC 27001:2022 aligned processes, AWS, Microsoft Azure, and Google Cloud engineering standards.
                </p>
              </div>
            </RevealElement>
          </div>

          {/* Right Column: 3 Commitment Items with Center Timeline Line & Nodes */}
          <div
            className="commitments-right-column"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(36px, 4.5vw, 52px)',
              width: '100%',
              paddingLeft: 'clamp(36px, 4.5vw, 64px)',
              borderLeft: '1px solid #e8e5e0',
            }}
          >
            {commitmentsList.map((item, idx) => (
              <RevealElement key={item.num} variant="text" delay={idx * 0.08}>
                <div
                  className="commitment-item-row"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(18px, 2.2vw, 24px)',
                  }}
                >
                  {/* Timeline Node - centered precisely on the border line */}
                  <div
                    className="commitment-timeline-node"
                    style={{
                      position: 'absolute',
                      left: 'calc(-1 * clamp(36px, 4.5vw, 64px) - 4.5px)',
                      top: '12px',
                      width: '9px',
                      height: '9px',
                      backgroundColor: '#fe6200',
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="commitment-icon-wrap"
                    style={{
                      width: '42px',
                      height: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '8px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 'clamp(18px, 1.4vw, 21px)',
                          fontWeight: 700,
                          color: '#fe6200',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.num}
                      </span>
                      <span
                        style={{
                          color: '#d1d5db',
                          fontSize: 'clamp(17px, 1.3vw, 20px)',
                          fontWeight: 300,
                        }}
                      >
                        |
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: 'clamp(18px, 1.4vw, 21px)',
                          fontWeight: 700,
                          color: '#000000',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                          letterSpacing: '-0.015em',
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        margin: 0,
                        fontSize: 'clamp(14px, 1.05vw, 15px)',
                        lineHeight: 1.6,
                        color: '#4a4a4a',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        maxWidth: '560px',
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
        @media (max-width: 860px) {
          .recognition-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .commitments-right-column {
            border-left: none !important;
            padding-left: 0 !important;
            gap: 32px !important;
          }
          .commitment-timeline-node {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
