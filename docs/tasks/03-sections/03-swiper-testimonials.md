# 03 - Section 5 (Testimonials/Swiper)

## Goal
Implement Section 5 showcasing 12 testimonials split across two infinite scrolling carousels using Swiper.js.

## Tasks
- [ ] Install Swiper React components (\
pm install swiper\).
- [ ] Create \components/sections/SectionFive.tsx\.
- [ ] Map over \ssets/testimonials/carousel-1/\ images for the first Swiper. Direction: left.
- [ ] Map over \ssets/testimonials/carousel-2/\ images for the second Swiper. Direction: right (\everseDirection: true\).
- [ ] Configure both Swipers: \loop: true\, \reeMode: true\, \utoplay: { delay: 0, disableOnInteraction: false }\, \speed: 5000\, \slidesPerView: 'auto'\.
- [ ] Enforce \overflow-hidden\ on the parent to prevent screen break.

## Done When
- [ ] Two carousels infinitely scroll in opposite directions continuously.
