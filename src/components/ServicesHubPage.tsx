import React, { useState, useMemo } from 'react';
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
  Search,
  X,
  Activity,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';
import { getTechIconPath } from '../utils/techIcons';

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
    techStack: ['Python', 'Docker', 'FastAPI', 'LangChain', 'Redis'],
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
    techStack: ['Python', 'PostgreSQL', 'FastAPI', 'Docker', 'AWS'],
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
    techStack: ['Python', 'Docker', 'Redis', 'PostgreSQL', 'FastAPI'],
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
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
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
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS'],
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
    techStack: ['Swift', 'Kotlin', 'React Native', 'TypeScript', 'Docker'],
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
    techStack: ['React Native', 'TypeScript', 'Flutter', 'Node.js', 'Docker'],
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
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
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
    techStack: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'PostgreSQL'],
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
    capabilities: ['Multi-Tenant Database Isolation', 'Subscription Billing Engines', 'Role-Based Access Control', 'Usage Metering & Webhooks'],
    techStack: ['Next.js', 'PostgreSQL', 'Node.js', 'TypeScript', 'Redis'],
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
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
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
    techStack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker'],
    icon: <Activity size={22} color="#fe6200" />,
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
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
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
    techStack: ['TypeScript', 'Python', 'Docker', 'React', 'AWS'],
    icon: <Workflow size={22} color="#fe6200" />,
  },
];

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({
  onNavigateToService,
  onNavigateToContact,
  onNavigateToPortfolio,
}) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'AI' | 'General'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return APPROVED_SERVICES.filter((service) => {
      const matchesCategory = activeCategory === 'ALL' || service.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        service.title.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.capabilities.some((c) => c.toLowerCase().includes(q)) ||
        service.techStack.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, searchQuery]);

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
    <div
      style={{
        backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
        minHeight: '100vh',
        color: '#111111',
        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
      }}
    >
      <style>{`
        .service-card {
          background-color: #ffffff;
          border: 1px solid #e8e4dc;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        .service-card:hover {
          transform: translateY(-4px);
          border-color: #fe6200;
          box-shadow: 0 20px 40px rgba(254, 98, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.04);
        }
        .service-card:hover .service-card-title {
          color: #fe6200;
        }
        .service-card:hover .service-card-arrow {
          transform: translateX(4px);
        }
        .service-card:hover .service-card-btn-pill {
          background-color: #fe6200 !important;
          color: #ffffff !important;
          border-color: #fe6200 !important;
        }

        .service-filter-btn {
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .service-catalog-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>

      {/* ========================================================
          1. HERO SECTION (Editorial, High-Trust, Impact-Driven)
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(110px, 12vw, 140px) 24px clamp(48px, 6vw, 64px)',
          background: 'linear-gradient(180deg, #fbf9f5 0%, #f4f0e8 100%)',
          borderBottom: '1px solid #e4e0d7',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '18px' }}>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 700,
                color: '#fe6200',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backgroundColor: 'rgba(254, 98, 0, 0.08)',
                border: '1px solid rgba(254, 98, 0, 0.18)',
                padding: '5px 14px',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#fe6200',
                  boxShadow: '0 0 0 3px rgba(254, 98, 0, 0.25)',
                }}
              />
              Core Engineering &amp; AI Capabilities · 15 Production Disciplines
            </span>
          </div>

          <ScrollReveal
            as="h1"
            style={{
              fontSize: 'clamp(36px, 4.8vw, 60px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#000000',
              marginBottom: '20px',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              maxWidth: '960px',
            }}
          >
            Production-Level Engineering &amp; AI Architectures.
          </ScrollReveal>

          <p
            style={{
              fontSize: 'clamp(16px, 1.25vw, 18.5px)',
              lineHeight: 1.65,
              color: '#555555',
              maxWidth: '780px',
              margin: '0 0 36px 0',
            }}
          >
            NeoMinds TechHub engineers mission-critical software and autonomous AI systems for high-growth startups and global enterprises. Embedded senior pods, 2-week staging delivery, and 100% source code ownership.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '44px',
            }}
          >
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
                const el = document.getElementById('service-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
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
              Browse All 15 Services
            </button>
          </div>

          {/* Delivery Standards Metric Ribbon */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              paddingTop: '28px',
              borderTop: '1px solid #e4e0d7',
            }}
          >
            {[
              { stat: '15', label: 'Specialized Disciplines', sub: 'AI & Full-Stack Systems' },
              { stat: '2-Week', label: 'Continuous Staging Demos', sub: 'Verifiable Working Software' },
              { stat: '100%', label: 'Source Code & IP Handover', sub: 'Zero Vendor Lock-In' },
              { stat: '99.99%', label: 'Production Availability', sub: 'Enterprise SLA Standards' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #e8e4dc',
                  borderRadius: '10px',
                  padding: '16px 20px',
                }}
              >
                <div
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#000000',
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                    lineHeight: 1.1,
                    marginBottom: '4px',
                  }}
                >
                  {item.stat}
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#111111' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '11px', color: '#66615c', marginTop: '2px' }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SERVICE CATALOG (Search, Filters & Interactive Cards)
          ======================================================== */}
      <section
        id="service-catalog"
        style={{
          padding: '48px 24px 80px',
          backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '28px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#fe6200',
                  fontFamily: 'monospace',
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                Core Competencies
              </span>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 36px)',
                  fontWeight: 800,
                  color: '#000000',
                  margin: '0 0 6px 0',
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                }}
              >
                {activeCategory === 'ALL'
                  ? 'All Engineering Services'
                  : activeCategory === 'AI'
                  ? 'Artificial Intelligence Services'
                  : 'Core Software Engineering'}
              </h2>
              <p style={{ fontSize: '14.5px', color: '#66615c', margin: 0 }}>
                Showing <strong>{filteredServices.length}</strong> of 15 production-ready engineering disciplines.
              </p>
            </div>

            {/* Live Search Input */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '340px',
              }}
            >
              <Search
                size={16}
                color="#888480"
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Search by discipline or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 38px 10px 38px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #dedad1',
                  borderRadius: '9999px',
                  fontSize: '13.5px',
                  color: '#111111',
                  outline: 'none',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#fe6200';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(254, 98, 0, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#dedad1';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.03)';
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    color: '#888480',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '36px',
              paddingBottom: '16px',
              borderBottom: '1px solid #e8e4dc',
            }}
          >
            {[
              { id: 'ALL', label: 'All Disciplines', count: 15 },
              { id: 'AI', label: 'AI & Autonomous Systems', count: 4 },
              { id: 'General', label: 'Core Software Engineering', count: 11 },
            ].map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as 'ALL' | 'AI' | 'General')}
                  className="service-filter-btn"
                  style={{
                    backgroundColor: isActive ? '#fe6200' : '#ffffff',
                    color: isActive ? '#ffffff' : '#444444',
                    borderColor: isActive ? '#fe6200' : '#e4e0d7',
                    boxShadow: isActive
                      ? '0 3px 12px rgba(254, 98, 0, 0.25)'
                      : '0 1px 3px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '2px 7px',
                      borderRadius: '9999px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : '#f0ede6',
                      color: isActive ? '#ffffff' : '#66615c',
                      fontWeight: 700,
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8e4dc',
                borderRadius: '16px',
                padding: '60px 24px',
                textAlign: 'center',
                maxWidth: '560px',
                margin: '40px auto',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(254, 98, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px',
                  color: '#fe6200',
                }}
              >
                <Search size={24} />
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#000000',
                  marginBottom: '8px',
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                }}
              >
                No Matching Services Found
              </h3>
              <p style={{ fontSize: '14px', color: '#66615c', marginBottom: '22px' }}>
                We couldn’t find any engineering services matching &ldquo;{searchQuery}&rdquo;. Try another keyword or reset filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('ALL');
                }}
                style={{
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: '8px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Service Cards Grid */}
          {filteredServices.length > 0 && (
            <div
              className="service-catalog-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                gap: '26px',
              }}
            >
              {filteredServices.map((service, idx) => (
                <RevealElement key={service.id} variant="card" delay={(idx % 3) * 0.05}>
                  <div
                    className="service-card nm-corner-glow"
                    onClick={() => handleServiceClick(service.slug)}
                  >
                    <div
                      style={{
                        padding: '28px',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        {/* Top Row: Icon Badge, Number & Category */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '18px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(254, 98, 0, 0.09)',
                                border: '1px solid rgba(254, 98, 0, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {service.icon}
                            </div>
                            <span
                              style={{
                                fontSize: '13px',
                                fontWeight: 800,
                                color: '#fe6200',
                                fontFamily: 'monospace',
                              }}
                            >
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
                              padding: '3px 9px',
                              borderRadius: '6px',
                              fontFamily: 'monospace',
                            }}
                          >
                            {service.category === 'AI' ? 'AI Core' : 'Engineering'}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="service-card-title"
                          style={{
                            fontSize: '20px',
                            fontWeight: 800,
                            color: '#000000',
                            lineHeight: 1.3,
                            marginBottom: '10px',
                            fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p
                          style={{
                            fontSize: '14px',
                            lineHeight: 1.6,
                            color: '#555555',
                            marginBottom: '18px',
                          }}
                        >
                          {service.shortDesc}
                        </p>

                        {/* What We Deliver Highlight Box */}
                        <div
                          style={{
                            backgroundColor: '#faf8f5',
                            border: '1px solid #e8e4dc',
                            borderRadius: '8px',
                            padding: '12px 14px',
                            marginBottom: '18px',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              color: '#fe6200',
                              marginBottom: '4px',
                            }}
                          >
                            What We Deliver:
                          </div>
                          <div style={{ fontSize: '12.5px', color: '#333333', lineHeight: 1.5 }}>
                            {service.whatWeDeliver}
                          </div>
                        </div>

                        {/* Key Capabilities */}
                        <div style={{ marginBottom: '18px' }}>
                          <div
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              color: '#66615c',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              marginBottom: '8px',
                            }}
                          >
                            Core Capabilities:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {service.capabilities.map((cap, i) => (
                              <span
                                key={i}
                                style={{
                                  fontSize: '11.5px',
                                  color: '#2b2b2b',
                                  backgroundColor: '#f5f3ee',
                                  border: '1px solid rgba(0, 0, 0, 0.06)',
                                  padding: '3px 8px',
                                  borderRadius: '6px',
                                  fontWeight: 500,
                                }}
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        {/* Tech Stack Chips with SVGs */}
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px',
                            marginBottom: '18px',
                          }}
                        >
                          {service.techStack.map((tech) => {
                            const icon = getTechIconPath(tech);
                            return (
                              <span
                                key={tech}
                                style={{
                                  fontSize: '11px',
                                  color: '#1a1a1a',
                                  backgroundColor: '#ffffff',
                                  border: '1px solid #e8e4dc',
                                  padding: '3px 8px',
                                  borderRadius: '6px',
                                  fontWeight: 600,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                }}
                              >
                                {icon && (
                                  <img
                                    src={icon}
                                    alt=""
                                    aria-hidden="true"
                                    style={{ width: '12px', height: '12px', objectFit: 'contain' }}
                                  />
                                )}
                                <span>{tech}</span>
                              </span>
                            );
                          })}
                        </div>

                        {/* Bottom Row */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '14px',
                            borderTop: '1px solid #f0ede6',
                          }}
                        >
                          <span style={{ fontSize: '12px', color: '#66615c' }}>
                            2-Week Staging Delivery
                          </span>

                          <span
                            className="service-card-btn-pill"
                            style={{
                              fontSize: '12.5px',
                              fontWeight: 600,
                              color: '#fe6200',
                              backgroundColor: 'rgba(254, 98, 0, 0.08)',
                              border: '1px solid rgba(254, 98, 0, 0.18)',
                              padding: '5px 12px',
                              borderRadius: '9999px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <span>Explore Service</span>
                            <ArrowRight size={12} className="service-card-arrow" style={{ transition: 'transform 0.2s ease' }} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealElement>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          3. OUR PRODUCTION FRAMEWORK (Engineering Rigor)
          ======================================================== */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e4e0d7',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '44px' }}>
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#fe6200',
                fontFamily: 'monospace',
              }}
            >
              Execution Framework
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 38px)',
                fontWeight: 800,
                color: '#000000',
                margin: '6px 0 12px 0',
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              }}
            >
              How We Deliver Mission-Critical Software
            </h2>
            <p style={{ fontSize: '15.5px', color: '#555555', lineHeight: 1.6, margin: 0 }}>
              We eliminate ambiguity through technical discovery, bi-weekly functional demos, and strict automated verification before any code promotes to production.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '22px',
            }}
          >
            {developmentSteps.map((step, idx) => (
              <RevealElement key={idx} variant="card" delay={idx * 0.08}>
                <div
                  style={{
                    backgroundColor: 'var(--colors-surface-light, #fbf9f5)',
                    border: '1px solid #e8e4dc',
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
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#fe6200',
                        fontFamily: 'monospace',
                        marginBottom: '14px',
                      }}
                    >
                      {step.num}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#000000',
                        margin: '0 0 10px 0',
                      }}
                    >
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

      {/* ========================================================
          4. CTA BANNER (Project Discussion Anchor)
          ======================================================== */}
      <section
        style={{
          padding: '64px 24px',
          background: 'linear-gradient(135deg, #111111 0%, #1f1d1b 100%)',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#fe6200',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'monospace',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Start Your Architecture Sprint
            </span>
            <h3
              style={{
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 10px 0',
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              }}
            >
              Ready to Build Your Engineering Pod?
            </h3>
            <p style={{ fontSize: '15px', color: '#cccccc', margin: 0, lineHeight: 1.6 }}>
              Speak directly with our senior system architects. We review your technical requirements, estimate sprint milestones, and provide a transparent delivery plan.
            </p>
          </div>

          <button
            onClick={handleEstimateClick}
            style={{
              backgroundColor: '#fe6200',
              color: '#ffffff',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 18px rgba(254, 98, 0, 0.4)',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#cf5000';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fe6200';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Book Architecture Call</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Shared Contact & Locations */}
      <div id="contact-section">
        <ContactSection />
      </div>
      <LocationsSection />
      <Footer onNavigate={(target) => {
        if (target.includes('portfolio') || target.includes('case-studies')) {
          if (onNavigateToPortfolio) onNavigateToPortfolio();
          else window.location.href = '/case-studies';
        } else if (target.includes('contact')) {
          handleEstimateClick();
        } else {
          window.location.href = target;
        }
      }} />
    </div>
  );
};
