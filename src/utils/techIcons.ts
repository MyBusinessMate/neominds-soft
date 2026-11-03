// Utility to resolve technology names to authentic SVGs in /svg/ or /svgs/

export interface TechIconMatch {
  name: string;
  iconPath: string;
}

const TECH_ICON_MAP: Record<string, string> = {
  // Frontend
  react: '/svg/react.svg',
  'react 18': '/svg/react.svg',
  'react.js': '/svg/react.svg',
  'react native': '/svg/reactnative.svg',
  reactnative: '/svg/reactnative.svg',
  nextjs: '/svg/nextjs.svg',
  'next.js': '/svg/nextjs.svg',
  'next.js 14': '/svg/nextjs.svg',
  'next.js 15': '/svg/nextjs.svg',
  typescript: '/svg/typescript.svg',
  ts: '/svg/typescript.svg',
  vite: '/svg/vite.svg',
  'vite 5': '/svg/vite.svg',
  'tailwind css': '/svg/tailwind-css.svg',
  tailwind: '/svg/tailwind-css.svg',
  'tailwind css 3': '/svg/tailwind-css.svg',
  'shadcn/ui': '/svg/shadcn-ui.svg',
  shadcn: '/svg/shadcn-ui.svg',
  'radix ui': '/svg/radix-ui.svg',
  'radix-ui': '/svg/radix-ui.svg',
  'framer motion': '/svg/motion.svg',
  motion: '/svg/motion.svg',
  lucide: '/svg/lucide.svg',
  'lucide react': '/svg/lucide.svg',
  tanstack: '/svg/tanstack.svg',

  // Backend & APIs
  nodejs: '/svg/nodejs.svg',
  'node.js': '/svg/nodejs.svg',
  node: '/svg/nodejs.svg',
  express: '/svg/expressdotjs.svg',
  'express.js': '/svg/expressdotjs.svg',
  fastapi: '/svg/fastapi.svg',
  fastify: '/svg/fastify.svg',
  flask: '/svg/flask.svg',
  python: '/svg/python.svg',
  'better-auth': '/svg/better-auth.svg',

  // Databases
  postgresql: '/svg/postgresql.svg',
  postgres: '/svg/postgresql.svg',
  mysql: '/svg/mysql.svg',
  mongodb: '/svg/mongodb.svg',
  redis: '/svg/redis.svg',
  'oracle database': '/svg/azure-oracle-database.svg',
  oracle: '/svg/azure-oracle-database.svg',
  'sql server': '/svg/microsoft-sql-server.svg',
  'mssql': '/svg/microsoft-sql-server.svg',
  supabase: '/svg/supabase.svg',
  firebase: '/svg/firebase.svg',
  firestore: '/svg/firebase.svg',

  // AI & Cloud
  groq: '/svg/groq.svg',
  'groq ai': '/svg/groq.svg',
  'groq sdk': '/svg/groq.svg',
  'groq api': '/svg/groq.svg',
  openai: '/svg/openai.svg',
  gemini: '/svg/gemini.svg',
  'google gemini': '/svg/gemini.svg',
  'vertex ai': '/svg/vertexai-google.svg',
  elevenlabs: '/svg/elevenlabs.svg',
  meta: '/svg/meta.svg',
  'meta llama': '/svg/meta.svg',
  llama: '/svg/meta.svg',
  aws: '/svg/aws.svg',
  'amazon web services': '/svg/aws.svg',
  gcp: '/svg/googlecloud.svg',
  'google cloud': '/svg/googlecloud.svg',
  cloudflare: '/svg/cloudflare.svg',
  docker: '/svg/docker.svg',
  vercel: '/svg/vercel.svg',
  netlify: '/svg/netlify.svg',

  // Integrations & Tools
  n8n: '/svg/n8n.svg',
  onesignal: '/svg/onesignal.svg',
  'google analytics': '/svg/google-analytics.svg',
  ga4: '/svg/google-analytics.svg',
  slack: '/svg/slack.svg',
  shopify: '/svg/shopify.svg',
  'google drive': '/svg/google-drive-2026.svg',
  'cal.com': '/svg/cal-com.svg',
  razorpay: '/svg/razorpay.svg',
  'ola maps': '/svg/ola-maps.svg',
};

/**
 * Returns the SVG icon path for a given technology name, or null if no exact SVG is available.
 */
export function getTechIconPath(tech: string): string | null {
  if (!tech) return null;
  const key = tech.trim().toLowerCase();
  
  if (TECH_ICON_MAP[key]) {
    return TECH_ICON_MAP[key];
  }

  // Substring matching
  for (const [k, path] of Object.entries(TECH_ICON_MAP)) {
    if (key.includes(k) || k.includes(key)) {
      return path;
    }
  }

  return null;
}

/**
 * Parses a comma-separated or array of technologies and returns matched icon items
 */
export function parseTechStackWithIcons(techStack: string | string[]): { name: string; iconPath: string | null }[] {
  const items = Array.isArray(techStack)
    ? techStack
    : techStack.split(/[,·|•]/).map((s) => s.trim()).filter(Boolean);

  return items.map((name) => ({
    name,
    iconPath: getTechIconPath(name),
  }));
}

