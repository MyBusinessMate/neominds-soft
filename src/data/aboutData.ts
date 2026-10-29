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
    id: 'darya-shkarubo',
    name: 'Darya Shkarubo',
    position: 'Head of Sales & Partnerships',
    image: '/uploads/ESThumbnails/81840/660.Darya-Shkarubo-1.png',
    type: 'Leader',
    bio: 'Darya leads strategic client engagements and commercial operations across Europe and North America. She aligns technical capabilities with measurable business outcomes, ensuring transparent roadmaps and long-term delivery partnerships.',
    focus: 'Enterprise Solutions & Client Partnerships',
    experience: '12+ years in international software consultancy',
    quote: 'True collaboration starts with honest commitments and zero inflated promises.',
  },
  {
    id: 'alexander-horbach',
    name: 'Alexander Horbach',
    position: 'Chief Financial Officer',
    image: '/uploads/ESThumbnails/81743/660.Alexander-Horbach.png',
    type: 'Leader',
    bio: 'Oversees financial governance, capital allocation, and compliance frameworks across global engineering hubs. Alexander guarantees financial stability and sustainable delivery velocity for multi-year enterprise contracts.',
    focus: 'Corporate Finance & Global Governance',
    experience: '15+ years scaling technology operations',
    quote: 'Sustainable growth is built on disciplined capital allocation and operational rigor.',
  },
  {
    id: 'valentine-koronevski',
    name: 'Valentine Koronevski',
    position: 'Senior Software Engineer & Systems Architect',
    image: '/uploads/ESThumbnails/139169/660.Valentine-Koronevski-2.jpg',
    type: 'Expert',
    bio: 'Specializes in distributed transaction processing, low-latency microservices, and event-driven architectures. Valentine regularly architects core backbones handling millions of daily events.',
    focus: 'Distributed Systems & Event Streams',
    experience: '10+ years in high-concurrency backend systems',
    quote: 'Simplicity in system design is the ultimate prerequisite for reliability.',
  },
  {
    id: 'evgeni-golovnev',
    name: 'Evgeni Golovnev',
    position: 'Principal Business Analyst',
    image: '/uploads/ESThumbnails/70265/660.Evgeni-Golovnev-2.jpg',
    type: 'Expert',
    bio: 'Bridges deep domain complexity with technical execution. Evgeni transforms ambiguous business demands into crisp, verifiable requirements, reducing delivery rework to near zero.',
    focus: 'Domain Modeling & Enterprise Workflows',
    experience: '8+ years leading requirements analysis for FinTech & Logistics',
    quote: 'Clarify the real domain problem before writing a single line of code.',
  },
  {
    id: 'esteban-potter-alvarado',
    name: 'Esteban (Potter) Alvarado',
    position: 'Senior AI Software Engineer',
    image: '/uploads/ESThumbnails/135645/660.Potter-Alvarado-2.jpg',
    type: 'Expert',
    bio: 'Pioneers applied LLM architectures, production RAG pipelines, and agentic workflows. Esteban ensures AI solutions meet deterministic safety gates and sub-second latency thresholds in live production environments.',
    focus: 'LLM Runtimes, RAG & Agentic Workflows',
    experience: '9+ years in production machine learning and Python systems',
    quote: 'Demos impress, but resilient architectures survive real production traffic.',
  },
  {
    id: 'arina-lozyuk',
    name: 'Arina Lozyuk',
    position: 'Head of Brand & Growth',
    image: '/uploads/ESThumbnails/81721/660.Arina-Lozyuk-1.png',
    type: 'Leader',
    bio: 'Drives global brand identity, technical storytelling, and market expansion. Arina communicates complex cloud and AI capabilities into compelling narratives that resonate with CTOs and enterprise architects.',
    focus: 'Brand Narrative & Global Market Expansion',
    experience: '9+ years building tech brands globally',
    quote: 'Authentic communication reflects genuine technical competence.',
  },
  {
    id: 'elena-kaliniuk',
    name: 'Elena Kaliniuk',
    position: 'Staff Business Intelligence & Data Architect',
    image: '/uploads/ESThumbnails/66671/660.Elena-Kaliniuk-2.png',
    type: 'Expert',
    bio: 'Designs scalable semantic data models, enterprise reporting pipelines, and real-time operational analytics dashboards for multi-tier enterprises.',
    focus: 'BI Architecture, Data Pipelines & Real-Time Dashboards',
    experience: '8+ years in enterprise analytics and modeling',
    quote: 'Data without structural coherence is noise; clear architecture brings signal.',
  },
  {
    id: 'alexandar-apostolov',
    name: 'Alexandar Apostolov',
    position: 'Chief Enterprise Architect',
    image: '/uploads/ESThumbnails/100899/660.Aleksandar-Apostolov-2.jpg',
    type: 'Expert',
    bio: 'Orchestrates mission-critical cloud transitions, multi-cloud Kubernetes clusters, and microservices topologies that guarantee zero-downtime rolling upgrades.',
    focus: 'Cloud Native Systems, Kubernetes & Zero-Downtime Migration',
    experience: '14+ years designing high-availability enterprise infrastructures',
    quote: 'Resilient architectures are built around failure isolation and continuous recovery.',
  },
  {
    id: 'tatyana-koryakina',
    name: 'Tatyana Koryakina',
    position: 'Delivery Principal & Location Head, EU',
    image: '/uploads/ESThumbnails/86332/660.Tatyana-Koryakina-2.jpg',
    type: 'Leader',
    bio: 'Leads our European delivery operations, setting world-class engineering standards and managing distributed pods across multiple continents.',
    focus: 'Delivery Operations, Agile Governance & Team Orchestration',
    experience: '11+ years leading multi-national engineering programs',
    quote: 'High-performing teams thrive on radical transparency and high autonomy.',
  },
  {
    id: 'andrey-stasishin',
    name: 'Andrey Stasishin',
    position: 'Principal Data & ML Systems Engineer',
    image: '/uploads/ESThumbnails/138916/660.Andrey-Stasishin_s.jpg',
    type: 'Expert',
    bio: 'Engineers feature stores, vector indexing engines, and robust training pipelines that turn exploratory machine learning models into reliable production services.',
    focus: 'Vector Indexing, Vector Databases & ML Ops',
    experience: '10+ years deploying large-scale data solutions',
    quote: 'An ML model is only as dependable as the pipeline feeding its inferences.',
  },
  {
    id: 'vlad-movsikov',
    name: 'Vlad Movsikov',
    position: 'Director, Global Delivery',
    image: '/uploads/ESThumbnails/85063/660.Vlad-Movsikov.png',
    type: 'Leader',
  },
  {
    id: 'alexander-kachaev',
    name: 'Alexander Kachaev',
    position: 'Chief Executive Officer',
    image: '/uploads/ESThumbnails/81727/660.Alexander-Kachaev-1.png',
    type: 'Leader',
  },
  {
    id: 'evgeniy-zimnitskiy',
    name: 'Evgeniy Zimnitskiy',
    position: 'Lead Software Developer',
    image: '/uploads/ESThumbnails/83360/660.Leaders.png',
    type: 'Expert',
  },
  {
    id: 'andrei-vakulski',
    name: 'Andrei Vakulski',
    position: 'Department Manager & Architecture',
    image: '/uploads/ESThumbnails/67031/660.Andrei-Vakulski-2.png',
    type: 'Leader',
  },
  {
    id: 'vlad-lenski',
    name: 'Vlad Lenski',
    position: 'Director, Business Development',
    image: '/uploads/ESThumbnails/86008/660.Vlad-Lenski-2.jpg',
    type: 'Leader',
  },
  {
    id: 'emanuel-hernandez-castillo',
    name: 'Emanuel Hernandez Castillo',
    position: 'Senior AI Software Engineer',
    image: '/uploads/ESThumbnails/140006/660.Emanuel-Hernandez-Castillo-2.png',
    type: 'Expert',
  },
  {
    id: 'margarita-lubeckaya',
    name: 'Margarita Lubeckaya',
    position: 'Senior Software Engineer',
    image: '/uploads/ESThumbnails/85293/660.Margarita-Lubeckaya-2.jpg',
    type: 'Expert',
  },
  {
    id: 'kristina-sivchenko',
    name: 'Kristina Sivchenko',
    position: 'QA Department Manager',
    image: '/uploads/ESThumbnails/53408/660.Kristina-Sivchenko-1.png',
    type: 'Leader',
  },
  {
    id: 'anna-aleksina',
    name: 'Anna Aleksina',
    position: 'Director, Human Resources',
    image: '/uploads/ESThumbnails/85945/660.Anna-Aleksina-2.jpg',
    type: 'Leader',
  },
  {
    id: 'alexander-zhuravok',
    name: 'Alexander Zhuravok',
    position: 'Senior Software Developer',
    image: '/uploads/ESThumbnails/64783/660.Alexander-Zhuravok-2.png',
    type: 'Expert',
  },
  {
    id: 'anton-philin',
    name: 'Anton Philin',
    position: 'Tech Lead of DevOps Practice',
    image: '/uploads/ESThumbnails/53819/660.philin-anton-1.png',
    type: 'Expert',
  },
  {
    id: 'yan-sychov',
    name: 'Yan Sychov',
    position: 'Head of PMO',
    image: '/uploads/ESThumbnails/127501/660.Yan-Sychov.png',
    type: 'Leader',
  },
  {
    id: 'mikhail-tyuzin',
    name: 'Mikhail Tyuzin',
    position: 'Senior Solution Architect',
    image: '/uploads/ESThumbnails/94001/660.Mikhail-Tyuzin-1.png',
    type: 'Expert',
  },
  {
    id: 'marina-khvistik',
    name: 'Marina Khvistik',
    position: 'Information Security Representative',
    image: '/uploads/ESThumbnails/72346/660.Marina-Khvistik-2.jpg',
    type: 'Expert',
  },
  {
    id: 'kirill-makarenko',
    name: 'Kirill Makarenko',
    position: 'Delivery Manager',
    image: '/uploads/ESThumbnails/112218/660.Kirill-Makarenko-3.jpg',
    type: 'Leader',
  },
  {
    id: 'maryia-dudarenko',
    name: 'Maryia Dudarenko',
    position: 'Senior UI/UX Designer',
    image: '/uploads/ESThumbnails/78724/660.Maryia-Dudarenko-2.jpg',
    type: 'Expert',
  },
  {
    id: 'vladimir-arefyev',
    name: 'Vladimir Arefyev',
    position: 'Solution Consultant & Enterprise Architect',
    image: '/uploads/ESThumbnails/141626/660.Vladimir-Arefev-2.png',
    type: 'Expert',
  },
  {
    id: 'andrei-ratkevich',
    name: 'Andrei Ratkevich',
    position: 'Director, Global IT',
    image: '/uploads/ESThumbnails/81716/660.Andrei-Ratkevich-1.png',
    type: 'Leader',
  },
  {
    id: 'kirill-gaidai',
    name: 'Kirill Gaidai',
    position: 'Senior Software Engineer',
    image: '/uploads/ESThumbnails/67984/660.Kirill-Gaidai-2.jpg',
    type: 'Expert',
  },
  {
    id: 'eugene-kileiko',
    name: 'Eugene Kileiko',
    position: 'Tech Lead',
    image: '/uploads/ESThumbnails/53416/660.Eugene-Kileiko-1.png',
    type: 'Expert',
  },
];

export const ABOUT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 1,
    quote:
      'We have been partnering with Neominds since 2006, so we’ve had time to become familiar with their professionalism and the quality of service they provide. I would highlight the great responsibility which my company assumes when solving critical tasks.',
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
      'Neominds has been providing services to Canopy for the last four years. Their skilled engineers understand our product needs, deliver quality platform increments following agile principles, respond flexibly to changes, and meet evolving deadlines. An external development team that remains steadfast in its commitment to service standards and business continuity is rare, and here Neominds have excelled.',
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

