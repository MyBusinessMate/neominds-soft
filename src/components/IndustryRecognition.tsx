import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import { Button } from './ui/Button';

interface RecognitionSlide {
  title: string;
  imageUrl: string;
  caption: string;
}

const slides: RecognitionSlide[] = [
  {
    title: 'Claude Partner Network Services Track',
    imageUrl: '/uploads/ESThumbnails/145843/660.vertical.jpg',
    caption: 'Select partner in Claude Partner Network',
  },
  {
    title: 'Agentic AI in Digital Engineering Market 2025–2029',
    imageUrl: '/uploads/ESThumbnails/137362/660.Image.jpg',
    caption: 'Research and Markets Report recognition',
  },
  {
    title: 'Top AI Company',
    imageUrl: '/uploads/ESThumbnails/131881/660.Top-AI-company-Clutch.jpg',
    caption: 'Clutch Top AI Company Award',
  },
];

const IndustryRecognitionComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex, nextSlide]);

  useEffect(() => {
    if (cardRef.current) {
      const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        gsap.set(cardRef.current, { opacity: 1 });
      } else {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0.4 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
      }
    }
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="recognition"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#000000',
        paddingTop: 'clamp(80px, 9vw, 120px)',
        paddingBottom: 'clamp(80px, 9vw, 120px)',
        borderTop: '1px solid #292522',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1.1fr) minmax(320px, 1fr)',
            alignItems: 'center',
            gap: 'clamp(40px, 6vw, 80px)',
          }}
          className="recognition-grid"
        >
          {/* Left Column Text */}
          <div style={{ maxWidth: '580px' }}>
            <RevealElement variant="text">
              <span
                className="eyebrow-tag"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-subheading)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#A94F0B',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                05 // COMMITMENTS & STANDARDS
              </span>
            </RevealElement>

            <ScrollReveal
              as="h2"
              className="section-title"
              style={{
                color: '#F2F0EC',
                marginBottom: '24px',
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(30px, 3.5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
              blurStrength={4}
            >
              Our commitments
            </ScrollReveal>

            <RevealElement variant="text" delay={0.05}>
              <p
                className="body-lead"
                style={{
                  color: '#A3A3A3',
                  fontSize: 'clamp(15px, 1.2vw, 17px)',
                  marginBottom: '20px',
                  lineHeight: 1.65,
                }}
              >
                Every Neominds TechHub project comes with a signed NDA on request, full ownership of your source code, and delivery tracked through weekly demos. Our team works hours that overlap with yours, wherever you are.
              </p>
            </RevealElement>

            <RevealElement variant="text" delay={0.1}>
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid #292522',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#777777',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Backed by ISO/IEC 27001:2022 aligned processes, AWS, Microsoft Azure, and Google Cloud engineering standards.
                </p>
              </div>
            </RevealElement>
          </div>

          {/* Right Column Recognition Showcase (No Boxed Card Slop) */}
          <RevealElement variant="card">
            <div
              style={{
                border: '1px solid #292522',
                borderRadius: '8px',
                backgroundColor: '#000000',
                padding: 'clamp(28px, 4vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '440px',
              }}
            >
              {/* Slide Counter Header */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid #292522',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-subheading)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#A94F0B',
                    textTransform: 'uppercase',
                  }}
                >
                  INDUSTRY RECOGNITION
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-metrics)',
                    fontSize: '11.5px',
                    color: '#777777',
                  }}
                >
                  0{currentIndex + 1} / 0{slides.length}
                </span>
              </div>

              {/* Slide Image */}
              <div
                ref={cardRef}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '12px 0',
                }}
              >
                <img
                  src={currentSlide.imageUrl}
                  alt={`${currentSlide.title} - ${currentSlide.caption}`}
                  style={{
                    maxHeight: '260px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                  }}
                  loading="lazy"
                />
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    marginTop: '20px',
                    color: '#F2F0EC',
                    fontSize: '15px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1.4,
                  }}
                >
                  {currentSlide.title}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: '#A3A3A3',
                    marginTop: '4px',
                    textAlign: 'center',
                  }}
                >
                  {currentSlide.caption}
                </span>
              </div>

              {/* Controls */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  marginTop: '16px',
                  borderTop: '1px solid #292522',
                }}
              >
                <Button
                  variant="icon-only"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  style={{ width: '36px', height: '36px' }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </Button>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      style={{
                        width: idx === currentIndex ? '28px' : '14px',
                        height: '3px',
                        backgroundColor: idx === currentIndex ? '#A94F0B' : '#292522',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        border: 'none',
                        padding: 0,
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <Button
                    variant="icon-only"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <ChevronLeft size={16} />
                  </Button>
                  <Button
                    variant="icon-only"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </RevealElement>
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .recognition-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export const IndustryRecognition = React.memo(IndustryRecognitionComponent);
