import React, { useEffect, useState } from 'react';
import { onAdminAuthChange, signOut, type AdminUser } from '../../lib/cms/auth';
import { isAdminUser } from '../../lib/cms/client';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';
import { AdminList } from './AdminList';
import { AdminEditor } from './AdminEditor';
import { AdminShell, Button, COLORS } from './adminUi';
import { ToastProvider } from './toast';

type AdminRoute =
  | { view: 'dashboard' }
  | { view: 'list'; typeKey: string }
  | { view: 'editor'; typeKey: string; id: string | null };

function parseAdminRoute(pathname: string): AdminRoute {
  const parts = pathname.replace(/^\/+|\/+$/g, '').split('/'); // ["admin", ...]
  const [, typeKey, third] = parts;
  if (!typeKey) return { view: 'dashboard' };
  if (!third) return { view: 'list', typeKey };
  if (third === 'new') return { view: 'editor', typeKey, id: null };
  return { view: 'editor', typeKey, id: decodeURIComponent(third) };
}

/** Full admin surface, lazy-loaded by App.tsx for any /admin* path. */
export const AdminApp: React.FC = () => (
  <ToastProvider>
    <AdminAppInner />
  </ToastProvider>
);

const AdminAppInner: React.FC = () => {
  const [user, setUser] = useState<AdminUser | null | undefined>(undefined); // undefined = resolving
  // undefined = not yet checked, null = checking, boolean = result
  const [isAdmin, setIsAdmin] = useState<boolean | null | undefined>(undefined);
  const [route, setRoute] = useState<AdminRoute>(() => parseAdminRoute(window.location.pathname));

  useEffect(() => {
    const unsub = onAdminAuthChange(setUser);
    return unsub;
  }, []);

  // Verify admin membership (admins/{uid}) whenever the signed-in user changes.
  useEffect(() => {
    let cancelled = false;
    if (!user) {
      setIsAdmin(undefined);
      return;
    }
    setIsAdmin(null); // checking
    isAdminUser(user.uid)
      .then((ok) => {
        if (!cancelled) setIsAdmin(ok);
      })
      .catch(() => {
        if (!cancelled) setIsAdmin(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  useEffect(() => {
    const onPop = () => setRoute(parseAdminRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (user === undefined || isAdmin === null) {
    return (
      <div style={{ minHeight: '100vh', background: COLORS.bg, color: COLORS.muted, display: 'grid', placeItems: 'center' }}>
        Loading…
      </div>
    );
  }

  if (!user) return <AdminLogin />;

  const signOutButton = (
    <>
      <span style={{ color: COLORS.muted, fontSize: 13 }}>{user.email}</span>
      <Button onClick={() => void signOut()}>Sign out</Button>
    </>
  );

  // Signed in but not an admin (no admins/{uid} doc). The server rules already
  // block any data access; this just avoids showing them the admin UI.
  if (isAdmin === false) {
    return (
      <AdminShell title="Not authorized" right={signOutButton}>
        <div style={{ maxWidth: 480, margin: '6vh auto 0' }}>
          <h1 style={{ fontSize: 20, marginBottom: 8 }}>Not authorized</h1>
          <p style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.6 }}>
            This account ({user.email}) isn’t an admin, so it can’t manage content. To grant access,
            create a Firestore document at <code>admins/&lt;the UID below&gt;</code> (any field), then
            sign in again.
          </p>
          <div
            style={{
              marginTop: 16,
              padding: '12px 14px',
              background: COLORS.panel,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 8,
              fontSize: 13,
              lineHeight: 1.7,
            }}
          >
            <div style={{ color: COLORS.muted }}>Your Auth UID (use as the document ID):</div>
            <code style={{ color: COLORS.brand, wordBreak: 'break-all', userSelect: 'all' }}>{user.uid}</code>
          </div>
          <p style={{ color: COLORS.muted, fontSize: 12.5, marginTop: 12, lineHeight: 1.6 }}>
            Collection must be exactly <code>admins</code>, and <code>firestore.rules</code> must be
            published. See CMS_SETUP.md.
          </p>
        </div>
      </AdminShell>
    );
  }

  if (route.view === 'editor') {
    return <AdminEditor typeKey={route.typeKey} id={route.id} />;
  }

  return (
    <AdminShell right={signOutButton}>
      {route.view === 'dashboard' ? <AdminDashboard /> : <AdminList typeKey={route.typeKey} />}
    </AdminShell>
  );
};

export default AdminApp;
