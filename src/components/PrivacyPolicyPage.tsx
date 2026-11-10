import React, { useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

const NAV_ITEMS = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'purposes-legal-bases', label: 'Purposes and Legal Bases' },
  { id: 'how-we-share', label: 'How We Share Personal Information' },
  { id: 'international-transfers', label: 'International Transfers' },
  { id: 'information-retention', label: 'Information Retention' },
  { id: 'what-safeguards', label: 'What Safeguards We Use' },
  { id: 'data-protection-rights', label: 'Your Data Protection Rights' },
  { id: 'links-cookies', label: 'Links & Cookies' },
  { id: 'changes-contact', label: 'Changes & Contact Us' },
] as const;

const PrivacyPolicyPageComponent: React.FC<PrivacyPolicyPageProps> = ({
  onNavigatePage,
  onOpenLegal,
}) => {
  const [activeSection, setActiveSection] = useState('information-we-collect');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const scrollTo = useCallback((id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  }, [newsletterEmail]);

  return (
    <div className="p-privacy-policy-page" style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#000000', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body, system-ui, sans-serif)' }}>
      {/* 1. p-content-intro */}
      <section className="p-content-intro" style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)', padding: 'clamp(56px, 8vw, 96px) 24px clamp(40px, 6vw, 64px)', borderBottom: '1px solid #f0ece2' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#555555', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
            Last updated: October 13, 2025
          </p>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 800, color: '#000000', letterSpacing: '-0.03em', margin: 0, lineHeight: 1.1 }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* 2. s-mediatext with c-sidenav */}
      <section className="g-section theme-light s-mediatext" style={{ padding: 'clamp(48px, 6vw, 84px) 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <style>{`
            @media (min-width: 992px) {
              .p-legal-grid {
                display: grid !important;
                grid-template-columns: 280px 1fr !important;
                gap: 64px !important;
                align-items: start !important;
              }
              .c-sidenav-sticky {
                position: sticky !important;
                top: 96px !important;
              }
            }
          `}</style>

          <div className="p-legal-grid" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Sticky Table of Contents */}
            <aside className="c-sidenav-sticky" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555555', marginBottom: '8px' }}>
                Table of Contents
              </div>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderLeft: `2px solid ${activeSection === item.id ? '#fe6200' : '#f0ece2'}`,
                    padding: '8px 14px',
                    color: activeSection === item.id ? '#fe6200' : '#333333',
                    fontWeight: activeSection === item.id ? 700 : 500,
                    fontSize: '13.5px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </aside>

            {/* Main Editorial Articles */}
            <article style={{ lineHeight: 1.75, color: '#000000', fontSize: '15px' }}>
              <p style={{ fontSize: '16.5px', color: '#333333', marginBottom: '24px', fontWeight: 400 }}>
                NeoMinds TechHub (“NeoMinds TechHub”) has created this Privacy Policy in line with our commitment to your privacy. This Notice sets out how NeoMinds TechHub collects, uses, shares, and protects personal information.
              </p>
              <p style={{ marginBottom: '32px' }}>
                In different countries, there are different definitions of “personal information” and “personal data”. For the purposes of this Privacy Policy, personal information means any information relating to an identified or identifiable natural person.
              </p>

              {/* Information We Collect */}
              <div id="information-we-collect" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  Information We Collect
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We collect information directly from you when you complete our RFP forms, request technical consultations, or subscribe to engineering digests:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <li><strong>Contact Details:</strong> First and last name, business email address, phone number, company name, and job title.</li>
                  <li><strong>Project Discovery Materials:</strong> Architectural specifications, RFPs, technology stack requirements, and uploaded challenge briefs.</li>
                  <li><strong>Communication Records:</strong> Notes and timestamps from technical discovery calls and correspondence.</li>
                  <li><strong>Automated Telemetry:</strong> Device identifiers, IP addresses (anonymized), browser types, and usage data collected via essential telemetry.</li>
                </ul>
              </div>

              {/* Purposes and Legal Bases */}
              <div id="purposes-legal-bases" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  Purposes and Legal Bases for Data Processing
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We only process personal information where we have a lawful legal basis under GDPR, CCPA/CPRA, and relevant data protection laws:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)', border: '1px solid #f0ece2', padding: '20px', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 700, color: '#000000', marginBottom: '6px' }}>Contractual Performance</div>
                    <div style={{ fontSize: '14px', color: '#555555' }}>Evaluating and fulfilling consulting agreements, NDAs, and software engineering services requested by you.</div>
                  </div>
                  <div style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)', border: '1px solid #f0ece2', padding: '20px', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 700, color: '#000000', marginBottom: '6px' }}>Legitimate Interests</div>
                    <div style={{ fontSize: '14px', color: '#555555' }}>Ensuring platform security, preventing fraud, managing client relationships, and optimizing our technical web services.</div>
                  </div>
                </div>
              </div>

              {/* How We Share */}
              <div id="how-we-share" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  How We Share Personal Information
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We never sell, rent, or trade your personal information. We only share information with:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Affiliated NeoMinds TechHub Delivery Centers:</strong> Wholly-owned global development centers operating under binding corporate rules and mutual confidentiality.</li>
                  <li><strong>Certified Infrastructure Providers:</strong> Cloud hosting, CRM, and communication platforms bound by rigorous Data Processing Agreements (DPAs).</li>
                  <li><strong>Legal Compliance:</strong> When required by lawful judicial subpoena, regulatory investigation, or applicable law.</li>
                </ul>
              </div>

              {/* International Transfers */}
              <div id="international-transfers" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  International Transfers
                </h3>
                <p>
                  As a global software engineering firm, personal information may be transferred to and processed in countries outside your country of residence. Where transfers occur across borders, we implement EU Standard Contractual Clauses (SCCs), UK Addendums, and strict technical safeguards including end-to-end encryption.
                </p>
              </div>

              {/* Information Retention */}
              <div id="information-retention" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  Information Retention
                </h3>
                <p>
                  We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal and audit obligations, resolve disputes, and enforce our enterprise agreements. Discovery proposals that do not proceed to execution are securely purged in accordance with our data lifecycle policies.
                </p>
              </div>

              {/* What Safeguards We Use */}
              <div id="what-safeguards" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  What Safeguards We Use
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We implement comprehensive administrative, physical, and technical safeguards designed to protect personal information against unauthorized access, destruction, loss, alteration, or disclosure:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>TLS 1.3 encryption in transit and AES-256 encryption at rest.</li>
                  <li>Role-based access controls (RBAC) and mandatory multi-factor authentication (MFA).</li>
                  <li>Annual third-party security audits, ISO 27001 certification standards, and regular vulnerability scanning.</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div id="data-protection-rights" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  Your Data Protection Rights
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Depending on your jurisdiction, you may exercise specific rights regarding your personal information:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Right to Access &amp; Portability:</strong> Obtain confirmation and a structured copy of your processed personal data.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete records.</li>
                  <li><strong>Right to Erasure:</strong> Request the deletion of personal information where statutory grounds apply.</li>
                  <li><strong>Right to Object or Restrict Processing:</strong> Restrict or object to processing under legitimate interests or direct communications.</li>
                </ul>
              </div>

              {/* Links & Cookies */}
              <div id="links-cookies" style={{ scrollMarginTop: '100px', marginBottom: '40px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  Links &amp; Cookies
                </h3>
                <p style={{ marginBottom: '12px' }}>
                  Our Websites may contain links to third-party services. We are not responsible for the privacy practices of external domains. We encourage you to review their specific policies upon visiting.
                </p>
                <p>
                  To learn more about our use of cookies, tracking pixels, and how to configure your browser preferences, please review our comprehensive{' '}
                  <button
                    type="button"
                    onClick={() => onNavigatePage('cookie-policy')}
                    style={{ background: 'none', border: 'none', color: '#fe6200', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit', fontWeight: 600 }}
                  >
                    Cookie Policy
                  </button>.
                </p>
              </div>

              {/* Changes & Contact */}
              <div id="changes-contact" style={{ scrollMarginTop: '100px', borderTop: '1px solid #f0ece2', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  Changes to Privacy Policy &amp; Contact Us
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We may periodically update this Privacy Policy to reflect evolving technical and regulatory requirements. The “Last updated” date at the top indicates when the latest modifications took effect.
                </p>
                <p>
                  If you have questions, comments, or wish to exercise your data subject rights, please contact our Data Protection Officer at{' '}
                  <a href="mailto:privacy@neominds.com" style={{ color: '#fe6200', textDecoration: 'underline', fontWeight: 600 }}>
                    privacy@neominds.com
                  </a>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Contact Us Section (theme-dark g-section s-request) */}
      <ContactSection />

      {/* 4. Locations Section (s-contacts g-section theme-light) */}
      <LocationsSection />

      {/* 5. Newsletter Section (s-newsletter g-section js-newsletter theme-light) */}
      <section className="s-newsletter g-section js-newsletter theme-light" style={{ padding: '72px 24px', backgroundColor: 'var(--colors-background-dark, #fbf9f5)', borderTop: '1px solid #eef2f6' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="s-newsletter__headline">
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#000000', margin: 0, letterSpacing: '-0.02em' }}>
              Join our newsletter
            </h2>
            <p style={{ fontSize: '15px', color: '#555555', margin: '8px 0 0 0', maxWidth: '580px' }}>
              Stay up to date with the latest engineering insights, tech announcements, and articles.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="nm-newsletter-form" data-newsletter="true" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', maxWidth: '540px' }}>
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
                backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
                border: '1px solid #f0ece2',
                borderRadius: '8px',
                color: '#000000',
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
                backgroundColor: '#fe6200', color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              <span>Subscribe</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {newsletterSubmitted && (
            <div style={{ marginTop: '12px', color: '#039855', fontSize: '13.5px', fontWeight: 500 }}>
              Thank you for subscribing to NeoMinds TechHub insights.
            </div>
          )}
        </div>
      </section>

      {/* 6. Footer */}
      <Footer onNavigate={(target) => onNavigatePage(target.replace('#', ''))} onOpenLegal={onOpenLegal} />
    </div>
  );
};

export const PrivacyPolicyPage = React.memo(PrivacyPolicyPageComponent);
