import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface LeaderItem {
  id: string;
  name: string;
  role: string;
  image: string;
  fallbackImage?: string;
  linkedin: string;
  bio: string;
  background: string;
  focus: string[];
  quote?: string;
  location?: string;
}

export const TOP_7_LEADERS: LeaderItem[] = [
  {
    id: 'shezan-khan',
    name: 'Shezan Khan',
    role: 'Chief Executive Officer',
    image: '/images/leaders/leader_shezan.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com',
    location: 'Hyderabad, India / London, UK',
    bio: 'Shezan leads the overall vision, engineering culture, and strategic client partnerships at Neominds TechHub. With over 15 years in enterprise software and technology innovation, he helps international businesses modernize legacy applications and build production AI systems.',
    background: 'Previously led enterprise engineering transformations and cloud migration programs across North American and European enterprise sectors.',
    focus: ['Long-term technical strategy', 'Enterprise client advisory', 'Engineering quality standards', 'Global market expansion'],
    quote: 'We build software the way we would want it built for us: clear, honest, and made to last.',
  },
  {
    id: 'vikram-reddy',
    name: 'Dr. Vikram Reddy',
    role: 'Chief Technology Officer',
    image: '/images/leaders/leader_vikram.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com',
    location: 'Hyderabad, India',
    bio: 'Dr. Reddy steers technological architecture, R&D in applied AI, and technical excellence across all Neominds TechHub delivery centers.',
    background: 'Ph.D. in Computer Science with a specialization in distributed systems and applied machine learning; 14+ years designing high-throughput data platforms.',
    focus: ['Applied AI & LLM architectures', 'Cloud-native infrastructure (AWS & Azure)', 'System scalability & security', 'Technical mentoring'],
    quote: 'AI adds real business value only when the software foundation around it is rock-solid.',
  },
  {
    id: 'ananya-sharma',
    name: 'Ananya Sharma',
    role: 'Chief Operating Officer',
    image: '/images/leaders/leader_ananya.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com',
    location: 'Hyderabad, India',
    bio: 'Ananya oversees global operations, delivery governance, and operational resilience, ensuring project milestones are met with absolute predictability.',
    background: 'Former operations leader at tier-1 technology consultancy; managed cross-border engineering teams across 5 countries.',
    focus: ['Agile delivery operations', 'Resource optimization', 'Cross-time-zone synchronization', 'Quality metrics & SLA adherence'],
    quote: 'Transparency and predictability are what turn one-off projects into multi-year partnerships.',
  },
  {
    id: 'rajesh-iyer',
    name: 'Rajesh Iyer',
    role: 'Director, Global Delivery',
    image: '/images/leaders/leader_rajesh.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com',
    location: 'Hyderabad, India',
    bio: 'Rajesh directs our software delivery teams, establishing consistent sprint cadences, automated CI/CD practices, and weekly demonstration rituals.',
    background: '12+ years directing end-to-end agile delivery for healthcare, SaaS, and financial services products.',
    focus: ['Full-cycle software delivery', 'CI/CD & release engineering', 'Scrum & Kanban governance', 'Technical risk mitigation'],
    quote: 'Weekly working software demos are the ultimate truth in engineering delivery.',
  },
  {
    id: 'arjun-verma',
    name: 'Arjun Verma',
    role: 'Director, Global IT & Security',
    image: '/images/leaders/leader_arjun.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com',
    location: 'Hyderabad, India',
    bio: 'Arjun oversees information security, ISO 27001 compliance protocols, zero-trust infrastructure, and enterprise data protection standards.',
    background: 'Certified Information Systems Security Professional (CISSP) with 11+ years leading cyber defense in financial and cloud environments.',
    focus: ['ISO 27001 & SOC 2 compliance', 'Zero-trust infrastructure', 'Data protection (GDPR / HIPAA)', 'Penetration testing & code audits'],
    quote: 'Enterprise security is not a checkpoint at release; it is engineered into every line of code from day zero.',
  },
  {
    id: 'kavita-menon',
    name: 'Kavita Menon',
    role: 'Director, Human Resources',
    image: '/images/leaders/leader_kavita.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com',
    location: 'Hyderabad, India',
    bio: 'Kavita drives talent strategy, technical recruitment, and engineer development programs across Neominds TechHub.',
    background: 'Over a decade building high-retention engineering cultures for fast-growing technology companies.',
    focus: ['Engineering talent acquisition', 'Continuous learning & certification', 'Inclusive engineering culture', 'People operations'],
    quote: 'A software company is only as exceptional as the daily environment it creates for its engineers.',
  },
  {
    id: 'marcus-sterling',
    name: 'Marcus Sterling',
    role: 'Executive Client Partner',
    image: '/images/leaders/leader_marcus.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com',
    location: 'New York, USA / London, UK',
    bio: 'Marcus manages senior client relationships across North America and the United Kingdom, aligning business requirements with technical delivery teams.',
    background: '15+ years in digital consulting and software delivery partnerships between London and New York.',
    focus: ['Client relationship management', 'Scoping & commercial frameworks', 'Time-zone alignment', 'Executive governance'],
    quote: 'Our clients value that our engineers speak plainly, meet deadlines, and operate as an extension of their own internal teams.',
  },
];

interface LeadershipCarouselProps {
  onSelectLeader?: (leader: LeaderItem) => void;
  className?: string;
}

export const LeadershipCarousel: React.FC<LeadershipCarouselProps> = ({
  onSelectLeader,
  className = '',
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // Update scroll bounds & active item index
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate nearest card
    const cardWidth = 320 + 24; // card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    const clampedIndex = Math.max(0, Math.min(TOP_7_LEADERS.length - 1, index));
    setActiveIndex(clampedIndex);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => track.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Scroll to a specific index
  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 320 + 24;
    track.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  }, []);

  const handlePrev = useCallback(() => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  }, [activeIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    scrollToIndex(Math.min(TOP_7_LEADERS.length - 1, activeIndex + 1));
  }, [activeIndex, scrollToIndex]);

  // Mouse Drag to Slide support
  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollStart(trackRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    trackRef.current.scrollLeft = scrollStart - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      className={`leadership-carousel-section ${className}`}
      style={{
        backgroundColor: '#000000',
        padding: '96px 0 112px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header matching exact user screenshot */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
              fontSize: 'clamp(38px, 4.8vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            Our Leadership <span style={{ color: '#FF5500' }}>Team</span>
          </h2>
          <p
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 18.5px)',
              color: '#A1A1AA',
              maxWidth: '580px',
              margin: '0 auto',
              lineHeight: 1.55,
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            Operators and builders who’ve shipped at enterprise scale.
          </p>
        </div>

        {/* Carousel Container with Left/Right Peeking and Arrow Controls */}
        <div style={{ position: 'relative' }}>
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canScrollLeft}
            aria-label="Previous leader"
            style={{
              position: 'absolute',
              left: '-16px',
              top: '190px',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#0A0A0A',
              border: '1px solid #FF5500',
              color: canScrollLeft ? '#FF5500' : '#52525B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: canScrollLeft ? 'pointer' : 'default',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.25s ease',
              opacity: canScrollLeft ? 1 : 0.35,
              transform: 'translateY(-50%)',
            }}
            onMouseEnter={(e) => {
              if (canScrollLeft) {
                e.currentTarget.style.backgroundColor = '#FF5500';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0A0A0A';
              e.currentTarget.style.color = canScrollLeft ? '#FF5500' : '#52525B';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={!canScrollRight}
            aria-label="Next leader"
            style={{
              position: 'absolute',
              right: '-16px',
              top: '190px',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#0A0A0A',
              border: '1px solid #FF5500',
              color: canScrollRight ? '#FF5500' : '#52525B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: canScrollRight ? 'pointer' : 'default',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.25s ease',
              opacity: canScrollRight ? 1 : 0.35,
              transform: 'translateY(-50%)',
            }}
            onMouseEnter={(e) => {
              if (canScrollRight) {
                e.currentTarget.style.backgroundColor = '#FF5500';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0A0A0A';
              e.currentTarget.style.color = canScrollRight ? '#FF5500' : '#52525B';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Horizontal Slider Track */}
          <div
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              padding: '12px 12px 24px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
          >
            {TOP_7_LEADERS.map((leader) => (
              <div
                key={leader.id}
                style={{
                  flex: '0 0 320px',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Visual Card matching exact screenshot */}
                <div
                  onClick={() => onSelectLeader && onSelectLeader(leader)}
                  style={{
                    position: 'relative',
                    width: '320px',
                    height: '380px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#0A0A0A',
                    border: '1px solid #1F1F23',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.6)',
                    cursor: 'pointer',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(255, 85, 0, 0.2)';
                    e.currentTarget.style.borderColor = '#FF5500';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.6)';
                    e.currentTarget.style.borderColor = '#1F1F23';
                  }}
                >
                  {/* Portrait Person Crop */}
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      if (leader.fallbackImage && (e.target as HTMLImageElement).src !== leader.fallbackImage) {
                        (e.target as HTMLImageElement).src = leader.fallbackImage;
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      pointerEvents: 'none',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />

                  {/* LinkedIn Icon Badge matching strict 3-color system: black background, orange border, orange icon */}
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${leader.name}'s LinkedIn profile`}
                    style={{
                      position: 'absolute',
                      bottom: '18px',
                      right: '18px',
                      width: '38px',
                      height: '38px',
                      backgroundColor: '#000000',
                      border: '1.5px solid #FF5500',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease',
                      textDecoration: 'none',
                      zIndex: 5,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#FF5500';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) svg.style.fill = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#000000';
                      e.currentTarget.style.transform = 'scale(1)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) svg.style.fill = '#FF5500';
                    }}
                  >
                    {/* LinkedIn 'in' Icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FF5500"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transition: 'fill 0.2s ease' }}
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z" />
                    </svg>
                  </a>
                </div>

                {/* Profile Label Below Card */}
                <div
                  onClick={() => onSelectLeader && onSelectLeader(leader)}
                  style={{
                    paddingTop: '16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 4px',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {leader.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#FF5500',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {leader.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '36px',
          }}
        >
          {TOP_7_LEADERS.map((leader, idx) => (
            <button
              key={leader.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to ${leader.name}`}
              style={{
                height: '8px',
                width: activeIndex === idx ? '32px' : '8px',
                borderRadius: '4px',
                backgroundColor: activeIndex === idx ? '#FF5500' : '#27272A',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
