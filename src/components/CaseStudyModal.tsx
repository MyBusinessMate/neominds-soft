import React from 'react';
import { X, ArrowRight } from 'lucide-react';

import { PORTFOLIO_CASE_STUDIES } from '../data/portfolioData';

export interface CaseStudyDetail {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  clientContext?: string;
  constraints?: string;
  approach?: string;
  results?: string;
  takeaway?: string;
}

const rawCaseStudyDetails: Record<string, CaseStudyDetail> = {
  'authenticom-ai-etl': {
    id: 'authenticom-ai-etl',
    title: 'Mission-Critical ETL Platform Modernization with Agentic AI',
    client: 'Authenticom Inc.',
    industry: 'Automotive & Data Integration',
    duration: '12 Months',
    tags: ['Automotive', 'Artificial Intelligence', 'Data Pipelines', 'Modernization', 'Cloud Native'],
    summary:
      'Modernized a mission-critical automotive ETL data pipeline with Claude AI agents to automate data ingestion, mapping, validation, and real-time schema reconciliation.',
    challenge:
      'Authenticom handles massive data feeds from thousands of automotive dealerships. Legacy batch ETL pipelines struggled with varied proprietary schemas, frequent field drift, and costly manual onboarding.',
    solution:
      'Neominds designed an intelligent event-driven pipeline powered by Claude agentic models. The solution automatically interprets unstructured data formats, standardizes feeds, validates data integrity, and flags anomalies with zero human overhead.',
    metrics: [
      { label: 'Ingestion Throughput', value: '4.8x Faster' },
      { label: 'Manual Mapping Overhead', value: '-74%' },
      { label: 'Platform Availability', value: '99.99%' },
      { label: 'Schema Adaptation', value: 'Real-time' },
    ],
    technologies: ['Python / FastAPI', 'Claude 3.5 Sonnet', 'Apache Kafka', 'PostgreSQL', 'AWS Cloud', 'Docker / Kubernetes'],
  },
  'trading-platform': {
    id: 'trading-platform',
    title: 'High-Throughput Trading Engine for 1M+ Active Traders',
    client: 'Global FinTech Exchange',
    industry: 'Financial Services & Trading',
    duration: '18 Months',
    tags: ['Financial Services', 'Trading Engine', 'Ultra-Low Latency', 'Microservices', 'High Concurrency'],
    summary:
      'Engineered a scalable multi-asset trading and risk management platform handling ultra-low latency execution and millions of active market participants.',
    challenge:
      'The client needed to replace a legacy trading stack incapable of handling high-volatility spikes during global market openings, resulting in execution bottlenecks and slippage.',
    solution:
      'Neominds architected an event-driven microservices platform utilizing memory-optimized distributed caches, real-time WebSockets, and resilient regulatory compliance reporting.',
    metrics: [
      { label: 'Active Users', value: '1M+' },
      { label: 'Execution Latency', value: '< 12 ms' },
      { label: 'Order Throughput', value: '50k+ req/sec' },
      { label: 'System Uptime', value: '99.999%' },
    ],
    technologies: ['C# / .NET Core', 'Go', 'Redis Cluster', 'Kafka', 'React / TypeScript', 'Kubernetes / Azure'],
  },
  'motive-retail-ai': {
    id: 'motive-retail-ai',
    title: 'Claude AI Automated Dealer Management Integration',
    client: 'Motive Retail',
    industry: 'Automotive Tech & ISV',
    duration: '9 Months',
    tags: ['Automotive', 'AI Integration', 'Claude Partner', 'API Automation', 'Cloud'],
    summary:
      'Partnered to deploy Claude-powered agentic systems for accelerated automotive dealer software certification and documentation validation.',
    challenge:
      'Automotive dealership integration and certification required weeks of back-and-forth technical documentation review, creating severe onboarding friction for OEMs.',
    solution:
      'As a Claude Partner Network member, Neominds built an intelligent agent assistant that reviews API specifications, validates test suites against dealer systems, and automatically surfaces integration corrections.',
    metrics: [
      { label: 'Integration Cycle', value: '-65%' },
      { label: 'Automated Certification', value: '92%' },
      { label: 'Dealer Onboarding', value: '3x Faster' },
      { label: 'API Accuracy', value: '99.8%' },
    ],
    technologies: ['Claude AI', 'TypeScript', 'Node.js', 'AWS Lambda', 'GraphQL', 'Terraform'],
  },
  'trubridge-medical-ai': {
    id: 'trubridge-medical-ai',
    title: 'AI-Powered Clinical Record Analysis & Medical Coding Automation',
    client: 'TruBridge',
    industry: 'Healthcare & HealthTech',
    duration: '14 Months',
    tags: ['Healthcare', 'Applied AI', 'HIPAA Compliant', 'Medical Coding', 'Cloud Security'],
    summary:
      'Engineered an enterprise healthcare AI platform that parses unstructured Electronic Health Records (EHR) and suggests ICD-10 medical codes with high clinical precision.',
    challenge:
      'Manual medical chart coding created multi-week billing delays, high administrative overhead, and susceptibility to coding audit rejections across community hospitals.',
    solution:
      'Neominds engineered a HIPAA-compliant, private AI pipeline that extracts clinical terms from physician notes, correlates diagnoses with lab results, and cross-references ICD-10 guidelines.',
    metrics: [
      { label: 'Coding Turnaround', value: '3.4x Faster' },
      { label: 'Coding Error Reduction', value: '-52%' },
      { label: 'HIPAA Isolation', value: '100% Zero-Leak' },
      { label: 'Billing Claim Acceptance', value: '98.6%' },
    ],
    technologies: ['Python', 'PyTorch / Transformers', 'FastAPI', 'Vector Databases', 'AWS GovCloud', 'PostgreSQL'],
  },
};

// Build portfolio items dynamically from the 30 client portfolio dataset
const portfolioCaseStudiesMap: Record<string, CaseStudyDetail> = {};

PORTFOLIO_CASE_STUDIES.forEach((item) => {
  portfolioCaseStudiesMap[item.id] = {
    id: item.id,
    title: item.title,
    client: item.client,
    industry: item.category,
    duration: 'Production Deployment',
    tags: item.tags,
    summary: item.description,
    challenge: item.details?.challenge || item.description,
    solution: item.details?.solution || item.description,
    metrics: [
      { label: item.metricLabel || 'Core Metric', value: item.metric || 'Verified' },
      { label: 'Scope / Scale', value: item.stats || 'Enterprise Grade' },
    ],
    technologies: [item.technology, ...item.tags],
    clientContext: item.details?.clientContext,
    constraints: item.details?.constraints,
    approach: item.details?.approach,
    results: item.details?.results,
    takeaway: item.details?.takeaway,
  };
});

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  ...portfolioCaseStudiesMap,
  ...rawCaseStudyDetails,
  // Backward-compatibility and verified registry aliases
  'authenticom': rawCaseStudyDetails['authenticom-ai-etl'],
  'trubridge': rawCaseStudyDetails['trubridge-medical-ai'],
  'enterprise-ai-etl': rawCaseStudyDetails['authenticom-ai-etl'],
  'cloud-commerce-platform': rawCaseStudyDetails['trading-platform'],
  'healthcare-clinical-ai': rawCaseStudyDetails['trubridge-medical-ai'],
  'etl-modernization': rawCaseStudyDetails['authenticom-ai-etl'],
  'medical-coding': rawCaseStudyDetails['trubridge-medical-ai'],
  '1': rawCaseStudyDetails['authenticom-ai-etl'],
  '2': rawCaseStudyDetails['trading-platform'],
  '3': rawCaseStudyDetails['motive-retail-ai'],
  '4': rawCaseStudyDetails['trubridge-medical-ai'],
};

interface CaseStudyModalProps {
  studyId: string | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ studyId, onClose, onRequestQuote }) => {
  if (!studyId || !caseStudyDetails[studyId]) return null;

  const data = caseStudyDetails[studyId];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 19, 52, 0.85)',
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
      aria-labelledby="modal-case-study-title"
    >
      <div
        data-lenis-prevent
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          backgroundColor: '#001334',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          borderRadius: '0px',
          overflowY: 'auto',
          boxShadow: 'none',
          position: 'relative',
          padding: 'clamp(24px, 4vw, 48px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            borderRadius: '0px',
            transition: 'background-color 0.2s',
          }}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px', paddingRight: '48px' }}>
          {data.tags.map((t, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '12px',
                fontWeight: 600,
                color: '#93c5fd',
                backgroundColor: 'rgba(34, 88, 231, 0.2)',
                padding: '4px 12px',
                border: '1px solid rgba(34, 88, 231, 0.4)',
                borderRadius: '0px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          id="modal-case-study-title"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          {data.title}
        </h2>

        {/* Client & Metadata */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            paddingBottom: '20px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '14px',
            fontFamily: 'var(--font-body)',
            color: '#8893a7',
          }}
        >
          <div>
            Client: <strong style={{ color: '#ffffff' }}>{data.client}</strong>
          </div>
          <div>
            Industry: <strong style={{ color: '#ffffff' }}>{data.industry}</strong>
          </div>
          <div>
            Duration: <strong style={{ color: '#ffffff' }}>{data.duration}</strong>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
            marginBottom: '36px',
          }}
        >
          {data.metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px',
                borderRadius: '0px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: '#2258e7', marginBottom: '4px' }}>
                {m.value}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 600, color: '#8893a7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Structured Case Study Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
          {data.clientContext && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Client Context & Background
              </h3>
              <p className="body-text" style={{ color: '#d0d3dd', lineHeight: 1.65 }}>
                {data.clientContext}
              </p>
            </div>
          )}

          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
              The Engineering Challenge
            </h3>
            <p className="body-text" style={{ color: '#d0d3dd', lineHeight: 1.65 }}>
              {data.challenge}
            </p>
          </div>

          {data.constraints && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Constraints & Edge Conditions
              </h3>
              <p className="body-text" style={{ color: '#d0d3dd', lineHeight: 1.65 }}>
                {data.constraints}
              </p>
            </div>
          )}

          {data.approach && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Architectural Approach
              </h3>
              <p className="body-text" style={{ color: '#d0d3dd', lineHeight: 1.65 }}>
                {data.approach}
              </p>
            </div>
          )}

          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
              Our Architectural Solution
            </h3>
            <p className="body-text" style={{ color: '#d0d3dd', lineHeight: 1.65 }}>
              {data.solution}
            </p>
          </div>

          {data.results && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Verified Results & Impact
              </h3>
              <p className="body-text" style={{ color: '#d0d3dd', lineHeight: 1.65 }}>
                {data.results}
              </p>
            </div>
          )}

          {data.takeaway && (
            <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.08)', border: '1px solid rgba(34, 88, 231, 0.25)', padding: '16px 20px', borderRadius: '0px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 700, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                Key Engineering Takeaway
              </div>
              <p className="body-text" style={{ color: '#ffffff', margin: 0, lineHeight: 1.6 }}>
                {data.takeaway}
              </p>
            </div>
          )}
        </div>

        {/* Technologies Used */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
            Technology & Infrastructure Stack
          </h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {data.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '6px 14px',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="btn btn-primary btn-lg"
          >
            Discuss similar project <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </button>

          <button
            onClick={onClose}
            style={{ color: '#8893a7', fontSize: '14px', cursor: 'pointer', fontFamily: 'var(--font-heading)', minHeight: '44px', padding: '8px 16px', background: 'none', border: 'none' }}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
