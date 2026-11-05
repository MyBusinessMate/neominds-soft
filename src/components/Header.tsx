import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

import { ServiceSlug } from '../data/serviceSlugs';
import { DEMO_FORM_URL } from '../constants/links';

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
  | 'technology'
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
  onSelectPage?: (page: PageType, articleId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  currentPage = 'home',
  onSelectPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<'what-we-do' | 'who-we-are' | 'insights' | 'case-studies' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open to ensure clean scroll on small viewports
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

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

  const handleMouseEnter = useCallback((menu: 'what-we-do' | 'who-we-are' | 'insights' | 'case-studies') => {
    setActiveMenu(menu);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const handleMenuToggle = useCallback((e: React.MouseEvent, menu: 'what-we-do' | 'who-we-are' | 'insights' | 'case-studies') => {
    e.stopPropagation();
    setActiveMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const navigateToPage = useCallback((page: PageType, articleId?: string) => {
    if (page === 'training-as-service') {
      window.location.href = 'https://training.neomindstechhub.com/';
      return;
    }
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (onSelectPage) {
      onSelectPage(page, articleId);
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
    { title: 'Training as a Service', page: 'training-as-service' as const, hasExternalArrow: false, externalUrl: 'https://training.neomindstechhub.com/' },
    { title: 'All Services', page: 'services' as const, hasExternalArrow: true },
  ];

  // Column 3: Technologies (7 from CSV)
  const fintechList = [
    { title: 'Web Development', page: 'technology' as const },
    { title: 'Artificial Intelligence', page: 'technology' as const },
    { title: 'Machine Learning', page: 'technology' as const },
    { title: 'Data Management', page: 'technology' as const },
    { title: 'Data Analytics', page: 'technology' as const },
    { title: 'Automations', page: 'technology' as const },
    { title: 'Product Engineering', page: 'technology' as const },
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
        className="nm-main-header"
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
            APPLE VISIONOS FLOATING GLASS CAPSULE NAVBAR
            Starts full-width edge-to-edge (100% width, 68px height).
            When scrolled, smoothly shrinks into floating glass capsule (840px, 56px height, 8px corner radius)
            ======================================================== */}
        <div
          className="nm-header-capsule"
          style={{
            width: isScrolled ? 'min(94%, 860px)' : '100%',
            maxWidth: isScrolled ? '860px' : '1360px',
            height: isScrolled ? '56px' : '68px',
            borderRadius: '8px',
            backgroundColor: isScrolled
              ? 'rgba(251, 249, 245, 0.92)'
              : activeMenu
              ? '#fbf9f5'
              : 'rgba(251, 249, 245, 0.96)',
            backdropFilter: 'blur(28px) saturate(190%)',
            WebkitBackdropFilter: 'blur(28px) saturate(190%)',
            borderTop: isScrolled ? '1px solid rgba(255, 255, 255, 0.75)' : 'none',
            borderLeft: isScrolled ? '1px solid rgba(228, 226, 225, 0.85)' : 'none',
            borderRight: isScrolled ? '1px solid rgba(228, 226, 225, 0.85)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(228, 226, 225, 0.9)' : '1px solid #e4e2e1',
            boxShadow: isScrolled
              ? '0 16px 40px -10px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.95)'
              : '0 1px 3px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: isScrolled ? '18px' : 'clamp(20px, 3.5vw, 44px)',
            boxSizing: 'border-box',
            pointerEvents: 'auto',
            willChange: 'width, max-width, height, transform',
            transform: 'translateZ(0)',
            transition: 'width 0.45s cubic-bezier(0.16, 1, 0.3, 1), max-width 0.45s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Left Brand Logo: Official logo + black DM Sans typography */}
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
            <img
              src="/images/neominds-logo.png"
              alt="NeoMinds"
              className="nm-header-logo"
              style={{ height: '26px', width: 'auto', objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isScrolled ? '18px' : '21px',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#000000',
                whiteSpace: 'nowrap',
              }}
            >
              Neominds Tech Hub
            </span>
          </div>

          {/* Center Navigation Links: DM Sans font, Apple visionOS pill gaze highlight on hover */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: isScrolled ? '6px' : 'clamp(10px, 1.6vw, 24px)',
              height: '100%',
              transition: 'gap 0.4s ease',
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {/* 1. What we do */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('what-we-do')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'what-we-do')}
                aria-expanded={activeMenu === 'what-we-do'}
                aria-haspopup="true"
                style={{
                  color: activeMenu === 'what-we-do' ? '#fe6200' : '#000000',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  backgroundColor: activeMenu === 'what-we-do' ? 'rgba(254, 98, 0, 0.08)' : 'transparent',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (activeMenu !== 'what-we-do') e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={(e) => {
                  if (activeMenu !== 'what-we-do') e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>What we do</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeMenu === 'what-we-do' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                    color: activeMenu === 'what-we-do' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>
            </div>

            {/* 2. Who we are */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('who-we-are')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'who-we-are')}
                aria-expanded={activeMenu === 'who-we-are'}
                aria-haspopup="true"
                style={{
                  color: activeMenu === 'who-we-are' ? '#fe6200' : '#000000',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  backgroundColor: activeMenu === 'who-we-are' ? 'rgba(254, 98, 0, 0.08)' : 'transparent',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (activeMenu !== 'who-we-are') e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={(e) => {
                  if (activeMenu !== 'who-we-are') e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Who we are</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeMenu === 'who-we-are' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                    color: activeMenu === 'who-we-are' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>
            </div>

            {/* 3. Insights */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('insights')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'insights')}
                aria-expanded={activeMenu === 'insights'}
                aria-haspopup="true"
                style={{
                  color:
                    activeMenu === 'insights' || currentPage === 'insights' || currentPage === 'blog' || currentPage === 'company-updates'
                      ? '#fe6200'
                      : '#000000',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  backgroundColor: activeMenu === 'insights' ? 'rgba(254, 98, 0, 0.08)' : 'transparent',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (activeMenu !== 'insights') e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={(e) => {
                  if (activeMenu !== 'insights') e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Insights</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeMenu === 'insights' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                    color: activeMenu === 'insights' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>
            </div>

            {/* 4. Case studies */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('case-studies')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'case-studies')}
                aria-expanded={activeMenu === 'case-studies'}
                aria-haspopup="true"
                style={{
                  color:
                    activeMenu === 'case-studies' || currentPage === 'portfolio' || currentPage === 'project'
                      ? '#fe6200'
                      : '#000000',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isScrolled ? '13.5px' : '15px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: isScrolled ? '5px 9px' : '8px 14px',
                  borderRadius: '8px',
                  backgroundColor:
                    activeMenu === 'case-studies' || currentPage === 'portfolio'
                      ? 'rgba(254, 98, 0, 0.08)'
                      : 'transparent',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (activeMenu !== 'case-studies' && currentPage !== 'portfolio') {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeMenu !== 'case-studies' && currentPage !== 'portfolio') {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Case studies</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeMenu === 'case-studies' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                    color: activeMenu === 'case-studies' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>
            </div>
          </nav>

          {/* Right CTA Button: REQUEST A DEMO (Sized proportionally within navbar bounds) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isScrolled ? '10px' : '14px', flexShrink: 0 }}>
            <button
              onClick={() => window.open(DEMO_FORM_URL, '_blank', 'noopener,noreferrer')}
              className="desktop-send-btn"
              style={{
                height: isScrolled ? '36px' : '40px',
                paddingInline: isScrolled ? '16px' : '20px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                lineHeight: 1,
                borderRadius: '8px',
                backgroundColor: '#fe6200',
                color: '#ffffff',
                border: 'none',
                boxShadow: '0 2px 6px rgba(254, 98, 0, 0.22)',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#cf5000';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(254, 98, 0, 0.32)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fe6200';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(254, 98, 0, 0.22)';
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
            >
              REQUEST A DEMO
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
                borderRadius: '8px',
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
              marginTop: isScrolled ? '12px' : '4px',
              borderRadius: '8px',
              border: '1px solid rgba(228, 226, 225, 0.85)',
              backgroundColor: 'rgba(251, 249, 245, 0.98)',
              backdropFilter: 'blur(32px) saturate(190%)',
              WebkitBackdropFilter: 'blur(32px) saturate(190%)',
              boxShadow: '0 28px 70px -15px rgba(32, 11, 0, 0.14), 0 4px 14px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.26s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'auto',
              overflow: 'hidden',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'margin-top 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', marginBottom: '16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
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
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', marginBottom: '16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
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
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', marginBottom: '16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
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
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', marginBottom: '16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
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
              marginTop: isScrolled ? '12px' : '4px',
              borderRadius: '8px',
              border: '1px solid rgba(228, 226, 225, 0.85)',
              backgroundColor: 'rgba(251, 249, 245, 0.98)',
              backdropFilter: 'blur(32px) saturate(190%)',
              WebkitBackdropFilter: 'blur(32px) saturate(190%)',
              boxShadow: '0 28px 70px -15px rgba(32, 11, 0, 0.14), 0 4px 14px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.26s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'auto',
              overflow: 'hidden',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'margin-top 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
                  borderRadius: '8px',
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
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #f0ece2 0%, #fbf9f5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(254, 98, 0, 0.2)', border: '1px solid rgba(254, 98, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fe6200' }} aria-hidden="true">
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
                  borderRadius: '8px',
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
                    borderRadius: '8px',
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
              marginTop: isScrolled ? '12px' : '4px',
              borderRadius: '8px',
              border: '1px solid rgba(228, 226, 225, 0.85)',
              backgroundColor: 'rgba(251, 249, 245, 0.98)',
              backdropFilter: 'blur(32px) saturate(190%)',
              WebkitBackdropFilter: 'blur(32px) saturate(190%)',
              boxShadow: '0 28px 70px -15px rgba(32, 11, 0, 0.14), 0 4px 14px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.26s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'auto',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'margin-top 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Left Column: 6 Vertical Links in crisp black #000000 */}
            <div
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: '#fbf9f5',
                borderRight: '1px solid #e4e2e1',
              }}
            >
              {[
                { title: 'About Us', page: 'about-us' as const },
                { title: 'Leadership', page: 'leaders' as const },
                // { title: 'Careers', page: 'careers' as const }, // Commented out per user request; easily restored by uncommenting
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
                  Neominds Tech Hub has been providing services to Canopy for four years. Their skilled engineers understand product needs, deliver quality platform increments, and meet evolving deadlines with engineering discipline.
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

        {/* ========================================================
            DROPDOWN 4: CASE STUDIES
            Left: 6 Featured Projects | Right: Spotlight & View All CTA
            ======================================================== */}
        {activeMenu === 'case-studies' && (
          <div
            style={{
              width: 'min(94%, 820px)',
              maxWidth: '820px',
              marginTop: isScrolled ? '12px' : '4px',
              borderRadius: '8px',
              border: '1px solid rgba(228, 226, 225, 0.85)',
              backgroundColor: 'rgba(251, 249, 245, 0.98)',
              backdropFilter: 'blur(32px) saturate(190%)',
              WebkitBackdropFilter: 'blur(32px) saturate(190%)',
              boxShadow: '0 28px 70px -15px rgba(32, 11, 0, 0.14), 0 4px 14px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.26s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'auto',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'margin-top 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={() => handleMouseEnter('case-studies')}
            onMouseLeave={handleMouseLeave}
          >
            {/* Left Column: 6 Featured Case Studies */}
            <div
              style={{
                padding: '24px 28px',
                borderRight: '1px solid #e4e2e1',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#fe6200',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                Featured Case Studies
              </div>

              {[
                { id: 'mindspace-mobile-app', client: 'Mindspace.ai', title: 'Healthcare Telehealth & Biometrics App', tag: 'Healthcare' },
                { id: 'authenticom-ai-etl', client: 'Authenticom', title: 'Automotive Data Ingestion Platform', tag: 'Enterprise ETL' },
                { id: 'fundbot-sql-chatbot', client: 'FundBot', title: 'Natural Language AI SQL Financial Engine', tag: 'FinTech AI' },
                { id: 'trubridge-medical-ai', client: 'TruBridge', title: 'Automated Medical Coding & Claims', tag: 'HealthTech' },
                { id: 'adventr', client: 'Adventr', title: 'Interactive Smart-Video Generation Suite', tag: 'Media AI' },
                { id: 'flooring-inc-dashboard', client: 'Flooring Inc', title: 'E-Commerce Inventory Telemetry', tag: 'Analytics' },
              ].map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => navigateToPage('project', cs.id)}
                  style={{
                    cursor: 'pointer',
                    padding: '6px 8px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(254, 98, 0, 0.06)';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{cs.client}</span>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#fe6200', backgroundColor: 'rgba(254, 98, 0, 0.1)', padding: '2px 7px', borderRadius: '8px' }}>
                      {cs.tag}
                    </span>
                  </div>
                  <span style={{ fontSize: '12.5px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {cs.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column: Case Studies Spotlight & All Portfolio Link */}
            <div
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(254, 98, 0, 0.03)',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#fe6200',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  Proven Engineering Impact
                </div>
                <h4
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1.35,
                    margin: '0 0 10px 0',
                    letterSpacing: '-0.015em',
                  }}
                >
                  Solutions engineered for scale and production reliability
                </h4>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: '#475569',
                    margin: 0,
                  }}
                >
                  From 15,000+ synchronized dealerships and HIPAA telehealth to real-time AI SQL engines, explore how we partner with product leaders to deliver measurable business velocity.
                </p>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => navigateToPage('portfolio')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '12px 18px',
                    borderRadius: '8px',
                    backgroundColor: '#fe6200',
                    color: '#ffffff',
                    border: 'none',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(254, 98, 0, 0.25)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e05600';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fe6200';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Explore All Case Studies</span>
                  <ArrowRight size={16} />
                </button>
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
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100dvh',
            maxHeight: '100dvh',
            backgroundColor: '#fbf9f5',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 20px 36px',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
          }}
        >
          {/* Mobile Header Top */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src="/images/neominds-logo.png"
                alt="NeoMinds"
                style={{ height: '26px', width: 'auto', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#000000', fontFamily: "'DM Sans', sans-serif", letterSpacing: '-0.025em' }}>
                Neominds Tech Hub
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
                id="mobile-trigger-what-we-do"
                aria-expanded={mobileExpandedSection === 'what-we-do'}
                aria-controls="mobile-section-what-we-do"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'what-we-do' ? null : 'what-we-do')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: mobileExpandedSection === 'what-we-do' ? '#fe6200' : '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  borderBottom: '1px solid #e4e2e1',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>What we do</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'what-we-do' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s',
                    color: mobileExpandedSection === 'what-we-do' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>

              <div
                id="mobile-section-what-we-do"
                role="region"
                aria-labelledby="mobile-trigger-what-we-do"
                className={`nm-mobile-accordion-panel ${mobileExpandedSection === 'what-we-do' ? 'is-expanded' : ''}`}
              >
                <div className="nm-mobile-accordion-inner">
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

                    <div
                      onClick={() => navigateToPage('services')}
                      style={{ color: '#fe6200', fontSize: '14px', fontWeight: 700, cursor: 'pointer', paddingTop: '4px' }}
                    >
                      Explore All 15 Services →
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Industries (Separated as requested) */}
            <div style={{ borderBottom: '1px solid #e4e2e1' }}>
              <button
                id="mobile-trigger-industries"
                aria-expanded={mobileExpandedSection === 'industries'}
                aria-controls="mobile-section-industries"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'industries' ? null : 'industries')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: mobileExpandedSection === 'industries' || currentPage === 'industries' ? '#fe6200' : '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>Industries</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'industries' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s',
                    color: mobileExpandedSection === 'industries' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>

              <div
                id="mobile-section-industries"
                role="region"
                aria-labelledby="mobile-trigger-industries"
                className={`nm-mobile-accordion-panel ${mobileExpandedSection === 'industries' ? 'is-expanded' : ''}`}
              >
                <div className="nm-mobile-accordion-inner">
                  <div style={{ padding: '8px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div onClick={() => navigateToPage('industries')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Enterprise Systems</div>
                    <div onClick={() => navigateToPage('industries')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Financial Tech (FinTech)</div>
                    <div onClick={() => navigateToPage('industries')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Healthcare & Life Sciences</div>
                    <div onClick={() => navigateToPage('industries')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Retail & E-Commerce</div>
                    <div onClick={() => navigateToPage('industries')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Education & EdTech</div>
                    <div onClick={() => navigateToPage('industries')} style={{ color: '#fe6200', fontSize: '15px', fontWeight: 700, cursor: 'pointer', marginTop: '4px' }}>
                      Explore All Industries →
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Technology (Separated as requested) */}
            <div style={{ borderBottom: '1px solid #e4e2e1' }}>
              <button
                id="mobile-trigger-technology"
                aria-expanded={mobileExpandedSection === 'technology'}
                aria-controls="mobile-section-technology"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'technology' ? null : 'technology')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: mobileExpandedSection === 'technology' || currentPage === 'technology' ? '#fe6200' : '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>Technology</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'technology' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s',
                    color: mobileExpandedSection === 'technology' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>

              <div
                id="mobile-section-technology"
                role="region"
                aria-labelledby="mobile-trigger-technology"
                className={`nm-mobile-accordion-panel ${mobileExpandedSection === 'technology' ? 'is-expanded' : ''}`}
              >
                <div className="nm-mobile-accordion-inner">
                  <div style={{ padding: '8px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div onClick={() => navigateToPage('technology')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Web Architectures (React, Next.js)</div>
                    <div onClick={() => navigateToPage('technology')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>AI & Agentic Systems (Python, LangChain)</div>
                    <div onClick={() => navigateToPage('technology')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Machine Learning & Model Serving</div>
                    <div onClick={() => navigateToPage('technology')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>PostgreSQL & High-Speed Vector DBs</div>
                    <div onClick={() => navigateToPage('technology')} style={{ color: '#fe6200', fontSize: '15px', fontWeight: 700, cursor: 'pointer', marginTop: '4px' }}>
                      Explore Full Tech Stack →
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Who we are */}
            <div>
              <button
                id="mobile-trigger-who-we-are"
                aria-expanded={mobileExpandedSection === 'who-we-are'}
                aria-controls="mobile-section-who-we-are"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'who-we-are' ? null : 'who-we-are')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: mobileExpandedSection === 'who-we-are' ? '#fe6200' : '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  borderBottom: '1px solid #e4e2e1',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>Who we are</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'who-we-are' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s',
                    color: mobileExpandedSection === 'who-we-are' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>

              <div
                id="mobile-section-who-we-are"
                role="region"
                aria-labelledby="mobile-trigger-who-we-are"
                className={`nm-mobile-accordion-panel ${mobileExpandedSection === 'who-we-are' ? 'is-expanded' : ''}`}
              >
                <div className="nm-mobile-accordion-inner">
                  <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div onClick={() => navigateToPage('about-us')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>About Us</div>
                    <div onClick={() => navigateToPage('leaders')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Leadership</div>
                    {/* <div onClick={() => navigateToPage('careers')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Careers</div> */}
                    <div onClick={() => navigateToPage('certification')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Certification</div>
                    <div onClick={() => navigateToPage('contacts')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Contact</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Insights */}
            <div>
              <button
                id="mobile-trigger-insights"
                aria-expanded={mobileExpandedSection === 'insights'}
                aria-controls="mobile-section-insights"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'insights' ? null : 'insights')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: mobileExpandedSection === 'insights' ? '#fe6200' : '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  borderBottom: '1px solid #e4e2e1',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>Insights & Publications</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'insights' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s',
                    color: mobileExpandedSection === 'insights' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>

              <div
                id="mobile-section-insights"
                role="region"
                aria-labelledby="mobile-trigger-insights"
                className={`nm-mobile-accordion-panel ${mobileExpandedSection === 'insights' ? 'is-expanded' : ''}`}
              >
                <div className="nm-mobile-accordion-inner">
                  <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div onClick={() => navigateToPage('blog')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Blog</div>
                    <div onClick={() => navigateToPage('company-updates')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Company Updates</div>
                    <div onClick={() => navigateToPage('insights')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>All Insights Hub</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Case studies */}
            <div style={{ borderBottom: '1px solid #e4e2e1' }}>
              <button
                id="mobile-trigger-case-studies"
                aria-expanded={mobileExpandedSection === 'case-studies'}
                aria-controls="mobile-section-case-studies"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'case-studies' ? null : 'case-studies')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: mobileExpandedSection === 'case-studies' || currentPage === 'portfolio' ? '#fe6200' : '#000000',
                  fontSize: '17px',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>Case studies</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'case-studies' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s',
                    color: mobileExpandedSection === 'case-studies' ? '#fe6200' : '#000000',
                    flexShrink: 0,
                  }}
                />
              </button>

              <div
                id="mobile-section-case-studies"
                role="region"
                aria-labelledby="mobile-trigger-case-studies"
                className={`nm-mobile-accordion-panel ${mobileExpandedSection === 'case-studies' ? 'is-expanded' : ''}`}
              >
                <div className="nm-mobile-accordion-inner">
                  <div style={{ padding: '8px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div onClick={() => navigateToPage('project', 'mindspace-mobile-app')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Mindspace.ai Healthcare App</div>
                    <div onClick={() => navigateToPage('project', 'authenticom-ai-etl')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Authenticom Automotive Data</div>
                    <div onClick={() => navigateToPage('project', 'fundbot-sql-chatbot')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>FundBot SQL Financial AI</div>
                    <div onClick={() => navigateToPage('project', 'trubridge-medical-ai')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>TruBridge Medical Coding</div>
                    <div onClick={() => navigateToPage('project', 'flooring-inc-dashboard')} style={{ color: '#2b2b2b', fontSize: '15px', cursor: 'pointer' }}>Flooring Inc Inventory Analytics</div>
                    <div onClick={() => navigateToPage('portfolio')} style={{ color: '#fe6200', fontSize: '15px', fontWeight: 700, cursor: 'pointer', marginTop: '4px' }}>Explore All Case Studies →</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Footer Send Request Button */}
          <div style={{ marginTop: 'auto', paddingTop: '28px', flexShrink: 0 }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.open(DEMO_FORM_URL, '_blank', 'noopener,noreferrer');
              }}
              style={{
                width: '100%',
                height: '46px',
                backgroundColor: '#fe6200',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
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
          0% {
            opacity: 0;
            transform: translateY(-8px) scale(0.988);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .nm-mobile-accordion-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
          opacity: 0;
          visibility: hidden;
        }
        .nm-mobile-accordion-panel.is-expanded {
          grid-template-rows: 1fr;
          opacity: 1;
          visibility: visible;
        }
        body.nm-team-profile-open header,
        body.nm-modal-open header {
          transform: translate3d(0, -160%, 0) !important;
          opacity: 0 !important;
          pointer-events: none !important;
          transition: transform 0.3s ease, opacity 0.3s ease !important;
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
          .nm-header-capsule {
            background-color: #fbf9f5 !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
          }
        }
      `}</style>
    </>
  );
};
