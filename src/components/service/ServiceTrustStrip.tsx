import React from 'react';
import { Shield, Award, CheckCircle2, Zap } from 'lucide-react';
import { ServiceMetric } from '../../types/service';
import { RevealElement } from '../scroll-reveal';

interface ServiceTrustStripProps {
  metrics: ServiceMetric[];
  trustPoints?: string[];
}

export const ServiceTrustStrip: React.FC<ServiceTrustStripProps> = ({
  metrics,
  trustPoints = [
    'Enterprise-ready SLA',
    'SOC 2 & ISO 27001 Aligned',
    'Cloud-Native Architecture',
    'Full IP & Source Code Transfer',
  ],
}) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--colors-background-dark, #200b00)',
        borderBottom: '1px solid #1e293b',
        padding: '36px 24px',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* 4 Quantified Metrics */}
        <RevealElement variant="card">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '24px',
              paddingBottom: '28px',
              borderBottom: '1px solid #1e293b',
            }}
          >
            {metrics.map((m, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontSize: 'clamp(26px, 2.5vw, 34px)',
                    fontWeight: 800,
                    color: '#FF5500',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#94a3b8',
                    marginTop: '6px',
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </RevealElement>

        {/* Verified Capability Proof Points */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '20px',
          }}
        >
          {trustPoints.map((point, pIdx) => (
            <div
              key={pIdx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#334155',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              {pIdx === 0 && <Award size={15} color="#FF5500" />}
              {pIdx === 1 && <Shield size={15} color="#FF5500" />}
              {pIdx === 2 && <Zap size={15} color="#FF5500" />}
              {pIdx === 3 && <CheckCircle2 size={15} color="#FF5500" />}
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
