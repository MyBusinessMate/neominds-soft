import React from 'react';
import { ArrowRight, User } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface FeaturedTeamCardProps {
  member: TeamMember;
  isActive?: boolean;
  onClick: () => void;
}

export const FeaturedTeamCard: React.FC<FeaturedTeamCardProps> = ({ member, isActive = false, onClick }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View profile for ${member.name}, ${member.role}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="nm-corner-glow nm-team-portrait-container"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '400px',
        height: 'clamp(400px, 46vw, 470px)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: isActive ? '1.5px solid #fe6200' : '1px solid rgba(0, 0, 0, 0.08)',
        backgroundColor: '#f1efeb',
        cursor: 'pointer',
        transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease',
        boxShadow: isActive
          ? '0 18px 40px -12px rgba(254, 98, 0, 0.22), 0 4px 12px rgba(0, 0, 0, 0.04)'
          : '0 10px 30px -12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = '#fe6200';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = isActive ? '#fe6200' : 'rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* 5-Second Morphing Background Glow */}
      <div className="nm-team-glow-cream" />
      <div className="nm-team-glow-orange" />

      {/* Portrait Image with Initials Fallback */}
      {member.image && !imgError ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          onError={() => setImgError(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            zIndex: 3,
            transition: 'transform 0.5s ease',
          }}
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
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
              width: '90px',
              height: '90px',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
            }}
          >
            <User size={44} color="#fe6200" />
          </div>
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#000000' }}>
            {member.name.split(' ').map((n) => n[0]).join('')}
          </span>
        </div>
      )}

      {/* 
        Smooth Gradient Overlay:
        Dark fade at bottom ensures name & role are crystal clear.
      */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          background: isActive
            ? 'linear-gradient(to top, rgba(14, 12, 10, 0.95) 0%, rgba(14, 12, 10, 0.65) 28%, rgba(254, 98, 0, 0.15) 55%, transparent 72%)'
            : 'linear-gradient(to top, rgba(14, 12, 10, 0.92) 0%, rgba(14, 12, 10, 0.62) 30%, rgba(14, 12, 10, 0.12) 55%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      {/* Card Content Footer: Name, Role & Circular Arrow Button */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px 20px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        <div style={{ flex: 1, paddingRight: '12px' }}>
          <h3
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(20px, 2vw, 24px)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 6px 0',
              lineHeight: 1.2,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.85)',
            }}
          >
            {member.name}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14.5px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.95)',
              margin: 0,
              lineHeight: 1.3,
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.85)',
            }}
          >
            {member.role}
          </p>
        </div>

        {/* Circular Arrow Badge */}
        <div
          aria-hidden="true"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color: isActive ? '#fe6200' : '#ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
        >
          <ArrowRight size={17} strokeWidth={2.4} />
        </div>
      </div>
    </div>
  );
};

