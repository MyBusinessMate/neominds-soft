import React, { useState } from 'react';
import {
  Linkedin,
  ArrowRight,
  X,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { ContactSection } from './ContactSection';
import { LocationsSection } from './LocationsSection';

interface Leader {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio: string;
  background: string;
  focus: string[];
  quote?: string;
}

export const LeadershipPage: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const leaders: Leader[] = [
    {
      name: 'Shezan Khan',
      role: 'Founder & Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      bio: 'Shezan leads the overall vision, engineering culture, and strategic client partnerships at Neominds TechHub. With over 15 years in enterprise software and technology innovation, he helps international businesses modernize legacy applications and build production AI systems.',
      background: 'Previously led enterprise engineering transformations and cloud migration programs across North American and European enterprise sectors.',
      focus: ['Long-term technical strategy', 'Enterprise client advisory', 'Engineering quality standards', 'Global market expansion'],
      quote: 'We build software the way we would want it built for us: clear, honest, and made to last.',
    },
    {
      name: 'Dr. Vikram Reddy',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      bio: 'Dr. Reddy steers technological architecture, R&D in applied AI, and technical excellence across all Neominds TechHub delivery centers.',
      background: 'Ph.D. in Computer Science with a specialization in distributed systems and applied machine learning; 14+ years designing high-throughput data platforms.',
      focus: ['Applied AI & LLM architectures', 'Cloud-native infrastructure (AWS & Azure)', 'System scalability & security', 'Technical mentoring'],
      quote: 'AI adds real business value only when the software foundation around it is rock-solid.',
    },
    {
      name: 'Ananya Sharma',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      bio: 'Ananya oversees global operations, delivery governance, and operational resilience, ensuring project milestones are met with absolute predictability.',
      background: 'Former operations leader at tier-1 technology consultancy; managed cross-border engineering teams across 5 countries.',
      focus: ['Agile delivery operations', 'Resource optimization', 'Cross-time-zone synchronization', 'Quality metrics & SLA adherence'],
      quote: 'Transparency and predictability are what turn one-off projects into multi-year partnerships.',
    },
    {
      name: 'Rajesh Iyer',
      role: 'Head of Delivery',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      bio: 'Rajesh directs our software delivery teams, establishing consistent sprint cadences, automated CI/CD practices, and weekly demonstration rituals.',
      background: '12+ years directing end-to-end agile delivery for healthcare, SaaS, and financial services products.',
      focus: ['Full-cycle software delivery', 'CI/CD & release engineering', 'Scrum & Kanban governance', 'Technical risk mitigation'],
      quote: 'Weekly working software demos are the ultimate truth in engineering delivery.',
    },
    {
      name: 'Marcus Sterling',
      role: 'Client Partner (US & UK)',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      bio: 'Marcus manages senior client relationships across North America and the United Kingdom, aligning business requirements with technical delivery teams.',
      background: '15+ years in digital consulting and software delivery partnerships between London and New York.',
      focus: ['Client relationship management', 'Scoping & commercial frameworks', 'Time-zone alignment', 'Executive governance'],
      quote: 'Our clients value that our engineers speak plainly, meet deadlines, and operate as an extension of their own internal teams.',
    },
    {
      name: 'Pooja Nair',
      role: 'Head of Design and UX',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      bio: 'Pooja leads user experience design and product discovery, turning complex enterprise workflows into intuitive, clean digital interfaces.',
      background: 'Senior design strategist with a background in cognitive psychology and complex data visualization interfaces.',
      focus: ['Product discovery & UX research', 'Design systems (Figma)', 'Complex workflow simplification', 'Accessibility & usability testing'],
      quote: 'Good design removes friction. When enterprise software is easy to use, adoption takes care of itself.',
    },
    {
      name: 'Arjun Verma',
      role: 'Head of IT and Security',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      bio: 'Arjun oversees information security, ISO 27001 compliance protocols, zero-trust infrastructure, and candidate security clearance.',
      background: 'Certified Information Systems Security Professional (CISSP) with 11+ years leading cyber defense in financial and cloud environments.',
      focus: ['ISO 27001 & SOC 2 compliance', 'Zero-trust infrastructure', 'Data protection (GDPR / HIPAA)', 'Penetration testing & code audits'],
    },
    {
      name: 'Kavita Menon',
      role: 'Head of People',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com',
      bio: 'Kavita drives talent strategy, technical recruitment, and engineer development programs across Neominds TechHub.',
      background: 'Over a decade building high-retention engineering cultures for fast-growing technology companies.',
      focus: ['Engineering talent acquisition', 'Continuous learning & certification', 'Inclusive engineering culture', 'People operations'],
    },
  ];

  const scrollToContact = () => {
    setSelectedLeader(null);
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              Our Leadership
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
              The minds behind Neominds TechHub
            </ScrollReveal>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.88)',
                marginBottom: '14px',
              }}
            >
              Meet the people who set our direction. Each leader brings hands-on experience in engineering, AI, delivery or client work, and stays involved in the projects we take on.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.65)',
                margin: 0,
              }}
            >
              Open a profile to read about their background, what they focus on and how to reach them.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. LEADER CARDS (GRID)
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
            {leaders.map((leader, idx) => (
              <RevealElement
                key={idx}
                variant="card"
                delay={idx * 0.05}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div style={{ height: '260px', width: '100%', overflow: 'hidden', position: 'relative', backgroundColor: '#e2e8f0' }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(15, 23, 42, 0.75)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'background-color 0.2s',
                    }}
                    title={`${leader.name} on LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                      {leader.name}
                    </h3>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#2258e7', marginBottom: '14px' }}>
                      {leader.role}
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.55, marginBottom: '18px' }}>
                      {leader.bio.slice(0, 115)}...
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedLeader(leader)}
                    style={{
                      width: '100%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      padding: '10px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#0f172a',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2258e7';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#2258e7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.color = '#0f172a';
                      e.currentTarget.style.borderColor = '#cbd5e1';
                    }}
                  >
                    <span>View profile & background</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          BIO MODAL DIALOG
          ======================================================== */}
      {selectedLeader && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 11, 20, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedLeader(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              padding: '36px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLeader(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                border: 'none',
                background: '#f1f5f9',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} color="#64748b" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  {selectedLeader.name}
                </h3>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#2258e7' }}>
                  {selectedLeader.role}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '8px' }}>
                About
              </h4>
              <p style={{ fontSize: '15px', color: '#334155', lineHeight: 1.65, margin: 0 }}>
                {selectedLeader.bio}
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Background & Experience
              </h4>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                {selectedLeader.background}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '10px' }}>
                What I Focus On
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {selectedLeader.focus.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155' }}>
                    <CheckCircle2 size={16} color="#2258e7" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedLeader.quote && (
              <div style={{ backgroundColor: '#f8fafc', borderLeft: '3px solid #2258e7', padding: '16px', marginBottom: '24px', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#334155', margin: 0 }}>
                  "{selectedLeader.quote}"
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
              <button
                onClick={scrollToContact}
                style={{
                  flex: 1,
                  backgroundColor: '#2258e7',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <Mail size={16} />
                <span>Talk to {selectedLeader.name.split(' ')[0]}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Shared Contact, Locations & Newsletter */}
      <div id="contact-section">
        <ContactSection />
      </div>
      <LocationsSection />
    </div>
  );
};
