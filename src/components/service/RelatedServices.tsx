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
  if (!relatedItems || relatedItems.length === 0) return null;

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 100px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: '#fe6200',
              textTransform: 'uppercase',
              marginBottom: '14px',
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
            }}
          >
            Related Disciplines
          </div>

          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: '#000000',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              lineHeight: 1.15,
              marginBottom: '14px',
              letterSpacing: '-0.025em',
              display: 'block',
            }}
            blurStrength={6}
          >
            Extend Your Capabilities Alongside <span style={{ color: '#fe6200', fontStyle: 'italic' }}>{currentTitle}</span>
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p
              style={{
                fontSize: '15.5px',
                color: '#66615c',
                lineHeight: 1.6,
                margin: 0,
                fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
              }}
            >
              Adjacent software engineering and AI capabilities that pair directly with your stack.
            </p>
          </RevealElement>
        </div>

        {/* Directory Row Table (Cardless, Clean Hairlines) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid #e4e2e1',
          }}
        >
          {relatedItems.map((item, idx) => (
            <div
              key={item.slug}
              onClick={() => onNavigatePage(item.slug)}
              style={{
                padding: '24px 0',
                borderBottom: '1px solid #e4e2e1',
                display: 'grid',
                gridTemplateColumns: 'minmax(140px, 200px) 1fr auto',
                gap: '24px',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'padding-left 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = '8px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = '0px';
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#fe6200',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  {item.category}
                </span>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#88827c',
                    marginTop: '2px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  Service 0{idx + 1}
                </div>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 4px 0',
                    fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14.5px',
                    color: '#55514c',
                    lineHeight: 1.55,
                    margin: 0,
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                  }}
                >
                  {item.tagline}
                </p>
              </div>

              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #d0ccc0',
                  backgroundColor: '#faf6f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111111',
                  transition: 'border-color 0.2s, color 0.2s',
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

export default RelatedServices;
