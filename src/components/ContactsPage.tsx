import React, { useState } from 'react';
import {
  Mail,
  Phone,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface ContactsPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
}

export const ContactsPage: React.FC<ContactsPageProps> = ({
  onNavigatePage,
  onSuccessToast,
}) => {
  const [activeRegion, setActiveRegion] = useState<'Headquarters' | 'Americas' | 'Europe'>('Headquarters');
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

  const handleSubmit = (e: React.FormEvent) => {
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
  };

  const hqLocations = [
    { title: 'Hyderabad, India (Global HQ)', address: 'Moguls Court 7th Floor, Basheer Bagh, Hyderabad, Telangana, India', phone: '+91 40 4000 0000' },
  ];

  const americasLocations = [
    { title: 'San Diego, California', address: '4445 Eastgate Mall, Suite 200, 92121', phone: '1-800-288-9659' },
    { title: 'San Francisco, California', address: '50 California St #1500, 94111', phone: '1-800-288-9659' },
    { title: 'Pittsburgh, Pennsylvania', address: 'One Oxford Centre, 500 Grant St Suite 2900, 15219', phone: '1-800-288-9659' },
    { title: 'Durham, North Carolina', address: 'RTP Meridian, 2530 Meridian Pkwy Suite 300, 27713', phone: '1-800-288-9659' },
    { title: 'San Jose, Costa Rica', address: 'C. 118B, Trejos Montealegre, 10203', phone: '1-800-288-9659' },
  ];

  const europeLocations = [
    { title: 'Warsaw, Poland', address: '126/134 Marszalkowska Street, 00-008', phone: '1-800-288-9659' },
    { title: 'Wroclaw, Poland', address: '13 Pilsudskiego Street, 2nd floor, 50-996', phone: '1-800-288-9659' },
    { title: 'Gdańsk, Poland', address: 'Opera Office, 13A Zwycięstwa Street, 80-219', phone: '1-800-288-9659' },
    { title: 'Dubai, UAE', address: 'Dubai Silicon Oasis, DDP, Building A1', phone: '1-800-288-9659' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
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
            backgroundColor: 'rgba(34, 88, 231, 0.08)',
            border: '1px solid rgba(34, 88, 231, 0.25)',
            borderRadius: '0px',
            color: '#2258e7',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}
        >
          <Mail size={14} />
          <span>Contact Neominds</span>
        </div>

        <ScrollReveal
          as="h1"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: '#0f172a',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
            display: 'block',
          }}
          blurStrength={8}
        >
          Let&#8217;s Start Building <span style={{ color: '#2258e7' }}>Together</span>
        </ScrollReveal>

        <RevealElement variant="text" delay={0.06}>
          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              lineHeight: 1.6,
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto 40px',
            }}
          >
            Reach out to Neominds and unlock the power of innovative software solutions. Fill out the consultation request below to discuss your project scope, timeline, and goals.
          </p>
        </RevealElement>

        <RevealElement variant="card" delay={0.12}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a
              href="mailto:rfq@neominds.io"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#0f172a',
                fontSize: '15px',
                fontWeight: 600,
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '12px 24px',
                borderRadius: '0px',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              <Mail size={18} style={{ color: '#2258e7' }} />
              <span>rfq@neominds.io</span>
            </a>

            <a
              href="tel:1-800-288-9659"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#0f172a',
                fontSize: '15px',
                fontWeight: 600,
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '12px 24px',
                borderRadius: '0px',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              <Phone size={18} style={{ color: '#16a34a' }} />
              <span>1-800-288-9659</span>
            </a>
          </div>
        </RevealElement>
      </section>

      {/* ========================================================
          SPLIT RFP FORM & PROCESS ASIDE
          ======================================================== */}
      <section style={{ padding: '40px 24px 80px', maxWidth: '1240px', margin: '0 auto', borderTop: '1px solid #e2e8f0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Main Form */}
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: 'clamp(24px, 4vw, 40px)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)', height: '100%' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Send a Request</h2>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>Tell us about your project or required technical squad.</p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Your challenge / goal*</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter project details, technical goals, deadlines, and required team structure..."
                    style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', resize: 'vertical', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Name*</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Corporate Email*</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Subject*</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
                    >
                      <option value="Turnkey product development">Turnkey product development</option>
                      <option value="Dedicated engineering team">Dedicated engineering team</option>
                      <option value="AI & Machine Learning advisory">AI & Machine Learning advisory</option>
                      <option value="Cloud architecture & DevOps">Cloud architecture & DevOps</option>
                      <option value="Other technical inquiry">Other technical inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
                    >
                      <option value="">Select range...</option>
                      <option value="<$25k">&lt; $25,000</option>
                      <option value="$25k-$50k">$25,000 - $50,000</option>
                      <option value="$50k-$100k">$50,000 - $100,000</option>
                      <option value="$100k+">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#475569', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      style={{ accentColor: '#2258e7' }}
                    />
                    <span>I request an NDA prior to discussing project specifics</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#64748b', cursor: 'pointer', lineHeight: 1.4 }}>
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      style={{ accentColor: '#2258e7', marginTop: '2px' }}
                    />
                    <span>I consent to the processing of personal data in accordance with the Privacy Policy and Cookie Policy.</span>
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
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Message'}</span>
                  <Send size={15} />
                </button>
              </form>
            </div>
          </RevealElement>

          {/* Aside Process Box */}
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div
              style={{
                backgroundColor: '#2258e7',
                borderRadius: '8px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#ffffff',
                height: '100%',
                boxShadow: '0 8px 24px rgba(34, 88, 231, 0.2)',
              }}
            >
              <div>
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                  Let&#8217;s Connect
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '32px' }}>
                  Fill out the form, and we&#8217;ve got you covered.
                </p>

                <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
                  What happens next?
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: '#ffffff', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                      Our Principal Solutions Architect reviews your technical needs.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: '#ffffff', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                      If required, we execute an NDA to ensure total data privacy.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: '#ffffff', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                      Our Pre-Sales team prepares a customized proposal & scope estimate.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: '#ffffff', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                      Kickoff sprint within 5-10 business days of contract execution.
                    </span>
                  </li>
                </ul>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.25)', paddingTop: '24px', marginTop: '36px' }}>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Average initial response time: <strong>&lt; 2 business hours</strong>
                </div>
              </div>
            </div>
          </RevealElement>
        </div>
      </section>

      {/* ========================================================
          REGIONAL LOCATIONS TABS
          ======================================================== */}
      <section style={{ padding: '60px 24px 80px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <ScrollReveal
                as="h2"
                style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)', display: 'block' }}
                blurStrength={6}
              >
                Our Locations
              </ScrollReveal>
              <RevealElement variant="text" delay={0.06}>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>Say hello to our friendly team at one of these regional centers.</p>
              </RevealElement>
            </div>

            <div className="btn-group">
              {(['Headquarters', 'Americas', 'Europe'] as const).map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`btn btn-sm ${activeRegion === region ? 'btn-primary' : 'btn-outline'}`}
                  style={{ color: activeRegion === region ? '#ffffff' : '#0f172a', borderColor: '#cbd5e1' }}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {(activeRegion === 'Headquarters' ? hqLocations : activeRegion === 'Americas' ? americasLocations : europeLocations).map((loc, idx) => (
              <RevealElement key={loc.title} variant="card" delay={(idx % 3) * 0.08} start="top 92%" end="top 65%">
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '24px',
                    height: '100%',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                >
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{loc.title}</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, marginBottom: '12px' }}>{loc.address}</p>
                  <a href={`tel:${loc.phone}`} style={{ fontSize: '13px', color: '#2258e7', fontWeight: 600, textDecoration: 'none' }}>
                    {loc.phone}
                  </a>
                </div>
              </RevealElement>
            ))}
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
      />
    </div>
  );
};
