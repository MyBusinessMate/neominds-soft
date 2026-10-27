import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  logoUrl?: string;
  clientName: string;
  quote: string;
  author: string;
  title: string;
  photoUrl?: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      clientName: 'TruBridge',
      logoUrl: '/uploads/2019/11/TruBridge-logo-color.svg',
      quote:
        'We have been partnering with Neominds since 2006, so we’ve had time to become familiar with their professionalism and the quality of service they provide. I would highlight the great responsibility which my company assumes when solving critical tasks.',
      author: 'Thomas Golden',
      title: 'USA, TruBridge (formerly TruCode)',
      photoUrl: '/uploads/ESThumbnails/2092/200.tomgolden.png',
    },
    {
      id: '2',
      clientName: 'Motive Retail',
      logoUrl: '/uploads/2010/04/motiveretail-color-1.svg',
      quote:
        'We have had a very positive experience with Neominds’s staff augmentation services. Their skilled, knowledgeable professionals integrated directly into our team, requiring minimal ramp-up time. Their expertise enhanced our project’s efficiency and quality. We confidently recommend Neominds.',
      author: 'Philipe Araujo',
      title: 'Business Analyst and Quality Engineer',
    },
    {
      id: '3',
      clientName: 'Maersk',
      logoUrl: '/uploads/2010/04/maersk-color-1.svg',
      quote:
        'Neominds’s team deeply understood our requirements and have been a proactive part of any problem-solving process. We have only experienced a professional approach to our projects, as well as a pleasant and trust-based collaboration. They’ve quickly found and added the necessary resources.',
      author: 'Sasja Ihn Christensen',
      title: 'Senior Director, Head of Digital Business Development',
    },
    {
      id: '4',
      clientName: 'Delphi Vision',
      logoUrl: '/uploads/2010/04/delphivision-color.svg',
      quote:
        'We are extremely satisfied with our collaboration with Neominds. We engaged them for business analysis, UI/UX design, web development, and testing. The results were visually stunning designs and wireframes, remarkable UX suggestions, and an app fully aligned with our requirements.',
      author: 'Colin Cridland',
      title: 'Director, Founder at Delphi Vision Ltd',
    },
    {
      id: '5',
      clientName: 'Plato',
      logoUrl: '/uploads/ESThumbnails/34584/280.plato-logo.png',
      quote:
        'Since working with Neominds, we’ve grown our company from the building phase to the profitability phase. We’ve continued expanding upon their responsibilities, and they’ve continued to accept challenges and integrate with our team. They’ve become mission-critical resources for us.',
      author: 'Jesse MacNish',
      title: 'CTO USA, Plato',
      photoUrl: '/uploads/ESThumbnails/34585/200.plato-photo.png',
    },
    {
      id: '6',
      clientName: 'Adventr',
      logoUrl: '/uploads/2010/04/adventr-color.svg',
      quote:
        'Neominds has played an impactful role in developing our SaaS app. Their developers and QA engineers show strong engagement, understand our needs, deliver solid results. They proactively improve security and performance of our app, report issues clearly, and help us deploy code with minimal bugs.',
      author: 'Peter Gerard',
      title: 'Head of Product',
    },
  ];

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)', // Freehand warm cream beige
        paddingTop: 'clamp(80px, 9vw, 120px)',
        paddingBottom: 'clamp(80px, 9vw, 120px)',
        borderTop: '1px solid var(--colors-border-light, #e4e2e1)',
        color: '#000000',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Asymmetrical Editorial Showcase with Freehand aesthetics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 1.8fr)',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
          className="testimonials-grid"
        >
          {/* Left Column: Index, Title & Client Directory */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--typography-heading1-family)',
                fontSize: 'clamp(32px, 3.6vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#000000',
                marginBottom: '28px',
                letterSpacing: '-0.02em',
              }}
            >
              What our long-term engineering partners say.
            </h2>

            {/* Client Interactive Roster */}
            <div
              style={{
                borderTop: '1px solid var(--colors-border-light, #e4e2e1)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {testimonials.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 0',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--typography-mono-family)',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: isActive ? '#fe6200' : '#66615c',
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--typography-body-family)',
                          fontSize: '15px',
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? '#000000' : '#66615c',
                          transition: 'color 0.25s ease',
                        }}
                      >
                        {item.clientName}
                      </span>
                    </div>

                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#fe6200',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Cardless Editorial Presentation Blended into Cream Background */}
          <div
            className="quote-column"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '420px',
              backgroundColor: 'transparent',
              border: 'none',
              borderLeft: '3px solid #fe6200',
              borderRadius: 0,
              padding: 'clamp(8px, 2vw, 16px) 0 clamp(8px, 2vw, 16px) clamp(24px, 4vw, 44px)',
              boxShadow: 'none',
            }}
          >
            <div>
              {/* Client Logo Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '28px',
                  borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
                  paddingBottom: '16px',
                }}
              >
                {current.logoUrl ? (
                  <img
                    src={current.logoUrl}
                    alt={`${current.clientName} logo`}
                    loading="lazy"
                    style={{
                      maxHeight: '32px',
                      maxWidth: '140px',
                      objectFit: 'contain',
                      opacity: 0.9,
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <span
                    style={{
                      fontFamily: 'var(--typography-heading1-family)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#000000',
                    }}
                  >
                    {current.clientName}
                  </span>
                )}

                <span
                  style={{
                    fontFamily: 'var(--typography-mono-family)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#66615c',
                  }}
                >
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
              </div>

              {/* Monumental Quote in BL Pylon Serif */}
              <blockquote
                style={{
                  fontFamily: 'var(--typography-display-family)',
                  fontSize: 'clamp(22px, 2.3vw, 29px)',
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: '#fbf9f5',
                  margin: '0 0 36px 0',
                  letterSpacing: '-0.01em',
                }}
              >
                "{current.quote}"
              </blockquote>
            </div>

            {/* Author Credentials & Pagination Controls */}
            <div
              style={{
                borderTop: '1px solid var(--colors-border-light, #e4e2e1)',
                paddingTop: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {current.photoUrl ? (
                  <img
                    src={current.photoUrl}
                    alt={current.author}
                    loading="lazy"
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      objectFit: 'cover',
                      border: '1px solid var(--colors-border-light, #e4e2e1)',
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(254, 98, 0, 0.12)',
                      color: '#fe6200',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontFamily: 'var(--typography-body-family)',
                      fontSize: '16px',
                    }}
                  >
                    {current.author.charAt(0)}
                  </div>
                )}

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--typography-body-family)',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#000000',
                    }}
                  >
                    {current.author}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--typography-body-family)',
                      fontSize: '14px',
                      color: '#66615c',
                      marginTop: '2px',
                    }}
                  >
                    {current.title}
                  </div>
                </div>
              </div>

              {/* Prev / Next Controls on light surface */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    color: '#fbf9f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.color = '#fe6200';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e4e2e1';
                    e.currentTarget.style.color = '#fbf9f5';
                  }}
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    color: '#fbf9f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.color = '#fe6200';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e4e2e1';
                    e.currentTarget.style.color = '#fbf9f5';
                  }}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .quote-column {
            margin-top: 24px;
          }
        }
      `}</style>
    </section>
  );
};
