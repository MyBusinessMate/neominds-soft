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
        backgroundColor: '#0b0f19',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
            }}
          >
            <span style={{ width: '16px', height: '2px', backgroundColor: '#FF5500' }} />
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 700,
                color: '#FF5500',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {data.badge}
            </span>
          </div>

          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#ffffff',
              lineHeight: 1.16,
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={6}
          >
            {data.title}
          </ScrollReveal>

          <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
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
                  backgroundColor: '#131c2e',
                  border: '1px solid #1e293b',
                  borderRadius: '6px',
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${step.color || '#FF5500'}`,
                  transition: 'transform 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#FF5500';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#1e293b';
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
                        color: step.color || '#FF5500',
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
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          color: '#1e293b',
                          padding: '3px 8px',
                          borderRadius: '3px',
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
                      color: '#ffffff',
                      marginBottom: '10px',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.6,
                      color: '#94a3b8',
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
                          color: '#334155',
                        }}
                      >
                        <ArrowRight size={12} color={step.color || '#FF5500'} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </RevealElement>
          ))}
        </div>

        {/* Highlight Card if Present */}
        {data.highlightCard && (
          <RevealElement variant="card" delay={0.2}>
            <div
              style={{
                marginTop: '32px',
                backgroundColor: '#101726',
                border: '1px solid #1e293b',
                borderRadius: '6px',
                padding: '24px 32px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#FF5500', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {data.highlightCard.title}
                </div>
                <div style={{ fontSize: '15px', color: '#334155' }}>
                  {data.highlightCard.detail}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#22c55e', fontFamily: 'var(--font-heading)' }}>
                  {data.highlightCard.value}
                </span>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600 }}>
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
