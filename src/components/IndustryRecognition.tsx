import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollReveal, RevealElement } from './scroll-reveal';

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

  // 5-second automatic switching
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  // Refined crossfade animation on slide change
  useEffect(() => {
    if (cardRef.current) {
      const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        gsap.set(cardRef.current, { opacity: 1, scale: 1 });
      } else {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0.4, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
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
        backgroundColor: '#001334',
        paddingTop: 'clamp(60px, 7vw, 100px)',
        paddingBottom: 'clamp(60px, 7vw, 100px)',
        overflow: 'hidden',
        borderTop: 'none',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(40px, 6vw, 64px)',
          }}
        >
          {/* Left Column Text matching EffectiveSoft */}
          <div style={{ maxWidth: '560px' }}>
            <ScrollReveal
              as="h2"
              className="section-title"
              style={{
                color: '#ffffff',
                marginBottom: 'clamp(20px, 3vw, 28px)',
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 600,
                lineHeight: 1.22,
              }}
              blurStrength={4}
            >
              Our commitments
            </ScrollReveal>

            <RevealElement variant="text" delay={0.05}>
              <p
                className="body-lead"
                style={{
                  color: 'rgba(255, 255, 255, 0.92)',
                  fontSize: 'clamp(16px, 1.3vw, 18px)',
                  marginBottom: '20px',
                  lineHeight: 1.6,
                }}
              >
                Every Neominds TechHub project comes with a signed NDA on request, full ownership of your source code, and delivery tracked through weekly demos. Our team works hours that overlap with yours, wherever you are.
              </p>
            </RevealElement>

            <RevealElement variant="text" delay={0.1}>
              <p
                className="body-text"
                style={{
                  color: 'rgba(255, 255, 255, 0.68)',
                }}
              >
                Backed by ISO/IEC 27001:2022 aligned processes, AWS, Microsoft Azure, and Google Cloud engineering standards.
              </p>
            </RevealElement>
          </div>

          {/* Right Column Recognition Carousel */}
          <RevealElement variant="card">
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0px',
                padding: 'clamp(24px, 4vw, 40px)',
                minHeight: '440px',
                boxShadow: 'none',
              }}
            >
              {/* Left Nav Arrow */}
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#ffffff',
                  opacity: 0.85,
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.2s, background-color 0.2s',
                  zIndex: 4,
                  background: 'rgba(255, 255, 255, 0.12)',
                  borderRadius: '0px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Right Nav Arrow */}
              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#ffffff',
                  opacity: 0.85,
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.2s, background-color 0.2s',
                  zIndex: 4,
                  background: 'rgba(255, 255, 255, 0.12)',
                  borderRadius: '0px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
                aria-label="Next Slide"
              >
                <ChevronRight size={22} />
              </button>

              {/* Slide Image Container */}
              <div
                ref={cardRef}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  maxWidth: '380px',
                  borderRadius: '0px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={currentSlide.imageUrl}
                  alt={currentSlide.title}
                  style={{
                    width: '100%',
                    maxHeight: '380px',
                    objectFit: 'contain',
                    borderRadius: '0px',
                    boxShadow: 'none',
                  }}
                  loading="lazy"
                />
                <span
                  style={{
                    marginTop: '16px',
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '13px',
                    fontWeight: 500,
                    textAlign: 'center',
                  }}
                >
                  {currentSlide.title}
                </span>
              </div>

              {/* Bottom Controls */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  maxWidth: '380px',
                  marginTop: '24px',
                }}
              >
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '0px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                  }}
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                </button>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      style={{
                        width: idx === currentIndex ? '32px' : '16px',
                        height: '4px',
                        backgroundColor: idx === currentIndex ? '#2258e7' : 'rgba(255, 255, 255, 0.25)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        borderRadius: '0px',
                      }}
                      role="button"
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </RevealElement>
        </div>
      </div>
    </section>
  );
};

export const IndustryRecognition = React.memo(IndustryRecognitionComponent);
