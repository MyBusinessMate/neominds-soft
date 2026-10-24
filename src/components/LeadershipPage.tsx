import React, { useState, useCallback } from 'react';
import {
  Linkedin,
  X,
  Mail,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';
import { LeadershipCarousel } from './LeadershipCarousel';

interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio: string;
  background: string;
  focus: string[];
  quote?: string;
  location?: string;
}

interface LeadershipPageProps {
  onNavigatePage?: (page: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

const LeadershipPageComponent: React.FC<LeadershipPageProps> = ({ onNavigatePage, onOpenLegal }) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSelectLeader = useCallback((leader: Leader) => {
    setSelectedLeader(leader);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedLeader(null);
  }, []);

  const handleContactFromModal = useCallback(() => {
    setSelectedLeader(null);
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubmitted(false);
    }, 4000);
  }, [newsletterEmail]);

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '80px', color: '#ffffff' }}>
      {/* ========================================================
          1. BREADCRUMB & HERO SECTION (Exact EffectiveSoft s-hero)
          ======================================================== */}
      <section className="s-hero g-section theme-dark g-section--pt-0 s-hero--img-right" style={{ padding: '40px 24px 60px', backgroundColor: '#000000' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#9ca3af', marginBottom: '32px' }}>
            <span
              style={{ cursor: 'pointer', color: '#9ca3af', transition: 'color 0.2s' }}
              onClick={() => onNavigatePage && onNavigatePage('home')}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              Home
            </span>
            <ChevronRight size={12} opacity={0.6} />
            <span
              style={{ cursor: 'pointer', color: '#9ca3af', transition: 'color 0.2s' }}
              onClick={() => onNavigatePage && onNavigatePage('about-us')}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              Who we are
            </span>
            <ChevronRight size={12} opacity={0.6} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Leadership</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Headline */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fe6200', fontFamily: 'monospace', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                <span style={{ width: '16px', height: '2px', backgroundColor: '#fe6200' }} />
                <span>Executive Leadership</span>
              </div>

              <ScrollReveal as="h1" blurStrength={8} style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#ffffff', margin: '0 0 24px' }}>
                Guiding minds<span style={{ color: '#fe6200' }}>.</span>
              </ScrollReveal>

              <RevealElement variant="text" delay={0.06}>
                <p style={{ fontSize: '17px', lineHeight: 1.65, color: '#d1d5db', margin: '0 0 16px', fontWeight: 400 }}>
                  Meet the architects, engineering leads, and technology directors guiding client delivery at Neominds TechHub. Our leadership team brings decades of direct production experience across enterprise cloud, distributed systems, and applied AI.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#9ca3af', margin: 0, fontWeight: 400 }}>
                  We stay hands-on with architecture and delivery: establishing code quality standards, auditing distributed systems, and ensuring every project meets our rigorous technical requirements.
                </p>
              </RevealElement>
            </div>

            {/* Right Hero Visual Card */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#0a0a0a',
                  padding: '36px',
                  border: '1px solid #27272a',
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  Our Philosophy
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff', lineHeight: 1.35, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
                  Engineering grounded in clarity, technical mastery, and long-term partnership.
                </h3>
                <p style={{ fontSize: '14.5px', color: '#9ca3af', lineHeight: 1.65, margin: '0 0 24px' }}>
                  Our leadership team is composed of hands-on architects and seasoned delivery directors who have built, scaled, and maintained critical software platforms worldwide.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderTop: '1px solid #1f1f23', paddingTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#fe6200' }}>15+</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>Avg Yrs Experience</div>
                  </div>
                  <div style={{ width: '1px', height: '32px', backgroundColor: '#27272a' }} />
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#fe6200' }}>100%</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>Hands-on Technical</div>
                  </div>
                  <div style={{ width: '1px', height: '32px', backgroundColor: '#27272a' }} />
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#fe6200' }}>24/7</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>Global Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. LEADERSHIP CAROUSEL (Exact 7-Leader Sliding Showcase)
          ======================================================== */}
      <LeadershipCarousel onSelectLeader={(l) => handleSelectLeader(l as unknown as Leader)} />

      {/* ========================================================
          3. LEADER PROFILE MODAL / DRAWER
          ======================================================== */}
      {selectedLeader && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(18, 18, 18, 0.75)',
            backdropFilter: 'blur(8px)',
            padding: '24px',
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '820px',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#0A0A0A',
              border: '1px solid #fe6200',
              borderRadius: '16px',
              padding: '36px',
              boxShadow: '0 24px 64px rgba(254, 98, 0, 0.25)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#18181B',
                border: '1px solid #27272A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#FFFFFF',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fe6200';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#18181B';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', alignItems: 'flex-start' }}>
              {/* Photo & Quick Info */}
              <div>
                <div style={{ width: '100%', height: '340px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', border: '1px solid #27272A' }}>
                  <img
                    src={selectedLeader.image}
                    alt={`${selectedLeader.name} - ${selectedLeader.role} Leadership Profile, Neominds TechHub`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={selectedLeader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 18px',
                      borderRadius: '8px',
                      backgroundColor: '#fe6200',
                      color: '#000000',
                      textDecoration: 'none',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    <Linkedin size={16} />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <button
                    onClick={handleContactFromModal}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 18px',
                      borderRadius: '8px',
                      backgroundColor: '#0A0A0A',
                      color: '#fe6200',
                      border: '1px solid #fe6200',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#fe6200';
                      e.currentTarget.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0A0A0A';
                      e.currentTarget.style.color = '#fe6200';
                    }}
                  >
                    <Mail size={16} />
                    <span>Message Leadership</span>
                  </button>
                </div>
              </div>

              {/* Bio & Focus Details */}
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  {selectedLeader.role}
                </div>
                <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                  {selectedLeader.name}
                </h2>
                <div style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '20px' }}>
                  Based in: <strong style={{ color: '#FFFFFF' }}>{selectedLeader.location}</strong>
                </div>

                <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#D1D5DB', marginBottom: '20px' }}>
                  {selectedLeader.bio}
                </div>

                <div style={{ backgroundColor: '#121212', padding: '16px 20px', borderRadius: '8px', borderLeft: '3px solid #fe6200', marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Track Record & Background
                  </div>
                  <div style={{ fontSize: '14px', color: '#D1D5DB', lineHeight: 1.55 }}>
                    {selectedLeader.background}
                  </div>
                </div>

                {selectedLeader.quote && (
                  <div style={{ fontStyle: 'italic', fontSize: '14.5px', color: '#fe6200', borderLeft: '2px solid #fe6200', paddingLeft: '16px', margin: '0 0 24px' }}>
                    "{selectedLeader.quote}"
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '12px' }}>
                    Core Focus Areas
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                    {selectedLeader.focus.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#D1D5DB' }}>
                        <CheckCircle2 size={16} color="#fe6200" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          4. CONTACT REQUEST SECTION (s-request theme-dark)
          ======================================================== */}
      <div id="contact-section">
        <ContactSection />
      </div>

      {/* ========================================================
          5. GLOBAL LOCATIONS SECTION (s-contacts theme-dark)
          ======================================================== */}
      <LocationsSection />

      {/* ========================================================
          6. NEWSLETTER SUBSCRIPTION (s-newsletter)
          ======================================================== */}
      <section style={{ backgroundColor: '#000000', padding: '54px 24px', borderTop: '1px solid #1F1F23', borderBottom: '1px solid #1F1F23' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
            Join our engineering newsletter
          </h3>
          <p style={{ fontSize: '15px', color: '#9CA3AF', margin: '0 0 28px', lineHeight: 1.55 }}>
            Practical engineering insights, architectural patterns, and production AI updates delivered monthly. No spam, ever.
          </p>

          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '10px', maxWidth: '520px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your corporate email"
              required
              style={{
                flex: '1 1 260px',
                height: '46px',
                padding: '0 16px',
                borderRadius: '6px',
                backgroundColor: '#0A0A0A',
                border: '1px solid #27272A',
                fontSize: '14px',
                color: '#FFFFFF',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                height: '46px',
                padding: '0 24px',
                borderRadius: '6px',
                backgroundColor: '#fe6200',
                color: '#000000',
                border: 'none',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {newsletterSubmitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          {newsletterSubmitted && (
            <div style={{ marginTop: '12px', color: '#fe6200', fontSize: '13.5px', fontWeight: 500 }}>
              Thank you for subscribing to Neominds TechHub insights.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={(target) => onNavigatePage && onNavigatePage(target.replace('#', ''))} onOpenLegal={onOpenLegal} />
    </div>
  );
};

export const LeadershipPage = React.memo(LeadershipPageComponent);
