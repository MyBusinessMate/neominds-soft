import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Send, CheckCircle2, Check, Calendar, Code } from 'lucide-react';
import { UniversalServiceData } from '../../types/service';
import { Testimonials } from '../Testimonials';
import { Footer } from '../Footer';

interface ServicePageProps {
  data: UniversalServiceData;
  allServices: Record<string, UniversalServiceData>;
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  data,
  allServices,
  onNavigateHome: _onNavigateHome,
  onNavigatePage,
  onSuccessToast,
  onOpenLegal,
}) => {
  // Active stage for "How We Deliver" interactive stepper
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectScope: '',
    ndaRequired: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccessToast('Your inquiry has been received. A Principal Architect will reach out within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectScope: '',
        ndaRequired: false,
      });
    }, 600);
  };

  // Compute related service objects from slugs
  const relatedItems = data.relatedServiceSlugs
    .map((slug) => allServices[slug])
    .filter(Boolean)
    .map((s) => ({
      slug: s.slug,
      title: s.title,
      tagline: s.tagline,
      category: s.category,
    }));

  const activeStage = data.process && data.process.length > 0
    ? data.process[Math.min(activeStageIndex, data.process.length - 1)]
    : null;

  return (
    <div
      style={{
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        color: '#111111',
        minHeight: '100vh',
        paddingTop: '80px',
        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
      }}
    >
      {/* ========================================================
          FULL-WIDTH EDITORIAL CANVAS (Standard 1240px Container)
          Balanced layouts filling the canvas with zero half-empty voids
          ======================================================== */}
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '24px clamp(20px, 4vw, 40px) clamp(64px, 8vw, 100px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <button
            onClick={() => onNavigatePage('services')}
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
            <span>All Services</span>
          </button>
        </div>

        {/* ========================================================
            HERO: 2-Column Balanced Spread
            Left: Headline, Description & Metrics
            Right: Large Cover Visual
            ======================================================== */}
        <header
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 'clamp(32px, 5vw, 60px)',
            alignItems: 'center',
            paddingBottom: 'clamp(48px, 6vw, 64px)',
          }}
          className="nm-hero-grid"
        >
          {/* Left Column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fe6200',
                marginBottom: '14px',
              }}
            >
              <span>{data.category}</span>
              <span style={{ color: '#c4bfb6' }}>•</span>
              <span style={{ color: '#77726d' }}>Engineering Specification</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(36px, 4.6vw, 54px)',
                fontWeight: 800,
                color: '#000000',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: '0 0 18px 0',
              }}
            >
              {data.hero.headline}{' '}
              <span style={{ color: '#fe6200', fontStyle: 'italic' }}>
                {data.hero.headlineHighlight}
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(17px, 1.2vw, 18.5px)',
                lineHeight: 1.65,
                color: '#44403c',
                margin: '0 0 24px 0',
                fontWeight: 400,
              }}
            >
              {data.hero.description}
            </p>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 'clamp(16px, 3vw, 28px)',
                padding: '16px 0',
                borderTop: '1px solid #e4e2e1',
                borderBottom: '1px solid #e4e2e1',
                fontSize: '13.5px',
                color: '#55514c',
                marginBottom: '26px',
              }}
            >
              {data.metrics.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      fontSize: '19px',
                      fontWeight: 800,
                      color: '#fe6200',
                    }}
                  >
                    {m.value}
                  </span>
                  <span style={{ color: '#77726d', fontWeight: 500 }}>{m.label}</span>
                </div>
              ))}
            </div>

            {/* Direct Action Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <a
                href="#service-contact"
                style={{
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  borderRadius: '8px',
                  padding: '13px 26px',
                  fontSize: '15px',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cf5000')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fe6200')}
              >
                <span>Book Discovery Call</span>
              </a>

              <a
                href="#service-pillars"
                style={{
                  color: '#111111',
                  border: '1px solid #d0ccc0',
                  borderRadius: '8px',
                  padding: '13px 24px',
                  fontWeight: 600,
                  fontSize: '15px',
                  background: '#faf6f0',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fe6200')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#d0ccc0')}
              >
                <span>Core Capabilities</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Cover */}
          {data.hero.heroImage && (
            <div>
              <div
                style={{
                  width: '100%',
                  height: 'clamp(280px, 32vw, 420px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#e4e2e1',
                }}
              >
                <img
                  src={data.hero.heroImage}
                  alt={data.hero.heroImageCaption || data.title}
                  loading="eager"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
              {data.hero.heroImageCaption && (
                <div
                  style={{
                    marginTop: '8px',
                    fontSize: '13px',
                    color: '#77726d',
                    fontStyle: 'italic',
                  }}
                >
                  {data.hero.heroImageCaption}
                </div>
              )}
            </div>
          )}
        </header>

        {/* ========================================================
            SECTION 1: STRATEGIC PERSPECTIVE
            Top: Statement Headline across the full width
            Below: 2 balanced prose columns filling the width
            ======================================================== */}
        <section
          style={{
            borderTop: '1px solid #e4e2e1',
            padding: 'clamp(48px, 6vw, 68px) 0',
          }}
        >
          <div style={{ maxWidth: '960px', marginBottom: '28px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#fe6200',
                marginBottom: '10px',
              }}
            >
              Strategic Perspective
            </div>

            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(28px, 3.2vw, 38px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {data.overview.statement}
            </h2>
          </div>

          {/* 2 Balanced Prose Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 5vw, 60px)',
              alignItems: 'start',
            }}
            className="nm-two-col"
          >
            <div>
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.8,
                  color: '#33312e',
                  margin: 0,
                }}
              >
                {data.overview.paragraphs[0]}
              </p>
            </div>

            <div>
              {data.overview.paragraphs[1] && (
                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.8,
                    color: '#33312e',
                    margin: '0 0 20px 0',
                  }}
                >
                  {data.overview.paragraphs[1]}
                </p>
              )}

              {data.overview.keyTakeaway && (
                <blockquote
                  style={{
                    borderLeft: '3px solid #fe6200',
                    paddingLeft: '18px',
                    margin: 0,
                    fontSize: '16.5px',
                    lineHeight: 1.65,
                    color: '#111111',
                    fontStyle: 'italic',
                    fontWeight: 600,
                  }}
                >
                  "{data.overview.keyTakeaway}"
                </blockquote>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: THE BOTTLENECK
            Top: Section Headline across full width
            Below: 2 balanced columns (Problem/Result Left, Solution/Audience Right)
            ======================================================== */}
        {data.mainProblemSolved && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 68px) 0',
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#fe6200',
                  marginBottom: '10px',
                }}
              >
                The Bottleneck
              </div>

              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(28px, 3.2vw, 38px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.25,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                The Friction in Production & How We Eliminate It
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(32px, 5vw, 60px)',
                alignItems: 'start',
              }}
              className="nm-two-col"
            >
              {/* Left Column: Problem & Result */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 12px 0',
                  }}
                >
                  Where Existing Systems Fail
                </h3>
                <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 20px 0' }}>
                  {data.mainProblemSolved.problem}
                </p>

                <div style={{ borderLeft: '3px solid #fe6200', paddingLeft: '18px', marginTop: '16px' }}>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#fe6200',
                      letterSpacing: '0.08em',
                      marginBottom: '4px',
                    }}
                  >
                    Direct Result
                  </div>
                  <div style={{ fontSize: '15.5px', fontWeight: 600, color: '#111111', lineHeight: 1.55 }}>
                    {data.mainProblemSolved.result}
                  </div>
                </div>
              </div>

              {/* Right Column: Solution & Audience */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 12px 0',
                  }}
                >
                  How We Engineer It Differently
                </h3>
                <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 24px 0' }}>
                  {data.mainProblemSolved.solution}
                </p>

                {data.targetAudience && data.targetAudience.profiles && (
                  <div>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#77726d',
                        letterSpacing: '0.08em',
                        marginBottom: '10px',
                      }}
                    >
                      {data.targetAudience.heading || `Engineered For`}
                    </div>
                    <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {data.targetAudience.profiles.map((prof, pIdx) => (
                        <li key={pIdx} style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#33312e' }}>
                          <strong style={{ color: '#111111' }}>{prof.role}:</strong> {prof.situation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 3: OUR CORE ENGINEERING PILLARS
            Exact visual match to reference image:
            - Centered — OUR EXPERTISE — with orange rules
            - Centered BL Pylon Serif heading and subtitle
            - 2x2 grid with icon container (< / >), PILLAR 0X, heading,
              description, and rounded tag pills
            - Subtle horizontal divider between rows
            ======================================================== */}
        {data.capabilities && data.capabilities.length > 0 && (
          <section
            id="service-pillars"
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(56px, 7vw, 76px) 0',
            }}
          >
            {/* Header centered */}
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ width: '36px', height: '1.5px', backgroundColor: '#fe6200' }} />
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#fe6200',
                  }}
                >
                  Our Expertise
                </span>
                <span style={{ width: '36px', height: '1.5px', backgroundColor: '#fe6200' }} />
              </div>

              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(30px, 3.6vw, 42px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.2,
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                Our Core Engineering Pillars
              </h2>

              <p style={{ fontSize: '16.5px', color: '#66615c', margin: 0, lineHeight: 1.6 }}>
                End-to-end {data.title.toLowerCase()}, from custom applications to performance engineering.
              </p>
            </div>

            {/* 2-Column Balanced Grid of Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(32px, 5vw, 60px) clamp(32px, 5vw, 60px)',
              }}
              className="nm-two-col"
            >
              {data.capabilities.map((cap, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    paddingBottom: '28px',
                    borderBottom: '1px solid #e4e2e1',
                  }}
                >
                  {/* Icon Square */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: '#fcf2ea',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '4px',
                    }}
                  >
                    <Code size={22} color="#fe6200" strokeWidth={2.5} />
                  </div>

                  {/* Pillar Content */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: '#fe6200',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        marginBottom: '6px',
                      }}
                    >
                      Pillar 0{cIdx + 1}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: '21px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 8px 0',
                        lineHeight: 1.3,
                      }}
                    >
                      {cap.title}
                    </h3>

                    <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#44403c', margin: '0 0 14px 0' }}>
                      {cap.description}
                    </p>

                    {cap.tags && cap.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {cap.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              backgroundColor: '#fbf4ed',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: 600,
                              color: '#44403c',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 4: HOW WE DELIVER (INTERACTIVE STEPPER)
            Exact visual match to reference image:
            - Centered title & subtitle
            - Horizontal tab bar: 01, 02, 03, 04 with active orange line
            - 2-column active stage details:
              Left: Large Stage Title & Description
              Right: Milestone Sign-off Requirements with checkmarks
            ======================================================== */}
        {data.process && data.process.length > 0 && (
          <section
            id="service-process"
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(56px, 7vw, 76px) 0',
            }}
          >
            {/* Centered Heading */}
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(30px, 3.6vw, 42px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.2,
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                How We Deliver {data.title}
              </h2>

              <p style={{ fontSize: '16.5px', color: '#66615c', margin: 0, lineHeight: 1.6 }}>
                An agile, multi-stage delivery framework engineered to eliminate delivery drift and achieve zero-defect launches.
              </p>
            </div>

            {/* Stepper Tabs Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${data.process.length}, 1fr)`,
                borderBottom: '1px solid #e4e2e1',
                marginBottom: '40px',
              }}
              className="nm-stage-tabs"
            >
              {data.process.map((step, sIdx) => {
                const isActive = sIdx === activeStageIndex;
                return (
                  <button
                    key={sIdx}
                    onClick={() => setActiveStageIndex(sIdx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px 12px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: isActive ? '3px solid #fe6200' : '3px solid transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      transition: 'all 0.2s',
                    }}
                  >
                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 800,
                        backgroundColor: isActive ? '#fe6200' : '#f0ece6',
                        color: isActive ? '#ffffff' : '#77726d',
                        transition: 'all 0.2s',
                      }}
                    >
                      0{sIdx + 1}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: '10.5px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: isActive ? '#fe6200' : '#88847f',
                        }}
                      >
                        Stage 0{sIdx + 1}
                      </div>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: isActive ? '#111111' : '#66615c',
                        }}
                      >
                        {step.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Details */}
            {activeStage && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(32px, 5vw, 60px)',
                  alignItems: 'start',
                }}
                className="nm-two-col"
              >
                {/* Left Column: Stage Overview */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      fontSize: 'clamp(24px, 2.6vw, 32px)',
                      fontWeight: 800,
                      color: '#111111',
                      margin: '0 0 16px 0',
                      lineHeight: 1.25,
                    }}
                  >
                    {activeStage.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '17px',
                      lineHeight: 1.75,
                      color: '#44403c',
                      margin: 0,
                    }}
                  >
                    {activeStage.description}
                  </p>
                </div>

                {/* Right Column: Milestone Sign-offs */}
                <div>
                  <div
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#111111',
                      marginBottom: '16px',
                    }}
                  >
                    Milestone Sign-off Requirements
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {activeStage.deliverables && activeStage.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '14px 0',
                          borderBottom: '1px solid #e4e2e1',
                          fontSize: '15.5px',
                          fontWeight: 600,
                          color: '#111111',
                        }}
                      >
                        <span style={{ color: '#fe6200', flexShrink: 0 }}>
                          <CheckCircle2 size={18} />
                        </span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ========================================================
            SECTION 5: REALISTIC PROJECT TIMELINE
            Exact visual match to reference image:
            - Centered title & subtitle
            - 4 columns across desktop with orange top rule
            - Step 0X badge on left, calendar icon + Weeks on right
            - Bold phase title + concise phase description
            ======================================================== */}
        {data.timeline && data.timeline.phases && data.timeline.phases.length > 0 && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(56px, 7vw, 76px) 0',
            }}
          >
            {/* Header centered */}
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(30px, 3.6vw, 42px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.2,
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                Realistic Project Timeline: {data.timeline.totalDuration} Typical Delivery
              </h2>

              <p style={{ fontSize: '16.5px', color: '#66615c', margin: 0, lineHeight: 1.6 }}>
                Two-week agile release cycles with live staging demos and direct Slack collaboration.
              </p>
            </div>

            {/* 4 Equal Columns */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(20px, 2.5vw, 32px)',
              }}
              className="nm-four-col"
            >
              {data.timeline.phases.map((ph, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    borderTop: '2px solid #fe6200',
                    paddingTop: '18px',
                  }}
                >
                  {/* Badge Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: '#fbece2',
                        color: '#fe6200',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                      }}
                    >
                      STEP 0{pIdx + 1}
                    </span>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        color: '#fe6200',
                        fontSize: '12.5px',
                        fontWeight: 700,
                      }}
                    >
                      <Calendar size={13} />
                      <span>{ph.duration}</span>
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      fontSize: '17.5px',
                      fontWeight: 700,
                      color: '#111111',
                      margin: '0 0 10px 0',
                      lineHeight: 1.35,
                    }}
                  >
                    {ph.phase}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#44403c', margin: 0 }}>
                    {ph.details}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 6: FEATURED CLIENT TRANSFORMATIONS
            Exact visual match to reference image:
            - Header: Title on left, "Browse Full Portfolio →" on right
            - 3 White Cards with:
              - Category tag (peach) + client name
              - BL Pylon Serif title + DM Sans description
              - Charcoal stat box (#352f2c) with green SLA metric (< 150ms / 99.99%)
              - Tech tag pills
              - Full-width orange outline CTA button
            ======================================================== */}
        {data.caseStudies && data.caseStudies.length > 0 && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(56px, 7vw, 76px) 0',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '36px',
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(28px, 3.4vw, 40px)',
                  fontWeight: 800,
                  color: '#111111',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Featured Client Transformations
              </h2>

              <button
                onClick={() => onNavigatePage('portfolio')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#faf6f0',
                  border: '1px solid #d0ccc0',
                  borderRadius: '999px',
                  padding: '9px 18px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: '#111111',
                  cursor: 'pointer',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fe6200')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#d0ccc0')}
              >
                <span>Browse Full Portfolio</span>
                <span style={{ fontSize: '15px' }}>→</span>
              </button>
            </div>

            {/* 3 Responsive Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {data.caseStudies.slice(0, 3).map((cs, csIdx) => (
                <div
                  key={csIdx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e8e4de',
                    padding: '28px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Top Row: Tag + Client */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        marginBottom: '16px',
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: '#fbece2',
                          color: '#fe6200',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {cs.category}
                      </span>
                      <span style={{ fontSize: '13px', color: '#77726d', fontWeight: 500 }}>
                        {cs.client}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 12px 0',
                        lineHeight: 1.3,
                      }}
                    >
                      {cs.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '14.5px',
                        lineHeight: 1.6,
                        color: '#44403c',
                        margin: '0 0 20px 0',
                      }}
                    >
                      {cs.description}
                    </p>
                  </div>

                  <div>
                    {/* Dark Charcoal Stat Box */}
                    <div
                      style={{
                        backgroundColor: '#352f2c',
                        borderRadius: '10px',
                        padding: '16px 18px',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        marginBottom: '18px',
                      }}
                    >
                      {/* Metric with Green Left Bar */}
                      <div
                        style={{
                          borderLeft: '4px solid #10b981',
                          paddingLeft: '12px',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '22px',
                            fontWeight: 800,
                            color: '#10b981',
                            lineHeight: 1.1,
                          }}
                        >
                          {cs.metric}
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#9ca3af', marginTop: '2px' }}>
                          {cs.metricLabel}
                        </div>
                      </div>

                      {/* Secondary Stat */}
                      <div
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 600,
                          color: '#ffffff',
                          textAlign: 'right',
                          lineHeight: 1.35,
                        }}
                      >
                        {cs.stats}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    {cs.tags && cs.tags.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                          marginBottom: '20px',
                        }}
                      >
                        {cs.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              backgroundColor: '#f1efeb',
                              padding: '4px 9px',
                              borderRadius: '5px',
                              fontSize: '12px',
                              color: '#55514c',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bottom CTA Button */}
                    <a
                      href="#service-contact"
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'center',
                        backgroundColor: '#fef0e6',
                        border: '1.5px solid #fe6200',
                        color: '#fe6200',
                        borderRadius: '8px',
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        boxSizing: 'border-box',
                        transition: 'all 0.2s',
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fe6200';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#fef0e6';
                        e.currentTarget.style.color = '#fe6200';
                      }}
                    >
                      Request Solution Architecture Brief ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 7: WHY ENGINEERING LEADERS PICK NEOMINDS
            Exact visual match to reference image:
            - Centered title at top: Why Engineering Leaders Pick Neominds for [Service]
            - 4 columns across desktop with orange top rule
            - Orange circle checkmark icon + bold title + description
            - Spans full width, ZERO empty left void!
            ======================================================== */}
        {data.whyChooseThisService && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(56px, 7vw, 76px) 0',
            }}
          >
            {/* Header across full width (Centered) */}
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(30px, 3.6vw, 42px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.2,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                {data.whyChooseThisService.title}
              </h2>
            </div>

            {/* 4 Equal Columns */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 'clamp(24px, 3vw, 36px)',
              }}
            >
              {data.whyChooseThisService.reasons.map((r, rIdx) => (
                <div
                  key={rIdx}
                  style={{
                    borderTop: '2px solid #fe6200',
                    paddingTop: '18px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ color: '#fe6200', marginTop: '2px', flexShrink: 0 }}>
                      <CheckCircle2 size={18} />
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: 0,
                        lineHeight: 1.35,
                      }}
                    >
                      {r.point}
                    </h3>
                  </div>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#44403c', margin: 0, paddingLeft: '28px' }}>
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 8: PRODUCTION TECHNOLOGIES & DELIVERABLES
            Top: Headline & Handover Statement
            Below: 2 Balanced Columns filling the 1240px width
            ======================================================== */}
        {data.techStack && data.techStack.length > 0 && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 68px) 0',
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#fe6200',
                  marginBottom: '10px',
                }}
              >
                Handover Guarantee
              </div>

              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(28px, 3.2vw, 38px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.25,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Production Technologies & What You Own
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(32px, 5vw, 60px)',
                alignItems: 'start',
              }}
              className="nm-two-col"
            >
              {/* Left Column: Stack */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 16px 0',
                  }}
                >
                  Verified Production Stack
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {data.techStack.map((cat, catIdx) => (
                    <div key={catIdx} style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#33312e', borderBottom: '1px solid #e4e2e1', paddingBottom: '10px' }}>
                      <strong style={{ color: '#111111' }}>{cat.category}:</strong> {cat.items.join(', ')}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Tangible Deliverables */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 16px 0',
                  }}
                >
                  100% Direct Code Handover
                </h3>

                <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#44403c', margin: '0 0 20px 0' }}>
                  Every repository, database migration script, and deployment workflow belongs entirely to your team. Zero proprietary lock-in.
                </p>

                {data.deliverables && data.deliverables.length > 0 && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {data.deliverables.map((del, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15.5px', lineHeight: 1.6, color: '#33312e' }}>
                        <span style={{ color: '#fe6200', marginTop: '3px', flexShrink: 0 }}>
                          <Check size={16} strokeWidth={2.5} />
                        </span>
                        <div>
                          <strong style={{ color: '#111111' }}>{del.title}:</strong> {del.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 9: FREQUENTLY ASKED QUESTIONS
            Top: Headline across full width
            Below: 2 Balanced Columns of FAQs
            ======================================================== */}
        {data.faqs && data.faqs.length > 0 && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 68px) 0',
            }}
          >
            <div style={{ marginBottom: '36px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#fe6200',
                  marginBottom: '10px',
                }}
              >
                Common Questions
              </div>

              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(28px, 3.2vw, 38px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.25,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Frequently Asked Questions About {data.title}
              </h2>
            </div>

            {/* 2-Column Balanced FAQ Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(32px, 5vw, 60px)',
              }}
              className="nm-two-col"
            >
              {data.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  style={{
                    borderTop: '1px solid #e4e2e1',
                    paddingTop: '20px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      fontSize: '19.5px',
                      fontWeight: 700,
                      color: '#111111',
                      margin: '0 0 10px 0',
                      lineHeight: 1.35,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#44403c', margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 10: DISCOVERY & PROPOSAL FORM
            Top: Headline & Description across full width
            Below: 2-Column Balanced Form Spread
            ======================================================== */}
        <section
          id="service-contact"
          style={{
            borderTop: '1px solid #e4e2e1',
            padding: 'clamp(48px, 6vw, 68px) 0',
          }}
        >
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#fe6200',
                marginBottom: '10px',
              }}
            >
              Direct Engagement
            </div>

            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(28px, 3.2vw, 38px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 10px 0',
                letterSpacing: '-0.02em',
              }}
            >
              {data.cta.headline}
            </h2>

            <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: '#44403c', margin: 0, maxWidth: '780px' }}>
              {data.cta.description}
            </p>
          </div>

          {isSubmitted ? (
            <div style={{ padding: '24px 0', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ color: '#fe6200' }}>
                <CheckCircle2 size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 4px 0', color: '#111111' }}>
                  Request Received
                </h3>
                <p style={{ fontSize: '15px', color: '#66615c', margin: 0 }}>
                  A Principal Architect will review your scope and reply within one business day.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '18px' }} className="nm-form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#222222', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: '#faf6f0',
                      border: '1px solid #d0ccc0',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: '#111111',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#222222', marginBottom: '6px' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: '#faf6f0',
                      border: '1px solid #d0ccc0',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: '#111111',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#222222', marginBottom: '6px' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: '#faf6f0',
                      border: '1px solid #d0ccc0',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: '#111111',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#222222', marginBottom: '6px' }}>
                  Project Overview & Goals *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you are building, your timeline, and any existing tech constraints..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#faf6f0',
                    border: '1px solid #d0ccc0',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  id="srv-nda"
                  checked={formData.ndaRequired}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  style={{ width: '16px', height: '16px', accentColor: '#fe6200', cursor: 'pointer' }}
                />
                <label htmlFor="srv-nda" style={{ fontSize: '14px', color: '#55514c', cursor: 'pointer' }}>
                  Need an NDA signed first? We sign it before our technical discussion.
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    backgroundColor: '#fe6200',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: 'background-color 0.2s',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = '#cf5000';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = '#fe6200';
                  }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending...' : data.cta.buttonText}</span>
                </button>
              </div>
            </form>
          )}
        </section>

        {/* ========================================================
            SECTION 11: RELATED DISCIPLINES
            ======================================================== */}
        {relatedItems.length > 0 && (
          <section style={{ borderTop: '1px solid #e4e2e1', paddingTop: '48px' }}>
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#fe6200',
                  marginBottom: '10px',
                }}
              >
                Related Disciplines
              </div>

              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#111111',
                  margin: 0,
                }}
              >
                Related Engineering Services
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
              }}
            >
              {relatedItems.map((item, rIdx) => (
                <div
                  key={rIdx}
                  onClick={() => onNavigatePage(item.slug)}
                  style={{
                    padding: '18px 0',
                    borderBottom: '1px solid #e4e2e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'padding-left 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = '8px')}
                  onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = '0px')}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 4px 0',
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#77726d', margin: 0 }}>
                      {item.tagline}
                    </p>
                  </div>
                  <div style={{ color: '#fe6200' }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Global Client Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer onNavigate={onNavigatePage} onOpenLegal={onOpenLegal} />

      <style>{`
        @media (max-width: 960px) {
          .nm-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .nm-two-col {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .nm-four-col {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
          .nm-form-row {
            grid-template-columns: 1fr !important;
          }
          .nm-stage-tabs {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 600px) {
          .nm-four-col {
            grid-template-columns: 1fr !important;
          }
          .nm-stage-tabs {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

// Container component that encapsulates service registry lookup so the main bundle stays lightweight
import { UNIVERSAL_SERVICES_MAP } from '../../data/universalServicesRegistry';

export interface ServicePageContainerProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const ServicePageContainer: React.FC<ServicePageContainerProps> = ({
  slug,
  ...rest
}) => {
  const serviceData = UNIVERSAL_SERVICES_MAP[slug];
  if (!serviceData) return null;
  return (
    <ServicePage
      data={serviceData}
      allServices={UNIVERSAL_SERVICES_MAP}
      {...rest}
    />
  );
};

export default ServicePageContainer;
