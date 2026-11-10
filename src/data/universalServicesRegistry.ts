import { UniversalServiceData, ServiceCategory, ServiceSignatureData } from '../types/service';
import { getCaseStudiesForFamily } from './caseStudiesData';
import { SERVICES_DATA, ServiceData } from './servicesData';
import { getCapabilityStyleForService } from './capabilityStyles';
import { ALL_SERVICES_ENRICHMENT } from './serviceEnrichments';


// Map signature modules based on the prompt's exact 28 service mapping rules
export const getSignatureForService = (slug: string, title: string): ServiceSignatureData => {
  switch (slug) {
    // 1. Software Development
    case 'software-development':
      return {
        type: 'architectureDiagram',
        badge: 'Enterprise Architecture',
        title: 'High-Throughput Distributed Software Topology',
        description: 'Multi-region decoupled microservices engineered for zero data-drift, sub-second transaction routing, and continuous resilience.',
        steps: [
          { number: '01', title: 'API Ingestion & Mesh', desc: 'gRPC & REST gateways with OAuth2/OIDC, intelligent rate limiting, and circuit breaking.', badge: 'Edge Gateway', color: '#fe6200', details: ['Sub-15ms overhead', 'Distributed tracing'] },
          { number: '02', title: 'Event Sourcing Bus', desc: 'Apache Kafka & RabbitMQ event streams decoupling domain state transitions without locking.', badge: 'Event Bus', color: '#fe6200', details: ['Zero message loss', 'Idempotent consumer groups'] },
          { number: '03', title: 'Stateless Application Pods', desc: 'Containerized Go & Node.js services auto-scaling across multi-zone Kubernetes clusters.', badge: 'Compute Layer', color: '#10b981', details: ['Automated canary rollout', 'Horizontal pod autoscaling'] },
          { number: '04', title: 'Polyglot Persistence Layer', desc: 'PostgreSQL primary-replica clusters with Redis caching and automated Flyway migrations.', badge: 'Data Tier', color: '#f59e0b', details: ['Automated read sharding', 'Encrypted backups'] },
        ],
        highlightCard: { title: 'Verified Architecture SLA', value: '99.99%', label: 'Availability', detail: 'Zero unmanaged single points of failure with multi-region failover.' },
      };

    // 2. AI Development
    case 'ai-development':
      return {
        type: 'pipelineVisualization',
        badge: 'AI Engineering Lifecycle',
        title: 'Full-Stack Model Training & Inference Pipeline',
        description: 'From enterprise dataset preparation and fine-tuning to low-latency edge deployment and automated drift monitoring.',
        steps: [
          { number: '01', title: 'Data Cleaning & Vectorization', desc: 'Automated extraction of enterprise documents into dense semantic embeddings stored in pgvector.', badge: 'Data Prep', color: '#fe6200', details: ['Hybrid chunking', 'Embedding generation'] },
          { number: '02', title: 'Model Adaptation & Quantization', desc: 'PEFT / LoRA fine-tuning and 4-bit/8-bit quantization for high-speed local GPU hosting.', badge: 'Model Ops', color: '#ec4899', details: ['vLLM acceleration', 'Custom prompt tuning'] },
          { number: '03', title: 'Safety Guardrails & Context', desc: 'Strict NeMo guardrails enforcing PII sanitization and zero unauthorized prompt injection.', badge: 'Security Boundary', color: '#22c55e', details: ['Factuality scoring', 'PII masking'] },
          { number: '04', title: 'Telemetry & Evaluation Ops', desc: 'Continuous automated evaluation with Ragas benchmarks to monitor response accuracy over time.', badge: 'Observability', color: '#fe6200', details: ['Real-time token latency', 'Drift alerts'] },
        ],
        highlightCard: { title: 'Evaluation Benchmark', value: '98.4%', label: 'Factuality Grounding', detail: 'Strict context grounding ensures zero hallucinations on internal technical data.' },
      };

    // 3. Mobile App Development
    case 'mobile-app-development':
      return {
        type: 'lifecycleDiagram',
        badge: 'Mobile Product Journey',
        title: 'From UX Prototype to 5-Star App Store Production',
        description: 'Human-centered mobile architectures built natively with Swift, Kotlin, and React Native for offline-first resilience.',
        steps: [
          { number: '01', title: 'Interactive UX & Human Design', desc: 'High-fidelity Figma prototypes verified through tactile micro-interactions and accessibility testing.', badge: 'Design', color: '#fe6200', details: ['WCAG 2.1 AA compliance', 'Design tokens'] },
          { number: '02', title: 'Offline-First Local Database', desc: 'Encrypted SQLite / WatermelonDB synchronizing in background with conflict-free CRDT resolution.', badge: 'Data Sync', color: '#10b981', details: ['Zero data loss', 'Instant optimistic UI'] },
          { number: '03', title: 'Native Platform Engineering', desc: 'Deep iOS & Android platform bridges for biometric sensors, push notification queues, and BLE.', badge: 'Platform Core', color: '#f59e0b', details: ['FaceID / TouchID', 'Background tasks'] },
          { number: '04', title: 'Automated CI/CD & Fastlane', desc: 'Automated test suites compiling beta builds to TestFlight and Google Play Console on every commit.', badge: 'Release Ops', color: '#fe6200', details: ['Automated screenshots', 'Zero-touch release'] },
        ],
        highlightCard: { title: 'User Performance', value: '60 FPS', label: 'Silky Rendering', detail: 'Memory optimized rendering with sub-100ms cold app launch.' },
      };

    // 4. Web & CMS Development
    case 'web-cms-development':
      return {
        type: 'architectureDiagram',
        badge: 'Headless Content Architecture',
        title: 'Modern Headless CMS & Edge-Rendered Web Topology',
        description: 'Decoupled content authoring paired with static edge generation (SSG/ISR) for ultra-fast global load times.',
        steps: [
          { number: '01', title: 'Structured Content Repository', desc: 'Sanity / Strapi headless schemas with live previews and role-based publishing permissions.', badge: 'Content Hub', color: '#f43f5e', details: ['Modular page builders', 'Localization suites'] },
          { number: '02', title: 'GraphQL & REST API Layer', desc: 'Cached content delivery networks serving sub-50ms serialized responses globally.', badge: 'Edge CDN', color: '#fe6200', details: ['Smart revalidation', 'Webhook triggers'] },
          { number: '03', title: 'Incremental Hybrid Rendering', desc: 'Next.js & Vite applications pre-rendering static routes with real-time dynamic hydrations.', badge: 'Frontend Core', color: '#10b981', details: ['Zero layout shift (CLS)', 'Sub-second LCP'] },
          { number: '04', title: 'SEO & Analytics Instrumentation', desc: 'Automated schema markup, dynamic OpenGraph generation, and privacy-compliant analytics.', badge: 'Growth Ops', color: '#eab308', details: ['100 Lighthouse score', 'Structured data'] },
        ],
        highlightCard: { title: 'Core Web Vitals', value: '100', label: 'Desktop Lighthouse', detail: 'Sub-second first contentful paint across global edge server regions.' },
      };

    // 5. Ecommerce Development
    case 'ecommerce-development':
      return {
        type: 'workflowDiagram',
        badge: 'Commerce Ecosystem',
        title: 'High-Volume Omnichannel Commerce Flow',
        description: 'Engineered for flash-sales, zero-checkout-friction, and deep ERP/WMS order synchronization.',
        steps: [
          { number: '01', title: 'Instant Storefront Discovery', desc: 'Sub-second catalog faceted search with Redis caching and Algolia / Meilisearch indexing.', badge: 'Storefront', color: '#fe6200', details: ['Instant type-ahead', 'Dynamic merchandising'] },
          { number: '02', title: '1-Click Checkout Engine', desc: 'Tokenized payments supporting Stripe, Apple Pay, PayPal, and regional alternate payment methods.', badge: 'Checkout', color: '#10b981', details: ['PCI-DSS Level 1', 'Sub-3-second checkout'] },
          { number: '03', title: 'Real-Time Inventory Locks', desc: 'Distributed Redis lock allocations preventing overselling during extreme flash-sale traffic spikes.', badge: 'Inventory Core', color: '#f59e0b', details: ['High concurrency locks', 'Auto timeout rollback'] },
          { number: '04', title: 'Automated ERP / WMS Sync', desc: 'Bi-directional webhooks pushing orders directly to fulfillment centers, 3PLs, and NetSuite.', badge: 'Logistics Sync', color: '#fe6200', details: ['Instant label generation', 'Tracking webhooks'] },
        ],
        highlightCard: { title: 'Cart Optimization', value: '+28%', label: 'Checkout Conversion', detail: 'Frictionless multi-currency checkout designed for highest mobile completion.' },
      };

    // 6. DevOps
    case 'devops':
      return {
        type: 'pipelineVisualization',
        badge: 'CI/CD & Cloud Pipeline',
        title: 'Zero-Downtime GitOps Deployment Lifecycle',
        description: 'Infrastructure as Code (IaC) orchestrating automated vulnerability checks, ephemeral previews, and multi-cloud Kubernetes clusters.',
        steps: [
          { number: '01', title: 'Code Commit & SAST Scan', desc: 'GitHub Actions running linters, automated test suites, and Snyk / Trivy vulnerability scanners.', badge: 'Pre-Merge Gate', color: '#fe6200', details: ['Dependency audits', 'Secret leak prevention'] },
          { number: '02', title: 'Deterministic Container Build', desc: 'Multi-stage Docker builds creating minimal, rootless container images published to private registries.', badge: 'Image Registry', color: '#fe6200', details: ['Distroless base images', 'Cosign image signing'] },
          { number: '03', title: 'GitOps ArgoCD Synchronization', desc: 'Declarative Kubernetes cluster sync with automated blue/green traffic shifts and instant rollbacks.', badge: 'Cluster Deploy', color: '#10b981', details: ['Zero-downtime cutover', 'Canary validation'] },
          { number: '04', title: 'Prometheus & Grafana Observability', desc: 'Full-stack OpenTelemetry instrumentation alerting on latency anomalies and CPU/memory saturation.', badge: 'Observability', color: '#f59e0b', details: ['SLO tracking', 'Sub-1-min incident alerts'] },
        ],
        highlightCard: { title: 'Deployment Velocity', value: '15m', label: 'Commit to Production', detail: '100% automated release pipeline with zero human deployment friction.' },
      };

    // 7. AI Agents
    case 'ai-agents':
      return {
        type: 'multiAgentArchitecture',
        badge: 'Agent Architecture',
        title: 'Autonomous Tool-Calling & Reasoning Engine',
        description: 'Multi-step goal execution with recursive planning, sandboxed code execution, and persistent memory stores.',
        steps: [
          { number: '01', title: 'User Objective & Intent Decomp', desc: 'Decomposing high-level user instructions into directed acyclic execution graphs (DAGs).', badge: 'Planner Agent', color: '#fe6200', details: ['Goal breakdown', 'Constraint validation'] },
          { number: '02', title: 'Dynamic Tool Discovery & Execution', desc: 'Invoking internal APIs, SQL databases, search engines, and web scrapers with strict parameter typing.', badge: 'Tool Execution', color: '#fe6200', details: ['Sandboxed runtimes', 'Schema validation'] },
          { number: '03', title: 'Episodic & Semantic Memory', desc: 'Storing session history and user preferences in vector memory for long-horizon context retention.', badge: 'Memory Layer', color: '#10b981', details: ['Working context window', 'Long-term retrieval'] },
          { number: '04', title: 'Reflective Self-Correction', desc: 'Evaluating tool output against goal criteria and re-planning automatically if an exception occurs.', badge: 'Evaluation Loop', color: '#f59e0b', details: ['Auto-retry with new params', 'Human-in-the-loop escalation'] },
        ],
        highlightCard: { title: 'Autonomy Reliability', value: '94.2%', label: 'Zero-Intervention Completion', detail: 'Complex multi-step corporate workflows executed autonomously from start to finish.' },
      };

    // 8. AI Automations
    case 'ai-automations':
      return {
        type: 'workflowDiagram',
        badge: 'Automation Flow',
        title: 'Intelligent Decision & Back-Office Automation',
        description: 'Replacing manual copy-paste spreadsheet data entry with deterministic event-driven AI pipelines.',
        steps: [
          { number: '01', title: 'Multi-Channel Event Triggers', desc: 'Listening to inbound emails, webhooks, ERP events, and cloud bucket uploads in real time.', badge: 'Ingestion Trigger', color: '#fe6200', details: ['Kafka streams', 'Email parser webhooks'] },
          { number: '02', title: 'Multimodal Document Extraction', desc: 'Extracting line items, invoice values, and contract clauses with OCR and LLM schema structuring.', badge: 'AI Extraction', color: '#fe6200', details: ['Zero-shot OCR', 'JSON schema output'] },
          { number: '03', title: 'Deterministic Business Rules', desc: 'Validating amounts against purchase order databases and flagging anomalies exceeding tolerance limits.', badge: 'Rule Engine', color: '#f59e0b', details: ['Tolerance validation', 'Sanity checks'] },
          { number: '04', title: 'Autonomous System Updating', desc: 'Posting validated entries directly into Salesforce, SAP, or QuickBooks with audit timestamps.', badge: 'ERP Writeback', color: '#10b981', details: ['Immutable audit logs', 'Manager notification'] },
        ],
        highlightCard: { title: 'Operational Efficiency', value: '80%', label: 'Manual Time Eliminated', detail: 'Routine back-office processing cut from 3 days to under 45 seconds.' },
      };

    // 9. Chatbot & Video Bot Development
    case 'chatbot-videobot':
      return {
        type: 'workflowDiagram',
        badge: 'Conversational Journey',
        title: 'Multimodal Interactive Dialogue Pipeline',
        description: 'Instant conversational experiences across text chat and real-time photorealistic interactive video streaming.',
        steps: [
          { number: '01', title: 'Speech / Text Ingestion', desc: 'Sub-200ms Whisper voice transcription and omnichannel text chat message processing.', badge: 'Audio / Text Ingest', color: '#fe6200', details: ['Noise cancellation', 'Language detection'] },
          { number: '02', title: 'Intent Classification & Memory', desc: 'Routing inquiries between customer support FAQs, live order lookups, and escalation squads.', badge: 'Context Brain', color: '#fe6200', details: ['Tone analysis', 'Session state tracking'] },
          { number: '03', title: 'Sub-Second Response Synthesis', desc: 'Grounding answers in verified enterprise knowledge bases with source citation verification.', badge: 'Response Engine', color: '#10b981', details: ['Streaming tokens', 'Zero hallucination filter'] },
          { number: '04', title: 'WebRTC Photorealistic Avatar Stream', desc: 'Streaming lip-synced video avatars with sub-500ms latency directly to mobile and browser viewports.', badge: 'Video Avatar', color: '#ec4899', details: ['H.264 / WebRTC', 'Hyper-realistic facial sync'] },
        ],
        highlightCard: { title: 'Response Latency', value: '< 400ms', label: 'Voice-to-Speech Lag', detail: 'Natural human conversational cadence without awkward latency pauses.' },
      };

    // 10. Analytics Dashboard
    case 'analytics-dashboard':
      return {
        type: 'dashboardShowcase',
        badge: 'Dashboard Architecture',
        title: 'Real-Time Operational Intelligence Architecture',
        description: 'Sub-second analytical queries across billions of rows powered by ClickHouse, Apache Pinot, and reactive visual components.',
        steps: [
          { number: '01', title: 'Columnar Streaming Storage', desc: 'Ingesting millions of events per minute into ClickHouse and TimescaleDB with instant materialization.', badge: 'Data Engine', color: '#f59e0b', details: ['Sub-100ms aggregation', 'High compression'] },
          { number: '02', title: 'Semantic Metric Aggregations', desc: 'Defining standardized business metric equations (ARR, churn, latency) centrally for 100% data consistency.', badge: 'Metric Layer', color: '#fe6200', details: ['Cube.js semantic store', 'Automated caching'] },
          { number: '03', title: 'Reactive Canvas Visualizations', desc: 'High-density WebGL and Canvas data charts rendering 500k data points at smooth 60fps.', badge: 'UI Engine', color: '#10b981', details: ['Custom drilldowns', 'Multi-tenant filters'] },
          { number: '04', title: 'Automated Anomaly Alerting', desc: 'Machine learning algorithms detecting statistical outliers and dispatching instant Slack/PagerDuty alerts.', badge: 'Alert Engine', color: '#ef4444', details: ['Predictive forecasting', 'Webhook triggers'] },
        ],
        highlightCard: { title: 'Query Velocity', value: '< 80ms', label: 'Dashboard Load Time', detail: 'Real-time aggregations across 100M+ database rows without pre-calculated lag.' },
      };

    // 11. Technical Support
    case 'technical-support':
      return {
        type: 'lifecycleDiagram',
        badge: 'Support Lifecycle',
        title: '24/7/365 Enterprise SLA & Incident Response',
        description: 'Multi-tiered infrastructure monitoring, automated triage, and guaranteed sub-15-minute response times for critical outages.',
        steps: [
          { number: '01', title: 'Continuous Synthetic Monitoring', desc: 'Automated global health checks probing API endpoints, database connections, and SSL certificates every 30s.', badge: 'Telemetry', color: '#10b981', details: ['Global edge probes', 'Heartbeat sensors'] },
          { number: '02', title: 'Sub-15m P1 Incident Triage', desc: 'Immediate paging of Tier-3 site reliability engineers into dedicated war rooms with live status pages.', badge: 'Incident Triage', color: '#ef4444', details: ['Sub-15m guaranteed SLA', 'Executive escalation'] },
          { number: '03', title: 'Root Cause Hotfix & Deployment', desc: 'Executing verified operational runbooks, rolling back faulty changes, or deploying rapid container patches.', badge: 'Resolution', color: '#fe6200', details: ['Isolated canary hotfix', 'Immediate smoke testing'] },
          { number: '04', title: 'Post-Mortem & Preventative Hardening', desc: 'Delivering blameless post-mortem documentation with preventative architectural improvements to eliminate recurrence.', badge: 'Hardening', color: '#fe6200', details: ['Full incident timeline', 'Infrastructure hardening'] },
        ],
        highlightCard: { title: 'Guaranteed SLA', value: '< 15m', label: 'P1 Incident Response', detail: '24/7 dedicated senior engineering roster actively monitoring your platform.' },
      };

    // 12. Digital Banking
    case 'digital-banking':
      return {
        type: 'transactionFlow',
        badge: 'Core Banking Ecosystem',
        title: 'High-Availability Ledger & Open Banking Topology',
        description: 'Immutable double-entry balance ledgers, event-sourced accounts, and sub-second ISO 20022 clearing integrations.',
        steps: [
          { number: '01', title: 'Biometric Auth & Strong SCA', desc: 'FIDO2 / WebAuthn passwordless authentication with dynamic transaction signing and step-up security.', badge: 'Customer Identity', color: '#fe6200', details: ['FIDO2 Biometrics', 'Zero credentials stored'] },
          { number: '02', title: 'Immutable Double-Entry Ledger', desc: 'PostgreSQL & CockroachDB distributed ledgers enforcing mathematical debits-equal-credits consistency.', badge: 'Ledger Core', color: '#10b981', details: ['Microsecond balance update', 'Zero ledger drift'] },
          { number: '03', title: 'Open Banking API Gateway', desc: 'Standardized PSD2 & FDX compliant gateways enabling secure third-party account aggregation and payment initiation.', badge: 'Open Banking', color: '#fe6200', details: ['OAuth 2.0 FAPI', 'Strict scope consent'] },
          { number: '04', title: 'Clearinghouse Rail Integration', desc: 'Direct ISO 20022 message pipelines routing settlements instantly through FedNow, RTP, and SEPA.', badge: 'Payment Rails', color: '#f59e0b', details: ['Instant rail settlement', 'Automated reconciliation'] },
        ],
        highlightCard: { title: 'Compliance Standard', value: '100%', label: 'PCI-DSS & SOC 2', detail: 'Continuous audit controls verifying complete financial data integrity.' },
      };

    // 13. Payment Solutions
    case 'payment-solutions':
      return {
        type: 'transactionFlow',
        badge: 'Payment Flow',
        title: 'End-to-End Payment Processing Pipeline',
        description: 'Sub-second tokenization, smart routing across multiple acquiring banks, and automated interchange optimization.',
        steps: [
          { number: '01', title: 'Client Tokenization & Card Entry', desc: 'Zero-touch client-side encryption tokenizing sensitive cardholder data before it touches internal servers.', badge: 'Card Ingestion', color: '#fe6200', details: ['PCI-DSS Level 1 scope reduction', 'Apple / Google Pay'] },
          { number: '02', title: 'Intelligent Acquirer Routing', desc: 'Dynamic routing engine selecting the acquiring bank with highest approval rate and lowest processing interchange fee.', badge: 'Smart Router', color: '#10b981', details: ['Multi-acquirer failover', 'Interchange optimization'] },
          { number: '03', title: 'Real-Time 3D Secure 2.0 Check', desc: 'Frictionless risk-based authentication evaluating behavioral telemetry to minimize cardholder checkout interruptions.', badge: '3DS 2.0 Gate', color: '#f59e0b', details: ['Liability shift protection', 'Zero checkout abandonment'] },
          { number: '04', title: 'Automated Settlement & Ledger', desc: 'Multi-currency settlement calculations with automated fee deductions and instant merchant payout scheduling.', badge: 'Settlement Engine', color: '#fe6200', details: ['Daily payout batches', 'Chargeback webhook alerts'] },
        ],
        highlightCard: { title: 'Authorization Rate', value: '+4.8%', label: 'Approval Uplift', detail: 'Smart multi-acquirer cascading recovers otherwise declined transactions automatically.' },
      };

    // 14. Lending & Credit Platforms
    case 'lending-credit-platforms':
      return {
        type: 'lifecycleDiagram',
        badge: 'Loan Lifecycle',
        title: 'Algorithmic Underwriting & Credit Servicing Workflow',
        description: 'Automated borrower onboarding, credit bureau data aggregation, algorithmic risk scoring, and loan disbursement.',
        steps: [
          { number: '01', title: 'Instant Application & KYC', desc: 'Sub-60s identity verification using document OCR, biometric liveness validation, and Plaid income verification.', badge: 'Borrower Onboarding', color: '#fe6200', details: ['Instant bank verification', 'Automated KYC / AML'] },
          { number: '02', title: 'Multi-Bureau Credit Ingestion', desc: 'Real-time API pulling of credit reports (Experian, TransUnion, Equifax) combined with cash-flow analytics.', badge: 'Data Aggregation', color: '#fe6200', details: ['Alternative credit data', 'Debt-to-income models'] },
          { number: '03', title: 'Algorithmic Risk Decisioning', desc: 'Configurable credit decision matrix evaluating risk tiers and calculating tailored interest rates in < 5 seconds.', badge: 'Underwriting Core', color: '#10b981', details: ['Automated approval rules', 'Fair lending compliance'] },
          { number: '04', title: 'Disbursement & Auto-Servicing', desc: 'Automated electronic promissory note signing and instant funds disbursement via ACH or debit rails.', badge: 'Loan Servicing', color: '#f59e0b', details: ['DocuSign e-sign', 'Automated recurring debits'] },
        ],
        highlightCard: { title: 'Origination Speed', value: '< 3m', label: 'Application to Approval', detail: 'Paperless loan processing cutting underwriting overhead by 70%.' },
      };

    // 15. Investment & Wealth Management
    case 'investment-wealth-management':
      return {
        type: 'lifecycleDiagram',
        badge: 'Wealth Lifecycle',
        title: 'Robo-Advisory & Institutional Portfolio Rebalancing',
        description: 'Algorithmic goal-based asset allocation, automated tax-loss harvesting, and real-time market data streaming.',
        steps: [
          { number: '01', title: 'Investor Profiling & Goals', desc: 'Interactive risk-tolerance assessment mapping investor horizon to diversified multi-asset model portfolios.', badge: 'Profiling', color: '#fe6200', details: ['Risk questionnaire', 'ESG preference filters'] },
          { number: '02', title: 'Automated Order Generation', desc: 'Fractional-share calculation algorithms generating rebalance orders according to target portfolio weights.', badge: 'Order Router', color: '#10b981', details: ['Fractional-share execution', 'Tax-loss harvesting'] },
          { number: '03', title: 'Brokerage & Custodian Execution', desc: 'Direct FIX protocol integrations with clearing custodians (Apex, Interactive Brokers, DriveWealth).', badge: 'Custodian Gateway', color: '#f59e0b', details: ['FIX 4.4 connections', 'Sub-second order fills'] },
          { number: '04', title: 'Real-Time Performance Reporting', desc: 'Time-weighted (TWR) and money-weighted (MWR) return calculations updated with live market price feeds.', badge: 'Client Portal', color: '#fe6200', details: ['Automated tax statements', 'Mobile portfolio tracking'] },
        ],
        highlightCard: { title: 'Assets Under Management', value: '$500M+', label: 'Supported Capital', detail: 'Institutional platform reliability tested under heavy market volatility.' },
      };

    // 16. Financial Analytics
    case 'financial-analytics':
      return {
        type: 'dashboardShowcase',
        badge: 'Financial Intelligence',
        title: 'Predictive Cash Flow & P&L Intelligence Engine',
        description: 'Automated reconciliation across multi-entity bank accounts, ERP balance sheets, and real-time runway forecasting.',
        steps: [
          { number: '01', title: 'Multi-Bank Ledger Ingestion', desc: 'Aggregating live transaction statements across 20+ banking institutions via Open Banking pipelines.', badge: 'Statement Ingestion', color: '#fe6200', details: ['Automated categorizer', 'Multi-currency conversion'] },
          { number: '02', title: 'Intelligent Account Reconciliation', desc: 'Machine learning models matching 98% of bank transactions against open customer invoices automatically.', badge: 'Reconciliation Core', color: '#10b981', details: ['Zero manual bookkeeping', 'Audit trail creation'] },
          { number: '03', title: 'Predictive Runway & Cash Forecast', desc: 'Monte Carlo simulations projecting cash balances under varied hiring, revenue, and collection scenarios.', badge: 'Forecast Engine', color: '#f59e0b', details: ['Scenario modeling', 'Working capital alerts'] },
          { number: '04', title: 'Executive KPI Reporting', desc: 'Real-time dashboard visualizations displaying Net Burn, CAC Payback, Gross Margin, and EBITDA.', badge: 'CFO Cockpit', color: '#fe6200', details: ['Automated PDF board decks', 'Slack threshold alerts'] },
        ],
        highlightCard: { title: 'Forecast Accuracy', value: '96%', label: 'Cash Flow Projection', detail: 'Accurate 90-day cash projections eliminating surprise liquidity shortages.' },
      };

    // 17. Fraud & Risk Management
    case 'fraud-risk-management':
      return {
        type: 'riskDetection',
        badge: 'Risk Detection Workflow',
        title: 'Real-Time Machine Learning Fraud Detection Engine',
        description: 'Evaluating 200+ behavioral signals in under 25ms to block account takeovers, stolen cards, and synthetic identities.',
        steps: [
          { number: '01', title: 'Device Fingerprinting & Signals', desc: 'Capturing device telemetry, IP proxy status, canvas fingerprinting, and keystroke velocity at checkout.', badge: 'Signal Capture', color: '#fe6200', details: ['Proxy / VPN detection', 'Device trust score'] },
          { number: '02', title: 'Graph Velocity Analysis', desc: 'Querying in-memory graph databases to detect multi-card testing, shared device clusters, and mule networks.', badge: 'Graph Engine', color: '#f59e0b', details: ['Neo4j / RedisGraph', 'Card velocity alerts'] },
          { number: '03', title: 'ML Risk Score (Sub-25ms)', desc: 'Ensemble XGBoost models computing a risk score from 0 to 1,000 before the payment authorization begins.', badge: 'ML Scoring', color: '#ef4444', details: ['Sub-25ms inference latency', 'Zero false positive tuning'] },
          { number: '04', title: 'Automated Action / Triage', desc: 'Allowing clean transactions, prompting step-up 2FA for medium risk, and auto-blocking fraudulent attempts.', badge: 'Enforcement Gate', color: '#10b981', details: ['Chargeback reduction', 'Analyst review queue'] },
        ],
        highlightCard: { title: 'Fraud Mitigation', value: '-85%', label: 'Chargeback Reduction', detail: 'Significant reduction in fraud losses while maintaining 99.7% approval for good users.' },
      };

    // 18. Healthcare Management Software
    case 'healthcare-management-software':
      return {
        type: 'careJourney',
        badge: 'Clinical Operations',
        title: 'Enterprise Hospital Information System (HIS) Topology',
        description: 'HIPAA-compliant clinical operations connecting EHR/EMR records, bed management, billing, and pharmacy workflows.',
        steps: [
          { number: '01', title: 'Patient Registration & Identity', desc: 'Standardized Master Patient Index (MPI) deduplication preventing duplicate medical records across facilities.', badge: 'Master Patient Index', color: '#fe6200', details: ['Biometric check-in', 'Insurance eligibility check'] },
          { number: '02', title: 'HL7 & FHIR Interoperability', desc: 'Bi-directional bridges translating clinical events between Epic, Cerner, and specialized department software.', badge: 'Interoperability', color: '#10b981', details: ['FHIR v4 Resources', 'HL7 v2 MLLP pipelines'] },
          { number: '03', title: 'Clinical Charting & E-Prescribe', desc: 'Physician order entry (CPOE) with automated allergy alerts and drug-to-drug interaction safeguards.', badge: 'Clinical Core', color: '#fe6200', details: ['Surescripts integration', 'Structured clinical notes'] },
          { number: '04', title: 'Automated Revenue Cycle & Claims', desc: 'Generating clean 837P/837I insurance claims with automated ICD-10/CPT coding checks before submission.', badge: 'Revenue Cycle', color: '#f59e0b', details: ['Claims scrubbing', 'HIPAA 5010 transactions'] },
        ],
        highlightCard: { title: 'Clinical Compliance', value: '100%', label: 'HIPAA & HITECH', detail: 'End-to-end encrypted medical data stores with strict BAA-backed architecture.' },
      };

    // 19. Telemedicine Platforms
    case 'telemedicine-platforms':
      return {
        type: 'careJourney',
        badge: 'Virtual Care Journey',
        title: 'HIPAA-Compliant WebRTC Teleconsultation Pipeline',
        description: 'End-to-end encrypted video care with virtual waiting rooms, screen sharing, live vitals, and electronic prescriptions.',
        steps: [
          { number: '01', title: 'Smart Scheduling & Triage', desc: 'Intelligent appointment booking matching patient symptoms with available state-licensed clinical specialists.', badge: 'Patient Booking', color: '#fe6200', details: ['Multi-timezone calendar', 'Symptom intake questionnaire'] },
          { number: '02', title: 'Virtual Waiting Room & Consent', desc: 'Automated device audio/video check and electronic telehealth consent signature before physician connects.', badge: 'Pre-Visit Check', color: '#fe6200', details: ['WebRTC pre-flight check', 'Digital consent signature'] },
          { number: '03', title: 'P2P Encrypted Video Consultation', desc: 'HD video consultation with AES-256 peer-to-peer encryption, dual-camera inspection, and in-call chat.', badge: 'Encrypted Video', color: '#10b981', details: ['Zero call recording leakage', 'Adaptive bitrate for low bandwidth'] },
          { number: '04', title: 'Clinical Summary & E-Prescribing', desc: 'Automated visit summary generated into patient EHR with electronic prescription sent directly to pharmacy.', badge: 'Post-Visit Care', color: '#f59e0b', details: ['Surescripts dispatch', 'Automated follow-up reminders'] },
        ],
        highlightCard: { title: 'Call Reliability', value: '99.95%', label: 'Session Completion', detail: 'Adaptive WebRTC streaming ensures zero dropped calls even on poor mobile networks.' },
      };

    // 20. Patient Engagement
    case 'patient-engagement':
      return {
        type: 'careJourney',
        badge: 'Patient Lifecycle',
        title: 'Omnichannel Care Journey & Adherence Engine',
        description: 'Personalized patient portals, automated SMS care reminders, wearable vitals synchronization, and secure messaging.',
        steps: [
          { number: '01', title: 'Personalized Care Onboarding', desc: 'Intuitive mobile-first portal onboarding customized to patient chronic condition protocols and language.', badge: 'Portal Onboarding', color: '#fe6200', details: ['Multi-language support', 'Accessibility for seniors'] },
          { number: '02', title: 'Automated Care Protocol Reminders', desc: 'Automated SMS, push, and voice reminders for medication schedules, physical therapy, and lab tests.', badge: 'Adherence Engine', color: '#10b981', details: ['Medication trackers', 'Custom interval reminders'] },
          { number: '03', title: 'Connected Health Device Sync', desc: 'Bluetooth & Apple HealthKit / Google Health Connect sync capturing daily blood pressure and glucose readings.', badge: 'Remote Vitals', color: '#f59e0b', details: ['Continuous vitals tracking', 'Clinical anomaly alerts'] },
          { number: '04', title: 'Secure Physician Messaging', desc: 'Asynchronous HIPAA-compliant messaging allowing patients to clarify treatment plans without office visits.', badge: 'Care Team Chat', color: '#fe6200', details: ['End-to-end encrypted', 'Clinical triage queue'] },
        ],
        highlightCard: { title: 'Patient Adherence', value: '+45%', label: 'Protocol Compliance', detail: 'Significant uplift in chronic disease management and post-op protocol adherence.' },
      };

    // 21. Medical AI Solutions
    case 'medical-ai-solutions':
      return {
        type: 'careJourney',
        badge: 'Clinical AI Workflow',
        title: 'Diagnostic Decision-Support & Medical NLP Pipeline',
        description: 'Assisting radiologists and physicians through automated lesion detection, radiology report extraction, and chart review.',
        steps: [
          { number: '01', title: 'DICOM Image & Chart Ingestion', desc: 'Secure anonymization and ingestion of high-resolution DICOM imaging series and unstructured physician clinical notes.', badge: 'Data Ingestion', color: '#cf5000', details: ['HIPAA de-identification', 'DICOM metadata parsing'] },
          { number: '02', title: 'Deep Learning Visual Inference', desc: 'Convolutional neural networks screening MRI/CT scans for pulmonary nodules, fractures, and anomalies.', badge: 'Diagnostic AI', color: '#fe6200', details: ['Heatmap anomaly overlay', 'Sub-second image processing'] },
          { number: '03', title: 'Physician Review & Verification', desc: 'Presenting AI findings as transparent decision-support overlays requiring certified physician sign-off.', badge: 'Clinical Oversight', color: '#10b981', details: ['Explainable AI heatmaps', 'Physician override logging'] },
          { number: '04', title: 'Structured Report Generation', desc: 'Generating standardized RadLex / ICD-10 diagnostic reports synchronized directly with hospital PACS / RIS.', badge: 'Report Sync', color: '#f59e0b', details: ['Automated draft generation', 'Zero-click PACS writeback'] },
        ],
        highlightCard: { title: 'Diagnostic Support', value: '98.8%', label: 'Anomaly Screening Accuracy', detail: 'Trained on validated clinical datasets to accelerate radiologist review by 40%.' },
      };

    // 22. Healthcare Analytics
    case 'healthcare-analytics':
      return {
        type: 'dashboardShowcase',
        badge: 'Healthcare Intelligence',
        title: 'Population Health & Clinical Outcome Intelligence',
        description: 'Aggregating clinical EHR data, claims history, and lab results to identify high-risk patient cohorts and reduce hospital readmissions.',
        steps: [
          { number: '01', title: 'Heterogeneous Clinical Data Lake', desc: 'Aggregating structured and unstructured data across disparate EHR systems into unified OMOP Common Data Models.', badge: 'Data Lakehouse', color: '#fe6200', details: ['OMOP CDM standardization', 'De-identification pipelines'] },
          { number: '02', title: 'Risk Stratification Algorithms', desc: 'Machine learning models scoring patients based on 30-day readmission risk and chronic complication probabilities.', badge: 'Predictive Modeling', color: '#f59e0b', details: ['LACE+ readmission scores', 'Comorbidity indicators'] },
          { number: '03', title: 'Clinical Operations Cockpit', desc: 'Interactive dashboards tracking bed occupancy, surgery room utilization, physician burnout, and clinical KPIs.', badge: 'Operations Console', color: '#10b981', details: ['Real-time capacity tracking', 'Staffing optimization'] },
          { number: '04', title: 'Quality Measures & HEDIS Reporting', desc: 'Automated calculation of CMS Quality Stars, HEDIS, and MIPS compliance metrics for maximum payer reimbursements.', badge: 'Regulatory Reporting', color: '#fe6200', details: ['Automated CMS submissions', 'Value-based care metrics'] },
        ],
        highlightCard: { title: 'Readmission Reduction', value: '-32%', label: '30-Day Readmissions', detail: 'Early clinical intervention triggers for high-risk chronic patient populations.' },
      };

    // 23. Healthcare Automation
    case 'healthcare-automation':
      return {
        type: 'workflowDiagram',
        badge: 'Healthcare Automation',
        title: 'Prior Authorization & Clinical Workflow Automation',
        description: 'Eliminating the manual administrative burden of insurance prior authorizations, referral routing, and medical chart collation.',
        steps: [
          { number: '01', title: 'Prior Authorization Request Trigger', desc: 'Listening to physician prescription and procedure orders that require commercial insurance pre-approval.', badge: 'Order Detection', color: '#fe6200', details: ['EHR order webhook', 'Automated payer rule lookup'] },
          { number: '02', title: 'Automated Clinical Chart Collation', desc: 'AI parsing patient historical chart notes to extract relevant clinical evidence and diagnostic codes required by payer.', badge: 'Chart Synthesis', color: '#fe6200', details: ['Clinical NLP extraction', 'Attachment bundling'] },
          { number: '03', title: 'Electronic PA Portal Submission', desc: 'Submitting standardized X12 278 transactions directly into health plan approval portals via automated APIs.', badge: 'Payer Submission', color: '#f59e0b', details: ['X12 278 electronic protocol', 'Zero manual phone calls'] },
          { number: '04', title: 'Real-Time Status & EHR Callback', desc: 'Receiving instant approval confirmations and updating scheduling coordinators and patient charts automatically.', badge: 'Approval Callback', color: '#10b981', details: ['Instant patient notification', 'Zero treatment delay'] },
        ],
        highlightCard: { title: 'Approval Speed', value: '< 24h', label: 'Prior Auth Turnaround', detail: 'Prior authorization processing cut from 14 business days to under 24 hours.' },
      };

    // 24. AI Product Engineering
    case 'ai-product-engineering':
      return {
        type: 'architectureDiagram',
        badge: 'AI Product Architecture',
        title: 'End-to-End Generative SaaS Product Architecture',
        description: 'Architecting commercial AI SaaS products with streaming token interfaces, multi-tenant billing, and optimized GPU inference.',
        steps: [
          { number: '01', title: 'Product Strategy & UX Framing', desc: 'Designing native AI-first user experiences that turn complex model outputs into intuitive, actionable interfaces.', badge: 'AI UX Design', color: '#ec4899', details: ['Streaming latency UX', 'Undo/redo prompt state'] },
          { number: '02', title: 'Multi-Tenant Token Accounting', desc: 'Granular token metering, Stripe subscription billing, and user quota enforcement per workspace.', badge: 'Billing & Quotas', color: '#fe6200', details: ['Real-time token counter', 'Tiered rate limiting'] },
          { number: '03', title: 'Multi-Model Fallback Gateway', desc: 'Intelligent routing balancing prompts across Claude 3.5, GPT-4o, and private open-source models for optimal cost/speed.', badge: 'Model Router', color: '#10b981', details: ['Automatic failover', 'Prompt caching optimization'] },
          { number: '04', title: 'Continuous Model Evaluation', desc: 'Monitoring user feedback loops (thumbs up/down) to generate preference datasets for periodic fine-tuning.', badge: 'Feedback Loop', color: '#f59e0b', details: ['RLHF dataset generation', 'User retention metrics'] },
        ],
        highlightCard: { title: 'Cost Optimization', value: '-48%', label: 'Inference Cost Reduction', detail: 'Hybrid routing between open-source models and frontier APIs cuts operational bills.' },
      };

    // 25. Applied AI
    case 'applied-ai':
      return {
        type: 'pipelineVisualization',
        badge: 'AI Use-Case Pipeline',
        title: 'Enterprise AI Pilot-to-Production Pipeline',
        description: 'Pragmatic AI implementation focused on high-ROI business bottlenecks, verifiable metrics, and safe production integration.',
        steps: [
          { number: '01', title: 'High-Impact Opportunity Audit', desc: 'Evaluating corporate workflows to identify repetitive friction points with highest financial ROI potential.', badge: 'Opportunity Audit', color: '#fe6200', details: ['Feasibility matrix', 'ROI financial projection'] },
          { number: '02', title: 'Rapid 14-Day Proof-of-Concept', desc: 'Building an interactive sandbox prototype using real corporate data samples to validate accuracy and speed.', badge: '14-Day Sandbox', color: '#fe6200', details: ['Working functional prototype', 'Accuracy benchmark report'] },
          { number: '03', title: 'Production Hardening & Testing', desc: 'Connecting POC pipelines into production ERPs, securing credentials, and implementing error fallback paths.', badge: 'Hardened Integration', color: '#10b981', details: ['Fail-safe mechanisms', 'Zero disruption to BAU'] },
          { number: '04', title: 'Executive KPI Measurement', desc: 'Tracking business value delivered (hours saved, accuracy improvements, revenue acceleration) with live dashboards.', badge: 'Value Realization', color: '#f59e0b', details: ['Real-time ROI dashboard', 'Continuous fine-tuning'] },
        ],
        highlightCard: { title: 'Time to Value', value: '14 Days', label: 'Working POC Delivered', detail: 'Rapid prototype validation before committing extensive capital resources.' },
      };

    // 26. AI Agent Systems
    case 'ai-agent-systems':
      return {
        type: 'multiAgentArchitecture',
        badge: 'Multi-Agent Mesh',
        title: 'Hierarchical Multi-Agent Swarm Coordination',
        description: 'Orchestrating specialized AI agents that collaborate, debate, verify work, and execute cross-departmental operations.',
        steps: [
          { number: '01', title: 'Chief Orchestrator Agent', desc: 'Receives corporate objectives, breaks work into parallel tasks, and delegates to specialized domain sub-agents.', badge: 'Orchestrator', color: '#fe6200', details: ['Task decomposition', 'Context routing'] },
          { number: '02', title: 'Specialized Worker Agents', desc: 'Domain agents (Code Engineer, Data Analyst, Content Reviewer) executing tools within their strict expertise.', badge: 'Worker Squad', color: '#fe6200', details: ['Custom system prompts', 'Dedicated toolsets'] },
          { number: '03', title: 'Adversarial Verification Agent', desc: 'Dedicated auditor agent inspecting worker agent outputs against quality criteria, catching errors before completion.', badge: 'Critic Gate', color: '#ef4444', details: ['Syntax & fact checking', 'Strict acceptance criteria'] },
          { number: '04', title: 'Synchronized State Consensus', desc: 'Aggregating multi-agent deliverables into a unified final corporate artifact with clear provenance logs.', badge: 'Consensus Store', color: '#10b981', details: ['Audit trace logs', 'Final state writeback'] },
        ],
        highlightCard: { title: 'Task Accuracy', value: '97.6%', label: 'Dual-Agent Verified', detail: 'Adversarial agent review reduces hallucination errors to near zero.' },
      };

    // 27. Intelligent Automation
    case 'intelligent-automation':
      return {
        type: 'workflowDiagram',
        badge: 'Human + AI Workflow',
        title: 'Collaborative Human-in-the-Loop Automation',
        description: 'Combining high-speed autonomous AI task execution with structured human review thresholds for regulated decisions.',
        steps: [
          { number: '01', title: 'Continuous Task Ingestion', desc: 'Aggregating requests from customer forms, ERP records, and email queues into centralized prioritization pools.', badge: 'Task Queue', color: '#fe6200', details: ['Dynamic priority queue', 'SLA timers'] },
          { number: '02', title: 'Autonomous AI Processing', desc: 'AI models executing 90% of routine categorization, calculations, and draft generation in < 5 seconds.', badge: 'Autonomous Tier', color: '#10b981', details: ['Confidence scoring', 'Instant draft creation'] },
          { number: '03', title: 'Confidence-Based Human Gate', desc: 'Decisions with confidence scores below 95% or high financial stakes routed to human manager review consoles.', badge: 'Human Review', color: '#f59e0b', details: ['1-click approval UI', 'Differential highlight view'] },
          { number: '04', title: 'Continuous Feedback Learning', desc: 'Human corrections automatically fed into retraining datasets to make the autonomous models smarter over time.', badge: 'Continuous Tuning', color: '#fe6200', details: ['Zero loss of human expertise', 'Automated accuracy tracking'] },
        ],
        highlightCard: { title: 'Human Throughput', value: '5x', label: 'Operator Velocity', detail: 'Operators focus solely on edge cases while AI handles 90% of routine workflows.' },
      };

    // 28. Generative AI
    case 'generative-ai':
      return {
        type: 'architectureDiagram',
        badge: 'GenAI Application Stack',
        title: 'Private Enterprise RAG & Foundation Model Stack',
        description: 'Secure, zero-leakage internal knowledge retrieval with private foundation models, vector databases, and evaluation telemetry.',
        steps: [
          { number: '01', title: 'Internal Knowledge Repository Ingest', desc: 'Continuous ingestion and parsing of PDF archives, Confluence spaces, code repos, and SharePoint directories.', badge: 'Knowledge Ingest', color: '#fe6200', details: ['Automated incremental sync', 'Rich document parsing'] },
          { number: '02', title: 'Dense Vector & Keyword Hybrid Index', desc: 'Indexing embeddings with BM25 keyword search in pgvector and Qdrant for highest retrieval precision.', badge: 'Hybrid Index', color: '#fe6200', details: ['Cross-encoder re-ranking', 'Semantic chunking'] },
          { number: '03', title: 'Private Inference & Guardrails', desc: 'Running fine-tuned Llama 3.3 / Claude on dedicated private GPU clusters with strict NeMo safety fences.', badge: 'Private LLM Cluster', color: '#10b981', details: ['Zero third-party sharing', 'PII & prompt injection shields'] },
          { number: '04', title: 'Auditable Answers with Citations', desc: 'Streaming answers with direct hyperlinked page references back into internal source documentation.', badge: 'Citation Engine', color: '#f59e0b', details: ['Exact paragraph citations', 'Confidence verification'] },
        ],
        highlightCard: { title: 'Data Privacy', value: '100%', label: 'Private Isolation', detail: 'Zero data retention enterprise agreements guarantee your intellectual property is never trained on.' },
      };

    default:
      return {
        type: 'genericFlow',
        badge: 'Service Architecture',
        title: `${title} Architecture & Delivery Workflow`,
        description: 'Enterprise-grade implementation lifecycle engineered for reliability, security, and velocity.',
        steps: [
          { number: '01', title: 'Requirements & Architecture Blueprint', desc: 'Deep technical discovery, non-functional requirements mapping, and target topology design.', badge: 'Architecture', color: '#fe6200' },
          { number: '02', title: 'Agile Implementation Sprints', desc: 'Iterative two-week sprints with automated testing and continuous integration deployments.', badge: 'Build', color: '#fe6200' },
          { number: '03', title: 'Security Auditing & Load Testing', desc: 'Static analysis, penetration tests, and concurrency stress testing under simulated peak load.', badge: 'Hardening', color: '#10b981' },
          { number: '04', title: 'Production Handover & 24/7 SLA', desc: 'Zero-downtime blue/green deployment with Prometheus monitoring and dedicated engineering support.', badge: 'Production', color: '#f59e0b' },
        ],
        highlightCard: { title: 'Enterprise Standard', value: '99.99%', label: 'Availability SLA', detail: 'Engineered for zero downtime with modern distributed architectures.' },
      };
  }
};

// Map each service to its canonical family
export const getFamilyForService = (slug: string): ServiceCategory => {
  if (
    [
      'digital-banking',
      'payment-solutions',
      'lending-credit-platforms',
      'investment-wealth-management',
      'financial-analytics',
      'fraud-risk-management',
    ].includes(slug)
  ) {
    return 'Fintech';
  }

  if (
    [
      'healthcare-management-software',
      'telemedicine-platforms',
      'patient-engagement',
      'medical-ai-solutions',
      'healthcare-analytics',
      'healthcare-automation',
    ].includes(slug)
  ) {
    return 'Healthcare';
  }

  if (
    [
      'ai-product-engineering',
      'applied-ai',
      'ai-agent-systems',
      'intelligent-automation',
      'generative-ai',
    ].includes(slug)
  ) {
    return 'Enterprise AI';
  }

  return 'Core Technology';
};

// Map adjacent services in the ecosystem
export const getRelatedSlugs = (slug: string): string[] => {
  switch (slug) {
    case 'web-development':
      return ['app-development', 'custom-software-development', 'ecommerce-platform', 'cloud-based-software'];
    case 'app-development':
      return ['cross-platform-app-development', 'web-development', 'custom-software-development', 'analytics-dashboard'];
    case 'cross-platform-app-development':
      return ['app-development', 'web-development', 'custom-software-development', 'cloud-based-software'];
    case 'custom-software-development':
      return ['saas-development', 'cloud-based-software', 'ai-integrations', 'legacy-modernisation'];
    case 'ecommerce-platform':
      return ['web-development', 'custom-software-development', 'analytics-dashboard', 'cloud-based-software'];
    case 'saas-development':
      return ['custom-software-development', 'cloud-based-software', 'ai-native-software', 'analytics-dashboard'];
    case 'cloud-based-software':
      return ['saas-development', 'custom-software-development', 'legacy-modernisation', 'analytics-dashboard'];
    case 'legacy-modernisation':
      return ['custom-software-development', 'cloud-based-software', 'web-development', 'analytics-dashboard'];
    case 'ai-automations':
      return ['ai-integrations', 'ai-systems', 'ai-native-software', 'custom-software-development'];
    case 'ai-integrations':
      return ['ai-automations', 'ai-systems', 'custom-software-development', 'ai-native-software'];
    case 'ai-systems':
      return ['ai-native-software', 'ai-automations', 'ai-integrations', 'custom-software-development'];
    case 'ai-native-software':
      return ['ai-systems', 'ai-integrations', 'saas-development', 'custom-software-development'];
    case 'analytics-dashboard':
      return ['custom-software-development', 'cloud-based-software', 'custom-health-software', 'saas-development'];
    case 'custom-health-software':
      return ['app-development', 'analytics-dashboard', 'custom-software-development', 'ai-automations'];
    case 'training-as-service':
      return ['custom-software-development', 'ai-automations', 'ai-systems', 'cloud-based-software'];
    default:
      return ['custom-software-development', 'web-development', 'ai-automations', 'analytics-dashboard'];
  }
};

// Transform old or base ServiceData into the rich UniversalServiceData
export const buildUniversalService = (baseData: ServiceData): UniversalServiceData => {
  const family = getFamilyForService(baseData.slug);
  const signature = getSignatureForService(baseData.slug, baseData.title);
  const caseStudies = getCaseStudiesForFamily(family);
  const relatedSlugs = getRelatedSlugs(baseData.slug);
  const enrichment = ALL_SERVICES_ENRICHMENT[baseData.slug] || {};

  const title = enrichment.title || baseData.title;
  const shortDescription = enrichment.shortDescription || baseData.heroDescription || baseData.tagline;

  return {
    id: baseData.id,
    slug: baseData.slug,
    title,
    category: family,
    tagline: baseData.tagline,
    shortDescription,

    // 1. Breadcrumb / Eyebrow
    eyebrow: `${family} Engineering & Consulting`,

    // 2. Hero + 3. Hero Image
    hero: {
      badge: baseData.heroBadge || `${family} Engineering`,
      headline: enrichment.heroHeadline || baseData.heroHeadline || title,
      headlineHighlight: enrichment.heroHeadlineHighlight || baseData.heroHeadlineHighlight || 'Engineering',
      description: enrichment.heroDescription || baseData.heroDescription,
      heroImage:
        enrichment.heroImage ||
        baseData.heroImage ||
        (family === 'Fintech'
          ? 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop'
          : family === 'Healthcare'
          ? 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop'
          : family === 'Enterprise AI'
          ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
          : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'),
      heroImageCaption: enrichment.heroImageCaption || baseData.heroImageCaption || `${title} Production Architecture`,
      primaryCtaText: baseData.primaryCtaText || 'Book Free Consultation',
      secondaryCtaText: baseData.secondaryCtaText || 'View Case Studies',
    },

    // 3. Trust Strip
    trustPoints: baseData.trustPoints || [
      'Enterprise-grade 99.99% SLA',
      'SOC 2 Type II & ISO 27001 Aligned',
      'Cloud-Native & Highly Scalable',
      '100% IP & Source Code Transfer',
    ],
    metrics: baseData.metrics,

    // 4. Target Audience
    targetAudience: enrichment.targetAudience || baseData.targetAudience || {
      heading: `Who We Built ${title} For`,
      description: `Designed for engineering leaders and growing companies that need production-ready systems without the overhead of hiring or managing a dedicated internal division.`,
      profiles: [
        {
          role: 'CTOs & Engineering VPs',
          situation: `Facing monolithic bottlenecks, scaling constraints, or legacy technical debt that prevents the team from shipping features on schedule.`,
        },
        {
          role: 'Product Directors & Founders',
          situation: `Need to validate and launch high-reliability software with verified security and compliance before the next funding milestone or enterprise pilot.`,
        },
        {
          role: 'Operations & Tech Leads',
          situation: `Frustrated by brittle third-party integrations, manual batch jobs, and unpredictable system downtime during peak usage spikes.`,
        },
      ],
    },

    // 5. Main Problem Solved
    mainProblemSolved: enrichment.mainProblemSolved || baseData.mainProblemSolved || {
      problem: baseData.overview?.statement || `Off-the-shelf software and bloated legacy systems struggle to handle real-world scale, causing slow response times, security blindspots, and mounting maintenance costs.`,
      solution: `We engineer clean, decoupled systems designed specifically for your workload. Every component is built with strict boundary separation, automated test suites, and transparent cloud infrastructure.`,
      result: `Zero vendor lock-in, sub-second API latencies, and total intellectual property ownership from the day we write the first line of code.`,
    },

    // Strategic Overview (Editorial context)
    overview: baseData.overview || {
      statement: `Production-grade ${title} engineering designed for high availability, compliance, and sustained transaction volume.`,
      paragraphs: [
        enrichment.heroDescription || baseData.heroDescription,
        `Our senior engineering squads partner directly with your technical leadership to architect, build, and deploy production-hardened solutions tailored to your operational realities. We eliminate technical debt upfront by adhering to strict domain-driven design, clean architecture patterns, and continuous integration protocols.`,
        `From early architecture blueprints to 24/7 global hypercare, every deliverable is verified against industry benchmarks and backed by 100% intellectual property ownership transfer.`,
      ],
      keyTakeaway: `Delivers measurable operational efficiency, sub-second latency, and institutional security controls without vendor lock-in.`,
    },

    // 5. Capabilities
    capabilities: baseData.capabilities,
    capabilityStyle: getCapabilityStyleForService(baseData.slug),

    // 6. Signature Section
    signature,

    // 7. Process
    process: baseData.processSteps,

    // 8. Case Studies
    caseStudies,

    // 9. Technology & Deliverables
    techStack: baseData.techStack,
    deliverables: baseData.deliverables,

    // 10. Timeline / Duration
    timeline: enrichment.timeline || baseData.timeline || {
      totalDuration: '8 to 14 Weeks Typical Delivery',
      sprintCadence: 'Two-week agile release cycles with live staging demos and direct Slack collaboration.',
      phases: [
        {
          phase: 'Phase 1: Architecture & Technical Discovery',
          duration: 'Weeks 1–2',
          details: 'Domain boundary mapping, schema design, infrastructure blueprints, and security risk assessment.',
        },
        {
          phase: 'Phase 2: Core Engineering & Integrations',
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

    // 11. Why Choose This Service
    whyChooseThisService: enrichment.whyChooseThisService || baseData.whyChooseThisService || {
      title: `Why Engineering Leaders Pick NeoMinds TechHub for ${title}`,
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
          point: 'Production-Hardened From Day One',
          detail: 'We build for failure resilience: automated retries, circuit breakers, structured logging, and CI/CD pipelines that let you deploy on Friday afternoons without dread.',
        },
        {
          point: 'Clear Engineering Cadence',
          detail: 'Direct Slack/Teams access to the engineers building your product. Weekly sprint demos on staging and transparent Git pull requests.',
        },
      ],
    },

    // 10b. Business Outcomes
    outcomes: baseData.outcomes || [
      {
        metric: baseData.metrics[0]?.value || '99.99%',
        label: baseData.metrics[0]?.label || 'System Uptime SLA',
        description: `Eliminates unplanned downtime and guarantees reliable high-concurrency throughput under peak enterprise loads.`,
      },
      {
        metric: baseData.metrics[1]?.value || '40%',
        label: baseData.metrics[1]?.label || 'Efficiency Gain',
        description: `Automates operational workflows, eliminating redundant manual steps and human entry errors.`,
      },
      {
        metric: '100%',
        label: 'Intellectual Property Transfer',
        description: `Complete source code, cloud configuration scripts, and documentation belong entirely to your enterprise upon deployment.`,
      },
    ],

    // 14. Related Services
    relatedServiceSlugs: relatedSlugs,


    // 12. FAQ
    faqs: baseData.faqs,

    // 13. Final CTA
    cta: {
      headline: baseData.ctaHeadline || `Ready to Build Your Next ${baseData.title} Solution?`,
      description: baseData.ctaDescription || `Schedule a discovery session with a Principal Architect in ${baseData.title}. Receive an actionable architectural roadmap and proposal in 24 hours.`,
      buttonText: baseData.ctaButtonText || `Request Technical Proposal`,
    },

    // SEO
    seo: {
      metaTitle: `${baseData.title} Services | NeoMinds TechHub Enterprise Engineering`,
      metaDescription: baseData.heroDescription,
    },
  };
};

// Central master registry for all 28 services
export const UNIVERSAL_SERVICES_MAP: Record<string, UniversalServiceData> = {};

// Build master registry
for (const slug in SERVICES_DATA) {
  UNIVERSAL_SERVICES_MAP[slug] = buildUniversalService(SERVICES_DATA[slug]);
}

// Ensure both slug forms for chatbot and video bot resolve cleanly
if (UNIVERSAL_SERVICES_MAP['chatbot-videobot']) {
  UNIVERSAL_SERVICES_MAP['chatbot-video-bot-development'] = {
    ...UNIVERSAL_SERVICES_MAP['chatbot-videobot'],
    slug: 'chatbot-video-bot-development',
  };
}

