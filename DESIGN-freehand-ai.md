---
name: Freehand
url: https://www.freehand.ai/
colors:
  primary: '#fe6200'
  primary-hover: '#cf5000'
  background: '#ffffff'
  surface-light: '#f1efeb'
  background-dark: '#200b00'
  surface-dark-subtle: '#351505'
  text-primary: '#000000'
  text-muted: '#868683'
  text-inverse: '#ffffff'
  border-light: '#e4e2e1'
  border-dark: '#351505'
  fail-contrast-orange: '#fe6507'
typography:
  display:
    family: 'BL Pylon Serif'
    size: 64px
    weight: 400
    line-height: 1.2
  heading-1:
    family: 'BL Pylon Serif'
    size: 36px
    weight: 400
    line-height: 1.2
  body:
    family: 'Fustat'
    size: 18px
    weight: 400
    line-height: 1.5
  body-small:
    family: 'Fustat'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Fustat'
    size: 14px
    weight: 400
    line-height: 1.5
  code:
    family: 'Geist Mono'
    size: 16px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 8, 12, 16, 20, 24, 32, 48, 64, 80]
radius:
  sm: 1px
  md: 10px
  full: 9999px
elevation:
  dropdown-nested: 1
  dropdown-main: 3
  resources-wrap: 5
  nav-overlay: 9
  cookie-banner: 10
  dropdown-toggle: 900
  navbar-component: 999
  modal: 1000
layout:
  breakpoints:
    mobile-max: '479px'
    tablet-max: '767px'
    desktop-small-max: '991px'
    desktop-min: '768px'
motion:
  duration-base: '0.38s'
  easing-standard: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
  easing-button: 'cubic-bezier(0.187, 0.938, 0.355, 1)'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '0px'
    padding: '12.8px 24px'
    font-weight: 500
  card:
    bg: '{colors.surface-light}'
    radius: '{radius.md}'
    padding: '32px'
  input:
    bg: '{colors.background}'
    border: '1px solid {colors.border-light}'
    radius: '{radius.sm}'
    padding: '12px 16px'
  nav-link:
    color: '{colors.text-primary}'
    font-size: '16px'
    font-weight: 400
  link-standard:
    color: '{colors.text-primary}'
    text-decoration: 'underline'
---

# Design System Inspired by Freehand

## 1. Visual Theme & Atmosphere
Freehand's design system projects an atmosphere of sophisticated, data-driven efficiency, primarily through a rich, dark brown background (`#200b00`) contrasted with a vibrant orange (`#fe6200`) for key interactive elements. Typography leverages the elegant serif `BL Pylon Serif` for impactful display text like "AI teams for complex spend management" at `64px`, while the sans-serif `Fustat` ensures readability for body content at `18px`. The overall aesthetic is grounded by off-white sections (`#f1efeb`) and dark text (`#000000`), creating a warm yet professional digital environment.

The brand's signature visual element is a 3D rendered metallic AI chip, often presented with subtle glow effects and layered data visualizations, reinforced by abstract organic line animations powered by GSAP and Lottie. Autoplay video heroes further enhance engagement. The layout emphasizes strong visual hierarchy through generous vertical spacing, often `64px` or `80px` between sections, and a consistent use of `10px` border-radius on content cards, balancing sharpness with approachability.

**Key Characteristics**
*   **Color Palette**: Deep brown (`#200b00`) and vibrant orange (`#fe6200`).
*   **Typography**: Serif `BL Pylon Serif` for display, `Fustat` for body.
*   **Imagery**: 3D rendered AI chips and logistics photography.
*   **Motion**: GSAP/Lottie animations and autoplay video heroes.
*   **Layout**: Ample `64px` vertical spacing, `10px` card radius.
*   **Contrast**: High contrast text on backgrounds for readability.
*   **Interactivity**: Orange (`#fe6200`) highlights for interactive elements.

## 2. Color Palette & Roles
The Freehand color palette is built around a strong brand orange and a deep, earthy brown, supported by a neutral scale for readability and hierarchy.

-   **Primary**
    -   **Primary Orange** (`#fe6200`) — The core brand color, used for calls-to-action, key highlights, and interactive elements. It signifies action and focus.
-   **Interactive**
    -   **Primary Orange Hover** (`#cf5000`) — A darker shade of the primary orange, applied to buttons and interactive elements on hover to provide clear feedback.
-   **Neutral Scale**
    -   **Background Light** (`#ffffff`) — The main background color for most page sections, providing a clean and bright canvas.
    -   **Surface Subtle** (`#f1efeb`) — A light, off-white background used for cards, secondary sections, and subtle content separation.
    -   **Background Dark** (`#200b00`) — The dominant dark background color for hero sections and feature blocks, establishing a premium and immersive feel.
    -   **Surface Dark Subtle** (`#351505`) — A slightly lighter, warm brown used for borders or subtle dividers within dark sections.
    -   **Text Primary** (`#000000`) — The default color for main body text, headings, and primary content on light backgrounds.
    -   **Text Muted** (`#868683`) — A charcoal brown used for secondary text, captions, and less prominent information on light backgrounds.
    -   **Text Inverse** (`#ffffff`) — White text used exclusively on dark backgrounds (`#200b00` or `#351505`) to ensure high readability.
    -   **Border Light** (`#e4e2e1`) — A light grey used for subtle borders, dividers, and input outlines on light backgrounds.
    -   **Border Dark** (`#351505`) — A dark brown border color used on dark backgrounds, often matching `surface-dark-subtle`.
    -   **Fail Contrast Orange** (`#fe6507`) — An orange shade similar to primary, but specifically identified as failing AA contrast on `#ffffff` backgrounds.

## 3. Typography Rules
Freehand employs a distinct typographic hierarchy, balancing a classic serif for impact with a modern sans-serif for clarity.

-   **Font Family**:
    -   Primary Headings: `'BL Pylon Serif', serif`
    -   Body Text: `'Fustat', sans-serif`
    -   Monospace: `'Geist Mono', monospace`
-   **Hierarchy**:
    -   **Display**: `BL Pylon Serif` `64px` `400` · line-height `1.2` · tracking `none` · Used for prominent hero titles and major section headers.
    -   **H1**: `BL Pylon Serif` `36px` `400` · line-height `1.2` · tracking `none` · Used for main content headings within sections.
    -   **Body**: `Fustat` `18px` `400` · line-height `1.5` · tracking `none` · The default text size for main paragraphs and detailed content.
    -   **Body Small**: `Fustat` `16px` `400` · line-height `1.5` · tracking `none` · Used for secondary paragraphs, lists, and general informational text.
    -   **Caption**: `Fustat` `14px` `400` · line-height `1.5` · tracking `none` · Applied to metadata, footnotes, and small descriptive text.
    -   **Code/Mono**: `Geist Mono` `16px` `400` · line-height `1.5` · tracking `none` · Reserved for code snippets, technical terms, or specific data labels.
-   **Principles**
    -   **Distinctive Pairing**: `BL Pylon Serif` is reserved for high-impact display and heading roles, creating a sophisticated brand voice, while `Fustat` provides clear readability for all body content.
    -   **Minimal Weight Variation**: The design primarily uses a `400` (Regular) weight for both serif and sans-serif families, with `500` (Medium) for specific interactive elements, maintaining visual calm.
    -   **Generous Line Height**: A consistent line-height of `1.5` for body text and `1.2` for headings ensures comfortable reading and ample vertical space.
    -   **Purposeful Hierarchy**: Type sizes `64px`, `36px`, `18px`, `16px`, and `14px` are carefully chosen to establish a clear visual hierarchy without excessive variation.

## 4. Component Stylings

### Buttons
Freehand buttons are designed for clear calls to action, utilizing the brand's primary orange and sharp, unrounded edges. All buttons include a `0.38s` transition with `cubic-bezier(0.187, 0.938, 0.355, 1)` for smooth state changes.

#### Primary Button
The primary button is a solid orange rectangle, indicating the most important actions.
```css
.button-primary {
  background-color: var(--colors-primary, #fe6200);
  color: var(--colors-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Fustat'), sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 12.8px 24px;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.38s) var(--motion-easing-button, cubic-bezier(0.187, 0.938, 0.355, 1));
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #cf5000);
}

.button-primary:active {
  background-color: var(--colors-primary-hover, #cf5000); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--colors-border-light, #e4e2e1); /* inferred from screenshot */
  color: var(--colors-text-muted, #868683); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Secondary Button
Secondary buttons are text-based with a subtle border, used for less prominent actions.
```css
.button-secondary {
  background-color: transparent;
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'Fustat'), sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 12.8px 24px;
  border: 1px solid var(--colors-text-primary, #000000); /* inferred from screenshot */
  border-radius: 0px;
  cursor: pointer;
  transition: color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1)), border-color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.button-secondary:hover {
  color: var(--colors-primary, #fe6200);
  border-color: var(--colors-primary, #fe6200);
}

.button-secondary:active {
  color: var(--colors-primary, #fe6200); /* inferred from screenshot */
  border-color: var(--colors-primary, #fe6200); /* inferred from screenshot */
}

.button-secondary:disabled {
  color: var(--colors-text-muted, #868683); /* inferred from screenshot */
  border-color: var(--colors-text-muted, #868683); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Ghost Button
Ghost buttons are text-only, used for tertiary actions or navigation within content, with a `0.38s` color transition.
```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'Fustat'), sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 12px; /* inferred from screenshot */
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.button-ghost:hover {
  color: var(--colors-primary, #fe6200);
}

.button-ghost:active {
  color: var(--colors-primary-hover, #cf5000); /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--colors-text-muted, #868683); /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers
Cards are used to group related content, featuring a `10px` border-radius and a subtle hover effect.

#### Standard Card
A light, elevated container for content, with a slight `translateY` and `box-shadow` on hover to indicate interactivity.
```css
.card-standard {
  background-color: var(--colors-surface-light, #f1efeb);
  color: var(--colors-text-primary, #000000);
  padding: 32px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-md, 10px);
  box-shadow: none; /* inferred from screenshot */
  transition: transform var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1)), box-shadow var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.card-standard:hover {
  transform: translateY(-4px); /* inferred from screenshot */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08); /* inferred from screenshot */
}
```

#### Dark Card
Used for content sections on dark backgrounds, maintaining the `10px` border-radius.
```css
.card-dark {
  background-color: var(--colors-surface-dark-subtle, #351505);
  color: var(--colors-text-inverse, #ffffff);
  padding: 32px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-md, 10px);
}
```

### Inputs & Forms
Form elements are clean and functional, with clear focus states and `1px` border-radius.

#### Text Input
Standard text input field with a subtle border and a distinct focus ring.
```css
.input-text {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'Fustat'), sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--colors-border-light, #e4e2e1);
  border-radius: var(--radius-sm, 1px);
  transition: border-color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1)), box-shadow var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.input-text:focus {
  border-color: var(--colors-primary, #fe6200);
  outline: none;
  box-shadow: 0 0 0 2px var(--colors-primary, #fe6200); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: #eeeeee; /* from pseudoStates.disabled */
  color: var(--colors-text-muted, #868683); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Form Label
Labels for form fields, typically `16px` and `500` weight for emphasis.
```css
.form-label {
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'Fustat'), sans-serif;
  font-size: 16px;
  font-weight: 500; /* inferred from screenshot */
  margin-bottom: 8px; /* inferred from screenshot */
  display: block;
}
```

### Navigation

#### Top Navigation Bar
The main navigation bar, which can be transparent on hero sections and becomes opaque on scroll. It uses a `0.38s` background color transition.
```css
.nav-bar {
  background-color: transparent; /* default on hero */
  color: var(--colors-text-primary, #000000);
  padding: 16px 80px; /* inferred from screenshot */
  position: sticky;
  top: 0;
  z-index: var(--elevation-navbar-component, 999);
  transition: background-color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.nav-bar.scrolled {
  background-color: var(--colors-background, #ffffff);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05); /* inferred from screenshot */
}
```

#### Navigation Link
Individual links within the navigation bar, featuring a `0.38s` color transition on hover.
```css
.nav-link {
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'Fustat'), sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 12px; /* inferred from screenshot */
  transition: color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.nav-link:hover {
  color: var(--colors-primary, #fe6200);
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-primary, #fe6200);
  border-bottom: 2px solid var(--colors-primary, #fe6200); /* inferred from screenshot */
}
```

#### Dropdown Menu
A container for nested navigation items, appearing with a `10px` border-radius.
```css
.dropdown-menu {
  background-color: var(--colors-background, #ffffff);
  border: 1px solid var(--colors-border-light, #e4e2e1);
  border-radius: var(--radius-md, 10px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08); /* inferred from screenshot */
  padding: 16px 0; /* inferred from screenshot */
  z-index: var(--elevation-dropdown-toggle, 900);
}

.dropdown-menu .dropdown-link {
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'Fustat'), sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 10px 20px; /* inferred from screenshot */
  display: block;
  transition: background-color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.dropdown-menu .dropdown-link:hover {
  background-color: var(--colors-surface-light, #f1efeb); /* inferred from screenshot */
}
```

### Links

#### Standard Link
Default inline text links, underlined for discoverability, with a `0.38s` color transition.
```css
.link-standard {
  color: var(--colors-text-primary, #000000);
  text-decoration: underline;
  transition: color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.link-standard:hover {
  color: var(--colors-primary, #fe6200);
  text-decoration: none;
}

.link-standard:visited {
  color: var(--colors-text-muted, #868683); /* inferred from screenshot */
}
```

#### Secondary Link
Links used for less prominent information, often in footers or sidebars, with a `0.38s` color transition.
```css
.link-secondary {
  color: var(--colors-text-muted, #868683);
  text-decoration: none;
  transition: color var(--motion-duration-base, 0.38s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.link-secondary:hover {
  color: var(--colors-primary, #fe6200);
  text-decoration: underline;
}

.link-secondary:visited {
  color: var(--colors-text-muted, #868683); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles
Freehand's layout emphasizes clear content separation and visual breathing room, using a consistent spacing system and a grid-like structure.

-   **Spacing System**:
    Base unit: `4px`
    Scale: `[0, 8, 12, 16, 20, 24, 32, 48, 64, 80]`
    -   `0px`: Used for tight alignments or when no space is needed.
    -   `8px`: Smallest consistent spacing, often between inline elements or icons and text.
    -   `12px`: Padding within small components or between minor elements.
    -   `16px`: Standard padding for inputs, buttons, and vertical rhythm between text blocks.
    -   `20px`: Moderate spacing, often for internal component padding.
    -   `24px`: Vertical spacing between related content blocks or component groups.
    -   `32px`: Padding within cards or significant vertical separation.
    -   `48px`: Larger section padding or spacing between major content areas.
    -   `64px`: Generous vertical spacing for main section breaks and hero content.
    -   `80px`: Maximum horizontal padding for page containers, ensuring content doesn't touch edges.

-   **Grid & Container**:
    _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred from common web patterns)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section Padding: `64px` vertical, `80px` horizontal (inferred from screenshot)

-   **Whitespace Philosophy**:
    Freehand utilizes generous whitespace to create a sense of calm and clarity, allowing content to breathe and preventing visual clutter. Large vertical gaps, often `64px` or `80px`, clearly delineate sections, while ample internal padding within components ensures elements are not cramped. This deliberate use of space enhances readability and highlights key information, contributing to a premium and focused user experience.

-   **Border Radius Scale**:
    -   **Small** (`sm`): `1px` — Used for crisp, subtle rounding on functional elements like input fields.
    -   **Medium** (`md`): `10px` — Applied to cards and containers, providing a soft touch without losing a professional edge.
    -   **Full** (`full`): `9999px` — Reserved for perfectly circular elements, such as avatars or small badges (if present).

## 6. Depth & Elevation
Freehand primarily relies on color and strong visual separation rather than complex shadows for depth. Elevation is mainly managed through z-index for stacking contexts.

-   **Dropdown Nested (z-1)**: `z-index: 1` — Used for nested dropdown content within a larger dropdown.
-   **Dropdown Main (z-3)**: `z-index: 3` — Applied to primary navigation dropdowns, appearing above regular content.
-   **Resources Wrap (z-5)**: `z-index: 5` — Specific content wraps that need to appear above some background elements.
-   **Navigation Overlay (z-9)**: `z-index: 9` — Full-screen overlays, such as mobile navigation menus.
-   **Cookie Banner (z-10)**: `z-index: 10` — Persistent UI elements like cookie consent banners, appearing above most page content.
-   **Dropdown Toggle (z-900)**: `z-index: 900` — The interactive toggle element for a dropdown, ensuring it's clickable.
-   **Navbar Component (z-999)**: `z-index: 999` — The main sticky navigation bar, always visible at the top.
-   **Modal (z-1000)**: `z-index: 1000` — The highest stacking context, reserved for modal dialogs and critical alerts.

**Shadow Philosophy**:
The design system generally avoids prominent `box-shadow` effects, favoring a flatter aesthetic. When shadows are used, such as on card hover states, they are subtle (`0px 4px 12px rgba(0,0,0,0.08)`) and serve to indicate interactivity or temporary elevation rather than permanent depth. The primary method for visual separation is through distinct background colors and generous whitespace.

## 7. Do's and Don'ts

### Do's
*   Use `BL Pylon Serif` `64px` `400` for primary display titles on `#200b00` backgrounds to establish brand presence.
*   Apply `#fe6200` for all primary calls-to-action, maintaining `12.8px 24px` padding for consistency.
*   Pair `Fustat` `18px` `400` for body text with `#000000` on `#ffffff` backgrounds, achieving an AAA contrast ratio of 21.0.
*   Utilize `10px` border-radius (`{radius.md}`) for all Cards and content containers to soften their appearance.
*   Ensure interactive elements like Navigation Links transition `color` over `0.38s` with `cubic-bezier(0.215, 0.61, 0.355, 1)`.
*   Maintain `64px` or `80px` vertical spacing between major sections to enhance content separation and visual flow.
*   Use `#ffffff` text on `#200b00` backgrounds; this combination provides an AAA contrast ratio of 18.93.
*   Apply a `1px` border-radius (`{radius.sm}`) to input fields for a crisp and functional aesthetic.
*   Use `#595956` on `#f2f1ed` backgrounds for muted text, as it passes AA contrast with a ratio of 6.22.

### Don'ts
*   Avoid using `#fe6507` on `#ffffff` backgrounds, as its 2.97 contrast ratio fails AA accessibility standards.
*   Do not use `BL Pylon Serif` for body text; reserve it exclusively for display and heading roles to preserve typographic hierarchy.
*   Introduce custom spacing values; adhere strictly to the `[0, 8, 12, 16, 20, 24, 32, 48, 64, 80]` scale for all layout and component spacing.
*   Apply `box-shadow` to base card states; shadows are reserved for interactive hover effects like `0px 4px 12px rgba(0,0,0,0.08)`.
*   Use `#868683` for critical information on light backgrounds; it is intended for secondary or muted text.
*   Deviate from the `0px` border-radius on primary buttons; their sharp corners are a deliberate design choice.
*   Place `#000000` text on `#f1efeb` backgrounds if a subdued contrast is desired, as it still achieves an AAA ratio of 18.89.
*   Use any transition duration other than `0.38s` for main interactive elements to ensure consistent motion.

## 8. Responsive Behavior
_Note: breakpoints below are extracted from the source's CSS media queries. These values represent the brand's actual responsive design strategy._

-   **Extracted Breakpoints**:
    -   **Mobile Small** (~340px): Layouts adjust for smallest screens, often stacking elements and reducing padding. (max-width: 340px)
    -   **Mobile Large** (~479px): Navigation typically collapses into a hamburger menu; content shifts to single-column layouts. (max-width: 479px)
    -   **Tablet** (~767px): Grid columns adapt, and some text sizes may scale down for optimal reading on tablet devices. (max-width: 767px)
    -   **Desktop Small** (~991px): Adjustments for smaller desktop or landscape tablet views, ensuring full navigation visibility. (max-width: 991px)
    -   **Desktop Large** (min-width: 768px): Standard desktop layout with full navigation and multi-column content.

-   **Touch Targets**:
    -   Minimum touch target size for interactive elements is `44px` by `44px` (inferred from best practices).
    -   Maintain at least `8px` of clear space between touch targets to prevent accidental taps.

-   **Collapsing Strategy**:
    -   **Navigation**: The primary navigation bar collapses into a hamburger menu at `max-width: 767px`, revealing full links in an overlay.
    -   **Cards**: Multi-column card layouts transition to a single-column stack on screens `max-width: 767px`.
    -   **Typography**: Display and heading font sizes scale down incrementally at `max-width: 767px` and `max-width: 479px` for readability.
    -   **Padding**: Horizontal page padding reduces from `80px` to `24px` on mobile screens (`max-width: 479px`).
    -   **Forms**: Complex form layouts with multiple columns collapse to a single column on `max-width: 767px`.
    -   **Spacing**: Vertical spacing between sections may reduce from `64px` to `32px` on mobile (`max-width: 479px`).

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   Primary: `#fe6200`
    -   Primary Hover: `#cf5000`
    -   Background: `#ffffff`
    -   Surface Light: `#f1efeb`
    -   Background Dark: `#200b00`
    -   Surface Dark Subtle: `#351505`
    -   Text Primary: `#000000`
    -   Text Muted: `#868683`
    -   Text Inverse: `#ffffff`
    -   Border Light: `#e4e2e1`
    -   Border Dark: `#351505`
    -   Fail Contrast Orange: `#fe6507`

-   **Iteration Guide**
    1.  Always use `#fe6200` for primary calls-to-action, with `12.8px 24px` padding and `0px` border-radius.
    2.  Ensure all text on `#ffffff` backgrounds uses `#000000` or `#868683`, checking contrast for `#868683`.
    3.  Apply `BL Pylon Serif` for all headings and `Fustat` for all body text, maintaining their specified sizes and `400` weight.
    4.  Utilize the spacing scale `[0, 8, 12, 16, 20, 24, 32, 48, 64, 80]` for all layout and component spacing.
    5.  Set border-radius to `1px` for inputs and `10px` for cards, with `0px` for primary buttons.
    6.  Implement `0.38s` transition durations with `cubic-bezier(0.215, 0.61, 0.355, 1)` for general interactions and `cubic-bezier(0.187, 0.938, 0.355, 1)` for buttons.
    7.  Design input `:focus` states with a `2px` `#fe6200` box-shadow ring.
    8.  Ensure navigation links highlight in `#fe6200` on `:hover` and for the active state.
    9.  Use `#200b00` for dark section backgrounds, always pairing with `#ffffff` text.
    10. Implement z-index values `1` (dropdown nested) through `1000` (modal) as defined in the elevation scale.
    11. Collapse navigation to a hamburger menu and stack multi-column layouts on screens `max-width: 767px`.
    12. Avoid `#fe6507` on light backgrounds due to its failing contrast ratio of 2.97.