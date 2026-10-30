import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../../data/teamData';
import { FeaturedTeamCard } from './FeaturedTeamCard';
import { TeamCompactItem } from './TeamCompactItem';
import { DesktopProfileModal } from './DesktopProfileModal';
import { MobileProfilePreview } from './MobileProfilePreview';
import { MobileBiographySheet } from './MobileBiographySheet';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isBioSheetOpen, setIsBioSheetOpen] = useState(false);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Derive members dynamically from team data configuration
  const featuredMembers = TEAM_MEMBERS.filter((m) => m.featured).sort((a, b) => a.order - b.order);
  const remainingMembers = TEAM_MEMBERS.filter((m) => !m.featured).sort((a, b) => a.order - b.order);

  // Responsive breakpoint detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 860);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide main navbar whenever a team profile is open
  useEffect(() => {
    if (selectedMember) {
      document.body.classList.add('nm-team-profile-open');
    } else {
      document.body.classList.remove('nm-team-profile-open');
    }
    return () => {
      document.body.classList.remove('nm-team-profile-open');
    };
  }, [selectedMember]);

  // Carousel navigation
  const handlePrev = () => {
    const nextIdx = (activeCarouselIndex - 1 + featuredMembers.length) % featuredMembers.length;
    setActiveCarouselIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeCarouselIndex + 1) % featuredMembers.length;
    setActiveCarouselIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const scrollToCard = (index: number) => {
    if (!carouselTrackRef.current) return;
    const cardEl = carouselTrackRef.current.children[index] as HTMLElement;
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  // Open profile (Desktop opens modal directly; Mobile opens Stage 1 preview)
  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsBioSheetOpen(false);
  };

  const handleCloseAll = () => {
    setSelectedMember(null);
    setIsBioSheetOpen(false);
  };

  // Mobile member navigation arrows
  const handlePrevMember = () => {
    if (!selectedMember) return;
    const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedMember.id);
    const prevIndex = (currentIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length;
    setSelectedMember(TEAM_MEMBERS[prevIndex]);
  };

  const handleNextMember = () => {
    if (!selectedMember) return;
    const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedMember.id);
    const nextIndex = (currentIndex + 1) % TEAM_MEMBERS.length;
    setSelectedMember(TEAM_MEMBERS[nextIndex]);
  };

  // Manage body class to hide header when profile is open
  useEffect(() => {
    if (selectedMember) {
      document.body.classList.add('nm-profile-open');
    } else {
      document.body.classList.remove('nm-profile-open');
    }
    return () => {
      document.body.classList.remove('nm-profile-open');
    };
  }, [selectedMember]);

  return (
    <section
      id="team"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#fbf9f5',
        padding: 'clamp(64px, 8vw, 110px) 0 clamp(64px, 8vw, 100px)',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 36px)',
        }}
      >
        {/* ========================================================
            1. SECTION INTRODUCTION
            ======================================================== */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            justifyContent: 'space-between',
            gap: isMobile ? '16px' : '36px',
            marginBottom: 'clamp(32px, 5vw, 48px)',
          }}
        >
          {/* Left: Section Label & Prominent Heading */}
          <div>
            {/* Small uppercase label with brand orange accent line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#fe6200',
                }}
              >
                OUR TEAM
              </span>
              <div
                aria-hidden="true"
                style={{
                  width: '36px',
                  height: '2px',
                  backgroundColor: '#fe6200',
                  borderRadius: '8px',
                }}
              />
            </div>

            {/* Heading: People behind the progress */}
            <h2
              style={{
                fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                fontSize: 'clamp(32px, 4.4vw, 56px)',
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              People behind <br />
              the <span style={{ color: '#fe6200' }}>progress</span>
            </h2>
          </div>

          {/* Right: Supporting Statement & Mobile Carousel Arrows */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              justifyContent: 'space-between',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : '380px',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                color: '#66615c',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              A small and focused team working on ideas, execution and growth every day.
            </p>

            {/* Mobile-only carousel arrow controls at top right */}
            {isMobile && (
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0, marginLeft: '12px' }}>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous team member"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e4e2e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#000000',
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next team member"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#fe6200',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#ffffff',
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            2. FEATURED TEAM CAROUSEL (Top 3 Members)
            ======================================================== */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Desktop Left/Right Side Arrow Controls */}
          {!isMobile && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous featured team member"
                style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e4e2e1',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: '#000000',
                  transition: 'background-color 0.2s, transform 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1efeb';
                  e.currentTarget.style.borderColor = '#fe6200';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.borderColor = '#e4e2e1';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next featured team member"
                style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e4e2e1',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: '#000000',
                  transition: 'background-color 0.2s, transform 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1efeb';
                  e.currentTarget.style.borderColor = '#fe6200';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.borderColor = '#e4e2e1';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Cards Track: Desktop 3 side-by-side; Mobile swipeable track */}
          <div
            ref={carouselTrackRef}
            style={{
              display: isMobile ? 'flex' : 'grid',
              gridTemplateColumns: isMobile ? undefined : 'repeat(3, 1fr)',
              gap: 'clamp(16px, 2.5vw, 28px)',
              overflowX: isMobile ? 'auto' : 'visible',
              scrollSnapType: isMobile ? 'x mandatory' : undefined,
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: isMobile ? '8px' : '0px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {featuredMembers.map((member, idx) => (
              <div
                key={member.id}
                style={{
                  flex: isMobile ? '0 0 78vw' : undefined,
                  maxWidth: isMobile ? '340px' : undefined,
                  scrollSnapAlign: isMobile ? 'center' : undefined,
                }}
              >
                <FeaturedTeamCard
                  member={member}
                  isActive={idx === activeCarouselIndex}
                  onClick={() => {
                    setActiveCarouselIndex(idx);
                    handleMemberClick(member);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Carousel Position Indicator Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '22px',
            }}
          >
            {featuredMembers.map((member, idx) => {
              const isActive = idx === activeCarouselIndex;
              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => {
                    setActiveCarouselIndex(idx);
                    scrollToCard(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    height: '4px',
                    width: isActive ? '36px' : '16px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? '#fe6200' : '#e4e2e1',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'width 0.28s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.28s ease',
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            backgroundColor: '#e4e2e1',
            margin: 'clamp(36px, 5vw, 54px) 0 clamp(28px, 4vw, 42px)',
          }}
        />

        {/* ========================================================
            3. COMPACT TEAM DIRECTORY (Remaining 5 Members)
            ======================================================== */}
        <div>
          {/* Mobile subheader: "Our Team" with orange underline (from mobile reference) */}
          {isMobile && (
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#000000',
                  margin: '0 0 6px 0',
                }}
              >
                Our Team
              </h3>
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: '#fe6200',
                  borderRadius: '8px',
                }}
              />
            </div>
          )}

          {/* Compact Member Grid: 4 items in row 1 on desktop, wrapping gracefully */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? 'repeat(auto-fit, minmax(130px, 1fr))'
                : 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'clamp(16px, 3vw, 32px)',
              justifyItems: 'center',
              alignItems: 'start',
            }}
          >
            {remainingMembers.map((member) => (
              <TeamCompactItem
                key={member.id}
                member={member}
                onClick={() => handleMemberClick(member)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          4. DESKTOP PROFILE DIALOG (Screen widths >= 860px)
          ======================================================== */}
      {!isMobile && (
        <DesktopProfileModal
          member={selectedMember}
          onClose={handleCloseAll}
        />
      )}

      {/* ========================================================
          5. MOBILE TWO-STAGE PROFILE EXPERIENCE (Screen widths < 860px)
          - Stage 1: Profile Preview (Full screen portrait + bottom CTA)
          - Stage 2: Sliding Biography Bottom Sheet (pulls up over Stage 1)
          ======================================================== */}
      {isMobile && selectedMember && (
        <>
          {/* Stage 1: Mobile Profile Preview */}
          <MobileProfilePreview
            member={selectedMember}
            onClose={handleCloseAll}
            onOpenBioSheet={() => setIsBioSheetOpen(true)}
            onPrev={handlePrevMember}
            onNext={handleNextMember}
          />

          {/* Stage 2: Full Biography Bottom Sheet */}
          <MobileBiographySheet
            member={selectedMember}
            isOpen={isBioSheetOpen}
            onClose={() => setIsBioSheetOpen(false)}
            onPrev={handlePrevMember}
            onNext={handleNextMember}
          />
        </>
      )}
    </section>
  );
};

