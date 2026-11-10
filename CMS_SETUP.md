# NeoMinds CMS — setup guide

A lightweight content management system for the site, built on **Firebase
Firestore** (database) + **Firebase Auth** (admin login). No separate backend
or serverless functions — the site talks to Firestore directly, with access
locked down by security rules.

The admin lives at **`/admin`**. Public visitors never see it, and the admin
code is lazy-loaded so it doesn't bloat the normal site bundle.

---

## 1. One-time Firebase setup (~5 minutes)

1. Go to <https://console.firebase.google.com> → **Add project** (name it e.g.
   `neominds-cms`). Google Analytics is optional.

2. **Create the database:** Build → **Firestore Database** → **Create database**
   → *Production mode* → pick a region close to your users.

3. **Enable login:** Build → **Authentication** → **Get started** →
   **Email/Password** → enable → Save.

4. **Create your admin user:** Authentication → **Users** → **Add user** →
   enter your email + a strong password. Copy the generated **User UID**.

5. **Grant admin access (bootstrap):** Firestore Database → **Start collection**
   → Collection ID `admins` → Document ID = the **User UID** from step 4 →
   add any field (e.g. `email: "you@..."`) → Save.
   *(This `admins/{uid}` document is what the security rules check. A login
   without a matching admins doc has no access.)*

6. **Publish the security rules:** Firestore Database → **Rules** → paste the
   contents of [`firestore.rules`](./firestore.rules) → **Publish**.
   *(Or `firebase deploy --only firestore:rules` with the Firebase CLI.)*

   **For image uploads:** Build → **Storage** → **Get started** (accept the
   default bucket). Then Storage → **Rules** → paste [`storage.rules`](./storage.rules)
   → **Publish**. (Skip this if you don't need in-CMS image uploads.)

7. **Get the web config:** Project settings (gear icon) → **General** → scroll to
   **Your apps** → **Web** (`</>`) → register an app → copy the `firebaseConfig`
   values.

---

## 2. Wire the config into the app

### Local development
Copy `.env.example` to `.env` and fill in the values from step 7:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Then `npm run dev` and open <http://localhost:5173/admin>.

### Production (Vercel)
Add the same six `VITE_FIREBASE_*` keys in **Vercel → Project → Settings →
Environment Variables** (Production + Preview), then redeploy.

> These values are **public by design** (they ship in the client bundle).
> Security is enforced by the Firestore rules + Auth, not by hiding them.

---

## 3. Seed the content

1. Sign in at `/admin`.
2. On the dashboard, click **Import content from code**. This copies the content
   currently shipped in `src/data/*.ts` (case studies, blog, company updates,
   team) into Firestore. Re-running is safe — it only adds items that don't
   already exist.

---

## 4. Using the CMS

- **Dashboard** (`/admin`) — content types with item counts.
- **List** (`/admin/:type`) — publish/unpublish, edit, delete, or create items.
- **Editor** (`/admin/:type/:id`) — set **status** (draft/published) and **sort
  order**, then edit content with either:
  - **Form** (default) — labeled fields generated from the content shape: text,
    long text, numbered lists (add/remove/reorder), nested sections, and image
    fields with an **Upload** button (uploads to Firebase Storage).
  - **JSON** — the raw structure, for power edits. The two stay in sync; switch
    anytime with the Form/JSON toggle.
  - "New" starts from a blank copy of an existing item's shape. The editor warns
    on unsaved changes, requires a title + id/slug, and blocks duplicate ids.
- **List** extras: search, **Duplicate** (creates a draft copy), and **↑/↓**
  reordering (persists sort order). Actions show a toast confirmation.
- Only **published** items appear on the public site. Drafts are visible only to
  signed-in admins.

## Managing admins
Add another admin by creating a Firebase Auth user, then adding an
`admins/{their-uid}` document in Firestore. Remove access by deleting that doc.

## Security model
Authorization is enforced **server-side by `firestore.rules`**: reads of drafts
and all writes require an `admins/{uid}` document to exist. A Firebase account
without one cannot read drafts or write anything, even via the SDK directly.
The admin UI also checks `admins/{uid}` client-side and shows a “Not authorized”
screen to non-admins, but that is only UX — the rules are the real boundary.
The site never calls `createUserWithEmailAndPassword`, so there is no public
sign-up path through the app; create admin users in the Firebase console.

## Files
| Path | Purpose |
|------|---------|
| `src/lib/firebase.ts` | Firebase initialization from env vars |
| `src/lib/cms/` | types, content-type registry, Firestore CRUD, auth |
| `src/components/admin/` | admin UI (login, dashboard, list, editor, form editor, image field, toasts) |
| `src/lib/cms/storage.ts` | Firebase Storage image upload helper |
| `firestore.rules` | Firestore rules (public read published, admin-only write) |
| `storage.rules` | Storage rules (public read, admin-only image upload) |
