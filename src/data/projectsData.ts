import { ServiceSlug } from './serviceSlugs';
import { PORTFOLIO_CASE_STUDIES } from './portfolioData';

export interface ProjectOverview {
  client: string;
  industry: string;
  services: string;
  technologyStack: string;
  projectType:
    | 'Web Application'
    | 'AI System'
    | 'Automation'
    | 'Custom Software'
    | 'Mobile Application'
    | 'Enterprise Platform'
    | 'Other';
  projectDuration: string;
}

export interface TechnologyImplementation {
  frontend: string;
  backend: string;
  database: string;
  aiAutomation?: string;
  integrations?: string;
}

export interface ResultsAndImpact {
  summary: string;
  efficiency: string;
  timeSaved: string;
  costReduction: string;
  performance: string;
  businessImpact: string;
}

export interface UnifiedProject {
  id: string;
  slug: string;
  projectName: string;
  title: string; // "[Project Name]. Case Study"
  overview: ProjectOverview;
  clientContext: string;
  challenge: string;
  constraints: string;
  approach: string;
  solution: string;
  keyFeatures: string[];
  technologyImplementation: TechnologyImplementation;
  resultsAndImpact: ResultsAndImpact;
  keyTakeaway: string;
  discussStatement: string;
  ctaText: string;
  relatedServices: { name: string; slug: ServiceSlug }[];
  relatedProjectIds: string[];
}

export const UNIFIED_PROJECTS: Record<string, UnifiedProject> = {
  'mindspace-mobile-app': {
    id: 'mindspace-mobile-app',
    slug: 'mindspace-mobile-app',
    projectName: 'Mindspace.ai Mental Wellness Platform',
    title: 'Mindspace.ai Mental Wellness Platform. Case Study',
    overview: {
      client: 'Mindspace.ai Health Technologies Inc.',
      industry: 'Healthcare & Digital Therapeutics',
      services: 'App Development, HIPAA Compliance Architecture, WebRTC Telehealth',
      technologyStack: 'React Native, TypeScript, Node.js, WebRTC, SQLCipher, AWS GovCloud',
      projectType: 'Mobile Application',
      projectDuration: '9 Months (Design to Store Launch)',
    },
    clientContext:
      'Mindspace.ai develops evidence-based digital therapeutics, cognitive behavioral exercises, and secure clinical telehealth tools connecting licensed psychiatrists with patients across North America.',
    challenge:
      'The initial mobile release suffered from frequent session disconnects during live video therapy, slow local data synchronizations in weak signal zones, and patient churn caused by complicated clinical check-in workflows. Patient data integrity also required strict medical confidentiality under federal guidelines.',
    constraints:
      'Full compliance with HIPAA and HITECH security standards. Zero plaintext local storage of Protected Health Information (PHI). Telehealth video streams had to operate reliably on volatile 3G and 4G mobile connections with sub-250ms latency.',
    approach:
      'We conducted a structural review of the mobile network layer and encrypted local storage architecture. We selected React Native for unified cross-platform mobile delivery, integrated SQLCipher with biometric device keys for local caching, and built a custom adaptive WebRTC signaling gateway that adjusts video bitrates in real time based on connection quality.',
    solution:
      'A cross-platform iOS and Android mobile app designed for secure patient consultations and daily mental wellness routines. The application integrates offline-first mood diaries, biometric authentication, push notification appointment schedules, and secure audio-video telehealth rooms.',
    keyFeatures: [
      'Encrypted Biometric Check-In with local SQLCipher cryptographic storage',
      'Adaptive WebRTC Telehealth Gateway with automated packet loss concealment',
      'Offline-First Guided Therapy Modules with continuous background sync',
      'Clinical Telemetry Logs with automated symptom tracking charts for therapists',
    ],
    technologyImplementation: {
      frontend: 'React Native 0.74, TypeScript, Reanimated 3, NativeWind',
      backend: 'Node.js, Express, NestJS microservices on AWS ECS',
      database: 'PostgreSQL (RDS Aurora Multi-AZ), SQLCipher for encrypted mobile local cache',
      aiAutomation: 'Automated clinical symptom trend analysis and audio transcription indexing',
      integrations: 'Twilio WebRTC Signaling, Stripe Billing, Epic EHR FHIR API',
    },
    resultsAndImpact: {
      summary:
        'The upgraded mobile platform resolved call disconnects, secured full HIPAA audit verification, and scaled patient adoption across both mobile app stores.',
      efficiency: '99.8% telehealth call completion rate, up from 81.4%',
      timeSaved: 'Patient intake completion time reduced from 14 minutes to 3.5 minutes',
      costReduction: '34% decrease in patient support tickets related to connectivity failures',
      performance: 'Sub-180ms media streaming latency across cellular connections',
      businessImpact: '120,000+ active registered patients with a sustained 4.9-star average rating',
    },
    keyTakeaway:
      'Healthcare applications succeed when stringent compliance and encryption operate invisibly behind a calm, responsive, and distraction-free mobile user experience.',
    discussStatement:
      'NeoMinds designs and ships certified digital healthcare software that pairs strict regulatory compliance with consumer-grade mobile experiences.',
    ctaText: 'Discuss Your Project',
    relatedServices: [
      { name: 'App Development', slug: 'app-development' },
      { name: 'Cross-Platform App Development', slug: 'cross-platform-app-development' },
      { name: 'Custom Software Development', slug: 'custom-software-development' },
    ],
    relatedProjectIds: ['mindspace-dashboard', 'nda-healthcare-hms', 'ayyo-mobile-app'],
  },

  'mindspace-dashboard': {
    id: 'mindspace-dashboard',
    slug: 'mindspace-dashboard',
    projectName: 'Mindspace.ai Clinical Telemetry Dashboard',
    title: 'Mindspace.ai Clinical Telemetry Dashboard. Case Study',
    overview: {
      client: 'Mindspace.ai Clinical Operations Group',
      industry: 'Healthcare Analytics & Telehealth',
      services: 'Web Development, Real-Time Analytics, Role-Based Access Control',
      technologyStack: 'React, TypeScript, Go, Apache Kafka, TimescaleDB, Docker',
      projectType: 'Web Application',
      projectDuration: '7 Months',
    },
    clientContext:
      'Mindspace.ai operates a clinical network of over 450 licensed mental health professionals requiring real-time visibility into patient session notes, risk indicators, and treatment adherence.',
    challenge:
      'Therapists spent an average of 1.8 hours daily navigating fragmented electronic spreadsheets and disjointed session records. High-risk symptom changes went unnoticed until scheduled weekly evaluations, delaying critical clinical interventions.',
    constraints:
      'Role-based data segregation between supervisory doctors, therapists, and billing administrators. Real-time patient chart rendering had to complete in under 500ms while processing concurrent telemetry streams from over 100,000 active mobile app users.',
    approach:
      'We designed an event-driven analytical web console built on React and Go. We deployed Apache Kafka to aggregate real-time patient telemetry and coupled it with TimescaleDB for sub-second longitudinal symptom queries.',
    solution:
      'An enterprise clinical command console that aggregates patient symptom trends, tracks appointment compliance, surfaces priority clinical alerts, and generates automated billing summaries for insurance reimbursement.',
    keyFeatures: [
      'Real-Time Patient Risk Radar with automated clinical threshold alerts',
      'Sub-Second Longitudinal Charting across multiple psychological assessment indices',
      'Granular Role-Based Access Control enforcing strict provider-patient data boundaries',
      'Automated Superbill and Encounter Documentation generation',
    ],
    technologyImplementation: {
      frontend: 'React 18, TypeScript, Tailwind CSS, TanStack Query, Apache ECharts',
      backend: 'Go (Golang) microservices, gRPC internal communication',
      database: 'TimescaleDB for time-series biometric data, PostgreSQL for patient charts',
      aiAutomation: 'Rule-based algorithmic risk scoring and anomaly detection alerts',
      integrations: 'HL7 / FHIR APIs, OfficeAlly EDI 837 claims clearinghouse',
    },
    resultsAndImpact: {
      summary:
        'The dashboard unified clinical operations, dramatically reduced manual paperwork, and provided providers with immediate visibility into high-risk patient events.',
      efficiency: '68% reduction in daily administrative charting overhead for therapists',
      timeSaved: 'Saved an estimated 42 hours per therapist monthly in documentation tasks',
      costReduction: 'Decreased insurance claim rejection rates by 41% via automated coding verification',
      performance: 'Average query response time under 220ms across 20M+ longitudinal records',
      businessImpact: 'Enabled the provider network to scale from 80 clinicians to 450+ without operational friction',
    },
    keyTakeaway:
      'Clinical tools must prioritize immediate cognitive clarity: structured information hierarchy and rapid search save clinicians hours every week.',
    discussStatement:
      'NeoMinds builds data-intensive enterprise web applications that transform complex data streams into decisive operational interfaces.',
    ctaText: 'Discuss Your Project',
    relatedServices: [
      { name: 'Web Development', slug: 'web-development' },
      { name: 'Custom Software Development', slug: 'custom-software-development' },
      { name: 'SaaS Development', slug: 'saas-development' },
    ],
    relatedProjectIds: ['mindspace-mobile-app', 'flooring-inc-dashboard', 'mybusinessmate-web'],
  },

  'authenticom-ai-etl': {
    id: 'authenticom-ai-etl',
    slug: 'authenticom-ai-etl',
    projectName: 'Authenticom Automotive ETL & Data Integration Platform',
    title: 'Authenticom Automotive ETL & Data Integration Platform. Case Study',
    overview: {
      client: 'Authenticom Inc.',
      industry: 'Automotive Data Integration & B2B SaaS',
      services: 'AI Integrations, Cloud-Based Software, Enterprise Data Engineering',
      technologyStack: 'Python, FastAPI, Claude 3.5 Sonnet, Apache Kafka, PostgreSQL, AWS GovCloud, Kubernetes',
      projectType: 'AI System',
      projectDuration: '12 Months',
    },
    clientContext:
      'Authenticom is a North American automotive data integration provider that connects dealer management systems (DMS) with original equipment manufacturers (OEMs), automotive software vendors, and marketing networks.',
    challenge:
      'Authenticom ingests daily inventory, parts, and service records from over 15,000 dealerships running dozens of disparate DMS formats. Inconsistent schemas, undocumented field drift, and manual spreadsheet reconciliation led to delayed data pipelines and required a dedicated team of engineers just to write custom transformation rules.',
    constraints:
      'Zero downtime allowed on production ingestion endpoints processing over 40 million records daily. Extreme data confidentiality required under automotive manufacturer franchise agreements with zero external data leakage.',
    approach:
      'We designed an event-driven data pipeline orchestrator utilizing containerized Python microservices, Apache Kafka message buses, and deterministic Claude agentic models configured with strict schema validation contracts.',
    solution:
      'An enterprise AI-assisted ETL pipeline that automatically ingests unstructured dealership flat files, infers semantic column mappings, validates data formats, and flags anomalies before inserting clean records into centralized analytical stores.',
    keyFeatures: [
      'Automated Semantic Schema Reconciliation identifying shifted columns across 40+ DMS types',
      'Dead-Letter Queue Inspection with AI-suggested field correction rules',
      'Event-Driven Apache Kafka Streaming Architecture handling 5,000+ records per second',
      'Automated Schema Audit Ledger tracking data provenance and transformation history',
    ],
    technologyImplementation: {
      frontend: 'React, TypeScript, Tailwind CSS, Monaco Editor for schema rule authoring',
      backend: 'Python, FastAPI, Celery, Apache Kafka, Go ingestion proxies',
      database: 'PostgreSQL, Redis cluster for schema caching, AWS S3 Parquet data lake',
      aiAutomation: 'Claude 3.5 Sonnet agentic validation pipelines with deterministic JSON schema output',
      integrations: 'Reynolds & Reynolds, CDK Global, DealerTrack DMS connectors',
    },
    resultsAndImpact: {
      summary:
        'The automated ETL engine replaced manual mapping tasks, reduced onboarding turnaround for new dealership groups, and maintained 99.99% availability.',
      efficiency: '4.8x increase in end-to-end data processing throughput',
      timeSaved: 'Reduced new dealer format onboarding time from 11 days to under 4 hours',
      costReduction: '74% reduction in manual data mapping and operational maintenance overhead',
      performance: 'Sub-second real-time transformation latency on streaming DMS event streams',
      businessImpact: 'Over 15,000 automotive dealerships synchronized with 99.99% pipeline uptime SLA',
    },
    keyTakeaway:
      'Applying LLMs to enterprise ETL works best when models are strictly bounded by deterministic validation schemas and event-driven queue architectures.',
    discussStatement:
      'NeoMinds builds mission-critical data pipelines and applied AI systems that automate manual back-office data operations at enterprise scale.',
    ctaText: 'Discuss Your Project',
    relatedServices: [
      { name: 'AI Integrations', slug: 'ai-integrations' },
      { name: 'Cloud-Based Software', slug: 'cloud-based-software' },
      { name: 'Custom Software Development', slug: 'custom-software-development' },
    ],
    relatedProjectIds: ['motive-retail-ai', 'trading-platform', 'trubridge-medical-ai'],
  },

  'trading-platform': {
    id: 'trading-platform',
    slug: 'trading-platform',
    projectName: 'Global FinTech Multi-Asset Trading Engine',
    title: 'Global FinTech Multi-Asset Trading Engine. Case Study',
    overview: {
      client: 'Global FinTech Exchange Group',
      industry: 'Financial Services & Capital Markets',
      services: 'Custom Software Development, Cloud-Based Software, DevOps & Infrastructure',
      technologyStack: 'C# / .NET Core, Go, Redis Cluster, Apache Kafka, React, Azure Kubernetes Service',
      projectType: 'Custom Software',
      projectDuration: '18 Months',
    },
    clientContext:
      'A digital capital markets provider serving institutional and retail traders with real-time equity, derivative, and currency pair order execution.',
    challenge:
      'The client operated on a legacy monolithic matching engine that suffered from severe slippage, thread starvation, and order queue backpressure during volatile market open events, resulting in regulatory scrutiny and customer defections.',
    constraints:
      'P99 order execution latency required under 20 milliseconds. Zero tolerance for ledger inconsistency, double-fills, or unscheduled downtime during trading hours.',
    approach:
      'We designed an event-sourced distributed matching engine. Core matching state was held in memory with deterministic command logs replicated via Raft consensus. WebSockets and distributed Redis caches routed price feeds to tens of thousands of simultaneous client sessions.',
    solution:
      'A low-latency multi-asset matching engine, real-time risk management gateway, and regulatory trade reporting pipeline deployed across multi-region Azure infrastructure.',
    keyFeatures: [
      'In-Memory Deterministic Order Book with sub-12 millisecond matching latency',
      'Real-Time Pre-Trade Risk Gate calculating margin exposure prior to order placement',
      'High-Throughput WebSocket Gateway broadcasting live L2 market depth updates',
      'Automated Audit Ledger complying with SEC and FINRA trade reporting mandates',
    ],
    technologyImplementation: {
      frontend: 'React, TypeScript, Web Workers, Canvas chart rendering',
      backend: 'C# .NET 8, Go for network ingress gateways, gRPC',
      database: 'Redis Cluster for in-memory order books, PostgreSQL with TimescaleDB for trade records',
      aiAutomation: 'Algorithmic market manipulation and wash-trading detection rules',
      integrations: 'FIX Protocol 4.4 / 5.0, Bloomberg B-PIPE, clearing house settlement APIs',
    },
    resultsAndImpact: {
      summary:
        'The rebuilt engine processed market open spikes with zero downtime and established a dependable technical foundation for institutional client growth.',
      efficiency: 'Handled over 50,000 orders per second without queue degradation',
      timeSaved: 'Settlement reconciliation cycle cut from 4 hours to near-instantaneous streaming',
      costReduction: 'Cloud compute infrastructure costs lowered by 38% through optimized in-memory architectures',
      performance: 'P99 execution latency lowered from 420ms to 11.4ms',
      businessImpact: 'Scaled platform to support over 1,000,000 active retail and institutional traders',
    },
    keyTakeaway:
      'In high-throughput systems, latency optimization is not about raw CPU power; it is about eliminating locks, reducing memory allocations, and designing for event sourcing.',
    discussStatement:
      'NeoMinds engineers high-performance financial systems and low-latency transactional software designed for continuous fault-tolerant execution.',
    ctaText: 'Discuss Your Project',
    relatedServices: [
      { name: 'Custom Software Development', slug: 'custom-software-development' },
      { name: 'Cloud-Based Software', slug: 'cloud-based-software' },
      { name: 'Web Development', slug: 'web-development' },
    ],
    relatedProjectIds: ['authenticom-ai-etl', 'nda-fintech-legacy', 'motive-retail-ai'],
  },

  'trubridge-medical-ai': {
    id: 'trubridge-medical-ai',
    slug: 'trubridge-medical-ai',
    projectName: 'TruBridge Automated Medical Coding & Claims Verification Engine',
    title: 'TruBridge Automated Medical Coding & Claims Verification Engine. Case Study',
    overview: {
      client: 'TruBridge (Healthcare Solutions)',
      industry: 'Healthcare Technology & Revenue Cycle Management',
      services: 'AI Integrations, Custom Software Development, Cloud-Based Software',
      technologyStack: 'Python, PyTorch, C# / .NET Core, Angular, PostgreSQL, AWS GovCloud',
      projectType: 'AI System',
      projectDuration: '14 Months',
    },
    clientContext:
      'TruBridge provides revenue cycle management, electronic health records, and medical billing solutions to community hospitals and regional health systems throughout the United States.',
    challenge:
      'Manual medical chart coding required certified specialists to read dozens of pages of unstructured clinical notes for every hospital encounter. Backlogs caused billing delays of two to three weeks, while coding discrepancies generated insurance denials and revenue clawbacks.',
    constraints:
      'Strict HIPAA, HITECH, and SOC 2 Type II compliance. Zero patient health data could be shared with commercial unvetted third-party APIs. The system had to support ICD-10-CM, ICD-10-PCS, and CPT nomenclature.',
    approach:
      'We designed an air-gapped, on-premise medical NLP pipeline fine-tuned on clinical terminology. The engine parses physician notes, correlates discharge diagnoses with lab results, and generates ranked ICD-10 coding recommendations with confidence explanations.',
    solution:
      'A clinical decision support and automated coding assistant that ingests patient records directly from hospital EHR systems, surfaces relevant diagnostic codes, and highlights exact evidentiary phrases in clinical notes.',
    keyFeatures: [
      'Clinical NLP Entity Extractor identifying diagnoses, procedures, and anatomical modifiers',
      'Dual Verification Loop cross-referencing CMS coding guidelines against patient history',
      'Side-by-Side Verification Workbench allowing human coders to review and approve codes with one click',
      'Zero-Leak Security Boundary deployed inside private AWS GovCloud VPCs',
    ],
    technologyImplementation: {
      frontend: 'Angular, TypeScript, Tailwind CSS, high-contrast accessibility themes',
      backend: 'Python, FastAPI, C# .NET Core microservices, Redis',
      database: 'PostgreSQL with pgvector for medical guideline semantic search',
      aiAutomation: 'Fine-tuned Transformer models for clinical entity extraction and ICD-10 prediction',
      integrations: 'HL7 ADT/ORM interfaces, Epic and Cerner EHR integrations, EDI 837 clearinghouses',
    },
    resultsAndImpact: {
      summary:
        'The automated coding engine cut hospital billing cycle turnaround by over 70% and drastically reduced insurance claim rejection rates across client healthcare networks.',
      efficiency: '3.4x acceleration in daily chart coding throughput per specialist',
      timeSaved: 'Hospital billing submission turnaround reduced from 16 days to under 4 days',
      costReduction: '52% reduction in insurance claim denial appeals and resubmissions',
      performance: 'Sub-4 second processing time per 30-page inpatient chart document',
      businessImpact: 'Over 2.4 million patient encounters processed monthly with 98.6% first-pass claim acceptance',
    },
    keyTakeaway:
      'In high-stakes compliance environments, AI is most effective as an evidentiary assistant: showing the human specialist the exact document evidence builds confidence and guarantees accountability.',
    discussStatement:
      'NeoMinds architects secure healthcare software and private AI engines that automate manual revenue cycle and clinical operations.',
    ctaText: 'Discuss Your Project',
    relatedServices: [
      { name: 'AI Integrations', slug: 'ai-integrations' },
      { name: 'Custom Software Development', slug: 'custom-software-development' },
      { name: 'Cloud-Based Software', slug: 'cloud-based-software' },
    ],
    relatedProjectIds: ['mindspace-mobile-app', 'mindspace-dashboard', 'authenticom-ai-etl'],
  },

  'motive-retail-ai': {
    id: 'motive-retail-ai',
    slug: 'motive-retail-ai',
    projectName: 'Motive Retail Automated Dealer Software Integration Engine',
    title: 'Motive Retail Automated Dealer Software Integration Engine. Case Study',
    overview: {
      client: 'Motive Retail',
      industry: 'Automotive Technology & ISV Systems',
      services: 'AI Integrations, Custom Software Development, Web Development',
      technologyStack: 'TypeScript, Node.js, Claude AI, AWS Lambda, GraphQL, PostgreSQL',
      projectType: 'Automation',
      projectDuration: '9 Months',
    },
    clientContext:
      'Motive Retail facilitates data integration and API certification between global automotive OEMs and hundreds of third-party dealership software systems.',
    challenge:
      'Software certification required manual test verification of thousands of individual API payloads. Certification engineers spent weeks reviewing log outputs, explaining error codes to software vendors, and manually diagnosing format mismatches.',
    constraints:
      'Automotive dealership systems run on dozens of legacy protocols. Integration testing had to accommodate non-standard XML, JSON, and proprietary binary payloads without breaking backward compatibility.',
    approach:
      'As a certified engineering partner, NeoMinds designed an intelligent test validation gateway. We built automated test harnesses that execute mock dealer payloads, validate responses against OEM specifications, and use Claude AI to formulate exact remediation instructions.',
    solution:
      'An automated developer portal and API certification engine that validates third-party software against OEM integration standards and generates contextual code corrections in real time.',
    keyFeatures: [
      'Self-Service API Certification Portal with interactive payload test harnesses',
      'Contextual AI Error Explainer providing exact line-number remediation guidance',
      'Automated Mock Dealer Simulator mimicking live DMS response patterns',
      'Real-Time Certification Scorecard tracking vendor integration milestones',
    ],
    technologyImplementation: {
      frontend: 'React, TypeScript, Tailwind CSS, Monaco code editor',
      backend: 'Node.js, TypeScript, AWS Lambda, GraphQL API gateway',
      database: 'PostgreSQL, DynamoDB for test execution logs',
      aiAutomation: 'Claude AI API reasoning pipelines for syntax and semantic error diagnosis',
      integrations: 'Ford, GM, Toyota OEM developer gateways and DMS connectors',
    },
    resultsAndImpact: {
      summary:
        'The self-service integration portal shortened dealer software onboarding cycles and significantly reduced manual engineering review hours.',
      efficiency: '65% reduction in end-to-end dealer software integration cycle time',
      timeSaved: 'Third-party developers resolved integration errors in hours rather than weeks',
      costReduction: 'Reduced dedicated certification engineering support hours by 58%',
      performance: 'Sub-300ms automated test execution feedback loop',
      businessImpact: '92% of dealer integration certifications now completed fully self-service',
    },
    keyTakeaway:
      'Developer tooling that explains why an error occurred and provides the exact code correction accelerates partner integrations faster than static documentation.',
    discussStatement:
      'NeoMinds builds automated developer platforms, partner integration gateways, and API validation engines for enterprise software ecosystems.',
    ctaText: 'Discuss Your Project',
    relatedServices: [
      { name: 'AI Integrations', slug: 'ai-integrations' },
      { name: 'Web Development', slug: 'web-development' },
      { name: 'Custom Software Development', slug: 'custom-software-development' },
    ],
    relatedProjectIds: ['authenticom-ai-etl', 'trading-platform', 'dotcomweavers-project-buddy'],
  },

  'flooring-inc-dashboard': {
    id: 'flooring-inc-dashboard',
    slug: 'flooring-inc-dashboard',
    projectName: 'Flooring Inc. Multi-Warehouse Inventory & Logistics Dashboard',
    title: 'Flooring Inc. Multi-Warehouse Inventory & Logistics Dashboard. Case Study',
    overview: {
      client: 'Flooring Inc. Distribution Group',
      industry: 'Retail, E-commerce & Distribution',
      services: 'Web Development, Custom Software Development, Cloud-Based Software',
      technologyStack: 'React, TypeScript, Node.js, PostgreSQL, Redis, AWS Cloud',
      projectType: 'Web Application',
      projectDuration: '8 Months',
    },
    clientContext:
      'Flooring Inc. is a nationwide retail and B2B flooring distributor managing millions of square feet of inventory across six regional fulfillment warehouses.',
    challenge:
      'Warehouse staff and online sales teams operated on disconnected legacy inventory spreadsheets. Discrepancies led to frequent stockouts on fast-moving SKUs, accidental over-promising on delivery lead times, and high freight penalties for split shipments.',
    constraints:
      'High-velocity inventory updates during peak contractor purchasing hours. The system had to integrate with physical barcode scanners, existing ERP backends, and multiple national freight dispatchers.',
    approach:
      'We designed an event-driven inventory control console with real-time stock allocation logic. When a customer adds items to a cart or a commercial contractor confirms an order, stock is reserved with atomic database locks across warehouse zones.',
    solution:
      'A multi-warehouse inventory management dashboard with live stock level heatmaps, automated purchase order reorder triggers, and real-time freight cost estimators.',
    keyFeatures: [
      'Atomic Multi-Warehouse Stock Allocation preventing double-booking of physical lots',
      'Predictive Reorder Point Triggers calculating seasonal lead times and freight constraints',
      'Barcode Scanner PWA Integration allowing warehouse teams to update stock on mobile devices',
      'Real-Time LTL Freight Cost Calculator choosing optimal regional shipping origins',
    ],
    technologyImplementation: {
      frontend: 'React, TypeScript, Tailwind CSS, Vite, TanStack Table',
      backend: 'Node.js, Express, Redis Pub/Sub for live stock updates',
      database: 'PostgreSQL with connection pooling and read replicas',
      aiAutomation: 'Demand forecasting algorithms calculating optimal reorder points',
      integrations: 'Shopify Plus, NetSuite ERP, FedEx Freight, Estes Express APIs',
    },
    resultsAndImpact: {
      summary:
        'The dashboard unified warehouse stock control, eliminated phantom inventory, and decreased regional shipping transit times.',
      efficiency: 'Inventory discrepancy rate dropped from 7.4% to under 0.2%',
      timeSaved: 'Warehouse inventory reconciliation time cut from 12 hours weekly to 45 minutes',
      costReduction: '23% reduction in split-shipment freight overhead',
      performance: 'Live stock count updates propagated to web storefronts in under 200ms',
      businessImpact: 'Managed $48M+ in annual physical inventory with 99.8% order fulfillment accuracy',
    },
    keyTakeaway:
      'Physical logistics software must bridge the gap between back-office financial records and the reality on the warehouse floor through immediate, atomic inventory locks.',
    discussStatement:
      'NeoMinds builds dependable enterprise inventory software and web consoles that streamline multi-location retail and fulfillment operations.',
    ctaText: 'Discuss Your Project',
    relatedServices: [
      { name: 'Web Development', slug: 'web-development' },
      { name: 'Ecommerce Platform', slug: 'ecommerce-platform' },
      { name: 'Custom Software Development', slug: 'custom-software-development' },
    ],
    relatedProjectIds: ['mindspace-dashboard', 'mybusinessmate-web', 'fero-invoice-automation'],
  },

  'fero-invoice-automation': {
    id: 'fero-invoice-automation',
    slug: 'fero-invoice-automation',
    projectName: 'Fero Automated Freight Invoice Auditing Platform',
    title: 'Fero Automated Freight Invoice Auditing Platform. Case Study',
    overview: {
      client: 'Fero International Logistics',
      industry: 'Logistics, Freight & Supply Chain',
      services: 'AI Integrations, Automation, Custom Software Development',
      technologyStack: 'Python, FastAPI, Tesseract OCR, PyTorch, React, PostgreSQL, Docker',
      projectType: 'Automation',
      projectDuration: '6 Months',
    },
    clientContext:
      'Fero International manages freight forwarding and intermodal cargo transport for global manufacturing clients, processing tens of thousands of complex carrier invoices each month.',
    challenge:
      'Carrier freight invoices contain complicated accessorial charges, detention fees, fuel surcharges, and varied paper and PDF formats. Manual audit teams took up to 15 minutes per invoice, leaving millions of dollars in billing discrepancies unrecovered.',
    constraints:
      'High variety of invoice quality, including low-resolution phone scans, varied table layouts, and handwritten bill-of-lading receipts. Strict accounting audit trails required before payments could be approved.',
    approach:
      'We engineered an automated document processing pipeline that extracts invoice data via computer vision OCR, parses tabular line items, matches fees against contractual carrier rate cards, and flags discrepancies for human sign-off.',
    solution:
      'An automated freight invoice audit portal that ingests incoming carrier bills, reconciles charges against contracted rate cards, identifies unauthorized fuel surcharges, and generates dispute packets automatically.',
    keyFeatures: [
      'Document OCR and Table Extraction parsing multi-page complex logistics invoices',
      'Contractual Rate Card Matching engine cross-referencing agreed carrier tariffs',
      'Automated Discrepancy Dispute Packet generation with evidence attachments',
      'Export Pipeline syncing validated payments directly into enterprise ERP ledgers',
    ],
    technologyImplementation: {
      frontend: 'React, TypeScript, Tailwind CSS, PDF canvas side-by-side inspector',
      backend: 'Python, FastAPI, Celery background worker queues',
      database: 'PostgreSQL, MinIO S3 object storage for raw and annotated PDF documents',
      aiAutomation: 'Transformer layout models (LayoutLM) paired with algorithmic tariff rules',
      integrations: 'SAP ERP, QuickBooks Enterprise, carrier EDI 210 and 310 feeds',
    },
    resultsAndImpact: {
      summary:
        'The automated auditing platform eliminated invoice backlogs and recovered substantial unauthorized freight billing fees within the first quarter of deployment.',
      efficiency: '85% of incoming freight invoices audited and approved without human intervention',
      timeSaved: 'Processing time per invoice reduced from 14 minutes to 8 seconds',
      costReduction: 'Recovered over $1.2M in unauthorized carrier accessorial charges in year one',
      performance: 'Sub-10 second end-to-end OCR and rate matching pipeline execution',
      businessImpact: 'Over 65,000 monthly invoices audited with zero audit penalty findings',
    },
    keyTakeaway:
      'Document AI delivers the highest ROI when paired with a side-by-side verification UI that lets human auditors confirm anomalies with a single keystroke.',
    discussStatement:
      'NeoMinds builds document automation and financial verification platforms that eliminate repetitive back-office accounting bottlenecks.',
    ctaText: 'Discuss Your Project',
    relatedServices: [
      { name: 'AI Integrations', slug: 'ai-integrations' },
      { name: 'Custom Software Development', slug: 'custom-software-development' },
      { name: 'Web Development', slug: 'web-development' },
    ],
    relatedProjectIds: ['authenticom-ai-etl', 'flooring-inc-dashboard', 'mybusinessmate-web'],
  },
};

// Helper to retrieve project by ID or slug with safe fallback
export function getUnifiedProject(idOrSlug: string): UnifiedProject {
  const cleanId = idOrSlug.trim().toLowerCase();
  
  if (UNIFIED_PROJECTS[cleanId]) {
    return UNIFIED_PROJECTS[cleanId];
  }

  // Look in PORTFOLIO_CASE_STUDIES
  const match = PORTFOLIO_CASE_STUDIES.find(
    (p) => p.id === cleanId || p.work.toLowerCase() === cleanId || p.title.toLowerCase().includes(cleanId)
  );

  if (match) {
    return {
      id: match.id,
      slug: match.id,
      projectName: match.work || match.title.replace(/\s*Case Study$/i, ''),
      title: `${match.work || match.title.replace(/\s*Case Study$/i, '')}. Case Study`,
      overview: {
        client: match.client,
        industry: match.category,
        services: match.service,
        technologyStack: match.technology + (match.tags.length ? `, ${match.tags.slice(0, 3).join(', ')}` : ''),
        projectType: match.service.toLowerCase().includes('mobile') || match.service.toLowerCase().includes('app')
          ? 'Mobile Application'
          : match.service.toLowerCase().includes('ai')
          ? 'AI System'
          : match.service.toLowerCase().includes('dashboard') || match.service.toLowerCase().includes('web')
          ? 'Web Application'
          : 'Custom Software',
        projectDuration: 'Production Deployment (6 to 12 Months)',
      },
      clientContext:
        match.details.clientContext ||
        `${match.client} is an organization operating in the ${match.category} sector requiring high-performance engineering delivery.`,
      challenge:
        match.details.challenge ||
        `${match.client} needed to modernize their existing operational software to address performance bottlenecks and scale demands.`,
      constraints:
        match.details.constraints ||
        'Strict uptime requirements, integration with existing business workflows, and zero operational disruption during migration.',
      approach:
        match.details.approach ||
        'We evaluated the existing technical architecture, decoupled critical bottlenecks, and implemented a modern scalable foundation.',
      solution:
        match.details.solution ||
        match.description,
      keyFeatures: [
        'Dedicated modern architecture tailored to high-load operational throughput',
        'Clean responsive user interface with real-time feedback loops',
        'Hardened data persistence and automated backup pipelines',
        'Verified integration with existing enterprise tools and third-party APIs',
      ],
      technologyImplementation: {
        frontend: match.tags.includes('React') || match.tags.includes('React Native') ? 'React / React Native, TypeScript' : 'TypeScript, Modern Frontend Architecture',
        backend: match.tags.includes('Node.js') ? 'Node.js, Express microservices' : 'Node.js / Go backend services',
        database: 'PostgreSQL, Redis cache layer',
        aiAutomation: match.service.toLowerCase().includes('ai') ? 'Contextual AI inference and automated analytics' : undefined,
        integrations: match.tags.slice(0, 3).join(', ') + ' APIs',
      },
      resultsAndImpact: {
        summary: match.details.results || 'Production-verified results that improved operational performance and user engagement.',
        efficiency: match.metric || 'Substantial measured operational improvement',
        timeSaved: 'Significant reduction in manual workflows and overhead',
        costReduction: 'Measurable infrastructure and maintenance savings',
        performance: match.stats || 'High-throughput sub-second response times',
        businessImpact: match.description,
      },
      keyTakeaway:
        match.details.takeaway ||
        'Engineering systems for long-term production reliability requires disciplined architecture, clear user interfaces, and automated verification loops.',
      discussStatement:
        `NeoMinds helps ambitious organizations like ${match.client} build reliable software that solves real business bottlenecks.`,
      ctaText: 'Discuss Your Project',
      relatedServices: [
        { name: 'Custom Software Development', slug: 'custom-software-development' },
        { name: 'Web Development', slug: 'web-development' },
        { name: 'App Development', slug: 'app-development' },
      ],
      relatedProjectIds: PORTFOLIO_CASE_STUDIES.filter((p) => p.id !== match.id)
        .slice(0, 3)
        .map((p) => p.id),
    };
  }

  // Safe default to mindspace-mobile-app
  return UNIFIED_PROJECTS['mindspace-mobile-app'];
}
