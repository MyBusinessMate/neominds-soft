import {
  ServiceTargetAudience,
  ServiceMainProblem,
  ServiceTimeline,
  ServiceWhyChoose,
} from '../types/service';

export interface ServiceEnrichmentItem {
  title?: string;
  shortDescription?: string;
  heroHeadline?: string;
  heroHeadlineHighlight?: string;
  heroDescription?: string;
  heroImage?: string;
  heroImageCaption?: string;
  targetAudience?: ServiceTargetAudience;
  mainProblemSolved?: ServiceMainProblem;
  timeline?: ServiceTimeline;
  whyChooseThisService?: ServiceWhyChoose;
  ctaHeadline?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

export const ALL_SERVICES_ENRICHMENT: Record<string, ServiceEnrichmentItem> = {
  // =========================================================================
  // CORE TECHNOLOGY (11 SERVICES)
  // =========================================================================
  'software-development': {
    title: 'Custom Software Development',
    shortDescription:
      'We build production backends and distributed systems engineered to handle high concurrency without database deadlocks or sudden outages. Clean code, direct Git access, and 100% intellectual property ownership from day one.',
    heroHeadline: 'Custom Enterprise',
    heroHeadlineHighlight: 'Software Development',
    heroDescription:
      'We architect and ship production-hardened software systems engineered to withstand extreme concurrency, eliminate architectural bottlenecks, and scale with your business. Clean architecture, zero tech-debt shortcuts, and 100% intellectual property transfer.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Distributed Software Production Architecture',
    targetAudience: {
      heading: 'Who We Built Custom Software Development For',
      description:
        'Engineered for technology leaders who cannot afford database lockups, slow release cycles, or mounting maintenance overhead.',
      profiles: [
        {
          role: 'CTOs & Engineering VPs',
          situation:
            'Managing a legacy monolith where single feature releases take weeks and small bugs trigger cascade production outages.',
        },
        {
          role: 'Product Directors & Scale-Up Founders',
          situation:
            'Need to build and launch an enterprise-tier platform with proven SOC 2 compliance, sub-20ms API latency, and clear documentation.',
        },
        {
          role: 'Enterprise IT Leaders',
          situation:
            'Modernizing mission-critical internal workflows, ERP extensions, and cross-system pipelines without disrupting daily operations.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Off-the-shelf software and rushed MVPs buckle under real traffic spikes. Database deadlocks freeze customer checkouts, background jobs fail silently, and developers spend 70% of their week fighting production fires.',
      solution:
        'We build decoupled backends using domain-driven design, event streaming (Kafka/RabbitMQ), and stateless containerized services in Go, TypeScript, and Python. Every service has clear boundaries, automated integration tests, and structured logging.',
      result:
        'Zero database deadlocks, sub-15ms P99 API latency, and systems that scale automatically under load without manual intervention.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week agile release cycles with live staging demos and direct Slack collaboration.',
      phases: [
        {
          phase: 'Phase 1: Architecture & Technical Discovery',
          duration: 'Weeks 1–2',
          details: 'Domain boundary mapping, schema design, infrastructure blueprints, and security risk assessment.',
        },
        {
          phase: 'Phase 2: Core Engine & API Sprints',
          duration: 'Weeks 3–8',
          details: 'Iterative sprint delivery of backend APIs, application logic, data pipelines, and third-party integrations.',
        },
        {
          phase: 'Phase 3: Load, Chaos & Security Hardening',
          duration: 'Weeks 9–11',
          details: 'Concurrency stress testing, automated penetration scans, memory optimization, and end-to-end regression runs.',
        },
        {
          phase: 'Phase 4: Zero-Downtime Cutover & Hypercare',
          duration: 'Weeks 12–14',
          details: 'Blue/green production rollout, live telemetry instrumentation, runbook handoff, and 24/7 post-launch support.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Engineering Leaders Pick Neominds for Software Development',
      reasons: [
        {
          point: 'Senior Engineers Only, Zero Junior Bench',
          detail: 'You work directly with principal architects and senior developers who have built and operated systems at scale. No bait-and-switch staffing.',
        },
        {
          point: '100% Direct Code & IP Handover',
          detail: 'Every repository, database migration script, and deployment workflow belongs entirely to you. No proprietary licensing, no hostage code.',
        },
        {
          point: 'Built for Real-World Failure',
          detail: 'We build for failure resilience: automated retries, circuit breakers, structured logging, and CI/CD pipelines that let you deploy on Friday afternoons without dread.',
        },
        {
          point: 'Clear Engineering Cadence',
          detail: 'Direct Slack/Teams access to the engineers building your product. Weekly sprint demos on staging and transparent Git pull requests.',
        },
      ],
    },
    ctaHeadline: 'Ready to Build Software That Doesn’t Break Under Scale?',
    ctaDescription:
      'Speak directly with a Principal Software Architect. We will review your architecture, identify scaling bottlenecks, and deliver an actionable technical roadmap within 24 hours.',
    ctaButtonText: 'Schedule Technical Discovery',
  },

  'ai-development': {
    title: 'Enterprise AI Development',
    shortDescription:
      'We build production machine learning pipelines and custom AI models grounded in your proprietary data. No hallucinations, no API bill shock, and full data privacy.',
    heroHeadline: 'Production-Hardened',
    heroHeadlineHighlight: 'Enterprise AI Development',
    heroDescription:
      'From private LLM fine-tuning and enterprise RAG pipelines to real-time predictive analytics. We take machine learning from experimental notebooks to high-availability production clusters with zero hallucinations.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Full-Stack Model Training & Inference Pipeline',
    targetAudience: {
      heading: 'Who We Built Enterprise AI Development For',
      description:
        'Built for organizations that need real, measurable intelligence inside their software without compromising security or data sovereignty.',
      profiles: [
        {
          role: 'Heads of AI & Chief Data Officers',
          situation:
            'Deploying private LLMs or domain-tuned models on internal infrastructure without sending confidential company data to third-party APIs.',
        },
        {
          role: 'Product Leaders & SaaS Founders',
          situation:
            'Integrating semantic search, automated classification, or real-time predictive features directly into customer-facing applications.',
        },
        {
          role: 'Operations & Compliance Directors',
          situation:
            'Drowning in unstructured documents, invoices, or customer tickets that need accurate, automated processing with verifiable audit trails.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Generic LLM APIs hallucinate facts, leak proprietary data, and become painfully expensive at volume. Off-the-shelf AI demos fail when tested on messy, real-world enterprise documents.',
      solution:
        'We build end-to-end RAG pipelines with vector databases (pgvector, Qdrant), fine-tune open-weight models (Llama, Mistral) on your curated data, and implement deterministic guardrails.',
      result:
        '98.5% context factuality, sub-100ms inference response times, and 60% lower inference costs compared to public cloud API calls.',
    },
    timeline: {
      totalDuration: '8 to 12 Weeks Typical Delivery',
      sprintCadence: 'Two-week milestone sprints with real evaluation benchmarks and sandbox access.',
      phases: [
        {
          phase: 'Phase 1: Data Audit & Evaluation Benchmarks',
          duration: 'Weeks 1–2',
          details: 'Data ingestion assessment, synthetic test dataset creation, and automated Ragas factuality benchmarking.',
        },
        {
          phase: 'Phase 2: RAG Pipeline & Model Adaptation',
          duration: 'Weeks 3–6',
          details: 'Vector database indexing, embedding pipeline optimization, and LoRA/PEFT parameter-efficient fine-tuning.',
        },
        {
          phase: 'Phase 3: Guardrail & Latency Optimization',
          duration: 'Weeks 7–9',
          details: 'NeMo safety guardrails, PII masking, vLLM inference engine acceleration, and token caching.',
        },
        {
          phase: 'Phase 4: Production Deployment & Observability',
          duration: 'Weeks 10–12',
          details: 'Deployment to private cloud clusters, real-time drift telemetry, and model governance dashboards.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Data & Engineering Teams Choose Neominds for AI',
      reasons: [
        {
          point: 'Zero Hallucinations Guarantee',
          detail: 'Our strict context grounding and citation engines ensure models only respond with verifiable facts from your internal documentation.',
        },
        {
          point: '100% Private Cloud & Data Sovereignty',
          detail: 'Your data never leaves your cloud perimeter. No training on your data by third parties and full compliance with GDPR and HIPAA.',
        },
        {
          point: 'Cost-Optimized Inference',
          detail: 'We use quantized local models and smart semantic caching to reduce recurring token expenses by up to 60%.',
        },
        {
          point: 'Production Engineering, Not Just Research',
          detail: 'We build real APIs, load-balanced GPU clusters, and monitoring tools that software engineers can actually integrate and maintain.',
        },
      ],
    },
    ctaHeadline: 'Ready to Deploy Enterprise AI That You Actually Control?',
    ctaDescription:
      'Schedule an architecture consultation with a Principal AI Engineer. We will analyze your use case, assess model feasibility, and provide a clear technical roadmap.',
    ctaButtonText: 'Schedule AI Architecture Session',
  },

  'mobile-app-development': {
    title: 'Mobile App Development',
    shortDescription:
      'We build native and cross-platform iOS and Android apps that launch fast, run at 60fps, and work smoothly offline.',
    heroHeadline: 'High-Performance',
    heroHeadlineHighlight: 'Mobile App Development',
    heroDescription:
      'From responsive cross-platform Flutter and React Native apps to specialized native Swift and Kotlin applications. Engineered for sub-100ms cold starts, offline-first reliability, and 5-star app store reviews.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Native Mobile Engineering & Device Telemetry',
    targetAudience: {
      heading: 'Who We Built Mobile App Development For',
      description: 'Designed for companies that need an intuitive mobile product that customers love using daily.',
      profiles: [
        {
          role: 'Product Founders & Growth Leads',
          situation:
            'Launching a mobile-first product needing a polished, responsive experience on both iOS and Android without paying for two separate engineering teams.',
        },
        {
          role: 'CTOs & Engineering VPs',
          situation:
            'Replacing an outdated hybrid web-wrapper that crashes frequently, runs slowly, and receives poor reviews from frustrated users.',
        },
        {
          role: 'Field Operations & Logistics Teams',
          situation:
            'Equipping drivers, technicians, or warehouse staff with an offline-first mobile app that records data reliably without cell reception.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Slow web-wrapper apps burn phone battery, stutter during navigation, and drop customer data whenever the internet flickers in an elevator or parking garage.',
      solution:
        'We build offline-first mobile applications with local SQLite and WatermelonDB storage, optimistic state updates, background synchronization queues, and native sensor integration.',
      result: '60fps rendering, sub-100ms cold launches, and 99.9% crash-free sessions across hundreds of device models.',
    },
    timeline: {
      totalDuration: '10 to 16 Weeks Typical Delivery',
      sprintCadence: 'Bi-weekly builds delivered directly to your phone via TestFlight and Google Play Internal Testing.',
      phases: [
        {
          phase: 'Phase 1: Interactive Prototype & Design Tokens',
          duration: 'Weeks 1–3',
          details: 'High-fidelity Figma prototypes, tactile micro-interactions, accessibility checks, and mobile design token setup.',
        },
        {
          phase: 'Phase 2: Offline-First Architecture & Core UI',
          duration: 'Weeks 4–9',
          details: 'Local database modeling, secure biometric authentication, state management, and primary screen development.',
        },
        {
          phase: 'Phase 3: Sensor Bridges & API Synchronization',
          duration: 'Weeks 10–13',
          details: 'Camera, push notifications, Bluetooth/BLE bridges, and conflict-free background data synchronization.',
        },
        {
          phase: 'Phase 4: Store Submission & Release Automation',
          duration: 'Weeks 14–16',
          details: 'Automated Fastlane pipelines, store compliance review, privacy manifests, and global launch.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Product Teams Choose Neominds for Mobile Development',
      reasons: [
        {
          point: 'True 60fps Native Performance',
          detail: 'No clunky web views. We optimize memory allocation, image caching, and thread management for silky smooth scrolling.',
        },
        {
          point: 'Offline-First by Design',
          detail: 'Users can complete tasks, fill forms, and save data without any active connection. Everything syncs cleanly when back online.',
        },
        {
          point: 'Guaranteed App Store Approval',
          detail: 'We handle App Store and Google Play guidelines, privacy manifests, and review submissions with a 100% first-pass track record.',
        },
        {
          point: 'Automated CI/CD via Fastlane',
          detail: 'Every Git merge triggers automated tests and compiles a fresh beta build to TestFlight in minutes.',
        },
      ],
    },
    ctaHeadline: 'Ready to Build a 5-Star Mobile App?',
    ctaDescription:
      'Connect with a Senior Mobile Architect. We will review your product roadmap, recommend the right framework (Native vs Cross-Platform), and outline an exact sprint schedule.',
    ctaButtonText: 'Talk to a Mobile Architect',
  },

  'web-cms-development': {
    title: 'Headless Web & CMS Development',
    shortDescription:
      'We build ultra-fast, edge-rendered web platforms that load in under a second globally. Non-technical marketing teams can publish content easily without breaking code.',
    heroHeadline: 'Edge-Rendered & Headless',
    heroHeadlineHighlight: 'Web & CMS Development',
    heroDescription:
      'Decoupled web platforms combining modern Next.js and Vite frontends with headless CMS backends like Sanity, Strapi, and Contentful. High performance, zero layout shift, and intuitive editing workflows.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Modern Headless CMS & Edge-Rendered Topology',
    targetAudience: {
      heading: 'Who We Built Web & CMS Development For',
      description: 'Built for growth companies and marketing departments that need a high-converting website without developer bottlenecks.',
      profiles: [
        {
          role: 'Marketing VPs & Growth Directors',
          situation:
            'Tired of waiting on developers for simple landing page updates and frustrated by slow, bloated WordPress sites that hurt conversions.',
        },
        {
          role: 'SEO & Performance Leads',
          situation:
            'Losing organic search rankings because legacy CMS plugins ruin Core Web Vitals and cause noticeable layout shifts on mobile.',
        },
        {
          role: 'Engineering Directors',
          situation:
            'Wanting to separate content management from production code to improve security and prevent marketing updates from breaking deployments.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Monolithic CMS setups (WordPress, Drupal) are slow, vulnerable to plugin exploits, and tightly coupled. When marketers edit pages, layouts break, and database queries crawl under traffic spikes.',
      solution:
        'We build headless web architectures with Next.js and Vite backed by structured content in Sanity or Strapi. Content is statically generated at edge CDNs and cached globally.',
      result:
        '100/100 Google Lighthouse scores, sub-second global page loads, and intuitive visual editing with real-time page previews.',
    },
    timeline: {
      totalDuration: '6 to 10 Weeks Typical Delivery',
      sprintCadence: 'Weekly design and staging reviews with live CMS editing sandbox access.',
      phases: [
        {
          phase: 'Phase 1: Content Schema & UI Design System',
          duration: 'Weeks 1–2',
          details: 'Information architecture, component design system, and structured content modeling in headless schemas.',
        },
        {
          phase: 'Phase 2: Frontend Engineering & Edge Caching',
          duration: 'Weeks 3–6',
          details: 'Next.js application development, responsive layouts, micro-animations, and incremental static revalidation.',
        },
        {
          phase: 'Phase 3: CMS Authoring & SEO Instrumentation',
          duration: 'Weeks 7–8',
          details: 'Role-based editor workflows, preview environments, JSON-LD schema markup, and Core Web Vitals optimization.',
        },
        {
          phase: 'Phase 4: Content Migration & Global Launch',
          duration: 'Weeks 9–10',
          details: 'Automated 301 redirect mapping, zero-downtime DNS cutover, and marketing team training sessions.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Growth & Engineering Teams Choose Neominds for Web Development',
      reasons: [
        {
          point: 'Flawless Core Web Vitals',
          detail: 'We build pages that load instantly and pass Google Core Web Vitals with flying colors, directly boosting your organic SEO rank.',
        },
        {
          point: 'Autonomous Content Publishing',
          detail: 'Your marketing team can create new landing pages using pre-tested design blocks without touching code or writing developer tickets.',
        },
        {
          point: 'Fortified Security',
          detail: 'With no database exposed to the public internet, headless architectures are virtually immune to typical CMS SQL injection and plugin hacks.',
        },
        {
          point: '100% Code Ownership',
          detail: 'All frontend components, CMS schemas, and CI/CD pipelines belong entirely to your company. No recurring agency license fees.',
        },
      ],
    },
    ctaHeadline: 'Ready to Upgrade to a Lightning-Fast Web Platform?',
    ctaDescription:
      'Schedule a discovery session with a Principal Web Architect. We will audit your current site speed, review your content architecture, and propose a modern headless roadmap.',
    ctaButtonText: 'Book Web Architecture Review',
  },

  'ecommerce-development': {
    title: 'E-Commerce Development',
    shortDescription:
      'We build high-converting e-commerce engines and headless stores that withstand Black Friday traffic spikes without cart abandonment or checkout crashes.',
    heroHeadline: 'High-Volume & Resilient',
    heroHeadlineHighlight: 'E-Commerce Engineering',
    heroDescription:
      'From high-throughput custom shopping carts and headless Shopify storefronts to multi-warehouse inventory synchronizations. Engineered for sub-second catalog search, frictionless checkout, and high conversion rates.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'High-Throughput E-Commerce Platform Architecture',
    targetAudience: {
      heading: 'Who We Built E-Commerce Development For',
      description: 'Built for high-volume retail brands and digital merchants where every 100 milliseconds of checkout latency translates directly into lost revenue.',
      profiles: [
        {
          role: 'E-Commerce Directors & CMOs',
          situation:
            'Scaling past $10M+ in GMV and hitting the rigid customization and conversion limits of standard templates.',
        },
        {
          role: 'Omnichannel Retailers',
          situation:
            'Managing multi-location inventory, warehouse management systems, and POS terminals that need real-time, accurate synchronization.',
        },
        {
          role: 'Subscription & DTC Brands',
          situation:
            'Need custom recurring billing logic, bundle configurators, and localized multi-currency pricing across global markets.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Standard e-commerce templates slow down as product catalogs grow. Slow faceted filtering, clunky checkout steps, and server crashes during flash sales drive potential customers away.',
      solution:
        'We engineer headless storefronts powered by Next.js, sub-second search engines (Algolia/Meilisearch), and distributed order processing pipelines that handle peak concurrency gracefully.',
      result:
        'Sub-800ms page transitions, 35% higher checkout completion rates, and zero crashes during high-volume sales events.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week agile release cycles with live staging store demonstrations.',
      phases: [
        {
          phase: 'Phase 1: Catalog Architecture & Checkout UX',
          duration: 'Weeks 1–3',
          details: 'Data schema definition, multi-tier product catalog modeling, and high-conversion frictionless checkout wireframing.',
        },
        {
          phase: 'Phase 2: Headless Storefront & Fast Search',
          duration: 'Weeks 4–8',
          details: 'Next.js frontend development, instant faceted search integration, and cart state synchronization across devices.',
        },
        {
          phase: 'Phase 3: ERP, Payment & Inventory Integrations',
          duration: 'Weeks 9–11',
          details: 'Stripe/Adyen payment gateways, automated tax calculation, ERP connections, and inventory webhook pipelines.',
        },
        {
          phase: 'Phase 4: Load Testing & Zero-Downtime Launch',
          duration: 'Weeks 12–14',
          details: 'Flash-sale concurrency simulation, SEO redirect verification, analytics tracking audit, and production cutover.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Retailers Partner With Neominds for E-Commerce',
      reasons: [
        {
          point: 'Built for High-Volume Concurrency',
          detail: 'Our architectures are stress-tested against simulated traffic surges so your store stays lightning fast when your promotions go viral.',
        },
        {
          point: 'Frictionless Custom Checkout',
          detail: 'We streamline cart steps, integrate Apple Pay and Google Pay, and eliminate unnecessary form fields to maximize checkout conversion.',
        },
        {
          point: 'Accurate Multi-Warehouse Inventory',
          detail: 'Real-time inventory locks prevent overselling across retail locations, online channels, and fulfillment centers.',
        },
        {
          point: 'Complete Code Ownership',
          detail: 'You own every line of code, template, and API connector. No recurring percentage fees on your top-line sales volume.',
        },
      ],
    },
    ctaHeadline: 'Ready to Scale Your E-Commerce Revenue?',
    ctaDescription:
      'Schedule a consultation with a Senior E-Commerce Architect. We will review your catalog architecture, identify checkout friction, and provide a clear technical roadmap.',
    ctaButtonText: 'Schedule E-Commerce Review',
  },

  'devops': {
    title: 'Cloud & DevOps Engineering',
    shortDescription:
      'We automate cloud infrastructure, build zero-downtime CI/CD pipelines, and cut cloud waste. Deploy code with confidence and sleep peacefully through the night.',
    heroHeadline: 'Cloud-Native & Automated',
    heroHeadlineHighlight: 'DevOps Engineering',
    heroDescription:
      'From multi-region Kubernetes clusters and Terraform infrastructure as code to automated GitOps deployment pipelines. Engineered for 99.99% availability, least-privilege security, and reduced cloud spend.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Multi-Cloud Automated Infrastructure & Observability',
    targetAudience: {
      heading: 'Who We Built Cloud & DevOps Engineering For',
      description: 'Built for engineering teams that want to ship software continuously without deployment anxiety or mysterious infrastructure failures.',
      profiles: [
        {
          role: 'CTOs & Engineering VPs',
          situation:
            'Tired of manual, error-prone deployment procedures, configuration drift between environments, and ballooning monthly cloud bills.',
        },
        {
          role: 'Growing Engineering Teams',
          situation:
            'Transitioning from raw virtual machines or Heroku to managed Kubernetes and automated Terraform infrastructure.',
        },
        {
          role: 'Security & Compliance Officers',
          situation:
            'Preparing for SOC 2 Type II or ISO 27001 audits and needing automated audit logs, encrypted secrets, and strict IAM governance.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Manual cloud setups drift over time, production secrets get checked into code, and deployments require stressful midnight maintenance windows that keep engineers up all night.',
      solution:
        'We codify your entire cloud environment using Terraform and Helm, set up automated CI/CD pipelines with canary releases, and implement comprehensive Datadog/Prometheus observability.',
      result:
        'Zero-downtime blue/green deployments, automated failover in under 30 seconds, and an average 30% reduction in monthly cloud infrastructure spend.',
    },
    timeline: {
      totalDuration: '4 to 8 Weeks Typical Delivery',
      sprintCadence: 'Weekly infrastructure deliverables with automated Terraform code reviews.',
      phases: [
        {
          phase: 'Phase 1: Cloud Architecture & Cost Audit',
          duration: 'Week 1',
          details: 'Infrastructure cost analysis, security boundary audit, single-point-of-failure assessment, and roadmap definition.',
        },
        {
          phase: 'Phase 2: Terraform IaC & Containerization',
          duration: 'Weeks 2–4',
          details: 'Writing modular Terraform scripts, building production Dockerfiles, and provisioning managed Kubernetes (EKS/GKE).',
        },
        {
          phase: 'Phase 3: CI/CD Pipelines & Secret Management',
          duration: 'Weeks 5–6',
          details: 'GitHub Actions/GitLab CI pipelines, Vault/KMS secrets integration, automated SAST vulnerability scans, and staging environments.',
        },
        {
          phase: 'Phase 4: Observability, Runbooks & Handover',
          duration: 'Weeks 7–8',
          details: 'Prometheus, Grafana, and OpenTelemetry instrumentation, incident alerting, runbook documentation, and team training.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Engineering Teams Trust Neominds for DevOps',
      reasons: [
        {
          point: 'Zero-Downtime Deployments',
          detail: 'We configure blue/green and canary release pipelines that let your developers ship code during regular business hours without downtime.',
        },
        {
          point: '100% Infrastructure as Code',
          detail: 'No manual clicking in cloud consoles. Every server, network route, and database is defined in clean, version-controlled Terraform code.',
        },
        {
          point: 'Measurable Cloud Cost Savings',
          detail: 'We right-size instances, configure automated autoscaling, and eliminate unused resources, routinely saving clients 25% to 40% on cloud bills.',
        },
        {
          point: 'Audit-Ready Security',
          detail: 'Infrastructure configurations adhere to CIS benchmarks and SOC 2 requirements with least-privilege IAM and automated encryption at rest.',
        },
      ],
    },
    ctaHeadline: 'Ready to Modernize Your Cloud Infrastructure?',
    ctaDescription:
      'Schedule a technical infrastructure review with a Principal DevOps Architect. We will identify cloud bottlenecks, evaluate security posture, and deliver an actionable modernization plan.',
    ctaButtonText: 'Schedule DevOps Audit',
  },

  'ai-agents': {
    title: 'Autonomous AI Agents',
    shortDescription:
      'We build autonomous software agents that execute complex business workflows with tool execution, verification loops, and human-in-the-loop oversight.',
    heroHeadline: 'Autonomous & Verifiable',
    heroHeadlineHighlight: 'AI Agent Systems',
    heroDescription:
      'From research and document synthesis agents to multi-step workflow automations. Built with LangGraph, AutoGen, and strict tool schemas to perform real actions reliably without human babysitting.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Multi-Agent Autonomous Orchestration & Tool Execution',
    targetAudience: {
      heading: 'Who We Built Autonomous AI Agents For',
      description: 'Built for forward-thinking organizations that want AI to take action and complete complex operational workflows, not just answer questions in a chat box.',
      profiles: [
        {
          role: 'Operations & Process Directors',
          situation:
            'Looking to automate high-friction multi-step workflows like vendor vetting, claims assessment, or complex technical onboarding.',
        },
        {
          role: 'Product Directors & Software Founders',
          situation:
            'Building AI agents into SaaS products that query databases, update external systems, and execute commands safely on behalf of users.',
        },
        {
          role: 'Customer Support Leaders',
          situation:
            'Need autonomous agents that can look up customer accounts, verify identities, issue adjustments, and escalate edge cases cleanly.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Basic LLMs cannot execute real-world tasks reliably. They hallucinate function arguments, enter infinite execution loops, and execute unauthorized database actions without safety guardrails.',
      solution:
        'We build stateful agent graphs with LangGraph and AutoGen, featuring strict JSON input/output schemas, idempotency keys, verification loops, and human-in-the-loop approval gates.',
      result:
        '85% reduction in manual case resolution time with deterministic audit logs for every decision and action taken by the agent.',
    },
    timeline: {
      totalDuration: '6 to 12 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with sandbox testing environments for every agent skill.',
      phases: [
        {
          phase: 'Phase 1: Agent Persona & Workflow State Mapping',
          duration: 'Weeks 1–2',
          details: 'Defining agent goals, state machine transitions, tool boundaries, and human-in-the-loop approval criteria.',
        },
        {
          phase: 'Phase 2: Tool Execution & API Integration',
          duration: 'Weeks 3–6',
          details: 'Building secure tool execution bridges to CRMs, databases, and third-party APIs with schema validation and rate limiting.',
        },
        {
          phase: 'Phase 3: Verification Loops & Safety Guardrails',
          duration: 'Weeks 7–9',
          details: 'Adversarial testing, loop prevention mechanisms, PII redaction, and deterministic outcome verification.',
        },
        {
          phase: 'Phase 4: Production Deployment & Telemetry',
          duration: 'Weeks 10–12',
          details: 'Deploying agents with real-time trace telemetry (LangSmith), cost tracking, and incident escalation protocols.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Companies Choose Neominds for Autonomous AI Agents',
      reasons: [
        {
          point: 'Deterministic Safety Guardrails',
          detail: 'Our agents operate within strict, verifiable boundaries. Sensitive actions require explicit human sign-off before execution.',
        },
        {
          point: 'Zero Infinite Loops',
          detail: 'Built-in recursion limits, state checkpoints, and backtracking ensure agents never get trapped in unresolvable thought loops.',
        },
        {
          point: 'Complete Decision Audit Trails',
          detail: 'Every reasoning step, tool call, and database modification is logged immutably for compliance and quality control.',
        },
        {
          point: '100% Code & Workflow Ownership',
          detail: 'You own all agent logic, prompt chains, and integration code. No vendor lock-in or proprietary per-run markups.',
        },
      ],
    },
    ctaHeadline: 'Ready to Put Autonomous AI Agents to Work?',
    ctaDescription:
      'Schedule a technical session with a Principal AI Agent Architect. We will evaluate your workflow, outline agent architecture, and demonstrate a live tool-execution proof of concept.',
    ctaButtonText: 'Schedule Agent Consultation',
  },

  'ai-automations': {
    title: 'AI Workflow Automations',
    shortDescription:
      'We replace repetitive manual data entry, approvals, and reporting with intelligent background workflows that work accurately 24/7.',
    heroHeadline: 'Intelligent & Reliable',
    heroHeadlineHighlight: 'AI Workflow Automations',
    heroDescription:
      'From automated document parsing and invoice reconciliation to multi-system data synchronization. We replace brittle manual data entry with semantic, API-first automation pipelines that never miss a detail.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Enterprise Semantic Automation & Document Pipeline',
    targetAudience: {
      heading: 'Who We Built AI Workflow Automations For',
      description: 'Built for operations-heavy companies where talented employees are stuck doing repetitive administrative copy-paste work.',
      profiles: [
        {
          role: 'Operations Directors & COOs',
          situation:
            'Teams wasting hundreds of employee hours every week manually transcribing data between email attachments, CRMs, ERPs, and spreadsheets.',
        },
        {
          role: 'Finance & Accounting Controllers',
          situation:
            'Drowning in vendor invoices, receipt matching, and billing reconciliations that take days to complete every month-end.',
        },
        {
          role: 'Compliance & Legal Managers',
          situation:
            'Needing automated contract review, KYC document extraction, and policy compliance verification that flags exceptions instantly.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Traditional robotic process automation (RPA) breaks the second a website changes button positions or a PDF shifts layout by 5 millimeters. Employees waste countless hours fixing broken bots.',
      solution:
        'We build semantic, LLM-powered document extractors and API-first event pipelines that understand document context regardless of format variations, paired with automatic business rule validation.',
      result:
        '80% reduction in manual processing time, 99.8% field extraction accuracy, and zero downtime from document layout changes.',
    },
    timeline: {
      totalDuration: '4 to 10 Weeks Typical Delivery',
      sprintCadence: 'Weekly automation deliveries with real-world validation data.',
      phases: [
        {
          phase: 'Phase 1: Process Mapping & Document Sample Audit',
          duration: 'Weeks 1–2',
          details: 'Mapping current manual steps, gathering sample document datasets, and defining extraction accuracy benchmarks.',
        },
        {
          phase: 'Phase 2: Semantic Pipeline & API Connectors',
          duration: 'Weeks 3–5',
          details: 'Developing OCR and LLM extraction logic, setting up webhook listeners, and integrating target ERP/CRM endpoints.',
        },
        {
          phase: 'Phase 3: Validation Rules & Exception Handling',
          duration: 'Weeks 6–8',
          details: 'Building business rule engines, confidence scoring thresholds, and automated human-review routing for anomalies.',
        },
        {
          phase: 'Phase 4: Production Rollout & Error Telemetry',
          duration: 'Weeks 9–10',
          details: 'Deploying automation queues, setting up error alerting in Slack, and providing comprehensive documentation.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Operations Leaders Choose Neominds for AI Automations',
      reasons: [
        {
          point: 'Layout-Independent Parsing',
          detail: 'Our semantic extractors understand meaning, not just pixel coordinates. Whether an invoice is a PDF, scan, or email body, it extracts data accurately.',
        },
        {
          point: 'Automated Exception Handling',
          detail: 'When data is ambiguous, the system routes it to a human reviewer with highlighted discrepancies, ensuring zero bad data enters your systems.',
        },
        {
          point: 'API-First Architecture',
          detail: 'We integrate directly via hardened APIs (Kafka, REST, webhooks) rather than fragile screen scraping, guaranteeing reliable operation.',
        },
        {
          point: 'Zero Per-Transaction Penalties',
          detail: 'You own the automation code and hosting. No monthly per-document licensing fees from legacy RPA vendors.',
        },
      ],
    },
    ctaHeadline: 'Ready to Eliminate Manual Copy-Paste Work?',
    ctaDescription:
      'Schedule a process discovery call with an Automation Engineer. We will review your current manual workflow and deliver a concrete automation proposal within 48 hours.',
    ctaButtonText: 'Schedule Automation Discovery',
  },

  'chatbot-videobot': {
    title: 'Chatbots & Interactive Video Bots',
    shortDescription:
      'We build intelligent conversational AI bots and video avatars that understand context, resolve customer inquiries accurately, and hand off smoothly to human reps.',
    heroHeadline: 'Context-Aware & Responsive',
    heroHeadlineHighlight: 'Chatbots & Video Bots',
    heroDescription:
      'From high-accuracy customer service chatbots to sub-second interactive video avatars. Engineered with retrieval-augmented generation, strict guardrails, and deterministic human escalation workflows.',
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Real-Time Conversational AI & WebRTC Video Pipeline',
    targetAudience: {
      heading: 'Who We Built Chatbots & Video Bots For',
      description: 'Designed for brands that want to provide instant, helpful customer resolution 24/7 without burning out support staff.',
      profiles: [
        {
          role: 'Customer Support VPs & Operations Heads',
          situation:
            'Overwhelmed by high ticket volumes for routine questions (order status, returns, password resets) that pull staff away from complex issues.',
        },
        {
          role: 'Sales & Growth Leaders',
          situation:
            'Wanting an interactive AI concierge that answers product questions, qualifies inbound prospects, and books sales calls on calendars.',
        },
        {
          role: 'HealthTech & EdTech Executives',
          situation:
            'Building lifelike video trainers or patient intake assistants that provide warm, accessible guidance through complex procedures.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Legacy decision-tree chatbots frustrate users with canned responses, while uncontrolled LLMs hallucinate inaccurate information or promise unauthorized discounts.',
      solution:
        'We build hybrid conversational agents with semantic knowledge search, strict system guardrails, real-time CRM lookups, and sub-second WebRTC video streaming.',
      result: '70% first-contact resolution for routine inquiries, zero made-up promises, and a 4.8/5 user satisfaction rating.',
    },
    timeline: {
      totalDuration: '6 to 12 Weeks Typical Delivery',
      sprintCadence: 'Two-week sprints with interactive conversational sandbox testing.',
      phases: [
        {
          phase: 'Phase 1: Knowledge Ingestion & Conversation Flow',
          duration: 'Weeks 1–2',
          details: 'Knowledge base indexing, tone-of-voice definition, intent classification, and conversation flow mapping.',
        },
        {
          phase: 'Phase 2: RAG Pipeline & Live CRM Integration',
          duration: 'Weeks 3–6',
          details: 'Vector database search integration, customer profile lookups, appointment scheduling APIs, and order tracking connectors.',
        },
        {
          phase: 'Phase 3: Video Avatar & WebRTC Low-Latency Tuning',
          duration: 'Weeks 7–9',
          details: 'Synthetic voice synthesis, avatar lip-sync rendering, sub-second WebRTC streaming, and smooth human handoff queues.',
        },
        {
          phase: 'Phase 4: Guardrail Testing & Production Launch',
          duration: 'Weeks 10–12',
          details: 'Red-teaming for prompt injection, sentiment analytics setup, Zendesk/Salesforce integration, and live deployment.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Customer Experience Teams Pick Neominds for Conversational AI',
      reasons: [
        {
          point: 'Zero Hallucinations Policy',
          detail: 'Our bots answer only from verified company documentation. If an answer is not in the knowledge base, it cleanly escalates to human staff.',
        },
        {
          point: 'Smooth Human Handoff',
          detail: 'When conversations require a human touch, the full chat transcript and customer context are transferred to your live agents instantly.',
        },
        {
          point: 'Real-Time CRM & Tool Actions',
          detail: 'Our bots can actively look up orders, reschedule appointments, and update account records rather than just offering generic text advice.',
        },
        {
          point: 'Sub-Second Video Latency',
          detail: 'For video avatar deployments, our WebRTC streaming pipeline ensures natural, conversational pacing with under 800ms response latency.',
        },
      ],
    },
    ctaHeadline: 'Ready to Deliver Instant 24/7 Customer Resolution?',
    ctaDescription:
      'Schedule a live demo with a Conversational AI Architect. We will demonstrate our RAG retrieval system, review your support tickets, and build a working bot prototype.',
    ctaButtonText: 'Schedule Live Bot Demo',
  },

  'analytics-dashboard': {
    title: 'Real-Time Analytics & Dashboards',
    shortDescription:
      'We turn fragmented database tables and event streams into crisp, real-time dashboards that give your executive team instant visibility into operational truth.',
    heroHeadline: 'Real-Time & Actionable',
    heroHeadlineHighlight: 'Analytics & Dashboards',
    heroDescription:
      'From high-throughput ClickHouse and Snowflake data warehouses to interactive executive dashboards. Engineered for sub-second query performance over billions of rows, zero read contention on production databases, and automated reporting.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Real-Time Event Sourcing & Executive Analytics Dashboard',
    targetAudience: {
      heading: 'Who We Built Analytics & Dashboards For',
      description: 'Built for leadership teams that need real-time operational numbers instead of waiting days for weekly manual spreadsheets.',
      profiles: [
        {
          role: 'CEOs & Chief Financial Officers',
          situation:
            'Flying blind between monthly financial closes and needing instant daily visibility into revenue, churn, and operational margins.',
        },
        {
          role: 'Product & Growth Leaders',
          situation:
            'Struggling to track user conversion funnels, feature adoption, and retention cohorts without writing complex SQL queries every morning.',
        },
        {
          role: 'Operations & Logistics Heads',
          situation:
            'Monitoring live fleet dispatch, inventory movement, and transaction status across multiple regional facilities.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Operational data is trapped across disparate databases and SaaS tools. Running ad-hoc SQL reports directly on production databases causes table locks and slows down customer-facing apps.',
      solution:
        'We build dedicated analytical data warehouses (ClickHouse, BigQuery, Snowflake) with automated dbt transformations and reactive frontend dashboards that query billions of records in milliseconds.',
      result:
        'Sub-second query response times across hundreds of millions of events, automated executive reports, and zero load on production databases.',
    },
    timeline: {
      totalDuration: '6 to 10 Weeks Typical Delivery',
      sprintCadence: 'Weekly dashboard iterations with live access to staging data models.',
      phases: [
        {
          phase: 'Phase 1: Metric Definitions & Data Source Audit',
          duration: 'Weeks 1–2',
          details: 'Cataloging source databases, defining key performance metrics (KPIs), and modeling unified analytical schemas.',
        },
        {
          phase: 'Phase 2: Data Pipeline & Warehouse Ingestion',
          duration: 'Weeks 3–5',
          details: 'Setting up automated CDC (Change Data Capture) pipelines, dbt transformation models, and ClickHouse/Snowflake staging.',
        },
        {
          phase: 'Phase 3: Interactive Visualizations & Role-Based Access',
          duration: 'Weeks 6–8',
          details: 'Building high-performance React/Vite dashboard interfaces, cohort filtering tools, and granular team permission controls.',
        },
        {
          phase: 'Phase 4: Automated Alerts & Production Cutover',
          duration: 'Weeks 9–10',
          details: 'Configuring Slack/email anomaly alerts, scheduled PDF summaries, and training executive stakeholders.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Executive Teams Choose Neominds for Analytics',
      reasons: [
        {
          point: 'Sub-Second Query Speeds',
          detail: 'We use modern columnar databases (ClickHouse) that execute complex multi-table aggregations across millions of rows in milliseconds.',
        },
        {
          point: 'Zero Production Lock Contention',
          detail: 'Analytics workloads run on dedicated analytical replicas, guaranteeing that reporting queries never slow down customer-facing systems.',
        },
        {
          point: 'Unified Single Source of Truth',
          detail: 'We reconcile conflicting data definitions between sales, product, and finance into standardized, audited metrics everyone trusts.',
        },
        {
          point: 'Direct Code & Pipeline Ownership',
          detail: 'All data transformation scripts (dbt), warehouse configurations, and dashboard code belong 100% to you without vendor lock-in.',
        },
      ],
    },
    ctaHeadline: 'Ready to See Your Operational Data in Real Time?',
    ctaDescription:
      'Schedule a session with a Principal Data Architect. We will review your data sources, identify reporting bottlenecks, and deliver an interactive dashboard prototype plan.',
    ctaButtonText: 'Book Analytics Architecture Session',
  },

  'technical-support': {
    title: '24/7 Technical Support & Maintenance',
    shortDescription:
      'We keep your production applications patched, fast, and online around the clock. SLA-backed incident response, security updates, and continuous improvements.',
    heroHeadline: 'Proactive & SLA-Backed',
    heroHeadlineHighlight: '24/7 Technical Support',
    heroDescription:
      'Round-the-clock infrastructure and application maintenance backed by strict 15-minute critical response SLAs. From zero-downtime security patching and cloud cost monitoring to regular feature enhancements.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: '24/7 Global Observability & Incident Response Command',
    targetAudience: {
      heading: 'Who We Built 24/7 Technical Support For',
      description: 'Built for companies with revenue-critical software that cannot afford unmonitored outages, security vulnerabilities, or engineer burnout.',
      profiles: [
        {
          role: 'CTOs & Engineering Leaders',
          situation:
            'Wanting core product engineers to focus on new roadmap features rather than spending their nights and weekends fixing server alerts and bugs.',
        },
        {
          role: 'Companies With Live Production Systems',
          situation:
            'Need reliable 24/7 monitoring, security patching, and on-call coverage without maintaining an expensive in-house night shift.',
        },
        {
          role: 'Enterprise Software Vendors',
          situation:
            'Requiring contractual 15-minute critical response SLAs and documented ISO 27001-compliant incident reports for enterprise clients.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Production systems break at 2 AM on a holiday weekend. Without proactive monitoring, companies only discover outages when furious customers complain on social media.',
      solution:
        'We provide dedicated on-call engineers, automated synthetic transaction monitoring, automated security patch cycles, and weekly maintenance sprints.',
      result:
        'Guaranteed 15-minute response time on critical incidents, zero unpatched CVE vulnerabilities, and 99.99% sustained system uptime.',
    },
    timeline: {
      totalDuration: 'Ongoing Partnership (30-Day Onboarding)',
      sprintCadence: 'Weekly maintenance sprints with monthly executive reviews and 24/7 real-time incident response.',
      phases: [
        {
          phase: 'Phase 1: Knowledge Transfer & Observability Audit',
          duration: 'Weeks 1–2',
          details: 'Repository audit, infrastructure mapping, alert threshold configuration, and emergency runbook creation.',
        },
        {
          phase: 'Phase 2: Synthetic Probes & Shadow On-Call',
          duration: 'Weeks 3–4',
          details: 'Deploying end-to-end synthetic user transaction tests and running shadow on-call rotations alongside your team.',
        },
        {
          phase: 'Phase 3: Full SLA Handover',
          duration: 'Day 30+',
          details: 'Taking primary 24/7 incident response responsibility with guaranteed 15-minute response SLA.',
        },
        {
          phase: 'Phase 4: Continuous Optimization',
          duration: 'Ongoing',
          details: 'Weekly dependency upgrades, security vulnerability patching, performance tuning, and monthly SLA reporting.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Companies Rely on Neominds for 24/7 Support',
      reasons: [
        {
          point: 'Contractual 15-Minute Response SLA',
          detail: 'When a critical alert triggers, a senior engineer is investigating within 15 minutes, day or night. Guaranteed in writing.',
        },
        {
          point: 'Proactive Prevention, Not Just Firefighting',
          detail: 'We monitor memory leaks, connection pool exhaustion, and SSL expirations to fix bottlenecks before they ever cause an outage.',
        },
        {
          point: 'Direct Communication in Slack/Teams',
          detail: 'No impersonal ticketing black holes. You have a shared channel directly with the engineering squad maintaining your systems.',
        },
        {
          point: 'Continuous Roadmap Progress',
          detail: 'Unused support hours roll into continuous feature improvements, framework upgrades, and technical debt cleanup.',
        },
      ],
    },
    ctaHeadline: 'Ready for Peace of Mind With Your Production Systems?',
    ctaDescription:
      'Schedule a call with our Technical Operations Director. We will review your current uptime requirements, assess on-call coverage, and provide an SLA maintenance proposal.',
    ctaButtonText: 'Request Support Proposal',
  },

  // =========================================================================
  // FINTECH SERVICES (6 SERVICES)
  // =========================================================================
  'digital-banking': {
    title: 'Digital Banking Platforms',
    shortDescription:
      'We build cloud-native digital banking cores, neo-banking mobile suites, and real-time ledger engines. Built for PCI-DSS Level 1 compliance and instant transaction settlement.',
    heroHeadline: 'Resilient & Compliant',
    heroHeadlineHighlight: 'Digital Banking Platforms',
    heroDescription:
      'Cloud-native digital banking infrastructure, neo-banking mobile suites, and real-time core ledger engines. Built for regulatory compliance (PCI-DSS Level 1, Open Banking APIs), microsecond transaction reconciliation, and multi-currency liquidity.',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Cloud-Native Double-Entry Ledger & Clearing Topology',
    targetAudience: {
      heading: 'Who We Built Digital Banking Platforms For',
      description: 'Engineered for financial institutions, neobanks, and fintech founders replacing legacy cores or launching digital banking services.',
      profiles: [
        {
          role: 'FinTech Founders & Neo-Bank CTOs',
          situation:
            'Building a new digital banking experience with virtual cards, instant P2P payments, and multi-currency accounts from scratch.',
        },
        {
          role: 'Community Banks & Credit Unions',
          situation:
            'Trapped on 40-year-old mainframe cores (FIS, Fiserv) that cannot process transactions in real time or connect to modern mobile apps.',
        },
        {
          role: 'Financial Operations Leaders',
          situation:
            'Spending hours every evening manually resolving ledger drift, clearing mismatches, and reconciling multi-currency balances.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Legacy banking cores run on batch-processing paradigms designed decades ago. They cannot settle transactions instantly, charge exorbitant per-transaction licensing fees, and freeze during sudden volume spikes.',
      solution:
        'We architect cloud-native digital banking cores using distributed SQL (CockroachDB, PostgreSQL), event sourcing (CQRS), and Apache Kafka streams. Every debit and credit is an immutable, mathematically balanced event.',
      result:
        'Sub-15ms balance checks, zero balance drift, and sovereign core banking infrastructure that belongs 100% to your financial institution.',
    },
    timeline: {
      totalDuration: '12 to 20 Weeks Typical Delivery',
      sprintCadence: 'Bi-weekly ledger and clearing sandbox milestones with regulatory audit sign-offs.',
      phases: [
        {
          phase: 'Phase 1: Regulatory Architecture & Ledger Modeling',
          duration: 'Weeks 1–3',
          details: 'Double-entry ledger schema modeling, clearing network integration mapping (FedNow, RTP), and PCI-DSS boundary scoping.',
        },
        {
          phase: 'Phase 2: Core Banking Engine & Security Gateways',
          duration: 'Weeks 4–10',
          details: 'Building immutable account state machines, OAuth2/FAPI Open Banking gateways, and biometric authentication suites.',
        },
        {
          phase: 'Phase 3: Card Issuing & Clearing Integrations',
          duration: 'Weeks 11–15',
          details: 'Integrating card issuers (Marqeta, Galileo), automated KYC/AML verification, and automated wire settlement pipelines.',
        },
        {
          phase: 'Phase 4: Stress Testing & Regulatory Certification',
          duration: 'Weeks 16–20',
          details: 'High-concurrency transaction stress testing, SOC 2 / PCI-DSS compliance audits, and production cutover.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Financial Institutions Choose Neominds for Digital Banking',
      reasons: [
        {
          point: 'Zero Mainframe Vendor Lock-In',
          detail: 'You own 100% of your banking core source code and infrastructure. No per-account or per-transaction licensing penalties.',
        },
        {
          point: 'Mathematically Balanced Double-Entry Ledgers',
          detail: 'Built with event sourcing and distributed locks, ensuring that debits and credits always balance with zero end-of-day reconciliation drift.',
        },
        {
          point: 'Direct Instant Clearing Integration',
          detail: 'Native ISO 20022 pipelines for FedNow, RTP, and SEPA Instant, enabling your customers to move money in seconds.',
        },
        {
          point: 'Institutional Security Standards',
          detail: 'Architected to satisfy PCI-DSS Level 1, FAPI, and SOC 2 Type II controls with immutable cryptographic audit logging.',
        },
      ],
    },
    ctaHeadline: 'Ready to Build Sovereign Core Banking Infrastructure?',
    ctaDescription:
      'Schedule a discovery session with a Principal FinTech Architect. We will review your regulatory requirements, evaluate ledger topologies, and provide an actionable technical blueprint.',
    ctaButtonText: 'Schedule Banking Architecture Review',
  },

  'payment-solutions': {
    title: 'Payment Gateway & Processing Solutions',
    shortDescription:
      'We engineer multi-processor payment gateways, automated card routing, and instant payout rails. Minimize transaction fees and maintain PCI-DSS Level 1 compliance.',
    heroHeadline: 'Multi-Processor & Resilient',
    heroHeadlineHighlight: 'Payment Solutions',
    heroDescription:
      'From custom merchant acquiring gateways and smart payment routing to automated chargeback defense and ledger reconciliations. Engineered for sub-100ms authorization latencies and zero checkout drops.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Multi-Acquirer Smart Payment Routing Architecture',
    targetAudience: {
      heading: 'Who We Built Payment Gateway Solutions For',
      description: 'Built for high-volume merchants, global SaaS platforms, and marketplaces processing millions in monthly transaction volume.',
      profiles: [
        {
          role: 'Payments VPs & FinTech CTOs',
          situation:
            'Locked into a single payment processor and suffering from high interchange fees, sudden account holds, or processor downtime.',
        },
        {
          role: 'Global Marketplace Operators',
          situation:
            'Needing complex split payments, automated vendor payouts across 50+ countries, and automated tax withholding.',
        },
        {
          role: 'Subscription SaaS Executives',
          situation:
            'Losing 3% to 6% of recurring revenue each month to false credit card declines, expired tokens, and silent billing failures.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Single-processor dependency leads to high interchange fees, sudden merchant account freezes, and lost sales during processor outages. Failed transactions often get dropped rather than retried smartly.',
      solution:
        'We build multi-acquirer smart routing engines that cascade failed payments across secondary networks, integrate token vaults, and automate smart dunning logic.',
      result:
        '99.999% payment success rate, 12% lower interchange costs, and recovering up to 40% of previously failed subscription renewals.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Bi-weekly integration sprints with isolated cardholder data environment (CDE) testing.',
      phases: [
        {
          phase: 'Phase 1: PCI Scope & Acquirer Integration Map',
          duration: 'Weeks 1–2',
          details: 'Cardholder data environment tokenization scoping, acquiring partner evaluation, and transaction fee modeling.',
        },
        {
          phase: 'Phase 2: Smart Routing Engine & Token Vault',
          duration: 'Weeks 3–7',
          details: 'Building multi-processor routing logic, network tokenization (Visa/Mastercard VTS), and 3D Secure 2.2 authentication.',
        },
        {
          phase: 'Phase 3: Automated Payouts & Reconciliation',
          duration: 'Weeks 8–11',
          details: 'Connecting ACH, RTP, and SEPA payout rails, automated fee deduction, and daily clearing reconciliation pipelines.',
        },
        {
          phase: 'Phase 4: Security Certification & Live Cutover',
          duration: 'Weeks 12–14',
          details: 'PCI-DSS Level 1 QSA audit support, penetration testing, and zero-downtime transaction traffic migration.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why High-Volume Platforms Pick Neominds for Payments',
      reasons: [
        {
          point: 'Smart Multi-Acquirer Cascading',
          detail: 'If your primary processor declines a card or goes down, our engine cascades the request to secondary acquirers in milliseconds without friction.',
        },
        {
          point: 'Network Tokenization Savings',
          detail: 'We integrate directly with card network vaults, updating expired cards automatically and lowering interchange fees by up to 15 basis points.',
        },
        {
          point: 'Minimal PCI Compliance Scope',
          detail: 'Our tokenization proxies ensure raw primary account numbers (PAN) never touch your application servers, keeping PCI audits simple.',
        },
        {
          point: 'Direct Bank Settlement Rails',
          detail: 'Support for real-time payments (FedNow, RTP, Faster Payments) for sub-second vendor and seller payouts.',
        },
      ],
    },
    ctaHeadline: 'Ready to Cut Payment Fees and Boost Checkout Success?',
    ctaDescription:
      'Schedule a discovery session with a Principal Payment Architect. We will analyze your transaction volume, calculate potential interchange savings, and design a multi-processor routing blueprint.',
    ctaButtonText: 'Schedule Payment Consultation',
  },

  'lending-credit-platforms': {
    title: 'Lending & Credit Platforms',
    shortDescription:
      'We build automated loan origination and underwriting systems that evaluate credit risk in seconds using alternative data, open banking APIs, and custom risk models.',
    heroHeadline: 'Automated & Audited',
    heroHeadlineHighlight: 'Lending & Credit Platforms',
    heroDescription:
      'From digital loan origination and automated underwriting engines to loan servicing, collateral tracking, and automated repayment collections. Engineered for strict compliance with Fair Lending regulations.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Automated Underwriting & Credit Decisioning Engine',
    targetAudience: {
      heading: 'Who We Built Lending & Credit Platforms For',
      description: 'Built for commercial lenders, digital credit funds, and BNPL fintechs scaling loan volumes without adding manual underwriting headcount.',
      profiles: [
        {
          role: 'Chief Credit Officers & Lending VPs',
          situation:
            'Manual underwriting takes 3 to 7 days per application, creating massive application drop-off and high operational overhead.',
        },
        {
          role: 'Buy-Now-Pay-Later (BNPL) & Consumer Lenders',
          situation:
            'Need instant point-of-sale credit decisioning with verified identity checks and fraud prevention in under 5 seconds.',
        },
        {
          role: 'Commercial & Equipment Finance Funds',
          situation:
            'Managing complex loan syndication, variable interest schedules, covenant monitoring, and collateral tracking across portfolios.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Traditional loan origination is buried in manual paperwork, slow bureau pulls, and subjective human review. Good borrowers drop out from delays, while fraud slips through.',
      solution:
        'We build automated credit decisioning engines that ingest bank data via Plaid, verify KYC/KYB in real time, score risk using custom algorithms, and disburse funds instantly.',
      result:
        'Underwriting decisions in under 30 seconds, 40% reduction in origination costs, and full FCRA and Fair Lending compliance auditability.',
    },
    timeline: {
      totalDuration: '10 to 16 Weeks Typical Delivery',
      sprintCadence: 'Two-week sprints with sandbox loan origination flows and credit simulation testing.',
      phases: [
        {
          phase: 'Phase 1: Credit Policy Modeling & Compliance Scope',
          duration: 'Weeks 1–3',
          details: 'Codifying underwriting rules, scorecards, KYC/AML workflows, and adverse action notice templates.',
        },
        {
          phase: 'Phase 2: Data Ingestion & Scoring Engine',
          duration: 'Weeks 4–8',
          details: 'Integrating credit bureaus (Experian, TransUnion), Plaid bank statement analysis, and fraud detection algorithms.',
        },
        {
          phase: 'Phase 3: Loan Servicing & Repayment Engine',
          duration: 'Weeks 9–13',
          details: 'Amortization schedules, automated ACH/debit payment collections, late fee rules, and borrower portal development.',
        },
        {
          phase: 'Phase 4: Regulatory Stress Testing & Launch',
          duration: 'Weeks 14–16',
          details: 'Simulated portfolio stress testing, Fair Lending model bias auditing, and production cutover.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Digital Lenders Choose Neominds for Credit Platforms',
      reasons: [
        {
          point: 'Instant Decisioning Under 30 Seconds',
          detail: 'Our automated scoring pipelines parse real-time cash flow and bureau data to approve qualified borrowers in seconds.',
        },
        {
          point: 'Explainable AI & Fair Lending Compliance',
          detail: 'Every decision generates clear adverse action codes and reasoning factors to keep your institution in full compliance with FCRA and ECOA.',
        },
        {
          point: 'Automated Loan Servicing & Collections',
          detail: 'Scheduled ACH pulls, smart retry logic for insufficient funds, and automated investor reporting built directly into the platform.',
        },
        {
          point: '100% Proprietary IP Ownership',
          detail: 'You own the underwriting algorithms, database models, and borrower interfaces with zero ongoing platform licensing fees.',
        },
      ],
    },
    ctaHeadline: 'Ready to Modernize Your Loan Origination Engine?',
    ctaDescription:
      'Schedule a technical session with a Principal Lending Architect. We will review your underwriting scorecard, evaluate automation opportunities, and design a custom lending roadmap.',
    ctaButtonText: 'Schedule Lending Architecture Review',
  },

  'investment-wealth-management': {
    title: 'Investment & Wealth Management Suites',
    shortDescription:
      'We engineer robo-advisory engines, fractional trading portals, and automated portfolio rebalancing suites with real-time market data feeds.',
    heroHeadline: 'Automated & Scalable',
    heroHeadlineHighlight: 'Wealth Management Suites',
    heroDescription:
      'From automated portfolio rebalancing algorithms and tax-loss harvesting engines to fractional share execution and interactive investor portals. Engineered for SEC/FINRA auditability.',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Robo-Advisory Rebalancing & Custody Execution Architecture',
    targetAudience: {
      heading: 'Who We Built Wealth Management Suites For',
      description: 'Built for wealthtech startups, Registered Investment Advisors (RIAs), and digital brokers modernizing portfolio operations.',
      profiles: [
        {
          role: 'WealthTech Founders & Neo-Brokers',
          situation:
            'Building a modern investing mobile app with fractional share trading, automated recurring deposits, and thematic portfolios.',
        },
        {
          role: 'Registered Investment Advisors (RIAs)',
          situation:
            'Managing hundreds of client accounts manually across outdated custodial portals, wasting hours on rebalancing calculations.',
        },
        {
          role: 'Chief Investment Officers & Asset Managers',
          situation:
            'Need automated tax-loss harvesting, risk parity algorithms, and customized client reporting dashboards.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Traditional wealth management platforms are clunky, require manual rebalancing spreadsheets, and fail to provide the real-time mobile experience modern investors expect.',
      solution:
        'We build automated portfolio management engines with algorithmic rebalancing, direct custodial clearing APIs (Apex, DriveWealth, Interactive Brokers), and real-time market data feeds.',
      result:
        'Real-time portfolio valuation, automated tax-loss harvesting that saves clients money, and responsive investor portals across mobile and web.',
    },
    timeline: {
      totalDuration: '12 to 18 Weeks Typical Delivery',
      sprintCadence: 'Two-week development sprints with paper trading sandbox simulations.',
      phases: [
        {
          phase: 'Phase 1: Custody API & Compliance Framework',
          duration: 'Weeks 1–3',
          details: 'Custodial clearing integration mapping (Apex/DriveWealth), FINRA/SEC record-keeping requirements, and order execution models.',
        },
        {
          phase: 'Phase 2: Rebalancing Algorithms & Market Data',
          duration: 'Weeks 4–9',
          details: 'Building tax-loss harvesting logic, drift calculation engines, fractional share order routing, and real-time price feeds.',
        },
        {
          phase: 'Phase 3: Investor & Advisor Portals',
          duration: 'Weeks 10–14',
          details: 'High-performance React/Vite client portals, native mobile apps, automated monthly statement generation, and ACH deposit rails.',
        },
        {
          phase: 'Phase 4: Audit Verification & Production Launch',
          duration: 'Weeks 15–18',
          details: 'Paper trading verification, regulatory data retention validation, security penetration testing, and live launch.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Wealth Managers Choose Neominds for Investment Tech',
      reasons: [
        {
          point: 'Automated Algorithmic Rebalancing',
          detail: 'Our drift-detection engines calculate rebalancing trades across thousands of client portfolios in seconds without human calculation errors.',
        },
        {
          point: 'Direct Custody & Clearing Settlement Integration',
          detail: 'Deep integration with leading custodians for fractional share trading, ACATS account transfers, and instant ACH funding.',
        },
        {
          point: 'Built-in Tax-Loss Harvesting',
          detail: 'Automated algorithms monitor portfolio losses throughout the year to offset capital gains for your clients automatically.',
        },
        {
          point: 'Complete Code Sovereignty',
          detail: 'You own every line of trading logic, risk calculation code, and user interface without vendor rev-share or per-seat fees.',
        },
      ],
    },
    ctaHeadline: 'Ready to Build a Modern Wealth Management Experience?',
    ctaDescription:
      'Schedule an architecture consultation with a Principal WealthTech Architect. We will review custodial clearing integrations, algorithmic models, and investor portal UX.',
    ctaButtonText: 'Schedule WealthTech Consultation',
  },

  'financial-analytics': {
    title: 'Real-Time Financial Analytics & Risk Telemetry',
    shortDescription:
      'We build streaming financial analytics pipelines that process tick-level market data, liquidity metrics, and counterparty exposure in real time.',
    heroHeadline: 'Sub-Millisecond & Streaming',
    heroHeadlineHighlight: 'Financial Analytics',
    heroDescription:
      'From streaming order book aggregations and Monte Carlo value-at-risk (VaR) simulations to real-time treasury liquidity dashboards. Engineered for quantitative trading desks and institutional finance.',
    heroImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Real-Time Financial Telemetry & Streaming Risk Architecture',
    targetAudience: {
      heading: 'Who We Built Financial Analytics For',
      description: 'Built for capital markets desks, hedge funds, and corporate treasury teams that need instant risk calculations.',
      profiles: [
        {
          role: 'Quantitative Fund Managers & Traders',
          situation:
            'Relying on slow overnight batch reports and flying blind to intraday market volatility and counterparty risk spikes.',
        },
        {
          role: 'Chief Risk Officers & Treasury Directors',
          situation:
            'Need real-time liquidity forecasting, collateral utilization metrics, and automated regulatory risk reporting.',
        },
        {
          role: 'FinTech Engineering Directors',
          situation:
            'Building high-throughput financial telemetry pipelines that process millions of price updates per second without lagging.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Traditional financial reporting runs on batch scripts that take hours to calculate risk exposure. By the time leadership sees the report, market conditions have already moved.',
      solution:
        'We build distributed streaming analytics pipelines with Apache Kafka, ClickHouse, and Rust/Go calculation kernels that recompute risk metrics continuously as ticks arrive.',
      result:
        'Microsecond risk recalculations, interactive stress-testing matrices, and automated regulatory reporting with zero human manual data prep.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week sprints with live streaming market data validation benchmarks.',
      phases: [
        {
          phase: 'Phase 1: Mathematical Modeling & Data Feed Audit',
          duration: 'Weeks 1–2',
          details: 'Defining VaR algorithms, liquidity metrics, tick data feed specifications, and calculation latency requirements.',
        },
        {
          phase: 'Phase 2: Streaming Engine & Ingestion Pipelines',
          duration: 'Weeks 3–6',
          details: 'Building low-latency Kafka ingestion, ClickHouse columnar storage schemas, and vectorized calculation kernels in Rust/Go.',
        },
        {
          phase: 'Phase 3: Interactive Dashboards & Scenario Modeling',
          duration: 'Weeks 7–10',
          details: 'High-performance Canvas/WebGL visualization charts, real-time alert triggers, and interactive what-if stress testing.',
        },
        {
          phase: 'Phase 4: Benchmark Validation & Deployment',
          duration: 'Weeks 11–14',
          details: 'Simulated high-volatility flash crash stress testing, mathematical accuracy audit, and production deployment.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Trading Desks & Treasury Teams Choose Neominds for Analytics',
      reasons: [
        {
          point: 'Microsecond Calculation Latency',
          detail: 'Our calculation kernels are optimized in Rust and Go with zero-allocation data paths, updating portfolio risk in microseconds.',
        },
        {
          point: 'Real-Time Scenario & Stress Testing',
          detail: 'Traders can run interactive what-if scenarios (interest rate hikes, liquidity shocks) against live portfolio holdings in real time.',
        },
        {
          point: 'Zero Database Lockup',
          detail: 'High-volume streaming writes never block analytical query execution, maintaining consistent performance under peak trading hours.',
        },
        {
          point: '100% IP & Algorithm Ownership',
          detail: 'All mathematical models, ingestion pipelines, and dashboard code belong entirely to your firm with complete transparency.',
        },
      ],
    },
    ctaHeadline: 'Ready to See Financial Risk in Real Time?',
    ctaDescription:
      'Schedule a consultation with a Principal Quantitative Systems Architect. We will evaluate your data feeds, review mathematical models, and design a high-throughput streaming analytics pipeline.',
    ctaButtonText: 'Schedule Financial Analytics Review',
  },

  'fraud-risk-management': {
    title: 'Real-Time Fraud & AML Risk Management',
    shortDescription:
      'We engineer real-time fraud scoring engines that stop account takeovers, card testing, and identity theft before the transaction settles.',
    heroHeadline: 'Real-Time & Accurate',
    heroHeadlineHighlight: 'Fraud & AML Risk Engines',
    heroDescription:
      'From real-time transaction scoring and behavioral device fingerprinting to automated AML screening and chargeback defense. Engineered for sub-20ms evaluation latencies and low false-decline rates.',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Sub-20ms Transaction Fraud Scoring & AML Decision Topology',
    targetAudience: {
      heading: 'Who We Built Fraud & AML Risk Management For',
      description: 'Built for payment processors, neobanks, and online merchants facing organized fraud attacks and strict regulatory AML requirements.',
      profiles: [
        {
          role: 'Heads of Risk & Fraud Prevention',
          situation:
            'Fighting card testing attacks, account takeover fraud, and synthetic identity rings that slip through static rule-based filters.',
        },
        {
          role: 'FinTech Compliance Officers',
          situation:
            'Struggling with high volumes of false-positive sanctions alerts and spending hours manually drafting Suspicious Activity Reports (SARs).',
        },
        {
          role: 'E-Commerce Security Directors',
          situation:
            'Losing revenue and insulting good customers with overly aggressive fraud filters that decline legitimate orders.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Static if-then fraud rules are easily bypassed by organized fraud rings, while aggressively tuned filters decline legitimate high-value customers, destroying revenue.',
      solution:
        'We build hybrid fraud decisioning engines combining behavioral device fingerprinting, machine learning anomaly detection, velocity checks, and automated AML sanctions screening.',
      result:
        'Sub-20ms fraud evaluation decisions, 65% reduction in false declines, and automated Suspicious Activity Report (SAR) workflows.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with historical transaction replay testing.',
      phases: [
        {
          phase: 'Phase 1: Fraud Pattern Analysis & Policy Modeling',
          duration: 'Weeks 1–2',
          details: 'Historical fraud data audit, chargeback root-cause analysis, risk threshold definition, and AML regulatory rule mapping.',
        },
        {
          phase: 'Phase 2: Scoring Engine & Fingerprint SDK',
          duration: 'Weeks 3–7',
          details: 'Developing real-time scoring microservices, client device fingerprinting modules, and velocity cache integration (Redis).',
        },
        {
          phase: 'Phase 3: Case Queue & Investigation Console',
          duration: 'Weeks 8–11',
          details: 'Building investigator portal, automated graph linkage visualization, and one-click regulatory SAR filing workflows.',
        },
        {
          phase: 'Phase 4: Shadow Mode Testing & Cutover',
          duration: 'Weeks 12–14',
          details: 'Running engine in passive shadow mode against live traffic, fine-tuning false-positive ratios, and activating inline blocking.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Risk Teams Partner With Neominds for Fraud Prevention',
      reasons: [
        {
          point: 'Sub-20ms Inline Evaluation',
          detail: 'Our engines score transactions and return allow/challenge/block decisions in under 20 milliseconds, adding zero perceptible latency to checkout.',
        },
        {
          point: 'Dramatic Reduction in False Declines',
          detail: 'Machine learning anomaly models evaluate multi-dimensional customer patterns, ensuring legitimate customers never get turned away.',
        },
        {
          point: 'Automated AML & Sanctions Screening',
          detail: 'Real-time screening against global PEP, OFAC, and sanctions lists with automated fuzzy name matching that filters out common false positives.',
        },
        {
          point: '100% Sovereign Rule Control',
          detail: 'Your risk team has complete control to adjust scoring rules, whitelist customers, and tune thresholds without waiting on third-party vendor tickets.',
        },
      ],
    },
    ctaHeadline: 'Ready to Stop Fraud Without Insulting Good Customers?',
    ctaDescription:
      'Schedule a session with a Principal Risk Engineer. We will analyze your recent chargeback and fraud data, demonstrate our scoring engine, and deliver an actionable fraud defense plan.',
    ctaButtonText: 'Schedule Fraud Defense Review',
  },

  // =========================================================================
  // HEALTHCARE SERVICES (6 SERVICES)
  // =========================================================================
  'healthcare-management-software': {
    title: 'Healthcare Management Software',
    shortDescription:
      'We build HIPAA-compliant EHR/EMR platforms, patient scheduling engines, and medical billing suites that simplify clinical workflows and prevent provider burnout.',
    heroHeadline: 'HIPAA-Compliant & Interoperable',
    heroHeadlineHighlight: 'Healthcare Management Systems',
    heroDescription:
      'From modular EHR/EMR platforms and patient scheduling engines to revenue cycle management (RCM) and HL7/FHIR interoperability bridges. Engineered for strict clinical compliance and uninterrupted clinical workflows.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'HIPAA-Compliant EHR & FHIR Interoperability Topology',
    targetAudience: {
      heading: 'Who We Built Healthcare Management Software For',
      description: 'Built for hospital networks, specialized outpatient clinics, and digital health operators modernizing clinical operations.',
      profiles: [
        {
          role: 'Chief Medical Information Officers & Clinical Leads',
          situation:
            'Frustrated by slow, bloated legacy EHRs (Epic, Cerner) that force doctors to spend 2 hours on administrative charting for every 1 hour of patient care.',
        },
        {
          role: 'Practice Managers & Healthcare Administrators',
          situation:
            'Struggling with high patient no-show rates, double-booked rooms, and complex insurance eligibility verification bottlenecks.',
        },
        {
          role: 'Digital Health Product Directors',
          situation:
            'Building custom clinical workflows, specialized specialty EHR modules, and telehealth suites that require full HIPAA and FHIR compliance.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Clunky legacy healthcare software creates physician burnout, slows patient intake, and locks patient data into proprietary vendor silos that cannot communicate with other clinical systems.',
      solution:
        'We build modern, modular healthcare management platforms with fast, intuitive clinical charting, automated patient intake, and native HL7/FHIR APIs that connect with external labs and hospitals.',
      result:
        '50% faster clinical charting workflows, full HIPAA/HITECH compliance with zero data leaks, and direct HL7/FHIR interoperability across healthcare providers.',
    },
    timeline: {
      totalDuration: '12 to 20 Weeks Typical Delivery',
      sprintCadence: 'Two-week clinical sprint reviews with provider feedback sessions.',
      phases: [
        {
          phase: 'Phase 1: Clinical Workflow & HIPAA Security Scoping',
          duration: 'Weeks 1–3',
          details: 'HIPAA security boundary definition, Business Associate Agreements (BAA), clinical documentation workflow mapping, and FHIR resource planning.',
        },
        {
          phase: 'Phase 2: Core Patient Registry & Charting UI',
          duration: 'Weeks 4–10',
          details: 'Encrypted patient database schemas, intuitive SOAP note charting, e-prescriptions (SureScripts), and audit-logged role permissions.',
        },
        {
          phase: 'Phase 3: Scheduling, Billing & FHIR Integration',
          duration: 'Weeks 11–16',
          details: 'Automated appointment reminders, ANSI X12 837/835 insurance billing pipelines, and bi-directional HL7/FHIR lab interfaces.',
        },
        {
          phase: 'Phase 4: Compliance Auditing & Production Rollout',
          duration: 'Weeks 17–20',
          details: 'Third-party HIPAA penetration testing, clinical staff training, automated data backup verification, and clinical go-live.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Healthcare Organizations Choose Neominds',
      reasons: [
        {
          point: 'Physician-Friendly Fast Charting',
          detail: 'Our clean, keyboard-friendly interfaces allow doctors to complete clinical notes and prescribe medications in half the time of legacy systems.',
        },
        {
          point: 'Built-in HIPAA & HITECH Compliance',
          detail: 'End-to-end data encryption at rest and in transit, comprehensive audit logging of every record access, and signed BAA agreements.',
        },
        {
          point: 'Native HL7 & FHIR Interoperability',
          detail: 'Effortlessly exchange patient records, lab results, and imaging with hospitals, diagnostic labs, and insurance payers.',
        },
        {
          point: '100% Source Code & Database Ownership',
          detail: 'Your healthcare organization owns all source code, schemas, and patient data repositories with zero recurring vendor lock-in.',
        },
      ],
    },
    ctaHeadline: 'Ready to Modernize Your Healthcare Operations?',
    ctaDescription:
      'Schedule a discovery session with a Principal Healthcare IT Architect. We will review your clinical workflows, evaluate compliance boundaries, and deliver an actionable EHR modernization roadmap.',
    ctaButtonText: 'Schedule Healthcare IT Consultation',
  },

  'telemedicine-platforms': {
    title: 'HIPAA-Compliant Telehealth Platforms',
    shortDescription:
      'We build secure virtual care platforms with encrypted HD video calls, digital waiting rooms, real-time vital sign capture, and automated e-prescriptions.',
    heroHeadline: 'Secure & WebRTC-Powered',
    heroHeadlineHighlight: 'Telehealth Platforms',
    heroDescription:
      'From high-definition multi-party video consultations and digital patient check-in to integrated clinical notes and electronic prescription routing. Engineered for sub-second call setup and zero HIPAA violations.',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Encrypted WebRTC Telehealth & Electronic Prescription Pipeline',
    targetAudience: {
      heading: 'Who We Built Telehealth Platforms For',
      description: 'Designed for healthcare providers, virtual clinic networks, and mental health platforms delivering remote patient care.',
      profiles: [
        {
          role: 'Virtual Care Directors & Telehealth Founders',
          situation:
            'Building a specialized virtual clinic for primary care, dermatology, or mental health that needs a frictionless patient experience.',
        },
        {
          role: 'Health System CIOs',
          situation:
            'Replacing generic video conference tools (Zoom) with an integrated telehealth platform that syncs directly with hospital EHR charts.',
        },
        {
          role: 'Specialty Medicine Clinics',
          situation:
            'Expanding patient access across state lines with automated provider license validation, intake questionnaires, and e-prescribing.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Generic video conferencing tools like Zoom lack EHR chart integration, session logging, and fail strict HIPAA data transit standards. Patients struggle with software downloads, leading to missed appointments.',
      solution:
        'We build browser-based, zero-download WebRTC video platforms with encrypted digital waiting rooms, real-time chat, screen sharing, and direct EHR chart integration.',
      result:
        'Sub-second room connections, zero app downloads required for patients, 99.8% video session completion rate, and full HIPAA compliance.',
    },
    timeline: {
      totalDuration: '10 to 16 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with real clinical device testing.',
      phases: [
        {
          phase: 'Phase 1: Compliance Scoping & Patient Flow UX',
          duration: 'Weeks 1–3',
          details: 'Mapping virtual waiting room logic, patient triage questionnaires, provider state licensing checks, and HIPAA architecture.',
        },
        {
          phase: 'Phase 2: WebRTC Video Core & Real-Time Sync',
          duration: 'Weeks 4–8',
          details: 'Developing end-to-end encrypted WebRTC video streaming, adaptive bitrate scaling, and low-latency audio pipelines.',
        },
        {
          phase: 'Phase 3: Clinical Charting & E-Prescribing',
          duration: 'Weeks 9–12',
          details: 'Integrated clinician consultation notes, SureScripts e-prescribing integration, and automated patient payment collection.',
        },
        {
          phase: 'Phase 4: Device Stress Testing & Live Launch',
          duration: 'Weeks 13–16',
          details: 'Testing across mobile browsers, low-bandwidth connection simulations, HIPAA penetration testing, and production cutover.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Virtual Care Providers Choose Neominds for Telemedicine',
      reasons: [
        {
          point: 'Zero Patient Downloads Required',
          detail: 'Patients join secure consultations directly from their phone or computer browser with a single text message link, eliminating technical friction.',
        },
        {
          point: 'Adaptive Low-Bandwidth Streaming',
          detail: 'Our WebRTC architecture automatically adjusts video quality during connection drops, ensuring consultations continue without freezing.',
        },
        {
          point: 'Direct EHR & E-Prescribing Connections',
          detail: 'Doctors can review medical history, chart notes, and send prescriptions to local pharmacies directly within the consultation screen.',
        },
        {
          point: '100% Platform Ownership',
          detail: 'You own the complete telehealth codebase and infrastructure without paying ongoing per-visit or per-provider license fees.',
        },
      ],
    },
    ctaHeadline: 'Ready to Launch a Production-Grade Virtual Care Platform?',
    ctaDescription:
      'Schedule a consultation with a Principal Telehealth Architect. We will review your clinical requirements, demonstrate a live WebRTC consultation prototype, and provide an exact project plan.',
    ctaButtonText: 'Schedule Telehealth Consultation',
  },

  'patient-engagement': {
    title: 'Patient Engagement & Remote Monitoring',
    shortDescription:
      'We build intuitive patient portals and mobile apps for appointment booking, lab results, secure messaging, and Bluetooth medical device sync.',
    heroHeadline: 'Intuitive & Connected',
    heroHeadlineHighlight: 'Patient Engagement Portals',
    heroDescription:
      'From user-friendly mobile patient portals and automated SMS appointment reminders to cellular and Bluetooth remote patient monitoring (RPM). Engineered for high patient retention and chronic care management.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Remote Patient Monitoring & Secure Health Portal Architecture',
    targetAudience: {
      heading: 'Who We Built Patient Engagement For',
      description: 'Built for health systems, Accountable Care Organizations (ACOs), and chronic care clinics seeking to improve patient adherence.',
      profiles: [
        {
          role: 'Patient Experience Officers & Clinic Leaders',
          situation:
            'Patients skip appointments and abandon treatment plans because existing portals are clunky and feel like outdated enterprise software.',
        },
        {
          role: 'Chronic Care & RPM Operations Leads',
          situation:
            'Needing to collect daily blood pressure, glucose, and weight readings from elderly patients without complicated pairing setups.',
        },
        {
          role: 'ACO Directors & Care Coordinators',
          situation:
            'Tracking patient medication adherence, wellness checkups, and post-discharge recovery to prevent costly hospital readmissions.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Patients rarely log into traditional patient portals because logins are difficult, interfaces are confusing, and notifications are sent via slow paper mail or easily missed emails.',
      solution:
        'We build modern, mobile-first patient apps with passwordless biometric login, two-way SMS messaging, and plug-and-play Bluetooth/cellular medical device connectivity.',
      result:
        '45% reduction in appointment no-shows, 90%+ patient portal adoption, and continuous clinical vital sign streams that alert doctors to early health deterioration.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week agile release cycles with usability testing across diverse patient demographics.',
      phases: [
        {
          phase: 'Phase 1: Patient Journey Mapping & Device Specs',
          duration: 'Weeks 1–2',
          details: 'Mapping patient intake flows, communication preferences, Bluetooth/cellular device protocols, and accessibility requirements.',
        },
        {
          phase: 'Phase 2: Mobile Portal & Biometric Authentication',
          duration: 'Weeks 3–7',
          details: 'Building intuitive mobile interfaces (iOS/Android), FaceID login, appointment self-scheduling, and secure HIPAA messaging.',
        },
        {
          phase: 'Phase 3: Medical Device Sync & Clinical Alerts',
          duration: 'Weeks 8–11',
          details: 'Integrating FDA-cleared blood pressure and glucose monitors, automated anomaly alert thresholds, and EHR data sync.',
        },
        {
          phase: 'Phase 4: Usability Verification & Production Launch',
          duration: 'Weeks 12–14',
          details: 'WCAG 2.1 AA accessibility audit, clinical triage workflow testing, and rollout to patient populations.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Healthcare Providers Choose Neominds for Patient Engagement',
      reasons: [
        {
          point: 'Simple for Patients of All Ages',
          detail: 'Designed with large text, clear contrast, and intuitive navigation so elderly patients can easily check vitals and view test results.',
        },
        {
          point: 'Plug-and-Play Cellular & Bluetooth Devices',
          detail: 'Pre-configured medical devices sync vital signs automatically to the clinic without requiring confusing Wi-Fi setup.',
        },
        {
          point: 'Automated Two-Way SMS Communication',
          detail: 'Patients receive reminders, confirm appointments, and complete check-ins via regular text messages without downloading an app.',
        },
        {
          point: 'Direct EHR Interoperability',
          detail: 'All vital sign trends, messages, and intake questionnaires flow directly into your existing EHR clinical record.',
        },
      ],
    },
    ctaHeadline: 'Ready to Improve Patient Engagement and Adherence?',
    ctaDescription:
      'Schedule a consultation with a Patient Experience & RPM Architect. We will review your patient demographics, evaluate medical device integrations, and design an intuitive engagement portal.',
    ctaButtonText: 'Schedule Patient Engagement Consultation',
  },

  'medical-ai-solutions': {
    title: 'Clinical & Diagnostic AI Solutions',
    shortDescription:
      'We develop clinical decision support tools and medical computer vision pipelines that assist physicians in triage, imaging analysis, and early risk detection.',
    heroHeadline: 'Clinically Grounded & Audited',
    heroHeadlineHighlight: 'Medical AI Solutions',
    heroDescription:
      'From DICOM imaging triage pipelines (CT, MRI, X-ray) and clinical note extraction to early sepsis and risk deterioration warning models. Engineered for rigorous clinical validation and FDA SaMD readiness.',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'DICOM Clinical Imaging & AI Decision Support Architecture',
    targetAudience: {
      heading: 'Who We Built Clinical AI Solutions For',
      description: 'Built for radiology groups, pathology labs, and clinical trial sponsors developing AI-assisted medical software.',
      profiles: [
        {
          role: 'Radiology Group Chairs & Imaging Directors',
          situation:
            'Struggling with severe imaging backlogs where urgent scans sit for hours waiting for radiologist review.',
        },
        {
          role: 'HealthTech Founders Developing SaMD Products',
          situation:
            'Need to take a proven diagnostic algorithm from an academic research model into an FDA-ready, scalable software product.',
        },
        {
          role: 'Hospital Chief Medical Officers',
          situation:
            'Looking for reliable clinical decision support tools that flag deteriorating ICU patients hours before vital signs crash.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Radiology and pathology departments face severe staff shortages. Radiologists must review thousands of complex imaging slices daily, causing cognitive fatigue and diagnostic delays.',
      solution:
        'We build automated DICOM computer vision pipelines that pre-screen and triage scans, highlight suspicious nodules or fractures, and bubble critical cases to the top of the reading worklist.',
      result:
        '40% reduction in urgent case turnaround times, peer-reviewed accuracy benchmarks, and full auditability for FDA Software as a Medical Device (SaMD) pathways.',
    },
    timeline: {
      totalDuration: '12 to 22 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with clinical validation benchmarking.',
      phases: [
        {
          phase: 'Phase 1: Clinical Dataset Curation & FDA Scoping',
          duration: 'Weeks 1–4',
          details: 'DICOM dataset de-identification, clinical ground-truth annotation, risk classification, and FDA 510(k) pathway mapping.',
        },
        {
          phase: 'Phase 2: Model Architecture & Inference Pipeline',
          duration: 'Weeks 5–12',
          details: 'Developing deep learning segmentation/classification models (PyTorch/TensorRT), GPU acceleration, and DICOM PACS integration.',
        },
        {
          phase: 'Phase 3: Clinical Decision Support & Radiologist UI',
          duration: 'Weeks 13–18',
          details: 'Building intuitive viewer overlays, confidence scoring metrics, explainability heatmaps (Grad-CAM), and EHR alerting.',
        },
        {
          phase: 'Phase 4: Clinical Validation & Regulatory Audit',
          duration: 'Weeks 19–22',
          details: 'Multi-reader clinical evaluation studies, sensitivity/specificity benchmarking, and technical documentation file compilation.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Clinical Leaders Choose Neominds for Medical AI',
      reasons: [
        {
          point: 'Clinically Grounded Validation',
          detail: 'Our models are evaluated against rigorous clinical sensitivity and specificity thresholds established by board-certified specialists.',
        },
        {
          point: 'Direct PACS & DICOM Imaging Integration',
          detail: 'Scans are pulled directly from hospital PACS archives, processed on local GPU clusters, and results sent back as DICOM Structured Reports.',
        },
        {
          point: 'Explainable AI with Visual Heatmaps',
          detail: 'We provide visual attention overlays (Grad-CAM) so clinicians can instantly understand why an algorithm flagged a specific tissue region.',
        },
        {
          point: 'Built for FDA SaMD Readiness',
          detail: 'Complete software development lifecycle documentation adhering to ISO 13485 and IEC 62304 medical device software standards.',
        },
      ],
    },
    ctaHeadline: 'Ready to Build Clinically Validated Medical AI?',
    ctaDescription:
      'Schedule a session with a Principal Medical AI Architect. We will review your clinical dataset, evaluate model architectures, and outline an engineering and regulatory roadmap.',
    ctaButtonText: 'Schedule Medical AI Session',
  },

  'healthcare-analytics': {
    title: 'Healthcare & Population Health Analytics',
    shortDescription:
      'We build secure healthcare data lakes and analytics dashboards that track patient outcomes, readmission risks, and payer reimbursement trends.',
    heroHeadline: 'FHIR-Compliant & Predictive',
    heroHeadlineHighlight: 'Healthcare Analytics',
    heroDescription:
      'From unified longitudinal patient record lakes and predictive readmission models to HEDIS quality measure reporting. Engineered for HIPAA compliance, multi-facility data normalization, and clinical ROI.',
    heroImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Longitudinal Patient Data Lake & Predictive Risk Architecture',
    targetAudience: {
      heading: 'Who We Built Healthcare Analytics For',
      description: 'Built for healthcare system CIOs, Accountable Care Organizations (ACOs), and health plans managing population risk.',
      profiles: [
        {
          role: 'Healthcare System CIOs & Chief Quality Officers',
          situation:
            'Patient clinical data is trapped in separate EHR instances, lab databases, and pharmacy claims, preventing unified quality reporting.',
        },
        {
          role: 'ACO Executives & Medical Directors',
          situation:
            'Need to identify rising-risk patient cohorts before they require costly emergency room visits or suffer preventable complications.',
        },
        {
          role: 'Revenue Cycle & Managed Care VPs',
          situation:
            'Losing reimbursement bonuses due to delayed quality measure calculations (HEDIS, MIPS) and high 30-day patient readmission penalties.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Healthcare data is notoriously messy, fragmented across incompatible EHRs, and governed by strict privacy laws. Running manual SQL reports takes weeks and misses critical clinical trends.',
      solution:
        'We build automated FHIR-based data lakes that ingest clinical records, pharmacy claims, and lab results into a unified longitudinal patient model with predictive risk scoring.',
      result:
        '30-day readmission risk prediction with 88% accuracy, automated HEDIS quality reporting, and actionable clinical dashboards for care teams.',
    },
    timeline: {
      totalDuration: '10 to 16 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with validated clinical cohort reviews.',
      phases: [
        {
          phase: 'Phase 1: Data Source Mapping & FHIR Standardization',
          duration: 'Weeks 1–3',
          details: 'Cataloging disparate EHRs, lab feeds, and billing claims, mapping them into standardized FHIR R4 data models.',
        },
        {
          phase: 'Phase 2: HIPAA Data Lake & Ingestion Pipelines',
          duration: 'Weeks 4–8',
          details: 'Building secure, encrypted columnar data warehouses (Snowflake/BigQuery), master patient index (MPI) deduplication, and automated ETL.',
        },
        {
          phase: 'Phase 3: Predictive Models & Cohort Stratification',
          duration: 'Weeks 9–12',
          details: 'Developing readmission risk models, chronic disease progression alerts, and care gap identification algorithms.',
        },
        {
          phase: 'Phase 4: Executive Dashboards & Care Team Views',
          duration: 'Weeks 13–16',
          details: 'Building intuitive React/Vite analytics dashboards, automated regulatory reporting exports, and clinical staff training.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Healthcare Leaders Choose Neominds for Analytics',
      reasons: [
        {
          point: 'Accurate Master Patient Index (MPI)',
          detail: 'Our deterministic and probabilistic matching algorithms merge fragmented records across different clinics into a single accurate patient history.',
        },
        {
          point: 'Predictive Intervention, Not Just Retrospective Data',
          detail: 'We build models that identify patients likely to deteriorate in the next 30 days, giving care coordinators time to intervene proactively.',
        },
        {
          point: 'Automated Regulatory Quality Reporting',
          detail: 'Automated calculation of HEDIS, MIPS, and STARS quality measures eliminates months of stressful manual chart abstraction.',
        },
        {
          point: '100% Data Sovereignty & IP Ownership',
          detail: 'Your healthcare system owns all data models, transformation pipelines, and dashboards without recurring per-patient vendor taxes.',
        },
      ],
    },
    ctaHeadline: 'Ready to Turn Healthcare Data Into Clinical Action?',
    ctaDescription:
      'Schedule a session with a Principal Healthcare Data Architect. We will review your clinical data sources, evaluate analytics infrastructure, and design an actionable population health roadmap.',
    ctaButtonText: 'Schedule Healthcare Analytics Review',
  },

  'healthcare-automation': {
    title: 'Healthcare Clinical & Revenue Automation',
    shortDescription:
      'We automate prior authorizations, medical claims scrubbing, and patient intake, eliminating manual paperwork and slashing insurance denial rates.',
    heroHeadline: 'Intelligent & EDI-Connected',
    heroHeadlineHighlight: 'Healthcare Automation',
    heroDescription:
      'From automated prior authorization processing and electronic insurance eligibility verification to claims scrubbing and clinical document routing. Engineered to eliminate administrative waste.',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'EDI 270/278 Prior Authorization & Claims Automation Pipeline',
    targetAudience: {
      heading: 'Who We Built Healthcare Automation For',
      description: 'Built for medical practice managers, hospital billing departments, and clinical operations leads spending too much time on paperwork.',
      profiles: [
        {
          role: 'Revenue Cycle Directors & Medical Billers',
          situation:
            'High rates of insurance claim denials due to missing information, coding mismatches, or unverified patient coverage.',
        },
        {
          role: 'Clinical Operations Managers',
          situation:
            'Staff spending 15+ hours per week on hold with insurance companies trying to obtain prior authorizations for essential procedures.',
        },
        {
          role: 'Practice Administrators',
          situation:
            'Manual patient registration and insurance card scanning creating front-desk waiting room bottlenecks.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Administrative paperwork costs US healthcare over $300 billion annually. Prior authorizations delay patient treatments by weeks, and manual billing errors lead to millions in lost provider revenue.',
      solution:
        'We build semantic automation pipelines that parse clinical notes, extract procedure codes, submit electronic prior authorizations (EDI 278), and verify insurance eligibility (EDI 270/271) automatically.',
      result:
        '75% faster prior authorization approvals, 30% reduction in initial claim denials, and saving clinical staff hundreds of hours of manual phone calls.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with real insurance clearinghouse testing.',
      phases: [
        {
          phase: 'Phase 1: Workflow Audit & Clearinghouse Connectivity',
          duration: 'Weeks 1–2',
          details: 'Auditing high-volume denial reasons, mapping clearinghouse EDI endpoints (Change Healthcare, Availity), and scoping workflows.',
        },
        {
          phase: 'Phase 2: Eligibility & Prior Authorization Pipelines',
          duration: 'Weeks 3–7',
          details: 'Building automated EDI 270/271 eligibility verification, clinical document extraction for prior authorizations, and submission engines.',
        },
        {
          phase: 'Phase 3: Claims Scrubbing & Denial Management',
          duration: 'Weeks 8–11',
          details: 'Automated pre-bill claims scrubbing against payer rules, automated denial categorization, and one-click appeal generation.',
        },
        {
          phase: 'Phase 4: Live Payer Integration & Production Rollout',
          duration: 'Weeks 12–14',
          details: 'Connecting live payer portals, error monitoring setup, billing staff training, and measuring denial reduction metrics.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Medical Practices Choose Neominds for Automation',
      reasons: [
        {
          point: '75% Faster Prior Authorization Approvals',
          detail: 'Our engines automatically extract necessary clinical chart notes and submit electronic prior authorizations without human phone tag.',
        },
        {
          point: 'Pre-Submission Claims Scrubbing',
          detail: 'Every insurance claim is automatically checked against payer-specific billing rules before submission, preventing costly denials.',
        },
        {
          point: 'Native EDI & Clearinghouse Integration',
          detail: 'Direct bi-directional connections to major clearinghouses (Availity, Change Healthcare) for instant transaction status updates.',
        },
        {
          point: 'Zero Per-Claim Surcharges',
          detail: 'You own the automation infrastructure. No per-claim or percentage-of-collections fees that eat into your medical practice margins.',
        },
      ],
    },
    ctaHeadline: 'Ready to Eliminate Administrative Healthcare Waste?',
    ctaDescription:
      'Schedule a session with a Healthcare Automation Specialist. We will review your denial reports, assess clearinghouse workflows, and provide an actionable automation blueprint.',
    ctaButtonText: 'Schedule Automation Consultation',
  },

  // =========================================================================
  // ENTERPRISE AI (5 SERVICES)
  // =========================================================================
  'ai-product-engineering': {
    title: 'AI Product Engineering',
    shortDescription:
      'We design and build complete software products with artificial intelligence at their core, from intuitive UX to dedicated model serving clusters.',
    heroHeadline: 'End-to-End & AI-Native',
    heroHeadlineHighlight: 'AI Product Engineering',
    heroDescription:
      'From high-concurrency model serving backends and streaming user interfaces to fine-tuned domain models and automated evaluation suites. We build complete, commercial-grade AI products.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'AI-Native Product Architecture & Low-Latency Serving Pipeline',
    targetAudience: {
      heading: 'Who We Built AI Product Engineering For',
      description: 'Built for enterprise software companies and venture-backed founders building the next generation of AI-first products.',
      profiles: [
        {
          role: 'Venture-Backed AI Founders',
          situation:
            'Building a new AI-native SaaS product that requires low-latency streaming UX, custom model adaptation, and scalable cloud infrastructure.',
        },
        {
          role: 'Enterprise Product VPs',
          situation:
            'Redesigning core enterprise products around AI capabilities rather than just bolting a superficial chatbot onto an old interface.',
        },
        {
          role: 'Chief Technology Officers',
          situation:
            'Need to balance high-speed AI feature velocity with strict data privacy, SOC 2 compliance, and predictable GPU cloud hosting costs.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Bolting a generic chatbot onto an existing app creates an awkward gimmick that users abandon after a few days. AI-native products require completely reimagined UX, streaming state management, and resilient failure recovery.',
      solution:
        'We architect AI-native products from the ground up: optimistic streaming frontends, low-latency vLLM model serving clusters, semantic caching, and continuous evaluation benchmarks.',
      result:
        'Sub-50ms time-to-first-token streaming, 60% lower inference costs, and engaging products that drive sustained daily active usage.',
    },
    timeline: {
      totalDuration: '10 to 18 Weeks Typical Delivery',
      sprintCadence: 'Two-week agile release cycles with working software deployed to staging every sprint.',
      phases: [
        {
          phase: 'Phase 1: AI Product UX & Architecture Discovery',
          duration: 'Weeks 1–3',
          details: 'Interactive streaming UI wireframes, model selection matrix, latency budgets, and technical architecture specifications.',
        },
        {
          phase: 'Phase 2: Core Serving Cluster & RAG Engine',
          duration: 'Weeks 4–8',
          details: 'Deploying load-balanced GPU inference clusters, vector search indexing, semantic caching, and prompt evaluation suites.',
        },
        {
          phase: 'Phase 3: Frontend Streaming & User Workflows',
          duration: 'Weeks 9–14',
          details: 'Building reactive Next.js/Vite interfaces, WebSocket streaming, user feedback collection, and workspace collaboration features.',
        },
        {
          phase: 'Phase 4: Load Hardening & Commercial Launch',
          duration: 'Weeks 15–18',
          details: 'Inference autoscaling stress tests, SOC 2 compliance audit verification, telemetry instrumentation, and commercial launch.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why AI Founders & Product Leaders Choose Neominds',
      reasons: [
        {
          point: 'Complete Full-Stack AI Expertise',
          detail: 'We handle everything from low-level GPU cluster optimization and fine-tuning to high-polish reactive user interfaces.',
        },
        {
          point: 'Zero Vendor Lock-In with Open Weights',
          detail: 'We build with high-performing open-source models (Llama, Mistral, DeepSeek) that you can host anywhere, insulating you from third-party price hikes.',
        },
        {
          point: 'Instant-Feel Streaming UX',
          detail: 'Sub-50ms time-to-first-token streaming and optimistic UI state management ensure your product feels remarkably fast.',
        },
        {
          point: '100% Intellectual Property Ownership',
          detail: 'You own all frontend code, backend services, model weights, and custom datasets with zero licensing royalties.',
        },
      ],
    },
    ctaHeadline: 'Ready to Build a Market-Leading AI Product?',
    ctaDescription:
      'Schedule a session with a Principal AI Product Architect. We will review your product vision, evaluate model serving economics, and design an end-to-end technical blueprint.',
    ctaButtonText: 'Schedule AI Product Discovery',
  },

  'applied-ai': {
    title: 'Applied Machine Learning & Predictive Systems',
    shortDescription:
      'We train and deploy custom predictive models that forecast churn, optimize supply chain inventory, and personalize user recommendations in real time.',
    heroHeadline: 'Predictive & Measurable',
    heroHeadlineHighlight: 'Applied Machine Learning',
    heroDescription:
      'From demand forecasting and dynamic pricing to real-time recommendation engines and customer churn prediction. We build custom machine learning models trained on your business data that deliver clear ROI.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Machine Learning Training & Real-Time Feature Store Topology',
    targetAudience: {
      heading: 'Who We Built Applied Machine Learning For',
      description: 'Built for data-rich businesses that want to predict customer behavior, optimize operations, and automate high-value decisions.',
      profiles: [
        {
          role: 'Chief Data Officers & Analytics VPs',
          situation:
            'Have petabytes of clean historical data sitting in warehouses without operational machine learning models driving business actions.',
        },
        {
          role: 'E-Commerce & Retail Leaders',
          situation:
            'Need dynamic pricing algorithms and real-time personalized product recommendations to boost basket sizes and customer lifetime value.',
        },
        {
          role: 'Supply Chain & Logistics Executives',
          situation:
            'Struggling with inventory stockouts and overstock costs due to inaccurate manual demand forecasting models.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        '80% of corporate data science models die in Jupyter notebooks because teams lack the software engineering expertise to build production-grade feature pipelines and low-latency APIs.',
      solution:
        'We engineer end-to-end MLOps pipelines with automated feature stores (Feast), continuous model retraining, automated drift detection, and sub-25ms inference APIs.',
      result:
        'Production models operating with sub-25ms inference latency, 30% reduction in forecasting errors, and measurable top-line revenue lift.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with quantitative model evaluation benchmarks.',
      phases: [
        {
          phase: 'Phase 1: Feature Engineering & Baseline Benchmark',
          duration: 'Weeks 1–3',
          details: 'Data exploration, feature store schema modeling, ground-truth label validation, and establishing baseline statistical metrics.',
        },
        {
          phase: 'Phase 2: Model Training & Hyperparameter Tuning',
          duration: 'Weeks 4–8',
          details: 'Training gradient-boosted trees and neural architectures (XGBoost, LightGBM, PyTorch), cross-validation, and error analysis.',
        },
        {
          phase: 'Phase 3: Production Feature Store & Inference API',
          duration: 'Weeks 9–11',
          details: 'Building low-latency Redis feature caches, deploying containerized Triton inference servers, and connecting production apps.',
        },
        {
          phase: 'Phase 4: A/B Testing & Drift Monitoring',
          duration: 'Weeks 12–14',
          details: 'Configuring live A/B testing splits against existing baselines, automated data drift monitoring (Evidently AI), and production launch.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Data Leaders Choose Neominds for Applied Machine Learning',
      reasons: [
        {
          point: 'Models Built for Production, Not Just Academics',
          detail: 'We build resilient microservices and low-latency APIs that software engineering teams can easily integrate and maintain.',
        },
        {
          point: 'Measurable Commercial Return',
          detail: 'Every model is designed around a concrete business metric: reducing churn, increasing basket size, or lowering inventory carrying costs.',
        },
        {
          point: 'Automated Retraining & Drift Alerts',
          detail: 'Pipelines automatically detect when real-world distributions shift, alerting engineers and retraining models before accuracy drops.',
        },
        {
          point: '100% Proprietary Model Ownership',
          detail: 'All feature pipelines, training scripts, and model weights belong entirely to your enterprise without proprietary vendor royalties.',
        },
      ],
    },
    ctaHeadline: 'Ready to Turn Your Data Into Predictive Revenue?',
    ctaDescription:
      'Schedule a session with a Principal Machine Learning Engineer. We will review your dataset, evaluate predictive feasibility, and outline a high-impact applied ML roadmap.',
    ctaButtonText: 'Schedule Applied ML Session',
  },

  'ai-agent-systems': {
    title: 'Multi-Agent Cognitive Systems',
    shortDescription:
      'We engineer distributed swarms of specialized AI agents that collaborate to solve complex, multi-stage enterprise workflows with verified precision.',
    heroHeadline: 'Collaborative & Deterministic',
    heroHeadlineHighlight: 'Multi-Agent Systems',
    heroDescription:
      'From collaborative software development swarms and automated research analysis to multi-step financial compliance validation. We build multi-agent architectures that plan, execute, verify, and self-correct.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Distributed Multi-Agent Consensus & Execution Topology',
    targetAudience: {
      heading: 'Who We Built Multi-Agent Systems For',
      description: 'Built for enterprise teams with complex, multi-stage knowledge work that exceeds the reasoning capacity of a single prompt or LLM.',
      profiles: [
        {
          role: 'Enterprise Innovation VPs & Chief Architects',
          situation:
            'Automating complex knowledge workflows that require peer review, verification loops, and domain specialization.',
        },
        {
          role: 'Intelligence & Research Directors',
          situation:
            'Teams spending days synthesizing hundreds of filings, regulatory updates, and market reports into verified decision briefs.',
        },
        {
          role: 'Complex Operations Directors',
          situation:
            'Need distributed software workers that can coordinate tasks, delegate sub-problems, and handle unexpected edge cases safely.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Single monolithic LLM prompts fail on complex multi-step workflows. They forget instructions halfway through, cannot backtrack when they make mistakes, and lack peer review.',
      solution:
        'We build distributed agent topologies where specialized agents (Researcher, Critic, Executor, Verifier) collaborate through shared state, consensus protocols, and explicit verification loops.',
      result:
        'Deterministic execution graphs, comprehensive decision auditability, and 90% reduction in workflow completion time.',
    },
    timeline: {
      totalDuration: '10 to 16 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with multi-agent orchestration sandbox testing.',
      phases: [
        {
          phase: 'Phase 1: Agent Role Architecture & State Design',
          duration: 'Weeks 1–3',
          details: 'Defining agent personas, shared state schemas, inter-agent messaging protocols, and supervisor orchestration logic.',
        },
        {
          phase: 'Phase 2: Tool Sandboxes & Execution Bridges',
          duration: 'Weeks 4–8',
          details: 'Building secure tool execution sandboxes, database connectors, web scraping agents, and verification checkers.',
        },
        {
          phase: 'Phase 3: Consensus Protocols & Loop Prevention',
          duration: 'Weeks 9–12',
          details: 'Adversarial consensus verification, loop detection mechanisms, backoff strategies, and human approval gates.',
        },
        {
          phase: 'Phase 4: Enterprise Telemetry & Production Launch',
          duration: 'Weeks 13–16',
          details: 'Deploying agent trace visualizers (LangSmith), cost management controls, incident escalation queues, and production rollout.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Enterprise Teams Choose Neominds for Multi-Agent Systems',
      reasons: [
        {
          point: 'Self-Correcting Verification Loops',
          detail: 'Our architectures include dedicated verifier agents that inspect work before outputs are finalized, catching errors automatically.',
        },
        {
          point: 'Deterministic Execution Paths',
          detail: 'Agents follow stateful directed acyclic graphs (DAGs) rather than loose freeform chains, guaranteeing predictable business outcomes.',
        },
        {
          point: 'Complete Traceability & Replay',
          detail: 'Every agent thought, message, and tool call is recorded immutably, allowing your team to inspect or replay any workflow step.',
        },
        {
          point: '100% Code & Protocol Ownership',
          detail: 'You own the multi-agent orchestration framework, prompt strategies, and tool integrations with zero proprietary runtime lock-in.',
        },
      ],
    },
    ctaHeadline: 'Ready to Deploy Collaborative Multi-Agent Systems?',
    ctaDescription:
      'Schedule a session with a Principal Multi-Agent Systems Architect. We will analyze your complex workflows, demonstrate a live multi-agent swarm, and design a custom orchestration blueprint.',
    ctaButtonText: 'Schedule Multi-Agent Consultation',
  },

  'intelligent-automation': {
    title: 'Enterprise Intelligent Process Automation',
    shortDescription:
      'We combine computer vision, natural language processing, and API orchestration to automate end-to-end business operations across legacy enterprise stacks.',
    heroHeadline: 'End-to-End & Resilient',
    heroHeadlineHighlight: 'Intelligent Automation',
    heroDescription:
      'From high-volume invoice reconciliation and contract lifecycle automation to cross-system data synchronization. We replace brittle manual data entry with semantic, API-first automation pipelines.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Enterprise End-to-End Intelligent Automation Architecture',
    targetAudience: {
      heading: 'Who We Built Intelligent Automation For',
      description: 'Built for Global Shared Services leaders, COOs, and enterprise operations teams seeking to eliminate operational backlogs.',
      profiles: [
        {
          role: 'Global Shared Services & Operations VPs',
          situation:
            'Managing hundreds of employees performing manual data entry, order processing, and system reconciliation across legacy software.',
        },
        {
          role: 'Finance & Accounting Directors',
          situation:
            'Struggling with slow invoice reconciliation, multi-entity billing approvals, and manual compliance checks that delay monthly close.',
        },
        {
          role: 'Supply Chain & Procurement Leads',
          situation:
            'Need automated purchase order matching, shipping document validation, and vendor onboarding with zero human data transcription.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Complex enterprise workflows span emails, PDF attachments, legacy desktop software, and modern cloud ERPs. Legacy RPA bots break frequently, creating massive manual backlogs.',
      solution:
        'We build semantic, LLM-powered document extractors paired with resilient API orchestration and automated exception handling queues that never break when layouts change.',
      result:
        '80% reduction in manual touch points, 99.8% extraction accuracy, and full SOX-compliant audit logging for every automated transaction.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with real-world validation data.',
      phases: [
        {
          phase: 'Phase 1: Process Discovery & Document Ingestion',
          duration: 'Weeks 1–2',
          details: 'Process mapping, document dataset collection, exception frequency analysis, and ROI benchmark modeling.',
        },
        {
          phase: 'Phase 2: Semantic Pipeline & Core ERP Connectors',
          duration: 'Weeks 3–7',
          details: 'Developing multi-format document parsers, automated validation rules, and SAP/Salesforce/NetSuite API integration.',
        },
        {
          phase: 'Phase 3: Exception Routing & Human-in-the-Loop',
          duration: 'Weeks 8–11',
          details: 'Building intuitive human review queues for edge cases, automated confidence scoring, and audit log generation.',
        },
        {
          phase: 'Phase 4: Enterprise Hardening & Cutover',
          duration: 'Weeks 12–14',
          details: 'High-volume queue load testing, SOC 2 compliance verification, operations team training, and production cutover.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Global Operations Leaders Partner With Neominds',
      reasons: [
        {
          point: 'Layout-Independent Semantic Extraction',
          detail: 'Our AI pipelines understand document context regardless of format changes, scans, or vendor variations, eliminating brittle RPA failures.',
        },
        {
          point: 'Automated Human-in-the-Loop Routing',
          detail: 'When confidence scores fall below thresholds, exceptions are routed to human reviewers with highlighted discrepancies for quick approval.',
        },
        {
          point: 'Unified Legacy & Cloud ERP Integration',
          detail: 'We integrate with SAP, Oracle, NetSuite, and custom legacy databases via hardened API bridges and direct database connectors.',
        },
        {
          point: 'Zero Per-Transaction Licensing Fees',
          detail: 'You own the automation code and hosting infrastructure. No recurring per-bot or per-document licensing penalties.',
        },
      ],
    },
    ctaHeadline: 'Ready to Eliminate Manual Operational Backlogs?',
    ctaDescription:
      'Schedule a discovery session with a Principal Automation Architect. We will review your current manual workflow, evaluate document datasets, and deliver an automation ROI roadmap.',
    ctaButtonText: 'Schedule Automation Consultation',
  },

  'generative-ai': {
    title: 'Enterprise Generative AI & Private LLMs',
    shortDescription:
      'We deploy private, fine-tuned large language models inside your own cloud perimeter. Gain all the power of modern generative AI with absolute data sovereignty.',
    heroHeadline: 'Private & Domain-Tuned',
    heroHeadlineHighlight: 'Generative AI Solutions',
    heroDescription:
      'From private cloud LLM hosting and parameter-efficient fine-tuning (PEFT/LoRA) to enterprise knowledge synthesis and strict guardrail enforcements. Engineered for zero data leakage and institutional compliance.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Private Cloud LLM Inference & Domain Fine-Tuning Pipeline',
    targetAudience: {
      heading: 'Who We Built Private Generative AI For',
      description: 'Built for highly regulated enterprises, legal firms, defense contractors, and financial institutions where data privacy is non-negotiable.',
      profiles: [
        {
          role: 'Chief Information Security Officers & Legal Counsel',
          situation:
            'Prohibiting public commercial AI tools (ChatGPT) due to strict data privacy, confidentiality, and regulatory compliance rules.',
        },
        {
          role: 'Enterprise Knowledge & Research Directors',
          situation:
            'Employees spending hours searching through millions of internal technical documents, contracts, and proprietary research files.',
        },
        {
          role: 'Product Directors & Engineering VPs',
          situation:
            'Need domain-tuned AI models that understand proprietary internal vocabulary, acronyms, and specialized engineering schemas.',
        },
      ],
    },
    mainProblemSolved: {
      problem:
        'Sending sensitive company contracts, customer PII, or internal trade secrets to commercial cloud LLMs violates compliance and risks catastrophic leaks. Generic models also lack deep understanding of your industry.',
      solution:
        'We deploy open-weight models (Llama, Mistral, DeepSeek) inside your private cloud perimeter, fine-tune them on your curated domain knowledge, and implement strict context grounding.',
      result:
        '100% private cloud data sovereignty, zero data exposure to third parties, and domain accuracy that significantly outperforms generic public models.',
    },
    timeline: {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week development iterations with private staging access.',
      phases: [
        {
          phase: 'Phase 1: Security Perimeter & Dataset Curation',
          duration: 'Weeks 1–3',
          details: 'Data isolation boundary definition, synthetic test dataset creation, PII redaction pipelines, and private GPU infrastructure setup.',
        },
        {
          phase: 'Phase 2: Fine-Tuning & Quantization Pipeline',
          duration: 'Weeks 4–8',
          details: 'Domain-specific LoRA/PEFT fine-tuning, model quantization (4-bit/8-bit), and vLLM inference engine deployment.',
        },
        {
          phase: 'Phase 3: Enterprise Guardrails & Internal Search',
          duration: 'Weeks 9–11',
          details: 'NeMo guardrails implementation, context-grounding citation engines, and role-based access control (RBAC) integration.',
        },
        {
          phase: 'Phase 4: Security Penetration & Enterprise Rollout',
          duration: 'Weeks 12–14',
          details: 'Prompt injection red-teaming, latency optimization under concurrency, SOC 2 verification, and production launch.',
        },
      ],
    },
    whyChooseThisService: {
      title: 'Why Regulated Enterprises Choose Neominds for Generative AI',
      reasons: [
        {
          point: '100% Private Cloud Sovereignty',
          detail: 'Your models and data run entirely within your private AWS, GCP, Azure, or on-premise hardware. No third party ever sees your queries.',
        },
        {
          point: 'Zero Data Training by Third Parties',
          detail: 'Guaranteed protection against proprietary code, legal contracts, or customer data being absorbed into public foundation models.',
        },
        {
          point: 'Domain-Tuned for Extreme Accuracy',
          detail: 'Fine-tuned specifically on your company documentation, technical manuals, and historical files for superior contextual understanding.',
        },
        {
          point: 'Predictable Fixed Hosting Costs',
          detail: 'Dedicated GPU instances eliminate variable per-token API pricing, slashing ongoing inference costs by up to 60% at scale.',
        },
      ],
    },
    ctaHeadline: 'Ready to Deploy Private Enterprise Generative AI?',
    ctaDescription:
      'Schedule a confidential architecture session with a Principal Generative AI Engineer. We will review your security requirements, evaluate private GPU hosting, and design a custom deployment roadmap.',
    ctaButtonText: 'Schedule Private AI Consultation',
  },
};
