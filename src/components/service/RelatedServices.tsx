import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface RelatedServiceItem {
  slug: string;
  title: string;
  tagline: string;
  category: string;
}

interface RelatedServicesProps {
  currentSlug: string;
  currentTitle: string;
  relatedItems: RelatedServiceItem[];
  onNavigatePage: (slug: string) => void;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  currentTitle,
  relatedItems,
  onNavigatePage,
}) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
        borderTop: '1px solid #f0ece2',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              fontWeight: 800,
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.15,
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={6}
          >
            Ecosystem Directory
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '16px', color: '#868683', lineHeight: 1.6, margin: 0 }}>
              Scale your initiatives by integrating {currentTitle} with adjacent platform engineering and AI disciplines.
            </p>
          </RevealElement>
        </div>

        {/* Directory Row Table (NOT generic cards) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid #f0ece2',
          }}
        >
          {relatedItems.map((item, idx) => (
            <div
              key={item.slug}
              onClick={() => onNavigatePage(item.slug)}
              style={{
                padding: '24px 0',
                borderBottom: '1px solid #f0ece2',
                display: 'grid',
                gridTemplateColumns: 'minmax(140px, 200px) 1fr auto',
                gap: '24px',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s, padding-left 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = '12px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = '0px';
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#fe6200',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.category}
                </span>
                <div style={{ fontSize: '12px', color: '#a3a09b', marginTop: '2px', fontFamily: 'monospace' }}>
                  REF_0{idx + 1}
                </div>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    margin: '0 0 4px 0',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#868683', margin: 0 }}>
                  {item.tagline}
                </p>
              </div>

              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #868683',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s',
                }}
              >
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
