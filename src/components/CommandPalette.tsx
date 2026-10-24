import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (targetId: string) => void;
  onOpenCaseStudy?: (id: string) => void;
  onOpenService?: (id: number) => void;
}

interface PaletteItem {
  id: string;
  category: 'Service' | 'Case Study' | 'Section' | 'Contact';
  title: string;
  subtitle: string;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelect,
  onOpenCaseStudy: _onOpenCaseStudy,
  onOpenService: _onOpenService,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent will toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items: PaletteItem[] = [
    {
      id: 's-1',
      category: 'Service',
      title: 'Web & App Development',
      subtitle: 'Native iOS, Android, cross-platform and responsive web applications',
      action: () => {
        onClose();
        onSelect('#web-development');
      },
    },
    {
      id: 's-2',
      category: 'Service',
      title: 'Custom Software Development',
      subtitle: 'Bespoke enterprise systems, microservices, and workflows',
      action: () => {
        onClose();
        onSelect('#custom-software-development');
      },
    },
    {
      id: 's-3',
      category: 'Service',
      title: 'AI Automations & Integrations',
      subtitle: 'Agentic workflows, document intelligence, automated processes',
      action: () => {
        onClose();
        onSelect('#ai-automations');
      },
    },
    {
      id: 's-4',
      category: 'Service',
      title: 'Cloud Based Softwares & SaaS',
      subtitle: 'Cloud-native multi-tenant architectures and SaaS platforms',
      action: () => {
        onClose();
        onSelect('#cloud-based-software');
      },
    },
    {
      id: 's-5',
      category: 'Service',
      title: 'Analytic Dashboard',
      subtitle: 'Real-time telemetry, executive reporting, and data analytics',
      action: () => {
        onClose();
        onSelect('#analytics-dashboard');
      },
    },
    {
      id: 'cs-1',
      category: 'Case Study',
      title: 'Mindspace.ai Healthcare Telehealth App',
      subtitle: 'HIPAA-compliant mobile wellness & telemetry platform',
      action: () => {
        onClose();
        onSelect('#portfolio');
      },
    },
    {
      id: 'cs-2',
      category: 'Case Study',
      title: 'Fundbot AI SQL Chatbot',
      subtitle: 'Natural language database assistant for fintech operations',
      action: () => {
        onClose();
        onSelect('#portfolio');
      },
    },
    {
      id: 'sec-1',
      category: 'Section',
      title: 'Industry Recognition & Clutch Awards',
      subtitle: 'Research & Markets 2026 AI report citations',
      action: () => {
        onClose();
        onSelect('#recognition');
      },
    },
    {
      id: 'sec-2',
      category: 'Section',
      title: 'Our Delivery Principles & Metrics',
      subtitle: 'Product-centric, AI-minded, and Industry-focused stats',
      action: () => {
        onClose();
        onSelect('#delivery');
      },
    },
    {
      id: 'c-1',
      category: 'Contact',
      title: 'Contact Engineering Team (RFP / NDA)',
      subtitle: 'Send project requirements to our San Francisco headquarters',
      action: () => {
        onClose();
        onSelect('#contact');
      },
    },
  ];

  const filtered = items.filter(
    (i) =>
      i.title.toLowerCase().includes(query.toLowerCase()) ||
      i.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      i.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '12vh',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Search"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          backgroundColor: '#0c1018',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '0px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Search size={20} color="#FF5500" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, case studies, technologies, or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '16px',
              outline: 'none',
              fontFamily: 'var(--font-body)',
              minHeight: '36px',
            }}
          />
          <button
            onClick={onClose}
            style={{
              color: '#8893a7',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results List */}
        <div data-lenis-prevent style={{ maxHeight: '380px', overflowY: 'auto', padding: '8px 0' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: '#8893a7', fontSize: '14px', fontFamily: 'var(--font-body)' }}>
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={item.action}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  cursor: 'pointer',
                  minHeight: '48px',
                  transition: 'background-color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 85, 0, 0.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#93c5fd',
                        backgroundColor: 'rgba(255, 85, 0, 0.25)',
                        padding: '2px 6px',
                      }}
                    >
                      {item.category}
                    </span>
                    <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                      {item.title}
                    </h5>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#8893a7' }}>{item.subtitle}</p>
                </div>
                <ArrowRight size={16} color="#FF5500" />
              </div>
            ))
          )}
        </div>

        {/* Bottom Tip Bar */}
        <div
          style={{
            padding: '12px 20px',
            backgroundColor: '#080b11',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            fontFamily: 'var(--font-body)',
            color: '#666e85',
          }}
        >
          <span>Use ESC to close</span>
          <span>Press ⌘K or Ctrl+K anytime</span>
        </div>
      </div>
    </div>
  );
};
