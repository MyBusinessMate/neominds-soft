import { ServiceSlug } from './serviceSlugs';
import { PORTFOLIO_CASE_STUDIES } from './portfolioData';
import { UNIFIED_CASE_STUDIES } from './unifiedCaseStudiesData';

export interface ProjectOverview {
  client: string;
  industry: string;
  services: string;
  technologyStack: string;
  projectType:
    | 'Web Application'
    | 'AI System'
    | 'Automation'
    | 'Custom Software'
    | 'Mobile Application'
    | 'Enterprise Platform'
    | 'Other';
  projectDuration: string;
}

export interface TechnologyImplementation {
  frontend: string;
  backend: string;
  database: string;
  aiAutomation?: string;
  integrations?: string;
}

export interface ResultsAndImpact {
  summary: string;
  efficiency: string;
  timeSaved: string;
  costReduction: string;
  performance: string;
  businessImpact: string;
}

export interface UnifiedProject {
  id: string;
  slug: string;
  projectName: string;
  title: string; // "[Project Name]. Case Study"
  overview: ProjectOverview;
  clientContext: string;
  challenge: string;
  constraints: string;
  approach: string;
  solution: string;
  keyFeatures: string[];
  technologyImplementation: TechnologyImplementation;
  resultsAndImpact: ResultsAndImpact;
  keyTakeaway: string;
  discussStatement: string;
  ctaText: string;
  relatedServices: { name: string; slug: ServiceSlug }[];
  relatedProjectIds: string[];
}

export const UNIFIED_PROJECTS: Record<string, UnifiedProject> = {
  ...UNIFIED_CASE_STUDIES,
};

// Helper to retrieve project by ID or slug with safe fallback
export function getUnifiedProject(idOrSlug: string): UnifiedProject {
  const cleanId = (idOrSlug || '').trim().toLowerCase();
  
  if (UNIFIED_PROJECTS[cleanId]) {
    return UNIFIED_PROJECTS[cleanId];
  }

  // Also match by slug / alias in UNIFIED_PROJECTS
  const bySlug = Object.values(UNIFIED_PROJECTS).find(
    (p) => p.slug.toLowerCase() === cleanId || p.projectName.toLowerCase() === cleanId
  );
  if (bySlug) {
    return bySlug;
  }

  // Look in PORTFOLIO_CASE_STUDIES
  const match = PORTFOLIO_CASE_STUDIES.find(
    (p) => p.id === cleanId || p.work.toLowerCase() === cleanId || p.title.toLowerCase().includes(cleanId)
  );

  if (match) {
    return {
      id: match.id,
      slug: match.id,
      projectName: match.work || match.title.replace(/\s*Case Study$/i, ''),
      title: `${match.work || match.title.replace(/\s*Case Study$/i, '')}. Case Study`,
      overview: {
        client: match.client,
        industry: match.category,
        services: match.service,
        technologyStack: match.technology + (match.tags.length ? `, ${match.tags.slice(0, 3).join(', ')}` : ''),
        projectType: match.service.toLowerCase().includes('mobile') || match.service.toLowerCase().includes('app')
          ? 'Mobile Application'
          : match.service.toLowerCase().includes('ai')
          ? 'AI System'
          : match.service.toLowerCase().includes('dashboard') || match.service.toLowerCase().includes('web')
          ? 'Web Application'
          : 'Custom Software',
        projectDuration: '3 to 5 Months (Production Deployment)',
      },
      clientContext:
        match.details.clientContext ||
        `${match.client} is an organization operating in the ${match.category} sector requiring high-performance engineering delivery.`,
      challenge:
        match.details.challenge ||
        `${match.client} needed to modernize their existing operational software to address performance bottlenecks and scale demands.`,
      constraints:
        match.details.constraints ||
        'Strict uptime requirements, integration with existing business workflows, and zero operational disruption during migration.',
      approach:
        match.details.approach ||
        'We evaluated the existing technical architecture, decoupled critical bottlenecks, and implemented a modern scalable foundation.',
      solution:
        match.details.solution ||
        match.description,
      keyFeatures: [
        'Dedicated modern architecture tailored to high-load operational throughput',
        'Clean responsive user interface with real-time feedback loops',
        'Hardened data persistence and automated backup pipelines',
        'Verified integration with existing enterprise tools and third-party APIs',
      ],
      technologyImplementation: {
        frontend: match.tags.includes('React') || match.tags.includes('React Native') ? 'React / React Native, TypeScript' : 'TypeScript, Modern Frontend Architecture',
        backend: match.tags.includes('Node.js') ? 'Node.js, Express microservices' : 'Node.js / Go backend services',
        database: 'PostgreSQL, Redis cache layer',
        aiAutomation: match.service.toLowerCase().includes('ai') ? 'Contextual AI inference and automated analytics' : undefined,
        integrations: match.tags.slice(0, 3).join(', ') + ' APIs',
      },
      resultsAndImpact: {
        summary: match.details.results || 'Production-verified results that improved operational performance and user engagement.',
        efficiency: match.metric || 'Substantial measured operational improvement',
        timeSaved: 'Significant reduction in manual workflows and overhead',
        costReduction: 'Measurable infrastructure and maintenance savings',
        performance: match.stats || 'High-throughput sub-second response times',
        businessImpact: match.description,
      },
      keyTakeaway:
        match.details.takeaway ||
        'Engineering systems for long-term production reliability requires disciplined architecture, clear user interfaces, and automated verification loops.',
      discussStatement:
        `NeoMinds helps ambitious organizations like ${match.client} build reliable software that solves real business bottlenecks.`,
      ctaText: 'Discuss Your Project',
      relatedServices: [
        { name: 'Custom Software Development', slug: 'custom-software-development' },
        { name: 'Web Development', slug: 'web-development' },
        { name: 'App Development', slug: 'app-development' },
      ],
      relatedProjectIds: PORTFOLIO_CASE_STUDIES.filter((p) => p.id !== match.id)
        .slice(0, 3)
        .map((p) => p.id),
    };
  }

  // Safe default to flooring-inc-dashboard or mindspace-mobile-app
  return UNIFIED_PROJECTS['flooring-inc-dashboard'] || UNIFIED_PROJECTS['mindspace-mobile-app'] || Object.values(UNIFIED_PROJECTS)[0];
}
