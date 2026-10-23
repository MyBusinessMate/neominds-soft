import React from 'react';
import {
  Code2,
  Cpu,
  Smartphone,
  Globe,
  ShoppingCart,
  Cloud,
  Bot,
  Zap,
  MessageSquare,
  BarChart3,
  LifeBuoy,
  CreditCard,
  Landmark,
  TrendingUp,
  LineChart,
  ShieldAlert,
  Activity,
  Video,
  HeartHandshake,
  Stethoscope,
  Workflow,
  Layers,
  FileCheck,
} from 'lucide-react';
import { UniversalServiceData } from '../../types/service';
import { ServiceProblemAudience } from './ServiceProblemAudience';
import { ServiceTimelineWhy } from './ServiceTimelineWhy';
import { ServiceHero } from './ServiceHero';
import { ServiceTrustStrip } from './ServiceTrustStrip';
import { ServiceOverview } from './ServiceOverview';
import { ServiceCapabilities } from './ServiceCapabilities';
import { ServiceSignature } from './ServiceSignature';
import { ServiceProcess } from './ServiceProcess';
import { ServiceCaseStudies } from './ServiceCaseStudies';
import { ServiceTechnology } from './ServiceTechnology';
import { ServiceOutcomes } from './ServiceOutcomes';
import { RelatedServices } from './RelatedServices';
import { ServiceFAQ } from './ServiceFAQ';
import { ServiceCTA } from './ServiceCTA';
import { Footer } from '../Footer';


interface ServicePageProps {
  data: UniversalServiceData;
  allServices: Record<string, UniversalServiceData>;
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  data,
  allServices,
  onNavigateHome,
  onNavigatePage,
  onSuccessToast,
  onOpenLegal,
}) => {
  // Service Icon Resolver
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'software-development':
        return Code2;
      case 'ai-development':
        return Cpu;
      case 'mobile-app-development':
        return Smartphone;
      case 'web-cms-development':
        return Globe;
      case 'ecommerce-development':
        return ShoppingCart;
      case 'devops':
        return Cloud;
      case 'ai-agents':
        return Bot;
      case 'ai-automations':
        return Zap;
      case 'chatbot-videobot':
        return MessageSquare;
      case 'analytics-dashboard':
        return BarChart3;
      case 'technical-support':
        return LifeBuoy;
      case 'digital-banking':
        return Landmark;
      case 'payment-solutions':
        return CreditCard;
      case 'lending-credit-platforms':
        return LineChart;
      case 'investment-wealth-management':
        return TrendingUp;
      case 'financial-analytics':
        return BarChart3;
      case 'fraud-risk-management':
        return ShieldAlert;
      case 'healthcare-management-software':
        return Activity;
      case 'telemedicine-platforms':
        return Video;
      case 'patient-engagement':
        return HeartHandshake;
      case 'medical-ai-solutions':
        return Stethoscope;
      case 'healthcare-analytics':
        return LineChart;
      case 'healthcare-automation':
        return Workflow;
      case 'ai-product-engineering':
        return Layers;
      case 'applied-ai':
        return Cpu;
      case 'ai-agent-systems':
        return Bot;
      case 'intelligent-automation':
        return Zap;
      case 'generative-ai':
        return FileCheck;
      default:
        return Code2;
    }
  };

  const ServiceIcon = getServiceIcon(data.slug);

  // Compute related service objects from slugs
  const relatedItems = data.relatedServiceSlugs
    .map((slug) => allServices[slug])
    .filter(Boolean)
    .map((s) => ({
      slug: s.slug,
      title: s.title,
      tagline: s.tagline,
      category: s.category,
    }));

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        minHeight: '100vh',
        paddingTop: '64px',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* 01 & 02. Breadcrumb + Hero Section */}
      <ServiceHero
        category={data.category}
        badge={data.hero.badge}
        headline={data.hero.headline}
        headlineHighlight={data.hero.headlineHighlight}
        description={data.hero.description}
        heroImage={data.hero.heroImage}
        heroImageCaption={data.hero.heroImageCaption}
        icon={ServiceIcon}
        primaryCtaText={data.hero.primaryCtaText}
        secondaryCtaText={data.hero.secondaryCtaText}
        onNavigateHome={onNavigateHome}
        onViewCaseStudies={() => {
          const el = document.getElementById('case-studies-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 03. Trust / Capability Strip */}
      <ServiceTrustStrip metrics={data.metrics} trustPoints={data.trustPoints} />

      {/* 04 & 05. Target Audience & Main Problem Solved */}
      <ServiceProblemAudience
        title={data.title}
        targetAudience={data.targetAudience}
        mainProblemSolved={data.mainProblemSolved}
      />

      {/* Strategic Editorial Overview */}
      <ServiceOverview
        statement={data.overview.statement}
        paragraphs={data.overview.paragraphs}
        keyTakeaway={data.overview.keyTakeaway}
      />

      {/* 06. Business Outcomes & Key Benefits */}
      <ServiceOutcomes title={data.title} outcomes={data.outcomes} />

      {/* 07. What's Included / Capabilities */}
      <ServiceCapabilities
        title={data.title}
        capabilities={data.capabilities}
        icon={ServiceIcon}
        styleVariant={data.capabilityStyle || 'bento-grid'}
      />

      {/* Service-Specific Architecture / Workflow Signature */}
      <ServiceSignature data={data.signature} />

      {/* 08. Process / How It Works */}
      <ServiceProcess title={data.title} steps={data.process} />

      {/* 09. Technology & Deliverables */}
      <ServiceTechnology
        techStack={data.techStack}
        deliverables={data.deliverables}
      />

      {/* 10 & 11. Timeline / Duration & Why Choose This Service */}
      <ServiceTimelineWhy
        title={data.title}
        timeline={data.timeline}
        whyChooseThisService={data.whyChooseThisService}
      />

      {/* Case Study Showcase */}
      <div id="case-studies-section">
        <ServiceCaseStudies
          caseStudies={data.caseStudies}
          onViewAllPortfolio={() => onNavigatePage('portfolio')}
          onContactClick={() => {
            const el = document.getElementById('service-contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* 12. FAQ Accordion */}
      <ServiceFAQ title={data.title} faqs={data.faqs} />

      {/* 13. Final Consultation CTA */}
      <ServiceCTA
        title={data.title}
        headline={data.cta.headline}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        onSuccessToast={onSuccessToast}
      />

      {/* 14. Related Services / Ecosystem */}
      {relatedItems.length > 0 && (
        <RelatedServices
          currentSlug={data.slug}
          currentTitle={data.title}
          relatedItems={relatedItems}
          onNavigatePage={onNavigatePage}
        />
      )}

      {/* 14. Global Consistent Footer */}
      <Footer
        onNavigate={onNavigatePage}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};

// Container component that encapsulates service registry lookup so the main bundle stays lightweight
import { UNIVERSAL_SERVICES_MAP } from '../../data/universalServicesRegistry';

export interface ServicePageContainerProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const ServicePageContainer: React.FC<ServicePageContainerProps> = ({
  slug,
  ...rest
}) => {
  const serviceData = UNIVERSAL_SERVICES_MAP[slug];
  if (!serviceData) return null;
  return (
    <ServicePage
      data={serviceData}
      allServices={UNIVERSAL_SERVICES_MAP}
      {...rest}
    />
  );
};

export default ServicePageContainer;

