import type { CmsDocument, ContentStatus } from './types';
import { BLOG_POSTS_DATA, COMPANY_UPDATES_DATA } from '../../data/blogData';
import { UNIFIED_CASE_STUDIES } from '../../data/unifiedCaseStudiesData';

/**
 * Registry of CMS content types. Adding a new managed content type is just a
 * matter of adding an entry here — the admin UI, data layer, and seed importer
 * are all driven generically off this registry.
 */

export type ContentTypeKey = 'blog' | 'caseStudies' | 'companyUpdates';

export interface ContentTypeConfig {
  key: ContentTypeKey;
  /** Firestore collection name. */
  collection: string;
  /** Plural label for lists/nav. */
  label: string;
  /** Singular label for buttons ("New <singular>"). */
  singular: string;
  /** Extract meta fields from a type-specific payload. */
  deriveMeta: (data: Record<string, unknown>) => {
    id: string;
    slug: string;
    title: string;
    order: number;
  };
  /** Build CMS documents from the bundled static data (for the import/seed action). */
  loadSeed: () => CmsDocument[];
}

function str(v: unknown, fallback = ''): string {
  return typeof v === 'string' && v.trim() ? v : fallback;
}

/** Wrap a type-specific payload into a published CmsDocument. */
function toDoc(
  cfg: Pick<ContentTypeConfig, 'deriveMeta'>,
  data: Record<string, unknown>,
  order: number,
  status: ContentStatus = 'published'
): CmsDocument {
  const meta = cfg.deriveMeta(data);
  const now = new Date().toISOString();
  return {
    ...meta,
    order: meta.order || order,
    status,
    createdAt: now,
    updatedAt: now,
    data,
  };
}

export const CONTENT_TYPES: Record<ContentTypeKey, ContentTypeConfig> = {
  blog: {
    key: 'blog',
    collection: 'blog',
    label: 'Blog posts',
    singular: 'Blog post',
    deriveMeta: (d) => ({
      id: str(d.id) || str(d.slug),
      slug: str(d.slug) || str(d.id),
      title: str(d.title, 'Untitled post'),
      order: 0,
    }),
    loadSeed: () =>
      BLOG_POSTS_DATA.map((post, i) =>
        toDoc(CONTENT_TYPES.blog, post as unknown as Record<string, unknown>, i + 1)
      ),
  },

  caseStudies: {
    key: 'caseStudies',
    collection: 'caseStudies',
    label: 'Case studies',
    singular: 'Case study',
    deriveMeta: (d) => ({
      id: str(d.id) || str(d.slug),
      slug: str(d.slug) || str(d.id),
      title: str(d.projectName) || str(d.title, 'Untitled case study'),
      order: 0,
    }),
    loadSeed: () =>
      Object.values(UNIFIED_CASE_STUDIES).map((cs, i) =>
        toDoc(CONTENT_TYPES.caseStudies, cs as unknown as Record<string, unknown>, i + 1)
      ),
  },

  companyUpdates: {
    key: 'companyUpdates',
    collection: 'companyUpdates',
    label: 'Company updates',
    singular: 'Company update',
    deriveMeta: (d) => ({
      id: str(d.id) || str(d.slug),
      slug: str(d.slug) || str(d.id),
      title: str(d.title, 'Untitled update'),
      order: 0,
    }),
    loadSeed: () =>
      COMPANY_UPDATES_DATA.map((u, i) =>
        toDoc(CONTENT_TYPES.companyUpdates, u as unknown as Record<string, unknown>, i + 1)
      ),
  },
};

/** Content types exposed in the admin UI, in display order. */
export const CONTENT_TYPE_ORDER: ContentTypeKey[] = [
  'caseStudies',
  'blog',
  'companyUpdates',
];

export function getContentType(key: string): ContentTypeConfig | undefined {
  return (CONTENT_TYPES as Record<string, ContentTypeConfig>)[key];
}
