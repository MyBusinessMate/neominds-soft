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
      'NeoMinds TechHub re-architected our high-concurrency coding exam platform to handle 100,000+ simultaneous students across major universities with zero downtime and sub-second code evaluation latencies.',
    author: 'Karunakar T.',
    role: 'VP of Technology, ByteXL',
    logo: '/images/company-logos/bytexl.webp',
  },
  {
    id: 2,
    quote:
      'NeoMinds TechHub built our automated freight dispatching engine and real-time load matching microservices. Their engineering team moves fast, writes rock-solid code, and solved complex geospatial routing challenges.',
    author: 'Abhinav Sharma',
    role: 'Head of Engineering, Fero Logistics',
    logo: '/images/company-logos/fero.svg?v=2',
  },
  {
    id: 3,
    quote:
      'Their team took full ownership of our core microservices migration and Kubernetes pipelines. Deployments that previously took hours now deploy continuously in minutes with zero service interruption.',
    author: 'Marcus Weber',
    role: 'Principal Architect, Interzoon',
    logo: '/images/company-logos/interzoon-logo.png',
  },
  {
    id: 4,
    quote:
      'NeoMinds TechHub engineered our real-time inventory monitoring application and automated alert pipelines. The platform gives retailers instant visibility across supply chains and reduced shrinkage dramatically.',
    author: "Liam O'Connor",
    role: 'Product Director, Expiroo',
    logo: '/images/company-logos/expiroo-logo.webp',
  },
  {
    id: 5,
    quote:
      'The team built scalable inference pipelines and production-grade vector search workflows for our AI platform. They bridged research models into high-availability production APIs with outstanding speed.',
    author: 'Dr. Elena Rostova',
    role: 'Chief AI Scientist, AiGuroo',
    logo: '/images/company-logos/AiGuroo.svg',
  },
  {
    id: 6,
    quote:
      'NeoMinds TechHub delivered our core underwriting rails and banking API integrations with institutional-grade security. Their weekly sprints and transparent code reviews gave our stakeholders total confidence.',
    author: 'Tariq Al-Mansoor',
    role: 'Co-Founder & CTO, Fundbot',
    logo: '/images/company-logos/fundbot.png?v=2',
  },
];

export const ABOUT_LOCATION = {
  city: 'Hyderabad, Telangana State',
  name: 'Official Headquarters',
  address: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh',
  postalCode: 'Hyderabad-500001, Telangana State',
  fullAddress: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh, Hyderabad-500001, Telangana State',
  email: 'letstalk@neomindstechhub.com',
  phoneUK: '+44 7780 395866',
  phoneIndia: '+91 95156 54804',
};

// Maintained for backward compatibility if referenced
export const ABOUT_LOCATIONS = {
  americas: [
    {
      city: 'Hyderabad, Telangana State',
      address: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh',
      postalCode: 'Hyderabad-500001, Telangana State',
      email: 'letstalk@neomindstechhub.com',
      phoneUK: '+44 7780 395866',
      phoneIndia: '+91 95156 54804',
    },
  ],
  europe: [],
};

