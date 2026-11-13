import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowRight,
  Clock,
  BookOpen,
  Send,
} from 'lucide-react';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'AI & Autonomous Agents' | 'Cloud & DevOps' | 'Fintech & Security' | 'Product Strategy';
  author: string;
  authorRole: string;
  authorAvatar: string;
  coverImage: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-agents-production-2026',
    title: 'Architecting Stateful Multi-Agent Systems in Production with LangGraph & Reflexion Loops',
    excerpt:
      'How to build self-correcting agent swarms that reason through non-deterministic tasks, enforce tool execution bounds, and minimize token costs in mission-critical environments.',
    category: 'AI & Autonomous Agents',
    author: 'Alexander Kachaev',
    authorRole: 'Chief Technology Officer',
    authorAvatar: '/uploads/ESThumbnails/100899/660.Aleksandar-Apostolov-2.jpg',
    coverImage: '/uploads/ESThumbnails/134677/1280.AI-in-SDLC.jpg',
    date: 'February 24, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'kubernetes-finops-optimization',
    title: 'FinOps on EKS: Reducing Cloud Compute Overhead by 38% with Karpenter & Spot Instances',
    excerpt:
      'A practical guide to right-sizing container workloads, configuring custom metric horizontal autoscaling, and automating spot-interruption drains in high-throughput Kubernetes clusters.',
    category: 'Cloud & DevOps',
    author: 'Vladimir Arefyev',
    authorRole: 'Head of Cloud & DevOps',
    authorAvatar: '/uploads/ESThumbnails/86008/660.Vlad-Lenski-2.jpg',
    coverImage: '/uploads/ESThumbnails/101582/1280.Data-warehouse-development.png',
    date: 'February 18, 2026',
    readTime: '6 min read',
  },
  {
    id: 'fintech-submillisecond-trading',
    title: 'Sub-Millisecond Order Routing: Building Low-Latency Matching Engines in Go and Kafka',
    excerpt:
      'Designing memory-efficient concurrency models in Go with zero-allocation serialization to process 1.2M financial transactions per second with microsecond deterministic tail latency.',
    category: 'Fintech & Security',
    author: 'Mark Minehart',
    authorRole: 'VP of Engineering',
    authorAvatar: '/uploads/ESThumbnails/112218/660.Kirill-Makarenko-3.jpg',
    coverImage: '/uploads/ESThumbnails/136028/1280.ai-product-development.jpg',
    date: 'February 10, 2026',
    readTime: '10 min read',
  },
  {
    id: 'zero-downtime-strangler-migration',
    title: 'Deconstructing the Enterprise Monolith: Step-by-Step Strangler Fig Execution',
    excerpt:
      'How we migrated an 18-year-old banking core to event-driven microservices with zero seconds of unplanned downtime using bi-directional CDC queues.',
    category: 'Product Strategy',
    author: 'Elena Rostova',
    authorRole: 'Principal Solution Architect',
    authorAvatar: '/uploads/ESThumbnails/72346/660.Marina-Khvistik-2.jpg',
    coverImage: '/uploads/ESThumbnails/139066/1280.ai-projects-fail-in-enterprises.jpg',
    date: 'January 28, 2026',
    readTime: '7 min read',
  },
  {
    id: 'rag-hallucination-elimination',
    title: 'Eliminating RAG Hallucinations: Semantic Graph Reranking and Automated Ragas Verification',
    excerpt:
      'Why vector cosine similarity alone fails for technical documentation and how hybrid keyword-graph indexing eliminates factual drift in enterprise generative AI.',
    category: 'AI & Autonomous Agents',
    author: 'Dr. Sarah Lin',
    authorRole: 'Lead AI Research Engineer',
    authorAvatar: '/uploads/ESThumbnails/78724/660.Maryia-Dudarenko-2.jpg',
    coverImage: '/uploads/ESThumbnails/136853/1280.ai-use-cases-in-education.jpg',
    date: 'January 20, 2026',
    readTime: '9 min read',
  },
  {
    id: 'nextjs-15-edge-performance',
    title: 'Next.js 15 Server Components & Edge Cache: Achieving Perfect 100/100 Core Web Vitals',
    excerpt:
      'Architectural strategies for instant Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS) on dynamic high-traffic media portals.',
    category: 'Product Strategy',
    author: 'Lucas Meyer',
    authorRole: 'Lead Frontend Architect',
    authorAvatar: '/uploads/ESThumbnails/138916/660.Andrey-Stasishin_s.jpg',
    coverImage: '/uploads/ESThumbnails/133156/1280.artificial-intelligence-in-human-resources.jpg',
    date: 'January 14, 2026',
    readTime: '5 min read',
  },
  {
    id: 'soc2-hipaa-cloud-hardening',
    title: 'Hardening Multi-Tenant Healthcare Cloud Infrastructure for SOC 2 Type II and HIPAA',
    excerpt:
      'Implementing automated TLS 1.3 certificate rotation, AES-256 field-level database encryption, and immutable audit trails in health-tech architectures.',
    category: 'Fintech & Security',
    author: 'Vladimir Arefyev',
    authorRole: 'Head of Cloud & DevOps',
    authorAvatar: '/uploads/ESThumbnails/86008/660.Vlad-Lenski-2.jpg',
    coverImage: '/uploads/ESThumbnails/101578/1280.healthcare-revenue-cycle-management-software.png',
    date: 'January 05, 2026',
    readTime: '8 min read',
  },
];

interface InsightsPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigatePage,
  onSuccessToast,
  onOpenLegal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const categories = ['All', 'AI & Autonomous Agents', 'Cloud & DevOps', 'Fintech & Security', 'Product Strategy'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    onSuccessToast(`Thank you! "${newsletterEmail}" has been subscribed to the NeoMinds TechHub Engineering Digest.`);
    setNewsletterEmail('');
  };

  return (
    <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#000000', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      <style>{`
        .insights-featured-card {
          background-color: #ffffff;
          border: 1px solid #e8e4dc;
          border-radius: 14px;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(320px, 1.15fr) minmax(320px, 1.25fr);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          cursor: pointer;
        }
        .insights-featured-card:hover {
          transform: translateY(-3px);
          border-color: #fe6200;
          box-shadow: 0 20px 40px rgba(254, 98, 0, 0.09), 0 6px 16px rgba(0, 0, 0, 0.04);
        }
        .insights-featured-card:hover .insights-featured-img {
          transform: scale(1.04);
        }
        .insights-featured-card:hover .insights-featured-title {
          color: #fe6200;
        }
        @media (max-width: 900px) {
          .insights-featured-card {
            grid-template-columns: 1fr;
          }
        }

        .insights-article-card {
          background-color: #ffffff;
          border: 1px solid #e8e4dc;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }
        .insights-article-card:hover {
          transform: translateY(-4px);
          border-color: #fe6200;
          box-shadow: 0 16px 32px rgba(254, 98, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        .insights-article-card:hover .insights-card-img {
          transform: scale(1.05);
        }
        .insights-article-card:hover .insights-card-title {
          color: #fe6200;
        }
        .insights-article-card:hover .insights-card-arrow {
          transform: translateX(4px);
          color: #fe6200;
        }
        .insights-article-card:hover .insights-card-btn-pill {
          background-color: #fe6200 !important;
          color: #ffffff !important;
        }

        @media (max-width: 640px) {
          .insights-grid-container {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>

      {/* ========================================================
          1. HERO HEADER
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(56px, 7vw, 84px) 24px clamp(36px, 5vw, 48px)',
          background: 'linear-gradient(180deg, #faf8f5 0%, #ffffff 100%)',
          borderBottom: '1px solid #f0ece2',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(254, 98, 0, 0.08)', borderRadius: '8px', color: '#fe6200', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
            <BookOpen size={14} />
            <span>NeoMinds TechHub Research &amp; Engineering Briefs</span>
          </div>

          <ScrollReveal
            as="h1"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 54px)',
              fontWeight: 800,
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              letterSpacing: '-0.03em',
              color: '#000000',
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={7}
          >
            Insights, Architecture &amp; <span style={{ color: '#fe6200' }}>Tech Briefs</span>
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '18px', color: '#555555', maxWidth: '680px', lineHeight: 1.6, marginBottom: '32px' }}>
              Deep architectural teardowns, production AI agent blueprints, and cloud engineering best practices authored by our senior engineering leadership.
            </p>
          </RevealElement>

          {/* Search Bar & Category Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative', maxWidth: '480px' }}>
              <Search size={18} color="#a3a09b" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search articles by title, topic, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 46px',
                  backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
                  border: '1px solid #f0ece2',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#000000',
                  outline: 'none',
                  boxShadow: '0 2px 6px rgba(32, 11, 0, 0.03)',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                  style={{
                    color: selectedCategory === cat ? '#ffffff' : '#333333',
                    borderColor: selectedCategory === cat ? '#fe6200' : '#a3a09b',
                    backgroundColor: selectedCategory === cat ? '#fe6200' : '#faf8f5',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. FEATURED ARTICLE (Hero Card with Rich Visuals)
          ======================================================== */}
      {featuredPost && (
        <section style={{ padding: '48px 24px 32px', maxWidth: '1240px', margin: '0 auto' }}>
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div
              className="insights-featured-card"
              onClick={() => onSuccessToast(`Opening full brief: "${featuredPost.title}"`)}
            >
              {/* Visual Cover Header */}
              <div
                style={{
                  position: 'relative',
                  minHeight: '340px',
                  overflow: 'hidden',
                  backgroundColor: '#f0ece2',
                }}
              >
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="insights-featured-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 2,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(254, 98, 0, 0.94)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                >
                  <span>Featured Architecture Teardown</span>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    zIndex: 2,
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} color="#fe6200" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div
                style={{
                  padding: 'clamp(28px, 4vw, 44px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#fe6200',
                      backgroundColor: 'rgba(254, 98, 0, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '14px',
                    }}
                  >
                    {featuredPost.category}
                  </span>

                  <h2
                    className="insights-featured-title"
                    style={{
                      fontSize: 'clamp(22px, 2.4vw, 30px)',
                      fontWeight: 700,
                      fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                      color: '#000000',
                      margin: '0 0 16px 0',
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {featuredPost.title}
                  </h2>

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: '#66615c',
                      marginBottom: '28px',
                    }}
                  >
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #f0ece2',
                    paddingTop: '20px',
                    flexWrap: 'wrap',
                    gap: '14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {featuredPost.authorAvatar && (
                      <img
                        src={featuredPost.authorAvatar}
                        alt={featuredPost.author}
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #fe6200',
                          flexShrink: 0,
                        }}
                      />
                    )}
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#000000' }}>
                        {featuredPost.author}
                      </div>
                      <div style={{ fontSize: '12px', color: '#88847f' }}>
                        {featuredPost.authorRole}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSuccessToast(`Opening full brief: "${featuredPost.title}"`);
                    }}
                    className="btn btn-primary btn-sm"
                    style={{
                      backgroundColor: '#fe6200',
                      borderColor: '#fe6200',
                      color: '#ffffff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '8px',
                      fontWeight: 600,
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </RevealElement>
        </section>
      )}

      {/* ========================================================
          3. BLOG GRID (6 High-End Editorial Cards)
          ======================================================== */}
      <section style={{ padding: '40px 24px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#555555' }}>
            <h3 style={{ fontSize: '20px', color: '#000000', marginBottom: '8px' }}>No articles found</h3>
            <p>Try searching for a different keyword or select another category filter.</p>
          </div>
        ) : (
          <div
            className="insights-grid-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px',
            }}
          >
            {gridPosts.map((post, idx) => (
              <RevealElement key={post.id} variant="card" delay={(idx % 3) * 0.08} start="top 92%" end="top 65%">
                <article
                  className="insights-article-card"
                  onClick={() => onSuccessToast(`Opening brief: "${post.title}"`)}
                >
                  {/* Visual Media Header with High-Resolution Thumbnail & Badges */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '210px',
                      overflow: 'hidden',
                      backgroundColor: '#f0ece2',
                    }}
                  >
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      className="insights-card-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                    {/* Vignette Gradient Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Category Badge floating bottom-left */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        left: '16px',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#ffffff',
                          backgroundColor: 'rgba(254, 98, 0, 0.94)',
                          backdropFilter: 'blur(6px)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Reading Time floating bottom-right */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        right: '16px',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '11.5px',
                          fontWeight: 600,
                          color: '#ffffff',
                          backgroundColor: 'rgba(0, 0, 0, 0.65)',
                          backdropFilter: 'blur(6px)',
                          padding: '4px 9px',
                          borderRadius: '6px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        }}
                      >
                        <Clock size={11} color="#fe6200" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      padding: '24px 24px 20px 24px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <div>
                      <h3
                        className="insights-card-title"
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: '#000000',
                          fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
                          lineHeight: 1.35,
                          marginBottom: '10px',
                          letterSpacing: '-0.015em',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {post.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.6,
                          color: '#66615c',
                          marginBottom: '20px',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Card Footer: Author Profile & Animated Action Arrow */}
                    <div
                      style={{
                        borderTop: '1px solid #f0ece2',
                        paddingTop: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {post.authorAvatar && (
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            style={{
                              width: '34px',
                              height: '34px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '1.5px solid #fe6200',
                              flexShrink: 0,
                            }}
                          />
                        )}
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: '#000000', lineHeight: 1.25 }}>
                            {post.author}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#88847f', marginTop: '2px' }}>
                            {post.date}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#fe6200',
                        }}
                      >
                        <span>Read Brief</span>
                        <div
                          className="insights-card-btn-pill"
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(254, 98, 0, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fe6200',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <ArrowRight size={13} className="insights-card-arrow" style={{ transition: 'transform 0.2s ease' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealElement>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================
          4. NEWSLETTER SUBSCRIPTION STRIP
          ======================================================== */}
      <RevealElement variant="card" start="top 92%" end="top 68%">
        <section style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#000000', padding: '64px 24px', borderTop: '1px solid #f0ece2' }}>
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Stay Ahead
            </div>
            <ScrollReveal
              as="h2"
              style={{ fontSize: '32px', fontWeight: 800, color: '#000000', fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)", marginBottom: '12px', display: 'block' }}
              blurStrength={6}
            >
              Subscribe to the NeoMinds TechHub Tech Brief
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p style={{ fontSize: '16px', color: '#555555', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                Join 25,000+ engineering leaders receiving bi-weekly deep dives into AI system design, cloud scalability, and architecture trade-offs. Zero spam.
              </p>
            </RevealElement>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                required
                placeholder="Enter your corporate email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '240px',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e8e4dc',
                  borderRadius: '8px',
                  color: '#000000',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn btn-primary btn-md"
                style={{
                  backgroundColor: '#fe6200',
                  borderColor: '#fe6200',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontWeight: 600,
                }}
              >
                <span>Subscribe</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        </section>
      </RevealElement>

      {/* ========================================================
          GLOBAL FOOTER
          ======================================================== */}
      <Footer
        onNavigate={(target) => {
          if (target === '#contact') {
            onNavigatePage('contacts');
          } else if (target === '#casestudies') {
            onNavigatePage('portfolio');
          } else {
            onNavigatePage('home');
          }
        }}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
