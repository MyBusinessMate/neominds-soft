export interface CaseStudyItem {
  id: string;
  category: 'Enterprise' | 'Healthcare' | 'EdTech' | 'FinTech' | 'Retail' | 'Real Estate' | 'E-commerce';
  title: string;
  client: string;
  clientLogo: string;
  service: string;
  technology: string;
  work: string;
  stats: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  highlight?: boolean;
  details: {
    clientContext: string;
    challenge: string;
    constraints: string;
    approach: string;
    solution: string;
    results: string;
    takeaway: string;
  };
}

export const PORTFOLIO_CASE_STUDIES: CaseStudyItem[] = [
  // 1. mindspace.ai - mobile app
  {
    id: 'mindspace-mobile-app',
    category: 'Healthcare',
    title: 'Mindspace.ai Mobile App Case Study',
    client: 'mindspace.ai',
    clientLogo: 'mindspace.ai',
    service: 'App Development',
    technology: 'Mobile App Development',
    work: 'mindspace.ai mobile app',
    stats: '120,000+ Active Patients',
    metric: '4.9★',
    metricLabel: 'App Store Rating',
    description:
      'HIPAA-compliant digital mental wellness app featuring interactive guided therapies, offline biometric mood tracking, and real-time clinical telehealth sessions.',
    tags: ['React Native', 'HIPAA Compliant', 'WebRTC', 'iOS & Android', 'Biometric Sync'],
    highlight: true,
    details: {
      clientContext:
        'mindspace.ai provides evidence-based mental health support and telehealth tools connecting patients with certified clinicians.',
      challenge:
        'Patients frequently dropped off due to app crashes during video sessions and sluggish offline data caching in low-connectivity areas.',
      constraints:
        'Strict HIPAA compliance, end-to-end encrypted session recordings, and zero local persistence of sensitive PHI without biometric authentication.',
      approach:
        'We designed a clean, lightweight mobile client using React Native, decoupled local SQLite caches with SQLCipher encryption, and built a resilient WebRTC signaling layer.',
      solution:
        'An iOS and Android application with offline mood tracking, automated session summaries, push reminder queues, and one-tap video consultations.',
      results:
        'Over 120,000 active patients, zero security audit findings, and a sustained 4.9-star average rating across iOS App Store and Google Play.',
      takeaway:
        'Healthcare apps succeed when clinical security protocols operate quietly behind an intuitive, distraction-free user experience.',
    },
  },

  // 2. mindspace.ai - analytic dashboard
  {
    id: 'mindspace-dashboard',
    category: 'Healthcare',
    title: 'Mindspace.ai Clinical Telemetry Dashboard',
    client: 'mindspace.ai',
    clientLogo: 'mindspace.ai',
    service: 'Analytic Dashboard',
    technology: 'Data Analytics',
    work: 'mindspace.ai dashboard',
    stats: '1.2M Patient Events / Day',
    metric: '< 45ms',
    metricLabel: 'Query Response Time',
    description:
      'Real-time clinical telemetry and analytics dashboard giving supervisory clinicians instant visibility into patient symptom trajectories and protocol adherence.',
    tags: ['Data Analytics', 'PostgreSQL', 'TimescaleDB', 'React', 'HIPAA Analytics'],
    highlight: false,
    details: {
      clientContext:
        'Clinical supervisors needed visibility into aggregated treatment outcomes across thousands of concurrent therapy programs.',
      challenge:
        'Existing reporting relied on manual CSV exports and slow relational queries that took minutes to render cohort metrics.',
      constraints:
        'All patient-identifying data had to be anonymized on the fly while retaining clinical statistical validity.',
      approach:
        'We implemented a TimescaleDB time-series ingestion pipeline feeding a specialized React analytics interface with automated rollup caching.',
      solution:
        'A high-density analytics dashboard featuring real-time patient risk indices, clinician workload distribution, and automated outcome reports.',
      results:
        'Query latency dropped from 45 seconds to under 45ms; clinical supervisors reduced administrative reporting time by 75%.',
      takeaway:
        'Time-series aggregation layers eliminate relational database bottlenecks when streaming clinical telemetry at scale.',
    },
  },

  // 3. flooring inc - analytic dashboard
  {
    id: 'flooring-inc-dashboard',
    category: 'E-commerce',
    title: 'Flooring Inc E-commerce Intelligence Dashboard',
    client: 'Flooring Inc',
    clientLogo: 'Flooring Inc',
    service: 'Analytic Dashboard',
    technology: 'Data Analytics',
    work: 'Dashboard',
    stats: '$80M+ Monitored GMV',
    metric: '+34%',
    metricLabel: 'Inventory Turnover',
    description:
      'Multi-warehouse e-commerce intelligence dashboard centralizing stock level tracking, checkout drop-off analysis, and regional product demand forecasting.',
    tags: ['Data Analytics', 'BigQuery', 'React', 'E-commerce', 'Inventory Telemetry'],
    highlight: true,
    details: {
      clientContext:
        'Flooring Inc is a national e-commerce retailer managing high-SKU inventory across multiple regional logistics hubs.',
      challenge:
        'Discrepancies between storefront checkout inventory and regional warehouse stock created frequent backorders and customer cancellations.',
      constraints:
        'Must ingest order webhooks from Shopify Plus and ERP inventory feeds without dropping messages during flash sales.',
      approach:
        'Constructed a real-time event streaming pipeline using Kafka and BigQuery connected to a customized Vite and React operational dashboard.',
      solution:
        'Unified dashboard displaying real-time SKU velocity, automated out-of-stock projections, and checkout funnel drop-off diagnostics.',
      results:
        'Backorders dropped by 62%, warehouse fulfillment velocity rose 34%, and merchandising teams saved 15 hours each week on manual stock reconciliation.',
      takeaway:
        'Real-time inventory intelligence turns passive stock data into active purchasing foresight.',
    },
  },

  // 4. dotcomweavers - ai integration
  {
    id: 'dotcomweavers-project-buddy',
    category: 'Enterprise',
    title: 'DotcomWeavers Project Buddy AI Integration',
    client: 'DotcomWeavers',
    clientLogo: 'DotcomWeavers',
    service: 'AI Integrations',
    technology: 'Artificial Intelligence',
    work: 'Project Buddy',
    stats: '3.5 hrs Saved / Engineer / Wk',
    metric: '98%',
    metricLabel: 'Sprint Context Accuracy',
    description:
      'Enterprise AI engineering companion integrated into sprint management workflows, automating pull request analysis, ticket grooming, and technical documentation.',
    tags: ['AI Integrations', 'OpenAI', 'LangChain', 'FastAPI', 'Slack API'],
    highlight: false,
    details: {
      clientContext:
        'DotcomWeavers is an established web agency running dozens of concurrent client deliverables across distributed engineering teams.',
      challenge:
        'Engineers and project managers were losing significant billable hours drafting sprint tickets, summarizing pull requests, and creating client handover docs.',
      constraints:
        'Client source code and requirements could not be used to train external foundational models; zero data retention policy strictly enforced.',
      approach:
        'Built Project Buddy, an in-house LLM orchestration agent utilizing LangChain, localized vector indexes, and secure Slack / Jira webhooks.',
      solution:
        'Engineers invoke Project Buddy to draft technical specifications, generate test cases, and create release notes directly within development chat channels.',
      results:
        'Average sprint ticket creation time dropped from 30 minutes to 3 minutes, saving 3.5 engineering hours per developer every week.',
      takeaway:
        'AI integrations deliver immediate ROI when placed directly into the existing communication tools developers use every day.',
    },
  },

  // 5. edutech - custom software (co-teacher)
  {
    id: 'edutech-co-teacher',
    category: 'EdTech',
    title: 'EduTech Co-Teacher Platform',
    client: 'EduTech',
    clientLogo: 'EduTech',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'Co-Teacher',
    stats: '45,000+ Active Classrooms',
    metric: '65%',
    metricLabel: 'Lesson Prep Reduction',
    description:
      'Interactive teacher assistance suite providing automated curriculum pacing, differentiated student assignment generation, and instant homework evaluation.',
    tags: ['Web Development', 'Next.js', 'Node.js', 'PostgreSQL', 'EdTech'],
    highlight: false,
    details: {
      clientContext:
        'EduTech supplies instructional platforms to K-12 public and private institutions across North America.',
      challenge:
        'Teachers reported severe burnout managing administrative grading and creating individualized study materials for students at differing skill levels.',
      constraints:
        'FERPA compliance,COPPA adherence, accessibility compliance (WCAG 2.1 AA), and zero budget for teacher device upgrades.',
      approach:
        'Built a clean, mobile-responsive web portal on Next.js and Node.js that runs smoothly on low-power school Chromebooks and tablets.',
      solution:
        'Co-Teacher gives educators automated lesson plan generators, rubric-based assignment scoring, and parent progress digest summaries.',
      results:
        'Adopted by over 45,000 classrooms; participating teachers reported spending 65% less time on weekend grading and lesson preparation.',
      takeaway:
        'Educational software must prioritize speed and simplicity on low-spec hardware to achieve widespread classroom adoption.',
    },
  },

  // 6. ayyo - mobile app
  {
    id: 'ayyo-mobile-app',
    category: 'Enterprise',
    title: 'Ayyo Enterprise Field Operations Mobile App',
    client: 'Ayyo',
    clientLogo: 'Ayyo',
    service: 'App Development',
    technology: 'Mobile App Development',
    work: 'Ayyo',
    stats: '85,000 Daily Active Users',
    metric: '99.98%',
    metricLabel: 'Crash-Free Sessions',
    description:
      'High-performance enterprise mobile application designed for distributed logistics staff, supporting offline order dispatch, barcode capture, and secure team messaging.',
    tags: ['Flutter', 'Enterprise', 'Offline-First', 'SQLite', 'WebSockets'],
    highlight: false,
    details: {
      clientContext:
        'Ayyo operates high-density urban logistics and workforce dispatch networks across metropolitan transit hubs.',
      challenge:
        'Field workers frequently encountered connectivity dead zones in basements and warehouses, resulting in lost delivery updates and corrupted status queues.',
      constraints:
        'Battery efficiency on older Android handsets; instant optimistic UI updates without battery-draining continuous GPS polling.',
      approach:
        'Engineered a cross-platform mobile client with an offline-first SQLite synchronization engine and batched exponential-backoff network retries.',
      solution:
        'Ayyo Mobile gives couriers and managers instant route guidance, digital signature capture, offline job completion, and auto-sync upon reconnection.',
      results:
        'Sustained 99.98% crash-free session rate across 85,000 active daily field users, with zero lost dispatch entries.',
      takeaway:
        'Offline-first architecture is not a fallback feature; for mobile field work, it is the primary architecture.',
    },
  },

  // 7. mybusinessmate - custom software
  {
    id: 'mybusinessmate-web',
    category: 'Enterprise',
    title: 'MyBusinessMate.ai Operations Suite',
    client: 'MyBusinessMate',
    clientLogo: 'MyBusinessMate',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'mybusinessmate.ai',
    stats: '10,000+ Subscribed SMBs',
    metric: '4.2x',
    metricLabel: 'Throughput Growth',
    description:
      'Cloud business management platform combining automated client invoicing, milestone scheduling, expense reconciliation, and cash-flow forecasting in one interface.',
    tags: ['Web Development', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    highlight: true,
    details: {
      clientContext:
        'MyBusinessMate is a B2B SaaS startup serving small-to-medium contractors and professional service agencies.',
      challenge:
        'Existing small business accounting tools were either too simple to handle recurring retainers or too complicated for non-accountants to navigate.',
      constraints:
        'Zero tolerance for double billing or payment discrepancies; strict multi-tenant database separation.',
      approach:
        'Architected a modular web platform on Next.js and PostgreSQL with row-level security (RLS) and idempotent webhook handling for Stripe payments.',
      solution:
        'A unified web suite where business owners manage client agreements, generate invoices with one click, and view projected 90-day cash flow.',
      results:
        'Scaled to 10,000+ business subscribers with 99.99% ledger uptime and over $25M in annual invoiced volume.',
      takeaway:
        'Simplicity in B2B software is achieved through disciplined backend engineering that hides accounting complexity from the user.',
    },
  },

  // 8. mybusinessmate - mobile app
  {
    id: 'mybusinessmate-app',
    category: 'Enterprise',
    title: 'MyBusinessMate Native Field App',
    client: 'MyBusinessMate',
    clientLogo: 'MyBusinessMate',
    service: 'App Development',
    technology: 'Mobile App Development',
    work: 'mybusinessmate app',
    stats: '4.8★ App Store Rating',
    metric: '< 100ms',
    metricLabel: 'Cold Launch Time',
    description:
      'Native companion mobile app for MyBusinessMate enabling business owners to issue quotes on site, collect digital signatures, and receive push payment alerts.',
    tags: ['React Native', 'iOS & Android', 'Biometrics', 'Redux', 'Stripe Terminal'],
    highlight: false,
    details: {
      clientContext:
        'Contractors and field service professionals needed to invoice clients and collect card payments while still on the job site.',
      challenge:
        'The responsive web application was awkward for one-handed operation on mobile devices outdoors and lacked hardware payment terminal connectivity.',
      constraints:
        'Fast cold-start speeds, native Bluetooth integration for card readers, and secure biometric authentication.',
      approach:
        'Developed a React Native mobile application leveraging native iOS and Android bridges for camera scanning and Stripe Terminal hardware.',
      solution:
        'Field professionals can produce an itemized quote, capture on-screen client signoff, swipe cards on portable terminals, and email receipts immediately.',
      results:
        'Over 40% of all platform invoices are now initiated and cleared via the mobile app, with client payment collection times cut from 14 days to same-day.',
      takeaway:
        'Mobile extensions of SaaS products must focus on the immediate tactile actions users take away from their desks.',
    },
  },

  // 9. expiro - custom software
  {
    id: 'expiro-app',
    category: 'Enterprise',
    title: 'Expiro Asset Expiry & Compliance Suite',
    client: 'Expiro',
    clientLogo: 'Expiro',
    service: 'Custom Software Development',
    technology: 'Mobile App Development',
    work: 'expirio app',
    stats: '22,000+ Audits Completed',
    metric: '99.95%',
    metricLabel: 'Field Sync SLA',
    description:
      'Enterprise asset tracking and regulatory compliance app designed for facility managers to inspect physical plant machinery, track expiration dates, and log safety checks.',
    tags: ['Custom Software', 'React Native', 'Camera OCR', 'Enterprise', 'Offline Cache'],
    highlight: false,
    details: {
      clientContext:
        'Expiro provides facilities management and safety compliance auditing across industrial plants, healthcare clinics, and commercial towers.',
      challenge:
        'Auditors recorded serial numbers and inspection stamps on paper clipboards, leading to transcription errors and missed warranty deadlines.',
      constraints:
        'Must function in basements and plant rooms without Wi-Fi, support OCR barcode and serial plate scanning, and export certified PDF audit certificates.',
      approach:
        'Created a robust cross-platform mobile suite with on-device vision OCR and structured SQLite document generation.',
      solution:
        'Auditors scan equipment nameplates, verify safety checklists, attach timestamped photos, and instantly generate tamper-evident audit logs.',
      results:
        'Eliminated paper transcription entirely across 22,000+ audits; equipment compliance failure rates dropped by 88%.',
      takeaway:
        'Hardware-accelerated mobile OCR replaces manual clipboard logging and builds a verifiable digital chain of custody.',
    },
  },

  // 10. edutech - facial attendance
  {
    id: 'edutech-facial-attendance',
    category: 'EdTech',
    title: 'EduTech Edge Facial Attendance System',
    client: 'EduTech',
    clientLogo: 'EduTech',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'facial attendence',
    stats: '99.4% Face Match Precision',
    metric: '< 300ms',
    metricLabel: 'Identification Speed',
    description:
      'Edge-computed facial recognition attendance terminal integrating standard webcams and school tablets to log student arrival with real-time anti-spoofing.',
    tags: ['Web Development', 'Computer Vision', 'FastAPI', 'TensorFlow Lite', 'EdTech'],
    highlight: false,
    details: {
      clientContext:
        'Schools faced morning congestion at gates and classroom doorways using manual roll calls or fingerprint readers that caused hygiene concerns.',
      challenge:
        'Fingerprint hardware was prone to wear, and early facial recognition prototypes were fooled by printed photographs or suffered severe lag under morning rush.',
      constraints:
        'Privacy regulations required that raw facial photographs could never be stored in cloud servers; only mathematical feature vectors could be retained.',
      approach:
        'Engineered an edge-first computer vision pipeline using WebAssembly and lightweight TensorFlow models running directly in standard Chromium kiosks.',
      solution:
        'Students walk past tablet terminals at natural walking speed; the system verifies 3D liveness, matches 128-dimensional vectors in under 300ms, and alerts administrators of absentees.',
      results:
        'Reduced morning check-in lines by 80% across 18 campus installations while maintaining 99.4% precision and zero spoofing breaches.',
      takeaway:
        'Running vector extraction locally on edge devices protects student biometric privacy while delivering sub-second response times.',
    },
  },

  // 11. montessori - mobile app
  {
    id: 'montessori-os',
    category: 'EdTech',
    title: 'MontessoriOS Early Childhood Learning App',
    client: 'Montessori',
    clientLogo: 'Montessori',
    service: 'App Development',
    technology: 'Mobile App Development',
    work: 'montessorios.in',
    stats: '15,000+ Enrolled Children',
    metric: '92%',
    metricLabel: 'Parent Engagement Rate',
    description:
      'Digital observation and progress tracking app designed around the Montessori pedagogy, allowing educators to record developmental milestones and share observations with parents.',
    tags: ['App Development', 'React Native', 'Firebase', 'EdTech', 'Parent Portal'],
    highlight: false,
    details: {
      clientContext:
        'Montessori academies follow non-traditional milestone assessments based on child-led activity observation rather than letter grades.',
      challenge:
        'Standard learning management platforms forced standardized test grading, failing to capture tactile Montessori materials and individual development cycles.',
      constraints:
        'Educators needed to log notes with one hand while supervising small children; interface had to be uncluttered and non-intrusive.',
      approach:
        'Designed an observation-first mobile interface organized around Montessori curriculum areas (Sensorial, Practical Life, Language, Math).',
      solution:
        'Educators quickly capture photo observations, tag specific Montessori learning apparatus, and generate beautifully formatted developmental narrative books for parents.',
      results:
        'Over 15,000 enrolled children tracked across 120 institutions, with 92% of parents actively reviewing weekly developmental summaries.',
      takeaway:
        'Software tailored to specialized pedagogical methodologies outperforms generic institutional grading software.',
    },
  },

  // 12. the1AM - custom software
  {
    id: 'the1am-content-creator',
    category: 'Enterprise',
    title: 'The1AM Multi-Modal AI Content Creator',
    client: 'The1AM',
    clientLogo: 'The1AM',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'ai content creator',
    stats: '500k+ Brand Assets Created',
    metric: '8x',
    metricLabel: 'Asset Production Velocity',
    description:
      'Enterprise content generation studio enabling creative agencies to generate on-brand copy, campaign storyboards, and social media variations with structured human approvals.',
    tags: ['Web Development', 'LLM Chains', 'React', 'FastAPI', 'Creative Tech'],
    highlight: false,
    details: {
      clientContext:
        'The1AM is a fast-paced creative agency producing multi-channel marketing campaigns for global consumer brands.',
      challenge:
        'Copywriters and art directors struggled to maintain brand voice guidelines across hundreds of localized ad copy variations and banner adaptations.',
      constraints:
        'Generated outputs had to strictly follow per-brand voice guidelines, tone constraints, and trademark terminology.',
      approach:
        'Constructed a specialized web interface with brand persona embeddings, few-shot prompt templates, and side-by-side human review queues.',
      solution:
        'Creative teams enter brief themes, generate 20+ on-brand variants across platforms (Instagram, LinkedIn, email), edit in rich text, and push directly to staging.',
      results:
        'Reduced campaign variant production time from four days to half a day, increasing creative output 8-fold without sacrificing brand voice integrity.',
      takeaway:
        'AI content generation creates real enterprise value when built with strict guardrails and human editorial veto controls.',
    },
  },

  // 13. Aigooru - custom software
  {
    id: 'aigooru-fee-manager',
    category: 'EdTech',
    title: 'Aigooru Institutional Fee & Tuition Engine',
    client: 'Aigooru',
    clientLogo: 'Aigooru',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'fee manager',
    stats: '$18M+ In Tuition Processed',
    metric: '98%',
    metricLabel: 'On-Time Fee Collections',
    description:
      'Automated tuition management and fee collection platform for private schools and academies, supporting automated payment plans, reconciliation, and automated receipts.',
    tags: ['Web Development', 'PostgreSQL', 'Stripe', 'Razorpay', 'EdTech Fintech'],
    highlight: false,
    details: {
      clientContext:
        'Aigooru powers back-office infrastructure for private K-12 networks and specialized tutoring institutes.',
      challenge:
        'Schools faced high payment delinquency and spent weeks manually reconciling cash, checks, and wire transfers against student enrollment ledgers.',
      constraints:
        'Must support multi-tiered installment schedules, sibling discounts, scholarship adjustments, and multiple regional payment rails.',
      approach:
        'Engineered a double-entry ledger database schema coupled with automated notification queues across WhatsApp, SMS, and email.',
      solution:
        'Parents receive personalized payment links with instant installment choices; school accountants observe real-time settlement and automatic bank reconciliation.',
      results:
        'On-time fee collection rose to 98%, manual reconciliation errors dropped to zero, and over $18M in tuition has processed securely.',
      takeaway:
        'Combining automated communication triggers with resilient ledger reconciliation transforms institutional cash-flow health.',
    },
  },

  // 14. Fundbot - custom software
  {
    id: 'fundbot-sql-chatbot',
    category: 'FinTech',
    title: 'Fundbot Financial SQL Chatbot',
    client: 'Fundbot',
    clientLogo: 'Fundbot',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'Ai sql chatbot',
    stats: '< 1.2s Natural Language Query',
    metric: '95%',
    metricLabel: 'SQL Generation Accuracy',
    description:
      'Natural-language financial database assistant allowing venture fund analysts and controllers to query complex portfolio ledger tables in plain English.',
    tags: ['FinTech', 'LLM to SQL', 'TypeScript', 'Node.js', 'PostgreSQL Security'],
    highlight: true,
    details: {
      clientContext:
        'Fundbot provides investment telemetry and portfolio governance tools to venture capital and private equity firms.',
      challenge:
        'Investment partners lacked SQL expertise and frequently waited days for financial engineers to write custom database queries for ad-hoc investment committee decks.',
      constraints:
        'Zero possibility of data leakage across fund boundaries; queries had to be strictly read-only with parameter sanitization to prevent injection.',
      approach:
        'Developed an intelligent semantic schema mapper that validates table permissions before compiling natural language queries into safe, read-only SQL ASTs.',
      solution:
        'Analysts type natural questions like "Show Q3 follow-on capital deployed in Series A health companies," receiving verified data tables and charts in 1.2 seconds.',
      results:
        '95% of first-attempt queries executed with zero syntax errors, cutting ad-hoc report turnaround time from 48 hours to under 3 seconds.',
      takeaway:
        'Constraining LLM code generation to strictly typed AST parsers guarantees database security and eliminates SQL injection risk.',
    },
  },

  // 15. fero - ai automation
  {
    id: 'fero-invoice-automation',
    category: 'Enterprise',
    title: 'Fero Intelligent Accounts Payable Automation',
    client: 'Fero',
    clientLogo: 'Fero',
    service: 'AI Automations',
    technology: 'Automations',
    work: 'invoice automation',
    stats: '40,000+ Monthly Invoices Processed',
    metric: '85%',
    metricLabel: 'Manual Labor Reduction',
    description:
      'Automated invoice ingestion and parsing pipeline that extracts line items from multi-format vendor PDFs, validates against purchase orders, and posts directly to ERPs.',
    tags: ['AI Automations', 'Python', 'AWS Textract', 'ERP Integration', 'Accounts Payable'],
    highlight: false,
    details: {
      clientContext:
        'Fero provides heavy industrial supplies and logistics support across multi-site manufacturing operations.',
      challenge:
        'Accounts payable staff were manually typing data from hundreds of daily supplier invoices in non-standard PDF, image, and scanned email formats.',
      constraints:
        'Invoices included foreign currencies, handwritten job codes, and multi-page tax breakdown tables that tripped standard rule-based OCR.',
      approach:
        'Built an asynchronous event-driven document pipeline integrating deep learning OCR, layout-aware entity extraction, and automated PO 3-way matching.',
      solution:
        'Invoices arriving in AP inboxes are processed automatically; 85% match purchase orders and post to the ERP with zero human touch.',
      results:
        'Processing cycle cut from 6 days to 14 minutes per invoice, saving over 40 hours of manual data entry every single week.',
      takeaway:
        'Combining deep learning document extraction with automated PO matching eliminates the primary bottleneck in enterprise procurement.',
    },
  },

  // 16. flexport - ai automation
  {
    id: 'flexport-burn-reports',
    category: 'Enterprise',
    title: 'Flexport Logistics Burn Report Automation',
    client: 'Flexport',
    clientLogo: 'Flexport',
    service: 'AI Automations',
    technology: 'Automations',
    work: 'burn report automation',
    stats: '100% On-Time Morning Delivery',
    metric: '12 hrs',
    metricLabel: 'Saved Per Week',
    description:
      'Automated financial reconciliation system consolidating multi-carrier fuel, detention, and terminal expense feeds into daily executive operational burn reports.',
    tags: ['AI Automations', 'Python', 'Airflow', 'Data Pipeline', 'Logistics Operations'],
    highlight: false,
    details: {
      clientContext:
        'Flexport coordinates modern freight forwarding, customs brokerage, and supply chain logistics globally.',
      challenge:
        'Financial operations managers spent 2.5 hours every morning manually gathering CSV files across ocean, air, and rail carriers to compute daily capital burn.',
      constraints:
        'Carrier feeds arrived at irregular times with varying currency exchanges, format changes, and missing accessorial fee classifications.',
      approach:
        'Constructed an Apache Airflow DAG with automated retries, currency normalization, and anomaly detection rules that flag uncharacteristic carrier surcharges.',
      solution:
        'At 06:00 AM daily, executive leadership receives an automated interactive briefing detailing consolidated burn rates, route variances, and projected weekly cash needs.',
      results:
        'Replaced 12 hours of weekly manual compilation; financial operations team shifted time toward renegotiating high-variance carrier lanes.',
      takeaway:
        'Automated financial reporting pipelines eliminate morning operational panic and improve executive decision clarity.',
    },
  },

  // 17. keocapital - ai automation (screening)
  {
    id: 'keocapital-hr-screening',
    category: 'Enterprise',
    title: 'KeoCapital Talent Screening Automation',
    client: 'KeoCapital',
    clientLogo: 'KeoCapital',
    service: 'AI Automations',
    technology: 'Automations',
    work: 'Hr screening Automation',
    stats: '5,000+ Resumes Processed',
    metric: '70%',
    metricLabel: 'Shorter Screening Turnaround',
    description:
      'AI candidate evaluation workflow that analyzes inbound resumes against role rubrics, extracts technical competencies objectively, and coordinates technical phone screens.',
    tags: ['AI Automations', 'OpenAI API', 'Python', 'ATS Webhooks', 'Talent Operations'],
    highlight: false,
    details: {
      clientContext:
        'KeoCapital is an investment and asset management firm hiring specialized quantitative analysts and software engineers.',
      challenge:
        'Recruiters were overwhelmed by thousands of applications per opening, leading to slow response times and losing top engineering talent to competing firms.',
      constraints:
        'Must remove bias triggers (gender, address, university brand) from initial scoring while rigorously benchmarking relevant technical skills.',
      approach:
        'Built a blind resume evaluation engine that extracts skill trees and project outcomes, scoring candidates against standardized competency matrices.',
      solution:
        'Qualified applicants receive automated interview scheduling links within two hours of application; hiring managers review objective blind scorecards.',
      results:
        'Time-to-screen reduced by 70%, recruiter capacity increased 3x, and candidate interview show-up rates climbed to 96%.',
      takeaway:
        'Blind AI skill scoring speeds up recruitment while removing unconscious bias from initial candidate selection.',
    },
  },

  // 18. metacognition - ai automation
  {
    id: 'metacognition-qa-automation',
    category: 'Enterprise',
    title: 'Metacognition Continuous QA Automation Suite',
    client: 'Metacognition',
    clientLogo: 'Metacognition',
    service: 'AI Automations',
    technology: 'Automations',
    work: 'QA automation',
    stats: '4.5x Release Frequency',
    metric: '92%',
    metricLabel: 'Automated Regression Coverage',
    description:
      'Self-healing automated regression testing framework integrating visual diff tracking and API contract assertions across staging and production deployments.',
    tags: ['AI Automations', 'Playwright', 'TypeScript', 'CI/CD Pipelines', 'QA Ops'],
    highlight: false,
    details: {
      clientContext:
        'Metacognition builds mission-critical cognitive enterprise software requiring weekly release verification across desktop and mobile browsers.',
      challenge:
        'Manual regression testing took four full days before each production release, creating significant delivery friction and release hesitation.',
      constraints:
        'Dynamic UI updates frequently broke brittle CSS selector-based tests, generating false positive alerts that slowed down engineering.',
      approach:
        'Architected a Playwright-based test suite with resilient semantic selectors, visual baseline snapshot diffing, and automated test failure diagnostics.',
      solution:
        'Full end-to-end regression runs automatically on every pull request within 25 minutes; engineers receive pinpoint video recordings of any assertion failures.',
      results:
        'Test execution time shrank from 4 days to 45 minutes; release cadence increased 4.5x with zero critical production bugs reported over 6 months.',
      takeaway:
        'Automated QA suites built on resilient semantic locators prevent developer fatigue and empower daily continuous delivery.',
    },
  },

  // 19. NDA (1) - automated ai tracking
  {
    id: 'nda-ai-tracking',
    category: 'Enterprise',
    title: 'Enterprise High-Throughput Event Tracking Pipeline',
    client: 'Confidential Client',
    clientLogo: 'Enterprise Client',
    service: 'AI Automations',
    technology: 'Automations',
    work: 'AUTOMATED ai tracking',
    stats: '10M+ Daily Operational Events',
    metric: '99.8%',
    metricLabel: 'Anomaly Capture Precision',
    description:
      'Real-time automated telemetry and anomaly tracking system analyzing high-volume operational events to flag supply chain friction points autonomously.',
    tags: ['AI Automations', 'Kafka', 'Python', 'Telemetry', 'Anomaly Detection'],
    highlight: false,
    details: {
      clientContext:
        'A leading Fortune 500 enterprise managing distributed logistics networks with millions of physical asset interactions daily.',
      challenge:
        'Equipment malfunctions and operational bottlenecks were identified hours after occurrence, causing cascading schedule delays across distribution centers.',
      constraints:
        'Must process in excess of 10 million telemetry events per day with less than 200ms ingestion latency; strict NDA and enterprise security.',
      approach:
        'Implemented a distributed Apache Kafka ingestion mesh with sliding-window statistical anomaly models running on stream consumer pods.',
      solution:
        'The tracking engine flags deviations in equipment cycle times automatically, dispatching maintenance tickets before physical line stoppages occur.',
      results:
        'Identified 99.8% of operational anomalies ahead of downtime, preventing an estimated $3.2M in annual delay penalties.',
      takeaway:
        'Shifting from batch analytics to real-time event stream monitoring enables proactive operational prevention rather than retroactive fixes.',
    },
  },

  // 20. NDA (2) - legacy modernisation
  {
    id: 'nda-fintech-legacy',
    category: 'FinTech',
    title: 'Core Financial Ledger Modernisation',
    client: 'Confidential Client',
    clientLogo: 'FinTech Client',
    service: 'Legacy System Modernisation',
    technology: 'Legacy System Modernisation',
    work: 'internal systems',
    stats: 'Zero Operational Downtime',
    metric: '4x',
    metricLabel: 'Transaction Throughput',
    description:
      'Strangler-fig migration of a 15-year-old monolithic financial accounting system to a cloud-native, PCI-DSS compliant microservices architecture.',
    tags: ['Legacy Modernisation', 'FinTech', 'Java', 'Go', 'CockroachDB'],
    highlight: true,
    details: {
      clientContext:
        'A major financial services institution processing high-value corporate treasury settlements across multiple regulatory jurisdictions.',
      challenge:
        'The legacy monolithic application was fragile, expensive to maintain, and lacked the concurrency needed to support new real-time payment rails.',
      constraints:
        'Zero downtime allowed; complete audit trail parity; zero transaction drift across billions of dollars in daily settled volume.',
      approach:
        'Adopted the strangler pattern, deploying read/write proxy gateways that duplicated state to a distributed CockroachDB cluster while validating checksums.',
      solution:
        'Decoupled domain services (ledger, reconciliation, identity, compliance reporting) into containerized microservices deployed on private Kubernetes.',
      results:
        'Achieved 4x transaction throughput with zero downtime or transaction discrepancies during the 9-month phased migration.',
      takeaway:
        'Legacy modernisation succeeds when migration occurs in verifiable parallel slices rather than high-risk big-bang rewrites.',
    },
  },

  // 21. NDA (3) - custom software (HMS)
  {
    id: 'nda-healthcare-hms',
    category: 'Healthcare',
    title: 'Hospital Management & Clinical Operations System',
    client: 'Confidential Client',
    clientLogo: 'Healthcare Client',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'HMS',
    stats: '350-Bed Clinical Facility',
    metric: '100%',
    metricLabel: 'HIPAA & HL7 Compliance',
    description:
      'Full-scale hospital management system unifying electronic health record (EHR) workflows, inpatient ward assignments, pharmacy inventory, and lab telemetry.',
    tags: ['Custom Software', 'Healthcare', 'PostgreSQL', 'React', 'HL7 / FHIR'],
    highlight: false,
    details: {
      clientContext:
        'A regional tertiary healthcare facility operating acute care wards, outpatient clinics, surgical suites, and intensive care units.',
      challenge:
        'Siloed software tools forced nurses and doctors to duplicate patient intake data across three different systems, increasing charting fatigue.',
      constraints:
        'Strict regulatory compliance (HIPAA, HL7/FHIR integration standards), role-based access control, and 100% system availability.',
      approach:
        'Engineered an integrated clinical management suite with real-time ward bed dashboards, medication dispensing verification, and HL7 lab interfaces.',
      solution:
        'Clinicians use single-sign-on (SSO) on mobile medical workstations to review patient charts, order diagnostic labs, and manage discharge planning.',
      results:
        'Charting time per patient encounter dropped by 42%; medication administration errors decreased to zero over the first 12 months.',
      takeaway:
        'Clinical systems must be designed around the physical movement and cognitive load of care teams on the hospital floor.',
    },
  },

  // 22. bytexl - custom software (LMS)
  {
    id: 'bytexl-lms',
    category: 'EdTech',
    title: 'ByteXL Cloud Coding & Learning Management Platform',
    client: 'ByteXL',
    clientLogo: 'ByteXL',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'LMS',
    stats: '150,000+ Enrolled Engineering Students',
    metric: '99.95%',
    metricLabel: 'Platform Availability',
    description:
      'Interactive engineering curriculum platform featuring sandboxed in-browser coding environments, automated code compilation tests, and university analytics.',
    tags: ['Web Development', 'EdTech', 'Docker Sandboxes', 'Node.js', 'React'],
    highlight: true,
    details: {
      clientContext:
        'ByteXL partners with colleges and universities to train computer science and engineering undergraduates in industry-ready programming skills.',
      challenge:
        'Traditional learning portals only hosted video lectures and multiple-choice quizzes, failing to evaluate real hands-on programming capability.',
      constraints:
        'Must support thousands of concurrent students compiling and executing untrusted code securely without server resource starvation.',
      approach:
        'Constructed an isolated Docker container execution cluster on Kubernetes that evaluates student code submissions against test suites in seconds.',
      solution:
        'A browser-based IDE with real-time automated code assessment, automated plagiarism detection, and institutional cohort mastery analytics.',
      results:
        'Scaled to 150,000+ active students across 65 engineering institutions with sub-2-second code compilation feedback.',
      takeaway:
        'Technical learning platforms require secure, low-latency code execution sandboxes to bridge academic study with industry skills.',
    },
  },

  // 23. keocapital - ai automation (joining)
  {
    id: 'keocapital-hr-joining',
    category: 'Enterprise',
    title: 'KeoCapital Automated Employee Onboarding Pipeline',
    client: 'KeoCapital',
    clientLogo: 'KeoCapital',
    service: 'AI Automations',
    technology: 'Automations',
    work: 'Hr joining Automation',
    stats: '100% Day-One Readiness',
    metric: '1 Day',
    metricLabel: 'Onboarding Turnaround',
    description:
      'Zero-touch employee onboarding automation generating employment contracts, provisioning corporate credentials, ordering hardware, and managing compliance.',
    tags: ['AI Automations', 'Identity & Access', 'n8n', 'Python', 'DocuSign API'],
    highlight: false,
    details: {
      clientContext:
        'KeoCapital operates fast-growing investment teams requiring rapid, compliant onboarding for new analysts, traders, and engineers.',
      challenge:
        'Onboarding required HR to manually coordinate with IT, facilities, legal, and compliance across 14 distinct checklists, causing start-day delays.',
      constraints:
        'Strict regulatory background screening signoffs and audit-trail logging required for SEC compliance.',
      approach:
        'Built an event-driven onboarding automation orchestration using n8n and Python scripts connecting BambooHR, Okta, DocuSign, and Jira.',
      solution:
        'When an offer is accepted, employment agreements are generated, background checks are dispatched, Okta accounts are provisioned, and laptops are ordered automatically.',
      results:
        'Reduced onboarding coordination from 10 days to under 24 hours; 100% of new hires begin day one with full workstation and access provisioning.',
      takeaway:
        'Automating employee lifecycle logistics frees HR teams to focus on human connection and culture rather than paperwork.',
    },
  },

  // 24. flavourbombs - ai automation
  {
    id: 'flavourbombs-security-scan',
    category: 'Enterprise',
    title: 'FlavourBombs E-commerce Security Scanner',
    client: 'FlavourBombs',
    clientLogo: 'FlavourBombs',
    service: 'AI Automations',
    technology: 'Automations',
    work: 'magento security scan',
    stats: '24/7 Continuous Storefront Telemetry',
    metric: '0',
    metricLabel: 'Security Breaches Recorded',
    description:
      'Automated vulnerability and integrity scanner continuously monitoring high-traffic Magento storefronts for script injections, malicious payment redirects, and permission drift.',
    tags: ['AI Automations', 'Security Ops', 'Python', 'Magento', 'Automated Alerts'],
    highlight: false,
    details: {
      clientContext:
        'FlavourBombs runs high-volume direct-to-consumer gourmet e-commerce storefronts processing thousands of credit card transactions daily.',
      challenge:
        'Third-party Magento extensions created vulnerability vectors for card-skimming scripts (Magecart attacks) that bypassed traditional perimeter firewalls.',
      constraints:
        'Scanning tools could not introduce any performance overhead or latency to active shopper checkout sessions.',
      approach:
        'Developed an automated headless crawler and file integrity monitoring agent running in an external sandbox to inspect DOM modifications and network calls.',
      solution:
        'Continuous automated scans simulate shopper checkout journeys, checking script hashes, external outbound network calls, and database permission tables.',
      results:
        'Zero security incidents across two consecutive peak holiday seasons; unauthorized plugin modifications are flagged and isolated in under 60 seconds.',
      takeaway:
        'Active synthetic browser inspections detect client-side script tampering that traditional backend security tools miss.',
    },
  },

  // 25. the flyover - ai automation
  {
    id: 'flyover-lead-capture',
    category: 'Enterprise',
    title: 'The Flyover Real-Time Lead Enrichment Pipeline',
    client: 'The Flyover',
    clientLogo: 'The Flyover',
    service: 'AI Automations',
    technology: 'Automations',
    work: 'lead capture',
    stats: '< 30s Speed-to-Lead Response',
    metric: '+48%',
    metricLabel: 'Lead-to-Meeting Conversion',
    description:
      'Real-time inbound lead ingestion and enrichment pipeline that qualifies prospects, checks company firmographics, scores intent, and books calendar slots.',
    tags: ['AI Automations', 'Lead Routing', 'HubSpot API', 'Zapier', 'Webhooks'],
    highlight: false,
    details: {
      clientContext:
        'The Flyover produces digital media publications and corporate sponsorship campaigns requiring rapid B2B sales responsiveness.',
      challenge:
        'Inbound enterprise advertising leads waited up to 24 hours for manual SDR qualification, during which buyer intent rapidly cooled.',
      constraints:
        'Must integrate seamlessly with existing CRM (HubSpot), verify email deliverability in real time, and route based on account territory rules.',
      approach:
        'Designed an automated webhook pipeline that captures form submissions, enriches company data via Clearbit/Apollo APIs, and scores buyer potential.',
      solution:
        'High-value leads are instantly matched to the appropriate account executive and presented with an integrated calendar booking modal in under 30 seconds.',
      results:
        'Speed-to-lead dropped from 24 hours to 30 seconds; demo booking rates surged by 48% within 60 days of deployment.',
      takeaway:
        'Speed-to-lead is the single highest leverage metric in B2B sales pipeline automation.',
    },
  },

  // 26. tecnomart - payment solutions (retail)
  {
    id: 'tecnomart-billing',
    category: 'Retail',
    title: 'Tecnomart Omnichannel Billing & Payment Engine',
    client: 'Tecnomart',
    clientLogo: 'Tecnomart',
    service: 'Custom Software Development',
    technology: 'Web Development',
    work: 'billing',
    stats: '60+ Retail Store Outlets',
    metric: '< 2s',
    metricLabel: 'Checkout Transaction Latency',
    description:
      'High-speed point-of-sale checkout and localized retail billing engine handling barcode scanning, GST tax calculation, split payments, and offline fiscal printer sync.',
    tags: ['Web Development', 'Retail POS', 'Offline-First', 'Node.js', 'Hardware APIs'],
    highlight: false,
    details: {
      clientContext:
        'Tecnomart is a consumer electronics retail chain operating 60+ physical store outlets alongside an e-commerce catalog.',
      challenge:
        'Slow legacy desktop cash register software froze during weekend retail rushes and failed to sync inventory with the central warehouse.',
      constraints:
        'Must communicate with thermal receipt printers, barcode scanners, and chip card readers with offline failover capability.',
      approach:
        'Engineered an ultra-fast web-based POS application powered by a local Node.js service worker bridge to hardware peripherals.',
      solution:
        'Cashiers complete checkouts in under 2 seconds; inventory counts deduct in real time; receipts print instantly even if the store loses Internet connectivity.',
      results:
        'Checkout queues moved 3x faster; store checkout training time for new retail staff decreased from 3 days to 2 hours.',
      takeaway:
        'Retail checkout systems must be engineered around physical counter ergonomics and bulletproof offline reliability.',
    },
  },

  // 27. laptomart - ai product engineering
  {
    id: 'laptomart-ai-crm',
    category: 'Enterprise',
    title: 'Laptomart Enterprise AI Sales CRM',
    client: 'Laptomart',
    clientLogo: 'Laptomart',
    service: 'AI Systems',
    technology: 'Artificial Intelligence',
    work: 'crm',
    stats: '18,000+ Managed B2B Accounts',
    metric: '+22%',
    metricLabel: 'Pipeline Velocity Increase',
    description:
      'AI-augmented customer relationship management software that predicts customer hardware replacement cycles, flags churn risk, and generates tailored sales quotes.',
    tags: ['AI Systems', 'CRM', 'Python', 'React', 'Predictive Modeling'],
    highlight: false,
    details: {
      clientContext:
        'Laptomart is an enterprise hardware supplier providing bulk computing fleets and IT leasing to corporate clients.',
      challenge:
        'Sales reps spent hours sifting through historical purchase records trying to guess which enterprise clients were due for laptop fleet refreshes.',
      constraints:
        'System had to ingest legacy transactional databases containing over 10 years of unstructured hardware sales records.',
      approach:
        'Constructed a predictive churn and lifecycle model integrated into a custom CRM dashboard with automated account prioritization.',
      solution:
        'The CRM analyzes device age, warranty expiries, and team growth metrics to deliver daily prioritized sales outreach lists with pre-calculated pricing quotes.',
      results:
        'Sales reps closed 22% more fleet renewals per quarter and reduced contract proposal generation time by 60%.',
      takeaway:
        'Predictive intelligence turns retrospective customer records into proactive revenue opportunities.',
    },
  },

  // 28. interzoon - cloud based software
  {
    id: 'interzoon-cloud-system',
    category: 'Enterprise',
    title: 'Interzoon Cloud Enterprise Management System',
    client: 'Interzoon',
    clientLogo: 'Interzoon',
    service: 'Cloud Based Softwares',
    technology: 'Cloud Computing',
    work: 'Cloud based internal system',
    stats: '50% Infrastructure Cost Reduction',
    metric: '99.99%',
    metricLabel: 'System Availability SLA',
    description:
      'Cloud-native internal operational ERP unifying multi-department project timesheets, resource capacity allocations, and financial billing on an auto-scaling cluster.',
    tags: ['Cloud Based Software', 'AWS', 'Kubernetes', 'Terraform', 'PostgreSQL'],
    highlight: false,
    details: {
      clientContext:
        'Interzoon operates technical consulting teams across multiple geographical offices in North America and Europe.',
      challenge:
        'Internal resource management relied on disconnected SaaS subscriptions that created billing discrepancies and cost $140,000 annually in licensing.',
      constraints:
        'Zero downtime migration; single-sign-on (SSO) integration; encrypted backup retention adhering to European GDPR standards.',
      approach:
        'Engineered a centralized cloud platform on AWS EKS using Infrastructure as Code (Terraform) and decoupled containerized microservices.',
      solution:
        'A single cloud portal where managers schedule team allocations, monitor project profitability margins, and run automated payroll calculations.',
      results:
        'SaaS subscription licensing costs cut by 50%; platform maintains 99.99% availability with automated horizontal pod autoscaling.',
      takeaway:
        'Custom cloud-native internal systems offer better cross-departmental integration at a fraction of ongoing commercial SaaS licensing costs.',
    },
  },

  // 29. NDA (4) - cloud based software (real estate)
  {
    id: 'nda-realestate-mgmt',
    category: 'Real Estate',
    title: 'Cloud Property Asset & Leasing Management System',
    client: 'Confidential Client',
    clientLogo: 'Real Estate Client',
    service: 'Cloud Based Softwares',
    technology: 'Cloud Computing',
    work: 'cloud based management system',
    stats: '12,000+ Residential & Commercial Units',
    metric: '99.9%',
    metricLabel: 'On-Time Rent Collection',
    description:
      'Multi-tenant cloud leasing and property maintenance platform with automated lease agreements, tenant payment processing, and vendor dispatch workflows.',
    tags: ['Cloud Based Software', 'Real Estate', 'PostgreSQL', 'Stripe', 'React'],
    highlight: true,
    details: {
      clientContext:
        'A premier national real estate investment trust (REIT) managing thousands of residential apartments and commercial retail buildings.',
      challenge:
        'Property managers were using fragmented spreadsheets and localized software that prevented executive leadership from viewing consolidated portfolio yield.',
      constraints:
        'Strict tenant privacy, banking integration for automated ACH clearing, and offline mobile maintenance inspection capabilities.',
      approach:
        'Architected a cloud-based multi-tenant management portal with automated ACH recurring payment schedules and maintenance ticket dispatch.',
      solution:
        'Tenants pay rent and submit repair tickets via mobile; property managers dispatch approved contractors with pre-authorized spending caps; executives monitor portfolio yield live.',
      results:
        'Delinquent rent payments fell by 68%; maintenance ticket resolution velocity improved by 40% across 12,000+ units.',
      takeaway:
        'Centralizing property operations in the cloud provides immediate portfolio-level financial clarity.',
    },
  },

  // 30. NDA (5) - ai agents (enterprise)
  {
    id: 'nda-ai-agents-model',
    category: 'Enterprise',
    title: 'Domain-Specialized Custom Model & Autonomous AI Agents',
    client: 'Confidential Client',
    clientLogo: 'Enterprise Client',
    service: 'AI Systems',
    technology: 'Machine Learning',
    work: 'speciallized custom model',
    stats: '10x Cheaper Inference Than GPT-4',
    metric: '96.8%',
    metricLabel: 'Domain Extraction Accuracy',
    description:
      'Specialized domain-adapted language model (SLM) fine-tuned on proprietary enterprise technical documentation, executing autonomous multi-step compliance evaluations.',
    tags: ['AI Systems', 'Machine Learning', 'LoRA Fine-Tuning', 'vLLM', 'Enterprise AI'],
    highlight: true,
    details: {
      clientContext:
        'A multinational industrial conglomerate processing complex technical specifications, regulatory filings, and safety manuals.',
      challenge:
        'Commercial general-purpose frontier LLMs were too costly at scale ($200k/mo API fees) and exhibited hallucination rates on proprietary engineering standards.',
      constraints:
        'Complete data privacy—proprietary patents and designs could never leave company VPCs; models had to run locally on dedicated GPU clusters.',
      approach:
        'Fine-tuned open-source foundational models using LoRA on curated technical documents, deploying with vLLM acceleration on private cloud instances.',
      solution:
        'Autonomous AI agents scan inbound engineering filings, extract structural compliance parameters, compare against specifications, and flag discrepancies.',
      results:
        'Accuracy reached 96.8% on technical benchmarks (exceeding commercial frontier models), while inference costs fell by 90%.',
      takeaway:
        'Specialized small language models fine-tuned on clean internal domain data outperform generic frontier models at a fraction of the cost.',
    },
  },
];
