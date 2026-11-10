import React, { useState } from 'react';
import { User } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface TeamCompactItemProps {
  member: TeamMember;
  onClick?: () => void;
}

export const TeamCompactItem: React.FC<TeamCompactItemProps> = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="team-member-card"
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
      {/* 1. Square Portrait Image Container with uniform #F0ECE2 background */}
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
        {/* Layer on bg below pic: gradient flowing from top (transparent) to down (white) */}
        <div
          aria-hidden="true"
          className="team-portrait-gradient-layer"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 30%, #ffffff 100%)',
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
            <User size={48} strokeWidth={1.5} color="#fe6200" />
          </div>
        )}
      </div>

      {/* 2. Team Member Name (Bold black typography, ~21px, font weight 700) */}
      <h3
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '21px',
          fontWeight: 700,
          color: '#000000',
          margin: '18px 0 6px 0',
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
        }}
      >
        {member.name}
      </h3>

      {/* 3. Team Member Designation (Muted grey typography, ~17px, font weight 400) */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '17px',
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
