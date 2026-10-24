import React, { useState, useCallback } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Award,
  Star,
  Lock,
  Server,
  Database,
  ArrowRight,
} from 'lucide-react';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';

interface CertificationPageProps {
  onNavigatePage?: (page: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

const COMPANY_CERTIFICATIONS = [
  {
    title: 'ISO/IEC 27001:2022',
    category: 'Information Security Management',
    description:
      'Certified processes covering enterprise data confidentiality, risk treatment, asset management and secure software development lifecycle (SDLC).',
    badge: 'Certified',
    icon: <Lock size={22} color="#fe6200" />,
  },
  {
    title: 'ISO 9001:2015',
    category: 'Quality Management Systems',
    description:
      'Demonstrates our systematic approach to quality assurance, client satisfaction, and continuous process improvements across all software delivery phases.',
    badge: 'Certified',
    icon: <Award size={22} color="#fe6200" />,
  },
  {
    title: 'AWS Partner Network',
    category: 'Cloud Architecture & Migration',
    description:
      'Recognized cloud delivery capabilities spanning serverless architectures, microservices, containerization with ECS/EKS and database migrations.',
    badge: 'Partner',
    icon: <Server size={22} color="#fe6200" />,
  },
  {
    title: 'Microsoft Azure Solutions Partner',
    category: 'Enterprise Cloud Solutions',
    description:
      'Demonstrated proficiency with Azure App Services, enterprise authentication with Microsoft Entra ID and scalable SQL/Cosmos DB infrastructures.',
    badge: 'Partner',
    icon: <Database size={22} color="#fe6200" />,
  },
];

const COMPLIANCE_CERTIFICATES = [
  {
    regulation: 'HIPAA Compliance',
    heading: 'Health Insurance Portability and Accountability Act',
    description:
      'Strict segregation of Protected Health Information (PHI), audit logging for every read/write action, secure session termination, and encrypted backup standards.',
  },
  {
    regulation: 'SOC 2 Type II Alignment',
    heading: 'Service Organization Control Audit',
    description:
      'Continuous monitoring across security, availability, confidentiality and integrity trust services principles with automated vulnerability scanning.',
  },
  {
    regulation: 'GDPR & CCPA Readiness',
    heading: 'Global Data Protection & Privacy',
    description:
      'Data minimization, end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), right-to-be-forgotten deletion workflows, and role-based access control (RBAC).',
  },
  {
    regulation: 'PCI DSS Level 1 Standards',
    heading: 'Payment Card Industry Security',
    description:
      'Adherence to secure financial transactions, tokenization, isolation of sensitive cardholder data environments, and continuous network monitoring.',
  },
];

const TEAM_CERTIFICATIONS = [
  { name: 'AWS Certified Solutions Architect – Professional', category: 'Cloud Infrastructure' },
  { name: 'AWS Certified DevOps Engineer – Professional', category: 'DevOps & CI/CD' },
  { name: 'Microsoft Certified: Azure Solutions Architect Expert', category: 'Cloud Infrastructure' },
  { name: 'Google Cloud Professional Cloud Architect', category: 'Cloud Infrastructure' },
  { name: 'Project Management Professional (PMP)', category: 'Delivery Management' },
  { name: 'Certified ScrumMaster (CSM)', category: 'Agile Delivery' },
  { name: 'ISTQB Certified Tester (Advanced Level)', category: 'Quality Assurance' },
  { name: 'TensorFlow & DeepLearning.AI Specialist', category: 'Applied AI & ML' },
];

const TESTIMONIALS = [
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

const CertificationPageComponent: React.FC<CertificationPageProps> = ({
  onNavigatePage,
  onOpenLegal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  }, [newsletterEmail]);

  return (
    <div className="p-certification-page" style={{ backgroundColor: 'var(--colors-background-dark, #200b00)', minHeight: '100vh', paddingTop: '68px', color: '#ffffff', fontFamily: 'var(--font-body, system-ui, sans-serif)' }}>
      {/* 1. s-hero g-section theme-light s-hero--img-right */}
      <section className="s-hero g-section theme-light s-hero--img-right" style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', padding: 'clamp(56px, 8vw, 96px) 24px clamp(40px, 6vw, 64px)', borderBottom: '1px solid #351505' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '32px', alignItems: 'center' }}>
          <style>{`
            @media (min-width: 900px) {
              .s-hero-cert-grid {
                display: grid !important;
                grid-template-columns: 1fr 340px !important;
                gap: 48px !important;
              }
            }
          `}</style>
          <div className="s-hero-cert-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                Trust &amp; Verified Standards
              </p>
              <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px 0' }}>
                Our proven expertise
              </h1>
              <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.65, maxWidth: '720px', margin: 0 }}>
                Here you can find the recognized accomplishments and certifications obtained by Neominds TechHub, affirming our expertise, adherence to industry standards, and commitment to quality.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '280px', padding: '32px', backgroundColor: 'var(--colors-background-dark, #200b00)', border: '1px solid #351505', borderRadius: '4px', textAlign: 'center', boxShadow: '0 10px 30px rgba(32, 11, 0, 0.04)' }}>
                <div style={{ width: '56px', height: '56px', margin: '0 auto 16px auto', borderRadius: '50%', backgroundColor: 'rgba(254, 98, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={28} color="#fe6200" />
                </div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#070b14' }}>100%</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Compliance &amp; Quality Audit Pass Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. s-certification__group: Company level */}
      <section className="s-certification__group" style={{ padding: 'clamp(56px, 7vw, 84px) 24px', backgroundColor: 'var(--colors-background-dark, #200b00)', borderBottom: '1px solid #351505' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.02em', margin: '0 0 12px 0' }}>
              Company level
            </h2>
            <p style={{ fontSize: '15.5px', color: '#94a3b8', maxWidth: '760px', lineHeight: 1.6, margin: 0 }}>
              We hold a range of certifications that highlight our commitment to excellence and industry standards. These certifications validate our ability to deliver high-quality products and services and showcase our dedication to continuous improvement.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {COMPANY_CERTIFICATIONS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                  border: '1px solid #351505',
                  borderRadius: '4px',
                  padding: '28px',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '4px', backgroundColor: 'var(--colors-background-dark, #200b00)', border: '1px solid #351505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#fe6200', backgroundColor: 'rgba(254, 98, 0, 0.08)', padding: '4px 10px', borderRadius: '2px' }}>
                    {item.badge}
                  </span>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  {item.category}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#070b14', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. s-certification__group: Certificates of compliance */}
      <section className="s-certification__group" style={{ padding: 'clamp(56px, 7vw, 84px) 24px', backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', borderBottom: '1px solid #351505' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.02em', margin: '0 0 12px 0' }}>
              Certificates of compliance
            </h2>
            <p style={{ fontSize: '15.5px', color: '#94a3b8', maxWidth: '760px', lineHeight: 1.6, margin: 0 }}>
              Our company adheres to industry standards and regulatory requirements, demonstrating our commitment to maintaining a secure and compliant environment for our clients and stakeholders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {COMPLIANCE_CERTIFICATES.map((practice, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #351505',
                  borderRadius: '4px',
                  padding: '28px',
                  backgroundColor: 'var(--colors-background-dark, #200b00)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <ShieldCheck size={20} color="#fe6200" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {practice.regulation}
                  </span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#070b14', marginBottom: '10px', lineHeight: 1.4 }}>
                  {practice.heading}
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. s-certification__group: Personal employee certificates */}
      <section className="s-certification__group" style={{ padding: 'clamp(56px, 7vw, 84px) 24px', backgroundColor: 'var(--colors-background-dark, #200b00)', borderBottom: '1px solid #351505' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.02em', margin: '0 0 12px 0' }}>
              Personal employee certificates
            </h2>
            <p style={{ fontSize: '15.5px', color: '#94a3b8', maxWidth: '760px', lineHeight: 1.6, margin: 0 }}>
              Our employees hold a range of personal certificates that reflect their individual expertise and qualifications. These certifications demonstrate their commitment to professional development and their ability to deliver exceptional services in their respective fields.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {TEAM_CERTIFICATIONS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                  border: '1px solid #351505',
                  borderRadius: '4px',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <CheckCircle size={18} color="#fe6200" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#070b14', lineHeight: 1.4 }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. s-certification__group: Industry recognition */}
      <section className="s-certification__group" style={{ padding: 'clamp(56px, 7vw, 84px) 24px', backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', borderBottom: '1px solid #351505' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.02em', margin: '0 0 12px 0' }}>
              Industry recognition
            </h2>
            <p style={{ fontSize: '15.5px', color: '#94a3b8', maxWidth: '760px', lineHeight: 1.6, margin: 0 }}>
              Our company has received several industry recognition certifications that validate our expertise, quality, and commitment to excellence in software development. These certifications reinforce our position as a leading player in the software development landscape and inspire confidence in our clients and stakeholders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ border: '1px solid #351505', borderRadius: '4px', padding: '28px', backgroundColor: 'var(--colors-background-dark, #200b00)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#070b14', marginBottom: '6px' }}>
                4.9 / 5.0 Rating
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                Top-rated Custom Software Development &amp; AI Engineering Company across independent client reviews.
              </p>
            </div>

            <div style={{ border: '1px solid #351505', borderRadius: '4px', padding: '28px', backgroundColor: 'var(--colors-background-dark, #200b00)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Award size={20} color="#fe6200" />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase' }}>Clutch Global Leader</span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#070b14', marginBottom: '6px' }}>
                Top B2B Service Provider
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                Recognized for architectural capability, agile velocity, and reliable project delivery for North American &amp; European clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. g-section s-testimonials js-slider-testimonials theme-gray */}
      <section className="g-section s-testimonials js-slider-testimonials theme-gray" style={{ padding: 'clamp(56px, 7vw, 84px) 24px', backgroundColor: 'var(--colors-background-dark, #200b00)', borderBottom: '1px solid #351505' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.02em', margin: '0 0 12px 0' }}>
              They say it best
            </h2>
            <p style={{ fontSize: '15.5px', color: '#94a3b8', maxWidth: '680px', margin: 0, lineHeight: 1.6 }}>
              Neominds TechHub began with an idea focused on quality. We take action and keep your business’ best interests at heart. We believe in true partnerships with our clients and that’s why they believe us.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                  border: '1px solid #351505',
                  borderRadius: '4px',
                  padding: '32px',
                }}
              >
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#cbd5e1', fontStyle: 'italic', marginBottom: '24px' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: '#070b14', fontSize: '15px' }}>{t.author}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{t.role}</div>
                  <div style={{ fontSize: '12px', color: '#fe6200', fontWeight: 600, marginTop: '2px' }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Us Section (theme-dark g-section s-request) */}
      <ContactSection />

      {/* 8. Locations Section (s-contacts g-section theme-light) */}
      <LocationsSection />

      {/* 9. Newsletter Section (s-newsletter g-section js-newsletter theme-light) */}
      <section className="s-newsletter g-section js-newsletter theme-light" style={{ padding: '72px 24px', backgroundColor: 'var(--colors-background-dark, #200b00)', borderTop: '1px solid #eef2f6' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="s-newsletter__headline">
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#070b14', margin: 0, letterSpacing: '-0.02em' }}>
              Join our newsletter
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', margin: '8px 0 0 0', maxWidth: '580px' }}>
              Stay up to date with the latest engineering insights, tech announcements, and articles.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', maxWidth: '540px' }}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              style={{
                flex: '1 1 280px',
                padding: '14px 18px',
                fontSize: '14px',
                backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                border: '1px solid #cbd5e1',
                borderRadius: '2px',
                color: '#ffffff',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: '#fe6200',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              <span>Subscribe</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {newsletterSubmitted && (
            <div style={{ marginTop: '12px', color: '#039855', fontSize: '13.5px', fontWeight: 500 }}>
              Thank you for subscribing to Neominds TechHub insights.
            </div>
          )}
        </div>
      </section>

      {/* 10. Footer */}
      <Footer onNavigate={(target) => onNavigatePage && onNavigatePage(target.replace('#', ''))} onOpenLegal={onOpenLegal} />
    </div>
  );
};

export const CertificationPage = React.memo(CertificationPageComponent);
