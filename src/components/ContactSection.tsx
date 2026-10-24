import React, { useState, useRef } from 'react';
import { Check, HelpCircle, Paperclip, Mic, Smile, X, Volume2 } from 'lucide-react';
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

  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
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
        backgroundColor: '#000000',
        borderTop: '1px solid #292522',
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
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#A94F0B',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '14px',
                }}
              >
                [ 07 // DIRECT DISPATCH ]
              </span>
              <ScrollReveal
                as="h2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 700,
                  marginBottom: '16px',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                  color: '#F2F0EC',
                  display: 'block',
                }}
                blurStrength={7}
              >
                Let’s build something useful
              </ScrollReveal>
              <RevealElement variant="text" delay={0.06}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: '#A3A3A3',
                    fontSize: '15.5px',
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
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  marginBottom: '20px',
                  color: '#F2F0EC',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ width: '16px', height: '1px', backgroundColor: '#A94F0B' }} />
                What happens next?
              </h3>
            </RevealElement>

            {/* Stepper Checkpoints - Minimal Architectural Ledger */}
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
                    borderBottom: '1px solid #292522',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-metrics)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#A94F0B',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.step}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14.5px',
                        color: item.isKickoff ? '#F2F0EC' : '#A3A3A3',
                        fontWeight: item.isKickoff ? 500 : 400,
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </p>
                    {item.isKickoff && <Smile size={15} color="#A94F0B" style={{ flexShrink: 0 }} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Intake Form */}
          <RevealElement variant="card" start="top 88%" end="top 55%">
            <div
              style={{
                backgroundColor: '#000000',
                border: '1px solid #292522',
                borderRadius: '8px',
                padding: 'clamp(28px, 4vw, 48px)',
                color: '#F2F0EC',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '8px',
                      backgroundColor: '#A94F0B',
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
                      fontSize: '26px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      marginBottom: '10px',
                      color: '#F2F0EC',
                    }}
                  >
                    Thank you for reaching out!
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: '#A3A3A3',
                      fontSize: '15px',
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
                      setAttachedFiles([]);
                      setRecordedAudio(false);
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
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(24px, 2.8vw, 34px)',
                        fontWeight: 700,
                        marginBottom: '8px',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: '#F2F0EC',
                      }}
                    >
                      Tell us what you want to build
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: '#A3A3A3',
                        fontSize: '14px',
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      Share your idea, goals and timeline. We reply within one business day and set up a call at a time that suits your time zone.
                    </p>
                  </div>

                  {/* Challenge / Goal Input */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label
                        htmlFor="challenge"
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#F2F0EC',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        Your project and goals*
                      </label>
                      <span
                        title="Describe your project, goals, timeline, and tech stack if known"
                        style={{ display: 'inline-flex', cursor: 'pointer', opacity: 0.7 }}
                      >
                        <HelpCircle size={14} color="#A3A3A3" />
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
                        padding: '12px 14px',
                        backgroundColor: '#000000',
                        border: '1px solid #292522',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontFamily: 'var(--font-body)',
                        color: '#F2F0EC',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#D8945A';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(216, 148, 90, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#292522';
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
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#F2F0EC',
                          display: 'block',
                          marginBottom: '6px',
                          fontFamily: 'var(--font-body)',
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
                          padding: '12px 14px',
                          backgroundColor: '#000000',
                          border: '1px solid #292522',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontFamily: 'var(--font-body)',
                          color: '#F2F0EC',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#D8945A';
                          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(216, 148, 90, 0.25)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#292522';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#F2F0EC',
                          display: 'block',
                          marginBottom: '6px',
                          fontFamily: 'var(--font-body)',
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
                          padding: '12px 14px',
                          backgroundColor: '#000000',
                          border: '1px solid #292522',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontFamily: 'var(--font-body)',
                          color: '#F2F0EC',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#D8945A';
                          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(216, 148, 90, 0.25)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#292522';
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
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#F2F0EC',
                          display: 'block',
                          marginBottom: '6px',
                          fontFamily: 'var(--font-body)',
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
                          padding: '12px 14px',
                          backgroundColor: '#000000',
                          border: '1px solid #292522',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontFamily: 'var(--font-body)',
                          color: '#F2F0EC',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#D8945A';
                          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(216, 148, 90, 0.25)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#292522';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#F2F0EC',
                          display: 'block',
                          marginBottom: '6px',
                          fontFamily: 'var(--font-body)',
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
                          padding: '12px 14px',
                          backgroundColor: '#000000',
                          border: '1px solid #292522',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontFamily: 'var(--font-body)',
                          color: '#F2F0EC',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#D8945A';
                          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(216, 148, 90, 0.25)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#292522';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
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
                        color: '#A3A3A3',
                        fontFamily: 'var(--font-body)',
                        minHeight: '40px',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.ndaFirst}
                        onChange={(e) => setFormData({ ...formData, ndaFirst: e.target.checked })}
                        style={{ width: '16px', height: '16px', accentColor: '#A94F0B' }}
                      />
                      <span>Need an NDA first? Request one before you share any details, and we'll sign it before we talk.</span>
                    </label>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#C87535',
                          fontSize: '13.5px',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 500,
                          minHeight: '44px',
                          padding: '4px 6px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#D8945A')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#C87535')}
                      >
                        <Paperclip size={15} /> Attach a file (brief, spec or design)
                      </button>

                      <button
                        type="button"
                        onClick={toggleRecording}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: isRecording ? '#8F2929' : '#C87535',
                          fontSize: '13.5px',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 500,
                          minHeight: '44px',
                          padding: '4px 6px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => !isRecording && (e.currentTarget.style.color = '#D8945A')}
                        onMouseLeave={(e) => !isRecording && (e.currentTarget.style.color = '#C87535')}
                      >
                        <Mic size={15} /> {isRecording ? 'Recording (Listening...)' : 'Record a voice message about your project'}
                      </button>
                    </div>
                  </div>

                  {/* Display Attached Files & Audio Notes */}
                  {(attachedFiles.length > 0 || recordedAudio) && (
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '2px 0' }}>
                      {attachedFiles.map((file, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            backgroundColor: 'rgba(169, 79, 11, 0.12)',
                            border: '1px solid #A94F0B',
                            color: '#F2F0EC',
                            fontSize: '12px',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontWeight: 500,
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          <Paperclip size={12} color="#A94F0B" /> {file}
                          <X size={14} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => removeFile(idx)} aria-label="Remove attached file" />
                        </span>
                      ))}
                      {recordedAudio && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            backgroundColor: 'rgba(169, 79, 11, 0.12)',
                            border: '1px solid #A94F0B',
                            color: '#F2F0EC',
                            fontSize: '12px',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontWeight: 500,
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          <Volume2 size={14} color="#A94F0B" /> Voice Memo (0:14)
                          <X size={14} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => setRecordedAudio(false)} aria-label="Remove voice memo" />
                        </span>
                      )}
                    </div>
                  )}

                  {/* Consent Checkbox */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      lineHeight: 1.5,
                      color: '#A3A3A3',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      style={{ marginTop: '2px', accentColor: '#A94F0B' }}
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
                          color: '#C87535',
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
                          color: '#C87535',
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

                  {/* Submit Button */}
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
                      <p style={{ color: '#8F2929', fontSize: '13px', marginTop: '10px', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
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
