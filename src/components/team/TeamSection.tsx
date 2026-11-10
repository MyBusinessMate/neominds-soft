import React from 'react';
import { TEAM_MEMBERS } from '../../data/teamData';
import { TeamCompactItem } from './TeamCompactItem';

export const TeamSection: React.FC = () => {
  // Sort all 9 team members by defined order to display them consistently
  const sortedMembers = [...TEAM_MEMBERS].sort((a, b) => a.order - b.order);

  return (
    <section
      id="team"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#f0ece2',
        padding: 'clamp(64px, 8vw, 110px) 0 clamp(64px, 8vw, 100px)',
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
            SECTION INTRODUCTION (Minimal Editorial Style)
            ======================================================== */}
        <div
          style={{
            marginBottom: 'clamp(36px, 5vw, 56px)',
            maxWidth: '880px',
          }}
        >
          {/* Small uppercase label with brand orange accent line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '14px',
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

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              fontSize: 'clamp(32px, 4.4vw, 54px)',
              fontWeight: 400,
              color: '#000000',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '0 0 16px 0',
            }}
          >
            People behind the <span style={{ color: '#fe6200' }}>progress</span>
          </h2>

          {/* Supporting Statement */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 1.25vw, 18px)',
              color: '#66615c',
              lineHeight: 1.55,
              margin: 0,
              maxWidth: '740px',
            }}
          >
            With a wide range of multidisciplinary expertise, our engineers, architects, and product specialists bring together technical rigor and creative execution to build software that moves your business forward.
          </p>
        </div>

        {/* ========================================================
            TEAM MEMBERS DIRECTORY (4-in-a-row layout matching reference)
            ======================================================== */}
        <div className="team-ideo-grid">
          {sortedMembers.map((member) => (
            <TeamCompactItem key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
