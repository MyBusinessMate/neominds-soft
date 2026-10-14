import React, { useEffect, useState, useRef } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

export type PageType =
  | 'home'
  | 'insights'
  | 'blog'
  | 'company-updates'
  | 'portfolio'
  | 'about-us'
  | 'contacts'
  | 'privacy-policy'
  | 'cookie-policy'
  | 'security-policy'
  | 'software-development'
  | 'ai-development'
  | 'mobile-app-development'
  | 'web-cms-development'
  | 'ecommerce-development'
  | 'devops'
  | 'ai-agents'
  | 'ai-automations'
  | 'chatbot-videobot'
  | 'chatbot-video-bot-development'
  | 'analytics-dashboard'
  | 'technical-support'
  | 'product-discovery'
  | 'product-engineering'
  | 'business-analysis'
  | 'it-consulting'
  | 'ui-ux-design'
  // Fintech
  | 'digital-banking'
  | 'payment-solutions'
  | 'lending-credit-platforms'
  | 'investment-wealth-management'
  | 'financial-analytics'
  | 'fraud-risk-management'
  // Healthcare
  | 'healthcare-management-software'
  | 'telemedicine-platforms'
  | 'patient-engagement'
  | 'medical-ai-solutions'
  | 'healthcare-analytics'
  | 'healthcare-automation'
  // AI
  | 'ai-product-engineering'
  | 'applied-ai'
  | 'ai-agent-systems'
  | 'intelligent-automation'
  | 'generative-ai'
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
      setIsScrolled(scrolled);
      setIsVisible(true);

      // Close open dropdowns during active scroll
      if (activeMenu) {
        setActiveMenu(null);
      }
    };

    // Initial check on mount
    const initialScrollY = window.scrollY || document.documentElement.scrollTop;
    setIsScrolled(initialScrollY > 30);
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
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menu: 'what-we-do' | 'who-we-are' | 'insights') => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleMenuToggle = (e: React.MouseEvent, menu: 'what-we-do' | 'who-we-are' | 'insights') => {
    e.stopPropagation();
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const navigateToPage = (page: PageType) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (onSelectPage) {
      onSelectPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    navigateToPage('home');
    onNavigate('#hero');
  };

  /* =========================================================================
     NAVBAR WHAT WE DO - 4 CLEAN COLUMNS (MATCHES USER IMAGE 2)
     ========================================================================= */

  // Column 1: Neominds services
  const ourServicesList = [
    { title: 'Web Development', page: 'web-cms-development' as const, hasExternalArrow: false },
    { title: 'Cross-Platform Development', page: 'mobile-app-development' as const, hasExternalArrow: false },
    { title: 'Mobile App Development', page: 'mobile-app-development' as const, hasExternalArrow: false },
    { title: 'Legacy App Modernization', page: 'software-development' as const, hasExternalArrow: false },
    { title: 'E-Commerce Software', page: 'ecommerce-development' as const, hasExternalArrow: false },
    { title: 'Custom Software', page: 'software-development' as const, hasExternalArrow: false },
  ];

  // Column 2: AI and cloud services
  const artificialIntelligenceList = [
    { title: 'AI Integration', page: 'ai-development' as const, hasExternalArrow: true },
    { title: 'AI Automation', page: 'ai-automations' as const },
    { title: 'AI-Native Software', page: 'ai-product-engineering' as const },
    { title: 'Cloud Apps Development', page: 'devops' as const },
    { title: 'SaaS Development', page: 'product-engineering' as const },
  ];

  // Column 3: Technology capabilities
  const fintechList = [
    { title: 'Artificial Intelligence', page: 'ai-development' as const },
    { title: 'Machine Learning', page: 'applied-ai' as const },
    { title: 'Web Development', page: 'web-cms-development' as const },
    { title: 'Database', page: 'analytics-dashboard' as const },
    { title: 'Cloud Computing', page: 'devops' as const },
    { title: 'Data Analytics', page: 'analytics-dashboard' as const },
    { title: 'Automation', page: 'ai-automations' as const },
  ];

  // Column 4: Industries
  const healthcareList = [
    { title: 'E-Commerce', page: 'ecommerce-development' as const },
    { title: 'Education', page: 'software-development' as const },
    { title: 'Healthcare', page: 'healthcare-management-software' as const },
    { title: 'Real Estate', page: 'software-development' as const },
    { title: 'Enterprise', page: 'product-engineering' as const },
    { title: 'Retail', page: 'ecommerce-development' as const },
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
          backgroundColor: isScrolled || activeMenu ? 'rgba(21, 23, 27, 0.98)' : 'transparent',
          backdropFilter: isScrolled || activeMenu ? 'blur(16px)' : 'none',
          borderBottom: isScrolled || activeMenu ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
          boxShadow: 'none',
          boxSizing: 'border-box',
          transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -140%, 0)',
          opacity: isVisible ? 1 : 0,
          willChange: 'transform, opacity',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, background-color 0.25s ease',
        }}
      >
        {/* ========================================================
            EFFECTIVESOFT ARCHITECTURAL FULL-WIDTH NAVBAR
            Pinned clean edge-to-edge bar with zero border radius & zero shadows
            ======================================================== */}
        <div
          style={{
            width: '100%',
            maxWidth: '1320px',
            height: '64px',
            borderRadius: '0px',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: 'clamp(20px, 3.5vw, 44px)',
            pointerEvents: 'auto',
          }}
        >
          {/* Left Brand Logo: Matches EffectiveSoft structure with Neominds identity */}
          <div
            onClick={handleLogoClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* EffectiveSoft Authentic 5-Horizontal-Bars Vector Icon */}
              <svg width="24" height="21" viewBox="0 0 32 28" fill="#ffffff">
                <path d="M6.857 0c-.89 0-1.613.705-1.613 1.575S5.966 3.15 6.857 3.15H29.81c.891 0 1.614-.705 1.614-1.575S30.7 0 29.809 0H6.857ZM3.934 7.76c0-.87.723-1.575 1.614-1.575H28.5c.89 0 1.613.705 1.613 1.575s-.722 1.575-1.613 1.575H5.548c-.891 0-1.614-.705-1.614-1.575ZM4.235 12.37c-.892 0-1.614.706-1.614 1.576 0 .87.722 1.575 1.614 1.575h22.951c.892 0 1.614-.706 1.614-1.575 0-.87-.723-1.575-1.614-1.575H4.235ZM1.31 20.13c0-.87.722-1.574 1.613-1.574h22.952c.891 0 1.614.705 1.614 1.575s-.723 1.575-1.614 1.575H2.923c-.89 0-1.613-.706-1.613-1.575ZM0 26.316c0-.87.723-1.575 1.614-1.575h22.951c.892 0 1.614.705 1.614 1.575s-.722 1.575-1.613 1.575H1.613C.723 27.89 0 27.186 0 26.316Z" />
              </svg>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                }}
              >
                Neominds
              </span>
            </div>
          </div>

          {/* Center Navigation Links (Pure Text with subtle arrow indicators) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(24px, 2.5vw, 36px)',
              height: '100%',
            }}
            className="desktop-nav"
          >
            {/* 1. What we do */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('what-we-do')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'what-we-do')}
                style={{
                  color: activeMenu === 'what-we-do' ? '#2258e7' : '#ffffff',
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
                <ChevronRight
                  size={13}
                  style={{
                    transform: activeMenu === 'what-we-do' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: activeMenu === 'what-we-do' ? '#2258e7' : 'rgba(255, 255, 255, 0.7)',
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
                style={{
                  color: activeMenu === 'who-we-are' ? '#2258e7' : '#ffffff',
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
                  size={13}
                  style={{
                    transform: activeMenu === 'who-we-are' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: activeMenu === 'who-we-are' ? '#2258e7' : 'rgba(255, 255, 255, 0.7)',
                  }}
                />
              </button>
            </div>

            {/* 3. Insights Dropdown Trigger */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('insights')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'insights')}
                style={{
                  color:
                    activeMenu === 'insights' || currentPage === 'insights' || currentPage === 'blog' || currentPage === 'company-updates'
                      ? '#2258e7'
                      : '#ffffff',
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
                <ChevronRight
                  size={13}
                  style={{
                    transform: activeMenu === 'insights' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: activeMenu === 'insights' ? '#2258e7' : 'rgba(255, 255, 255, 0.7)',
                  }}
                />
              </button>
            </div>

            {/* 4. Case studies */}
            <button
              onClick={() => navigateToPage('portfolio')}
              style={{
                color: currentPage === 'portfolio' ? '#2258e7' : '#ffffff',
                fontSize: '15px',
                fontWeight: 500,
                padding: '6px 0',
                transition: 'color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = currentPage === 'portfolio' ? '#2258e7' : '#ffffff')}
            >
              Case studies
            </button>
          </nav>

          {/* Right CTA Button & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => navigateToPage('contacts')}
              className="desktop-send-btn"
              style={{
                height: '40px',
                paddingInline: '24px',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: 1,
                borderRadius: '0px',
                backgroundColor: '#2258e7',
                color: '#ffffff',
                border: 'none',
                boxShadow: 'none',
                transition: 'background-color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#183c9e')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2258e7')}
            >
              Send request
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-hamburger"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Open Mobile Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* ========================================================
            DROPDOWN 1: WHAT WE DO (EXACT 4-COLUMN MATCHING USER IMAGE 2)
            Columns: Services | AI & Cloud | Technologies | Industries
            ======================================================== */}
        {activeMenu === 'what-we-do' && (
          <div
            style={{
              width: 'min(94%, 1020px)',
              maxWidth: '1020px',
              marginTop: '0px',
              borderRadius: '0px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: '#15171b',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.7)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                padding: '24px 32px 28px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px',
                boxSizing: 'border-box',
              }}
            >
              {/* Column 1: Services */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  Services
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {ourServicesList.map((item) => (
                    <div
                      key={item.page}
                      onClick={() => navigateToPage(item.page)}
                      style={{
                        cursor: 'pointer',
                        color: 'rgba(255, 255, 255, 0.88)',
                        fontSize: '13.5px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '3px 0',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#2258e7';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)';
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

              {/* Column 2: AI & Cloud */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  AI & Cloud
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {artificialIntelligenceList.map((item) => (
                    <div
                      key={item.page}
                      onClick={() => navigateToPage(item.page)}
                      style={{
                        cursor: 'pointer',
                        color: 'rgba(255, 255, 255, 0.88)',
                        fontSize: '13.5px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '3px 0',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#2258e7';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)';
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
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  Technologies
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {fintechList.map((item) => (
                    <div
                      key={item.page}
                      onClick={() => navigateToPage(item.page)}
                      style={{
                        cursor: 'pointer',
                        color: 'rgba(255, 255, 255, 0.88)',
                        fontSize: '13.5px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '3px 0',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#2258e7';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)';
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
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  Industries
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {healthcareList.map((item) => (
                    <div
                      key={item.page}
                      onClick={() => navigateToPage(item.page)}
                      style={{
                        cursor: 'pointer',
                        color: 'rgba(255, 255, 255, 0.88)',
                        fontSize: '13.5px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '3px 0',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#2258e7';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)';
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
            DROPDOWN 2: INSIGHTS (EXACT MATCH TO USER IMAGE 1)
            Left: Blog, Company updates | Center: Blog card | Right: Company update card
            ======================================================== */}
        {activeMenu === 'insights' && (
          <div
            style={{
              width: 'min(94%, 880px)',
              maxWidth: '880px',
              marginTop: '0px',
              borderRadius: '0px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: '#15171b',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.7)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
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
              {/* Left Column: Blog & Company updates links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '6px' }}>
                <div
                  onClick={() => navigateToPage('blog')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')}
                >
                  Blog
                </div>

                <div
                  onClick={() => navigateToPage('company-updates')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')}
                >
                  Company updates
                </div>

                <div
                  onClick={() => navigateToPage('insights')}
                  style={{
                    color: '#2258e7',
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

              {/* Center Column: Card 1 - Why AI projects fail in enterprises */}
              <div
                onClick={() => navigateToPage('blog')}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  borderRadius: '0px',
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Thumbnail Graphic (Blue AI schematic) */}
                <div
                  style={{
                    height: '130px',
                    width: '100%',
                    borderRadius: '0px',
                    background: 'linear-gradient(135deg, #091326 0%, #0c204c 50%, #1e3a8a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Schematic Icon Graphics matching reference image */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '0px', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: 700 }}>
                      🤖
                    </div>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px', fontWeight: 300 }}>≠</span>
                    <div style={{ width: '30px', height: '30px', borderRadius: '0px', backgroundColor: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px' }}>
                      ⚙️
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Why AI projects fail in enterprises: the implementation gap between pilots and production
                </div>
              </div>

              {/* Right Column: Card 2 - Notes from Data AI Conf 2026 */}
              <div
                onClick={() => navigateToPage('company-updates')}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  borderRadius: '0px',
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Thumbnail Photo (Conference hall photo collage) */}
                <div
                  style={{
                    height: '130px',
                    width: '100%',
                    borderRadius: '0px',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                />

                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  From AI hype to engineering discipline: notes from Data AI Conf 2026
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            DROPDOWN 3: WHO WE ARE (EXACT 1:1 MATCH TO USER IMAGE 1)
            Left: 5 vertical links | Right: Canopy client endorsement
            ======================================================== */}
        {activeMenu === 'who-we-are' && (
          <div
            style={{
              width: 'min(94%, 660px)',
              maxWidth: '660px',
              marginTop: '0px',
              borderRadius: '0px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: '#15171b',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.7)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '210px 1fr',
            }}
          >
            {/* Left Column: 5 Vertical Navigation Links matching Image 1 */}
            <div
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: '#15171b',
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {[
                { title: 'About us', page: 'about-us' as const },
                { title: 'Leadership', page: 'about-us' as const },
                { title: 'Experts', page: 'about-us' as const },
                { title: 'Careers', page: 'about-us' as const },
                { title: 'Certification', page: 'security-policy' as const },
              ].map((item) => (
                <div
                  key={item.title}
                  onClick={() => navigateToPage(item.page)}
                  style={{
                    cursor: 'pointer',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: 500,
                    transition: 'color 0.2s, transform 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2258e7';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* Right Column: Canopy Testimonial matching Image 1 */}
            <div
              style={{
                padding: '32px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'radial-gradient(ellipse at bottom right, rgba(34, 88, 231, 0.25) 0%, rgba(19, 22, 31, 0.98) 72%)',
              }}
            >
              <div>
                {/* Header with Quote Icon & Canopy Logo */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                    <path
                      d="M7.7 0C3.4 3.4 0 8.5 0 14.1C0 18.6 3.1 21.6 7.1 21.6C10.7 21.6 13.4 18.9 13.4 15.3C13.4 11.7 10.7 9 7.3 9C6.9 9 6.5 9.1 6.2 9.2C6.7 5.6 9.7 2.4 12.3 0.6L7.7 0ZM22.3 0C18 3.4 14.6 8.5 14.6 14.1C14.6 18.6 17.7 21.6 21.7 21.6C25.3 21.6 28 18.9 28 15.3C28 11.7 25.3 9 21.9 9C21.5 9 21.1 9.1 20.8 9.2C21.3 5.6 24.3 2.4 26.9 0.6L22.3 0Z"
                      fill="#25354f"
                    />
                  </svg>

                  {/* CANOPY Logo matching Image 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', textTransform: 'lowercase', fontFamily: 'var(--font-heading)' }}>
                      canopy
                    </span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginTop: '-4px' }}>
                      <path d="M2 14C2 7.37258 7.37258 2 14 2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Testimonial Quote from Image 1 */}
                <p
                  style={{
                    fontSize: '13.5px',
                    lineHeight: 1.6,
                    color: '#c2cbd8',
                    margin: 0,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Neominds has been providing services to Canopy for the last four years. Their skilled engineers understand our product needs, deliver quality platform increments following agile principles, respond flexibly to changes, and meet evolving deadlines. An external development team that remains steadfast in its commitment to service standards and business continuity is rare, and here Neominds have excelled.
                </p>
              </div>

              {/* Author & Role */}
              <div style={{ marginTop: '22px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  MATT HOBBS
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#8893a7',
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
          MOBILE NAVIGATION DRAWER
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
            backgroundColor: '#0c0e12',
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
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
              Neominds<span style={{ color: '#2258e7' }}>.</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* Mobile Navigation Accordions */}
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
                  color: '#ffffff',
                  fontSize: '17px',
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
                    color: mobileExpandedSection === 'what-we-do' ? '#2258e7' : 'inherit',
                  }}
                />
              </button>

              {mobileExpandedSection === 'what-we-do' && (
                <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Sub-block: Services */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Services
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {ourServicesList.map((srv) => (
                        <div
                          key={srv.page}
                          onClick={() => navigateToPage(srv.page)}
                          style={{ color: currentPage === srv.page ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '14px', cursor: 'pointer' }}
                        >
                          {srv.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-block: AI & Cloud */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', marginBottom: '8px' }}>
                      AI & Cloud
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {artificialIntelligenceList.map((srv) => (
                        <div
                          key={srv.page}
                          onClick={() => navigateToPage(srv.page)}
                          style={{ color: currentPage === srv.page ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '14px', cursor: 'pointer' }}
                        >
                          {srv.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-block: Technologies */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Technologies
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {fintechList.map((srv) => (
                        <div
                          key={srv.page}
                          onClick={() => navigateToPage(srv.page)}
                          style={{ color: currentPage === srv.page ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '14px', cursor: 'pointer' }}
                        >
                          {srv.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-block: Industries */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Industries
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {healthcareList.map((srv) => (
                        <div
                          key={srv.page}
                          onClick={() => navigateToPage(srv.page)}
                          style={{ color: currentPage === srv.page ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '14px', cursor: 'pointer' }}
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
            <button
              onClick={() => navigateToPage('about-us')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 0',
                color: currentPage === 'about-us' ? '#2258e7' : '#ffffff',
                fontSize: '17px',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>About us</span>
              <ChevronRight size={16} opacity={0.6} />
            </button>

            {/* Section 3: Insights Accordion */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'insights' ? null : 'insights')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: '#ffffff',
                  fontSize: '17px',
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
                    color: mobileExpandedSection === 'insights' ? '#2258e7' : 'inherit',
                  }}
                />
              </button>

              {mobileExpandedSection === 'insights' && (
                <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div
                    onClick={() => navigateToPage('blog')}
                    style={{ color: currentPage === 'blog' ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '15px', cursor: 'pointer' }}
                  >
                    Blog
                  </div>
                  <div
                    onClick={() => navigateToPage('company-updates')}
                    style={{ color: currentPage === 'company-updates' ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '15px', cursor: 'pointer' }}
                  >
                    Company Updates
                  </div>
                  <div
                    onClick={() => navigateToPage('insights')}
                    style={{ color: currentPage === 'insights' ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '15px', cursor: 'pointer' }}
                  >
                    All Insights Hub
                  </div>
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
                color: currentPage === 'portfolio' ? '#2258e7' : '#ffffff',
                fontSize: '17px',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              Send request
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
