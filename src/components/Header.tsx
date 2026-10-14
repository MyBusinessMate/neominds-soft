import React, { useEffect, useState, useRef } from 'react';
import {
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Mail,
} from 'lucide-react';

export type PageType =
  | 'home'
  | 'insights'
  | 'blog'
  | 'company-updates'
  | 'portfolio'
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

  // Column 1: Our services
  const ourServicesList = [
    { title: 'Product discovery', page: 'product-discovery' as const },
    { title: 'Product engineering', page: 'product-engineering' as const },
    { title: 'Cloud', page: 'devops' as const },
    { title: 'Data', page: 'analytics-dashboard' as const },
    { title: 'Design', page: 'ui-ux-design' as const, hasExternalArrow: true },
  ];

  // Column 2: Artificial intelligence
  const artificialIntelligenceList = [
    { title: 'AI Product Engineering', page: 'ai-product-engineering' as const, hasExternalArrow: true },
    { title: 'Applied AI', page: 'applied-ai' as const },
    { title: 'AI Agent Systems', page: 'ai-agent-systems' as const },
    { title: 'Intelligent Automation', page: 'intelligent-automation' as const },
    { title: 'Generative AI', page: 'generative-ai' as const },
  ];

  // Column 3: Fintech
  const fintechList = [
    { title: 'Digital Banking', page: 'digital-banking' as const },
    { title: 'Payment Solutions', page: 'payment-solutions' as const },
    { title: 'Lending & Credit Platforms', page: 'lending-credit-platforms' as const },
    { title: 'Investment & Wealth Management', page: 'investment-wealth-management' as const },
    { title: 'Financial Analytics', page: 'financial-analytics' as const },
    { title: 'Fraud & Risk Management', page: 'fraud-risk-management' as const },
  ];

  // Column 4: Healthcare
  const healthcareList = [
    { title: 'Healthcare Management Software', page: 'healthcare-management-software' as const },
    { title: 'Telemedicine Platforms', page: 'telemedicine-platforms' as const },
    { title: 'Patient Engagement', page: 'patient-engagement' as const },
    { title: 'Medical AI Solutions', page: 'medical-ai-solutions' as const },
    { title: 'Healthcare Analytics', page: 'healthcare-analytics' as const },
    { title: 'Healthcare Automation', page: 'healthcare-automation' as const },
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
          paddingTop: isScrolled ? '12px' : '16px',
          paddingInline: isScrolled ? '16px' : 'clamp(16px, 3.5vw, 40px)',
          boxSizing: 'border-box',
          transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -140%, 0)',
          opacity: isVisible ? 1 : 0,
          willChange: 'transform, opacity',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, padding-top 0.4s ease, padding-inline 0.4s ease',
        }}
      >
        {/* ========================================================
            FLOATING NAVBAR PILL WITH TOP GAP
            Floating rounded bar with top gap instead of sticking to the top edge.
            When scrolled, smoothly shrinks to compact pill!
            ======================================================== */}
        <div
          style={{
            width: isScrolled ? 'min(58%, 640px)' : 'min(96%, 1320px)',
            maxWidth: isScrolled ? '640px' : '1320px',
            height: isScrolled ? '46px' : '64px',
            borderRadius: isScrolled ? '8px' : '10px',
            backgroundColor: isScrolled ? 'rgba(11, 14, 20, 0.98)' : 'rgba(8, 10, 15, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid #1e2430',
            boxShadow: isScrolled
              ? '0 16px 36px rgba(0, 0, 0, 0.75)'
              : '0 10px 30px rgba(0, 0, 0, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: isScrolled ? '12px' : 'clamp(20px, 3vw, 44px)',
            pointerEvents: 'auto',
            transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Left Brand Logo: Matches Screenshot 1 & 2 */}
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
            {isScrolled ? (
              /* Shrunk Scrolled State: Blue Square Icon with 5 white horizontal lines */
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#2258e7',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2.5px',
                  boxShadow: '0 2px 6px rgba(34, 88, 231, 0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ height: '2px', backgroundColor: '#ffffff', width: '16px', borderRadius: '1px' }} />
                <span style={{ height: '2px', backgroundColor: '#ffffff', width: '16px', borderRadius: '1px' }} />
                <span style={{ height: '2px', backgroundColor: '#ffffff', width: '16px', borderRadius: '1px' }} />
                <span style={{ height: '2px', backgroundColor: '#ffffff', width: '16px', borderRadius: '1px' }} />
                <span style={{ height: '2px', backgroundColor: '#ffffff', width: '16px', borderRadius: '1px' }} />
              </div>
            ) : (
              /* Unscrolled Full-Width State: White 5-bar icon + "Neominds" text */
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px', width: '17px' }}>
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
                  <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                  }}
                >
                  Neominds TechHub
                </span>
              </div>
            )}
          </div>

          {/* Center Navigation Links (Pure Text with subtle arrow indicators) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: isScrolled ? '20px' : 'clamp(28px, 2.6vw, 42px)',
              height: '100%',
              transition: 'gap 0.3s ease',
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
                  color: activeMenu === 'what-we-do' ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: isScrolled ? '13px' : '14px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 2px',
                  transition: 'color 0.2s, font-size 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>What we do</span>
                <ChevronRight
                  size={12}
                  style={{
                    transform: activeMenu === 'what-we-do' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: activeMenu === 'what-we-do' ? '#2258e7' : 'inherit',
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
                  color: activeMenu === 'who-we-are' ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: isScrolled ? '13px' : '14px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 2px',
                  transition: 'color 0.2s, font-size 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>Who we are</span>
                <ChevronRight
                  size={12}
                  style={{
                    transform: activeMenu === 'who-we-are' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: activeMenu === 'who-we-are' ? '#2258e7' : 'inherit',
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
                      : 'rgba(255, 255, 255, 0.85)',
                  fontSize: isScrolled ? '13px' : '14px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 2px',
                  transition: 'color 0.2s, font-size 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>Insights</span>
                <ChevronRight
                  size={12}
                  style={{
                    transform: activeMenu === 'insights' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: activeMenu === 'insights' ? '#2258e7' : 'inherit',
                  }}
                />
              </button>
            </div>

            {/* 4. Case studies */}
            <button
              onClick={() => navigateToPage('portfolio')}
              style={{
                color: currentPage === 'portfolio' ? '#2258e7' : 'rgba(255, 255, 255, 0.85)',
                fontSize: isScrolled ? '13px' : '14px',
                fontWeight: 500,
                padding: '6px 2px',
                transition: 'color 0.2s, font-size 0.3s ease',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = currentPage === 'portfolio' ? '#2258e7' : 'rgba(255, 255, 255, 0.85)')}
            >
              Case studies
            </button>
          </nav>

          {/* Right CTA Button & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isScrolled ? (
              /* Shrunk Scrolled State: Blue Square Envelope Icon button */
              <button
                onClick={() => navigateToPage('contacts')}
                className="desktop-send-btn"
                title="Send request"
                aria-label="Send request"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                  backgroundColor: '#2258e7',
                  color: '#ffffff',
                  border: 'none',
                  boxShadow: '0 2px 6px rgba(34, 88, 231, 0.4)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <Mail size={16} color="#ffffff" />
              </button>
            ) : (
              /* Unscrolled Full-Width State: Full Blue "Send request" pill button */
              <button
                onClick={() => navigateToPage('contacts')}
                className="desktop-send-btn"
                style={{
                  height: '36px',
                  paddingInline: '18px',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: 1,
                  borderRadius: '4px',
                  backgroundColor: '#2258e7',
                  color: '#ffffff',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(34, 88, 231, 0.35)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
              >
                Get a free consultation
              </button>
            )}

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
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Open Mobile Menu"
            >
              <Menu size={isScrolled ? 16 : 18} />
            </button>
          </div>
        </div>

        {/* ========================================================
            DROPDOWN 1: WHAT WE DO (EXACT 4-COLUMN MATCHING USER IMAGE 2)
            Columns: Our services | Artificial intelligence | Fintech | Healthcare
            ======================================================== */}
        {activeMenu === 'what-we-do' && (
          <div
            style={{
              width: 'min(94%, 1020px)',
              maxWidth: '1020px',
              marginTop: '8px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: 'rgba(12, 14, 18, 0.97)',
              backdropFilter: 'blur(26px)',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05)',
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
              {/* Column 1: Our services */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  Our services
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

              {/* Column 2: Artificial intelligence */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  Artificial intelligence
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

              {/* Column 3: Fintech */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  Fintech
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

              {/* Column 4: Healthcare */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                  Healthcare
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
              marginTop: '8px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: 'rgba(12, 14, 18, 0.97)',
              backdropFilter: 'blur(26px)',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05)',
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
                  borderRadius: '6px',
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
                    borderRadius: '6px',
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
                    <div style={{ width: '30px', height: '30px', borderRadius: '6px', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: 700 }}>
                      🤖
                    </div>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px', fontWeight: 300 }}>≠</span>
                    <div style={{ width: '30px', height: '30px', borderRadius: '6px', backgroundColor: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px' }}>
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
                  borderRadius: '6px',
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
                    borderRadius: '6px',
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
            DROPDOWN 3: WHO WE ARE
            ======================================================== */}
        {activeMenu === 'who-we-are' && (
          <div
            style={{
              width: 'min(90%, 580px)',
              maxWidth: '580px',
              marginTop: '8px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: 'rgba(12, 14, 18, 0.97)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              <div
                onClick={() => navigateToPage('about-us')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                About Us
              </div>

              <div
                onClick={() => navigateToPage('leaders')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Leadership
              </div>

              <div
                onClick={() => navigateToPage('careers')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Careers
              </div>

              <div
                onClick={() => navigateToPage('certification')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Certification
              </div>

              <div
                onClick={() => navigateToPage('contacts')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Contact
              </div>

              <div
                onClick={() => navigateToPage('security-policy')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Security & Compliance
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
                  {/* Sub-block: Artificial Intelligence */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Artificial Intelligence
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

                  {/* Sub-block: Fintech */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Fintech
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

                  {/* Sub-block: Healthcare */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Healthcare
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
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'who-we-are' ? null : 'who-we-are')}
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
                <span>Who we are</span>
                <ChevronRight
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'who-we-are' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: mobileExpandedSection === 'who-we-are' ? '#2258e7' : 'inherit',
                  }}
                />
              </button>

              {mobileExpandedSection === 'who-we-are' && (
                <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div
                    onClick={() => navigateToPage('about-us')}
                    style={{ color: currentPage === 'about-us' ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '15px', cursor: 'pointer' }}
                  >
                    About Us
                  </div>
                  <div
                    onClick={() => navigateToPage('leaders')}
                    style={{ color: currentPage === 'leaders' ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '15px', cursor: 'pointer' }}
                  >
                    Leadership
                  </div>
                  <div
                    onClick={() => navigateToPage('careers')}
                    style={{ color: currentPage === 'careers' ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '15px', cursor: 'pointer' }}
                  >
                    Careers
                  </div>
                  <div
                    onClick={() => navigateToPage('certification')}
                    style={{ color: currentPage === 'certification' ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '15px', cursor: 'pointer' }}
                  >
                    Certification
                  </div>
                  <div
                    onClick={() => navigateToPage('contacts')}
                    style={{ color: currentPage === 'contacts' ? '#2258e7' : 'rgba(255,255,255,0.8)', fontSize: '15px', cursor: 'pointer' }}
                  >
                    Contact
                  </div>
                </div>
              )}
            </div>

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
