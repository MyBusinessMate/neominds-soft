import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Workflow,
  BarChart3,
  Search,
  ListTodo,
  Layers,
  ChevronDown,
  ShieldCheck,
  Zap,
  Lock,
} from 'lucide-react';

interface BusinessAnalysisPageProps {
  onNavigateHome: () => void;
  onOpenPrivacy?: () => void;
  onSuccessToast?: (msg: string) => void;
}

export const BusinessAnalysisPage: React.FC<BusinessAnalysisPageProps> = ({
  onNavigateHome,
  onOpenPrivacy,
  onSuccessToast,
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectScope: '',
    ndaRequired: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSuccessToast) {
        onSuccessToast('Business analysis consultation request submitted! Our lead BA will contact you within 24 hours.');
      } else {
        alert('Thank you! Your business analysis request has been received.');
      }
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectScope: '',
        ndaRequired: true,
      });
    }, 900);
  };

  // 6 Core BA Services Cards
  const baServices = [
    {
      icon: <FileText size={24} color="#2258e7" />,
      title: 'Requirements Engineering & Specification',
      description: 'Elicit, structure, and document business, functional, and non-functional requirements into clear BRDs, PRDs, and backlog items.',
      metric: 'Zero ambiguity backlog',
      deliverable: 'PRD & Functional Specifications',
    },
    {
      icon: <Workflow size={24} color="#2258e7" />,
      title: 'Business Process Modeling (BPMN 2.0)',
      description: 'Analyze current-state (As-Is) workflows to identify bottlenecks and design streamlined future-state (To-Be) process maps.',
      metric: 'Up to 40% process optimization',
      deliverable: 'BPMN 2.0 Interactive Diagrams',
    },
    {
      icon: <Search size={24} color="#2258e7" />,
      title: 'Feasibility & ROI Business Case Modeling',
      description: 'Evaluate technical viability, operational costs, implementation risks, and estimated return on investment before engineering commences.',
      metric: 'Data-driven capital allocation',
      deliverable: 'Comprehensive Business Case Report',
    },
    {
      icon: <Layers size={24} color="#2258e7" />,
      title: 'Gap Analysis & Legacy Modernization',
      description: 'Identify capability gaps between existing legacy software and target business objectives to create non-disruptive migration paths.',
      metric: 'Smooth phased transition',
      deliverable: 'Gap Matrix & Migration Plan',
    },
    {
      icon: <ListTodo size={24} color="#2258e7" />,
      title: 'Agile Backlog & User Story Architecture',
      description: 'Translate high-level features into developer-ready user stories complete with Gherkin acceptance criteria (Given-When-Then).',
      metric: 'Sprint-ready backlog stories',
      deliverable: 'Jira Backlog with Acceptance Criteria',
    },
    {
      icon: <BarChart3 size={24} color="#2258e7" />,
      title: 'Data Flow & KPI Dashboard Analytics',
      description: 'Define key business metrics, event tracking schemas, data flow models, and reporting requirements for executive leadership.',
      metric: 'Real-time decision intelligence',
      deliverable: 'Data Dictionary & Analytics Spec',
    },
  ];

  // 3 Core BA Pillars
  const baPillars = [
    {
      number: '01',
      title: 'Strategic Alignment',
      description: 'Ensure every software sprint, technical architecture decision, and user interface component maps directly to measurable business KPIs and revenue objectives.',
    },
    {
      number: '02',
      title: 'Scope De-Risking',
      description: 'Eliminate costly mid-project requirement pivots and feature creep by establishing strict acceptance criteria and stakeholder consensus upfront.',
    },
    {
      number: '03',
      title: 'Accelerated Velocity',
      description: 'Provide engineering squads with crystal-clear specifications, decreasing developer idle time, reducing rework by up to 50%, and speeding time-to-market.',
    },
  ];

  // BA Deliverables Breakdown
  const baDeliverables = [
    { title: 'Product Requirements Document (PRD)', desc: 'Complete functional breakdown, user personas, system workflows, and edge-case behaviors.' },
    { title: 'BPMN 2.0 Process Maps', desc: 'Visual Swimlane diagrams detailing business logic, automated triggers, and human-in-the-loop tasks.' },
    { title: 'Traceability Matrix', desc: 'Bidirectional mapping connecting high-level business goals to specific technical test cases.' },
    { title: 'Gherkin User Stories', desc: 'Granular backlog tickets formatted with Given-When-Then criteria ready for sprint estimation.' },
    { title: 'Data Flow & Entity Schemas', desc: 'Conceptual data models, third-party API integration payloads, and validation rules.' },
    { title: 'Cost-Benefit & ROI Analysis', desc: 'Financial forecast model projecting development ROI, operational savings, and payback horizon.' },
  ];

  // FAQs
  const faqs = [
    {
      q: 'How does Business Analysis differ from Product Discovery?',
      a: 'While Product Discovery focuses heavily on market validation, UX prototyping, and high-level architectural feasibility, Business Analysis dives deep into enterprise operational workflows, detailed BPMN mapping, functional requirement documentation (BRD/PRD), and Gherkin user stories for development teams.',
    },
    {
      q: 'Can our Business Analyst work directly with our existing internal developers?',
      a: 'Yes. Our senior Business Analysts integrate seamlessly into your existing agile ceremonies (sprint planning, backlog grooming, daily standups) to support your internal or third-party engineering teams.',
    },
    {
      q: 'What methodology and tools do your Business Analysts use?',
      a: 'Our team follows IIBA (BABOK) standards and Agile frameworks. We utilize industry-standard tools including Jira, Confluence, Miro, Lucidchart, Figma, Postman, and SQL/PowerBI for data analysis.',
    },
    {
      q: 'How long does an initial Business Analysis phase take?',
      a: 'A focused requirements elicitation and process mapping phase typically spans 2 to 4 weeks depending on the scope and complexity of your enterprise workflows.',
    },
    {
      q: 'Do you provide continuous BA support during development sprints?',
      a: 'Yes. We provide ongoing BA sprint support to clarify requirements, validate completed increments against acceptance criteria, and refine subsequent sprint backlogs.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* 1. HERO SECTION (Matches Image 3) */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 96px) clamp(16px, 5vw, 64px)',
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(34, 88, 231, 0.08)',
              border: '1px solid rgba(34, 88, 231, 0.25)',
              padding: '6px 14px',
              borderRadius: '2px',
              color: '#2258e7',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '24px',
              letterSpacing: '0.02em',
            }}
          >
            <Workflow size={15} />
            <span>Strategic Enterprise Analysis & PRD</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(38px, 5.5vw, 64px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              margin: '0 0 24px 0',
              fontFamily: 'var(--font-heading)',
              color: '#0f172a',
            }}
          >
            Business Analysis <br />
            <span style={{ color: '#2258e7' }}>Services</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              color: '#475569',
              lineHeight: 1.65,
              maxWidth: '580px',
              margin: '0 0 36px 0',
            }}
          >
            Align strategic business vision with seamless technological execution. We translate complex business requirements into clear functional specs, BPMN workflows, user stories, and measurable ROI.
          </p>

          <div className="btn-group-lg">
            <button
              onClick={() => {
                document.getElementById('contact-rfp')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary btn-lg"
            >
              <span>Book a consultation</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => {
                document.getElementById('ba-deliverables')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-outline btn-lg"
            >
              <span>Explore deliverables</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Hero Visual: Strategic Meeting & Workflow Grid */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '28px',
              position: 'relative',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(34, 88, 231, 0.12)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>ENTERPRISE PROCESS BLUEPRINT</span>
              <span style={{ fontSize: '11px', color: '#2258e7', backgroundColor: 'rgba(34, 88, 231, 0.18)', padding: '2px 8px', borderRadius: '4px' }}>
                BPMN 2.0 Validated
              </span>
            </div>

            {/* Workflow steps card mock */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <div style={{ backgroundColor: '#161922', padding: '12px 14px', borderRadius: '4px', borderLeft: '3px solid #2258e7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>1. Stakeholder Discovery</div>
                  <div style={{ fontSize: '11px', color: '#8893a7' }}>Elicit 42 functional requirements</div>
                </div>
                <CheckCircle2 size={16} color="#10b981" />
              </div>

              <div style={{ backgroundColor: '#161922', padding: '12px 14px', borderRadius: '4px', borderLeft: '3px solid #3b82f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>2. To-Be Process Optimization</div>
                  <div style={{ fontSize: '11px', color: '#8893a7' }}>Automated workflow reduces manual steps by 65%</div>
                </div>
                <CheckCircle2 size={16} color="#10b981" />
              </div>

              <div style={{ backgroundColor: '#161922', padding: '12px 14px', borderRadius: '4px', borderLeft: '3px solid #10b981', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>3. Agile PRD & User Stories</div>
                  <div style={{ fontSize: '11px', color: '#8893a7' }}>Developer-ready backlog with Gherkin tests</div>
                </div>
                <CheckCircle2 size={16} color="#10b981" />
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.1)', border: '1px solid rgba(34, 88, 231, 0.3)', padding: '12px', borderRadius: '4px', textAlign: 'center', fontSize: '12px', color: '#93c5fd' }}>
              ✦ Eliminates up to 50% of development rework through rigorous pre-sprint analysis.
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLUE CERTIFICATION & STANDARDS STRIP */}
      <section style={{ backgroundColor: '#2258e7', padding: '24px clamp(16px, 4vw, 48px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={26} color="#ffffff" />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                CERTIFIED IIBA & AGILE PRACTITIONERS
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                Industry-certified CBAP business analysts and Scrum Product Owners
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px' }}>IIBA BABOK v3 Standards</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>•</span>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px' }}>Scrum Alliance CSPO</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>•</span>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px' }}>BPMN 2.0 Certified</span>
          </div>
        </div>
      </section>

      {/* 3. WHY BUSINESS ANALYSIS MATTERS & EXECUTIVE QUOTE */}
      <section style={{ padding: 'clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)', maxWidth: '1360px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
              THE VALUE OF RIGOR
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 20px 0' }}>
              Bridging the Gap Between Executive Vision & Engineering Code
            </h2>
            <p style={{ color: '#a0aec0', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
              Building the wrong features efficiently is the greatest cost in software development. Our Business Analysts uncover hidden operational friction, validate financial ROI, and define complete functional specs to ensure engineering squads build what matters most.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Eliminate ambiguity with formal Business Requirement Documents (BRD)',
                'Model optimized As-Is and To-Be workflows using standard BPMN 2.0',
                'Reduce sprint rework by writing developer-ready Gherkin stories',
                'Ensure bidirectional traceability from business KPI to automated test case',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#2258e7" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#e4e4e7', fontSize: '15px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Executive Quote Card with Headshot portrait */}
          <div
            style={{
              backgroundColor: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ fontSize: '48px', color: '#2258e7', lineHeight: 1, marginBottom: '16px', fontFamily: 'serif' }}>
              “
            </div>
            <p style={{ color: '#e4e4e7', fontSize: '16px', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
              Effective Business Analysis eliminates the dangerous communication gap between high-level executive strategy and software development squads. By de-risking requirements upfront, we guarantee that every sprint delivers tangible commercial value.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#2258e7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                }}
              >
                👤
              </div>
              <div>
                <h5 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>Elena Rostova, CBAP</h5>
                <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#8893a7' }}>Head of Business Analysis & Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3 CORE BA PILLARS (01 - 03) */}
      <section style={{ backgroundColor: '#090b0e', padding: 'clamp(64px, 8vw, 96px) clamp(16px, 5vw, 64px)', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {baPillars.map((p) => (
              <div
                key={p.number}
                style={{
                  backgroundColor: '#11141c',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  padding: '36px 32px',
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#2258e7', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                  {p.number}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: '0 0 12px 0' }}>
                  {p.title}
                </h3>
                <p style={{ color: '#a0aec0', fontSize: '15px', lineHeight: 1.65, margin: 0 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 6 CORE BUSINESS ANALYSIS SERVICES */}
      <section style={{ padding: 'clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)', maxWidth: '1360px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px auto' }}>
          <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
            SPECIALIZED BA DISCIPLINES
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px 0' }}>
            Our Business Analysis Offerings
          </h2>
          <p style={{ color: '#a0aec0', fontSize: '16px', lineHeight: 1.6 }}>
            End-to-end analytical services that empower enterprise stakeholders and accelerate sprint cycles.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {baServices.map((svc) => (
            <div
              key={svc.title}
              style={{
                backgroundColor: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 88, 231, 0.6)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(34, 88, 231, 0.15)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  {svc.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: '0 0 12px 0' }}>
                  {svc.title}
                </h3>
                <p style={{ color: '#a0aec0', fontSize: '14px', lineHeight: 1.65, margin: '0 0 20px 0' }}>
                  {svc.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', color: '#2258e7', fontWeight: 600 }}>{svc.metric}</span>
                <span style={{ fontSize: '12px', color: '#8893a7' }}>{svc.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TANGIBLE BA DELIVERABLES BREAKDOWN */}
      <section
        id="ba-deliverables"
        style={{
          backgroundColor: '#090b0e',
          padding: 'clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px auto' }}>
            <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
              TANGIBLE ARTIFACTS
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, margin: '0 0 16px 0' }}>
              What You Receive at Completion
            </h2>
            <p style={{ color: '#a0aec0', fontSize: '16px' }}>
              Complete, production-ready specifications and process documentation transferred to your ownership.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {baDeliverables.map((deliv) => (
              <div
                key={deliv.title}
                style={{
                  backgroundColor: '#11141c',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <CheckCircle2 size={18} color="#2258e7" />
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', margin: 0 }}>{deliv.title}</h4>
                </div>
                <p style={{ color: '#a0aec0', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                  {deliv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section style={{ padding: 'clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)', maxWidth: '920px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, margin: 0 }}>
            Business Analysis FAQs
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              style={{
                backgroundColor: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 600,
                  textAlign: 'left',
                }}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: expandedFaq === idx ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: '#2258e7',
                    flexShrink: 0,
                  }}
                />
              </button>

              {expandedFaq === idx && (
                <div style={{ padding: '0 24px 24px 24px', color: '#a0aec0', fontSize: '14px', lineHeight: 1.7, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. STILL HAVE QUESTIONS? */}
      <section style={{ padding: '0 clamp(16px, 5vw, 64px) 48px', maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #091326 0%, #132a56 100%)',
            border: '1px solid rgba(34, 88, 231, 0.4)',
            borderRadius: '8px',
            padding: '36px clamp(20px, 4vw, 48px)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#2258e7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}
            >
              📊
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>
                Need help scoping your enterprise software?
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', margin: 0 }}>
                Speak with a Lead Business Analyst to review your workflows and create a custom PRD roadmap.
              </p>
            </div>
          </div>

          <button
            onClick={() => document.getElementById('contact-rfp')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: '#2258e7',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Schedule BA consultation
          </button>
        </div>
      </section>

      {/* 9. CONTACT & RFP FORM */}
      <section
        id="contact-rfp"
        style={{
          padding: 'clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>
          <div>
            <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
              START WITH CLARITY
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 20px 0' }}>
              Request a Business Analysis consultation
            </h2>
            <p style={{ color: '#a0aec0', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
              Fill out the form below. We will assign a dedicated Business Analyst to conduct an initial discovery session within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <ShieldCheck size={20} color="#2258e7" />
                <span style={{ color: '#ffffff', fontSize: '14px' }}>Mutual NDA executed before discussion</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Zap size={20} color="#2258e7" />
                <span style={{ color: '#ffffff', fontSize: '14px' }}>Direct discussion with CBAP-certified analysts</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Lock size={20} color="#2258e7" />
                <span style={{ color: '#ffffff', fontSize: '14px' }}>100% IP rights and documentation ownership</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              padding: 'clamp(24px, 4vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#8893a7', marginBottom: '6px' }}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Chen"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161922', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px', color: '#ffffff', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#8893a7', marginBottom: '6px' }}>Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="rachel@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161922', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px', color: '#ffffff', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#8893a7', marginBottom: '6px' }}>Phone / WhatsApp</label>
                <input
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161922', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px', color: '#ffffff', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#8893a7', marginBottom: '6px' }}>Company</label>
                <input
                  type="text"
                  placeholder="e.g. FinTech Innovations"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161922', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px', color: '#ffffff', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#8893a7', marginBottom: '6px' }}>Business Challenge & Scope</label>
              <textarea
                rows={4}
                placeholder="Describe your current business processes, target software objectives, or existing challenges..."
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161922', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px', color: '#ffffff', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#a0aec0' }}>
              <input
                type="checkbox"
                checked={formData.ndaRequired}
                onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
              />
              <span>Send mutual Non-Disclosure Agreement (NDA) prior to our consultation</span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-md"
              style={{
                width: '100%',
                marginTop: '8px',
              }}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* 10. GLOBAL LOCATIONS & FOOTER */}
      <footer style={{ backgroundColor: '#08090d', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '48px clamp(16px, 5vw, 64px) 32px' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '32px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              gap: '16px',
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#8893a7', letterSpacing: '0.04em' }}>
              GLOBAL HUBS:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '13px', color: '#ffffff' }}>
              <span>🇺🇸 San Francisco, CA</span>
              <span>🇬🇧 London, UK</span>
              <span>🇩🇪 Frankfurt, DE</span>
              <span>🇵🇱 Warsaw, PL</span>
              <span>🇸🇬 Singapore</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              padding: '48px 0',
            }}
          >
            <div>
              <div
                onClick={onNavigateHome}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', marginBottom: '16px' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '18px' }}>
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%' }} />
                </div>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>Neominds</span>
              </div>
              <p style={{ color: '#8893a7', fontSize: '13px', lineHeight: 1.6 }}>
                Engineering robust, scalable software solutions with enterprise-grade precision since 2000.
              </p>
            </div>

            <div>
              <h5 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '14px' }}>Services</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#8893a7' }}>
                <li style={{ color: '#2258e7', fontWeight: 600 }}>Business Analysis (Active)</li>
                <li>Product Engineering</li>
                <li>Product Discovery</li>
                <li>Cloud Solutions</li>
                <li>AI & Machine Learning</li>
              </ul>
            </div>

            <div>
              <h5 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '14px' }}>Industries</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#8893a7' }}>
                <li>FinTech & Trading</li>
                <li>Healthcare & RCM</li>
                <li>Enterprise Logistics</li>
                <li>Biotechnology</li>
                <li>Cybersecurity</li>
              </ul>
            </div>

            <div>
              <h5 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '14px' }}>Company</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#8893a7' }}>
                <li>About Us</li>
                <li>Leadership Team</li>
                <li>Case Studies</li>
                <li>Careers</li>
                <li>Security & Trust</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '24px',
              fontSize: '12px',
              color: '#6b7280',
              gap: '12px',
            }}
          >
            <div>© 2026 Neominds. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span onClick={onOpenPrivacy} style={{ cursor: 'pointer' }}>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Security Architecture</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
