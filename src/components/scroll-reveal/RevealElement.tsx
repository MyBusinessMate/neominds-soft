import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RevealElement.css';

gsap.registerPlugin(ScrollTrigger);

export type RevealVariant =
  | 'default'
  | 'text'
  | 'heading'
  | 'image'
  | 'card'
  | 'button'
  | 'section';

export interface RevealElementProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  start?: string;
  end?: string;
  delay?: number;
  enableBlur?: boolean;
  blurMax?: number;
  triggerElement?: string | HTMLElement | null;
}

interface VariantPreset {
  opacity: number;
  blur: number;
  y: number;
  scale: number;
  rotate: number;
  start: string;
  end: string;
}

const VARIANT_PRESETS: Record<RevealVariant, VariantPreset> = {
  default: {
    opacity: 0.25,
    blur: 2,
    y: 12,
    scale: 1,
    rotate: 0,
    start: 'top 92%',
    end: 'top 60%',
  },
  text: {
    opacity: 0.25,
    blur: 0,
    y: 10,
    scale: 1,
    rotate: 0,
    start: 'top 92%',
    end: 'top 60%',
  },
  heading: {
    opacity: 0.25,
    blur: 2,
    y: 14,
    scale: 1,
    rotate: 0,
    start: 'top 92%',
    end: 'top 55%',
  },
  image: {
    opacity: 0.3,
    blur: 3,
    y: 16,
    scale: 0.98,
    rotate: 0,
    start: 'top 92%',
    end: 'top 55%',
  },
  card: {
    opacity: 0.3,
    blur: 2,
    y: 14,
    scale: 0.985,
    rotate: 0,
    start: 'top 92%',
    end: 'top 60%',
  },
  button: {
    opacity: 0.35,
    blur: 0,
    y: 8,
    scale: 1,
    rotate: 0,
    start: 'top 94%',
    end: 'top 65%',
  },
  section: {
    opacity: 0.4,
    blur: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    start: 'top 96%',
    end: 'top 70%',
  },
};

export const RevealElement: React.FC<RevealElementProps> = ({
  children,
  variant = 'default',
  as: Component = 'div',
  className = '',
  style,
  start,
  end,
  delay = 0,
  enableBlur = true,
  blurMax,
}) => {
  const elRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.set(el, {
        opacity: 1,
        filter: 'none',
        y: 0,
        scale: 1,
        rotate: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const preset = VARIANT_PRESETS[variant];
      const isMobile = window.innerWidth < 768;

      const initialBlur = enableBlur && !isMobile
        ? blurMax !== undefined
          ? blurMax
          : Math.min(preset.blur, 3)
        : 0;

      const initialRotate = isMobile ? 0 : preset.rotate;
      const initialY = isMobile ? Math.min(preset.y, 6) : preset.y;
      const initialScale = isMobile ? 1 : preset.scale;

      const triggerStart = start || preset.start;
      const triggerEnd = end || preset.end;

      gsap.fromTo(
        el,
        {
          opacity: preset.opacity,
          filter: initialBlur > 0 ? `blur(${initialBlur}px)` : 'none',
          y: initialY,
          scale: initialScale,
          rotate: initialRotate,
        },
        {
          opacity: 1,
          filter: 'none',
          y: 0,
          scale: 1,
          rotate: 0,
          delay,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            end: triggerEnd,
            scrub: 1,
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [variant, start, end, delay, enableBlur, blurMax]);

  return (
    <Component
      ref={elRef as any}
      className={`reveal-element reveal-variant-${variant} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default RevealElement;
