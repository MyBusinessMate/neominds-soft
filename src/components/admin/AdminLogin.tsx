import React, { useState } from 'react';
import { signIn } from '../../lib/cms/auth';
import { isFirebaseConfigured } from '../../lib/firebase';
import { AdminShell, Button, Field, Banner, inputStyle, COLORS } from './adminUi';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const configured = isFirebaseConfigured;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await signIn(email.trim(), password);
      // Auth state listener in AdminApp will swap the view.
    } catch (err) {
      const code = (err as { code?: string }).code || '';
      const message =
        code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found'
          ? 'Incorrect email or password.'
          : code === 'auth/too-many-requests'
          ? 'Too many attempts. Try again in a few minutes.'
          : (err as Error).message || 'Sign-in failed.';
      setError(message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <AdminShell title="Sign in">
      <div style={{ maxWidth: 380, margin: '6vh auto 0' }}>
        <h1 style={{ fontSize: 22, marginBottom: 6 }}>Admin sign in</h1>
        <p style={{ color: COLORS.muted, fontSize: 14, marginBottom: 24 }}>
          Manage NeoMinds content. Access is restricted to authorized admins.
        </p>

        {!configured && (
          <Banner kind="error">
            Firebase isn’t configured. Set the VITE_FIREBASE_* environment variables (see .env.example)
            and reload before signing in.
          </Banner>
        )}

        {error && <Banner kind="error">{error}</Banner>}

        <form onSubmit={onSubmit}>
          <Field label="Email">
            <input
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
              disabled={!configured || busy}
            />
          </Field>
          <Field label="Password">
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
              disabled={!configured || busy}
            />
          </Field>
          <Button type="submit" variant="primary" disabled={!configured || busy} style={{ width: '100%', justifyContent: 'center' }}>
            {busy ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
      </div>
    </AdminShell>
  );
};
