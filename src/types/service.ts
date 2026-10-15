export type ServiceCategory =
  | 'Core Technology'
  | 'Fintech'
  | 'Healthcare'
  | 'Enterprise AI';

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  tags: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceDeliverable {
  title: string;
  category: string;
  description: string;
  format: string;
}

export interface ServiceTechCategory {
  category: string;
  items: string[];
}

export interface ServiceOutcome {
  metric: string;
  label: string;
  description: string;
}

export interface ServiceCaseStudyRef {
  id: string;
  title: string;
  client: string;
  category: string;
  stats: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSignatureData {
  type:
    | 'architectureDiagram'
    | 'workflowDiagram'
    | 'pipelineVisualization'
    | 'dashboardShowcase'
    | 'lifecycleDiagram'
    | 'multiAgentArchitecture'
    | 'transactionFlow'
    | 'careJourney'
    | 'riskDetection'
    | 'genericFlow';
  badge: string;
  title: string;
  description: string;
  steps: {
    number: string;
    title: string;
    desc: string;
    badge?: string;
    color?: string;
    details?: string[];
  }[];
  highlightCard?: {
    title: string;
    value: string;
    label: string;
    detail: string;
  };
}

export interface ServiceTargetAudienceProfile {
  role: string;
  situation: string;
}

export interface ServiceTargetAudience {
  heading?: string;
  description?: string;
  profiles: ServiceTargetAudienceProfile[];
}

export interface ServiceMainProblem {
  problem: string;
  solution: string;
  result: string;
}

export interface ServiceTimelinePhase {
  phase: string;
  duration: string;
  details: string;
}

export interface ServiceTimeline {
  totalDuration: string;
  sprintCadence?: string;
  phases: ServiceTimelinePhase[];
}

export interface ServiceWhyChooseReason {
  point: string;
  detail: string;
}

export interface ServiceWhyChoose {
  title: string;
  reasons: ServiceWhyChooseReason[];
}

export interface UniversalServiceData {
  id: string;
  slug: string;
  title: string; // 1. Service Name
  category: ServiceCategory;
  tagline: string;
  shortDescription?: string; // 2. Short Description

  // 1. Breadcrumb / Eyebrow
  eyebrow: string;

  // 2. Hero + 3. Hero Image
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    heroImage?: string; // 3. Hero Image
    heroImageCaption?: string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
  };

  // 3. Trust Strip
  trustPoints: string[];
  metrics: ServiceMetric[];

  // 4. Target Audience
  targetAudience?: ServiceTargetAudience;

  // 5. Main Problem Solved
  mainProblemSolved?: ServiceMainProblem;

  // 4b. Overview (Editorial context)
  overview: {
    statement: string;
    paragraphs: string[];
    keyTakeaway: string;
  };

  // 6. Key Benefits (Derived from outcomes / metrics)
  keyBenefits?: {
    title: string;
    description: string;
    metric?: string;
    metricLabel?: string;
  }[];

  // 7. What's Included (Capabilities & Scope)
  capabilities: ServiceCapability[];
  capabilityStyle?:
    | 'bento-grid'
    | 'interactive-tabs'
    | 'numbered-editorial'
    | 'split-showcase'
    | 'dark-cyber'
    | 'timeline-flow'
    | 'minimal-pills';

  // Signature Section (Service-Specific)
  signature: ServiceSignatureData;

  // 8. Process / How It Works
  process: ServiceProcessStep[];

  // Case Studies
  caseStudies: ServiceCaseStudyRef[];

  // 9. Deliverables + Technology
  techStack: ServiceTechCategory[];
  deliverables: ServiceDeliverable[];

  // 10. Timeline / Duration
  timeline?: ServiceTimeline;

  // 11. Why Choose This Service
  whyChooseThisService?: ServiceWhyChoose;

  // Business Outcomes
  outcomes: ServiceOutcome[];

  // 14. Related Services
  relatedServiceSlugs: string[];

  // 12. FAQs
  faqs: ServiceFaq[];

  // 13. Final CTA
  cta: {
    headline: string;
    description: string;
    buttonText: string;
  };

  // SEO metadata
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

