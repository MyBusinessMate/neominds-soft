import React, { useState, useRef } from 'react';
import { Check, HelpCircle, Paperclip, Mic, Smile, X, Volume2 } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

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

  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileName = e.target.files[0].name;
      setAttachedFiles((prev) => [...prev, fileName]);
      if (onSuccessToast) onSuccessToast(`File "${fileName}" attached successfully.`);
    }
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        setRecordedAudio(true);
        if (onSuccessToast) onSuccessToast('Voice message recorded (0:14).');
      }, 3000);
    } else {
      setIsRecording(false);
      setRecordedAudio(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.challenge || !formData.name || !formData.email || !formData.consent) {
      alert('Please fill in required fields (*) and accept privacy terms.');
      return;
    }
    setSubmitted(true);
    if (onSuccessToast) onSuccessToast('Your message and project requirements have been submitted.');
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#001334',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(320px, 1.35fr)',
          minHeight: '640px',
        }}
        className="contact-grid"
      >
        {/* Left Blue Panel matching contact.png */}
        <div
          style={{
            backgroundColor: '#2258E7',
            padding: 'clamp(36px, 5vw, 80px) clamp(20px, 4vw, 64px)',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <ScrollReveal
              as="h2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(30px, 3.8vw, 48px)',
                fontWeight: 700,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#ffffff',
                display: 'block',
              }}
              blurStrength={7}
            >
              Let’s build something useful
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p
                className="body-lead"
                style={{
                  color: 'rgba(255, 255, 255, 0.92)',
                  marginBottom: 'clamp(32px, 4vw, 56px)',
                }}
              >
                Share your idea, goals and timeline. We reply within one business day and set up a call at a time that suits your time zone.
              </p>
            </RevealElement>

            <RevealElement variant="text" delay={0.1}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(17px, 1.8vw, 20px)',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#ffffff',
                }}
              >
                What happens next?
              </h3>
            </RevealElement>

            {/* Stepper Checkpoints */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>1</span>
                </div>
                <p className="body-text" style={{ color: '#ffffff' }}>
                  Our expert reviews your request and replies with any questions.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>2</span>
                </div>
                <p className="body-text" style={{ color: '#ffffff' }}>
                  We sign an NDA if you need one.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>3</span>
                </div>
                <p className="body-text" style={{ color: '#ffffff' }}>
                  We send you a proposal with scope, timeline and cost.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Smile size={14} color="#ffffff" />
                </div>
                <p className="body-text" style={{ color: '#ffffff' }}>
                  We kick off your project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right White Form Panel matching full-site white theme */}
        <RevealElement variant="card" start="top 88%" end="top 55%">
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: 'clamp(36px, 5vw, 80px) clamp(20px, 4vw, 64px)',
              color: '#0f172a',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderTop: '1px solid #e2e8f0',
            }}
          >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#2258E7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <Check size={32} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '12px', color: '#0f172a' }}>
                Thank you for reaching out!
              </h3>
              <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '440px', margin: '0 auto 24px' }}>
                Our engineering team will review your requirements and respond within 24 hours.
              </p>
              <button
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
                  setAttachedFiles([]);
                  setRecordedAudio(false);
                }}
                className="btn btn-primary btn-md"
                style={{ padding: '12px 32px' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(30px, 3.8vw, 48px)',
                    fontWeight: 700,
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    color: '#0f172a',
                  }}
                >
                  Tell us what you want to build
                </h2>
                <p className="body-lead" style={{ color: '#475569' }}>
                  Share your idea, goals and timeline. We reply within one business day and set up a call at a time that suits your time zone.
                </p>
              </div>

              {/* Challenge / Goal Input */}
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label htmlFor="challenge" style={{ fontSize: '14px', fontWeight: 600, color: '#334155', fontFamily: 'var(--font-heading)' }}>
                    Your project and goals*
                  </label>
                  <span title="Describe your project, goals, timeline, and tech stack if known" style={{ display: 'inline-flex', cursor: 'pointer' }}>
                    <HelpCircle size={14} color="#64748b" />
                  </span>
                </div>
                <input
                  id="challenge"
                  type="text"
                  required
                  placeholder="Describe your project, timeline, tech stack and goals..."
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 'var(--input-radius)', fontSize: '14px', color: '#0f172a', outline: 'none', marginTop: '6px' }}
                />
              </div>

              {/* Name & Corporate Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', fontFamily: 'var(--font-heading)' }}>
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 'var(--input-radius)', fontSize: '14px', color: '#0f172a', outline: 'none', marginTop: '6px' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', fontFamily: 'var(--font-heading)' }}>
                    Corporate email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 'var(--input-radius)', fontSize: '14px', color: '#0f172a', outline: 'none', marginTop: '6px' }}
                  />
                </div>
              </div>

              {/* Phone & Company Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div>
                  <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', fontFamily: 'var(--font-heading)' }}>
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 'var(--input-radius)', fontSize: '14px', color: '#0f172a', outline: 'none', marginTop: '6px' }}
                  />
                </div>

                <div>
                  <label htmlFor="company" style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', fontFamily: 'var(--font-heading)' }}>
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 'var(--input-radius)', fontSize: '14px', color: '#0f172a', outline: 'none', marginTop: '6px' }}
                  />
                </div>
              </div>

              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.png,.jpg,.zip"
              />

              {/* NDA Checkbox & Action Controls Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  paddingTop: '6px',
                }}
              >
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px', color: '#334155', minHeight: '40px' }}>
                  <input
                    type="checkbox"
                    checked={formData.ndaFirst}
                    onChange={(e) => setFormData({ ...formData, ndaFirst: e.target.checked })}
                    style={{ width: '16px', height: '16px', accentColor: '#2258e7' }}
                  />
                  <span>Need an NDA first? Request one before you share any details, and we'll sign it before we talk.</span>
                </label>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#2258e7',
                      fontSize: '14px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      minHeight: '44px',
                      padding: '4px 8px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Paperclip size={16} /> Attach a file (brief, spec or design)
                  </button>

                  <button
                    type="button"
                    onClick={toggleRecording}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: isRecording ? '#ef4444' : '#2258e7',
                      fontSize: '14px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      minHeight: '44px',
                      padding: '4px 8px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Mic size={16} /> {isRecording ? 'Recording (Listening...)' : 'Record a voice message about your project'}
                  </button>
                </div>
              </div>

              {/* Display Attached Files & Audio Notes */}
              {(attachedFiles.length > 0 || recordedAudio) && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '4px 0' }}>
                  {attachedFiles.map((file, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: 'rgba(34, 88, 231, 0.08)',
                        border: '1px solid #2258e7',
                        color: '#2258e7',
                        fontSize: '12px',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontWeight: 600,
                      }}
                    >
                      <Paperclip size={12} /> {file}
                      <X size={14} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => removeFile(idx)} aria-label="Remove attached file" />
                    </span>
                  ))}
                  {recordedAudio && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid #10b981',
                        color: '#059669',
                        fontSize: '12px',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontWeight: 600,
                      }}
                    >
                      <Volume2 size={14} color="#10b981" /> Voice Memo (0:14)
                      <X size={14} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => setRecordedAudio(false)} aria-label="Remove voice memo" />
                    </span>
                  )}
                </div>
              )}

              {/* Consent Checkbox */}
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', fontSize: '13px', lineHeight: 1.5, color: '#64748b' }}>
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  style={{ marginTop: '2px', accentColor: '#2258e7' }}
                />
                <span>
                  I agree to the processing of my personal data as described in the{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenPrivacy) onOpenPrivacy();
                    }}
                    style={{ color: '#2258e7', textDecoration: 'underline', cursor: 'pointer', fontSize: '13px', background: 'none', border: 'none', padding: 0, fontWeight: 600 }}
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
                    style={{ color: '#2258e7', textDecoration: 'underline', cursor: 'pointer', fontSize: '13px', background: 'none', border: 'none', padding: 0, fontWeight: 600 }}
                  >
                    Cookie Policy
                  </button>
                  , and understand it may be processed outside my country.
                </span>
              </label>

              {/* Submit Button */}
              <div style={{ paddingTop: '8px' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    width: 'auto',
                    minWidth: '220px',
                  }}
                >
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>
      </RevealElement>
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
