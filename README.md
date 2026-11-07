# Victory Ayobami Ojo – Portfolio (Next.js + GSAP)

## Run
    npm install
    npm run dev       # http://localhost:3000

## Deploy
    npx vercel

## Edit content
Everything is in `lib/content.ts`. Add a real, provable result to a work item by uncommenting its `outcome` line.

## Animations (components/Portfolio.tsx)
- Hero: masked name reveal + staggered intro, parallax orbs
- Scroll reveals (.reveal / .stagger), timeline line draws on scroll
- Skills marquee, 3D tilt on work cards
- All motion is disabled when the visitor has "reduce motion" on

## Colours / fonts
CSS variables at the top of `app/globals.css`.
