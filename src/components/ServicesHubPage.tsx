import React, { useState } from 'react';
import {
  Code,
  Smartphone,
  Layers,
  RefreshCw,
  ShoppingCart,
  Cpu,
  Bot,
  Zap,
  Cloud,
  Globe,
  ArrowRight,
  BarChart3,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';

interface ServicesHubPageProps {
  onNavigateToService?: (slug: string) => void;
  onNavigateToContact?: () => void;
  onNavigateToPortfolio?: () => void;
  onNavigateToIndustries?: () => void;
}

export interface ApprovedService {
  id: string;
  slug: string;
  title: string;
  category: 'AI' | 'General';
  num: string;
  shortDesc: string;
  problemSolved: string;
  whatWeDeliver: string;
  capabilities: string[];
  techStack: string[];
  icon: React.ReactNode;
}

export const APPROVED_SERVICES: ApprovedService[] = [
  // CATEGORY 1: AI (4 SERVICES)
  {
    id: 'ai-automations',
    slug: 'ai-automations',
    title: 'AI Automations',
    category: 'AI',
    num: '01',
    shortDesc: 'Automated document processing, exception routing, and decision workflows.',
    problemSolved: 'Teams spend excessive hours manually verifying documents, reconciling spreadsheets, and performing repetitive data handoffs.',
    whatWeDeliver: 'Custom intelligent event-driven automation pipelines with real-time exception queues, error recovery, and enterprise integration.',
    capabilities: ['Intelligent Document Processing', 'Rule-Based & Agentic Routing', 'Automated QA & Data Sync', 'ERP & CRM Workflow Bridges'],
    techStack: ['Python', 'n8n', 'Celery', 'LangChain', 'FastAPI'],
    icon: <Zap size={22} color="#fe6200" />,
  },
  {
    id: 'ai-integrations',
    slug: 'ai-integrations',
    title: 'AI Integrations',
    category: 'AI',
    num: '02',
    shortDesc: 'Embed semantic search, LLM reasoning, and vector databases into existing systems.',
    problemSolved: 'Enterprises struggle to leverage proprietary data with modern generative models due to privacy and integration friction.',
    whatWeDeliver: 'Zero-data-leakage vector store architectures, context retrieval microservices, and secured API middleware.',
    capabilities: ['RAG Pipeline Architecture', 'Vector Database Deployment', 'Context Injection Middleware', 'Enterprise Security & Audit Logging'],
    techStack: ['OpenAI API', 'Anthropic Claude', 'Pinecone', 'pgvector', 'LangGraph'],
    icon: <Layers size={22} color="#fe6200" />,
  },
  {
    id: 'ai-systems',
    slug: 'ai-systems',
    title: 'AI Systems',
    category: 'AI',
    num: '03',
    shortDesc: 'Autonomous multi-agent architectures, reasoning engines, and custom model pipelines.',
    problemSolved: 'Complex operational tasks require multi-step reasoning, cross-tool orchestration, and continuous state persistence.',
    whatWeDeliver: 'Production-grade agent swarms with memory systems, fallback safety rails, and observable decision trails.',
    capabilities: ['Multi-Agent Orchestration', 'Stateful Memory Architecture', 'Automated Tool Execution', 'Deterministic Safety Guardrails'],
    techStack: ['Python', 'PyTorch', 'LangChain', 'Redis', 'Docker'],
    icon: <Bot size={22} color="#fe6200" />,
  },
  {
    id: 'ai-native-software',
    slug: 'ai-native-software',
    title: 'AI Native Software',
    category: 'AI',
    num: '04',
    shortDesc: 'Software built with generative AI and LLMs as the foundational architecture layer.',
    problemSolved: 'Legacy UX patterns fail when retrofitted with AI, resulting in slow interactions and disjointed user flows.',
    whatWeDeliver: 'Greenfield digital applications engineered from first principles around prompt streaming, generative canvases, and dynamic UI.',
    capabilities: ['Streaming UI/UX Architecture', 'Adaptive Workflow Generation', 'Dynamic Interface Synthesis', 'High-Concurrency Prompt Caching'],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind CSS'],
    icon: <Sparkles size={22} color="#fe6200" />,
  },

  // CATEGORY 2: GENERAL (11 SERVICES)
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    category: 'General',
    num: '05',
    shortDesc: 'Fast, secure, and accessible web applications, client portals, and platforms.',
    problemSolved: 'Slow-loading, inaccessible web apps that fail under peak concurrency and drag down conversion.',
    whatWeDeliver: 'Modern single-page and server-rendered web platforms built for sub-second load times and robust scale.',
    capabilities: ['Full-Stack Web Engineering', 'Responsive Design & WCAG AA', 'API Design & Integration', 'Core Web Vitals Optimization'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    icon: <Code size={22} color="#fe6200" />,
  },
  {
    id: 'app-development',
    slug: 'app-development',
    title: 'App Development',
    category: 'General',
    num: '06',
    shortDesc: 'Native iOS and Android mobile software engineered for performance and platform depth.',
    problemSolved: 'Sluggish mobile apps with poor offline handling, brittle push notification delivery, and inconsistent device support.',
    whatWeDeliver: 'Pixel-perfect native applications using Apple HIG and Material Design standards with automated release pipelines.',
    capabilities: ['Native iOS (Swift & SwiftUI)', 'Native Android (Kotlin & Compose)', 'Offline-First Data Sync', 'App Store & Play Store CI/CD'],
    techStack: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Fastlane'],
    icon: <Smartphone size={22} color="#fe6200" />,
  },
  {
    id: 'cross-platform-app-development',
    slug: 'cross-platform-app-development',
    title: 'Cross Platform Mobile App Development',
    category: 'General',
    num: '07',
    shortDesc: 'Unified codebase running cleanly across iOS, Android, and web with zero compromise.',
    problemSolved: 'Maintaining two separate mobile codebases doubles development costs and slows feature parity.',
    whatWeDeliver: 'Single-codebase mobile applications delivering 60fps native feel, code reuse above 90%, and synchronized release cycles.',
    capabilities: ['React Native & Expo Ecosystem', 'Flutter Cross-Platform Architecture', 'Native Bridge Modules', 'OTA Update Pipelines'],
    techStack: ['React Native', 'TypeScript', 'Flutter', 'Dart', 'EAS Build'],
    icon: <Layers size={22} color="#fe6200" />,
  },
  {
    id: 'custom-software-development',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'General',
    num: '08',
    shortDesc: 'Bespoke enterprise platforms, internal tooling, and full-lifecycle product engineering.',
    problemSolved: 'Off-the-shelf software forces businesses into rigid workflows and expensive subscription bloat.',
    whatWeDeliver: 'Custom platforms tailored exactly to your business logic, incorporating end-to-end product engineering from sprint discovery to production maintenance.',
    capabilities: ['Domain-Driven Architecture', 'Product Discovery & Roadmapping', 'Microservices Decomposition', 'Enterprise Security & RBAC'],
    techStack: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
    icon: <Cpu size={22} color="#fe6200" />,
  },
  {
    id: 'ecommerce-platform',
    slug: 'ecommerce-platform',
    title: 'Ecommerce Platform',
    category: 'General',
    num: '09',
    shortDesc: 'High-volume headless commerce engines, custom checkouts, and inventory sync.',
    problemSolved: 'Monolithic commerce platforms experiencing checkout latency, inventory drift, and slow multi-currency scaling.',
    whatWeDeliver: 'Composable, headless storefronts with distributed cart caching, automated tax routing, and real-time inventory management.',
    capabilities: ['Headless Storefront Engineering', 'Payment Gateway Integration', 'Inventory & OMS Synchronization', 'High-Concurrency Checkout Optimization'],
    techStack: ['Shopify Plus', 'Next.js Commerce', 'Stripe', 'Redis', 'PostgreSQL'],
    icon: <ShoppingCart size={22} color="#fe6200" />,
  },
  {
    id: 'cloud-based-software',
    slug: 'cloud-based-software',
    title: 'Cloud Based Software',
    category: 'General',
    num: '10',
    shortDesc: 'Resilient cloud infrastructure, serverless compute, and automated containerization.',
    problemSolved: 'Fragile on-premise infrastructure with manual deployments, surprise cloud bills, and unexpected downtime.',
    whatWeDeliver: 'Auto-scaling, multi-region cloud architectures with infrastructure as code, automated health monitoring, and disaster recovery.',
    capabilities: ['AWS & GCP Cloud Architecture', 'Container Orchestration (Kubernetes)', 'Infrastructure as Code (Terraform)', 'Zero-Downtime CI/CD Pipelines'],
    techStack: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
    icon: <Cloud size={22} color="#fe6200" />,
  },
  {
    id: 'saas-development',
    slug: 'saas-development',
    title: 'SaaS Development',
    category: 'General',
    num: '11',
    shortDesc: 'Multi-tenant subscription software with billing, tenant isolation, and administrative controls.',
    problemSolved: 'Building SaaS applications requires complex multi-tenancy, metered billing, tenant data isolation, and user onboarding.',
    whatWeDeliver: 'Production-ready SaaS platforms with automated billing, self-service user management, granular RBAC, and telemetry.',
    capabilities: ['Multi-Tenant Database Isolation', 'Stripe & Paddle Billing Engines', 'Role-Based Access Control', 'Usage Metering & Webhooks'],
    techStack: ['Next.js', 'PostgreSQL', 'Stripe', 'Node.js', 'Redis'],
    icon: <Globe size={22} color="#fe6200" />,
  },
  {
    id: 'analytics-dashboard',
    slug: 'analytics-dashboard',
    title: 'Analytic Dashboard',
    category: 'General',
    num: '12',
    shortDesc: 'Real-time telemetry, executive reporting metrics, and interactive data visualizations.',
    problemSolved: 'Decision-makers wait days for static spreadsheet reports while critical business operational signals go unnoticed.',
    whatWeDeliver: 'Sub-second real-time dashboards with streaming data feeds, interactive drill-downs, and role-based views.',
    capabilities: ['Real-Time Stream Ingestion', 'Interactive Data Visualization', 'Role-Based Dashboard Security', 'Export & Automated Dispatch Systems'],
    techStack: ['React', 'D3.js', 'Apache Kafka', 'ClickHouse', 'PostgreSQL'],
    icon: <BarChart3 size={22} color="#fe6200" />,
  },
  {
    id: 'custom-health-software',
    slug: 'custom-health-software',
    title: 'Custom Health Software',
    category: 'General',
    num: '13',
    shortDesc: 'HIPAA-compliant hospital systems, telemedicine platforms, and patient engagement portals.',
    problemSolved: 'Healthcare providers struggle with disconnected patient records, fragmented clinical tools, and strict regulatory compliance.',
    whatWeDeliver: 'Secure, compliant clinical software with encrypted health records, provider scheduling, and HL7/FHIR integrations.',
    capabilities: ['HIPAA & HITECH Compliance', 'HL7 & FHIR Standard Integrations', 'Telehealth & Video Consultations', 'Encrypted Clinical Audit Trails'],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'WebRTC', 'AWS HealthLake'],
    icon: <Cpu size={22} color="#fe6200" />,
  },
  {
    id: 'legacy-modernisation',
    slug: 'legacy-modernisation',
    title: 'Legacy System Modernisation',
    category: 'General',
    num: '14',
    shortDesc: 'Decompose monolithic mainframes and outdated codebases into cloud microservices with zero downtime.',
    problemSolved: 'Legacy architectures incur mounting maintenance costs, security vulnerabilities, and developer recruitment bottlenecks.',
    whatWeDeliver: 'Strangler-pattern monolith decomposition, automated database migration, and test coverage expansion without interrupting live transactions.',
    capabilities: ['Strangler Fig Migration', 'Zero-Downtime Data Re-platforming', 'Monolith to Microservices', 'Automated Regression Testing'],
    techStack: ['Java Spring Boot', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    icon: <RefreshCw size={22} color="#fe6200" />,
  },
  {
    id: 'training-as-service',
    slug: 'training-as-service',
    title: 'Training as a Service',
    category: 'General',
    num: '15',
    shortDesc: 'Technical enablement, AI upskilling, and architectural onboarding for client engineering teams.',
    problemSolved: 'Enterprises invest in new software and AI stacks but internal teams lack the technical depth to maintain and evolve them.',
    whatWeDeliver: 'Hands-on architectural workshops, code reviews, and production best-practice runbooks delivered by senior engineers.',
    capabilities: ['Applied AI & Prompt Engineering', 'Modern Full-Stack Architecture', 'DevOps & CI/CD Best Practices', 'Production Runbooks & Documentation'],
    techStack: ['Interactive Workshops', 'Technical Playbooks', 'Live Pair Programming'],
    icon: <Workflow size={22} color="#fe6200" />,
  },
];

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({
  onNavigateToService,
  onNavigateToContact,
  onNavigateToPortfolio,
}) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'AI' | 'General'>('ALL');

  const filteredServices = APPROVED_SERVICES.filter((service) => {
    if (activeCategory === 'ALL') return true;
    return service.category === activeCategory;
  });

  const handleServiceClick = (slug: string) => {
    if (onNavigateToService) {
      onNavigateToService(slug);
    } else {
      window.location.href = `/services/${slug}`;
    }
  };

  const handleEstimateClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = '/contacts';
    }
  };

  const developmentSteps = [
    {
      num: '01',
      title: 'Discovery & System Architecture',
      desc: 'We map operational workflows, identify technical bottlenecks, and produce clean architecture diagrams with verified data models before writing code.',
    },
    {
      num: '02',
      title: 'Iterative Sprint Delivery',
      desc: 'Senior full-stack engineers embedded in bi-weekly sprints, demonstrating functioning features each week with full codebase visibility.',
    },
    {
      num: '03',
      title: 'Quality & Security Verification',
      desc: 'Automated end-to-end regression suites, security audit gates, and load tests executed before staging promotions.',
    },
    {
      num: '04',
      title: 'Production Launch & SLA Support',
      desc: 'Zero-downtime blue/green deployment, comprehensive documentation handoff, and ongoing 99.99% availability SLAs.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', minHeight: '100vh', paddingTop: '80px', color: '#000000' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#000000', padding: '90px 24px 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '840px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fe6200' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fe6200', fontFamily: 'monospace' }}>
                Engineering &amp; AI Capabilities
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
              Software &amp; AI Development Services
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
              NeoMinds engineers high-performance web, mobile, cloud platforms and autonomous AI systems. We deliver verified software solutions across exactly two core competencies: <strong>AI</strong> and <strong>General Software Engineering</strong>.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={handleEstimateClick}
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
                <span>Discuss Your Project</span>
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
          2. STRICT TWO-CATEGORY DISCOVERY STRIP
          ======================================================== */}
      <section style={{ padding: '60px 24px 80px', backgroundColor: 'var(--colors-surface-light, #f1efeb)', borderTop: '1px solid #e4e2e1' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Header & Category Filters */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 800, color: '#000000', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>
                Service Catalog
              </h2>
              <p style={{ fontSize: '15px', color: '#66615c', margin: 0 }}>
                15 approved engineering services structured under two focused categories.
              </p>
            </div>

            {/* Strict Two-Category Tab Controls */}
            <div style={{ display: 'inline-flex', backgroundColor: '#ffffff', padding: '4px', borderRadius: '10px', border: '1px solid #e4e2e1' }}>
              <button
                onClick={() => setActiveCategory('ALL')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === 'ALL' ? '#fe6200' : 'transparent',
                  color: activeCategory === 'ALL' ? '#ffffff' : '#444444',
                  transition: 'all 0.15s ease',
                }}
              >
                All (15)
              </button>
              <button
                onClick={() => setActiveCategory('AI')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === 'AI' ? '#fe6200' : 'transparent',
                  color: activeCategory === 'AI' ? '#ffffff' : '#444444',
                  transition: 'all 0.15s ease',
                }}
              >
                AI (4)
              </button>
              <button
                onClick={() => setActiveCategory('General')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === 'General' ? '#fe6200' : 'transparent',
                  color: activeCategory === 'General' ? '#ffffff' : '#444444',
                  transition: 'all 0.15s ease',
                }}
              >
                General (11)
              </button>
            </div>
          </div>

          {/* Service Cards Grid with Corner Glow and Clean Apple HIG Styling */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '22px' }}>
            {filteredServices.map((service, idx) => (
              <RevealElement key={service.id} variant="card" delay={(idx % 3) * 0.06}>
                <div
                  className="nm-corner-glow"
                  onClick={() => handleServiceClick(service.slug)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: '28px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '340px',
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease',
                    boxShadow: '0 6px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(254, 98, 0, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 14px 34px -8px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)';
                  }}
                >
                  <div>
                    {/* Top Row: Number & Category Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(254, 98, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {service.icon}
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#fe6200', fontFamily: 'monospace' }}>
                          {service.num}
                        </span>
                      </div>

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: service.category === 'AI' ? '#fe6200' : '#475569',
                          backgroundColor: service.category === 'AI' ? 'rgba(254, 98, 0, 0.1)' : '#f1f5f9',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {service.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#000000', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                      {service.shortDesc}
                    </p>

                    {/* Capabilities list */}
                    <div style={{ marginBottom: '18px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#66615c', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                        Key Capabilities:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {service.capabilities.slice(0, 3).map((cap, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '11.5px',
                              color: '#334155',
                              backgroundColor: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              padding: '2px 8px',
                              borderRadius: '4px',
                            }}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid #f1efeb', marginTop: '12px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#fe6200', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      Explore Service Overview
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR APPROACH / DEVELOPMENT METHODOLOGY
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff', borderTop: '1px solid #e4e2e1' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '44px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fe6200', fontFamily: 'monospace' }}>
              Execution Framework
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#000000', margin: '6px 0 12px 0', fontFamily: 'var(--font-heading)' }}>
              How We Deliver Production Software
            </h2>
            <p style={{ fontSize: '15.5px', color: '#555555', lineHeight: 1.6, margin: 0 }}>
              We eliminate ambiguity with strict technical discovery, verifiable weekly milestone demos, and continuous testing gates before any code reaches production.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px' }}>
            {developmentSteps.map((step, idx) => (
              <RevealElement key={idx} variant="card" delay={idx * 0.08}>
                <div
                  style={{
                    backgroundColor: 'var(--colors-surface-light, #fbf9f5)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    boxShadow: '0 4px 16px -8px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#fe6200', fontFamily: 'monospace', marginBottom: '14px' }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#000000', margin: '0 0 10px 0' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                      {step.desc}
                    </p>
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
    </div>
  );
};
