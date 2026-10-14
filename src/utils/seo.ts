import { PageType } from '../components/Header';
import { SERVICE_METADATA_MAP } from '../data/serviceMetadata';
import { BLOG_POSTS_DATA } from '../data/blogData';

export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any>;
}

const PRODUCTION_DOMAIN = 'https://neominds.io';
const DEFAULT_OG_IMAGE = 'https://neominds.io/images/hero-ribbon.jpg';

export const getPageMetadata = (page: PageType | '404', articleId?: string | null): PageMeta => {
  // 1. 404 Not Found
  if (page === '404') {
    return {
      title: 'Page Not Found (404) | Neominds',
      description: 'The page you requested could not be found. Explore Neominds enterprise engineering and AI solutions.',
      canonicalPath: '/404',
      ogType: 'website',
      ogImage: DEFAULT_OG_IMAGE,
    };
  }

  // 2. Blog Post Detail Page
  if (page === 'blog' && articleId) {
    const article = BLOG_POSTS_DATA.find((p) => p.id === articleId || p.slug === articleId);
    if (article) {
      return {
        title: `${article.title} | Neominds Technical Blog`,
        description: article.excerpt,
        canonicalPath: `/blog/${article.slug}`,
        ogType: 'article',
        ogImage: article.coverImage || DEFAULT_OG_IMAGE,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.excerpt,
          image: article.coverImage || DEFAULT_OG_IMAGE,
          datePublished: '2026-02-12',
          dateModified: '2026-02-24',
          author: {
            '@type': 'Person',
            name: article.author.name,
            jobTitle: article.author.role,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Neominds',
            url: PRODUCTION_DOMAIN,
            logo: {
              '@type': 'ImageObject',
              url: `${PRODUCTION_DOMAIN}/favicon.svg`,
            },
          },
        },
      };
    }
  }

  // 3. Dynamic Service Pages
  if (page in SERVICE_METADATA_MAP) {
    const service = SERVICE_METADATA_MAP[page];
    const canonicalPath = `/services/${page}`;
    return {
      title: `${service.title} Services | Neominds Enterprise Engineering`,
      description: service.description,
      canonicalPath,
      ogType: 'website',
      ogImage: service.heroImage || DEFAULT_OG_IMAGE,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            provider: {
              '@type': 'Organization',
              name: 'Neominds',
              url: PRODUCTION_DOMAIN,
              logo: `${PRODUCTION_DOMAIN}/favicon.svg`,
            },
            areaServed: ['US', 'EU', 'Global'],
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: PRODUCTION_DOMAIN,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: `${PRODUCTION_DOMAIN}/#services`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: service.title,
                item: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              },
            ],
          },
        ],
      },
    };
  }

  // 4. Core Corporate & Content Hub Pages
  switch (page) {
    case 'about-us':
      return {
        title: 'About Neominds | Enterprise Engineering Execution & Innovation',
        description:
          'Discover Neominds: our engineering heritage, executive leadership, global delivery hubs, and mission to engineer resilient enterprise software.',
        canonicalPath: '/about-us',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'contacts':
      return {
        title: 'Contact Neominds | Request Technical Consultation & RFP',
        description:
          'Connect with Neominds principal architects. Submit your project requirements for custom software, cloud modernization, or enterprise AI.',
        canonicalPath: '/contacts',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'portfolio':
      return {
        title: 'Case Studies & Client Portfolio | Neominds Software Engineering',
        description:
          'Explore verified case studies spanning fintech trading terminals, automotive data pipelines, HIPAA-compliant medical coding, and IoT logistics.',
        canonicalPath: '/portfolio',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'insights':
      return {
        title: 'Technology Insights & Strategic Whitepapers | Neominds',
        description:
          'In-depth technical papers, enterprise research, and architectural blueprints on agentic AI pipelines, distributed ledgers, and cloud security.',
        canonicalPath: '/insights',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'blog':
      return {
        title: 'Engineering Blog & Technical Deep Dives | Neominds',
        description:
          'Read peer-reviewed engineering articles by Neominds CTOs and architects on zero-downtime migrations, RAG evaluation, and cloud architectures.',
        canonicalPath: '/blog',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'company-updates':
      return {
        title: 'Company Updates & Global Expansion Milestones | Neominds',
        description:
          'Official announcements, conference keynotes, engineering milestones, and partnership news from Neominds.',
        canonicalPath: '/company-updates',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'privacy-policy':
      return {
        title: 'Privacy Policy | Neominds Data Protection Standards',
        description:
          'Neominds enterprise privacy policy, detailing data protection principles, GDPR compliance, and client confidential information security.',
        canonicalPath: '/privacy-policy',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'cookie-policy':
      return {
        title: 'Cookie Policy | Neominds Compliance Standards',
        description:
          'Information regarding cookie utilization, functional preferences, and telemetry practices on the Neominds digital platform.',
        canonicalPath: '/cookie-policy',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'security-policy':
      return {
        title: 'Security & Compliance Standards | Neominds SIRT',
        description:
          'SOC 2 Type II, ISO 27001, and HIPAA compliance specifications. Security Incident Response Team contact and vulnerability disclosure guidelines.',
        canonicalPath: '/security-policy',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    // Strategic Service Pages
    case 'product-discovery':
      return {
        title: 'Product Discovery & UX Strategy Services | Neominds',
        description:
          'Transform ambiguous enterprise requirements into validated technical blueprints, interactive prototypes, and risk-mitigated delivery roadmaps.',
        canonicalPath: '/product-discovery',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'product-engineering':
      return {
        title: 'Product Engineering Services | Neominds Enterprise Solutions',
        description:
          'Turnkey software engineering squads delivering resilient cloud architectures, clean domain-driven codebases, and continuous automated testing.',
        canonicalPath: '/product-engineering',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'business-analysis':
      return {
        title: 'Business Analysis & Requirements Engineering | Neominds',
        description:
          'Rigorous functional decomposition, compliance alignment, and technical specification mapping for complex enterprise transformations.',
        canonicalPath: '/business-analysis',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'it-consulting':
      return {
        title: 'IT Consulting & Cloud Architecture Strategy | Neominds',
        description:
          'Strategic architectural audits, legacy modernization assessments, and infrastructure cost optimization from senior technology consultants.',
        canonicalPath: '/it-consulting',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    case 'ui-ux-design':
      return {
        title: 'UI/UX Design & Design Systems | Neominds',
        description:
          'Human-centered enterprise interfaces, scalable Figma design systems, and accessible interactive workflows engineered for maximum productivity.',
        canonicalPath: '/ui-ux-design',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };

    // Homepage Default
    case 'home':
    default:
      return {
        title: 'Neominds | Custom Software Development & AI Engineering Company',
        description:
          'Neominds is a custom software development company delivering full-spectrum product engineering, AI solutions, and cloud architectures.',
        canonicalPath: '/',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
      };
  }
};

/**
 * Dynamically updates document metadata, Open Graph, Twitter cards, and Schema.org JSON-LD.
 */
export const updateHeadMetadata = (page: PageType | '404', articleId?: string | null): void => {
  if (typeof document === 'undefined') return;

  const meta = getPageMetadata(page, articleId);
  const fullCanonicalUrl = `${PRODUCTION_DOMAIN}${meta.canonicalPath === '/' ? '' : meta.canonicalPath}`;

  // 1. Document Title
  document.title = meta.title;

  // 2. Meta Description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', meta.description);

  // 3. Canonical Link
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', fullCanonicalUrl);

  // 4. Open Graph Tags
  const updateOrCreateMeta = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  updateOrCreateMeta('og:title', meta.title);
  updateOrCreateMeta('og:description', meta.description);
  updateOrCreateMeta('og:url', fullCanonicalUrl);
  updateOrCreateMeta('og:type', meta.ogType || 'website');
  updateOrCreateMeta('og:site_name', 'Neominds');
  if (meta.ogImage) {
    updateOrCreateMeta('og:image', meta.ogImage);
  }

  // 5. Twitter Card Tags
  const updateOrCreateTwitter = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  updateOrCreateTwitter('twitter:card', 'summary_large_image');
  updateOrCreateTwitter('twitter:title', meta.title);
  updateOrCreateTwitter('twitter:description', meta.description);
  updateOrCreateTwitter('twitter:url', fullCanonicalUrl);
  if (meta.ogImage) {
    updateOrCreateTwitter('twitter:image', meta.ogImage);
  }

  // 6. Dynamic JSON-LD Structured Data
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
