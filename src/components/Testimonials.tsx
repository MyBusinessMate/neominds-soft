import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  logoUrl?: string;
  clientName: string;
  quote: string;
  author: string;
  title: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: 'mybusinessmate',
      clientName: 'MyBusinessMate',
      logoUrl: '/images/company-logos/mybusinessmate.png',
      quote:
        'NeoMinds built our core operational workflows and customer management platform from scratch. Their team delivered reliable, high-throughput systems that streamlined our client operations from week one.',
      author: 'Daniel Brooks',
      title: 'Operations Director, MyBusinessMate',
    },
    {
      id: 'dotcomweavers',
      clientName: 'Dotcomweavers',
      logoUrl: '/images/company-logos/dotcomweavers.png',
      quote:
        'NeoMinds delivered our autonomous multi-project AI assistant and velocity engine with exceptional technical discipline. Their engineers integrated directly into our sprints and eliminated cross-team coordination bottlenecks.',
      author: 'Michael Anderson',
      title: 'Head of Engineering, Dotcomweavers',
    },
    {
      id: 'mindspace',
      clientName: 'Mindspace.ai',
      logoUrl: '/images/company-logos/mindspace-ai.png',
      quote:
        'NeoMinds engineered our HIPAA-ready telehealth platform and clinical wellness mobile app. Their healthcare AI architecture accelerated patient consultation routing while maintaining strict compliance standards throughout.',
      author: 'Sarah Mitchell',
      title: 'Product Lead, Mindspace.ai',
    },
    {
      id: 'laptomart',
      clientName: 'Laptomart',
      logoUrl: '/images/company-logos/laptomart.png',
      quote:
        'Our e-commerce inventory sync and high-volume order processing pipeline was deployed flawlessly by NeoMinds. Real-time stock reconciliation and automated fulfillment cut our order processing latency dramatically.',
      author: 'James Wilson',
      title: 'Technology Director, Laptomart',
    },
    {
      id: 'tecnomart',
      clientName: 'Tecnomart',
      logoUrl: '/images/company-logos/tecnomart.png',
      quote:
        'The custom enterprise ERP integrations and distributed data pipelines NeoMinds engineered allowed our retail network to synchronize catalog updates and point-of-sale data with 99.9% uptime.',
      author: 'Robert Bennett',
      title: 'Infrastructure Architect, Tecnomart',
    },
    {
      id: 'oden',
      clientName: 'Oden',
      logoUrl: '/images/company-logos/oden.png',
      quote:
        'NeoMinds engineered our real-time streaming analytics engine and IoT telemetry ingestion platform. Their deep systems engineering expertise ensured zero message loss across millions of daily industrial machine data points.',
      author: 'Alexander Reed',
      title: 'VP of Platform Engineering, Oden',
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
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
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
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(28px, 3.6vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#000000',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              What Our Clients Say
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
              minHeight: '400px',
              backgroundColor: 'transparent',
              border: 'none',
              borderLeft: '3px solid #fe6200',
              borderRadius: '0px',
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
                        maxHeight: '40px',
                        maxWidth: '160px',
                        objectFit: 'contain',
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      fontSize: '17px',
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

              {/* Monumental Quote in Serif */}
              <blockquote
                style={{
                  fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                  fontSize: 'clamp(20px, 2.2vw, 27px)',
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: '#000000',
                  margin: '0 0 32px 0',
                  letterSpacing: '-0.01em',
                }}
              >
                "{current.quote}"
              </blockquote>
            </div>

            {/* Author Credentials & Pagination Controls */}
            <div>
              <div
                style={{
                  borderTop: '1px solid var(--colors-border-light, #e4e2e1)',
                  paddingTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(254, 98, 0, 0.12)',
                      color: '#fe6200',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      fontSize: '16px',
                    }}
                  >
                    {current.author.charAt(0)}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        fontWeight: 700,
                        fontSize: '15px',
                        color: '#000000',
                      }}
                    >
                      {current.author}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        fontSize: '13.5px',
                        color: '#2b2b2b',
                        marginTop: '2px',
                      }}
                    >
                      {current.title}
                    </div>
                  </div>
                </div>

                {/* Prev / Next Controls Desktop */}
                <div className="testimonials-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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

              {/* Centered Prev / Next Controls for Mobile */}
              <div
                className="testimonials-mobile-nav"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  marginTop: '20px',
                  width: '100%',
                }}
              >
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <ArrowLeft size={18} />
                </button>
                <span
                  style={{
                    fontFamily: 'var(--typography-mono-family)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#2b2b2b',
                    padding: '0 8px',
                  }}
                >
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <ArrowRight size={18} />
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
            gap: 20px !important;
          }
          .quote-column {
            margin-top: 0 !important;
            border-left: 3px solid #fe6200 !important;
            padding-left: 14px !important;
            min-height: auto !important;
          }
          .testimonials-desktop-nav {
            display: none !important;
          }
          .testimonials-mobile-nav {
            display: flex !important;
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
