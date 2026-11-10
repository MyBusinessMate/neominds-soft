import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { getContentType } from '../../lib/cms/collections';
import { listDocuments, deleteDocument, upsertDocument } from '../../lib/cms/client';
import type { CmsDocument } from '../../lib/cms/types';
import { Button, Banner, StatusPill, inputStyle, COLORS, navigate } from './adminUi';
import { useToast } from './toast';
import { invalidateCmsOverlay } from '../../lib/cms/overlay';

export const AdminList: React.FC<{ typeKey: string }> = ({ typeKey }) => {
  const cfg = getContentType(typeKey);
  const toast = useToast();
  const [docs, setDocs] = useState<CmsDocument[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [queryText, setQueryText] = useState('');

  const load = useCallback(async () => {
    if (!cfg) return;
    setError(null);
    try {
      setDocs(await listDocuments(cfg.collection));
    } catch (err) {
      setError((err as Error).message || 'Failed to load.');
      setDocs([]);
    }
  }, [cfg]);

  useEffect(() => {
    void load();
  }, [load]);

  const filtered = useMemo(() => {
    if (!docs) return null;
    const q = queryText.trim().toLowerCase();
    if (!q) return docs;
    return docs.filter((d) => d.title.toLowerCase().includes(q) || d.slug.toLowerCase().includes(q) || d.id.toLowerCase().includes(q));
  }, [docs, queryText]);

  if (!cfg) return <Banner kind="error">Unknown content type: {typeKey}</Banner>;

  const togglePublish = async (d: CmsDocument) => {
    setBusyId(d.id);
    try {
      const nextStatus = d.status === 'published' ? 'draft' : 'published';
      await upsertDocument(cfg.collection, { ...d, status: nextStatus });
      void invalidateCmsOverlay();
      toast.show(`“${d.title || d.id}” ${nextStatus === 'published' ? 'published' : 'unpublished'}.`, 'success');
      await load();
    } catch (err) {
      toast.show((err as Error).message || 'Update failed.', 'error');
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (d: CmsDocument) => {
    if (!window.confirm(`Delete “${d.title || d.id}”? This cannot be undone.`)) return;
    setBusyId(d.id);
    try {
      await deleteDocument(cfg.collection, d.id);
      void invalidateCmsOverlay();
      toast.show(`Deleted “${d.title || d.id}”.`, 'success');
      await load();
    } catch (err) {
      toast.show((err as Error).message || 'Delete failed.', 'error');
    } finally {
      setBusyId(null);
    }
  };

  const duplicate = async (d: CmsDocument) => {
    const existing = new Set((docs ?? []).map((x) => x.id));
    let newId = `${d.id}-copy`;
    let n = 2;
    while (existing.has(newId)) newId = `${d.id}-copy-${n++}`;

    const data = { ...(d.data as Record<string, unknown>) };
    if ('id' in data) data.id = newId;
    if ('slug' in data) data.slug = newId;
    const newTitle = `${d.title} (copy)`;
    if ('title' in data) data.title = newTitle;

    setBusyId(d.id);
    try {
      const copy: CmsDocument = {
        ...d,
        id: newId,
        slug: newId,
        title: newTitle,
        status: 'draft',
        order: d.order + 1,
        data,
      };
      await upsertDocument(cfg.collection, copy);
      void invalidateCmsOverlay();
      toast.show(`Duplicated as draft “${newTitle}”.`, 'success');
      await load();
    } catch (err) {
      toast.show((err as Error).message || 'Duplicate failed.', 'error');
    } finally {
      setBusyId(null);
    }
  };

  // Swap sort order with the adjacent item in the full (unfiltered) list.
  const move = async (d: CmsDocument, dir: -1 | 1) => {
    if (!docs) return;
    const idx = docs.findIndex((x) => x.id === d.id);
    const neighbor = docs[idx + dir];
    if (!neighbor) return;
    setBusyId(d.id);
    try {
      // Ensure distinct order values, then swap them.
      const a = d.order;
      const b = neighbor.order !== a ? neighbor.order : a + dir;
      await Promise.all([
        upsertDocument(cfg.collection, { ...d, order: b }),
        upsertDocument(cfg.collection, { ...neighbor, order: a }),
      ]);
      void invalidateCmsOverlay();
      await load();
    } catch (err) {
      toast.show((err as Error).message || 'Reorder failed.', 'error');
    } finally {
      setBusyId(null);
    }
  };

  const searching = queryText.trim() !== '';

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, gap: 16, flexWrap: 'wrap' }}>
        <div>
          <button
            onClick={() => navigate('/admin')}
            style={{ background: 'none', border: 'none', color: COLORS.muted, cursor: 'pointer', fontSize: 13, padding: 0, marginBottom: 6 }}
          >
            ← Content
          </button>
          <h1 style={{ fontSize: 22 }}>{cfg.label}</h1>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <input
            type="search"
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
            placeholder="Search…"
            style={{ ...inputStyle, width: 200 }}
          />
          <Button variant="primary" onClick={() => navigate(`/admin/${typeKey}/new`)}>
            + New {cfg.singular.toLowerCase()}
          </Button>
        </div>
      </div>

      {error && <Banner kind="error">{error}</Banner>}

      {filtered === null ? (
        <p style={{ color: COLORS.muted }}>Loading…</p>
      ) : filtered.length === 0 ? (
        <Banner kind="info">
          {searching
            ? `No ${cfg.label.toLowerCase()} match “${queryText}”.`
            : `No ${cfg.label.toLowerCase()} yet. Create one, or use “Import content from code” on the dashboard.`}
        </Banner>
      ) : (
        <div style={{ border: `1px solid ${COLORS.border}`, borderRadius: 12, overflow: 'hidden' }}>
          {filtered.map((d, i) => (
            <div
              key={d.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 16px',
                borderTop: i === 0 ? 'none' : `1px solid ${COLORS.border}`,
                background: COLORS.panel,
                opacity: busyId === d.id ? 0.6 : 1,
              }}
            >
              {/* Reorder controls (disabled while searching, since order is ambiguous then) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <button
                  onClick={() => move(d, -1)}
                  disabled={searching || busyId !== null || i === 0}
                  title={searching ? 'Clear search to reorder' : 'Move up'}
                  style={reorderBtn}
                >
                  ↑
                </button>
                <button
                  onClick={() => move(d, 1)}
                  disabled={searching || busyId !== null || i === filtered.length - 1}
                  title={searching ? 'Clear search to reorder' : 'Move down'}
                  style={reorderBtn}
                >
                  ↓
                </button>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 14.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {d.title || d.id}
                </div>
                <div style={{ color: COLORS.muted, fontSize: 12.5, marginTop: 2 }}>/{d.slug}</div>
              </div>
              <StatusPill status={d.status} />
              <Button onClick={() => togglePublish(d)} disabled={busyId !== null}>
                {d.status === 'published' ? 'Unpublish' : 'Publish'}
              </Button>
              <Button onClick={() => duplicate(d)} disabled={busyId !== null}>
                Duplicate
              </Button>
              <Button variant="primary" onClick={() => navigate(`/admin/${typeKey}/${encodeURIComponent(d.id)}`)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => remove(d)} disabled={busyId !== null}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const reorderBtn: React.CSSProperties = {
  background: COLORS.panelAlt,
  border: `1px solid ${COLORS.border}`,
  color: COLORS.muted,
  borderRadius: 5,
  width: 24,
  height: 20,
  fontSize: 11,
  cursor: 'pointer',
  lineHeight: 1,
  padding: 0,
};
