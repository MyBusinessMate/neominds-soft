import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Send, CheckCircle2, Calendar, Clock, BookOpen, Check } from 'lucide-react';
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

  // Primary featured case study for the editorial narrative
  const primaryCaseStudy = data.caseStudies && data.caseStudies.length > 0
    ? data.caseStudies[0]
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
          EDITORIAL CONTAINER: 80% Blog Style / 20% Creative
          Focused 880px reading container with natural editorial flow
          ======================================================== */}
      <article
        style={{
          maxWidth: '880px',
          margin: '0 auto',
          padding: '24px 24px 80px',
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
            <span>All Engineering Services</span>
          </button>
        </div>

        {/* ========================================================
            ARTICLE HEADER (Blog Style)
            ======================================================== */}
        <header style={{ marginBottom: '36px' }}>
          {/* Eyebrow & Read Time */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fe6200',
                backgroundColor: '#fbf0e8',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              {data.category}
            </span>
            <span style={{ color: '#c4bfb6' }}>•</span>
            <span style={{ fontSize: '13px', color: '#77726d', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <BookOpen size={13} />
              Engineering Whitepaper
            </span>
            <span style={{ color: '#c4bfb6' }}>•</span>
            <span style={{ fontSize: '13px', color: '#77726d', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={13} />
              7 min read
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(34px, 4.8vw, 50px)',
              fontWeight: 800,
              color: '#000000',
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              margin: '0 0 18px 0',
            }}
          >
            {data.hero.headline}{' '}
            <span style={{ color: '#fe6200', fontStyle: 'italic' }}>
              {data.hero.headlineHighlight}
            </span>
          </h1>

          {/* Subtitle / Article Lead */}
          <p
            style={{
              fontSize: 'clamp(18px, 1.3vw, 20px)',
              lineHeight: 1.6,
              color: '#3f3b37',
              margin: '0 0 24px 0',
              fontWeight: 400,
            }}
          >
            {data.hero.description}
          </p>

          {/* Byline / Author Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid #e4e2e1',
              borderBottom: '1px solid #e4e2e1',
              padding: '14px 0',
              gap: '16px',
              flexWrap: 'wrap',
              fontSize: '13px',
              color: '#77726d',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '13px',
                }}
              >
                N
              </div>
              <div>
                <strong style={{ color: '#111111', fontWeight: 600 }}>Neominds Engineering</strong>
                <span style={{ margin: '0 6px', color: '#c4bfb6' }}>·</span>
                <span>Principal Systems Architecture Group</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={13} />
                Updated November 2026
              </span>
            </div>
          </div>
        </header>

        {/* Hero Cover Visual (Blog Article Cover) */}
        {data.hero.heroImage && (
          <figure style={{ margin: '0 0 40px 0' }}>
            <div
              style={{
                width: '100%',
                height: 'clamp(280px, 38vw, 420px)',
                borderRadius: '8px',
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
              <figcaption
                style={{
                  marginTop: '8px',
                  fontSize: '13px',
                  color: '#77726d',
                  fontStyle: 'italic',
                  textAlign: 'left',
                }}
              >
                Figure 1: {data.hero.heroImageCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* ========================================================
            EXECUTIVE SUMMARY (Blog TL;DR Box)
            ======================================================== */}
        <section
          style={{
            backgroundColor: '#f7f4ed',
            border: '1px solid #e6e2da',
            borderLeft: '4px solid #fe6200',
            borderRadius: '6px',
            padding: '24px 28px',
            marginBottom: '44px',
          }}
        >
          <div
            style={{
              fontSize: '11.5px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#fe6200',
              marginBottom: '10px',
            }}
          >
            Executive Summary & Architecture Benchmarks
          </div>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#2a2724',
              margin: '0 0 16px 0',
              fontWeight: 500,
            }}
          >
            {data.overview.statement}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              paddingTop: '14px',
              borderTop: '1px solid #e8e3d8',
            }}
          >
            {data.metrics.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#fe6200',
                  }}
                >
                  {m.value}
                </span>
                <span style={{ fontSize: '13px', color: '#55514c', fontWeight: 500 }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 1: THE BOTTLENECK & PRODUCTION FRICTION
            ======================================================== */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(24px, 2.8vw, 32px)',
              fontWeight: 800,
              color: '#111111',
              lineHeight: 1.25,
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            The Engineering Challenge: Why Existing Systems Break at Scale
          </h2>

          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 18px 0' }}>
            {data.overview.paragraphs[0]}
          </p>

          {data.overview.paragraphs[1] && (
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 24px 0' }}>
              {data.overview.paragraphs[1]}
            </p>
          )}

          {data.overview.keyTakeaway && (
            <blockquote
              style={{
                borderLeft: '3px solid #fe6200',
                padding: '8px 0 8px 20px',
                margin: '28px 0',
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#111111',
                fontStyle: 'italic',
                fontWeight: 600,
                backgroundColor: 'transparent',
              }}
            >
              "{data.overview.keyTakeaway}"
            </blockquote>
          )}

          {data.mainProblemSolved && (
            <div style={{ marginTop: '24px' }}>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#111111',
                  margin: '0 0 10px 0',
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                }}
              >
                Production Failure Points We Eliminate
              </h3>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#44403c', margin: '0 0 14px 0' }}>
                {data.mainProblemSolved.problem}
              </p>

              <div
                style={{
                  backgroundColor: '#faf7f2',
                  border: '1px solid #e8e4db',
                  padding: '16px 20px',
                  borderRadius: '6px',
                  margin: '18px 0',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#fe6200', marginBottom: '4px' }}>
                  Direct Architectural Result
                </div>
                <div style={{ fontSize: '15.5px', fontWeight: 600, color: '#111111', lineHeight: 1.55 }}>
                  {data.mainProblemSolved.result}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================
            SECTION 2: CORE ENGINEERING CAPABILITIES
            ======================================================== */}
        {data.capabilities && data.capabilities.length > 0 && (
          <section id="service-pillars" style={{ marginBottom: '52px', borderTop: '1px solid #e4e2e1', paddingTop: '36px' }}>
            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 12px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Core Engineering Pillars & Technical Scope
            </h2>

            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#55514c', margin: '0 0 28px 0' }}>
              We design every {data.title.toLowerCase()} deployment as an integrated, production-grade system. Here is the architectural scope included in every engagement:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {data.capabilities.map((cap, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    borderLeft: '2px solid #fe6200',
                    paddingLeft: '18px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#fe6200',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '4px',
                    }}
                  >
                    Pillar 0{cIdx + 1}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#111111',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {cap.title}
                  </h3>

                  <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#33312e', margin: '0 0 10px 0' }}>
                    {cap.description}
                  </p>

                  {cap.tags && cap.tags.length > 0 && (
                    <div style={{ fontSize: '13px', color: '#77726d' }}>
                      <strong style={{ color: '#44403c', fontWeight: 600 }}>Production Stack:</strong>{' '}
                      {cap.tags.join(' · ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 3: DELIVERY RUNBOOK (Step-by-Step Article Style)
            ======================================================== */}
        {data.process && data.process.length > 0 && (
          <section id="service-process" style={{ marginBottom: '52px', borderTop: '1px solid #e4e2e1', paddingTop: '36px' }}>
            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 12px 0',
                letterSpacing: '-0.02em',
              }}
            >
              How We Deliver: An Agile Engineering Framework
            </h2>

            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#55514c', margin: '0 0 28px 0' }}>
              We eliminate delivery drift through two-week sprint cadences, live staging environments, and concrete milestone sign-off requirements at each stage.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {data.process.map((st, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    borderTop: '1px solid #e4e2e1',
                    paddingTop: '18px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '6px' }}>
                    <span
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#fe6200',
                      }}
                    >
                      Stage 0{sIdx + 1}.
                    </span>
                    <h3
                      style={{
                        fontSize: '18.5px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: 0,
                      }}
                    >
                      {st.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#44403c', margin: '0 0 10px 0' }}>
                    {st.description}
                  </p>

                  {st.deliverables && st.deliverables.length > 0 && (
                    <div style={{ fontSize: '13.5px', color: '#66615c', lineHeight: 1.6 }}>
                      <strong style={{ color: '#222222' }}>Sign-off Requirements:</strong> {st.deliverables.join(' · ')}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {data.timeline && data.timeline.phases && (
              <div
                style={{
                  marginTop: '32px',
                  backgroundColor: '#f6f3ee',
                  padding: '20px 24px',
                  borderRadius: '6px',
                  border: '1px solid #e6e2da',
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: '#fe6200', marginBottom: '4px' }}>
                  Realistic Project Timeline: {data.timeline.totalDuration}
                </div>
                <div style={{ fontSize: '15px', color: '#44403c', lineHeight: 1.6 }}>
                  {data.timeline.sprintCadence || 'Bi-weekly sprint demos on live staging with direct Slack collaboration with principal architects.'}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ========================================================
            SECTION 4: PRODUCTION CASE IN POINT (Blog Case Narrative)
            ======================================================== */}
        {primaryCaseStudy && (
          <section style={{ marginBottom: '52px', borderTop: '1px solid #e4e2e1', paddingTop: '36px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fe6200',
                marginBottom: '8px',
              }}
            >
              Production Case in Point
            </div>

            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              {primaryCaseStudy.title}
            </h2>

            <div
              style={{
                borderLeft: '3px solid #fe6200',
                paddingLeft: '18px',
                marginBottom: '20px',
              }}
            >
              <div style={{ fontSize: '13px', color: '#77726d', fontWeight: 600 }}>
                Client: {primaryCaseStudy.client} · {primaryCaseStudy.category}
              </div>
            </div>

            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 20px 0' }}>
              {primaryCaseStudy.description}
            </p>

            {/* In-article Stat Callout */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                backgroundColor: '#ffffff',
                border: '1px solid #e4e2e1',
                padding: '18px 24px',
                borderRadius: '8px',
                margin: '20px 0',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#fe6200',
                    lineHeight: 1.1,
                  }}
                >
                  {primaryCaseStudy.metric}
                </div>
                <div style={{ fontSize: '12px', color: '#77726d', fontWeight: 500 }}>
                  {primaryCaseStudy.metricLabel}
                </div>
              </div>

              <div style={{ width: '1px', height: '36px', backgroundColor: '#e4e2e1' }} />

              <div style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                {primaryCaseStudy.stats}
              </div>
            </div>

            {primaryCaseStudy.tags && primaryCaseStudy.tags.length > 0 && (
              <div style={{ fontSize: '13.5px', color: '#77726d' }}>
                <strong style={{ color: '#33312e' }}>Verified Architecture:</strong> {primaryCaseStudy.tags.join(' · ')}
              </div>
            )}
          </section>
        )}

        {/* ========================================================
            SECTION 5: CODE OWNERSHIP & VERIFIED STACK
            ======================================================== */}
        <section style={{ marginBottom: '52px', borderTop: '1px solid #e4e2e1', paddingTop: '36px' }}>
          <h2
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(24px, 2.8vw, 32px)',
              fontWeight: 800,
              color: '#111111',
              lineHeight: 1.25,
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            100% Direct Code & IP Ownership Guarantee
          </h2>

          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 20px 0' }}>
            We build for direct customer ownership. Every repository, infrastructure configuration script (Terraform / Docker / Kubernetes), and database migration belongs 100% to your organization from Day 1. There are zero proprietary runtime locks, zero obfuscated modules, and zero ongoing vendor hostage code.
          </p>

          {data.deliverables && data.deliverables.length > 0 && (
            <div style={{ margin: '24px 0' }}>
              <div style={{ fontSize: '13.5px', fontWeight: 700, textTransform: 'uppercase', color: '#111111', marginBottom: '12px' }}>
                Tangible Engineering Deliverables
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
            </div>
          )}

          {data.techStack && data.techStack.length > 0 && (
            <div style={{ marginTop: '28px', borderTop: '1px solid #e4e2e1', paddingTop: '20px' }}>
              <div style={{ fontSize: '13.5px', fontWeight: 700, textTransform: 'uppercase', color: '#111111', marginBottom: '12px' }}>
                Verified Production Technologies
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {data.techStack.map((cat, cIdx) => (
                  <div key={cIdx} style={{ fontSize: '15px', color: '#44403c' }}>
                    <strong style={{ color: '#111111' }}>{cat.category}:</strong> {cat.items.join(', ')}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ========================================================
            SECTION 6: OPERATING STANDARDS
            ======================================================== */}
        {data.whyChooseThisService && (
          <section style={{ marginBottom: '52px', borderTop: '1px solid #e4e2e1', paddingTop: '36px' }}>
            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              {data.whyChooseThisService.title}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {data.whyChooseThisService.reasons.map((r, rIdx) => (
                <div key={rIdx} style={{ borderLeft: '2px solid #fe6200', paddingLeft: '16px' }}>
                  <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: '#111111', margin: '0 0 6px 0' }}>
                    {r.point}
                  </h3>
                  <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#44403c', margin: 0 }}>
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 7: FREQUENTLY ASKED QUESTIONS
            ======================================================== */}
        {data.faqs && data.faqs.length > 0 && (
          <section style={{ marginBottom: '56px', borderTop: '1px solid #e4e2e1', paddingTop: '36px' }}>
            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Frequently Asked Technical Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {data.faqs.map((faq, fIdx) => (
                <div key={fIdx} style={{ borderBottom: '1px solid #e4e2e1', paddingBottom: '18px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111111', margin: '0 0 8px 0' }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#44403c', margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 8: TECHNICAL INQUIRY & CONSULTATION FORM
            ======================================================== */}
        <section
          id="service-contact"
          style={{
            borderTop: '1px solid #e4e2e1',
            paddingTop: '40px',
            marginBottom: '48px',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fe6200',
                marginBottom: '8px',
              }}
            >
              Direct Technical Discussion
            </div>

            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 10px 0',
                letterSpacing: '-0.02em',
              }}
            >
              {data.cta.headline}
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#55514c', margin: 0 }}>
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
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
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
                      padding: '11px 14px',
                      backgroundColor: '#faf6f0',
                      border: '1px solid #d0ccc0',
                      borderRadius: '6px',
                      fontSize: '14.5px',
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
                      padding: '11px 14px',
                      backgroundColor: '#faf6f0',
                      border: '1px solid #d0ccc0',
                      borderRadius: '6px',
                      fontSize: '14.5px',
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
                      padding: '11px 14px',
                      backgroundColor: '#faf6f0',
                      border: '1px solid #d0ccc0',
                      borderRadius: '6px',
                      fontSize: '14.5px',
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
                    padding: '11px 14px',
                    backgroundColor: '#faf6f0',
                    border: '1px solid #d0ccc0',
                    borderRadius: '6px',
                    fontSize: '14.5px',
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
                <label htmlFor="srv-nda" style={{ fontSize: '13.5px', color: '#55514c', cursor: 'pointer' }}>
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
                    gap: '8px',
                    padding: '12px 24px',
                    backgroundColor: '#fe6200',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14.5px',
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
                  <Send size={15} />
                  <span>{isSubmitting ? 'Sending...' : data.cta.buttonText}</span>
                </button>
              </div>
            </form>
          )}
        </section>

        {/* ========================================================
            SECTION 9: RELATED DISCIPLINES (Clean Article Footer Links)
            ======================================================== */}
        {relatedItems.length > 0 && (
          <section style={{ borderTop: '1px solid #e4e2e1', paddingTop: '36px' }}>
            <div style={{ marginBottom: '18px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#fe6200',
                  marginBottom: '6px',
                }}
              >
                Related Disciplines
              </div>

              <h2
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111111',
                  margin: 0,
                }}
              >
                Other Engineering Services
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {relatedItems.map((item, rIdx) => (
                <div
                  key={rIdx}
                  onClick={() => onNavigatePage(item.slug)}
                  style={{
                    padding: '14px 0',
                    borderBottom: '1px solid #e4e2e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'padding-left 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = '6px')}
                  onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = '0px')}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#111111',
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#77726d', marginTop: '2px' }}>
                      {item.tagline}
                    </div>
                  </div>
                  <div style={{ color: '#fe6200' }}>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Global Client Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer onNavigate={onNavigatePage} onOpenLegal={onOpenLegal} />
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
