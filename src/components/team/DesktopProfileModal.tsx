import React, { useEffect, useRef } from 'react';
import { X, Linkedin, Twitter, Instagram, Globe, User } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface DesktopProfileModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const DesktopProfileModal: React.FC<DesktopProfileModalProps> = ({ member, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = React.useState(false);

  // Reset img error state when member changes
  useEffect(() => {
    setImgError(false);
  }, [member?.id]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!member) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  const { socials, bioPoints } = member;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="desktop-profile-name"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1500,
        backgroundColor: 'rgba(15, 12, 10, 0.45)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end', // Anchors towards the right as shown in reference
        padding: 'clamp(20px, 3.5vw, 48px)',
        animation: 'fadeIn 0.25s ease-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        style={{
          position: 'relative',
          width: 'min(94vw, 920px)',
          maxHeight: '90vh',
          height: 'min(820px, 88vh)',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          border: '1px solid #e4e2e1',
          boxShadow: '0 32px 80px -20px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 45%) 1fr',
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column: Full-Height Edge-to-Edge Portrait */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            backgroundColor: '#eae6df',
            overflow: 'hidden',
          }}
        >
          {member.image && !imgError ? (
            <img
              src={member.image}
              alt={member.name}
              onError={() => setImgError(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
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
                padding: '24px',
              }}
            >
              <div
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <User size={54} color="#fe6200" />
              </div>
              <span style={{ fontSize: '24px', fontWeight: 700, color: '#000000' }}>
                {member.name}
              </span>
            </div>
          )}
        </div>

        {/* Right Column: Profile Information & 7-Point Scrollable Biography */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}
        >
          {/* Header Area (Fixed at top of column) */}
          <div
            style={{
              padding: 'clamp(24px, 3vw, 36px) clamp(24px, 3vw, 36px) 16px',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            {/* Close Button (X) */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile modal"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
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
                transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e4e2e1';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f1efeb';
                e.currentTarget.style.color = '#66615c';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={18} strokeWidth={2.2} />
            </button>

            {/* Member Name */}
            <h2
              id="desktop-profile-name"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(26px, 2.6vw, 36px)',
                fontWeight: 700,
                color: '#000000',
                margin: '0 0 6px 0',
                lineHeight: 1.15,
                paddingRight: '48px',
              }}
            >
              {member.name}
            </h2>

            {/* Member Role */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '16px',
                color: '#66615c',
                fontWeight: 500,
                margin: '0 0 16px 0',
              }}
            >
              {member.role}
            </p>

            {/* Social Icons Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              {socials?.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    border: '1.5px solid #ffdec7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fe6200',
                    backgroundColor: '#fffaf5',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.backgroundColor = '#ffe9d9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#ffdec7';
                    e.currentTarget.style.backgroundColor = '#fffaf5';
                  }}
                >
                  <Linkedin size={16} />
                </a>
              )}
              {socials?.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on X`}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    border: '1.5px solid #ffdec7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fe6200',
                    backgroundColor: '#fffaf5',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.backgroundColor = '#ffe9d9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#ffdec7';
                    e.currentTarget.style.backgroundColor = '#fffaf5';
                  }}
                >
                  <Twitter size={16} />
                </a>
              )}
              {socials?.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Instagram`}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    border: '1.5px solid #ffdec7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fe6200',
                    backgroundColor: '#fffaf5',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.backgroundColor = '#ffe9d9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#ffdec7';
                    e.currentTarget.style.backgroundColor = '#fffaf5';
                  }}
                >
                  <Instagram size={16} />
                </a>
              )}
              {socials?.website && (
                <a
                  href={socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Website`}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    border: '1.5px solid #ffdec7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fe6200',
                    backgroundColor: '#fffaf5',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.backgroundColor = '#ffe9d9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#ffdec7';
                    e.currentTarget.style.backgroundColor = '#fffaf5';
                  }}
                >
                  <Globe size={16} />
                </a>
              )}
            </div>

            {/* Subtle Divider */}
            <div
              style={{
                height: '1px',
                backgroundColor: '#f1efeb',
                marginTop: '18px',
              }}
            />
          </div>

          {/* Scrollable 7-Point Biography List */}
          <div
            style={{
              padding: '4px clamp(24px, 3vw, 36px) 32px',
              overflowY: 'auto',
              flex: 1,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {bioPoints.map((point) => (
                <div
                  key={point.number}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}
                >
                  {/* Number Badge (1 to 7) */}
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(254, 98, 0, 0.12)',
                      color: '#fe6200',
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {point.number}
                  </div>

                  {/* Heading & Supporting Text */}
                  <div style={{ flex: 1 }}>
                    <h5
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#000000',
                        margin: '0 0 4px 0',
                        lineHeight: 1.3,
                      }}
                    >
                      {point.heading}
                    </h5>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#66615c',
                        margin: 0,
                        lineHeight: 1.55,
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
    </div>
  );
};

