import { ServiceOutcome } from '../types/service';

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

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Core Development' | 'AI & Intelligence' | 'Specialist' | 'Core Engineering' | 'Cloud & Operations';
  heroBadge: string;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroDescription: string;
  heroImage?: string;
  heroImageCaption?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  trustPoints?: string[];
  overview?: {
    statement: string;
    paragraphs: string[];
    keyTakeaway: string;
  };
  outcomes?: ServiceOutcome[];
  ctaHeadline?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  shortDescription?: string;
  targetAudience?: {
    heading?: string;
    description?: string;
    profiles: { role: string; situation: string }[];
  };
  mainProblemSolved?: {
    problem: string;
    solution: string;
    result: string;
  };
  keyBenefits?: {
    title: string;
    description: string;
    metric?: string;
    metricLabel?: string;
  }[];
  whatsIncluded?: {
    title: string;
    description: string;
    items?: string[];
  }[];
  timeline?: {
    totalDuration: string;
    sprintCadence?: string;
    phases: { phase: string; duration: string; details: string }[];
  };
  whyChooseThisService?: {
    title: string;
    reasons: { point: string; detail: string }[];
  };
  architectureMap?: {
    layer: string;
    title: string;
    desc: string;
    color: string;
  }[];
  metrics: { value: string; label: string }[];
  capabilities: ServiceCapability[];
  processSteps: ServiceProcessStep[];
  deliverables: ServiceDeliverable[];
  techStack: { category: string; items: string[] }[];
  caseStudyQuote: {
    quote: string;
    author: string;
    role: string;
    company: string;
    metric: string;
  };
  faqs: ServiceFaq[];
}


export const SERVICES_DATA: Record<string, ServiceData> = {

  // ─────────────────────────────────────────────────────────────
  // 1. WEB DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  'web-development': {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Fast, secure websites and web apps that scale with your business',
    category: 'Core Development',
    heroBadge: 'Web Development',
    heroHeadline: 'Websites and Web Apps',
    heroHeadlineHighlight: 'Built to Perform',
    heroDescription:
      'We build web applications, portals, and marketing sites that load fast, hold up under traffic, and give your team full ownership. No bloated frameworks that slow you down three months later.',
    heroImage: '/services/web-development.png',
    heroImageCaption: 'Web application architecture · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'View Our Work',
    trustPoints: [
      'Sub-second page load times',
      'Responsive across all devices',
      'SEO-ready from day one',
      'Full source code handover',
    ],
    overview: {
      statement: 'Your website is often the first place a customer or partner forms an opinion about your business. It has to work properly: fast, clear, and reliable under heavy load.',
      paragraphs: [
        'We plan, design, and build web applications that fit how your business actually operates. Whether you need a customer-facing portal, an internal tool, or a high-traffic public site, we start from your requirements and build from there.',
        'Our web projects use React, Next.js, TypeScript, and Node.js: proven production technologies that your in-house engineers can readily understand, audit, and maintain.',
      ],
      keyTakeaway: 'Reliable web software built by engineers who care about long-term quality, not just getting something live.',
    },
    mainProblemSolved: {
      problem: 'Your current site is slow, hard to update, or built on something your team cannot easily maintain.',
      solution: 'We rebuild or build fresh with modern tools: clean architecture, explicit documentation, and a codebase your engineers can actively ship in.',
      result: 'A fast, reliable web product your team owns completely, with no dependency on the agency that built it.',
    },
    targetAudience: {
      profiles: [
        { role: 'Product Manager', situation: 'Needs a new web app shipped quickly with measurable performance targets' },
        { role: 'CTO / Tech Lead', situation: 'Wants a replacement for a legacy web system that has become too slow to change' },
        { role: 'Business Owner', situation: 'Wants a professional site that generates leads and does not require constant agency involvement' },
      ],
    },
    metrics: [
      { value: '<1s', label: 'Target Page Load Time' },
      { value: '100', label: 'Lighthouse Score Target' },
      { value: '100%', label: 'Code Ownership Transferred' },
    ],
    capabilities: [
      {
        title: 'Web Application Development',
        description: 'Custom web apps built around your specific business workflows rather than adapted from generic templates. We cover frontend, backend, APIs, and database architecture.',
        tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      },
      {
        title: 'CMS and Content Sites',
        description: 'Headless CMS setups that let your marketing team update content without filing a ticket. We connect Sanity, Strapi, or Contentful to your frontend.',
        tags: ['Sanity', 'Strapi', 'Headless CMS', 'Static Generation'],
      },
      {
        title: 'Web Portals and Dashboards',
        description: 'Role-based portals for customers, partners, or internal staff. Secure login, data views, and actions specific to each user type.',
        tags: ['Auth systems', 'Role-based access', 'API integrations'],
      },
      {
        title: 'Performance and SEO Engineering',
        description: 'We build with Core Web Vitals in mind from day one, never as an afterthought. Schema markup, fast images, and proper server-side rendering included.',
        tags: ['Core Web Vitals', 'Schema markup', 'SSR/SSG', 'Image optimisation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery and scoping',
        description: 'We map your requirements, user flows, and technical constraints before writing any code.',
        deliverables: ['Scope document', 'Technical requirements', 'Sitemap / IA diagram'],
      },
      {
        step: '02',
        title: 'Design and architecture',
        description: 'UI designs and technical architecture decisions are locked in before development starts.',
        deliverables: ['Wireframes', 'Component library', 'Architecture diagram'],
      },
      {
        step: '03',
        title: 'Development and integration',
        description: 'Two-week sprints with staging demos. You see progress every two weeks, not at the end.',
        deliverables: ['Working features per sprint', 'API integrations', 'Test coverage'],
      },
      {
        step: '04',
        title: 'Testing and launch',
        description: 'Cross-browser testing, performance benchmarks, and a clean deployment to your hosting.',
        deliverables: ['QA report', 'Performance audit', 'Launch runbook'],
      },
    ],
    deliverables: [
      { title: 'Production-ready web app', category: 'Code', description: 'Fully tested, documented codebase', format: 'GitHub repository' },
      { title: 'CMS setup', category: 'Content', description: 'Admin panel for content updates', format: 'CMS environment' },
      { title: 'Performance report', category: 'Quality', description: 'Lighthouse and Core Web Vitals audit', format: 'PDF report' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'Go'] },
      { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { category: 'CMS', items: ['Sanity', 'Strapi', 'Contentful'] },
      { category: 'Hosting', items: ['Vercel', 'AWS', 'Google Cloud'] },
    ],
    caseStudyQuote: {
      quote: 'The web app went from a slow, confusing experience to something our customers actually praise. The team understood our product, not just the technology.',
      author: 'Product Lead',
      role: 'Product Manager',
      company: 'Enterprise Client',
      metric: 'Response time cut by 60%',
    },
    faqs: [
      { question: 'What does web development include?', answer: 'It includes planning, UI/UX design, frontend and backend development, database setup, integrations with third-party services, testing, and deployment. You get full source code.' },
      { question: 'Who is this for?', answer: 'Businesses that need a professional web presence, internal tools, or customer-facing web apps across early-stage startups and enterprise organizations.' },
      { question: 'How long does it take?', answer: 'A simple site or app takes 4–8 weeks. A complex web application with custom logic and integrations typically takes 10–16 weeks.' },
      { question: 'Can you integrate with systems we already use?', answer: 'Yes. We connect to payment gateways, CRMs, ERPs, analytics platforms, and any service that provides an API.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. APP DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  'app-development': {
    id: 'app-development',
    slug: 'app-development',
    title: 'App Development',
    tagline: 'iOS and Android apps your users will actually keep',
    category: 'Core Development',
    heroBadge: 'Mobile App Development',
    heroHeadline: 'Mobile Apps Built for',
    heroHeadlineHighlight: 'Real People',
    heroDescription:
      'We build iOS and Android applications that are smooth, reliable, and purpose-built for your users. We avoid reskinned templates and build native experiences shaped around real human workflows.',
    heroImage: '/services/app-development.png',
    heroImageCaption: 'Mobile app development · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See Our Apps',
    trustPoints: [
      'Native iOS and Android experience',
      'Offline-first where it matters',
      'App Store and Play Store ready',
      'Full IP transfer on launch',
    ],
    overview: {
      statement: 'Most apps fail because they are built for a demo, not for actual daily use. We build with the opposite priority.',
      paragraphs: [
        'Every app we build goes through real-world performance benchmarking under throttling, low memory, and edge-case battery states.',
        'We work in Swift, Kotlin, and React Native. The choice depends on your audience, your timeline, and what will actually serve your users best. We tell you which and why before we start.',
      ],
      keyTakeaway: 'Apps that ship on time, hold up in production, and get used daily and deliver sustained retention.',
    },
    mainProblemSolved: {
      problem: 'Your app crashes, loads slowly, or users churn because the experience is frustrating.',
      solution: 'We rebuild or build fresh with deterministic architecture: offline synchronization, optimized rendering cycles, and automated regression tests.',
      result: 'A stable, performant app that earns good reviews and keeps users coming back.',
    },
    targetAudience: {
      profiles: [
        { role: 'Founder / Product Owner', situation: 'Has an idea and needs a mobile product built properly from scratch' },
        { role: 'CTO', situation: 'Needs to replace an existing app that has become too expensive to maintain' },
        { role: 'Enterprise Team', situation: 'Needs a mobile tool for field staff, customers, or partners' },
      ],
    },
    metrics: [
      { value: '60fps', label: 'Smooth Rendering Standard' },
      { value: '<100ms', label: 'Cold Launch Target' },
      { value: '100%', label: 'Source Code Ownership' },
    ],
    capabilities: [
      {
        title: 'Native iOS Development',
        description: 'Swift-based iOS apps built to Apple platform guidelines, supporting the latest hardware features and OS versions.',
        tags: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'],
      },
      {
        title: 'Native Android Development',
        description: 'Kotlin apps optimised for the Android ecosystem across thousands of screen geometries, chipsets, and vendor OS forks.',
        tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'WorkManager'],
      },
      {
        title: 'Offline and Sync Architecture',
        description: 'We build offline-first where your users need it: local SQLite encryption, deterministic background synchronization, and automated conflict resolution.',
        tags: ['SQLite', 'WatermelonDB', 'Background sync', 'CRDT'],
      },
      {
        title: 'App Store Launch and CI/CD',
        description: 'Automated build pipelines that compile, test, and submit to TestFlight and Play Console on every commit.',
        tags: ['Fastlane', 'GitHub Actions', 'TestFlight', 'Play Console'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'User research and scoping',
        description: 'We map user journeys, prioritise features, and define what the MVP needs to do well.',
        deliverables: ['User flow diagrams', 'Feature priority list', 'Technical scope'],
      },
      {
        step: '02',
        title: 'UX design and prototyping',
        description: 'High-fidelity Figma prototypes tested before any code is written.',
        deliverables: ['Wireframes', 'UI design', 'Interactive prototype'],
      },
      {
        step: '03',
        title: 'Development and testing',
        description: 'Sprints with working builds on physical devices every two weeks. You install and use what we build.',
        deliverables: ['TestFlight / Play builds', 'Test suite', 'API integrations'],
      },
      {
        step: '04',
        title: 'Launch and post-launch',
        description: 'App Store submission, production monitoring, and a 30-day hypercare window after launch.',
        deliverables: ['App Store listing', 'Crash monitoring', 'Handover documentation'],
      },
    ],
    deliverables: [
      { title: 'Published mobile apps', category: 'Apps', description: 'iOS and Android builds submitted and live', format: 'App Store / Play Store' },
      { title: 'Source code', category: 'Code', description: 'Full Xcode and Android Studio projects', format: 'GitHub repository' },
      { title: 'Test suite', category: 'Quality', description: 'Unit and integration tests', format: 'XCTest / JUnit' },
    ],
    techStack: [
      { category: 'iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'] },
      { category: 'Android', items: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'Firebase'] },
      { category: 'Database', items: ['PostgreSQL', 'Firebase Firestore', 'SQLite'] },
      { category: 'CI/CD', items: ['Fastlane', 'GitHub Actions', 'Bitrise'] },
    ],
    caseStudyQuote: {
      quote: 'Users stopped complaining the day we launched. The app actually worked. That had never happened before with our previous vendors.',
      author: 'Head of Product',
      role: 'VP Product',
      company: 'Healthcare Client',
      metric: '4.7 App Store rating at launch',
    },
    faqs: [
      { question: 'What does app development include?', answer: 'Discovery, UX/UI design, iOS and/or Android development, API integration, QA testing, App Store submission, and post-launch support.' },
      { question: 'Who is this for?', answer: 'Founders building their first product, companies replacing an outdated app, and enterprises that need mobile tools for their teams or customers.' },
      { question: 'How long does it take?', answer: 'A focused MVP typically takes 8–12 weeks. A full-featured app with complex integrations usually takes 14–20 weeks.' },
      { question: 'Can it work with our existing backend?', answer: 'Yes. We connect to your existing API or build one alongside the app, depending on what you already have.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. CROSS-PLATFORM APP DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  'cross-platform-app-development': {
    id: 'cross-platform-app-development',
    slug: 'cross-platform-app-development',
    title: 'Cross-Platform App Development',
    tagline: 'One codebase. One codebase across iOS, Android, and web platforms',
    category: 'Core Development',
    heroBadge: 'Cross-Platform Development',
    heroHeadline: 'Build Once,',
    heroHeadlineHighlight: 'Deploy Everywhere',
    heroDescription:
      'We build cross-platform apps using React Native and Flutter that run on iOS, Android, and sometimes web: from a single shared codebase. You launch faster and maintain less.',
    heroImage: '/services/cross-platform-app-development.png',
    heroImageCaption: 'Cross-platform app architecture · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'View Cross-Platform Work',
    trustPoints: [
      'Single codebase for iOS and Android',
      'Near-native performance',
      'Faster time to market',
      'Lower ongoing maintenance cost',
    ],
    overview: {
      statement: 'Building separate iOS and Android apps doubles your cost and your maintenance burden. Cross-platform development solves that without sacrificing quality.',
      paragraphs: [
        'React Native and Flutter have matured significantly. The gap between cross-platform and native performance is small for most app types: and the cost savings are real.',
        'We are honest about the trade-offs. If your app needs deep platform integration or extreme performance, we say so and recommend native. If cross-platform fits, it saves you time and money without compromise.',
      ],
      keyTakeaway: 'Faster delivery, lower cost, and quality that holds up: when cross-platform is the right tool for your product.',
    },
    mainProblemSolved: {
      problem: 'Maintaining two separate native codebases doubles your engineering cost and slows down every feature release.',
      solution: 'A shared cross-platform codebase with platform-specific optimisations where they matter.',
      result: 'One team, one codebase, two fully working apps: shipped and updated at the same time.',
    },
    targetAudience: {
      profiles: [
        { role: 'Startup Founder', situation: 'Needs both iOS and Android but cannot afford two separate native teams' },
        { role: 'Product Manager', situation: 'Wants to ship faster and keep the apps in sync feature-for-feature' },
        { role: 'Business Owner', situation: 'Has a web product and wants to extend it to mobile without rebuilding everything' },
      ],
    },
    metrics: [
      { value: '60%', label: 'Code Shared Between Platforms' },
      { value: '2x', label: 'Faster Release Cycles' },
      { value: '100%', label: 'IP Transferred to You' },
    ],
    capabilities: [
      {
        title: 'React Native Development',
        description: 'JavaScript-based apps that call native modules where needed, giving you real platform behaviour with a shared codebase.',
        tags: ['React Native', 'TypeScript', 'Expo', 'Native modules'],
      },
      {
        title: 'Flutter Development',
        description: 'Dart-based apps with a single rendering engine that produces consistent, smooth UIs across iOS and Android.',
        tags: ['Flutter', 'Dart', 'Material 3', 'Cupertino widgets'],
      },
      {
        title: 'Shared Backend and APIs',
        description: 'We build the backend alongside the app so both platforms hit the same endpoints and get the same data.',
        tags: ['REST API', 'GraphQL', 'Node.js', 'Firebase'],
      },
      {
        title: 'Cross-Platform CI/CD',
        description: 'Automated pipelines that build, test, and submit both apps simultaneously on every commit.',
        tags: ['GitHub Actions', 'Fastlane', 'EAS Build', 'Codemagic'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Platform assessment',
        description: 'We evaluate whether cross-platform is the right choice for your specific requirements before committing to an approach.',
        deliverables: ['Technical recommendation', 'Platform comparison', 'Risk assessment'],
      },
      {
        step: '02',
        title: 'Shared UX design',
        description: 'One design system that works naturally on both iOS and Android: not a compromise between the two.',
        deliverables: ['UI kit', 'Platform adaptations', 'Prototype'],
      },
      {
        step: '03',
        title: 'Development and device testing',
        description: 'Development on real iOS and Android devices throughout: not just simulators.',
        deliverables: ['Working builds', 'Device test matrix', 'Performance benchmarks'],
      },
      {
        step: '04',
        title: 'Simultaneous launch',
        description: 'Both apps submitted and reviewed together, launching at the same time.',
        deliverables: ['App Store listings', 'Monitoring setup', 'Handover docs'],
      },
    ],
    deliverables: [
      { title: 'Cross-platform app codebase', category: 'Code', description: 'Single shared repository for both platforms', format: 'GitHub repository' },
      { title: 'Published apps', category: 'Deployment', description: 'Both iOS and Android live simultaneously', format: 'App Store + Play Store' },
      { title: 'CI/CD pipeline', category: 'DevOps', description: 'Automated build and release system', format: 'GitHub Actions / Fastlane' },
    ],
    techStack: [
      { category: 'Framework', items: ['React Native', 'Flutter', 'Expo'] },
      { category: 'Language', items: ['TypeScript', 'Dart', 'JavaScript'] },
      { category: 'Backend', items: ['Node.js', 'Firebase', 'Supabase'] },
      { category: 'State Management', items: ['Redux Toolkit', 'Zustand', 'Riverpod'] },
      { category: 'CI/CD', items: ['EAS Build', 'Codemagic', 'GitHub Actions'] },
    ],
    caseStudyQuote: {
      quote: 'We launched both apps on the same day for the first time in our company history. The shared codebase meant fixes went out to both platforms at once.',
      author: 'Engineering Director',
      role: 'Director of Engineering',
      company: 'Enterprise Client',
      metric: 'Development cost reduced by 40%',
    },
    faqs: [
      { question: 'What does cross-platform development include?', answer: 'A single shared codebase for iOS and Android, shared backend API, automated build pipelines, QA on real devices, and submission to both app stores.' },
      { question: 'When is cross-platform the wrong choice?', answer: 'If your app needs deep hardware integration, real-time graphics, or very platform-specific behaviour, native development may be worth the extra cost. We help you make that call honestly.' },
      { question: 'How long does it take?', answer: 'A cross-platform MVP typically takes 8–14 weeks. Complex apps with many integrations take 14–22 weeks.' },
      { question: 'Can you maintain an existing React Native or Flutter app?', answer: 'Yes. We take on maintenance and feature work for existing codebases, including upgrading outdated dependencies.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. CUSTOM SOFTWARE DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  'custom-software-development': {
    id: 'custom-software-development',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    tagline: 'Software that fits your workflow: not the other way around',
    category: 'Core Development',
    heroBadge: 'Custom Software',
    heroHeadline: 'Software Designed',
    heroHeadlineHighlight: 'Around Your Business',
    heroDescription:
      'Off-the-shelf software rarely fits how your business actually works. We build custom software systems: web apps, internal tools, process automation platforms: that match your operations exactly.',
    heroImage: '/services/custom-software-development.png',
    heroImageCaption: 'Custom software development · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'View Case Studies',
    trustPoints: [
      'Built for your exact workflow',
      'Integrates with tools you already use',
      'You own 100% of the code',
      'Grows with your business',
    ],
    overview: {
      statement: 'The best software for your business is the software that fits how your team actually works: not how a SaaS vendor thinks you should work.',
      paragraphs: [
        'We build custom software for businesses that have outgrown generic tools or have processes that do not fit any off-the-shelf product. That means internal platforms, operational systems, client-facing tools, and anything in between.',
        'The process starts with understanding your workflow. We spend time with your team before writing code, because misunderstanding a process at the start costs far more to fix later.',
      ],
      keyTakeaway: 'Software that fits your team, your data, and your process: owned entirely by you.',
    },
    mainProblemSolved: {
      problem: 'You are running business-critical processes through spreadsheets, emails, and tools that do not talk to each other.',
      solution: 'A custom platform that connects your data, automates your repetitive steps, and gives your team a single place to work.',
      result: 'Fewer manual errors, faster turnaround on tasks, and a system your team prefers over the spreadsheets.',
    },
    targetAudience: {
      profiles: [
        { role: 'Operations Lead', situation: 'Managing complex workflows through spreadsheets and email that are becoming unmanageable' },
        { role: 'CTO', situation: 'Needs internal tooling that off-the-shelf products cannot provide' },
        { role: 'Business Owner', situation: 'Has a process that is genuinely unique and cannot be configured in any existing SaaS product' },
      ],
    },
    metrics: [
      { value: '30–60%', label: 'Reduction in Manual Steps' },
      { value: '100%', label: 'IP Ownership Transferred' },
      { value: '2–4 wks', label: 'First Working Version' },
    ],
    capabilities: [
      {
        title: 'Internal Business Tools',
        description: 'CRM replacements, inventory systems, booking platforms, operations dashboards: built exactly to your specification.',
        tags: ['Process automation', 'Admin panels', 'Workflow management'],
      },
      {
        title: 'Data and Reporting Systems',
        description: 'Software that pulls from multiple sources, processes your data, and gives your team the views they need to make decisions.',
        tags: ['Data pipelines', 'Reporting', 'Business intelligence'],
      },
      {
        title: 'API and Integration Middleware',
        description: 'Systems that connect tools that were never designed to talk to each other: bridging your CRM, accounting, and operational tools.',
        tags: ['REST APIs', 'Webhooks', 'ETL pipelines'],
      },
      {
        title: 'Client-Facing Software',
        description: 'Portals, platforms, and tools used directly by your customers: with your branding, your logic, and your access controls.',
        tags: ['Customer portals', 'Booking systems', 'Self-service tools'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Process discovery',
        description: 'We map your current workflow, identify pain points, and define what the software needs to do: before design starts.',
        deliverables: ['Process map', 'Requirements document', 'Feature list'],
      },
      {
        step: '02',
        title: 'System design',
        description: 'Database schema, system architecture, and UI wireframes agreed before development begins.',
        deliverables: ['System architecture', 'Data model', 'Wireframes'],
      },
      {
        step: '03',
        title: 'Build and integration',
        description: 'Iterative development with working software every two weeks. You use it in staging and give feedback as we build.',
        deliverables: ['Working software per sprint', 'Third-party integrations', 'Test coverage'],
      },
      {
        step: '04',
        title: 'Deployment and training',
        description: 'Production deployment, team training on the new system, and a documented handover.',
        deliverables: ['Production system', 'User documentation', 'Admin training'],
      },
    ],
    deliverables: [
      { title: 'Custom software system', category: 'Code', description: 'Production-ready codebase with documentation', format: 'GitHub repository' },
      { title: 'API documentation', category: 'Docs', description: 'All integrations documented and tested', format: 'OpenAPI / Swagger' },
      { title: 'User training materials', category: 'Training', description: 'Guides and walkthroughs for your team', format: 'PDF + video walkthrough' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'Go'] },
      { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { category: 'Integrations', items: ['REST APIs', 'GraphQL', 'Zapier / Make', 'Webhooks'] },
      { category: 'Infrastructure', items: ['AWS', 'Google Cloud', 'Docker'] },
    ],
    caseStudyQuote: {
      quote: 'We finally stopped managing our entire operation through spreadsheets. The platform they built handles everything our team needs in one place.',
      author: 'Operations Director',
      role: 'Head of Operations',
      company: 'Enterprise Client',
      metric: 'Manual data entry eliminated entirely',
    },
    faqs: [
      { question: 'What does custom software development include?', answer: 'Discovery, system design, frontend and backend development, integrations with your existing tools, testing, deployment, and team training.' },
      { question: 'Who is this for?', answer: 'Businesses whose workflows are too specific for any off-the-shelf product, or teams that need internal tools that commercial SaaS cannot provide.' },
      { question: 'How long does it take?', answer: 'A focused internal tool typically takes 6–12 weeks. A complex multi-user platform with many integrations is usually 14–24 weeks.' },
      { question: 'Can it connect to the tools we already use?', answer: 'Yes. We integrate with almost any tool that has an API: CRMs, accounting platforms, communication tools, and ERP systems.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. AI AUTOMATIONS
  // ─────────────────────────────────────────────────────────────
  'ai-automations': {
    id: 'ai-automations',
    slug: 'ai-automations',
    title: 'AI Automations',
    tagline: 'Replace repetitive manual work with automated AI-driven workflows',
    category: 'AI & Intelligence',
    heroBadge: 'AI Automation',
    heroHeadline: 'Automate the Work',
    heroHeadlineHighlight: 'That Slows You Down',
    heroDescription:
      'We build AI automation systems that handle document processing, data extraction, report generation, approvals, and other repetitive tasks: so your team can work on things that actually need human judgment.',
    heroImage: '/services/ai-automations.png',
    heroImageCaption: 'AI automation workflow · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See Automation Examples',
    trustPoints: [
      'Handles document extraction and data entry',
      'Connects to your existing tools',
      'Runs 24/7 without supervision',
      'Full audit trail and logging',
    ],
    overview: {
      statement: 'Most businesses have significant parts of their operation running on manual effort: people copying data between systems, processing documents, generating reports. That is where AI automation starts earning its value.',
      paragraphs: [
        'We build automation pipelines that trigger on real business events: an email arrives, a document is uploaded, a form is submitted: and then process that event through AI models and deterministic rules to produce a specific outcome.',
        'The result lands in your system of record. Salesforce, SAP, QuickBooks, a spreadsheet, a database: wherever your data lives.',
      ],
      keyTakeaway: 'Repetitive operational work handled automatically, accurately, and faster than any manual process.',
    },
    mainProblemSolved: {
      problem: 'Your team spends hours every week on data entry, document processing, or report generation that could run automatically.',
      solution: 'AI pipelines that extract, validate, and process this work in seconds: triggered by the same events that currently land in a human inbox.',
      result: 'Staff time redirected from data entry to higher-value work. Processing time reduced from hours to under a minute.',
    },
    targetAudience: {
      profiles: [
        { role: 'Operations Manager', situation: 'Running teams that spend significant time on manual data entry and document processing' },
        { role: 'Finance Lead', situation: 'Processing invoices, approvals, or reports manually and experiencing delays and errors' },
        { role: 'HR Director', situation: 'Handling screening, onboarding, or compliance documentation through manual processes' },
      ],
    },
    metrics: [
      { value: '80%+', label: 'Reduction in Manual Processing Time' },
      { value: '<60s', label: 'Typical Processing Time per Task' },
      { value: '24/7', label: 'Runs Without Human Supervision' },
    ],
    capabilities: [
      {
        title: 'Document Processing and Extraction',
        description: 'AI reads invoices, contracts, reports, and forms: extracting structured data and routing it to the right place.',
        tags: ['OCR', 'LLM extraction', 'PDF parsing', 'Form recognition'],
      },
      {
        title: 'Workflow Automation Pipelines',
        description: 'Multi-step workflows triggered by events: email, webhook, file upload: and processed through rules and AI models.',
        tags: ['n8n', 'Temporal', 'Celery', 'Event-driven pipelines'],
      },
      {
        title: 'Approval and Routing Automation',
        description: 'Automated routing of requests, approvals, and exceptions to the right people based on content and rules.',
        tags: ['Decision trees', 'Conditional routing', 'Slack/Email notifications'],
      },
      {
        title: 'Report and Content Generation',
        description: 'Automated generation of reports, summaries, status updates, and other structured content from your data.',
        tags: ['LLM generation', 'Template filling', 'Data aggregation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Process audit',
        description: 'We map the exact manual process: inputs, steps, decisions, outputs: before designing the automation.',
        deliverables: ['Process map', 'Automation scope', 'Risk assessment'],
      },
      {
        step: '02',
        title: 'Pipeline design',
        description: 'We design the trigger, extraction, validation, and output stages of the automation before building.',
        deliverables: ['Pipeline architecture', 'Integration points', 'Exception handling plan'],
      },
      {
        step: '03',
        title: 'Build and validation',
        description: 'We build against your real data. Every automation is tested on actual examples before going live.',
        deliverables: ['Working automation', 'Accuracy report', 'Edge case handling'],
      },
      {
        step: '04',
        title: 'Deployment and monitoring',
        description: 'Live deployment with a monitoring dashboard so you can see what the automation is doing at any time.',
        deliverables: ['Production automation', 'Monitoring setup', 'Audit logs'],
      },
    ],
    deliverables: [
      { title: 'Automation pipeline', category: 'System', description: 'Event-triggered workflow running in production', format: 'Cloud deployment' },
      { title: 'Monitoring dashboard', category: 'Ops', description: 'View automation runs, errors, and throughput', format: 'Web dashboard' },
      { title: 'Audit log system', category: 'Compliance', description: 'Full record of every automated action', format: 'Database / export' },
    ],
    techStack: [
      { category: 'AI / LLM', items: ['OpenAI GPT-4', 'Anthropic Claude', 'LangChain', 'Llama'] },
      { category: 'Automation', items: ['n8n', 'Celery', 'Temporal', 'Airflow'] },
      { category: 'Document Processing', items: ['Tesseract OCR', 'AWS Textract', 'LlamaParse'] },
      { category: 'Backend', items: ['Python', 'Node.js', 'FastAPI'] },
      { category: 'Integrations', items: ['Salesforce', 'SAP', 'QuickBooks', 'Slack', 'Email APIs'] },
    ],
    caseStudyQuote: {
      quote: 'Invoice processing went from three days and four people to under a minute with no one involved. The accuracy is actually better than before.',
      author: 'Finance Operations Lead',
      role: 'Director of Finance Operations',
      company: 'Enterprise Client',
      metric: '98% reduction in processing time',
    },
    faqs: [
      { question: 'What does AI automation include?', answer: 'Process analysis, pipeline design and development, AI model integration, testing on your real data, deployment, and a monitoring system so you can see it running.' },
      { question: 'Who is this for?', answer: 'Operations, finance, and HR teams that spend significant weekly hours on repetitive manual tasks that follow consistent rules.' },
      { question: 'How long does a typical automation take to build?', answer: 'Simple single-step automations take 2–4 weeks. Complex multi-step pipelines with multiple integrations typically take 6–10 weeks.' },
      { question: 'What if the AI makes an error?', answer: 'We build exception handling and human review queues into every automation. Anything the system is not confident about gets flagged for a person to review.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. AI INTEGRATIONS
  // ─────────────────────────────────────────────────────────────
  'ai-integrations': {
    id: 'ai-integrations',
    slug: 'ai-integrations',
    title: 'AI Integrations',
    tagline: 'Add AI capabilities to the software your business already runs',
    category: 'AI & Intelligence',
    heroBadge: 'AI Integration',
    heroHeadline: 'Add AI to',
    heroHeadlineHighlight: 'What You Already Have',
    heroDescription:
      'You do not need to rebuild your software to use AI. We integrate AI capabilities: search, summarisation, predictions, content generation: into your existing products and platforms.',
    heroImage: '/services/ai-integrations.png',
    heroImageCaption: 'AI integration architecture · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See Integration Examples',
    trustPoints: [
      'Works with your existing software',
      'No full rebuild required',
      'Production-safe implementation',
      'Clear ROI from day one',
    ],
    overview: {
      statement: 'Most AI projects fail because they try to do too much at once. The most practical way to get value from AI is to add targeted capabilities to the software your team already uses every day.',
      paragraphs: [
        'We identify the specific points in your product or workflow where AI adds the most value: search, recommendations, content drafting, data extraction, anomaly detection: and integrate exactly that.',
        'Each integration is designed to fit your existing system. We do not disrupt what works. We add AI where it helps, and leave everything else alone.',
      ],
      keyTakeaway: 'Practical AI features added to your existing software: without rebuilding what already works.',
    },
    mainProblemSolved: {
      problem: 'You want to use AI in your product but do not know where to start, or you are worried about disrupting a system that your business depends on.',
      solution: 'Targeted AI integration that adds a specific capability to your existing system: search, summarisation, classification, generation: without changing anything that already works.',
      result: 'Your existing software does more, your team gets AI-powered features, and nothing breaks.',
    },
    targetAudience: {
      profiles: [
        { role: 'Product Manager', situation: 'Wants to add AI features to an existing product without a full rebuild' },
        { role: 'CTO', situation: 'Needs to evaluate and implement AI capabilities in a production system safely' },
        { role: 'Business Owner', situation: 'Wants to use AI but has an existing software system that works and cannot afford to replace it' },
      ],
    },
    metrics: [
      { value: '4–8 wks', label: 'Typical Integration Timeline' },
      { value: '100%', label: 'Existing System Preserved' },
      { value: 'Day 1', label: 'Business Value Delivery' },
    ],
    capabilities: [
      {
        title: 'AI-Powered Search',
        description: 'Semantic search that understands what users mean: not just keyword matching. Integrated into your existing data and interface.',
        tags: ['Vector search', 'Semantic embeddings', 'Pinecone', 'pgvector'],
      },
      {
        title: 'Document Summarisation and Q&A',
        description: 'Let users ask questions about your documents, reports, or knowledge base: and get accurate answers grounded in your content.',
        tags: ['RAG', 'LangChain', 'OpenAI', 'Claude'],
      },
      {
        title: 'Content Generation and Drafting',
        description: 'AI-assisted content creation integrated into your existing tool: drafts, templates, structured output from your data.',
        tags: ['GPT-4', 'Claude', 'Prompt engineering', 'Output validation'],
      },
      {
        title: 'Classification and Prediction',
        description: 'AI models that classify incoming data, predict outcomes, or flag anomalies: running in your existing pipeline.',
        tags: ['ML models', 'Scikit-learn', 'Real-time inference', 'Batch processing'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'AI opportunity assessment',
        description: 'We review your existing software and identify the highest-value AI integration points.',
        deliverables: ['Integration opportunities list', 'Effort vs value matrix', 'Technical feasibility assessment'],
      },
      {
        step: '02',
        title: 'Integration design',
        description: 'We design how the AI capability connects to your existing system: data flow, API contracts, and user experience.',
        deliverables: ['Integration architecture', 'API design', 'UX changes'],
      },
      {
        step: '03',
        title: 'Development and testing',
        description: 'We build the integration against your actual data and test with real usage scenarios before production.',
        deliverables: ['Working integration', 'Accuracy benchmarks', 'Rollback plan'],
      },
      {
        step: '04',
        title: 'Production deployment',
        description: 'Safe deployment with feature flags so you can roll out gradually and roll back if needed.',
        deliverables: ['Production deployment', 'Monitoring setup', 'Performance baseline'],
      },
    ],
    deliverables: [
      { title: 'AI integration layer', category: 'Code', description: 'Production-ready integration with your existing system', format: 'GitHub PR / module' },
      { title: 'Accuracy benchmark report', category: 'Quality', description: 'How well the AI performs on your data', format: 'PDF report' },
      { title: 'API documentation', category: 'Docs', description: 'Documentation for the new AI endpoints', format: 'OpenAPI spec' },
    ],
    techStack: [
      { category: 'AI / LLM', items: ['OpenAI GPT-4', 'Anthropic Claude', 'Llama 3', 'Mistral'] },
      { category: 'Vector DB', items: ['Pinecone', 'pgvector', 'Weaviate', 'Qdrant'] },
      { category: 'Orchestration', items: ['LangChain', 'LlamaIndex', 'Haystack'] },
      { category: 'Backend', items: ['Python', 'FastAPI', 'Node.js'] },
      { category: 'ML', items: ['HuggingFace', 'Scikit-learn', 'PyTorch'] },
    ],
    caseStudyQuote: {
      quote: 'We added AI search to our platform in six weeks. Users find what they are looking for in seconds now instead of navigating five levels deep.',
      author: 'CTO',
      role: 'Chief Technology Officer',
      company: 'EdTech Client',
      metric: 'Search success rate up 70%',
    },
    faqs: [
      { question: 'What does an AI integration include?', answer: 'Opportunity assessment, integration design, development of the AI layer, testing against your real data, deployment, and monitoring setup.' },
      { question: 'Will it break what we already have?', answer: 'No. We use feature flags and staged rollouts. Your existing system keeps working throughout, and you can roll back if needed.' },
      { question: 'How long does integration take?', answer: 'Simple integrations take 4–6 weeks. Complex ones involving multiple data sources or AI models typically take 8–14 weeks.' },
      { question: 'What AI models do you use?', answer: 'We select based on your requirements: OpenAI GPT-4, Anthropic Claude, Llama, or open-source models, depending on cost, performance, and data privacy needs.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. AI SYSTEMS
  // ─────────────────────────────────────────────────────────────
  'ai-systems': {
    id: 'ai-systems',
    slug: 'ai-systems',
    title: 'AI Systems',
    tagline: 'Custom AI systems built for complex, multi-step reasoning and decision-making',
    category: 'AI & Intelligence',
    heroBadge: 'AI Systems',
    heroHeadline: 'AI That Thinks,',
    heroHeadlineHighlight: 'Plans, and Acts',
    heroDescription:
      'We build AI agent systems and multi-step reasoning engines that handle complex goals: breaking them into tasks, calling tools, and completing work autonomously with human review where it matters.',
    heroImage: '/services/ai-systems.png',
    heroImageCaption: 'AI agent system architecture · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See AI Systems We Built',
    trustPoints: [
      'Multi-step goal execution',
      'Tool-calling and real-world actions',
      'Persistent memory across sessions',
      'Human-in-the-loop escalation',
    ],
    overview: {
      statement: 'There is a difference between AI that answers questions and AI that gets things done. AI systems: agent-based architectures: handle the second category.',
      paragraphs: [
        'We build AI systems that take a high-level goal, break it into steps, call the right tools or APIs, and produce an outcome: not just a response. These systems work across knowledge retrieval, data analysis, content creation, and operational tasks.',
        'Human oversight is built in. The system handles what it can confidently, and escalates the rest. Nothing runs completely unchecked in production.',
      ],
      keyTakeaway: 'AI systems that complete complex tasks autonomously: with the right controls to make sure they do it correctly.',
    },
    mainProblemSolved: {
      problem: 'Complex multi-step tasks that require research, analysis, and action currently require a person to coordinate every step.',
      solution: 'An AI agent system that handles the coordination: pulling data, running analysis, generating output, and taking action: with human review at defined checkpoints.',
      result: 'Complex workflows completed faster and more consistently, with staff focused on decisions rather than coordination.',
    },
    targetAudience: {
      profiles: [
        { role: 'Head of AI / ML', situation: 'Building complex AI products that need planning, tool use, and multi-step execution' },
        { role: 'CTO', situation: 'Wants to automate complex knowledge work that simple rule-based automation cannot handle' },
        { role: 'Product Manager', situation: 'Building an AI-powered product that needs autonomous agents to handle user requests end-to-end' },
      ],
    },
    metrics: [
      { value: '94%+', label: 'Autonomous Task Completion Rate' },
      { value: '10x', label: 'Faster Than Manual Multi-Step Work' },
      { value: '100%', label: 'Auditable and Explainable Actions' },
    ],
    capabilities: [
      {
        title: 'AI Agent Development',
        description: 'Agents that break complex goals into steps, call tools, and execute tasks: with memory, planning, and reflection loops.',
        tags: ['LangGraph', 'AutoGen', 'Tool-calling', 'ReAct agents'],
      },
      {
        title: 'Multi-Agent Systems',
        description: 'Multiple specialised agents working together: planner, researcher, writer, executor: to handle complex workflows.',
        tags: ['Agent orchestration', 'Swarm patterns', 'Role specialisation'],
      },
      {
        title: 'Retrieval-Augmented Generation',
        description: 'Agents grounded in your knowledge base: they look up verified information before generating any output.',
        tags: ['RAG', 'Vector databases', 'Knowledge graphs', 'Source citation'],
      },
      {
        title: 'Specialised Custom Models',
        description: 'Fine-tuned models trained on your domain data for tasks where general models do not perform well enough.',
        tags: ['Fine-tuning', 'LoRA / PEFT', 'Domain adaptation', 'Custom evaluation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Task and goal analysis',
        description: 'We map the complex workflow the AI system needs to handle, define the tools it needs access to, and specify the output format.',
        deliverables: ['Agent specification', 'Tool inventory', 'Success criteria'],
      },
      {
        step: '02',
        title: 'System architecture',
        description: 'Agent design, memory architecture, tool integration plan, and human escalation flows.',
        deliverables: ['Agent architecture', 'Memory design', 'Integration plan'],
      },
      {
        step: '03',
        title: 'Development and evaluation',
        description: 'We build and evaluate against a test suite of real tasks from your domain. Accuracy tracked before production.',
        deliverables: ['Working agents', 'Benchmark results', 'Accuracy evaluation'],
      },
      {
        step: '04',
        title: 'Production deployment',
        description: 'Monitored deployment with rate limits, error recovery, and a dashboard showing agent activity.',
        deliverables: ['Production system', 'Monitoring dashboard', 'Escalation setup'],
      },
    ],
    deliverables: [
      { title: 'AI agent system', category: 'System', description: 'Production agent with tool integrations and memory', format: 'Cloud deployment' },
      { title: 'Evaluation benchmark', category: 'Quality', description: 'Test suite and accuracy metrics on your domain', format: 'Benchmark report' },
      { title: 'Monitoring dashboard', category: 'Ops', description: 'Agent activity, errors, and human escalations', format: 'Web dashboard' },
    ],
    techStack: [
      { category: 'Agent Frameworks', items: ['LangGraph', 'AutoGen', 'CrewAI', 'LlamaIndex'] },
      { category: 'LLMs', items: ['GPT-4o', 'Claude 3.5', 'Llama 3.1', 'Mistral'] },
      { category: 'Memory', items: ['pgvector', 'Pinecone', 'Redis', 'Chroma'] },
      { category: 'Tools', items: ['Browser use', 'Code interpreter', 'Search APIs', 'Custom APIs'] },
      { category: 'Backend', items: ['Python', 'FastAPI', 'Celery'] },
    ],
    caseStudyQuote: {
      quote: 'The agent handles the research phase for our analysts. What used to take two hours now takes five minutes, and the output is more thorough.',
      author: 'Head of Analytics',
      role: 'Director of Analytics',
      company: 'Enterprise Client',
      metric: '95% reduction in research time',
    },
    faqs: [
      { question: 'What does an AI system include?', answer: 'Agent design and development, tool integrations, memory architecture, evaluation framework, deployment, and monitoring.' },
      { question: 'How do you handle AI mistakes?', answer: 'Human review checkpoints are built into every workflow. The system flags tasks it is uncertain about, and nothing irreversible happens without a human reviewing it.' },
      { question: 'How long does it take to build?', answer: 'Simple single-agent systems take 6–10 weeks. Complex multi-agent systems typically take 12–20 weeks.' },
      { question: 'Can AI systems access our internal data?', answer: 'Yes. We build RAG pipelines that give the agent access to your documents and data while keeping that data secure and private.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. ECOMMERCE PLATFORM
  // ─────────────────────────────────────────────────────────────
  'ecommerce-platform': {
    id: 'ecommerce-platform',
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    tagline: 'Online stores and commerce platforms built for growth',
    category: 'Core Development',
    heroBadge: 'E-commerce Development',
    heroHeadline: 'E-commerce That',
    heroHeadlineHighlight: 'Actually Converts',
    heroDescription:
      'We build e-commerce platforms and online stores: from custom storefronts to headless commerce architectures: designed for high-traffic, high-conversion, and easy management.',
    heroImage: '/services/ecommerce-platform.png',
    heroImageCaption: 'E-commerce platform architecture · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See Commerce Work',
    trustPoints: [
      'Optimised checkout flow',
      'Multi-currency payment support',
      'Inventory and order management',
      'Mobile-first shopping experience',
    ],
    overview: {
      statement: 'Most e-commerce projects get the tech right and the experience wrong. We build both together.',
      paragraphs: [
        'Whether you need a custom storefront, a headless commerce setup, or a platform migration, we start from how your customers shop and work backward to the technology.',
        'Checkout, search, product pages, and order management are all engineered with conversion in mind: not just functionality.',
      ],
      keyTakeaway: 'An e-commerce platform that grows with your catalogue, handles your peak traffic, and converts consistently.',
    },
    mainProblemSolved: {
      problem: 'Your store is slow, checkout abandonment is high, or your platform cannot handle your product volume or traffic.',
      solution: 'A rebuilt or migrated e-commerce platform with fast search, optimised checkout, and infrastructure that scales under load.',
      result: 'Lower cart abandonment, higher conversion, and a system you can manage without constant developer involvement.',
    },
    targetAudience: {
      profiles: [
        { role: 'E-commerce Manager', situation: 'Running a store that is outgrowing its current platform' },
        { role: 'Product Owner', situation: 'Building a new direct-to-consumer commerce product from scratch' },
        { role: 'CTO', situation: 'Migrating from a slow or expensive commerce platform to a custom solution' },
      ],
    },
    metrics: [
      { value: '+25%', label: 'Average Checkout Conversion Improvement' },
      { value: '<2s', label: 'Target Product Page Load Time' },
      { value: '99.9%', label: 'Platform Uptime SLA' },
    ],
    capabilities: [
      {
        title: 'Custom Storefront Development',
        description: 'Product pages, category pages, and search built to convert: fast, mobile-first, and designed for your specific catalogue.',
        tags: ['React', 'Next.js', 'Algolia', 'Custom design'],
      },
      {
        title: 'Checkout and Payment Engineering',
        description: 'Streamlined multi-step or one-page checkout supporting Stripe, PayPal, Apple Pay, and regional payment methods.',
        tags: ['Stripe', 'PayPal', 'Razorpay', 'PCI-DSS compliance'],
      },
      {
        title: 'Inventory and Order Management',
        description: 'Backend systems that keep inventory accurate, route orders correctly, and connect to your fulfilment and logistics providers.',
        tags: ['Inventory sync', 'Order routing', 'Shipment tracking', 'ERP integration'],
      },
      {
        title: 'Headless Commerce Architecture',
        description: 'Decoupled frontend and commerce backend: faster pages, better SEO, and the ability to sell through any channel.',
        tags: ['Shopify Hydrogen', 'Medusa.js', 'Commerce.js', 'Headless API'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Commerce audit and requirements',
        description: 'We analyse your current store, customer journey, and conversion funnel before designing anything.',
        deliverables: ['Conversion analysis', 'Requirements document', 'Platform recommendation'],
      },
      {
        step: '02',
        title: 'UX and checkout design',
        description: 'UI designs focused on product discovery and checkout completion: with mobile as the primary device.',
        deliverables: ['Design system', 'Checkout flow', 'Mobile prototype'],
      },
      {
        step: '03',
        title: 'Development and integration',
        description: 'Storefront, backend, payment, and logistics integrations built and tested together.',
        deliverables: ['Working store', 'Payment integration', 'Inventory system'],
      },
      {
        step: '04',
        title: 'Load testing and launch',
        description: 'Performance testing under your peak traffic load before launch, not after.',
        deliverables: ['Load test report', 'Production deployment', 'Analytics setup'],
      },
    ],
    deliverables: [
      { title: 'E-commerce platform', category: 'Platform', description: 'Full storefront, checkout, and admin', format: 'Production deployment' },
      { title: 'Payment integration', category: 'Commerce', description: 'Live payment processing configured', format: 'Stripe / PayPal setup' },
      { title: 'Performance report', category: 'Quality', description: 'Load testing results and Core Web Vitals', format: 'PDF report' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'Shopify Hydrogen'] },
      { category: 'Commerce Backend', items: ['Medusa.js', 'Shopify API', 'Custom backend'] },
      { category: 'Payments', items: ['Stripe', 'PayPal', 'Razorpay', 'Apple Pay'] },
      { category: 'Search', items: ['Algolia', 'Meilisearch', 'Elasticsearch'] },
      { category: 'Infrastructure', items: ['Vercel', 'AWS', 'Cloudflare'] },
    ],
    caseStudyQuote: {
      quote: 'Cart abandonment dropped significantly within the first month. The checkout we built was noticeably faster and simpler than what we had before.',
      author: 'Head of E-commerce',
      role: 'Director of Digital Commerce',
      company: 'Retail Client',
      metric: 'Checkout completion rate increased',
    },
    faqs: [
      { question: 'What does e-commerce development include?', answer: 'Storefront design and development, product catalogue, search, checkout, payment integration, order management, and launch support.' },
      { question: 'Can you work with Shopify or WooCommerce?', answer: 'Yes. We build on top of existing platforms, do headless implementations using their APIs, or build fully custom commerce backends depending on your needs.' },
      { question: 'How long does it take?', answer: 'A focused online store takes 8–12 weeks. A complex headless commerce platform with custom backend takes 14–24 weeks.' },
      { question: 'Can it handle peak traffic events like sales?', answer: 'Yes. We load test before launch and design infrastructure to handle peak loads without degrading the customer experience.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. AI NATIVE SOFTWARE
  // ─────────────────────────────────────────────────────────────
  'ai-native-software': {
    id: 'ai-native-software',
    slug: 'ai-native-software',
    title: 'AI Native Software',
    tagline: 'Products designed around AI from the first line of code',
    category: 'AI & Intelligence',
    heroBadge: 'AI Native Software',
    heroHeadline: 'Software Built',
    heroHeadlineHighlight: 'AI-First',
    heroDescription:
      'We build software products where AI is the core feature: not an add-on. Learning platforms, intelligent tools, autonomous systems: designed from the ground up with AI as the primary engine.',
    heroImage: '/services/ai-native-software.png',
    heroImageCaption: 'AI-native software architecture · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See AI Products We Built',
    trustPoints: [
      'AI at the core of the product',
      'Not retrofitted: designed AI-first',
      'Real product engineering, not demos',
      'Production-ready from launch',
    ],
    overview: {
      statement: 'There is a difference between software that has an AI feature and software that could not exist without AI. We build the second kind.',
      paragraphs: [
        'AI-native software starts with the AI capability and builds the user experience around it. The result is products that do things no traditional software can: personalised in real time, adaptive, and getting better with use.',
        'We handle the full product: UI, backend, AI layer, data pipeline, and the feedback loops that make the AI improve over time.',
      ],
      keyTakeaway: 'AI-native products that work in production and improve with every interaction.',
    },
    mainProblemSolved: {
      problem: 'You want to build a product where AI is the differentiator, but building AI-native software requires skills across ML, product engineering, and UX that are hard to find in one team.',
      solution: 'A single cross-functional team that handles AI model selection and integration, product engineering, and UX: building the product as one coherent system.',
      result: 'An AI-native product that works, ships on time, and has the infrastructure to improve as you learn from real users.',
    },
    targetAudience: {
      profiles: [
        { role: 'AI Startup Founder', situation: 'Building a product where AI is the core value proposition' },
        { role: 'Head of Product', situation: 'Launching a new AI-powered product line within an existing business' },
        { role: 'CTO', situation: 'Building internal tooling that is fundamentally AI-driven' },
      ],
    },
    metrics: [
      { value: '100%', label: 'AI-Core Architecture' },
      { value: '8–16 wks', label: 'MVP to Production' },
      { value: '100%', label: 'Full IP Ownership' },
    ],
    capabilities: [
      {
        title: 'AI Product Design',
        description: 'Product design that starts from the AI capability and works outward to the interface: not the other way around.',
        tags: ['AI UX patterns', 'Feedback loops', 'Progressive disclosure'],
      },
      {
        title: 'LLM Application Architecture',
        description: 'Full-stack architecture for LLM-powered products: prompt engineering, context management, streaming, and output validation.',
        tags: ['GPT-4', 'Claude', 'Streaming', 'RAG'],
      },
      {
        title: 'ML Model Integration',
        description: 'Connecting trained ML models to your product: classification, prediction, recommendation, vision: with real-time inference.',
        tags: ['Model serving', 'FastAPI', 'TensorFlow Serving', 'Real-time inference'],
      },
      {
        title: 'AI Feedback and Improvement Loops',
        description: 'Collecting the data from real usage that lets the AI improve over time: rating systems, correction flows, and evaluation pipelines.',
        tags: ['RLHF', 'Feedback collection', 'Evaluation pipeline', 'A/B testing'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'AI product strategy',
        description: 'We define what the AI needs to do, what data it needs, and how users will interact with it before anything is built.',
        deliverables: ['AI product spec', 'Data requirements', 'Model selection rationale'],
      },
      {
        step: '02',
        title: 'Architecture and prototype',
        description: 'Technical architecture for the AI layer, data pipeline, and product backend: plus a working prototype on real data.',
        deliverables: ['Architecture design', 'Working prototype', 'Accuracy baseline'],
      },
      {
        step: '03',
        title: 'Product development',
        description: 'Full product built in sprints: AI layer, backend, frontend: with staging access every two weeks.',
        deliverables: ['Working product per sprint', 'AI integration', 'Backend APIs'],
      },
      {
        step: '04',
        title: 'Launch and evaluation setup',
        description: 'Production deployment with evaluation pipeline so you can measure AI performance after launch.',
        deliverables: ['Production launch', 'Evaluation dashboard', 'Improvement roadmap'],
      },
    ],
    deliverables: [
      { title: 'AI-native product', category: 'Product', description: 'Full product with AI at its core', format: 'Production deployment' },
      { title: 'AI evaluation pipeline', category: 'Quality', description: 'System for measuring and improving AI performance', format: 'Monitoring + eval tools' },
      { title: 'Data flywheel setup', category: 'Growth', description: 'Infrastructure for collecting feedback and improving the model', format: 'Data pipeline' },
    ],
    techStack: [
      { category: 'LLMs', items: ['GPT-4o', 'Claude 3.5', 'Llama 3.1', 'Gemini'] },
      { category: 'ML', items: ['PyTorch', 'TensorFlow', 'HuggingFace', 'scikit-learn'] },
      { category: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'Go'] },
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
      { category: 'Data', items: ['PostgreSQL', 'Pinecone', 'Redis', 'Kafka'] },
    ],
    caseStudyQuote: {
      quote: 'They understood that AI-native does not mean bolting a chatbot onto an existing product. They built the product the right way from the start.',
      author: 'Co-Founder',
      role: 'CEO',
      company: 'AI Startup Client',
      metric: 'Product launched in 14 weeks',
    },
    faqs: [
      { question: 'What does AI native software development include?', answer: 'AI product strategy, model selection and integration, full product engineering (frontend, backend, data pipeline), evaluation setup, and launch support.' },
      { question: 'What is the difference from adding AI to existing software?', answer: 'AI-native software is designed from the start with AI at its core. The user experience, data model, and product logic are all built around the AI capability.' },
      { question: 'How long does it take?', answer: 'An AI-native MVP typically takes 10–16 weeks. A full product with multiple AI features and a data flywheel takes 16–28 weeks.' },
      { question: 'Do you handle model training?', answer: 'Yes. We handle fine-tuning and domain adaptation when a general-purpose model does not perform well enough on your specific use case.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. CLOUD BASED SOFTWARE
  // ─────────────────────────────────────────────────────────────
  'cloud-based-software': {
    id: 'cloud-based-software',
    slug: 'cloud-based-software',
    title: 'Cloud Based Software',
    tagline: 'Cloud-native systems that scale without friction',
    category: 'Core Development',
    heroBadge: 'Cloud Software',
    heroHeadline: 'Software That Runs',
    heroHeadlineHighlight: 'Reliably in the Cloud',
    heroDescription:
      'We build cloud-native software systems on AWS, Azure, and Google Cloud: scalable, secure, and designed to handle real growth without constant engineering attention.',
    heroImage: '/services/cloud-based-software.png',
    heroImageCaption: 'Cloud-native software architecture · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'View Cloud Projects',
    trustPoints: [
      'Scales automatically with demand',
      'Resilient across cloud regions',
      'Cost-optimised infrastructure',
      'Full observability from day one',
    ],
    overview: {
      statement: 'Cloud-native is not just about where your software runs. It is about how it handles failure, how it scales, and whether it gives you visibility into what it is doing.',
      paragraphs: [
        'We build applications that use cloud services properly: not VMs masquerading as cloud. Managed databases, serverless functions, message queues, and containers orchestrated with Kubernetes where the workload demands it.',
        'Cost and observability are not afterthoughts. We instrument from the start and right-size infrastructure from the first deploy.',
      ],
      keyTakeaway: 'Cloud software engineered to scale, monitored properly, and cost-efficient from the start.',
    },
    mainProblemSolved: {
      problem: 'Your software crashes under load, costs too much to run, or requires constant manual intervention to keep it running.',
      solution: 'Cloud-native architecture with proper auto-scaling, managed dependencies, and full observability so problems are caught before users notice.',
      result: 'Software that stays up, scales with your users, and gives you clear visibility into its health and cost.',
    },
    targetAudience: {
      profiles: [
        { role: 'CTO', situation: 'Building new software that needs to scale from the start' },
        { role: 'DevOps Lead', situation: 'Migrating on-premise or VM-based software to cloud-native architecture' },
        { role: 'Product Manager', situation: 'Running a product that keeps having scaling or reliability issues' },
      ],
    },
    metrics: [
      { value: '99.9%', label: 'Uptime Target' },
      { value: 'Auto', label: 'Scaling: No Manual Intervention' },
      { value: '100%', label: 'Observability Coverage' },
    ],
    capabilities: [
      {
        title: 'Cloud-Native Application Development',
        description: 'Applications built using cloud-native patterns: containerised services, managed databases, message queues, and serverless functions.',
        tags: ['Docker', 'Kubernetes', 'AWS Lambda', 'Managed services'],
      },
      {
        title: 'Infrastructure as Code',
        description: 'All infrastructure defined in code with Terraform or CDK: reproducible, auditable, and versionable.',
        tags: ['Terraform', 'AWS CDK', 'Pulumi', 'GitOps'],
      },
      {
        title: 'Auto-Scaling and Cost Optimisation',
        description: 'Infrastructure that scales with demand and scales back when demand drops: with real-time cost visibility.',
        tags: ['Auto Scaling', 'Spot instances', 'Reserved capacity', 'Cost monitoring'],
      },
      {
        title: 'Observability and Monitoring',
        description: 'Full-stack monitoring: application performance, infrastructure health, logs, and alerts: configured before launch.',
        tags: ['Prometheus', 'Grafana', 'Datadog', 'CloudWatch'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Architecture design',
        description: 'We design the cloud architecture for your specific workload: compute, storage, networking, and security.',
        deliverables: ['Architecture diagram', 'Cloud cost estimate', 'Security design'],
      },
      {
        step: '02',
        title: 'Infrastructure setup',
        description: 'Infrastructure provisioned as code, with CI/CD pipelines set up before development starts.',
        deliverables: ['Terraform scripts', 'CI/CD pipeline', 'Staging environment'],
      },
      {
        step: '03',
        title: 'Application development',
        description: 'Application built against the cloud architecture with integrated logging, tracing, and health checks.',
        deliverables: ['Working application', 'API layer', 'Integration tests'],
      },
      {
        step: '04',
        title: 'Load testing and launch',
        description: 'Load testing to verify auto-scaling works before production launch.',
        deliverables: ['Load test results', 'Production deployment', 'Monitoring dashboards'],
      },
    ],
    deliverables: [
      { title: 'Cloud application', category: 'Software', description: 'Production-ready cloud-native application', format: 'Cloud deployment' },
      { title: 'Infrastructure as code', category: 'DevOps', description: 'All infrastructure defined in Terraform', format: 'GitHub repository' },
      { title: 'Monitoring dashboards', category: 'Ops', description: 'Application and infrastructure monitoring', format: 'Grafana / Datadog' },
    ],
    techStack: [
      { category: 'Cloud', items: ['AWS', 'Microsoft Azure', 'Google Cloud'] },
      { category: 'Containers', items: ['Docker', 'Kubernetes', 'EKS', 'GKE'] },
      { category: 'IaC', items: ['Terraform', 'AWS CDK', 'Pulumi'] },
      { category: 'Database', items: ['RDS', 'Cloud SQL', 'DynamoDB', 'Redis'] },
      { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'Datadog', 'CloudWatch'] },
    ],
    caseStudyQuote: {
      quote: 'The system handles our traffic spikes automatically now. We used to have to manually intervene during every promotion. That problem is gone.',
      author: 'VP Engineering',
      role: 'Vice President of Engineering',
      company: 'Enterprise Client',
      metric: 'Zero manual scaling interventions since launch',
    },
    faqs: [
      { question: 'What does cloud software development include?', answer: 'Architecture design, infrastructure setup as code, application development, CI/CD pipeline, load testing, monitoring setup, and production deployment.' },
      { question: 'Which cloud provider do you work with?', answer: 'We work with AWS, Azure, and Google Cloud. We recommend based on your existing setup, workload, and team familiarity.' },
      { question: 'How long does it take?', answer: 'Cloud infrastructure setup takes 2–4 weeks. A full cloud-native application typically takes 10–20 weeks depending on complexity.' },
      { question: 'Can you migrate an existing application to cloud-native?', answer: 'Yes. We do lift-and-shift migrations and re-architecture to cloud-native patterns, depending on how much rebuild makes economic sense.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. SAAS DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  'saas-development': {
    id: 'saas-development',
    slug: 'saas-development',
    title: 'SaaS Development',
    tagline: 'Subscription software products built to acquire, retain, and scale',
    category: 'Core Development',
    heroBadge: 'SaaS Development',
    heroHeadline: 'Build Your SaaS',
    heroHeadlineHighlight: 'Product Right',
    heroDescription:
      'We build SaaS products end-to-end: multi-tenant architecture, subscription billing, user management, analytics, and the operational infrastructure that makes a SaaS business work.',
    heroImage: '/services/saas-development.png',
    heroImageCaption: 'SaaS product architecture · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See SaaS Products We Built',
    trustPoints: [
      'Multi-tenant from the start',
      'Billing and subscription management',
      'User and workspace management',
      'Usage analytics built in',
    ],
    overview: {
      statement: 'Building a SaaS product is different from building a regular application. The architecture needs to handle multiple customers in isolation, billing that scales, and the operational demands of a subscription business.',
      paragraphs: [
        'We have built SaaS products across EdTech, FinTech, and enterprise software. We know the patterns: multi-tenancy, billing integration, onboarding flows, role-based access: and we implement them properly from the start.',
        'The goal is to ship an MVP that works, then iterate fast. We structure the codebase and infrastructure so your team can keep moving after we hand over.',
      ],
      keyTakeaway: 'A SaaS product with the right architecture from day one: so you can grow without rebuilding.',
    },
    mainProblemSolved: {
      problem: 'You are building a SaaS product but the architecture is getting complex fast: multi-tenancy, billing, user management, and feature access are all intersecting.',
      solution: 'A well-architected SaaS platform that handles multi-tenancy, billing, and access correctly from the start: not bolted on later.',
      result: 'A product you can sell confidently, onboard customers quickly, and expand without rearchitecting.',
    },
    targetAudience: {
      profiles: [
        { role: 'SaaS Founder', situation: 'Building a subscription software product for the first time and needs to get the architecture right' },
        { role: 'CTO', situation: 'Scaling a SaaS product that is hitting multi-tenancy and billing limitations' },
        { role: 'Product Manager', situation: 'Launching a new SaaS product line from within an existing business' },
      ],
    },
    metrics: [
      { value: '8–16 wks', label: 'MVP to Production' },
      { value: '100%', label: 'Multi-Tenant Isolation' },
      { value: 'Day 1', label: 'Billing and Metrics Ready' },
    ],
    capabilities: [
      {
        title: 'Multi-Tenant Architecture',
        description: 'Tenant isolation at the database level: each customer sees only their data, even as they share infrastructure.',
        tags: ['Row-level security', 'Schema isolation', 'Tenant routing'],
      },
      {
        title: 'Subscription Billing Integration',
        description: 'Stripe integration with plans, trials, usage-based billing, invoices, and a customer billing portal.',
        tags: ['Stripe', 'Paddle', 'Usage billing', 'Dunning management'],
      },
      {
        title: 'User and Workspace Management',
        description: 'Workspace creation, team invitations, role-based permissions, and SSO: the standard SaaS user model, implemented properly.',
        tags: ['RBAC', 'SSO / SAML', 'Invitations', 'Audit logs'],
      },
      {
        title: 'SaaS Analytics and Metrics',
        description: 'MRR, churn, DAU, and feature usage tracked from day one: so you have the data your business decisions need.',
        tags: ['Product analytics', 'Revenue metrics', 'Churn tracking'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'SaaS product scoping',
        description: 'We define the tenant model, billing structure, feature set, and user types before architecture begins.',
        deliverables: ['SaaS architecture spec', 'Billing model', 'Feature scope'],
      },
      {
        step: '02',
        title: 'Architecture and infrastructure',
        description: 'Multi-tenant database design, billing integration, auth system, and CI/CD all set up before application development.',
        deliverables: ['Database schema', 'Auth setup', 'Billing integration'],
      },
      {
        step: '03',
        title: 'Product development',
        description: 'Core features built in sprints: with staging access every two weeks so you can test and give feedback continuously.',
        deliverables: ['Working product per sprint', 'Admin panel', 'Customer-facing features'],
      },
      {
        step: '04',
        title: 'Launch readiness',
        description: 'Security audit, load testing, billing validation, and go-live support.',
        deliverables: ['Security report', 'Load test results', 'Production deployment'],
      },
    ],
    deliverables: [
      { title: 'SaaS product', category: 'Product', description: 'Full production SaaS application', format: 'Cloud deployment' },
      { title: 'Billing setup', category: 'Revenue', description: 'Live Stripe subscription and billing portal', format: 'Stripe dashboard' },
      { title: 'Admin and analytics dashboard', category: 'Operations', description: 'Internal tools for managing customers and metrics', format: 'Web application' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'Go'] },
      { category: 'Database', items: ['PostgreSQL', 'Supabase', 'Redis'] },
      { category: 'Billing', items: ['Stripe', 'Paddle', 'Chargebee'] },
      { category: 'Auth', items: ['Auth0', 'Clerk', 'NextAuth', 'Supabase Auth'] },
    ],
    caseStudyQuote: {
      quote: 'The architecture was right from day one. We added our first 50 customers without a single data isolation issue. That is not common for a first build.',
      author: 'CTO',
      role: 'Co-Founder and CTO',
      company: 'SaaS Startup Client',
      metric: '50 enterprise tenants in 90 days',
    },
    faqs: [
      { question: 'What does SaaS development include?', answer: 'Multi-tenant architecture, auth and user management, subscription billing, core product features, admin panel, analytics, and production deployment.' },
      { question: 'Do you handle the billing system?', answer: 'Yes. We integrate Stripe or Paddle with your plans, trials, and usage-based billing. We also build the customer billing portal.' },
      { question: 'How long does SaaS MVP development take?', answer: 'A focused SaaS MVP with core features and billing takes 10–16 weeks. A full product with advanced features takes 16–28 weeks.' },
      { question: 'Can you add SaaS features to an existing product?', answer: 'Yes. We can add multi-tenancy, billing, and workspace management to existing applications through a phased migration.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. ANALYTICS DASHBOARD
  // ─────────────────────────────────────────────────────────────
  'analytics-dashboard': {
    id: 'analytics-dashboard',
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    tagline: 'Dashboards that turn your data into decisions',
    category: 'Specialist',
    heroBadge: 'Analytics and BI',
    heroHeadline: 'Your Data,',
    heroHeadlineHighlight: 'Clear and Actionable',
    heroDescription:
      'We build custom analytics dashboards and business intelligence systems that connect your data sources, surface the metrics that matter, and give your team the visibility to make faster decisions.',
    heroImage: '/services/analytics-dashboard.png',
    heroImageCaption: 'Analytics dashboard · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See Dashboard Examples',
    trustPoints: [
      'Real-time data from any source',
      'Custom metrics for your business',
      'Drill-down and filtering built in',
      'Accessible to non-technical users',
    ],
    overview: {
      statement: 'The problem is rarely missing data. The problem is that the data lives in five different places and nobody has time to pull it together.',
      paragraphs: [
        'We build dashboards that connect to your existing data sources: databases, CRMs, payment systems, spreadsheets: and display the metrics your team checks every day.',
        'These are not generic BI tools. They are built around your specific metrics and your team\'s actual decision-making process.',
      ],
      keyTakeaway: 'Custom dashboards that give your team clear visibility into the numbers they need: without opening five fragmented SaaS platforms.',
    },
    mainProblemSolved: {
      problem: 'Your team is assembling business reports manually every week by pulling data from multiple tools.',
      solution: 'A single dashboard that pulls from all your data sources automatically and displays your key metrics in real time.',
      result: 'Reports that update themselves, hours saved per week, and decisions made on current data instead of last week\'s export.',
    },
    targetAudience: {
      profiles: [
        { role: 'Operations Manager', situation: 'Spending significant time every week compiling reports from multiple data sources' },
        { role: 'Business Owner', situation: 'Needs clear visibility into business health without depending on technical staff for every report' },
        { role: 'Data Lead', situation: 'Building a data infrastructure that makes business metrics accessible to non-technical stakeholders' },
      ],
    },
    metrics: [
      { value: 'Real-time', label: 'Data Refresh' },
      { value: '10+', label: 'Data Sources Connected' },
      { value: '3–6 wks', label: 'First Dashboard Live' },
    ],
    capabilities: [
      {
        title: 'Custom Dashboard Development',
        description: 'Interactive dashboards with filtering, drill-down, date ranges, and export functionality, tailored to your exact operational metrics.',
        tags: ['React', 'Chart.js', 'D3.js', 'Recharts'],
      },
      {
        title: 'Data Pipeline and Integration',
        description: 'ETL pipelines that pull from your databases, APIs, spreadsheets, and SaaS tools into a clean reporting layer.',
        tags: ['ETL', 'Apache Kafka', 'Airbyte', 'dbt'],
      },
      {
        title: 'Real-Time Analytics',
        description: 'Dashboards that update as events happen: not on a 24-hour batch cycle.',
        tags: ['WebSockets', 'ClickHouse', 'TimescaleDB', 'Streaming'],
      },
      {
        title: 'Self-Service Reporting',
        description: 'Tools that let non-technical users build their own views, filter by the dimensions they care about, and export when needed.',
        tags: ['No-code filters', 'Export', 'Scheduled reports'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Metrics and data audit',
        description: 'We map every data source, every metric your team tracks, and every question the dashboard needs to answer.',
        deliverables: ['Metrics list', 'Data source inventory', 'Dashboard specification'],
      },
      {
        step: '02',
        title: 'Data pipeline design',
        description: 'ETL pipeline design connecting your sources to a clean data model built for fast querying.',
        deliverables: ['Data model', 'Pipeline architecture', 'Data dictionary'],
      },
      {
        step: '03',
        title: 'Dashboard development',
        description: 'Charts, filters, and tables built against live staging data pipelines rather than synthetic mock fixtures.',
        deliverables: ['Working dashboard', 'Drill-down features', 'User access controls'],
      },
      {
        step: '04',
        title: 'Training and handover',
        description: 'Team training on the dashboard and a documented guide so new team members can use it without help.',
        deliverables: ['User documentation', 'Admin guide', 'Ongoing support plan'],
      },
    ],
    deliverables: [
      { title: 'Custom analytics dashboard', category: 'Product', description: 'Live dashboard connected to your data', format: 'Web application' },
      { title: 'Data pipeline', category: 'Infrastructure', description: 'ETL connecting all your data sources', format: 'Cloud deployment' },
      { title: 'User documentation', category: 'Docs', description: 'Guide for using and maintaining the dashboard', format: 'PDF + walkthrough video' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'Recharts', 'D3.js', 'Chart.js'] },
      { category: 'Data Pipeline', items: ['Apache Kafka', 'Airbyte', 'dbt', 'Python'] },
      { category: 'Analytics DB', items: ['ClickHouse', 'BigQuery', 'Snowflake', 'PostgreSQL'] },
      { category: 'BI Tools', items: ['Metabase', 'Superset', 'Custom builds'] },
      { category: 'Integrations', items: ['Stripe', 'Salesforce', 'HubSpot', 'Google Sheets'] },
    ],
    caseStudyQuote: {
      quote: 'We stopped spending Monday mornings pulling reports. Everything is in one place and updates automatically. The team makes decisions faster now.',
      author: 'Head of Operations',
      role: 'Operations Director',
      company: 'Healthcare Client',
      metric: '6 hours of manual reporting saved per week',
    },
    faqs: [
      { question: 'What does analytics dashboard development include?', answer: 'Metrics scoping, data source integration, data pipeline development, dashboard design and build, user access controls, and team training.' },
      { question: 'What data sources can you connect?', answer: 'Databases, REST APIs, spreadsheets, SaaS products with APIs: Stripe, HubSpot, Salesforce, and all standard enterprise endpoints.' },
      { question: 'How long does it take?', answer: 'A focused dashboard with 2–3 data sources takes 3–6 weeks. Complex multi-source real-time dashboards take 8–14 weeks.' },
      { question: 'Can non-technical users use it?', answer: 'Yes. We design dashboards for the people who will use them daily: not data engineers. Filtering, CSV/PDF exports, and metric drill-downs are entirely self-service.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 13. CUSTOM HEALTH SOFTWARE
  // ─────────────────────────────────────────────────────────────
  'custom-health-software': {
    id: 'custom-health-software',
    slug: 'custom-health-software',
    title: 'Custom Health Software',
    tagline: 'Healthcare software built for how clinics, hospitals, and health businesses actually work',
    category: 'Specialist',
    heroBadge: 'Healthcare Software',
    heroHeadline: 'Healthcare Software',
    heroHeadlineHighlight: 'That Works in Practice',
    heroDescription:
      'We build custom software for healthcare businesses: patient portals, clinical telemetry tools, health tracking apps, and hospital management software designed for real clinical workflows.',
    heroImage: '/services/custom-health-software.png',
    heroImageCaption: 'Healthcare software · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'View Healthcare Projects',
    trustPoints: [
      'Built with data security in mind',
      'Designed for clinical workflows',
      'Connects to existing health systems',
      'Patient-facing and admin tools',
    ],
    overview: {
      statement: 'Healthcare software that does not fit clinical workflows gets worked around by clinicians: introducing errors, delaying treatments, and frustrating staff. We build software that fits how care actually happens.',
      paragraphs: [
        'We have built hospital management systems, patient portals, appointment tools, health tracking apps, and clinical reporting dashboards. The common thread is spending time with the clinical team before writing code.',
        'Security and data handling are not optional extras. Every healthcare project we build treats patient data with the same standards we would expect for our own.',
      ],
      keyTakeaway: 'Healthcare software that fits your clinical environment: secure, intuitive, and built for real practitioner workflows.',
    },
    mainProblemSolved: {
      problem: 'Your clinical team is working around the software because it does not fit how they actually operate, causing manual workarounds, chart errors, and lost billing hours.',
      solution: 'Custom software designed around your specific workflows, with input from the clinical staff who will use it.',
      result: 'Software your team uses willingly, with fewer manual steps, fewer errors, and better visibility into patient and operational data.',
    },
    targetAudience: {
      profiles: [
        { role: 'Hospital Administrator', situation: 'Needs a custom HMS or operational platform that fits the hospital\'s specific workflows' },
        { role: 'Clinic Owner', situation: 'Running a clinic on paper or a generic tool that does not fit their specialty' },
        { role: 'Health Tech Founder', situation: 'Building a digital health product for patients or providers' },
      ],
    },
    metrics: [
      { value: '40%', label: 'Reduction in Administrative Time' },
      { value: '100%', label: 'Patient Data Security' },
      { value: '90%', label: 'Staff Adoption Rate' },
    ],
    capabilities: [
      {
        title: 'Hospital Management System (HMS)',
        description: 'Admission, discharge, bed management, billing, pharmacy, lab, and reporting consolidated in one unified system.',
        tags: ['Patient management', 'Bed tracking', 'Billing', 'Lab integration'],
      },
      {
        title: 'Patient Portal and App',
        description: 'Secure patient-facing portals and mobile apps for appointments, records access, and communication with providers.',
        tags: ['Appointment booking', 'Health records', 'Secure messaging'],
      },
      {
        title: 'Clinical Reporting and Analytics',
        description: 'Dashboards that give clinical and administrative leadership the visibility they need for operational decisions.',
        tags: ['Clinical metrics', 'Reporting', 'Operational dashboards'],
      },
      {
        title: 'Practice Management Software',
        description: 'Scheduling, billing, patient records, and clinical documentation for specialty practices and clinics.',
        tags: ['Scheduling', 'EMR', 'Insurance billing', 'Notes and documentation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clinical workflow discovery',
        description: 'We spend time with your clinical and administrative staff mapping how work actually flows before designing anything.',
        deliverables: ['Workflow map', 'Requirements document', 'Data model'],
      },
      {
        step: '02',
        title: 'System design',
        description: 'Architecture, data model, and UI designs: reviewed and signed off with clinical staff before coding begins.',
        deliverables: ['System architecture', 'Database schema', 'UI wireframes'],
      },
      {
        step: '03',
        title: 'Development and clinical testing',
        description: 'Sprints with working software tested by your clinical staff at each stage.',
        deliverables: ['Working modules per sprint', 'Clinical user testing', 'Integration with existing systems'],
      },
      {
        step: '04',
        title: 'Training and go-live',
        description: 'Staff training, documentation, and support during the transition to the new system.',
        deliverables: ['Training materials', 'User guides', 'Go-live support'],
      },
    ],
    deliverables: [
      { title: 'Healthcare software system', category: 'Software', description: 'Production-ready clinical software', format: 'Cloud deployment' },
      { title: 'Staff training materials', category: 'Training', description: 'Role-specific training guides', format: 'PDF + video' },
      { title: 'System documentation', category: 'Docs', description: 'Technical and user documentation', format: 'Documentation portal' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'Java Spring'] },
      { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { category: 'Security', items: ['Encryption at rest', 'Audit logging', 'RBAC'] },
      { category: 'Integrations', items: ['HL7/FHIR', 'Lab systems', 'Billing APIs', 'SMS/Email'] },
    ],
    caseStudyQuote: {
      quote: 'The staff actually use this system. That has never been true of any software we have implemented before. It was designed around how they work.',
      author: 'Hospital Administrator',
      role: 'Chief Administrative Officer',
      company: 'Healthcare Client',
      metric: 'Staff adoption reached 90% in first month',
    },
    faqs: [
      { question: 'What does custom health software development include?', answer: 'Clinical workflow discovery, system design, frontend and backend development, integration with existing systems, staff training, and go-live support.' },
      { question: 'How do you handle patient data security?', answer: 'We implement encryption at rest and in transit, role-based access control, audit logging, and follow standard data protection practices throughout.' },
      { question: 'Can you integrate with our existing health IT systems?', answer: 'Yes. We connect to lab systems, pharmacy systems, billing platforms, and other clinical tools using HL7, FHIR, or direct API integration.' },
      { question: 'How long does healthcare software take?', answer: 'A focused clinical tool takes 10–16 weeks. A full HMS or practice management system takes 20–36 weeks depending on scope.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 14. LEGACY SYSTEM MODERNISATION
  // ─────────────────────────────────────────────────────────────
  'legacy-modernisation': {
    id: 'legacy-modernisation',
    slug: 'legacy-modernisation',
    title: 'Legacy System Modernisation',
    tagline: 'Replace or modernise outdated systems without stopping your business',
    category: 'Core Development',
    heroBadge: 'Legacy Modernisation',
    heroHeadline: 'Modernise Your',
    heroHeadlineHighlight: 'Legacy Systems',
    heroDescription:
      'We migrate and modernise legacy software systems: moving from outdated tech stacks to modern, maintainable architectures in phased stages that preserve zero-downtime business continuity.',
    heroImage: '/services/legacy-modernisation.png',
    heroImageCaption: 'Legacy system modernisation · Neominds',
    primaryCtaText: 'Discuss Your Project',
    secondaryCtaText: 'See Modernisation Cases',
    trustPoints: [
      'No big bang cutover',
      'Business continuity throughout',
      'Staged migration approach',
      'Modern tech your team can maintain',
    ],
    overview: {
      statement: 'Legacy systems are expensive to run, slow to change, and hard to hire engineers for. But replacing them all at once is too risky. The answer is a structured, staged migration.',
      paragraphs: [
        'We migrate legacy systems by identifying the highest-risk components and replacing them first while keeping existing operations live. Each stage delivers working software before we move to the next.',
        'We have modernised systems running on PHP, classic ASP, VB6, Oracle, and old Java stacks. The technical specifics vary. Our approach stays consistent: structured, phased migrations with zero operational disruption.',
      ],
      keyTakeaway: 'A legacy system modernised properly in phased stages, with continuous business uptime and no surprise cost overruns.',
    },
    mainProblemSolved: {
      problem: 'Your legacy system is slow to change, expensive to run, and a risk every time something breaks, yet a full forklift replacement carries unacceptable operational risk.',
      solution: 'A staged modernisation that replaces the most painful parts first, keeps everything running, and builds toward a fully modern system.',
      result: 'A modern, maintainable system delivered incrementally without the operational disruption of a risky big bang replacement.',
    },
    targetAudience: {
      profiles: [
        { role: 'CTO', situation: 'Running critical business operations on a system that is too expensive to maintain or too slow to change' },
        { role: 'IT Director', situation: 'Struggling to find engineers who can work with the existing tech stack' },
        { role: 'Business Owner', situation: 'Losing competitive ground because the old system cannot be updated fast enough' },
      ],
    },
    metrics: [
      { value: '0', label: 'Business Interruptions' },
      { value: '60%', label: 'Typical Maintenance Cost Reduction' },
      { value: 'Staged', label: 'Phased Delivery · Zero Downtime' },
    ],
    capabilities: [
      {
        title: 'Legacy Assessment and Migration Planning',
        description: 'Technical audit of the existing system, migration strategy, risk assessment, and a phased implementation plan.',
        tags: ['Technical audit', 'Migration strategy', 'Risk mapping'],
      },
      {
        title: 'Incremental Re-Architecture',
        description: 'Replacing legacy components one domain at a time while the rest of the system keeps running.',
        tags: ['Strangler fig pattern', 'Domain decomposition', 'API facades'],
      },
      {
        title: 'Data Migration',
        description: 'Moving data from legacy databases to modern systems with automated data reconciliation and verified zero loss.',
        tags: ['ETL migration', 'Data validation', 'Reconciliation', 'Schema transformation'],
      },
      {
        title: 'Internal Systems Modernisation',
        description: 'Modernising the internal tools, dashboards, and operational platforms that your organisation depends on.',
        tags: ['Internal tools', 'Admin systems', 'Reporting platforms'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Legacy audit',
        description: 'Full technical audit of the existing system: codebases, schemas, dependencies, and business logic.',
        deliverables: ['Technical audit report', 'Migration risk assessment', 'Phased migration plan'],
      },
      {
        step: '02',
        title: 'Architecture and parallel build',
        description: 'Modern architecture designed and the first replacement component built in parallel with the running legacy system.',
        deliverables: ['Modern architecture', 'First component', 'API bridge layer'],
      },
      {
        step: '03',
        title: 'Phased migration',
        description: 'Each domain migrated in sequence: tested, validated, and safely switched over before moving to the next module.',
        deliverables: ['Migrated components', 'Data validation reports', 'Cutover plan'],
      },
      {
        step: '04',
        title: 'Legacy decommission',
        description: 'Final cutover and clean shutdown of the legacy system once everything is running on the new platform.',
        deliverables: ['Full cutover', 'Decommission plan', 'Monitoring setup'],
      },
    ],
    deliverables: [
      { title: 'Modern replacement system', category: 'Software', description: 'Production-ready modern application', format: 'Cloud deployment' },
      { title: 'Migration documentation', category: 'Docs', description: 'Full record of what was migrated and how', format: 'Technical documentation' },
      { title: 'Data validation report', category: 'Quality', description: 'Verification that all data migrated correctly', format: 'PDF report' },
    ],
    techStack: [
      { category: 'Modern Frontend', items: ['React', 'TypeScript', 'Next.js'] },
      { category: 'Modern Backend', items: ['Node.js', 'Python', 'Go', 'Java Spring Boot'] },
      { category: 'Database Migration', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Data migration scripts'] },
      { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] },
      { category: 'DevOps', items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
    ],
    caseStudyQuote: {
      quote: 'We kept running on the old system throughout the migration. The cutover weekend was the smoothest system transition we have had in 15 years.',
      author: 'IT Director',
      role: 'Director of IT',
      company: 'FinTech Client',
      metric: 'Zero business interruption across 8-month migration',
    },
    faqs: [
      { question: 'What does legacy modernisation include?', answer: 'Technical audit, migration strategy, incremental replacement of system components, data migration with validation, and full cutover support.' },
      { question: 'Will we need to stop operations during migration?', answer: 'No. Our staged approach keeps the legacy system running throughout. Cutovers are planned, tested, and executed with minimal interruption.' },
      { question: 'How long does legacy modernisation take?', answer: 'It depends on system size. A focused internal system takes 4–8 months. A large enterprise platform can take 12–24 months, delivered in stages.' },
      { question: 'What legacy technologies do you work with?', answer: 'We have worked with PHP, classic ASP, VB6, Oracle, old Java stacks, Access databases, and others. The legacy technology does not limit us.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 15. TRAINING AS A SERVICE
  // ─────────────────────────────────────────────────────────────
  'training-as-service': {
    id: 'training-as-service',
    slug: 'training-as-service',
    title: 'Training as a Service',
    tagline: 'Technical training and knowledge transfer that makes your team self-sufficient',
    category: 'Specialist',
    heroBadge: 'Training & Enablement',
    heroHeadline: 'Build Your Team\'s',
    heroHeadlineHighlight: 'Technical Capability',
    heroDescription:
      'We run structured technical training programmes: on AI tools, new software platforms, development practices, and modern tooling, enabling your in-house team to build independently without external agency reliance.',
    heroImage: '/services/training-as-service.png',
    heroImageCaption: 'Technical training programme · Neominds',
    primaryCtaText: 'Discuss Your Programme',
    secondaryCtaText: 'See Training Options',
    trustPoints: [
      'Tailored to your team\'s actual tools',
      'Hands-on with real examples',
      'Internal capability building',
      'Ongoing support after training',
    ],
    overview: {
      statement: 'Buying software or adopting AI is only half the problem. If your team does not know how to use it effectively, the investment does not deliver.',
      paragraphs: [
        'We deliver technical training for teams making transitions: adopting AI tools, switching to new development practices, taking ownership of a newly built system, or upskilling in areas that directly accelerate their daily delivery velocity.',
        'Training is not classroom lectures. It is hands-on workshops with your tools, your data, and scenarios your team actually faces.',
      ],
      keyTakeaway: 'Practical technical training that builds real operational competence in your team rather than surface-level theory.',
    },
    mainProblemSolved: {
      problem: 'Your team has new tools or a new system but cannot use them effectively: leading to underutilisation and continued dependence on external contractors.',
      solution: 'Structured, hands-on training tailored to your specific tools and your team\'s actual skill gaps.',
      result: 'A team that uses the tools confidently, asks better questions, and requires far less external support.',
    },
    targetAudience: {
      profiles: [
        { role: 'Engineering Manager', situation: 'Team needs to adopt new development practices or technology stack' },
        { role: 'Operations Lead', situation: 'Team is getting a new system and needs to be able to use and maintain it' },
        { role: 'CTO / Head of AI', situation: 'Organisation wants to build internal AI literacy and prompt engineering capability' },
      ],
    },
    metrics: [
      { value: '90%+', label: 'Post-Training Proficiency Rate' },
      { value: '4–12 wks', label: 'Typical Programme Duration' },
      { value: '100%', label: 'Hands-On with Your Tools' },
    ],
    capabilities: [
      {
        title: 'AI Tools and LLM Training',
        description: 'Training on AI tools, prompt engineering, AI workflow design, and how to evaluate AI outputs effectively.',
        tags: ['ChatGPT / Claude usage', 'Prompt engineering', 'AI evaluation', 'Workflow design'],
      },
      {
        title: 'System Handover Training',
        description: 'Structured knowledge transfer when your team is taking ownership of a newly built or migrated system.',
        tags: ['System architecture', 'Admin training', 'Maintenance practices', 'Runbooks'],
      },
      {
        title: 'Development Practice Training',
        description: 'Training on engineering practices: testing, code review, CI/CD automation, and secure coding for teams upgrading their engineering maturity.',
        tags: ['Testing', 'Code review', 'CI/CD', 'Security fundamentals'],
      },
      {
        title: 'Data and Analytics Literacy',
        description: 'Training non-technical teams to understand and use data tools, dashboards, and basic SQL for self-service analysis.',
        tags: ['Dashboard usage', 'SQL basics', 'Data interpretation', 'Reporting'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Skill gap assessment',
        description: 'We assess your team\'s current skills, identify the gaps, and define what capability they need to build.',
        deliverables: ['Skill gap report', 'Training programme outline', 'Success criteria'],
      },
      {
        step: '02',
        title: 'Programme design',
        description: 'Custom training curriculum using your actual tools, your data, and scenarios your team faces.',
        deliverables: ['Session plan', 'Workshop materials', 'Practice exercises'],
      },
      {
        step: '03',
        title: 'Delivery',
        description: 'Hands-on workshops delivered live: in person or remote with live interactive exercises and dedicated Q&A.',
        deliverables: ['Live sessions', 'Recorded sessions', 'Practice exercises'],
      },
      {
        step: '04',
        title: 'Assessment and follow-up',
        description: 'Post-training assessment, follow-up Q&A sessions, and documentation your team can reference later.',
        deliverables: ['Assessment results', 'Reference documentation', 'Follow-up support window'],
      },
    ],
    deliverables: [
      { title: 'Training programme', category: 'Training', description: 'Full curriculum with workshop materials', format: 'Sessions + materials' },
      { title: 'Session recordings', category: 'Resources', description: 'Recorded workshops for future reference', format: 'Video recordings' },
      { title: 'Reference documentation', category: 'Docs', description: 'Post-training reference guides', format: 'PDF + documentation' },
    ],
    techStack: [
      { category: 'Training Areas', items: ['AI/LLM tools', 'Prompt engineering', 'System administration', 'Development practices'] },
      { category: 'Platforms Covered', items: ['ChatGPT', 'Claude', 'Cursor', 'GitHub Copilot', 'Custom AI tools'] },
      { category: 'Delivery', items: ['Live workshops', 'Remote sessions', 'Recorded content', 'Practice exercises'] },
    ],
    caseStudyQuote: {
      quote: 'After the training, our team was writing prompts that worked on the first try. Before, they were wasting time going back and forth with AI tools to get anything useful.',
      author: 'Head of Operations',
      role: 'Director of Operations',
      company: 'Enterprise Client',
      metric: 'Team AI productivity doubled within 60 days',
    },
    faqs: [
      { question: 'What does training as a service include?', answer: 'Skill gap assessment, custom curriculum design, hands-on workshop delivery, post-training assessment, and follow-up support.' },
      { question: 'Who is this for?', answer: 'Teams adopting new technology, taking ownership of a newly built system, or building internal capability in AI, data, or development practices.' },
      { question: 'How long does a training programme take?', answer: 'Focused programmes run 4–6 weeks. Comprehensive capability building across multiple areas runs 8–12 weeks.' },
      { question: 'Can training be delivered remotely?', answer: 'Yes. All our training programmes work remotely using video conferencing and collaborative tools. We also deliver in-person for teams in accessible locations.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 16. PRODUCT ENGINEERING
  // ─────────────────────────────────────────────────────────────
  'product-engineering': {
    id: 'product-engineering',
    slug: 'product-engineering',
    title: 'Product Engineering',
    tagline: 'End-to-end product development from discovery to production',
    category: 'Specialist',
    heroBadge: 'Product Engineering',
    heroHeadline: 'From Idea to',
    heroHeadlineHighlight: 'Production Product',
    heroDescription:
      'We handle the full product engineering process: discovery, scoping, architecture, development, and launch. Built for teams that need a true product engineering partner, not just code monkeys.',
    heroImage: '/services/product-engineering.png',
    heroImageCaption: 'Product engineering · Neominds',
    primaryCtaText: 'Discuss Your Product',
    secondaryCtaText: 'See Products We Built',
    trustPoints: [
      'Full product lifecycle ownership',
      'Discovery to production delivery',
      'Engineering and product thinking combined',
      'You own everything we build',
    ],
    overview: {
      statement: 'Most development engagements start too late: after product decisions have already been made badly. We start at the beginning, where the highest-impact product decisions are shaped.',
      paragraphs: [
        'Product engineering means combining product thinking with engineering execution. We help you figure out what to build, then build it with architectural rigor rather than blindly executing a flawed brief.',
        'We have taken products from a napkin description to live, revenue-generating software. We know what questions to ask at each stage and what mistakes to avoid.',
      ],
      keyTakeaway: 'A product partner that brings engineering expertise to every product choice, and rigorous product thinking to every engineering decision.',
    },
    mainProblemSolved: {
      problem: 'You have a product idea or an early-stage product that needs a team to take it from where it is to something that works in the market.',
      solution: 'An embedded product engineering team that handles discovery, scoping, architecture, development, and launch: keeping your executive team in the loop at every key architectural gate.',
      result: 'A working product, delivered to a defined scope and timeline, with the architecture in place to grow from there.',
    },
    targetAudience: {
      profiles: [
        { role: 'Founder', situation: 'Has a clear product vision and needs a team to execute it from scratch' },
        { role: 'Head of Product', situation: 'Has a new product initiative that needs dedicated engineering capacity and product expertise' },
        { role: 'CTO', situation: 'Building a new product line and needs an external team to move faster than the internal team allows' },
      ],
    },
    metrics: [
      { value: '100%', label: 'Full Lifecycle Ownership' },
      { value: '2 wks', label: 'First Working Prototype' },
      { value: '100%', label: 'IP Transferred at Launch' },
    ],
    capabilities: [
      {
        title: 'Product Discovery and Scoping',
        description: 'User research, requirement definition, feature prioritisation, and technical scoping before committing engineering capital.',
        tags: ['User research', 'Feature prioritisation', 'Technical scoping', 'Product roadmap'],
      },
      {
        title: 'MVP Engineering',
        description: 'Building the minimum viable product that tests your core hypothesis: fast, focused, and instrumented to generate real user insight.',
        tags: ['MVP development', 'Rapid prototyping', 'User testing', 'Iteration'],
      },
      {
        title: 'Full Product Development',
        description: 'From MVP to full product: feature expansion, performance hardening, and production infrastructure for general availability.',
        tags: ['Feature development', 'Scalability', 'Launch preparation', 'CI/CD'],
      },
      {
        title: 'Product Scaling and Iteration',
        description: 'Post-launch product iteration based on telemetry: introducing requested features, optimizing query latencies, and scaling into new markets.',
        tags: ['Feature velocity', 'A/B testing', 'Performance', 'Growth infrastructure'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery and product definition',
        description: 'We define what to build, why, and in what sequence through direct user research, competitive analysis, and technical feasibility.',
        deliverables: ['Product brief', 'Feature scope', 'Technical recommendation'],
      },
      {
        step: '02',
        title: 'Architecture and design',
        description: 'Technical architecture, data model, and UX design all locked in before development starts.',
        deliverables: ['Architecture document', 'Design system', 'Development roadmap'],
      },
      {
        step: '03',
        title: 'Iterative development',
        description: 'Two-week sprints with working software in staging. You review and prioritise the next sprint based on what you see.',
        deliverables: ['Working software per sprint', 'Sprint demos', 'Updated backlog'],
      },
      {
        step: '04',
        title: 'Launch and handover',
        description: 'Production launch, analytics setup, team handover, and a 60-day support window.',
        deliverables: ['Production launch', 'Analytics setup', 'Technical handover', 'Post-launch support'],
      },
    ],
    deliverables: [
      { title: 'Production product', category: 'Product', description: 'Fully launched product with all agreed features', format: 'Cloud deployment' },
      { title: 'Product documentation', category: 'Docs', description: 'Architecture, user guide, and technical documentation', format: 'Documentation portal' },
      { title: 'Analytics setup', category: 'Growth', description: 'Product analytics configured and tracking key metrics', format: 'Analytics dashboard' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'React Native'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'Go'] },
      { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'] },
      { category: 'AI / ML', items: ['OpenAI', 'Claude', 'LangChain', 'HuggingFace'] },
      { category: 'Cloud', items: ['AWS', 'Vercel', 'Google Cloud', 'Docker', 'Kubernetes'] },
    ],
    caseStudyQuote: {
      quote: 'We went from a rough idea to a paying customer base in six months. They handled both the product thinking and the engineering, and the output was better than we expected.',
      author: 'Co-Founder',
      role: 'Founder and CEO',
      company: 'Product Client',
      metric: 'First paying customers in month 4',
    },
    faqs: [
      { question: 'What does product engineering include?', answer: 'Discovery and scoping, architecture, design, full-stack development, testing, launch, and post-launch support: the full product development lifecycle.' },
      { question: 'How is this different from just custom software development?', answer: 'Product engineering includes the product thinking: what to build, in what priority sequence, and why. Custom software development starts from an existing technical specification.' },
      { question: 'How long does product engineering take?', answer: 'An MVP with core features takes 10–16 weeks. A full product ready for market typically takes 20–36 weeks.' },
      { question: 'Do we stay involved in decisions?', answer: 'Yes. You are involved in every sprint review and every key product or architecture decision. We execute, you retain ownership of the direction.' },
    ],
  },

};
