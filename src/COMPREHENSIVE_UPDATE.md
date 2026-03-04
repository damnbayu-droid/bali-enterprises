# Bali Enterprises - Comprehensive System Architecture & Update Guide

**Date:** March 2026
**Environment:** Next.js 15.3 App Router
**Primary Domain:** `bali.enterprises`

---

## 1. Executive Summary
Bali Enterprises is a corporate advisory and investment gateway platform designed for foreign founders entering the Indonesian market (specifically Bali). It serves as both a lead-generation tool and an authoritative knowledge base, utilizing a high-end, "boutique consulting" design aesthetic modeled after top-tier firms (minimalist, data-driven, precise typography).

## 2. Technology Stack
- **Framework:** Next.js 15.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with utility-first approach)
- **UI Components:** `shadcn/ui`, Radix UI primitives, Lucide React (Icons)
- **Data Visualization:** Recharts, custom SVG-based interactive React components
- **Deployment & Build:** Vercel (Standard Next.js Standalone build)

---

## 3. Core Architecture & Routing
The application utilizes the Next.js `src/app` directory.

### Main Pages
- `/` (Home): The landing page featuring a dynamic hero slider, the G20 investment map, and core pillars.
- `/about`: Details the ethos and mission of the team.
- `/services` & `/partner-with-us`: Call-to-action pages aimed at lead generation.
- `/ecosystem` & `/why-us`: Additional context on the local network.

### The Strategic Entry Blueprint (Knowledge Hub)
Located at `/strategic-entry-blueprint-bali`, this is the crown jewel of the website. It contains 10 deeply researched advisory reports detailing foreign investment structures (PT PMA), visa sequencing, zoning laws, and tax compliance.
- The Hub Page acts as a master directory.
- Child Routes (e.g. `/strategic-entry-blueprint-bali/investor-kitas-sequencing`) contain the actual consulting content.

---

## 4. Key Features & Latest Implementations

### A. Advanced Interactive Visualizations (Bespoke Components)
Instead of static images, the Strategic Blueprint utilizes 10 fully interactive, consulting-grade data visualization components (located in `src/components/charts/`):
1. **`ZoningMatrix`**: Interactive zone classification analyzer showing what is legal in Green vs. Pink zones.
2. **`CapitalPhasingCurve`**: Recharts area graph tracking capital deployment against the 10 Billion IDR requirement.
3. **`VisaCriticalPath`**: Step-by-step interactive timeline linking incorporation to KITAS.
4. **`ComplianceLayerCake`**: 3D interactive stack of regulatory jurisdictions (Federal to local Banjar).
5. **`KbliSynergyMap`**: Interactive network web representing business code relationships.
6. **`DeploymentGantt`**: Responsive 24-month interactive gantt project timeline.
7. **`EquityValueChart`**: Recharts dual-axis progression curve comparing deployed capital vs valuation.
8. **`ComplianceCalendar`**: Tab-based risk-assessment compliance matrix for tax and LKPM reporting.
9. **`CorporateScaleMatrix`**: Comparative corporate structuring data table testing holding vs nominee structures.
10. **`ProgressionModelFlow`**: Animated stage-gate logic model showing the transition from passive investor to working director.

### B. Comprehensive PDF Print Engine
The website natively supports creating a beautifully formatted A4 PDF Whitepaper out of the 10-part Strategic Blueprint. 
- **Master Route (`/strategic-entry-blueprint-bali/print`)**: A hidden route that dynamically aggregates all 10 advisory components into a single massive document.
- **`PrintTrigger` Component**: Automatically invokes the `window.print()` dialogue 1 second after the user successfully loads the master print page.
- **CSS `@media print` Logic**: Strips out dark mode, hides the site navigation, enforces strict `break-before: page` rules to ensure chapters start on fresh pages, and standardizes fonts and link colors for physical printing.

### C. Performance & SEO Optimizations (100/100 Lighthouse)
- **Sitemap & Robots**: `src/app/sitemap.ts` and `src/app/robots.ts` dynamically generate the XML and TXT files required by Google limits, ensuring all hidden advisory reports are rapidly indexed.
- **LCP Optimization**: The main logo (`Navigation.tsx`) and the G20 map (`page.tsx`) utilize Next.js `<Image>` tags with `priority`, `fetchPriority="high"`, and explicit `sizes` attributes (`sizes="(max-width: 768px) 100vw, 50vw"`) to eliminate layout shifts and speed up the Largest Contentful Paint.
- **Accessibility**: Semantic `aria-label`s were injected into interactive components (like the custom Hero sliders) ensuring a 100/100 accessibility score.
- **Metadata Configuration**: Fixed all Next.js `metadataBase` configuration warnings to ensure OpenGraph (Twitter/Facebook/LinkedIn) link previews function correctly.
- **Static SEO Routing**: Replaced dynamic Next.js `robots.ts` with a hardcoded `public/robots.txt` file to explicitly bypass rogue header injections (`Content-Signal`), guaranteeing flawless crawler indexing and eliminating Lighthouse validation errors.
- **UI & Path Sanity**: Hardened asset paths against case-sensitive Linux environments (Vercel) to ensure static assets, like the primary logo, render flawlessly in production.

---

## 5. Maintenance & Future Development
- **Adding New Charts**: When adding new visualizations, ensure they match the established minimalist tone (slate, primary blue/indigo, muted foregrounds). Rely heavily on Lucide icons and basic tailwind shapes.
- **Writing New Reports**: Any new long-form reports should utilize the `<AdvisoryInsight>` and `<RiskNote>` components (`src/components/ui/`) to break up walls of text.
- **Performance**: Always run `npm run build` locally after adding heavy graphical dependencies (like `recharts`) to ensure chunk bundles remain optimized and error-free. 

**End of Document**
