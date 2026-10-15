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
  category: 'Core Engineering' | 'AI & Intelligence' | 'Cloud & Operations';
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
  'software-development': {
    id: 'software-development',
    slug: 'software-development',
    title: 'Software Development',
    tagline: 'Full-Cycle Custom Software Engineering',
    category: 'Core Engineering',
    heroBadge: 'Enterprise Software Engineering',
    heroHeadline: 'Custom Enterprise',
    heroHeadlineHighlight: 'Software Development',
    heroDescription:
      'We architect and ship production-hardened software systems engineered to withstand extreme concurrency, eliminate architectural bottlenecks, and scale with your business. Clean architecture, zero tech-debt shortcuts, and 100% intellectual property transfer.',
    heroImage: '/services/software-development.png',
    heroImageCaption: 'Software Development Production Architecture',
    primaryCtaText: 'Architect Your System',
    secondaryCtaText: 'View Production Systems',
    trustPoints: [
      'Multi-region active-active cloud failover',
      'SOC 2 Type II & ISO 27001 secure SDLC',
      'Zero-downtime blue/green deployment pipelines',
      'Complete source code, CI/CD, and IP handover',
    ],
    metrics: [
      { value: '99.99%', label: 'System Uptime SLA' },
      { value: '< 15ms', label: 'P99 API Latency' },
      { value: '10M+', label: 'Daily Transactions Handled' },
      { value: '100%', label: 'Direct IP Ownership' },
    ],
    overview: {
      statement:
        'Modern enterprise software must survive high concurrency, sudden traffic spikes, and relentless operational pressure without human babysitting.',
      paragraphs: [
        'Off-the-shelf SaaS and bloated legacy architectures collapse when transaction volumes surge. When systems lock up under load, revenue evaporates and engineering teams burn out fighting fires. We engineer decoupled, high-performance backends and mission-critical application architectures built for uncompromised resilience.',
        'Our engineering squads apply domain-driven design, stateless microservices, and event-driven streaming pipelines in Go, TypeScript, Python, and Java. We enforce strict boundary encapsulation, transactional outbox patterns, and distributed tracing across every microservice.',
        'From initial schema modeling to production deployment on multi-zone Kubernetes, every deliverable is verified against strict performance benchmarks and backed by 100% intellectual property ownership transfer.',
      ],
      keyTakeaway:
        'Battle-tested microservices and distributed databases engineered for sub-second execution, zero data drift, and absolute architectural transparency.',
    },
    capabilities: [
      {
        title: 'Decoupled Microservices & Event-Driven Topology',
        description:
          'High-throughput distributed systems built with Go, Node.js, and Java. We decouple business domains with Apache Kafka and RabbitMQ streams to eliminate database lock contention.',
        tags: ['Go / Node.js / Java', 'Kafka & RabbitMQ', 'gRPC & REST', 'Docker & Kubernetes'],
      },
      {
        title: 'Monolithic Modernization & Strangler Migrations',
        description:
          'Systematic monolithic migrations using the Martin Fowler strangler fig pattern. We extract bounded contexts, refactor databases, and reroute live traffic with zero downtime.',
        tags: ['Strangler Pattern', 'Zero-Downtime Cutover', 'Database Refactoring', 'API Facades'],
      },
      {
        title: 'Enterprise Workflow Engines & ERP Core',
        description:
          'Custom internal business operating systems, multi-tenant SaaS backends, automated approval pipelines, and deep enterprise integrations with SAP, Salesforce, and NetSuite.',
        tags: ['Multi-Tenant SaaS', 'BPMN State Machines', 'Enterprise Connectors', 'RBAC / ABAC Security'],
      },
      {
        title: 'High-Performance API Design & Service Meshes',
        description:
          'Sub-millisecond rate-limited API gateways with OAuth2/OIDC authentication, mutual TLS, automated OpenAPI specifications, distributed caching, and OpenTelemetry instrumentation.',
        tags: ['Kong / Envoy', 'OpenAPI 3.1 Specs', 'Redis Caching', 'Token-Bucket Rate Limiting'],
      },
      {
        title: 'Distributed Persistence & Sharded Databases',
        description:
          'High-availability relational and distributed databases, read-replica clusters, horizontal sharding, vector stores, and automated schema migration pipelines.',
        tags: ['PostgreSQL & TimescaleDB', 'MongoDB & Cassandra', 'Pinecone & pgvector', 'Flyway Migrations'],
      },
      {
        title: 'Security-Hardened SDLC & QA Automation',
        description:
          'Automated regression testing, end-to-end integration suites, static code analysis (SAST/DAST), and ISO 27001-compliant development lifecycles with continuous verification.',
        tags: ['Jest / PyTest / Playwright', 'SAST & DAST Scans', 'ISO 27001 SDLC', 'Chaos Engineering'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery & Architecture Scoping',
        description:
          'Domain-driven design workshops, event-storming sessions, data flow modeling, and non-functional requirements definition.',
        deliverables: ['System Architecture Document (SAD)', 'Domain Entity Models', 'Technical Risk Matrix'],
      },
      {
        step: '02',
        title: 'Core Engine & API Prototyping',
        description:
          'Iterative sprint development of core business logic, schema migrations, and REST/gRPC endpoints with automated unit test coverage.',
        deliverables: ['Working API Sandbox', 'Database Schema DDL', 'Automated Test Suites'],
      },
      {
        step: '03',
        title: 'Concurrency & Security Hardening',
        description:
          'Connecting third-party systems, stress-testing under simulated concurrency, and optimizing memory allocation and database query execution plans.',
        deliverables: ['Load Testing Benchmarks', 'Integration Test Reports', 'Security Penetration Audit'],
      },
      {
        step: '04',
        title: 'Production Deployment & SLA Handover',
        description:
          'Zero-downtime blue/green deployment to cloud infrastructure with Prometheus/Grafana monitoring, runbooks, and 24/7 hypercare support.',
        deliverables: ['Production Release Pipeline', 'Infrastructure Runbooks', 'SLA Support Governance'],
      },
    ],
    deliverables: [
      {
        title: 'Full Source Code & Git Repositories',
        category: 'Codebase',
        description: 'Clean, documented TypeScript, Python, and Go source code with 100% intellectual property ownership transfer.',
        format: 'GitHub / GitLab / Bitbucket',
      },
      {
        title: 'System Architecture Blueprint',
        category: 'Architecture',
        description: 'Cloud topology, network boundary diagrams, data dictionaries, and sequence workflows.',
        format: 'PDF & Interactive Diagrams',
      },
      {
        title: 'CI/CD Automated Deployment Pipeline',
        category: 'DevOps',
        description: 'GitHub Actions and GitLab CI workflows for automated linting, security scanning, and multi-stage deployments.',
        format: 'YAML Scripts & Dockerfiles',
      },
      {
        title: 'OpenAPI 3.1 & gRPC Specifications',
        category: 'Docs',
        description: 'Interactive OpenAPI specifications with request contracts, error schemas, and Postman collections.',
        format: 'OpenAPI 3.1 & Postman Collection',
      },
    ],
    techStack: [
      { category: 'Languages', items: ['TypeScript', 'Python', 'Go', 'Java', 'C# / .NET', 'Rust'] },
      { category: 'Frameworks', items: ['Node.js / NestJS', 'FastAPI / Django', 'Spring Boot', 'Next.js', 'ASP.NET Core'] },
      { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 'pgvector'] },
      { category: 'Cloud & Infrastructure', items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Kubernetes', 'Docker', 'Terraform'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds engineered our distributed data processing platform from the ground up, reducing batch latency from 4 hours to 12 minutes while maintaining 99.99% uptime across 12M daily transactions.',
      author: 'Thomas Golden',
      role: 'VP of Engineering',
      company: 'TruBridge',
      metric: '95% Latency Reduction',
    },
    outcomes: [
      {
        metric: '99.99%',
        label: 'Production Uptime SLA',
        description: 'Guaranteed high availability through multi-zone failover, circuit-breaking proxies, and zero single points of failure.',
      },
      {
        metric: '70%',
        label: 'Batch Latency Reduction',
        description: 'Optimized distributed queries and event queues slashing end-of-day transaction reconciliation from hours to minutes.',
      },
      {
        metric: '100%',
        label: 'Codebase & IP Ownership',
        description: 'Complete source code, deployment scripts, and architectural documentation handed directly to your engineering team with zero lock-in.',
      },
    ],
    faqs: [
      {
        question: 'Do we own 100% of the software source code and IP?',
        answer:
          'Yes, absolutely. All code, architecture specifications, database schemas, and intellectual property developed during the engagement belong entirely to your company from day one.',
      },
      {
        question: 'How do you ensure zero downtime during legacy system modernization?',
        answer:
          'We employ the Martin Fowler Strangler Fig pattern, routing traffic incrementally through modern microservices while keeping legacy databases synchronized with bi-directional event queues until full cutover is certified.',
      },
      {
        question: 'What engagement models do you offer for software development?',
        answer:
          'We provide Dedicated Engineering Squads (cross-functional teams managed end-to-end), Staff Augmentation (senior engineers integrated into your team), and Fixed-Price Project Delivery for defined scopes.',
      },
      {
        question: 'How do you handle software maintenance after launch?',
        answer:
          'We offer SLA-backed technical maintenance packages covering 24/7 incident monitoring, security patch management, framework upgrades, and continuous feature enhancements.',
      },
    ],
    ctaHeadline: 'Ready to Build Software That Doesn’t Break Under Scale?',
    ctaDescription:
      'Speak directly with a Principal Solutions Architect. We review your architecture, diagnose bottlenecks, and deliver an actionable execution plan within 24 hours.',
    ctaButtonText: 'Request Technical Proposal',
  },

  'ai-development': {
    id: 'ai-development',
    slug: 'ai-development',
    title: 'AI Development',
    tagline: 'Production ML, Custom LLMs & Foundation Model Engineering',
    category: 'AI & Intelligence',
    heroBadge: 'Production AI & LLM Systems',
    heroHeadline: 'Production-Grade AI',
    heroHeadlineHighlight: 'Models & Engineering',
    heroDescription:
      'We engineer private, production-grade AI systems that run on your infrastructure with deterministic accuracy. From vector-grounded RAG architectures to private open-source model fine-tuning, we eliminate hallucinations and protect your proprietary IP.',
    heroImage: '/services/ai-development.png',
    heroImageCaption: 'AI Development Production Architecture',
    primaryCtaText: 'Build Your AI System',
    secondaryCtaText: 'Review AI Architectures',
    trustPoints: [
      'Zero training on your proprietary data by public models',
      'Strict NeMo guardrails blocking prompt injections & PII leaks',
      'Self-hosted vLLM inference on AWS, GCP, or on-prem GPUs',
      'Continuous evaluation with Ragas & automated benchmark suites',
    ],
    metrics: [
      { value: '98.4%', label: 'Context Grounding Accuracy' },
      { value: '< 180ms', label: 'Time to First Token (TTFT)' },
      { value: '100%', label: 'Air-Gapped Data Privacy' },
      { value: '65%', label: 'Compute Cost Reduction' },
    ],
    overview: {
      statement:
        'Commercial AI wrappers break down in production when accuracy, data security, and unit economics actually matter.',
      paragraphs: [
        'Generic API wrappers fail enterprise requirements because they leak proprietary IP, suffer uncontrolled latency spikes, and hallucinate under real-world ambiguity. Enterprise AI requires deterministic grounding, strict boundary validation, and private inference infrastructure.',
        'We build production AI systems around private open-source foundation models (Llama, Mistral, DeepSeek) and enterprise vector databases. We implement semantic hybrid chunking, reranking pipelines, and multi-stage guardrails that mathematically ground model responses in your verified company data.',
        'By quantizing models (AWQ, GPTQ) and orchestrating high-throughput vLLM clusters, we slash inference costs by up to 65% compared to commercial API pay-per-token models while maintaining enterprise data privacy.',
      ],
      keyTakeaway:
        'Private, low-latency AI architectures built for zero hallucinations, strict regulatory compliance, and predictable unit economics.',
    },
    capabilities: [
      {
        title: 'Vector-Grounded Hybrid RAG Pipelines',
        description:
          'Dense semantic vector retrieval combined with sparse BM25 keyword matching and cross-encoder rerankers, guaranteeing accurate context retrieval from millions of enterprise documents.',
        tags: ['pgvector & Qdrant', 'Hybrid Retrieval', 'Cross-Encoder Rerankers', 'Context Compression'],
      },
      {
        title: 'Private Foundation Model Fine-Tuning',
        description:
          'Domain adaptation of open-source weights (Llama 3, Mistral, DeepSeek) using LoRA and QLoRA on private enterprise datasets without leaking intellectual property.',
        tags: ['LoRA / QLoRA', 'Synthetic Data Generation', 'Domain Adaptation', 'PEFT Workflows'],
      },
      {
        title: 'High-Throughput vLLM & Quantization',
        description:
          'Deploying models with 4-bit/8-bit AWQ and GPTQ quantization using vLLM and TensorRT-LLM, maximizing token throughput per GPU and slashing cloud infrastructure costs.',
        tags: ['vLLM Acceleration', 'AWQ / GPTQ 4-Bit', 'TensorRT-LLM', 'PagedAttention'],
      },
      {
        title: 'Prompt Injection Defense & NeMo Guardrails',
        description:
          'Multi-layered security boundaries blocking jailbreaks, adversarial prompt injections, toxic content, and automated PII data redaction before inference.',
        tags: ['NeMo Guardrails', 'PII Redaction', 'Adversarial Defense', 'Factuality Scoring'],
      },
      {
        title: 'Multimodal Vision & Document Intelligence',
        description:
          'Vision-language models extracting dense tabular data, complex PDF layouts, architectural diagrams, and handwritten documents into verified structured JSON schemas.',
        tags: ['Vision LLMs', 'LayoutLM', 'Table Extraction', 'Structured JSON Output'],
      },
      {
        title: 'Continuous Evaluation & Drift Telemetry',
        description:
          'Automated Ragas benchmarking, faithfulness scoring, token latency monitoring, and continuous regression suites so models maintain verified accuracy across releases.',
        tags: ['Ragas Benchmarking', 'Drift Detection', 'Weights & Biases', 'Continuous Eval CI'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Data Audit & Semantic Taxonomy',
        description:
          'Auditing enterprise knowledge assets, designing semantic chunking strategies, and establishing baseline accuracy evaluation benchmarks.',
        deliverables: ['Data Ingestion Pipeline', 'Semantic Chunking Spec', 'Baseline Evaluation Benchmark'],
      },
      {
        step: '02',
        title: 'Model Adaptation & RAG Scaffolding',
        description:
          'Setting up vector stores, fine-tuning foundation weights, and implementing hybrid retrieval pipelines with cross-encoder reranking.',
        deliverables: ['Fine-Tuned Model Weights', 'Vector Store Schema', 'Interactive Test Console'],
      },
      {
        step: '03',
        title: 'Guardrail Enforcement & Latency Tuning',
        description:
          'Enforcing NeMo guardrails, PII sanitization filters, and optimizing vLLM GPU inference runtimes for sub-200ms token generation.',
        deliverables: ['Guardrail Policy Matrix', 'vLLM Latency Benchmark', 'Security Penetration Report'],
      },
      {
        step: '04',
        title: 'Production GPU Orchestration & Monitoring',
        description:
          'Deploying auto-scaling GPU clusters on Kubernetes with Ragas continuous evaluation suites and live telemetry dashboards.',
        deliverables: ['Kubernetes GPU Manifests', 'Telemetry Dashboard', 'Model Governance Runbook'],
      },
    ],
    deliverables: [
      {
        title: 'Containerized Inference Engine & Model Weights',
        category: 'AI Core',
        description: 'Quantized, fine-tuned model artifacts and containerized vLLM inference services ready for private cloud deployment.',
        format: 'Docker Containers & SafeTensors',
      },
      {
        title: 'Hybrid Vector Retrieval & Semantic Search Core',
        category: 'Data Architecture',
        description: 'High-performance vector database schema with automated chunking, embedding, and reranking pipelines.',
        format: 'pgvector / Qdrant DDL & Code',
      },
      {
        title: 'Automated Ragas Evaluation Suite',
        category: 'QA / Eval',
        description: 'Test harness verifying context precision, answer relevance, and factual grounding across model updates.',
        format: 'Python Test Harness & CI Suite',
      },
      {
        title: 'Enterprise Security & PII Redaction Guardrail Config',
        category: 'Security',
        description: 'NeMo guardrails configuration preventing prompt injection attacks and redacting sensitive PII data.',
        format: 'Colang Scripts & Python Runtimes',
      },
    ],
    techStack: [
      { category: 'Foundation Models', items: ['Llama 3.3', 'Mistral Large', 'DeepSeek R1', 'Claude API', 'OpenAI API'] },
      { category: 'Frameworks & Runtimes', items: ['vLLM', 'LangChain', 'LlamaIndex', 'TensorRT-LLM', 'HuggingFace', 'PyTorch'] },
      { category: 'Vector Databases', items: ['pgvector', 'Qdrant', 'Pinecone', 'Milvus', 'ChromaDB'] },
      { category: 'Guardrails & Telemetry', items: ['NeMo Guardrails', 'Ragas', 'Weights & Biases', 'Trulens', 'OpenTelemetry'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds engineered a private RAG pipeline indexing 400,000 internal engineering documents. Our technical support engineers now resolve tier-3 escalations 60% faster with zero hallucinations.',
      author: 'Dr. Michael Chen',
      role: 'Chief AI Officer',
      company: 'Aetheria Systems',
      metric: '98.4% Factuality Grounding',
    },
    outcomes: [
      {
        metric: '98.4%',
        label: 'Factuality Grounding Rate',
        description: 'Eliminates hallucinations across technical documentation through dense semantic embeddings and cross-encoder rerankers.',
      },
      {
        metric: '65%',
        label: 'Inference Cost Reduction',
        description: 'Self-hosted quantized models replace expensive commercial per-token API subscriptions at scale.',
      },
      {
        metric: '100%',
        label: 'Data Isolation Guarantee',
        description: 'Proprietary training data, embeddings, and user queries remain strictly within your private VPC boundary.',
      },
    ],
    faqs: [
      {
        question: 'Will our proprietary data be used to train external public models?',
        answer:
          'Never. We deploy private models inside your own AWS, GCP, or on-premise infrastructure. No prompts, embeddings, or training datasets ever leave your isolated network perimeter.',
      },
      {
        question: 'How do you prevent hallucinations in technical or regulated domains?',
        answer:
          'We implement strict context grounding using hybrid search (BM25 + dense vectors), cross-encoder rerankers, and NeMo guardrails that mathematically require every answer to cite exact source chunks.',
      },
      {
        question: 'What hardware or GPU infrastructure is required to host private LLMs?',
        answer:
          'Through modern 4-bit and 8-bit quantization (AWQ/GPTQ) and vLLM acceleration, models like Llama 3 70B run efficiently on a single or dual NVIDIA A10G/L40S instance, drastically reducing hosting costs.',
      },
      {
        question: 'How do you measure and maintain model accuracy over time?',
        answer:
          'We implement automated evaluation suites using the Ragas framework, continuously scoring context recall, answer relevance, and faithfulness against curated gold-standard test sets.',
      },
    ],
    ctaHeadline: 'Ready to Deploy AI That Solves Real Enterprise Problems?',
    ctaDescription:
      'Consult with our Principal AI Engineers. We evaluate your dataset, map your inference architecture, and outline a concrete deployment roadmap.',
    ctaButtonText: 'Request AI Architecture Review',
  },

  'mobile-app-development': {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Native iOS, Android & High-Performance Cross-Platform Apps',
    category: 'Core Engineering',
    heroBadge: 'Native Mobile Engineering',
    heroHeadline: 'High-Performance Mobile',
    heroHeadlineHighlight: 'App Development',
    heroDescription:
      'We design and build buttery-smooth 60fps mobile applications engineered for offline-first reliability, instant cold starts, and intuitive ergonomics. Trusted across financial services, logistics, and high-growth consumer apps.',
    heroImage: '/services/mobile-app-development.png',
    heroImageCaption: 'Mobile App Development Production Architecture',
    primaryCtaText: 'Launch Your Mobile App',
    secondaryCtaText: 'Inspect Mobile Architecture',
    trustPoints: [
      'Offline-first sync using conflict-free CRDT data structures',
      'Biometric hardware encryption via Secure Enclave & KeyStore',
      'Automated Fastlane pipelines with TestFlight & Play Console distribution',
      'WCAG 2.1 AA accessibility & pixel-perfect mobile ergonomics',
    ],
    metrics: [
      { value: '60 FPS', label: 'Sustained UI Rendering Rate' },
      { value: '< 100ms', label: 'Cold Start Launch Speed' },
      { value: '99.9%', label: 'Crash-Free Session Rate' },
      { value: '4.9 ★', label: 'Average App Store Rating' },
    ],
    overview: {
      statement:
        'Mobile users abandon clunky apps in three seconds. High-retention mobile software requires native-grade speed, tactile responsiveness, and flawless offline state management.',
      paragraphs: [
        'Users do not forgive laggy animations, drained batteries, or screens that lock up when cellular signal drops in an elevator. Modern mobile apps must feel weightless, respond instantly to touch, and maintain local state without waiting on the network.',
        'We engineer native iOS (Swift/SwiftUI), native Android (Kotlin/Jetpack Compose), and high-performance React Native / Flutter apps with offline-first synchronization engines. We use SQLite and WatermelonDB with optimistic UI updates, background sync workers, and biometric authentication.',
        'Our release engineering uses Fastlane and automated cloud test devices to run end-to-end user journeys before any build hits TestFlight or Google Play. Zero regressions, zero unexpected crash spikes.',
      ],
      keyTakeaway:
        'Fluid 60fps mobile experiences with sub-100ms launch times, rock-solid offline sync, and automated app store release pipelines.',
    },
    capabilities: [
      {
        title: 'Native iOS Engineering (Swift & SwiftUI)',
        description:
          'Crafted with Swift 6 and SwiftUI. We use Metal hardware acceleration, Secure Enclave cryptography, WidgetKit, Live Activities, and CoreBluetooth for platform-native speed.',
        tags: ['Swift / SwiftUI', 'Metal Acceleration', 'Secure Enclave', 'Live Activities'],
      },
      {
        title: 'Native Android Engineering (Kotlin & Compose)',
        description:
          'Engineered with modern Kotlin, Jetpack Compose, Coroutines, Flow, and Room DB. Built for multi-device responsiveness, battery efficiency, and Android Keystore encryption.',
        tags: ['Kotlin / Jetpack Compose', 'Coroutines & Flow', 'Room Database', 'Android Keystore'],
      },
      {
        title: 'Cross-Platform React Native & Expo Core',
        description:
          'High-performance cross-platform apps using the React Native New Architecture (TurboModules & Fabric). Single codebase efficiency with native-grade frame rates.',
        tags: ['React Native', 'Expo EAS', 'Fabric Architecture', 'TurboModules'],
      },
      {
        title: 'Offline-First Sync & Conflict Resolution',
        description:
          'Local-first architectures with WatermelonDB and SQLite. Background CRDT synchronization queues guarantee zero data loss and instant optimistic UI responses.',
        tags: ['WatermelonDB', 'CRDT Sync', 'SQLite', 'Optimistic UI Updates'],
      },
      {
        title: 'Biometric Security & Mobile Encryption',
        description:
          'FIDO2 biometric authentication (FaceID, TouchID, BiometricPrompt), hardware-backed certificate pinning, anti-tamper jailbreak detection, and encrypted local storage.',
        tags: ['FaceID / TouchID', 'Certificate Pinning', 'Anti-Tamper & Root Check', 'FIDO2 Auth'],
      },
      {
        title: 'Automated CI/CD & Fastlane Release Ops',
        description:
          'Continuous integration pipelines that compile, run automated device test suites, generate app store screenshots, and deploy release builds to TestFlight and Play Store.',
        tags: ['Fastlane', 'TestFlight / Play Console', 'App Store Optimization', 'Automated Screenshots'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Mobile UX & Tactile Prototyping',
        description:
          'User flow mapping, interactive Figma prototypes, mobile design tokens, and tactile ergonomics testing across iOS and Android form factors.',
        deliverables: ['Interactive Mobile Prototypes', 'Mobile Design System Kit', 'Navigation Architecture'],
      },
      {
        step: '02',
        title: 'Core Engine & Offline Database Setup',
        description:
          'Building the local-first database, establishing offline sync protocols, and implementing API integration clients with mock sandboxes.',
        deliverables: ['Local Database Schema', 'State Machine Architecture', 'API Client SDK'],
      },
      {
        step: '03',
        title: 'Sensor Integration & 60fps Profiling',
        description:
          'Integrating native hardware sensors, biometric auth, push notification queues, and profiling memory allocations for sustained 60fps rendering.',
        deliverables: ['Hardware Sensor Integration', '60fps Profiling Report', 'Security Audit Certificate'],
      },
      {
        step: '04',
        title: 'Automated Testing & App Store Deployment',
        description:
          'Configuring Fastlane build pipelines, running automated device tests, and submitting production releases to Apple App Store and Google Play.',
        deliverables: ['Fastlane Deployment Workflows', 'TestFlight Beta Release', 'App Store / Play Store Approvals'],
      },
    ],
    deliverables: [
      {
        title: 'Production Mobile Codebases (iOS & Android)',
        category: 'Mobile Core',
        description: 'Complete native Swift/Kotlin or React Native source code with full IP ownership and clean architecture patterns.',
        format: 'Xcode / Android Studio Repositories',
      },
      {
        title: 'Automated Fastlane Deployment Workflows',
        category: 'DevOps',
        description: 'Configured Fastlane scripts managing app signing, certificates, metadata, screenshots, and store submissions.',
        format: 'Fastlane Ruby / YAML Scripts',
      },
      {
        title: 'Tactile Mobile Design System & UI Kit',
        category: 'Design',
        description: 'Complete Figma design system with components, dark/light themes, and tactile motion tokens.',
        format: 'Figma Library & Asset Packages',
      },
      {
        title: 'App Store Optimization & Compliance Pack',
        category: 'Compliance',
        description: 'Privacy declarations, App Store compliance documentation, Apple HIG audit, and Google Play Data Safety forms.',
        format: 'Compliance Dossier & Assets',
      },
    ],
    techStack: [
      { category: 'Platforms', items: ['iOS', 'Android', 'iPadOS', 'watchOS', 'macOS Catalyst'] },
      { category: 'Languages & Frameworks', items: ['Swift / SwiftUI', 'Kotlin / Jetpack Compose', 'React Native / Expo', 'Flutter', 'TypeScript'] },
      { category: 'Local Storage & Sync', items: ['SQLite', 'WatermelonDB', 'MMKV', 'Realm', 'Room DB'] },
      { category: 'DevOps & Testing', items: ['Fastlane', 'GitHub Actions', 'TestFlight', 'Google Play Console', 'Detox / Maestro'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds rebuilt our mobile app from scratch. We went from a 3.1-star rating with constant offline crashes to a 4.9-star rating across 250,000 active monthly users.',
      author: 'Marcus Vance',
      role: 'Head of Mobile Product',
      company: 'Kinetic Financial',
      metric: '4.9 ★ Rating & 60 FPS',
    },
    outcomes: [
      {
        metric: '99.9%',
        label: 'Crash-Free Session Rate',
        description: 'Eliminates unexpected app crashes through memory profiling, strict type checking, and automated device lab testing.',
      },
      {
        metric: '< 100ms',
        label: 'Cold Start Velocity',
        description: 'Sub-100ms startup launch eliminates user drop-off and maintains top search engine store rankings.',
      },
      {
        metric: '100%',
        label: 'Offline Functionality',
        description: 'Core mobile workflows continue executing smoothly without active cellular connection, syncing when connectivity resumes.',
      },
    ],
    faqs: [
      {
        question: 'Should we build Native (Swift/Kotlin) or Cross-Platform (React Native)?',
        answer:
          'If your app requires heavy hardware sensor integration, complex 3D graphics, or audio/video processing, pure native Swift and Kotlin are optimal. For most enterprise and consumer apps, React Native with the New Architecture delivers identical 60fps performance while reducing development costs by 40%.',
      },
      {
        question: 'How do you handle offline functionality and data conflicts?',
        answer:
          'We build offline-first using SQLite and WatermelonDB with Conflict-Free Replicated Data Types (CRDTs). Users can create and edit records without internet, and changes synchronize deterministically in the background when connectivity resumes.',
      },
      {
        question: 'Will you manage the App Store and Google Play review process?',
        answer:
          'Yes. We handle the complete submission lifecycle, including code signing, provisioning profiles, privacy declarations, App Store guidelines review, and resolving any reviewer inquiries until approved.',
      },
      {
        question: 'How do you keep user biometrics and sensitive credentials secure?',
        answer:
          'We never store plaintext tokens. All cryptographic keys and authentication tokens are encrypted using the iOS Secure Enclave and Android Keystore, guarded by hardware-enforced biometric authentication.',
      },
    ],
    ctaHeadline: 'Ready to Ship a 5-Star Mobile Experience?',
    ctaDescription:
      'Schedule a discovery session with our Lead Mobile Architect. We review your UX flows, offline data requirements, and deliver a detailed technical breakdown.',
    ctaButtonText: 'Request Mobile Discovery',
  },

  'web-cms-development': {
    id: 'web-cms-development',
    slug: 'web-cms-development',
    title: 'Web & CMS Development',
    tagline: 'Headless CMS, Edge-Rendered Web Applications & Sub-Second Page Loads',
    category: 'Core Engineering',
    heroBadge: 'Headless CMS & Web Platforms',
    heroHeadline: 'Next-Generation Web',
    heroHeadlineHighlight: '& Headless CMS',
    heroDescription:
      'We engineer lightning-fast headless web architectures and intuitive editorial systems built for global scale. Combining decoupled CMS backends (Sanity, Strapi) with modern edge frontends (Next.js, Vite), we deliver 100 Lighthouse scores so marketing teams publish without waiting on engineering.',
    heroImage: '/services/web-cms-development.png',
    heroImageCaption: 'Web & CMS Development Production Architecture',
    primaryCtaText: 'Build Your Web Platform',
    secondaryCtaText: 'Explore Headless Architectures',
    trustPoints: [
      'Decoupled Sanity / Strapi headless schemas with live previews',
      'Edge SSR / ISR static pre-rendering across global CDNs',
      'Automated structured data (JSON-LD) for maximum SEO search rankings',
      'Enterprise multi-lingual localization with role-based editing permissions',
    ],
    metrics: [
      { value: '100', label: 'Core Web Vitals Lighthouse Score' },
      { value: '< 400ms', label: 'Global Largest Contentful Paint' },
      { value: '0.00', label: 'Cumulative Layout Shift (CLS)' },
      { value: '4x', label: 'Faster Editorial Publishing Speed' },
    ],
    overview: {
      statement:
        'Monolithic WordPress sites and rigid page builders slow down your brand, bloat bundle sizes, and frustrate content editors.',
      paragraphs: [
        'Traditional monolithic CMS platforms buckle under high traffic spikes, create security vulnerabilities through unvetted plugins, and render sluggish pages that kill search rankings. Modern digital products demand a headless separation between content storage and frontend rendering.',
        'We architect modular web applications pairing headless content lakes (Sanity, Strapi, Contentful) with modern edge-rendered frontends (Next.js, Vite, Cloudflare Pages). We design custom drag-and-drop block builders that give non-technical marketing teams total layout freedom within strict brand design tokens.',
        'Every page is optimized for Google Core Web Vitals: sub-second Largest Contentful Paint, zero cumulative layout shift, dynamic OpenGraph image generation, and programmatic SEO indexing.',
      ],
      keyTakeaway:
        'Lightning-fast edge-rendered websites that let marketing teams publish in minutes while maintaining perfect 100 performance scores.',
    },
    capabilities: [
      {
        title: 'Headless CMS Architecture & Content Modeling',
        description:
          'Structured document schemas in Sanity, Strapi, and Contentful. Custom visual editorial studios with real-time collaborative editing and live side-by-side previews.',
        tags: ['Sanity.io / Strapi', 'Structured Content', 'Live Previews', 'Contentful'],
      },
      {
        title: 'Incremental Edge Rendering (SSG / ISR / SSR)',
        description:
          'Next.js App Router and Vite applications pre-rendering static routes at the edge. Instant on-demand cache revalidation via CMS webhooks keeps content fresh in milliseconds.',
        tags: ['Next.js App Router', 'Incremental Static Regeneration', 'Edge Middleware', 'Cloudflare Pages'],
      },
      {
        title: 'Modular Visual Block Design Systems',
        description:
          'Reusable editorial building blocks (hero sections, bento grids, comparison tables, interactive carousels) that give marketing teams flexibility while preserving brand consistency.',
        tags: ['Design Tokens', 'Modular Page Builders', 'Tailwind CSS', 'Accessible Components'],
      },
      {
        title: 'Core Web Vitals & Technical SEO Optimization',
        description:
          'Sub-second Largest Contentful Paint, zero cumulative layout shift, automated JSON-LD schema markup, dynamic OpenGraph social card generation, and XML sitemaps.',
        tags: ['100 Lighthouse', 'JSON-LD Schemas', 'Dynamic OpenGraph', 'Sub-Second LCP'],
      },
      {
        title: 'Multi-Region Global Localization & i18n',
        description:
          'Multi-lingual publishing workflows with automated translation hooks, geo-distributed edge routing, currency localization, and regional content variations.',
        tags: ['i18n Localization', 'Geo-Targeted Content', 'Multi-Currency', 'Edge Routing'],
      },
      {
        title: 'Role-Based Editorial Governance & Audit Logs',
        description:
          'Multi-stage publishing approvals (Draft, Review, Staging, Production), automated change diffing, role-based permissions, and SOC 2-compliant editorial audit trails.',
        tags: ['Approval Workflows', 'Change Diffing', 'Role-Based Access', 'Audit Logs'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Information Architecture & Content Modeling',
        description:
          'Mapping customer journeys, structuring headless schema hierarchies, defining taxonomies, and auditing legacy content for automated migration.',
        deliverables: ['Information Architecture Map', 'Headless Content Schema Spec', 'Content Migration Plan'],
      },
      {
        step: '02',
        title: 'CMS Studio & Component Engineering',
        description:
          'Configuring Sanity/Strapi custom studios, engineering accessible React components, and connecting real-time preview drafting hooks.',
        deliverables: ['Custom CMS Studio', 'React Component Library', 'Live Preview Sandbox'],
      },
      {
        step: '03',
        title: 'Edge Optimization & SEO Hardening',
        description:
          'Configuring edge CDN caching rules, auditing Core Web Vitals, generating automated schema markups, and validating cross-device responsiveness.',
        deliverables: ['100 Lighthouse Performance Report', 'Structured Data Validator', 'Security Header Audit'],
      },
      {
        step: '04',
        title: 'Content Migration & Production Launch',
        description:
          'Migrating legacy content via automated ETL scripts, configuring 301 redirects, training editorial staff, and executing zero-downtime DNS cutover.',
        deliverables: ['Automated Content Migration Tool', '301 Redirect Mapping', 'Editorial Training Playbook'],
      },
    ],
    deliverables: [
      {
        title: 'Next.js / React Edge Web Application',
        category: 'Frontend Core',
        description: 'Complete edge-rendered web application source code with optimal Core Web Vitals and full IP ownership.',
        format: 'Git Repository (Next.js / TypeScript)',
      },
      {
        title: 'Custom Configured Headless CMS Studio',
        category: 'CMS Architecture',
        description: 'Customized Sanity or Strapi studio with custom inputs, preview hooks, and role-based permissions.',
        format: 'Sanity Studio / Strapi Deploy',
      },
      {
        title: 'Automated SEO & Structured Data Suite',
        category: 'SEO Ops',
        description: 'Automated JSON-LD schemas, dynamic OpenGraph generation microservice, and dynamic sitemaps.',
        format: 'Next.js Metadata Pipelines',
      },
      {
        title: 'Content Migration Scripts & Editor Handbook',
        category: 'Documentation',
        description: 'Automated migration tools for legacy content plus video manuals and step-by-step guides for marketing teams.',
        format: 'ETL Scripts & Video Playbooks',
      },
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vite'] },
      { category: 'Headless CMS', items: ['Sanity.io', 'Strapi', 'Contentful', 'Payload CMS', 'Ghost'] },
      { category: 'Edge & Hosting', items: ['Vercel', 'Cloudflare Pages', 'AWS CloudFront', 'Fastly'] },
      { category: 'Search & Assets', items: ['Algolia', 'Meilisearch', 'Cloudinary', 'Imgix', 'Uploadcare'] },
    ],
    caseStudyQuote: {
      quote:
        'Migrating our global corporate web presence to Sanity and Next.js doubled our mobile conversion rate and cut our page load times from 4.2 seconds to 380 milliseconds globally.',
      author: 'Caroline Dubois',
      role: 'VP of Digital Marketing',
      company: 'Novatech Global',
      metric: '380ms Global LCP',
    },
    outcomes: [
      {
        metric: '100',
        label: 'Lighthouse Performance Score',
        description: 'Perfect Core Web Vitals scores drive top search rankings and stop mobile bounce rates.',
      },
      {
        metric: '4x',
        label: 'Editorial Publishing Velocity',
        description: 'Marketing teams create and launch rich landing pages without waiting for developer sprints.',
      },
      {
        metric: '0.00',
        label: 'Cumulative Layout Shift',
        description: 'Zero visual jumpiness or mis-clicks during page rendering, delivering a rock-solid editorial experience.',
      },
    ],
    faqs: [
      {
        question: 'Why should we switch from WordPress to a Headless CMS?',
        answer:
          'Traditional WordPress bundles database queries, PHP rendering, and unvetted plugins on a single server, creating performance bottlenecks and severe security vulnerabilities. A headless architecture decouples content storage from frontend rendering, delivering sub-second edge speeds, 100 Lighthouse scores, and zero server maintenance.',
      },
      {
        question: 'Can non-technical marketing team members update content easily?',
        answer:
          'Yes. We build custom editorial studios in Sanity or Strapi with drag-and-drop visual blocks, real-time side-by-side previews, and strict design token boundaries that allow marketers to be creative without ever breaking the site layout.',
      },
      {
        question: 'How do you handle redirects and SEO during a site migration?',
        answer:
          'We extract and map 100% of existing URLs, generate automated 301 redirect maps, preserve canonical tags, and implement structured JSON-LD schemas so search engine rankings are preserved and enhanced from day one.',
      },
      {
        question: 'How fast do content updates appear on the live website?',
        answer:
          'Through Next.js on-demand Incremental Static Regeneration (ISR) and CMS webhooks, updated content is re-rendered at edge CDN points and visible globally in under 500 milliseconds without requiring full site rebuilds.',
      },
    ],
    ctaHeadline: 'Ready to Replace Sluggish Web Infrastructure with Modern Speed?',
    ctaDescription:
      'Talk to our Headless Web Architects. We evaluate your content model, review your Core Web Vitals, and map your migration plan.',
    ctaButtonText: 'Request Web Architecture Proposal',
  },

  'ecommerce-development': {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'Ecommerce Development',
    tagline: 'Headless Commerce, Sub-Second Catalog Search & High-Concurrency Checkout',
    category: 'Core Engineering',
    heroBadge: 'Omnichannel Enterprise Commerce',
    heroHeadline: 'High-Volume Omnichannel',
    heroHeadlineHighlight: 'Ecommerce Platforms',
    heroDescription:
      'We build enterprise ecommerce architectures engineered for extreme flash-sale concurrency, sub-second checkout, and automated ERP/WMS synchronization. From custom Shopify Plus storefronts to composable headless commerce with Medusa and commercetools.',
    heroImage: '/services/ecommerce-development.png',
    heroImageCaption: 'Ecommerce Development Production Architecture',
    primaryCtaText: 'Scale Your Storefront',
    secondaryCtaText: 'View Commerce Systems',
    trustPoints: [
      'Distributed Redis inventory locks preventing overselling during flash traffic',
      'PCI-DSS Level 1 compliant tokenized 1-click payment workflows',
      'Real-time bidirectional synchronization with NetSuite, SAP & 3PLs',
      'Multi-currency and multi-language global checkout localization',
    ],
    metrics: [
      { value: '+28%', label: 'Average Checkout Conversion Lift' },
      { value: '< 50ms', label: 'Catalog Faceted Search Latency' },
      { value: '10,000+', label: 'Concurrent Orders per Minute' },
      { value: '99.99%', label: 'Peak Flash-Sale Uptime' },
    ],
    overview: {
      statement:
        'Slow checkout funnels and oversold inventory during flash sales destroy customer trust and bleed gross margin.',
      paragraphs: [
        'Traditional off-the-shelf ecommerce stores crash during high-traffic drops, suffer from 5-second product search lag, and force shoppers through clunky, multi-page checkout forms. In modern commerce, every 100ms of latency reduces conversion by 1%.',
        'We engineer high-speed composable ecommerce platforms using Shopify Plus (Hydrogen/Oxygen), Medusa, and custom microservices. We build instant faceted search with Algolia and Meilisearch, integrate distributed Redis atomic locks to prevent overselling, and deploy 1-click tokenized payment flows.',
        'Behind the storefront, our integration engines synchronize orders, tax calculations (Avalara), inventory adjustments, and tracking webhooks with your ERP, warehouse management system (WMS), and 3PL fulfillment hubs.',
      ],
      keyTakeaway:
        'Fast shopping funnels built to convert mobile shoppers and handle viral flash-sale traffic without missing an order.',
    },
    capabilities: [
      {
        title: 'Headless & Composable Storefronts',
        description:
          'Blazing-fast storefronts built with Shopify Hydrogen, Medusa, and Next.js Commerce. Instant page transitions, optimistic cart additions, and sub-second mobile navigation.',
        tags: ['Shopify Hydrogen', 'Medusa.js', 'Next.js Commerce', 'commercetools'],
      },
      {
        title: 'Sub-Second Faceted Catalog Search',
        description:
          'Instant faceted product discovery powered by Algolia and Meilisearch. Real-time dynamic filtering by size, color, brand, and price with typo tolerance in under 50ms.',
        tags: ['Algolia / Meilisearch', 'Dynamic Facets', 'Typo-Tolerant Search', 'Redis Caching'],
      },
      {
        title: 'Flash-Sale Concurrency & Inventory Locks',
        description:
          'Distributed atomic Redis lock allocations protecting inventory counts during high-volume drops. Eliminates overselling without locking database tables.',
        tags: ['Redis Distributed Locks', 'High Concurrency', 'Zero Overselling', 'Atomic Transactions'],
      },
      {
        title: 'Frictionless 1-Click Multi-Gateway Checkout',
        description:
          'Tokenized checkout flows supporting Apple Pay, Google Pay, Stripe, PayPal, and Klarna. Reduces checkout completion time from 90 seconds to under 4 seconds.',
        tags: ['Stripe / Adyen', 'Apple Pay & Google Pay', 'Klarna Buy-Now-Pay-Later', 'PCI-DSS Level 1'],
      },
      {
        title: 'Automated ERP, WMS & 3PL Synchronization',
        description:
          'Bi-directional webhooks synchronizing orders, returns, and inventory allocations directly with NetSuite, SAP, ShipStation, and custom warehouse management systems.',
        tags: ['NetSuite & SAP', 'ShipStation', 'Automated 3PL Routing', 'Order Webhooks'],
      },
      {
        title: 'Dynamic B2B Tiered Pricing & Wholesale Portals',
        description:
          'Enterprise B2B buyer portals with customer-specific price lists, tiered volume discounts, tax exemption verification, and purchase-order invoice settlement.',
        tags: ['B2B Wholesale Portals', 'Tiered Volume Pricing', 'Custom Credit Limits', 'Avalara Tax Engine'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Commerce Architecture & Catalog Modeling',
        description:
          'Designing product variant schemas, cart state machine topologies, multi-currency routing rules, and ERP integration contracts.',
        deliverables: ['Product Data Schema Spec', 'Checkout Flow Architecture', 'ERP Integration Blueprint'],
      },
      {
        step: '02',
        title: 'Storefront UI & Cart Engine Build',
        description:
          'Developing responsive product detail pages, instant cart slide-outs, faceted search filters, and high-framerate media carousels.',
        deliverables: ['Headless Storefront Codebase', 'Algolia Search Index', 'Cart State Machine'],
      },
      {
        step: '03',
        title: 'Payment Integration & Flash-Sale Hardening',
        description:
          'Integrating multi-currency payment gateways, distributed inventory locking mechanisms, and stress-testing checkout concurrency.',
        deliverables: ['PCI-DSS Compliance Verification', 'Flash-Sale Load Test Report', 'Distributed Lock Harness'],
      },
      {
        step: '04',
        title: 'Fulfillment Webhooks & Production Go-Live',
        description:
          'Deploying bidirectional order fulfillment webhooks, configuring automated inventory sync, and executing zero-downtime production cutover.',
        deliverables: ['ERP Sync Webhook Microservice', 'Fulfillment Automation Pipeline', '24/7 Flash-Sale Runbook'],
      },
    ],
    deliverables: [
      {
        title: 'Headless Commerce Web Application',
        category: 'Storefront Core',
        description: 'Complete high-performance Next.js / Hydrogen ecommerce application with full IP ownership and clean component design.',
        format: 'Git Repository (TypeScript)',
      },
      {
        title: 'Distributed Inventory Lock & Order Processing Core',
        category: 'Backend Architecture',
        description: 'Microservices handling atomic inventory reservation, cart validation, and order state transitions.',
        format: 'Docker Containers & Redis Scripts',
      },
      {
        title: 'Bidirectional ERP & WMS Webhook Suite',
        category: 'Integrations',
        description: 'Automated integration workers connecting storefront orders directly to NetSuite, SAP, and shipping carriers.',
        format: 'Node.js / Python Webhook Services',
      },
      {
        title: 'Multi-Currency & Regional Tax Logic',
        category: 'Financial Core',
        description: 'Automated Avalara tax calculation rules and multi-currency checkout configurations.',
        format: 'Configuration Manifests & Tests',
      },
    ],
    techStack: [
      { category: 'Storefront Platforms', items: ['Shopify Plus (Hydrogen)', 'Medusa.js', 'commercetools', 'Next.js Commerce'] },
      { category: 'Search & Merchandising', items: ['Algolia', 'Meilisearch', 'Elasticsearch', 'Redis'] },
      { category: 'Payments & Tax', items: ['Stripe', 'Adyen', 'Apple Pay', 'PayPal', 'Klarna', 'Avalara'] },
      { category: 'Logistics & ERP', items: ['NetSuite', 'SAP', 'ShipStation', 'Klaviyo', 'Segment'] },
    ],
    caseStudyQuote: {
      quote:
        'During our annual Black Friday launch, Neominds architecture processed 18,000 orders in the first 10 minutes with zero checkout timeouts and zero overselling.',
      author: 'Julian Meyer',
      role: 'Director of Ecommerce',
      company: 'Aura Apparel',
      metric: '18k Orders in 10 Minutes',
    },
    outcomes: [
      {
        metric: '+28%',
        label: 'Mobile Checkout Conversion',
        description: 'Sub-3-second tokenized checkout flows dramatically reduce cart abandonment on smartphones.',
      },
      {
        metric: '10k/min',
        label: 'Peak Order Concurrency',
        description: 'Zero crashes or database timeouts during high-visibility viral launches and promotion drops.',
      },
      {
        metric: '0%',
        label: 'Inventory Overselling Rate',
        description: 'Distributed atomic inventory locks protect stock allocations with microsecond precision.',
      },
    ],
    faqs: [
      {
        question: 'Should we use Shopify Plus or custom Headless Commerce?',
        answer:
          'Shopify Plus is the gold standard for rapid deployment, reliable native checkout, and managed compliance. For brands requiring ultra-custom checkout rules, multi-warehouse routing, or B2B pricing, headless commerce (Shopify Hydrogen or Medusa) provides complete architectural freedom.',
      },
      {
        question: 'How do you prevent overselling when thousands of customers buy simultaneously?',
        answer:
          'We implement distributed atomic Redis lock allocations with automatic expiration timers. When a customer begins checkout, stock is temporarily locked at the cache tier, preventing race conditions before orders hit the main database.',
      },
      {
        question: 'Can you integrate with our existing NetSuite ERP and 3PL warehouse?',
        answer:
          'Yes. We build idempotent, bidirectional webhook event streams that synchronize inventory counts, order status updates, and shipping tracking numbers in real time with NetSuite, SAP, and major 3PLs.',
      },
      {
        question: 'How do you optimize mobile checkout conversion rates?',
        answer:
          'We eliminate multi-step forms by implementing 1-click payment wallets (Apple Pay, Google Pay, Shop Pay), autofilling addresses, optimizing mobile touch targets, and maintaining sub-50ms catalog navigation.',
      },
    ],
    ctaHeadline: 'Ready to Build an Ecommerce Engine That Never Crashes on Black Friday?',
    ctaDescription:
      'Consult with our Principal Commerce Engineers. We will audit your checkout pipeline, load-test your catalog, and deliver a conversion-first architecture plan.',
    ctaButtonText: 'Request Commerce Strategy Session',
  },

  devops: {
    id: 'devops',
    slug: 'devops',
    title: 'DevOps',
    tagline: 'Infrastructure as Code, Kubernetes Orchestration & Continuous Delivery Pipelines',
    category: 'Cloud & Operations',
    heroBadge: 'Enterprise Cloud & GitOps DevOps',
    heroHeadline: 'Zero-Downtime Cloud',
    heroHeadlineHighlight: '& GitOps DevOps',
    heroDescription:
      'We architect resilient, auto-scaling cloud infrastructure and automated CI/CD release pipelines that eliminate deployment fear. From Terraform-managed multi-cloud Kubernetes clusters to immutable GitOps workflows with ArgoCD and OpenTelemetry.',
    heroImage: '/services/devops.png',
    heroImageCaption: 'DevOps & Cloud Infrastructure Architecture',
    primaryCtaText: 'Modernize Your Infrastructure',
    secondaryCtaText: 'Inspect DevOps Pipelines',
    trustPoints: [
      '100% Infrastructure as Code with Terraform & OpenTofu',
      'Zero-downtime blue/green and canary deployments via ArgoCD',
      'Continuous automated vulnerability scanning (Snyk & Trivy)',
      'Observability stack with Prometheus, Grafana & OpenTelemetry',
    ],
    metrics: [
      { value: '15 min', label: 'Commit to Production Pipeline Velocity' },
      { value: '99.99%', label: 'Multi-Region Cloud Availability' },
      { value: '0', label: 'Unplanned Outages During Deployments' },
      { value: '-35%', label: 'Average Cloud Spend Reduction' },
    ],
    overview: {
      statement:
        'Manual server configuration, brittle deployment scripts, and 3 AM production outages are preventable engineering failures.',
      paragraphs: [
        'When engineers are terrified of deploying on Fridays, feature velocity plummets and competitive advantage evaporates. Fragile manual cloud setups accumulate hidden drift, create single points of failure, and waste tens of thousands of dollars every month on idle cloud resources.',
        'We define all infrastructure as declarative, version-controlled code using Terraform, OpenTofu, and Helm. We orchestrate containerized workloads across multi-zone Amazon EKS, Google GKE, and Azure AKS clusters with automated horizontal pod autoscaling and self-healing nodes.',
        'Our GitOps pipelines (ArgoCD, GitHub Actions) automatically scan for security vulnerabilities, compile minimal distroless container images, and execute zero-downtime blue/green traffic shifts backed by distributed tracing.',
      ],
      keyTakeaway:
        'Automated, reproducible cloud environments that ship code to production in minutes with zero downtime and ironclad security.',
    },
    capabilities: [
      {
        title: 'Declarative Infrastructure as Code (Terraform & OpenTofu)',
        description:
          '100% version-controlled cloud topology across AWS, GCP, and Azure. Automated state locking, modular reusable components, and drift detection pipelines.',
        tags: ['Terraform / OpenTofu', 'Multi-Cloud IaC', 'Terragrunt', 'State Locking'],
      },
      {
        title: 'Production Kubernetes Orchestration (EKS, GKE, AKS)',
        description:
          'Multi-zone, high-availability Kubernetes clusters configured with Karpenter auto-provisioning, Calico network security policies, and Cert-Manager SSL rotation.',
        tags: ['Kubernetes (EKS / GKE)', 'Karpenter Autoscaler', 'Helm Charts', 'Network Policies'],
      },
      {
        title: 'Zero-Downtime GitOps Continuous Delivery (ArgoCD)',
        description:
          'Declarative GitOps synchronization with ArgoCD. Automated canary deployments, blue/green traffic cutovers, and instant automated rollbacks upon error detection.',
        tags: ['ArgoCD GitOps', 'Canary Rollouts', 'Blue/Green Deploys', 'GitHub Actions'],
      },
      {
        title: 'Full-Stack Observability & OpenTelemetry',
        description:
          'Full-stack telemetry with Prometheus, Grafana, OpenTelemetry, and Jaeger. Real-time SLO tracking, synthetic endpoint probing, and sub-1-minute incident alerting.',
        tags: ['Prometheus & Grafana', 'OpenTelemetry Tracing', 'Loki Log Aggregation', 'SLO Alerting'],
      },
      {
        title: 'DevSecOps & Automated Security Hardening',
        description:
          'Automated SAST/DAST security gates in CI/CD, distroless minimal container base images, automated container signing with Cosign, and secret management with HashiCorp Vault.',
        tags: ['Snyk & Trivy Scans', 'HashiCorp Vault', 'Cosign Image Signing', 'Distroless Containers'],
      },
      {
        title: 'Cloud FinOps & Infrastructure Cost Optimization',
        description:
          'Eliminating cloud waste through spot instance orchestration, container rightsizing, cold storage lifecycle rules, and automated non-production shutdown schedules.',
        tags: ['FinOps Auditing', 'Spot Instance Fleets', 'Container Rightsizing', 'Cost Governance'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Cloud Infrastructure Audit & Gap Analysis',
        description:
          'Auditing security perimeters, examining cloud expenditure, inspecting manual configurations, and drafting target GitOps topologies.',
        deliverables: ['Cloud Audit Assessment', 'Security & Drift Report', 'Target IaC Architecture Blueprint'],
      },
      {
        step: '02',
        title: 'Terraform IaC Scaffolding & Cluster Build',
        description:
          'Writing modular Terraform modules, standing up multi-AZ Kubernetes clusters, and configuring private networking perimeters.',
        deliverables: ['Modular Terraform Repository', 'Hardened Kubernetes Cluster', 'Vault Secret Engine'],
      },
      {
        step: '03',
        title: 'GitOps CI/CD Pipelines & Security Gates',
        description:
          'Configuring GitHub Actions build runners, integrating Snyk/Trivy vulnerability scanners, and deploying ArgoCD controllers for declarative sync.',
        deliverables: ['Automated CI/CD Pipeline', 'ArgoCD Deployment Manifests', 'Automated Vulnerability Gate'],
      },
      {
        step: '04',
        title: 'Observability Instrumentation & Runbook Handover',
        description:
          'Instrumenting distributed tracing, building executive Grafana dashboards, conducting disaster recovery drills, and handing over runbooks.',
        deliverables: ['Prometheus/Grafana Dashboard Suite', 'PagerDuty Alert Schedules', 'Disaster Recovery Runbook'],
      },
    ],
    deliverables: [
      {
        title: 'Modular Terraform / OpenTofu Codebase',
        category: 'IaC Core',
        description: 'Complete version-controlled cloud infrastructure code with environments separated by workspaces or directories.',
        format: 'Git Repository (Terraform)',
      },
      {
        title: 'Automated GitOps CI/CD Release Pipelines',
        category: 'DevOps Ops',
        description: 'Production workflows for automated container compilation, security scanning, and blue/green Kubernetes rollouts.',
        format: 'GitHub Actions / ArgoCD Manifests',
      },
      {
        title: 'Observability Dashboard & Telemetry Suite',
        category: 'Observability',
        description: 'Custom Grafana dashboards monitoring CPU/memory saturation, API latencies, error rates, and cloud spend.',
        format: 'Grafana JSON Dashboards & PromQL',
      },
      {
        title: 'Disaster Recovery Runbooks & Incident Protocols',
        category: 'Documentation',
        description: 'Step-by-step procedures for automated cluster disaster recovery, point-in-time database restoration, and incident triage.',
        format: 'Markdown Runbooks & Architecture Diagrams',
      },
    ],
    techStack: [
      { category: 'Cloud Providers', items: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Cloudflare'] },
      { category: 'Orchestration & Containers', items: ['Kubernetes (EKS/GKE)', 'Docker', 'Helm', 'ArgoCD', 'Karpenter'] },
      { category: 'Infrastructure as Code', items: ['Terraform', 'OpenTofu', 'Terragrunt', 'Ansible', 'Pulumi'] },
      { category: 'Monitoring & Security', items: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Datadog', 'HashiCorp Vault', 'Trivy'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds migrated our entire AWS footprint to Terraform and ArgoCD. We went from manual 4-hour bi-weekly releases with constant downtime to 12 automated zero-downtime deployments every single day.',
      author: 'Vikram Sethi',
      role: 'Head of Infrastructure',
      company: 'ScaleX Data',
      metric: 'Zero-Downtime Releases (12x/day)',
    },
    outcomes: [
      {
        metric: '15m',
        label: 'Commit-to-Production Velocity',
        description: 'Fully automated testing and deployment pipelines replace manual release gates and eliminate human error.',
      },
      {
        metric: '-35%',
        label: 'Cloud Infrastructure Spend',
        description: 'Automated cluster autoscaling, Karpenter provisioning, and spot instance fleets slash monthly cloud bills.',
      },
      {
        metric: '99.99%',
        label: 'Cloud Service Availability',
        description: 'Multi-zone Kubernetes clusters with self-healing nodes eliminate single points of failure.',
      },
    ],
    faqs: [
      {
        question: 'What is GitOps and why is it superior to traditional CI/CD?',
        answer:
          'In traditional CI/CD, external scripts push changes directly into clusters, often leading to configuration drift and security risks. In GitOps (via ArgoCD), Git is the single source of truth. An in-cluster agent continuously pulls and reconciles cluster state against Git declarations, enabling instant rollbacks and zero drift.',
      },
      {
        question: 'How do you guarantee zero downtime during application upgrades?',
        answer:
          'We use Kubernetes blue/green deployments and canary traffic routing with Argo Rollouts. New versions are deployed alongside existing versions, health checks and metrics are validated automatically, and traffic shifts incrementally over minutes with immediate automated rollback if error rates spike.',
      },
      {
        question: 'Can you help optimize our runaway AWS or GCP cloud spend?',
        answer:
          'Yes. We run an end-to-end FinOps audit to identify oversized compute instances, unattached storage volumes, and inefficient data transfer. By implementing Karpenter autoscaling and spot instance fleets, we routinely reduce cloud bills by 30% to 50%.',
      },
      {
        question: 'How do you handle sensitive secrets in version-controlled infrastructure?',
        answer:
          'We never commit plaintext secrets to Git. We integrate HashiCorp Vault, AWS Secrets Manager, or Sealed Secrets with strict IAM role bindings so secrets are injected securely at runtime inside ephemeral container memory.',
      },
    ],
    ctaHeadline: 'Ready to Eliminate Deployment Fear and Automate Your Cloud?',
    ctaDescription:
      'Schedule an architecture review with our Principal Site Reliability Engineers. We diagnose cluster vulnerabilities, analyze cloud spend, and deliver a GitOps modernization roadmap.',
    ctaButtonText: 'Request DevOps Architecture Review',
  },

  'ai-agents': {
    id: 'ai-agents',
    slug: 'ai-agents',
    title: 'AI Agents',
    tagline: 'Recursive Reasoning, Dynamic Tool-Calling & Persistent Vector Memory',
    category: 'AI & Intelligence',
    heroBadge: 'Autonomous AI Agent Swarms',
    heroHeadline: 'Autonomous Multi-Agent',
    heroHeadlineHighlight: 'Systems & Tool Execution',
    heroDescription:
      'We build production-ready autonomous AI agent swarms capable of executing complex, multi-step business objectives with human-like reasoning. Featuring sandboxed code execution, dynamic API tool-calling, persistent vector memory, and self-correcting evaluation loops.',
    heroImage: '/services/ai-agents.png',
    heroImageCaption: 'Autonomous AI Agent Architecture',
    primaryCtaText: 'Deploy Autonomous Agents',
    secondaryCtaText: 'Explore Agent Architecture',
    trustPoints: [
      'Sandboxed execution runtimes preventing unauthorized actions',
      'Human-in-the-loop escalation triggers for critical financial/operational thresholds',
      'Persistent episodic and semantic vector memory stores',
      'Immutable audit logging capturing every agent reasoning step',
    ],
    metrics: [
      { value: '94.2%', label: 'Zero-Intervention Task Completion' },
      { value: '< 1.2s', label: 'Tool Calling Execution Overhead' },
      { value: '100+', label: 'Integrated Internal Enterprise APIs' },
      { value: '100%', label: 'Deterministic Execution Boundary' },
    ],
    overview: {
      statement:
        'Single-turn chatbots answer questions, but autonomous agents take actions, execute workflows, and solve end-to-end business problems.',
      paragraphs: [
        'Traditional chatbots are passive listeners that wait for questions. Autonomous AI agents actively break down high-level business goals into sequential tasks, query internal databases, invoke third-party APIs, and self-correct when unexpected errors occur.',
        'We engineer resilient multi-agent swarms using LangGraph, CrewAI, and custom event loops. We implement hierarchical planner-worker patterns where specialized agents (researcher, coder, reviewer, validator) collaborate to achieve objectives without human micro-management.',
        'Every agent action is governed by strict deterministic boundaries: sandboxed Python/Wasm environments, explicit parameter schemas, and automated human-in-the-loop escalation gates whenever high-risk actions are proposed.',
      ],
      keyTakeaway:
        'Goal-driven autonomous agents that safely automate complex analytical, operational, and research workflows from intent to completion.',
    },
    capabilities: [
      {
        title: 'Hierarchical Planner-Worker Multi-Agent Swarms',
        description:
          'Directed acyclic execution graphs (DAGs) coordinating specialized agents. Planners decompose complex user goals into tasks delegated to researcher, coder, and validator agents.',
        tags: ['LangGraph', 'CrewAI', 'Hierarchical Swarms', 'DAG Execution Graphs'],
      },
      {
        title: 'Sandboxed Tool-Calling & Dynamic API Execution',
        description:
          'Securely executing Python scripts, querying SQL databases, and invoking internal enterprise APIs inside isolated Docker or WebAssembly (Wasm) micro-sandboxes.',
        tags: ['Docker Sandboxing', 'Wasm Runtimes', 'Dynamic Tool Calling', 'Pydantic Schemas'],
      },
      {
        title: 'Episodic & Long-Horizon Vector Memory',
        description:
          'Persistent memory architectures storing session history, past execution outcomes, and user preferences in vector databases for multi-week task continuity.',
        tags: ['Semantic Vector Memory', 'Episodic Store', 'Context Window Compression', 'Redis Memory'],
      },
      {
        title: 'Self-Reflective Evaluation & Error Recovery',
        description:
          'Recursive evaluation loops where validator agents review tool outputs against goal criteria, diagnosing runtime errors and re-planning alternative execution paths automatically.',
        tags: ['Self-Correction', 'Reflection Loops', 'Automated Replanning', 'Exception Handling'],
      },
      {
        title: 'Human-in-the-Loop Escalation Gates',
        description:
          'Configurable approval gates that pause agent execution and alert human managers via Slack or email when financial transactions, system modifications, or high-risk actions are requested.',
        tags: ['Human-in-the-Loop', 'Slack Approvals', 'Action Guardrails', 'Risk Boundaries'],
      },
      {
        title: 'Full Execution Telemetry & Audit Trails',
        description:
          'Complete visibility into agent thought processes, tool invocations, token costs, and decision rationale with immutable audit logging and compliance replay tools.',
        tags: ['LangSmith Tracing', 'Audit Ledgers', 'Token Analytics', 'Decision Transparency'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Goal Decomposition & Safety Scoping',
        description:
          'Mapping target business workflows, defining agent role specializations, establishing tool parameter schemas, and coding safety guardrail rules.',
        deliverables: ['Agent Workflow DAG', 'Tool API Parameter Registry', 'Safety & Escalation Policy'],
      },
      {
        step: '02',
        title: 'Agent State Machine & Tool Connector Build',
        description:
          'Developing LangGraph planner-worker state machines, sandboxing code execution environments, and integrating internal database and API tools.',
        deliverables: ['LangGraph State Machine Engine', 'Sandboxed Tool Runtimes', 'Vector Memory Integration'],
      },
      {
        step: '03',
        title: 'Adversarial Testing & Loop Prevention',
        description:
          'Simulating tool failure modes, testing infinite loop watchdogs, and verifying that the agent gracefully self-corrects or escalates to human operators.',
        deliverables: ['Loop Prevention Benchmark', 'Adversarial Edge-Case Suite', 'Escalation Webhook Tests'],
      },
      {
        step: '04',
        title: 'Production Orchestration & Telemetry Launch',
        description:
          'Deploying containerized agent runtimes with live LangSmith tracing, Slack notification integrations, and executive performance dashboards.',
        deliverables: ['Production Agent Microservices', 'Live Trace Dashboard', 'Operations Playbook'],
      },
    ],
    deliverables: [
      {
        title: 'Production Multi-Agent Core Engine',
        category: 'Agentic Core',
        description: 'Complete Python source code for planner, worker, and validator agents built with LangGraph with full IP ownership.',
        format: 'Python / LangGraph Repositories',
      },
      {
        title: 'Sandboxed Tool Execution & API Connectors',
        category: 'Infrastructure',
        description: 'Secure Docker/Wasm sandboxed environments and verified API connectors with strict Pydantic parameter typing.',
        format: 'Dockerfiles & API SDKs',
      },
      {
        title: 'Human-in-the-Loop Approval Gateway',
        category: 'Governance',
        description: 'Slack and web-based approval microservice allowing human operators to inspect agent actions and grant execution permission.',
        format: 'FastAPI / Slack Webhook Service',
      },
      {
        title: 'Agent Telemetry & Audit Trace Suite',
        category: 'Observability',
        description: 'Real-time tracing dashboards tracking tool call latency, token consumption, decision graphs, and execution histories.',
        format: 'LangSmith / OpenTelemetry Integration',
      },
    ],
    techStack: [
      { category: 'Agent Frameworks', items: ['LangGraph', 'CrewAI', 'AutoGen', 'LlamaIndex Workflows'] },
      { category: 'LLM Reasoning Core', items: ['Claude 3.5 Sonnet', 'GPT-4o', 'DeepSeek R1', 'Llama 3.3 70B'] },
      { category: 'Memory & State', items: ['Redis', 'PostgreSQL', 'pgvector', 'Qdrant'] },
      { category: 'Sandboxing & Tooling', items: ['Docker Sandboxes', 'WebAssembly (Wasm)', 'E2B Runtimes', 'Pydantic'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds built an autonomous market intelligence agent swarm that ingests, cross-references, and synthesizes competitive data across 50 sources daily, saving our research team 120 hours every week.',
      author: 'Alexander Wright',
      role: 'Head of Strategic Intelligence',
      company: 'Apex Horizon Ventures',
      metric: '120 Hours Saved Weekly',
    },
    outcomes: [
      {
        metric: '94.2%',
        label: 'Zero-Intervention Completion',
        description: 'Complex multi-step corporate workflows execute autonomously from initial intent to verified delivery.',
      },
      {
        metric: '10x',
        label: 'Task Execution Velocity',
        description: 'Hours of manual database lookups, document cross-referencing, and reporting compressed into seconds.',
      },
      {
        metric: '100%',
        label: 'Audit Traceability',
        description: 'Every internal tool invocation, database query, and reasoning step is captured in immutable audit ledgers.',
      },
    ],
    faqs: [
      {
        question: 'How do you prevent autonomous agents from getting stuck in infinite loops?',
        answer:
          'We implement strict recursion limits, step timeouts, and watchdog evaluation nodes within the LangGraph state machine. If an agent repeats an identical tool call or fails to make forward progress toward its goal, execution is paused and an alert is routed to human operators.',
      },
      {
        question: 'What happens if an agent tries to perform an unsafe or destructive action?',
        answer:
          'All tools are classified by risk tier. Read-only queries execute freely inside isolated sandboxes. High-risk actions (e.g., modifying live records, initiating financial transfers, or deleting assets) trigger mandatory human-in-the-loop approval gates via Slack or email before execution.',
      },
      {
        question: 'How do agents interact with our internal databases and APIs?',
        answer:
          'We write custom tool wrappers using strict Pydantic schemas. The agent cannot write arbitrary SQL or call raw URLs; it can only invoke vetted, parameterized internal functions with strict input validation and role-based permissions.',
      },
      {
        question: 'Can the agent explain why it made a specific decision?',
        answer:
          'Yes. We instrument full step-by-step reasoning traces using OpenTelemetry and LangSmith. You can inspect the exact prompt, thought process, tool inputs, raw API outputs, and reflection rationale for every single action taken.',
      },
    ],
    ctaHeadline: 'Ready to Put Autonomous AI Agents to Work Across Your Business?',
    ctaDescription:
      'Consult with our Principal Agentic Systems Engineers. We identify high-impact workflows, establish safety boundaries, and build a proof-of-value agent.',
    ctaButtonText: 'Request Agent Consultation',
  },

  'ai-automations': {
    id: 'ai-automations',
    slug: 'ai-automations',
    title: 'AI Automations',
    tagline: 'Automated Document Processing, Event-Driven Workflows & Zero-Touch Back-Office',
    category: 'AI & Intelligence',
    heroBadge: 'Enterprise Process Automation',
    heroHeadline: 'Intelligent Enterprise',
    heroHeadlineHighlight: 'AI Automations',
    heroDescription:
      'We eliminate repetitive manual work by engineering deterministic AI-powered automation pipelines. From unstructured invoice and contract data extraction to autonomous cross-system ERP updates, we turn days of human copy-pasting into seconds of automated precision.',
    heroImage: '/services/ai-automations.png',
    heroImageCaption: 'Intelligent AI Automation Topology',
    primaryCtaText: 'Automate Your Workflows',
    secondaryCtaText: 'Explore Automation Pipelines',
    trustPoints: [
      'Multi-engine OCR + multimodal LLM extraction with schema validation',
      'Immutable audit logging tracking every data transformation',
      'Direct bidirectional integrations with Salesforce, SAP, QuickBooks & NetSuite',
      'Exception triage queues with instant human review interfaces',
    ],
    metrics: [
      { value: '80%', label: 'Manual Processing Time Eliminated' },
      { value: '99.7%', label: 'Document Data Extraction Accuracy' },
      { value: '< 45s', label: 'End-to-End Processing Cycle Time' },
      { value: '3.5x', label: 'Operational Cost Savings' },
    ],
    overview: {
      statement:
        'Manual copy-paste data entry and tedious email forwarding are massive drains on enterprise profitability and human talent.',
      paragraphs: [
        'Back-office teams spend thousands of hours every month manually extracting numbers from PDFs, cross-referencing order amounts against purchase orders, and typing data across disconnected enterprise systems. These manual workflows are slow, error-prone, and expensive to scale.',
        'We engineer intelligent end-to-end automation pipelines that listen to inbound emails, webhooks, and FTP folders in real time. We deploy multimodal vision-language models to extract line items, dates, and contractual terms into validated JSON schemas.',
        'Validated data passes through deterministic business validation rules and updates your ERP, CRM, or accounting software automatically. When an anomaly or discrepancy is detected, the system routes the exact exception to a manager Slack with 1-click approval.',
      ],
      keyTakeaway:
        'Zero-touch operational workflows that process unstructured documents into production databases in seconds with complete audit transparency.',
    },
    capabilities: [
      {
        title: 'Multimodal Document & Invoice Extraction',
        description:
          'Extracting tables, line items, tax numbers, and dates from unstructured PDFs, scanned receipts, and invoices with 99.7% precision using multimodal vision models.',
        tags: ['Multimodal OCR', 'Document AI', 'Pydantic Schemas', 'Table Parsing'],
      },
      {
        title: 'Event-Driven ERP & CRM Integration Pipelines',
        description:
          'Synchronizing validated financial records directly into NetSuite, SAP, Salesforce, and QuickBooks with automated idempotency and bi-directional status updates.',
        tags: ['NetSuite & SAP', 'Salesforce Integrations', 'QuickBooks API', 'Webhook Pipelines'],
      },
      {
        title: 'Automated Email Ingestion & Intent Routing',
        description:
          'Parsing incoming customer and vendor emails, classifying inquiries, extracting attached purchase orders, and auto-drafting contextual replies for human sign-off.',
        tags: ['Email Parser Webhooks', 'Intent Classification', 'Attachment Extraction', 'Smart Drafts'],
      },
      {
        title: 'Deterministic Financial Reconciliation (3-Way Matching)',
        description:
          'Automated three-way matching reconciling invoice line items against purchase orders and bank receipts, flagging variances exceeding configured tolerance thresholds.',
        tags: ['Three-Way Matching', 'Variance Thresholds', 'Automated Reconciliation', 'Financial Rules'],
      },
      {
        title: 'Resilient Workflow Orchestration (Temporal & n8n)',
        description:
          'Durable execution engines that guarantee workflows survive server crashes, network dropouts, and third-party API rate limits with automatic retries and state replay.',
        tags: ['Temporal.io', 'n8n Enterprise', 'Durable Workflows', 'Exponential Backoff'],
      },
      {
        title: 'Smart Exception Triage & Human Review Portals',
        description:
          'Lightweight web portals where human managers can quickly review flagged anomalies, inspect visual document bounding boxes, and approve items with a single click.',
        tags: ['Exception Portals', 'Bounding-Box Viewer', '1-Click Approvals', 'Slack Webhooks'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Process Mapping & Document Audit',
        description:
          'Auditing existing manual workflows, gathering sample invoice/contract documents, identifying edge cases, and calculating baseline ROI metrics.',
        deliverables: ['Process Bottleneck Map', 'Document Extraction Schema Spec', 'ROI & Payback Model'],
      },
      {
        step: '02',
        title: 'Extraction Pipeline & Schema Hardening',
        description:
          'Developing multimodal extraction models, configuring Pydantic schema validators, and running test batches against historical documents.',
        deliverables: ['Extraction Microservice Code', 'Validated Schema Models', 'Extraction Accuracy Benchmark'],
      },
      {
        step: '03',
        title: 'ERP Integration & Exception Flow Build',
        description:
          'Connecting bi-directional ERP webhooks, setting up three-way matching algorithms, and building the manager Slack exception notification loops.',
        deliverables: ['ERP Connector Suite', 'Exception Triage Portal', 'Slack Alert Webhooks'],
      },
      {
        step: '04',
        title: 'Production Shadow Run & Full Cutover',
        description:
          'Running the automation pipeline in parallel shadow mode alongside human operators, certifying zero error drift, and executing full production cutover.',
        deliverables: ['Shadow Run Audit Certificate', 'Production Deployment Manifests', 'Operator Runbook'],
      },
    ],
    deliverables: [
      {
        title: 'Production Document Extraction Microservice',
        category: 'AI Pipeline',
        description: 'Multimodal vision and OCR parsing service with structured Pydantic schema outputs and full IP transfer.',
        format: 'Dockerized FastAPI / Python Service',
      },
      {
        title: 'ERP / CRM Connector & Webhook Suite',
        category: 'Integrations',
        description: 'Bi-directional integration pipelines connecting processed data to Salesforce, NetSuite, SAP, and databases.',
        format: 'Node.js / Python Webhook Runtimes',
      },
      {
        title: 'Exception Triage & Human Approval Portal',
        category: 'Web Interface',
        description: 'Responsive React portal showing document side-by-side with extracted fields for fast human verification.',
        format: 'Next.js / React Portal',
      },
      {
        title: 'Automated Audit Logging & Compliance System',
        category: 'Compliance',
        description: 'Immutable logging capturing every document transformation, validation check, and ERP write timestamp.',
        format: 'PostgreSQL Audit Tables & Dashboards',
      },
    ],
    techStack: [
      { category: 'OCR & Multimodal AI', items: ['GPT-4o Vision', 'Claude 3.5 Sonnet', 'AWS Textract', 'Google Document AI', 'Tesseract'] },
      { category: 'Workflow Orchestration', items: ['Temporal.io', 'n8n Enterprise', 'Celery', 'Apache Airflow'] },
      { category: 'Backend & Data', items: ['Python (FastAPI)', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka'] },
      { category: 'Enterprise Systems', items: ['Salesforce', 'NetSuite', 'SAP', 'QuickBooks', 'HubSpot', 'Slack'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds automated our accounts payable pipeline. We process over 15,000 vendor invoices monthly, cutting cycle times from 4 days to 45 seconds while reducing data entry errors to zero.',
      author: 'Danielle Brooks',
      role: 'VP of Financial Operations',
      company: 'OmniLogistics Global',
      metric: '45s Invoice Processing Time',
    },
    outcomes: [
      {
        metric: '80%',
        label: 'Operational Overhead Eliminated',
        description: 'Frees operations and finance teams from manual copy-paste spreadsheet entry and document re-typing.',
      },
      {
        metric: '99.7%',
        label: 'Extraction Precision',
        description: 'Strict Pydantic JSON schema validation stops corrupted database writes.',
      },
      {
        metric: '< 45s',
        label: 'Document Processing Time',
        description: 'Replaces multi-day invoice approval backlogs with sub-minute automated verification.',
      },
    ],
    faqs: [
      {
        question: 'Can your automation pipelines extract data from messy, scanned, or handwritten PDFs?',
        answer:
          'Yes. We combine enterprise OCR with multimodal vision-language models (GPT-4o and Claude 3.5 Sonnet) that interpret skewed scans, degraded faxes, low-resolution receipts, and complex multi-column tables with 99.7% accuracy.',
      },
      {
        question: 'What happens when an invoice contains an error or unexpected line item?',
        answer:
          'Our deterministic business validation engine checks sums, tax calculations, and vendor names against your database. If a discrepancy or confidence threshold violation occurs, the system automatically routes the exact invoice to a manager Slack or review portal for 1-click approval.',
      },
      {
        question: 'Can you integrate with our legacy on-premise ERP or accounting system?',
        answer:
          'Yes. In addition to cloud APIs (Salesforce, NetSuite), we integrate with on-premise SQL databases, SFTP batch directories, and legacy ERPs using secure VPN connectors and durable event queues.',
      },
      {
        question: 'How quickly do we see positive return on investment (ROI)?',
        answer:
          'Most enterprise clients achieve full payback within 60 to 90 days. Eliminating manual data entry saves hundreds of employee hours per month and completely prevents costly duplicate invoice payments.',
      },
    ],
    ctaHeadline: 'Ready to Eliminate Repetitive Manual Back-Office Workflows?',
    ctaDescription:
      'Talk to our Process Automation Specialists. We will analyze your document flows, calculate your exact operational ROI, and demo a working extraction pipeline.',
    ctaButtonText: 'Request Automation Discovery',
  },

  'chatbot-videobot': {
    id: 'chatbot-videobot',
    slug: 'chatbot-videobot',
    title: 'Chatbot & Video Bot',
    tagline: 'Real-Time Conversational AI, Low-Latency Voice & Photorealistic WebRTC Video Avatars',
    category: 'AI & Intelligence',
    heroBadge: 'Multimodal Conversational AI',
    heroHeadline: 'Multimodal Chatbots',
    heroHeadlineHighlight: '& Interactive Video Bots',
    heroDescription:
      'We engineer next-generation conversational experiences that go far beyond standard text chat. From voice-enabled enterprise support bots with sub-300ms latency to photorealistic, lip-synced interactive video avatars streamed directly over WebRTC.',
    heroImage: '/services/chatbot-videobot.png',
    heroImageCaption: 'Multimodal Chatbot & Video Bot Architecture',
    primaryCtaText: 'Deploy Conversational AI',
    secondaryCtaText: 'Experience Video Bots',
    trustPoints: [
      'Zero hallucination guarantee via strict enterprise vector knowledge grounding',
      'Ultra-low-latency audio/video streaming via WebRTC and H.264',
      'Omnichannel deployment: Web, iOS, Android, WhatsApp, and telephony',
      'Direct live human agent escalation with full conversation context transfer',
    ],
    metrics: [
      { value: '< 350ms', label: 'Voice-to-Speech Response Latency' },
      { value: '78%', label: 'First-Contact Resolution Rate' },
      { value: '40+', label: 'Languages Supported in Real Time' },
      { value: '24/7', label: 'Instant Multimodal Availability' },
    ],
    overview: {
      statement:
        'Traditional static FAQ chatbots frustrate customers with robotic canned responses, while modern buyers expect instant, lifelike dialogue.',
      paragraphs: [
        'Rule-based decision-tree chatbots feel antiquated and force customers into infuriating loops. Today modern digital customers demand human-level comprehension, natural voice cadence, and emotionally resonant video interactions across web and mobile touchpoints.',
        'We engineer multimodal conversational platforms integrating ultra-fast Whisper speech-to-text, knowledge-grounded LLMs, and neural text-to-speech with natural breathing cues. For high-touch brand experiences, we stream photorealistic digital humans with frame-accurate lip-synchronization over WebRTC.',
        'Every bot is deeply integrated into your customer data platform (Zendesk, Salesforce, custom APIs) to execute transactions: booking appointments, looking up order statuses, and escalating complex tickets to human reps with complete context.',
      ],
      keyTakeaway:
        'Immersive voice and video conversational agents that resolve customer inquiries instantly with human empathy and verified technical accuracy.',
    },
    capabilities: [
      {
        title: 'Photorealistic WebRTC Video Avatar Streaming',
        description:
          'Streaming real-time interactive digital human avatars over WebRTC with sub-500ms latency. Frame-accurate neural lip-synchronization, natural head movements, and dynamic facial expressions.',
        tags: ['WebRTC Video Streaming', 'Neural Lip-Sync', 'Digital Human Avatars', 'H.264 Low-Latency'],
      },
      {
        title: 'Ultra-Low Latency Voice Dialogue Engines',
        description:
          'Sub-300ms round-trip voice conversations using streaming Whisper transcription, low-latency LLM token streaming, and neural voices with natural interruption handling.',
        tags: ['Streaming Speech-to-Text', 'Neural TTS', 'Interruption Handling', 'Whisper & Cartesia'],
      },
      {
        title: 'Enterprise Knowledge Grounding & Factuality (RAG)',
        description:
          'Grounding answers in your verified documentation, product specs, and support knowledge bases. Strict guardrails block hallucinations and attach verified source citations.',
        tags: ['Knowledge Base RAG', 'Zero Hallucination Guardrails', 'Source Citations', 'pgvector'],
      },
      {
        title: 'Omnichannel Integration (Web, Mobile, WhatsApp, Voice)',
        description:
          'Deploying conversational assistants directly across React web applications, native iOS/Android SDKs, WhatsApp Business, Slack, and PSTN telephone lines.',
        tags: ['React & Mobile SDKs', 'WhatsApp Business API', 'Telephony / SIP Trunks', 'Twilio Voice'],
      },
      {
        title: 'Transactional Tool Execution & CRM Lookup',
        description:
          'Configuring bots to authenticate users securely, check real-time order tracking, process refunds, schedule calendar appointments, and write updates to Salesforce.',
        tags: ['CRM Integrations', 'Stripe Refunds', 'Calendar Scheduling', 'Authenticated Sessions'],
      },
      {
        title: 'Smart Human Agent Escalation & Context Transfer',
        description:
          'Detecting user frustration or complex inquiries, generating structured conversation summaries, and routing callers directly to live human agents via Zendesk or Genesys.',
        tags: ['Sentiment Analysis', 'Live Agent Escalation', 'Zendesk / Genesys Sync', 'Conversation Handoff'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Knowledge Ingestion & Persona Architecture',
        description:
          'Ingesting support knowledge bases, structuring vector embeddings, defining brand tone of voice, and designing transactional intent schemas.',
        deliverables: ['Knowledge Base Vector Store', 'Persona & Tone Guidelines', 'Intent Action Registry'],
      },
      {
        step: '02',
        title: 'Voice & Video Avatar Pipeline Integration',
        description:
          'Configuring WebRTC media servers, training neural voice models, and calibrating sub-400ms audio/video streaming pipelines.',
        deliverables: ['WebRTC Media Streaming Service', 'Custom Voice Profile', 'Video Avatar Pipeline'],
      },
      {
        step: '03',
        title: 'CRM Tool-Calling & Security Guardrails',
        description:
          'Connecting Salesforce/Zendesk APIs, implementing strict PII redaction filters, and configuring automated live agent escalation triggers.',
        deliverables: ['CRM Integration Connectors', 'PII Redaction Guardrails', 'Agent Escalation Webhooks'],
      },
      {
        step: '04',
        title: 'Omnichannel Deployment & Conversation Analytics',
        description:
          'Embedding widgets into web and mobile apps, provisioning WhatsApp lines, and launching live conversation analytics dashboards.',
        deliverables: ['Embeddable React / Mobile SDKs', 'Analytics Dashboard', 'Live Support Runbook'],
      },
    ],
    deliverables: [
      {
        title: 'Embeddable Web & Mobile Chat / Video SDK',
        category: 'Client SDK',
        description: 'Lightweight, responsive React component and mobile SDKs supporting text, voice, and streaming video avatars.',
        format: 'npm Package / Swift & Kotlin SDKs',
      },
      {
        title: 'Real-Time WebRTC Media Streaming Backend',
        category: 'Media Core',
        description: 'High-throughput WebRTC streaming server orchestrating video generation, audio transcription, and token routing.',
        format: 'Dockerized Media Runtimes',
      },
      {
        title: 'Enterprise Knowledge Retrieval & Guardrail Core',
        category: 'AI Pipeline',
        description: 'Vector search knowledge retrieval engine with factuality validation and hallucination filters.',
        format: 'Python / FastAPI Microservice',
      },
      {
        title: 'Live Agent Handoff & Conversation Analytics Suite',
        category: 'Operations',
        description: 'Supervisor dashboard tracking sentiment trends, first-contact resolution rates, and live agent queue routing.',
        format: 'Analytics Web Portal',
      },
    ],
    techStack: [
      { category: 'Audio & Speech', items: ['OpenAI Whisper', 'Deepgram', 'Cartesia', 'ElevenLabs', 'Twilio Voice'] },
      { category: 'Video Avatars & Streaming', items: ['WebRTC', 'MediaSoup', 'LiveKit', 'HeyGen API', 'Simli'] },
      { category: 'LLM & Guardrails', items: ['Claude 3.5 Sonnet', 'GPT-4o', 'Llama 3.3', 'NeMo Guardrails'] },
      { category: 'Integrations & Storage', items: ['Zendesk', 'Salesforce', 'pgvector', 'Redis', 'Socket.io'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds deployed an interactive video avatar for our patient intake portal. It resolves 82% of pre-consultation inquiries autonomously with an astonishing 96% patient satisfaction rating.',
      author: 'Dr. Evelyn Reed',
      role: 'Chief Medical Officer',
      company: 'Vanguard Health Care',
      metric: '82% Autonomous Resolution Rate',
    },
    outcomes: [
      {
        metric: '< 350ms',
        label: 'Voice Interaction Latency',
        description: 'Enables natural human conversational flow without awkward pauses or robotic audio delays.',
      },
      {
        metric: '78%',
        label: 'Autonomous First-Contact Resolution',
        description: 'Resolves routine customer queries without requiring escalation to human support agents.',
      },
      {
        metric: '24/7',
        label: 'Global Multimodal Coverage',
        description: 'Delivers high-touch, video-guided customer onboarding and support in 40+ languages around the clock.',
      },
    ],
    faqs: [
      {
        question: 'How do video avatars stream smoothly without buffering or massive bandwidth requirements?',
        answer:
          'We utilize modern WebRTC adaptive bitrate streaming with H.264 video compression. Video frames are synthesized and lip-synced in the cloud at low latency, requiring only standard mobile broadband (under 1.5 Mbps) to stream smoothly at 30fps.',
      },
      {
        question: 'Can the chatbot authenticate users and look up sensitive customer data safely?',
        answer:
          'Yes. We implement secure OAuth2 session handshakes and OTP phone/email verification before allowing the bot to access private customer information. All database calls are sandboxed with strict parameter validation and encrypted in transit.',
      },
      {
        question: 'What happens when the bot does not know the answer to a question?',
        answer:
          'Rather than hallucinating or guessing, the bot acknowledges its boundary, captures the customer details, and either submits an asynchronous ticket or initiates a warm transfer to a live human agent with the entire chat history summarized.',
      },
      {
        question: 'How long does it take to train the bot on our company documentation?',
        answer:
          'Our automated ingestion pipelines ingest PDFs, websites, Notion wikis, and Zendesk articles in hours. With semantic chunking and embedding, your bot is typically ready for accuracy testing within 48 hours.',
      },
    ],
    ctaHeadline: 'Ready to Replace Robotic Chatbots with Lifelike Interactive Avatars?',
    ctaDescription:
      'Schedule a live demo with our Conversational AI Architects. Experience sub-400ms voice and WebRTC video streaming firsthand.',
    ctaButtonText: 'Request Live Interactive Demo',
  },

  'analytics-dashboard': {
    id: 'analytics-dashboard',
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    tagline: 'Real-Time Business Intelligence & Interactive Data Visualization',
    category: 'Cloud & Operations',
    heroBadge: 'Enterprise BI & Real-Time Dashboards',
    heroHeadline: 'Real-Time Business',
    heroHeadlineHighlight: 'Analytics & Dashboards',
    heroDescription:
      'Turn vast data streams into actionable executive clarity. We engineer real-time analytical data warehouses (ClickHouse, Snowflake) paired with 60fps interactive React visualizations, embedded white-label portals, and automated anomaly alerting.',
    heroImage: '/services/analytics-dashboard.png',
    heroImageCaption: 'Real-Time Analytics Dashboard Architecture',
    primaryCtaText: 'Build Your Dashboard',
    secondaryCtaText: 'Explore Analytics Architecture',
    trustPoints: [
      'Decoupled columnar storage (ClickHouse/DuckDB) preventing production database load',
      'Embedded white-label customer analytics with strict Row-Level Security (RLS)',
      'Sub-80ms analytical aggregations across hundreds of millions of events',
      'Automated scheduled executive PDF summaries and instant Slack anomaly alerts',
    ],
    metrics: [
      { value: '< 80ms', label: 'Query Latency on 100M+ Rows' },
      { value: '60 FPS', label: 'WebGL & Canvas Chart Rendering' },
      { value: '100%', label: 'Multi-Tenant Row-Level Security' },
      { value: '10x', label: 'Faster Executive Decision Velocity' },
    ],
    overview: {
      statement:
        'Sluggish, clunky dashboards that take 30 seconds to reload destroy executive focus and hide critical business risks.',
      paragraphs: [
        'When analytics queries freeze your production database or take 45 seconds to generate an executive report, data-driven decision making grinds to a halt. Traditional transactional databases were never designed for multi-million-row aggregations.',
        'We architect modern data pipelines pairing high-speed columnar warehouses (ClickHouse, Snowflake, DuckDB) with reactive frontend visualization frameworks. We use Change Data Capture (CDC) to stream events from your operational databases without adding a single millisecond of overhead to your live users.',
        'Our dashboards are engineered with Apache ECharts and WebGL canvas renderers that display 500,000 data points at a silky smooth 60 frames per second, complete with multi-tenant row-level security and natural language "Talk to Your Data" query interfaces.',
      ],
      keyTakeaway:
        'Sub-second analytical intelligence that turns massive operational event streams into actionable visual decisions without breaking production.',
    },
    capabilities: [
      {
        title: 'High-Speed Columnar Analytical Warehouses',
        description:
          'Ingesting millions of events per minute into ClickHouse, Snowflake, and TimescaleDB with instant materialization and sub-80ms analytical query response times.',
        tags: ['ClickHouse / Snowflake', 'DuckDB', 'Columnar Storage', 'Sub-80ms Queries'],
      },
      {
        title: 'Reactive WebGL & Canvas Visualizations',
        description:
          'High-density data charts rendering 500,000 data points at smooth 60fps using Apache ECharts, D3.js, and WebGL. Interactive zoom, pan, brush filtering, and financial heatmaps.',
        tags: ['Apache ECharts', 'D3.js', 'WebGL Canvas Renderers', 'Financial Heatmaps'],
      },
      {
        title: 'Embedded Multi-Tenant Customer Portals',
        description:
          'Embedding white-label customer-facing analytics dashboards directly inside your SaaS application with strict Row-Level Security (RLS) and custom client theming.',
        tags: ['Row-Level Security (RLS)', 'Embedded SaaS Dashboards', 'White-Label Branding', 'Multi-Tenant Isolation'],
      },
      {
        title: 'Real-Time Event Ingestion & CDC Pipelines',
        description:
          'Debezium and Kafka change-data-capture (CDC) pipelines streaming updates from transactional databases into transformed dbt data marts with zero production DB lock.',
        tags: ['Kafka / Debezium CDC', 'dbt Data Modeling', 'Airflow Pipelines', 'Zero DB Lock'],
      },
      {
        title: 'Natural Language "Talk to Your Data" (Text-to-SQL)',
        description:
          'Semantic layer allowing non-technical leaders to ask plain English questions ("Compare Q3 gross margin across European hubs") and receive verified charts instantly.',
        tags: ['Text-to-SQL', 'Semantic Data Layer', 'SQL Guardrails', 'Self-Service BI'],
      },
      {
        title: 'Automated Anomaly Alerting & Scheduled Reports',
        description:
          'Machine learning models detecting statistical outliers across revenue, churn, and error metrics, triggering automated Slack alerts and scheduled executive PDF reports.',
        tags: ['Anomaly Detection', 'Slack / Email Alerts', 'Automated PDF Reports', 'Variance Tracking'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Metric Taxonomy & Dimensional Modeling',
        description:
          'Defining executive KPI definitions, mapping transactional data sources, and designing dimensional star schemas optimized for analytical speed.',
        deliverables: ['KPI Metric Taxonomy', 'Dimensional Star Schema Spec', 'Data Volume Benchmarks'],
      },
      {
        step: '02',
        title: 'Columnar Warehouse & CDC Ingestion Setup',
        description:
          'Deploying ClickHouse or Snowflake clusters, configuring real-time change data capture pipelines, and authoring dbt transformation models.',
        deliverables: ['ClickHouse / Snowflake Schema DDL', 'dbt Transformation Models', 'Real-Time CDC Pipeline'],
      },
      {
        step: '03',
        title: 'Interactive React UI & Visual Component Kit',
        description:
          'Developing responsive React dashboard layouts, custom filter bars, date-range pickers, high-framerate charts, and PDF export engines.',
        deliverables: ['React Dashboard Component Kit', 'Apache ECharts Visualizations', 'PDF Export Engine'],
      },
      {
        step: '04',
        title: 'Row-Level Security Hardening & Launch',
        description:
          'Configuring multi-tenant security filters, testing database query caching rules, training executive users, and launching to production.',
        deliverables: ['Row-Level Security Policies', 'Query Performance Benchmark', 'Executive Training Playbook'],
      },
    ],
    deliverables: [
      {
        title: 'Interactive React / Next.js Analytics Portal',
        category: 'Frontend UI',
        description: 'Modular, responsive dashboard application with dark/light themes, custom filters, and sub-100ms chart rendering.',
        format: 'React / Next.js Git Repository',
      },
      {
        title: 'Columnar Data Warehouse & dbt Models',
        category: 'Data Architecture',
        description: 'Optimized ClickHouse/Snowflake database schemas with automated dbt transformation scripts and data tests.',
        format: 'ClickHouse DDL & dbt Project',
      },
      {
        title: 'Automated Scheduled PDF & Slack Reporting Engine',
        category: 'Reporting',
        description: 'Microservice generating pixel-perfect executive PDF summaries delivered via email alongside automated Slack anomaly alerts.',
        format: 'Puppeteer / Node.js Microservice',
      },
      {
        title: 'Natural Language Text-to-SQL Semantic Layer',
        category: 'AI BI',
        description: 'Semantic layer allowing business users to query metrics using natural language with guaranteed SQL accuracy.',
        format: 'FastAPI Semantic Service',
      },
    ],
    techStack: [
      { category: 'Visualization', items: ['Apache ECharts', 'D3.js', 'Tremor', 'Chart.js', 'Mapbox GL'] },
      { category: 'Data Warehouses', items: ['ClickHouse', 'Snowflake', 'DuckDB', 'Google BigQuery', 'TimescaleDB'] },
      { category: 'Data Engineering', items: ['dbt', 'Apache Airflow', 'Kafka', 'Debezium', 'Dagster'] },
      { category: 'Application Tier', items: ['Next.js 15', 'React 19', 'TypeScript', 'FastAPI', 'Tailwind CSS'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds built our multi-tenant customer analytics portal on ClickHouse. Our enterprise customers now analyze 50 million transaction records in under 80 milliseconds directly inside our SaaS product.',
      author: 'Rachel Kovalev',
      role: 'VP of Product Analytics',
      company: 'City Index Analytics',
      metric: '< 80ms Query on 50M Records',
    },
    outcomes: [
      {
        metric: '< 80ms',
        label: 'Query Execution Speed',
        description: 'Instant data discovery across 100M+ rows without sluggish loading spinners or timeout errors.',
      },
      {
        metric: '0%',
        label: 'Production DB Degradation',
        description: 'Isolated columnar analytical data marts keep your transactional databases fast.',
      },
      {
        metric: '100%',
        label: 'Embedded Multi-Tenant Security',
        description: 'Row-Level Security (RLS) guarantees each enterprise customer only sees their authorized data.',
      },
    ],
    faqs: [
      {
        question: 'Will running heavy analytics queries slow down our live production database?',
        answer:
          'No. We use Change Data Capture (CDC) to asynchronously replicate data from your production transactional database into an isolated columnar analytical warehouse (like ClickHouse or Snowflake), guaranteeing zero performance impact on live users.',
      },
      {
        question: 'Can we embed these dashboards directly inside our existing SaaS app?',
        answer:
          'Yes. We build embedded React components with strict Row-Level Security (RLS) so each of your enterprise customers only sees their authorized data with your customized white-label branding.',
      },
      {
        question: 'How do you render millions of data points without browser lag?',
        answer:
          'We utilize server-side aggregation, WebGL Canvas chart renderers, and progressive data windowing so millions of data points render at a silky smooth 60 frames per second without crashing browser tabs.',
      },
      {
        question: 'Can non-technical executives create custom queries without knowing SQL?',
        answer:
          'Yes. We integrate our natural language "Talk to Your Data" interface, allowing executives to ask questions in plain English ("Show MRR growth in Europe last quarter") and receive instant verified visual charts.',
      },
    ],
    ctaHeadline: 'Ready to Turn Millions of Data Points into Sub-Second Executive Clarity?',
    ctaDescription:
      'Consult with our Principal Data & BI Architects. We will review your database topology, design a columnar data mart, and deliver a customized dashboard prototype.',
    ctaButtonText: 'Request Dashboard Architecture Plan',
  },

  'technical-support': {
    id: 'technical-support',
    slug: 'technical-support',
    title: 'Technical Support',
    tagline: '24/7 SLA-Backed Maintenance, Monitoring & Incident Management',
    category: 'Cloud & Operations',
    heroBadge: '24/7 SLA Technical Maintenance',
    heroHeadline: '24/7 Enterprise SLA',
    heroHeadlineHighlight: '& Technical Support',
    heroDescription:
      'Protect uninterrupted business continuity for mission-critical software systems. We provide guaranteed sub-15-minute P1 response times, proactive synthetic uptime monitoring, continuous security vulnerability patching, and dedicated Tier-3 site reliability engineers.',
    heroImage: '/services/technical-support.png',
    heroImageCaption: '24/7 SLA Technical Support Architecture',
    primaryCtaText: 'Secure 24/7 Support',
    secondaryCtaText: 'Review Support SLAs',
    trustPoints: [
      'Guaranteed contractual sub-15-minute P1 incident response time',
      'Continuous synthetic monitoring probing APIs & user journeys every 30s',
      'Automated zero-day security patching & dependency vulnerability audits',
      'Blameless post-mortem documentation with preventative architecture hardening',
    ],
    metrics: [
      { value: '< 15 min', label: 'P1 Critical Outage Response SLA' },
      { value: '24/7/365', label: 'Continuous Human Coverage' },
      { value: '99.99%', label: 'Guaranteed System Uptime' },
      { value: '100%', label: 'Dedicated Escalation Engineers' },
    ],
    overview: {
      statement:
        'A 20-minute middle-of-the-night production outage can destroy customer trust, breach enterprise contracts, and burn reputation.',
      paragraphs: [
        'Software systems do not fail during convenient business hours. When an unexpected database deadlock strikes or an SSL certificate expires at 2:00 AM on a Sunday, internal development teams are woken up exhausted, leading to frantic fixes that create more downtime.',
        'We provide battle-tested, 24/7/365 Tier-1 to Tier-3 site reliability engineering coverage backed by legally binding SLAs. We deploy synthetic monitoring probes that test your critical user funnels every 30 seconds, catching latency degradation and memory leaks long before your customers notice.',
        'When a critical incident occurs, our dedicated on-call engineers triage the issue within 15 minutes, execute verified operational runbooks, resolve the failure, and deliver a detailed, blameless post-mortem report detailing exact preventative fixes.',
      ],
      keyTakeaway:
        'Guaranteed round-the-clock peace of mind backed by senior engineers, proactive telemetry, and ironclad uptime SLAs.',
    },
    capabilities: [
      {
        title: '24/7/365 Tiered L1-L3 Engineering Support',
        description:
          'Dedicated senior support squads covering Tier-1 triage, Tier-2 technical diagnostics, and Tier-3 core code debugging with a guaranteed sub-15-minute response SLA for critical incidents.',
        tags: ['Tiered L1-L3 Support', '24/7 Global Rotation', 'Sub-15m P1 SLA', 'Dedicated Engineers'],
      },
      {
        title: 'Proactive Synthetic Uptime & User Journey Probes',
        description:
          'Automated synthetic browser journeys, API endpoint heartbeats, SSL certificate monitors, and memory saturation alerts that catch anomalies before real users are impacted.',
        tags: ['Datadog & New Relic', 'Synthetic User Journeys', 'API Heartbeats', 'Memory Profiling'],
      },
      {
        title: 'Automated Security Vulnerability Patching',
        description:
          'Continuous CVE vulnerability scanning, automated zero-day security patching, database minor/major version upgrades, and third-party dependency maintenance.',
        tags: ['CVE Scans', 'Zero-Day Patching', 'Database Upgrades', 'Dependency Audits'],
      },
      {
        title: 'Continuous Database Health & Performance Tuning',
        description:
          'Automated vacuuming routines, index re-indexing, slow query plan optimization, read-replica replication lag management, and disaster recovery backup restoration drills.',
        tags: ['PostgreSQL / MySQL Tuning', 'Index Optimization', 'Backup Restorations', 'Deadlock Resolution'],
      },
      {
        title: 'Cloud FinOps & Continuous Cost Optimization',
        description:
          'Monthly cloud cost audits, eliminating orphaned EBS volumes and snapshots, optimizing object storage lifecycles, and rightsizing idle compute resources.',
        tags: ['FinOps Auditing', 'Orphaned Resource Pruning', 'Capacity Planning', 'Cloud Cost Control'],
      },
      {
        title: 'Disaster Recovery Drills & Multi-Region Failover',
        description:
          'Semi-annual disaster recovery simulation drills verifying point-in-time recovery, RTO (<30m) and RPO (<5m) restoration targets, and multi-region failover integrity.',
        tags: ['RTO < 30min / RPO < 5min', 'DR Drills', 'Multi-Region Failover', 'Audit Documentation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'System Handover & Runbook Ingestion',
        description:
          'Auditing existing codebase, documenting cloud topology, capturing environment variables, and establishing escalation matrices.',
        deliverables: ['System Runbook Specification', 'SLA Escalation Matrix', 'Access & Security Credentials'],
      },
      {
        step: '02',
        title: 'Synthetic Monitoring & Alert Integration',
        description:
          'Deploying Datadog / Prometheus synthetic monitors, configuring PagerDuty alert thresholds, and testing incident loops.',
        deliverables: ['Synthetic Alert Setup', 'PagerDuty On-Call Schedule', 'Live System Health Board'],
      },
      {
        step: '03',
        title: 'Continuous Maintenance & Patch Management',
        description:
          'Executing bi-weekly dependency updates, security vulnerability remediation, and database maintenance scripts.',
        deliverables: ['Monthly Patch Report', 'Security Audit Logs', 'Performance Improvement Log'],
      },
      {
        step: '04',
        title: 'Quarterly Executive Review & DR Drills',
        description:
          'Presenting quarterly SLA compliance scorecards, cloud expenditure trends, and conducting full disaster recovery restoration drills.',
        deliverables: ['Quarterly SLA Scorecard', 'Disaster Recovery Certificate', 'Infrastructure Roadmap'],
      },
    ],
    deliverables: [
      {
        title: '24/7 SLA Support Agreement & Runbook',
        category: 'Governance',
        description: 'Legally binding SLA contract outlining response times (P1 < 15 min, P2 < 1 hour), coverage, and runbooks.',
        format: 'Formal SLA Document',
      },
      {
        title: 'Live System Health & Status Page',
        category: 'Monitoring',
        description: 'Public or private status page (e.g. status.yourcompany.com) tracking real-time uptime and incident history.',
        format: 'Hosted Status Portal',
      },
      {
        title: 'Monthly Maintenance & Performance Report',
        category: 'Reporting',
        description: 'Detailed breakdown of resolved tickets, security patches applied, uptime percentages, and response metrics.',
        format: 'Monthly Executive PDF',
      },
      {
        title: 'Disaster Recovery Audit & Restore Certificate',
        category: 'Compliance',
        description: 'Documented test results confirming RTO (<30m) and RPO (<5m) restoration from cloud backups.',
        format: 'Audit Certificate',
      },
    ],
    techStack: [
      { category: 'Monitoring & Alerting', items: ['Datadog', 'Prometheus', 'Grafana', 'PagerDuty', 'Sentry', 'BetterUptime'] },
      { category: 'Cloud Management', items: ['AWS Systems Manager', 'Google Cloud Operations', 'Azure Monitor', 'Cloudflare'] },
      { category: 'Ticketing & Service Desk', items: ['Jira Service Management', 'Zendesk', 'Linear', 'ServiceNow'] },
      { category: 'Security & Scanning', items: ['Snyk', 'Trivy', 'Dependabot', 'SonarQube'] },
    ],
    caseStudyQuote: {
      quote:
        'Neominds manages 24/7 support for our core transaction platform. Over 3 years of partnership, we have maintained a 99.995% uptime record with zero unaddressed critical incidents.',
      author: 'Elena Rostova',
      role: 'Chief Operating Officer',
      company: 'Authenticom Logistics',
      metric: '99.995% Uptime Over 3 Years',
    },
    outcomes: [
      {
        metric: '< 15 min',
        label: 'P1 Incident Response SLA',
        description: 'Immediate war-room paging and active senior developer remediation for any critical outage.',
      },
      {
        metric: '99.99%',
        label: 'Production Uptime',
        description: 'Proactive synthetic probes and self-healing automation eliminate unplanned platform downtime.',
      },
      {
        metric: '-30%',
        label: 'Internal Engineering Burnout',
        description: 'Frees your internal product development team from stressful middle-of-the-night on-call duties.',
      },
    ],
    faqs: [
      {
        question: 'What is your response time for critical P1 production outages?',
        answer:
          'We guarantee a sub-15 minute response time for P1 critical outages (complete system downtime or data integrity threat) with engineers actively troubleshooting and communicating in dedicated incident channels.',
      },
      {
        question: 'How do your support engineers get up to speed on our custom codebase?',
        answer:
          'We perform a structured 2-week onboarding transition period where our senior architects map all dependencies, document operational runbooks, and shadow your team before going live.',
      },
      {
        question: 'Do you only fix bugs, or do you also build feature enhancements?',
        answer:
          'Our support plans include dedicated development hours each month that can be flexibly allocated to minor feature additions, UI enhancements, or dependency modernization.',
      },
      {
        question: 'How do you handle security vulnerability updates?',
        answer:
          'We continuously run automated dependency vulnerability scans (CVE tracking) and deploy critical security patches within 24 hours of release following strict staging validation.',
      },
    ],
    ctaHeadline: 'Ready to Protect Your Infrastructure with Guaranteed 24/7 SLA Support?',
    ctaDescription:
      'Connect with our On-Call Operations Leadership. We audit your infrastructure runbooks, establish incident escalation matrices, and onboard your system in under two weeks.',
    ctaButtonText: 'Request 24/7 SLA Agreement',
  },
};

// Merge all additional Fintech, Healthcare, and AI services
import { ADDITIONAL_SERVICES_DATA } from './additionalServices';
Object.assign(SERVICES_DATA, ADDITIONAL_SERVICES_DATA);
