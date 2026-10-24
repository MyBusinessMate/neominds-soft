import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  initialTab?: 'privacy' | 'cookie' | 'security';
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ initialTab = 'privacy', isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'cookie' | 'security'>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 3vw, 24px)',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-legal-title"
    >
      <div
        data-lenis-prevent
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: '#0c1018',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          borderRadius: '0px',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
          position: 'relative',
          padding: 'clamp(24px, 4vw, 44px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', paddingBottom: '16px', marginBottom: '28px', paddingRight: '48px' }}>
          <button
            onClick={() => setActiveTab('privacy')}
            style={{
              padding: '10px 18px',
              minHeight: '44px',
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: activeTab === 'privacy' ? '#ffffff' : '#8893a7',
              backgroundColor: activeTab === 'privacy' ? '#FF5500' : 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab('cookie')}
            style={{
              padding: '10px 18px',
              minHeight: '44px',
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: activeTab === 'cookie' ? '#ffffff' : '#8893a7',
              backgroundColor: activeTab === 'cookie' ? '#FF5500' : 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Cookie Policy
          </button>

          <button
            onClick={() => setActiveTab('security')}
            style={{
              padding: '10px 18px',
              minHeight: '44px',
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: activeTab === 'security' ? '#ffffff' : '#8893a7',
              backgroundColor: activeTab === 'security' ? '#FF5500' : 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            IS & Security Policy
          </button>
        </div>

        {/* Content Section */}
        {activeTab === 'privacy' && (
          <div>
            <h2 id="modal-legal-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>
              Neominds Privacy Policy
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#8893a7', marginBottom: '20px' }}>
              Last Updated: August 2026 • ISO/IEC 27001:2022 Certified
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', lineHeight: 1.7, color: '#d0d3dd', fontFamily: 'var(--font-body)' }}>
              <p>
                Neominds Inc. (&quot;Neominds&quot;, &quot;we&quot;, &quot;our&quot;) is dedicated to protecting your privacy and ensuring transparency in all our software engineering operations. This Privacy Policy outlines how we collect, process, and safeguard information when you interact with our website and enterprise engineering services.
              </p>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '16px', fontWeight: 700, marginTop: '8px' }}>1. Data Collection & Processing</h4>
              <p>
                We collect personal information that you voluntarily submit through our contact, inquiry, and RFP forms, including your name, corporate email address, phone number, company name, and project specifications. We do not sell or monetize personal data under any circumstances.
              </p>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '16px', fontWeight: 700, marginTop: '8px' }}>2. Enterprise NDA & Confidentiality</h4>
              <p>
                All technical disclosures and proprietary requirements submitted to Neominds are treated with strict confidentiality. Mutual Non-Disclosure Agreements (NDAs) are executed prior to deep architectural analysis.
              </p>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '16px', fontWeight: 700, marginTop: '8px' }}>3. International Data Transfers & GDPR Compliance</h4>
              <p>
                Given our global client base, data may be securely transferred and processed across encrypted cloud infrastructure in the United States and EU in full accordance with GDPR Standard Contractual Clauses (SCCs) and CCPA regulations.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'cookie' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>
              Cookie Policy
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#8893a7', marginBottom: '20px' }}>
              Transparency in Cookie & Browser Storage Usage
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', lineHeight: 1.7, color: '#d0d3dd', fontFamily: 'var(--font-body)' }}>
              <p>
                Cookies are small text files placed on your device to ensure optimal performance, remember your preferences, and maintain secure sessions.
              </p>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '16px', fontWeight: 700, marginTop: '8px' }}>Essential Cookies</h4>
              <p>Required for basic site navigation, form security, CSRF protection, and load balancer routing.</p>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '16px', fontWeight: 700, marginTop: '8px' }}>Analytics Cookies</h4>
              <p>Anonymized telemetry to measure scroll performance, viewport responsiveness, and Core Web Vitals.</p>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>
              Information Security Policy (ISO 27001)
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#8893a7', marginBottom: '20px' }}>
              Enterprise-Grade Security Architecture
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', lineHeight: 1.7, color: '#d0d3dd', fontFamily: 'var(--font-body)' }}>
              <p>
                Neominds maintains an enterprise Information Security Management System (ISMS) certified to ISO/IEC 27001:2022.
              </p>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '16px', fontWeight: 700, marginTop: '8px' }}>Key Security Controls:</h4>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>AES-256 encryption at rest and TLS 1.3 encryption in transit for all client data</li>
                <li>Zero-trust access control with mandatory hardware Multi-Factor Authentication (MFA)</li>
                <li>Quarterly third-party penetration testing and continuous automated SAST/DAST code scanning</li>
                <li>HIPAA, SOC 2 Type II, and PCI-DSS Level 1 compliant delivery environments</li>
              </ul>
            </div>
          </div>
        )}

        <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn-primary" style={{ padding: '10px 28px', minHeight: '44px' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
