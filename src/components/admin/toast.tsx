import React, { createContext, useCallback, useContext, useState } from 'react';
import { COLORS } from './adminUi';

type ToastKind = 'success' | 'error' | 'info';
interface ToastItem {
  id: number;
  message: string;
  kind: ToastKind;
}

interface ToastApi {
  show: (message: string, kind?: ToastKind) => void;
}

const ToastContext = createContext<ToastApi>({ show: () => {} });

export const useToast = (): ToastApi => useContext(ToastContext);

let counter = 0;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = useCallback((message: string, kind: ToastKind = 'info') => {
    const id = ++counter;
    setToasts((prev) => [...prev, { id, message, kind }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3800);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          zIndex: 100000,
          maxWidth: 'min(92vw, 380px)',
        }}
      >
        {toasts.map((t) => {
          const accent =
            t.kind === 'success' ? COLORS.success : t.kind === 'error' ? COLORS.danger : COLORS.brand;
          return (
            <div
              key={t.id}
              style={{
                background: COLORS.panelAlt,
                color: COLORS.text,
                border: `1px solid ${COLORS.border}`,
                borderLeft: `3px solid ${accent}`,
                borderRadius: 8,
                padding: '12px 16px',
                fontSize: 13.5,
                boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
                animation: 'nmToastIn 0.18s ease-out',
              }}
            >
              {t.message}
            </div>
          );
        })}
      </div>
      <style>{`@keyframes nmToastIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
    </ToastContext.Provider>
  );
};
