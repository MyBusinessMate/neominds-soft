import React from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  CheckCircle2,
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { Footer } from './Footer';

interface BlogPostDetailPageProps {
  articleId: string;
  onBack: () => void;
  onNavigatePage: (page: string) => void;
  onSelectArticle: (id: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({
  articleId,
  onBack,
  onNavigatePage,
  onSelectArticle,
  onSuccessToast,
  onOpenLegal,
}) => {
  const article = BLOG_POSTS_DATA.find((p) => p.id === articleId) || BLOG_POSTS_DATA[0];
  const relatedArticles = BLOG_POSTS_DATA.filter((p) => p.id !== article.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onSuccessToast('Article URL copied to clipboard!');
    } else {
      onSuccessToast('Link ready to share!');
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--colors-background-dark, #fbf9f5)', color: '#ffffff', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          1. BREADCRUMB & BACK HEADER
          ======================================================== */}
      <section style={{ padding: '24px 24px 16px', maxWidth: '900px', margin: '0 auto' }}>
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#a3a09b',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '4px 0',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#fe6200')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#868683')}
        >
          <ArrowLeft size={16} />
          <span>Back to Engineering Blog</span>
        </button>
      </section>

      {/* ========================================================
          2. ARTICLE HERO
          ======================================================== */}
      <article style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ marginBottom: '28px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: '#fe6200',
              backgroundColor: 'rgba(254, 98, 0, 0.08)',
              padding: '4px 10px',
              borderRadius: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '16px',
            }}
          >
            {article.category}
          </span>

          <h1
            style={{
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#ffffff',
              lineHeight: 1.22,
              marginBottom: '14px',
            }}
          >
            {article.title}
          </h1>

          <p style={{ fontSize: '18px', color: '#a3a09b', lineHeight: 1.5, marginBottom: '24px' }}>
            {article.subtitle}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #f0ece2',
              borderBottom: '1px solid #f0ece2',
              padding: '16px 0',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#fe6200',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                {article.author.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff' }}>{article.author.name}</div>
                <div style={{ fontSize: '12px', color: '#a3a09b' }}>{article.author.role}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: '13px', color: '#a3a09b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} />
                {article.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} />
                {article.readTime}
              </span>
              <button
                onClick={handleShare}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  color: '#fe6200',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                <Share2 size={14} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div
          style={{
            width: '100%',
            height: 'clamp(280px, 40vw, 420px)',
            backgroundImage: `url(${article.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            marginBottom: '40px',
            boxShadow: '0 8px 24px rgba(32, 11, 0,  0.08)',
          }}
        />

        {/* Executive Summary / Key Takeaways Box */}
        <div
          style={{
            backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
            border: '1px solid #f0ece2',
            borderLeft: '4px solid #fe6200',
            borderRadius: '4px',
            padding: '24px 28px',
            marginBottom: '40px',
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
            Executive Takeaways
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {article.content.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.82)' }}>
                <CheckCircle2 size={16} color="#fe6200" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Sections */}
        <div style={{ fontSize: '16.5px', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.82)' }}>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: '#ffffff', marginBottom: '32px', fontWeight: 500 }}>
            {article.content.intro}
          </p>

          {article.content.sections.map((section, sIdx) => (
            <div key={sIdx} style={{ marginBottom: '36px' }}>
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: '#ffffff',
                  marginBottom: '14px',
                  paddingTop: '16px',
                }}
              >
                {section.heading}
              </h2>

              <p style={{ marginBottom: '16px' }}>{section.body}</p>

              {section.bulletPoints && (
                <ul style={{ paddingLeft: '24px', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {section.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              )}

              {section.codeSnippet && (
                <pre
                  style={{
                    backgroundColor: 'var(--colors-surface-dark-subtle, #f0ece2)',
                    color: '#FFFFFF',
                    padding: '20px',
                    borderRadius: '6px',
                    overflowX: 'auto',
                    fontSize: '13.5px',
                    fontFamily: 'Consolas, Monaco, monospace',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                    border: '1px solid #27272A',
                  }}
                >
                  <code>{section.codeSnippet}</code>
                </pre>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div style={{ borderTop: '1px solid #f0ece2', paddingTop: '28px', marginTop: '40px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
              Final Architecture Considerations
            </h3>
            <p style={{ color: '#a3a09b' }}>{article.content.conclusion}</p>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #f0ece2' }}>
          {article.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '12px',
                backgroundColor: 'var(--colors-background-dark, #fbf9f5)',
                border: '1px solid #f0ece2',
                padding: '4px 10px',
                borderRadius: '3px',
                color: '#a3a09b',
              }}
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Related Articles Strip */}
        {relatedArticles.length > 0 && (
          <div style={{ marginTop: '64px', borderTop: '2px solid #f0ece2', paddingTop: '36px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>
              Related Architecture Essays
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectArticle(rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    border: '1px solid #f0ece2',
                    borderRadius: '6px',
                    padding: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fe6200';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f0ece2';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#fe6200', textTransform: 'uppercase' }}>
                    {rel.category}
                  </span>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', margin: '8px 0', lineHeight: 1.35 }}>
                    {rel.title}
                  </h4>
                  <span style={{ fontSize: '12px', color: '#a3a09b' }}>{rel.readTime}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer
        onNavigate={(target) => {
          if (target === '#contact') onNavigatePage('contacts');
          else if (target === '#casestudies') onNavigatePage('portfolio');
          else onNavigatePage('home');
        }}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
