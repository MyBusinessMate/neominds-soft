/**
 * Core CMS document model.
 *
 * Every content type (blog posts, case studies, team members, ...) is stored
 * as a Firestore document in its own collection. We keep a small set of shared
 * meta fields on every document and store the full, type-specific payload under
 * `data` (matching the existing TypeScript interfaces in src/data/*.ts).
 */

export type ContentStatus = 'draft' | 'published';

/** Shared envelope stored on every CMS document. */
export interface CmsMeta {
  /** Stable id; also used as the Firestore document id. */
  id: string;
  /** URL slug (falls back to id when absent). */
  slug: string;
  /** Human-readable title for admin lists. */
  title: string;
  status: ContentStatus;
  /** Sort order for listings (ascending). */
  order: number;
  /** ISO timestamps, maintained by the client layer. */
  createdAt: string;
  updatedAt: string;
}

/**
 * A stored CMS document: the shared meta plus the type-specific payload.
 * `data` holds the exact shape consumed by the public site (e.g. BlogArticle,
 * UnifiedProject), so published documents can be used as-is.
 */
export interface CmsDocument<T = Record<string, unknown>> extends CmsMeta {
  data: T;
}

/** Default meta for a brand-new document of a given type. */
export function newMeta(id: string): CmsMeta {
  const now = new Date().toISOString();
  return {
    id,
    slug: id,
    title: '',
    status: 'draft',
    order: 0,
    createdAt: now,
    updatedAt: now,
  };
}
