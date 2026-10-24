import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { ScrollReveal, RevealElement } from '../scroll-reveal';
import { ServiceBreadcrumb } from './ServiceBreadcrumb';

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
  category,
  badge,
  headline,
  headlineHighlight,
  description,
  heroImage,
  heroImageCaption,
  icon: IconComponent,
  primaryCtaText = 'Book Free Consultation',
  secondaryCtaText = 'View Case Studies',
  onNavigateHome,
  onViewCaseStudies,
}) => {
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(48px, 6vw, 84px) 24px clamp(40px, 5vw, 68px)',
        background: 'var(--colors-background-dark, #200b00)',
        borderBottom: '1px solid #1e293b',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* 01. Breadcrumb */}
        <ServiceBreadcrumb
          category={category}
          title={`${headline} ${headlineHighlight}`}
          onNavigateHome={onNavigateHome}
        />

        {/* 02. Hero 2-Column Standardized Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center',
          }}
        >
          {/* Left Hero Column */}
          <div>
            {/* Category / Eyebrow Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: 'rgba(255, 85, 0, 0.08)',
                border: '1px solid rgba(255, 85, 0, 0.25)',
                borderRadius: '3px',
                color: '#FF5500',
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              <IconComponent size={15} />
              <span>{badge}</span>
            </div>

            {/* Large H1 Headline */}
            <ScrollReveal
              as="h1"
              style={{
                fontSize: 'clamp(34px, 4.4vw, 54px)',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '20px',
                display: 'block',
              }}
              blurStrength={8}
            >
              {headline} <span style={{ color: '#FF5500' }}>{headlineHighlight}</span>
            </ScrollReveal>

            {/* Supporting Description */}
            <RevealElement variant="text" delay={0.06}>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.2vw, 18px)',
                  lineHeight: 1.65,
                  color: '#94a3b8',
                  marginBottom: '32px',
                  maxWidth: '580px',
                }}
              >
                {description}
              </p>
            </RevealElement>

            {/* Action Buttons */}
            <RevealElement variant="button" delay={0.12}>
              <div className="btn-group-lg" style={{ marginBottom: '8px' }}>
                <a
                  href="#service-contact"
                  className="btn btn-primary btn-lg"
                  style={{
                    backgroundColor: '#FF5500',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    borderRadius: '4px',
                    padding: '12px 24px',
                    boxShadow: '0 4px 14px rgba(255, 85, 0, 0.3)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight size={16} />
                </a>

                <button
                  onClick={onViewCaseStudies}
                  className="btn btn-outline btn-lg"
                  style={{
                    color: '#ffffff',
                    borderColor: '#1e293b',
                    borderRadius: '4px',
                    padding: '12px 22px',
                    fontWeight: 600,
                    background: '#111827',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                >
                  <span>{secondaryCtaText}</span>
                </button>
              </div>
            </RevealElement>
          </div>

          {/* Right Hero Visual Column (Consistent Layout & Service-Aware Imagery) */}
          <RevealElement variant="card" delay={0.08}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(280px, 32vw, 380px)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 48px rgba(32, 11, 0,  0.4)',
                border: '1px solid #1e293b',
                backgroundColor: 'var(--colors-surface-dark-subtle, #351505)',
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
                    'linear-gradient(180deg, rgba(15, 23, 42, 0.15) 0%, rgba(15, 23, 42, 0.75) 100%)',
                }}
              />

              {/* Floating Architectural Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '6px',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {heroImageCaption || `${headline} Production Topology`}
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: '#FF5500', fontWeight: 600 }}>Enterprise SLA</span>
              </div>
            </div>
          </RevealElement>
        </div>
      </div>
    </section>
  );
};
