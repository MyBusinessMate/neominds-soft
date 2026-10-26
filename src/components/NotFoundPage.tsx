import React from 'react';
import { ArrowLeft, ArrowRight, Compass, ShieldAlert } from 'lucide-react';
import { Footer } from './Footer';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigatePage,
}) => {
  const topServices = [
    { name: 'AI Automations', slug: 'ai-automations' },
    { name: 'Custom Software Development', slug: 'custom-software-development' },
    { name: 'Web Development', slug: 'web-development' },
    { name: 'App Development', slug: 'app-development' },
    { name: 'Client Case Studies', slug: 'portfolio' },
    { name: 'Technical Consultation & RFP', slug: 'contacts' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--colors-background-dark, #200b00)',
        color: '#ffffff',
        minHeight: '100vh',
        paddingTop: '80px',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <main
        id="main-content"
        style={{
          flex: '1 0 auto',
          maxWidth: '900px',
          margin: '0 auto',
          padding: 'clamp(64px, 8vw, 120px) 24px clamp(48px, 6vw, 80px)',
          textAlign: 'center',
        }}
      >
        {/* Error Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
            border: '1px solid #fe6200',
            borderRadius: '2px',
            color: '#fe6200',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}
        >
          <ShieldAlert size={15} />
          <span>Error 404 • Route Not Found</span>
        </div>

        {/* 404 Big Heading */}
        <h1
          style={{
            fontSize: 'clamp(42px, 6vw, 76px)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
          }}
        >
          The requested page does not exist
        </h1>

        {/* Lead Paragraph */}
        <p
          style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            lineHeight: 1.6,
            color: '#a3a09b',
            maxWidth: '620px',
            margin: '0 auto 40px auto',
          }}
        >
          The URL you followed may have been updated, relocated, or temporarily decommissioned. You can return to our homepage or explore our core engineering capabilities below.
        </p>

        {/* Primary Action Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              backgroundColor: '#fe6200',
              color: '#000000',
              border: 'none',
              borderRadius: '2px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <ArrowLeft size={16} />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigatePage('contacts')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
              color: '#fe6200',
              border: '1px solid #fe6200',
              borderRadius: '2px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fe6200';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--colors-surface-dark-subtle, #351505)';
              e.currentTarget.style.color = '#fe6200';
            }}
          >
            <span>Contact Engineering Team</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Recommended Routes Grid */}
        <div
          style={{
            padding: '36px 32px',
            backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
            border: '1px solid #1F1F23',
            borderRadius: '2px',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            <Compass size={18} style={{ color: '#fe6200' }} />
            <span>Quick Navigation</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '12px',
            }}
          >
            {topServices.map((item) => (
              <button
                key={item.slug}
                onClick={() => onNavigatePage(item.slug)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: '#121212',
                  border: '1px solid #27272A',
                  borderRadius: '2px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fe6200';
                  e.currentTarget.style.color = '#fe6200';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#27272A';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <span>{item.name}</span>
                <ArrowRight size={14} />
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer
        onNavigate={onNavigatePage}
        onOpenLegal={(tab) => {
          if (tab === 'privacy') onNavigatePage('privacy-policy');
          else if (tab === 'cookie') onNavigatePage('cookie-policy');
          else onNavigatePage('security-policy');
        }}
      />
    </div>
  );
};
