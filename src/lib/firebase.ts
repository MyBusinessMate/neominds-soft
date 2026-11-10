import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';
import { firebaseConfig, isFirebaseConfigured } from './firebaseConfig';

/**
 * Firebase is configured entirely through Vite env vars (VITE_FIREBASE_*).
 * The web config is public by design — real access control is enforced by
 * Firestore Security Rules + Firebase Auth, not by hiding these values.
 *
 * Importing this module pulls in the Firebase SDK, so public code paths that
 * only need to know whether Firebase is configured should import from
 * ./firebaseConfig instead (SDK-free) and lazy-import this module on demand.
 */

export { isFirebaseConfigured };

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;
let storageInstance: FirebaseStorage | null = null;

function ensureApp(): FirebaseApp | null {
  if (!isFirebaseConfigured) return null;
  if (!app) {
    app = initializeApp(firebaseConfig as Required<typeof firebaseConfig>);
  }
  return app;
}

/** Returns the Auth instance, or null when Firebase is not configured. */
export function getFirebaseAuth(): Auth | null {
  const a = ensureApp();
  if (!a) return null;
  if (!authInstance) authInstance = getAuth(a);
  return authInstance;
}

/** Returns the Firestore instance, or null when Firebase is not configured. */
export function getDb(): Firestore | null {
  const a = ensureApp();
  if (!a) return null;
  if (!dbInstance) dbInstance = getFirestore(a);
  return dbInstance;
}

/** Returns the Storage instance, or null when Firebase is not configured. */
export function getStorageInstance(): FirebaseStorage | null {
  const a = ensureApp();
  if (!a) return null;
  if (!storageInstance) storageInstance = getStorage(a);
  return storageInstance;
}
