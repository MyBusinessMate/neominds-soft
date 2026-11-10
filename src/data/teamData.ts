export interface BioPoint {
  number: number;
  heading: string;
  description: string;
}

export interface TeamMemberSocials {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  website?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  featured: boolean;
  order: number;
  image?: string;
  socials?: TeamMemberSocials;
  bioPoints: [BioPoint, BioPoint, BioPoint, BioPoint, BioPoint, BioPoint, BioPoint];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ali-asgar',
    name: 'Ali Asgar',
    role: 'Founder & CEO',
    featured: true,
    order: 1,
    image: '/team/Ali Asgar.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Guides executive vision and engineering strategy at NeoMinds TechHub, prioritizing high-velocity, production-grade software delivery for global clients.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Technology leadership, enterprise system design, cloud modernization, and strategic client technical advisory.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Steered high-growth engineering initiatives delivering scalable cloud platforms and digital infrastructure for international enterprises.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Champions transparency, continuous delivery, high individual ownership, and direct communication across all project tiers.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Built a resilient engineering culture and scalable service delivery frameworks that maintain consistent 99.99% availability SLAs.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Enterprise client partnerships, technical strategy, next-generation AI integrations, and team scalability.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Resilient software succeeds when architectural precision aligns directly with real business outcomes and durable user trust.',
      },
    ],
  },
  {
    id: 'abdul-khadar',
    name: 'Abdul Khadar',
    role: 'Co-founder',
    featured: true,
    order: 2,
    image: '/team/Abdul Khadar.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Co-directs operational architecture and technical roadmaps at NeoMinds TechHub, shaping foundational development methodologies and execution pipelines.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'System reliability engineering, operational strategy, scalable software architecture, and engineering governance.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Spearheaded internal engineering workflows, automated test harnesses, and delivery frameworks enabling rapid client project ramp-ups.',
      },
      {
        number: 4,
        heading: 'Engineering approach',
        description: 'Advocates for clean architectural boundaries, deterministic testing, and continuous feedback loops across the delivery lifecycle.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Engineered high-concurrency software foundations and mentored cross-disciplinary teams in modern cloud standards.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Operational scale, technology capability development, product lifecycle governance, and engineering excellence.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Rigorous engineering discipline and consistent delivery cadences compound into market-leading digital products.',
      },
    ],
  },
  {
    id: 'syeda-sidrah-fatima',
    name: 'Syeda Sidrah Fatima',
    role: 'Operations Manager',
    featured: true,
    order: 3,
    image: '/team/Syeda Sidrah Fatima.webp?v=2',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Coordinates organizational resource management, delivery logistics, and cross-disciplinary communication across all active engineering pods.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Agile operations, sprint governance, multi-time-zone delivery mechanisms, resource forecasting, and stakeholder coordination.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Structured seamless global delivery processes that reduced turnaround latency and preserved project velocity across international client accounts.',
      },
      {
        number: 4,
        heading: 'Operational approach',
        description: 'Ensures absolute clarity in sprint objectives, proactive blocker resolution, and transparent cross-team synchronization.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Instituted robust agile rituals and quality review checkpoints that ensure 100% on-time milestone demonstrations.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Project governance, agile operations, client communication protocols, quality audits, and team enablement.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Clear operational clarity and empathetic communication form the bedrock of exceptional engineering outcomes.',
      },
    ],
  },
  {
    id: 'mohiuddin-syed',
    name: 'Mohiuddin Syed',
    role: 'Backend Developer',
    featured: false,
    order: 4,
    image: '/team/Mohiuddin Syed.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Architects and builds high-throughput server-side architectures, REST and GraphQL APIs, and scalable distributed microservices.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Distributed backend systems, database normalization & indexing, low-latency API design, and asynchronous message queues.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Engineered critical data processing pipelines handling millions of monthly records with sub-100ms response latencies.',
      },
      {
        number: 4,
        heading: 'Engineering approach',
        description: 'Designs systems for data integrity, stateless scalability, defensive programming, and rigorous unit and integration testing.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Optimized complex query execution plans reducing database compute loads by over 40% on production workloads.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'PostgreSQL, Node.js, distributed caching with Redis, microservice architectures, and robust API security.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'A resilient backend is silent, deterministic, and effortlessly scales under peak concurrent demand.',
      },
    ],
  },
  {
    id: 'mohammed-ayaan-ur-rahman',
    name: 'Mohammed Ayaan Ur Rahman',
    role: 'DevOps Engineer',
    featured: false,
    order: 5,
    image: '/team/Mohammed Ayaan Ur Rahman.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Orchestrates cloud infrastructure automation, container platforms, and resilient CI/CD deployment pipelines across enterprise environments.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Infrastructure as Code (Terraform), Docker, Kubernetes, CI/CD pipeline automation, observability, and cloud security compliance.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Implemented zero-downtime deployment pipelines and multi-region staging environments that cut release cycles from days to minutes.',
      },
      {
        number: 4,
        heading: 'Engineering approach',
        description: 'Enforces immutable infrastructure, automated testing quality gates, and automated disaster recovery protocols.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Built enterprise-grade containerized cluster topologies with automated auto-scaling and proactive observability alerts.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Cloud cost optimization, automated security scanning, container orchestration, and continuous uptime reliability.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Automate everything, verify continuously, and ensure deployments are completely friction-free.',
      },
    ],
  },
  {
    id: 'shezan-ahmed',
    name: 'Shezan Ahmed',
    role: 'Product Developer',
    featured: false,
    order: 6,
    image: '/team/Shezan Ahmed.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Transforms complex product requirements and domain logic into cohesive, intuitive, and high-performance software applications.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Product lifecycle engineering, full-stack application development, modern frontend frameworks, and design system integration.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Delivered foundational web applications and client platforms from technical discovery to production deployment across multiple industries.',
      },
      {
        number: 4,
        heading: 'Engineering approach',
        description: 'Balances user-centric interaction design with rigorous code quality, maintainable patterns, and modular component reusability.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Designed and shipped multi-tenant software features that streamlined workflows and boosted daily active user productivity.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Product UX architecture, React and TypeScript ecosystems, rapid feature prototyping, and scalable client solutions.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Great products emerge at the intersection of empathetic UX, robust code, and obsessive attention to detail.',
      },
    ],
  },
  {
    id: 'zain-atif',
    name: 'Zain Atif',
    role: 'Frontend Developer',
    featured: false,
    order: 7,
    image: '/team/Zain Atif.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Specializes in crafting fast, accessible, and responsive user interfaces with pixel-perfect precision and fluid micro-interactions.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'React, TypeScript, CSS architecture, web performance optimization, responsive layouts, and WCAG accessibility standards.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Engineered high-performance web interfaces achieving 95+ Core Web Vitals across diverse mobile and desktop form factors.',
      },
      {
        number: 4,
        heading: 'Engineering approach',
        description: 'Prioritizes semantic HTML, clean CSS patterns, modular components, and smooth 60fps animations with minimal bundle overhead.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Developed unified UI component libraries that reduced design-to-code turnaround time across multidisciplinary client projects.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Reactive client architecture, mobile-first design systems, state management, and modern browser APIs.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Fluid interactions, immediate responsiveness, and clean typography make software feel effortless to use.',
      },
    ],
  },
  {
    id: 'abdul-samad',
    name: 'Abdul Samad',
    role: 'Full Stack Developer',
    featured: false,
    order: 8,
    image: '/team/Abdul Samad.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Builds end-to-end full-stack web platforms, bridging database models, server business logic, and modern interactive frontends.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Full-stack JavaScript/TypeScript, RESTful API integration, SQL/NoSQL databases, authentication flows, and cloud backends.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Developed complete end-to-end applications integrating third-party payment gateways, real-time messaging, and interactive dashboards.',
      },
      {
        number: 4,
        heading: 'Engineering approach',
        description: 'Emphasizes cohesive full-stack contracts, type safety from database to UI, and scalable component architectures.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Shipped resilient production features enabling secure role-based access control and high-performance data visualization.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Full-stack application architecture, API development, third-party integrations, and automated testing suites.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Full-stack harmony is achieved when data models and frontend components speak the exact same language.',
      },
    ],
  },
  {
    id: 'ahmed-ba-suleman',
    name: 'Ahmed Ba Suleman',
    role: 'AI Automations Specialist',
    featured: false,
    order: 9,
    image: '/team/Ahmed Ba Suleman.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
      website: 'https://neominds-soft.vercel.app',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Designs and builds autonomous AI agentic workflows, multi-tool LLM integrations, and enterprise process automations.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Autonomous AI agents, RAG pipeline orchestration, prompt engineering, API workflow automations, and intelligent document processing.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Built production AI automation pipelines that eliminate manual repetitive tasks, reducing document processing times from hours to seconds.',
      },
      {
        number: 4,
        heading: 'Engineering approach',
        description: 'Focuses on deterministic guardrails, structured JSON outputs, latency budgeting, and robust fallback mechanisms in AI workflows.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Architected domain-specific AI workflows integrating custom vector search and automated tool-calling integrations for enterprise clients.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Enterprise AI agents, retrieval-augmented generation (RAG), vector databases, workflow automation engines, and LLM evaluation.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'True AI transformation isn\'t about novelty; it\'s about eliminating friction and giving humans superpowers.',
      },
    ],
  },
];
