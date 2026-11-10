import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { getContentType } from '../../lib/cms/collections';
import { getDocument, upsertDocument, listDocuments } from '../../lib/cms/client';
import type { CmsDocument, ContentStatus } from '../../lib/cms/types';
import { newMeta } from '../../lib/cms/types';
import { AdminShell, Button, Field, Banner, StatusPill, inputStyle, COLORS, navigate } from './adminUi';
import { FormEditor } from './FormEditor';
import { useToast } from './toast';
import { invalidateCmsOverlay } from '../../lib/cms/overlay';

type Obj = Record<string, unknown>;

/** Blank payload for a new document: clone the first seed item's shape, cleared. */
function blankPayload(seed: CmsDocument | undefined): Obj {
  if (!seed) return { id: '', slug: '', title: '' };
  const clone = JSON.parse(JSON.stringify(seed.data)) as Obj;
  for (const k of ['id', 'slug', 'title', 'name', 'projectName']) {
    if (k in clone) clone[k] = '';
  }
  return clone;
}

export const AdminEditor: React.FC<{ typeKey: string; id: string | null }> = ({ typeKey, id }) => {
  const cfg = getContentType(typeKey);
  const isNew = id === null;
  const toast = useToast();

  const seedSample = useMemo(() => (cfg ? cfg.loadSeed()[0] : undefined), [cfg]);

  const [loading, setLoading] = useState(!isNew);
  const [original, setOriginal] = useState<CmsDocument | null>(null);
  const [data, setData] = useState<Obj>({});
  const [status, setStatus] = useState<ContentStatus>('draft');
  const [order, setOrder] = useState<number>(0);
  const [mode, setMode] = useState<'form' | 'json'>('form');
  const [jsonText, setJsonText] = useState('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [takenIds, setTakenIds] = useState<Set<string>>(new Set());
  const [baseline, setBaseline] = useState('');

  // Snapshot used for dirty-tracking.
  const snapshot = useMemo(
    () => JSON.stringify({ data, status, order }),
    [data, status, order]
  );
  const dirty = baseline !== '' && snapshot !== baseline;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!cfg) return;
      // Existing ids for uniqueness checks (best-effort).
      listDocuments(cfg.collection)
        .then((docs) => !cancelled && setTakenIds(new Set(docs.map((d) => d.id))))
        .catch(() => {});

      if (isNew) {
        const d = blankPayload(seedSample);
        setData(d);
        setStatus('draft');
        setOrder(0);
        setBaseline(JSON.stringify({ data: d, status: 'draft', order: 0 }));
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const doc = await getDocument(cfg.collection, id!);
        if (cancelled) return;
        if (!doc) {
          setError('Document not found.');
        } else {
          setOriginal(doc);
          setData(doc.data as Obj);
          setStatus(doc.status);
          setOrder(doc.order);
          setBaseline(JSON.stringify({ data: doc.data, status: doc.status, order: doc.order }));
        }
      } catch (err) {
        if (!cancelled) setError((err as Error).message || 'Failed to load.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [cfg, id, isNew, seedSample]);

  // Warn before leaving the tab with unsaved changes.
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (dirty && !saving) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [dirty, saving]);

  const derived = cfg ? cfg.deriveMeta(data) : null;

  const switchMode = useCallback(
    (next: 'form' | 'json') => {
      if (next === 'json') {
        setJsonText(JSON.stringify(data, null, 2));
        setJsonError(null);
      }
      setMode(next);
    },
    [data]
  );

  const onJsonChange = (text: string) => {
    setJsonText(text);
    try {
      const parsed = JSON.parse(text) as Obj;
      setData(parsed);
      setJsonError(null);
    } catch (e) {
      setJsonError((e as Error).message);
    }
  };

  const leave = useCallback(() => {
    if (!cfg) return;
    if (dirty && !window.confirm('Discard unsaved changes?')) return;
    navigate(`/admin/${typeKey}`);
  }, [cfg, dirty, typeKey]);

  if (!cfg) {
    return (
      <AdminShell title="Editor">
        <Banner kind="error">Unknown content type: {typeKey}</Banner>
      </AdminShell>
    );
  }

  const save = async () => {
    setError(null);
    if (mode === 'json' && jsonError) {
      setError(`Fix the JSON first: ${jsonError}`);
      return;
    }
    const meta = cfg.deriveMeta(data);
    if (!meta.id) {
      setError('This content needs an "id" (or "slug") before it can be saved.');
      return;
    }
    if (!meta.title.trim()) {
      setError('Title is required.');
      return;
    }
    // Uniqueness: block a NEW doc (or a changed id) colliding with an existing one.
    if ((isNew || meta.id !== original?.id) && takenIds.has(meta.id)) {
      setError(`The id "${meta.id}" is already taken. Choose a different slug/id.`);
      return;
    }
    setSaving(true);
    try {
      const base = original ?? { ...newMeta(meta.id), data: {} };
      const next: CmsDocument = {
        ...base,
        id: meta.id,
        slug: meta.slug || meta.id,
        title: meta.title,
        status,
        order: Number.isFinite(order) ? order : meta.order,
        data,
      };
      await upsertDocument(cfg.collection, next);
      void invalidateCmsOverlay(); // refresh the public overlay with this change
      setBaseline(snapshot); // mark clean so the unload guard won't fire
      toast.show(`Saved “${meta.title}”.`, 'success');
      navigate(`/admin/${typeKey}`);
    } catch (err) {
      setError((err as Error).message || 'Save failed.');
      setSaving(false);
    }
  };

  return (
    <AdminShell
      title={`${cfg.singular} · ${isNew ? 'New' : 'Edit'}`}
      right={
        <>
          {dirty && <span style={{ color: COLORS.brand, fontSize: 12.5 }}>● Unsaved</span>}
          <Button onClick={leave} disabled={saving}>
            Cancel
          </Button>
          <Button variant="primary" onClick={save} disabled={saving || loading || (mode === 'json' && !!jsonError)}>
            {saving ? 'Saving…' : 'Save'}
          </Button>
        </>
      }
    >
      {loading ? (
        <p style={{ color: COLORS.muted }}>Loading…</p>
      ) : (
        <>
          {error && <Banner kind="error">{error}</Banner>}

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: 8 }}>
            <Field label="Status">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ContentStatus)}
                style={{ ...inputStyle, width: 170 }}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </Field>
            <Field label="Sort order" hint="Lower numbers appear first.">
              <input
                type="number"
                value={order}
                onChange={(e) => setOrder(parseInt(e.target.value, 10) || 0)}
                style={{ ...inputStyle, width: 110 }}
              />
            </Field>
            <div style={{ flex: 1, minWidth: 180 }}>
              <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Preview</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 10 }}>
                <StatusPill status={status} />
                <span style={{ color: COLORS.muted, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {derived ? `${derived.title || '(no title)'} · /${derived.slug || '(no slug)'}` : ''}
                </span>
              </div>
            </div>
            {/* Form / JSON toggle */}
            <div style={{ display: 'inline-flex', border: `1px solid ${COLORS.border}`, borderRadius: 8, overflow: 'hidden', marginBottom: 10 }}>
              {(['form', 'json'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => switchMode(m)}
                  style={{
                    padding: '8px 16px',
                    fontSize: 13,
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    background: mode === m ? COLORS.brand : 'transparent',
                    color: mode === m ? '#fff' : COLORS.text,
                  }}
                >
                  {m === 'form' ? 'Form' : 'JSON'}
                </button>
              ))}
            </div>
          </div>

          {mode === 'form' ? (
            <div style={{ marginTop: 10 }}>
              <FormEditor value={data} onChange={setData} />
            </div>
          ) : (
            <Field label="Content (JSON)" hint="The exact structure the public site renders.">
              <textarea
                value={jsonText}
                onChange={(e) => onJsonChange(e.target.value)}
                spellCheck={false}
                style={{
                  ...inputStyle,
                  minHeight: 440,
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                  fontSize: 13,
                  lineHeight: 1.55,
                  resize: 'vertical',
                  borderColor: jsonError ? COLORS.danger : COLORS.border,
                }}
              />
              {jsonError && <Banner kind="error">Invalid JSON: {jsonError}</Banner>}
            </Field>
          )}
        </>
      )}
    </AdminShell>
  );
};
