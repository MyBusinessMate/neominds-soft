import React, { useState, useCallback, useEffect, Suspense, lazy } from 'react';
import { useLenis } from './hooks/useLenis';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header, PageType } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { IndustryRecognition } from './components/IndustryRecognition';
import { EngineeringBlobSection } from './components/EngineeringBlobSection';
import { DeliveryPrinciples } from './components/DeliveryPrinciples';
import { ServicesStack } from './components/ServicesStack';
import { CaseStudiesHorizontal } from './components/CaseStudiesHorizontal';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { LocationsSection } from './components/LocationsSection';
import { Footer } from './components/Footer';

// Lightweight Service Slugs & SEO
import { isServiceSlug } from './data/serviceSlugs';
import { updateHeadMetadata } from './utils/seo';

// UI Utilities & Banners
import { CookieConsent } from './components/CookieConsent';
import { Toast, ToastMessage } from './components/Toast';
import { CinematicScroll } from './components/lightswind/cinematic-scroll';

// Route Code Splitting: Lazy-Loaded Sub-Pages & Modals
const ServicePageContainer = lazy(() => import('./components/service/ServicePage'));
const AIServicesPage = lazy(() => import('./components/AIServicesPage').then((m) => ({ default: m.AIServicesPage })));
const AboutUsPage = lazy(() => import('./components/AboutUsPage').then((m) => ({ default: m.AboutUsPage })));
const BlogHubPage = lazy(() => import('./components/BlogHubPage').then((m) => ({ default: m.BlogHubPage })));
const BlogPostDetailPage = lazy(() => import('./components/BlogPostDetailPage').then((m) => ({ default: m.BlogPostDetailPage })));
const CompanyUpdatesPage = lazy(() => import('./components/CompanyUpdatesPage').then((m) => ({ default: m.CompanyUpdatesPage })));
const PortfolioPage = lazy(() => import('./components/PortfolioPage').then((m) => ({ default: m.PortfolioPage })));
const ProjectPage = lazy(() => import('./components/ProjectPage').then((m) => ({ default: m.ProjectPage })));
const ContactsPage = lazy(() => import('./components/ContactsPage').then((m) => ({ default: m.ContactsPage })));
const InsightsPage = lazy(() => import('./components/InsightsPage').then((m) => ({ default: m.InsightsPage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const CookiePolicyPage = lazy(() => import('./components/CookiePolicyPage').then((m) => ({ default: m.CookiePolicyPage })));
const SecurityPolicyPage = lazy(() => import('./components/SecurityPolicyPage').then((m) => ({ default: m.SecurityPolicyPage })));
const CareersPage = lazy(() => import('./components/CareersPage').then((m) => ({ default: m.CareersPage })));
const CertificationPage = lazy(() => import('./components/CertificationPage').then((m) => ({ default: m.CertificationPage })));
const LeadershipPage = lazy(() => import('./components/LeadershipPage').then((m) => ({ default: m.LeadershipPage })));
const ServicesHubPage = lazy(() => import('./components/ServicesHubPage').then((m) => ({ default: m.ServicesHubPage })));
const IndustriesHubPage = lazy(() => import('./components/IndustriesHubPage').then((m) => ({ default: m.IndustriesHubPage })));
const NotFoundPage = lazy(() => import('./components/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

// Lazy Modals & Palettes
const CommandPalette = lazy(() => import('./components/CommandPalette').then((m) => ({ default: m.CommandPalette })));
const CaseStudyModal = lazy(() => import('./components/CaseStudyModal').then((m) => ({ default: m.CaseStudyModal })));
const LegalModal = lazy(() => import('./components/LegalModal').then((m) => ({ default: m.LegalModal })));

// Clean Suspense Fallback Loader
const PageLoader: React.FC = () => (
  <div
    style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
    }}
  >
    <div
      style={{
        width: '32px',
        height: '32px',
        border: '3px solid rgba(254, 98, 0, 0.2)',
        borderTopColor: '#fe6200',
        borderRadius: '50%',
        animation: 'spinLoader 0.7s linear infinite',
      }}
    />
    <style>{`@keyframes spinLoader { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export const App: React.FC = () => {
  const { scrollTo, stop, start } = useLenis();

  // Helper to parse current browser URL and hash into PageType and articleId
  const resolveRoute = useCallback((): { page: PageType; articleId: string | null } => {
    if (typeof window === 'undefined') return { page: 'home', articleId: null };

    const rawHash = window.location.hash || '';
    const cleanHash = rawHash.replace(/^#\/?/, '').trim();
    const rawPath = window.location.pathname || '/';
    const cleanPath = rawPath.replace(/^\/+|\/+$/g, '').trim();

    const matchSlug = (slug: string): PageType | null => {
      if (!slug || slug === 'home') return 'home';
      if (slug === 'ai-services' || slug === 'ai-development-service' || slug === 'ai-product-engineering') {
        return 'ai-product-engineering';
      }
      if (slug === 'chatbot-video-bot-development' || slug === 'chatbot-videobot') {
        return 'ai-systems';
      }
      // Backwards-compatible aliases mapping legacy slugs to canonical CSV services
      if (slug === 'web-cms-development') return 'web-development';
      if (slug === 'mobile-app-development') return 'app-development';
      if (slug === 'software-development') return 'custom-software-development';
      if (slug === 'ecommerce-development') return 'ecommerce-platform';
      if (slug === 'devops') return 'cloud-based-software';
      if (slug === 'ai-development') return 'ai-integrations';
      if (slug === 'ai-agents') return 'ai-systems';
      // Product engineering routes directly to custom software development per services list.csv
      if (slug === 'product-engineering') return 'custom-software-development';
      if (isServiceSlug(slug)) return slug as PageType;
      if ([
        'insights', 'blog', 'company-updates', 'portfolio', 'about-us', 'contacts',
        'careers', 'certification', 'leaders', 'services', 'industries',
        'privacy-policy', 'cookie-policy', 'security-policy'
      ].includes(slug)) {
        return slug as PageType;
      }
      return null;
    };

    // 1. Pathname takes primary routing precedence (canonical clean URLs)
    if (cleanPath) {
      if (cleanPath === 'services') return { page: 'services', articleId: null };
      if (cleanPath === 'industries') return { page: 'industries', articleId: null };
      if (cleanPath === 'careers') return { page: 'careers', articleId: null };
      if (cleanPath === 'certification') return { page: 'certification', articleId: null };
      if (cleanPath === 'leaders') return { page: 'leaders', articleId: null };

      const parts = cleanPath.split('/');
      if (parts[0] === 'services' && parts[1]) {
        const resolved = matchSlug(parts[1]);
        if (resolved) return { page: resolved, articleId: null };
        return { page: '404', articleId: null };
      }
      if (parts[0] === 'blog') {
        if (parts[1]) {
          return { page: 'blog', articleId: parts[1] };
        }
        return { page: 'blog', articleId: null };
      }
      if (parts[0] === 'projects' || parts[0] === 'project' || parts[0] === 'case-studies' || parts[0] === 'casestudies' || parts[0] === 'casestudy') {
        if (parts[1]) {
          return { page: 'project', articleId: parts[1] };
        }
        return { page: 'portfolio', articleId: null };
      }
      if (parts[0] === 'portfolio') {
        if (parts[1]) {
          return { page: 'project', articleId: parts[1] };
        }
        return { page: 'portfolio', articleId: null };
      }
      if (parts[0] === '404') {
        return { page: '404', articleId: null };
      }
      const resolved = matchSlug(parts[0]);
      if (resolved) return { page: resolved, articleId: null };
      return { page: '404', articleId: null };
    }

    // 2. Hash routing fallback (backward compatibility for existing external links)
    if (cleanHash) {
      if (cleanHash.startsWith('project-') || cleanHash.startsWith('project/')) {
        const id = cleanHash.replace(/^project[-/]/, '');
        return { page: 'project', articleId: id };
      }
      if (cleanHash.startsWith('casestudy-') || cleanHash.startsWith('casestudy/') || cleanHash.startsWith('casestudies/')) {
        const id = cleanHash.replace(/^casestud(y|ies)[-/]/, '');
        return { page: 'project', articleId: id };
      }
      if (cleanHash === 'casestudies') return { page: 'portfolio', articleId: null };
      if (cleanHash === 'leaders') return { page: 'leaders', articleId: null };
      if (cleanHash === 'careers') return { page: 'careers', articleId: null };
      if (cleanHash === 'certification') return { page: 'certification', articleId: null };
      if (cleanHash === 'services') return { page: 'services', articleId: null };
      if (cleanHash === 'industries') return { page: 'industries', articleId: null };
      if (cleanHash === 'contact') return { page: 'contacts', articleId: null };
      if (['hero', 'delivery', 'recognition'].includes(cleanHash)) {
        return { page: 'home', articleId: null };
      }
      const resolved = matchSlug(cleanHash);
      if (resolved) return { page: resolved, articleId: null };
      return { page: '404', articleId: null };
    }

    return { page: 'home', articleId: null };
  }, []);

  // Active View State initialized from route
  const [currentPage, setCurrentPage] = useState<PageType>(() => resolveRoute().page);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(() => resolveRoute().articleId);

  // Interactive Modal & Palette State
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    tab: 'privacy' | 'cookie' | 'security';
  }>({
    isOpen: false,
    tab: 'privacy',
  });
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Listen for browser popstate and hashchange events
  useEffect(() => {
    const handleUrlChange = () => {
      const route = resolveRoute();
      setCurrentPage(route.page);
      setSelectedArticleId(route.articleId);
      scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [resolveRoute]);

  // Synchronize document metadata, Open Graph, Twitter cards, and Schema.org JSON-LD
  useEffect(() => {
    updateHeadMetadata(currentPage, selectedArticleId);
  }, [currentPage, selectedArticleId]);

  // Freeze background scroll when any modal/palette is active
  const isAnyModalOpen = Boolean(
    selectedCaseStudy || legalModal.isOpen || isCommandPaletteOpen
  );

  useEffect(() => {
    if (isAnyModalOpen) {
      stop();
    } else {
      start();
    }
  }, [isAnyModalOpen, stop, start]);

  const handleNavigate = useCallback(
    (targetId: string) => {
      const cleanTarget = targetId.replace('#', '');
      if (cleanTarget === 'product-engineering') {
        handleSelectPage('custom-software-development');
        return;
      }
      if (isServiceSlug(cleanTarget) || [
        'insights', 'blog', 'company-updates', 'portfolio', 'about-us', 'contacts',
        'privacy-policy', 'cookie-policy', 'security-policy', 'leaders', 'careers', 'certification', 'services', 'industries'
      ].includes(cleanTarget)) {
        handleSelectPage(cleanTarget as PageType);
        return;
      }

      if (currentPage !== 'home') {
        setCurrentPage('home');
        window.history.pushState(null, '', '/');
        setTimeout(() => {
          scrollTo(targetId, { offset: 0, lerp: 0.1 });
        }, 100);
      } else {
        scrollTo(targetId, { offset: 0, lerp: 0.1 });
      }
    },
    [currentPage, scrollTo]
  );

  const handleSelectPage = useCallback(
    (page: PageType, articleId?: string | null) => {
      setCurrentPage(page);
      if (articleId !== undefined) {
        setSelectedArticleId(articleId);
      } else {
        setSelectedArticleId(null);
      }

      let targetUrl = '/';
      if (page === 'home') {
        targetUrl = '/';
      } else if (isServiceSlug(page)) {
        targetUrl = `/services/${page}`;
      } else if (page === 'blog' && articleId) {
        targetUrl = `/blog/${articleId}`;
      } else if (page === 'project' && articleId) {
        targetUrl = `/projects/${articleId}`;
      } else if (page === 'project') {
        targetUrl = '/portfolio';
      } else if (page === '404') {
        targetUrl = '/404';
      } else {
        targetUrl = `/${page}`;
      }

      window.history.pushState(null, '', targetUrl);
      scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [scrollTo]
  );

  const addToast = useCallback(
    (title: string, description?: string, type: 'success' | 'error' | 'info' = 'success') => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4500);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const isOfficialServicePage = isServiceSlug(currentPage);

  return (
    <ErrorBoundary>
      <CinematicScroll isGlobal showScrollbar={false} blurSize={60} blurMax={12} blurLayers={2}>
        <div className="neominds-app">
          {/* Skip to Main Content Link for Accessibility */}
          <a
            href="#main-content"
            className="skip-link"
            style={{
              position: 'absolute',
              top: '-100px',
              left: '20px',
              backgroundColor: '#fe6200',
              color: '#ffffff',
              padding: '10px 18px',
              zIndex: 99999,
              fontWeight: 600,
              fontSize: '14px',
              transition: 'top 0.2s',
            }}
            onFocus={(e) => (e.currentTarget.style.top = '20px')}
            onBlur={(e) => (e.currentTarget.style.top = '-100px')}
          >
            Skip to main content
          </a>

          {/* Global Navigation Header with 11-Service Mega Menu & Mobile Drawer */}
          {currentPage !== 'ai-product-engineering' && currentPage !== '404' && (
            <Header
              onNavigate={handleNavigate}
              currentPage={currentPage}
              onSelectPage={handleSelectPage}
            />
          )}

          {/* ========================================================
              VIEW ROUTER: RENDER BASED ON ACTIVE SELECTION
              ======================================================== */}
          <Suspense fallback={<PageLoader />}>
            {/* 0. 404 Error Page */}
            {currentPage === '404' && (
              <main id="main-content">
                <NotFoundPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                />
              </main>
            )}

            {/* Dedicated Bespoke AI Services Page (EffectiveSoft.ai Aesthetic & Design) */}
            {currentPage === 'ai-product-engineering' && (
              <main id="main-content">
                <AIServicesPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onContactClick={() => handleSelectPage('contacts')}
                />
              </main>
            )}

            {/* 1. Universal Canonical Service Page System for All Other Services */}
            {isOfficialServicePage && currentPage !== 'ai-product-engineering' && (
              <main id="main-content">
                <ServicePageContainer
                  slug={currentPage}
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onSuccessToast={(msg) => addToast('Success', msg, 'success')}
                  onOpenLegal={(tab) => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* 2. Insights & Tech Briefs Hub */}
            {currentPage === 'insights' && (
              <main id="main-content">
                <InsightsPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onSuccessToast={(msg) => addToast('Success', msg, 'success')}
                  onOpenLegal={(tab) => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* 2b. Technical Blog Hub & Reader */}
            {currentPage === 'blog' && (
              <main id="main-content">
                {selectedArticleId ? (
                  <BlogPostDetailPage
                    articleId={selectedArticleId}
                    onBack={() => setSelectedArticleId(null)}
                    onNavigatePage={(p) => handleSelectPage(p as PageType)}
                    onSelectArticle={(id) => setSelectedArticleId(id)}
                    onSuccessToast={(msg) => addToast('Article', msg, 'info')}
                    onOpenLegal={(tab) => {
                      if (tab === 'privacy') handleSelectPage('privacy-policy');
                      else if (tab === 'cookie') handleSelectPage('cookie-policy');
                      else handleSelectPage('security-policy');
                    }}
                  />
                ) : (
                  <BlogHubPage
                    onNavigateHome={() => handleSelectPage('home')}
                    onNavigatePage={(p) => handleSelectPage(p as PageType)}
                    onSelectArticle={(id) => setSelectedArticleId(id)}
                    onSuccessToast={(msg) => addToast('Blog', msg, 'info')}
                    onOpenLegal={(tab) => {
                      if (tab === 'privacy') handleSelectPage('privacy-policy');
                      else if (tab === 'cookie') handleSelectPage('cookie-policy');
                      else handleSelectPage('security-policy');
                    }}
                  />
                )}
              </main>
            )}

            {/* 2c. Company Updates & Milestones */}
            {currentPage === 'company-updates' && (
              <main id="main-content">
                <CompanyUpdatesPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onSuccessToast={(msg) => addToast('Company Update', msg, 'info')}
                  onOpenLegal={(tab) => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* 3. Portfolio & Case Studies Listing */}
            {currentPage === 'portfolio' && (
              <main id="main-content">
                <PortfolioPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p, id) => {
                    if (p === 'project' && id) {
                      handleSelectPage('project', id);
                    } else {
                      handleSelectPage(p as PageType, id);
                    }
                  }}
                  onSuccessToast={(msg) => addToast('Success', msg, 'success')}
                />
              </main>
            )}

            {/* 3b. Dedicated Unified Project & Case Study Page */}
            {currentPage === 'project' && (
              <main id="main-content">
                <ProjectPage
                  projectId={selectedArticleId || 'mindspace-mobile-app'}
                  onNavigatePage={(p, id) => {
                    if (p === 'project' && id) {
                      handleSelectPage('project', id);
                    } else {
                      handleSelectPage(p, id);
                    }
                  }}
                  onOpenContact={() => handleSelectPage('contacts')}
                />
              </main>
            )}

            {/* 4. About Us & Leadership */}
            {currentPage === 'about-us' && (
              <main id="main-content">
                <AboutUsPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onSuccessToast={(msg) => addToast('Success', msg, 'success')}
                  onOpenLegal={(tab) => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* 5. Contacts & Global RFP Form */}
            {currentPage === 'contacts' && (
              <main id="main-content">
                <ContactsPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onSuccessToast={(msg) => addToast('Success', msg, 'success')}
                  onOpenLegal={(tab) => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* Careers Page */}
            {currentPage === 'careers' && (
              <main id="main-content">
                <CareersPage
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onOpenLegal={(tab: 'privacy' | 'cookie' | 'security') => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* Certification Page */}
            {currentPage === 'certification' && (
              <main id="main-content">
                <CertificationPage
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onOpenLegal={(tab: 'privacy' | 'cookie' | 'security') => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* Leadership Page */}
            {currentPage === 'leaders' && (
              <main id="main-content">
                <LeadershipPage
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onOpenLegal={(tab: 'privacy' | 'cookie' | 'security') => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* Services Hub Page */}
            {currentPage === 'services' && (
              <main id="main-content">
                <ServicesHubPage
                  onNavigateToService={(slug) => handleSelectPage(slug as PageType)}
                  onNavigateToContact={() => handleSelectPage('contacts')}
                  onNavigateToPortfolio={() => handleSelectPage('portfolio')}
                  onNavigateToIndustries={() => handleSelectPage('industries')}
                />
              </main>
            )}

            {/* Industries Hub Page */}
            {currentPage === 'industries' && (
              <main id="main-content">
                <IndustriesHubPage
                  onNavigateToContact={() => handleSelectPage('contacts')}
                  onNavigateToPortfolio={() => handleSelectPage('portfolio')}
                />
              </main>
            )}

            {/* 6. Privacy Policy Page */}
            {currentPage === 'privacy-policy' && (
              <main id="main-content">
                <PrivacyPolicyPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onOpenLegal={(tab) => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* 7. Cookie Policy Page */}
            {currentPage === 'cookie-policy' && (
              <main id="main-content">
                <CookiePolicyPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onOpenLegal={(tab) => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}

            {/* 8. Security & Compliance Standards Page */}
            {currentPage === 'security-policy' && (
              <main id="main-content">
                <SecurityPolicyPage
                  onNavigateHome={() => handleSelectPage('home')}
                  onNavigatePage={(p) => handleSelectPage(p as PageType)}
                  onOpenLegal={(tab) => {
                    if (tab === 'privacy') handleSelectPage('privacy-policy');
                    else if (tab === 'cookie') handleSelectPage('cookie-policy');
                    else handleSelectPage('security-policy');
                  }}
                />
              </main>
            )}


          </Suspense>

          {/* 10. Default Home View: Complete Interactive Corporate Landing Architecture */}
          {currentPage === 'home' && (
            <main id="main-content">
              <HeroSection onTalkClick={() => handleSelectPage('contacts')} />

              <ExperienceSection />

              <IndustryRecognition />

              <EngineeringBlobSection />

              <DeliveryPrinciples />

              <ServicesStack onSelectService={(slug: string) => handleSelectPage(slug as PageType)} />

              <CaseStudiesHorizontal
                onContactClick={() => handleSelectPage('contacts')}
                onSelectCaseStudy={(id: string) => setSelectedCaseStudy(id)}
              />

              <Testimonials />

              <ContactSection
                onSuccessToast={(msg: string) => addToast('Request Sent', msg, 'success')}
                onOpenPrivacy={() => handleSelectPage('privacy-policy')}
              />

              <LocationsSection />

              <Footer
                onNavigate={(target) => {
                  if (target === '#casestudies') {
                    handleSelectPage('portfolio');
                  } else if (target === '#contact') {
                    handleSelectPage('contacts');
                  } else {
                    handleNavigate(target);
                  }
                }}
                onOpenLegal={(tab) => {
                  if (tab === 'privacy') handleSelectPage('privacy-policy');
                  else if (tab === 'cookie') handleSelectPage('cookie-policy');
                  else handleSelectPage('security-policy');
                }}
              />
            </main>
          )}

          {/* Suspense Container for Modals */}
          <Suspense fallback={null}>
            {/* Global Case Study Deep-Dive Modal */}
            {selectedCaseStudy && (
              <CaseStudyModal
                studyId={selectedCaseStudy}
                onClose={() => setSelectedCaseStudy(null)}
                onRequestQuote={() => {
                  setSelectedCaseStudy(null);
                  handleSelectPage('contacts');
                }}
                onViewProjectPage={(id) => {
                  setSelectedCaseStudy(null);
                  handleSelectPage('project', id);
                }}
              />
            )}



            {/* Global Privacy / Cookies / Security Modal */}
            {legalModal.isOpen && (
              <LegalModal
                isOpen={legalModal.isOpen}
                initialTab={legalModal.tab}
                onClose={() => setLegalModal({ isOpen: false, tab: 'privacy' })}
              />
            )}

            {/* Global Quick Command Palette (Cmd+K / Ctrl+K) */}
            {isCommandPaletteOpen && (
              <CommandPalette
                isOpen={isCommandPaletteOpen}
                onClose={() => setIsCommandPaletteOpen(false)}
                onSelect={(targetId: string) => {
                  const clean = targetId.replace('#', '');
                  if (isServiceSlug(clean)) {
                    handleSelectPage(clean as PageType);
                  } else if (clean === 'insights') {
                    handleSelectPage('insights');
                  } else if (clean === 'portfolio' || targetId === '#casestudies') {
                    handleSelectPage('portfolio');
                  } else if (clean === 'about-us' || targetId === '#leaders') {
                    handleSelectPage('about-us');
                  } else if (clean === 'contacts' || targetId === '#contact') {
                    handleSelectPage('contacts');
                  } else if (clean === 'privacy-policy') {
                    handleSelectPage('privacy-policy');
                  } else if (clean === 'cookie-policy') {
                    handleSelectPage('cookie-policy');
                  } else if (clean === 'security-policy') {
                    handleSelectPage('security-policy');
                  } else if (clean === 'product-engineering') {
                    handleSelectPage('custom-software-development');
                  } else {
                    handleNavigate(targetId);
                  }
                  setIsCommandPaletteOpen(false);
                }}
              />
            )}
          </Suspense>

          {/* EU / Global Cookie Consent Banner */}
          <CookieConsent onOpenPrivacy={() => handleSelectPage('privacy-policy')} />

          {/* Toast Notification Container */}
          <Toast toasts={toasts} onDismiss={removeToast} />
        </div>
      </CinematicScroll>
    </ErrorBoundary>
  );
};

export default App;
