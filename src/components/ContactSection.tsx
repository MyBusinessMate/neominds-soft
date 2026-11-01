import React, { useState } from 'react';
import { Check, HelpCircle, Smile } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { Button } from './ui/Button';

interface ContactSectionProps {
  onSuccessToast?: (msg: string) => void;
  onOpenPrivacy?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessToast, onOpenPrivacy }) => {
  const [formData, setFormData] = useState({
    challenge: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    ndaFirst: false,
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.challenge || !formData.name || !formData.email || !formData.consent) {
      setFormError('Please fill in required fields (*) and accept privacy terms.');
      return;
    }
    setFormError('');
    setSubmitted(true);
    if (onSuccessToast) onSuccessToast('Your message and project requirements have been submitted.');
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--colors-background-dark)', // #fbf9f5 Freehand deep dark brown
        borderTop: '1px solid var(--colors-border-dark)',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: 'clamp(56px, 7vw, 100px) clamp(20px, 4vw, 48px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1fr) minmax(320px, 1.35fr)',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Editorial Architectural Next Steps */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <ScrollReveal
                as="h2"
                style={{
                  fontFamily: 'var(--typography-display-family)',
                  fontSize: 'clamp(36px, 4.2vw, 56px)',
                  fontWeight: 400,
                  marginBottom: '16px',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  color: '#000000',
                  display: 'block',
                }}
                blurStrength={7}
              >
                Let’s build something useful
              </ScrollReveal>
              <RevealElement variant="text" delay={0.06}>
                <p
                  style={{
                    fontFamily: 'var(--typography-body-family)',
                    color: 'var(--colors-text-muted)',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    marginBottom: 'clamp(36px, 4vw, 56px)',
                    maxWidth: '460px',
                  }}
                >
                  Share your idea, goals and timeline. We reply within one business day and set up a call at a time that suits your time zone.
                </p>
              </RevealElement>
            </div>

            <RevealElement variant="text" delay={0.1}>
              <h3
                style={{
                  fontFamily: 'var(--typography-heading1-family)',
                  fontSize: '20px',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  marginBottom: '20px',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                What happens next?
              </h3>
            </RevealElement>

            {/* Stepper Checkpoints - Freehand Minimal Ledger */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                {
                  step: '01',
                  text: 'Our expert reviews your request and replies with any questions.',
                },
                {
                  step: '02',
                  text: 'We sign an NDA if you need one.',
                },
                {
                  step: '03',
                  text: 'We send you a proposal with scope, timeline and cost.',
                },
                {
                  step: '04',
                  text: 'We kick off your project.',
                  isKickoff: true,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gap: '16px',
                    alignItems: 'baseline',
                    padding: '18px 0',
                    borderBottom: '1px solid var(--colors-border-dark)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--typography-mono-family)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--colors-primary)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.step}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--typography-body-family)',
                        fontSize: '15px',
                        color: item.isKickoff ? '#000000' : 'var(--colors-text-muted)',
                        fontWeight: item.isKickoff ? 500 : 400,
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </p>
                    {item.isKickoff && <Smile size={15} color="var(--colors-primary)" style={{ flexShrink: 0 }} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Freehand Card (10px radius, #f0ece2 bg) */}
          <RevealElement variant="card" start="top 88%" end="top 55%">
            <div
              className="card-dark"
              style={{
                backgroundColor: 'var(--colors-surface-dark-subtle)', // #f0ece2
                border: '1px solid var(--colors-border-dark)',
                borderRadius: '8px',
                padding: 'clamp(28px, 4vw, 48px)',
                color: '#000000',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--colors-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <Check size={28} color="#ffffff" />
                  </div>
                  <h3
                    style={{
                      fontSize: '28px',
                      fontWeight: 400,
                      fontFamily: 'var(--typography-heading1-family)',
                      marginBottom: '10px',
                      color: '#000000',
                    }}
                  >
                    Thank you for reaching out!
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--typography-body-family)',
                      color: 'var(--colors-text-muted)',
                      fontSize: '16px',
                      maxWidth: '440px',
                      margin: '0 auto 24px',
                      lineHeight: 1.6,
                    }}
                  >
                    Our engineering team will review your requirements and respond within 24 hours.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        challenge: '',
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        ndaFirst: false,
                        consent: false,
                      });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div>
                    <h2
                      style={{
                        fontFamily: 'var(--typography-heading1-family)',
                        fontSize: 'clamp(26px, 3vw, 34px)',
                        fontWeight: 400,
                        marginBottom: '8px',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#000000',
                      }}
                    >
                      Tell us what you want to build
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--typography-body-family)',
                        color: 'var(--colors-text-muted)',
                        fontSize: '15px',
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      Share your idea, goals and timeline. We reply within one business day and set up a call at a time that suits your time zone.
                    </p>
                  </div>

                  {/* Challenge / Goal Input */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label
                        htmlFor="challenge"
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#000000',
                          fontFamily: 'var(--typography-body-family)',
                        }}
                      >
                        Your project and goals*
                      </label>
                      <span
                        title="Describe your project, goals, timeline, and tech stack if known"
                        style={{ display: 'inline-flex', cursor: 'pointer', opacity: 0.7 }}
                      >
                        <HelpCircle size={14} color="var(--colors-text-muted)" />
                      </span>
                    </div>
                    <input
                      id="challenge"
                      type="text"
                      required
                      placeholder="Describe your project, timeline, tech stack and goals..."
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'var(--colors-background-dark)', // #fbf9f5
                        border: '1px solid var(--colors-border-dark)',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontFamily: 'var(--typography-body-family)',
                        color: '#000000',
                        outline: 'none',
                        transition: 'border-color 0.38s ease, box-shadow 0.38s ease',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--colors-primary)';
                        e.currentTarget.style.boxShadow = '0 0 0 2px var(--colors-primary)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Name & Corporate Email Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#000000',
                          display: 'block',
                          marginBottom: '8px',
                          fontFamily: 'var(--typography-body-family)',
                        }}
                      >
                        Name*
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--colors-border-light)',
                          borderRadius: '8px',
                          fontSize: '15px',
                          fontFamily: 'var(--typography-body-family)',
                          color: '#000000',
                          outline: 'none',
                          transition: 'border-color 0.38s ease, box-shadow 0.38s ease',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--colors-primary)';
                          e.currentTarget.style.boxShadow = '0 0 0 2px var(--colors-primary)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#000000',
                          display: 'block',
                          marginBottom: '8px',
                          fontFamily: 'var(--typography-body-family)',
                        }}
                      >
                        Corporate email*
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--colors-border-light)',
                          borderRadius: '8px',
                          fontSize: '15px',
                          fontFamily: 'var(--typography-body-family)',
                          color: '#000000',
                          outline: 'none',
                          transition: 'border-color 0.38s ease, box-shadow 0.38s ease',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--colors-primary)';
                          e.currentTarget.style.boxShadow = '0 0 0 2px var(--colors-primary)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
                    <div>
                      <label
                        htmlFor="phone"
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#000000',
                          display: 'block',
                          marginBottom: '8px',
                          fontFamily: 'var(--typography-body-family)',
                        }}
                      >
                        Phone number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--colors-border-light)',
                          borderRadius: '8px',
                          fontSize: '15px',
                          fontFamily: 'var(--typography-body-family)',
                          color: '#000000',
                          outline: 'none',
                          transition: 'border-color 0.38s ease, box-shadow 0.38s ease',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--colors-primary)';
                          e.currentTarget.style.boxShadow = '0 0 0 2px var(--colors-primary)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#000000',
                          display: 'block',
                          marginBottom: '8px',
                          fontFamily: 'var(--typography-body-family)',
                        }}
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--colors-border-light)',
                          borderRadius: '8px',
                          fontSize: '15px',
                          fontFamily: 'var(--typography-body-family)',
                          color: '#000000',
                          outline: 'none',
                          transition: 'border-color 0.38s ease, box-shadow 0.38s ease',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--colors-primary)';
                          e.currentTarget.style.boxShadow = '0 0 0 2px var(--colors-primary)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--colors-border-dark)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                                    {/* NDA Checkbox & Action Controls Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '14px',
                      paddingTop: '4px',
                    }}
                  >
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        fontSize: '13.5px',
                        color: 'var(--colors-text-muted)',
                        fontFamily: 'var(--typography-body-family)',
                        minHeight: '40px',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.ndaFirst}
                        onChange={(e) => setFormData({ ...formData, ndaFirst: e.target.checked })}
                        style={{ width: '16px', height: '16px', accentColor: 'var(--colors-primary)' }}
                      />
                      <span>Need an NDA first? Request one before you share any details, and we'll sign it before we talk.</span>
                    </label>
                  </div>

                  {/* Consent Checkbox */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      lineHeight: 1.5,
                      color: 'var(--colors-text-muted)',
                      fontFamily: 'var(--typography-body-family)',
                    }}
                  >
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      style={{ marginTop: '2px', accentColor: 'var(--colors-primary)' }}
                    />
                    <span>
                      I agree to the processing of my personal data as described in the{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onOpenPrivacy) onOpenPrivacy();
                        }}
                        style={{
                          color: 'var(--colors-primary)',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          fontSize: '13px',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          fontWeight: 500,
                        }}
                      >
                        Privacy Policy
                      </button>{' '}
                      and{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onOpenPrivacy) onOpenPrivacy();
                        }}
                        style={{
                          color: 'var(--colors-primary)',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          fontSize: '13px',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          fontWeight: 500,
                        }}
                      >
                        Cookie Policy
                      </button>
                      , and understand it may be processed outside my country.
                    </span>
                  </label>

                  {/* Submit Button (Strict 0px radius, #fe6200 bg) */}
                  <div style={{ paddingTop: '6px' }}>
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidthMobile
                      style={{ minWidth: '220px' }}
                    >
                      Send message
                    </Button>
                    {formError && (
                      <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '10px', fontWeight: 500, fontFamily: 'var(--typography-body-family)' }}>
                        {formError}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </RevealElement>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
