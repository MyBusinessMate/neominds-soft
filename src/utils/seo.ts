import { PageType } from '../components/Header';
import { SERVICE_METADATA_MAP } from '../data/serviceMetadata';
import { SERVICES_DATA } from '../data/servicesData';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { getUnifiedProject } from '../data/projectsData';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  ogType?: string;
  ogImage?: string;
  geoRegion?: string;
  geoPlacename?: string;
  schema?: Record<string, any>;
}

const PRODUCTION_DOMAIN = 'https://neomindstechhub.co';
const DEFAULT_OG_IMAGE = 'https://neomindstechhub.co/images/hero-ribbon.jpg';
const DEFAULT_GEO_REGION = 'IN-TG';
const DEFAULT_GEO_PLACENAME = 'Hyderabad, Telangana State, India';
const DEFAULT_GEO_POSITION = '17.4018;78.4772';
const DEFAULT_ICBM = '17.4018, 78.4772';

export const getPageMetadata = (page: PageType | '404', articleId?: string | null): PageMeta => {
  // ─────────────────────────────────────────────────────────────
  // 1. 404 Not Found
  // ─────────────────────────────────────────────────────────────
  if (page === '404') {
    return {
      title: 'Page Not Found (404) | NeoMinds TechHub Engineering',
      description: 'The requested URL was not found on NeoMinds TechHub. Explore our enterprise software engineering, AI systems, case studies, and modern digital platforms.',
      keywords: ['404', 'page not found', 'NeoMinds TechHub'],
      canonicalPath: '/404',
      ogType: 'website',
      ogImage: DEFAULT_OG_IMAGE,
    };
  }

  // ─────────────────────────────────────────────────────────────
  // 2. Project Case Study Page
  // ─────────────────────────────────────────────────────────────
  if (page === 'project' && articleId) {
    const project = getUnifiedProject(articleId);
    const canonicalPath = `/case-studies/${project.id}`;
    const keywords = [
      project.projectName,
      `${project.overview.client} case study`,
      project.overview.industry,
      project.overview.services,
      ...project.overview.technologyStack.split(',').map((t) => t.trim()),
      'custom software case study',
      'enterprise software results',
    ];

    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', url: PRODUCTION_DOMAIN },
      { name: 'Case Studies', url: `${PRODUCTION_DOMAIN}/case-studies` },
      { name: project.projectName, url: `${PRODUCTION_DOMAIN}${canonicalPath}` },
    ];

    // Calibrate description to 140–160 chars
    const baseSummary = `${project.projectName} Case Study: ${project.solution.replace(/\s+/g, ' ').trim()}`;
    const description =
      baseSummary.length > 157
        ? `${baseSummary.slice(0, 154)}...`
        : baseSummary.padEnd(145, ' ');

    return {
      title: `${project.projectName} Case Study | NeoMinds TechHub`,
      description: description.trim(),
      keywords,
      canonicalPath,
      ogType: 'article',
      ogImage: DEFAULT_OG_IMAGE,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'TechArticle',
            '@id': `${PRODUCTION_DOMAIN}${canonicalPath}#article`,
            headline: project.title,
            description: project.solution,
            author: {
              '@type': 'Organization',
              name: 'NeoMinds TechHub Engineering Team',
              url: PRODUCTION_DOMAIN,
            },
            publisher: {
              '@type': 'Organization',
              name: 'NeoMinds TechHub',
              url: PRODUCTION_DOMAIN,
              logo: `${PRODUCTION_DOMAIN}/favicon.svg`,
            },
            mainEntityOfPage: `${PRODUCTION_DOMAIN}${canonicalPath}`,
            about: [
              { '@type': 'Thing', name: project.overview.industry },
              { '@type': 'Thing', name: project.overview.services },
            ],
            keywords: keywords.join(', '),
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${PRODUCTION_DOMAIN}${canonicalPath}#breadcrumb`,
            itemListElement: breadcrumbs.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: b.name,
              item: b.url,
            })),
          },
        ],
      },
    };
  }

  // ─────────────────────────────────────────────────────────────
  // 3. Blog Post Detail Page
  // ─────────────────────────────────────────────────────────────
  if (page === 'blog' && articleId) {
    const article = BLOG_POSTS_DATA.find((p) => p.id === articleId || p.slug === articleId);
    if (article) {
      const canonicalPath = `/blog/${article.slug}`;
      const breadcrumbs: BreadcrumbItem[] = [
        { name: 'Home', url: PRODUCTION_DOMAIN },
        { name: 'Engineering Blog', url: `${PRODUCTION_DOMAIN}/blog` },
        { name: article.title, url: `${PRODUCTION_DOMAIN}${canonicalPath}` },
      ];

      return {
        title: `${article.title} | NeoMinds TechHub Technical Deep Dive`,
        description: article.excerpt,
        keywords: [article.category, 'software architecture', 'AI engineering', 'technical whitepaper', 'NeoMinds TechHub engineering'],
        canonicalPath,
        ogType: 'article',
        ogImage: article.coverImage || DEFAULT_OG_IMAGE,
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BlogPosting',
              '@id': `${PRODUCTION_DOMAIN}${canonicalPath}#post`,
              headline: article.title,
              description: article.excerpt,
              image: article.coverImage || DEFAULT_OG_IMAGE,
              datePublished: '2026-02-12T00:00:00Z',
              dateModified: '2026-02-24T00:00:00Z',
              author: {
                '@type': 'Person',
                name: article.author.name,
                jobTitle: article.author.role,
              },
              publisher: {
                '@type': 'Organization',
                name: 'NeoMinds TechHub',
                url: PRODUCTION_DOMAIN,
                logo: {
                  '@type': 'ImageObject',
                  url: `${PRODUCTION_DOMAIN}/favicon.svg`,
                },
              },
              mainEntityOfPage: `${PRODUCTION_DOMAIN}${canonicalPath}`,
            },
            {
              '@type': 'BreadcrumbList',
              '@id': `${PRODUCTION_DOMAIN}${canonicalPath}#breadcrumb`,
              itemListElement: breadcrumbs.map((b, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: b.name,
                item: b.url,
              })),
            },
          ],
        },
      };
    }
  }

  // ─────────────────────────────────────────────────────────────
  // 4. Dynamic Service Pages (Full AEO Semantic Triples & FAQ Schema)
  // ─────────────────────────────────────────────────────────────
  if (page in SERVICE_METADATA_MAP) {
    const serviceMeta = SERVICE_METADATA_MAP[page];
    const serviceDetailed = SERVICES_DATA[page];
    const canonicalPath = `/services/${page}`;

    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', url: PRODUCTION_DOMAIN },
      { name: 'Services', url: `${PRODUCTION_DOMAIN}/services` },
      { name: serviceMeta.title, url: `${PRODUCTION_DOMAIN}${canonicalPath}` },
    ];

    const graphElements: any[] = [
      {
        '@type': 'Service',
        '@id': `${PRODUCTION_DOMAIN}${canonicalPath}#service`,
        name: `${serviceMeta.title} Services`,
        serviceType: serviceMeta.title,
        description: serviceMeta.description,
        provider: {
          '@type': 'Organization',
          '@id': 'https://neomindstechhub.co/#organization',
          name: 'NeoMinds TechHub',
          url: PRODUCTION_DOMAIN,
          logo: `${PRODUCTION_DOMAIN}/favicon.svg`,
        },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'Poland' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'United Arab Emirates' },
        ],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PRODUCTION_DOMAIN}${canonicalPath}#breadcrumb`,
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: b.url,
        })),
      },
    ];

    // Inject FAQPage Schema for AI citation and Google Rich Snippets
    if (serviceDetailed && serviceDetailed.faqs && serviceDetailed.faqs.length > 0) {
      graphElements.push({
        '@type': 'FAQPage',
        '@id': `${PRODUCTION_DOMAIN}${canonicalPath}#faq`,
        mainEntity: serviceDetailed.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    return {
      title: `${serviceMeta.title} Services | NeoMinds TechHub`,
      description: serviceMeta.description,
      keywords: serviceMeta.keywords,
      canonicalPath,
      ogType: 'website',
      ogImage: serviceMeta.heroImage || DEFAULT_OG_IMAGE,
      schema: {
        '@context': 'https://schema.org',
        '@graph': graphElements,
      },
    };
  }

  // ─────────────────────────────────────────────────────────────
  // 5. Core Corporate & Content Hub Pages
  // ─────────────────────────────────────────────────────────────
  switch (page) {
    case 'services':
      return {
        title: 'Enterprise Software & AI Services | NeoMinds TechHub',
        description:
          'Explore 16 production software engineering services. Full-stack web, native mobile, cloud microservices, autonomous AI systems, and legacy modernization.',
        keywords: [
          'software development services',
          'AI engineering services',
          'custom web development',
          'mobile app development',
          'cloud software services',
          'legacy modernisation',
          'enterprise software partner',
        ],
        canonicalPath: '/services',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'NeoMinds TechHub Software & AI Engineering Services',
          url: `${PRODUCTION_DOMAIN}/services`,
          description: 'Comprehensive directory of enterprise software development, autonomous AI systems, cloud platforms, and digital product engineering services by NeoMinds TechHub.',
        },
      };

    case 'industries':
      return {
        title: 'Industries We Serve: Health, FinTech & Retail | NeoMinds TechHub',
        description:
          'Domain-engineered software solutions for Healthcare (HIPAA), Financial Services, High-Volume E-Commerce, Education, and Enterprise Logistics worldwide.',
        keywords: [
          'healthcare software development HIPAA',
          'fintech software development',
          'retail ecommerce engineering',
          'real estate software platforms',
          'edtech learning platforms',
          'enterprise software solutions',
        ],
        canonicalPath: '/industries',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Industries Served by NeoMinds TechHub',
          url: `${PRODUCTION_DOMAIN}/industries`,
        },
      };

    case 'technology':
      return {
        title: 'Enterprise Technology & Architecture Stack | NeoMinds TechHub',
        description:
          'Explore NeoMinds TechHub 7 core engineering technologies: Web Development, Artificial Intelligence, Machine Learning, Data Management, Data Analytics, Automations, and Product Engineering.',
        keywords: [
          'technology stack',
          'AI tech stack',
          'machine learning tools',
          'data management architectures',
          'data analytics frameworks',
          'enterprise automations',
          'product engineering',
        ],
        canonicalPath: '/technology',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'NeoMinds TechHub Technology & Architectural Stack',
          url: `${PRODUCTION_DOMAIN}/technology`,
          description: 'Core engineering technologies and frameworks utilized by NeoMinds TechHub, including React, Next.js, TypeScript, Python, AWS, and modern generative AI models.',
        },
      };

    case 'portfolio':
      return {
        title: 'Client Case Studies & Verified Results | NeoMinds TechHub',
        description:
          'Explore 30 verified production case studies spanning trading platforms, HIPAA telehealth applications, AI automations, and cloud modernization.',
        keywords: [
          'software engineering case studies',
          'AI development portfolio',
          'custom software client results',
          'healthcare app case study',
          'fintech platform case study',
          'verified client projects',
        ],
        canonicalPath: '/case-studies',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'NeoMinds TechHub Verified Case Studies and Client Work',
          url: `${PRODUCTION_DOMAIN}/case-studies`,
        },
      };

    case 'insights':
      return {
        title: 'Technology Insights & Whitepapers | NeoMinds TechHub',
        description:
          'Authoritative technical research, architecture blueprints, and engineering analyses on multi-agent AI, zero-trust security, and cloud scalability.',
        keywords: [
          'technology insights',
          'AI whitepapers',
          'software architecture blueprints',
          'enterprise engineering research',
          'cloud migration strategies',
        ],
        canonicalPath: '/insights',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'blog':
      return {
        title: 'Engineering Blog: Technical Deep Dives | NeoMinds TechHub',
        description:
          'Peer-reviewed technical articles by NeoMinds TechHub software architects on RAG pipeline benchmarking, zero-downtime migrations, and distributed systems.',
        keywords: [
          'engineering blog',
          'software development articles',
          'technical deep dives',
          'RAG pipeline engineering',
          'Nextjs performance optimization',
        ],
        canonicalPath: '/blog',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'about-us':
      return {
        title: 'About NeoMinds TechHub: Global Software Engineering',
        description:
          'Learn about NeoMinds TechHub. Our engineering culture, zero-mock production standards, 100% IP ownership handover, and global delivery squads.',
        keywords: [
          'about NeoMinds TechHub',
          'software engineering company profile',
          'enterprise software team',
          'global engineering partner',
          'software development values',
        ],
        canonicalPath: '/about-us',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About NeoMinds TechHub',
          url: `${PRODUCTION_DOMAIN}/about-us`,
        },
      };

    case 'leaders':
      return {
        title: 'Leadership Team & Principal Architects | NeoMinds TechHub',
        description:
          'Meet the executive leadership and principal software architects driving NeoMinds TechHub enterprise engineering for clients across the US, UK, and EU.',
        keywords: [
          'NeoMinds TechHub leadership',
          'software engineering executives',
          'principal AI architects',
          'technology leadership team',
        ],
        canonicalPath: '/leaders',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'careers':
      return {
        title: 'Careers in Software & AI Engineering | NeoMinds TechHub Jobs',
        description:
          'Join NeoMinds TechHub. Open roles for Senior Full-Stack Engineers, AI/ML Architects, Cloud DevOps Leads, and Product Managers with high ownership.',
        keywords: [
          'software engineering careers',
          'AI engineer jobs',
          'full stack developer hiring',
          'cloud DevOps jobs',
          'NeoMinds TechHub careers',
        ],
        canonicalPath: '/careers',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'certification':
      return {
        title: 'Security Certifications: SOC 2 & ISO 27001 | NeoMinds TechHub',
        description:
          'Review NeoMinds TechHub security controls, ISO/IEC 27001 accreditation, SOC 2 Type II compliance, and HIPAA safeguards protecting enterprise client IP.',
        keywords: [
          'software security compliance',
          'SOC 2 Type II software development',
          'ISO 27001 certified engineering',
          'HIPAA compliant software company',
          'enterprise data security standards',
        ],
        canonicalPath: '/certification',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'contacts':
      return {
        title: 'Contact NeoMinds TechHub: Start Your Project Consultation',
        description:
          'Schedule a technical consultation with NeoMinds TechHub engineering architects. Receive technical feasibility assessment, milestone roadmap, and NDA-backed proposal.',
        keywords: [
          'contact software development company',
          'software consultation',
          'request RFP software project',
          'hire AI engineering team',
          'hire dedicated developers',
        ],
        canonicalPath: '/contacts',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact NeoMinds TechHub',
          url: `${PRODUCTION_DOMAIN}/contacts`,
        },
      };

    case 'company-updates':
      return {
        title: 'Company Updates & Global Milestones | NeoMinds TechHub',
        description:
          'Official announcements, international expansion news, partnership milestones, and engineering releases from NeoMinds TechHub.',
        keywords: ['NeoMinds TechHub news', 'company milestones', 'software announcements', 'press releases'],
        canonicalPath: '/company-updates',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'privacy-policy':
      return {
        title: 'Privacy Policy | NeoMinds TechHub Data Protection Standards',
        description:
          'NeoMinds TechHub enterprise privacy policy, detailing data protection principles, GDPR compliance, and client confidential information security.',
        keywords: ['privacy policy', 'GDPR compliance', 'data protection standards'],
        canonicalPath: '/privacy-policy',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'cookie-policy':
      return {
        title: 'Cookie Policy | NeoMinds TechHub Compliance Standards',
        description:
          'Information regarding cookie utilization, functional preferences, and telemetry practices on the NeoMinds TechHub digital platform.',
        keywords: ['cookie policy', 'tracking preferences', 'privacy controls'],
        canonicalPath: '/cookie-policy',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'security-policy':
      return {
        title: 'Security & Compliance Standards | NeoMinds TechHub SIRT',
        description:
          'SOC 2 Type II, ISO 27001, and HIPAA compliance specifications. Security Incident Response Team contact and vulnerability disclosure guidelines.',
        keywords: ['security policy', 'SIRT vulnerability disclosure', 'SOC 2 ISO compliance'],
        canonicalPath: '/security-policy',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    // ─────────────────────────────────────────────────────────────
    // Homepage Default
    // ─────────────────────────────────────────────────────────────
    case 'home':
    default:
      return {
        title: 'NeoMinds TechHub: AI-Powered Software Development Company',
        description:
          'NeoMinds TechHub builds enterprise web, mobile, cloud, and AI software. We engineer custom SaaS, autonomous AI agents, and resilient legacy modernization.',
        keywords: [
          'AI software development company',
          'custom software development',
          'enterprise AI integration',
          'autonomous AI agents',
          'SaaS development company',
          'mobile app development',
          'cloud software engineering',
          'legacy modernisation',
          'healthcare HIPAA software',
          'analytics dashboard development',
        ],
        canonicalPath: '/',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };
  }
};

/**
 * Dynamically updates document metadata, Open Graph, Twitter cards, GEO tags, and Schema.org JSON-LD.
 */
export const updateHeadMetadata = (page: PageType | '404', articleId?: string | null): void => {
  if (typeof document === 'undefined') return;

  const meta = getPageMetadata(page, articleId);
  const fullCanonicalUrl = `${PRODUCTION_DOMAIN}${meta.canonicalPath === '/' ? '' : meta.canonicalPath}`;

  // 1. Document Title
  document.title = meta.title;

  // 2. Helper for meta name tags
  const setMetaName = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  // 3. Helper for Open Graph meta property tags
  const setMetaProperty = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  // 4. Meta Description & Keywords & Robots
  setMetaName('description', meta.description);
  setMetaName('keywords', meta.keywords.join(', '));
  setMetaName('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMetaName('author', 'NeoMinds TechHub');

  // 5. Geographic & Generative Engine Optimization (GEO) Tags
  setMetaName('geo.region', meta.geoRegion || DEFAULT_GEO_REGION);
  setMetaName('geo.placename', meta.geoPlacename || DEFAULT_GEO_PLACENAME);
  setMetaName('geo.position', DEFAULT_GEO_POSITION);
  setMetaName('ICBM', DEFAULT_ICBM);

  // 6. Canonical Link
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', fullCanonicalUrl);

  // 7. Open Graph Tags
  setMetaProperty('og:title', meta.title);
  setMetaProperty('og:description', meta.description);
  setMetaProperty('og:url', fullCanonicalUrl);
  setMetaProperty('og:type', meta.ogType || 'website');
  setMetaProperty('og:site_name', 'NeoMinds TechHub');
  setMetaProperty('og:locale', 'en_US');
  if (meta.ogImage) {
    setMetaProperty('og:image', meta.ogImage);
    setMetaProperty('og:image:width', '1200');
    setMetaProperty('og:image:height', '630');
    setMetaProperty('og:image:alt', `${meta.title} - NeoMinds TechHub`);
  }

  // 8. Twitter Card Tags
  setMetaName('twitter:card', 'summary_large_image');
  setMetaName('twitter:site', '@neomindstechhub');
  setMetaName('twitter:creator', '@neomindstechhub');
  setMetaName('twitter:title', meta.title);
  setMetaName('twitter:description', meta.description);
  setMetaName('twitter:url', fullCanonicalUrl);
  if (meta.ogImage) {
    setMetaName('twitter:image', meta.ogImage);
  }

  // 9. Dynamic JSON-LD Structured Data
  const DYNAMIC_SCHEMA_ID = 'neominds-dynamic-schema';
  let dynamicScript = document.getElementById(DYNAMIC_SCHEMA_ID) as HTMLScriptElement | null;

  if (meta.schema) {
    if (!dynamicScript) {
      dynamicScript = document.createElement('script');
      dynamicScript.id = DYNAMIC_SCHEMA_ID;
      dynamicScript.type = 'application/ld+json';
      document.head.appendChild(dynamicScript);
    }
    dynamicScript.textContent = JSON.stringify(meta.schema, null, 2);
  } else if (dynamicScript) {
    dynamicScript.remove();
  }
};
