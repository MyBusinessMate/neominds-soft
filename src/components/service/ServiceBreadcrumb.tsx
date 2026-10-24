import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceBreadcrumbProps {
  category: string;
  title: string;
  onNavigateHome: () => void;
}

export const ServiceBreadcrumb: React.FC<ServiceBreadcrumbProps> = ({
  category,
  title,
  onNavigateHome,
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px',
        color: '#64748b',
        marginBottom: '20px',
      }}
    >
      <button
        onClick={onNavigateHome}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          color: '#64748b',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 500,
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5500')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
      >
        Home
      </button>
      <ChevronRight size={14} color="#94a3b8" />
      <span style={{ color: '#64748b', fontWeight: 500 }}>Services</span>
      <ChevronRight size={14} color="#94a3b8" />
      <span style={{ color: '#64748b', fontWeight: 500 }}>{category}</span>
      <ChevronRight size={14} color="#94a3b8" />
      <span style={{ color: '#ffffff', fontWeight: 700 }}>{title}</span>
    </nav>
  );
};
