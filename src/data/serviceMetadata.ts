export interface ServiceMetaSummary {
  title: string;
  description: string;
  heroImage?: string;
}

export const SERVICE_METADATA_MAP: Record<string, ServiceMetaSummary> = {
  // Core Development
  'web-development': {
    title: 'Web Development',
    description: 'Fast, secure websites and web applications built to perform',
  },
  'app-development': {
    title: 'App Development',
    description: 'iOS and Android apps your users will actually keep using',
  },
  'cross-platform-app-development': {
    title: 'Cross-Platform App Development',
    description: 'One codebase for iOS, Android, and web - shipped together',
  },
  'custom-software-development': {
    title: 'Custom Software Development',
    description: 'Software that fits your workflow, not the other way around',
  },
  'ecommerce-platform': {
    title: 'E-commerce Platform',
    description: 'Online stores and commerce platforms built for growth and conversion',
  },
  'saas-development': {
    title: 'SaaS Development',
    description: 'Subscription software products built to acquire, retain, and scale',
  },
  'cloud-based-software': {
    title: 'Cloud Based Software',
    description: 'Cloud-native systems that scale without friction',
  },
  'legacy-modernisation': {
    title: 'Legacy System Modernisation',
    description: 'Replace or modernise outdated systems without stopping your business',
  },

  // AI & Intelligence
  'ai-automations': {
    title: 'AI Automations',
    description: 'Replace repetitive manual work with automated AI-driven workflows',
  },
  'ai-integrations': {
    title: 'AI Integrations',
    description: 'Add AI capabilities to the software your business already runs',
  },
  'ai-systems': {
    title: 'AI Systems',
    description: 'Custom AI systems built for complex reasoning and autonomous task execution',
  },
  'ai-native-software': {
    title: 'AI Native Software',
    description: 'Products designed around AI from the first line of code',
  },

  // Specialist
  'analytics-dashboard': {
    title: 'Analytics Dashboard',
    description: 'Dashboards that turn your data into clear, actionable decisions',
  },
  'custom-health-software': {
    title: 'Custom Health Software',
    description: 'Healthcare software built for how clinics and hospitals actually work',
  },
  'training-as-service': {
    title: 'Training as a Service',
    description: 'Technical training and knowledge transfer that makes your team self-sufficient',
  },
  'product-engineering': {
    title: 'Product Engineering',
    description: 'End-to-end product development from discovery to production launch',
  },
};
