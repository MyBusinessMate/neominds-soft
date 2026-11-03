import React from 'react';
import {
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Building2,
  Briefcase,
  Store,
  Landmark,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';

interface IndustriesHubPageProps {
  onNavigatePage?: (page: any) => void;
  onNavigateToContact?: () => void;
  onNavigateToPortfolio?: () => void;
}

export const IndustriesHubPage: React.FC<IndustriesHubPageProps> = ({
  onNavigateToContact,
  onNavigateToPortfolio,
  onNavigatePage,
}) => {
  const industries = [
    {
      num: '01',
      title: 'Enterprise',
      slug: 'enterprise',
      icon: <Briefcase size={24} color="#fe6200" />,
      tag: 'Enterprise Workflow Systems',
      desc: 'Internal tools, workflow automation, ERP integrations, and distributed data pipelines that connect corporate teams and operational data.',
      features: [
        'Custom ERP, CRM, and internal operational tooling',
        'Multi-system API orchestrations and middleware',
        'Role-based security (RBAC) and strict audit logging',
        'Executive business intelligence and performance dashboards',
      ],
    },
    {
      num: '02',
      title: 'Financial Tech',
      slug: 'fintech',
      icon: <Landmark size={24} color="#fe6200" />,
      tag: 'FinTech & Core Banking',
      desc: 'High-availability financial applications, automated clearing, double-entry ledgers, and regulatory compliance engines.',
      features: [
        'PCI-DSS compliant payment routing and settlement',
        'Double-entry core ledger engines with zero balance drift',
        'Automated clearing and ISO 20022 messaging',
        'AI SQL assistants and automated compliance screening',
      ],
    },
    {
      num: '03',
      title: 'Retail',
      slug: 'retail',
      icon: <Store size={24} color="#fe6200" />,
      tag: 'Omnichannel Commerce & POS',
      desc: 'Point-of-sale integrations, dynamic inventory synchronization, and omnichannel billing systems bridging brick-and-mortar with digital operations.',
      features: [
        'Cloud POS and multi-store inventory synchronization',
        'Automated retail billing and localized payment clearing',
        'Barcode scanning, inventory locking, and stock alerts',
        'Loyalty programs and cross-channel customer history',
      ],
    },
    {
      num: '04',
      title: 'Education',
      slug: 'education',
      icon: <GraduationCap size={24} color="#fe6200" />,
      tag: 'EdTech & Institutional Tools',
      desc: 'Custom software for schools, universities, and coaching academies, including administrative portals, facial attendance, and fee management.',
      features: [
        'AI Co-Teacher systems and classroom workflow tools',
        'Facial recognition attendance and access logging',
        'Automated fee collection and parent billing portals',
        'Administrative analytics and student records management',
      ],
    },
    {
      num: '05',
      title: 'Healthcare',
      slug: 'healthcare',
      icon: <HeartPulse size={24} color="#fe6200" />,
      tag: 'Digital Health Solutions',
      desc: 'Patient-facing apps, hospital management systems (HMS), clinic appointment workflows, and HIPAA-compliant data pipelines.',
      features: [
        'Telemedicine video and clinician scheduling consoles',
        'Hospital management systems (HMS) and bed tracking',
        'Patient engagement mobile apps and health telemetry',
        'Encrypted health records and HIPAA-compliant storage',
      ],
    },
    {
      num: '06',
      title: 'E-commerce',
      slug: 'ecommerce',
      icon: <ShoppingCart size={24} color="#fe6200" />,
      tag: 'B2B & B2C Commerce',
      desc: 'Online stores, catalog management, high-volume checkout flows, and automated inventory sync built to scale with order spikes.',
      features: [
        'Multi-currency payment gateway and checkout engines',
        'Real-time inventory locking and warehouse synchronization',
        'E-commerce analytics dashboards and conversion reporting',
        'Automated order fulfillment and shipping webhooks',
      ],
    },
    {
      num: '07',
      title: 'Real Estate',
      slug: 'real-estate',
      icon: <Building2 size={24} color="#fe6200" />,
      tag: 'PropTech & Asset Portals',
      desc: 'Cloud-based property management systems, tenant portals, leasing automation, and deal tracking for agencies and asset owners.',
      features: [
        'Cloud-based property and asset management systems',
        'Tenant leasing, payments, and maintenance dispatch',
        'Listing portals with multi-feed synchronization',
        'Portfolio performance telemetry and rental analytics',
      ],
    },
    {
      num: '08',
      title: 'E-learning',
      slug: 'elearning',
      icon: <BookOpen size={24} color="#fe6200" />,
      tag: 'Learning Management Systems (LMS)',
      desc: 'Dedicated LMS platforms, interactive course builders, video streaming, and modular skill assessments for digital academies.',
      features: [
        'Modular learning management systems (LMS)',
        'Course authoring, video lessons, and interactive quizzes',
        'Automated grading, proctoring, and skill badges',
        'Mobile-friendly responsive learning interfaces',
      ],
    },
  ];

  const technologies = [
    { area: 'Web Development', tech: 'React, Next.js, TypeScript, Node.js, Python, Go' },
    { area: 'Artificial Intelligence', tech: 'OpenAI, Anthropic Claude, LangChain, Llama, Hugging Face' },
    { area: 'Machine Learning', tech: 'Python, PyTorch, TensorFlow, Scikit-learn, MLflow' },
    { area: 'Data Management', tech: 'PostgreSQL, MongoDB, Redis, Supabase, Pinecone, DynamoDB' },
    { area: 'Data Analytics', tech: 'Apache Kafka, Snowflake, BigQuery, Power BI, Databricks' },
    { area: 'Automations', tech: 'n8n, Celery, Airflow, Temporal, Playwright, Zapier' },
    { area: 'Product Engineering', tech: 'Docker, Kubernetes, AWS, Azure, GCP, CI/CD, Terraform' },
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
    <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', minHeight: '100vh', paddingTop: '80px', color: '#000000' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#000000', padding: '90px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          <div style={{ maxWidth: '840px' }}>
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
                color: '#000000',
                marginBottom: '36px',
              }}
            >
              Every sector has its own rules, users and risks. We learn how your industry works before we write code, so the software fits the way your teams and customers really operate.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={handleEstimateClick}
                style={{
                  backgroundColor: '#fe6200', color: '#ffffff',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(254, 98, 0, 0.35)',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cf5000')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fe6200')}
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
                  color: '#000000',
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
          3. INDUSTRIES WE BUILD FOR (6 INDUSTRIES) - CREAM BEIGE
          ======================================================== */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) clamp(16px, 4vw, 24px)', backgroundColor: 'var(--colors-surface-light, #f1efeb)', borderTop: '1px solid #e4e2e1' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Specialized Solutions
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#000000', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Custom software for these industries
            </h2>
            <p style={{ fontSize: '16px', color: '#66615c', maxWidth: '680px', marginTop: '8px' }}>
              We build specialized platforms with sector compliance, enterprise security, and verified high-throughput workflows baked into every release.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 'clamp(16px, 3vw, 28px)', width: '100%', boxSizing: 'border-box' }}>
            {industries.map((ind, idx) => (
              <RevealElement
                key={idx}
                variant="card"
                delay={idx * 0.05}
                className="nm-corner-glow"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '12px',
                  padding: 'clamp(20px, 3.5vw, 32px)',
                  boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(254, 98, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {ind.icon}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#333333', fontFamily: 'monospace' }}>
                      {ind.num}
                    </span>
                  </div>

                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                    {ind.tag}
                  </span>

                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#000000', marginBottom: '12px' }}>
                    {ind.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.65, marginBottom: '20px' }}>
                    {ind.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {ind.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#333333' }}>
                        <CheckCircle size={14} color="#fe6200" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleEstimateClick}
                  style={{
                    width: '100%',
                    backgroundColor: '#f1efeb',
                    border: '1px solid #e4e2e1',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fe6200';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#fe6200';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1efeb';
                    e.currentTarget.style.color = '#1a1a1a';
                    e.currentTarget.style.borderColor = '#e4e2e1';
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
          4. TECHNOLOGIES WE USE - UNIFIED WARM CREAM
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f1efeb', borderTop: '1px solid #e4e2e1' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Technologies We Use
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#000000', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Stack & infrastructure
            </h2>
            <p style={{ fontSize: '16px', color: '#66615c', maxWidth: '680px', marginTop: '8px' }}>
              We select battle-tested, production-proven tools matching your industry requirements and scale targets.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {technologies.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '12px',
                  padding: '22px',
                  boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#000000', marginBottom: '6px' }}>
                  {t.area}
                </div>
                <div style={{ fontSize: '13px', color: '#333333', lineHeight: 1.5 }}>
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
      <Footer onNavigate={(target) => onNavigatePage ? onNavigatePage(target.replace("#", "")) : (window.location.hash = target)} />
    </div>
  );
};
