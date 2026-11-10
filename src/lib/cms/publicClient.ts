import { firebaseConfig } from '../firebaseConfig';
import type { CmsDocument } from './types';

/**
 * Lightweight PUBLIC read path using the Firestore REST API.
 *
 * The public site only ever needs to read PUBLISHED documents, which the
 * security rules expose without auth. Doing this over plain `fetch` (instead of
 * the Firebase JS SDK) keeps the ~500 KB SDK entirely off the public bundle —
 * visitors download a few KB of JSON instead. The SDK is still used for the
 * authenticated admin (writes, drafts).
 */

const BASE = 'https://firestore.googleapis.com/v1';

// --- Firestore REST typed-value decoding ------------------------------------

type RestValue = Record<string, unknown>;

function decodeValue(v: RestValue): unknown {
  if (v == null) return null;
  if ('stringValue' in v) return v.stringValue as string;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue as number;
  if ('booleanValue' in v) return v.booleanValue as boolean;
  if ('nullValue' in v) return null;
  if ('timestampValue' in v) return v.timestampValue as string;
  if ('mapValue' in v) return decodeFields(((v.mapValue as RestValue).fields as Record<string, RestValue>) || {});
  if ('arrayValue' in v) {
    const values = ((v.arrayValue as RestValue).values as RestValue[]) || [];
    return values.map(decodeValue);
  }
  return undefined;
}

function decodeFields(fields: Record<string, RestValue>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const k of Object.keys(fields)) out[k] = decodeValue(fields[k]);
  return out;
}

function docIdFromName(name: string): string {
  return name.slice(name.lastIndexOf('/') + 1);
}

/**
 * Fetch all PUBLISHED documents of a collection over REST.
 * Returns them sorted by `order`. Throws on network / HTTP error so the caller
 * can fall back to cache or static data.
 */
export async function fetchPublished(
  collectionName: string,
  signal?: AbortSignal
): Promise<CmsDocument[]> {
  const { projectId, apiKey } = firebaseConfig;
  if (!projectId || !apiKey) throw new Error('Firebase not configured');

  const url = `${BASE}/projects/${projectId}/databases/(default)/documents:runQuery?key=${apiKey}`;
  const body = {
    structuredQuery: {
      from: [{ collectionId: collectionName }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'status' },
          op: 'EQUAL',
          value: { stringValue: 'published' },
        },
      },
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) throw new Error(`Firestore REST ${res.status}`);

  const rows = (await res.json()) as Array<{ document?: { name: string; fields?: Record<string, RestValue> } }>;
  const docs: CmsDocument[] = [];
  for (const row of rows) {
    if (!row.document) continue; // skip read-time-only rows
    const fields = decodeFields(row.document.fields || {});
    docs.push({
      id: docIdFromName(row.document.name),
      slug: (fields.slug as string) ?? '',
      title: (fields.title as string) ?? '',
      status: (fields.status as CmsDocument['status']) ?? 'published',
      order: (fields.order as number) ?? 0,
      createdAt: (fields.createdAt as string) ?? '',
      updatedAt: (fields.updatedAt as string) ?? '',
      data: (fields.data as Record<string, unknown>) ?? {},
    });
  }
  return docs.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
