import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ServiceFaq } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceFAQProps {
  title: string;
  faqs: ServiceFaq[];
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({ title, faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 100px) 24px',
        backgroundColor: 'var(--colors-surface-light, #f1efeb)',
        borderBottom: '1px solid var(--colors-border-light, #e4e2e1)',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: '#fe6200',
              textTransform: 'uppercase',
              marginBottom: '14px',
              fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
            }}
          >
            Clear Answers
          </div>

          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: '#000000',
              fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: '-0.025em',
              display: 'block',
            }}
            blurStrength={6}
          >
            Frequently Asked Questions About <span style={{ color: '#fe6200', fontStyle: 'italic' }}>{title}</span>
          </ScrollReveal>
        </div>

        {/* Editorial Minimal Rule Accordion (Zero Boxes, Zero White Background) */}
        <RevealElement variant="card">
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #e4e2e1' }}>
            {faqs.map((faq, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid #e4e2e1',
                  }}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    aria-expanded={isExpanded}
                    style={{
                      width: '100%',
                      padding: '24px 8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingRight: '16px' }}>
                      <span
                        style={{
                          fontSize: '12.5px',
                          fontWeight: 700,
                          color: isExpanded ? '#fe6200' : '#88827c',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        style={{
                          fontSize: '17px',
                          fontWeight: 700,
                          color: isExpanded ? '#fe6200' : '#111111',
                          transition: 'color 0.2s',
                          fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: isExpanded ? '1px solid #fe6200' : '1px solid #d0ccc0',
                        backgroundColor: '#faf6f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isExpanded ? '#fe6200' : '#55514c',
                        flexShrink: 0,
                      }}
                    >
                      {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div
                      style={{
                        padding: '0 8px 24px 44px',
                        color: '#55514c',
                        fontSize: '15.5px',
                        lineHeight: 1.65,
                        fontFamily: "var(--typography-body-family, 'DM Sans'), sans-serif",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </RevealElement>
      </div>
    </section>
  );
};

export default ServiceFAQ;
