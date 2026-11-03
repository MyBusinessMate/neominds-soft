import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Cpu,
  Share2,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { getUnifiedProject, UnifiedProject } from '../data/projectsData';
import { parseTechStackWithIcons } from '../utils/techIcons';
import { PageType } from './Header';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

interface ProjectPageProps {
  projectId: string;
  onNavigatePage: (page: PageType, articleId?: string) => void;
  onOpenContact?: () => void;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({
  projectId,
  onNavigatePage,
  onOpenContact,
}) => {
  const [copied, setCopied] = useState(false);

  const project: UnifiedProject = useMemo(() => {
    return getUnifiedProject(projectId);
  }, [projectId]);

  // Scroll to top and update document title when project ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project?.title) {
      document.title = `${project.title} | Neominds Enterprise Case Studies`;
    }
  }, [projectId, project?.title]);

  const renderFormattedText = (text?: string): ReactNode => {
    if (!text) return '';
    // Parse markdown ***bold italic***, **bold**, *italic*
    const parts = text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('***') && part.endsWith('***')) {
        return (
          <strong key={i} style={{ fontWeight: 700, fontStyle: 'italic', color: '#111111' }}>
            {part.slice(3, -3)}
          </strong>
        );
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} style={{ fontWeight: 700, color: '#111111' }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} style={{ fontStyle: 'italic', color: '#222222' }}>
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  const cleanMarkdown = (text?: string) => {
    if (!text) return '';
    return text.replace(/^[#*_\-\s]+/, '').replace(/[*_#]+/g, '').trim();
  };

  const renderParagraphs = (text: string, marginBottom = '18px') => {
    if (!text) return null;
    const paras = text.split(/\n\n+/).filter(Boolean);
    return paras.map((p, idx) => (
      <p
        key={idx}
        style={{
          fontSize: '16.5px',
          lineHeight: 1.75,
          color: '#333333',
          margin: idx === paras.length - 1 ? 0 : `0 0 ${marginBottom} 0`,
        }}
      >
        {renderFormattedText(p.trim())}
      </p>
    ));
  };

  // Companion related projects
  const companionProjects = useMemo(() => {
    return project.relatedProjectIds
      .map((id) => getUnifiedProject(id))
      .filter(Boolean);
  }, [project.relatedProjectIds]);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } else if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: project.title,
          text: project.overview.services,
          url: window.location.href,
        })
        .catch(() => {});
    }
  };

  const handleDiscussClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      onNavigatePage('contacts');
    }
  };

  const techStackList = useMemo(() => {
    return parseTechStackWithIcons(project.overview.technologyStack);
  }, [project.overview.technologyStack]);

  const cleanDuration = useMemo(() => {
    if (!project.overview.projectDuration) return '3–4 Months';
    return project.overview.projectDuration.split('(')[0].trim();
  }, [project.overview.projectDuration]);

  return (
    <article
      style={{
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        color: '#111111',
        minHeight: '100vh',
        paddingTop: '124px', // Generous space so floating header never overlaps
        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
      }}
    >
      {/* ========================================================
          FULL-CANVAS EDITORIAL CONTAINER (Standard 1280px Container)
          Utilizes full desktop canvas with a 2-column layout:
          Left: 70% Blog Article Content
          Right: 30% Sticky Editorial Sidebar & Specs
          ======================================================== */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(20px, 3.5vw, 40px) 80px',
          boxSizing: 'border-box',
        }}
      >
        {/* Back Link */}
        <div
          style={{
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <button
            onClick={() => onNavigatePage('portfolio')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#77726d',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0,
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#77726d')}
          >
            <ArrowLeft size={16} />
            <span>All Case Studies & Projects</span>
          </button>

          <button
            onClick={handleShare}
            aria-label="Share this case study"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: copied ? '#f0fdf4' : '#ffffff',
              border: copied ? '1px solid #86efac' : '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
              padding: '6px 14px',
              fontSize: '12.5px',
              fontWeight: 600,
              color: copied ? '#15803d' : '#444444',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
              transition: 'all 0.15s ease',
            }}
          >
            {copied ? <Check size={13} /> : <Share2 size={13} />}
            <span>{copied ? 'Link Copied' : 'Share Case Study'}</span>
          </button>
        </div>

        {/* ========================================================
            ARTICLE HEADER (Full-Width Across 1280px)
            ======================================================== */}
        <header
          style={{
            marginBottom: '40px',
            borderBottom: '1px solid #e4e2e1',
            paddingBottom: '36px',
          }}
        >
          {/* Main Title */}
          <h1
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(34px, 4.4vw, 54px)',
              fontWeight: 800,
              color: '#000000',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '0 0 18px 0',
              maxWidth: '1080px',
            }}
          >
            {project.projectName || project.title}
          </h1>

          {/* Subtitle / Executive Lead */}
          <p
            style={{
              fontSize: 'clamp(18px, 1.25vw, 21px)',
              lineHeight: 1.6,
              color: '#3f3b37',
              margin: '0 0 28px 0',
              fontWeight: 400,
              maxWidth: '980px',
            }}
          >
            {project.solution}
          </p>

          {/* 3 Metric Strip with Corner Glow (Exact Match to ExperienceSection) */}
          <div
            className="nm-corner-glow"
            style={{
              maxWidth: '860px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '12px',
              boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                alignItems: 'stretch',
                width: '100%',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Metric 1 */}
              <div
                style={{
                  padding: 'clamp(18px, 2.2vh, 24px) clamp(12px, 1.5vw, 20px)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(28px, 2.8vw, 38px)',
                    fontWeight: 400,
                    color: '#000000',
                    lineHeight: 1.1,
                    marginBottom: '4px',
                  }}
                >
                  {cleanDuration}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#66615c',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Project Timeline
                </div>
              </div>

              {/* Metric 2 with Thin Orange Vertical Dividers */}
              <div
                style={{
                  padding: 'clamp(18px, 2.2vh, 24px) clamp(12px, 1.5vw, 20px)',
                  textAlign: 'center',
                  borderLeft: '1px solid rgba(254, 98, 0, 0.35)',
                  borderRight: '1px solid rgba(254, 98, 0, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(28px, 2.8vw, 38px)',
                    fontWeight: 400,
                    color: '#fe6200',
                    lineHeight: 1.1,
                    marginBottom: '4px',
                  }}
                >
                  {project.resultsAndImpact.efficiency || 'Production'}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#66615c',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Engineering Outcome
                </div>
              </div>

              {/* Metric 3 */}
              <div
                style={{
                  padding: 'clamp(18px, 2.2vh, 24px) clamp(12px, 1.5vw, 20px)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(28px, 2.8vw, 38px)',
                    fontWeight: 400,
                    color: '#000000',
                    lineHeight: 1.1,
                    marginBottom: '4px',
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#66615c',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  IP & Code Ownership
                </div>
              </div>
            </div>
          </div>

          {/* Author / Spec byline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '13px',
              color: '#77726d',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#fe6200',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '12px',
              }}
            >
              N
            </div>
            <div>
              <strong style={{ color: '#111111' }}>Neominds Engineering</strong> · Principal Systems Architecture Group
            </div>
            <span style={{ color: '#c4bfb6' }}>•</span>
            <div>Updated November 2026</div>
          </div>
        </header>

        {/* ========================================================
            2-COLUMN EDITORIAL ARTICLE BODY
            Left: 70% Deep Reading Flow (80% blog article look)
            Right: 30% Sticky Editorial Rail
            ======================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 340px',
            gap: 'clamp(32px, 4vw, 54px)',
            alignItems: 'start',
          }}
          className="nm-editorial-layout"
        >
          {/* ======================================================
              LEFT COLUMN: 80% BLOG ARTICLE EDITORIAL FLOW
              ====================================================== */}
          <main className="nm-editorial-body" style={{ minWidth: 0 }}>
            {/* 1. Client Context & Executive Summary */}
            <section id="client-context" style={{ marginBottom: '48px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#66615c',
                  marginBottom: '10px',
                }}
              >
                1. Executive Summary & Client Context
              </div>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 700,
                  color: '#000000',
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                }}
              >
                Building for {project.overview.client} at Production Scale
              </h2>
              {renderParagraphs(project.clientContext)}
            </section>

            {/* 2. The Core Engineering Challenge */}
            <section id="the-challenge" style={{ marginBottom: '48px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#66615c',
                  marginBottom: '10px',
                }}
              >
                2. The Engineering Challenge
              </div>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 700,
                  color: '#000000',
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                }}
              >
                Bottlenecks, Friction & Operational Risks
              </h2>
              {renderParagraphs(project.challenge)}
            </section>

            {/* 3. Technical Constraints & Architecture */}
            <section id="constraints" style={{ marginBottom: '48px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#66615c',
                  marginBottom: '10px',
                }}
              >
                3. Constraints & Failure Domains
              </div>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 700,
                  color: '#000000',
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                }}
              >
                Engineering Boundaries & Non-Negotiable Requirements
              </h2>
              {renderParagraphs(project.constraints)}
            </section>

            {/* 4. Our Approach & System Architecture */}
            <section id="approach" style={{ marginBottom: '48px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#66615c',
                  marginBottom: '10px',
                }}
              >
                4. Engineering Strategy
              </div>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 700,
                  color: '#000000',
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                }}
              >
                Architecture, Sequencing & Milestone Delivery
              </h2>
              {renderParagraphs(project.approach)}
            </section>

            {/* 5. Key Capabilities & Deliverables */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section id="key-features" style={{ marginBottom: '48px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#66615c',
                    marginBottom: '10px',
                  }}
                >
                  5. Deliverables & Features
                </div>
                <h2
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(24px, 2.5vw, 32px)',
                    fontWeight: 700,
                    color: '#000000',
                    lineHeight: 1.25,
                    margin: '0 0 20px 0',
                  }}
                >
                  Shipped Systems & Key Features
                </h2>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {project.keyFeatures.map((feat, idx) => {
                    const cleanFeat = feat.replace(/^[•\-\*]\s*/, '').trim();
                    const dashIdx = cleanFeat.indexOf(' – ') !== -1 ? cleanFeat.indexOf(' – ') : cleanFeat.indexOf(' - ');
                    let titlePart = '';
                    let descPart = cleanFeat;
                    if (dashIdx !== -1) {
                      titlePart = cleanFeat.substring(0, dashIdx).trim();
                      descPart = cleanFeat.substring(dashIdx + 3).trim();
                    }
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          borderRadius: '10px',
                          padding: '14px 18px',
                          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                        }}
                      >
                        <CheckCircle2
                          size={17}
                          color="#111111"
                          style={{ flexShrink: 0, marginTop: '2px' }}
                        />
                        <span style={{ fontSize: '15px', color: '#1a1a1a', lineHeight: 1.55 }}>
                          {titlePart ? (
                            <>
                              <strong style={{ fontWeight: 700, color: '#111111' }}>{renderFormattedText(titlePart)}</strong>
                              {' — '}
                              <span>{renderFormattedText(descPart)}</span>
                            </>
                          ) : (
                            renderFormattedText(cleanFeat)
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 6. Technology Implementation Breakdown */}
            <section id="tech-implementation" style={{ marginBottom: '48px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#66615c',
                  marginBottom: '10px',
                }}
              >
                6. Technology Implementation
              </div>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 700,
                  color: '#000000',
                  lineHeight: 1.25,
                  margin: '0 0 20px 0',
                }}
              >
                Production Stack & Integration Layers
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '14px',
                }}
              >
                {/* Frontend Card */}
                {project.technologyImplementation.frontend && (
                  <div
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '12px',
                      padding: '18px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Code2 size={16} color="#fe6200" />
                      <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#555555', letterSpacing: '0.04em' }}>
                        Frontend
                      </span>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#000000', marginBottom: '10px' }}>
                      {project.technologyImplementation.frontend}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {parseTechStackWithIcons(project.technologyImplementation.frontend).map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '11.5px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '5px',
                            backgroundColor: '#fbf9f5',
                            border: '1px solid #e5e0d8',
                            color: '#1a1a1a',
                          }}
                        >
                          {item.iconPath && (
                            <img
                              src={item.iconPath}
                              alt=""
                              aria-hidden="true"
                              style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                            />
                          )}
                          <span>{item.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Backend Card */}
                {project.technologyImplementation.backend && (
                  <div
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '12px',
                      padding: '18px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Layers size={16} color="#fe6200" />
                      <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#555555', letterSpacing: '0.04em' }}>
                        Backend
                      </span>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#000000', marginBottom: '10px' }}>
                      {project.technologyImplementation.backend}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {parseTechStackWithIcons(project.technologyImplementation.backend).map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '11.5px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '5px',
                            backgroundColor: '#fbf9f5',
                            border: '1px solid #e5e0d8',
                            color: '#1a1a1a',
                          }}
                        >
                          {item.iconPath && (
                            <img
                              src={item.iconPath}
                              alt=""
                              aria-hidden="true"
                              style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                            />
                          )}
                          <span>{item.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Database Card */}
                {project.technologyImplementation.database && (
                  <div
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '12px',
                      padding: '18px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Database size={16} color="#fe6200" />
                      <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#555555', letterSpacing: '0.04em' }}>
                        Database
                      </span>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#000000', marginBottom: '10px' }}>
                      {project.technologyImplementation.database}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {parseTechStackWithIcons(project.technologyImplementation.database).map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '11.5px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '5px',
                            backgroundColor: '#fbf9f5',
                            border: '1px solid #e5e0d8',
                            color: '#1a1a1a',
                          }}
                        >
                          {item.iconPath && (
                            <img
                              src={item.iconPath}
                              alt=""
                              aria-hidden="true"
                              style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                            />
                          )}
                          <span>{item.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI / Automation Card */}
                {project.technologyImplementation.aiAutomation && (
                  <div
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '12px',
                      padding: '18px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Cpu size={16} color="#fe6200" />
                      <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#555555', letterSpacing: '0.04em' }}>
                        AI & Automation
                      </span>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#000000', marginBottom: '10px' }}>
                      {project.technologyImplementation.aiAutomation}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {parseTechStackWithIcons(project.technologyImplementation.aiAutomation).map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '11.5px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '5px',
                            backgroundColor: '#fbf9f5',
                            border: '1px solid #e5e0d8',
                            color: '#1a1a1a',
                          }}
                        >
                          {item.iconPath && (
                            <img
                              src={item.iconPath}
                              alt=""
                              aria-hidden="true"
                              style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                            />
                          )}
                          <span>{item.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 7. Results and Business Impact */}
            <section id="results" style={{ marginBottom: '48px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#66615c',
                  marginBottom: '10px',
                }}
              >
                7. Results and Business Impact
              </div>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 700,
                  color: '#000000',
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                }}
              >
                Verified Production Outcomes
              </h2>

              <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#333333', marginBottom: '24px' }}>
                {project.resultsAndImpact.summary}
              </p>

              {/* Clean Metric Outcomes Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '12px', padding: '18px 20px', backgroundColor: '#ffffff', boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#66615c', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Efficiency
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#111111', lineHeight: 1.45 }}>
                    {cleanMarkdown(project.resultsAndImpact.efficiency)}
                  </div>
                </div>

                <div style={{ border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '12px', padding: '18px 20px', backgroundColor: '#ffffff', boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#66615c', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Time Saved
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#111111', lineHeight: 1.45 }}>
                    {cleanMarkdown(project.resultsAndImpact.timeSaved)}
                  </div>
                </div>

                <div style={{ border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '12px', padding: '18px 20px', backgroundColor: '#ffffff', boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#66615c', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Cost Reduction
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#111111', lineHeight: 1.45 }}>
                    {cleanMarkdown(project.resultsAndImpact.costReduction)}
                  </div>
                </div>

                <div style={{ border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '12px', padding: '18px 20px', backgroundColor: '#ffffff', boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#66615c', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Performance
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#111111', lineHeight: 1.45 }}>
                    {cleanMarkdown(project.resultsAndImpact.performance)}
                  </div>
                </div>

                <div style={{ border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '12px', padding: '18px 20px', backgroundColor: '#ffffff', gridColumn: '1 / -1', boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#66615c', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Business Impact
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#111111', lineHeight: 1.5 }}>
                    {cleanMarkdown(project.resultsAndImpact.businessImpact)}
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Key Takeaway */}
            <section id="key-takeaway" style={{ marginBottom: '56px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#66615c',
                  marginBottom: '10px',
                }}
              >
                8. Architect Perspective
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderLeft: '4px solid #111111',
                  borderRadius: '0 12px 12px 0',
                  padding: '24px 28px',
                  boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)',
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '18.5px',
                    lineHeight: 1.6,
                    color: '#000000',
                    fontStyle: 'italic',
                    margin: 0,
                  }}
                >
                  "{project.keyTakeaway}"
                </p>
                <div style={{ marginTop: '12px', fontSize: '13px', fontWeight: 700, fontStyle: 'italic', color: '#111111' }}>
                  — Neominds Lead Systems Architect
                </div>
              </div>
            </section>
          </main>

          {/* ======================================================
              RIGHT COLUMN: STICKY EDITORIAL SIDEBAR & SPEC RAIL
              (Identical to ServicePage.tsx)
              ====================================================== */}
          <aside
            style={{
              position: 'sticky',
              top: '100px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
            className="nm-editorial-sidebar"
          >
            {/* 1. On This Page: Interactive Table of Contents */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                padding: '22px 24px',
                boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#66615c',
                  marginBottom: '14px',
                  fontFamily: 'monospace',
                }}
              >
                On This Page
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '13.5px' }}>
                <a
                  href="#client-context"
                  style={{ color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  1. Executive Summary & Client
                </a>
                <a
                  href="#the-challenge"
                  style={{ color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  2. The Engineering Challenge
                </a>
                <a
                  href="#constraints"
                  style={{ color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  3. Constraints & Architecture
                </a>
                <a
                  href="#approach"
                  style={{ color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  4. Strategy & Sequencing
                </a>
                <a
                  href="#key-features"
                  style={{ color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  5. Deliverables & Features
                </a>
                <a
                  href="#tech-implementation"
                  style={{ color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  6. Technology Implementation
                </a>
                <a
                  href="#results"
                  style={{ color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  7. Results & Business Impact
                </a>
                <a
                  href="#key-takeaway"
                  style={{ color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  8. Architect Takeaway
                </a>
              </nav>
            </div>

            {/* 2. Direct Architect Engagement Card */}
            <div
              className="nm-corner-glow"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(254, 98, 0, 0.35)',
                borderRadius: '12px',
                padding: '22px 24px',
                boxShadow: '0 10px 30px -12px rgba(254, 98, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.02)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={18} color="#fe6200" />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#111111' }}>
                  Architecture Consultation
                </span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#55514c', margin: '0 0 16px 0' }}>
                Looking to build a similar high-performance platform or modernize your existing data systems?
              </p>
              <button
                onClick={handleDiscussClick}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '11px 18px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 4px 14px rgba(254, 98, 0, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cf5000')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fe6200')}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* 3. Verified Tech Stack Tags with SVGs */}
            {techStackList && techStackList.length > 0 && (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '12px',
                  padding: '22px 24px',
                  boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#77726d',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'monospace',
                  }}
                >
                  <Sparkles size={13} color="#fe6200" />
                  Verified Tech Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {techStackList.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        backgroundColor: '#f5f3ee',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        padding: '4px 9px',
                        borderRadius: '6px',
                      }}
                    >
                      {item.iconPath && (
                        <img
                          src={item.iconPath}
                          alt=""
                          aria-hidden="true"
                          style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                        />
                      )}
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* ========================================================
            RELATED CASE STUDIES STRIP
            ======================================================== */}
        {companionProjects.length > 0 && (
          <section
            style={{
              marginTop: '80px',
              paddingTop: '64px',
              borderTop: '1px solid #e4e2e1',
            }}
          >
            <div style={{ marginBottom: '28px' }}>
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#66615c',
                  marginBottom: '8px',
                  fontFamily: 'monospace',
                }}
              >
                Companion Projects
              </div>
              <h2
                style={{
                  fontSize: 'clamp(24px, 2.8vw, 34px)',
                  fontWeight: 800,
                  color: '#000000',
                  margin: 0,
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                }}
              >
                Related Case Studies
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '18px',
              }}
            >
              {companionProjects.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onNavigatePage('project', item.id)}
                  className="nm-corner-glow"
                  style={{
                    padding: '20px 24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    boxShadow: '0 6px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(254, 98, 0, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px -6px rgba(254, 98, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)';
                  }}
                >
                  <div style={{ paddingRight: '12px' }}>
                    <div
                      style={{
                        fontSize: '16.5px',
                        fontWeight: 700,
                        color: '#111111',
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        marginBottom: '4px',
                      }}
                    >
                      {item.projectName || item.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#77726d' }}>
                      {item.overview.industry} · {item.overview.client}
                    </div>
                  </div>
                  <div style={{ color: '#fe6200', flexShrink: 0 }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Shared Testimonials, Locations & Footer */}
      <Testimonials />
      <Footer onNavigate={(target) => onNavigatePage(target.replace('#', '') as PageType)} />

      <style>{`
        @media (max-width: 900px) {
          .nm-editorial-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .nm-editorial-sidebar {
            position: static !important;
            top: auto !important;
          }
        }
      `}</style>
    </article>
  );
};
