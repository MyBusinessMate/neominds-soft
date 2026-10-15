import React, { useState } from 'react';
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
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { LocationsSection } from './LocationsSection';

interface CareersPageProps {
  onNavigateToContact?: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = () => {
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

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) {
      alert('Please complete your name, email and accept the privacy consent.');
      return;
    }
    setSubmitted(true);
  };

  const scrollToCvForm = () => {
    const el = document.getElementById('cv-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPositions = [
    {
      title: 'Senior Full-Stack Engineer (React & Node.js)',
      department: 'Engineering',
      location: 'Hyderabad, India / Remote',
      type: 'Full-time',
      experience: '4-7 years',
      desc: 'Build high-performance web applications and cloud integrations for enterprise clients in North America and Europe.',
    },
    {
      title: 'AI / Machine Learning Engineer',
      department: 'AI & Data',
      location: 'Hyderabad, India / Remote',
      type: 'Full-time',
      experience: '3-6 years',
      desc: 'Design, fine-tune and integrate LLMs, RAG architectures and predictive models into client software systems.',
    },
    {
      title: 'Cloud DevOps & Infrastructure Architect',
      department: 'Cloud & Infrastructure',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '5+ years',
      desc: 'Architect secure, auto-scaling AWS/GCP cloud environments, CI/CD deployment pipelines and container clusters.',
    },
    {
      title: 'Mobile App Developer (Flutter & React Native)',
      department: 'Mobile Engineering',
      location: 'Hyderabad, India / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      desc: 'Develop cross-platform iOS and Android applications with clean UI, responsive animations and offline-first capabilities.',
    },
  ];

  const faqs = [
    {
      q: 'How soon will I hear back after applying?',
      a: 'We aim to reply within 3 to 5 working days after reviewing your application.',
    },
    {
      q: 'Can I apply for more than one role?',
      a: 'Yes. Apply to every role that matches your skills and career ambitions.',
    },
    {
      q: 'Is my application confidential?',
      a: 'Yes. We use your details strictly for hiring and never share them with outside parties without your explicit permission.',
    },
    {
      q: 'How many interviews are there?',
      a: 'Usually 2 to 3 steps: an initial HR conversation, a technical round with deep-dive problem solving, and a final discussion with an engineering lead.',
    },
    {
      q: 'I applied before and was not selected. Can I apply again?',
      a: 'Yes. You are always welcome to reapply when you have gained new experience or when a different role opens up.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '80px', color: '#0f172a' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{ backgroundColor: '#070b14', color: '#ffffff', padding: '90px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(34, 88, 231, 0.18) 0%, rgba(7, 11, 20, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#2258e7',
                marginBottom: '16px',
              }}
            >
              Careers at Neominds TechHub
            </span>

            <ScrollReveal
              as="h1"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 62px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Build your career at Neominds TechHub
            </ScrollReveal>

            <h2
              style={{
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '20px',
                lineHeight: 1.35,
              }}
            >
              Work on products people really use
            </h2>

            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.72)',
                maxWidth: '680px',
                marginBottom: '36px',
              }}
            >
              We hire curious, capable people and give them room to grow. You will work with international clients across the US, UK, Europe, Australia and the Middle East, learn modern technologies, and see your work go live in production.
            </p>

            <button
              onClick={scrollToCvForm}
              style={{
                backgroundColor: '#2258e7',
                color: '#ffffff',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(34, 88, 231, 0.35)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2258e7';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Send us your CV</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. OPEN VACANCIES
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '44px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Join the Team
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
                Open vacancies
              </h2>
            </div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>
              Showing {openPositions.length} active positions
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(540px, 1fr))', gap: '24px' }}>
            {openPositions.map((job, idx) => (
              <RevealElement
                key={idx}
                variant="card"
                delay={idx * 0.05}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#2258e7', backgroundColor: '#eff6ff', padding: '4px 10px', borderRadius: '4px' }}>
                      {job.department}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {job.type}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Briefcase size={12} /> {job.experience}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3 }}>
                    {job.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {job.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #f1f5f9', marginTop: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b' }}>
                    <MapPin size={14} color="#94a3b8" />
                    <span>{job.location}</span>
                  </div>

                  <button
                    onClick={scrollToCvForm}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#2258e7',
                      border: '1px solid #2258e7',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2258e7';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#2258e7';
                    }}
                  >
                    <span>View role & apply</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </RevealElement>
            ))}
          </div>

          {/* ========================================================
              3. NO SUITABLE VACANCY
              ======================================================== */}
          <div
            style={{
              marginTop: '48px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Don't see a role that fits?
              </h3>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Send your CV through the form below or by email to <strong style={{ color: '#0f172a' }}>careers@neomindstechhub.com</strong>. We read every application and get back to you when an aligned position opens.
              </p>
            </div>

            <button
              onClick={scrollToCvForm}
              style={{
                backgroundColor: '#0f172a',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2258e7')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f172a')}
            >
              Write to us
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FAQ: CAREERS AT NEOMINDS TECHHUB
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Questions & Answers
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              FAQ: careers at Neominds TechHub
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: 'none',
                      backgroundColor: 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      color="#64748b"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 20px', color: '#475569', fontSize: '15px', lineHeight: 1.65 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FRAUD ALERT
          ======================================================== */}
      <section style={{ padding: '24px 24px', backgroundColor: '#fef2f2', borderTop: '1px solid #fee2e2', borderBottom: '1px solid #fee2e2' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ShieldAlert size={28} color="#dc2626" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ color: '#991b1b', fontSize: '15px', display: 'block', marginBottom: '2px' }}>
              Hiring Fraud Alert
            </strong>
            <p style={{ margin: 0, fontSize: '14px', color: '#b91c1c', lineHeight: 1.5 }}>
              Neominds TechHub never asks candidates for money at any stage of hiring. If someone asks you to pay fees or purchase equipment, please report it immediately to{' '}
              <a href="mailto:careers@neomindstechhub.com" style={{ color: '#991b1b', fontWeight: 600, textDecoration: 'underline' }}>
                careers@neomindstechhub.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. SEND YOUR CV (FORM)
          ======================================================== */}
      <section id="cv-form" style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Apply Today
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              Send us your CV
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', marginTop: '8px' }}>
              We look forward to reading it.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '12px',
                padding: '40px',
                textAlign: 'center',
              }}
            >
              <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#166534', marginBottom: '8px' }}>
                Application Received!
              </h3>
              <p style={{ fontSize: '15px', color: '#15803d', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
                Thank you, {formData.name}. Our talent acquisition team will review your CV and respond within 3 to 5 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '40px',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Position of Interest
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Full-Stack Engineer"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 90000 00000"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Message (anything else about your experience or links to your work)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details about your recent projects, GitHub or portfolio..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Attach CV */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Attach CV (PDF, DOCX up to 10MB)
                </label>
                <div
                  style={{
                    border: '2px dashed #cbd5e1',
                    borderRadius: '8px',
                    padding: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#f8fafc',
                  }}
                  onClick={() => document.getElementById('cv-file-input')?.click()}
                >
                  <Upload size={24} color="#64748b" style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '14px', color: '#334155', fontWeight: 500 }}>
                    {fileName ? fileName : 'Click to select or drag and drop your resume'}
                  </div>
                  <input
                    id="cv-file-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px' }}>
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  style={{ marginTop: '3px', cursor: 'pointer' }}
                />
                <label htmlFor="consent" style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, cursor: 'pointer' }}>
                  I agree to the processing of my personal data as described in the Privacy Policy and Cookie Policy.
                </label>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#2258e7',
                  color: '#ffffff',
                  border: 'none',
                  padding: '14px 24px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2258e7')}
              >
                <Send size={16} />
                <span>Send message</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Shared Locations and Newsletter Block */}
      <LocationsSection />
    </div>
  );
};
