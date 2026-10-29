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
              backgroundColor: isFeatured ? '#fbf9f5' : '#ffffff',
              color: '#000000',
              border: isFeatured ? '1px solid #f0ece2' : '1px solid #e4e2e1',
              borderTop: '3px solid #fe6200',
              borderRadius: '8px',
              padding: 'clamp(24px, 3.5vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: isFeatured
                ? '0 16px 36px rgba(32, 11, 0, 0.25)'
                : '0 4px 12px rgba(32, 11, 0, 0.03)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: isFeatured ? 'rgba(255, 85, 0, 0.3)' : 'rgba(255, 85, 0, 0.08)',
                    color: '#fe6200',
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
                    color: '#fe6200',
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
                  color: '#000000',
                }}
              >
                {cap.title}
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.65,
                  color: '#333333',
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
                borderTop: isFeatured ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #e4e2e1',
              }}
            >
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '8px',
                    backgroundColor: isFeatured ? '#f0ece2' : '#f1efeb',
                    color: isFeatured ? '#fe6200' : '#2f3437',
                    border: isFeatured ? '1px solid rgba(254, 98, 0, 0.2)' : '1px solid #e4e2e1',
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
          border: '1px solid #e4e2e1',
          borderRadius: '8px',
          padding: 'clamp(20px, 3vw, 36px)',
          boxShadow: '0 8px 30px rgba(32, 11, 0, 0.04)',
        }}
      >
        {/* Left Column: Vertical Clickable Selectors */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#66615c', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
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
                  borderRadius: '8px',
                  border: isSelected ? '1.5px solid #fe6200' : '1px solid #e4e2e1',
                  borderLeft: isSelected ? '4px solid #fe6200' : '1px solid #e4e2e1',
                  backgroundColor: isSelected ? '#f1efeb' : '#ffffff',
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
                      color: isSelected ? '#fe6200' : '#66615c',
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontSize: '14.5px',
                      fontWeight: isSelected ? 700 : 600,
                      color: isSelected ? '#fe6200' : '#000000',
                    }}
                  >
                    {cap.title}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  style={{
                    color: isSelected ? '#fe6200' : '#66615c',
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
            backgroundColor: '#f1efeb',
            color: '#000000',
            borderRadius: '8px',
            padding: 'clamp(28px, 4vw, 44px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #e4e2e1',
            position: 'relative',
          }}
        >
          <div>

            <h3
              style={{
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                color: '#000000',
                marginBottom: '16px',
              }}
            >
              {activeCap.title}
            </h3>

            <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#333333', marginBottom: '32px' }}>
              {activeCap.description}
            </p>
          </div>

          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#66615c', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
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
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    border: '1px solid #e4e2e1',
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
        borderTop: '1px solid #e4e2e1',
      }}
    >
      {capabilities.map((cap, idx) => (
        <div
          key={idx}
          style={{
            padding: '36px 0',
            borderBottom: '1px solid #e4e2e1',
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
                color: '#fe6200',
                letterSpacing: '-0.02em',
              }}
            >
              /0{idx + 1}
            </span>
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#000000',
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
            <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#333333', margin: '0 0 16px 0' }}>
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
                    color: '#000000',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    padding: '4px 10px',
                    borderRadius: '8px',
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
        <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#fe6200', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <Layers size={24} />
        </div>
        <h3
          style={{
            fontSize: 'clamp(26px, 3vw, 36px)',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: '#000000',
            lineHeight: 1.18,
            marginBottom: '18px',
          }}
        >
          Comprehensive Architectural Scope
        </h3>
        <p style={{ fontSize: '15.5px', color: '#333333', lineHeight: 1.65, marginBottom: '28px' }}>
          Every capability in {title} is engineered as an isolated, production-grade module with direct API boundaries, enterprise observability, and strict automated regression coverage.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            <CheckCircle2 size={16} color="#fe6200" />
            <span>100% Microservices / Modular Decoupling</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            <CheckCircle2 size={16} color="#fe6200" />
            <span>Zero-Downtime Deployment Blueprints</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            <CheckCircle2 size={16} color="#fe6200" />
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
              border: '1px solid #e4e2e1',
              borderRadius: '8px',
              padding: '24px 28px',
              boxShadow: '0 2px 8px rgba(32, 11, 0, 0.02)',
              borderLeft: '4px solid #fe6200',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#fe6200' }}>
                SPECIFICATION 0{idx + 1}
              </span>
              <span style={{ fontSize: '11px', color: '#66615c', fontWeight: 600 }}>Production Ready</span>
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#000000', fontFamily: 'var(--font-heading)', margin: '0 0 10px 0' }}>
              {cap.title}
            </h4>
            <p style={{ fontSize: '14.5px', color: '#333333', lineHeight: 1.6, margin: '0 0 16px 0' }}>
              {cap.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    backgroundColor: '#f1efeb',
                    border: '1px solid #e4e2e1', color: '#000000',
                    padding: '3px 8px',
                    borderRadius: '8px',
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
        backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
        border: '1px solid #f0ece2',
        borderRadius: '8px',
        padding: 'clamp(24px, 4vw, 44px)',
        boxShadow: '0 20px 48px rgba(32, 11, 0, 0.4)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f0ece2', paddingBottom: '18px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={16} color="#fe6200" />
          <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#fe6200', fontWeight: 600 }}>
            Architecture Specifications · {title}
          </span>
        </div>
        <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '3px 8px', borderRadius: '8px' }}>
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
              backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fe6200';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(254, 98, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, color: '#fe6200' }}>
                  NODE [0{idx + 1}]
                </span>
                <Shield size={14} color="#fe6200" />
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#000000', marginBottom: '10px' }}>
                {cap.title}
              </h4>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#333333', marginBottom: '20px' }}>
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
                    backgroundColor: 'rgba(32, 11, 0, 0.7)',
                    color: '#ffffff',
                    padding: '3px 8px',
                    borderRadius: '8px',
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
          backgroundColor: '#e4e2e1',
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
                  border: '1px solid #e4e2e1',
                  borderRadius: '8px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 14px rgba(32, 11, 0, 0.03)',
                  position: 'relative',
                }}
              >
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#000000', fontFamily: 'var(--font-heading)', margin: '0 0 10px 0' }}>
                  {cap.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                  {cap.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: '#f1efeb',
                        border: '1px solid #e4e2e1', color: '#000000',
                        padding: '3px 8px',
                        borderRadius: '8px',
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
            border: '1px solid #e4e2e1',
            borderTop: '3px solid #fe6200',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 2px 6px rgba(32, 11, 0, 0.02)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#fe6200';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 24px rgba(254, 98, 0, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e4e2e1';
            e.currentTarget.style.borderTopColor = '#fe6200';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(32, 11, 0, 0.02)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#fe6200',
                fontFamily: 'monospace',
                borderLeft: '2px solid #fe6200',
                paddingLeft: '6px',
                letterSpacing: '0.06em',
              }}
            >
              MODULE 0{idx + 1}
            </span>
            <ArrowRight size={14} color="#66615c" />
          </div>

          <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#000000', fontFamily: 'var(--font-heading)', margin: '0 0 10px 0' }}>
            {cap.title}
          </h4>

          <p style={{ fontSize: '13.5px', color: '#333333', lineHeight: 1.6, margin: '0 0 16px 0' }}>
            {cap.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {cap.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  backgroundColor: '#f1efeb',
                  border: '1px solid #e4e2e1', color: '#000000',
                  padding: '3px 8px',
                  borderRadius: '8px',
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
        backgroundColor: styleVariant === 'dark-cyber' ? '#fbf9f5' : '#f1efeb',
        borderTop: styleVariant === 'dark-cyber' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e4e2e1',
        borderBottom: styleVariant === 'dark-cyber' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e4e2e1',
        transition: 'background-color 0.3s',
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
            What We Deliver in {title}
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p
              style={{
                fontSize: '16px',
                color: '#333333',
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
