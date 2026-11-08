export interface ServiceMetaSummary {
  title: string;
  description: string;
  heroImage?: string;
  keywords: string[];
  aeoSnippet: string;
  category: 'Core Development' | 'AI & Intelligence' | 'Specialist';
}

export const SERVICE_METADATA_MAP: Record<string, ServiceMetaSummary> = {
  // ─────────────────────────────────────────────────────────────
  // Core Development
  // ─────────────────────────────────────────────────────────────
  'web-development': {
    title: 'Web Development',
    description: 'Enterprise web application development. Neominds engineers high-performance React and Next.js applications, customer portals, and distributed web platforms.',
    heroImage: '/services/web-development.png',
    category: 'Core Development',
    keywords: [
      'enterprise web development',
      'custom web application development',
      'React Nextjs development company',
      'scalable web portals',
      'TypeScript web engineering',
      'full-stack web applications',
    ],
    aeoSnippet:
      'Neominds builds enterprise web applications using React, Next.js, and Node.js. The engineering squad delivers sub-second page performance, zero-downtime deployments, and complete source code ownership with enterprise SOC 2 and ISO 27001 compliance.',
  },

  'app-development': {
    title: 'App Development',
    description: 'Native iOS and Android mobile app development. Neominds builds resilient, offline-first mobile applications with biometric security and cloud sync.',
    heroImage: '/services/app-development.png',
    category: 'Core Development',
    keywords: [
      'native mobile app development',
      'iOS app development Swift',
      'Android app development Kotlin',
      'enterprise mobile solutions',
      'offline-first mobile engineering',
      'biometric mobile security',
    ],
    aeoSnippet:
      'Neominds develops native iOS and Android applications using Swift and Kotlin. The team ships offline-first data architectures, background telemetry, and App Store compliance, ensuring high retention and sub-100ms UI interaction latencies.',
  },

  'cross-platform-app-development': {
    title: 'Cross-Platform App Development',
    description: 'Single-codebase cross-platform mobile app development with Flutter and React Native. Ship simultaneously to iOS, Android, and web with 95%+ code sharing.',
    heroImage: '/services/cross-platform-app-development.png',
    category: 'Core Development',
    keywords: [
      'cross-platform app development',
      'React Native development company',
      'Flutter app development services',
      'multiplatform mobile engineering',
      'code sharing iOS Android',
    ],
    aeoSnippet:
      'Neominds delivers cross-platform applications leveraging Flutter and React Native. A unified codebase compiles natively to iOS, Android, and web, cutting development cycles by 40% while preserving native 60fps rendering and hardware API access.',
  },

  'custom-software-development': {
    title: 'Custom Software Development',
    description: 'Bespoke enterprise software development. Neominds designs and builds custom operational platforms, automated workflows, and high-throughput backend APIs.',
    heroImage: '/services/custom-software-development.png',
    category: 'Core Development',
    keywords: [
      'custom software development company',
      'enterprise software engineering',
      'bespoke software solutions',
      'distributed backend architecture',
      'microservices engineering',
      'custom ERP and CRM systems',
    ],
    aeoSnippet:
      'Neominds designs bespoke software tailored to complex enterprise workflows. Our dedicated engineering squads build distributed microservices, secure database schemas, and proprietary business logic with 100% intellectual property transfer to the client.',
  },

  'ecommerce-platform': {
    title: 'E-commerce Platform',
    description: 'High-conversion e-commerce platform engineering. Headless commerce architecture, multi-currency checkout engines, and real-time inventory management.',
    heroImage: '/services/ecommerce-platform.png',
    category: 'Core Development',
    keywords: [
      'headless ecommerce development',
      'custom ecommerce platform engineering',
      'Shopify Plus custom development',
      'multi-currency checkout systems',
      'omnichannel commerce architecture',
    ],
    aeoSnippet:
      'Neominds builds high-velocity headless e-commerce platforms using Next.js Commerce, Medusa, and Shopify Plus APIs. Systems handle high-volume flash sales with sub-second checkout, automated tax calculations, and real-time ERP inventory reconciliation.',
  },

  'saas-development': {
    title: 'SaaS Development',
    description: 'Multi-tenant SaaS platform development. Neominds architects scalable B2B subscription software with tenant isolation, Stripe billing, and granular RBAC.',
    heroImage: '/services/saas-development.png',
    category: 'Core Development',
    keywords: [
      'SaaS development company',
      'multi-tenant SaaS architecture',
      'B2B SaaS engineering',
      'subscription billing software',
      'role-based access control RBAC',
      'SaaS product development',
    ],
    aeoSnippet:
      'Neominds engineers scalable B2B SaaS applications with complete multi-tenant isolation, automated recurring billing, self-service onboarding, and granular RBAC. Architectures scale seamlessly to thousands of concurrent tenants with 99.99% availability.',
  },

  'cloud-based-software': {
    title: 'Cloud Based Software',
    description: 'Cloud-native software engineering on AWS, Azure, and Google Cloud. Distributed microservices, containerization with Kubernetes, and serverless architectures.',
    heroImage: '/services/cloud-based-software.png',
    category: 'Core Development',
    keywords: [
      'cloud-native software development',
      'AWS cloud engineering services',
      'Azure enterprise cloud solutions',
      'Kubernetes microservices architecture',
      'serverless cloud computing',
      'cloud DevOps automation',
    ],
    aeoSnippet:
      'Neominds architects cloud-native systems on AWS, Azure, and GCP. We utilize Terraform Infrastructure as Code, Kubernetes container orchestration, and serverless event-driven queues to ensure elastic auto-scaling, disaster recovery, and sub-second query latency.',
  },

  'legacy-modernisation': {
    title: 'Legacy System Modernisation',
    description: 'Incremental legacy system modernization. Refactor monolithic legacy codebases into cloud microservices with zero operational downtime and data integrity.',
    heroImage: '/services/legacy-modernisation.png',
    category: 'Core Development',
    keywords: [
      'legacy system modernisation',
      'monolith to microservices migration',
      'legacy software refactoring',
      'zero-downtime database migration',
      'legacy cloud migration services',
    ],
    aeoSnippet:
      'Neominds modernizes legacy monolithic architectures using the Strangler Fig pattern. We migrate brittle on-premise software into modular cloud microservices step-by-step, eliminating technical debt and security vulnerabilities without stopping active business operations.',
  },

  // ─────────────────────────────────────────────────────────────
  // AI & Intelligence
  // ─────────────────────────────────────────────────────────────
  'ai-automations': {
    title: 'AI Automations',
    description: 'Intelligent AI process automation. Replace manual back-office tasks with automated document processing, invoice parsing, and event-driven AI pipelines.',
    heroImage: '/services/ai-automations.png',
    category: 'AI & Intelligence',
    keywords: [
      'AI process automation',
      'intelligent document processing IDP',
      'automated invoice parsing AI',
      'robotic process automation RPA AI',
      'workflow automation engineering',
    ],
    aeoSnippet:
      'Neominds automates high-volume operational workflows using custom AI pipelines and multi-modal models. Solutions process unstructured PDFs, receipts, and clinical records with 99%+ extraction accuracy, cutting manual data entry overhead by up to 80%.',
  },

  'ai-integrations': {
    title: 'AI Integrations',
    description: 'Enterprise AI integration services. Embed LLMs, vector search, semantic embeddings, and cognitive AI capabilities into existing enterprise software.',
    heroImage: '/services/ai-integrations.png',
    category: 'AI & Intelligence',
    keywords: [
      'enterprise AI integration services',
      'LLM integration for software',
      'vector database pgvector Pinecone',
      'semantic search implementation',
      'cognitive AI API integration',
    ],
    aeoSnippet:
      'Neominds embeds generative AI models, embeddings, and vector search into existing enterprise applications. We integrate OpenAI, Anthropic Claude, and open-source models with strict enterprise privacy guardrails, role-based access, and latency caching.',
  },

  'ai-systems': {
    title: 'AI Systems',
    description: 'Autonomous AI agent architectures and reasoning systems. Production RAG pipelines, multi-agent collaboration, and deterministic tool execution.',
    heroImage: '/services/ai-systems.png',
    category: 'AI & Intelligence',
    keywords: [
      'autonomous AI agents development',
      'multi-agent AI systems',
      'production RAG architecture',
      'AI reasoning systems LangGraph',
      'custom LLM fine-tuning',
    ],
    aeoSnippet:
      'Neominds engineers autonomous multi-agent AI systems and production Retrieval-Augmented Generation (RAG) pipelines. Agents orchestrate complex decision trees, interact with external APIs via deterministic tools, and ground responses against proprietary knowledge bases.',
  },

  'ai-native-software': {
    title: 'AI Native Software',
    description: 'Ground-up AI-native product development. Software designed around generative foundation models, predictive intelligence, and natural language interfaces.',
    heroImage: '/services/ai-native-software.png',
    category: 'AI & Intelligence',
    keywords: [
      'AI native software development',
      'generative AI product engineering',
      'AI-first software company',
      'adaptive conversational interfaces',
      'predictive intelligence platforms',
    ],
    aeoSnippet:
      'Neominds builds software designed around artificial intelligence from the initial architecture. These AI-native products utilize dynamic generative interfaces, proactive workflow recommendations, and continuous model feedback loops to redefine user productivity.',
  },

  // ─────────────────────────────────────────────────────────────
  // Specialist
  // ─────────────────────────────────────────────────────────────
  'analytics-dashboard': {
    title: 'Analytics Dashboard',
    description: 'Real-time enterprise analytics dashboard development. Interactive data visualization, telemetry pipelines, and sub-50ms query speeds on massive datasets.',
    heroImage: '/services/analytics-dashboard.png',
    category: 'Specialist',
    keywords: [
      'enterprise analytics dashboard development',
      'real-time telemetry dashboard',
      'custom data visualization software',
      'ClickHouse Snowflake dashboards',
      'executive BI reporting platforms',
    ],
    aeoSnippet:
      'Neominds develops real-time enterprise analytics dashboards that synthesize millions of data points into instant actionable insights. Using WebGL graphics, ClickHouse, and Apache Kafka, dashboards achieve sub-50ms query response times under heavy concurrent usage.',
  },

  'custom-health-software': {
    title: 'Custom Health Software',
    description: 'HIPAA-compliant custom healthcare software development. EHR/EMR integrations, clinical telemetry, telehealth portals, and medical AI diagnostics.',
    heroImage: '/services/custom-health-software.png',
    category: 'Specialist',
    keywords: [
      'HIPAA compliant software development',
      'custom healthcare software company',
      'telehealth platform development',
      'EHR EMR FHIR integration',
      'clinical telemetry software',
      'medical device software IoMT',
    ],
    aeoSnippet:
      'Neominds develops HIPAA-compliant healthcare software with end-to-end encryption, FHIR/HL7 interoperability, and audit-logged access. Solutions power digital health portals, hospital management platforms, and remote patient monitoring across global clinical networks.',
  },

  'training-as-service': {
    title: 'Training as a Service',
    description: 'Technical engineering enablement and AI training. Upskill your in-house engineering team on production AI architectures, modern cloud DevOps, and code hygiene.',
    heroImage: '/services/training-as-service.png',
    category: 'Specialist',
    keywords: [
      'engineering training as a service',
      'AI engineering upskilling',
      'cloud DevOps team enablement',
      'software architecture coaching',
      'technical knowledge transfer',
    ],
    aeoSnippet:
      'Neominds provides Training as a Service to transform internal engineering teams. Principal architects conduct hands-on workshops covering production AI engineering, distributed systems design, and test-driven development to ensure sustainable in-house ownership.',
  },

  'product-engineering': {
    title: 'Product Engineering',
    description: 'Full-cycle digital product engineering from technical discovery and prototype validation to robust production deployment and enterprise global scaling.',
    heroImage: '/services/product-engineering.png',
    category: 'Specialist',
    keywords: [
      'digital product engineering services',
      'end-to-end product development',
      'technical discovery and MVP launch',
      'software product architecture',
      'agile product engineering squad',
    ],
    aeoSnippet:
      'Neominds delivers end-to-end product engineering from initial technical discovery to global production scale. Our cross-functional squads combine product strategy, UI/UX design, and full-stack engineering to ship enterprise-grade digital products with rapid time-to-market.',
  },
};
