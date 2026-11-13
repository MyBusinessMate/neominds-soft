import { ServiceCaseStudyRef } from '../types/service';

export const VERIFIED_CASE_STUDIES: Record<string, ServiceCaseStudyRef> = {
  bytexl: {
    id: 'bytexl-lms',
    title: 'High-Concurrency Coding Exam & LMS Platform',
    client: 'ByteXL',
    category: 'EdTech & Cloud',
    stats: '100,000+ Active Students Synchronized',
    metric: '99.99%',
    metricLabel: 'Evaluation Pipeline Uptime SLA',
    description:
      'Re-architected high-concurrency coding exam platform to handle 100,000+ simultaneous students across major universities with zero downtime and sub-second code evaluation latencies.',
    tags: ['EdTech', 'React', 'Node.js', 'MongoDB', 'AWS'],
  },
  fero: {
    id: 'fero-invoice-automation',
    title: 'Autonomous Freight Invoice Verification & Rate Matching Engine',
    client: 'Fero Logistics',
    category: 'Logistics AI',
    stats: '85% Automated Audit Rate',
    metric: '3-Way',
    metricLabel: 'Rate Card Automated Match',
    description:
      'Engineered AI freight invoice parsing, automated contract rate matching, and discrepancy resolution microservices for enterprise logistics fleets.',
    tags: ['Logistics AI', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  interzoon: {
    id: 'interzoon-cloud-system',
    title: 'Cloud Enterprise Management & Resource Allocation Platform',
    client: 'Interzoon',
    category: 'Cloud Architecture',
    stats: '50% Infrastructure Cost Reduction',
    metric: '99.99%',
    metricLabel: 'System Availability SLA',
    description:
      'Engineered centralized cloud platform on AWS EKS using Infrastructure as Code (Terraform) and decoupled containerized microservices for multinational operations.',
    tags: ['Cloud Platform', 'AWS', 'Kubernetes', 'Terraform', 'PostgreSQL'],
  },
  fundbot: {
    id: 'fundbot-sql-chatbot',
    title: 'Natural Language Financial SQL Query Engine & Automated BI',
    client: 'Fundbot',
    category: 'Fintech AI',
    stats: '98.5% Text-to-SQL Query Accuracy',
    metric: '< 120ms',
    metricLabel: 'Query Execution Latency',
    description:
      'Architected natural language SQL querying pipeline allowing financial analysts and portfolio managers to query private relational ledgers conversationally.',
    tags: ['Fintech AI', 'Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
  },
  cnote: {
    id: 'cnote',
    title: 'Community Impact Investing Platform with SEC Compliance',
    client: 'CNote Financial',
    category: 'Fintech',
    stats: '$500M+ Impact Capital Deployed',
    metric: 'SOC 2',
    metricLabel: 'Type II Certified Infrastructure',
    description:
      'Architected an institutional investment gateway connecting Fortune 500 treasuries to CDFIs and minority-owned business lenders, automating ACH clearing and SEC compliance reporting.',
    tags: ['Fintech & Banking', 'Node.js', 'React', 'Plaid API', 'Automated ACH / SEC'],
  },
  delphi: {
    id: 'delphi',
    title: 'AI Computer Vision & Diagnostic Screening Platform',
    client: 'Delphi Vision Ltd',
    category: 'Enterprise AI',
    stats: '99.2% Model Classification Accuracy',
    metric: '18 FPS',
    metricLabel: 'Edge Inference Throughput',
    description:
      'Designed high-speed computer vision pipeline for automated defect detection in industrial manufacturing, deploying PyTorch deep learning models to low-power edge gateways.',
    tags: ['AI / Computer Vision', 'PyTorch', 'FastAPI', 'Docker Edge', 'Real-Time Ingestion'],
  },
  cityindex: {
    id: 'cityindex',
    title: 'High-Frequency Forex & CFD Trading Execution Terminal',
    client: 'City Index (StoneX Group)',
    category: 'Fintech Trading',
    stats: 'Sub-Millisecond Order Routing',
    metric: '100,000+',
    metricLabel: 'Concurrent Trading Sessions',
    description:
      'Engineered institutional multi-asset trading engine with FIX 4.4 protocol gateways, live depth-of-market feeds, customizable charting workspaces, and automated margin risk controls.',
    tags: ['Fintech', 'C++ / Rust', 'WebSockets', 'FIX Protocol', 'Trading Terminal UI'],
  },
  maersk: {
    id: 'maersk',
    title: 'Global Supply Chain Telemetry & Container Tracking',
    client: 'Maersk Line',
    category: 'Enterprise Infrastructure',
    stats: 'Global Container Telemetry',
    metric: '50,000+',
    metricLabel: 'Connected IoT Beacons',
    description:
      'Delivered scalable IoT monitoring platform providing cold-chain integrity tracking, automated customs clearance document generation, and real-time vessel position mapping.',
    tags: ['Supply Chain', 'Azure IoT Hub', 'Kafka', 'React / TypeScript', 'Microservices'],
  },
};

// Helper to resolve service-relevant case studies
export const getCaseStudiesForFamily = (family: string): ServiceCaseStudyRef[] => {
  switch (family) {
    case 'Fintech':
      return [
        VERIFIED_CASE_STUDIES.fundbot,
        VERIFIED_CASE_STUDIES.cnote,
        VERIFIED_CASE_STUDIES.cityindex,
      ];
    case 'Healthcare':
      return [
        VERIFIED_CASE_STUDIES.delphi,
        VERIFIED_CASE_STUDIES.bytexl,
        VERIFIED_CASE_STUDIES.interzoon,
      ];
    case 'Enterprise AI':
      return [
        VERIFIED_CASE_STUDIES.fundbot,
        VERIFIED_CASE_STUDIES.fero,
        VERIFIED_CASE_STUDIES.delphi,
      ];
    case 'Core Technology':
    default:
      return [
        VERIFIED_CASE_STUDIES.bytexl,
        VERIFIED_CASE_STUDIES.interzoon,
        VERIFIED_CASE_STUDIES.fero,
      ];
  }
};
