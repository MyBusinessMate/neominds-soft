import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Server,
  Cloud,
  Lock,
  Workflow,
  Sparkles,
  Award,
  BarChart3,
} from 'lucide-react';
import { Footer } from './Footer';

interface ITConsultingPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
}

export const ITConsultingPage: React.FC<ITConsultingPageProps> = ({
  onNavigatePage,
  onSuccessToast,
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    consultingNeed: 'Architecture Assessment',
    budget: '',
    message: '',
    ndaRequired: true,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    onSuccessToast('Your IT consulting request has been received. A Principal Consultant will contact you within 24h.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      consultingNeed: 'Architecture Assessment',
      budget: '',
      message: '',
      ndaRequired: true,
    });
  };

  const consultingPillars = [
    {
      title: 'Enterprise Architecture Assessment',
      description:
        'Thorough code audits, technical debt quantification, bottleneck detection, and modular decomposition to build high-availability decoupled systems.',
      icon: Server,
      deliverables: ['Full Architecture Health Report', 'Component Dependency Graphs', 'Target State Roadmap'],
    },
    {
      title: 'Cloud Strategy & FinOps Optimization',
      description:
        'Multi-cloud migration plans across AWS, Azure, and OCI. We implement automated autoscaling and FinOps governance to cut cloud spend by up to 35%.',
      icon: Cloud,
      deliverables: ['Cloud Migration Blueprint', 'FinOps Cost Audit', 'Infrastructure as Code (Terraform)'],
    },
    {
      title: 'Digital Transformation & Modernization',
      description:
        'Migrate legacy monolithic systems into event-driven microservices using Strangler Fig patterns without operational disruption or downtime.',
      icon: Workflow,
      deliverables: ['Legacy Modernization Matrix', 'Event-Driven API Specs', 'Risk-Mitigated Phased Plan'],
    },
    {
      title: 'Cybersecurity, ISO 27001 & Compliance',
      description:
        'End-to-end security audits, vulnerability assessments, penetration testing, and compliance alignment for HIPAA, SOC 2 Type II, and ISO/IEC 27001:2022.',
      icon: Lock,
      deliverables: ['Security Posture Scorecard', 'Compliance GAP Analysis', 'Zero-Trust Architecture Spec'],
    },
    {
      title: 'Data Strategy & Lakehouse Architecture',
      description:
        'Design unified data pipelines, Kafka streaming engines, and Snowflake/Databricks lakehouses to power real-time business intelligence and predictive ML.',
      icon: BarChart3,
      deliverables: ['Data Lineage & Governance Plan', 'Lakehouse Data Topology', 'BI Analytics Dashboard Specs'],
    },
    {
      title: 'Fractional CTO & Executive Advisory',
      description:
        'Strategic technology advisory for executive boards, private equity due diligence, technical talent structuring, and roadmap validation.',
      icon: Award,
      deliverables: ['Technical Due Diligence Report', 'Engineering Hiring Framework', 'Investor Technical Deck'],
    },
  ];

  const faqs = [
    {
      q: 'What is the standard engagement timeline for an IT Consulting audit?',
      a: 'A focused architecture or security assessment typically takes 2 to 4 weeks. Enterprise-wide digital transformation strategies and cloud modernization blueprints are executed in 4 to 8 weeks with actionable phased roadmaps.',
    },
    {
      q: 'How does Neominds TechHub ensure confidentiality during technical audits?',
      a: 'We execute mutual Non-Disclosure Agreements (NDAs) prior to accessing any code repository, architectural diagram, or database schema. Our operations comply strictly with ISO/IEC 27001:2022 and SOC 2 Type II security guidelines.',
    },
    {
      q: 'Can your team assist with hands-on execution after the consulting phase?',
      a: 'Yes. Neominds TechHub provides end-to-end capabilities: from strategic advisory and solution architecture to dedicated cross-functional engineering squads that implement the recommended architecture.',
    },
    {
      q: 'What industries do your IT consultants specialize in?',
      a: 'Our primary consulting practices center on FinTech (trading systems, payment gateways), Healthcare (EHR/EMR integrations, HIPAA compliance), Logistics (telemetry, route optimization), and Enterprise SaaS.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 90px) 24px clamp(48px, 6vw, 70px)',
          maxWidth: '1240px',
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
              padding: '6px 14px',
              backgroundColor: 'rgba(34, 88, 231, 0.08)',
              border: '1px solid rgba(34, 88, 231, 0.25)',
              borderRadius: '2px',
              color: '#2258e7',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={14} />
            <span>Strategic Technology Advisory</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#0f172a',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            IT Consulting <span style={{ color: '#2258e7' }}>Services</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              lineHeight: 1.6,
              color: '#475569',
              marginBottom: '36px',
              maxWidth: '560px',
            }}
          >
            Neominds provides a full suite of IT consulting services for businesses in financial services, healthcare, and enterprise software. Our expert guidance through strategic, architectural, operational, and cloud planning empowers you to align technology with commercial goals.
          </p>

          <div className="btn-group-lg">
            <a
              href="#consulting-form"
              className="btn btn-primary btn-lg"
            >
              <span>Schedule Advisory Session</span>
              <ArrowRight size={16} />
            </a>

            <button
              onClick={() => onNavigatePage('portfolio')}
              className="btn btn-outline btn-lg"
              style={{ color: '#0f172a', borderColor: '#cbd5e1' }}
            >
              <span>View Case Studies</span>
            </button>
          </div>
        </div>

        {/* Clutch Recognitions Hero Graphic */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '32px',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
            Recognized by Clutch & Gartner Industry Benchmarks
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>Top IT Consulting</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Medical & HealthTech Systems</div>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>Top Cloud Partner</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>AWS & Microsoft Solutions</div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#475569' }}>Average Client Rating: <strong style={{ color: '#0f172a' }}>4.9 / 5.0</strong></span>
            <span style={{ color: '#16a34a', fontSize: '13px', fontWeight: 700 }}>100% Verified Reviews</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          6 CONSULTING PILLARS SPECTRUM
          ======================================================== */}
      <section style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
            Consulting Disciplines
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>
            Comprehensive Advisory Across the Technology Lifecycle
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
          {consultingPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2258e7';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(34, 88, 231, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(34, 88, 231, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2258e7',
                      marginBottom: '20px',
                    }}
                  >
                    <IconComponent size={24} />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569', marginBottom: '24px' }}>
                    {pillar.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Key Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {pillar.deliverables.map((d) => (
                      <li key={d} style={{ fontSize: '13px', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={13} style={{ color: '#2258e7' }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          FAQ ACCORDION
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b' }}>Everything you need to know about our IT consulting engagements</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#0f172a',
                    fontSize: '16px',
                    fontWeight: 600,
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span>{faq.q}</span>
                  {expandedFaq === idx ? <ChevronUp size={18} style={{ color: '#2258e7' }} /> : <ChevronDown size={18} />}
                </button>
                {expandedFaq === idx && (
                  <div style={{ padding: '0 24px 20px', color: '#475569', fontSize: '15px', lineHeight: 1.6, borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONSULTING CONTACT FORM
          ======================================================== */}
      <section id="consulting-form" style={{ padding: '80px 24px', maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: 'clamp(24px, 4vw, 48px)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
              Request IT Consulting Session
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b' }}>
              Share your technical challenges and our Principal Solutions Architect will schedule a 45-minute discovery briefing.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Full Name*</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Corporate Email*</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Primary Consulting Need</label>
              <select
                value={formData.consultingNeed}
                onChange={(e) => setFormData({ ...formData, consultingNeed: e.target.value })}
                style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
              >
                <option value="Architecture Assessment">Enterprise Architecture Assessment & Code Audit</option>
                <option value="Cloud Migration">Cloud Migration & FinOps Optimization</option>
                <option value="Legacy Modernization">Legacy System Modernization</option>
                <option value="Security & Compliance">Cybersecurity, ISO 27001 & SOC 2 Compliance</option>
                <option value="Data & AI">Data Lakehouse & AI Strategy</option>
              </select>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Your Technical Goals & Timeline</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your current tech stack, pain points, or upcoming migration milestones..."
                style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', resize: 'vertical', outline: 'none' }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#334155' }}>
                <input
                  type="checkbox"
                  checked={formData.ndaRequired}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  style={{ accentColor: '#2258e7' }}
                />
                <span>Secure project data with mutual NDA prior to consultation</span>
              </label>

              <button
                type="submit"
                className="btn btn-primary btn-md"
              >
                <span>Submit Consultation Request</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ========================================================
          GLOBAL FOOTER
          ======================================================== */}
      <Footer
        onNavigate={(target) => {
          if (target === '#contact') {
            onNavigatePage('contacts');
          } else if (target === '#casestudies') {
            onNavigatePage('portfolio');
          } else {
            onNavigatePage('home');
          }
        }}
      />
    </div>
  );
};
