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
  Sparkles,
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
      icon: <Sparkles size={22} color="#2258e7" />,
    },
    {
      title: 'Machine learning',
      desc: 'Models that learn from your own data to predict demand, flag risk or personalize what customers see.',
      icon: <Cpu size={22} color="#2258e7" />,
    },
    {
      title: 'Cloud computing',
      desc: 'Cloud platforms give you speed, reliability and room to grow without running your own servers.',
      icon: <Cloud size={22} color="#2258e7" />,
    },
    {
      title: 'Data analytics',
      desc: 'Dashboards and reports that turn scattered data into clear decisions.',
      icon: <BarChart3 size={22} color="#2258e7" />,
    },
    {
      title: 'Automation',
      desc: 'Workflows that run on their own, so your team spends time on work that needs people.',
      icon: <Zap size={22} color="#2258e7" />,
    },
  ];

  const whatWeBuild = [
    {
      title: 'Web applications',
      desc: 'Fast, secure and responsive web apps, portals and sites that grow with your traffic.',
      icon: <Globe size={24} color="#2258e7" />,
      tag: 'Scale & Performance',
    },
    {
      title: 'Mobile applications',
      desc: 'iOS and Android apps designed for smooth use, with updates that are easy to ship.',
      icon: <Smartphone size={24} color="#2258e7" />,
      tag: 'iOS & Android',
    },
    {
      title: 'Cloud and SaaS applications',
      desc: 'Cloud-native products with accounts, billing and analytics ready to scale.',
      icon: <Cloud size={24} color="#2258e7" />,
      tag: 'Multi-Tenant SaaS',
    },
    {
      title: 'AI-powered applications',
      desc: 'Software that uses AI to automate work, answer questions or make predictions.',
      icon: <Bot size={24} color="#2258e7" />,
      tag: 'Generative AI & LLMs',
    },
  ];

  const servicesList = [
    {
      num: '01',
      title: 'Web Development',
      slug: 'web-cms-development',
      desc: 'Fast, secure, responsive websites, portals and web apps that scale with your traffic.',
      icon: <Code size={20} color="#2258e7" />,
    },
    {
      num: '02',
      title: 'Mobile App Development',
      slug: 'mobile-app-development',
      desc: 'iOS and Android apps built for smooth use and easy updates.',
      icon: <Smartphone size={20} color="#2258e7" />,
    },
    {
      num: '03',
      title: 'Cross-platform Development',
      slug: 'mobile-app-development',
      desc: 'One codebase that runs on iOS, Android and the web, so you launch sooner and maintain less.',
      icon: <Layers size={20} color="#2258e7" />,
    },
    {
      num: '04',
      title: 'Legacy App Modernization',
      slug: 'software-development',
      desc: 'Move outdated systems to modern code and the cloud in stages, without stopping daily operations.',
      icon: <RefreshCw size={20} color="#2258e7" />,
    },
    {
      num: '05',
      title: 'E-commerce Software',
      slug: 'ecommerce-development',
      desc: 'Online stores, checkout, payments and inventory tools built to grow with your orders.',
      icon: <ShoppingCart size={20} color="#2258e7" />,
    },
    {
      num: '06',
      title: 'Custom Software',
      slug: 'software-development',
      desc: 'Tools designed around your own workflow when off-the-shelf software does not fit.',
      icon: <Cpu size={20} color="#2258e7" />,
    },
    {
      num: '07',
      title: 'AI Integration',
      slug: 'ai-development',
      desc: 'Add AI features such as smart search, summaries or predictions to the software you already run.',
      icon: <Sparkles size={20} color="#2258e7" />,
    },
    {
      num: '08',
      title: 'AI Automation',
      slug: 'ai-automations',
      desc: 'Remove repetitive manual work from approvals, data entry, reporting and support.',
      icon: <Zap size={20} color="#2258e7" />,
    },
    {
      num: '09',
      title: 'AI-Native Software',
      slug: 'ai-agents',
      desc: 'Products designed around AI from the first line of code.',
      icon: <Bot size={20} color="#2258e7" />,
    },
    {
      num: '10',
      title: 'Cloud Apps Development',
      slug: 'devops',
      desc: 'Cloud-native apps that stay available, secure and cost-efficient under load.',
      icon: <Cloud size={20} color="#2258e7" />,
    },
    {
      num: '11',
      title: 'SaaS Development',
      slug: 'software-development',
      desc: 'Subscription products with accounts, billing and analytics ready to scale.',
      icon: <Globe size={20} color="#2258e7" />,
    },
  ];

  const industriesList = [
    {
      title: 'E-commerce',
      desc: 'Storefronts, catalog tools and order systems that handle many products, currencies and payment methods.',
    },
    {
      title: 'Healthcare',
      desc: 'Patient-facing apps and secure workflows built with privacy rules in mind.',
    },
    {
      title: 'Education',
      desc: 'Learning platforms and admin tools for schools and online academies.',
    },
    {
      title: 'Enterprise',
      desc: 'Internal tools, integrations and automation that connect your teams and systems.',
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
          2. TRENDS BLOCK (5 ITEMS)
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Market Dynamics
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
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
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  {t.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
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
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '44px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Core Capabilities
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              What we build
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {whatWeBuild.map((item, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '30px',
                  backgroundColor: '#f8fafc',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#2258e7', backgroundColor: '#eff6ff', padding: '3px 8px', borderRadius: '4px' }}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
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
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Full Service Catalog
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Services we offer
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', marginTop: '8px' }}>
              From initial architecture to continuous production delivery, our teams cover every stage of the software lifecycle.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                onClick={() => handleServiceClick(service.slug)}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2258e7';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(34, 88, 231, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.03)';
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#94a3b8', fontFamily: 'monospace' }}>
                  {service.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                      {service.title}
                    </h3>
                    <ArrowRight size={14} color="#2258e7" />
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
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
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Domain Expertise
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
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
                color: '#2258e7',
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
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '24px',
                  backgroundColor: '#f8fafc',
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {ind.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
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
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Modern Tech Stack
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Technologies we use
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', marginTop: '8px' }}>
              The tools behind our work, chosen for your goals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {technologies.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
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
