import { TrendingUp, Award } from 'lucide-react';
import { ServiceOutcome } from '../../types/service';
import { ScrollReveal } from '../scroll-reveal';

interface ServiceOutcomesProps {
  title: string;
  outcomes: ServiceOutcome[];
}

export const ServiceOutcomes: React.FC<ServiceOutcomesProps> = ({ title, outcomes }) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
        borderTop: '1px solid #351505',
        borderBottom: '1px solid #351505',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Editorial 2-Column Split: Big Headline & Context Left, Monolithic Statistic Strip Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 6vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Value Vector Context */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#fe6200',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '12px',
              }}
            >
              <TrendingUp size={14} />
              <span>Measurable Business ROI</span>
            </div>

            <ScrollReveal
              as="h2"
              style={{
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
                marginBottom: '18px',
                display: 'block',
              }}
              blurStrength={6}
            >
              Quantified Impact Delivered in {title}
            </ScrollReveal>

            <p style={{ fontSize: '16px', color: '#a3a09b', lineHeight: 1.65, margin: '0 0 24px 0' }}>
              We tie every architectural deliverable directly to bottom-line enterprise results. By engineering out latency, failure points, and operational friction, our partners experience sustained efficiency gains.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 14px', backgroundColor: '#351505', borderRadius: '4px', fontSize: '13px', fontWeight: 600, color: '#868683' }}>
              <Award size={15} color="#fe6200" />
              <span>Verified against real-world client production benchmarks</span>
            </div>
          </div>

          {/* Right Column: Monolithic Monospace Metric Ledger (NOT rectangular cards) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderTop: '1px solid #351505',
            }}
          >
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid #351505',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <div style={{ maxWidth: '360px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                    {item.label}
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#868683', lineHeight: 1.5, margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(32px, 3.5vw, 46px)',
                    fontWeight: 800,
                    color: '#fe6200',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: 1,
                    textAlign: 'right',
                    flexShrink: 0,
                  }}
                >
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
