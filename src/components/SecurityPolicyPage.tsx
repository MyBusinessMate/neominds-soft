import React from 'react';
import { ShieldCheck, Key, Server, FileCheck2 } from 'lucide-react';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';

interface SecurityPolicyPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const SecurityPolicyPage: React.FC<SecurityPolicyPageProps> = ({
  onNavigatePage,
  onOpenLegal,
}) => {
  return (
    <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#ffffff', minHeight: '100vh', paddingTop: 'var(--navbar-height)', fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <section style={{ paddingBlock: 'var(--section-small-y)', paddingInline: 'var(--page-padding)', backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)', borderBottom: '1px solid #f0ece2' }}>
        <div className="container-reading">
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#ffffff', marginBottom: 'var(--space-3)' }}>
            Security & Compliance Standards
          </h1>
          <p style={{ fontSize: '15px', color: '#a3a09b', margin: 0 }}>
            ISO/IEC 27001:2022 Certified • SOC 2 Type II Audited • HIPAA & GDPR Compliant
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingBlock: 'var(--section-padding-y)', paddingInline: 'var(--page-padding)' }}>
        <div className="container-reading" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.82)', fontSize: '15px' }}>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>
              1. Security-First Engineering Culture
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              At Neominds, security is never an afterthought. It is integrated into every phase of our Software Development Life Cycle (SDLC). We apply a Zero-Trust architectural framework, strict least-privilege access control, continuous automated vulnerability scanning, and cryptographic encryption across all engineering touchpoints.
            </p>
          </div>

          {/* 4 Pillars of Security */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)', border: '1px solid #f0ece2', borderRadius: '0px', padding: '24px' }}>
              <ShieldCheck size={28} color="#fe6200" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>ISO/IEC 27001 Certified</h3>
              <p style={{ fontSize: '13px', color: '#a3a09b', margin: 0 }}>
                Rigorous Information Security Management System (ISMS) governing access, personnel security, and physical workstation hardening.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)', border: '1px solid #f0ece2', borderRadius: '0px', padding: '24px' }}>
              <Key size={28} color="#fe6200" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Cryptographic Encryption</h3>
              <p style={{ fontSize: '13px', color: '#a3a09b', margin: 0 }}>
                AES-256 encryption for all data at rest and mandatory TLS 1.3 encryption with Perfect Forward Secrecy (PFS) for all data in transit.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)', border: '1px solid #f0ece2', borderRadius: '0px', padding: '24px' }}>
              <Server size={28} color="#fe6200" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Air-Gapped AI Isolation</h3>
              <p style={{ fontSize: '13px', color: '#a3a09b', margin: 0 }}>
                Private enterprise LLM inference runtimes running inside client VPCs with zero data retention and strict network boundary controls.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)', border: '1px solid #f0ece2', borderRadius: '0px', padding: '24px' }}>
              <FileCheck2 size={28} color="#fe6200" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Automated DevSecOps</h3>
              <p style={{ fontSize: '13px', color: '#a3a09b', margin: 0 }}>
                Automated static code analysis (SonarQube), container CVE scans (Trivy), and quarterly external third-party penetration testing.
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
              2. Vulnerability Disclosure & Incident Response
            </h2>
            <p>
              We maintain a dedicated Security Incident Response Team (SIRT) on standby 24/7/365. Security researchers and enterprise partners can report vulnerabilities directly to our security engineering team at <a href="mailto:security@neominds.io" style={{ color: '#fe6200', fontWeight: 600 }}>security@neominds.io</a>. We acknowledge receipt within 4 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Locations Section */}
      <LocationsSection />

      {/* Global Footer */}
      <Footer
        onNavigate={(target) => onNavigatePage(target.replace('#', ''))}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
