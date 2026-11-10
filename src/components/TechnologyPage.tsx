import React from 'react';
import {
  Code2,
  Bot,
  BrainCircuit,
  Database,
  BarChart3,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';

interface TechnologyPageProps {
  onNavigatePage?: (page: any) => void;
  onNavigateToContact?: () => void;
  onNavigateToPortfolio?: () => void;
  onNavigateToService?: (slug: string) => void;
}

export interface ApprovedTechnology {
  id: string;
  name: string;
  num: string;
  icon: React.ReactNode;
  summary: string;
  businessApplication: string;
  frameworks: string[];
  relevantServices: { name: string; slug: string }[];
  relevantProjects: { name: string; id: string }[];
  isSubsumedNote?: string;
}

export const APPROVED_TECHNOLOGIES: ApprovedTechnology[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    num: '01',
    icon: <Code2 size={24} color="#fe6200" />,
    summary: 'Modern web architectures engineered for extreme responsiveness, search indexability, and fault tolerance under high concurrent user load.',
    businessApplication: 'Powering mission-critical client portals, SaaS interfaces, and internal enterprise dashboards with sub-second page transitions.',
    frameworks: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Go', 'Tailwind CSS'],
    relevantServices: [
      { name: 'Web Development', slug: 'web-development' },
      { name: 'SaaS Development', slug: 'saas-development' },
      { name: 'Ecommerce Platform', slug: 'ecommerce-platform' },
    ],
    relevantProjects: [
      { name: 'Flooring Inc E-Commerce Portal', id: 'flooring-inc-dashboard' },
      { name: 'Adventr Smart-Video Web Suite', id: 'adventr' },
    ],
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    num: '02',
    icon: <Bot size={24} color="#fe6200" />,
    summary: 'Autonomous agentic systems, enterprise RAG pipelines, and generative AI systems built on deterministic guardrails and zero-leakage data boundaries.',
    businessApplication: 'Automating multi-step operational tasks, semantic knowledge retrieval over millions of unstructured documents, and intelligent assistant workflows.',
    frameworks: ['Anthropic Claude', 'OpenAI GPT-4', 'LangChain', 'LangGraph', 'Llama 3'],
    relevantServices: [
      { name: 'AI Automations', slug: 'ai-automations' },
      { name: 'AI Integrations', slug: 'ai-integrations' },
      { name: 'AI Systems', slug: 'ai-systems' },
      { name: 'AI Native Software', slug: 'ai-native-software' },
    ],
    relevantProjects: [
      { name: 'DotcomWeavers AI Velocity Engine', id: 'dotcomweavers-project-buddy' },
      { name: 'Mindspace Telehealth Clinical AI', id: 'mindspace-mobile-app' },
    ],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    num: '03',
    icon: <BrainCircuit size={24} color="#fe6200" />,
    summary: 'Supervised, unsupervised, and fine-tuned machine learning models deployed directly into high-throughput production inference pipelines.',
    businessApplication: 'Predictive maintenance, automated medical coding verification, customer churn prediction, and dynamic pricing optimization.',
    frameworks: ['PyTorch', 'Scikit-learn', 'TensorFlow', 'Hugging Face', 'FastAPI'],
    relevantServices: [
      { name: 'AI Systems', slug: 'ai-systems' },
      { name: 'Custom Health Software', slug: 'custom-health-software' },
      { name: 'Analytic Dashboard', slug: 'analytics-dashboard' },
    ],
    relevantProjects: [
      { name: 'TruBridge Medical Claims Verification', id: 'trubridge-medical-ai' },
      { name: 'FundBot NL Financial Query Model', id: 'fundbot-sql-chatbot' },
    ],
  },
  {
    id: 'data-management',
    name: 'Data Management',
    num: '04',
    icon: <Database size={24} color="#fe6200" />,
    summary: 'High-availability relational, document, and vector database architectures ensuring ACID compliance, strict isolation, and zero balance drift.',
    businessApplication: 'Managing high-velocity transactional databases, multi-tenant schemas, secure vector memory, and encrypted audit trails.',
    frameworks: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'Supabase', 'AWS Aurora'],
    relevantServices: [
      { name: 'Cloud Based Software', slug: 'cloud-based-software' },
      { name: 'SaaS Development', slug: 'saas-development' },
      { name: 'Legacy System Modernisation', slug: 'legacy-modernisation' },
    ],
    relevantProjects: [
      { name: 'Authenticom Automotive DMS Integration', id: 'authenticom-ai-etl' },
      { name: 'Fintuple Bank Settlement Ledger', id: 'fintuple-bank-integration' },
    ],
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    num: '05',
    icon: <BarChart3 size={24} color="#fe6200" />,
    summary: 'Streaming event ingestion, distributed data transformation pipelines, and sub-second analytical query engines for executive telemetry.',
    businessApplication: 'Consolidating fragmented enterprise data sources into unified operational dashboards with real-time KPI visualization.',
    frameworks: ['Apache Kafka', 'ClickHouse', 'BigQuery', 'Snowflake', 'D3.js'],
    relevantServices: [
      { name: 'Analytic Dashboard', slug: 'analytics-dashboard' },
      { name: 'Custom Software Development', slug: 'custom-software-development' },
    ],
    relevantProjects: [
      { name: 'Flooring Inc Analytics Dashboard', id: 'flooring-inc-dashboard' },
      { name: 'Adventr Video Telemetry Suite', id: 'adventr' },
    ],
  },
  {
    id: 'automations',
    name: 'Automations',
    num: '06',
    icon: <Cpu size={24} color="#fe6200" />,
    summary: 'Resilient event-driven automation workflows, queue-based background workers, and headless browser automation pipelines.',
    businessApplication: 'Eliminating manual spreadsheet synchronization, automating invoice ingestion, and synchronizing multi-tool records without human overhead.',
    frameworks: ['n8n', 'Celery', 'Temporal', 'Playwright', 'FastAPI'],
    relevantServices: [
      { name: 'AI Automations', slug: 'ai-automations' },
      { name: 'Legacy System Modernisation', slug: 'legacy-modernisation' },
    ],
    relevantProjects: [
      { name: 'Authenticom High-Volume Data Ingestion', id: 'authenticom-ai-etl' },
      { name: 'TruBridge Automated Claim Pipelines', id: 'trubridge-medical-ai' },
    ],
  },
  {
    id: 'product-engineering',
    name: 'Product Engineering',
    num: '07',
    icon: <Layers size={24} color="#fe6200" />,
    summary: 'Full-lifecycle software engineering from sprint discovery, domain-driven design, and architecture blueprinting to containerized production deployment.',
    businessApplication: 'Accelerating product delivery cycles for funded startups and modernizing core enterprise systems with zero business interruption.',
    frameworks: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Fastlane'],
    relevantServices: [
      { name: 'Custom Software Development', slug: 'custom-software-development' },
      { name: 'Legacy System Modernisation', slug: 'legacy-modernisation' },
      { name: 'SaaS Development', slug: 'saas-development' },
    ],
    relevantProjects: [
      { name: 'DotcomWeavers Velocity Engine', id: 'dotcomweavers-project-buddy' },
      { name: 'Mindspace Clinical Mobile Platform', id: 'mindspace-mobile-app' },
    ],
    isSubsumedNote: 'Product Engineering is strategically anchored within Custom Software Development rather than treated as a detached service offering.',
  },
];

export const TechnologyPage: React.FC<TechnologyPageProps> = ({
  onNavigateToContact,
  onNavigateToPortfolio,
  onNavigateToService,
  onNavigatePage,
}) => {
  const handleContactClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = '/contacts';
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--colors-background-dark, #f1efeb)', minHeight: '100vh', paddingTop: '80px', color: '#000000' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--colors-background-dark, #f1efeb)', color: '#000000', padding: '90px 24px 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fe6200' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fe6200', fontFamily: 'monospace' }}>
                Engineering Core &amp; Tooling
              </span>
            </div>

            <ScrollReveal
              as="h1"
              style={{
                fontSize: 'clamp(36px, 5.2vw, 58px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Technology &amp; Architectural Stack
            </ScrollReveal>

            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.65,
                color: '#444444',
                marginBottom: '32px',
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              NeoMinds TechHub builds on seven core technology disciplines. Every framework, language, and cloud service in our stack is selected for stability, security, and developer velocity under production load.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={handleContactClick}
                style={{
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 26px',
                  borderRadius: '8px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(254, 98, 0, 0.28)',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cf5000')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fe6200')}
              >
                <span>Discuss Your Tech Stack</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => {
                  if (onNavigateToPortfolio) onNavigateToPortfolio();
                  else window.location.href = '/portfolio';
                }}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  padding: '13px 26px',
                  borderRadius: '8px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s, border-color 0.2s',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fe6200')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)')}
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SEVEN CORE TECHNOLOGIES GRID
          ======================================================== */}
      <section style={{ padding: '70px 24px 90px', backgroundColor: 'var(--colors-surface-light, #f1efeb)', borderTop: '1px solid #e4e2e1' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 800, color: '#000000', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>
              Core Engineering Disciplines
            </h2>
            <p style={{ fontSize: '15px', color: '#66615c', margin: 0 }}>
              Consolidated overview of our 7 verified technologies and how they integrate into production software.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
            {APPROVED_TECHNOLOGIES.map((tech, idx) => (
              <RevealElement key={tech.id} variant="card" delay={(idx % 3) * 0.06}>
                <div
                  className="nm-corner-glow"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: '30px',
                    minHeight: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div>
                    {/* Header Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(254, 98, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {tech.icon}
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#fe6200', fontFamily: 'monospace' }}>
                          {tech.num}
                        </span>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'monospace' }}>
                        Discipline
                      </span>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#000000', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                      {tech.name}
                    </h3>

                    <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                      {tech.summary}
                    </p>

                    <div style={{ padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                        Business Application:
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.5 }}>
                        {tech.businessApplication}
                      </div>
                    </div>

                    {tech.isSubsumedNote && (
                      <div style={{ fontSize: '11.5px', color: '#9a3412', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', padding: '8px 10px', borderRadius: '6px', marginBottom: '14px', lineHeight: 1.45 }}>
                        💡 {tech.isSubsumedNote}
                      </div>
                    )}

                    {/* Tooling Tags */}
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#66615c', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                        Verified Tooling:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {tech.frameworks.map((f, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '11px',
                              color: '#1e293b',
                              backgroundColor: '#ffffff',
                              border: '1px solid #cbd5e1',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontWeight: 500,
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connected Services & Projects */}
                  <div style={{ paddingTop: '16px', borderTop: '1px solid #f1efeb', marginTop: '12px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                      Relevant Services:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                      {tech.relevantServices.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => onNavigateToService ? onNavigateToService(s.slug) : (window.location.href = `/services/${s.slug}`)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            color: '#fe6200',
                            fontSize: '12px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            textDecoration: 'underline',
                          }}
                        >
                          {s.name}
                        </button>
                      ))}
                    </div>

                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#66615c', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                      Verified Projects Demonstrating This Tech:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {tech.relevantProjects.map((p, i) => (
                        <span key={i} style={{ fontSize: '12.5px', color: '#334155', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircle2 size={12} color="#fe6200" />
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Contact & Locations */}
      <div id="contact-section">
        <ContactSection />
      </div>
      <LocationsSection />
      <Footer onNavigate={(target) => onNavigatePage ? onNavigatePage(target.replace("#", "")) : (window.location.hash = target)} />
    </div>
  );
};
