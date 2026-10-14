import React, { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  enableBlur?: boolean;
  start?: string;
  end?: string;
  stagger?: number;
  wordSpacing?: string;
}

/**
 * Recursively tokenizes React children (strings, nested spans, elements)
 * into individual `.scroll-reveal-word` spans so that every word is individually scrubbed.
 */
function tokenizeWords(
  node: React.ReactNode,
  keyPrefix = 'sr'
): React.ReactNode {
  if (typeof node === 'string' || typeof node === 'number') {
    const str = String(node);
    const tokens = str.split(/(\s+)/);
    return tokens.map((token, i) => {
      if (/^\s+$/.test(token)) {
        return (
          <span key={`${keyPrefix}-space-${i}`} className="scroll-reveal-space">
            {token}
          </span>
        );
      }
      if (token === '') return null;
      return (
        <span
          key={`${keyPrefix}-word-${i}`}
          className="scroll-reveal-word"
          data-reveal-word
        >
          {token}
        </span>
      );
    });
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<any>;
    const children = element.props?.children;
    if (children !== undefined && children !== null) {
      return React.cloneElement(
        element,
        { key: element.key || keyPrefix },
        tokenizeWords(children, `${keyPrefix}-nested`)
      );
    }
    return element;
  }

  if (Array.isArray(node)) {
    return node.map((child, idx) =>
      tokenizeWords(child, `${keyPrefix}-${idx}`)
    );
  }

  return node;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  as: Component = 'span',
  className = '',
  style,
  baseOpacity = 0.2,
  baseRotation = 0,
  blurStrength = 3,
  enableBlur = true,
  start = 'top 90%',
  end = 'top 50%',
  stagger = 0.04,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  // Recursively tokenize words even when children contains styled spans
  const renderedContent = useMemo(() => {
    return tokenizeWords(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      const words = el.querySelectorAll<HTMLElement>('.scroll-reveal-word');
      if (words.length > 0) {
        gsap.set(words, { opacity: 1, filter: 'none', rotate: 0, y: 0 });
      } else {
        gsap.set(el, { opacity: 1, filter: 'none', rotate: 0, y: 0 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll<HTMLElement>('.scroll-reveal-word');
      const isMobile = window.innerWidth < 768;
      const actualBlur = isMobile || !enableBlur ? 0 : Math.min(blurStrength, 4);
      const actualRotation = isMobile ? 0 : baseRotation;
      const actualY = isMobile ? 4 : 10;

      if (words.length > 0) {
        gsap.fromTo(
          words,
          {
            opacity: baseOpacity,
            filter: actualBlur > 0 ? `blur(${actualBlur}px)` : 'none',
            rotate: actualRotation,
            y: actualY,
          },
          {
            opacity: 1,
            filter: 'none',
            rotate: 0,
            y: 0,
            stagger,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: el,
              start,
              end,
              scrub: 1,
            },
          }
        );
      } else {
        // Fallback for containers with non-text elements
        gsap.fromTo(
          el,
          {
            opacity: baseOpacity,
            filter: actualBlur > 0 ? `blur(${actualBlur}px)` : 'none',
            rotate: actualRotation,
            y: actualY,
          },
          {
            opacity: 1,
            filter: 'none',
            rotate: 0,
            y: 0,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: el,
              start,
              end,
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [baseOpacity, baseRotation, blurStrength, enableBlur, start, end, stagger]);

  return (
    <Component
      ref={containerRef as any}
      className={`scroll-reveal ${className}`}
      style={style}
    >
      {renderedContent}
    </Component>
  );
};

export default ScrollReveal;
