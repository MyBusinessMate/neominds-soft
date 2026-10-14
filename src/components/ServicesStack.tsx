import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

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
    category: 'PILLAR 01 // FOUNDATION',
    title: 'BUILD',
    tagline: 'Web, mobile, cross-platform, e-commerce, custom and SaaS software',
    description:
      'We create web, mobile, cross-platform, e-commerce, custom and SaaS software that stays reliable as your users, data and features grow. We handle design, development, testing, cloud deployment and ongoing support.',
    links: [
      { label: 'web', slug: 'web-cms-development' },
      { label: 'mobile', slug: 'mobile-app-development' },
      { label: 'e-commerce', slug: 'ecommerce-development' },
      { label: 'SaaS software', slug: 'devops' },
    ],
    servicePills: [
      { label: 'Web Development', slug: 'web-cms-development' },
      { label: 'Mobile App Development', slug: 'mobile-app-development' },
      { label: 'Custom Software', slug: 'software-development' },
      { label: 'E-commerce Software', slug: 'ecommerce-development' },
    ],
    image: '/services/software-development.png',
    imageAlt: 'Build Web, Mobile, Custom and SaaS Software',
    bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
  },
  {
    id: 2,
    slug: 'ai-development',
    category: 'PILLAR 02 // INTELLIGENCE',
    title: 'AI',
    tagline: 'Integration, intelligent automation, and AI-native products',
    description:
      'We add AI to the software you already run, automate repetitive manual work, and build products that are AI-native from day one. Each solution is built to work inside your real business, not as a demo.',
    links: [
      { label: 'add AI to the software', slug: 'ai-development' },
      { label: 'automate repetitive manual work', slug: 'ai-automations' },
      { label: 'AI-native from day one', slug: 'ai-agents' },
    ],
    servicePills: [
      { label: 'AI Integration', slug: 'ai-development' },
      { label: 'AI Automation', slug: 'ai-automations' },
      { label: 'AI-Native Software', slug: 'ai-agents' },
      { label: 'Chatbots & Assistants', slug: 'chatbot-videobot' },
    ],
    image: '/services/ai-development.png',
    imageAlt: 'AI Integration and Autonomous Intelligent Systems',
    bgGradient: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',
  },
  {
    id: 3,
    slug: 'devops',
    category: 'PILLAR 03 // EVOLUTION',
    title: 'MODERNIZE',
    tagline: 'Moving legacy applications to modern code and cloud platforms in stages',
    description:
      'Outdated systems slow teams down and cost more every year. We move legacy applications to modern code and cloud platforms in stages, so your daily operations keep running while the upgrade happens.',
    links: [
      { label: 'legacy applications', slug: 'software-development' },
      { label: 'cloud platforms', slug: 'devops' },
      { label: 'daily operations keep running', slug: 'technical-support' },
    ],
    servicePills: [
      { label: 'Legacy App Modernization', slug: 'software-development' },
      { label: 'Cloud Apps Development', slug: 'devops' },
      { label: 'SaaS Architecture', slug: 'product-engineering' },
      { label: 'Data Analytics & BI', slug: 'analytics-dashboard' },
    ],
    image: '/services/devops.png',
    imageAlt: 'Legacy Application Modernization and Cloud Migration',
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
            border-top: 1px solid #e2e8f0 !important;
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
            box-shadow: 0 -12px 36px rgba(0, 0, 0, 0.04) !important;
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
          paddingTop: '20px',
          paddingBottom: 'clamp(24px, 3vw, 40px)',
        }}
      >
        <RevealElement variant="text">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2258E7' }} />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#475067',
                textTransform: 'uppercase',
              }}
            >
              OUR THREE PILLARS // BUILD · AI · MODERNIZE
            </span>
          </div>
        </RevealElement>

        <ScrollReveal
          as="h2"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.2vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#0f172a',
            maxWidth: '750px',
            margin: 0,
            letterSpacing: '-0.02em',
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
              backgroundColor: '#ffffff',
              borderTop: idx > 0 ? '1px solid #e2e8f0' : 'none',
              zIndex: idx + 1,
              display: 'flex',
              alignItems: 'center',
              boxShadow: isMobile ? 'none' : '0 -12px 36px rgba(0, 0, 0, 0.04)',
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
              {/* Left Visual Column - Full Screen / Edge-to-Edge Image */}
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
                  backgroundColor: '#0f172a',
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

                {/* Subtle dark gradient overlay for visual depth */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.18) 0%, transparent 45%), linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, transparent 35%)',
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
                  padding: isMobile ? '36px 22px 50px' : 'clamp(48px, 5vw, 84px) clamp(40px, 4.5vw, 76px)',
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
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(22px, 2.6vw, 36px)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.18,
                        color: isHovered ? '#2258e7' : '#0f172a',
                        textTransform: 'uppercase',
                        margin: 0,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {card.title}
                    </h2>

                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? 'rgba(34, 88, 231, 0.1)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background-color 0.2s ease, transform 0.2s ease',
                        transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
                      }}
                    >
                      <ArrowUpRight
                        size={26}
                        style={{
                          color: isHovered ? '#2258e7' : '#0f172a',
                          transition: 'color 0.2s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: isMobile ? '13px' : '14px',
                      fontWeight: 600,
                      color: '#334155',
                      margin: '0 0 16px 0',
                      lineHeight: 1.5,
                    }}
                  >
                    {card.tagline}
                  </p>

                  {/* Detailed Description with Embedded Keyword Links */}
                  <p
                    style={{
                      fontSize: 'clamp(14px, 1.05vw, 15.5px)',
                      lineHeight: 1.65,
                      color: '#475569',
                      margin: '0 0 22px 0',
                      fontWeight: 400,
                    }}
                  >
                    {renderDescriptionWithLinks(card.description, card.links, handleCardClick)}
                  </p>

                  {/* Connected Neominds Services Pills */}
                  <div style={{ marginBottom: isMobile ? '20px' : '26px' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#64748b',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      Services in this Practice:
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
                            gap: '5px',
                            padding: isMobile ? '5px 12px' : '6px 14px',
                            borderRadius: '20px',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #cbd5e1',
                            fontSize: isMobile ? '11px' : '12px',
                            fontWeight: 600,
                            color: '#1e293b',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#2258e7';
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = '#2258e7';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8fafc';
                            e.currentTarget.style.color = '#1e293b';
                            e.currentTarget.style.borderColor = '#cbd5e1';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <span>{pill.label}</span>
                          <ArrowUpRight size={12} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div>
                    <button
                      onClick={() => handleCardClick(card.slug)}
                      className="btn btn-primary"
                      style={{
                        padding: isMobile ? '10px 18px' : '11px 22px',
                        fontSize: '13px',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(34, 88, 231, 0.25)',
                      }}
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
          style={{
            color: '#2258e7',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            textDecorationThickness: '1.5px',
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1d4ed8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#2258e7';
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
