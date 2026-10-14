import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Cloud,
  Smartphone,
  Database,
  ShieldCheck,
  Code2,
  Server,
  Zap,
  Lock,
  ChevronDown,
} from 'lucide-react';

interface ProductEngineeringPageProps {
  onNavigateHome: () => void;
  onOpenPrivacy?: () => void;
  onSuccessToast?: (msg: string) => void;
}

export const ProductEngineeringPage: React.FC<ProductEngineeringPageProps> = ({
  onNavigateHome,
  onOpenPrivacy,
  onSuccessToast,
}) => {
  const [activeStackCategory, setActiveStackCategory] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [leadEmail, setLeadEmail] = useState('');
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
        onSuccessToast('Engineering consultation request submitted! Our squad lead will reach out within 24h.');
      } else {
        alert('Thank you! Your product engineering request has been received.');
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

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    if (onSuccessToast) {
      onSuccessToast(`Consultation invite sent to ${leadEmail}`);
    }
    setLeadEmail('');
  };

  // 6 Product Engineering Spectrum Cards
  const engineeringServices = [
    {
      icon: <Code2 size={24} color="#2258e7" />,
      title: 'Custom Software Development',
      description: 'End-to-end custom development of web, cloud, and enterprise platforms tailored to exact business logic with zero technical debt.',
      metrics: '500+ deployed applications',
      tags: ['React / Next.js', 'Node.js / Go', 'Microservices', 'GraphQL'],
    },
    {
      icon: <Cloud size={24} color="#2258e7" />,
      title: 'Cloud-Native Architecture & DevOps',
      description: 'High-availability infrastructure engineered on AWS, GCP, and Azure with Kubernetes orchestration, Terraform IaC, and automated CI/CD.',
      metrics: '99.99% uptime architectures',
      tags: ['Kubernetes', 'AWS Lambda', 'Terraform', 'Docker'],
    },
    {
      icon: <Smartphone size={24} color="#2258e7" />,
      title: 'Mobile App Development',
      description: 'Native iOS (Swift) and Android (Kotlin) development alongside unified React Native solutions delivering smooth 120Hz native performance.',
      metrics: '4.8+ avg app store rating',
      tags: ['Swift', 'Kotlin', 'React Native', 'Offline-First'],
    },
    {
      icon: <Database size={24} color="#2258e7" />,
      title: 'AI & Data Engineering',
      description: 'Modern data pipelines, real-time analytics, vector database architectures, and custom LLM integrations for intelligent enterprise workflows.',
      metrics: 'Real-time ETL @ millions ops/sec',
      tags: ['RAG Pipelines', 'pgvector', 'Apache Kafka', 'PyTorch'],
    },
    {
      icon: <Layers size={24} color="#2258e7" />,
      title: 'Enterprise System Modernization',
      description: 'Refactoring monolithic legacy software into modular, API-first microservices without operational downtime or data loss.',
      metrics: '60% infra cost reduction',
      tags: ['Legacy Migration', 'Domain-Driven', 'BPMN', 'Zero-Downtime'],
    },
    {
      icon: <ShieldCheck size={24} color="#2258e7" />,
      title: 'QA & Automated Test Engineering',
      description: 'Rigorous automated E2E test suites, security penetration testing, and continuous load validation built directly into deployment pipelines.',
      metrics: 'Zero-regression deployments',
      tags: ['Playwright', 'Jest / Vitest', 'Chaos Testing', 'SOC 2 Checks'],
    },
  ];

  // Tech stack categories
  const stackCategories = [
    {
      name: 'Frontend & Web',
      items: [
        { name: 'React 19', tag: 'UI Library' },
        { name: 'Next.js', tag: 'SSR Framework' },
        { name: 'TypeScript', tag: 'Type Safety' },
        { name: 'Vue / Nuxt', tag: 'Component Engine' },
        { name: 'Tailwind / CSS', tag: 'Styling' },
        { name: 'WebAssembly', tag: 'High-Perf Core' },
      ],
    },
    {
      name: 'Backend & APIs',
      items: [
        { name: 'Node.js / Express', tag: 'Event-Driven' },
        { name: 'Go (Golang)', tag: 'High-Concurrency' },
        { name: 'Python / FastAPI', tag: 'AI & Backend' },
        { name: 'Java Spring Boot', tag: 'Enterprise Grade' },
        { name: '.NET Core', tag: 'Microservices' },
        { name: 'GraphQL / gRPC', tag: 'API Gateway' },
      ],
    },
    {
      name: 'Cloud & Infrastructure',
      items: [
        { name: 'Amazon AWS', tag: 'Cloud Platform' },
        { name: 'Google Cloud (GCP)', tag: 'Compute & AI' },
        { name: 'Microsoft Azure', tag: 'Enterprise Cloud' },
        { name: 'Kubernetes (K8s)', tag: 'Container Orchestration' },
        { name: 'Docker', tag: 'Containerization' },
        { name: 'Terraform', tag: 'Infrastructure as Code' },
      ],
    },
    {
      name: 'Databases & Storage',
      items: [
        { name: 'PostgreSQL', tag: 'Relational DB' },
        { name: 'Redis', tag: 'In-Memory Cache' },
        { name: 'MongoDB', tag: 'Document DB' },
        { name: 'Apache Kafka', tag: 'Event Streaming' },
        { name: 'Snowflake', tag: 'Data Warehousing' },
        { name: 'Pinecone / Qdrant', tag: 'Vector Search' },
      ],
    },
  ];

  // FAQs
  const faqs = [
    {
      q: 'What engagement models do you offer for product engineering?',
      a: 'We provide three agile engagement models: Dedicated Engineering Squads (cross-functional teams embedded directly into your sprint cycle), Full-Lifecycle Turnkey Development (end-to-end architecture through deployment), and Staff Augmentation (specialized senior engineers integrating into your existing team).',
    },
    {
      q: 'How do you handle Intellectual Property (IP) ownership?',
      a: 'You retain 100% full legal ownership of all code, architecture blueprints, UI assets, and technical documentation from day one. All IP rights are assigned to your organization upon creation.',
    },
    {
      q: 'How fast can a product engineering squad be deployed?',
      a: 'Our pre-vetted senior squads typically mobilize and begin sprint zero onboarding within 5 to 10 business days following requirements alignment and NDA execution.',
    },
    {
      q: 'How do you maintain software quality and security during development?',
      a: 'We enforce automated CI/CD pipelines with comprehensive unit, integration, and E2E test suites (target >85% code coverage), automated SAST/DAST security scans, peer code reviews on every pull request, and strict ISO 27001/SOC 2 compliance protocols.',
    },
    {
      q: 'Can you modernize our existing legacy software without downtime?',
      a: 'Yes. We specialize in iterative strangler fig pattern migrations, isolating legacy monolithic components and progressively replacing them with modern cloud-native microservices while maintaining continuous production uptime.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* 1. HERO SECTION (Matches Image 1) */}
      <section
        style={{
          position: 'relative',
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
          {/* Badge */}
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
            <Cpu size={15} />
            <span>Full-Cycle Engineering & Architecture</span>
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
            Product Engineering <br />
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
            From discovery and cloud-native system architecture to full-cycle development, DevOps, and continuous scaling, we turn complex technical challenges into robust, market-ready digital products.
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
                document.getElementById('services-spectrum')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-outline btn-lg"
            >
              <span>Explore services</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Hero 3D Graphic (Laptop Motherboard & Glowing Tech Mesh) */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '380px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              aspectRatio: '16/11',
              backgroundColor: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '24px',
              position: 'relative',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(34, 88, 231, 0.12)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top Mockup Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              </div>
              <span style={{ fontSize: '11px', color: '#8893a7', fontFamily: 'monospace' }}>production-cluster-v2.9</span>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 600 }}>● 99.99% HEALTHY</span>
            </div>

            {/* Architecture Node Wireframe Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', margin: '20px 0' }}>
              <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.15)', border: '1px solid rgba(34, 88, 231, 0.4)', borderRadius: '4px', padding: '14px 10px', textAlign: 'center' }}>
                <Server size={20} color="#2258e7" style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '12px', fontWeight: 600 }}>API Gateway</div>
                <div style={{ fontSize: '10px', color: '#8893a7' }}>18ms latency</div>
              </div>

              <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.25)', border: '1px solid #2258e7', borderRadius: '4px', padding: '14px 10px', textAlign: 'center', boxShadow: '0 0 20px rgba(34, 88, 231, 0.3)' }}>
                <Cpu size={20} color="#3b82f6" style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>Microservices</div>
                <div style={{ fontSize: '10px', color: '#93c5fd' }}>Auto-scaling (K8s)</div>
              </div>

              <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.15)', border: '1px solid rgba(34, 88, 231, 0.4)', borderRadius: '4px', padding: '14px 10px', textAlign: 'center' }}>
                <Database size={20} color="#2258e7" style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '12px', fontWeight: 600 }}>pgvector / Redis</div>
                <div style={{ fontSize: '10px', color: '#8893a7' }}>Multi-region sync</div>
              </div>
            </div>

            {/* Bottom Metric Badge */}
            <div
              style={{
                backgroundColor: '#161922',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={20} color="#10b981" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>Enterprise-Grade Resilience</div>
                  <div style={{ fontSize: '11px', color: '#8893a7' }}>Zero single point of failure</div>
                </div>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#3b82f6', backgroundColor: 'rgba(34, 88, 231, 0.2)', padding: '3px 8px', borderRadius: '2px' }}>
                SOC 2 / ISO 27001
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLUE CERTIFICATION & PARTNERS STRIP */}
      <section
        style={{
          backgroundColor: '#2258e7',
          padding: '24px clamp(16px, 4vw, 48px)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={26} color="#ffffff" />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                CERTIFIED ENGINEERING EXCELLENCE
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                Audited & verified enterprise delivery standards
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', letterSpacing: '0.02em' }}>AWS Advanced Partner</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>•</span>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', letterSpacing: '0.02em' }}>Microsoft Solutions Partner</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>•</span>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', letterSpacing: '0.02em' }}>ISO/IEC 27001</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>•</span>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', letterSpacing: '0.02em' }}>SOC 2 Type II</span>
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE PRODUCT ENGINEERING OVERVIEW */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
              ENGINEERING RIGOR
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                margin: '0 0 20px 0',
              }}
            >
              Engineered for Scale, Security, and Speed
            </h2>
            <p style={{ color: '#a0aec0', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
              We build production software with high-throughput architecture, clean code standards, automated testing, and comprehensive documentation. Our squads work in continuous 2-week agile sprints with bi-weekly deployments.
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                'Full IP transfer and clean Git repository handover',
                'Modular microservices designed for elastic auto-scaling',
                'Zero-downtime deployment pipelines with rollback guarantees',
                'Direct communication with senior tech leads and architects',
              ].map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#2258e7" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#e4e4e7', fontSize: '15px' }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '24px' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>23+</div>
                <div style={{ fontSize: '12px', color: '#8893a7', marginTop: '2px' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#2258e7' }}>500+</div>
                <div style={{ fontSize: '12px', color: '#8893a7', marginTop: '2px' }}>Products Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>99.4%</div>
                <div style={{ fontSize: '12px', color: '#8893a7', marginTop: '2px' }}>SLA Compliance</div>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div
            style={{
              backgroundColor: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '32px',
              position: 'relative',
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 16px 0', color: '#ffffff' }}>
              Dedicated Cross-Functional Squads
            </h3>
            <p style={{ color: '#a0aec0', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              Every product engagement is staffed with experienced specialists dedicated to your technological success:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { role: 'Lead Solutions Architect', desc: 'System design, cloud topology, performance budgeting' },
                { role: 'Senior Full-Stack Engineers', desc: 'React, Node.js, Go, Python, microservices implementation' },
                { role: 'DevOps & Cloud Specialist', desc: 'Kubernetes, Terraform, AWS/GCP, automated CI/CD' },
                { role: 'QA Automation Engineer', desc: 'E2E test pipelines, regression safety, security verification' },
                { role: 'Technical Product Manager', desc: 'Sprint planning, backlog prioritization, milestone delivery' },
              ].map((squad) => (
                <div
                  key={squad.role}
                  style={{
                    backgroundColor: '#161922',
                    padding: '12px 16px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>{squad.role}</div>
                  <div style={{ fontSize: '12px', color: '#8893a7', marginTop: '2px' }}>{squad.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT ENGINEERING SERVICES SPECTRUM (6 CARDS) */}
      <section
        id="services-spectrum"
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
              COMPREHENSIVE CAPABILITIES
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                margin: '0 0 16px 0',
              }}
            >
              Our Product Engineering Services
            </h2>
            <p style={{ color: '#a0aec0', fontSize: '16px', lineHeight: 1.6 }}>
              Explore our modular engineering disciplines designed to accelerate software time-to-market and maximize platform performance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            {engineeringServices.map((svc) => (
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
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundColor: 'rgba(34, 88, 231, 0.15)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    {svc.icon}
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: '0 0 12px 0' }}>
                    {svc.title}
                  </h3>

                  <p style={{ color: '#a0aec0', fontSize: '14px', lineHeight: 1.65, margin: '0 0 20px 0' }}>
                    {svc.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {svc.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '12px',
                          backgroundColor: '#161922',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          color: '#e4e4e7',
                          padding: '3px 8px',
                          borderRadius: '3px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '12px', color: '#2258e7', fontWeight: 600 }}>{svc.metrics}</span>
                  <button
                    onClick={() => document.getElementById('contact-rfp')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Inquire</span>
                    <ArrowRight size={13} color="#2258e7" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DARK BLUE LEAD CTA STRIP */}
      <section
        style={{
          background: 'linear-gradient(135deg, #091a3a 0%, #17387a 100%)',
          padding: '56px clamp(16px, 5vw, 64px)',
          borderTop: '1px solid rgba(34, 88, 231, 0.3)',
          borderBottom: '1px solid rgba(34, 88, 231, 0.3)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          <div>
            <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, margin: '0 0 8px 0', color: '#ffffff' }}>
              Ready to accelerate your product engineering velocity?
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', margin: 0 }}>
              Receive a detailed architectural review and squad ramp-up estimate within 24 hours.
            </p>
          </div>

          <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: 'min(440px, 100%)' }}>
            <input
              type="email"
              placeholder="Enter your work email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              required
              style={{
                flex: '1 1 220px',
                padding: '13px 16px',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '2px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#2258e7',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                padding: '13px 22px',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Get estimate
            </button>
          </form>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK & CORE COMPETENCIES */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
            TECH STACK & CAPABILITIES
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, margin: '0 0 16px 0' }}>
            Engineered with Modern Technologies
          </h2>
          <p style={{ color: '#a0aec0', fontSize: '16px' }}>
            Our engineering squads utilize industry-standard, production-proven languages, frameworks, and infrastructure tools.
          </p>
        </div>

        {/* Stack Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {stackCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveStackCategory(idx)}
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '2px',
                border: '1px solid',
                borderColor: activeStackCategory === idx ? '#2258e7' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: activeStackCategory === idx ? '#2258e7' : '#11141c',
                color: activeStackCategory === idx ? '#ffffff' : '#a0aec0',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Stack Items */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {stackCategories[activeStackCategory].items.map((item) => (
            <div
              key={item.name}
              style={{
                backgroundColor: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                {item.name}
              </div>
              <div style={{ fontSize: '12px', color: '#2258e7', fontWeight: 500 }}>
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section
        style={{
          backgroundColor: '#090b0e',
          padding: 'clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, margin: 0 }}>
              Product Engineering FAQs
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
        </div>
      </section>

      {/* 8. STILL HAVE QUESTIONS? BANNER */}
      <section
        style={{
          padding: '48px clamp(16px, 5vw, 64px)',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
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
              👨‍💻
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>
                Still have questions regarding your architecture?
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', margin: 0 }}>
                Speak directly with a Principal Solutions Architect to review your tech stack and requirements.
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
            Schedule tech review
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
          }}
        >
          <div>
            <div style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
              GET IN TOUCH
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 20px 0' }}>
              Let's engineer your software solution
            </h2>
            <p style={{ color: '#a0aec0', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
              Fill out the form to request a consultation with our product engineering squad. We respond within 24 hours with a custom technical assessment and squad estimate.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <ShieldCheck size={20} color="#2258e7" />
                <span style={{ color: '#ffffff', fontSize: '14px' }}>Mutual Non-Disclosure Agreement (NDA) guaranteed</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Zap size={20} color="#2258e7" />
                <span style={{ color: '#ffffff', fontSize: '14px' }}>Rapid 24-hour turnaround with technical leads</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Lock size={20} color="#2258e7" />
                <span style={{ color: '#ffffff', fontSize: '14px' }}>100% intellectual property ownership from Day 1</span>
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
                  placeholder="e.g. Alex Morgan"
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
                  placeholder="alex@company.com"
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
                  placeholder="e.g. Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161922', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px', color: '#ffffff', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#8893a7', marginBottom: '6px' }}>Project Scope & Engineering Needs</label>
              <textarea
                rows={4}
                placeholder="Tell us about your system architecture, technology stack, target launch date, and team requirements..."
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
              <span>{isSubmitting ? 'Submitting...' : 'Submit Engineering Request'}</span>
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
                <li style={{ color: '#2258e7', fontWeight: 600 }}>Product Engineering (Active)</li>
                <li>Product Discovery</li>
                <li>Cloud Solutions</li>
                <li>AI & Machine Learning</li>
                <li>Data Engineering</li>
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
