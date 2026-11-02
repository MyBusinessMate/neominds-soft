import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceCTAProps {
  title: string;
  headline: string;
  description: string;
  buttonText: string;
  onSuccessToast: (msg: string) => void;
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({
  headline,
  description,
  buttonText,
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectScope: '',
    ndaRequired: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccessToast('Your discovery request has been received. A Principal Architect will reach out within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectScope: '',
        ndaRequired: false,
      });
    }, 600);
  };

  return (
    <section
      id="service-contact"
      style={{
        padding: 'clamp(64px, 7vw, 100px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: '#fe6200',
              textTransform: 'uppercase',
              marginBottom: '14px',
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
            }}
          >
            Direct Engagement
          </div>

          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: '#000000',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              lineHeight: 1.15,
              marginBottom: '14px',
              letterSpacing: '-0.025em',
              display: 'block',
            }}
            blurStrength={6}
          >
            {headline}
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p
              style={{
                fontSize: '15.5px',
                color: '#66615c',
                margin: '0 auto',
                maxWidth: '640px',
                lineHeight: 1.6,
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              {description}
            </p>
          </RevealElement>
        </div>

        {/* Minimal Form (Zero Cards, Blended Seamlessly with Cream Background) */}
        {isSubmitted ? (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 24px',
              borderTop: '1px solid #e4e2e1',
              borderBottom: '1px solid #e4e2e1',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(254, 98, 0, 0.1)',
                color: '#fe6200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
              }}
            >
              <CheckCircle2 size={24} />
            </div>
            <h3
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: '24px',
                fontWeight: 700,
                color: '#111111',
                margin: '0 0 8px 0',
              }}
            >
              Proposal Request Received
            </h3>
            <p
              style={{
                fontSize: '15px',
                color: '#66615c',
                lineHeight: 1.6,
                margin: 0,
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              A principal architect will review your project requirements and respond within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              borderTop: '1px solid #e4e2e1',
              paddingTop: '36px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '18px',
              }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: '#222222',
                    marginBottom: '6px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#faf6f0',
                    border: '1px solid #d0ccc0',
                    borderRadius: '8px',
                    fontSize: '14.5px',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: '#222222',
                    marginBottom: '6px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#faf6f0',
                    border: '1px solid #d0ccc0',
                    borderRadius: '8px',
                    fontSize: '14.5px',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  color: '#222222',
                  marginBottom: '6px',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#faf6f0',
                  border: '1px solid #d0ccc0',
                  borderRadius: '8px',
                  fontSize: '14.5px',
                  color: '#111111',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  color: '#222222',
                  marginBottom: '6px',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                Project Scope & Timeline *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe what you are building, timeline expectations, and any existing tech stack..."
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#faf6f0',
                  border: '1px solid #d0ccc0',
                  borderRadius: '8px',
                  fontSize: '14.5px',
                  color: '#111111',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                type="checkbox"
                id="cta-nda"
                checked={formData.ndaRequired}
                onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                style={{ width: '16px', height: '16px', accentColor: '#fe6200', cursor: 'pointer' }}
              />
              <label
                htmlFor="cta-nda"
                style={{
                  fontSize: '13.5px',
                  color: '#55514c',
                  cursor: 'pointer',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                Need an NDA first? Request one before sharing details and we will sign it immediately.
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'background-color 0.2s',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#cf5000';
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#fe6200';
                }}
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Submitting Request...' : buttonText}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ServiceCTA;
