import {
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { getFirebaseAuth } from '../firebase';
import { CmsNotConfiguredError } from './client';

export type AdminUser = Pick<User, 'uid' | 'email'>;

export async function signIn(email: string, password: string): Promise<AdminUser> {
  const auth = getFirebaseAuth();
  if (!auth) throw new CmsNotConfiguredError();
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return { uid: cred.user.uid, email: cred.user.email };
}

export async function signOut(): Promise<void> {
  const auth = getFirebaseAuth();
  if (!auth) return;
  await fbSignOut(auth);
}

/**
 * Subscribe to auth state. Calls back immediately with the current user
 * (or null) and on every change. Returns an unsubscribe function.
 * When Firebase isn't configured, reports null once and no-ops.
 */
export function onAdminAuthChange(cb: (user: AdminUser | null) => void): () => void {
  const auth = getFirebaseAuth();
  if (!auth) {
    cb(null);
    return () => {};
  }
  return onAuthStateChanged(auth, (user) => {
    cb(user ? { uid: user.uid, email: user.email } : null);
  });
}
