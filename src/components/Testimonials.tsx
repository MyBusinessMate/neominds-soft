import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { RevealElement } from './scroll-reveal';

interface TestimonialItem {
  id: string;
  logoUrl?: string;
  clientName: string;
  quote: string;
  author: string;
  title: string;
  photoUrl?: string;
  hasBlueDot?: boolean;
}

export const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

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
      hasBlueDot: true,
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
      hasBlueDot: true,
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
      hasBlueDot: true,
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
    {
      id: '7',
      clientName: 'City Index',
      logoUrl: '/uploads/ESThumbnails/3281/280.Testimonials_CityIndex_color_50x125.png',
      quote:
        'Since our first engagement, I have been impressed not only by the quality of work that Neominds has done for City Index but also their attention to detail and reliability on delivery dates.',
      author: 'Arthur Grimley',
      title: 'CIO UK, CityIndex Group',
      photoUrl: '/uploads/ESThumbnails/2095/200.arthur.png',
      hasBlueDot: true,
    },
    {
      id: '8',
      clientName: 'Axure',
      logoUrl: '/uploads/ESThumbnails/3277/280.Testimonials_Axure_color_50x125.png',
      quote:
        'The team at Neominds is very skilled and has been a pleasure to work with. They have enabled us to adopt new technologies as they add their diverse skillset to our team. I would not hesitate to recommend Neominds to anyone looking for a great partner.',
      author: 'Martin Smith',
      title: 'CTO USA, Axure Software Solutions, Inc.',
      photoUrl: '/uploads/ESThumbnails/1331/200.Martin-Smith-CTO@Axure.jpg',
    },
    {
      id: '9',
      clientName: 'Canopy',
      logoUrl: '/uploads/2010/04/canopy-color.svg',
      quote:
        'Neominds has been providing services to Canopy for the last four years. Their skilled engineers understand our product needs, deliver quality platform increments following agile principles, respond flexibly to changes, and meet evolving deadlines.',
      author: 'Matt Hobbs',
      title: 'Chief Product Officer',
      hasBlueDot: true,
    },

  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(70px, 8vw, 110px)',
        paddingBottom: 'clamp(70px, 8vw, 110px)',
        borderTop: '1px solid #e4e4e7',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(28px, 4vw, 44px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#475067', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              TESTIMONIALS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#121212',
                letterSpacing: '-0.025em',
                margin: '8px 0 0 0',
              }}
            >
              Our clients say it best
            </h2>
          </div>

          {/* Quick Page Info */}
          <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
            Showing {currentPage * itemsPerPage + 1}–{Math.min((currentPage + 1) * itemsPerPage, testimonials.length)} of {testimonials.length} reviews
          </div>
        </div>

        {/* 3-Column Testimonial Layout with Smooth Fade-in */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(20px, 2.5vw, 32px)',
            marginBottom: 'clamp(36px, 4vw, 56px)',
          }}
        >
          {currentTestimonials.map((item) => (
            <RevealElement key={item.id} variant="card">
              <div
                style={{
                  backgroundColor: '#f5f7fc',
                  border: '1px solid #d0d3dd',
                  borderRadius: '0px',
                  boxShadow: 'none',
                  padding: 'clamp(24px, 3vw, 36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '380px',
                  position: 'relative',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#2258e7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#d0d3dd';
                }}
              >
                <div>
                  {/* Top Logo / Client Header */}
                  <div
                    style={{
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    {item.logoUrl ? (
                      <img
                        src={item.logoUrl}
                        alt={item.clientName}
                        style={{ maxHeight: '36px', maxWidth: '140px', objectFit: 'contain' }}
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: '15px', fontWeight: 800, color: '#121212' }}>
                        {item.clientName}
                      </span>
                    )}

                    {item.hasBlueDot && (
                      <span className="blue-dot" style={{ width: '8px', height: '8px', flexShrink: 0 }} />
                    )}
                  </div>

                  {/* Testimonial Quote */}
                  <p
                    style={{
                      fontSize: 'clamp(14px, 1.1vw, 15px)',
                      lineHeight: 1.65,
                      color: '#475067',
                      margin: 0,
                    }}
                  >
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info & Photo Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    paddingTop: '20px',
                    marginTop: '20px',
                    borderTop: '1px solid #e4e4e7',
                  }}
                >
                  {item.photoUrl ? (
                    <img
                      src={item.photoUrl}
                      alt={item.author}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '0px',
                        objectFit: 'cover',
                        border: '1px solid #d0d3dd',
                        boxShadow: 'none',
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '0px',
                        backgroundColor: '#e9eefd',
                        color: '#2258e7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '15px',
                        flexShrink: 0,
                      }}
                    >
                      {item.author.charAt(0)}
                    </div>
                  )}

                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#121212' }}>
                      {item.author}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666e85', marginTop: '2px' }}>
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            </RevealElement>
          ))}
        </div>

        {/* Carousel Navigation Bar matching EffectiveSoft progress */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid #e4e4e7',
          }}
        >
          {/* Progress bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, maxWidth: '280px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#121212' }}>
              0{currentPage + 1}
            </span>
            <div
              style={{
                flex: 1,
                height: '3px',
                backgroundColor: '#e4e4e7',
                borderRadius: '0px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${((currentPage + 1) / totalPages) * 100}%`,
                  backgroundColor: '#2258e7',
                  transition: 'width 0.4s ease',
                }}
              />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#989fb3' }}>
              0{totalPages}
            </span>
          </div>

          {/* Controls: Prev / Next */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handlePrev}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '0px',
                border: '1px solid #d0d3dd',
                backgroundColor: '#ffffff',
                color: '#121212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'none',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2258e7';
                e.currentTarget.style.backgroundColor = '#f5f7fc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#d0d3dd';
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
              aria-label="Previous testimonials"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={handleNext}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '0px',
                border: '1px solid #d0d3dd',
                backgroundColor: '#ffffff',
                color: '#121212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'none',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2258e7';
                e.currentTarget.style.backgroundColor = '#f5f7fc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#d0d3dd';
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
              aria-label="Next testimonials"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
