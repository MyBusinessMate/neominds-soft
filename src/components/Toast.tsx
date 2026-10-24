import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '380px',
        width: 'calc(100% - 48px)',
      }}
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          style={{
            backgroundColor: '#12141a',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderLeft: `4px solid ${
              t.type === 'success' ? '#10b981' : t.type === 'error' ? '#ef4444' : '#fe6200'
            }`,
            padding: '16px',
            boxShadow: '0 10px 30px rgba(32, 11, 0,  0.6)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            position: 'relative',
          }}
        >
          {t.type === 'success' ? (
            <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
          ) : (
            <AlertCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
          )}

          <div style={{ flex: 1 }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, marginBottom: t.description ? '4px' : '0' }}>
              {t.title}
            </h4>
            {t.description && (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8893a7', lineHeight: 1.4 }}>
                {t.description}
              </p>
            )}
          </div>

          <button
            onClick={() => onDismiss(t.id)}
            style={{
              color: '#8893a7',
              minWidth: '36px',
              minHeight: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Close notification"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};
