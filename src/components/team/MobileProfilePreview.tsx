import React, { useEffect } from 'react';
import { X, ArrowRight, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface MobileProfilePreviewProps {
  member: TeamMember | null;
  onClose: () => void;
  onOpenBioSheet: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const MobileProfilePreview: React.FC<MobileProfilePreviewProps> = ({
  member,
  onClose,
  onOpenBioSheet,
  onPrev,
  onNext,
}) => {
  const [imgError, setImgError] = React.useState(false);

  useEffect(() => {
    setImgError(false);
  }, [member?.id]);

  useEffect(() => {
    if (!member) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} preview`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        animation: 'fadeIn 0.24s ease-out',
        overflow: 'hidden',
      }}
    >
      {/* Mobile Team Navigation Arrows: simple, small, orange */}
      <div
        style={{
          position: 'absolute',
          top: 'max(16px, env(safe-area-inset-top, 16px))',
          left: '16px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
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
      </div>

      {/* Floating Circular Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        style={{
          position: 'absolute',
          top: 'max(16px, env(safe-area-inset-top, 16px))',
          right: '16px',
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: 'none',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1a1a1a',
          boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
        }}
      >
        <X size={20} strokeWidth={2.4} />
      </button>

      {/* Full-Height Edge-to-Edge Portrait Area with 5s Morphing Glow */}
      <div
        className="nm-team-portrait-container"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundColor: '#eae6df',
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
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#eae6df',
              color: '#4b5563',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
              }}
            >
              <User size={60} color="#fe6200" />
            </div>
            <span style={{ fontSize: '26px', fontWeight: 700, color: '#000000' }}>
              {member.name}
            </span>
          </div>
        )}

        {/* Bottom vignette overlay to smoothly transition into the panel */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 35%, transparent 65%)',
          }}
        />
      </div>

      {/* Bottom Profile Panel (Stage 1 Card) */}
      <div
        style={{
          position: 'relative',
          marginTop: 'auto',
          zIndex: 5,
          width: '100%',
          backgroundColor: '#ffffff',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          padding: '16px 20px max(24px, env(safe-area-inset-bottom, 24px))',
          boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        {/* Drag handle pill */}
        <div
          aria-hidden="true"
          style={{
            width: '38px',
            height: '4px',
            backgroundColor: '#dcd9d4',
            borderRadius: '8px',
            margin: '0 auto 16px',
          }}
        />

        {/* Member Name */}
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '24px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 4px 0',
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </h3>

        {/* Member Role */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 500,
            color: '#66615c',
            margin: '0 0 20px 0',
          }}
        >
          {member.role}
        </p>

        {/* CTA: Read about [Full Name] */}
        <button
          type="button"
          onClick={onOpenBioSheet}
          style={{
            width: '100%',
            padding: '16px 22px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #fe6200 0%, #ff7a1a 100%)',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(254, 98, 0, 0.35)',
            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <span>Read about {member.name}</span>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowRight size={17} strokeWidth={2.4} />
          </div>
        </button>
      </div>
    </div>
  );
};

