import { useEffect, useState } from 'react';
import { isFirebaseConfigured } from '../firebaseConfig';
import { CONTENT_TYPES } from './collections';
import { fetchPublished } from './publicClient';
import type { CmsDocument } from './types';
import type { BlogArticle, CompanyUpdate } from '../../data/blogData';
import type { UnifiedProject } from '../../data/projectsData';

/**
 * Runtime overlay of PUBLISHED CMS content for the public site.
 *
 * Fast path:
 *   1. At module load we HYDRATE synchronously from localStorage, so returning
 *      visitors see CMS content on the very first paint (no SDK, no flash).
 *   2. primeCmsOverlay() then REVALIDATES over the Firestore REST API (a few KB,
 *      no ~500 KB SDK) and updates both the overlay and the cache.
 *
 * Static data in src/data/*.ts remains only as a last-resort fallback (first
 * ever visit with an empty cache while the request is in flight, or offline).
 */

const CACHE_PREFIX = 'nm_cms_v1_';

interface OverlayState {
  blog: BlogArticle[] | null;
  companyUpdates: CompanyUpdate[] | null;
  caseStudies: UnifiedProject[] | null;
  caseStudyById: Map<string, UnifiedProject>;
}

const state: OverlayState = {
  blog: null,
  companyUpdates: null,
  caseStudies: null,
  caseStudyById: new Map(),
};

let version = 0;
let revalidated = false;
let revalidating = false;
const listeners = new Set<() => void>();

function bump() {
  version += 1;
  listeners.forEach((l) => l());
}

function indexCaseStudies(items: UnifiedProject[]) {
  const map = new Map<string, UnifiedProject>();
  for (const cs of items) {
    if (cs.id) map.set(cs.id.toLowerCase(), cs);
    if (cs.slug) map.set(cs.slug.toLowerCase(), cs);
  }
  state.caseStudyById = map;
}

/** Apply a freshly loaded set of documents for one content type to the state. */
function apply(typeKey: 'blog' | 'companyUpdates' | 'caseStudies', docs: CmsDocument[]) {
  if (!docs.length) return;
  if (typeKey === 'blog') {
    state.blog = docs.map((d) => d.data as unknown as BlogArticle);
  } else if (typeKey === 'companyUpdates') {
    state.companyUpdates = docs.map((d) => d.data as unknown as CompanyUpdate);
  } else {
    const items = docs.map((d) => d.data as unknown as UnifiedProject);
    state.caseStudies = items;
    indexCaseStudies(items);
  }
}

// --- localStorage cache -----------------------------------------------------

function cacheKey(collection: string) {
  return `${CACHE_PREFIX}${collection}`;
}

function readCache(collection: string): CmsDocument[] | null {
  try {
    const raw = localStorage.getItem(cacheKey(collection));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CmsDocument[];
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function writeCache(collection: string, docs: CmsDocument[]) {
  try {
    localStorage.setItem(cacheKey(collection), JSON.stringify(docs));
  } catch {
    // Quota exceeded or storage unavailable — fine, we just skip caching.
  }
}

const TYPE_KEYS = ['blog', 'companyUpdates', 'caseStudies'] as const;

/** Synchronously hydrate the overlay from cache at module load (pre-render). */
function hydrateFromCache() {
  if (typeof window === 'undefined' || !isFirebaseConfigured) return;
  for (const key of TYPE_KEYS) {
    const cached = readCache(CONTENT_TYPES[key].collection);
    if (cached) apply(key, cached);
  }
}
hydrateFromCache();

/**
 * Revalidate the overlay over the Firestore REST API. Safe to call repeatedly;
 * only the first call does work. Never throws — failures keep cached/static data.
 */
export async function primeCmsOverlay(): Promise<void> {
  if (revalidated || revalidating || !isFirebaseConfigured) return;
  revalidating = true;
  try {
    const results = await Promise.all(
      TYPE_KEYS.map((key) =>
        fetchPublished(CONTENT_TYPES[key].collection)
          .then((docs) => ({ key, docs }))
          .catch((err) => {
            // Surface the reason (e.g. a 403 from security rules) instead of
            // silently falling back to static content.
            console.warn(`[CMS] Failed to load "${CONTENT_TYPES[key].collection}" from Firestore:`, err);
            return { key, docs: [] as CmsDocument[] };
          })
      )
    );
    let changed = false;
    for (const { key, docs } of results) {
      if (docs.length) {
        apply(key, docs);
        writeCache(CONTENT_TYPES[key].collection, docs);
        changed = true;
      }
    }
    revalidated = true;
    if (changed) bump();
  } finally {
    revalidating = false;
  }
}

/**
 * Clear the cache and force a fresh revalidation. Call this after an admin
 * mutation (save/publish/delete) so the public overlay reflects the change
 * immediately, without a hard refresh.
 */
export function invalidateCmsOverlay(): Promise<void> {
  for (const key of TYPE_KEYS) {
    try {
      localStorage.removeItem(cacheKey(CONTENT_TYPES[key].collection));
    } catch {
      /* ignore */
    }
  }
  revalidated = false;
  revalidating = false;
  return primeCmsOverlay();
}

// --- Accessors (null when the overlay has no CMS data for that type) ---------

export const getCmsBlogPosts = (): BlogArticle[] | null => state.blog;
export const getCmsCompanyUpdates = (): CompanyUpdate[] | null => state.companyUpdates;
export const getCmsCaseStudies = (): UnifiedProject[] | null => state.caseStudies;

export function getCmsCaseStudy(idOrSlug: string): UnifiedProject | null {
  const key = (idOrSlug || '').trim().toLowerCase();
  return state.caseStudyById.get(key) ?? null;
}

/**
 * Subscribe a component to overlay changes. Returns a version number that
 * increments when CMS content is (re)loaded, so memoized reads recompute.
 */
export function useCmsOverlay(): number {
  const [v, setV] = useState(version);
  useEffect(() => {
    const listener = () => setV(version);
    listeners.add(listener);
    if (v !== version) setV(version); // catch updates between render and effect
    return () => {
      listeners.delete(listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return v;
}
