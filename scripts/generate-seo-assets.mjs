import fs from 'fs';
import path from 'path';

// 1. Core Pages
const CORE_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'daily', title: 'Neominds TechHub: AI-Powered Software Development Company' },
  { path: '/services', priority: '0.9', changefreq: 'weekly', title: 'Enterprise Software & AI Engineering Services | Neominds' },
  { path: '/case-studies', priority: '0.9', changefreq: 'weekly', title: 'Client Case Studies & Verified Results | Neominds' },
  { path: '/industries', priority: '0.85', changefreq: 'monthly', title: 'Industries We Serve: FinTech, HealthTech, Retail | Neominds' },
  { path: '/technology', priority: '0.85', changefreq: 'monthly', title: 'Technology & Architecture Stack | NeoMinds' },
  { path: '/about-us', priority: '0.8', changefreq: 'monthly', title: 'About Us: Mission, Principles & Global Presence | Neominds' },
  { path: '/leaders', priority: '0.8', changefreq: 'monthly', title: 'Leadership Team & Principal Architects | Neominds TechHub' },
  { path: '/careers', priority: '0.8', changefreq: 'weekly', title: 'Careers in Software & AI Engineering | Neominds TechHub' },
  { path: '/certification', priority: '0.75', changefreq: 'monthly', title: 'Security Certifications & Compliance | Neominds TechHub' },
  { path: '/contacts', priority: '0.85', changefreq: 'monthly', title: 'Contact Neominds TechHub: Start Project Consultation' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly', title: 'Engineering Blog: Technical Deep Dives | Neominds TechHub' },
  { path: '/company-updates', priority: '0.7', changefreq: 'monthly', title: 'Company Updates & Global Milestones | Neominds TechHub' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly', title: 'Privacy Policy | Neominds TechHub' },
  { path: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly', title: 'Terms & Conditions | Neominds TechHub' },
  { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly', title: 'Cookie Policy | Neominds TechHub' },
  { path: '/security-policy', priority: '0.4', changefreq: 'yearly', title: 'Security & Compliance Standards | Neominds TechHub' },
];

// 2. Canonical 16 Services
const SERVICE_SLUGS = [
  'software-development',
  'mobile-app-development',
  'web-cms-development',
  'ai-development',
  'ai-agents',
  'ai-product-engineering',
  'devops',
  'ecommerce-development',
  'cloud-native',
  'legacy-modernization',
  'mvp-development',
  'enterprise-architecture',
  'qa-engineering',
  'data-engineering',
  'cybersecurity',
  'product-engineering',
];

// 3. Blog Articles
const BLOG_SLUGS = [
  'why-ai-projects-fail-in-enterprises',
  'ai-in-education',
  'ai-in-product-development',
  'ai-in-software-development-lifecycle',
  'ai-in-hr',
  'event-driven-microservices-zero-downtime',
  'healthcare-revenue-cycle-management-automation',
];

// 4. Case Studies - parse unifiedCaseStudiesData.ts directly
const caseStudiesFile = fs.readFileSync('src/data/unifiedCaseStudiesData.ts', 'utf8');
const caseStudyMatches = caseStudiesFile.matchAll(/["']id["']:\s*["']([a-z0-9-]+)["']/g);
const CASE_STUDY_IDS = Array.from(new Set(Array.from(caseStudyMatches, m => m[1])));

console.log(`Found ${CASE_STUDY_IDS.length} case studies.`);

// Total URLs
const allUrls = [
  ...CORE_PAGES.map(p => ({ loc: `https://neominds.io${p.path === '/' ? '' : p.path}`, priority: p.priority, changefreq: p.changefreq })),
  ...SERVICE_SLUGS.map(s => ({ loc: `https://neominds.io/services/${s}`, priority: '0.85', changefreq: 'weekly' })),
  ...CASE_STUDY_IDS.map(id => ({ loc: `https://neominds.io/case-studies/${id}`, priority: '0.8', changefreq: 'monthly' })),
  ...BLOG_SLUGS.map(slug => ({ loc: `https://neominds.io/blog/${slug}`, priority: '0.75', changefreq: 'monthly' })),
];

console.log(`Total canonical URLs to write to sitemap.xml: ${allUrls.length}`);

// Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>2026-11-03</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemapXml.trim() + '\n', 'utf8');
console.log('Successfully wrote public/sitemap.xml');
