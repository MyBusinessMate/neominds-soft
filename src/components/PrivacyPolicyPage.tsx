import React from 'react';
import { Shield, Mail } from 'lucide-react';
import { Footer } from './Footer';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigatePage,
  onOpenLegal,
}) => {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: 'var(--navbar-height)', fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <section style={{ paddingBlock: 'var(--section-small-y)', paddingInline: 'var(--page-padding)', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-reading">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--badge-pad-y) var(--badge-pad-x)', backgroundColor: 'rgba(34, 88, 231, 0.08)', borderRadius: 'var(--badge-radius)', color: '#2258e7', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 'var(--space-4)' }}>
            <Shield size={14} />
            <span>Data Protection & Transparency</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#0f172a', marginBottom: 'var(--space-3)' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>
            Last updated: February 2026 • Compliant with EU GDPR, California CCPA/CPRA, and ISO/IEC 27001
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingBlock: 'var(--section-padding-y)', paddingInline: 'var(--page-padding)' }}>
        <div className="container-reading" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', lineHeight: 1.7, color: '#334155', fontSize: '15px' }}>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>
              1. Overview & Scope
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Neominds Inc. (&quot;Neominds&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to safeguarding the privacy of visitors, clients, and technical partners. This Privacy Policy details the types of information we collect, how it is processed, stored, and protected in compliance with the European General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and global security benchmarks.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '12px' }}>
              We collect information to facilitate technical discovery, process requests for proposal (RFP), and improve our digital experiences:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Directly Provided Data:</strong> Name, corporate email address, phone number, company name, project specifications, and NDA preferences submitted via contact forms.</li>
              <li><strong>Technical Telemetry:</strong> Anonymized IP address, browser user-agent, operating system, referrer URL, and interaction timestamps.</li>
              <li><strong>Client Project Information:</strong> Technical architecture requirements, API specifications, and shared repositories covered under strict mutual NDAs.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
              3. Legal Basis & How We Use Your Data
            </h2>
            <p style={{ marginBottom: '12px' }}>
              We process personal and technical data under lawful bases including contractual necessity, legitimate business interests, and explicit consent:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '12px' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '0px' }}>
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>RFP & Advisory Delivery</div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>Evaluating project scope, preparing technical proposals, and executing Non-Disclosure Agreements.</div>
              </div>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '0px' }}>
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Security & Zero-Trust</div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>Preventing unauthorized intrusion, defending against DDoS threats, and verifying API client integrity.</div>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
              4. Data Retention & Zero AI Training on Client Code
            </h2>
            <p>
              We retain personal data only as long as necessary to fulfill the operational purposes outlined herein or as required by statutory recordkeeping laws. <strong>Critical Note on AI:</strong> Neominds strictly adheres to zero-retention policies with LLM providers. Client source code, database dumps, and architectural schematics are never used to train public or foundation AI models.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
              5. Your Rights (GDPR & CCPA)
            </h2>
            <p style={{ marginBottom: '12px' }}>
              Under applicable international privacy legislation, you retain the following rights:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li><strong>Right to Access:</strong> Request a complete copy of personal records held by Neominds.</li>
              <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request immediate deletion of personal records.</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete contact records.</li>
              <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing briefs with a single click at any time.</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0px', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              Data Protection Officer (DPO) Contact
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', marginBottom: '12px' }}>
              For formal data inquiries, GDPR erasure requests, or compliance documentation, contact our Data Protection Officer:
            </p>
            <a href="mailto:privacy@neominds.io" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#2258e7', fontWeight: 600, fontSize: '15px' }}>
              <Mail size={16} />
              <span>privacy@neominds.io</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer
        onNavigate={(target) => {
          if (target === '#contact') {
            onNavigatePage('contacts');
          } else if (target === '#casestudies') {
            onNavigatePage('portfolio');
          } else {
            onNavigatePage('home');
          }
        }}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
