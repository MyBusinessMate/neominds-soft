import React from 'react';
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

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({
  onNavigateToService,
  onNavigateToContact,
  onNavigateToPortfolio,
  onNavigateToIndustries,
}) => {
  const trends = [
    {
      title: 'Artificial intelligence',
      desc: 'AI now supports work from customer service to forecasting. We help you use it where it saves time or improves decisions.',
      icon: <Cpu size={22} color="#fe6200" />,
    },
    {
      title: 'Machine learning',
      desc: 'Models that learn from your own data to predict demand, flag risk or personalize what customers see.',
      icon: <Layers size={22} color="#fe6200" />,
    },
    {
      title: 'Cloud computing',
      desc: 'Cloud platforms give you speed, reliability and room to grow without running your own servers.',
      icon: <Cloud size={22} color="#fe6200" />,
    },
    {
      title: 'Data analytics',
      desc: 'Dashboards and reports that turn scattered data into clear decisions.',
      icon: <BarChart3 size={22} color="#fe6200" />,
    },
    {
      title: 'Automation',
      desc: 'Workflows that run on their own, so your team spends time on work that needs people.',
      icon: <Zap size={22} color="#fe6200" />,
    },
  ];

  const whatWeBuild = [
    {
      title: 'Web applications',
      desc: 'Fast, secure and responsive web apps, portals and sites that grow with your traffic.',
      icon: <Globe size={24} color="#fe6200" />,
      tag: 'Scale & Performance',
    },
    {
      title: 'Mobile applications',
      desc: 'iOS and Android apps designed for smooth use, with updates that are easy to ship.',
      icon: <Smartphone size={24} color="#fe6200" />,
      tag: 'iOS & Android',
    },
    {
      title: 'Cloud and SaaS applications',
      desc: 'Cloud-native products with accounts, billing and analytics ready to scale.',
      icon: <Cloud size={24} color="#fe6200" />,
      tag: 'Multi-Tenant SaaS',
    },
    {
      title: 'AI-powered applications',
      desc: 'Software that uses AI to automate work, answer questions or make predictions.',
      icon: <Bot size={24} color="#fe6200" />,
      tag: 'Generative AI & LLMs',
    },
  ];

  const servicesList = [
    {
      num: '01',
      title: 'Web Development',
      slug: 'web-development',
      desc: 'Fast, secure, responsive websites, portals and web apps that scale with your traffic.',
      icon: <Code size={20} color="#fe6200" />,
    },
    {
      num: '02',
      title: 'App Development',
      slug: 'app-development',
      desc: 'Native iOS and Android apps built for smooth performance, security, and easy maintenance.',
      icon: <Smartphone size={20} color="#fe6200" />,
    },
    {
      num: '03',
      title: 'Cross-Platform Mobile App Development',
      slug: 'cross-platform-app-development',
      desc: 'A unified codebase running cleanly across iOS, Android, and web with zero performance compromise.',
      icon: <Layers size={20} color="#fe6200" />,
    },
    {
      num: '04',
      title: 'Custom Software Development',
      slug: 'custom-software-development',
      desc: 'Engineered around your operational workflow when off-the-shelf software falls short.',
      icon: <Cpu size={20} color="#fe6200" />,
    },
    {
      num: '05',
      title: 'AI Automations',
      slug: 'ai-automations',
      desc: 'Eliminate repetitive manual tasks across approvals, invoice parsing, QA, and data sync.',
      icon: <Zap size={20} color="#fe6200" />,
    },
    {
      num: '06',
      title: 'AI Integrations',
      slug: 'ai-integrations',
      desc: 'Embed semantic search, LLM reasoning, and intelligent document processing into existing stacks.',
      icon: <Layers size={20} color="#fe6200" />,
    },
    {
      num: '07',
      title: 'AI Systems',
      slug: 'ai-systems',
      desc: 'Autonomous agentic systems, specialized reasoning models, and production RAG pipelines.',
      icon: <Bot size={20} color="#fe6200" />,
    },
    {
      num: '08',
      title: 'E-commerce Platform',
      slug: 'ecommerce-platform',
      desc: 'High-volume storefronts, checkout engines, inventory sync, and localized payment gateways.',
      icon: <ShoppingCart size={20} color="#fe6200" />,
    },
    {
      num: '09',
      title: 'AI Native Softwares',
      slug: 'ai-native-software',
      desc: 'Software built with generative AI and LLMs as the foundational architecture layer.',
      icon: <Bot size={20} color="#fe6200" />,
    },
    {
      num: '10',
      title: 'Cloud Based Softwares',
      slug: 'cloud-based-software',
      desc: 'Resilient cloud infrastructure, distributed microservices, and auto-scaling compute pods.',
      icon: <Cloud size={20} color="#fe6200" />,
    },
    {
      num: '11',
      title: 'SaaS Development',
      slug: 'saas-development',
      desc: 'Multi-tenant subscription platforms with tenant isolation, billing, and role management.',
      icon: <Globe size={20} color="#fe6200" />,
    },
    {
      num: '12',
      title: 'Analytic Dashboard',
      slug: 'analytics-dashboard',
      desc: 'Real-time telemetry, executive reporting metrics, and interactive analytics dashboards.',
      icon: <BarChart3 size={20} color="#fe6200" />,
    },
    {
      num: '13',
      title: 'Custom Health Softwares',
      slug: 'custom-health-software',
      desc: 'HIPAA-compliant hospital systems, telemedicine platforms, and patient engagement tools.',
      icon: <Cpu size={20} color="#fe6200" />,
    },
    {
      num: '14',
      title: 'Legacy System Modernisation',
      slug: 'legacy-modernisation',
      desc: 'Decompose monolithic mainframes and outdated codebases into cloud microservices with zero downtime.',
      icon: <RefreshCw size={20} color="#fe6200" />,
    },
    {
      num: '15',
      title: 'Training as a Service',
      slug: 'training-as-service',
      desc: 'Technical enablement, AI upskilling, and architectural onboarding for client engineering teams.',
      icon: <Globe size={20} color="#fe6200" />,
    },
    {
      num: '16',
      title: 'Product Engineering',
      slug: 'product-engineering',
      desc: 'End-to-end product delivery from technical discovery and sprint execution to production scaling.',
      icon: <Layers size={20} color="#fe6200" />,
    },
  ];

  const industriesList = [
    {
      title: 'Enterprise',
      desc: 'Internal systems, ERP integrations, workflow automation, and distributed data pipelines.',
    },
    {
      title: 'Financial Tech',
      desc: 'Core banking ledgers, automated clearing, payment routing, and fraud compliance systems.',
    },
    {
      title: 'Retail',
      desc: 'Point-of-sale integrations, dynamic inventory synchronization, and omnichannel billing.',
    },
    {
      title: 'Education',
      desc: 'Co-teacher systems, facial attendance tracking, fee managers, and learning platforms.',
    },
    {
      title: 'Healthcare',
      desc: 'HIPAA-compliant patient portals, hospital management systems (HMS), and diagnostic tools.',
    },
    {
      title: 'E-commerce',
      desc: 'High-throughput stores, catalog caching, checkout optimization, and multi-currency billing.',
    },
    {
      title: 'Real Estate',
      desc: 'Property management systems, cloud leasing platforms, and tenant portal architectures.',
    },
    {
      title: 'E-learning',
      desc: 'Modular LMS platforms, interactive learning modules, and automated student progress tracking.',
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

  return (
    <div style={{ backgroundColor: 'var(--colors-background-dark, #200b00)', minHeight: '100vh', paddingTop: '80px', color: '#ffffff' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--colors-background-dark, #200b00)', color: '#ffffff', padding: '90px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          <div style={{ maxWidth: '840px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#fe6200',
                marginBottom: '16px',
              }}
            >
              Services Hub
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
              Software development services
            </ScrollReveal>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.88)',
                marginBottom: '36px',
              }}
            >
              Neominds TechHub builds web, mobile, cloud and AI software for businesses worldwide. We plan, design, build, launch and support your product, with clear scope, weekly demos and a team that works your hours.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={handleEstimateClick}
                style={{
                  backgroundColor: '#fe6200',
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
          2. TRENDS BLOCK (5 ITEMS)
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Market Dynamics
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#000000', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              What is shaping software today
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {trends.map((t, idx) => (
              <RevealElement
                key={idx}
                variant="card"
                delay={idx * 0.05}
                style={{
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                  border: '1px solid #351505',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(32, 11, 0,  0.4)',
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(254, 98, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  {t.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#a3a09b', lineHeight: 1.6, margin: 0 }}>
                  {t.desc}
                </p>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHAT WE BUILD (4 CARDS)
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--colors-background-dark, #200b00)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '44px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Core Capabilities
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#ffffff', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              What we build
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {whatWeBuild.map((item, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #351505',
                  borderRadius: '12px',
                  padding: '30px',
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'var(--colors-background-dark, #200b00)', border: '1px solid #351505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#fe6200', backgroundColor: 'rgba(254, 98, 0, 0.12)', padding: '3px 8px', borderRadius: '4px' }}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#a3a09b', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SERVICES WE OFFER (NUMBERED LIST)
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--colors-background-dark, #200b00)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Full Service Catalog
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#ffffff', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Services we offer
            </h2>
            <p style={{ fontSize: '16px', color: '#a3a09b', maxWidth: '680px', marginTop: '8px' }}>
              From initial architecture to continuous production delivery, our teams cover every stage of the software lifecycle.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                onClick={() => handleServiceClick(service.slug)}
                style={{
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                  border: '1px solid #351505',
                  borderRadius: '12px',
                  padding: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(32, 11, 0,  0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fe6200';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(254, 98, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#351505';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(32, 11, 0,  0.4)';
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#fe6200', fontFamily: 'monospace' }}>
                  {service.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      {service.title}
                    </h3>
                    <ArrowRight size={14} color="#fe6200" />
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#a3a09b', lineHeight: 1.55, margin: 0 }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. INDUSTRIES WE BUILD FOR
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--colors-background-dark, #200b00)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Domain Expertise
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#ffffff', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
                Industries we build for
              </h2>
            </div>

            <button
              onClick={() => {
                if (onNavigateToIndustries) onNavigateToIndustries();
                else window.location.href = '/industries';
              }}
              style={{
                backgroundColor: 'transparent',
                color: '#fe6200',
                border: 'none',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>See all industries (adds Real Estate and Retail)</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {industriesList.map((ind, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #351505',
                  borderRadius: '10px',
                  padding: '24px',
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {ind.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#a3a09b', lineHeight: 1.6, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. TECHNOLOGIES WE USE
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: 'var(--colors-background-dark, #200b00)', borderTop: '1px solid #351505' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Modern Tech Stack
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#ffffff', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Technologies we use
            </h2>
            <p style={{ fontSize: '16px', color: '#a3a09b', maxWidth: '680px', marginTop: '8px' }}>
              The tools behind our work, chosen for your goals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {technologies.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                  border: '1px solid #351505',
                  borderRadius: '8px',
                  padding: '20px',
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {t.area}
                </div>
                <div style={{ fontSize: '13px', color: '#a3a09b', lineHeight: 1.5 }}>
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
