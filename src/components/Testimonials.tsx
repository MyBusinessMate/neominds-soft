import React, { useState, useRef } from 'react';
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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      clientName: 'TruBridge',
      quote:
        'NeoMinds delivered critical engineering rigor and high accountability when building our healthcare and claims verification systems. Their team took complete ownership from initial architecture through production release.',
      author: 'Thomas Golden',
      title: 'VP of Engineering, TruBridge',
    },
    {
      id: '2',
      clientName: 'DotcomWeavers',
      quote:
        'NeoMinds delivered our autonomous multi-project AI velocity engine with exceptional technical discipline. Their engineers integrated directly into our sprints and reduced cross-project coordination delays significantly.',
      author: 'Engineering Director',
      title: 'DotcomWeavers Enterprise Group',
    },
    {
      id: '3',
      clientName: 'Adventr',
      quote:
        'NeoMinds has played an impactful role in developing our smart video platform. Their full-stack developers and QA engineers proactively improve performance and scale our interactive streaming video architecture under high concurrency.',
      author: 'Peter Gerard',
      title: 'Head of Product, Adventr',
    },
    {
      id: '4',
      clientName: 'Motive Retail',
      quote:
        'Our engineering collaboration with NeoMinds has been highly productive. Their skilled engineers integrated directly into our team with minimal ramp-up time, accelerating our automotive data exchange integration pipelines.',
      author: 'Technical Lead',
      title: 'Integration Engineering, Motive Retail',
    },
  ];

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)', // Freehand warm cream beige
        paddingTop: 'clamp(56px, 8vw, 110px)',
        paddingBottom: 'clamp(56px, 8vw, 110px)',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box',
        borderTop: '1px solid var(--colors-border-light, #e4e2e1)',
        color: '#000000',
        overflowX: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
                fontSize: 'clamp(28px, 3.6vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#000000',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              What our partner say
            </h2>

            {/* Client Interactive Roster - Hidden on mobile (< 768px) */}
            <div
              className="testimonials-client-roster"
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
                          color: isActive ? '#fe6200' : '#2b2b2b',
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--typography-body-family)',
                          fontSize: '15px',
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? '#000000' : '#2b2b2b',
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '420px',
              backgroundColor: 'transparent',
              border: 'none',
              borderLeft: '3px solid #fe6200',
              borderRadius: '8px',
              padding: 'clamp(8px, 2vw, 16px) 0 clamp(8px, 2vw, 16px) clamp(20px, 4vw, 44px)',
              boxShadow: 'none',
              userSelect: 'none',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  {current.logoUrl && (
                    <img
                      src={current.logoUrl}
                      alt={`${current.clientName} logo`}
                      loading="lazy"
                      style={{
                        maxHeight: '28px',
                        maxWidth: '120px',
                        objectFit: 'contain',
                        opacity: 0.9,
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontFamily: 'var(--typography-heading1-family)',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#000000',
                    }}
                  >
                    {current.clientName}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--typography-mono-family)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#2b2b2b',
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
                  color: '#000000',
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
                      borderRadius: '8px',
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
                      borderRadius: '8px',
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
                      color: '#2b2b2b',
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
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    color: '#000000',
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
                    e.currentTarget.style.color = '#000000';
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
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    color: '#000000',
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
                    e.currentTarget.style.color = '#000000';
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
        @media (max-width: 767px) {
          .testimonials-client-roster {
            display: none !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .quote-column {
            margin-top: 0 !important;
            border-left: 3px solid #fe6200 !important;
            padding-left: 14px !important;
            min-height: auto !important;
          }
        }
        @media (min-width: 768px) and (max-width: 960px) {
          .testimonials-grid {
            grid-template-columns: minmax(240px, 1fr) minmax(320px, 1.8fr) !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};
