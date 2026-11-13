import React, { useState } from 'react';
import { User } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface TeamCompactItemProps {
  member: TeamMember;
  isLarge?: boolean;
  onClick?: () => void;
}

export const TeamCompactItem: React.FC<TeamCompactItemProps> = ({ member, isLarge = false }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`team-member-card ${isLarge ? 'team-member-card--large' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        cursor: 'default',
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        userSelect: 'none',
      }}
    >
      {/* 1. Square Portrait Image Container with uniform #F0ECE2 background matching reference */}
      <div
        className="team-portrait"
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          borderRadius: '0px',
          overflow: 'hidden',
          background: '#F0ECE2',
          backgroundColor: '#F0ECE2',
          border: 'none',
          boxShadow: 'none',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {/* Soft bottom gradient layer subtly blending portrait silhouette into card background */}
        <div
          aria-hidden="true"
          className="team-portrait-gradient-layer"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 35%, rgba(255, 255, 255, 0.7) 85%, #ffffff 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {member.image && !imgError ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="team-portrait-img"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af',
            }}
          >
            <User size={isLarge ? 56 : 44} strokeWidth={1.5} color="#fe6200" />
          </div>
        )}
      </div>

      {/* 2. Team Member Name (Bold black DM Sans typography) */}
      <h3
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: isLarge ? 'clamp(20px, 1.7vw, 24px)' : 'clamp(17px, 1.35vw, 19px)',
          fontWeight: 700,
          color: '#000000',
          margin: isLarge ? '18px 0 5px 0' : '14px 0 4px 0',
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
        }}
      >
        {member.name}
      </h3>

      {/* 3. Team Member Designation (Muted grey DM Sans typography) */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: isLarge ? 'clamp(15px, 1.2vw, 17px)' : 'clamp(13.5px, 1.05vw, 15px)',
          fontWeight: 400,
          color: '#66615c',
          margin: 0,
          lineHeight: 1.35,
        }}
      >
        {member.role}
      </p>
    </div>
  );
};
