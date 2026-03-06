# 01 - Typography Setup

## Goal
Configure Tailwind and Next.js to use Tomorrow (Google Font) and Helvetica (System Font) as defined in requirements.

## Tasks
- [ ] Update \pp/layout.tsx\ or \globals.css\ to import Tomorrow via \
ext/font/google\. -> Verify: Font woff2 is downloaded during build.
- [ ] Update \	ailwind.config.ts\ to add \ont-tomorrow\ and \ont-helvetica\ (with fallbacks Arial, sans-serif) to the theme extension.
- [ ] Apply default body font (Helvetica) and text size (minimum 16px desktop, 14px mobile padding) in \globals.css\ targeting \ody\. -> Verify: Opening dev tools shows correct font-family on body.

## Done When
- [ ] Tailwind typography classes (\ont-tomorrow\, \ont-helvetica\) are available.
- [ ] Body defaults to Helvetica and correct base size.
