import React, { useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Database,
  Layers,
  Cpu,
  Share2,
} from 'lucide-react';
import { getUnifiedProject, UnifiedProject } from '../data/projectsData';
import { PageType } from './Header';
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
  const project: UnifiedProject = useMemo(() => {
    return getUnifiedProject(projectId);
  }, [projectId]);

  // Scroll to top when project ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  // Companion related projects
  const companionProjects = useMemo(() => {
    return project.relatedProjectIds
      .map((id) => getUnifiedProject(id))
      .filter(Boolean);
  }, [project.relatedProjectIds]);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: project.title,
        text: project.overview.services,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard');
    }
  };

  const handleDiscussClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      onNavigatePage('contacts');
    }
  };

  return (
    <article
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        minHeight: '100vh',
        paddingTop: '80px',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Geist Sans', 'Inter', sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* ========================================================
          STICKY BREADCRUMB / TOP ACTION BAR (Apple HIG Navigation)
          ======================================================== */}
      <nav
        aria-label="Breadcrumbs"
        style={{
          borderBottom: '1px solid #eaeaea',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          position: 'sticky',
          top: '64px',
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigatePage('home')}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: '4px 6px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: 500,
              }}
            >
              <ArrowLeft size={14} /> Home
            </button>
            <ChevronRight size={13} color="#94a3b8" />
            <button
              onClick={() => onNavigatePage('portfolio')}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: '4px 6px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                fontWeight: 500,
              }}
            >
              Projects & Case Studies
            </button>
            <ChevronRight size={13} color="#94a3b8" />
            <span
              style={{
                color: '#0f172a',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '280px',
              }}
            >
              {project.projectName}
            </span>
          </div>

          <button
            onClick={handleShare}
            aria-label="Share this project case study"
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#334155',
              borderRadius: '6px',
              padding: '6px 12px',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              fontSize: '12.5px',
              fontWeight: 500,
            }}
          >
            <Share2 size={14} /> Share
          </button>
        </div>
      </nav>

      {/* ========================================================
          PAGE HEADER: [Project Name]. Case Study
          ======================================================== */}
      <header
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          padding: 'clamp(36px, 5vw, 64px) 24px 24px',
        }}
      >
        <div
          style={{
            fontFamily: "'SF Mono', 'Geist Mono', monospace",
            fontSize: '12px',
            fontWeight: 700,
            color: '#2258e7',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ width: '16px', height: '2px', backgroundColor: '#2258e7' }} />
          <span>PRODUCTION VERIFIED PROJECT</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(28px, 4.5vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#0f172a',
            margin: '0 0 20px 0',
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            lineHeight: 1.6,
            color: '#475569',
            margin: 0,
            maxWidth: '820px',
          }}
        >
          {project.solution}
        </p>
      </header>

      {/* ========================================================
          PROJECT OVERVIEW (Bento Meta Grid)
          ======================================================== */}
      <section
        aria-labelledby="overview-heading"
        style={{
          maxWidth: '1080px',
          margin: '0 auto 48px',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            backgroundColor: '#fafafa',
            border: '1px solid #eaeaea',
            borderRadius: '8px',
            padding: 'clamp(20px, 3vw, 32px)',
          }}
        >
          <h2
            id="overview-heading"
            style={{
              fontFamily: "'SF Mono', 'Geist Mono', monospace",
              fontSize: '13px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0f172a',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '1px solid #eaeaea',
            }}
          >
            Project Overview
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px 28px',
            }}
          >
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Client
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                {project.overview.client}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Industry
              </div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>
                {project.overview.industry}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Project Type
              </div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>
                {project.overview.projectType}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Project Duration
              </div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>
                {project.overview.projectDuration}
              </div>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Services Delivered
              </div>
              <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#2258e7' }}>
                {project.overview.services}
              </div>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Technology Stack
              </div>
              <div style={{ fontSize: '14.5px', color: '#334155', fontFamily: "'SF Mono', 'Geist Mono', monospace" }}>
                {project.overview.technologyStack}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MAIN ARTICLE CONTENT: 7 NUMBERED SECTIONS
          ======================================================== */}
      <main
        style={{
          maxWidth: '880px',
          margin: '0 auto',
          padding: '0 24px 80px',
        }}
      >
        {/* ----------------------------------------------------
            1. Client Context
            ---------------------------------------------------- */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.015em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'SF Mono', 'Geist Mono', monospace",
                fontSize: '14px',
                color: '#2258e7',
                fontWeight: 700,
              }}
            >
              1.
            </span>
            Client Context
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#2f3437',
              margin: 0,
            }}
          >
            {project.clientContext}
          </p>
        </section>

        {/* ----------------------------------------------------
            2. The Challenge
            ---------------------------------------------------- */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.015em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'SF Mono', 'Geist Mono', monospace",
                fontSize: '14px',
                color: '#2258e7',
                fontWeight: 700,
              }}
            >
              2.
            </span>
            The Challenge
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#2f3437',
              margin: 0,
            }}
          >
            {project.challenge}
          </p>
        </section>

        {/* ----------------------------------------------------
            3. Project Constraints
            ---------------------------------------------------- */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.015em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'SF Mono', 'Geist Mono', monospace",
                fontSize: '14px',
                color: '#2258e7',
                fontWeight: 700,
              }}
            >
              3.
            </span>
            Project Constraints
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#2f3437',
              margin: 0,
            }}
          >
            {project.constraints}
          </p>
        </section>

        {/* ----------------------------------------------------
            4. Our Approach
            ---------------------------------------------------- */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.015em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'SF Mono', 'Geist Mono', monospace",
                fontSize: '14px',
                color: '#2258e7',
                fontWeight: 700,
              }}
            >
              4.
            </span>
            Our Approach
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#2f3437',
              margin: 0,
            }}
          >
            {project.approach}
          </p>
        </section>

        {/* ----------------------------------------------------
            5. The Solution
            ---------------------------------------------------- */}
        <section style={{ marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.015em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'SF Mono', 'Geist Mono', monospace",
                fontSize: '14px',
                color: '#2258e7',
                fontWeight: 700,
              }}
            >
              5.
            </span>
            The Solution
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#2f3437',
              marginBottom: '28px',
            }}
          >
            {project.solution}
          </p>

          {/* Key Features and Capabilities */}
          <div
            style={{
              backgroundColor: '#fafafa',
              border: '1px solid #eaeaea',
              borderRadius: '8px',
              padding: '28px',
              marginBottom: '32px',
            }}
          >
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Key Features and Capabilities
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '15px',
                    lineHeight: 1.55,
                    color: '#334155',
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#e0e7ff',
                      color: '#2258e7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology and Implementation */}
          <div>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Technology and Implementation
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '14px',
              }}
            >
              <div
                style={{
                  border: '1px solid #eaeaea',
                  borderRadius: '6px',
                  padding: '16px',
                  backgroundColor: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Code2 size={15} color="#2258e7" />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em' }}>
                    Frontend
                  </span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
                  {project.technologyImplementation.frontend}
                </div>
              </div>

              <div
                style={{
                  border: '1px solid #eaeaea',
                  borderRadius: '6px',
                  padding: '16px',
                  backgroundColor: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Layers size={15} color="#2258e7" />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em' }}>
                    Backend
                  </span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
                  {project.technologyImplementation.backend}
                </div>
              </div>

              <div
                style={{
                  border: '1px solid #eaeaea',
                  borderRadius: '6px',
                  padding: '16px',
                  backgroundColor: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Database size={15} color="#2258e7" />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em' }}>
                    Database
                  </span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
                  {project.technologyImplementation.database}
                </div>
              </div>

              {project.technologyImplementation.aiAutomation && (
                <div
                  style={{
                    border: '1px solid #eaeaea',
                    borderRadius: '6px',
                    padding: '16px',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Cpu size={15} color="#2258e7" />
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em' }}>
                      AI / Automation
                    </span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
                    {project.technologyImplementation.aiAutomation}
                  </div>
                </div>
              )}

              {project.technologyImplementation.integrations && (
                <div
                  style={{
                    border: '1px solid #eaeaea',
                    borderRadius: '6px',
                    padding: '16px',
                    backgroundColor: '#ffffff',
                    gridColumn: '1 / -1',
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    Integrations
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#334155' }}>
                    {project.technologyImplementation.integrations}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            6. Results and Business Impact
            ---------------------------------------------------- */}
        <section style={{ marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.015em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'SF Mono', 'Geist Mono', monospace",
                fontSize: '14px',
                color: '#2258e7',
                fontWeight: 700,
              }}
            >
              6.
            </span>
            Results and Business Impact
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#2f3437',
              marginBottom: '24px',
            }}
          >
            {project.resultsAndImpact.summary}
          </p>

          {/* 5-Item Verified Impact Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <div style={{ border: '1px solid #eaeaea', borderRadius: '6px', padding: '18px', backgroundColor: '#fafafa' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Efficiency
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                {project.resultsAndImpact.efficiency}
              </div>
            </div>

            <div style={{ border: '1px solid #eaeaea', borderRadius: '6px', padding: '18px', backgroundColor: '#fafafa' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Time Saved
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                {project.resultsAndImpact.timeSaved}
              </div>
            </div>

            <div style={{ border: '1px solid #eaeaea', borderRadius: '6px', padding: '18px', backgroundColor: '#fafafa' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Cost Reduction
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                {project.resultsAndImpact.costReduction}
              </div>
            </div>

            <div style={{ border: '1px solid #eaeaea', borderRadius: '6px', padding: '18px', backgroundColor: '#fafafa' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Performance
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                {project.resultsAndImpact.performance}
              </div>
            </div>

            <div style={{ border: '1px solid #eaeaea', borderRadius: '6px', padding: '18px', backgroundColor: '#fafafa', gridColumn: '1 / -1' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Business Impact
              </div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>
                {project.resultsAndImpact.businessImpact}
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: '12px',
              fontStyle: 'italic',
              color: '#64748b',
              lineHeight: 1.5,
              paddingLeft: '4px',
            }}
          >
            Only include metrics and outcomes that can be verified. If quantitative data is unavailable, describe the confirmed qualitative improvements instead.
          </div>
        </section>

        {/* ----------------------------------------------------
            7. Key Takeaway
            ---------------------------------------------------- */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.015em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'SF Mono', 'Geist Mono', monospace",
                fontSize: '14px',
                color: '#2258e7',
                fontWeight: 700,
              }}
            >
              7.
            </span>
            Key Takeaway
          </h2>

          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #2258e7',
              borderRadius: '6px',
              padding: '24px',
            }}
          >
            <p
              style={{
                fontSize: '16.5px',
                lineHeight: 1.65,
                color: '#1e293b',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              "{project.keyTakeaway}"
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------
            Discuss Your Project & CTA
            ---------------------------------------------------- */}
        <section
          style={{
            borderTop: '1px solid #eaeaea',
            paddingTop: '48px',
            marginBottom: '64px',
          }}
        >
          <div
            style={{
              backgroundColor: '#0f172a',
              color: '#ffffff',
              borderRadius: '8px',
              padding: 'clamp(32px, 5vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div
                style={{
                  fontFamily: "'SF Mono', 'Geist Mono', monospace",
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#93c5fd',
                  marginBottom: '12px',
                }}
              >
                Start A Conversation
              </div>

              <h2
                style={{
                  fontSize: 'clamp(24px, 3.2vw, 36px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              >
                Discuss Your Project
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#cbd5e1',
                  marginBottom: '28px',
                }}
              >
                {project.discussStatement}
              </p>

              <button
                onClick={handleDiscussClick}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: 700,
                  padding: '14px 28px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  minHeight: '48px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: 'none',
                  transition: 'background-color 0.15s, transform 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f5f9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <span>{project.ctaText}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            Related Services
            ---------------------------------------------------- */}
        <section style={{ marginBottom: '56px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#64748b',
              marginBottom: '16px',
              fontFamily: "'SF Mono', 'Geist Mono', monospace",
            }}
          >
            Related Services
          </h3>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {project.relatedServices.map((service, idx) => (
              <button
                key={idx}
                onClick={() => onNavigatePage(service.slug)}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  padding: '10px 18px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2258e7';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <span>{service.name}</span>
                <ChevronRight size={14} color="#2258e7" />
              </button>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------
            Related Projects
            ---------------------------------------------------- */}
        {companionProjects.length > 0 && (
          <section style={{ marginBottom: '40px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#64748b',
                marginBottom: '20px',
                fontFamily: "'SF Mono', 'Geist Mono', monospace",
              }}
            >
              Related Projects
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
              }}
            >
              {companionProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onNavigatePage('project', p.id)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '160px',
                    transition: 'border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#2258e7';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontFamily: "'SF Mono', 'Geist Mono', monospace",
                        color: '#2258e7',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {p.overview.industry}
                    </div>
                    <h4
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#0f172a',
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {p.projectName}
                    </h4>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '13px',
                      color: '#2258e7',
                      fontWeight: 600,
                      marginTop: '16px',
                    }}
                  >
                    <span>View project case study</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Mobile Sticky Thumb-Zone Action Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid #eaeaea',
          padding: '12px 20px calc(12px + env(safe-area-inset-bottom, 0px))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          zIndex: 45,
        }}
        className="mobile-sticky-cta"
      >
        <button
          onClick={() => onNavigatePage('portfolio')}
          style={{
            background: 'none',
            border: 'none',
            color: '#64748b',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            minHeight: '44px',
            padding: '8px 12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <ArrowLeft size={16} /> All Projects
        </button>

        <button
          onClick={handleDiscussClick}
          style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            border: 'none',
            fontSize: '14px',
            fontWeight: 700,
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            minHeight: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>Discuss Project</span>
          <ArrowRight size={15} />
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-sticky-cta {
            display: none !important;
          }
        }
      `}</style>

      {/* Site Footer */}
      <Footer onNavigate={(target) => {
        if (target === '#casestudies') {
          onNavigatePage('portfolio');
        } else if (target === '#contact') {
          handleDiscussClick();
        } else {
          onNavigatePage('home');
        }
      }} />
    </article>
  );
};
