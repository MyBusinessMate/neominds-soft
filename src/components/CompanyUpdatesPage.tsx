import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  MapPin,
  CheckCircle2,
  Send,
  Newspaper,
} from 'lucide-react';
import { COMPANY_UPDATES_DATA } from '../data/blogData';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface CompanyUpdatesPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const CompanyUpdatesPage: React.FC<CompanyUpdatesPageProps> = ({
  onNavigatePage,
  onSuccessToast,
  onOpenLegal,
}) => {
  const [activeType, setActiveType] = useState<string>('All');
  const [pressInquiryEmail, setPressInquiryEmail] = useState('');

  const types = ['All', 'Milestone', 'Conference & Events', 'Press Release', 'Partnership'];

  const filteredUpdates = activeType === 'All'
    ? COMPANY_UPDATES_DATA
    : COMPANY_UPDATES_DATA.filter((u) => u.type === activeType);

  const handlePressInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pressInquiryEmail) return;
    onSuccessToast(`Press kit sent to "${pressInquiryEmail}". Our media relations team will connect shortly.`);
    setPressInquiryEmail('');
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          1. HEADER SECTION
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(56px, 7vw, 84px) 24px clamp(36px, 5vw, 48px)',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #292522',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(254, 98, 0, 0.08)', borderRadius: '0px', color: '#fe6200', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
            <Newspaper size={14} />
            <span>Neominds Corporate Announcements & News</span>
          </div>

          <ScrollReveal
            as="h1"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 54px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={7}
          >
            Company Updates & <span style={{ color: '#fe6200' }}>Milestones</span>
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '720px', lineHeight: 1.6, marginBottom: '32px' }}>
              The latest news, engineering breakthroughs, conference keynotes, executive perspectives, and global expansion announcements from Neominds.
            </p>
          </RevealElement>

          {/* Type Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`btn btn-sm ${activeType === type ? 'btn-primary' : 'btn-outline'}`}
                style={{
                  color: activeType === type ? '#ffffff' : '#475569',
                  borderColor: activeType === type ? '#fe6200' : '#cbd5e1',
                  backgroundColor: activeType === type ? '#fe6200' : '#f8fafc',
                  cursor: 'pointer',
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COMPANY UPDATES STREAM
          ======================================================== */}
      <section style={{ padding: '48px 24px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {filteredUpdates.map((update, idx) => (
            <RevealElement key={update.id} variant="card" delay={idx * 0.1} start="top 90%" end="top 65%">
              <div
                style={{
                  backgroundColor: '#000000',
                  border: '1px solid #292522',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                }}
              >
                {/* Visual Cover Photo */}
                <div
                  style={{
                    minHeight: '280px',
                    backgroundImage: `url(${update.coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '24px',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#000000', border: '1px solid #fe6200', color: '#fe6200', padding: '4px 8px', borderRadius: '0px', fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', width: 'fit-content' }}>
                      {update.type}
                    </span>

                    <div style={{ color: '#ffffff', fontSize: '13px', display: 'flex', gap: '16px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} />
                        {update.date}
                      </span>
                      {update.location && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={13} />
                          {update.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#ffffff', marginBottom: '8px', lineHeight: 1.3 }}>
                      {update.title}
                    </h2>

                    <p style={{ fontSize: '15px', fontWeight: 500, color: '#fe6200', marginBottom: '16px' }}>
                      {update.subtitle}
                    </p>

                    <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#94a3b8', marginBottom: '20px' }}>
                      {update.content.intro}
                    </p>

                    {/* Key Highlights */}
                    <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #292522', borderRadius: '4px', padding: '16px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                        Key Announcement Highlights
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {update.highlights.map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#cbd5e1' }}>
                            <CheckCircle2 size={14} color="#fe6200" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Executive Quote if present */}
                    {update.content.quote && (
                      <blockquote style={{ borderLeft: '3px solid #fe6200', paddingLeft: '14px', margin: '16px 0', fontStyle: 'italic', fontSize: '13.5px', color: '#94a3b8' }}>
                        "{update.content.quote.text}"
                        <div style={{ fontStyle: 'normal', fontWeight: 700, color: '#ffffff', marginTop: '4px', fontSize: '12px' }}>
                          // {update.content.quote.author}, {update.content.quote.role}
                        </div>
                      </blockquote>
                    )}
                  </div>

                  <div style={{ borderTop: '1px solid #292522', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                      {update.content.nextSteps}
                    </span>

                    <button
                      onClick={() => onSuccessToast(`Sharing announcement: "${update.title}"`)}
                      className="btn btn-outline btn-sm"
                      style={{ fontSize: '12px' }}
                    >
                      <span>Share Update</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </RevealElement>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. PRESS & MEDIA CONTACT STRIP
          ======================================================== */}
      <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '64px 24px', borderTop: '1px solid #1F1F23' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Media & Investor Relations
          </div>
          <ScrollReveal
            as="h2"
            style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '12px', display: 'block' }}
            blurStrength={6}
          >
            Request the Neominds 2026 Press Kit
          </ScrollReveal>
          <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            For press inquiries, executive speaking engagements, or high-resolution media brand assets, contact our corporate communications office.
          </p>

          <form onSubmit={handlePressInquiry} style={{ display: 'flex', gap: '10px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              placeholder="Enter your media or press email"
              value={pressInquiryEmail}
              onChange={(e) => setPressInquiryEmail(e.target.value)}
              style={{
                flex: 1,
                minWidth: '240px',
                padding: '12px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '3px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button type="submit" className="btn btn-primary btn-md">
              <span>Send Request</span>
              <Send size={14} />
            </button>
          </form>
        </div>
      </section>

      <Footer
        onNavigate={(target) => {
          if (target === '#contact') onNavigatePage('contacts');
          else if (target === '#casestudies') onNavigatePage('portfolio');
          else onNavigatePage('home');
        }}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
