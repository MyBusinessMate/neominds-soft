import React, { useState } from 'react';
import { Send, Lock } from 'lucide-react';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceCTAProps {
  title: string;
  headline: string;
  description: string;
  buttonText: string;
  onSuccessToast: (msg: string) => void;
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title,
  headline,
  description,
  buttonText,
  onSuccessToast,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '$50k - $100k',
    message: '',
    ndaRequired: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast(
        `Your inquiry for "${title}" has been received! Our Principal Solution Architect will review your specifications and contact you within 2 business hours.`
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '$50k - $100k',
        message: '',
        ndaRequired: true,
      });
    }, 600);
  };

  return (
    <section
      id="service-contact"
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
        borderTop: '1px solid #f0ece2',
      }}
    >
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <RevealElement variant="card">
          <div
            style={{
              backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
              border: '1px solid #f0ece2',
              borderRadius: '8px',
              padding: 'clamp(28px, 4vw, 48px)',
              boxShadow: '0 12px 32px rgba(32, 11, 0,  0.05)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <ScrollReveal
                as="h2"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 36px)',
                  fontWeight: 800,
                  color: '#000000',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '10px',
                  display: 'block',
                }}
                blurStrength={6}
              >
                {headline}
              </ScrollReveal>
              <RevealElement variant="text" delay={0.06}>
                <p style={{ fontSize: '15.5px', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                  {description}
                </p>
              </RevealElement>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                    Your Name*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff', border: '1px solid #d0ccc0', borderRadius: '8px', fontSize: '14px', color: '#000000',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                    Work Email*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff', border: '1px solid #d0ccc0', borderRadius: '8px', fontSize: '14px', color: '#000000',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff', border: '1px solid #d0ccc0', borderRadius: '8px', fontSize: '14px', color: '#000000',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff', border: '1px solid #d0ccc0', borderRadius: '8px', fontSize: '14px', color: '#000000',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <option value="<$25k">&lt; $25k (Pilot / MVP Scope)</option>
                    <option value="$25k - $50k">$25k - $50k (Standard Project)</option>
                    <option value="$50k - $100k">$50k - $100k (Enterprise Scale)</option>
                    <option value="$100k+">$100k+ (Strategic Dedicated Squad)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                  Project Goals & Architecture Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder={`Describe your technical requirements for ${title}...`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: '#ffffff', border: '1px solid #d0ccc0', borderRadius: '8px', fontSize: '14px', color: '#000000',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#444444', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.ndaRequired}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  style={{ width: '16px', height: '16px', accentColor: '#fe6200' }}
                />
                <span>Require signed Mutual Non-Disclosure Agreement (MNDA) before consultation</span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '14px 28px',
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#e04a00';
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#fe6200';
                }}
              >
                {isSubmitting ? (
                  <span>Transmitting Proposal...</span>
                ) : (
                  <>
                    <span>{buttonText}</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#a3a09b', fontSize: '12px', marginTop: '4px' }}>
                <Lock size={13} />
                <span>Strict enterprise privacy protection. 100% intellectual property ownership transferred.</span>
              </div>
            </form>
          </div>
        </RevealElement>
      </div>
    </section>
  );
};
