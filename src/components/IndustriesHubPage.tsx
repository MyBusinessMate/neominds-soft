import React from 'react';
import {
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Building2,
  Briefcase,
  Store,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';

interface IndustriesHubPageProps {
  onNavigateToContact?: () => void;
  onNavigateToPortfolio?: () => void;
}

export const IndustriesHubPage: React.FC<IndustriesHubPageProps> = ({
  onNavigateToContact,
  onNavigateToPortfolio,
}) => {
  const industries = [
    {
      num: '01',
      title: 'E-commerce',
      slug: 'ecommerce',
      icon: <ShoppingCart size={24} color="#2258e7" />,
      tag: 'B2B & B2C Commerce',
      desc: 'Online stores, B2B and B2C portals and marketplaces. We build catalog and checkout flows, order tracking, inventory sync, multi-currency payments and sales analytics that grow with your traffic.',
      features: [
        'Multi-currency payment gateway integrations',
        'Real-time inventory and warehousing synchronization',
        'AI personalized recommendation engines',
        'High-concurrency checkout and fraud mitigation',
      ],
    },
    {
      num: '02',
      title: 'Education',
      slug: 'education',
      icon: <GraduationCap size={24} color="#2258e7" />,
      tag: 'EdTech & Learning Platforms',
      desc: 'Learning platforms and tools for schools, universities and online academies. We build course delivery, student portals, assessments, scheduling, billing and reporting, tuned for mobile and desktop.',
      features: [
        'Interactive student and instructor portals',
        'Video streaming, LMS and live lecture rooms',
        'Automated grading, proctoring and certification',
        'Mobile-first responsive study interfaces',
      ],
    },
    {
      num: '03',
      title: 'Healthcare',
      slug: 'healthcare',
      icon: <HeartPulse size={24} color="#2258e7" />,
      tag: 'Digital Health Solutions',
      desc: 'Patient-facing apps, clinic and practice tools, appointment and records workflows, and reporting dashboards, built with privacy and data-protection rules in mind.',
      features: [
        'Telemedicine video and scheduling consoles',
        'Secure patient portal with encrypted health records',
        'Built with HIPAA data safeguards in mind',
        'Practice management and diagnostic reporting tools',
      ],
    },
    {
      num: '04',
      title: 'Real Estate',
      slug: 'real-estate',
      icon: <Building2 size={24} color="#2258e7" />,
      tag: 'PropTech & Asset Portals',
      desc: 'Listing portals, lead and client management, property and tenant tools, virtual tours and deal tracking for agencies, developers and property managers.',
      features: [
        'MLS/IDX property feed integration and map search',
        'Tenant leasing, payments and maintenance requests',
        '3D virtual walkthroughs and asset galleries',
        'Broker CRM and deal workflow automation',
      ],
    },
    {
      num: '05',
      title: 'Enterprise',
      slug: 'enterprise',
      icon: <Briefcase size={24} color="#2258e7" />,
      tag: 'Enterprise Workflow Systems',
      desc: 'Internal tools, workflow automation, system integrations, dashboards and AI features that connect your teams, data and processes.',
      features: [
        'Custom ERP and CRM operational software',
        'Multi-system API orchestrations and middleware',
        'Role-based security (RBAC) and audit trails',
        'Executive business intelligence dashboards',
      ],
    },
    {
      num: '06',
      title: 'Retail',
      slug: 'retail',
      icon: <Store size={24} color="#2258e7" />,
      tag: 'Omnichannel Commerce',
      desc: 'Point of sale, inventory and order management, loyalty programs and omnichannel apps that link your shops and your online store.',
      features: [
        'Cloud POS and multi-store inventory tracking',
        'Customer loyalty and reward points applications',
        'Click-and-collect and returns management',
        'Barcode scanning and automated replenishment',
      ],
    },
  ];

  const technologies = [
    { area: 'Artificial Intelligence', tech: 'OpenAI, Anthropic Claude, LangChain, Llama, Hugging Face' },
    { area: 'Machine Learning', tech: 'Python, PyTorch, TensorFlow, Scikit-learn, MLflow' },
    { area: 'Web Development', tech: 'React, Next.js, TypeScript, Node.js, Python, Go' },
    { area: 'Database & Storage', tech: 'PostgreSQL, MongoDB, Redis, Supabase, Pinecone, DynamoDB' },
    { area: 'Cloud Computing', tech: 'AWS, Microsoft Azure, Google Cloud, Docker, Kubernetes, Terraform' },
    { area: 'Data Analytics', tech: 'Apache Kafka, Snowflake, BigQuery, Power BI, Databricks' },
    { area: 'Automation', tech: 'n8n, Celery, Airflow, Temporal, Playwright, Zapier' },
  ];

  const handleEstimateClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = '/contacts';
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '80px', color: '#0f172a' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{ backgroundColor: '#070b14', color: '#ffffff', padding: '90px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(34, 88, 231, 0.18) 0%, rgba(7, 11, 20, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '840px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#2258e7',
                marginBottom: '16px',
              }}
            >
              Industry Focus
            </span>

            <ScrollReveal
              as="h1"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 62px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Industries we build for
            </ScrollReveal>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.88)',
                marginBottom: '36px',
              }}
            >
              Every sector has its own rules, users and risks. We learn how your industry works before we write code, so the software fits the way your teams and customers really operate.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={handleEstimateClick}
                style={{
                  backgroundColor: '#2258e7',
                  color: '#ffffff',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(34, 88, 231, 0.35)',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2258e7')}
              >
                <span>Get a project estimate</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  if (onNavigateToPortfolio) onNavigateToPortfolio();
                  else window.location.href = '/portfolio';
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
              >
                View case studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. INDUSTRIES WE BUILD FOR (6 INDUSTRIES)
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Specialized Solutions
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Custom software for these industries
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', marginTop: '8px' }}>
              We build specialized platforms with sector compliance, enterprise security, and seamless workflows baked into every release.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '28px' }}>
            {industries.map((ind, idx) => (
              <RevealElement
                key={idx}
                variant="card"
                delay={idx * 0.05}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {ind.icon}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#94a3b8', fontFamily: 'monospace' }}>
                      {ind.num}
                    </span>
                  </div>

                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                    {ind.tag}
                  </span>

                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                    {ind.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, marginBottom: '20px' }}>
                    {ind.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {ind.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155' }}>
                        <CheckCircle size={14} color="#2258e7" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleEstimateClick}
                  style={{
                    width: '100%',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    padding: '10px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#0f172a',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2258e7';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#2258e7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                >
                  <span>Discuss {ind.title} project</span>
                  <ArrowRight size={13} />
                </button>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TECHNOLOGIES WE USE
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Technologies We Use
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Stack & infrastructure
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', marginTop: '8px' }}>
              We select robust, battle-tested tools matching your industry requirements and scale targets.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {technologies.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  {t.area}
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>
                  {t.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Contact, Locations & Newsletter */}
      <div id="contact-section">
        <ContactSection />
      </div>
      <LocationsSection />
    </div>
  );
};
