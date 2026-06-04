---
name: gein-map-for-success-design-system
description: Creates implementation-ready UI guidance, tokens, component rules, and accessibility standards for the GEIN MAP FOR SUCCESS website. Use when creating or updating UI rules, book-cover shelves, MAP detail pages, image galleries, light/dark themes, and data-driven catalog interfaces.
---

# GEIN MAP FOR SUCCESS Design Skill

## Mission

Deliver implementation-ready design-system guidance for GEIN MAP FOR SUCCESS: a premium, warm, healing, book-library inspired MAP catalog.

## Brand

- Product/brand: GEIN MAP FOR SUCCESS
- Website: map-for-my-life.com
- Audience: families, parents, couples, and individuals seeking self-understanding and emotional healing
- Product surface: landing page, MAP catalog, MAP detail reading preview, image gallery, and contact CTA

## Style Foundations

- Visual style: premium, warm, healing, editorial, book-cover focused
- Reference: Waka-style book shelf and detail page patterns, adapted for GEIN
- Font: Arial, Helvetica, sans-serif
- Base size: 16px
- Base line-height: 1.55

## Core UI Rules

- MAP categories must look like book covers, not generic cards.
- MAP list items must look like book covers.
- Reading preview must be a detail page, not a modal.
- Modal is allowed only for viewing large images.
- Image loading must be lazy.
- Preview data must be lazy-loaded.
- Multiple images per MAP must be supported for configured categories.
- Light and dark theme must be supported.
- UI must remain accessible and keyboard-friendly.

## Image Rules

- Default image pattern: `{folder}/{mapNumber}.jpeg`
- Multi-image pattern: `{folder}/{mapNumber}-{imageIndex}.jpeg`
- `chap3` uses default pattern, e.g. `chap3/23.jpeg`
- `chap4` uses default pattern, e.g. `chap4/41.jpeg`
- Do not probe multiple images in list views.
- Only probe multiple images on detail/gallery views.
- Cache probe results.

## Accessibility

- Target WCAG 2.2 AA.
- Every interactive item must have focus-visible.
- Buttons must have descriptive labels.
- Images must have useful alt text.
- Modal must support Escape and focus handling.
- Touch targets should be at least 44px.

## Anti-patterns

- Do not create generic cards for MAP covers.
- Do not load all MAP previews on homepage.
- Do not stretch images.
- Do not hide focus outlines.
- Do not hard-code one-off colors or spacing.

## QA Checklist

- Book shelves look premium
- Theme works
- Multi-image MAP gallery works
- Missing images fallback works
- Detail page remains readable
- Mobile is smooth
- GitHub Pages deploy still works
