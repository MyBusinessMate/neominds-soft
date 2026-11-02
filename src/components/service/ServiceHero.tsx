import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceHeroProps {
  category: string;
  badge: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  heroImage?: string;
  heroImageCaption?: string;
  icon: LucideIcon;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onNavigateHome: () => void;
  onViewCaseStudies: () => void;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  category: _category,
  badge: _badge,
  headline,
  headlineHighlight,
  description,
  heroImage,
  heroImageCaption,
  icon: _IconComponent,
  primaryCtaText = 'Book Discovery Call',
  secondaryCtaText = 'Explore Portfolio',
  onNavigateHome: _onNavigateHome,
  onViewCaseStudies,
}) => {
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(56px, 7vw, 96px) 24px clamp(48px, 6vw, 76px)',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Hero 2-Column Standardized Grid */}
        <div
          className="nm-hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* Left Hero Column */}
          <div>
            {/* Large H1 Headline - BL Pylon Serif Display */}
            <ScrollReveal
              as="h1"
              style={{
                fontSize: 'clamp(36px, 4.8vw, 56px)',
                fontWeight: 800,
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#000000',
                marginBottom: '20px',
                display: 'block',
              }}
              blurStrength={8}
            >
              {headline} <span style={{ color: '#fe6200', fontStyle: 'italic' }}>{headlineHighlight}</span>
            </ScrollReveal>

            {/* Supporting Description */}
            <RevealElement variant="text" delay={0.06}>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.2vw, 17.5px)',
                  lineHeight: 1.65,
                  color: '#44403c',
                  marginBottom: '32px',
                  maxWidth: '560px',
                  fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                }}
              >
                {description}
              </p>
            </RevealElement>

            {/* Action Buttons */}
            <RevealElement variant="button" delay={0.12}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  alignItems: 'center',
                }}
              >
                <a
                  href="#service-contact"
                  style={{
                    backgroundColor: '#fe6200',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    borderRadius: '8px',
                    padding: '13px 26px',
                    fontSize: '15px',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#cf5000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fe6200';
                  }}
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight size={16} />
                </a>

                <button
                  onClick={onViewCaseStudies}
                  style={{
                    color: '#111111',
                    border: '1px solid #d0ccc0',
                    borderRadius: '8px',
                    padding: '13px 24px',
                    fontWeight: 600,
                    fontSize: '15px',
                    background: '#faf6f0',
                    cursor: 'pointer',
                    fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.backgroundColor = 'rgba(254, 98, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#d0ccc0';
                    e.currentTarget.style.backgroundColor = '#faf6f0';
                  }}
                >
                  <span>{secondaryCtaText}</span>
                </button>
              </div>
            </RevealElement>
          </div>

          {/* Right Hero Visual Column */}
          <RevealElement variant="card" delay={0.08}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(280px, 30vw, 380px)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e4e2e1',
                backgroundColor: '#faf6f0',
              }}
            >
              <img
                src={
                  heroImage ||
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
                }
                alt={heroImageCaption || `${headline} ${headlineHighlight}`}
                loading="eager"
                decoding="async"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.45) 100%)',
                }}
              />
            </div>
          </RevealElement>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .nm-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceHero;
