import React from 'react';
import { COLORS, inputStyle } from './adminUi';
import { ImageField } from './ImageField';

/**
 * Schema-free recursive form. It infers inputs from the data shape, so it works
 * for every content type (and any future one) without per-type field configs:
 *   string            -> text / textarea (long or multiline)
 *   image-ish key     -> image field with upload
 *   number / boolean  -> number input / checkbox
 *   string[]          -> add/remove list of text inputs
 *   object[]          -> list of nested fieldsets
 *   object            -> nested fieldset
 * Unrepresentable values fall back to a JSON text box for that field.
 */

type Json = unknown;
type Obj = Record<string, Json>;

const IMAGE_KEY = /(image|img|avatar|logo|cover|photo|thumbnail|icon|banner)/i;
const LONG_KEY = /(context|challenge|constraints|approach|solution|overview|description|intro|body|conclusion|summary|statement|takeaway|excerpt|content)/i;

export function humanizeKey(key: string): string {
  const spaced = key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function isPlainObject(v: Json): v is Obj {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function blankLike(sample: Json): Json {
  if (typeof sample === 'string') return '';
  if (typeof sample === 'number') return 0;
  if (typeof sample === 'boolean') return false;
  if (Array.isArray(sample)) return [];
  if (isPlainObject(sample)) {
    const out: Obj = {};
    for (const [k, v] of Object.entries(sample)) out[k] = blankLike(v);
    return out;
  }
  return '';
}

const rowRemoveBtn: React.CSSProperties = {
  background: 'none',
  border: `1px solid ${COLORS.border}`,
  color: COLORS.muted,
  borderRadius: 7,
  cursor: 'pointer',
  padding: '0 10px',
  fontSize: 16,
  lineHeight: 1,
  height: 38,
  flexShrink: 0,
};

const addBtn: React.CSSProperties = {
  background: COLORS.panelAlt,
  border: `1px dashed ${COLORS.border}`,
  color: COLORS.text,
  borderRadius: 8,
  cursor: 'pointer',
  padding: '8px 14px',
  fontSize: 13,
  fontWeight: 600,
  marginTop: 4,
};

const StringList: React.FC<{ label: string; value: string[]; onChange: (v: string[]) => void }> = ({
  label,
  value,
  onChange,
}) => (
  <div style={{ marginBottom: 18 }}>
    <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
      {label} <span style={{ color: COLORS.muted, fontWeight: 400 }}>({value.length})</span>
    </span>
    {value.map((item, i) => (
      <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <textarea
          value={item}
          onChange={(e) => {
            const next = [...value];
            next[i] = e.target.value;
            onChange(next);
          }}
          rows={item.length > 80 ? 2 : 1}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 38 }}
        />
        <button type="button" style={rowRemoveBtn} onClick={() => onChange(value.filter((_, j) => j !== i))} title="Remove">
          ×
        </button>
      </div>
    ))}
    <button type="button" style={addBtn} onClick={() => onChange([...value, ''])}>
      + Add
    </button>
  </div>
);

const ObjectList: React.FC<{ label: string; value: Obj[]; onChange: (v: Obj[]) => void }> = ({
  label,
  value,
  onChange,
}) => {
  const template = value.length ? blankLike(value[0]) : {};
  return (
    <div style={{ marginBottom: 20 }}>
      <span style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
        {label} <span style={{ color: COLORS.muted, fontWeight: 400 }}>({value.length})</span>
      </span>
      {value.map((item, i) => (
        <div
          key={i}
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 10,
            padding: '14px 14px 2px',
            marginBottom: 12,
            background: COLORS.panel,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 12, color: COLORS.muted, fontWeight: 600 }}>#{i + 1}</span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                style={rowRemoveBtn}
                disabled={i === 0}
                onClick={() => {
                  const next = [...value];
                  [next[i - 1], next[i]] = [next[i], next[i - 1]];
                  onChange(next);
                }}
                title="Move up"
              >
                ↑
              </button>
              <button
                type="button"
                style={rowRemoveBtn}
                disabled={i === value.length - 1}
                onClick={() => {
                  const next = [...value];
                  [next[i + 1], next[i]] = [next[i], next[i + 1]];
                  onChange(next);
                }}
                title="Move down"
              >
                ↓
              </button>
              <button
                type="button"
                style={rowRemoveBtn}
                onClick={() => onChange(value.filter((_, j) => j !== i))}
                title="Remove"
              >
                ×
              </button>
            </div>
          </div>
          <FormFields
            value={item}
            onChange={(next) => {
              const arr = [...value];
              arr[i] = next as Obj;
              onChange(arr);
            }}
          />
        </div>
      ))}
      <button type="button" style={addBtn} onClick={() => onChange([...value, template as Obj])}>
        + Add {label.replace(/s$/, '').toLowerCase()}
      </button>
    </div>
  );
};

/** Renders one field given its key and value. */
const FieldNode: React.FC<{ fieldKey: string; value: Json; onChange: (v: Json) => void }> = ({
  fieldKey,
  value,
  onChange,
}) => {
  const label = humanizeKey(fieldKey);

  if (typeof value === 'string' && IMAGE_KEY.test(fieldKey)) {
    return <ImageField label={label} value={value} onChange={onChange} />;
  }

  if (typeof value === 'string') {
    const multiline = value.length > 80 || value.includes('\n') || LONG_KEY.test(fieldKey);
    return (
      <label style={{ display: 'block', marginBottom: 18 }}>
        <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</span>
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={Math.min(12, Math.max(3, Math.ceil(value.length / 70)))}
            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.55 }}
          />
        ) : (
          <input type="text" value={value} onChange={(e) => onChange(e.target.value)} style={inputStyle} />
        )}
      </label>
    );
  }

  if (typeof value === 'number') {
    return (
      <label style={{ display: 'block', marginBottom: 18 }}>
        <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
          style={{ ...inputStyle, width: 200 }}
        />
      </label>
    );
  }

  if (typeof value === 'boolean') {
    return (
      <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, cursor: 'pointer' }}>
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
        <span style={{ fontSize: 13, fontWeight: 600 }}>{label}</span>
      </label>
    );
  }

  if (Array.isArray(value)) {
    if (value.length === 0 || value.every((x) => typeof x === 'string')) {
      return <StringList label={label} value={value as string[]} onChange={onChange} />;
    }
    if (value.every((x) => isPlainObject(x))) {
      return <ObjectList label={label} value={value as Obj[]} onChange={onChange} />;
    }
    // Mixed/odd array — fall back to JSON.
    return <JsonFallback label={label} value={value} onChange={onChange} />;
  }

  if (isPlainObject(value)) {
    return (
      <fieldset
        style={{
          border: `1px solid ${COLORS.border}`,
          borderRadius: 10,
          padding: '14px 14px 2px',
          marginBottom: 20,
          minInlineSize: 'auto',
        }}
      >
        <legend style={{ fontSize: 13, fontWeight: 700, padding: '0 6px' }}>{label}</legend>
        <FormFields value={value} onChange={(v) => onChange(v)} />
      </fieldset>
    );
  }

  // null / undefined — edit as text.
  return (
    <label style={{ display: 'block', marginBottom: 18 }}>
      <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</span>
      <input type="text" value={value == null ? '' : String(value)} onChange={(e) => onChange(e.target.value)} style={inputStyle} />
    </label>
  );
};

const JsonFallback: React.FC<{ label: string; value: Json; onChange: (v: Json) => void }> = ({
  label,
  value,
  onChange,
}) => {
  const [text, setText] = React.useState(JSON.stringify(value, null, 2));
  const [err, setErr] = React.useState<string | null>(null);
  return (
    <label style={{ display: 'block', marginBottom: 18 }}>
      <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label} (JSON)</span>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          try {
            onChange(JSON.parse(e.target.value));
            setErr(null);
          } catch (x) {
            setErr((x as Error).message);
          }
        }}
        rows={6}
        style={{ ...inputStyle, fontFamily: 'ui-monospace, monospace', fontSize: 12.5, borderColor: err ? COLORS.danger : COLORS.border }}
      />
      {err && <span style={{ color: COLORS.danger, fontSize: 12 }}>{err}</span>}
    </label>
  );
};

/** Renders all fields of an object. */
export const FormFields: React.FC<{ value: Obj; onChange: (v: Obj) => void }> = ({ value, onChange }) => (
  <>
    {Object.keys(value).map((k) => (
      <FieldNode
        key={k}
        fieldKey={k}
        value={value[k]}
        onChange={(v) => onChange({ ...value, [k]: v })}
      />
    ))}
  </>
);

export const FormEditor: React.FC<{ value: Obj; onChange: (v: Obj) => void }> = ({ value, onChange }) => (
  <div>
    <FormFields value={value} onChange={onChange} />
  </div>
);
