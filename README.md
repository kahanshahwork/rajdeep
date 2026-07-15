# Rajdeep Jewellers — Website

A single-page, scroll-driven story for Rajdeep Jewellers.
Warm ivory/gold editorial mood, built with React 19 + Vite + Tailwind.

## The scroll journey (one page, top to bottom)
1. Hero — the lotus portrait, brand line, parallax
2. Story — "Since 1992", the heirloom box + family photos
3. The Craft — a sideways cinematic chapter (scroll down, it pans right)
4. Collections — the CircularGallery (drag / scroll / arrow keys)
5. Catalogue — a page-turning heirloom book
6. Visit — appointment, studios, contact
7. Footer

## Requirements
- Node.js 18 or newer (check with: `node -v`). Get it at https://nodejs.org

## Run locally
1. Open a terminal in this folder (it contains package.json).
2. First time only:  npm install
3. Start it:         npm run dev
4. Open the printed URL (http://localhost:3000). It auto-reloads on edits.

## Build for deployment
   npm run build      -> outputs a static site in dist/
   npm run preview    -> preview that production build

## Deploy to Vercel
   npm install -g vercel   (first time)
   vercel
Vercel auto-detects Vite. Or push to GitHub and import the repo.

## Edit content
All copy, image paths, collection items, and catalogue pages live in ONE file:
   src/config.ts
Images live in public/images/ — swap a file and keep the same name, or add
a new file and point config.ts at it.

## How it's built
   src/
     App.tsx                    assembles the page, runs scroll hooks
     config.ts                  ALL text + image paths (edit here)
     index.css                  design system + all section styling
     hooks/useScroll.ts         reveal-on-scroll + parallax
     components/
       Nav.tsx                  fixed nav, smooth-scrolls to sections
       CircularGallery.tsx      the React Bits WebGL gallery (uses `ogl`)
       CircularGallery.css
     sections/
       Hero, Story, Craft, Collections, Catalogue, Visit, Footer

## Notes
- The Craft chapter scrolls horizontally on desktop; on phones and for
  "reduced motion" it becomes a normal vertical stack automatically.
- The CircularGallery needs WebGL (every modern browser has it).
- Fonts load from Google Fonts at runtime; if offline, the site falls back
  to system serif/sans and still looks right.
