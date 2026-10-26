import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

import { ServiceSlug } from '../data/serviceSlugs';

export type PageType =
  | 'home'
  | 'insights'
  | 'blog'
  | 'company-updates'
  | 'portfolio'
  | 'project'
  | 'about-us'
  | 'contacts'
  | 'careers'
  | 'certification'
  | 'leaders'
  | 'services'
  | 'industries'
  | 'privacy-policy'
  | 'cookie-policy'
  | 'security-policy'
  | ServiceSlug
  | 'software-development'
  | 'ai-development'
  | 'mobile-app-development'
  | 'web-cms-development'
  | 'ecommerce-development'
  | 'devops'
  | 'ai-agents'
  | 'ai-product-engineering'
  | '404';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  currentPage?: PageType;
  onSelectPage?: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  currentPage = 'home',
  onSelectPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<'what-we-do' | 'who-we-are' | 'insights' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>('what-we-do');

  const scrollStopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Floating shrink effect upon scroll:
  // When scrolled > 20px, smoothly transitions into the compact pill (width: min(58%, 640px), height: 46px)
  useEffect(() => {
    const handleScroll = () => {
      // Keep navbar pinned and visible if the mobile drawer is actively open
      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const scrolled = currentScrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
      setIsVisible(true);

      // Close open dropdowns during active scroll
      if (activeMenu) {
        setActiveMenu(null);
      }
    };

    // Initial check on mount
    const initialScrollY = window.scrollY || document.documentElement.scrollTop;
    setIsScrolled(initialScrollY > 20);
    setIsVisible(true);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('lenis-scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('lenis-scroll', handleScroll);
      if (scrollStopTimerRef.current) {
        clearTimeout(scrollStopTimerRef.current);
      }
    };
  }, [mobileMenuOpen, activeMenu]);

  const handleMouseEnter = useCallback((menu: 'what-we-do' | 'who-we-are' | 'insights') => {
    setActiveMenu(menu);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const handleMenuToggle = useCallback((e: React.MouseEvent, menu: 'what-we-do' | 'who-we-are' | 'insights') => {
    e.stopPropagation();
    setActiveMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const navigateToPage = useCallback((page: PageType) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (onSelectPage) {
      onSelectPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onSelectPage]);

  const handleLogoClick = useCallback(() => {
    navigateToPage('home');
    onNavigate('#hero');
  }, [navigateToPage, onNavigate]);

  /* =========================================================================
     NAVBAR WHAT WE DO - 4 CLEAN COLUMNS (MATCHES USER IMAGE 2)
     ========================================================================= */

  // Column 1: Core Development & Engineering (8 of 16 CSV services)
  const ourServicesList = [
    { title: 'Web Development', page: 'web-development' as const, hasExternalArrow: false },
    { title: 'App Development', page: 'app-development' as const, hasExternalArrow: false },
    { title: 'Cross-Platform Mobile App Development', page: 'cross-platform-app-development' as const, hasExternalArrow: false },
    { title: 'Custom Software Development', page: 'custom-software-development' as const, hasExternalArrow: false },
    { title: 'E-commerce Platform', page: 'ecommerce-platform' as const, hasExternalArrow: false },
    { title: 'SaaS Development', page: 'saas-development' as const, hasExternalArrow: false },
    { title: 'Cloud Based Softwares', page: 'cloud-based-software' as const, hasExternalArrow: false },
    { title: 'Legacy System Modernisation', page: 'legacy-modernisation' as const, hasExternalArrow: false },
  ];

  // Column 2: AI & Specialist Services (7 of 15 CSV services)
  const artificialIntelligenceList = [
    { title: 'AI Automations', page: 'ai-automations' as const, hasExternalArrow: false },
    { title: 'AI Integrations', page: 'ai-integrations' as const, hasExternalArrow: false },
    { title: 'AI Systems', page: 'ai-systems' as const, hasExternalArrow: false },
    { title: 'AI Native Softwares', page: 'ai-native-software' as const, hasExternalArrow: false },
    { title: 'Analytic Dashboard', page: 'analytics-dashboard' as const, hasExternalArrow: false },
    { title: 'Custom Health Softwares', page: 'custom-health-software' as const, hasExternalArrow: false },
    { title: 'Training as a Service', page: 'training-as-service' as const, hasExternalArrow: false },
    { title: 'All Services', page: 'services' as const, hasExternalArrow: true },
  ];

  // Column 3: Technologies (7 from CSV)
  const fintechList = [
    { title: 'Web Development', page: 'web-development' as const },
    { title: 'Artificial Intelligence', page: 'ai-systems' as const },
    { title: 'Machine Learning', page: 'ai-native-software' as const },
    { title: 'Data Management', page: 'cloud-based-software' as const },
    { title: 'Data Analytics', page: 'analytics-dashboard' as const },
    { title: 'Automations', page: 'ai-automations' as const },
    { title: 'Product Engineering', page: 'custom-software-development' as const },
  ];

  // Column 4: Industries (8 from CSV)
  const healthcareList = [
    { title: 'Enterprise', page: 'industries' as const },
    { title: 'Financial Tech', page: 'industries' as const },
    { title: 'Retail', page: 'industries' as const },
    { title: 'Education', page: 'industries' as const },
    { title: 'Healthcare', page: 'industries' as const },
    { title: 'E-commerce', page: 'industries' as const },
    { title: 'Real Estate', page: 'industries' as const },
    { title: 'E-learning', page: 'industries' as const },
  ];

  return (
    <>
      <header
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          pointerEvents: isVisible ? 'auto' : 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: isScrolled ? '12px' : '0px',
          paddingInline: isScrolled ? '16px' : '0px',
          boxSizing: 'border-box',
          transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -140%, 0)',
          opacity: isVisible ? 1 : 0,
          willChange: 'transform, opacity',
          transition: 'padding-top 0.45s cubic-bezier(0.19, 1, 0.22, 1), padding-inline 0.45s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
        }}
      >
        {/* ========================================================
            EFFECTIVESOFT ARCHITECTURAL SHRINKING FLOATING NAVBAR PILL
            Starts full-width edge-to-edge (100% width, 64px height).
            When scrolled, smoothly shrinks to 46.5rem (~744px) matching EffectiveSoft!
            ======================================================== */}
        <div
          style={{
            width: isScrolled ? 'min(92%, 760px)' : '100%',
            maxWidth: isScrolled ? '760px' : '1320px',
            height: isScrolled ? '48px' : '64px',
            borderRadius: isScrolled ? '4px' : '0px',
            backgroundColor: isScrolled
              ? 'rgba(255, 255, 255, 0.98)'
              : activeMenu
              ? '#ffffff'
              : '#ffffff',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderTop: isScrolled ? '1px solid #e4e2e1' : 'none',
            borderLeft: isScrolled ? '1px solid #e4e2e1' : 'none',
            borderRight: isScrolled ? '1px solid #e4e2e1' : 'none',
            borderBottom: '1px solid #e4e2e1',
            boxShadow: isScrolled
              ? '0 10px 30px rgba(0, 0, 0, 0.08)'
              : '0 1px 3px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: isScrolled ? '12px' : 'clamp(20px, 3.5vw, 44px)',
            boxSizing: 'border-box',
            pointerEvents: 'auto',
            willChange: 'width, max-width, height, transform',
            transform: 'translateZ(0)',
            transition: 'width 0.45s cubic-bezier(0.19, 1, 0.22, 1), max-width 0.45s cubic-bezier(0.19, 1, 0.22, 1), height 0.4s cubic-bezier(0.19, 1, 0.22, 1), border-radius 0.4s ease, padding 0.4s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Left Brand Logo: Freehand style orange asterisk mark + black typography */}
          <div
            onClick={handleLogoClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
          >
            {/* Freehand 8-blade orange asterisk / spark mark */}
            <svg width={isScrolled ? '20' : '22'} height={isScrolled ? '20' : '22'} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 1.5L13.8 8.2L20 6.5L15.8 11.2L21.5 14L15.3 15.8L17 22L12.3 17.8L9.5 23.5L7.7 17.3L1.5 19L5.7 14.3L0 11.5L6.2 9.7L4.5 3.5L9.2 7.7L12 1.5Z"
                fill="#fe6200"
              />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: isScrolled ? '18px' : '21px',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#000000',
                whiteSpace: 'nowrap',
              }}
            >
              neominds
            </span>
          </div>

          {/* Center Navigation Links: Dark text #000000, Orange #fe6200 on active/hover */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: isScrolled ? '20px' : 'clamp(24px, 2.5vw, 38px)',
              height: '100%',
              transition: 'gap 0.4s ease',
            }}
            className="desktop-nav"
          >
            {/* 1. What we do (Freehand "AI Teams" style) */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('what-we-do')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'what-we-do')}
                style={{
                  color: activeMenu === 'what-we-do' ? '#fe6200' : '#000000',
                  fontSize: '15px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 0',
                  transition: 'color 0.2s',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                }}
              >
                <span>What we do</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeMenu === 'what-we-do' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                    color: activeMenu === 'what-we-do' ? '#fe6200' : '#000000',
                  }}
                />
              </button>
            </div>

            {/* 2. Who we are (Freehand "Company" style) */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('who-we-are')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'who-we-are')}
                style={{
                  color: activeMenu === 'who-we-are' ? '#fe6200' : '#000000',
                  fontSize: '15px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 0',
                  transition: 'color 0.2s',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                }}
              >
                <span>Who we are</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeMenu === 'who-we-are' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                    color: activeMenu === 'who-we-are' ? '#fe6200' : '#000000',
                  }}
                />
              </button>
            </div>

            {/* 3. Insights (Freehand "Learn" style) */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('insights')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'insights')}
                style={{
                  color:
                    activeMenu === 'insights' || currentPage === 'insights' || currentPage === 'blog' || currentPage === 'company-updates'
                      ? '#fe6200'
                      : '#000000',
                  fontSize: '15px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 0',
                  transition: 'color 0.2s',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                }}
              >
                <span>Insights</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeMenu === 'insights' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                    color: activeMenu === 'insights' ? '#fe6200' : '#000000',
                  }}
                />
              </button>
            </div>

            {/* 4. Case studies */}
            <button
              onClick={() => navigateToPage('portfolio')}
              style={{
                color: currentPage === 'portfolio' ? '#fe6200' : '#000000',
                fontSize: '15px',
                fontWeight: 500,
                padding: '6px 0',
                transition: 'color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
              onMouseLeave={(e) => (e.currentTarget.style.color = currentPage === 'portfolio' ? '#fe6200' : '#000000')}
            >
              Case studies
            </button>
          </nav>

          {/* Right CTA Button: Freehand Rectangular Solid Orange #fe6200 "REQUEST A DEMO" */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isScrolled ? '10px' : '14px' }}>
            <button
              onClick={() => navigateToPage('contacts')}
              className="desktop-send-btn"
              style={{
                height: isScrolled ? '34px' : '38px',
                paddingInline: isScrolled ? '16px' : '22px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                lineHeight: 1,
                borderRadius: '3px',
                backgroundColor: '#fe6200',
                color: '#ffffff',
                border: 'none',
                boxShadow: 'none',
                transition: 'background-color 0.2s ease, transform 0.15s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d94f00')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fe6200')}
            >
              Request a demo
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-hamburger"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isScrolled ? '32px' : '36px',
                height: isScrolled ? '32px' : '36px',
                color: '#000000',
                background: 'rgba(0, 0, 0, 0.04)',
                border: '1px solid #e4e2e1',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
              aria-label="Open Mobile Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* ========================================================
            DROPDOWN 1: WHAT WE DO (EXACT MATCH TO FREEHAND SCREENSHOT)
            Pure white background, Solutions on Left with Orange Icons,
            "Neominds Studio" Discovery Showcase on Right
            ======================================================== */}
        {activeMenu === 'what-we-do' && (
          <div
            style={{
              width: 'min(94%, 1040px)',
              maxWidth: '1040px',
              marginTop: isScrolled ? '8px' : '0px',
              borderRadius: '8px',
              border: '1px solid #e4e2e1',
              backgroundColor: '#ffffff',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.12)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
              transition: 'margin-top 0.3s ease',
            }}
          >
            <div
              style={{
                width: '100%',
                padding: '28px 32px 30px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px',
                boxSizing: 'border-box',
              }}
            >
              {/* Column 1: Services */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#868683', marginBottom: '16px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Services
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {ourServicesList.map((item) => (
                    <div
                      key={item.page}
                      onClick={() => navigateToPage(item.page)}
                      style={{
                        cursor: 'pointer',
                        color: '#2b2b2b',
                        fontSize: '13.5px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '3px 0',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fe6200';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#2b2b2b';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>{item.title}</span>
                      {item.hasExternalArrow && (
                        <span style={{ fontSize: '11px', opacity: 0.8, color: 'inherit' }}>↗</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: AI & Specialist */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#868683', marginBottom: '16px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  AI & Specialist
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {artificialIntelligenceList.map((item) => (
                    <div
                      key={item.page}
                      onClick={() => navigateToPage(item.page)}
                      style={{
                        cursor: 'pointer',
                        color: '#2b2b2b',
                        fontSize: '13.5px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '3px 0',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fe6200';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#2b2b2b';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>{item.title}</span>
                      {item.hasExternalArrow && (
                        <span style={{ fontSize: '11px', opacity: 0.8, color: 'inherit' }}>↗</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Technologies */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#868683', marginBottom: '16px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Technologies
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {fintechList.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => navigateToPage(item.page)}
                      style={{
                        cursor: 'pointer',
                        color: '#2b2b2b',
                        fontSize: '13.5px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '3px 0',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fe6200';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#2b2b2b';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 4: Industries */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#868683', marginBottom: '16px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Industries
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {healthcareList.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => navigateToPage(item.page)}
                      style={{
                        cursor: 'pointer',
                        color: '#2b2b2b',
                        fontSize: '13.5px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '3px 0',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fe6200';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#2b2b2b';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            DROPDOWN 2: INSIGHTS (FREEHAND PURE WHITE THEME)
            Left: Navigation Links | Right: 2 Article Preview Cards
            ======================================================== */}
        {activeMenu === 'insights' && (
          <div
            style={{
              width: 'min(94%, 880px)',
              maxWidth: '880px',
              marginTop: isScrolled ? '8px' : '0px',
              borderRadius: '8px',
              border: '1px solid #e4e2e1',
              backgroundColor: '#ffffff',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.14)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
              transition: 'margin-top 0.3s ease',
            }}
          >
            <div
              style={{
                width: '100%',
                padding: '24px 28px',
                display: 'grid',
                gridTemplateColumns: '170px 1fr 1fr',
                gap: '24px',
                boxSizing: 'border-box',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Blog & Company updates links in black #000000 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '6px' }}>
                <div
                  onClick={() => navigateToPage('blog')}
                  style={{
                    color: '#000000',
                    fontSize: '14.5px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
                >
                  Blog
                </div>

                <div
                  onClick={() => navigateToPage('company-updates')}
                  style={{
                    color: '#000000',
                    fontSize: '14.5px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
                >
                  Company updates
                </div>

                <div
                  onClick={() => navigateToPage('insights')}
                  style={{
                    color: '#fe6200',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>All Insights</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>

              {/* Center Column: Card 1 */}
              <div
                onClick={() => navigateToPage('blog')}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  borderRadius: '6px',
                  padding: '8px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(254, 98, 0, 0.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div
                  style={{
                    height: '130px',
                    width: '100%',
                    borderRadius: '4px',
                    background: 'linear-gradient(135deg, #182838 0%, #1e3a52 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: 'rgba(254, 98, 0, 0.2)', border: '1px solid rgba(254, 98, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fe6200' }} aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    color: '#000000',
                  }}
                >
                  Why AI projects fail in enterprises: the implementation gap between pilots and production
                </div>
              </div>

              {/* Right Column: Card 2 */}
              <div
                onClick={() => navigateToPage('company-updates')}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  borderRadius: '6px',
                  padding: '8px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(254, 98, 0, 0.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div
                  style={{
                    height: '130px',
                    width: '100%',
                    borderRadius: '4px',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    color: '#000000',
                  }}
                >
                  From AI hype to engineering discipline: notes from Data AI Conf 2026
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            DROPDOWN 3: WHO WE ARE (FREEHAND PURE WHITE THEME)
            Left: 6 vertical links in black | Right: Client testimonial on warm cream
            ======================================================== */}
        {activeMenu === 'who-we-are' && (
          <div
            style={{
              width: 'min(94%, 680px)',
              maxWidth: '680px',
              marginTop: isScrolled ? '8px' : '0px',
              borderRadius: '8px',
              border: '1px solid #e4e2e1',
              backgroundColor: '#ffffff',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.14)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              transition: 'margin-top 0.3s ease',
            }}
          >
            {/* Left Column: 6 Vertical Links in crisp black #000000 */}
            <div
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: '#ffffff',
                borderRight: '1px solid #e4e2e1',
              }}
            >
              {[
                { title: 'About Us', page: 'about-us' as const },
                { title: 'Leadership', page: 'leaders' as const },
                { title: 'Careers', page: 'careers' as const },
                { title: 'Certification', page: 'certification' as const },
                { title: 'Contact', page: 'contacts' as const },
                { title: 'Security & Compliance', page: 'security-policy' as const },
              ].map((item) => (
                <div
                  key={item.title}
                  onClick={() => navigateToPage(item.page)}
                  style={{
                    cursor: 'pointer',
                    color: '#000000',
                    fontSize: '15px',
                    fontWeight: 500,
                    transition: 'color 0.2s, transform 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fe6200';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#000000';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* Right Column: Canopy Testimonial on warm light background */}
            <div
              style={{
                padding: '30px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#faf8f5',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <svg width="24" height="18" viewBox="0 0 28 22" fill="#fe6200">
                    <path
                      d="M7.7 0C3.4 3.4 0 8.5 0 14.1C0 18.6 3.1 21.6 7.1 21.6C10.7 21.6 13.4 18.9 13.4 15.3C13.4 11.7 10.7 9 7.3 9C6.9 9 6.5 9.1 6.2 9.2C6.7 5.6 9.7 2.4 12.3 0.6L7.7 0ZM22.3 0C18 3.4 14.6 8.5 14.6 14.1C14.6 18.6 17.7 21.6 21.7 21.6C25.3 21.6 28 18.9 28 15.3C28 11.7 25.3 9 21.9 9C21.5 9 21.1 9.1 20.8 9.2C21.3 5.6 24.3 2.4 26.9 0.6L22.3 0Z"
                    />
                  </svg>

                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#000000', letterSpacing: '-0.02em', textTransform: 'lowercase', fontFamily: 'var(--font-heading)' }}>
                    canopy
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.55,
                    color: '#2b2b2b',
                    margin: 0,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Neominds has been providing services to Canopy for four years. Their skilled engineers understand product needs, deliver quality platform increments, and meet evolving deadlines with engineering discipline.
                </p>
              </div>

              <div style={{ marginTop: '20px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#000000',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  MATT HOBBS
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#66615c',
                    marginTop: '2px',
                  }}
                >
                  Chief Product Officer
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================
          MOBILE NAVIGATION DRAWER (FREEHAND PURE WHITE THEME)
          ======================================================== */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100dvh',
            backgroundColor: '#ffffff',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 20px 36px',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Mobile Header Top */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1.5L14 8.5L21 6.5L16.5 12L21.5 15.5L14.5 15.5L12 22.5L9.5 15.5L2.5 15.5L7.5 12L3 6.5L10 8.5L12 1.5Z"
                  fill="#fe6200"
                />
              </svg>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#000000', fontFamily: 'var(--font-heading)' }}>
                neominds
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#000000', background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* Mobile Navigation Accordions in Black & Orange */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Section 1: What we do */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'what-we-do' ? null : 'what-we-do')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  borderBottom: '1px solid #e4e2e1',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>What we do</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'what-we-do' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: mobileExpandedSection === 'what-we-do' ? '#fe6200' : '#000000',
                  }}
                />
              </button>

              {mobileExpandedSection === 'what-we-do' && (
                <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Sub-block 1: Services */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Services
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {ourServicesList.map((srv) => (
                        <div
                          key={srv.page}
                          onClick={() => navigateToPage(srv.page)}
                          style={{ color: currentPage === srv.page ? '#fe6200' : '#2b2b2b', fontSize: '14px', cursor: 'pointer' }}
                        >
                          {srv.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-block 2: AI & Specialist */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', marginBottom: '8px' }}>
                      AI & Specialist
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {artificialIntelligenceList.map((srv) => (
                        <div
                          key={srv.page}
                          onClick={() => navigateToPage(srv.page)}
                          style={{ color: currentPage === srv.page ? '#fe6200' : '#2b2b2b', fontSize: '14px', cursor: 'pointer' }}
                        >
                          {srv.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-block 3: Technologies */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Technologies
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {fintechList.map((srv) => (
                        <div
                          key={srv.title}
                          onClick={() => navigateToPage(srv.page)}
                          style={{ color: currentPage === srv.page ? '#fe6200' : '#2b2b2b', fontSize: '14px', cursor: 'pointer' }}
                        >
                          {srv.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-block 4: Industries */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Industries
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {healthcareList.map((srv) => (
                        <div
                          key={srv.title}
                          onClick={() => navigateToPage(srv.page)}
                          style={{ color: currentPage === srv.page ? '#fe6200' : '#2b2b2b', fontSize: '14px', cursor: 'pointer' }}
                        >
                          {srv.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section 2: Who we are */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'who-we-are' ? null : 'who-we-are')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  borderBottom: '1px solid #e4e2e1',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>Who we are</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'who-we-are' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: mobileExpandedSection === 'who-we-are' ? '#fe6200' : '#000000',
                  }}
                />
              </button>

              {mobileExpandedSection === 'who-we-are' && (
                <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div onClick={() => navigateToPage('about-us')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>About Us</div>
                  <div onClick={() => navigateToPage('leaders')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Leadership</div>
                  <div onClick={() => navigateToPage('careers')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Careers</div>
                  <div onClick={() => navigateToPage('certification')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Certification</div>
                  <div onClick={() => navigateToPage('contacts')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Contact</div>
                </div>
              )}
            </div>

            {/* Section 3: Insights */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'insights' ? null : 'insights')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  borderBottom: '1px solid #e4e2e1',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>Insights & Publications</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'insights' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: mobileExpandedSection === 'insights' ? '#fe6200' : '#000000',
                  }}
                />
              </button>

              {mobileExpandedSection === 'insights' && (
                <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div onClick={() => navigateToPage('blog')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Blog</div>
                  <div onClick={() => navigateToPage('company-updates')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Company Updates</div>
                  <div onClick={() => navigateToPage('insights')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>All Insights Hub</div>
                </div>
              )}
            </div>

            {/* Section 4: Case studies */}
            <button
              onClick={() => navigateToPage('portfolio')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 0',
                color: currentPage === 'portfolio' ? '#fe6200' : '#000000',
                fontSize: '17px',
                fontWeight: 600,
                borderBottom: '1px solid #e4e2e1',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Case studies</span>
              <ChevronRight size={16} opacity={0.6} />
            </button>
          </div>

          {/* Mobile Footer Send Request Button */}
          <div style={{ marginTop: 'auto', paddingTop: '28px' }}>
            <button
              onClick={() => navigateToPage('contacts')}
              style={{
                width: '100%',
                height: '46px',
                backgroundColor: '#fe6200',
                color: '#ffffff',
                border: 'none',
                borderRadius: '3px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Request a demo
            </button>
          </div>
        </div>
      )}


      {/* Global CSS Animations & Breakpoints */}
      <style>{`
        @keyframes megaDropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
          .desktop-send-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
          .desktop-send-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
