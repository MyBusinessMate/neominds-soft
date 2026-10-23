import React, { useState, useCallback } from 'react';
import {
  Linkedin,
  ArrowUpRight,
  X,
  Mail,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';

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

// 13 Executive Leaders exactly mirroring EffectiveSoft's leadership roster hoisted outside component to eliminate render-time re-allocation
const LEADERS: Leader[] = [
  {
    id: 'shezan-khan',
    name: 'Shezan Khan',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Hyderabad, India / London, UK',
      bio: 'Shezan leads the overall vision, engineering culture, and strategic client partnerships at Neominds TechHub. With over 15 years in enterprise software and technology innovation, he helps international businesses modernize legacy applications and build production AI systems.',
      background: 'Previously led enterprise engineering transformations and cloud migration programs across North American and European enterprise sectors.',
      focus: ['Long-term technical strategy', 'Enterprise client advisory', 'Engineering quality standards', 'Global market expansion'],
      quote: 'We build software the way we would want it built for us: clear, honest, and made to last.',
    },
    {
      id: 'vikram-reddy',
      name: 'Dr. Vikram Reddy',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Hyderabad, India',
      bio: 'Dr. Reddy steers technological architecture, R&D in applied AI, and technical excellence across all Neominds TechHub delivery centers.',
      background: 'Ph.D. in Computer Science with a specialization in distributed systems and applied machine learning; 14+ years designing high-throughput data platforms.',
      focus: ['Applied AI & LLM architectures', 'Cloud-native infrastructure (AWS & Azure)', 'System scalability & security', 'Technical mentoring'],
      quote: 'AI adds real business value only when the software foundation around it is rock-solid.',
    },
    {
      id: 'ananya-sharma',
      name: 'Ananya Sharma',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Hyderabad, India',
      bio: 'Ananya oversees global operations, delivery governance, and operational resilience, ensuring project milestones are met with absolute predictability.',
      background: 'Former operations leader at tier-1 technology consultancy; managed cross-border engineering teams across 5 countries.',
      focus: ['Agile delivery operations', 'Resource optimization', 'Cross-time-zone synchronization', 'Quality metrics & SLA adherence'],
      quote: 'Transparency and predictability are what turn one-off projects into multi-year partnerships.',
    },
    {
      id: 'rajesh-iyer',
      name: 'Rajesh Iyer',
      role: 'Director, Global Delivery',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Hyderabad, India',
      bio: 'Rajesh directs our software delivery teams, establishing consistent sprint cadences, automated CI/CD practices, and weekly demonstration rituals.',
      background: '12+ years directing end-to-end agile delivery for healthcare, SaaS, and financial services products.',
      focus: ['Full-cycle software delivery', 'CI/CD & release engineering', 'Scrum & Kanban governance', 'Technical risk mitigation'],
      quote: 'Weekly working software demos are the ultimate truth in engineering delivery.',
    },
    {
      id: 'arjun-verma',
      name: 'Arjun Verma',
      role: 'Director, Global IT & Security',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Hyderabad, India',
      bio: 'Arjun oversees information security, ISO 27001 compliance protocols, zero-trust infrastructure, and enterprise data protection standards.',
      background: 'Certified Information Systems Security Professional (CISSP) with 11+ years leading cyber defense in financial and cloud environments.',
      focus: ['ISO 27001 & SOC 2 compliance', 'Zero-trust infrastructure', 'Data protection (GDPR / HIPAA)', 'Penetration testing & code audits'],
      quote: 'Enterprise security is not a checkpoint at release; it is engineered into every line of code from day zero.',
    },
    {
      id: 'kavita-menon',
      name: 'Kavita Menon',
      role: 'Director, Human Resources',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Hyderabad, India',
      bio: 'Kavita drives talent strategy, technical recruitment, and engineer development programs across Neominds TechHub.',
      background: 'Over a decade building high-retention engineering cultures for fast-growing technology companies.',
      focus: ['Engineering talent acquisition', 'Continuous learning & certification', 'Inclusive engineering culture', 'People operations'],
      quote: 'A software company is only as exceptional as the daily environment it creates for its engineers.',
    },
    {
      id: 'marcus-sterling',
      name: 'Marcus Sterling',
      role: 'Executive Client Partner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'New York, USA / London, UK',
      bio: 'Marcus manages senior client relationships across North America and the United Kingdom, aligning business requirements with technical delivery teams.',
      background: '15+ years in digital consulting and software delivery partnerships between London and New York.',
      focus: ['Client relationship management', 'Scoping & commercial frameworks', 'Time-zone alignment', 'Executive governance'],
      quote: 'Our clients value that our engineers speak plainly, meet deadlines, and operate as an extension of their own internal teams.',
    },
    {
      id: 'pooja-nair',
      name: 'Pooja Nair',
      role: 'Head of Digital Experience & UX',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Hyderabad, India',
      bio: 'Pooja leads user experience design and product discovery, turning complex enterprise workflows into intuitive, clean digital interfaces.',
      background: 'Senior design strategist with a background in cognitive psychology and complex data visualization interfaces.',
      focus: ['Product discovery & UX research', 'Design systems (Figma)', 'Complex workflow simplification', 'Accessibility & usability testing'],
      quote: 'Good design removes friction. When enterprise software is easy to use, adoption takes care of itself.',
    },
    {
      id: 'carlos-ramirez',
      name: 'Carlos Ramirez',
      role: 'Location Head, Americas',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'San Jose, Costa Rica / Austin, USA',
      bio: 'Carlos leads our nearshore development hub in Central America, facilitating real-time timezone collaboration with North American enterprise accounts.',
      background: '12+ years directing distributed engineering teams across the United States and Latin America.',
      focus: ['Nearshore team scaling', 'US timezone synchronization', 'Cloud architecture', 'Bilingual team leadership'],
      quote: 'Direct timezone overlap means engineering issues are resolved in real time with zero handoff delay.',
    },
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      role: 'Location Head, Europe',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Warsaw, Poland',
      bio: 'Elena directs our European delivery center in Poland, ensuring strict GDPR compliance, European engineering standards, and direct client touchpoints across EMEA.',
      background: 'Senior software engineering director with deep experience in European fintech and healthcare integrations.',
      focus: ['EMEA delivery management', 'GDPR governance', 'Cross-border engineering squads', 'Client liaison'],
      quote: 'Engineering excellence is about precision: predictable sprints, transparent code reviews, and dependable delivery.',
    },
    {
      id: 'michael-ross',
      name: 'Michael Ross',
      role: 'Head of Growth & Solutions',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Chicago, USA',
      bio: 'Michael collaborates with enterprise stakeholders during discovery to formulate architectural solution roadmaps, ROI estimates, and phased migration strategies.',
      background: 'Former technology consultant at Fortune 500 enterprise consultancy; architected 40+ large-scale digital software programs.',
      focus: ['Solution discovery & scoping', 'Enterprise software feasibility', 'TCO & ROI optimization', 'Technical pre-sales advisory'],
      quote: 'We focus on business outcomes first, selecting tech stacks that serve long-term maintainability over transient hype.',
    },
    {
      id: 'david-vance',
      name: 'David Vance',
      role: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'London, UK',
      bio: 'David directs fiscal governance, compliance controls, and long-term financial modeling across our worldwide delivery entities.',
      background: 'Chartered accountant with 16+ years overseeing multi-jurisdictional financial frameworks in the tech sector.',
      focus: ['Corporate fiscal governance', 'International contracts & compliance', 'Financial risk management', 'Sustainable growth'],
      quote: 'Financial discipline and clear commercial terms ensure stability and peace of mind for our international clients.',
    },
    {
      id: 'sophie-laurent',
      name: 'Sophie Laurent',
      role: 'Head of Communications',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      location: 'Zurich, Switzerland',
      bio: 'Sophie articulates Neominds TechHub’s thought leadership, engineering case studies, whitepapers, and international communications.',
      background: '10+ years shaping technology narratives and executive communications for enterprise software leaders.',
      focus: ['Technical whitepapers & case studies', 'Brand positioning', 'Industry analyst relations', 'Engineering storytelling'],
      quote: 'We let our engineering work speak for itself through concrete metrics, clean code, and delivered client milestones.',
    },
  ];

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
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '80px', color: '#121212' }}>
      {/* ========================================================
          1. BREADCRUMB & HERO SECTION (Exact EffectiveSoft s-hero)
          ======================================================== */}
      <section className="s-hero g-section theme-light g-section--pt-0 s-hero--img-right" style={{ padding: '40px 24px 60px', backgroundColor: '#fafbff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#666e85', marginBottom: '32px' }}>
            <span
              style={{ cursor: 'pointer', color: '#666e85', transition: 'color 0.2s' }}
              onClick={() => onNavigatePage && onNavigatePage('home')}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666e85')}
            >
              Home
            </span>
            <ChevronRight size={12} opacity={0.6} />
            <span
              style={{ cursor: 'pointer', color: '#666e85', transition: 'color 0.2s' }}
              onClick={() => onNavigatePage && onNavigatePage('about-us')}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666e85')}
            >
              Who we are
            </span>
            <ChevronRight size={12} opacity={0.6} />
            <span style={{ color: '#121212', fontWeight: 600 }}>Leadership</span>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2258e7', fontFamily: 'monospace', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                <span style={{ width: '16px', height: '2px', backgroundColor: '#2258e7' }} />
                <span>Executive Leadership</span>
              </div>

              <ScrollReveal as="h1" blurStrength={8} style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#121212', margin: '0 0 24px' }}>
                Guiding minds<span style={{ color: '#2258e7' }}>.</span>
              </ScrollReveal>

              <RevealElement variant="text" delay={0.06}>
                <p style={{ fontSize: '17px', lineHeight: 1.65, color: '#475067', margin: '0 0 16px', fontWeight: 400 }}>
                  Meet the architects, engineering leads, and technology directors guiding client delivery at Neominds TechHub. Our leadership team brings decades of direct production experience across enterprise cloud, distributed systems, and applied AI.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#666e85', margin: 0, fontWeight: 400 }}>
                  We stay hands-on with architecture and delivery: establishing code quality standards, auditing distributed systems, and ensuring every project meets our rigorous technical requirements.
                </p>
              </RevealElement>
            </div>

            {/* Right Hero Visual Card */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '0px',
                  overflow: 'hidden',
                  background: '#0c1019',
                  padding: '36px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#5f85ed', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  Our Philosophy
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff', lineHeight: 1.35, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
                  Engineering grounded in clarity, technical mastery, and long-term partnership.
                </h3>
                <p style={{ fontSize: '14.5px', color: '#d0d3dd', lineHeight: 1.65, margin: '0 0 24px' }}>
                  Our leadership team is composed of hands-on architects and seasoned delivery directors who have built, scaled, and maintained critical software platforms worldwide.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>15+</div>
                    <div style={{ fontSize: '12px', color: '#989fb3' }}>Avg Yrs Experience</div>
                  </div>
                  <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>100%</div>
                    <div style={{ fontSize: '12px', color: '#989fb3' }}>Hands-on Technical</div>
                  </div>
                  <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>24/7</div>
                    <div style={{ fontSize: '12px', color: '#989fb3' }}>Global Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. LEADERSHIP MOSAIC GRID (Exact EffectiveSoft s-leadership)
          ======================================================== */}
      <section className="g-section s-leadership theme-light" style={{ padding: '72px 24px 96px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '44px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Executive Board & Directors
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#121212', margin: 0 }}>
                Meet the minds behind our delivery
              </h2>
            </div>
            <div style={{ fontSize: '14px', color: '#666e85' }}>
              Click on any profile to explore executive background & focus areas
            </div>
          </div>

          {/* Responsive Mosaic Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {LEADERS.map((leader) => (
              <div
                key={leader.id}
                onClick={() => handleSelectLeader(leader)}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#fafbff',
                  border: '1px solid #e4e4e7',
                  cursor: 'pointer',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#2258e7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e4e4e7';
                }}
              >
                {/* Photo with Overlay */}
                <div style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden', backgroundColor: '#e9eefd' }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2258e7',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#2258e7', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {leader.role}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#121212', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                    {leader.name}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#666e85', lineHeight: 1.55, margin: '0 0 16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {leader.bio}
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f6f6f6', paddingTop: '14px' }}>
                    <span style={{ fontSize: '12px', color: '#989fb3' }}>{leader.location}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#2258e7', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      View Bio →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '36px',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.3)',
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
                backgroundColor: '#f5f7fc',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#121212',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e9eefd')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5f7fc')}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', alignItems: 'flex-start' }}>
              {/* Photo & Quick Info */}
              <div>
                <div style={{ width: '100%', height: '340px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px' }}>
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
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
                      padding: '10px 18px',
                      borderRadius: '8px',
                      backgroundColor: '#0a66c2',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '13.5px',
                      fontWeight: 600,
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
                      padding: '10px 18px',
                      borderRadius: '8px',
                      backgroundColor: '#f5f7fc',
                      color: '#2258e7',
                      border: '1px solid #d0d3dd',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <Mail size={16} />
                    <span>Message Leadership</span>
                  </button>
                </div>
              </div>

              {/* Bio & Focus Details */}
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  {selectedLeader.role}
                </div>
                <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#121212', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                  {selectedLeader.name}
                </h2>
                <div style={{ fontSize: '14px', color: '#666e85', marginBottom: '20px' }}>
                  Based in: <strong>{selectedLeader.location}</strong>
                </div>

                <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#475067', marginBottom: '20px' }}>
                  {selectedLeader.bio}
                </div>

                <div style={{ backgroundColor: '#fafbff', padding: '16px 20px', borderRadius: '8px', borderLeft: '3px solid #2258e7', marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Track Record & Background
                  </div>
                  <div style={{ fontSize: '14px', color: '#364c72', lineHeight: 1.55 }}>
                    {selectedLeader.background}
                  </div>
                </div>

                {selectedLeader.quote && (
                  <div style={{ fontStyle: 'italic', fontSize: '14.5px', color: '#364c72', borderLeft: '2px solid #e4e4e7', paddingLeft: '16px', margin: '0 0 24px' }}>
                    "{selectedLeader.quote}"
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#121212', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '12px' }}>
                    Core Focus Areas
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                    {selectedLeader.focus.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#475067' }}>
                        <CheckCircle2 size={16} color="#2258e7" style={{ flexShrink: 0 }} />
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
          5. GLOBAL LOCATIONS SECTION (s-contacts theme-light)
          ======================================================== */}
      <LocationsSection />

      {/* ========================================================
          6. NEWSLETTER SUBSCRIPTION (s-newsletter)
          ======================================================== */}
      <section style={{ backgroundColor: '#fafbff', padding: '54px 24px', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#121212', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
            Join our engineering newsletter
          </h3>
          <p style={{ fontSize: '15px', color: '#666e85', margin: '0 0 28px', lineHeight: 1.55 }}>
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
                border: '1px solid #d0d3dd',
                fontSize: '14px',
                color: '#121212',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                height: '46px',
                padding: '0 24px',
                borderRadius: '6px',
                backgroundColor: '#2258e7',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#183c9e')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2258e7')}
            >
              {newsletterSubmitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          {newsletterSubmitted && (
            <div style={{ marginTop: '12px', color: '#039855', fontSize: '13.5px', fontWeight: 500 }}>
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
