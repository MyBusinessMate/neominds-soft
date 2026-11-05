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
    id: 'ali-asgar',
    name: 'Ali Asgar',
    role: 'Founder & CEO',
    image: '/team/Ali Asgar.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Guides executive vision and engineering strategy at Neominds Tech Hub, prioritizing practical, production-grade software delivery for global enterprise clients.',
    background: 'Steered high-growth engineering initiatives delivering scalable cloud platforms and digital infrastructure for international enterprises.',
    focus: ['Enterprise client partnerships', 'Technical strategy', 'Next-generation AI integrations', 'Team scalability'],
    quote: 'Resilient software succeeds when architectural precision aligns directly with real business outcomes and durable user value.',
  },
  {
    id: 'abdul-khadar',
    name: 'Abdul Khadar',
    role: 'Co-founder',
    image: '/team/Abdul Khadar.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Co-directs operational architecture and technical capabilities, shaping foundational product methodologies and execution pipelines.',
    background: 'Spearheaded internal engineering workflows, automated test harnesses, and delivery frameworks enabling rapid client project ramp-ups.',
    focus: ['System reliability', 'Technology operations', 'Product lifecycle governance', 'Engineering culture'],
    quote: 'Rigorous engineering discipline and consistent delivery cadences compound into market-leading digital products.',
  },
  {
    id: 'syeda-sidra-fatima',
    name: 'Syeda Sidrah Fatima',
    role: 'Operations Manager',
    image: '/team/Syeda Sidrah Fatima.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Coordinates organizational resource management, delivery logistics, and cross-disciplinary communication across all active engineering pods.',
    background: 'Structured seamless multi-time-zone delivery mechanisms that reduced turnaround latency and preserved project velocity across international client accounts.',
    focus: ['Agile operations', 'Project governance', 'Stakeholder coordination', 'Quality audits & team enablement'],
    quote: 'Clear operational clarity and reliable communication form the bedrock of exceptional engineering outcomes.',
  },
  {
    id: 'mohiuddin-syed',
    name: 'Mohiuddin Syed',
    role: 'Backend Developer',
    image: '/team/Mohiuddin Syed.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Architects and builds high-throughput server-side architectures, REST and GraphQL APIs, and scalable distributed microservices.',
    background: 'Engineered critical data processing pipelines handling millions of monthly records with sub-100ms response latencies.',
    focus: ['Distributed backend systems', 'PostgreSQL & Redis', 'High-throughput APIs', 'Database optimization'],
    quote: 'A resilient backend is silent, deterministic, and effortlessly scales under peak concurrent demand.',
  },
  {
    id: 'mohammed-ayaan-ur-rahman',
    name: 'Mohammed Ayaan Ur Rahman',
    role: 'DevOps Engineer',
    image: '/team/Mohammed Ayaan Ur Rahman.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Orchestrates cloud infrastructure automation, container platforms, and resilient CI/CD deployment pipelines across enterprise environments.',
    background: 'Implemented zero-downtime deployment pipelines and multi-region staging environments that cut release cycles from days to minutes.',
    focus: ['CI/CD pipeline automation', 'Docker & Kubernetes', 'Cloud security compliance', 'Infrastructure as Code'],
    quote: 'Automate everything, verify continuously, and ensure deployments are completely friction-free.',
  },
  {
    id: 'shezan-ahmed',
    name: 'Shezan Ahmed',
    role: 'Product Developer',
    image: '/team/Shezan Ahmed.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Transforms complex product requirements and domain logic into cohesive, intuitive, and high-performance software applications.',
    background: 'Delivered foundational web applications and client platforms from technical discovery to production deployment across multiple industries.',
    focus: ['Product UX architecture', 'Full-stack engineering', 'React & TypeScript ecosystem', 'Rapid feature delivery'],
    quote: 'Great products emerge at the intersection of empathetic UX, robust code, and obsessive attention to detail.',
  },
  {
    id: 'zain-atif',
    name: 'Zain Atif',
    role: 'Frontend Developer',
    image: '/team/Zain Atif.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Specializes in crafting fast, accessible, and responsive user interfaces with pixel-perfect precision and fluid micro-interactions.',
    background: 'Engineered high-performance web interfaces achieving 95+ Core Web Vitals across diverse mobile and desktop form factors.',
    focus: ['Reactive frontend architecture', 'Responsive design systems', 'Web performance optimization', 'WCAG accessibility'],
    quote: 'Fluid interactions, immediate responsiveness, and clean typography make software feel effortless to use.',
  },
  {
    id: 'abdul-samad',
    name: 'Abdul Samad',
    role: 'Full Stack Developer',
    image: '/team/Abdul Samad.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Builds end-to-end full-stack web platforms, bridging database models, server business logic, and modern interactive frontends.',
    background: 'Developed complete end-to-end applications integrating third-party payment gateways, real-time messaging, and interactive dashboards.',
    focus: ['Full-stack application architecture', 'API development', 'Database modeling', 'Third-party integrations'],
    quote: 'Full-stack harmony is achieved when data models and frontend components speak the exact same language.',
  },
  {
    id: 'ahmed-ba-suleman',
    name: 'Ahmed Ba Suleman',
    role: 'AI Automations Specialist',
    image: '/team/Ahmed Ba Suleman.webp',
    linkedin: 'https://www.linkedin.com/company/neomindstechhub/',
    location: 'Hyderabad, India',
    bio: 'Designs and builds autonomous AI agentic workflows, multi-tool LLM integrations, and enterprise process automations.',
    background: 'Built production AI automation pipelines that eliminate manual repetitive tasks, reducing document processing times from hours to seconds.',
    focus: ['Autonomous AI agents', 'RAG pipeline orchestration', 'Workflow automations', 'Intelligent document pipelines'],
    quote: 'True AI transformation isn\'t about novelty; it\'s about eliminating friction and giving humans superpowers.',
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
        backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
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
              color: '#000000',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            Our Leadership <span style={{ color: '#fe6200' }}>Team</span>
          </h2>
          <p
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 18.5px)',
              color: '#2b2b2b',
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
              borderRadius: '8px',
              backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
              border: '1px solid #fe6200',
              color: canScrollLeft ? '#fe6200' : '#52525B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: canScrollLeft ? 'pointer' : 'default',
              boxShadow: '0 4px 16px rgba(32, 11, 0,  0.4)',
              transition: 'all 0.25s ease',
              opacity: canScrollLeft ? 1 : 0.35,
              transform: 'translateY(-50%)',
            }}
            onMouseEnter={(e) => {
              if (canScrollLeft) {
                e.currentTarget.style.backgroundColor = '#fe6200';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--colors-surface-dark-subtle, #f0ece2)';
              e.currentTarget.style.color = canScrollLeft ? '#fe6200' : '#52525B';
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
              borderRadius: '8px',
              backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
              border: '1px solid #fe6200',
              color: canScrollRight ? '#fe6200' : '#52525B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: canScrollRight ? 'pointer' : 'default',
              boxShadow: '0 4px 16px rgba(32, 11, 0,  0.4)',
              transition: 'all 0.25s ease',
              opacity: canScrollRight ? 1 : 0.35,
              transform: 'translateY(-50%)',
            }}
            onMouseEnter={(e) => {
              if (canScrollRight) {
                e.currentTarget.style.backgroundColor = '#fe6200';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--colors-surface-dark-subtle, #f0ece2)';
              e.currentTarget.style.color = canScrollRight ? '#fe6200' : '#52525B';
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
                  className="nm-team-portrait-container"
                  style={{
                    position: 'relative',
                    width: '320px',
                    height: '380px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#f1efeb',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                    cursor: 'pointer',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(254, 98, 0, 0.2)';
                    e.currentTarget.style.borderColor = '#fe6200';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                  }}
                >
                  {/* 5-Second Morphing Background Glow */}
                  <div className="nm-team-glow-cream" />
                  <div className="nm-team-glow-orange" />

                  {/* Portrait Person Crop */}
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: 'relative',
                      zIndex: 3,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'bottom center',
                      pointerEvents: 'none',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />

                  {/* LinkedIn Icon Badge matching strict 3-color system */}
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
                      backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
                      border: '1.5px solid #fe6200',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(32, 11, 0, 0.4)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease',
                      textDecoration: 'none',
                      zIndex: 5,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#fe6200';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) svg.style.fill = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--colors-surface-dark-subtle, #f0ece2)';
                      e.currentTarget.style.transform = 'scale(1)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) svg.style.fill = '#fe6200';
                    }}
                  >
                    {/* LinkedIn 'in' Icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#fe6200"
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
                      color: '#000000',
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
                      color: '#fe6200',
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
                borderRadius: '8px',
                backgroundColor: activeIndex === idx ? '#fe6200' : '#d4d4d8',
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
