import React, { useMemo } from 'react';
import { X, ArrowRight, ExternalLink, Check, Code2, Layers, Database, Cpu } from 'lucide-react';
import { getUnifiedProject, UnifiedProject } from '../data/projectsData';

interface CaseStudyModalProps {
  studyId: string | null;
  onClose: () => void;
  onRequestQuote: () => void;
  onViewProjectPage?: (id: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  studyId,
  onClose,
  onRequestQuote,
  onViewProjectPage,
}) => {
  if (!studyId) return null;

  const project: UnifiedProject = useMemo(() => {
    return getUnifiedProject(studyId);
  }, [studyId]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 3vw, 24px)',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        data-lenis-prevent
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          backgroundColor: '#0A0A0A',
          border: '1px solid #A94F0B',
          color: '#FFFFFF',
          borderRadius: '8px',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(169, 79, 11, 0.25)',
          position: 'relative',
          padding: 'clamp(24px, 4vw, 44px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row with Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            borderBottom: '1px solid #1F1F23',
            paddingBottom: '14px',
          }}
        >
          <div
            style={{
              fontFamily: "'SF Mono', 'Geist Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              color: '#A94F0B',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            PROJECT // CASE STUDY
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {onViewProjectPage && (
              <button
                onClick={() => {
                  onClose();
                  onViewProjectPage(project.id);
                }}
                style={{
                  backgroundColor: '#121212',
                  border: '1px solid #A94F0B',
                  color: '#A94F0B',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#A94F0B';
                  e.currentTarget.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#121212';
                  e.currentTarget.style.color = '#A94F0B';
                }}
              >
                <span>Full Project Page</span>
                <ExternalLink size={12} />
              </button>
            )}

            <button
              onClick={onClose}
              style={{
                color: '#FFFFFF',
                backgroundColor: '#18181B',
                border: '1px solid #27272A',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A94F0B';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#18181B';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Title: [Project Name]. Case Study */}
        <h2
          id="modal-project-title"
          style={{
            fontSize: 'clamp(22px, 3.2vw, 32px)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          {project.title}
        </h2>

        {/* Project Overview Bento Box */}
        <div
          style={{
            backgroundColor: '#121212',
            border: '1px solid #27272A',
            borderRadius: '6px',
            padding: '20px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              fontFamily: "'SF Mono', 'Geist Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#A94F0B',
              marginBottom: '12px',
            }}
          >
            Project Overview
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px 18px',
              fontSize: '13.5px',
            }}
          >
            <div>
              <span style={{ color: '#9CA3AF', display: 'block', fontSize: '11px', fontWeight: 600 }}>Client</span>
              <strong style={{ color: '#FFFFFF' }}>{project.overview.client}</strong>
            </div>
            <div>
              <span style={{ color: '#9CA3AF', display: 'block', fontSize: '11px', fontWeight: 600 }}>Industry</span>
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}>{project.overview.industry}</span>
            </div>
            <div>
              <span style={{ color: '#9CA3AF', display: 'block', fontSize: '11px', fontWeight: 600 }}>Project Type</span>
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}>{project.overview.projectType}</span>
            </div>
            <div>
              <span style={{ color: '#9CA3AF', display: 'block', fontSize: '11px', fontWeight: 600 }}>Duration</span>
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}>{project.overview.projectDuration}</span>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <span style={{ color: '#9CA3AF', display: 'block', fontSize: '11px', fontWeight: 600 }}>Services Delivered</span>
              <span style={{ color: '#A94F0B', fontWeight: 600 }}>{project.overview.services}</span>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <span style={{ color: '#9CA3AF', display: 'block', fontSize: '11px', fontWeight: 600 }}>Technology Stack</span>
              <span style={{ color: '#D1D5DB', fontFamily: "'SF Mono', 'Geist Mono', monospace", fontSize: '12.5px' }}>{project.overview.technologyStack}</span>
            </div>
          </div>
        </div>

        {/* 7 Numbered Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              <span style={{ color: '#A94F0B', marginRight: '6px' }}>1.</span> Client Context
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.6, fontSize: '14.5px', margin: 0 }}>
              {project.clientContext}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              <span style={{ color: '#A94F0B', marginRight: '6px' }}>2.</span> The Challenge
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.6, fontSize: '14.5px', margin: 0 }}>
              {project.challenge}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              <span style={{ color: '#A94F0B', marginRight: '6px' }}>3.</span> Project Constraints
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.6, fontSize: '14.5px', margin: 0 }}>
              {project.constraints}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              <span style={{ color: '#A94F0B', marginRight: '6px' }}>4.</span> Our Approach
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.6, fontSize: '14.5px', margin: 0 }}>
              {project.approach}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              <span style={{ color: '#A94F0B', marginRight: '6px' }}>5.</span> The Solution
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.6, fontSize: '14.5px', marginBottom: '14px' }}>
              {project.solution}
            </p>

            {/* Key Features */}
            <div style={{ backgroundColor: '#121212', border: '1px solid #27272A', borderRadius: '4px', padding: '16px', marginBottom: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                Key Features and Capabilities
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.keyFeatures.map((f, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#D1D5DB' }}>
                    <Check size={14} color="#A94F0B" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Implementation */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              <div style={{ border: '1px solid #27272A', backgroundColor: '#121212', borderRadius: '4px', padding: '12px', fontSize: '12.5px' }}>
                <div style={{ color: '#A94F0B', fontWeight: 700, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Code2 size={13} color="#A94F0B" /> FRONTEND
                </div>
                <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{project.technologyImplementation.frontend}</div>
              </div>
              <div style={{ border: '1px solid #27272A', backgroundColor: '#121212', borderRadius: '4px', padding: '12px', fontSize: '12.5px' }}>
                <div style={{ color: '#A94F0B', fontWeight: 700, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Layers size={13} color="#A94F0B" /> BACKEND
                </div>
                <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{project.technologyImplementation.backend}</div>
              </div>
              <div style={{ border: '1px solid #27272A', backgroundColor: '#121212', borderRadius: '4px', padding: '12px', fontSize: '12.5px' }}>
                <div style={{ color: '#A94F0B', fontWeight: 700, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Database size={13} color="#A94F0B" /> DATABASE
                </div>
                <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{project.technologyImplementation.database}</div>
              </div>
              {project.technologyImplementation.aiAutomation && (
                <div style={{ border: '1px solid #27272A', backgroundColor: '#121212', borderRadius: '4px', padding: '12px', fontSize: '12.5px' }}>
                  <div style={{ color: '#A94F0B', fontWeight: 700, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Cpu size={13} color="#A94F0B" /> AI / AUTOMATION
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{project.technologyImplementation.aiAutomation}</div>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              <span style={{ color: '#A94F0B', marginRight: '6px' }}>6.</span> Results and Business Impact
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.6, fontSize: '14.5px', marginBottom: '14px' }}>
              {project.resultsAndImpact.summary}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              <div style={{ border: '1px solid #27272A', borderRadius: '4px', padding: '12px', backgroundColor: '#121212' }}>
                <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Efficiency</span>
                <strong style={{ fontSize: '13.5px', color: '#FFFFFF' }}>{project.resultsAndImpact.efficiency}</strong>
              </div>
              <div style={{ border: '1px solid #27272A', borderRadius: '4px', padding: '12px', backgroundColor: '#121212' }}>
                <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Time Saved</span>
                <strong style={{ fontSize: '13.5px', color: '#FFFFFF' }}>{project.resultsAndImpact.timeSaved}</strong>
              </div>
              <div style={{ border: '1px solid #27272A', borderRadius: '4px', padding: '12px', backgroundColor: '#121212' }}>
                <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Cost Reduction</span>
                <strong style={{ fontSize: '13.5px', color: '#FFFFFF' }}>{project.resultsAndImpact.costReduction}</strong>
              </div>
              <div style={{ border: '1px solid #27272A', borderRadius: '4px', padding: '12px', backgroundColor: '#121212' }}>
                <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Performance</span>
                <strong style={{ fontSize: '13.5px', color: '#FFFFFF' }}>{project.resultsAndImpact.performance}</strong>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#121212', borderLeft: '3px solid #A94F0B', padding: '16px', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
              <span style={{ color: '#A94F0B', marginRight: '6px' }}>7.</span> Key Takeaway
            </h3>
            <p style={{ color: '#A94F0B', fontStyle: 'italic', margin: 0, fontSize: '14.5px', lineHeight: 1.55 }}>
              "{project.keyTakeaway}"
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid #1F1F23',
          }}
        >
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            style={{
              backgroundColor: '#A94F0B',
              color: '#000000',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <span>{project.ctaText}</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={onClose}
            style={{
              color: '#9CA3AF',
              fontSize: '13.5px',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: '8px 12px',
            }}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
