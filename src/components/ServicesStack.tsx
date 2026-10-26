import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

interface ServicePill {
  label: string;
  slug: string;
}

interface ServiceStackCard {
  id: number;
  slug: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  links: { label: string; slug: string }[];
  servicePills: ServicePill[];
  image: string;
  imageAlt: string;
  bgGradient: string;
}

const stackCards: ServiceStackCard[] = [
  {
    id: 1,
    slug: 'software-development',
    category: 'Core Engineering',
    title: 'BUILD',
    tagline: 'Web, mobile, cross-platform, e-commerce, custom and SaaS software',
    description:
      'We create web, mobile, cross-platform, e-commerce, custom and SaaS software that stays reliable as your users, data and features grow. We handle design, development, testing, cloud deployment and ongoing support.',
    links: [
      { label: 'web', slug: 'web-development' },
      { label: 'mobile', slug: 'app-development' },
      { label: 'e-commerce', slug: 'ecommerce-platform' },
      { label: 'SaaS software', slug: 'saas-development' },
    ],
    servicePills: [
      { label: 'Web Development', slug: 'web-development' },
      { label: 'App Development', slug: 'app-development' },
      { label: 'Custom Software', slug: 'custom-software-development' },
      { label: 'E-commerce Platform', slug: 'ecommerce-platform' },
    ],
    image: '/services/software-development.png',
    imageAlt: 'Neominds Core Engineering - Web, Mobile, Custom Software and SaaS Development',
    bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
  },
  {
    id: 2,
    slug: 'ai-integrations',
    category: 'Applied AI Systems',
    title: 'AI',
    tagline: 'Integration, intelligent automation, and AI-native products',
    description:
      'We add AI to the software you already run, automate repetitive manual work, and build products that are AI-native from day one. Each solution is built to work inside your real business, not as a demo.',
    links: [
      { label: 'add AI to the software', slug: 'ai-integrations' },
      { label: 'automate repetitive manual work', slug: 'ai-automations' },
      { label: 'AI-native from day one', slug: 'ai-native-software' },
    ],
    servicePills: [
      { label: 'AI Integration', slug: 'ai-integrations' },
      { label: 'AI Automation', slug: 'ai-automations' },
      { label: 'AI Systems', slug: 'ai-systems' },
      { label: 'AI-Native Software', slug: 'ai-native-software' },
    ],
    image: '/services/ai-development.png',
    imageAlt: 'Neominds AI Systems - Intelligent Automation, LLM Integration, and Autonomous AI Agents',
    bgGradient: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',
  },
  {
    id: 3,
    slug: 'cloud-based-software',
    category: 'Cloud Modernization',
    title: 'MODERNIZE',
    tagline: 'Moving legacy applications to modern code and cloud platforms in stages',
    description:
      'Outdated systems slow teams down and cost more every year. We move legacy applications to modern code and cloud platforms in stages, so your daily operations keep running while the upgrade happens.',
    links: [
      { label: 'legacy applications', slug: 'legacy-modernisation' },
      { label: 'cloud platforms', slug: 'cloud-based-software' },
      { label: 'daily operations keep running', slug: 'custom-software-development' },
    ],
    servicePills: [
      { label: 'Legacy Modernisation', slug: 'legacy-modernisation' },
      { label: 'Cloud Based Softwares', slug: 'cloud-based-software' },
      { label: 'SaaS Development', slug: 'saas-development' },
      { label: 'Analytic Dashboard', slug: 'analytics-dashboard' },
    ],
    image: '/services/devops.png',
    imageAlt: 'Neominds Cloud Evolution - Cloud-Native Architecture and Zero-Downtime Legacy Modernization',
    bgGradient: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)',
  },
];

interface ServicesStackProps {
  onSelectService?: (slug: string) => void;
}

export const ServicesStack: React.FC<ServicesStackProps> = ({ onSelectService }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (slug: string) => {
    if (onSelectService) {
      onSelectService(slug);
    } else {
      window.location.hash = slug;
    }
  };

  return (
    <div
      id="services"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Embedded Responsive Styles for Smooth Performance on Any Viewport */}
      <style>{`
        @media (max-width: 999px) {
          .services-stack-section {
            position: relative !important;
            top: auto !important;
            min-height: auto !important;
            height: auto !important;
            box-shadow: none !important;
            border-top: 1px solid #e4e2e1 !important;
          }
          .services-stack-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
          }
          .services-stack-visual {
            width: 100% !important;
            height: 320px !important;
            min-height: 320px !important;
            padding: 0 !important;
          }
          .services-stack-img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .services-stack-content {
            padding: 36px 22px 50px !important;
          }
        }
        @media (min-width: 1000px) {
          .services-stack-section {
            position: sticky !important;
            top: 0 !important;
            height: 100vh !important;
            min-height: 100vh !important;
            box-shadow: none !important;
          }
          .services-stack-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            height: 100% !important;
            width: 100% !important;
          }
          .services-stack-visual {
            width: 100% !important;
            height: 100% !important;
            min-height: 100% !important;
            padding: 0 !important;
          }
          .services-stack-img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .services-stack-content {
            padding: clamp(48px, 5vw, 84px) clamp(40px, 4.5vw, 76px) !important;
          }
        }
      `}</style>

      {/* Section Introduction Header */}
      <div
        className="container"
        style={{
          maxWidth: '1280px',
          paddingTop: '64px',
          paddingBottom: '48px',
          borderBottom: '1px solid #e4e2e1',
        }}
      >
        <ScrollReveal
          as="h2"
          style={{
            fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            fontSize: 'clamp(28px, 3.2vw, 40px)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: '#000000',
            maxWidth: '780px',
            margin: 0,
            letterSpacing: '-0.01em',
            display: 'block',
          }}
          blurStrength={7}
        >
          Engineering that stays reliable as your business grows.
        </ScrollReveal>
      </div>

      {stackCards.map((card, idx) => {
        const isHovered = hoveredCard === card.id;

        return (
          <section
            key={card.id}
            className="services-stack-section"
            style={{
              position: isMobile ? 'relative' : 'sticky',
              top: 0,
              minHeight: isMobile ? 'auto' : '100vh',
              height: isMobile ? 'auto' : '100vh',
              width: '100%',
              backgroundColor: '#f1efeb',
              borderTop: idx > 0 ? '1px solid #e4e2e1' : 'none',
              zIndex: idx + 1,
              display: 'flex',
              alignItems: 'center',
              boxShadow: 'none',
              overflow: 'hidden',
            }}
          >
            <div
              className="services-stack-grid"
              style={{
                width: '100%',
                height: '100%',
                display: isMobile ? 'flex' : 'grid',
                flexDirection: isMobile ? 'column' : undefined,
                gridTemplateColumns: isMobile ? undefined : '1fr 1fr',
                alignItems: 'stretch',
              }}
            >
              {/* Left Visual Column */}
              <div
                onClick={() => handleCardClick(card.slug)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="services-stack-visual"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: isMobile ? '320px' : '100%',
                  backgroundColor: '#e4e2e1',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  className="services-stack-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: isMobile ? '320px' : '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  }}
                />

                {/* Subtle vignette overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(32, 11, 0,  0.25) 0%, transparent 45%), linear-gradient(to top, rgba(32, 11, 0,  0.4) 0%, transparent 35%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Right Content Column */}
              <div
                className="services-stack-content"
                style={{
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: isMobile ? '36px 20px 48px' : 'clamp(48px, 5vw, 84px) clamp(40px, 4.5vw, 76px)',
                  borderLeft: isMobile ? 'none' : '1px solid #e4e2e1',
                  borderTop: isMobile ? '1px solid #e4e2e1' : 'none',
                }}
              >
                <div style={{ maxWidth: '620px' }}>
                  <div
                    onClick={() => handleCardClick(card.slug)}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '16px',
                      cursor: 'pointer',
                      marginBottom: '12px',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                        fontSize: 'clamp(28px, 3vw, 42px)',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.15,
                        color: isHovered ? '#fe6200' : '#000000',
                        margin: 0,
                        transition: 'color 0.38s cubic-bezier(0.215, 0.61, 0.355, 1)',
                      }}
                    >
                      {card.title}
                    </h2>

                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0px',
                        backgroundColor: isHovered ? 'rgba(254, 98, 0, 0.12)' : 'transparent',
                        border: '1px solid #e4e2e1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.38s cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
                      }}
                    >
                      <ArrowUpRight
                        size={20}
                        style={{
                          color: isHovered ? '#fe6200' : '#000000',
                          transition: 'color 0.38s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* Tagline */}
                  <p
                    style={{
                      fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                      fontSize: isMobile ? '15px' : '16px',
                      fontWeight: 500,
                      color: '#000000',
                      margin: '0 0 16px 0',
                      lineHeight: 1.5,
                    }}
                  >
                    {card.tagline}
                  </p>

                  {/* Detailed Description with Embedded Keyword Links */}
                  <p
                    style={{
                      fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                      fontSize: 'clamp(14px, 1.1vw, 16px)',
                      lineHeight: 1.6,
                      color: '#868683',
                      margin: '0 0 24px 0',
                      fontWeight: 400,
                    }}
                  >
                    {renderDescriptionWithLinks(card.description, card.links, handleCardClick)}
                  </p>

                  {/* Connected Neominds Services Pills */}
                  <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                    <div
                      style={{
                        fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace",
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        color: '#868683',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      SERVICES IN THIS PRACTICE:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {card.servicePills.map((pill) => (
                        <button
                          key={pill.slug + pill.label}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(pill.slug);
                          }}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: isMobile ? '6px 12px' : '8px 14px',
                            borderRadius: '10px',
                            backgroundColor: '#f1efeb',
                            border: '1px solid #e4e2e1',
                            fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
                            fontSize: isMobile ? '12px' : '13px',
                            fontWeight: 400,
                            color: '#000000',
                            cursor: 'pointer',
                            boxShadow: 'none',
                            transition: 'all 0.38s cubic-bezier(0.215, 0.61, 0.355, 1)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#fe6200';
                            e.currentTarget.style.color = '#fe6200';
                            e.currentTarget.style.backgroundColor = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#e4e2e1';
                            e.currentTarget.style.color = '#000000';
                            e.currentTarget.style.backgroundColor = '#f1efeb';
                          }}
                        >
                          <span>{pill.label}</span>
                          <ArrowUpRight size={13} color="#fe6200" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div>
                    <button
                      onClick={() => handleCardClick(card.slug)}
                      className="btn btn-primary"
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

function renderDescriptionWithLinks(
  text: string,
  links: { label: string; slug: string }[],
  onNavigate: (slug: string) => void
) {
  let parts: (string | React.ReactNode)[] = [text];

  links.forEach((link) => {
    const nextParts: (string | React.ReactNode)[] = [];

    parts.forEach((part) => {
      if (typeof part !== 'string') {
        nextParts.push(part);
        return;
      }

      const index = part.indexOf(link.label);
      if (index === -1) {
        nextParts.push(part);
        return;
      }

      const before = part.slice(0, index);
      const after = part.slice(index + link.label.length);

      if (before) nextParts.push(before);

      nextParts.push(
        <span
          key={`${link.slug}-${index}`}
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(link.slug);
          }}
          className="link-standard"
          style={{
            color: '#000000',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'color 0.38s cubic-bezier(0.215, 0.61, 0.355, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fe6200';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#000000';
          }}
        >
          {link.label}
        </span>
      );

      if (after) nextParts.push(after);
    });

    parts = nextParts;
  });

  return <>{parts}</>;
}
