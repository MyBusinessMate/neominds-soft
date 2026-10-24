# Neominds — AI-Enabled Product Engineering Frontend 
    
Production-ready, animation-heavy corporate software engineering web application built for **Neominds**.

## 🚀 Key Highlights & Architecture

- **Framework**: React 19 + TypeScript + Vite.
- **Smooth Scrolling & Motion**: Global **Lenis** smooth scrolling coupled 1:1 with **GSAP ScrollTrigger** via custom RAF ticker synchronization (`useLenis.ts`).
- **Design System**: Strict tokenization based on `design.md` with CSS custom properties (`Inter` font weights, `#2258E7` corporate primary blue, `#001334` deep navy background, `#000000` pitch black hero, 0px sharp corner radius).
- **Navigation State Machine**: Full desktop navbar at page top, compact floating pill on scroll, auto-hiding during active scrolling, and delayed re-appearance after ~2s of scroll inactivity.
- **Enterprise Features**:
  - Pinned line-by-line opacity text fill in 23-year experience statement.
  - 5-second automatic crossfade Industry Recognition carousel (Clutch 2026 AI Company & Forrester Wave).
  - Pinned contracting radial blue blob transition into white.
  - Interactive delivery principles with viewport-triggered animated numeric counters.
  - 7-card pinned scroll-stacking services sequence with interactive deep-dive modal.
  - Pinned horizontal scroll track for Case Studies with detailed architectural modal overviews.
  - Split 2-panel contact section with client-side validation, NDA toggles, simulated file upload, voice note waveform recorder, and toast notifications.
  - Quick Search / Command Palette (`⌘K` or `Ctrl+K`) for instant site navigation.
  - GDPR / CCPA Cookie Consent Banner & customization preferences modal.
  - Accessible Skip-to-content links, ARIA labels, and React ErrorBoundary.
  - Full SEO suite (`index.html` Open Graph, Twitter Cards, Schema.org JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt`, `manifest.webmanifest`).

---

## 🛠️ Project Structure

```text
neominds-soft/
├── public/
│   ├── favicon.svg             # SVG Favicon & PWA icon
│   ├── manifest.webmanifest    # Web App Manifest
│   ├── robots.txt              # Search engine crawler rules
│   ├── sitemap.xml             # XML Sitemap
│   ├── llms.txt                # AI Knowledge index
│   └── images/                 # Optimized graphic assets
├── src/
│   ├── components/
│   │   ├── CaseStudiesHorizontal.tsx # Pinned horizontal scroll track
│   │   ├── CaseStudyModal.tsx        # Project deep-dive modal
│   │   ├── CommandPalette.tsx        # Cmd+K Quick Search
│   │   ├── ContactSection.tsx        # Split-panel contact form & media inputs
│   │   ├── CookieConsent.tsx         # GDPR/CCPA Cookie banner
│   │   ├── DeliveryPrinciples.tsx    # Principles & animated counters
│   │   ├── EngineeringBlobSection.tsx# Radial blue blob transition
│   │   ├── ErrorBoundary.tsx         # Production error catcher
│   │   ├── ExperienceSection.tsx     # 23-year text fill & client logos
│   │   ├── Footer.tsx                # 5-column navigation footer
│   │   ├── Header.tsx                # Navbar state machine
│   │   ├── HeroSection.tsx           # Hero with 3D ribbon visual
│   │   ├── IndustryRecognition.tsx   # 5s crossfade carousel
│   │   ├── LegalModal.tsx            # Privacy & Cookie legal modal
│   │   ├── LocationsSection.tsx      # Headquarters office & newsletter
│   │   ├── ServiceModal.tsx          # Service architecture deep-dive
│   │   ├── ServicesStack.tsx         # 7-card pinned scroll stack
│   │   ├── Testimonials.tsx          # 3-column client feedback grid
│   │   └── Toast.tsx                 # Toast notifications
│   ├── hooks/
│   │   └── useLenis.ts               # Lenis + GSAP ScrollTrigger hook
│   ├── App.tsx                       # Root application assembly
│   ├── index.css                     # Global design tokens & CSS utilities
│   └── main.tsx                      # DOM root mount
├── .env.example
├── .gitignore
├── .prettierrc
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The application will be running locally at `http://localhost:5173/`.

### Production Build & Type Check
```bash
npm run build
```

### Preview Production Bundle
```bash
npm run preview
```

---

## 🔒 Security & Performance
- Zero external tracking scripts without user consent.
- Sanitized client inputs and secure forms.
- Sub-second first contentful paint with optimized assets and tree-shaken bundles.
