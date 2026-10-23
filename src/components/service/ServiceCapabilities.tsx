import React, { useState } from 'react';
import { LucideIcon, ArrowRight, CheckCircle2, Shield, Layers, ChevronRight, Terminal } from 'lucide-react';
import { ServiceCapability } from '../../types/service';
import { CapabilityStyleType } from '../../data/capabilityStyles';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceCapabilitiesProps {
  title: string;
  capabilities: ServiceCapability[];
  icon: LucideIcon;
  styleVariant?: CapabilityStyleType;
}

export const ServiceCapabilities: React.FC<ServiceCapabilitiesProps> = ({
  title,
  capabilities,
  icon: IconComponent,
  styleVariant = 'bento-grid',
}) => {
  // State for Interactive Tabs variant (Style 2)
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  // Style badge name generator
  const getVariantSubtitle = (variant: CapabilityStyleType) => {
    switch (variant) {
      case 'bento-grid':
        return 'Asymmetric Architectural Bento';
      case 'interactive-tabs':
        return 'Interactive Inspectable Console';
      case 'numbered-editorial':
        return 'Structured Editorial Breakdown';
      case 'split-showcase':
        return 'Pillar-to-Delivery Split Matrix';
      case 'dark-cyber':
        return 'Hardened Cyber Production Topology';
      case 'timeline-flow':
        return 'Sequential Delivery Pipeline';
      case 'minimal-pills':
        return 'Modular High-Density Primitives';
      default:
        return 'Engineered Capabilities';
    }
  };

  /* =========================================================================
     RENDER VARIANT 1: BENTO GRID (Asymmetric Cards with Hero Feature Tile)
     ========================================================================= */
  const renderBentoGrid = () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px',
      }}
    >
      {capabilities.map((cap, idx) => {
        // Tile 0 & 3 span 7 columns, Tile 1 & 2 span 5 columns for true dynamic bento asymmetry
        const colSpan = idx === 0 || idx === 3 ? 'span 7' : 'span 5';
        const isFeatured = idx === 0;

        return (
          <div
            key={idx}
            className="bento-tile"
            style={{
              gridColumn: colSpan,
              backgroundColor: isFeatured ? '#0f172a' : '#ffffff',
              color: isFeatured ? '#ffffff' : '#0f172a',
              border: isFeatured ? '1px solid #1e293b' : '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: 'clamp(24px, 3.5vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: isFeatured
                ? '0 16px 36px rgba(15, 23, 42, 0.25)'
                : '0 4px 12px rgba(0, 0, 0, 0.03)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            {isFeatured && (
              <div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(34, 88, 231, 0.25) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
            )}

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: isFeatured ? 'rgba(34, 88, 231, 0.3)' : 'rgba(34, 88, 231, 0.08)',
                    color: isFeatured ? '#60a5fa' : '#2258e7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconComponent size={22} />
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    color: isFeatured ? '#38bdf8' : '#2258e7',
                  }}
                >
                  PILLAR 0{idx + 1}
                </span>
              </div>

              <h3
                style={{
                  fontSize: isFeatured ? '22px' : '18px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.25,
                  marginBottom: '12px',
                }}
              >
                {cap.title}
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.65,
                  color: isFeatured ? '#94a3b8' : '#475569',
                  marginBottom: '24px',
                }}
              >
                {cap.description}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                paddingTop: '16px',
                borderTop: isFeatured ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #f1f5f9',
              }}
            >
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    backgroundColor: isFeatured ? '#1e293b' : '#f1f5f9',
                    color: isFeatured ? '#cbd5e1' : '#334155',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  /* =========================================================================
     RENDER VARIANT 2: INTERACTIVE TABS (Clickable Left Master + Right Detail Console)
     ========================================================================= */
  const renderInteractiveTabs = () => {
    const activeCap = capabilities[activeTabIdx] || capabilities[0];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '10px',
          padding: 'clamp(20px, 3vw, 36px)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Left Column: Vertical Clickable Selectors */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
            Select Active Capability Specification
          </div>
          {capabilities.map((cap, idx) => {
            const isSelected = activeTabIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTabIdx(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 18px',
                  borderRadius: '6px',
                  border: isSelected ? '1.5px solid #2258e7' : '1px solid #edf2f7',
                  backgroundColor: isSelected ? 'rgba(34, 88, 231, 0.05)' : '#f8fafc',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: isSelected ? '#2258e7' : '#94a3b8',
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontSize: '14.5px',
                      fontWeight: isSelected ? 700 : 600,
                      color: isSelected ? '#0f172a' : '#475569',
                    }}
                  >
                    {cap.title}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  style={{
                    color: isSelected ? '#2258e7' : '#cbd5e1',
                    transform: isSelected ? 'translateX(3px)' : 'none',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Inspection Inspector Card */}
        <div
          style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            borderRadius: '8px',
            padding: 'clamp(28px, 4vw, 44px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #1e293b',
            position: 'relative',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ width: '12px', height: '2px', backgroundColor: '#60a5fa' }} />
              <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Specification Inspector // Module 0{activeTabIdx + 1}
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                color: '#ffffff',
                marginBottom: '16px',
              }}
            >
              {activeCap.title}
            </h3>

            <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#94a3b8', marginBottom: '32px' }}>
              {activeCap.description}
            </p>
          </div>

          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
              Verified Architectural Primitives
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {activeCap.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '6px 14px',
                    borderRadius: '4px',
                    backgroundColor: '#1e293b',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* =========================================================================
     RENDER VARIANT 3: NUMBERED EDITORIAL (Swiss Magazine Linear Rows with Monospace Markers)
     ========================================================================= */
  const renderNumberedEditorial = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderTop: '2px solid #0f172a',
      }}
    >
      {capabilities.map((cap, idx) => (
        <div
          key={idx}
          style={{
            padding: '36px 0',
            borderBottom: '1px solid #e2e8f0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'baseline',
            transition: 'background-color 0.2s',
          }}
        >
          {/* Index & Title */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '20px',
                fontWeight: 800,
                color: '#2258e7',
                letterSpacing: '-0.02em',
              }}
            >
              /0{idx + 1}
            </span>
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#0f172a',
                fontFamily: 'var(--font-heading)',
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              {cap.title}
            </h3>
          </div>

          {/* Description & Technical Chips */}
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: '0 0 16px 0' }}>
              {cap.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#64748b',
                    backgroundColor: '#f1f5f9',
                    padding: '3px 8px',
                    borderRadius: '2px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  /* =========================================================================
     RENDER VARIANT 4: SPLIT SHOWCASE (Left Sticky Strategic Pillar + Right Vertical Card Stream)
     ========================================================================= */
  const renderSplitShowcase = () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '48px',
        alignItems: 'start',
      }}
    >
      {/* Sticky Left Pillar Statement */}
      <div style={{ position: 'sticky', top: '100px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#2258e7', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <Layers size={24} />
        </div>
        <h3
          style={{
            fontSize: 'clamp(26px, 3vw, 36px)',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: '#0f172a',
            lineHeight: 1.18,
            marginBottom: '18px',
          }}
        >
          Comprehensive Architectural Scope
        </h3>
        <p style={{ fontSize: '15.5px', color: '#64748b', lineHeight: 1.65, marginBottom: '28px' }}>
          Every capability in {title} is engineered as an isolated, production-grade module with direct API boundaries, enterprise observability, and strict automated regression coverage.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', fontWeight: 600, color: '#1e293b' }}>
            <CheckCircle2 size={16} color="#2258e7" />
            <span>100% Microservices / Modular Decoupling</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', fontWeight: 600, color: '#1e293b' }}>
            <CheckCircle2 size={16} color="#2258e7" />
            <span>Zero-Downtime Deployment Blueprints</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', fontWeight: 600, color: '#1e293b' }}>
            <CheckCircle2 size={16} color="#2258e7" />
            <span>Full Continuous Integration Test Coverage</span>
          </div>
        </div>
      </div>

      {/* Right Column: Stacked Detailed Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: '24px 28px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
              borderLeft: '4px solid #2258e7',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2258e7' }}>
                SPECIFICATION 0{idx + 1}
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>Production Ready</span>
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', margin: '0 0 10px 0' }}>
              {cap.title}
            </h4>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: '0 0 16px 0' }}>
              {cap.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    padding: '3px 8px',
                    borderRadius: '3px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* =========================================================================
     RENDER VARIANT 5: DARK CYBER (High-Contrast Obsidian + Glowing Borders + Terminal Accents)
     ========================================================================= */
  const renderDarkCyber = () => (
    <div
      style={{
        backgroundColor: '#080c14',
        border: '1px solid #1a2333',
        borderRadius: '10px',
        padding: 'clamp(24px, 4vw, 44px)',
        boxShadow: '0 20px 48px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '18px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={16} color="#38bdf8" />
          <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#38bdf8', fontWeight: 600 }}>
            NEOMINDS_SYSTEM_DAEMON // {title.toUpperCase().replace(/\s+/g, '_')}
          </span>
        </div>
        <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '3px 8px', borderRadius: '3px' }}>
          STATUS: ONLINE
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#0f1726',
              border: '1px solid #1e2d42',
              borderRadius: '6px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#38bdf8';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(56, 189, 248, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e2d42';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, color: '#38bdf8' }}>
                  NODE [0{idx + 1}]
                </span>
                <Shield size={14} color="#60a5fa" />
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                {cap.title}
              </h4>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '20px' }}>
                {cap.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '10.5px',
                    backgroundColor: '#162234',
                    color: '#e2e8f0',
                    padding: '3px 8px',
                    borderRadius: '2px',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* =========================================================================
     RENDER VARIANT 6: TIMELINE FLOW (Alternating Sequential Delivery Pipeline)
     ========================================================================= */
  const renderTimelineFlow = () => (
    <div style={{ position: 'relative', maxWidth: '960px', margin: '0 auto' }}>
      {/* Center rail for desktop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: '2px',
          backgroundColor: '#e2e8f0',
          transform: 'translateX(-50%)',
        }}
        className="timeline-rail"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {capabilities.map((cap, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: isEven ? 'flex-start' : 'flex-end',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 'calc(50% - 24px)',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#2258e7', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800 }}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase' }}>
                    Stage {idx + 1}
                  </span>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', margin: '0 0 10px 0' }}>
                  {cap.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                  {cap.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: '#f1f5f9',
                        color: '#334155',
                        padding: '3px 8px',
                        borderRadius: '3px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  /* =========================================================================
     RENDER VARIANT 7: MINIMAL PILLS & METRIC BADGES (Modern Surface Cards)
     ========================================================================= */
  const renderMinimalPills = () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px',
      }}
    >
      {capabilities.map((cap, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #edf2f7',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#2258e7';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 24px rgba(34, 88, 231, 0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#edf2f7';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.02)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#2258e7',
                fontFamily: 'monospace',
                borderLeft: '2px solid #2258e7',
                paddingLeft: '6px',
                letterSpacing: '0.06em',
              }}
            >
              MODULE 0{idx + 1}
            </span>
            <ArrowRight size={14} color="#94a3b8" />
          </div>

          <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', margin: '0 0 10px 0' }}>
            {cap.title}
          </h4>

          <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, margin: '0 0 16px 0' }}>
            {cap.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {cap.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#475569',
                  padding: '3px 8px',
                  borderRadius: '4px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: styleVariant === 'dark-cyber' ? '#05070c' : '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        transition: 'background-color 0.3s',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#2258e7',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '10px',
            }}
          >
            {getVariantSubtitle(styleVariant)}
          </div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 42px)',
              fontWeight: 800,
              color: styleVariant === 'dark-cyber' ? '#ffffff' : '#0f172a',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.15,
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={6}
          >
            What We Deliver in {title}
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p
              style={{
                fontSize: '16px',
                color: styleVariant === 'dark-cyber' ? '#94a3b8' : '#64748b',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Engineered capabilities delivered as resilient, production-ready modules with comprehensive enterprise SLAs.
            </p>
          </RevealElement>
        </div>

        {/* Dynamic Variant Render */}
        <RevealElement variant="card">
          {styleVariant === 'bento-grid' && renderBentoGrid()}
          {styleVariant === 'interactive-tabs' && renderInteractiveTabs()}
          {styleVariant === 'numbered-editorial' && renderNumberedEditorial()}
          {styleVariant === 'split-showcase' && renderSplitShowcase()}
          {styleVariant === 'dark-cyber' && renderDarkCyber()}
          {styleVariant === 'timeline-flow' && renderTimelineFlow()}
          {styleVariant === 'minimal-pills' && renderMinimalPills()}
        </RevealElement>
      </div>
    </section>
  );
};
