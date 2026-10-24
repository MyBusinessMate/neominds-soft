import React, { useState, useCallback, useMemo } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  Upload,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { Footer } from './Footer';

interface CareersPageProps {
  onNavigatePage?: (page: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

// Hoisted static arrays to eliminate render-time re-allocation
const DEPARTMENTS = ['All', 'Engineering', 'AI & Data', 'Cloud & DevOps', 'Product & QA'] as const;

const OPEN_POSITIONS = [
  {
    title: 'Senior Full-Stack Engineer (React & Node.js)',
    department: 'Engineering',
    location: 'Remote / Hybrid (Americas, Europe & APAC)',
    type: 'Full-time',
    experience: '5+ years',
    desc: 'Build high-performance web applications and cloud integrations for enterprise clients worldwide.',
  },
  {
    title: 'Lead AI / Machine Learning Engineer',
    department: 'AI & Data',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    desc: 'Design, fine-tune and integrate enterprise LLMs, agentic workflows and production RAG pipelines.',
  },
  {
    title: 'Cloud DevOps & Infrastructure Architect',
    department: 'Cloud & DevOps',
    location: 'Remote / Delivery Hub',
    type: 'Full-time',
    experience: '5+ years',
    desc: 'Architect secure, auto-scaling AWS/GCP cloud environments, zero-trust networks, and CI/CD pipelines.',
  },
  {
    title: 'Mobile App Developer (Flutter & React Native)',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '3-5 years',
    desc: 'Develop cross-platform iOS and Android applications with clean UI, responsive animations and offline-first capabilities.',
  },
  {
    title: 'Senior Quality Assurance Automation Engineer',
    department: 'Product & QA',
    location: 'Remote / Delivery Hub',
    type: 'Full-time',
    experience: '4+ years',
    desc: 'Build end-to-end Playwright and Cypress test suites, performance regression benches, and CI gates.',
  },
];

const FAQS = [
  {
    q: 'How soon will I hear back after applying?',
    a: 'We aim to reply within 3 to 5 business days after reviewing your application and technical background.',
  },
  {
    q: 'Can I apply for more than one role?',
    a: 'Yes. Apply to any role that aligns with your expertise, career stage, and professional aspirations.',
  },
  {
    q: 'Is my application confidential?',
    a: 'Yes. We use your details strictly for recruitment and never share them with third parties without your explicit permission.',
  },
  {
    q: 'How many interview stages are there?',
    a: 'Typically 3 steps: an initial introductory call with our talent team, a technical architectural deep-dive with engineering leads, and a final alignment discussion with leadership.',
  },
  {
    q: 'Can I work 100% remotely?',
    a: 'Yes! Most engineering, AI, and design positions at Neominds TechHub are fully remote-friendly across compatible time zones.',
  },
  {
    q: 'I applied before and was not selected. Can I apply again?',
    a: 'Absolutely. You are always welcome to reapply as your skillset evolves or when new specialized openings launch.',
  },
];

const CareersPageComponent: React.FC<CareersPageProps> = ({
  onNavigatePage,
  onOpenLegal,
}) => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const toggleFaq = useCallback((index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) {
      setFormError('Please complete your name, email and accept the privacy consent.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  }, [formData.name, formData.email, formData.consent]);


  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  }, [newsletterEmail]);

  const scrollToCvForm = useCallback((roleTitle?: string) => {
    if (roleTitle) {
      setFormData((prev) => ({ ...prev, position: roleTitle }));
    }
    const el = document.getElementById('cv-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToVacancies = useCallback(() => {
    const el = document.getElementById('vacancies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const filteredPositions = useMemo(
    () =>
      selectedDept === 'All'
        ? OPEN_POSITIONS
        : OPEN_POSITIONS.filter((pos) => pos.department === selectedDept),
    [selectedDept]
  );

  return (
    <div className="p-careers-page" style={{ backgroundColor: 'var(--colors-background-dark, #200b00)', minHeight: '100vh', paddingTop: '68px', color: '#ffffff', fontFamily: 'var(--font-body, system-ui, sans-serif)' }}>
      {/* 1. s-hero g-section theme-light g-section--pb-0 s-hero--centered */}
      <section className="s-hero g-section theme-light s-hero--centered" style={{ backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', padding: 'clamp(56px, 8vw, 96px) 24px clamp(48px, 6vw, 72px)', textAlign: 'center', borderBottom: '1px solid #351505' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', backgroundColor: 'rgba(254, 98, 0, 0.08)', borderRadius: '2px', color: '#fe6200', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            <Briefcase size={14} />
            <span>Join Our Global Team</span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px 0' }}>
            Find your dream job at Neominds TechHub
          </h1>

          <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 32px auto' }}>
            Work alongside experienced engineers, architects, and AI pioneers building impactful digital products for industry leaders across the globe.
          </p>

          <button
            type="button"
            onClick={scrollToVacancies}
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
            <span>Explore open positions</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 2. g-section s-vacancies theme-light js-explore-vacancies */}
      <section id="vacancies" className="g-section s-vacancies theme-light" style={{ padding: 'clamp(64px, 8vw, 100px) 24px', backgroundColor: 'var(--colors-background-dark, #200b00)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.02em', margin: '0 0 16px 0' }}>
              Start doing work that matters
            </h2>
            <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Our philosophy is direct: hire talented engineers, give them clear ownership, and build an environment where craft and technical excellence come first.
            </p>
          </div>

          {/* Department Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '2px',
                  border: `1px solid ${selectedDept === dept ? '#fe6200' : '#351505'}`,
                  backgroundColor: selectedDept === dept ? '#fe6200' : '#ffffff',
                  color: selectedDept === dept ? '#ffffff' : '#475569',
                  fontSize: '14px',
                  fontWeight: selectedDept === dept ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Vacancy Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredPositions.map((pos, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
                  border: '1px solid #351505',
                  borderRadius: '4px',
                  padding: '28px 32px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <div style={{ flex: '1 1 500px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#fe6200', backgroundColor: 'rgba(254, 98, 0, 0.08)', padding: '4px 10px', borderRadius: '2px' }}>
                      {pos.department}
                    </span>
                    <span style={{ fontSize: '13px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} />
                      {pos.type}
                    </span>
                    <span style={{ fontSize: '13px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} />
                      {pos.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#070b14', margin: '0 0 8px 0' }}>
                    {pos.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                    {pos.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToCvForm(pos.title)}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#070b14',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '2px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    flexShrink: 0,
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#070b14')}
                >
                  <span>Apply now</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. s-faq g-section theme-light */}
      <section className="s-faq g-section theme-light" style={{ padding: 'clamp(64px, 8vw, 96px) 24px', backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', borderTop: '1px solid #351505', borderBottom: '1px solid #351505' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: 800, color: '#070b14', letterSpacing: '-0.02em', margin: '0 0 12px 0' }}>
              Frequently asked questions
            </h2>
            <p style={{ fontSize: '15.5px', color: '#94a3b8', margin: 0 }}>
              Find quick answers to common questions about our hiring, engineering culture, and work environment.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--colors-background-dark, #200b00)',
                  border: '1px solid #351505',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#070b14' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#64748b"
                    style={{
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {activeFaq === idx && (
                  <div style={{ padding: '0 24px 20px 24px', color: '#94a3b8', fontSize: '14.5px', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fraud Alert Notice */}
          <div style={{ marginTop: '40px', padding: '20px 24px', backgroundColor: '#121212', border: '1px solid #fe6200', borderRadius: '4px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <ShieldAlert size={22} color="#fe6200" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '13.5px', color: '#D1D5DB', lineHeight: 1.6 }}>
              <strong style={{ color: '#FFFFFF' }}>Recruiting fraud notice:</strong> Neominds TechHub recruiters only contact candidates from official company email addresses ending in <code>@neominds.com</code> or verified corporate LinkedIn profiles. We never request financial payments, equipment purchasing, or sensitive bank details as part of our interview process.
            </div>
          </div>
        </div>
      </section>

      {/* 4. theme-dark g-section s-request (CV Application Form) */}
      <section id="cv-form" className="theme-dark g-section s-request" style={{ padding: 'clamp(64px, 8vw, 100px) 24px', backgroundColor: 'var(--colors-background-dark, #200b00)', color: '#ffffff' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 12px 0' }}>
              We look forward to reviewing your resume!
            </h2>
            <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
              Don’t see an exact match above? Submit an open application and let us know what makes you thrive.
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: '48px', backgroundColor: 'rgba(254, 98, 0, 0.1)', border: '1px solid rgba(254, 98, 0, 0.3)', borderRadius: '4px', textAlign: 'center' }}>
              <CheckCircle2 size={48} color="#fe6200" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                We're in!
              </h3>
              <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '520px', margin: '0 auto' }}>
                Thanks for sharing your application with us. We're already gearing up to review it and will get back to you within 3–5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <label htmlFor="cv-name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                    Full Name*
                  </label>
                  <input
                    id="cv-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '14px 16px', backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', border: '1px solid #27272A', borderRadius: '2px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="cv-email" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                    Email Address*
                  </label>
                  <input
                    id="cv-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '14px 16px', backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', border: '1px solid #27272A', borderRadius: '2px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <label htmlFor="cv-position" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                    Position of Interest
                  </label>
                  <input
                    id="cv-position"
                    name="position"
                    type="text"
                    placeholder="e.g. Senior Full-Stack Engineer"
                    value={formData.position}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '14px 16px', backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', border: '1px solid #27272A', borderRadius: '2px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="cv-phone" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                    Phone Number
                  </label>
                  <input
                    id="cv-phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '14px 16px', backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', border: '1px solid #27272A', borderRadius: '2px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cv-message" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                  Cover Note / Portfolio Links
                </label>
                <textarea
                  id="cv-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about yourself, your GitHub or portfolio links..."
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '14px 16px', backgroundColor: 'var(--colors-surface-dark-subtle, #351505)', border: '1px solid #27272A', borderRadius: '2px', color: '#ffffff', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                />
              </div>

              {/* Resume File Upload */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                  Upload Resume / CV (PDF, DOCX)
                </label>
                <div
                  onClick={() => document.getElementById('resume-upload-input')?.click()}
                  style={{
                    border: '1px dashed #334155',
                    borderRadius: '2px',
                    padding: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#0b1120',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <Upload size={22} color="#fe6200" style={{ margin: '0 auto 8px auto' }} />
                  <div style={{ fontSize: '13.5px', color: '#cbd5e1' }}>
                    {fileName ? fileName : 'Click to select or drag and drop your resume file'}
                  </div>
                  <input
                    id="resume-upload-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                </div>
              </div>

              {/* Consent */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <input
                  id="cv-consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  style={{ marginTop: '3px', cursor: 'pointer', accentColor: '#fe6200' }}
                />
                <label htmlFor="cv-consent" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, cursor: 'pointer' }}>
                  I agree to the processing of my personal data for recruitment purposes in accordance with the Privacy Policy.
                </label>
              </div>

              <button
                type="submit"
                style={{
                  padding: '16px 32px',
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '2px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span>Send application</span>
                <Send size={16} />
              </button>
              {formError && (
                <div style={{ color: '#f87171', fontSize: '13px', marginTop: '12px', fontWeight: 500 }}>
                  {formError}
                </div>
              )}
            </form>

          )}
        </div>
      </section>

      {/* 5. s-newsletter g-section js-newsletter theme-light */}
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

      {/* 6. Footer */}
      <Footer onNavigate={(target) => onNavigatePage && onNavigatePage(target.replace('#', ''))} onOpenLegal={onOpenLegal} />
    </div>
  );
};

export const CareersPage = React.memo(CareersPageComponent);
