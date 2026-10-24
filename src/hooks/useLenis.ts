import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== 'undefined') {
  (window as any).ScrollTrigger = ScrollTrigger;
  (window as any).gsap = gsap;
}

let globalLenis: Lenis | null = null;

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialize Lenis with exact Ballance math and physics
    // Decouples visual render from DOM scroll via Lerp inside RAF/GSAP ticker
    const lenis = new Lenis({
      lerp: 0.1, // Exact Ballance linear interpolation rate (10% distance per frame)
      duration: 1.2, // Buttery momentum deceleration
      smoothWheel: !reduceMotion, // Hijacks mouse wheel for desktop smoothing
      syncTouch: false, // MANDATORY: Never hijack touch on mobile for 120Hz native momentum
      wheelMultiplier: 1.0, // Natural 1:1 hardware scroll multiplier
      touchMultiplier: 1.0, // Natural touch scrolling on devices
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    lenisRef.current = lenis;
    globalLenis = lenis;
    if (typeof window !== 'undefined') {
      (window as any).__lenis = lenis;
    }

    // 2. Synchronize Lenis scroll position with GSAP ScrollTrigger and global event
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: e }));
    });

    // 3. Direct high-precision requestAnimationFrame loop driving Lenis and ScrollTrigger
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Refresh ScrollTrigger positions after DOM layout stabilizes and assets load
    const refreshTimers = [
      setTimeout(() => ScrollTrigger.refresh(), 150),
      setTimeout(() => ScrollTrigger.refresh(), 600),
      setTimeout(() => ScrollTrigger.refresh(), 1500),
    ];

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      }).catch(() => {});
    }

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleWindowLoad);

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };
    window.addEventListener('resize', handleResize);

    // 4. Global Anchor Link Interception
    // Intercepts clicks on <a href="#id"> to route through Lenis Lerp math instead of browser snapping
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: 0,
            lerp: 0.1,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    return () => {
      refreshTimers.forEach(clearTimeout);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener('load', handleWindowLoad);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      globalLenis = null;
    };
  }, []);

  const scrollTo = useCallback(
    (
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        lerp?: number;
        duration?: number;
        immediate?: boolean;
        lock?: boolean;
      }
    ) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, {
          offset: options?.offset ?? 0,
          lerp: options?.lerp ?? 0.1,
          ...options,
        });
      } else if (typeof target === 'string') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  return {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
  };
}

export function getLenis() {
  return globalLenis;
}

