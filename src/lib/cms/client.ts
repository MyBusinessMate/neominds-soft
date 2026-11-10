import {
  collection as fsCollection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  writeBatch,
  type Firestore,
} from 'firebase/firestore';
import { getDb } from '../firebase';
import type { CmsDocument } from './types';

/** Thrown when a CMS write/read is attempted without Firebase configured. */
export class CmsNotConfiguredError extends Error {
  constructor() {
    super('Firebase is not configured. Set VITE_FIREBASE_* env vars to use the CMS.');
    this.name = 'CmsNotConfiguredError';
  }
}

function db(): Firestore {
  const instance = getDb();
  if (!instance) throw new CmsNotConfiguredError();
  return instance;
}

/** Shape stored in Firestore (doc id === CmsDocument.id, so id is not duplicated). */
function toStored(d: CmsDocument): Record<string, unknown> {
  return {
    slug: d.slug,
    title: d.title,
    status: d.status,
    order: d.order,
    createdAt: d.createdAt,
    updatedAt: d.updatedAt,
    data: d.data,
  };
}

function fromStored(id: string, raw: Record<string, unknown>): CmsDocument {
  return {
    id,
    slug: (raw.slug as string) ?? id,
    title: (raw.title as string) ?? '',
    status: (raw.status as CmsDocument['status']) ?? 'draft',
    order: (raw.order as number) ?? 0,
    createdAt: (raw.createdAt as string) ?? '',
    updatedAt: (raw.updatedAt as string) ?? '',
    data: (raw.data as Record<string, unknown>) ?? {},
  };
}

/**
 * List documents in a collection.
 * `publishedOnly` uses a server-side filter (what the public site should use);
 * admin lists pass false to see drafts too.
 */
export async function listDocuments(
  collectionName: string,
  opts: { publishedOnly?: boolean } = {}
): Promise<CmsDocument[]> {
  const ref = fsCollection(db(), collectionName);
  // Sort client-side by `order` so no composite Firestore index is required.
  const q = opts.publishedOnly ? query(ref, where('status', '==', 'published')) : query(ref);
  const snap = await getDocs(q);
  return snap.docs
    .map((d) => fromStored(d.id, d.data() as Record<string, unknown>))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export async function getDocument(
  collectionName: string,
  id: string
): Promise<CmsDocument | null> {
  const snap = await getDoc(doc(db(), collectionName, id));
  if (!snap.exists()) return null;
  return fromStored(snap.id, snap.data() as Record<string, unknown>);
}

/** Create or replace a document. Stamps `updatedAt`. */
export async function upsertDocument(
  collectionName: string,
  document: CmsDocument
): Promise<CmsDocument> {
  const next: CmsDocument = { ...document, updatedAt: new Date().toISOString() };
  await setDoc(doc(db(), collectionName, next.id), toStored(next));
  return next;
}

export async function deleteDocument(collectionName: string, id: string): Promise<void> {
  await deleteDoc(doc(db(), collectionName, id));
}

/**
 * Client-side admin check that mirrors firestore.rules: a user is an admin iff
 * an `admins/{uid}` document exists. For non-admins the security rules deny the
 * read, so this resolves false (via the catch) — the server remains the real
 * authorization boundary; this only prevents showing the admin UI to non-admins.
 */
export async function isAdminUser(uid: string): Promise<boolean> {
  try {
    const snap = await getDoc(doc(db(), 'admins', uid));
    return snap.exists();
  } catch {
    return false;
  }
}

/**
 * Bulk-write documents (used by the import/seed action).
 * When `skipExisting` is true, documents whose id already exists are left
 * untouched so a re-run never clobbers manual edits.
 * Returns the number of documents actually written.
 */
export async function seedCollection(
  collectionName: string,
  documents: CmsDocument[],
  opts: { skipExisting?: boolean } = {}
): Promise<number> {
  const instance = db();
  let toWrite = documents;

  if (opts.skipExisting) {
    const existing = await listDocuments(collectionName);
    const existingIds = new Set(existing.map((d) => d.id));
    toWrite = documents.filter((d) => !existingIds.has(d.id));
  }

  // Firestore batches are capped at 500 ops; chunk to be safe.
  const CHUNK = 450;
  for (let i = 0; i < toWrite.length; i += CHUNK) {
    const batch = writeBatch(instance);
    for (const d of toWrite.slice(i, i + CHUNK)) {
      batch.set(doc(instance, collectionName, d.id), toStored(d));
    }
    await batch.commit();
  }
  return toWrite.length;
}
