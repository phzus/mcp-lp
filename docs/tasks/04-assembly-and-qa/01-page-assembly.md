# 01 - Page Assembly & Layout Validation

## Goal
Combine all Section components into the root \pp/page.tsx\ and validate global scrolling, widths, and framer motion.

## Tasks
- [ ] Import Sections 1 through 13 into \pp/page.tsx\.
- [ ] Verify global \<main>\ wrapper enforces the mobile-padding (\px-4\) and desktop max-width constraints if not handled inside the individual sections.
- [ ] Add basic scroll reveal animations (Framer Motion \<motion.div>\ with \whileInView\) wrapper around major sections for visual pop.
- [ ] Run \
pm run build\ to ensure Next.js Static Export generates the \out/\ directory correctly without SSR errors.

## Done When
- [ ] The landing page runs locally, sections flow logically, and static build succeeds.
