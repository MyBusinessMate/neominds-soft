import React, { useState } from 'react';
import { Terminal, FileCode, Package, ShieldCheck, Zap, Server } from 'lucide-react';
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
        backgroundColor: '#0a0d14',
        color: '#ffffff',
        borderTop: '1px solid #1a2233',
        borderBottom: '1px solid #1a2233',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#FF5500',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '10px',
            }}
          >
            <Server size={14} />
            <span>Architecture & Concrete Artifacts</span>
          </div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 42px)',
              fontWeight: 800,
              color: '#ffffff',
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
            <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              An interactive matrix of verified production primitives and tangible enterprise deliverables handed over upon launch.
            </p>
          </RevealElement>
        </div>

        {/* 2-Column Asymmetrical Engineering Hub (NOT generic cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Interactive Terminal Spec Sheet for Tech Stack */}
          <div
            style={{
              backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
              border: '1px solid #1F1F23',
              borderRadius: '10px',
              padding: 'clamp(24px, 3.5vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #1e293b', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={16} color="#FF5500" />
                  <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 700, color: '#FF5500' }}>
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
                      backgroundColor: activeCategoryIdx === idx ? '#FF5500' : '#1e293b',
                      color: activeCategoryIdx === idx ? '#ffffff' : '#94a3b8',
                      border: 'none',
                      padding: '7px 14px',
                      borderRadius: '4px',
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
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
                  Verified Production Components
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px' }}>
                  {techStack[activeCategoryIdx]?.items.map((tech) => (
                    <div
                      key={tech}
                      style={{
                        backgroundColor: '#162234',
                        border: '1px solid #1e2d42',
                        borderRadius: '6px',
                        padding: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Zap size={14} color="#FF5500" />
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: '14px 18px', backgroundColor: '#131e2e', borderRadius: '6px', borderLeft: '3px solid #FF5500' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, display: 'block' }}>
                All dependencies audited against OWASP Top 10, automated CVE scanners, and cloud-native Kubernetes blueprints.
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Deliverable Spec Table (Not box cards!) */}
          <div
            style={{
              backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
              border: '1px solid #1F1F23',
              borderRadius: '10px',
              padding: 'clamp(24px, 3.5vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #1e293b', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Package size={16} color="#22c55e" />
                  <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 700, color: '#22c55e' }}>
                    CLIENT_HANDOVER_BLUEPRINT
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: '#334155', fontWeight: 600 }}>100% IP Transfer</span>
              </div>

              {/* Linear Editorial Rows (Replaces rectangular boxes) */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      padding: '16px 0',
                      borderBottom: dIdx !== deliverables.length - 1 ? '1px solid #1e293b' : 'none',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                    }}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '4px', backgroundColor: 'rgba(34, 197, 94, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e', flexShrink: 0, marginTop: '2px' }}>
                      <FileCode size={15} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff' }}>
                          {del.title}
                        </span>
                        <span style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8', fontFamily: 'monospace' }}>
                          [{del.format}]
                        </span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                        {del.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '14px 18px', backgroundColor: '#131e2e', borderRadius: '6px', borderLeft: '3px solid #22c55e' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#22c55e' }}>
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
