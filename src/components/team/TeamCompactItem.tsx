import React from 'react';
import { User } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface TeamCompactItemProps {
  member: TeamMember;
  onClick: () => void;
}

export const TeamCompactItem: React.FC<TeamCompactItemProps> = ({ member, onClick }) => {
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
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        padding: '12px 8px',
        borderRadius: '8px',
        transition: 'transform 0.22s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        const avatar = e.currentTarget.querySelector('.compact-avatar') as HTMLElement;
        if (avatar) avatar.style.borderColor = '#fe6200';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        const avatar = e.currentTarget.querySelector('.compact-avatar') as HTMLElement;
        if (avatar) avatar.style.borderColor = '#e4e2e1';
      }}
    >
      {/* Circular Avatar */}
      <div
        className="compact-avatar nm-team-portrait-container"
        style={{
          width: 'clamp(68px, 6vw, 76px)',
          height: 'clamp(68px, 6vw, 76px)',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#eae6df',
          border: '1.5px solid #e4e2e1',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          flexShrink: 0,
        }}
      >
        <div className="nm-team-glow-cream" />
        <div className="nm-team-glow-orange" />
        {member.image && !imgError ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{
              position: 'relative',
              zIndex: 3,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              borderRadius: '50%',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4b5563',
            }}
          >
            <User size={26} color="#fe6200" />
          </div>
        )}
      </div>

      {/* Member Name */}
      <h4
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          fontWeight: 700,
          color: '#000000',
          margin: '0 0 3px 0',
          lineHeight: 1.25,
        }}
      >
        {member.name}
      </h4>

      {/* Member Role */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          fontWeight: 400,
          color: '#4b5563',
          margin: 0,
          lineHeight: 1.3,
          maxWidth: '180px',
        }}
      >
        {member.role}
      </p>
    </div>
  );
};

