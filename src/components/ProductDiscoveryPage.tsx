import React, { useState, useRef, useEffect } from 'react';
import {
  ShieldCheck,
  Zap,
  DollarSign,
  Users,
  Compass,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Code,
  Cpu,
  Database,
  Search,
  Sparkles,
  Award,
  Send,
  Clock,
  FileText,
  Workflow,
  BarChart3,
  Globe,
  Lock,
  ArrowUpRight,
} from 'lucide-react';

interface ProductDiscoveryPageProps {
  onNavigateHome: () => void;
  onOpenPrivacy?: () => void;
  onSuccessToast: (msg: string) => void;
}

export const ProductDiscoveryPage: React.FC<ProductDiscoveryPageProps> = ({
  onNavigateHome,
  onOpenPrivacy,
  onSuccessToast,
}) => {
  // Active Phase in Process Section
  const [activePhase, setActivePhase] = useState<number>(0);

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectScope: '',
    ndaRequired: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');

  // Horizontal Scroll Showcase State & Ref
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Handle Horizontal Scroll Events
  const handleHorizontalScroll = () => {
    if (!horizontalScrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = horizontalScrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < maxScroll - 20);
  };

  useEffect(() => {
    const el = horizontalScrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleHorizontalScroll);
      handleHorizontalScroll();
      return () => el.removeEventListener('scroll', handleHorizontalScroll);
    }
  }, []);

  const scrollShowcase = (direction: 'left' | 'right') => {
    if (!horizontalScrollRef.current) return;
    const cardWidth = 460;
    horizontalScrollRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    onSuccessToast('Thank you! A discovery proposal has been sent to your email.');
    setLeadEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast('Your discovery consultation request was submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectScope: '',
        ndaRequired: true,
      });
    }, 800);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 4 Discovery Process Stages
  const discoveryPhases = [
    {
      number: '01',
      title: 'Research & Problem Definition',
      timeline: 'Week 1',
      description:
        'We conduct in-depth stakeholder interviews, evaluate target user personas, benchmark key competitors, and formulate clear problem statements.',
      deliverables: [
        'Stakeholder & User Persona Maps',
        'Competitive Advantage Matrix',
        'Business Model Canvas & Value Proposition',
        'Initial Risk & Compliance Assessment',
      ],
      icon: Search,
    },
    {
      number: '02',
      title: 'Ideation & UX Wireframing',
      timeline: 'Week 2',
      description:
        'Our design team crafts complete information architectures, creates intuitive user journeys, and builds interactive clickable low-fidelity wireframes.',
      deliverables: [
        'Information Architecture (IA) Blueprint',
        'End-to-End User Journey Flows',
        'Clickable Interactive Wireframes',
        'First-Pass Usability Test Results',
      ],
      icon: Workflow,
    },
    {
      number: '03',
      title: 'Architecture & Technical Feasibility',
      timeline: 'Week 3',
      description:
        'Principal architects evaluate technical constraints, select the modern tech stack, design cloud topologies, and ensure enterprise-grade security.',
      deliverables: [
        'Software Architecture Document (SAD)',
        'Cloud Infrastructure & DevOps Strategy',
        'Third-Party API & Data Pipeline Specs',
        'Security, GDPR & HIPAA Compliance Plan',
      ],
      icon: Code,
    },
    {
      number: '04',
      title: 'Roadmap, Estimation & PRD',
      timeline: 'Week 4',
      description:
        'We finalize the comprehensive Product Requirements Document, prioritize MVP user stories, and deliver an accurate sprint-by-sprint estimation.',
      deliverables: [
        'Full Product Requirements Document (PRD)',
        'Prioritized MVP User Stories Backlog',
        'Detailed Budget & Resource Breakdown',
        'Investor-Ready Technical Pitch Deck',
      ],
      icon: FileText,
    },
  ];

  // Showcase Cards for the Middle Horizontal Scroll Section
  const showcaseItems = [
    {
      id: 'wireframe',
      category: 'UX Prototyping',
      title: 'Interactive User Flow & Wireframe System',
      description:
        'Validated clickable journeys simulating live user onboarding, authentication, dashboard data feeds, and transaction checkout states.',
      badge: 'Figma System',
      stats: '18 Validated User Journeys',
      visualType: 'wireframe',
    },
    {
      id: 'dashboard',
      category: 'UI Design System',
      title: 'High-Fidelity SaaS Product Dashboard',
      description:
        'Production-ready dark-theme design tokens, responsive data tables, live metric sparklines, and custom micro-interactions.',
      badge: 'Interactive Prototype',
      stats: 'Pixel-Perfect Tokens',
      visualType: 'dashboard',
    },
    {
      id: 'architecture',
      category: 'System Architecture',
      title: 'Cloud Microservices & Event Stream Topology',
      description:
        'Fault-tolerant AWS/GCP architecture blueprint featuring Kafka event streams, Redis caching layer, and automated CI/CD pipelines.',
      badge: 'AWS Certified Architecture',
      stats: '99.99% Target Uptime',
      visualType: 'architecture',
    },
    {
      id: 'journey',
      category: 'User Research',
      title: 'Persona Empathy Map & Touchpoint Analysis',
      description:
        'In-depth behavioral heatmaps, customer pain-point matrices, and verified user motivation scores derived from target user testing.',
      badge: 'Research Insights',
      stats: '25+ User Interviews',
      visualType: 'journey',
    },
    {
      id: 'gantt',
      category: 'Delivery Planning',
      title: 'Agile Velocity & Milestone Release Gantt',
      description:
        'Granular 12-sprint execution roadmap with clear critical-path milestones, squad velocity targets, and risk mitigation buffers.',
      badge: 'Sprint Planning',
      stats: 'Fixed-Budget Scope',
      visualType: 'gantt',
    },
  ];

  // FAQ Items
  const faqItems = [
    {
      q: 'How long does a typical software product discovery phase take?',
      a: 'A standard product discovery engagement typically spans between 2 to 4 weeks depending on the project scope and complexity. For enterprise platforms with complex legacy integrations or heavy regulatory requirements (e.g. HIPAA or SOC2), discovery can extend to 6 weeks.',
    },
    {
      q: 'What tangible deliverables do we receive at the end of discovery?',
      a: 'You receive a complete, production-ready blueprint including: (1) Full Product Requirements Document (PRD), (2) Clickable High-Fidelity Figma Prototype, (3) Software Architecture Document with cloud topology diagrams, (4) User testing and market validation report, (5) Granular sprint backlog with MVP scoping, and (6) Transparent cost and timeline budget estimates.',
    },
    {
      q: 'Is product discovery necessary if we already have written requirements?',
      a: 'Yes. Most initial requirements lack technical feasibility validation, edge-case architectural stress testing, and real user usability feedback. Discovery bridges the gap between high-level business ideas and engineering execution, saving on average 40% in rework costs.',
    },
    {
      q: 'Can our in-house engineering team build the product using your discovery deliverables?',
      a: 'Absolutely. All deliverables, wireframes, cloud architecture blueprints, and PRDs are 100% your intellectual property. They are prepared to international industry standards so any engineering team or our dedicated squads can immediately begin execution.',
    },
    {
      q: 'Who participates in the discovery workshops from your side?',
      a: 'Your dedicated discovery squad includes a Principal Solution Architect, a Senior UX/UI Researcher, a Senior Technical Product Manager, and domain specialists (e.g., AI Engineers or FinTech Security Specialists as needed).',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
         1. HERO SECTION (Software Product Discovery Services)
         ======================================================== */}
      <section
        style={{
          position: 'relative',
          paddingTop: '120px',
          paddingBottom: '80px',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Hero Column */}
            <div>
              {/* Breadcrumb / Category Tag */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(34, 88, 231, 0.12)',
                  border: '1px solid rgba(34, 88, 231, 0.3)',
                  padding: '6px 14px',
                  borderRadius: '2px',
                  marginBottom: '24px',
                }}
              >
                <Sparkles size={14} color="#2258e7" />
                <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em' }}>
                  Product Engineering & Strategy
                </span>
              </div>

              {/* Display Headline */}
              <h1
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 62px)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#ffffff',
                }}
              >
                Software Product <br />
                <span style={{ color: '#2258e7' }}>Discovery</span> Services
              </h1>

              {/* Subheadline Text */}
              <p
                style={{
                  fontSize: 'clamp(16px, 1.2vw, 18px)',
                  lineHeight: 1.65,
                  color: '#a0aec0',
                  marginBottom: '36px',
                  maxWidth: '560px',
                }}
              >
                Transform your vision into a viable, market-ready digital product. We validate concepts, mitigate technical risks, and construct an investment-grade architectural foundation before writing code.
              </p>

              {/* Action Buttons */}
              <div className="btn-group-lg">
                <button
                  onClick={() => scrollToSection('contact-rfp')}
                  className="btn btn-primary btn-lg"
                >
                  <span>Book a consultation</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => scrollToSection('horizontal-showcase')}
                  className="btn btn-fair btn-lg"
                >
                  <span>Explore deliverables</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* Right Hero Graphic: High-tech concentric glowing rings visual */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  height: '420px',
                  borderRadius: '16px',
                  background: 'linear-gradient(145deg, #091a38 0%, #001334 100%)',
                  border: '1px solid rgba(34, 88, 231, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), inset 0 0 40px rgba(34, 88, 231, 0.2)',
                }}
              >
                {/* Concentric neon rings simulation matching screenshot */}
                <div
                  style={{
                    position: 'absolute',
                    width: '360px',
                    height: '360px',
                    borderRadius: '50%',
                    border: '2px solid rgba(34, 88, 231, 0.4)',
                    boxShadow: '0 0 25px rgba(34, 88, 231, 0.3)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    border: '2px solid rgba(34, 88, 231, 0.6)',
                    boxShadow: '0 0 35px rgba(34, 88, 231, 0.4)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    border: '2px solid rgba(64, 128, 255, 0.8)',
                    boxShadow: '0 0 45px rgba(64, 128, 255, 0.6)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(34, 88, 231, 0.25)',
                    border: '2px solid #ffffff',
                    boxShadow: '0 0 50px #2258e7',
                  }}
                />

                {/* Floating Metric Callout Card Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    backgroundColor: 'rgba(12, 14, 18, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '6px',
                        backgroundColor: '#2258e7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <ShieldCheck size={20} color="#ffffff" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                        98% Verified Feasibility
                      </h4>
                      <p style={{ fontSize: '12px', color: '#a0aec0', margin: '2px 0 0 0' }}>
                        De-risked architecture & validated market-fit on initial launch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
         2. WHY DO YOU NEED PRODUCT DISCOVERY SERVICES? (6 Cards Grid)
         ======================================================== */}
      <section
        style={{
          padding: '90px 0',
          backgroundColor: '#0f1117',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
            <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Strategic Value
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                marginTop: '8px',
                marginBottom: '16px',
                color: '#ffffff',
              }}
            >
              Why do you need product discovery services?
            </h2>
            <p style={{ color: '#8893a7', fontSize: '16px', lineHeight: 1.6 }}>
              Product discovery replaces costly guesswork with empirical user data, architecture validation, and clear milestone estimation before substantial development capital is committed.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                icon: ShieldCheck,
                title: 'Risk Mitigation',
                desc: 'Identify technical bottlenecks, regulatory hurdles, and market viability blockers prior to full software engineering investment.',
              },
              {
                icon: Zap,
                title: 'Faster Time-to-Market',
                desc: 'Eliminate bloat by scoping high-impact MVP features, reducing your development turnaround by up to 35%.',
              },
              {
                icon: DollarSign,
                title: 'Cost Optimization',
                desc: 'Prevent expensive architectural pivots and refactoring cycles by validating requirements and infrastructure early.',
              },
              {
                icon: Users,
                title: 'User-Centric Architecture',
                desc: 'Build products tailored to verified target user personas through structured UX wireframing and interactive prototype testing.',
              },
              {
                icon: Compass,
                title: 'Clear Technical Roadmap',
                desc: 'Receive comprehensive software architecture diagrams, tech stack choices, and realistic milestone budget projections.',
              },
              {
                icon: Layers,
                title: 'Stakeholder Alignment',
                desc: 'Unify founders, executives, and engineering squads around a single, documented, and investment-ready product vision.',
              },
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#141720',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '32px 28px',
                    borderRadius: '2px',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34, 88, 231, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'rgba(34, 88, 231, 0.12)',
                      border: '1px solid rgba(34, 88, 231, 0.3)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <IconComp size={22} color="#2258e7" />
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '12px',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ color: '#8893a7', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
         3. HOW PRODUCT DISCOVERY SERVICES HELP YOUR BUSINESS (4 Pillars)
         ======================================================== */}
      <section
        style={{
          padding: '90px 0',
          backgroundColor: '#0c0e12',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
            <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Business Impact
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                marginTop: '8px',
                color: '#ffffff',
              }}
            >
              How Product Discovery Services Help Your Business
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                num: '01',
                title: 'Concept Validation & Market Research',
                desc: 'Evaluate competitor landscapes, validate user demand, and test core value propositions before coding.',
              },
              {
                num: '02',
                title: 'Interactive UX Prototyping',
                desc: 'Transform abstract requirements into high-fidelity clickable mockups to gather real user feedback quickly.',
              },
              {
                num: '03',
                title: 'Architecture & Feasibility Analysis',
                desc: 'Design resilient cloud infrastructures and verify database performance, APIs, and compliance standards.',
              },
              {
                num: '04',
                title: 'Investment-Ready Deliverables',
                desc: 'Equip leadership and investors with a rigorous PRD, sprint roadmap, and accurate cost estimations.',
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                style={{
                  backgroundColor: '#12151d',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '36px 28px',
                  borderRadius: '2px',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: '#2258e7',
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  {pillar.num}
                </span>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ color: '#8893a7', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
         4. OUR SOFTWARE PRODUCT DISCOVERY PROCESS (Interactive Timeline)
         ======================================================== */}
      <section
        style={{
          padding: '90px 0',
          backgroundColor: '#0f1117',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Execution Framework
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                marginTop: '8px',
                color: '#ffffff',
              }}
            >
              Our Software Product Discovery Process
            </h2>
            <p style={{ color: '#8893a7', fontSize: '16px', lineHeight: 1.6 }}>
              A structured 4-week agile discovery framework designed to take you from initial concept to launch-ready blueprint.
            </p>
          </div>

          {/* Phase Selector Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            {discoveryPhases.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                style={{
                  padding: '16px 20px',
                  backgroundColor: activePhase === idx ? '#2258e7' : '#141720',
                  border: `1px solid ${activePhase === idx ? '#2258e7' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: '#ffffff',
                  textAlign: 'left',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {phase.timeline} · Phase {phase.number}
                </span>
                <span style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                  {phase.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Phase Details Card */}
          <div
            style={{
              backgroundColor: '#141720',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '36px clamp(20px, 4vw, 48px)',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '36px',
                alignItems: 'center',
              }}
            >
              <div>
                <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700 }}>
                  STAGE {discoveryPhases[activePhase].number} OVERVIEW
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '8px 0 16px 0', color: '#ffffff' }}>
                  {discoveryPhases[activePhase].title}
                </h3>
                <p style={{ color: '#a0aec0', fontSize: '15px', lineHeight: 1.65, marginBottom: '24px' }}>
                  {discoveryPhases[activePhase].description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2258e7', fontSize: '14px', fontWeight: 600 }}>
                  <Clock size={16} />
                  <span>Duration: {discoveryPhases[activePhase].timeline} of discovery</span>
                </div>
              </div>

              {/* Deliverables Checklist for Active Phase */}
              <div
                style={{
                  backgroundColor: '#0c0e12',
                  padding: '24px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#8893a7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
                  Phase Deliverables & Artifacts
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {discoveryPhases[activePhase].deliverables.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="#2258e7" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#ffffff', fontSize: '14px', lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
         5. CLIENT SUCCESS STORIES (Dark Navy Contrast Section)
         ======================================================== */}
      <section
        style={{
          padding: '90px 0',
          backgroundColor: '#001334',
          background: 'linear-gradient(180deg, #001334 0%, #081d45 100%)',
          borderBottom: '1px solid rgba(34, 88, 231, 0.2)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
            <span style={{ color: '#6390f7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Proven Results
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                marginTop: '8px',
                color: '#ffffff',
              }}
            >
              Client Success Stories
            </h2>
            <p style={{ color: '#a8bde6', fontSize: '16px', lineHeight: 1.6 }}>
              Real-world examples of how our discovery services accelerated product development, secured investor funding, and eliminated project failure risk.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                tag: 'HealthTech AI',
                title: 'Clinical AI Diagnostic Triage Platform',
                metric: '65% Faster MVP',
                submetric: '$3.2M Seed Raised',
                desc: 'Validated clinical workflows with 20+ physicians, designed HIPAA-compliant cloud pipeline, and built investor prototype in 4 weeks.',
              },
              {
                tag: 'FinTech',
                title: 'Cross-Border B2B Payment Engine',
                metric: '4 Weeks Discovery',
                submetric: '100K Pre-Launch Users',
                desc: 'Stress-tested microservices transaction throughput and KYC compliance, delivering an architecture that scaled effortlessly.',
              },
              {
                tag: 'Enterprise SaaS',
                title: 'Supply Chain Intelligence Suite',
                metric: '42% Onboarding Boost',
                submetric: 'Zero Tech Pivot',
                desc: 'Conducted user research across 15 enterprise supply chain operators, creating a streamlined dashboard UX and event-driven API topology.',
              },
            ].map((story, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0a1e45',
                  border: '1px solid rgba(99, 144, 247, 0.25)',
                  padding: '32px 28px',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#6390f7',
                      backgroundColor: 'rgba(99, 144, 247, 0.15)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                    }}
                  >
                    {story.tag}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: '16px 0 12px 0' }}>
                    {story.title}
                  </h3>
                  <p style={{ color: '#c4d4f2', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                    {story.desc}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', display: 'block' }}>
                      {story.metric}
                    </span>
                    <span style={{ fontSize: '12px', color: '#91b0eb' }}>{story.submetric}</span>
                  </div>
                  <ArrowUpRight size={18} color="#6390f7" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
         6. WHY CHOOSE OUR PRODUCT DISCOVERY SQUAD
         ======================================================== */}
      <section
        style={{
          padding: '90px 0',
          backgroundColor: '#0c0e12',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
            <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Why Neominds TechHub
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                marginTop: '8px',
                color: '#ffffff',
              }}
            >
              Why Choose Our Product Discovery Services?
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                icon: Award,
                title: 'Cross-Functional Senior Squads',
                desc: 'You work directly with principal solution architects, lead UX strategists, and domain specialists with 10+ years of proven SaaS delivery experience.',
              },
              {
                icon: Lock,
                title: 'Complete IP Ownership & Transparency',
                desc: 'All artifacts, source code, Figma design files, and documentation produced during discovery are 100% owned by your company.',
              },
              {
                icon: Cpu,
                title: 'Engineering-First Feasibility',
                desc: 'Unlike design-only agencies, our discoveries are grounded in real-world software architecture, cloud scale, and cybersecurity constraints.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#12151d',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '36px 30px',
                    borderRadius: '2px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      backgroundColor: 'rgba(34, 88, 231, 0.12)',
                      border: '1px solid rgba(34, 88, 231, 0.3)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={22} color="#2258e7" />
                  </div>
                  <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#8893a7', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
         7. READY TO START YOUR PRODUCT JOURNEY? (Lead Banner)
         ======================================================== */}
      <section
        style={{
          padding: '60px 0',
          backgroundColor: '#0c0e12',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              backgroundColor: '#0a1d3d',
              background: 'linear-gradient(135deg, #091a38 0%, #153a7a 100%)',
              border: '1px solid rgba(34, 88, 231, 0.4)',
              borderRadius: '6px',
              padding: '48px clamp(24px, 4vw, 56px)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            <div>
              <span style={{ color: '#6390f7', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Quick Consultation
              </span>
              <h3 style={{ fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 700, color: '#ffffff', margin: '8px 0 12px 0' }}>
                Ready to validate your product concept?
              </h3>
              <p style={{ color: '#c4d4f2', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Get a tailored discovery roadmap and architecture proposal from our principal engineers within 24 hours.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="Enter your work email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                required
                style={{
                  flex: '1 1 240px',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  padding: '14px 18px',
                  fontSize: '14px',
                  borderRadius: '2px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn btn-primary btn-md"
              >
                <span>Get Discovery Plan</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================
         8. TANGIBLE DISCOVERY DELIVERABLES (What You Receive)
         ======================================================== */}
      <section
        style={{
          padding: '90px 0',
          backgroundColor: '#0f1117',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
            <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Deliverables Package
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                marginTop: '8px',
                color: '#ffffff',
              }}
            >
              Tangible Discovery Deliverables
            </h2>
            <p style={{ color: '#8893a7', fontSize: '16px', lineHeight: 1.6 }}>
              At the conclusion of the discovery engagement, you receive a comprehensive package of production-ready documentation and design assets.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                icon: FileText,
                title: 'Product Requirements Document (PRD)',
                desc: 'Comprehensive functional requirements, business rules, persona definitions, user stories, and acceptance criteria.',
              },
              {
                icon: Layers,
                title: 'Clickable Figma Prototype',
                desc: 'High-fidelity interactive mockups and design token system ready for user testing and frontend implementation.',
              },
              {
                icon: Code,
                title: 'Software Architecture Document (SAD)',
                desc: 'Cloud topology blueprints, microservices structure, database schemas, third-party API specs, and security protocols.',
              },
              {
                icon: BarChart3,
                title: 'Accurate Cost & Timeline Estimation',
                desc: 'Granular work breakdown structure (WBS), sprint-by-sprint velocity projections, and fixed-budget engineering tiers.',
              },
              {
                icon: ShieldCheck,
                title: 'Compliance & Security Matrix',
                desc: 'Risk analysis, data privacy roadmap (GDPR, CCPA, HIPAA, SOC2), and automated vulnerability testing procedures.',
              },
              {
                icon: Compass,
                title: 'Go-To-Market Technical Strategy',
                desc: 'Analytics tracking plan, launch checklist, CI/CD pipeline automation setup, and phased MVP rollout strategy.',
              },
            ].map((del, idx) => {
              const Icon = del.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#141720',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '30px 24px',
                    borderRadius: '2px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        backgroundColor: 'rgba(34, 88, 231, 0.15)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} color="#2258e7" />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                      {del.title}
                    </h3>
                  </div>
                  <p style={{ color: '#8893a7', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    {del.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
         9. HORIZONTAL SCROLL SHOWCASE (The Middle Space Section)
         Interactive Horizontal Carousel with UI Mockups & Architecture Diagrams
         ======================================================== */}
      <section
        id="horizontal-showcase"
        style={{
          padding: '90px 0',
          backgroundColor: '#090a0e',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Section Header with Horizontal Scroll Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              marginBottom: '36px',
            }}
          >
            <div>
              <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Discovery Artifacts Showcase
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.2,
                  marginTop: '8px',
                  color: '#ffffff',
                }}
              >
                Sample Discovery Work & Blueprints
              </h2>
              <p style={{ color: '#8893a7', fontSize: '15px', marginTop: '6px' }}>
                Scroll horizontally to explore our interactive wireframes, cloud topologies, and prototype systems.
              </p>
            </div>

            {/* Carousel Arrow Controls & Progress Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Progress Indicator Bar */}
              <div
                style={{
                  width: '120px',
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${Math.max(15, scrollProgress)}%`,
                    backgroundColor: '#2258e7',
                    transition: 'width 0.15s ease-out',
                  }}
                />
              </div>

              {/* Prev Button */}
              <button
                onClick={() => scrollShowcase('left')}
                disabled={!canScrollLeft}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '2px',
                  backgroundColor: canScrollLeft ? '#1b1f2b' : '#12141a',
                  border: `1px solid ${canScrollLeft ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'}`,
                  color: canScrollLeft ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: canScrollLeft ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                }}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={() => scrollShowcase('right')}
                disabled={!canScrollRight}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '2px',
                  backgroundColor: canScrollRight ? '#2258e7' : '#12141a',
                  border: `1px solid ${canScrollRight ? '#2258e7' : 'rgba(255, 255, 255, 0.05)'}`,
                  color: canScrollRight ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: canScrollRight ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                }}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* ========================================================
             THE HORIZONTAL SCROLL CAROUSEL CONTAINER
             ======================================================== */}
          <div
            ref={horizontalScrollRef}
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '24px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: 'grab',
            }}
          >
            {showcaseItems.map((item) => (
              <div
                key={item.id}
                style={{
                  flex: '0 0 clamp(320px, 42vw, 480px)',
                  scrollSnapAlign: 'start',
                  backgroundColor: '#131620',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.25s, border-color 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 88, 231, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Visual Header / Mockup simulation */}
                <div
                  style={{
                    height: '240px',
                    backgroundColor: '#0a0d14',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                  }}
                >
                  {/* Mockup Renderer Based on visualType */}
                  {item.visualType === 'wireframe' && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#161a24',
                        borderRadius: '4px',
                        border: '1px solid #2258e7',
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
                        <div style={{ width: '40px', height: '6px', backgroundColor: '#2258e7', borderRadius: '2px' }} />
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <div style={{ width: '16px', height: '6px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
                          <div style={{ width: '16px', height: '6px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8px', flex: 1 }}>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '2px', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div style={{ width: '80%', height: '4px', backgroundColor: '#2258e7' }} />
                          <div style={{ width: '60%', height: '4px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                          <div style={{ width: '70%', height: '4px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                        </div>
                        <div style={{ backgroundColor: 'rgba(34,88,231,0.08)', border: '1px dashed #2258e7', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2258e7', fontSize: '11px', fontWeight: 600 }}>
                          [ Clickable Flow Prototype ]
                        </div>
                      </div>
                    </div>
                  )}

                  {item.visualType === 'dashboard' && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#0c1017',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: '#2258e7', fontWeight: 700 }}>LIVE ANALYTICS DASHBOARD</span>
                        <span style={{ fontSize: '10px', color: '#10b981', backgroundColor: 'rgba(16,185,129,0.15)', padding: '2px 6px', borderRadius: '2px' }}>● 99.98% Healthy</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                        <div style={{ backgroundColor: '#181e2b', padding: '6px', borderRadius: '2px' }}>
                          <div style={{ fontSize: '9px', color: '#8893a7' }}>ARR Run-Rate</div>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>$4.8M</div>
                        </div>
                        <div style={{ backgroundColor: '#181e2b', padding: '6px', borderRadius: '2px' }}>
                          <div style={{ fontSize: '9px', color: '#8893a7' }}>Active Users</div>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7' }}>148.2K</div>
                        </div>
                        <div style={{ backgroundColor: '#181e2b', padding: '6px', borderRadius: '2px' }}>
                          <div style={{ fontSize: '9px', color: '#8893a7' }}>Latency</div>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: '#10b981' }}>18ms</div>
                        </div>
                      </div>
                      <div style={{ flex: 1, backgroundColor: '#141a26', borderRadius: '2px', padding: '6px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                        {[30, 45, 60, 40, 75, 90, 85, 100].map((val, i) => (
                          <div key={i} style={{ flex: 1, height: `${val}%`, backgroundColor: i === 7 ? '#2258e7' : 'rgba(34,88,231,0.4)', borderRadius: '1px' }} />
                        ))}
                      </div>
                    </div>
                  )}

                  {item.visualType === 'architecture' && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#0c1017',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        padding: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ width: '36px', height: '36px', backgroundColor: '#1e293b', border: '1px solid #2258e7', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontSize: '12px' }}>🌐</div>
                        <span style={{ fontSize: '9px', color: '#a0aec0', marginTop: '4px', display: 'block' }}>API Gateway</span>
                      </div>
                      <span style={{ color: '#2258e7', fontSize: '16px' }}>⇄</span>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ width: '36px', height: '36px', backgroundColor: '#1e293b', border: '1px solid #10b981', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontSize: '12px' }}>⚡</div>
                        <span style={{ fontSize: '9px', color: '#a0aec0', marginTop: '4px', display: 'block' }}>Kafka Stream</span>
                      </div>
                      <span style={{ color: '#2258e7', fontSize: '16px' }}>⇄</span>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ width: '36px', height: '36px', backgroundColor: '#1e293b', border: '1px solid #f59e0b', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontSize: '12px' }}>💾</div>
                        <span style={{ fontSize: '9px', color: '#a0aec0', marginTop: '4px', display: 'block' }}>Postgres Cluster</span>
                      </div>
                    </div>
                  )}

                  {item.visualType === 'journey' && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#0c1017',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                      }}
                    >
                      <span style={{ fontSize: '10px', color: '#2258e7', fontWeight: 700 }}>USER JOURNEY STAGES</span>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', flex: 1 }}>
                        {['Awareness', 'Evaluation', 'Onboard', 'Conversion'].map((stage, i) => (
                          <div key={stage} style={{ backgroundColor: '#161b26', padding: '6px', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '8px', color: '#8893a7', textTransform: 'uppercase' }}>Step {i + 1}</span>
                            <span style={{ fontSize: '10px', color: '#ffffff', fontWeight: 600 }}>{stage}</span>
                            <span style={{ fontSize: '9px', color: i === 3 ? '#10b981' : '#2258e7' }}>{i === 3 ? '✓ 84% NPS' : 'Optimized'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.visualType === 'gantt' && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#0c1017',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontSize: '10px', color: '#2258e7', fontWeight: 700 }}>SPRINT EXECUTION TIMELINE</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '60px', fontSize: '9px', color: '#8893a7' }}>Sprint 1-2</span>
                          <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', height: '14px', borderRadius: '2px', position: 'relative' }}>
                            <div style={{ width: '45%', height: '100%', backgroundColor: '#2258e7', borderRadius: '2px', color: '#ffffff', fontSize: '8px', display: 'flex', alignItems: 'center', paddingLeft: '4px' }}>Core Engine</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '60px', fontSize: '9px', color: '#8893a7' }}>Sprint 3-4</span>
                          <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', height: '14px', borderRadius: '2px', position: 'relative' }}>
                            <div style={{ marginLeft: '40%', width: '45%', height: '100%', backgroundColor: '#10b981', borderRadius: '2px', color: '#ffffff', fontSize: '8px', display: 'flex', alignItems: 'center', paddingLeft: '4px' }}>Frontend UI</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '60px', fontSize: '9px', color: '#8893a7' }}>Sprint 5</span>
                          <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', height: '14px', borderRadius: '2px', position: 'relative' }}>
                            <div style={{ marginLeft: '80%', width: '20%', height: '100%', backgroundColor: '#f59e0b', borderRadius: '2px', color: '#ffffff', fontSize: '8px', display: 'flex', alignItems: 'center', paddingLeft: '4px' }}>Launch</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Badge in top right */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(0, 0, 0, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '3px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Content body of the carousel card */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {item.category}
                    </span>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: '8px 0 10px 0', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#8893a7', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#c4d4f2', fontWeight: 600 }}>{item.stats}</span>
                    <button
                      onClick={() => scrollToSection('contact-rfp')}
                      style={{
                        color: '#2258e7',
                        fontSize: '13px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span>Inquire</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
         10. TOOLS & TECHNOLOGIES WE LEVERAGE IN DISCOVERY
         ======================================================== */}
      <section
        style={{
          padding: '90px 0',
          backgroundColor: '#0c0e12',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
            <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Tech Ecosystem
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                marginTop: '8px',
                color: '#ffffff',
              }}
            >
              Tools & Technologies We Leverage
            </h2>
            <p style={{ color: '#8893a7', fontSize: '16px', lineHeight: 1.6 }}>
              We utilize industry-leading tooling to prototype rapidly, simulate system performance, and establish rock-solid architectures.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                category: 'UI/UX & Prototyping',
                tools: 'Figma, FigJam, Miro, ProtoPie, Whimsical',
                icon: Layers,
              },
              {
                category: 'Cloud & Infrastructure',
                tools: 'AWS, Google Cloud, Azure, Terraform, Docker',
                icon: Globe,
              },
              {
                category: 'Data & Architecture',
                tools: 'PostgreSQL, Redis, GraphQL, Kafka, Supabase',
                icon: Database,
              },
              {
                category: 'Analytics & Research',
                tools: 'Mixpanel, PostHog, Hotjar, Maze, Google Analytics',
                icon: BarChart3,
              },
              {
                category: 'AI & Intelligence',
                tools: 'OpenAI GPT-4, Anthropic Claude, LangChain, Pinecone',
                icon: Cpu,
              },
              {
                category: 'Project & Sprint Delivery',
                tools: 'Jira, Linear, GitHub Projects, Confluence, Notion',
                icon: Workflow,
              },
            ].map((stack, idx) => {
              const Icon = stack.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#141720',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '28px 24px',
                    borderRadius: '2px',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      backgroundColor: 'rgba(34, 88, 231, 0.15)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={18} color="#2258e7" />
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                    {stack.category}
                  </h3>
                  <p style={{ color: '#8893a7', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                    {stack.tools}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
         11. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
         ======================================================== */}
      <section
        style={{
          padding: '90px 0',
          backgroundColor: '#0f1117',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Got Questions?
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2,
                marginTop: '8px',
                color: '#ffffff',
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqItems.map((item, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#141720',
                    border: `1px solid ${isOpen ? 'rgba(34, 88, 231, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '4px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      textAlign: 'left',
                      color: '#ffffff',
                      fontSize: '16px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#2258e7" /> : <ChevronDown size={20} color="#8893a7" />}
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 24px 24px',
                        color: '#a0aec0',
                        fontSize: '15px',
                        lineHeight: 1.65,
                        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                        paddingTop: '16px',
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
         12. STILL HAVE QUESTIONS? (Banner with Avatar)
         ======================================================== */}
      <section
        style={{
          padding: '60px 0',
          backgroundColor: '#0c0e12',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              backgroundColor: '#091834',
              background: 'linear-gradient(135deg, #07152f 0%, #153a7a 100%)',
              border: '1px solid rgba(34, 88, 231, 0.35)',
              borderRadius: '6px',
              padding: '48px clamp(24px, 4vw, 56px)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                STILL HAVE QUESTIONS?
              </h3>
              <p style={{ color: '#c4d4f2', fontSize: '15px', marginTop: '8px', maxWidth: '480px' }}>
                Schedule a 30-minute introductory discovery session with our Principal Solutions Architect.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#2258e7',
                    border: '2px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}
                >
                  👨‍💻
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>Senior Strategy Team</div>
                  <div style={{ color: '#91b0eb', fontSize: '12px' }}>Available Today</div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact-rfp')}
                className="btn btn-primary btn-md"
              >
                <span>Schedule a call</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
         13. CONTACT & CONSULTATION FORM (Let's Connect Split Layout)
         ======================================================== */}
      <section
        id="contact-rfp"
        style={{
          padding: '100px 0',
          backgroundColor: '#0f1117',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '64px',
            }}
          >
            {/* Left Info Column */}
            <div>
              <span style={{ color: '#2258e7', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Start Your Project
              </span>
              <h2
                style={{
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.15,
                  margin: '12px 0 20px 0',
                  color: '#ffffff',
                }}
              >
                Let’s connect & scope your discovery
              </h2>
              <p style={{ color: '#a0aec0', fontSize: '16px', lineHeight: 1.65, marginBottom: '36px' }}>
                Fill out the form to request a consultation with our technical discovery squad. We respond within 24 hours with a tailored discovery proposal.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(34, 88, 231, 0.15)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={20} color="#2258e7" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', margin: 0 }}>Mutual NDA Guaranteed</h4>
                    <p style={{ fontSize: '13px', color: '#8893a7', margin: '2px 0 0 0' }}>Your idea & specifications are strictly confidential.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(34, 88, 231, 0.15)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={20} color="#2258e7" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', margin: 0 }}>Rapid 24-Hour Response</h4>
                    <p style={{ fontSize: '13px', color: '#8893a7', margin: '2px 0 0 0' }}>Direct communication with senior engineers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive RFP Form */}
            <div
              style={{
                backgroundColor: '#141720',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '36px clamp(20px, 3vw, 40px)',
                borderRadius: '4px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
            >
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: '#ffffff', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#0c0e12',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      padding: '12px 16px',
                      fontSize: '14px',
                      borderRadius: '2px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', color: '#ffffff', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#0c0e12',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        padding: '12px 16px',
                        fontSize: '14px',
                        borderRadius: '2px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#ffffff', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#0c0e12',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        padding: '12px 16px',
                        fontSize: '14px',
                        borderRadius: '2px',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#ffffff', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Health Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#0c0e12',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      padding: '12px 16px',
                      fontSize: '14px',
                      borderRadius: '2px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#ffffff', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Project Overview & Discovery Scope
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your product concept, target audience, and expected timelines..."
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#0c0e12',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      padding: '12px 16px',
                      fontSize: '14px',
                      borderRadius: '2px',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    id="discovery-nda"
                    checked={formData.ndaRequired}
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    style={{ width: '16px', height: '16px', accentColor: '#2258e7' }}
                  />
                  <label htmlFor="discovery-nda" style={{ fontSize: '13px', color: '#8893a7' }}>
                    Please send a mutual Non-Disclosure Agreement (NDA) prior to our call
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-md"
                  style={{
                    width: '100%',
                    marginTop: '8px',
                  }}
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Message'}</span>
                  <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
         14. GLOBAL LOCATIONS STRIP
         ======================================================== */}
      <section
        style={{
          padding: '40px 0',
          backgroundColor: '#0a0d14',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: '#8893a7', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Global Engineering Hubs:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', color: '#ffffff', fontSize: '14px', fontWeight: 500 }}>
              <span>🇺🇸 San Francisco, CA</span>
              <span>🇬🇧 London, UK</span>
              <span>🇩🇪 Frankfurt, DE</span>
              <span>🇵🇱 Warsaw, PL</span>
              <span>🇸🇬 Singapore</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
         15. FOOTER SECTION
         ======================================================== */}
      <footer
        style={{
          backgroundColor: '#07080b',
          padding: '64px 0 32px 0',
          color: '#ffffff',
        }}
      >
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              marginBottom: '48px',
            }}
          >
            {/* Brand Column */}
            <div>
              <div
                onClick={onNavigateHome}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px', width: '20px' }}>
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%' }} />
                </div>
                <span style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  Neominds TechHub
                </span>
              </div>
              <p style={{ color: '#8893a7', fontSize: '13px', lineHeight: 1.6 }}>
                Engineering robust, scalable software solutions with enterprise-grade precision.
              </p>
            </div>

            {/* Column: Services */}
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#8893a7' }}>
                <li style={{ color: '#2258e7', fontWeight: 600 }}>Product Discovery (Active)</li>
                <li>Product Engineering</li>
                <li>Cloud Solutions</li>
                <li>AI & Machine Learning</li>
                <li>Data Engineering</li>
              </ul>
            </div>

            {/* Column: Industries */}
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Industries</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#8893a7' }}>
                <li>FinTech & Trading</li>
                <li>Healthcare & RCM</li>
                <li>Enterprise Logistics</li>
                <li>Biotechnology</li>
                <li>Cybersecurity</li>
              </ul>
            </div>

            {/* Column: Company */}
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Company</h4>
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
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              fontSize: '13px',
              color: '#666e85',
            }}
          >
            <span>© {new Date().getFullYear()} Neominds TechHub. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span onClick={onOpenPrivacy} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>
                Privacy Policy
              </span>
              <span onClick={onOpenPrivacy} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>
                Terms of Service
              </span>
              <span onClick={onOpenPrivacy} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>
                Security Architecture
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDiscoveryPage;
