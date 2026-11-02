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
    '100% IP & Source Code Handover',
  ],
}) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
        padding: '36px 24px',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* 4 Quantified Metrics */}
        <RevealElement variant="card">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '24px',
              paddingBottom: '28px',
              borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
            }}
          >
            {metrics.map((m, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontSize: 'clamp(28px, 2.5vw, 36px)',
                    fontWeight: 800,
                    color: '#fe6200',
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#66615c',
                    marginTop: '6px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
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
                color: '#111111',
                fontSize: '13.5px',
                fontWeight: 600,
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              {pIdx === 0 && <Award size={15} color="#fe6200" />}
              {pIdx === 1 && <Shield size={15} color="#fe6200" />}
              {pIdx === 2 && <Zap size={15} color="#fe6200" />}
              {pIdx === 3 && <CheckCircle2 size={15} color="#fe6200" />}
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTrustStrip;
