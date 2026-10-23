import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowRight,
  Clock,
  BookOpen,
  Calendar,
  Mail,
  Phone,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import './BlogHubPage.css';

interface BlogHubPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectArticle: (articleId: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const BlogHubPage: React.FC<BlogHubPageProps> = ({
  onNavigatePage,
  onSelectArticle,
  onSuccessToast,
  onOpenLegal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [activeLocationTab, setActiveLocationTab] = useState<'americas' | 'europe'>('americas');
  const [visibleCount, setVisibleCount] = useState<number>(5);

  const allTags = [
    'All',
    'Agile',
    'Agriculture',
    'Artificial intelligence',
    'Banking',
    'Blockchain',
    'Business intelligence',
    'Cloud',
    'Data analytics',
    'Design',
    'Digital transformation',
    'E-learning',
    'Ecommerce',
    'Enterprise',
    'Extended reality',
    'Fintech',
    'Healthcare',
    'Internet of Things',
    'Interview',
    'IT consulting',
    'Legacy modernization',
    'Logistics',
    'Machine learning',
    'Manufacturing',
    'Mobile',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_DATA.filter((post) => {
      const matchesCat =
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase() ||
        post.tags.some((t) => t.toLowerCase() === selectedCategory.toLowerCase());

      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    onSuccessToast(`Thank you! "${newsletterEmail}" is subscribed to the Neominds Technical Publications.`);
    setNewsletterEmail('');
  };

  return (
    <div className="p-blog-page">
      {/* ========================================================
          1. HERO SECTION (s-hero g-section theme-light s-hero--img-right)
          ======================================================== */}
      <section className="b-hero">
        <div className="b-hero__container">
          <div className="b-hero__text">
            <div className="b-hero__badge">
              <BookOpen size={14} />
              <span>Neominds Technical Publications</span>
            </div>

            <ScrollReveal as="h1" className="b-hero__title" blurStrength={8}>
              Insights and <span>updates await</span>
            </ScrollReveal>

            <RevealElement variant="text" delay={0.06}>
              <p className="b-hero__description">
                Here we share our knowledge, insights, and expertise in the world of software development and technology.
                We strive to provide valuable, up-to-date content that educates, inspires, and sparks conversations.
                Whether you&apos;re a software developer, project manager, entrepreneur, or simply interested in the latest trends
                in the tech industry, our blog is the place to be. Explore, learn, and join the conversation today!
              </p>
            </RevealElement>

            <RevealElement variant="card" delay={0.12}>
              <div className="b-hero__actions">
                <button
                  type="button"
                  className="b-hero__btn-cta"
                  onClick={() => onNavigatePage('contacts')}
                >
                  <span>Send request</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </RevealElement>
          </div>

          <div className="b-hero__media">
            <div className="b-hero__media-card">
              <div className="b-hero__media-graphic">
                <Layers size={36} style={{ color: '#60a5fa', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 8px 0', textAlign: 'center' }}>
                  Enterprise Engineering Intelligence
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
                  Architectural playbooks, real-world benchmarks, and deterministic AI execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. MAIN BLOG FEED & ASIDE (p-blog g-section theme-light js-blog)
          ======================================================== */}
      <section className="p-blog-section">
        <div className="p-blog-container">
          {/* Left Column: Posts List */}
          <div className="p-blog__content">
            {/* Search Input */}
            <div className="p-blog__search-wrap">
              <Search size={18} style={{ color: '#94a3b8' }} />
              <input
                type="text"
                className="p-blog__search-input"
                placeholder="Search technical essays by topic, title, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {selectedCategory !== 'All' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#64748b' }}>Filtered by:</span>
                <span className="btn-tag is-active" style={{ cursor: 'default' }}>
                  {selectedCategory}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2258e7',
                    fontSize: '13px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Clear filter
                </button>
              </div>
            )}

            <div className="p-blog__list">
              {visiblePosts.length === 0 ? (
                <div style={{ padding: '64px 24px', textAlign: 'center', color: '#64748b', background: '#f8fafc', borderRadius: '4px' }}>
                  <p style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>No publications found</p>
                  <p style={{ fontSize: '14px', margin: 0 }}>Try clearing your search query or selecting a different category tag.</p>
                </div>
              ) : (
                visiblePosts.map((post) => (
                  <article key={post.id} className="el-tile--blog">
                    <div
                      className="el-tile__media"
                      onClick={() => onSelectArticle(post.id)}
                    >
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        onError={(e) => {
                          // Fallback if local image fails
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
                        }}
                      />
                    </div>

                    <div className="el-tile__content">
                      <p className="el-tile__meta">
                        <span className="el-tile__meta-item">
                          <Calendar size={13} style={{ marginRight: '4px' }} />
                          {post.date}
                        </span>
                        <span className="el-tile__meta-item">
                          <Clock size={13} style={{ marginRight: '4px' }} />
                          {post.readTime}
                        </span>
                      </p>

                      <h2
                        className="el-tile__title"
                        onClick={() => onSelectArticle(post.id)}
                      >
                        {post.title}
                      </h2>

                      <p className="el-tile__description">{post.excerpt}</p>

                      <ul className="el-tile__tags">
                        {post.tags.map((tag) => (
                          <li
                            key={tag}
                            className={`btn-tag ${selectedCategory === tag ? 'is-active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCategory(tag);
                            }}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))
              )}

              {hasMore && (
                <button
                  type="button"
                  className="p-blog__btn-more"
                  onClick={handleLoadMore}
                >
                  <span>Load more</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Category & Topic Aside Filter */}
          <aside className="p-blog__aside">
            <div className="p-blog__aside-sticky">
              <h3 className="p-blog__tags-title">Tags &amp; Disciplines</h3>
              <div className="p-blog__tags-area">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`btn-tag ${selectedCategory === tag ? 'is-active' : ''}`}
                    onClick={() => setSelectedCategory(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ========================================================
          3. CONTACT / REQUEST SECTION (theme-dark g-section s-request)
          ======================================================== */}
      <section className="b-request">
        <div className="b-request__container">
          <div>
            <h2 className="b-request__title">
              Contact us • <span>Let&apos;s connect</span>
            </h2>
            <p className="b-request__subtext">
              Have a technical challenge, a legacy modernization initiative, or an enterprise AI rollout you want to validate?
              Talk directly with our solutions architects.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <CheckCircle2 size={18} style={{ color: '#2258e7' }} />
                <span>NDA signed upfront to guarantee IP security</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <CheckCircle2 size={18} style={{ color: '#2258e7' }} />
                <span>Principal architects on every discovery call</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <CheckCircle2 size={18} style={{ color: '#2258e7' }} />
                <span>Deterministic timeline and scoping estimates</span>
              </div>
            </div>
          </div>

          <div className="b-request__card">
            <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 16px 0', color: '#ffffff' }}>
              Start your discovery sprint
            </h3>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '24px' }}>
              Our senior engineering leads respond within 1–2 business days with an actionable technical assessment.
            </p>
            <button
              type="button"
              className="b-hero__btn-cta"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => onNavigatePage('contacts')}
            >
              <span>Get in touch with an expert</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. OUR LOCATIONS SECTION (s-contacts g-section theme-light)
          ======================================================== */}
      <section className="b-locations" id="locations">
        <div className="b-locations__container">
          <div className="b-locations__header">
            <h2 className="b-locations__title">Our locations</h2>
            <p className="b-locations__desc">
              Say hello to our friendly team at one of these locations.
            </p>
            <a
              href="mailto:rfq@effectivesoft.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#2258e7',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <Mail size={16} />
              <span>rfq@effectivesoft.com</span>
            </a>
          </div>

          {/* Region Tabs */}
          <div className="b-locations__tabs">
            <button
              type="button"
              className={`b-locations__tab-btn ${activeLocationTab === 'americas' ? 'is-active' : ''}`}
              onClick={() => setActiveLocationTab('americas')}
            >
              Americas
            </button>
            <button
              type="button"
              className={`b-locations__tab-btn ${activeLocationTab === 'europe' ? 'is-active' : ''}`}
              onClick={() => setActiveLocationTab('europe')}
            >
              Europe
            </button>
          </div>

          {/* Locations Grid */}
          {activeLocationTab === 'americas' ? (
            <div className="b-locations__grid">
              <div className="b-locations__card">
                <h4 className="b-locations__city">San Diego, California</h4>
                <p className="b-locations__address">
                  4445 Eastgate Mall, Suite 200<br />
                  92121
                </p>
                <a href="tel:1-800-288-9659" className="b-locations__phone">
                  <Phone size={13} />
                  <span>1-800-288-9659</span>
                </a>
              </div>

              <div className="b-locations__card">
                <h4 className="b-locations__city">San Francisco, California</h4>
                <p className="b-locations__address">
                  50 California St #1500<br />
                  94111
                </p>
                <a href="tel:1-800-288-9659" className="b-locations__phone">
                  <Phone size={13} />
                  <span>1-800-288-9659</span>
                </a>
              </div>

              <div className="b-locations__card">
                <h4 className="b-locations__city">Pittsburgh, Pennsylvania</h4>
                <p className="b-locations__address">
                  One Oxford Centre, 500 Grant St Suite 2900<br />
                  15219
                </p>
                <a href="tel:1-800-288-9659" className="b-locations__phone">
                  <Phone size={13} />
                  <span>1-800-288-9659</span>
                </a>
              </div>

              <div className="b-locations__card">
                <h4 className="b-locations__city">Durham, North Carolina</h4>
                <p className="b-locations__address">
                  RTP Meridian, 2530 Meridian Pkwy Suite 300<br />
                  27713
                </p>
                <a href="tel:1-800-288-9659" className="b-locations__phone">
                  <Phone size={13} />
                  <span>1-800-288-9659</span>
                </a>
              </div>

              <div className="b-locations__card">
                <h4 className="b-locations__city">San Jose, Costa Rica</h4>
                <p className="b-locations__address">
                  C. 118B, Trejos Montealegre<br />
                  10203
                </p>
                <a href="tel:1-800-288-9659" className="b-locations__phone">
                  <Phone size={13} />
                  <span>1-800-288-9659</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="b-locations__grid">
              <div className="b-locations__card">
                <h4 className="b-locations__city">Warsaw, Poland</h4>
                <p className="b-locations__address">
                  126/134 Marszalkowska Street<br />
                  00-008
                </p>
                <a href="tel:1-800-288-9659" className="b-locations__phone">
                  <Phone size={13} />
                  <span>1-800-288-9659</span>
                </a>
              </div>

              <div className="b-locations__card">
                <h4 className="b-locations__city">Wroclaw, Poland</h4>
                <p className="b-locations__address">
                  13 Pilsudskiego Street, 2nd floor<br />
                  50-996
                </p>
                <a href="tel:1-800-288-9659" className="b-locations__phone">
                  <Phone size={13} />
                  <span>1-800-288-9659</span>
                </a>
              </div>

              <div className="b-locations__card">
                <h4 className="b-locations__city">Gdańsk, Poland</h4>
                <p className="b-locations__address">
                  Opera Office, 13A Zwycięstwa Street<br />
                  80-219
                </p>
                <a href="tel:1-800-288-9659" className="b-locations__phone">
                  <Phone size={13} />
                  <span>1-800-288-9659</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          5. NEWSLETTER SECTION (s-newsletter g-section theme-light)
          ======================================================== */}
      <section className="b-newsletter">
        <div className="b-newsletter__container">
          <h2 className="b-newsletter__title">Join our newsletter</h2>
          <p className="b-newsletter__text">
            Get bi-weekly technical essays on systems architecture, production LLMOps, and enterprise engineering directly in your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="b-newsletter__form">
            <input
              type="email"
              className="b-newsletter__input"
              placeholder="Enter your corporate email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className="b-newsletter__submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer
        onNavigate={(target) => onNavigatePage(target.replace('#', ''))}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
