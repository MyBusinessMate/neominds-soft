import React, { useRef, useState } from 'react';
import { uploadImage } from '../../lib/cms/storage';
import { COLORS, inputStyle, Button } from './adminUi';

/** Looks like something we can preview as an image. */
function isPreviewable(v: string): boolean {
  return /^(https?:\/\/|\/)/.test(v) && /\.(png|jpe?g|webp|gif|svg|avif)(\?|$)/i.test(v) || v.startsWith('http');
}

export const ImageField: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
}> = ({ label, value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onPick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setError(null);
      setUploading(true);
      try {
        const url = await uploadImage(file);
        onChange(url);
      } catch (err) {
        setError((err as Error).message || 'Upload failed.');
      } finally {
        setUploading(false);
        if (inputRef.current) inputRef.current.value = '';
      }
    }
  };

  return (
    <label style={{ display: 'block', marginBottom: 18 }}>
      <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</span>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        {value && isPreviewable(value) && (
          <img
            src={value}
            alt=""
            style={{
              width: 56,
              height: 56,
              objectFit: 'cover',
              borderRadius: 8,
              border: `1px solid ${COLORS.border}`,
              flexShrink: 0,
              background: COLORS.panelAlt,
            }}
            onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
          />
        )}
        <div style={{ flex: 1 }}>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/uploads/... or https://..."
            style={inputStyle}
          />
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 8 }}>
            <Button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              style={{ padding: '6px 12px', fontSize: 13 }}
            >
              {uploading ? 'Uploading…' : 'Upload image'}
            </Button>
            {value && (
              <button
                type="button"
                onClick={() => onChange('')}
                style={{ background: 'none', border: 'none', color: COLORS.muted, cursor: 'pointer', fontSize: 12.5 }}
              >
                Clear
              </button>
            )}
          </div>
          {error && <div style={{ color: COLORS.danger, fontSize: 12.5, marginTop: 6 }}>{error}</div>}
        </div>
      </div>
      <input ref={inputRef} type="file" accept="image/*" onChange={onPick} style={{ display: 'none' }} />
    </label>
  );
};
