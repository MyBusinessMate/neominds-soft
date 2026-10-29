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
    role: 'Founder and CEO',
    featured: true,
    order: 1,
    image: '',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      website: 'https://neomindstechhub.com',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Guides executive vision and engineering strategy, prioritizing practical, production-grade software delivery for global clients.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Technology leadership, enterprise system design, organizational velocity, and strategic client advisory.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Steered cross-functional teams building core cloud platforms and digital infrastructure for high-growth enterprises.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Champions transparency, continuous delivery, high individual ownership, and direct communication across all project tiers.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Established rigorous engineering culture and scalable service delivery frameworks that maintain 99.99% availability SLAs.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Enterprise client partnerships, technical strategy, next-generation AI integrations, and team scalability.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Software succeeds when architecture aligns directly with real business outcomes and durable user value.',
      },
    ],
  },
  {
    id: 'mohd-khadar',
    name: 'Mohd Khadar',
    role: 'Co founder',
    featured: true,
    order: 2,
    image: '',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      website: 'https://neomindstechhub.com',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Co-directs operational architecture and technical capabilities, shaping foundational product methodologies and execution pipelines.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Operational strategy, technical capability development, product lifecycle governance, and engineering operations.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Spearheaded internal engineering workflows and operational scaffolding that enabled rapid project ramp-ups.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Focuses on pragmatic problem-solving, structured milestones, and unblocking engineering teams through clear priorities.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Instituted consistent sprint cadences and transparent delivery reviews across all active client accounts.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Operational scale, cross-pod collaboration, client relationship continuity, and engineering talent development.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Consistency in day-to-day execution compounds into transformative long-term progress.',
      },
    ],
  },
  {
    id: 'syeda-sidra-fatima',
    name: 'Syeda Sidra Fatima',
    role: 'Operations Manager',
    featured: true,
    order: 3,
    image: '',
    socials: {
      linkedin: 'https://linkedin.com',
      website: 'https://neomindstechhub.com',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Coordinates organizational resource management, delivery logistics, and cross-disciplinary communication across engineering pods.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Project governance, agile operations, stakeholder coordination, quality audits, and team enablement.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Structured multi-time-zone delivery mechanisms that reduced turnaround latency and preserved project velocity.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Promotes structured documentation, proactive risk identification, and an empathetic, supportive team environment.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Optimized project onboarding processes, ensuring seamless integration between client stakeholders and development teams.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Resource planning, process standardization, delivery schedule precision, and client operational compliance.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Clear operational clarity and reliable communication form the bedrock of exceptional engineering outcomes.',
      },
    ],
  },
  {
    id: 'mohd-ayaan',
    name: 'Mohd Ayaan',
    role: 'DevOps Engineer',
    featured: false,
    order: 4,
    image: '',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Specializes in cloud infrastructure automation, container orchestration, and continuous integration and deployment pipelines.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'CI/CD automation, cloud architecture (AWS/GCP), Docker/Kubernetes, infrastructure as code, and observability.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Engineered automated multi-environment release pipelines and zero-downtime deployment strategies for enterprise platforms.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Advocates for automated guardrails, immutable infrastructure, and eliminating manual operational bottlenecks.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Reduced build and test pipeline runtimes while hardening cloud network security and audit compliance.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Infrastructure reliability, automated disaster recovery, secret management, and cost-effective cloud scaling.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Reliability is not an afterthought; it is built into the pipeline from the very first commit.',
      },
    ],
  },
  {
    id: 'mohd-samad',
    name: 'Mohd Samad',
    role: 'Project Manager & Frontend Engineer',
    featured: false,
    order: 5,
    image: '',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Combines technical frontend engineering depth with sprint project management to translate UI/UX visions into performant web applications.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'React, TypeScript, state management, modern CSS/animation, sprint planning, and client milestone delivery.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Delivered intuitive, responsive frontend architectures with smooth micro-interactions and accessible component systems.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Bridges designer intent with technical feasibility while maintaining transparent sprint status across all client touchpoints.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Maintained unbroken weekly release cadences across multiple concurrent web application deployments.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Design system implementation, Core Web Vitals optimization, responsive ergonomics, and agile delivery management.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'The best software feels effortless to users because the engineering behind it was meticulous and disciplined.',
      },
    ],
  },
  {
    id: 'mohd-mohiuddin',
    name: 'Mohd Mohiuddin',
    role: 'Backend Engineer',
    featured: false,
    order: 6,
    image: '',
    socials: {
      linkedin: 'https://linkedin.com',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Focuses on robust server-side architecture, relational and document database modeling, and high-throughput REST/GraphQL APIs.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Node.js, Python, PostgreSQL, Redis caching, API security, and asynchronous message queue design.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Designed scalable database schemas and data processing layers capable of managing real-time transactional workloads.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Emphasizes data integrity, comprehensive unit testing, and defensive programming for rock-solid backend services.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Architected performant query optimization routines and secure role-based authorization services for multi-tenant applications.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Data layer modeling, distributed event streaming, server resilience, and API performance profiling.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'Solid foundations make complex systems maintainable; clean data architecture outlasts transient UI trends.',
      },
    ],
  },
  {
    id: 'mohd-shezan-ahmed',
    name: 'Mohd Shezan Ahmed',
    role: 'AI Product Developer',
    featured: false,
    order: 7,
    image: '/images/leaders/leader_shezan.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      website: 'https://neomindstechhub.com',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Builds AI-powered product features, LLM agent workflows, and full-stack software applications that deliver tangible business value.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'LLM orchestration, prompt engineering, agentic workflow architecture, full-stack TypeScript, and interactive UI systems.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Implemented intelligent automation tools and AI assistant modules that streamline complex enterprise knowledge retrieval.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Advocates for AI where it legitimately saves time or improves accuracy, anchoring experimental features to production reliability.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Engineered deterministic AI workflows and context-aware interfaces with low latency and verifiable output quality.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'Agentic tool-use, semantic search pipelines, interactive product design, and AI developer tooling.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'AI creates genuine value only when built upon rock-solid software and designed around real human workflows.',
      },
    ],
  },
  {
    id: 'zain-atif-khan',
    name: 'Zain Atif Khan',
    role: 'AI Product Developer',
    featured: false,
    order: 8,
    image: '',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
    bioPoints: [
      {
        number: 1,
        heading: 'Background',
        description: 'Engineers intelligent applications, vector search systems, and machine-learning enhanced features that integrate cleanly into web stacks.',
      },
      {
        number: 2,
        heading: 'Expertise',
        description: 'Applied machine learning, vector embeddings, Python/TypeScript backend services, and automated workflow pipelines.',
      },
      {
        number: 3,
        heading: 'Career highlights',
        description: 'Built semantic retrieval systems and customized inference pipelines for automated document classification and processing.',
      },
      {
        number: 4,
        heading: 'Leadership approach',
        description: 'Prioritizes rigorous evaluation, deterministic testing of model responses, and maintaining high software engineering discipline.',
      },
      {
        number: 5,
        heading: 'Key achievements',
        description: 'Developed scalable embedding indexing pipelines that reduced query latency for large multi-document knowledge bases.',
      },
      {
        number: 6,
        heading: 'Areas of focus',
        description: 'RAG architectures, fine-tuning evaluations, full-stack AI features, and automated data extraction.',
      },
      {
        number: 7,
        heading: 'Personal philosophy',
        description: 'The real innovation in AI is making advanced models operate reliably, securely, and predictably in production.',
      },
    ],
  },
];

