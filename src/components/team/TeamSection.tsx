import React from 'react';
import { TEAM_MEMBERS } from '../../data/teamData';
import { TeamCompactItem } from './TeamCompactItem';

export const TeamSection: React.FC = () => {
  // Sort all 11 team members by defined order to display them consistently
  const sortedMembers = [...TEAM_MEMBERS].sort((a, b) => a.order - b.order);

  // Split into 1 row of 3 big cards + 2 rows of 4 cards (no repeats)
  const row1Leadership = sortedMembers.slice(0, 3);
  const row2Pod1 = sortedMembers.slice(3, 7);
  const row3Pod2 = sortedMembers.slice(7, 11);

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
      <style>{`
        .team-grid-lead {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(24px, 3.5vw, 44px);
          margin-bottom: clamp(48px, 6vw, 68px);
        }
        .team-grid-quad {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(18px, 2.4vw, 32px);
          margin-bottom: clamp(40px, 5vw, 56px);
        }
        .team-grid-quad:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 960px) {
          .team-grid-lead {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 36px;
          }
          .team-grid-quad {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 20px;
            margin-bottom: 32px;
          }
        }
        @media (max-width: 640px) {
          .team-grid-lead {
            grid-template-columns: 1fr;
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
            gap: 32px;
            margin-bottom: 36px;
          }
          .team-grid-quad {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 16px;
            margin-bottom: 32px;
          }
        }
        @media (max-width: 420px) {
          .team-grid-quad {
            grid-template-columns: 1fr;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

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
              OUR LEADERS AND TEAM
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
            TEAM MEMBERS DIRECTORY
            Format: 3 Big Cards (Row 1) followed by 2 Rows of 4 Cards (Rows 2 & 3)
            ======================================================== */}
        {/* Row 1: 3 Big Cards */}
        <div className="team-grid-lead" aria-label="Leadership Team">
          {row1Leadership.map((member) => (
            <TeamCompactItem key={member.id} member={member} isLarge />
          ))}
        </div>

        {/* Row 2: 4 Standard Cards */}
        <div className="team-grid-quad" aria-label="Engineering Team Pod 1">
          {row2Pod1.map((member) => (
            <TeamCompactItem key={member.id} member={member} />
          ))}
        </div>

        {/* Row 3: 4 Standard Cards (Distinct members, no repeats) */}
        <div className="team-grid-quad" aria-label="Engineering Team Pod 2">
          {row3Pod2.map((member) => (
            <TeamCompactItem key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
