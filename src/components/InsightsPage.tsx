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
  date: string;
  readTime: string;
  imageBg: string;
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
    date: 'February 24, 2026',
    readTime: '8 min read',
    imageBg: 'linear-gradient(180deg, #f0ece2 0%, #fbf9f5 100%)',
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
    date: 'February 18, 2026',
    readTime: '6 min read',
    imageBg: 'linear-gradient(180deg, #2e1103 0%, #1a0800 100%)',
  },
  {
    id: 'fintech-submillisecond-trading',
    title: 'Sub-Millisecond Order Routing: Building Low-Latency Matching Engines in Go and Kafka',
    excerpt:
      'Designing memory-efficient concurrency models in Go with zero-allocation serialization to process 1.2M financial transactions per second with microsecond deterministic tail latency.',
    category: 'Fintech & Security',
    author: 'Mark Minehart',
    authorRole: 'VP of Engineering',
    date: 'February 10, 2026',
    readTime: '10 min read',
    imageBg: 'linear-gradient(180deg, #f0ece2 0%, #f5f1e8 100%)',
  },
  {
    id: 'zero-downtime-strangler-migration',
    title: 'Deconstructing the Enterprise Monolith: Step-by-Step Strangler Fig Execution',
    excerpt:
      'How we migrated an 18-year-old banking core to event-driven microservices with zero seconds of unplanned downtime using bi-directional CDC queues.',
    category: 'Product Strategy',
    author: 'Elena Rostova',
    authorRole: 'Principal Solution Architect',
    date: 'January 28, 2026',
    readTime: '7 min read',
    imageBg: 'linear-gradient(180deg, #2a1205 0%, #fbf9f5 100%)',
  },
  {
    id: 'rag-hallucination-elimination',
    title: 'Eliminating RAG Hallucinations: Semantic Graph Reranking and Automated Ragas Verification',
    excerpt:
      'Why vector cosine similarity alone fails for technical documentation and how hybrid keyword-graph indexing eliminates factual drift in enterprise generative AI.',
    category: 'AI & Autonomous Agents',
    author: 'Dr. Sarah Lin',
    authorRole: 'Lead AI Research Engineer',
    date: 'January 20, 2026',
    readTime: '9 min read',
    imageBg: 'linear-gradient(180deg, #f0ece2 0%, #fbf9f5 100%)',
  },
  {
    id: 'nextjs-15-edge-performance',
    title: 'Next.js 15 Server Components & Edge Cache: Achieving Perfect 100/100 Core Web Vitals',
    excerpt:
      'Architectural strategies for instant Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS) on dynamic high-traffic media portals.',
    category: 'Product Strategy',
    author: 'Lucas Meyer',
    authorRole: 'Lead Frontend Architect',
    date: 'January 14, 2026',
    readTime: '5 min read',
    imageBg: 'linear-gradient(180deg, #2e1103 0%, #f5f1e8 100%)',
  },
  {
    id: 'soc2-hipaa-cloud-hardening',
    title: 'Hardening Multi-Tenant Healthcare Cloud Infrastructure for SOC 2 Type II and HIPAA',
    excerpt:
      'Implementing automated TLS 1.3 certificate rotation, AES-256 field-level database encryption, and immutable audit trails in health-tech architectures.',
    category: 'Fintech & Security',
    author: 'Vladimir Arefyev',
    authorRole: 'Head of Cloud & DevOps',
    date: 'January 05, 2026',
    readTime: '8 min read',
    imageBg: 'linear-gradient(180deg, #f0ece2 0%, #fbf9f5 100%)',
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
    onSuccessToast(`Thank you! "${newsletterEmail}" has been subscribed to the Neominds Engineering Digest.`);
    setNewsletterEmail('');
  };

  return (
    <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#ffffff', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(254, 98, 0, 0.08)', borderRadius: '0px', color: '#fe6200', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
            <BookOpen size={14} />
            <span>Neominds Research & Engineering Briefs</span>
          </div>

          <ScrollReveal
            as="h1"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 54px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={7}
          >
            Insights, Architecture & <span style={{ color: '#fe6200' }}>Tech Briefs</span>
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '18px', color: '#a3a09b', maxWidth: '680px', lineHeight: 1.6, marginBottom: '32px' }}>
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
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#ffffff',
                  outline: 'none',
                  boxShadow: '0 2px 6px rgba(32, 11, 0,  0.03)',
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
                    color: selectedCategory === cat ? '#ffffff' : '#868683',
                    borderColor: selectedCategory === cat ? '#fe6200' : '#a3a09b',
                    backgroundColor: selectedCategory === cat ? '#fe6200' : '#faf8f5',
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
          2. FEATURED ARTICLE (Hero Card)
          ======================================================== */}
      {featuredPost && (
        <section style={{ padding: '48px 24px 32px', maxWidth: '1240px', margin: '0 auto' }}>
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div
              style={{
                backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
                border: '1px solid #1F1F23',
                color: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                boxShadow: '0 16px 36px rgba(32, 11, 0,  0.4)',
              }}
            >
              {/* Visual Header */}
              <div
                style={{
                  background: featuredPost.imageBg,
                  padding: '48px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '280px',
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', borderLeft: '2px solid #fe6200', paddingLeft: '8px', width: 'fit-content', fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  <span>Featured Engineering Teardown</span>
                </div>

                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', gap: '16px' }}>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {featuredPost.category}
                  </span>

                  <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#ffffff', margin: '10px 0 16px', lineHeight: 1.25 }}>
                    {featuredPost.title}
                  </h2>

                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#a3a09b', marginBottom: '24px' }}>
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>{featuredPost.author}</div>
                    <div style={{ fontSize: '12px', color: '#a3a09b' }}>{featuredPost.authorRole}</div>
                  </div>

                  <button
                    onClick={() => onSuccessToast(`Opening full brief: "${featuredPost.title}"`)}
                    className="btn btn-primary btn-sm"
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
          3. BLOG GRID (6 Articles)
          ======================================================== */}
      <section style={{ padding: '40px 24px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#a3a09b' }}>
            <h3 style={{ fontSize: '20px', color: '#ffffff', marginBottom: '8px' }}>No articles found</h3>
            <p>Try searching for a different keyword or select another category filter.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {gridPosts.map((post, idx) => (
              <RevealElement key={post.id} variant="card" delay={(idx % 3) * 0.08} start="top 92%" end="top 65%">
                <article
                  style={{
                    backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
                    border: '1px solid #f0ece2',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                  }}
                onClick={() => onSuccessToast(`Opening brief: "${post.title}"`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fe6200';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(254, 98, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#f0ece2';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Visual Top Bar */}
                <div style={{ height: '8px', background: post.imageBg }} />

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#fe6200', backgroundColor: 'rgba(254, 98, 0, 0.08)', padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '12px', color: '#a3a09b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1.35, marginBottom: '12px' }}>
                      {post.title}
                    </h3>

                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#a3a09b', marginBottom: '20px' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid #f0ece2', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>{post.author}</div>
                      <div style={{ fontSize: '11px', color: '#a3a09b' }}>{post.date}</div>
                    </div>

                    <span className="btn-text" style={{ fontSize: '13px' }}>
                      <span>Read Brief</span>
                      <ArrowRight size={13} />
                    </span>
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
        <section style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#ffffff', padding: '64px 24px', borderTop: '1px solid #1F1F23' }}>
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Stay Ahead
            </div>
            <ScrollReveal
              as="h2"
              style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '12px', display: 'block' }}
              blurStrength={6}
            >
              Subscribe to the Neominds Tech Brief
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p style={{ fontSize: '16px', color: '#a3a09b', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
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
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '3px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button type="submit" className="btn btn-primary btn-md">
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
