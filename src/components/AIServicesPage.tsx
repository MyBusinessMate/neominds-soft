import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { AI_CLIENT_LOGOS } from '../data/aiLogosData';
import './AIServicesPage.css';

interface AIServicesPageProps {
  onNavigateHome: () => void;
  onContactClick?: () => void;
}

// ---------------------------------------------------------------------------
// Word-by-word Text Lighting Component (Framer Motion Implementation)
// ---------------------------------------------------------------------------
interface ScrollRevealTextProps {
  text: string;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 100%', 'end 40%'],
  });

  // Split text into paragraphs, preserving exact paragraph line breaks
  const paragraphs = text.split('\n\n');
  const allElements: { word: string; isBreak?: boolean }[] = [];

  paragraphs.forEach((para, pIdx) => {
    if (pIdx > 0) {
      allElements.push({ word: '', isBreak: true });
    }
    const wordsInPara = para.split(/\s+/).filter(Boolean);
    wordsInPara.forEach((w) => {
      allElements.push({ word: w });
    });
  });

  const totalWords = allElements.filter((el) => !el.isBreak).length;
  let wordCounter = 0;

  return (
    <div ref={containerRef} className="ai-scroll-reveal-container">
      {allElements.map((item, idx) => {
        if (item.isBreak) {
          return (
            <div key={`break-${idx}`} className="ai-scroll-reveal-break" />
          );
        }
        const currentIdx = wordCounter++;
        const start = currentIdx / totalWords;
        const end = (currentIdx + 1) / totalWords;
        return (
          <ScrollRevealWord
            key={`word-${idx}`}
            word={item.word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </div>
  );
};

const ScrollRevealWord: React.FC<{
  word: string;
  progress: any;
  range: [number, number];
}> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1.0]);
  return (
    <motion.span style={{ opacity }} className="ai-scroll-reveal-word">
      {word}
    </motion.span>
  );
};

// ---------------------------------------------------------------------------
// Main AI Services Page Component
// ---------------------------------------------------------------------------
export const AIServicesPage: React.FC<AIServicesPageProps> = ({
  onNavigateHome,
  onContactClick,
}) => {
  // Active Pillar state (0, 1, 2)
  const [activePillar, setActivePillar] = useState<number>(0);

  // Expanded Case Studies state (set of IDs)
  const [expandedCases, setExpandedCases] = useState<number[]>([0]);

  const toggleCase = (index: number) => {
    setExpandedCases((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 3 Core Pillars Data
  const pillarsData = [
    {
      id: 'pillar-1',
      tabName: 'AI-enabled products',
      badge: 'Pillar 01',
      title: 'Engineer intelligent products',
      description:
        'When AI needs to become part of a product, not a feature layer. We design and build AI-native products and embed AI into existing platforms, starting from what is feasible in real conditions.',
      process: [
        { num: '01', title: 'Discover' },
        { num: '02', title: 'Validate' },
        { num: '03', title: 'Build' },
        { num: '04', title: 'Launch' },
      ],
      image: '/assets/ai/GzZetawg6ITR1GjP0DtVlj990.png',
      alt: 'Responsible AI Pre-Exec Brief Canvas',
    },
    {
      id: 'pillar-2',
      tabName: 'AI-assisted legacy modernization or rebuild',
      badge: 'Pillar 02',
      title: 'Reimagine legacy systems',
      description:
        'When critical systems can no longer stand still. We combine system understanding, engineering expertise, and AI-assisted modernization to refactor existing platforms, remove technical debt, or rebuild them from the ground up.',
      process: [
        { num: '01', title: 'Discover' },
        { num: '02', title: 'Rewrite' },
        { num: '03', title: 'Validate' },
        { num: '04', title: 'Cutover' },
      ],
      image: '/assets/ai/Rkc1CGrTWSlTe0XRzd6I3scCFQ.png',
      alt: 'AI-assisted Legacy Modernization Architecture',
    },
    {
      id: 'pillar-3',
      tabName: 'AI-driven workflow optimization',
      badge: 'Pillar 03',
      title: 'Optimize business workflows',
      description:
        "When existing ways of working can't keep up with the business. We identify where AI can make the greatest impact, then build workflows that are faster, more reliable, and easier to scale.",
      process: [
        { num: '01', title: 'Map' },
        { num: '02', title: 'Validate' },
        { num: '03', title: 'Build' },
        { num: '04', title: 'Adopt' },
      ],
      image: '/assets/ai/1hPq50R0SvMRMxA7cm80dhxTxMU.png',
      alt: 'AI-driven Workflow Optimization Framework',
    },
  ];

  // How We Partner 3 Phases
  const partnerPhases = [
    {
      badge: 'Phase 01',
      title: 'Foundation',
      description:
        'No two initiatives start from the same place. Depending on your context, the foundation phase takes different forms. Everything we produce is yours to keep, whether you continue with us or not.',
      checkpoints: [
        'AI discovery and refinement',
        'Data readiness assessment',
        'Responsible AI review',
      ],
      image: '/assets/ai/XuP4fmAjaBYVJmwHntw4NwMG8eA.png',
    },
    {
      badge: 'Phase 02',
      title: 'Build',
      description:
        'Once the approach is validated, engineering begins. Depending on what the foundation uncovered, the work lands in one of three paths.',
      checkpoints: [
        'AI-enabled products',
        'Legacy modernization',
        'Workflow optimization',
      ],
      image: '/assets/ai/QN10D1ehx47M9B5h2FmxCI6Qco.png',
    },
    {
      badge: 'Phase 03',
      title: 'Production scale',
      description:
        "We stay through rollout, adoption, and stabilization until the solution runs successfully in production and your team fully owns it. From there, it's your call whether the engagement continues.",
      checkpoints: [
        'Ongoing optimization',
        'Support',
        'New development initiatives',
      ],
      image: '/assets/ai/fqrxmSM7ge959YACr8INDM8Z8.png',
    },
  ];

  // 4 Case Studies Accordion Data
  const caseStudies = [
    {
      index: '01',
      title: 'Introducing AI into a brownfield environment',
      tags: [
        'AI DATA READINESS',
        'AI DISCOVERY AND REFINEMENT',
        'RESPONSIBLE AI',
      ],
      context:
        'Neominds helped the client transform AI from scattered team initiatives into a scalable engineering capability, introducing governance, standardized practices, and a phased roadmap for AI-assisted and agentic software delivery.',
      problem:
        'AI adoption was happening unevenly across teams, with no shared practices, governance, or standards. At the same time, years of legacy development had left knowledge distributed across systems, documentation, and teams, making reliable AI adoption more difficult.',
      solution:
        'Neominds assessed AI readiness across engineering teams, then built the governance framework, standardized practices, and a 3-phase rollout plan tied to the modernization already underway.',
      metrics: [
        {
          val: '20 stakeholders',
          desc: 'AI readiness assessed, giving the organization a unified view',
        },
        {
          val: '15 practices evaluated',
          desc: 'Workflows and tooling areas mapped for AI opportunity',
        },
        {
          val: 'Level 2',
          desc: 'AI maturity gained with defined governance and security gates',
        },
      ],
    },
    {
      index: '02',
      title: 'AI enhancement for medical coding software',
      tags: ['AI-ENABLED PRODUCT ENGINEERING', 'HEALTHCARE'],
      context:
        'We integrated an AI-powered assistant and intelligent checks into a medical coding platform to help coders work faster, improve accuracy, and reduce manual effort.',
      problem:
        'Medical coders spent too much time searching reference materials and interpreting coding guidelines while content teams manually maintained complex rules, which slowed productivity and restricted throughput.',
      solution:
        'Neominds integrated an AI-powered coding assistant and automated validation capabilities that streamlined coding workflows and reduced the effort required to manage coding content.',
      metrics: [
        {
          val: 'Instant guidance',
          desc: 'Instant access to coding reference information and relevant rules',
        },
        {
          val: 'Reduced manual effort',
          desc: 'Rules conflicts and dependency issues caught automatically',
        },
        {
          val: 'Speed and accuracy',
          desc: 'Coders spend less time on lookups and more time on high-stakes clinical decisions',
        },
      ],
    },
    {
      index: '03',
      title: 'AI-driven modernization of a multi-source data ingestion pipeline',
      tags: [
        'AI-ENABLED PRODUCT ENGINEERING',
        'LEGACY MODERNIZATION',
        'DATA PLATFORM',
      ],
      context:
        'We helped a data quality company transform manual data onboarding into an automated, self-improving ingestion pipeline, eliminating schema mapping overhead and accelerating new data source integration.',
      problem:
        'Incoming datasets from multiple sources landed in Amazon S3 in inconsistent formats, forcing engineers to spend hours manually mapping schemas before any data could be loaded.',
      solution:
        'We built an AI-driven ingestion framework that detects file structure, infers or matches schemas using confidence-based classification, and loads standardized data into Amazon Redshift. Ambiguous cases are routed to human review, ensuring control without blocking automation.',
      metrics: [
        {
          val: 'Hours → Minutes',
          desc: 'Manual schema mapping and data preparation effort reduced significantly',
        },
        {
          val: 'Instant scalability',
          desc: 'New data sources onboarded without custom mapping rules for each format',
        },
        {
          val: 'Self-improving accuracy',
          desc: 'A metadata repository increases automation accuracy autonomously over time',
        },
      ],
    },
    {
      index: '04',
      title: 'Agent-based voice AI assistant for Tesla drivers',
      tags: [
        'AI-ENABLED PRODUCT ENGINEERING',
        'WORKFLOW OPTIMIZATION',
        'AUTOMOTIVE',
      ],
      context:
        "We developed a voice assistant for the client's infotainment platform, helping drivers use key app features hands-free.",
      problem:
        'The app was designed to support drivers during a trip, but every interaction still required touching the screen. Even a few taps could take attention off the road, creating safety risks.',
      solution:
        'We integrated an AI layer on top of the existing microservice architecture. The assistant uses specialized AI agents for navigation, ordering, payments, account management, and vehicle communication, while secure function calls keep all execution controlled within the current back end.',
      metrics: [
        {
          val: '5+ scenarios',
          desc: 'Route planning, charger search, battery checks, order creation, and proactive suggestions enabled through voice',
        },
        {
          val: 'Faster time to market',
          desc: "Voice AI layer integrated without changing the app's existing flows or product logic",
        },
        {
          val: 'Future-ready architecture',
          desc: 'New voice assistant capabilities can be added without rebuilding the platform',
        },
        {
          val: '91% accuracy',
          desc: 'Intent recognition accuracy achieved across tested driver voice requests',
        },
      ],
    },
  ];

  return (
    <div className="ai-page-wrapper">
      {/* --------------------------------------------------------------------
          1. Dedicated Floating Navbar
          -------------------------------------------------------------------- */}
      <nav className="ai-nav" aria-label="AI Services Navigation">
        <div className="ai-nav-brand" onClick={onNavigateHome}>
          <div className="ai-nav-logo-icon">E</div>
          <span className="ai-nav-brand-text">EFFECTIVESOFT</span>
          <span className="ai-nav-brand-badge">AI CORE</span>
        </div>

        <div className="ai-nav-links">
          <button
            className="ai-nav-link"
            onClick={() => scrollToSection('what-we-build')}
          >
            What we build
          </button>
          <button
            className="ai-nav-link"
            onClick={() => scrollToSection('how-we-partner')}
          >
            How we partner
          </button>
          <button
            className="ai-nav-link"
            onClick={() => scrollToSection('case-studies')}
          >
            Case studies
          </button>
          <button className="ai-nav-link" onClick={onNavigateHome}>
            Main Platform
          </button>
        </div>

        <button
          className="ai-nav-cta"
          onClick={() => {
            if (onContactClick) onContactClick();
            else scrollToSection('contact-footer');
          }}
        >
          <span>Contact us</span>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M 6.405 2.276 L 1.138 7.543 C 0.878 7.803 0.456 7.803 0.195 7.543 C -0.065 7.282 -0.065 6.86 0.195 6.6 L 5.462 1.333 L 1.071 1.333 C 0.702 1.333 0.404 1.035 0.404 0.667 C 0.404 0.298 0.702 0 1.071 0 L 6.404 0 C 7.14 0 7.737 0.597 7.737 1.333 L 7.737 6.667 C 7.737 7.035 7.439 7.333 7.071 7.333 C 6.702 7.333 6.404 7.035 6.404 6.667 Z" />
          </svg>
        </button>
      </nav>

      {/* --------------------------------------------------------------------
          2. Hero Section with Background Video
          -------------------------------------------------------------------- */}
      <section className="ai-hero-section">
        <video
          className="ai-hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/ai/hero-bg.mp4"
        />
        <div className="ai-hero-overlay" />

        <div className="ai-hero-content">
          <div className="ai-pill-badge">
            <svg
              className="ai-sparkle-icon"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 5.988 1.69 L 6.158 2.487 C 6.516 4.161 7.824 5.47 9.499 5.828 L 10.296 5.998 C 10.941 6.136 10.941 7.056 10.296 7.194 L 9.499 7.365 C 7.824 7.723 6.516 9.031 6.158 10.706 L 5.988 11.502 C 5.85 12.147 4.93 12.147 4.792 11.502 L 4.621 10.705 C 4.263 9.03 2.955 7.722 1.28 7.364 L 0.484 7.194 C -0.161 7.056 -0.161 6.136 0.484 5.998 L 1.28 5.827 C 2.955 5.469 4.263 4.161 4.621 2.486 L 4.792 1.69 C 4.929 1.045 5.85 1.045 5.988 1.69 Z M 10.53 0.259 L 10.643 0.666 C 10.734 0.994 10.991 1.251 11.319 1.342 L 11.727 1.455 C 12.072 1.551 12.072 2.041 11.727 2.137 L 11.319 2.25 C 10.991 2.341 10.734 2.597 10.643 2.926 L 10.53 3.333 C 10.434 3.678 9.945 3.678 9.849 3.333 L 9.736 2.926 C 9.644 2.597 9.388 2.341 9.06 2.25 L 8.652 2.137 C 8.307 2.041 8.307 1.551 8.652 1.455 L 9.06 1.342 C 9.388 1.251 9.644 0.995 9.736 0.666 L 9.849 0.259 C 9.945 -0.086 10.434 -0.086 10.53 0.259 Z" />
            </svg>
            <span>SESSIONS WITH AI EXPERTS</span>
          </div>

          <h1 className="ai-hero-title">
            AI-enabled product engineering from idea to production
          </h1>

          <p className="ai-hero-subtitle">
            Neominds helps forward-thinking teams build AI-native products,
            modernize legacy systems, and optimize critical enterprise
            workflows with battle-tested engineering discipline.
          </p>

          <div className="ai-hero-actions">
            <button
              className="ai-btn-primary"
              onClick={() => {
                if (onContactClick) onContactClick();
                else scrollToSection('contact-footer');
              }}
            >
              <span>Talk to an AI engineer</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9 4 13 8 9 12" />
              </svg>
            </button>

            <button
              className="ai-btn-secondary"
              onClick={() => scrollToSection('what-we-build')}
            >
              <span>Explore capabilities</span>
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          3. Logo Marquee (Companies Loop)
          -------------------------------------------------------------------- */}
      <section className="ai-marquee-section" aria-label="Client Partners">
        <div className="ai-marquee-mask">
          <div className="ai-marquee-track">
            {/* First Set */}
            {AI_CLIENT_LOGOS.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="ai-logo-item"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
                title={logo.name}
              />
            ))}
            {/* Continuous Marquee Loop Set */}
            {AI_CLIENT_LOGOS.map((logo, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="ai-logo-item"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
                title={logo.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          4. Mission / Vision Section with Word-by-Word Text Fill Animation
          -------------------------------------------------------------------- */}
      <section className="ai-mission-section" id="mission-vision">
        <div className="ai-mission-container">
          <div className="ai-mission-text-col">
            <ScrollRevealText
              text={
                "We've always been engineers first. AI is the evolution of software, not a replacement for the expertise required to build it.\n\nNeominds is backed by proven engineering execution and here to turn ambiguous capabilities into enterprise reality, with architecture that lasts."
              }
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          5. What We Actually Do (3 Interactive Pillars Matching Screenshot)
          -------------------------------------------------------------------- */}
      <section className="ai-pillars-section" id="what-we-build">
        <div className="ai-section-header">
          <div className="ai-section-eyebrow">WHAT WE BUILD</div>
          <h2 className="ai-section-title">What we actually do</h2>
          <p className="ai-section-desc">
            Most AI engineering work comes down to one of three things: building
            something new, modernizing existing systems, or improving
            operational workflows. Each area has its own approach, proven
            delivery patterns, and reusable assets that help us move faster
            without a cold start.
          </p>
        </div>

        <div className="ai-pillars-unified-frame">
          {/* Left Column: Vertical Selectable Triggers */}
          <div className="ai-pillars-triggers-col">
            {pillarsData.map((pillar, idx) => (
              <button
                key={pillar.id}
                className={`ai-pillar-tab-btn ${
                  activePillar === idx ? 'active' : ''
                }`}
                onClick={() => setActivePillar(idx)}
              >
                <span className="ai-pillar-tab-text">{pillar.tabName}</span>
                <svg
                  className="ai-pillar-tab-arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="8" x2="13" y2="8" />
                  <polyline points="9 4 13 8 9 12" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right Column: Active Content (Blended directly into unified frame) */}
          <div className="ai-pillars-content-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={pillarsData[activePillar].id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="ai-pillar-active-body"
              >
                <div className="ai-pillar-info">
                  <span className="ai-pillar-badge">
                    {pillarsData[activePillar].badge}
                  </span>
                  <h3 className="ai-pillar-card-title">
                    {pillarsData[activePillar].title}
                  </h3>
                  <p className="ai-pillar-card-desc">
                    {pillarsData[activePillar].description}
                  </p>

                  <div className="ai-pillar-process">
                    <div className="ai-process-label">Step-by-step Process</div>
                    <div className="ai-process-list">
                      {pillarsData[activePillar].process.map((step) => (
                        <div key={step.num} className="ai-process-item">
                          <span className="ai-process-num">{step.num}</span>
                          <span className="ai-process-text">{step.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="ai-pillar-learn-btn"
                    onClick={() => {
                      if (onContactClick) onContactClick();
                      else scrollToSection('how-we-partner');
                    }}
                  >
                    <span>Learn more</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="3" y1="8" x2="13" y2="8" />
                      <polyline points="9 4 13 8 9 12" />
                    </svg>
                  </div>
                </div>

                <div className="ai-pillar-visual">
                  <img
                    src={pillarsData[activePillar].image}
                    alt={pillarsData[activePillar].alt}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          6. How We Partner (3 Phases: Foundation, Build, Scale)
          -------------------------------------------------------------------- */}
      <section className="ai-partner-section" id="how-we-partner">
        <div className="ai-section-header">
          <div className="ai-section-eyebrow">HOW WE PARTNER</div>
          <h2 className="ai-section-title">
            Strong outcomes start with a strong foundation
          </h2>
          <p className="ai-section-desc">
            We define the right path, validate critical assumptions, and create
            tangible artifacts before committing to implementation. With a clear
            foundation in place, we move from build to production scale as one
            partner.
          </p>
        </div>

        <div className="ai-partner-cards-grid">
          {partnerPhases.map((phase) => (
            <div key={phase.badge} className="ai-phase-card">
              <div className="ai-phase-header">
                <span className="ai-phase-badge">{phase.badge}</span>
                <h3 className="ai-phase-title">{phase.title}</h3>
                <p className="ai-phase-desc">{phase.description}</p>
                <div className="ai-phase-checklist">
                  {phase.checkpoints.map((chk, i) => (
                    <div key={i} className="ai-phase-check-item">
                      <div className="ai-check-icon">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 17 17"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M 3.833 9.5 L 7.167 12.833 L 13.833 6.167" />
                        </svg>
                      </div>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ai-phase-visual">
                <img src={phase.image} alt={phase.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------------
          7. Case Studies (Expandable Accordion)
          -------------------------------------------------------------------- */}
      <section className="ai-cases-section" id="case-studies">
        <div className="ai-section-header">
          <div className="ai-section-eyebrow">CASE STUDIES</div>
          <h2 className="ai-section-title">Proven AI engineering</h2>
          <p className="ai-section-desc">
            AI needs to fit the realities of products, systems, and operations.
            Whether starting with discovery or strengthening an existing
            implementation, we bring our engineering expertise needed to move AI
            forward.
          </p>
        </div>

        <div className="ai-cases-accordion">
          {caseStudies.map((cs, index) => {
            const isExpanded = expandedCases.includes(index);
            return (
              <div
                key={cs.index}
                className={`ai-case-item ${isExpanded ? 'expanded' : ''}`}
              >
                <div
                  className="ai-case-header"
                  onClick={() => toggleCase(index)}
                >
                  <div className="ai-case-header-left">
                    <span className="ai-case-index">{cs.index}</span>
                    <h3 className="ai-case-title">{cs.title}</h3>
                  </div>

                  <div className="ai-case-toggle-btn">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      {isExpanded ? (
                        <rect x="2" y="7" width="12" height="2" />
                      ) : (
                        <path d="M 7 2 L 9 2 L 9 7 L 14 7 L 14 9 L 9 9 L 9 14 L 7 14 L 7 9 L 2 9 L 2 7 L 7 7 Z" />
                      )}
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="ai-case-content"
                    >
                      <div className="ai-case-tags">
                        {cs.tags.map((tag, tIdx) => (
                          <React.Fragment key={tIdx}>
                            {tIdx > 0 && (
                              <span className="ai-case-tag-slash">/</span>
                            )}
                            <span className="ai-case-tag">{tag}</span>
                          </React.Fragment>
                        ))}
                      </div>

                      <div className="ai-case-grid">
                        <div className="ai-case-block">
                          <div className="ai-case-block-label">CONTEXT</div>
                          <p className="ai-case-block-text">{cs.context}</p>
                        </div>
                        <div className="ai-case-block">
                          <div className="ai-case-block-label">PROBLEM</div>
                          <p className="ai-case-block-text">{cs.problem}</p>
                        </div>
                        <div className="ai-case-block">
                          <div className="ai-case-block-label">SOLUTION</div>
                          <p className="ai-case-block-text">{cs.solution}</p>
                        </div>
                      </div>

                      <div className="ai-case-metrics">
                        {cs.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="ai-metric-card">
                            <span className="ai-metric-value">{m.val}</span>
                            <p className="ai-metric-desc">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* --------------------------------------------------------------------
          8. Dark Footer Section
          -------------------------------------------------------------------- */}
      <footer className="ai-footer" id="contact-footer">
        <div className="ai-footer-container">
          <div className="ai-footer-top">
            <div className="ai-footer-brand-col">
              <div className="ai-nav-brand" onClick={onNavigateHome}>
                <div className="ai-nav-logo-icon">N</div>
                <span className="ai-nav-brand-text">NEOMINDS.AI</span>
              </div>
              <p className="ai-footer-desc">
                AI-enabled product engineering from architecture through production. Over 23
                years of engineering excellence and rigorous execution.
              </p>
            </div>

            <div className="ai-footer-col">
              <div className="ai-footer-col-title">OFFERING</div>
              <div className="ai-footer-links">
                <button
                  className="ai-footer-link"
                  onClick={() => scrollToSection('what-we-build')}
                >
                  Services & Pillars
                </button>
                <button
                  className="ai-footer-link"
                  onClick={() => scrollToSection('how-we-partner')}
                >
                  How We Partner
                </button>
                <button
                  className="ai-footer-link"
                  onClick={() => scrollToSection('case-studies')}
                >
                  Case Studies
                </button>
              </div>
            </div>

            <div className="ai-footer-col">
              <div className="ai-footer-col-title">NAVIGATION</div>
              <div className="ai-footer-links">
                <button className="ai-footer-link" onClick={onNavigateHome}>
                  Core Platform
                </button>
                <button
                  className="ai-footer-link"
                  onClick={() => {
                    if (onContactClick) onContactClick();
                  }}
                >
                  Request Consultation
                </button>
              </div>
            </div>

            <div className="ai-footer-col">
              <div className="ai-footer-col-title">CONNECT</div>
              <div className="ai-footer-links">
                <a
                  className="ai-footer-link"
                  href="https://www.linkedin.com/company/effectivesoft"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="ai-footer-link"
                  href="https://twitter.com/effectivesoft"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter / X
                </a>
                <a
                  className="ai-footer-link"
                  href="https://github.com/neominds"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="ai-footer-bottom">
            <span>© 2026 Neominds AI Engineering. All rights reserved.</span>
            <span>
              Turn ambiguous capabilities into enterprise reality with
              architecture that lasts.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
