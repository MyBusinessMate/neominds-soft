export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  type: 'Leader' | 'Expert';
  bio?: string;
  focus?: string;
  experience?: string;
  quote?: string;
}

export interface ClientTestimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
  logo?: string;
  avatar?: string;
}

export interface LocationItem {
  city: string;
  address: string;
  postalCode: string;
  phone: string;
}

export const ABOUT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ali-asgar',
    name: 'Ali Asgar',
    position: 'Founder & CEO',
    image: '/team/Ali Asgar.webp',
    type: 'Leader',
    bio: 'Guides executive vision and engineering strategy at NeoMinds TechHub, prioritizing high-velocity, production-grade software delivery for global clients.',
    focus: 'Enterprise Solutions & AI Transformation',
    experience: 'Experienced enterprise technologist & founder',
    quote: 'Resilient software succeeds when architectural precision aligns directly with real business outcomes and durable user trust.',
  },
  {
    id: 'abdul-khadar',
    name: 'Abdul Khadar',
    position: 'Co-founder',
    image: '/team/Abdul Khadar.webp',
    type: 'Leader',
    bio: 'Co-directs operational architecture and technical roadmaps at NeoMinds TechHub, shaping foundational development methodologies and execution pipelines.',
    focus: 'System Reliability & Scalable Architecture',
    experience: 'Senior systems engineer & tech leader',
    quote: 'Rigorous engineering discipline and consistent delivery cadences compound into market-leading digital products.',
  },
  {
    id: 'syeda-sidra-fatima',
    name: 'Syeda Sidrah Fatima',
    position: 'Operations Manager',
    image: '/team/Syeda Sidrah Fatima.webp',
    type: 'Leader',
    bio: 'Coordinates organizational resource management, delivery logistics, and cross-disciplinary communication across all active engineering pods.',
    focus: 'Agile Operations & Delivery Governance',
    experience: 'Expert in agile project mechanisms & delivery',
    quote: 'Clear operational clarity and reliable communication form the bedrock of exceptional engineering outcomes.',
  },
  {
    id: 'mohiuddin-syed',
    name: 'Mohiuddin Syed',
    position: 'Backend Developer',
    image: '/team/Mohiuddin Syed.webp',
    type: 'Expert',
    bio: 'Architects and builds high-throughput server-side architectures, REST and GraphQL APIs, and scalable distributed microservices.',
    focus: 'Distributed Systems & Database Optimization',
    experience: 'High-concurrency backend & API engineering',
    quote: 'A resilient backend is silent, deterministic, and effortlessly scales under peak concurrent demand.',
  },
  {
    id: 'mohammed-ayaan-ur-rahman',
    name: 'Mohammed Ayaan Ur Rahman',
    position: 'DevOps Engineer',
    image: '/team/Mohammed Ayaan Ur Rahman.webp',
    type: 'Expert',
    bio: 'Orchestrates cloud infrastructure automation, container platforms, and resilient CI/CD deployment pipelines across enterprise environments.',
    focus: 'Cloud Automation, Kubernetes & DevSecOps',
    experience: 'Automated CI/CD & infrastructure-as-code',
    quote: 'Automate everything, verify continuously, and ensure deployments are completely friction-free.',
  },
  {
    id: 'shezan-ahmed',
    name: 'Shezan Ahmed',
    position: 'Product Developer',
    image: '/team/Shezan Ahmed.webp',
    type: 'Expert',
    bio: 'Transforms complex product requirements and domain logic into cohesive, intuitive, and high-performance software applications.',
    focus: 'Product Engineering & Full-Stack Systems',
    experience: 'End-to-end full-stack feature delivery',
    quote: 'Great products emerge at the intersection of empathetic UX, robust code, and obsessive attention to detail.',
  },
  {
    id: 'zain-atif',
    name: 'Zain Atif',
    position: 'Frontend Developer',
    image: '/team/Zain Atif.webp',
    type: 'Expert',
    bio: 'Specializes in crafting fast, accessible, and responsive user interfaces with pixel-perfect precision and fluid micro-interactions.',
    focus: 'Modern Reactive UI & Web Performance',
    experience: 'Responsive frontend architecture & design systems',
    quote: 'Fluid interactions, immediate responsiveness, and clean typography make software feel effortless to use.',
  },
  {
    id: 'abdul-samad',
    name: 'Abdul Samad',
    position: 'Full Stack Developer',
    image: '/team/Abdul Samad.webp',
    type: 'Expert',
    bio: 'Builds end-to-end full-stack web platforms, bridging database models, server business logic, and modern interactive frontends.',
    focus: 'Full-Stack Web Platforms & API Integrations',
    experience: 'Full-stack application engineering',
    quote: 'Full-stack harmony is achieved when data models and frontend components speak the exact same language.',
  },
  {
    id: 'ahmed-ba-suleman',
    name: 'Ahmed Ba Suleman',
    position: 'AI Automations Specialist',
    image: '/team/Ahmed Ba Suleman.webp',
    type: 'Expert',
    bio: 'Designs and builds autonomous AI agentic workflows, multi-tool LLM integrations, and enterprise process automations.',
    focus: 'Autonomous Agents & Intelligent Pipelines',
    experience: 'Production AI workflows & LLM orchestration',
    quote: "True AI transformation isn't about novelty; it's about eliminating friction and giving humans superpowers.",
  },
];

export const ABOUT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 1,
    quote:
      'NeoMinds TechHub built our core operational workflows and customer management platform from scratch. Their team delivered reliable, high-throughput systems that streamlined our client operations from week one.',
    author: 'Daniel Brooks',
    role: 'Operations Director, MyBusinessMate',
    logo: '/images/company-logos/mybusinessmate.png',
  },
  {
    id: 2,
    quote:
      'NeoMinds TechHub delivered our autonomous multi-project AI assistant and velocity engine with exceptional technical discipline. Their engineers integrated directly into our sprints and eliminated cross-team coordination bottlenecks.',
    author: 'Michael Anderson',
    role: 'Head of Engineering, Dotcomweavers',
    logo: '/images/company-logos/dotcomweavers.png',
  },
  {
    id: 3,
    quote:
      'NeoMinds TechHub engineered our HIPAA-ready telehealth platform and clinical wellness mobile app. Their healthcare AI architecture accelerated patient consultation routing while maintaining strict compliance standards throughout.',
    author: 'Sarah Mitchell',
    role: 'Product Lead, Mindspace.ai',
    logo: '/images/company-logos/mindspace-ai.png',
  },
  {
    id: 4,
    quote:
      'Our e-commerce inventory sync and high-volume order processing pipeline was deployed flawlessly by NeoMinds TechHub. Real-time stock reconciliation and automated fulfillment cut our order processing latency dramatically.',
    author: 'James Wilson',
    role: 'Technology Director, Laptomart',
    logo: '/images/company-logos/laptomart.png',
  },
  {
    id: 5,
    quote:
      'The custom enterprise ERP integrations and distributed data pipelines NeoMinds TechHub engineered allowed our retail network to synchronize catalog updates and point-of-sale data with 99.9% uptime.',
    author: 'Robert Bennett',
    role: 'Infrastructure Architect, Tecnomart',
    logo: '/images/company-logos/tecnomart.png',
  },
  {
    id: 6,
    quote:
      'NeoMinds TechHub engineered our real-time streaming analytics engine and IoT telemetry ingestion platform. Their deep systems engineering expertise ensured zero message loss across millions of daily industrial machine data points.',
    author: 'Alexander Reed',
    role: 'VP of Platform Engineering, Oden',
    logo: '/images/company-logos/oden.png',
  },
];

export const ABOUT_LOCATION = {
  city: 'Hyderabad, Telangana State',
  name: 'Official Headquarters',
  address: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh',
  postalCode: 'Hyderabad-500001, Telangana State',
  fullAddress: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh, Hyderabad-500001, Telangana State',
  email: 'contact@neomindstechhub.com',
};

// Maintained for backward compatibility if referenced
export const ABOUT_LOCATIONS = {
  americas: [
    {
      city: 'Hyderabad, Telangana State',
      address: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh',
      postalCode: 'Hyderabad-500001, Telangana State',
      email: 'contact@neomindstechhub.com',
    },
  ],
  europe: [],
};

