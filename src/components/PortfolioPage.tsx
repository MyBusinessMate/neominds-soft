import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Search,
  X,
  Sparkles,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { Footer } from './Footer';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { PORTFOLIO_CASE_STUDIES } from '../data/portfolioData';
import { UNIFIED_CASE_STUDIES } from '../data/unifiedCaseStudiesData';
import { getCmsCaseStudy, useCmsOverlay } from '../lib/cms/overlay';
import { getTechIconPath } from '../utils/techIcons';

interface PortfolioPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string, articleId?: string) => void;
  onSuccessToast?: (msg: string) => void;
}

type CategoryFilter = 'ALL' | 'AI' | 'HEALTHCARE' | 'FINTECH' | 'ENTERPRISE';

const CATEGORY_MAP: Record<string, CategoryFilter> = {
  // AI & Analytics
  'flooring-inc-dashboard': 'AI',
  'dotcomweavers-project-buddy': 'AI',
  'the1am-content-creator': 'AI',
  'fundbot-sql-chatbot': 'AI',
  'fero-invoice-automation': 'AI',
  'metacognition-qa-automation': 'AI',
  'nda-ai-tracking': 'AI',
  'laptomart-ai-crm': 'AI',
  'nda-ai-agents-model': 'AI',
  'flexport-burn-reports': 'AI',

  // Healthcare & EdTech
  'mindspace-mobile-app': 'HEALTHCARE',
  'mindspace-dashboard': 'HEALTHCARE',
  'edutech-co-teacher': 'HEALTHCARE',
  'ayyo-mobile-app': 'HEALTHCARE',
  'edutech-facial-attendance': 'HEALTHCARE',
  'montessori-os': 'HEALTHCARE',
  'aigooru-fee-manager': 'HEALTHCARE',
  'bytexl-lms': 'HEALTHCARE',

  // FinTech & Logistics
  'nda-fintech-legacy': 'FINTECH',
  'tecnomart-billing': 'FINTECH',
  'keocapital-hr-screening': 'FINTECH',
  'keocapital-hr-joining': 'FINTECH',
  'flavourbombs-security-scan': 'FINTECH',
  'flyover-lead-capture': 'FINTECH',

  // Enterprise & Cloud
  'mybusinessmate-web': 'ENTERPRISE',
  'mybusinessmate-app': 'ENTERPRISE',
  'expiro-app': 'ENTERPRISE',
  'nda-healthcare-hms': 'ENTERPRISE',
  'interzoon-cloud-system': 'ENTERPRISE',
  'nda-realestate-mgmt': 'ENTERPRISE',
};

// Domain-accurate cover images for each case study
const CASE_STUDY_IMAGES: Record<string, string> = {
  // AI & Analytics
  'flooring-inc-dashboard': '/uploads/ESThumbnails/101582/1280.Data-warehouse-development.png',
  'dotcomweavers-project-buddy': '/uploads/ESThumbnails/134677/1280.AI-in-SDLC.jpg',
  'the1am-content-creator': '/uploads/ESThumbnails/136028/1280.ai-product-development.jpg',
  'fundbot-sql-chatbot': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
  'fero-invoice-automation': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
  'metacognition-qa-automation': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop',
  'nda-ai-tracking': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
  'laptomart-ai-crm': 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=900&auto=format&fit=crop',
  'nda-ai-agents-model': '/uploads/ESThumbnails/139066/1280.ai-projects-fail-in-enterprises.jpg',
  'flexport-burn-reports': 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=900&auto=format&fit=crop',

  // Healthcare & EdTech
  'mindspace-mobile-app': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop',
  'mindspace-dashboard': '/uploads/ESThumbnails/101578/1280.healthcare-revenue-cycle-management-software.png',
  'edutech-co-teacher': '/uploads/ESThumbnails/136853/1280.ai-use-cases-in-education.jpg',
  'ayyo-mobile-app': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=900&auto=format&fit=crop',
  'edutech-facial-attendance': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=900&auto=format&fit=crop',
  'montessori-os': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop',
  'aigooru-fee-manager': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=900&auto=format&fit=crop',
  'bytexl-lms': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',

  // FinTech & Logistics
  'nda-fintech-legacy': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=900&auto=format&fit=crop',
  'tecnomart-billing': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop',
  'keocapital-hr-screening': '/uploads/ESThumbnails/133156/1280.artificial-intelligence-in-human-resources.jpg',
  'keocapital-hr-joining': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop',
  'flavourbombs-security-scan': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop',
  'flyover-lead-capture': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',

  // Enterprise & Cloud
  'mybusinessmate-web': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop',
  'mybusinessmate-app': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop',
  'expiro-app': 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=900&auto=format&fit=crop',
  'nda-healthcare-hms': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
  'interzoon-cloud-system': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop',
  'nda-realestate-mgmt': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
};

// Verified Client Logo / Monogram Resolver
const getClientIdentity = (csId: string, clientName: string) => {
  switch (csId) {
    case 'mindspace-mobile-app':
    case 'mindspace-dashboard':
      return { type: 'img', src: '/images/company-logos/mindspace-ai.png', alt: 'Mindspace.ai' };
    case 'dotcomweavers-project-buddy':
      return { type: 'img', src: '/images/company-logos/dotcomweavers.png', alt: 'DotcomWeavers' };
    case 'edutech-co-teacher':
    case 'edutech-facial-attendance':
      return { type: 'img', src: '/images/company-logos/edutech-logo.png', alt: 'EduTech' };
    case 'mybusinessmate-web':
    case 'mybusinessmate-app':
      return { type: 'img', src: '/images/company-logos/mybusinessmate.svg', alt: 'MyBusinessMate' };
    case 'expiro-app':
      return { type: 'img', src: '/images/company-logos/expiroo-logo.webp', alt: 'Expiro' };
    case 'the1am-content-creator':
      return { type: 'img', src: '/images/company-logos/The1AM.png', alt: 'The 1AM' };
    case 'aigooru-fee-manager':
      return { type: 'img', src: '/images/company-logos/AiGuroo.svg', alt: 'AiGuroo' };
    case 'fundbot-sql-chatbot':
      return { type: 'img', src: '/images/company-logos/fundbot.png?v=2', alt: 'Fundbot' };
    case 'fero-invoice-automation':
      return { type: 'img', src: '/images/company-logos/fero.svg?v=2', alt: 'Fero Logistics' };
    case 'flexport-burn-reports':
      return { type: 'img', src: '/images/company-logos/flexport-light.svg?v=2', alt: 'Flexport' };
    case 'keocapital-hr-screening':
    case 'keocapital-hr-joining':
      return { type: 'img', src: '/images/company-logos/KEO-CAPITAl.png', alt: 'KEO Capital' };
    case 'metacognition-qa-automation':
      return { type: 'img', src: '/images/company-logos/metacognition.svg', alt: 'Metacognition' };
    case 'bytexl-lms':
      return { type: 'img', src: '/images/company-logos/bytexl.webp', alt: 'ByteXL' };
    case 'flavourbombs-security-scan':
      return { type: 'img', src: '/images/company-logos/flavor_bomb.avif', alt: 'Flavor Bombs' };
    case 'flyover-lead-capture':
      return { type: 'img', src: '/images/company-logos/logo-flyover-res.png', alt: 'Flyover' };
    case 'tecnomart-billing':
      return { type: 'img', src: '/images/company-logos/tecnomart.png', alt: 'Tecnomart' };
    case 'laptomart-ai-crm':
      return { type: 'img', src: '/images/company-logos/laptomart.png', alt: 'LaptoMart' };
    case 'interzoon-cloud-system':
      return { type: 'img', src: '/images/company-logos/interzoon-logo.png', alt: 'Interzoon' };
    case 'flooring-inc-dashboard':
      return { type: 'badge', label: 'Flooring.inc', sub: 'E-Commerce' };
    case 'ayyo-mobile-app':
      return { type: 'badge', label: 'Ayyo', sub: 'Media App' };
    case 'montessori-os':
      return { type: 'badge', label: 'Montessori', sub: 'EdTech' };
    default:
      return { type: 'nda', label: clientName || 'Enterprise Client', sub: 'Confidential' };
  }
};

const CATEGORIES: { id: CategoryFilter; label: string; count: number }[] = [
  { id: 'ALL', label: 'All Studies', count: 30 },
  { id: 'AI', label: 'AI & Analytics', count: 10 },
  { id: 'HEALTHCARE', label: 'Healthcare & EdTech', count: 8 },
  { id: 'FINTECH', label: 'FinTech & Logistics', count: 6 },
  { id: 'ENTERPRISE', label: 'Enterprise & Cloud', count: 6 },
];

const EXECUTION_STANDARDS = [
  {
    num: '01',
    title: 'Architecture & Discovery',
    desc: 'Deep technical audits, database schema modeling, and failure-domain mapping before writing a line of code.',
    icon: <Layers size={20} color="#fe6200" />,
  },
  {
    num: '02',
    title: '2-Week Staging Demos',
    desc: 'Transparent Git pull requests, verifiable staging releases, and weekly sprint demos directly with senior engineers.',
    icon: <Zap size={20} color="#fe6200" />,
  },
  {
    num: '03',
    title: 'Automated QA & Gates',
    desc: 'Zero-regression test suites, static analysis, load simulation, and SOC2/HIPAA compliance validation.',
    icon: <ShieldCheck size={20} color="#fe6200" />,
  },
  {
    num: '04',
    title: '100% IP & Code Handover',
    desc: 'Every repository, migration script, and CI/CD workflow belongs entirely to you. No proprietary lock-in.',
    icon: <Cpu size={20} color="#fe6200" />,
  },
];

// Top Flagship Projects to Spotlight
const FLAGSHIP_IDS = ['interzoon-cloud-system', 'fundbot-sql-chatbot'];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigatePage,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  useCmsOverlay(); // re-render once published CMS case studies load

  // Filtered case studies
  const filteredCases = useMemo(() => {
    return PORTFOLIO_CASE_STUDIES.filter((cs) => {
      const mapped = CATEGORY_MAP[cs.id];
      const matchesCategory = activeCategory === 'ALL' || mapped === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const unified = getCmsCaseStudy(cs.id) || UNIFIED_CASE_STUDIES[cs.id];

      return (
        cs.title.toLowerCase().includes(q) ||
        cs.client.toLowerCase().includes(q) ||
        cs.description.toLowerCase().includes(q) ||
        cs.tags.some((t) => t.toLowerCase().includes(q)) ||
        (unified?.overview?.technologyStack?.toLowerCase().includes(q) ?? false) ||
        (unified?.overview?.industry?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [activeCategory, searchQuery]);

  // Flagships for spotlight section
  const flagships = useMemo(() => {
    return FLAGSHIP_IDS.map((id) =>
      PORTFOLIO_CASE_STUDIES.find((cs) => cs.id === id)
    ).filter(Boolean);
  }, []);

  const handleDiscussClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigatePage('contacts');
    }
  };

  const handleCatalogScroll = () => {
    const el = document.getElementById('case-studies-catalog');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
        color: '#111111',
        minHeight: '100vh',
        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
      }}
    >
      <style>{`
        .cs-card {
          background-color: #ffffff;
          border: 1px solid #e8e4dc;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        .cs-card:hover {
          transform: translateY(-5px);
          border-color: #fe6200;
          box-shadow: 0 20px 40px rgba(254, 98, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.04);
        }
        .cs-card:hover .cs-card-img {
          transform: scale(1.06);
        }
        .cs-card:hover .cs-card-title {
          color: #fe6200;
        }
        .cs-card:hover .cs-card-arrow {
          transform: translateX(4px);
        }
        .cs-card:hover .cs-card-btn-pill {
          background-color: #fe6200 !important;
          color: #ffffff !important;
          border-color: #fe6200 !important;
        }

        .cs-flagship-card {
          background-color: #ffffff;
          border: 1px solid #e8e4dc;
          border-radius: 18px;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(320px, 1.25fr);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          cursor: pointer;
          position: relative;
        }
        .cs-flagship-card:hover {
          transform: translateY(-4px);
          border-color: #fe6200;
          box-shadow: 0 24px 48px rgba(254, 98, 0, 0.14), 0 6px 18px rgba(0, 0, 0, 0.04);
        }
        .cs-flagship-card:hover .cs-card-img {
          transform: scale(1.05);
        }
        .cs-flagship-card:hover .cs-card-title {
          color: #fe6200;
        }
        .cs-flagship-card:hover .cs-card-arrow {
          transform: translateX(4px);
        }
        .cs-flagship-card:hover .cs-card-btn-pill {
          background-color: #fe6200 !important;
          color: #ffffff !important;
          border-color: #fe6200 !important;
        }

        .cs-filter-btn {
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

        @media (max-width: 960px) {
          .cs-flagship-card {
            grid-template-columns: 1fr !important;
          }
          .cs-flagship-img-col {
            height: 240px !important;
          }
        }

        @media (max-width: 640px) {
          .cs-catalog-grid {
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
          {/* Eyebrow Pill */}
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
              Verified Deployments · 30+ Production Systems Shipped
            </span>
          </div>

          {/* Main Title */}
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
            Software We’ve Shipped — Proven in Production.
          </ScrollReveal>

          {/* Subtitle / Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.25vw, 18.5px)',
              lineHeight: 1.65,
              color: '#555555',
              maxWidth: '780px',
              margin: '0 0 36px 0',
            }}
          >
            We partner with high-velocity startups and global enterprises to design, architect, and scale mission-critical platforms. From natural language SQL engines and multi-agent AI swarms to HIPAA-compliant clinical systems, explore our verified engineering engagements.
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
              onClick={handleDiscussClick}
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
              onClick={handleCatalogScroll}
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
              Explore All 30 Case Studies
            </button>
          </div>

          {/* Engineering Track Record Bar */}
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
              { stat: '30+', label: 'Production Systems Shipped', sub: 'Across 7 Core Sectors' },
              { stat: '99.99%', label: 'Average Architecture SLA', sub: 'Zero-Downtime Releases' },
              { stat: '14M+', label: 'Transactions & Records Processed', sub: 'With Sub-Millisecond Latency' },
              { stat: '100%', label: 'IP & Source Code Handover', sub: 'Full Client Ownership' },
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
          2. FEATURED ENTERPRISE SPOTLIGHT (Flagship Engagements with Media)
          ======================================================== */}
      {activeCategory === 'ALL' && !searchQuery.trim() && flagships.length > 0 && (
        <section
          style={{
            padding: '56px 24px 20px',
            backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
          }}
        >
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '26px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#fe6200',
                    fontFamily: 'monospace',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Sparkles size={13} color="#fe6200" />
                  Flagship Engagements
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(24px, 2.8vw, 32px)',
                    fontWeight: 800,
                    color: '#000000',
                    margin: 0,
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  }}
                >
                  Featured Mission-Critical Deployments
                </h2>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '28px',
              }}
            >
              {flagships.map((cs) => {
                if (!cs) return null;
                const coverImg = CASE_STUDY_IMAGES[cs.id];
                const identity = getClientIdentity(cs.id, cs.client);
                const unified = getCmsCaseStudy(cs.id) || UNIFIED_CASE_STUDIES[cs.id];
                const timeline = unified?.overview?.projectDuration || '4 Months';
                const capabilities =
                  unified?.keyFeatures && unified.keyFeatures.length >= 3
                    ? unified.keyFeatures.slice(0, 3)
                    : [
                        `High-availability ${cs.service} architecture`,
                        `Sub-millisecond query response`,
                        `100% full source IP handover`,
                      ];

                return (
                  <RevealElement key={cs.id} variant="card">
                    <div
                      className="cs-flagship-card"
                      onClick={() => onNavigatePage('project', cs.id)}
                    >
                      {/* Left Column: Visual Media & Logo Header */}
                      <div
                        className="cs-flagship-img-col"
                        style={{
                          position: 'relative',
                          minHeight: '320px',
                          overflow: 'hidden',
                          backgroundColor: '#1a1816',
                        }}
                      >
                        <img
                          src={coverImg || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop'}
                          alt={cs.title}
                          className="cs-card-img"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 100%)',
                          }}
                        />

                        {/* Floating Top Badges */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              color: '#ffffff',
                              backgroundColor: '#fe6200',
                              padding: '4px 10px',
                              borderRadius: '9999px',
                              fontFamily: 'monospace',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            }}
                          >
                            FLAGSHIP
                          </span>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              color: '#ffffff',
                              backgroundColor: 'rgba(0, 0, 0, 0.6)',
                              backdropFilter: 'blur(8px)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              padding: '4px 10px',
                              borderRadius: '9999px',
                            }}
                          >
                            {cs.category}
                          </span>
                        </div>

                        {/* Bottom Clean Client Logo Stage */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '20px',
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: '#ffffff',
                              padding: '8px 18px',
                              borderRadius: '10px',
                              border: '1px solid #e8e4dc',
                              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.18)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minHeight: '44px',
                            }}
                          >
                            {identity.type === 'img' && identity.src ? (
                              <img
                                src={identity.src}
                                alt={identity.alt}
                                style={{
                                  maxHeight: '30px',
                                  maxWidth: '120px',
                                  objectFit: 'contain',
                                }}
                              />
                            ) : (
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <ShieldCheck size={16} color="#fe6200" />
                                <span style={{ fontSize: '12px', fontWeight: 800, color: '#111111', letterSpacing: '0.04em' }}>
                                  {identity.label}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Detailed Narrative & Metrics */}
                      <div
                        style={{
                          padding: 'clamp(24px, 3vw, 36px)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <div>
                          {/* Metric Pill Callout */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '12px',
                              padding: '10px 14px',
                              backgroundColor: '#faf8f5',
                              border: '1px solid #e8e4dc',
                              borderRadius: '8px',
                              marginBottom: '16px',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <TrendingUp size={16} color="#fe6200" />
                              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#000000' }}>
                                {cs.metric}
                              </span>
                            </div>
                            <span style={{ fontSize: '12px', color: '#66615c', fontWeight: 600 }}>
                              {cs.metricLabel}
                            </span>
                          </div>

                          {/* Title */}
                          <h3
                            className="cs-card-title"
                            style={{
                              fontSize: 'clamp(20px, 1.8vw, 24px)',
                              fontWeight: 800,
                              color: '#000000',
                              lineHeight: 1.3,
                              marginBottom: '12px',
                              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                              transition: 'color 0.2s ease',
                            }}
                          >
                            {cs.title}
                          </h3>

                          {/* Description */}
                          <p
                            style={{
                              fontSize: '14px',
                              lineHeight: 1.6,
                              color: '#555555',
                              marginBottom: '18px',
                            }}
                          >
                            {cs.description}
                          </p>

                          {/* Key Capabilities */}
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                              marginBottom: '20px',
                            }}
                          >
                            {capabilities.map((cap, i) => (
                              <div
                                key={i}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '8px',
                                  fontSize: '13px',
                                  color: '#333333',
                                  lineHeight: 1.45,
                                }}
                              >
                                <CheckCircle
                                  size={15}
                                  color="#fe6200"
                                  style={{ flexShrink: 0, marginTop: '2px' }}
                                />
                                <span>{cap.replace(/^[•\-\*]\s*/, '').slice(0, 95)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          {/* Tech stack badges */}
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '6px',
                              marginBottom: '20px',
                            }}
                          >
                            {cs.tags.slice(0, 5).map((tag) => {
                              const icon = getTechIconPath(tag);
                              return (
                                <span
                                  key={tag}
                                  style={{
                                    fontSize: '11.5px',
                                    color: '#1a1a1a',
                                    backgroundColor: '#f5f3ee',
                                    border: '1px solid rgba(0, 0, 0, 0.06)',
                                    padding: '3px 9px',
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
                                      style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                                    />
                                  )}
                                  <span>{tag}</span>
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
                              paddingTop: '16px',
                              borderTop: '1px solid #f0ede6',
                            }}
                          >
                            <span style={{ fontSize: '12px', color: '#66615c', display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <Clock size={13} />
                              {timeline.split('(')[0].trim()}
                            </span>

                            <span
                              className="cs-card-btn-pill"
                              style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                color: '#fe6200',
                                backgroundColor: 'rgba(254, 98, 0, 0.08)',
                                border: '1px solid rgba(254, 98, 0, 0.2)',
                                padding: '6px 16px',
                                borderRadius: '9999px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              <span>Explore Case Study</span>
                              <ArrowRight size={13} className="cs-card-arrow" style={{ transition: 'transform 0.2s ease' }} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealElement>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          3. CASE STUDIES CATALOG (Clean Logo Stage, Media Cover & Elevated Typography)
          ======================================================== */}
      <section
        id="case-studies-catalog"
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
                Production Portfolio
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
                  ? 'All Engineering Case Studies'
                  : `${CATEGORIES.find((c) => c.id === activeCategory)?.label} Case Studies`}
              </h2>
              <p style={{ fontSize: '14.5px', color: '#66615c', margin: 0 }}>
                Showing <strong>{filteredCases.length}</strong> of 30 verified engineering engagements.
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
                placeholder="Search by client, industry, or tech..."
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
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="cs-filter-btn"
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
          {filteredCases.length === 0 && (
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
                No Matching Case Studies Found
              </h3>
              <p style={{ fontSize: '14px', color: '#66615c', marginBottom: '22px' }}>
                We couldn’t find any case studies matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
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

          {/* Elevated Visual Cards Grid */}
          {filteredCases.length > 0 && (
            <div
              className="cs-catalog-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                gap: '26px',
              }}
            >
              {filteredCases.map((cs, idx) => {
                const coverImg = CASE_STUDY_IMAGES[cs.id];
                const identity = getClientIdentity(cs.id, cs.client);
                const unified = getCmsCaseStudy(cs.id) || UNIFIED_CASE_STUDIES[cs.id];
                const timeline = unified?.overview?.projectDuration || '3–4 Months';
                const capabilities =
                  unified?.keyFeatures && unified.keyFeatures.length >= 2
                    ? unified.keyFeatures.slice(0, 2)
                    : [
                        `Production-grade ${cs.service} system`,
                        `100% full source IP handover`,
                      ];

                const formattedNum = String(idx + 1).padStart(2, '0');

                return (
                  <RevealElement key={cs.id} variant="card" delay={(idx % 3) * 0.05}>
                    <div
                      className="cs-card"
                      onClick={() => onNavigatePage('project', cs.id)}
                    >
                      {/* 1. Pristine Client Logo & Category Header */}
                      <div
                        style={{
                          padding: '16px 20px',
                          backgroundColor: '#ffffff',
                          borderBottom: '1px solid #f0ede6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          minHeight: '62px',
                        }}
                      >
                        {/* Client Logo Slot */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            style={{
                              width: '26px',
                              height: '26px',
                              borderRadius: '6px',
                              backgroundColor: '#f5f3ee',
                              border: '1px solid rgba(0,0,0,0.06)',
                              color: '#66615c',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '11px',
                              fontWeight: 800,
                              fontFamily: 'monospace',
                            }}
                          >
                            {formattedNum}
                          </span>

                          {identity.type === 'img' && identity.src ? (
                            <img
                              src={identity.src}
                              alt={identity.alt}
                              style={{
                                maxHeight: '28px',
                                maxWidth: '125px',
                                objectFit: 'contain',
                              }}
                            />
                          ) : identity.type === 'badge' ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span
                                style={{
                                  fontSize: '13px',
                                  fontWeight: 800,
                                  color: '#000000',
                                  letterSpacing: '-0.01em',
                                }}
                              >
                                {identity.label}
                              </span>
                              <span
                                style={{
                                  fontSize: '10px',
                                  color: '#888480',
                                  backgroundColor: '#f5f3ee',
                                  padding: '1px 6px',
                                  borderRadius: '4px',
                                  fontWeight: 600,
                                }}
                              >
                                {identity.sub}
                              </span>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <ShieldCheck size={14} color="#fe6200" />
                              <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#111111', letterSpacing: '0.04em' }}>
                                {identity.label}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Category Tag */}
                        <span
                          style={{
                            fontSize: '10.5px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: '#55514c',
                            backgroundColor: '#f5f3ee',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                          }}
                        >
                          {cs.category}
                        </span>
                      </div>

                      {/* 2. Visual Media Section with Overlaid Standout Metric */}
                      <div
                        style={{
                          position: 'relative',
                          height: '175px',
                          overflow: 'hidden',
                          backgroundColor: '#1a1816',
                        }}
                      >
                        <img
                          src={coverImg || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'}
                          alt={cs.title}
                          className="cs-card-img"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
                          }}
                        />

                        {/* Floating Metric Pill on the Cover Image */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '12px',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            padding: '6px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                          }}
                        >
                          <TrendingUp size={13} color="#fe6200" />
                          <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>
                            {cs.metric}
                          </span>
                        </div>
                      </div>

                      {/* 3. Bottom Content Area */}
                      <div
                        style={{
                          padding: '22px 24px',
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                          justifyContent: 'space-between',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <div>
                          {/* Context sub-row */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: '8px',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 800,
                                color: '#fe6200',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                              }}
                            >
                              {cs.service}
                            </span>
                            <span style={{ fontSize: '11.5px', color: '#66615c', fontWeight: 600 }}>
                              {cs.metricLabel}
                            </span>
                          </div>

                          {/* Title */}
                          <h3
                            className="cs-card-title"
                            style={{
                              fontSize: '18px',
                              fontWeight: 700,
                              color: '#000000',
                              lineHeight: 1.35,
                              marginBottom: '10px',
                              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                              transition: 'color 0.2s ease',
                            }}
                          >
                            {cs.title}
                          </h3>

                          {/* Description */}
                          <p
                            style={{
                              fontSize: '13.5px',
                              lineHeight: 1.6,
                              color: '#444444',
                              marginBottom: '16px',
                            }}
                          >
                            {cs.description}
                          </p>

                          {/* Key Capabilities Checklist */}
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '6px',
                              marginBottom: '18px',
                            }}
                          >
                            {capabilities.map((cap, i) => (
                              <div
                                key={i}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '7px',
                                  fontSize: '12.5px',
                                  color: '#333333',
                                  lineHeight: 1.45,
                                }}
                              >
                                <CheckCircle
                                  size={13}
                                  color="#fe6200"
                                  style={{ flexShrink: 0, marginTop: '2px' }}
                                />
                                <span>{cap.replace(/^[•\-\*]\s*/, '').slice(0, 85)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          {/* Tech Stack Tags with SVGs */}
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '6px',
                              marginBottom: '16px',
                            }}
                          >
                            {cs.tags.slice(0, 4).map((tag) => {
                              const icon = getTechIconPath(tag);
                              return (
                                <span
                                  key={tag}
                                  style={{
                                    fontSize: '11px',
                                    color: '#1a1a1a',
                                    backgroundColor: '#f5f3ee',
                                    border: '1px solid rgba(0, 0, 0, 0.06)',
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
                                  <span>{tag}</span>
                                </span>
                              );
                            })}
                          </div>

                          {/* Bottom Action Row */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              paddingTop: '12px',
                              borderTop: '1px solid #f0ede6',
                            }}
                          >
                            <span style={{ fontSize: '12px', color: '#66615c', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Clock size={12} />
                              {timeline.split('(')[0].trim()}
                            </span>

                            <span
                              className="cs-card-btn-pill"
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
                              <span>Read Case Study</span>
                              <ArrowRight size={12} className="cs-card-arrow" style={{ transition: 'transform 0.2s ease' }} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealElement>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          4. OUR PRODUCTION STANDARDS (Engineering Rigor)
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
              Engineering Rigor
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
              How We Deliver Mission-Critical Systems
            </h2>
            <p style={{ fontSize: '15.5px', color: '#555555', lineHeight: 1.6, margin: 0 }}>
              Every client project follows strict engineering gates: discovery schema modeling, bi-weekly staging releases, automated regression verification, and full code handover without proprietary lock-in.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '22px',
            }}
          >
            {EXECUTION_STANDARDS.map((std, idx) => (
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
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '14px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: 800,
                          color: '#fe6200',
                          fontFamily: 'monospace',
                        }}
                      >
                        {std.num}
                      </span>
                      {std.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#000000',
                        margin: '0 0 10px 0',
                      }}
                    >
                      {std.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                      {std.desc}
                    </p>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CTA BANNER (Project Discussion Anchor)
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
              Have a Mission-Critical System to Build?
            </h3>
            <p style={{ fontSize: '15px', color: '#cccccc', margin: 0, lineHeight: 1.6 }}>
              Speak directly with our senior system architects. We review your technical requirements, estimate sprint milestones, and provide a transparent delivery plan.
            </p>
          </div>

          <button
            onClick={handleDiscussClick}
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
      <Footer onNavigate={(target) => onNavigatePage(target.replace('#', ''))} />
    </div>
  );
};
