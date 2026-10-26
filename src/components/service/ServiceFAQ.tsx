import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { ServiceFaq } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceFAQProps {
  title: string;
  faqs: ServiceFaq[];
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({ title, faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#fe6200',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '10px',
          }}
        >
          <HelpCircle size={14} />
          <span>Technical Due Diligence</span>
        </div>
        <ScrollReveal
          as="h2"
          style={{
            fontSize: 'clamp(28px, 3.2vw, 38px)',
            fontWeight: 400,
            color: '#ffffff',
            fontFamily: "var(--typography-display-family, 'BL Pylon Serif', serif)",
            lineHeight: 1.18,
            display: 'block',
          }}
          blurStrength={6}
        >
          Frequently Asked Questions About {title}
        </ScrollReveal>
      </div>

      {/* Editorial Minimal Rule Accordion */}
      <RevealElement variant="card">
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #351505' }}>
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  borderBottom: '1px solid #351505',
                  transition: 'background-color 0.2s',
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
                    <span style={{ fontSize: '13px', fontWeight: 600, color: isExpanded ? '#fe6200' : '#868683', fontFamily: "var(--typography-mono-family, 'Geist Mono'), monospace" }}>
                      Q0{idx + 1}
                    </span>
                    <span style={{ fontSize: '16.5px', fontWeight: 500, color: isExpanded ? '#fe6200' : '#ffffff', transition: 'color 0.2s' }}>
                      {faq.question}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '0px',
                      border: isExpanded ? '1px solid #fe6200' : '1px solid #351505',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isExpanded ? '#fe6200' : '#868683',
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
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontFamily: "var(--typography-body-family, 'Fustat'), sans-serif",
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
    </section>
  );
};
