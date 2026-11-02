import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
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
          FULL-WIDTH EDITORIAL CONTAINER (Standard 1240px Canvas)
          Eliminates oversized side voids while maintaining pure typography
          ======================================================== */}
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '24px clamp(24px, 4vw, 48px) clamp(64px, 8vw, 100px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Back Link */}
        <div style={{ marginBottom: '28px' }}>
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
            HERO: Expansive 2-Column Editorial Spread
            Left: Headline, Overview & Key Numbers
            Right: Large Cover Visual
            ======================================================== */}
        <header
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'center',
            paddingBottom: 'clamp(48px, 6vw, 64px)',
          }}
          className="nm-hero-grid"
        >
          {/* Left Column: Title & Overview */}
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
                marginBottom: '16px',
              }}
            >
              <span>{data.category}</span>
              <span style={{ color: '#c4bfb6' }}>•</span>
              <span style={{ color: '#77726d' }}>Engineering Specification</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(36px, 4.8vw, 56px)',
                fontWeight: 800,
                color: '#000000',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: '0 0 20px 0',
              }}
            >
              {data.hero.headline}{' '}
              <span style={{ color: '#fe6200', fontStyle: 'italic' }}>
                {data.hero.headlineHighlight}
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(17px, 1.25vw, 19px)',
                lineHeight: 1.65,
                color: '#44403c',
                margin: '0 0 28px 0',
                fontWeight: 400,
                maxWidth: '640px',
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
                padding: '18px 0',
                borderTop: '1px solid #e4e2e1',
                borderBottom: '1px solid #e4e2e1',
                fontSize: '13.5px',
                color: '#55514c',
                marginBottom: '28px',
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
                href="#service-process"
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
                <span>Delivery Process</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large Featured Cover Visual */}
          {data.hero.heroImage && (
            <div>
              <div
                style={{
                  width: '100%',
                  height: 'clamp(300px, 34vw, 440px)',
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
                    marginTop: '10px',
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
            SECTION 1: THE PERSPECTIVE & STRATEGIC OVERVIEW
            Asymmetrical Editorial Spread:
            Left: Bold Section Statement & Key Takeaway Pullquote
            Right: In-Depth Narrative Prose
            ======================================================== */}
        <section
          style={{
            borderTop: '1px solid #e4e2e1',
            padding: 'clamp(48px, 6vw, 72px) 0',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '360px 1fr',
              gap: 'clamp(36px, 5vw, 64px)',
              alignItems: 'start',
            }}
            className="nm-editorial-row"
          >
            {/* Left Header & Pullquote */}
            <div>
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
                Perspective
              </div>

              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(26px, 3vw, 34px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.25,
                  margin: '0 0 24px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {data.overview.statement}
              </h2>

              {data.overview.keyTakeaway && (
                <blockquote
                  style={{
                    borderLeft: '3px solid #fe6200',
                    paddingLeft: '20px',
                    margin: '24px 0 0 0',
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

            {/* Right Detailed Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {data.overview.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.8,
                    color: '#33312e',
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: THE BOTTLENECKS WE ELIMINATE
            Left: The Production Reality & Direct Result
            Right: The Breakdown & Targeted Audience Roles
            ======================================================== */}
        {data.mainProblemSolved && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 72px) 0',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '360px 1fr',
                gap: 'clamp(36px, 5vw, 64px)',
                alignItems: 'start',
              }}
              className="nm-editorial-row"
            >
              {/* Left Column: Heading & Outcome */}
              <div>
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
                    fontSize: 'clamp(26px, 3vw, 34px)',
                    fontWeight: 800,
                    color: '#111111',
                    lineHeight: 1.25,
                    margin: '0 0 20px 0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Where Existing Systems Fail in Production
                </h2>

                <div style={{ borderLeft: '3px solid #fe6200', paddingLeft: '18px', marginTop: '20px' }}>
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

              {/* Right Column: Problem, Solution & Audience */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 10px 0',
                  }}
                >
                  The Core Friction
                </h3>
                <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 24px 0' }}>
                  {data.mainProblemSolved.problem}
                </p>

                <h3
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 10px 0',
                  }}
                >
                  How We Engineer It Differently
                </h3>
                <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 32px 0' }}>
                  {data.mainProblemSolved.solution}
                </p>

                {/* Who We Built This For */}
                {data.targetAudience && data.targetAudience.profiles && (
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
                      {data.targetAudience.heading || `Who We Built ${data.title} For`}
                    </h3>

                    <ul style={{ paddingLeft: '22px', margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {data.targetAudience.profiles.map((prof, pIdx) => (
                        <li key={pIdx} style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#33312e' }}>
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
            SECTION 3: CORE ENGINEERING CAPABILITIES
            Left: Section Header & Overview
            Right: Numbered Editorial Breakdown of Pillars
            ======================================================== */}
        {data.capabilities && data.capabilities.length > 0 && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 72px) 0',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '360px 1fr',
                gap: 'clamp(36px, 5vw, 64px)',
                alignItems: 'start',
              }}
              className="nm-editorial-row"
            >
              <div>
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
                  Our Expertise
                </div>

                <h2
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(26px, 3vw, 34px)',
                    fontWeight: 800,
                    color: '#111111',
                    lineHeight: 1.25,
                    margin: '0 0 16px 0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Core Engineering Pillars
                </h2>

                <p style={{ fontSize: '16px', color: '#66615c', lineHeight: 1.65, margin: 0 }}>
                  End-to-end {data.title.toLowerCase()}, from custom domain architecture to high-throughput production resilience.
                </p>
              </div>

              {/* Sequential Capabilities Stream */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                {data.capabilities.map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    style={{
                      borderBottom: cIdx === data.capabilities.length - 1 ? 'none' : '1px solid #e4e2e1',
                      paddingBottom: '28px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: '#fe6200',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '6px',
                      }}
                    >
                      Pillar 0{cIdx + 1}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 10px 0',
                      }}
                    >
                      {cap.title}
                    </h3>

                    <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#44403c', margin: '0 0 12px 0' }}>
                      {cap.description}
                    </p>

                    {cap.tags && cap.tags.length > 0 && (
                      <div style={{ fontSize: '13.5px', color: '#77726d' }}>
                        <strong style={{ color: '#44403c', fontWeight: 600 }}>Technologies:</strong> {cap.tags.join(' · ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 4: DELIVERY LIFECYCLE & TIMELINE
            Left: Sprint Cadence & Total Duration
            Right: Chronological Stages 01 to 04
            ======================================================== */}
        {data.process && data.process.length > 0 && (
          <section
            id="service-process"
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 72px) 0',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '360px 1fr',
                gap: 'clamp(36px, 5vw, 64px)',
                alignItems: 'start',
              }}
              className="nm-editorial-row"
            >
              <div>
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
                  Delivery Cadence
                </div>

                <h2
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(26px, 3vw, 34px)',
                    fontWeight: 800,
                    color: '#111111',
                    lineHeight: 1.25,
                    margin: '0 0 16px 0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  How We Deliver {data.title}
                </h2>

                {data.timeline?.totalDuration && (
                  <div style={{ fontSize: '15.5px', color: '#66615c', lineHeight: 1.65 }}>
                    <p style={{ margin: '0 0 12px 0' }}>
                      Standard engagement timeline:{' '}
                      <strong style={{ color: '#111111' }}>{data.timeline.totalDuration}</strong>.
                    </p>
                    <p style={{ margin: 0 }}>{data.timeline.sprintCadence}</p>
                  </div>
                )}
              </div>

              {/* Chronological Stages */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {data.process.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      borderBottom: sIdx === data.process.length - 1 ? 'none' : '1px solid #e4e2e1',
                      paddingBottom: '28px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                          fontSize: '20px',
                          fontWeight: 800,
                          color: '#fe6200',
                        }}
                      >
                        Stage 0{sIdx + 1}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                          fontSize: '21px',
                          fontWeight: 700,
                          color: '#111111',
                          margin: 0,
                        }}
                      >
                        {st.title}
                      </h3>
                    </div>

                    <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#44403c', margin: '0 0 12px 0' }}>
                      {st.description}
                    </p>

                    {st.deliverables && st.deliverables.length > 0 && (
                      <div style={{ fontSize: '13.5px', color: '#77726d' }}>
                        <strong style={{ color: '#44403c', fontWeight: 600 }}>Sign-off Requirements:</strong> {st.deliverables.join(' · ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 5: PRODUCTION TECH & CONCRETE DELIVERABLES
            Left: Handover Guarantee & Philosophy
            Right: Production Stack List & Concrete Deliverables
            ======================================================== */}
        {data.techStack && data.techStack.length > 0 && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 72px) 0',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '360px 1fr',
                gap: 'clamp(36px, 5vw, 64px)',
                alignItems: 'start',
              }}
              className="nm-editorial-row"
            >
              <div>
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
                    fontSize: 'clamp(26px, 3vw, 34px)',
                    fontWeight: 800,
                    color: '#111111',
                    lineHeight: 1.25,
                    margin: '0 0 16px 0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Production Stack & What You Own
                </h2>

                <p style={{ fontSize: '16px', color: '#66615c', lineHeight: 1.65, margin: 0 }}>
                  100% direct handover of every code repository, CI/CD pipeline, and migration script. No proprietary licensing, no lock-in.
                </p>
              </div>

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
                  Production Technologies
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {data.techStack.map((cat, catIdx) => (
                    <div key={catIdx} style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#33312e' }}>
                      <strong style={{ color: '#111111' }}>{cat.category}:</strong> {cat.items.join(', ')}
                    </div>
                  ))}
                </div>

                {data.deliverables && data.deliverables.length > 0 && (
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 14px 0',
                      }}
                    >
                      Concrete Deliverables Handed Over
                    </h3>
                    <ul style={{ paddingLeft: '22px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {data.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '16px', lineHeight: 1.7, color: '#33312e' }}>
                          <strong style={{ color: '#111111' }}>{del.title}:</strong> {del.description}
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
            SECTION 6: WHY ENGINEERING LEADERS PICK NEOMINDS
            Left: Section Statement
            Right: 4 Core Principles
            ======================================================== */}
        {data.whyChooseThisService && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 72px) 0',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '360px 1fr',
                gap: 'clamp(36px, 5vw, 64px)',
                alignItems: 'start',
              }}
              className="nm-editorial-row"
            >
              <div>
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
                  Operating Standards
                </div>

                <h2
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: 'clamp(26px, 3vw, 34px)',
                    fontWeight: 800,
                    color: '#111111',
                    lineHeight: 1.25,
                    margin: '0 0 16px 0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {data.whyChooseThisService.title}
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                {data.whyChooseThisService.reasons.map((r, rIdx) => (
                  <div key={rIdx}>
                    <h3
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 6px 0',
                      }}
                    >
                      {r.point}
                    </h3>
                    <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#44403c', margin: 0 }}>
                      {r.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 7: FREQUENTLY ASKED QUESTIONS
            Left: FAQ Header
            Right: Q&A Items
            ======================================================== */}
        {data.faqs && data.faqs.length > 0 && (
          <section
            style={{
              borderTop: '1px solid #e4e2e1',
              padding: 'clamp(48px, 6vw, 72px) 0',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '360px 1fr',
                gap: 'clamp(36px, 5vw, 64px)',
                alignItems: 'start',
              }}
              className="nm-editorial-row"
            >
              <div>
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
                    fontSize: 'clamp(26px, 3vw, 34px)',
                    fontWeight: 800,
                    color: '#111111',
                    lineHeight: 1.25,
                    margin: 0,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Frequently Asked Questions
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {data.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      borderBottom: fIdx === data.faqs.length - 1 ? 'none' : '1px solid #e4e2e1',
                      paddingBottom: '24px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 10px 0',
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#44403c', margin: 0 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 8: DISCOVERY / PROPOSAL FORM
            Left: Direct Engagement Statement
            Right: Blended Form Inputs
            ======================================================== */}
        <section
          id="service-contact"
          style={{
            borderTop: '1px solid #e4e2e1',
            padding: 'clamp(48px, 6vw, 72px) 0',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '360px 1fr',
              gap: 'clamp(36px, 5vw, 64px)',
              alignItems: 'start',
            }}
            className="nm-editorial-row"
          >
            <div>
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
                  fontSize: 'clamp(26px, 3vw, 36px)',
                  fontWeight: 800,
                  color: '#111111',
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {data.cta.headline}
              </h2>

              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#44403c', margin: 0 }}>
                {data.cta.description}
              </p>
            </div>

            <div>
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
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="nm-contact-row">
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
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#222222', marginBottom: '6px' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Health"
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
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 9: RELATED DISCIPLINES
            ======================================================== */}
        {relatedItems.length > 0 && (
          <section style={{ borderTop: '1px solid #e4e2e1', paddingTop: '48px' }}>
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
                margin: '0 0 20px 0',
              }}
            >
              Related Engineering Services
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {relatedItems.map((item, rIdx) => (
                <div
                  key={rIdx}
                  onClick={() => onNavigatePage(item.slug)}
                  style={{
                    padding: '16px 0',
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
                    <p style={{ fontSize: '14px', color: '#77726d', margin: 0 }}>
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
          .nm-editorial-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 680px) {
          .nm-contact-row {
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
