import React, { useState } from 'react';
import { Terminal, FileCode, Package, ShieldCheck, Zap } from 'lucide-react';
import { ServiceTechCategory, ServiceDeliverable } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceTechnologyProps {
  techStack: ServiceTechCategory[];
  deliverables: ServiceDeliverable[];
}

export const ServiceTechnology: React.FC<ServiceTechnologyProps> = ({
  techStack,
  deliverables,
}) => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        color: '#000000',
        borderTop: '1px solid #e4e2e1',
        borderBottom: '1px solid #e4e2e1',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
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
            Technology Matrix & Deliverable Blueprint
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '16.5px', color: '#66615c', lineHeight: 1.6, margin: 0 }}>
              An interactive matrix of verified production primitives and tangible enterprise deliverables handed over upon launch.
            </p>
          </RevealElement>
        </div>

        {/* 2-Column Asymmetrical Engineering Hub (Seamless Editorial Blend) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 48px)',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Technology Stack Matrix */}
          <div
            style={{
              backgroundColor: 'transparent',
              borderTop: '2px solid #fe6200',
              paddingTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #e4e2e1', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={16} color="#fe6200" />
                  <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 700, color: '#fe6200' }}>
                    TECH_STACK_REGISTRY
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </div>
              </div>

              {/* Category Pills Selector */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {techStack.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIdx(idx)}
                    style={{
                      backgroundColor: activeCategoryIdx === idx ? '#fe6200' : '#ffffff',
                      color: activeCategoryIdx === idx ? '#ffffff' : '#000000',
                      border: activeCategoryIdx === idx ? '1px solid #fe6200' : '1px solid #e4e2e1',
                      padding: '7px 14px',
                      borderRadius: '8px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* Active Stack Item Matrix */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#66615c', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
                  Verified Production Components
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px' }}>
                  {techStack[activeCategoryIdx]?.items.map((tech) => (
                    <div
                      key={tech}
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e4e2e1',
                        borderRadius: '8px',
                        padding: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Zap size={14} color="#fe6200" />
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#000000' }}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: '14px 18px', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e4e2e1', borderLeft: '3px solid #fe6200' }}>
              <span style={{ fontSize: '12.5px', color: '#66615c', lineHeight: 1.5, display: 'block' }}>
                All dependencies audited against OWASP Top 10, automated CVE scanners, and cloud-native Kubernetes blueprints.
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Deliverable Spec Table */}
          <div
            style={{
              backgroundColor: 'transparent',
              borderTop: '2px solid #059669',
              paddingTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #e4e2e1', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Package size={16} color="#059669" />
                  <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 700, color: '#059669' }}>
                    CLIENT_HANDOVER_BLUEPRINT
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: '#66615c', fontWeight: 600 }}>100% IP Transfer</span>
              </div>

              {/* Linear Editorial Rows */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      padding: '16px 0',
                      borderBottom: dIdx !== deliverables.length - 1 ? '1px solid #e4e2e1' : 'none',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                    }}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'rgba(5, 150, 105, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', flexShrink: 0, marginTop: '2px' }}>
                      <FileCode size={15} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#000000' }}>
                          {del.title}
                        </span>
                        <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#66615c', fontFamily: 'monospace' }}>
                          [{del.format}]
                        </span>
                      </div>
                      <p style={{ fontSize: '13.5px', color: '#66615c', lineHeight: 1.55, margin: 0 }}>
                        {del.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '14px 18px', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e4e2e1', borderLeft: '3px solid #059669' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#059669' }}>
                <ShieldCheck size={14} />
                <span>Zero vendor lock-in guarantee: Full repository ownership transferred on deployment.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
