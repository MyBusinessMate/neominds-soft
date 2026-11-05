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
    bio: 'Guides executive vision and engineering strategy at Neominds Tech Hub, prioritizing high-velocity, production-grade software delivery for global clients.',
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
    bio: 'Co-directs operational architecture and technical roadmaps at Neominds Tech Hub, shaping foundational development methodologies and execution pipelines.',
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
      'NeoMinds delivered critical engineering rigor and high accountability when building our healthcare and claims verification systems. Their team took complete ownership from initial architecture through production release.',
    author: 'Thomas Golden',
    role: 'Vice President of Engineering, USA',
    logo: '/uploads/2019/11/TruBridge-logo-color.svg',
    avatar: '/uploads/ESThumbnails/2092/200.tomgolden.png',
  },
  {
    id: 2,
    quote:
      'We have had a very positive experience with Neominds’ staff augmentation and dedicated engineering services. Their skilled, knowledgeable professionals integrated directly into our team, requiring minimal ramp-up time. Their expertise enhanced our project’s efficiency and quality. We confidently recommend Neominds for any organization seeking top-tier talent to augment their teams and drive successful outcomes.',
    author: 'Philipe Araujo',
    role: 'Director of Technology, MotiveRetail',
    logo: '/uploads/2010/04/motiveretail-color-1.svg',
  },
  {
    id: 3,
    quote:
      'Neominds’ team deeply understood our requirements and have been a proactive part of any problem-solving process. We have only experienced a professional approach to our projects, as well as a pleasant and trust-based collaboration. They’ve quickly found and added the necessary resources to the team when needed. I have no doubt that they will continue to be a valuable asset to any collaborators in the future.',
    author: 'Sasja Ihn Christensen',
    role: 'Global Transformation Lead, Maersk',
    logo: '/uploads/2010/04/maersk-color-1.svg',
  },
  {
    id: 4,
    quote:
      'We are extremely satisfied with our collaboration with Neominds. We engaged them for business analysis, UI/UX design, web development, and testing. The results were visually stunning designs and wireframes, remarkable UX suggestions, and an app fully aligned with our requirements. The team quickly understood our needs, worked flexibly within tight deadlines, and consistently delivered exceptional work.',
    author: 'Colin Cridland',
    role: 'Managing Director, Delphi Vision',
    logo: '/uploads/2010/04/delphivision-color.svg',
  },
  {
    id: 5,
    quote:
      'Since working with Neominds, we’ve grown our company from the building phase to the profitability phase. We’ve continued expanding upon their responsibilities, and they’ve continued to accept challenges and integrate with our team. They’ve become mission-critical resources for us.',
    author: 'Jesse MacNish',
    role: 'Chief Executive Officer, Plato',
    logo: '/uploads/ESThumbnails/34584/280.plato-logo.png',
    avatar: '/uploads/ESThumbnails/34584/280.plato-logo.png',
  },
  {
    id: 6,
    quote:
      'Neominds has played an impactful role in developing our SaaS app. Their developers and QA engineers show strong engagement, understand our needs, deliver solid results. They proactively improve security and performance of our app, report issues clearly, and help us deploy code with minimal bugs. Their highly qualified staff, UX focus, well-defined processes, and flexible approach continue to impress us.',
    author: 'Peter Gerard',
    role: 'Head of Product, Adventr',
    logo: '/uploads/2010/04/adventr-color.svg',
  },
  {
    id: 7,
    quote:
      'Since our first engagement, I have been impressed not only by the quality of work that Neominds has done for City Index but also their attention to detail and reliability on delivery dates.',
    author: 'Arthur Grimley',
    role: 'Senior Project Manager, City Index',
    avatar: '/uploads/ESThumbnails/3281/280.Testimonials_CityIndex_color_50x125.png',
  },
  {
    id: 8,
    quote:
      'The team at Neominds is very skilled and has been a pleasure to work with. They have enabled us to adopt new technologies as they add their diverse skillset to our team. I would not hesitate to recommend Neominds to anyone looking for a great partner.',
    author: 'Axure',
    role: 'Enterprise Platform Team',
    avatar: '/uploads/ESThumbnails/3277/280.Testimonials_Axure_color_50x125.png',
  },
  {
    id: 9,
    quote:
      'The quality of the work Neominds delivered has been excellent. You feel like they put you in first priority, they were very collaborative and responsive. If we had a set of requirements for them, the team understood that. If requirements shifted, they discussed it and came back with, ‘Yes, we’re able to do that.’ They were adaptable, flexible, and their prices are very competitive.',
    author: 'Senior Systems Analyst USA',
    role: 'Global Enterprise Consumer Brand',
    logo: '/uploads/2023/02/nissin.svg',
  },
  {
    id: 10,
    quote:
      'Neominds engineers understand our product needs, deliver quality platform increments following agile principles, respond flexibly to changes, and meet evolving deadlines. An external development team that remains steadfast in its commitment to service standards and business continuity is rare, and here Neominds has excelled.',
    author: 'Matt Hobbs',
    role: 'Chief Technology Officer, Canopy',
    logo: '/uploads/2010/04/canopy-color.svg',
  },
  {
    id: 11,
    quote:
      'To us, Neominds never felt like a 3rd party development house, but rather like an extension of our own company. The quality of the team and the work they produce set the foundation of our app success and helped us become an official app partner of Dubai’s biggest Fitness Event only 1 year after launching our MVP. Their talent is undeniable, the quality of the work is unquestionable and their dedication is unwavering.',
    author: 'Johan du Plessis',
    role: 'Founder & CEO, YFC',
    logo: '/uploads/2010/04/yfc-color.svg',
  },
  {
    id: 12,
    quote:
      'We want to say big and fat thank you from the bottom of our hearts for all your hard work. Because of you, CNote was able to create this innovative financial product and change the way money gets distributed and invested. You are a critical part of our team!',
    author: 'Yuliya Tarasava',
    role: 'Co-Founder & COO, CNote',
    logo: '/uploads/2020/07/13_A-web-platform-for-socially-conscious-investing_Logo_color.svg',
    avatar: '/uploads/ESThumbnails/1919/200.yuliya.tarasava.png',
  },
  {
    id: 13,
    quote:
      'The reliable data warehouse created by the Neominds team improves the quality of the client’s services, helps maintain a strong market position, and increases revenues while significantly reducing costs. The solution stands out due to Data integrity, Data loss prevention, Role-based access control, and Data Insights. We found their ability to develop a bespoke solution to address unique challenges to be impressive and unique.',
    author: 'Jane Belonogova',
    role: 'Director of Enterprise Analytics',
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

