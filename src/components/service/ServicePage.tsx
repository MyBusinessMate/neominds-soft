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
          ARTICLE CONTAINER: Clean, Single-Column Editorial Reading Width
          ======================================================== */}
      <article
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '24px 24px clamp(64px, 8vw, 100px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Back Link & Breadcrumb Header */}
        <div style={{ marginBottom: '32px' }}>
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

        {/* Article Meta Header */}
        <header style={{ marginBottom: '40px' }}>
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
              fontSize: 'clamp(36px, 5.2vw, 56px)',
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
              fontSize: 'clamp(18px, 1.4vw, 21px)',
              lineHeight: 1.6,
              color: '#44403c',
              margin: '0 0 28px 0',
              fontWeight: 400,
            }}
          >
            {data.hero.description}
          </p>

          {/* Quick Metrics Bar - Clean inline typography, zero cards */}
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
            }}
          >
            {data.metrics.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span
                  style={{
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    fontSize: '18px',
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
        </header>

        {/* Featured Cover Visual */}
        {data.hero.heroImage && (
          <figure style={{ margin: '0 0 48px 0' }}>
            <div
              style={{
                width: '100%',
                height: 'clamp(260px, 38vw, 420px)',
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
                  marginTop: '10px',
                  fontSize: '13px',
                  color: '#77726d',
                  fontStyle: 'italic',
                }}
              >
                {data.hero.heroImageCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* ========================================================
            SECTION 1: THE PERSPECTIVE & STRATEGIC OVERVIEW
            ======================================================== */}
        <section style={{ marginBottom: '56px' }}>
          <h2
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(26px, 3.2vw, 36px)',
              fontWeight: 800,
              color: '#111111',
              lineHeight: 1.25,
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em',
            }}
          >
            {data.overview.statement}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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

          {/* Pullquote Takeaway */}
          {data.overview.keyTakeaway && (
            <blockquote
              style={{
                borderLeft: '3px solid #fe6200',
                paddingLeft: '24px',
                margin: '36px 0',
                fontSize: '18px',
                lineHeight: 1.65,
                color: '#111111',
                fontStyle: 'italic',
                fontWeight: 600,
              }}
            >
              "{data.overview.keyTakeaway}"
            </blockquote>
          )}
        </section>

        {/* ========================================================
            SECTION 2: THE PROBLEM WE ELIMINATE
            ======================================================== */}
        {data.mainProblemSolved && (
          <section style={{ marginBottom: '56px', borderTop: '1px solid #e4e2e1', paddingTop: '48px' }}>
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
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Where Existing Solutions Fail
            </h2>

            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 24px 0' }}>
              {data.mainProblemSolved.problem}
            </p>

            <h3
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: '22px',
                fontWeight: 700,
                color: '#111111',
                margin: '0 0 12px 0',
              }}
            >
              How We Solve It
            </h3>

            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 20px 0' }}>
              {data.mainProblemSolved.solution}
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#111111', fontWeight: 600, margin: 0 }}>
              <span style={{ color: '#fe6200' }}>Direct Result:</span> {data.mainProblemSolved.result}
            </p>

            {/* Who We Built This For */}
            {data.targetAudience && data.targetAudience.profiles && (
              <div style={{ marginTop: '36px' }}>
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
          </section>
        )}

        {/* ========================================================
            SECTION 3: CORE ENGINEERING CAPABILITIES
            ======================================================== */}
        {data.capabilities && data.capabilities.length > 0 && (
          <section style={{ marginBottom: '56px', borderTop: '1px solid #e4e2e1', paddingTop: '48px' }}>
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
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 32px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Core Engineering Capabilities
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {data.capabilities.map((cap, cIdx) => (
                <div key={cIdx} style={{ borderBottom: cIdx === data.capabilities.length - 1 ? 'none' : '1px solid #e4e2e1', paddingBottom: '28px' }}>
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
          </section>
        )}

        {/* ========================================================
            SECTION 4: DELIVERY LIFECYCLE & TIMELINE
            ======================================================== */}
        {data.process && data.process.length > 0 && (
          <section style={{ marginBottom: '56px', borderTop: '1px solid #e4e2e1', paddingTop: '48px' }}>
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
              Delivery Sequence
            </div>

            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(26px, 3.2vw, 36px)',
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
              <p style={{ fontSize: '16px', color: '#77726d', margin: '0 0 32px 0' }}>
                Typical engagement timeline: <strong style={{ color: '#111111' }}>{data.timeline.totalDuration}</strong>. {data.timeline.sprintCadence}
              </p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {data.process.map((st, sIdx) => (
                <div key={sIdx} style={{ borderBottom: sIdx === data.process.length - 1 ? 'none' : '1px solid #e4e2e1', paddingBottom: '24px' }}>
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
          </section>
        )}

        {/* ========================================================
            SECTION 5: PRODUCTION TECH & CONCRETE DELIVERABLES
            ======================================================== */}
        {data.techStack && data.techStack.length > 0 && (
          <section style={{ marginBottom: '56px', borderTop: '1px solid #e4e2e1', paddingTop: '48px' }}>
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
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Production Technologies & What You Own
            </h2>

            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#33312e', margin: '0 0 24px 0' }}>
              We build exclusively on proven, production-grade technologies that your in-house engineers can audit, understand, and maintain. No proprietary wrappers, no hostage code.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
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
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 14px 0',
                  }}
                >
                  Deliverables Handed Over Upon Launch
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
          </section>
        )}

        {/* ========================================================
            SECTION 6: WHY ENGINEERING LEADERS PICK NEOMINDS
            ======================================================== */}
        {data.whyChooseThisService && (
          <section style={{ marginBottom: '56px', borderTop: '1px solid #e4e2e1', paddingTop: '48px' }}>
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
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 28px 0',
                letterSpacing: '-0.02em',
              }}
            >
              {data.whyChooseThisService.title}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
          </section>
        )}

        {/* ========================================================
            SECTION 7: FREQUENTLY ASKED QUESTIONS
            ======================================================== */}
        {data.faqs && data.faqs.length > 0 && (
          <section style={{ marginBottom: '56px', borderTop: '1px solid #e4e2e1', paddingTop: '48px' }}>
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
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.25,
                margin: '0 0 32px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Frequently Asked Questions About {data.title}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {data.faqs.map((faq, fIdx) => (
                <div key={fIdx} style={{ borderBottom: fIdx === data.faqs.length - 1 ? 'none' : '1px solid #e4e2e1', paddingBottom: '24px' }}>
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
          </section>
        )}

        {/* ========================================================
            SECTION 8: DISCOVERY / PROPOSAL FORM
            ======================================================== */}
        <section
          id="service-contact"
          style={{
            borderTop: '1px solid #e4e2e1',
            paddingTop: '48px',
            marginBottom: '56px',
          }}
        >
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
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 800,
              color: '#111111',
              lineHeight: 1.2,
              margin: '0 0 12px 0',
              letterSpacing: '-0.02em',
            }}
          >
            {data.cta.headline}
          </h2>

          <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#44403c', margin: '0 0 32px 0' }}>
            {data.cta.description}
          </p>

          {isSubmitted ? (
            <div style={{ padding: '32px 0', borderTop: '1px solid #e4e2e1', display: 'flex', alignItems: 'center', gap: '14px' }}>
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
      </article>

      {/* Global Client Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer onNavigate={onNavigatePage} onOpenLegal={onOpenLegal} />

      <style>{`
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
