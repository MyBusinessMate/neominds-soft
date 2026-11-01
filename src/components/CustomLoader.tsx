import React from 'react';

export interface CustomLoaderProps {
  /** Whether the loader covers the viewport as a fixed/absolute overlay */
  fullScreen?: boolean;
  /** Size variant: 'sm' for inline widgets/cards, 'md' for standard sections, 'lg' for hero/page routes */
  size?: 'sm' | 'md' | 'lg';
  /** Optional message displayed below the loader */
  message?: string;
  /** Optional brand label (defaults to 'NEOMINDS') */
  label?: string;
  /** Whether to show the central brand logo mark */
  showLogo?: boolean;
  /** Whether to show the sleek indeterminate hairline progress bar */
  showProgress?: boolean;
  /** Custom background color (defaults to site warm cream #f1efeb) */
  backgroundColor?: string;
  /** Inline style overrides */
  style?: React.CSSProperties;
  /** Custom CSS class */
  className?: string;
}

export const CustomLoader: React.FC<CustomLoaderProps> = ({
  fullScreen = false,
  size = 'md',
  message,
  label = 'NEOMINDS',
  showLogo = true,
  showProgress = true,
  backgroundColor = 'var(--colors-surface-light, #f1efeb)',
  style,
  className = '',
}) => {
  // Dimensions calibrated by size variant
  const dimensions = {
    sm: { orbit: 42, logo: 18, stroke: 2, barWidth: 80, fontSize: '10px' },
    md: { orbit: 64, logo: 26, stroke: 2.5, barWidth: 120, fontSize: '11px' },
    lg: { orbit: 84, logo: 34, stroke: 3, barWidth: 160, fontSize: '12px' },
  }[size];

  return (
    <div
      className={`nm-custom-loader-wrapper ${fullScreen ? 'nm-loader-fullscreen' : 'nm-loader-inline'} ${className}`}
      style={{
        backgroundColor: fullScreen ? backgroundColor : 'transparent',
        minHeight: fullScreen ? '100vh' : size === 'sm' ? '120px' : '65vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        position: fullScreen ? 'fixed' : 'relative',
        top: fullScreen ? 0 : undefined,
        left: fullScreen ? 0 : undefined,
        zIndex: fullScreen ? 99999 : 10,
        pointerEvents: fullScreen ? 'all' : 'none',
        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style,
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      {/* Central Kinetic Emblem */}
      <div
        style={{
          position: 'relative',
          width: `${dimensions.orbit}px`,
          height: `${dimensions.orbit}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: size === 'sm' ? '12px' : '18px',
        }}
      >
        {/* Outer Orbit Track (Subtle Warm Cream Halo) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: `${dimensions.stroke}px solid rgba(0, 0, 0, 0.05)`,
            boxSizing: 'border-box',
          }}
        />

        {/* Active Animated Gradient Orange Orbit */}
        <div
          className="nm-loader-orbit-spinner"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: `${dimensions.stroke}px solid transparent`,
            borderTopColor: '#fe6200',
            borderRightColor: 'rgba(254, 98, 0, 0.4)',
            boxSizing: 'border-box',
            filter: 'drop-shadow(0 0 6px rgba(254, 98, 0, 0.25))',
          }}
        />

        {/* Central Luminous Logo / Neural Pulse */}
        {showLogo ? (
          <div
            className="nm-loader-logo-pulse"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: `${dimensions.logo}px`,
              height: `${dimensions.logo}px`,
              zIndex: 2,
            }}
          >
            <img
              src="/images/neominds-logo.png"
              alt="Neominds"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 8px rgba(254, 98, 0, 0.3))',
              }}
            />
          </div>
        ) : (
          <div
            className="nm-loader-dot-pulse"
            style={{
              width: `${dimensions.logo * 0.4}px`,
              height: `${dimensions.logo * 0.4}px`,
              borderRadius: '50%',
              backgroundColor: '#fe6200',
              boxShadow: '0 0 12px rgba(254, 98, 0, 0.6)',
              zIndex: 2,
            }}
          />
        )}
      </div>

      {/* Brand Label & Subtle Tracking */}
      {label && (
        <div
          className="nm-loader-brand-label"
          style={{
            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
            fontSize: dimensions.fontSize,
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#1a1a1a',
            textTransform: 'uppercase',
            marginBottom: showProgress || message ? '10px' : 0,
            opacity: 0.9,
          }}
        >
          {label}
        </div>
      )}

      {/* Sleek Hairline Progress Bar */}
      {showProgress && (
        <div
          style={{
            width: `${dimensions.barWidth}px`,
            height: '2px',
            backgroundColor: 'rgba(0, 0, 0, 0.06)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: message ? '8px' : 0,
          }}
        >
          <div className="nm-loader-hairline-runner" />
        </div>
      )}

      {/* Optional Context Message */}
      {message && (
        <div
          style={{
            fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
            fontSize: '12px',
            fontWeight: 500,
            color: '#66615c',
            letterSpacing: '-0.01em',
            marginTop: '4px',
            textAlign: 'center',
            maxWidth: '280px',
          }}
        >
          {message}
        </div>
      )}

      {/* Scoped CSS Keyframes for High-Performance GPU Rendering */}
      <style>{`
        @keyframes nmOrbitSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes nmPulseBreathing {
          0%, 100% {
            transform: scale(0.94);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes nmHairlineSlide {
          0% {
            left: -40%;
            width: 30%;
          }
          50% {
            left: 20%;
            width: 60%;
          }
          100% {
            left: 100%;
            width: 30%;
          }
        }

        @keyframes nmFadeInSmooth {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .nm-custom-loader-wrapper {
          animation: nmFadeInSmooth 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity, transform;
        }

        .nm-loader-orbit-spinner {
          animation: nmOrbitSpin 0.9s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          will-change: transform;
        }

        .nm-loader-logo-pulse {
          animation: nmPulseBreathing 2s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .nm-loader-dot-pulse {
          animation: nmPulseBreathing 1.4s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .nm-loader-hairline-runner {
          position: absolute;
          top: 0;
          bottom: 0;
          background: linear-gradient(90deg, rgba(254, 98, 0, 0.4), #fe6200, rgba(254, 98, 0, 0.4));
          border-radius: 999px;
          animation: nmHairlineSlide 1.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          will-change: left, width;
        }

        .nm-loader-fullscreen {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </div>
  );
};

export default CustomLoader;

