import React, { useState, useCallback } from 'react';
import {
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface ContactsPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

const OFFICE_LOCATION = {
  title: 'Global Headquarters',
  addressLine1: 'Office Space No. 704, 7th Floor, 5-9-59 & 60',
  addressLine2: 'Moguls Court Building, Basheerbagh',
  cityStateZip: 'Hyderabad-500001, Telangana State',
  country: 'India',
  fullAddress: 'Office Space No. 704, 7th Floor, 5-9-59 & 60, Moguls Court Building, Basheerbagh, Hyderabad-500001, Telangana State',
  email: 'contact@neomindstechhub.com',
  workingHours: 'Mon – Fri: 9:00 AM – 6:00 PM IST',
};

const ContactsPageComponent: React.FC<ContactsPageProps> = ({
  onNavigatePage,
  onSuccessToast,
  onOpenLegal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Turnkey product development',
    budget: '',
    message: '',
    ndaRequired: true,
    consent: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast("We're in! Thanks for sharing your challenge. We'll follow up within 1 business day.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'Turnkey product development',
        budget: '',
        message: '',
        ndaRequired: true,
        consent: true,
      });
    }, 600);
  }, [formData.name, formData.email, onSuccessToast]);


  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 90px) 24px clamp(48px, 6vw, 70px)',
          maxWidth: '1240px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            backgroundColor: 'rgba(254, 98, 0, 0.12)',
            border: '1px solid rgba(254, 98, 0, 0.3)',
            borderRadius: '0px',
            color: '#fe6200',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}
        >
          <Mail size={14} />
          <span>Contact Neominds TechHub</span>
        </div>

        <ScrollReveal
          as="h1"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
            display: 'block',
          }}
          blurStrength={8}
        >
          Get in touch with <span style={{ color: '#fe6200' }}>Neominds TechHub</span>
        </ScrollReveal>

        <RevealElement variant="text" delay={0.06}>
          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              lineHeight: 1.6,
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto 40px',
            }}
          >
            Tell us about your idea, your system or your challenge. We will reply within one business day and set up a call at a time that suits your time zone.
          </p>
        </RevealElement>

        <RevealElement variant="card" delay={0.12}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a
              href="mailto:contact@neomindstechhub.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                backgroundColor: '#0a0a0a',
                border: '1px solid #292522',
                padding: '12px 24px',
                borderRadius: '0px',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              <Mail size={18} style={{ color: '#fe6200' }} />
              <span>contact@neomindstechhub.com</span>
            </a>

            <a
              href="tel:+914040000000"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                backgroundColor: '#0a0a0a',
                border: '1px solid #292522',
                padding: '12px 24px',
                borderRadius: '0px',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              <Phone size={18} style={{ color: '#fe6200' }} />
              <span>+91 40 4000 0000</span>
            </a>
          </div>
        </RevealElement>
      </section>

      {/* ========================================================
          SPLIT RFP FORM & PROCESS ASIDE
          ======================================================== */}
      <section style={{ padding: '40px 24px 80px', maxWidth: '1240px', margin: '0 auto', borderTop: '1px solid #292522' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Main Form */}
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #292522', borderRadius: '0px', padding: 'clamp(24px, 4vw, 40px)', height: '100%' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Contact us</h2>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '28px' }}>Our team would love to hear from you.</p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>Your project and goals*</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, deadline, tech stack and team size if known..."
                    style={{ width: '100%', padding: '12px', backgroundColor: '#111827', border: '1px solid #292522', color: '#ffffff', borderRadius: '0px', resize: 'vertical', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>Name*</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#111827', border: '1px solid #292522', color: '#ffffff', borderRadius: '0px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>Work Email*</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#111827', border: '1px solid #292522', color: '#ffffff', borderRadius: '0px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>Phone number (with country code)</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#111827', border: '1px solid #292522', color: '#ffffff', borderRadius: '0px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>Company</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#111827', border: '1px solid #292522', color: '#ffffff', borderRadius: '0px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>Subject*</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#111827', border: '1px solid #292522', color: '#ffffff', borderRadius: '0px', outline: 'none' }}
                    >
                      <option value="New product development">New product development</option>
                      <option value="AI integration or automation">AI integration or automation</option>
                      <option value="Legacy modernization">Legacy modernization</option>
                      <option value="Support and enhancement">Support and enhancement</option>
                      <option value="Careers">Careers</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>Project budget (USD)</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#111827', border: '1px solid #292522', color: '#ffffff', borderRadius: '0px', outline: 'none' }}
                    >
                      <option value="">Select range...</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 to $15,000">$5,000 to $15,000</option>
                      <option value="$15,000 to $50,000">$15,000 to $50,000</option>
                      <option value="Over $50,000">Over $50,000</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      style={{ accentColor: '#fe6200' }}
                    />
                    <span>Need an NDA first? We'll sign one before you share any details.</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#94a3b8', cursor: 'pointer', lineHeight: 1.4 }}>
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      style={{ accentColor: '#fe6200', marginTop: '2px' }}
                    />
                    <span>I agree to the processing of my personal data as described in the Privacy Policy and Cookie Policy, and understand it may be processed outside my country.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-md"
                  style={{
                    width: '100%',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Send message'}</span>
                  <Send size={15} />
                </button>
              </form>
            </div>
          </RevealElement>

          {/* Aside Process Box */}
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div
              style={{
                backgroundColor: '#fe6200',
                borderRadius: '0px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#ffffff',
                height: '100%',
              }}
            >
              <div>
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                  Let's connect
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.95)', marginBottom: '32px' }}>
                  Fill out the form and we will take it from there.
                </p>

                <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
                  What happens next?
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontWeight: 700, fontSize: '12px' }}>
                      1
                    </div>
                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                      Our expert reviews your request and replies with any questions.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontWeight: 700, fontSize: '12px' }}>
                      2
                    </div>
                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                      We sign an NDA if you need one.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontWeight: 700, fontSize: '12px' }}>
                      3
                    </div>
                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                      We send you a proposal with scope, timeline and cost.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontWeight: 700, fontSize: '12px' }}>
                      4
                    </div>
                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                      We kick off your project.
                    </span>
                  </li>
                </ul>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.25)', paddingTop: '24px', marginTop: '36px' }}>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.95)' }}>
                  Average initial response time: <strong>Within 1 business day</strong>
                </div>
              </div>
            </div>
          </RevealElement>
        </div>
      </section>

      {/* ========================================================
          OUR OFFICE / HEADQUARTERS
          ======================================================== */}
      <section style={{ padding: '60px 24px 80px', backgroundColor: '#050505', borderTop: '1px solid #292522', borderBottom: '1px solid #292522' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <ScrollReveal
              as="h2"
              style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '8px', fontFamily: 'var(--font-heading)', display: 'block' }}
              blurStrength={6}
            >
              Our Office
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
                Our global engineering headquarters is centrally located in Hyderabad, India.
              </p>
            </RevealElement>
          </div>

          <div style={{ maxWidth: '640px' }}>
            <RevealElement variant="card" start="top 92%" end="top 65%">
              <div
                style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #292522',
                  borderLeft: '4px solid #fe6200',
                  borderRadius: '0px',
                  padding: '32px',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(254, 98, 0, 0.12)',
                    border: '1px solid rgba(254, 98, 0, 0.3)',
                    padding: '4px 10px',
                    borderRadius: '0px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: '#fe6200',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                  }}
                >
                  {OFFICE_LOCATION.title}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', fontFamily: 'var(--font-heading)' }}>
                  Neominds TechHub
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '15px', color: '#ffffff', fontWeight: 600, margin: 0 }}>{OFFICE_LOCATION.addressLine1}</p>
                  <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0 }}>{OFFICE_LOCATION.addressLine2}</p>
                  <p style={{ fontSize: '15px', color: '#cbd5e1', fontWeight: 600, margin: 0 }}>{OFFICE_LOCATION.cityStateZip}</p>
                  <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>{OFFICE_LOCATION.country}</p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid #292522',
                    paddingTop: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    fontSize: '13.5px',
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 600, color: '#ffffff' }}>Email: </span>
                    <a href={`mailto:${OFFICE_LOCATION.email}`} style={{ color: '#fe6200', textDecoration: 'none', fontWeight: 600 }}>
                      {OFFICE_LOCATION.email}
                    </a>
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: '#ffffff' }}>Hours: </span>
                    <span style={{ color: '#94a3b8' }}>{OFFICE_LOCATION.workingHours}</span>
                  </div>
                </div>
              </div>
            </RevealElement>
          </div>
        </div>
      </section>

      {/* ========================================================
          GLOBAL FOOTER
          ======================================================== */}
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

export const ContactsPage = React.memo(ContactsPageComponent);
