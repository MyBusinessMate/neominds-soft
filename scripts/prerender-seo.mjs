import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const BASE_INDEX_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(BASE_INDEX_PATH)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const baseIndexHtml = fs.readFileSync(BASE_INDEX_PATH, 'utf8');

// Load case studies from unifiedCaseStudiesData.ts
const caseStudiesFile = fs.readFileSync('src/data/unifiedCaseStudiesData.ts', 'utf8');
const caseStudyMatches = caseStudiesFile.matchAll(/["']id["']:\s*["']([a-z0-9-]+)["']/g);
const CASE_STUDY_IDS = Array.from(new Set(Array.from(caseStudyMatches, m => m[1])));

// 1. Core Pages
const CORE_PAGES = [
  {
    path: '/',
    title: 'Neominds TechHub: AI-Powered Software Development Company',
    description: 'Neominds TechHub builds enterprise web, mobile, cloud, and AI software. We engineer custom SaaS, autonomous AI agents, and resilient legacy modernization.',
    type: 'website',
  },
  {
    path: '/services',
    title: 'Enterprise Software & AI Engineering Services | Neominds TechHub',
    description: 'Explore 16 production software engineering services. Full-stack web, native mobile, cloud microservices, autonomous AI systems, and legacy modernization.',
    type: 'website',
    schemaType: 'CollectionPage',
    schemaName: 'Neominds Software & AI Engineering Services',
  },
  {
    path: '/case-studies',
    title: 'Client Case Studies & Verified Results | Neominds TechHub',
    description: 'Explore 30 verified production case studies spanning trading platforms, HIPAA telehealth applications, AI automations, and cloud modernization.',
    type: 'website',
    schemaType: 'CollectionPage',
    schemaName: 'Neominds Verified Case Studies and Client Work',
  },
  {
    path: '/industries',
    title: 'Industries We Serve: FinTech, HealthTech, Retail | Neominds',
    description: 'Domain-engineered software solutions for Healthcare (HIPAA), Financial Services, High-Volume E-Commerce, Education, and Enterprise Logistics worldwide.',
    type: 'website',
    schemaType: 'CollectionPage',
    schemaName: 'Industries Served by Neominds TechHub',
  },
  {
    path: '/technology',
    title: 'Technology & Architecture Stack | NeoMinds TechHub',
    description: 'Explore NeoMinds 7 core engineering technologies: Web Development, Artificial Intelligence, Machine Learning, Data Management, and Product Engineering.',
    type: 'website',
    schemaType: 'WebPage',
    schemaName: 'NeoMinds Technology & Architectural Stack',
  },
  {
    path: '/about-us',
    title: 'About Us: Mission, Principles & Global Presence | Neominds',
    description: 'Learn about Neominds TechHub. Our engineering culture, zero-mock production standards, 100% IP ownership handover, and global delivery squads.',
    type: 'website',
    schemaType: 'AboutPage',
    schemaName: 'About Neominds TechHub',
  },
  {
    path: '/leaders',
    title: 'Leadership Team & Principal Architects | Neominds TechHub',
    description: 'Meet the executive leadership and principal software architects driving Neominds TechHub enterprise engineering for clients across the US, UK, and EU.',
    type: 'website',
    schemaType: 'AboutPage',
    schemaName: 'Neominds Leadership Team',
  },
  {
    path: '/careers',
    title: 'Careers in Software & AI Engineering | Neominds TechHub',
    description: 'Join Neominds TechHub. Open roles for Senior Full-Stack Engineers, AI/ML Architects, Cloud DevOps Leads, and Product Managers with high ownership.',
    type: 'website',
  },
  {
    path: '/certification',
    title: 'Security Certifications & Compliance | Neominds TechHub',
    description: 'Review Neominds security controls, ISO/IEC 27001 accreditation, SOC 2 Type II compliance, and HIPAA safeguards protecting enterprise client IP.',
    type: 'website',
  },
  {
    path: '/contacts',
    title: 'Contact Neominds TechHub: Start Project Consultation',
    description: 'Schedule a technical consultation with Neominds engineering architects. Receive technical feasibility assessment, milestone roadmap, and NDA proposal.',
    type: 'website',
    schemaType: 'ContactPage',
    schemaName: 'Contact Neominds TechHub',
  },
  {
    path: '/blog',
    title: 'Engineering Blog: Technical Deep Dives | Neominds TechHub',
    description: 'Peer-reviewed technical articles by Neominds software architects on RAG pipeline benchmarking, zero-downtime migrations, and distributed systems.',
    type: 'website',
    schemaType: 'CollectionPage',
    schemaName: 'Neominds Engineering Blog',
  },
  {
    path: '/company-updates',
    title: 'Company Updates & Global Milestones | Neominds TechHub',
    description: 'Official announcements, international expansion news, partnership milestones, and engineering releases from Neominds TechHub.',
    type: 'website',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Neominds TechHub Data Protection',
    description: 'Neominds enterprise privacy policy, detailing data protection principles, GDPR compliance, and client confidential information security.',
    type: 'website',
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions | Neominds TechHub Governance',
    description: 'Terms of engagement, intellectual property handover policies, warranties, and enterprise service level agreements for Neominds clients.',
    type: 'website',
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy | Neominds TechHub Compliance Standards',
    description: 'Information regarding cookie utilization, functional preferences, and telemetry practices on the Neominds digital platform.',
    type: 'website',
  },
  {
    path: '/security-policy',
    title: 'Security & Compliance Standards | Neominds TechHub SIRT',
    description: 'SOC 2 Type II, ISO 27001, and HIPAA compliance specifications. Security Incident Response Team contact and vulnerability disclosure guidelines.',
    type: 'website',
  },
];

// 2. Canonical 16 Services
const SERVICE_PAGES = [
  {
    slug: 'software-development',
    title: 'Custom Software Development Services | Neominds TechHub',
    description: 'Bespoke enterprise software tailored to exact operational workflows, internal systems, and distributed backend microservices.',
  },
  {
    slug: 'mobile-app-development',
    title: 'Native Mobile App Development Services | Neominds TechHub',
    description: 'Native iOS (Swift) and Android (Kotlin) mobile apps engineered for high performance, smooth UX, offline biometrics, and reliable updates.',
  },
  {
    slug: 'web-cms-development',
    title: 'Enterprise Web & CMS Development | Neominds TechHub',
    description: 'Fast, secure, and responsive web applications, portals, and websites that scale with business traffic using React, Next.js, and TypeScript.',
  },
  {
    slug: 'ai-development',
    title: 'Enterprise AI Development & LLMs | Neominds TechHub',
    description: 'Embedding cognitive capabilities, LLM reasoning, intelligent document processing, and vector search into existing software.',
  },
  {
    slug: 'ai-agents',
    title: 'Autonomous AI Agents & Reasoning Systems | Neominds',
    description: 'Autonomous multi-agent architectures, reasoning models, and production RAG pipelines engineered with LangGraph and vector search.',
  },
  {
    slug: 'ai-product-engineering',
    title: 'AI Product Engineering & Copilots | Neominds TechHub',
    description: 'Digital products designed from the ground up around artificial intelligence, cognitive workflows, and generative foundation models.',
  },
  {
    slug: 'devops',
    title: 'Cloud DevOps & CI/CD Pipeline Automation | Neominds',
    description: 'Resilient cloud infrastructure, automated multi-region CI/CD pipelines, Docker, Kubernetes orchestration, and 99.99% uptime SLAs.',
  },
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Platform & Storefront Engineering | Neominds',
    description: 'High-volume storefronts, checkout engines, payment gateway integrations, and real-time inventory synchronization for global brands.',
  },
  {
    slug: 'cloud-native',
    title: 'Cloud Native Software Architecture | Neominds TechHub',
    description: 'Distributed microservices, event-driven architectures, serverless computing, and auto-scaling cloud deployments on AWS, Azure, and GCP.',
  },
  {
    slug: 'legacy-modernization',
    title: 'Legacy System Modernization Services | Neominds TechHub',
    description: 'Incremental refactoring and cloud migration of monolithic legacy codebases using the Strangler Fig pattern with zero unplanned downtime.',
  },
  {
    slug: 'mvp-development',
    title: 'Rapid MVP Development for Startups & Scaleups | Neominds',
    description: 'High-velocity MVP engineering from architecture to production in 6 to 12 weeks with dedicated senior developers and clean IP handover.',
  },
  {
    slug: 'enterprise-architecture',
    title: 'Enterprise Software Architecture Services | Neominds',
    description: 'High-throughput system design, domain-driven architecture, distributed transaction integrity, and technical scalability reviews.',
  },
  {
    slug: 'qa-engineering',
    title: 'QA Engineering & Automated Testing | Neominds TechHub',
    description: 'Comprehensive end-to-end testing, visual regression suites, load testing, chaos engineering, and automated CI quality gates.',
  },
  {
    slug: 'data-engineering',
    title: 'Data Engineering & Analytics Pipelines | Neominds TechHub',
    description: 'Real-time telemetry pipelines, data warehousing on Snowflake and ClickHouse, ETL orchestration, and sub-50ms analytics dashboards.',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Application Hardening | Neominds TechHub',
    description: 'Zero-trust architecture, automated vulnerability scanning, penetration testing remediation, and compliance controls for SOC 2 and HIPAA.',
  },
  {
    slug: 'product-engineering',
    title: 'End-to-End Product Engineering Services | Neominds TechHub',
    description: 'Full-lifecycle digital product development from technical discovery to production deployment and enterprise scaling with dedicated squads.',
  },
];

// 3. Blog Articles
const BLOG_ARTICLES = [
  {
    slug: 'why-ai-projects-fail-in-enterprises',
    title: 'Why AI Projects Fail in Enterprises | Neominds Engineering',
    description: 'Analyzing the top technical pitfalls in enterprise AI deployments: data quality drift, lack of evaluation frameworks, and latency bottlenecks.',
  },
  {
    slug: 'ai-in-education',
    title: 'AI in Education: Adaptive Learning Platforms | Neominds',
    description: 'Architecting personalized learning platforms with generative AI tutors, knowledge graphs, and automated assessment pipelines.',
  },
  {
    slug: 'ai-in-product-development',
    title: 'AI in Product Development: From Idea to Scale | Neominds',
    description: 'How modern engineering squads integrate foundation models, agentic workflows, and real-time evaluations into core product mechanics.',
  },
  {
    slug: 'ai-in-software-development-lifecycle',
    title: 'AI Across the Software Lifecycle (SDLC) | Neominds TechHub',
    description: 'Practical adoption of AI copilots, synthetic data generation, automated test generation, and architectural analysis across the SDLC.',
  },
  {
    slug: 'ai-in-hr',
    title: 'AI in HR: Intelligent Candidate Matching | Neominds TechHub',
    description: 'Building ethical, bias-audited candidate ranking and automated onboarding engines with vector embeddings and role-based permissions.',
  },
  {
    slug: 'event-driven-microservices-zero-downtime',
    title: 'Event-Driven Microservices with Zero Downtime | Neominds',
    description: 'Patterns for implementing Kafka, Debezium change data capture, and transactional outbox patterns for resilient distributed architectures.',
  },
  {
    slug: 'healthcare-revenue-cycle-management-automation',
    title: 'Healthcare Revenue Cycle Automation (RCM) | Neominds TechHub',
    description: 'Streamlining prior authorizations, claims adjudication, and HIPAA compliance using FHIR APIs and automated document intelligence.',
  },
];

// Helper to inject SEO tags into base HTML
function injectSeoIntoHtml(baseHtml, { canonicalPath, title, description, schemaJson }) {
  const fullCanonicalUrl = `https://neominds.io${canonicalPath === '/' ? '' : canonicalPath}`;

  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/s,
    `<meta name="description" content="${description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/>/s,
    `<link rel="canonical" href="${fullCanonicalUrl}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/>/s,
    `<meta property="og:title" content="${title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/>/s,
    `<meta property="og:description" content="${description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/>/s,
    `<meta property="og:url" content="${fullCanonicalUrl}" />`
  );

  // Replace Twitter Tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s,
    `<meta name="twitter:description" content="${description}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content=".*?"\s*\/>/s,
    `<meta name="twitter:url" content="${fullCanonicalUrl}" />`
  );

  // Inject Custom JSON-LD Schema if provided
  if (schemaJson) {
    const schemaScriptTag = `\n  <script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n  </script>`;
    html = html.replace('</head>', `${schemaScriptTag}\n</head>`);
  }

  return html;
}

// Ensure directory exists and write index.html
function writeRouteHtml(routePath, htmlContent) {
  const normalizedRoute = routePath.replace(/^\//, '');
  const targetDir = normalizedRoute ? path.join(DIST_DIR, normalizedRoute) : DIST_DIR;

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
}

let generatedCount = 0;

// 1. Core pages
for (const page of CORE_PAGES) {
  let schema = null;
  if (page.schemaType) {
    schema = {
      '@context': 'https://schema.org',
      '@type': page.schemaType,
      name: page.schemaName || page.title,
      url: `https://neominds.io${page.path}`,
      description: page.description,
    };
  }

  const rendered = injectSeoIntoHtml(baseIndexHtml, {
    canonicalPath: page.path,
    title: page.title,
    description: page.description,
    schemaJson: schema,
  });

  writeRouteHtml(page.path, rendered);
  generatedCount++;
}

// 2. Services pages
for (const s of SERVICE_PAGES) {
  const canonicalPath = `/services/${s.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://neominds.io${canonicalPath}#service`,
    name: s.title,
    serviceType: s.title,
    description: s.description,
    provider: {
      '@type': 'Organization',
      name: 'Neominds TechHub',
      url: 'https://neominds.io',
      logo: 'https://neominds.io/favicon.svg',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
  };

  const rendered = injectSeoIntoHtml(baseIndexHtml, {
    canonicalPath,
    title: s.title,
    description: s.description,
    schemaJson: schema,
  });

  writeRouteHtml(canonicalPath, rendered);
  generatedCount++;
}

// 3. Blog articles
for (const b of BLOG_ARTICLES) {
  const canonicalPath = `/blog/${b.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://neominds.io${canonicalPath}#post`,
    headline: b.title,
    description: b.description,
    publisher: {
      '@type': 'Organization',
      name: 'Neominds TechHub',
      url: 'https://neominds.io',
      logo: 'https://neominds.io/favicon.svg',
    },
    mainEntityOfPage: `https://neominds.io${canonicalPath}`,
  };

  const rendered = injectSeoIntoHtml(baseIndexHtml, {
    canonicalPath,
    title: b.title,
    description: b.description,
    schemaJson: schema,
  });

  writeRouteHtml(canonicalPath, rendered);
  generatedCount++;
}

// 4. Case studies
for (const id of CASE_STUDY_IDS) {
  const canonicalPath = `/case-studies/${id}`;
  const title = `${id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Case Study | Neominds TechHub`;
  const description = `Verified production case study: ${id}. Technical architecture, implementation methodology, and measured enterprise business results.`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `https://neominds.io${canonicalPath}#article`,
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: 'Neominds TechHub Engineering Team',
      url: 'https://neominds.io',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Neominds TechHub',
      url: 'https://neominds.io',
      logo: 'https://neominds.io/favicon.svg',
    },
    mainEntityOfPage: `https://neominds.io${canonicalPath}`,
  };

  const rendered = injectSeoIntoHtml(baseIndexHtml, {
    canonicalPath,
    title,
    description,
    schemaJson: schema,
  });

  writeRouteHtml(canonicalPath, rendered);
  generatedCount++;
}

console.log(`Successfully generated static pre-rendered SEO HTML for all ${generatedCount} canonical routes in dist/`);
