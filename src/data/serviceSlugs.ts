// Canonical service slugs — 16 services exactly as defined in the services CSV
export const ALL_SERVICE_SLUGS = [
  // Core Development
  'web-development',
  'app-development',
  'cross-platform-app-development',
  'custom-software-development',
  'ecommerce-platform',
  'saas-development',
  'cloud-based-software',
  'legacy-modernisation',
  // AI & Intelligence
  'ai-automations',
  'ai-integrations',
  'ai-systems',
  'ai-native-software',
  // Specialist
  'analytics-dashboard',
  'custom-health-software',
  'training-as-service',
  'product-engineering',
] as const;

export type ServiceSlug = typeof ALL_SERVICE_SLUGS[number];

const SERVICE_SLUG_SET = new Set<string>(ALL_SERVICE_SLUGS);

export const isServiceSlug = (slug: string): boolean => {
  return SERVICE_SLUG_SET.has(slug);
};
