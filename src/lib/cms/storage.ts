import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getStorageInstance } from '../firebase';
import { CmsNotConfiguredError } from './client';

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml', 'image/avif'];

/** Slugify a filename while preserving its extension. */
function safeName(name: string): string {
  const dot = name.lastIndexOf('.');
  const base = (dot > 0 ? name.slice(0, dot) : name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  const ext = dot > 0 ? name.slice(dot).toLowerCase().replace(/[^a-z0-9.]/g, '') : '';
  return `${base || 'image'}${ext}`;
}

/**
 * Upload an image to Firebase Storage under cms-uploads/ and return its public
 * download URL. Throws a readable Error on validation failure or missing config.
 */
export async function uploadImage(file: File): Promise<string> {
  const storage = getStorageInstance();
  if (!storage) throw new CmsNotConfiguredError();

  if (!ALLOWED.includes(file.type)) {
    throw new Error(`Unsupported image type: ${file.type || 'unknown'}. Use JPG, PNG, WebP, GIF, SVG or AVIF.`);
  }
  if (file.size > MAX_BYTES) {
    throw new Error(`Image is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max is 8 MB.`);
  }

  const path = `cms-uploads/${Date.now()}-${safeName(file.name)}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, { contentType: file.type });
  return getDownloadURL(storageRef);
}
