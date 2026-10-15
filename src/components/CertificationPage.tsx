import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Award,
  Star,
  Lock,
  Server,
  Database,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';

interface CertificationPageProps {
  onNavigateToContact?: () => void;
}

export const CertificationPage: React.FC<CertificationPageProps> = () => {
  const companyCertifications = [
    {
      title: 'ISO/IEC 27001:2022',
      category: 'Information Security Management',
      description:
        'Certified processes covering enterprise data confidentiality, risk treatment, asset management and secure software development lifecycle (SDLC).',
      badge: 'Certified',
      icon: <Lock size={24} color="#2258e7" />,
    },
    {
      title: 'AWS Partner Network',
      category: 'Cloud Architecture & Migration',
      description:
        'Recognized cloud delivery capabilities spanning serverless architectures, microservices, containerization with ECS/EKS and database migrations.',
      badge: 'Partner',
      icon: <Server size={24} color="#2258e7" />,
    },
    {
      title: 'Microsoft Azure Partner',
      category: 'Enterprise Cloud Solutions',
      description:
        'Demonstrated proficiency with Azure App Services, enterprise authentication with Microsoft Entra ID and scalable SQL/Cosmos DB infrastructures.',
      badge: 'Partner',
      icon: <Database size={24} color="#2258e7" />,
    },
    {
      title: 'Google Cloud Build Partner',
      category: 'Data & Applied AI',
      description:
        'Experience in deploying modern Kubernetes workloads on GKE, BigQuery data pipelines and Vertex AI model integrations.',
      badge: 'Partner',
      icon: <Award size={24} color="#2258e7" />,
    },
  ];

  const compliancePractices = [
    {
      regulation: 'GDPR & CCPA Requirements',
      heading: 'We follow GDPR and CCPA requirements in data handling',
      description:
        'Data minimization, end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), right-to-be-forgotten deletion workflows, and role-based access control (RBAC).',
    },
    {
      regulation: 'Healthcare Data & Privacy',
      heading: 'We build with HIPAA requirements in mind',
      description:
        'Strict segregation of Protected Health Information (PHI), audit logging for every read/write action, secure session termination, and encrypted backup standards.',
    },
    {
      regulation: 'Enterprise Auditing & Trust',
      heading: 'SOC 2 Type II operational alignment',
      description:
        'Continuous monitoring across security, availability, confidentiality and integrity trust services principles with automated vulnerability scanning.',
    },
  ];

  const teamCertifications = [
    { name: 'AWS Certified Solutions Architect – Professional', category: 'Cloud Infrastructure' },
    { name: 'AWS Certified DevOps Engineer – Professional', category: 'DevOps & CI/CD' },
    { name: 'Microsoft Certified: Azure Solutions Architect Expert', category: 'Cloud Infrastructure' },
    { name: 'Google Cloud Professional Cloud Architect', category: 'Cloud Infrastructure' },
    { name: 'Certified ScrumMaster (CSM)', category: 'Agile Delivery' },
    { name: 'ISTQB Certified Tester (Advanced Level)', category: 'Quality Assurance' },
    { name: 'TensorFlow Developer Certificate', category: 'Applied AI & ML' },
    { name: 'DeepLearning.AI Certified Specialist', category: 'Deep Learning & LLMs' },
  ];

  const testimonials = [
    {
      quote:
        'Neominds TechHub delivered our core enterprise dashboard on schedule, with exemplary code structure, thorough automated test coverage, and responsive daily communication.',
      author: 'David Harrison',
      role: 'VP of Technology',
      company: 'Logistics SaaS Platform (US)',
    },
    {
      quote:
        'Their engineers designed our healthcare portal strictly according to privacy specifications. The technical delivery, security practices, and documentation were exceptional.',
      author: 'Dr. Sarah Jenkins',
      role: 'Chief Medical Officer',
      company: 'Digital Health Solutions (UK)',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '80px', color: '#0f172a' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{ backgroundColor: '#070b14', color: '#ffffff', padding: '90px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(34, 88, 231, 0.18) 0%, rgba(7, 11, 20, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#2258e7',
                marginBottom: '16px',
              }}
            >
              Trust & Credentials
            </span>

            <ScrollReveal
              as="h1"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 62px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '24px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Our credentials
            </ScrollReveal>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.88)',
                marginBottom: '16px',
              }}
            >
              Credentials are proof, not decoration. This page lists the certifications, partnerships and compliance practices behind Neominds TechHub's work, so you can verify them before you hire us.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.65)',
                margin: 0,
              }}
            >
              Where possible, each item links to its certificate or the issuing body. We prioritize verifiable engineering rigor over marketing buzzwords.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COMPANY LEVEL CERTIFICATIONS
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '44px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Organizational Standards
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Company level
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', marginTop: '8px' }}>
              Certifications and partner programs that show how we manage security, quality and technology.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {companyCertifications.map((item, idx) => (
              <RevealElement
                key={idx}
                variant="card"
                delay={idx * 0.05}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#2258e7', backgroundColor: '#eff6ff', padding: '4px 10px', borderRadius: '20px' }}>
                    {item.badge}
                  </span>
                </div>

                <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                  {item.category}
                </div>

                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. COMPLIANCE AND DATA PROTECTION
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '44px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Security & Privacy
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Compliance and data protection
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', marginTop: '8px' }}>
              How we protect your data and follow the rules that apply to your industry. We list verified practices rather than overstated claims.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {compliancePractices.map((practice, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '32px',
                  backgroundColor: '#f8fafc',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <ShieldCheck size={20} color="#2258e7" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {practice.regulation}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.4 }}>
                  {practice.heading}
                </h3>

                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TEAM CERTIFICATIONS
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Engineering Depth
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Certified people
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', marginTop: '8px' }}>
              Our engineers keep their skills current with recognized certifications across cloud architecture, agile delivery, quality engineering and applied AI.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {teamCertifications.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <CheckCircle size={18} color="#2258e7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', lineHeight: 1.4 }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. INDUSTRY RECOGNITION
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Independent Validation
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Industry recognition
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', marginTop: '8px' }}>
              Ratings and listings from independent review platforms based on verified client feedback.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '28px', backgroundColor: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                4.9 / 5.0 Rating
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                Top-rated Custom Software Development & AI Engineering Company on independent review platforms.
              </p>
            </div>

            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '28px', backgroundColor: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Award size={20} color="#2258e7" />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#2258e7' }}>Global Delivery</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                Verified Delivery Partner
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                Consistent top delivery rankings for North American, European and Middle East client engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CLIENT TESTIMONIALS
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '44px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Verified Feedback
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              What clients say
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                }}
              >
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#334155', fontStyle: 'italic', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px' }}>{t.author}</div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>{t.role}</div>
                  <div style={{ fontSize: '12px', color: '#2258e7', fontWeight: 500, marginTop: '2px' }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact, Locations & Newsletter */}
      <ContactSection />
      <LocationsSection />
    </div>
  );
};
