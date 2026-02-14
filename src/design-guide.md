# EvenGround Design Direction Guide

## Brand Overview

**EvenGround** is a street-style dance studio in Austin, TX founded in 2023 by Chris Han. The studio offers classes in Hip Hop, House, Breaking, Popping, and more. Core brand values: **Community, Creativity, Cultivation**. Target audience: dancers age 13+ in the Austin area, from beginners to seasoned performers.

---

## 1. Current Site Analysis

### What's Working
- **Minimalist aesthetic** — clean black/white/gray palette with gold accent (#ffb800) is distinctive and premium
- **Poppins font** — modern, geometric, highly legible at all sizes
- **Full-screen hero with video** — strong first impression, communicates energy
- **Marquee component** — adds visual movement, reinforces brand values
- **Section component** — alternating image/text layout creates rhythm
- **Footer** — comprehensive info (hours, location, contact, social) with gold accent headings
- **About Us page** — well-structured narrative with timeline, values cards, and team profiles

### Areas for Improvement
- **No framer-motion animations** — pages feel static despite having the library installed
- **Missing pages** — Schedule, Classes, Events, Teams, Store pages don't exist yet
- **No page transitions** — abrupt navigation between pages
- **Section component is rigid** — only supports one layout pattern (image + text side-by-side)
- **Hero lacks scroll-triggered animation** — content should animate in on load
- **No hover microinteractions** — buttons and cards could feel more alive
- **Testing page** (`/testing`) should be removed before production
- **Pricing on home page** differs from `/pricing` page (different prices/structure) — needs consolidation
- **Unsplash placeholder images** — need to be replaced with actual studio photos
- **Mobile nav** could use smoother animation (framer-motion AnimatePresence)
- **No loading states or skeleton screens**

---

## 2. Redesign Direction

### Design Philosophy
**"Elevated Street Culture"** — The design should feel premium and editorial but with the raw energy of street dance culture. Think: a high-end streetwear lookbook meets a modern SaaS landing page.

### Key Principles
1. **Movement** — Everything should feel alive. Use scroll-triggered animations, subtle parallax, and smooth transitions
2. **Contrast** — Bold black/white with strategic gold accents. Large typography against whitespace
3. **Rhythm** — Alternating section patterns create visual flow, like choreography
4. **Clarity** — Clean information hierarchy. Users should find class times and pricing instantly
5. **Community** — Showcase real people, real events. Photography-forward design

---

## 3. Color Palette

### Primary Colors
```
Black (Primary Text/BG):   #1a1a1a
Dark (Secondary Text):     #303030
White (Background):        #ffffff
Gold (Accent):             #ffb800
Gold Hover:                #e5a600
Gold Light (10% opacity):  #ffb800/10  → rgba(255, 184, 0, 0.10)
Gold Ring (20% opacity):   #ffb800/20  → rgba(255, 184, 0, 0.20)
```

### Neutral Scale
```
gray-50:   #fafafa   (section backgrounds, cards)
gray-100:  #f5f5f5   (subtle borders, hover states)
gray-200:  #e5e5e5   (borders, dividers, placeholder bg)
gray-300:  #d4d4d4   (scrollbar, disabled states)
gray-400:  #a3a3a3   (tertiary text, subtitles, icons)
gray-500:  #737373   (secondary text)
gray-600:  #525252   (body text)
```

### Usage Rules
- **Gold (#ffb800)** — ONLY for: section labels ("Part 01"), footer headings, CTAs, highlight borders, "best value" badges. Never for large backgrounds
- **Black (#1a1a1a)** — primary buttons, hero overlays, dark sections, headings
- **White (#ffffff)** — primary background, light buttons on dark sections
- **#fafafa** — alternating section backgrounds to create depth without heavy contrast

---

## 4. Typography Scale

### Font Family
**Poppins** — loaded via `next/font/google` with weights: 100-700. Variable: `--font-poppins`.

### Heading Scale (all use `font-light` / weight 300, `line-height: 1.1`, `letter-spacing: -0.02em`)
```
h1 (Page Title):     text-4xl → md:text-5xl → lg:text-6xl    (36px → 48px → 60px)
h2 (Section Title):  text-3xl → md:text-4xl → lg:text-5xl    (30px → 36px → 48px)
h3 (Card Title):     text-2xl or text-lg font-medium          (24px or 18px)
h4 (Footer/Label):   text-s font-semibold tracking-[0.2em] uppercase
```

### Body Scale
```
Large Body:    text-base → md:text-lg   (16px → 18px) font-light leading-relaxed
Body:          text-sm                   (14px) text-gray-600 leading-relaxed
Small/Caption: text-xs                   (12px) text-gray-400
Micro Label:   text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400
Tiny Label:    text-[10px] tracking-[0.15em] uppercase
```

### Typography Patterns
- **Section labels**: `text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4` (or `text-[#ffb800]` on About/Pricing pages)
- **Page titles**: UPPERCASE, font-light, tracking-tight
- **Body text**: `text-gray-600 leading-relaxed`
- **Button text**: `text-[0.75rem] font-medium tracking-[0.1em] uppercase`

---

## 5. Spacing System

### Page Gutters (responsive)
```
Mobile (<768px):    2rem  (32px)
Tablet (768px+):    3rem  (48px)
Desktop (1024px+):  5rem  (80px)
Wide (1280px+):     8rem  (128px)
```

### Section Padding (responsive, vertical)
```
Mobile:   5rem   (80px)
Tablet:   8rem   (128px)
Desktop:  10rem  (160px)
```

### Content Max Widths
```
Full bleed:    100%           (hero, marquee)
Wide content:  max-w-[1600px] (Section component, image+text layouts)
Medium:        max-w-[1200px] (pricing grid)
Narrow:        max-w-[900px]  (text-heavy pages: about, pricing intro)
Centered text: max-w-3xl      (welcome section)
Tight:         max-w-2xl      (CTA sections)
Card text:     max-w-lg       (description blocks)
```

### Component Spacing
```
Between sections:      0 (padding handles it)
Section title → body:  mb-6 to mb-8
Section label → title: mb-4 to mb-6
Title block → grid:    mb-16 to mb-20
Grid gaps:             gap-6 lg:gap-8 (cards), gap-10 lg:gap-20 (image+text)
Card internal:         p-8 lg:p-10
Footer grid:           gap-10 lg:gap-12
```

---

## 6. Animation Guidelines (framer-motion)

### Core Animation Library
All animations should use `framer-motion`. No CSS keyframe animations for component reveals (keep CSS keyframes only for infinite loops like the marquee).

### Scroll Reveal Pattern
Use a reusable `<AnimateOnScroll>` wrapper component:

```tsx
// Pattern: wrap any element to animate it on scroll
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
>
  {children}
</motion.div>
```

### Stagger Children Pattern
For grids (pricing cards, team members, class listings):

```tsx
// Parent
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {/* Children */}
  <motion.div variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }}>
```

### Page Transitions
Wrap page content with AnimatePresence:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

### Hero Entrance Animation
Staggered fade-up for hero elements (logo → tagline → CTA):

```tsx
// Each element gets increasing delay
transition={{ duration: 0.8, delay: 0.2 * index, ease: [0.25, 0.1, 0.25, 1] }}
```

### Hover Microinteractions
```tsx
// Buttons: subtle scale
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}

// Cards: lift effect
whileHover={{ y: -4, transition: { duration: 0.2 } }}

// Images: already handled via CSS (transform: scale(1.03) on hover)
```

### Mobile Navigation
Use `AnimatePresence` for the mobile menu open/close:

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
```

### Easing Presets
```
Standard:    [0.25, 0.1, 0.25, 1.0]   — general reveals
Decelerate:  [0.0, 0.0, 0.2, 1.0]     — entrances
Accelerate:  [0.4, 0.0, 1.0, 1.0]     — exits
Spring:      { type: "spring", stiffness: 300, damping: 30 }  — playful elements
```

### Performance Rules
- Always use `viewport={{ once: true }}` — animate only on first scroll into view
- Keep durations between 0.3s and 0.8s — nothing should feel sluggish
- Avoid animating layout properties (width, height, top, left) — stick to transform and opacity
- Use `will-change: transform` sparingly and only during active animation

---

## 7. Component Patterns

### Button Variants
```
btn-dark:     bg-[#1a1a1a] text-white        → hover:bg-[#333]
btn-outline:  border border-[#1a1a1a]         → hover: filled dark
btn-white:    bg-white text-[#1a1a1a]         → hover:bg-[#f5f5f5]
btn-gold:     bg-[#ffb800] text-[#303030]     → hover:bg-[#e5a600]   (used on pricing CTA)
```
All buttons: `text-[0.75rem] font-medium tracking-[0.1em] uppercase px-8 py-4 inline-flex items-center justify-center`

### Card Patterns
- **Light card**: `bg-white p-8 lg:p-10 border border-gray-100 hover:border-gray-200 transition-colors`
- **Dark card**: `bg-[#1a1a1a] text-white p-8 lg:p-10`
- **Featured card**: `ring-2 ring-[#ffb800] relative` with badge
- **Value card**: `border-l-2 border-[#ffb800] pl-6 py-2` (About page values)

### Image Containers
```
.img-container — overflow:hidden, bg:#e5e5e5 (placeholder), hover scales image 1.03
Aspect ratios: aspect-[4/5] lg:aspect-[3/4] for Section component images
Team photos: rounded-full, various sizes (w-40 h-40 for featured, w-28 h-28 for standard)
```

### Section Labels (Eyebrow Text)
Two variants:
1. **Neutral**: `text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4`
2. **Gold**: `text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6`

Use gold variant on inner pages (About, Pricing), neutral on home page sections.

### Page Template
Every page follows this structure:
```tsx
<>
  <Header />
  <main className="pt-20">
    {/* Page hero/intro section */}
    <section className="section-padding bg-white">
      <div className="max-w-[900px]">
        <EyebrowLabel />
        <PageTitle />
        <IntroText />
      </div>
    </section>
    {/* Content sections alternate bg-white / bg-[#fafafa] */}
    ...
  </main>
  <Footer />
</>
```

---

## 8. Page-by-Page Design Notes

### Schedule Page (`/schedule`)
- **Purpose**: Show weekly class timetable so dancers can quickly find what's available
- **Layout**: Full-width timetable/calendar grid
- **Design**:
  - Page hero: eyebrow "Weekly Schedule" + title "CLASS SCHEDULE" + brief description
  - Timetable: grid with days as columns, time slots as rows
  - Each class block shows: class name, instructor, time, level (color-coded)
  - Level indicators: Beginner (no border), Intermediate (gold left border), Advanced (gold background)
  - Mobile: stack into a day-by-day accordion or vertical list grouped by day
  - Filter bar: filter by dance style or level
  - Link each class block to the Classes page detail
- **CTA**: "Sign Up for Class" button linking to external booking service
- **Notes**: No booking system needed — just display schedule and link out

### Classes Page (`/classes`)
- **Purpose**: Showcase each dance style/class offered with descriptions
- **Layout**: Grid of class cards with detail views
- **Design**:
  - Page hero with eyebrow + title "OUR CLASSES"
  - Grid of class cards (2-col on tablet, 3-col on desktop)
  - Each card: placeholder image (4:5 ratio), class name, instructor name, short description, level badge, schedule snippet
  - Card hover: image scale + card lift animation
  - Possible detail modal or expandable section for full class description
  - Dance styles to include: Hip Hop, House, Breaking, Popping, Locking, Waacking, Choreography, Open Freestyle
- **Style tags**: Small pill badges for level — `text-[10px] tracking-wider uppercase px-3 py-1 rounded-full`

### Events Page (`/events`)
- **Purpose**: Promote upcoming battles, showcases, jams, and community events
- **Layout**: Timeline or card-based event listing
- **Design**:
  - Page hero: "Upcoming Events" / "EVENTS"
  - Event cards: large image (16:9 or 3:2 ratio), event name, date, description, location
  - Featured/next event: full-width hero card at top with larger image
  - Past events section: smaller cards or grid, possibly grayscale images
  - Each event card links to detail or external event page
  - Date formatting: large day number + month abbreviation on left
- **Empty state**: "No upcoming events. Follow us on Instagram for announcements."

### Teams Page (`/teams`)
- **Purpose**: Showcase studio teams (like Project A) and audition info
- **Layout**: Featured team sections with member grids
- **Design**:
  - Page hero: "Join a Team" / "STUDIO TEAMS"
  - Each team gets a full section: team name, description, photo/video, member grid
  - Team member cards: rounded-full photos (like About page admin staff pattern)
  - Audition info section: when auditions happen, requirements, what to expect
  - CTA: "Audition Info" or "Apply Now" → external link or contact
- **Visual**: More dynamic than About page — consider video backgrounds or action shots for team sections

### Store Page (`/store`)
- **Purpose**: Display EvenGround merchandise for sale
- **Layout**: Product grid
- **Design**:
  - Page hero: "Merch" / "STORE"
  - Product grid: 2-col mobile, 3-col tablet, 4-col desktop
  - Product cards: square image, product name, price below
  - Hover: image scale effect (existing `.img-container` pattern)
  - Categories if needed: Apparel, Accessories
  - Each product links to external store (or detail card)
  - Minimal design — let product images do the talking
- **Note**: Keep simple. If they use an external store (Shopify etc.), this can just be a showcase grid linking out

### Home Page (`/`) — Redesign Polish
- Add framer-motion scroll reveal to every section
- Hero: staggered entrance animation (logo → text → CTA → scroll indicator)
- Consolidate pricing section to match `/pricing` page data (class packs, not the current 3-card layout)
- Consider adding: Instagram feed embed or photo grid section before footer
- Add a "Featured Event" banner section if there's an upcoming event

### About Us Page (`/about-us`) — Minor Enhancements
- Add scroll reveal animations to each "Part" section
- Team member photos: add hover state showing role
- Timeline section: consider adding a visual timeline line connecting the dates
- Add parallax effect on any full-bleed images added later

### Pricing Page (`/pricing`) — Minor Enhancements
- Add scroll reveal animations
- Membership section: add subtle pulse or glow on the gold CTA
- Class pack cards: add hover lift effect

---

## 9. Navigation Structure

```
Header Nav:
├── Schedule    → /schedule
├── Classes     → /classes
├── Pricing     → /pricing
├── Store       → /store
└── Community (dropdown)
    ├── Events      → /events
    ├── Teams       → /teams
    └── About Us    → /about-us
```

All routes use Next.js App Router (`src/app/{route}/page.tsx`).

---

## 10. Responsive Breakpoints

Following Tailwind defaults:
```
sm:   640px    (mobile landscape)
md:   768px    (tablet, desktop nav shows)
lg:   1024px   (desktop, 2-col layouts)
xl:   1280px   (wide desktop, max gutters)
2xl:  1536px   (ultra-wide, optional)
```

### Mobile-First Rules
- All grid layouts stack to single column on mobile
- Navigation collapses to hamburger below `md` (768px)
- Page gutters scale via CSS custom property `--page-gutter`
- Typography sizes use responsive prefixes (`text-3xl md:text-4xl lg:text-5xl`)
- Hero logo scales via explicit width classes per breakpoint

---

## 11. Placeholder Image Strategy

Until real photos are provided, use:
- **Gray placeholder divs**: `bg-gray-200` with centered icon or text
- **User/team avatars**: gray circle with person SVG icon (already implemented in About page)
- **Product images**: `bg-gray-200` with "Product Image" text
- **Event images**: `bg-gray-200` with calendar icon
- **DO NOT use external placeholder services** (Unsplash URLs in Section component should be replaced)

Pattern for placeholder:
```tsx
<div className="bg-gray-200 w-full h-full flex items-center justify-center">
  <span className="text-gray-400 text-sm uppercase tracking-wider">Photo</span>
</div>
```

---

## 12. External Services

- **Booking/Registration**: External service (link out with "Sign Up for Class" buttons)
- **Store**: Likely external (Shopify or similar) — showcase only on site
- **Instagram**: @evengroundtx — consider embedding feed
- **YouTube**: @evengroundtx — embed event recaps
- **Google Maps**: 8000 Anderson Sq, Ste 104, Austin, TX 78757
- **Email**: contact@evengroundtx.com
