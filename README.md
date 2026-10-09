# Premium Website Template Agency & Catalogue

A modern, high-converting digital agency website and website template catalogue built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **React Router**.

Designed with a high-end editorial digital studio aesthetic, supporting complete **Light** and **Dark** themes with warm ivory backgrounds, charcoal typography, and muted bronze accents.

---

## ⚡ Quick Start

```bash
# Install dependencies (already installed)
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The dev server will run on `http://localhost:5173`.

---

## 🎨 Asset Integration Workflow

All website templates and category definitions are decoupled into structured, type-safe data files. **You can easily integrate your supplied template designs and screenshots without rewriting or duplicating page components.**

### 1. Adding / Updating Templates (`src/data/templates.ts`)
Each template record in `templates.ts` contains:
```typescript
{
  id: 'atelier-fashion',
  slug: 'atelier-fashion',
  name: 'Atelier Couture',
  category: 'ecommerce',
  categoryName: 'E-commerce & Fashion',
  designStyle: 'Luxury', // Minimal | Luxury | Modern | Editorial | Corporate | Creative | Bold
  startingPrice: 24000, // In INR (₹)
  description: 'Editorial boutique template...',
  shortFeatureSummary: 'Editorial lookbook, slide-over cart, color variant selectors...',
  targetAudience: 'Fashion designers, artisan jewelers, luxury apparel boutiques...',
  features: ['E-commerce', 'Portfolio', 'Contact Form', 'Animations'],
  includedPages: ['Home', 'Catalog', 'Product Single', 'Lookbook', 'Cart', 'Contact'],
  pageCount: 6,
  responsiveIndicators: { desktop: true, tablet: true, mobile: true },
  
  // ─── REPLACE WITH YOUR SUPPLIED ASSETS HERE ───
  coverImage: '/path/or/url/to/cover.jpg',
  previewGallery: ['/shot1.jpg', '/shot2.jpg', '/shot3.jpg'],
  desktopPreview: '/desktop-mockup.jpg',
  tabletPreview: '/tablet-mockup.jpg',
  mobilePreview: '/mobile-mockup.jpg',
  liveDemoUrl: 'https://optional-live-demo-link.com',
  // ──────────────────────────────────────────────

  featured: true,
  availabilityStatus: 'Popular',
  estimatedDelivery: '4–6 Business Days',
  packageTiers: [...],
  customizationOptions: [...],
  faqs: [...],
  availableIntegrations: ['Razorpay Gateway', 'Stripe', 'WhatsApp Order Ping'],
}
```

### 2. Adding / Modifying Categories (`src/data/categories.ts`)
All 10 requested categories are pre-configured:
1. `ecommerce` — E-commerce & Fashion
2. `education` — Education & Coaching Institutes
3. `healthcare` — Healthcare & Clinics
4. `fitness` — Fitness & Gyms
5. `business` — Business & Professional Services
6. `real-estate` — Real Estate & Builders
7. `restaurants` — Restaurants & Hospitality
8. `portfolio` — Portfolio & Personal Websites
9. `travel` — Travel & Tourism
10. `events` — Events & Weddings

Adding a new category simply requires appending an object in `src/data/categories.ts`. The category page, navigation links, filters, and cards automatically adapt.

---

## ⚙️ Configuration Files

| Purpose | File | Notes |
| :--- | :--- | :--- |
| **Brand & Contact Info** | `src/data/siteConfig.ts` | Replace `[YOUR BRAND NAME]`, email, phone, and WhatsApp numbers. |
| **Trust Metrics** | `src/data/siteConfig.ts` | Adjust metrics (templates count, turnaround time, satisfaction). |
| **Services** | `src/data/services.ts` | Customize the 6 core agency service packages, pricing & deliverables. |
| **Pricing & Add-ons** | `src/data/pricing.ts` | Manage package tiers in INR (`₹`), custom page rates, and recurring costs. |
| **Portfolio Projects** | `src/data/portfolio.ts` | Add your completed client projects, screenshots, and live links. |
| **Form Backend Hook** | `src/components/QuoteModal.tsx` | Point the `handleSubmit` handler to your CRM, Formspree, or EmailJS endpoint. |

---

## 🌟 Key Features Built

- **Dual Visual Themes**: Refined Light (warm ivory, white surfaces, bronze accents) and Dark (deep charcoal, near-black surfaces, warm white text) with `localStorage` persistence.
- **Sticky & Compact Navigation**: Desktop header with theme toggle, search trigger, mobile drawer, and prominent *Get a Quote* CTA.
- **Homepage Architecture**:
  - Hero with responsive desktop & mobile mockup slots.
  - Configurable Trust Indicators (clearly labeled sample metrics).
  - 10 Business Category Grid.
  - Featured Templates Grid with quick actions.
  - 4-step "How It Works" workflow.
  - Configurable Portfolio Case Studies.
  - 6 Agency Services.
  - Pricing Overview with package inclusions.
  - High-impact footer with WhatsApp, email, and social links.
- **Template Catalogue (`/templates`)**:
  - Live real-time search across names, categories, and styles.
  - Multi-faceted filters (Category, Price slider in INR, Design styles, Features).
  - Sorting (Featured, Price: Low to High, Price: High to Low, Newest, Name).
  - Grid / List layout switcher.
  - Load-more pagination and empty state handling.
- **Data-Driven Category Pages (`/templates/category/:slug` and `/templates/:slug`)**:
  - Category-specific heroes, feature checklists, and filtered template grids.
- **Template Detail Pages (`/templates/view/:slug` and `/template/:slug`)**:
  - Screenshot gallery, responsive indicators, included page checklists, integration badges, package tier breakdown, customisation options, and FAQs.
- **Interactive Device Preview Modal**:
  - Seamlessly switches between Desktop (1200px), Tablet (768px), and Mobile (375px) device viewport frames.
  - Gallery shot switcher and direct link to live demos.
- **Quote & Enquiry Request Flow**:
  - Accessible modal pre-filling selected templates and packages.
  - Full form validation (name, email, phone/WhatsApp, category, budget, timeline, desired features).
  - Generates verifiable Enquiry Reference ID (`QTE-XXXXXX`) with summary.
  - Direct 1-click WhatsApp redirect with pre-formatted message payload.
- **Global Search Modal (`Ctrl+K` / Search Icon)**:
  - Instant live indexing of templates, categories, and studio services.
- **SEO & Accessibility**: Clean HTML semantic hierarchy, keyboard ESC listeners, contrast compliance, and responsive layouts.
