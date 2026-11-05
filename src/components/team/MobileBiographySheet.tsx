import React, { useEffect, useRef } from 'react';
import { X, Linkedin, Twitter, Instagram, Globe, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamMember } from '../../data/teamData';
import { getLenis } from '../../hooks/useLenis';

interface MobileBiographySheetProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const MobileBiographySheet: React.FC<MobileBiographySheetProps> = ({
  member,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const [imgError, setImgError] = React.useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setImgError(false);
  }, [member?.id]);

  useEffect(() => {
    if (!isOpen) return;

    const lenis = getLenis();
    lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!member || !isOpen) return null;

  const { socials, bioPoints } = member;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} biography`}
      data-lenis-prevent="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2100,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease-out',
        overscrollBehavior: 'contain',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Sliding Sheet Panel */}
      <div
        ref={sheetRef}
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxHeight: '88vh',
          backgroundColor: '#ffffff',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 -15px 45px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          overscrollBehavior: 'contain',
          animation: 'slideUp 0.32s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sheet Header Area */}
        <div
          style={{
            padding: '12px 20px 16px',
            borderBottom: '1px solid #f1efeb',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          {/* Drag Handle */}
          <div
            aria-hidden="true"
            style={{
              width: '40px',
              height: '4px',
              backgroundColor: '#dcd9d4',
              borderRadius: '8px',
              margin: '0 auto 14px',
            }}
          />

          {/* Top Controls: Simple small orange arrows + close button */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {onPrev && (
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous team member"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px',
                  cursor: 'pointer',
                  color: '#fe6200',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={20} strokeWidth={2.4} />
              </button>
            )}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                aria-label="Next team member"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px',
                  cursor: 'pointer',
                  color: '#fe6200',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={20} strokeWidth={2.4} />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Back to profile preview"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#f1efeb',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#66615c',
              }}
            >
              <X size={18} strokeWidth={2.4} />
            </button>
          </div>

          {/* Header Identity Row: Thumbnail + Titles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingRight: '44px' }}>
            {/* Square Avatar Thumbnail */}
            <div
              className="nm-team-portrait-container"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#eae6df',
                border: '1px solid #e4e2e1',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="nm-team-glow-cream" />
              <div className="nm-team-glow-orange" />
              {member.image && !imgError ? (
                <img
                  src={member.image}
                  alt={member.name}
                  onError={() => setImgError(true)}
                  style={{
                    position: 'relative',
                    zIndex: 3,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                  }}
                />
              ) : (
                <User size={26} color="#fe6200" />
              )}
            </div>

            {/* Names & Roles */}
            <div style={{ overflow: 'hidden' }}>
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#000000',
                  margin: '0 0 2px 0',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#66615c',
                  margin: 0,
                }}
              >
                {member.role}
              </p>
            </div>
          </div>

          {/* Social Icons Row if available */}
          {socials && Object.values(socials).some(Boolean) && (
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    border: '1px solid #ffdec7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fe6200',
                    backgroundColor: '#fffaf5',
                  }}
                >
                  <Linkedin size={15} />
                </a>
              )}
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Twitter`}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    border: '1px solid #ffdec7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fe6200',
                    backgroundColor: '#fffaf5',
                  }}
                >
                  <Twitter size={15} />
                </a>
              )}
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Instagram`}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    border: '1px solid #ffdec7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fe6200',
                    backgroundColor: '#fffaf5',
                  }}
                >
                  <Instagram size={15} />
                </a>
              )}
              {socials.website && (
                <a
                  href={socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Website`}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    border: '1px solid #ffdec7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fe6200',
                    backgroundColor: '#fffaf5',
                  }}
                >
                  <Globe size={15} />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Scrollable 7-Point Biography List */}
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          style={{
            padding: '18px 20px max(28px, env(safe-area-inset-bottom, 28px))',
            overflowY: 'auto',
            flex: 1,
            overscrollBehavior: 'contain',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {bioPoints.map((point) => (
              <div key={point.number} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                {/* Number Badge (1 to 7) */}
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(254, 98, 0, 0.12)',
                    color: '#fe6200',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  {point.number}
                </div>

                {/* Point Heading & Description */}
                <div style={{ flex: 1 }}>
                  <h5
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#000000',
                      margin: '0 0 3px 0',
                      lineHeight: 1.3,
                    }}
                  >
                    {point.heading}
                  </h5>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13.5px',
                      fontWeight: 400,
                      color: '#66615c',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

