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
  primaryCtaText = 'Book Free Consultation',
  secondaryCtaText = 'View Case Studies',
  onNavigateHome: _onNavigateHome,
  onViewCaseStudies,
}) => {
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(56px, 7vw, 96px) 24px clamp(48px, 6vw, 76px)',
        background: 'var(--colors-background-dark, #fbf9f5)',
        borderBottom: '1px solid #f0ece2',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Hero 2-Column Standardized Grid (No Breadcrumbs, No Clutter Badges) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                fontSize: 'clamp(36px, 4.8vw, 58px)',
                fontWeight: 400,
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#000000',
                marginBottom: '24px',
                display: 'block',
              }}
              blurStrength={8}
            >
              {headline} <span style={{ color: '#fe6200' }}>{headlineHighlight}</span>
            </ScrollReveal>

            {/* Supporting Description - Warm Stone */}
            <RevealElement variant="text" delay={0.06}>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.25vw, 18px)',
                  lineHeight: 1.65,
                  color: '#000000',
                  marginBottom: '36px',
                  maxWidth: '580px',
                  fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                }}
              >
                {description}
              </p>
            </RevealElement>

            {/* Action Buttons - Freehand Rectangular Button System */}
            <RevealElement variant="button" delay={0.12}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  alignItems: 'center',
                  marginBottom: '8px',
                }}
              >
                <a
                  href="#service-contact"
                  style={{
                    backgroundColor: '#fe6200', color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    borderRadius: '8px',
                    padding: '13px 26px',
                    fontSize: '15px',
                    letterSpacing: '0.02em',
                    transition: 'background-color 0.2s, transform 0.2s',
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
                    color: '#000000',
                    borderColor: '#f0ece2',
                    border: '1px solid #f0ece2',
                    borderRadius: '8px',
                    padding: '13px 24px',
                    fontWeight: 500,
                    fontSize: '15px',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.backgroundColor = 'rgba(254, 98, 0, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f0ece2';
                    e.currentTarget.style.backgroundColor = 'transparent';
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
                height: 'clamp(280px, 32vw, 400px)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #f0ece2',
                backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
              }}
            >
              <img
                src={
                  heroImage ||
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
                }
                alt={heroImageCaption || `${headline} ${headlineHighlight} - Neominds Enterprise Software Architecture`}
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
                    'linear-gradient(180deg, rgba(32, 11, 0, 0.15) 0%, rgba(32, 11, 0, 0.72) 100%)',
                }}
              />
            </div>
          </RevealElement>
        </div>
      </div>
    </section>
  );
};

