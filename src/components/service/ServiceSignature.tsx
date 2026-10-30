import { ArrowRight } from 'lucide-react';
import { ServiceSignatureData } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceSignatureProps {
  data: ServiceSignatureData;
}

export const ServiceSignature: React.FC<ServiceSignatureProps> = ({ data }) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
        color: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#000000',
              lineHeight: 1.16,
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={6}
          >
            {data.title}
          </ScrollReveal>

          <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6, margin: 0 }}>
            {data.description}
          </p>
        </div>

        {/* Modular Signature Visualization Grid / Flow */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            alignItems: 'stretch',
          }}
        >
          {data.steps.map((step, idx) => (
            <RevealElement key={idx} variant="card" delay={idx * 0.05}>
              <div
                style={{
                  backgroundColor: 'transparent',
                  borderTop: '2px solid #fe6200',
                  padding: '24px 0 0 0',
                  height: '100%',
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
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: '#fe6200',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                       STAGE {step.number}
                    </span>
                    {step.badge && (
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#000000',
                          padding: '3px 8px',
                          borderRadius: '8px',
                        }}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#000000',
                      marginBottom: '10px',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.6,
                      color: '#333333',
                      marginBottom: '16px',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                {step.details && step.details.length > 0 && (
                  <div
                    style={{
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    {step.details.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          color: '#4b5563',
                        }}
                      >
                        <ArrowRight size={12} color={step.color || '#fe6200'} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </RevealElement>
          ))}
        </div>

        {/* Highlight Banner if Present (Seamless Blend) */}
        {data.highlightCard && (
          <RevealElement variant="card" delay={0.2}>
            <div
              style={{
                marginTop: '48px',
                backgroundColor: 'transparent',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '24px 0',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {data.highlightCard.title}
                </div>
                <div style={{ fontSize: '15px', color: '#333333' }}>
                  {data.highlightCard.detail}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#22c55e', fontFamily: 'var(--font-heading)' }}>
                  {data.highlightCard.value}
                </span>
                <span style={{ fontSize: '13px', color: '#555555', fontWeight: 600 }}>
                  {data.highlightCard.label}
                </span>
              </div>
            </div>
          </RevealElement>
        )}
      </div>
    </section>
  );
};
