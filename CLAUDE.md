# Ratnam Enterprise - Project Context

## Project Overview

**Client**: Ratnam Enterprise - B2B industrial electrical equipment supplier
**Website**: https://ratnam.org.in
**Location**: Bhosari MIDC, Pune, Maharashtra, India

## Business Profile

- **Industry**: Industrial electrical equipment wholesale/distribution
- **Target Audience**: B2B customers (industries, contractors, panel builders)
- **Key Products**: Switchgear (MCCB, ACB, RCCB), VFD drives, cables (Polycab), control panel accessories, terminal blocks, busbar systems, automation products
- **Brands**: L&T, Polycab, Schneider, Siemens, Lauritz Knudsen, Connectwell, Teknic
- **Contact Persons**: Akshat Khodifad (9429094277), Office (9426074277)
- **Email**: sales@ratnam.org.in

## Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **SEO**: next-sitemap, comprehensive metadata with JSON-LD schema

## Color Scheme

| Color Role | Hex | Usage |
|------------|-----|-------|
| Primary (Dark Blue) | `#002C54` | Headers, buttons, primary elements |
| Primary Light | `#003d6b` | Hover states |
| Primary Dark | `#001c3a` | Dark accents |
| Secondary (Gold) | `#FFB300` | Accents, highlights |
| Secondary Light | `#FFC933` | Secondary hovers |
| Background | `#F0F0F0` | Light backgrounds |
| Body Background | `#FDF6F6` | Page backgrounds |

## Project Structure

```
src/
├── app/
│   ├── page.js              # Home page
│   ├── layout.js            # Root layout with SEO metadata
│   ├── globals.css          # Global styles with Tailwind 4
│   ├── about-us/
│   ├── contact-us/
│   └── products/
├── components/
│   ├── home/                # Home page sections (Hero, Welcome, etc.)
│   ├── layout/              # Header, Footer
│   └── products/            # ProductCard, BrandLogo, HighlightedBrands
└── data/
    ├── brands.js            # Brand definitions
    ├── clientBrands.js      # Client company logos
    ├── features.js          # Feature data
    └── products.js          # Product catalog with categories
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home - Hero, Welcome, Brands Showcase, Industries, Why Choose Us, Clients |
| `/about-us` | Company information |
| `/contact-us` | Contact form and details |
| `/products` | Product catalog with category filtering |

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run postbuild # Generates sitemap after build
```

## Key Patterns

- Client components use `'use client'` directive
- Metadata exported from layout.js for SEO
- JSON-LD schema for LocalBusiness structured data
- Responsive design with mobile-first approach
- Tailwind CSS 4 uses `@theme` directive for custom colors
