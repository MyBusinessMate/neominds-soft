import React, { useEffect, useState, useCallback } from 'react';
import { CONTENT_TYPE_ORDER, CONTENT_TYPES } from '../../lib/cms/collections';
import { listDocuments, seedCollection } from '../../lib/cms/client';
import { Button, Banner, COLORS, navigate } from './adminUi';

type Counts = Record<string, number | '—'>;

export const AdminDashboard: React.FC = () => {
  const [counts, setCounts] = useState<Counts>({});
  const [importing, setImporting] = useState(false);
  const [message, setMessage] = useState<{ kind: 'success' | 'error' | 'info'; text: string } | null>(null);

  const loadCounts = useCallback(async () => {
    const next: Counts = {};
    for (const key of CONTENT_TYPE_ORDER) {
      const cfg = CONTENT_TYPES[key];
      try {
        const docs = await listDocuments(cfg.collection);
        next[key] = docs.length;
      } catch {
        next[key] = '—';
      }
    }
    setCounts(next);
  }, []);

  useEffect(() => {
    void loadCounts();
  }, [loadCounts]);

  const onImport = async () => {
    if (
      !window.confirm(
        'Import the current site content (case studies, blog, updates) from code into Firestore?\n\n' +
          'Existing documents with the same id are left untouched — only missing ones are added.'
      )
    ) {
      return;
    }
    setImporting(true);
    setMessage(null);
    try {
      let total = 0;
      for (const key of CONTENT_TYPE_ORDER) {
        const cfg = CONTENT_TYPES[key];
        const written = await seedCollection(cfg.collection, cfg.loadSeed(), { skipExisting: true });
        total += written;
      }
      setMessage({
        kind: 'success',
        text:
          total === 0
            ? 'Nothing to import — all content already exists in Firestore.'
            : `Imported ${total} document${total === 1 ? '' : 's'} from code.`,
      });
      await loadCounts();
    } catch (err) {
      setMessage({ kind: 'error', text: (err as Error).message || 'Import failed.' });
    } finally {
      setImporting(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1 style={{ fontSize: 22 }}>Content</h1>
        <Button variant="ghost" onClick={onImport} disabled={importing}>
          {importing ? 'Importing…' : 'Import content from code'}
        </Button>
      </div>

      {message && <Banner kind={message.kind}>{message.text}</Banner>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 16 }}>
        {CONTENT_TYPE_ORDER.map((key) => {
          const cfg = CONTENT_TYPES[key];
          const count = counts[key];
          return (
            <button
              key={key}
              onClick={() => navigate(`/admin/${key}`)}
              style={{
                textAlign: 'left',
                background: COLORS.panel,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 12,
                padding: 18,
                cursor: 'pointer',
                color: COLORS.text,
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.brand)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
            >
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{cfg.label}</div>
              <div style={{ color: COLORS.muted, fontSize: 13 }}>
                {count === undefined ? 'Loading…' : count === '—' ? 'Unavailable' : `${count} item${count === 1 ? '' : 's'}`}
              </div>
            </button>
          );
        })}
      </div>

      <p style={{ color: COLORS.muted, fontSize: 12.5, marginTop: 28, lineHeight: 1.6 }}>
        Tip: run “Import content from code” once to seed Firestore with the content currently shipped
        in the site. After that, edits you make here become the source of truth for published content.
      </p>
    </div>
  );
};
