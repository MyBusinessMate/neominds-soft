import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import "./cinematic-scroll.css";

export interface CinematicScrollProps {
  children: React.ReactNode;
  className?: string;
  blurLayers?: number;
  blurMax?: number;
  blurSize?: number; // in pixels
  accentColor?: string;
  showScrollbar?: boolean;
  isGlobal?: boolean; // When true, applies progressive masking and scrollbar globally to viewport
}

export const CinematicScroll: React.FC<CinematicScrollProps> = ({
  children,
  className,
  blurLayers = 5,
  blurMax = 20,
  blurSize = 80,
  accentColor = "#2258e7",
  showScrollbar = false,
  isGlobal = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll(
    isGlobal
      ? {}
      : {
          container: scrollerRef,
        }
  );

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (isGlobal) {
    return (
      <div
        ref={containerRef}
        className={cn("cinematic-scroll-global", className)}
        style={
          {
            "--blur-max": `${blurMax}px`,
            "--blur-size": `${blurSize}px`,
            "--accent": accentColor,
          } as React.CSSProperties
        }
      >
        {/* Top Progressive Blur Mask Layers (Fixed Viewport) */}
        <div
          className="cinematic-mask-top"
          style={{ height: blurSize }}
          aria-hidden="true"
        >
          {[...Array(blurLayers)].map((_, i) => (
            <div
              key={`top-${i}`}
              className="cinematic-mask-layer"
              style={{
                backdropFilter: `blur(${
                  Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                  blurMax
                }px) contrast(1.1) brightness(1.05)`,
                WebkitBackdropFilter: `blur(${
                  Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                  blurMax
                }px) contrast(1.1) brightness(1.05)`,
                maskImage: `linear-gradient(to bottom, black, transparent ${
                  ((i + 1) / blurLayers) * 100
                }%)`,
                WebkitMaskImage: `linear-gradient(to bottom, black, transparent ${
                  ((i + 1) / blurLayers) * 100
                }%)`,
              }}
            />
          ))}
        </div>

        {/* Bottom Progressive Blur Mask Layers (Fixed Viewport) */}
        <div
          className="cinematic-mask-bottom"
          style={{ height: blurSize }}
          aria-hidden="true"
        >
          {[...Array(blurLayers)].map((_, i) => (
            <div
              key={`bottom-${i}`}
              className="cinematic-mask-layer"
              style={{
                backdropFilter: `blur(${
                  Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                  blurMax
                }px) contrast(1.1) brightness(1.05)`,
                WebkitBackdropFilter: `blur(${
                  Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                  blurMax
                }px) contrast(1.1) brightness(1.05)`,
                maskImage: `linear-gradient(to bottom, black, transparent ${
                  ((i + 1) / blurLayers) * 100
                }%)`,
                WebkitMaskImage: `linear-gradient(to bottom, black, transparent ${
                  ((i + 1) / blurLayers) * 100
                }%)`,
              }}
            />
          ))}
        </div>

        {/* Global Custom Spring Scrollbar Indicator */}
        {showScrollbar && (
          <div
            className="cinematic-scrollbar-track"
            aria-hidden="true"
          >
            <div className="cinematic-scrollbar-rail">
              <motion.div
                className="cinematic-scrollbar-thumb"
                style={{
                  scaleY,
                  height: "100%",
                  background: `linear-gradient(to bottom, ${accentColor}, #6091fa)`,
                  boxShadow: `0 0 14px ${accentColor}`,
                }}
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div style={{ width: "100%", minHeight: "100vh" }}>
          {children}
        </div>
      </div>
    );
  }

  // Standalone Container Mode (matching original Lightswind UI spec)
  return (
    <div
      ref={containerRef}
      className={cn("cinematic-scroll-container", className)}
      style={
        {
          "--blur-max": `${blurMax}px`,
          "--blur-size": `${blurSize}px`,
          "--accent": accentColor,
        } as React.CSSProperties
      }
    >
      {/* Top Blur Mask Layers */}
      <div
        className="cinematic-mask-top"
        style={{ height: blurSize, position: "absolute", zIndex: 30 }}
        aria-hidden="true"
      >
        {[...Array(blurLayers)].map((_, i) => (
          <div
            key={`top-${i}`}
            className="cinematic-mask-layer"
            style={{
              backdropFilter: `blur(${
                Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                blurMax
              }px) contrast(1.2) brightness(1.1)`,
              WebkitBackdropFilter: `blur(${
                Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                blurMax
              }px) contrast(1.2) brightness(1.1)`,
              maskImage: `linear-gradient(to bottom, black, transparent ${
                ((i + 1) / blurLayers) * 100
              }%)`,
              WebkitMaskImage: `linear-gradient(to bottom, black, transparent ${
                ((i + 1) / blurLayers) * 100
              }%)`,
            }}
          />
        ))}
      </div>

      {/* Bottom Blur Mask Layers */}
      <div
        className="cinematic-mask-bottom"
        style={{ height: blurSize, position: "absolute", zIndex: 30 }}
        aria-hidden="true"
      >
        {[...Array(blurLayers)].map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="cinematic-mask-layer"
            style={{
              backdropFilter: `blur(${
                Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                blurMax
              }px) contrast(1.2) brightness(1.1)`,
              WebkitBackdropFilter: `blur(${
                Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                blurMax
              }px) contrast(1.2) brightness(1.1)`,
              maskImage: `linear-gradient(to bottom, black, transparent ${
                ((i + 1) / blurLayers) * 100
              }%)`,
              WebkitMaskImage: `linear-gradient(to bottom, black, transparent ${
                ((i + 1) / blurLayers) * 100
              }%)`,
            }}
          />
        ))}
      </div>

      {/* Custom Scrollbar */}
      {showScrollbar && (
        <div
          className="cinematic-scrollbar-track"
          style={{ position: "absolute", top: 8, right: 8, bottom: 8, zIndex: 40 }}
          aria-hidden="true"
        >
          <div className="cinematic-scrollbar-rail">
            <motion.div
              className="cinematic-scrollbar-thumb"
              style={{
                scaleY,
                height: "100%",
                background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}dd)`,
                boxShadow: `0 0 10px ${accentColor}44`,
              }}
            />
          </div>
        </div>
      )}

      {/* Main Scrollable Content */}
      <div
        ref={scrollerRef}
        className="cinematic-scroll-content"
      >
        <div style={{ padding: "48px 24px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CinematicScroll;
