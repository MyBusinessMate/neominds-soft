import React from 'react';

/**
 * Small shared UI primitives for the admin area. Styling is inline to match the
 * rest of this codebase and to keep the admin bundle self-contained (it is
 * lazy-loaded, so none of this ships to normal visitors).
 */

export const COLORS = {
  bg: '#0d0d0f',
  panel: '#17171b',
  panelAlt: '#1f1f25',
  border: '#2a2a31',
  text: '#f2f2f4',
  muted: '#9a9aa5',
  brand: '#fe6200',
  brandDim: '#c74e02',
  danger: '#e5484d',
  success: '#30a46c',
};

export const AdminShell: React.FC<{
  children: React.ReactNode;
  title?: string;
  right?: React.ReactNode;
}> = ({ children, title, right }) => (
  <div
    style={{
      minHeight: '100vh',
      background: COLORS.bg,
      color: COLORS.text,
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    }}
  >
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        borderBottom: `1px solid ${COLORS.border}`,
        position: 'sticky',
        top: 0,
        background: COLORS.bg,
        zIndex: 10,
      }}
    >
      <a
        href="/admin"
        onClick={(e) => {
          e.preventDefault();
          window.history.pushState(null, '', '/admin');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
        style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: COLORS.text }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: 3,
            background: COLORS.brand,
            display: 'inline-block',
          }}
        />
        <strong style={{ fontSize: 15, letterSpacing: 0.3 }}>NeoMinds CMS</strong>
        {title && <span style={{ color: COLORS.muted, fontSize: 14 }}>· {title}</span>}
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{right}</div>
    </header>
    <main style={{ maxWidth: 1040, margin: '0 auto', padding: '28px 24px 80px' }}>{children}</main>
  </div>
);

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost' | 'danger';
  }
> = ({ variant = 'ghost', style, children, ...rest }) => {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '9px 16px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: rest.disabled ? 'not-allowed' : 'pointer',
    opacity: rest.disabled ? 0.55 : 1,
    border: `1px solid ${COLORS.border}`,
    background: 'transparent',
    color: COLORS.text,
    transition: 'background 0.15s, border-color 0.15s',
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: COLORS.brand, borderColor: COLORS.brand, color: '#fff' },
    ghost: { background: COLORS.panelAlt },
    danger: { borderColor: COLORS.danger, color: COLORS.danger, background: 'transparent' },
  };
  return (
    <button style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </button>
  );
};

export const Field: React.FC<{ label: string; hint?: string; children: React.ReactNode }> = ({
  label,
  hint,
  children,
}) => (
  <label style={{ display: 'block', marginBottom: 18 }}>
    <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</span>
    {children}
    {hint && (
      <span style={{ display: 'block', fontSize: 12, color: COLORS.muted, marginTop: 5 }}>{hint}</span>
    )}
  </label>
);

export const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: `1px solid ${COLORS.border}`,
  background: COLORS.panel,
  color: COLORS.text,
  fontSize: 14,
  boxSizing: 'border-box',
  outline: 'none',
};

export const Banner: React.FC<{ kind: 'error' | 'success' | 'info'; children: React.ReactNode }> = ({
  kind,
  children,
}) => {
  const map = {
    error: { border: COLORS.danger, color: '#ffb4b6' },
    success: { border: COLORS.success, color: '#7ee2b8' },
    info: { border: COLORS.border, color: COLORS.muted },
  }[kind];
  return (
    <div
      style={{
        border: `1px solid ${map.border}`,
        color: map.color,
        background: COLORS.panel,
        borderRadius: 8,
        padding: '10px 14px',
        fontSize: 13.5,
        marginBottom: 18,
        whiteSpace: 'pre-wrap',
      }}
    >
      {children}
    </div>
  );
};

export const StatusPill: React.FC<{ status: string }> = ({ status }) => {
  const published = status === 'published';
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        padding: '3px 8px',
        borderRadius: 999,
        color: published ? COLORS.success : COLORS.muted,
        border: `1px solid ${published ? COLORS.success : COLORS.border}`,
      }}
    >
      {status}
    </span>
  );
};

/** Navigate within the SPA (admin area and beyond). */
export function navigate(to: string): void {
  window.history.pushState(null, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
