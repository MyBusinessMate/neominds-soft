import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

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
  const [isPaused, setIsPaused] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: 'bytexl',
      clientName: 'ByteXL',
      logoUrl: '/images/company-logos/bytexl.webp',
      quote:
        'NeoMinds TechHub re-architected our high-concurrency coding exam platform to handle 100,000+ simultaneous students across major universities with zero downtime and sub-second code evaluation latencies.',
      author: 'Karunakar T.',
      title: 'VP of Technology, ByteXL',
    },
    {
      id: 'fero',
      clientName: 'Fero Logistics',
      logoUrl: '/images/company-logos/fero.svg?v=2',
      quote:
        'NeoMinds TechHub built our automated freight dispatching engine and real-time load matching microservices. Their engineering team moves fast, writes rock-solid code, and solved complex geospatial routing challenges for our fleet.',
      author: 'Abhinav Sharma',
      title: 'Head of Engineering, Fero',
    },
    {
      id: 'interzoon',
      clientName: 'Interzoon',
      logoUrl: '/images/company-logos/interzoon-logo.png',
      quote:
        'Their team took full ownership of our core microservices migration and Kubernetes pipelines. Deployments that previously took hours now deploy continuously in minutes with zero service interruption.',
      author: 'Marcus Weber',
      title: 'Principal Architect, Interzoon',
    },
    {
      id: 'expiroo',
      clientName: 'Expiroo',
      logoUrl: '/images/company-logos/expiroo-logo.webp',
      quote:
        'NeoMinds TechHub engineered our real-time inventory monitoring application and automated alert pipelines. The platform gives retailers instant visibility across supply chains and reduced shrinkage dramatically.',
      author: "Liam O'Connor",
      title: 'Product Director, Expiroo',
    },
    {
      id: 'aiguroo',
      clientName: 'AiGuroo',
      logoUrl: '/images/company-logos/AiGuroo.svg',
      quote:
        'The team built scalable inference pipelines and production-grade vector search workflows for our AI platform. They bridged research models into high-availability production APIs with outstanding speed.',
      author: 'Dr. Elena Rostova',
      title: 'Chief AI Scientist, AiGuroo',
    },
    {
      id: 'fundbot',
      clientName: 'Fundbot',
      logoUrl: '/images/company-logos/fundbot.png?v=2',
      quote:
        'NeoMinds TechHub delivered our core underwriting rails and banking API integrations with institutional-grade security. Their weekly sprints and transparent code reviews gave our stakeholders total confidence.',
      author: 'Tariq Al-Mansoor',
      title: 'Co-Founder & CTO, Fundbot',
    },
  ];

  const current = testimonials[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setFadeKey((k) => k + 1);
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setFadeKey((k) => k + 1);
  }, [testimonials.length]);

  // Dynamic Auto-Rotation: Cycles through verified client reviews every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setFadeKey((k) => k + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
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
                    onClick={() => {
                      setCurrentIndex(idx);
                      setFadeKey((k) => k + 1);
                    }}
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
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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
            <div key={fadeKey} className="nm-review-content">
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => setIsPaused((prev) => !prev)}
                    title={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      color: isPaused ? '#fe6200' : '#66615c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                  >
                    {isPaused ? <Play size={13} /> : <Pause size={13} />}
                  </button>

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
                key={`author-${fadeKey}`}
                className="nm-review-content"
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
        @keyframes nmFadeSlide {
          0% {
            opacity: 0.25;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .nm-review-content {
          animation: nmFadeSlide 0.35s ease-out;
        }
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
