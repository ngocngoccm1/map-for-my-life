# GEIN MAP FOR SUCCESS - Design System

## Mission

Create implementation-ready, token-driven UI guidance for GEIN MAP FOR SUCCESS: a premium, healing, book-like MAP catalog for self-understanding, family connection, marriage healing, and personal growth.

The design system must support:

- a book catalog / MAP library experience
- beautiful MAP cover shelves
- light and dark themes
- responsive reading/detail pages
- lazy-loaded image galleries
- accessible interactions
- fast delivery with Tailwind and vanilla JavaScript

## Brand

- Product/brand: GEIN MAP FOR SUCCESS
- Website: map-for-my-life.com
- Fanpage: GEIN Family - Thau Hieu & Thanh Cong
- Secondary language planned: Czech
- Audience: Vietnamese and Czech-speaking families, parents, couples, and individuals seeking self-understanding and emotional healing
- Product surface: landing page, MAP catalog, MAP detail reading preview, contact/consultation flow

## Style Foundations

- Visual style: premium, warm, healing, editorial, book-library inspired
- UI reference: Waka-style book shelf and book detail layout, but not a direct clone
- Main font: Arial, system sans-serif
- Font stack: Arial, Helvetica, sans-serif
- Base font size: 16px
- Base font weight: 500
- Base line height: 1.55

## Typography Scale

- font.size.xs = 12px
- font.size.sm = 14px
- font.size.md = 15px
- font.size.base = 16px
- font.size.lg = 18px
- font.size.xl = 22px
- font.size.2xl = 28px
- font.size.3xl = 36px
- font.size.hero = clamp(36px, 6vw, 72px)

## Semantic Color Tokens

### Dark Theme

- color.dark.bg.base = #070707
- color.dark.bg.soft = #101112
- color.dark.bg.card = #151719
- color.dark.text.primary = #f5f5f3
- color.dark.text.secondary = #b6b6ad
- color.dark.text.muted = #85857d
- color.dark.accent.primary = #15b088
- color.dark.accent.gold = #f4b942
- color.dark.accent.warm = #f97316
- color.dark.border.soft = rgba(255,255,255,0.10)

### Light Theme

- color.light.bg.base = #fffaf1
- color.light.bg.soft = #f7efe1
- color.light.bg.card = #ffffff
- color.light.text.primary = #1e1b16
- color.light.text.secondary = #5e574d
- color.light.text.muted = #8a8175
- color.light.accent.primary = #0f8f70
- color.light.accent.gold = #c98a18
- color.light.accent.warm = #ea6a12
- color.light.border.soft = rgba(30,27,22,0.12)

## Spacing Scale

- space.1 = 4px
- space.2 = 8px
- space.3 = 12px
- space.4 = 16px
- space.5 = 20px
- space.6 = 24px
- space.7 = 32px
- space.8 = 48px
- space.9 = 64px

## Radius / Shadow / Motion

- radius.sm = 10px
- radius.md = 16px
- radius.lg = 22px
- radius.book = 18px
- radius.pill = 9999px
- shadow.card = soft layered shadow
- shadow.book = stronger cover shadow with subtle depth
- motion.fast = 160ms
- motion.base = 220ms
- motion.slow = 360ms
- easing.standard = cubic-bezier(0.2, 0.8, 0.2, 1)

## Component Rules

### Book Cover Item

Intent: make every MAP feel like a real book/cover, not a generic card.

Must:

- use vertical book ratio 2:3 or 3:4
- fill image inside cover area
- preserve image aspect ratio with object-fit: cover
- show large map number overlay
- show badge when preview is available
- show title under the cover
- have hover lift/scale effect
- have visible focus-visible outline
- support loading and image error fallback
- be clickable with keyboard Enter and Space

Should:

- use horizontal scroll shelves on mobile for featured sections
- use grid for large category pages
- keep title line clamp to avoid layout jumps

### Map Detail Page

Intent: provide a premium reading-preview page similar to a book detail page.

Must:

- use 3-column layout on desktop when space allows
- show cover/gallery on the left
- show title, metadata, tags, and preview content in the center
- show sticky CTA/contact card on the right
- collapse to 1-column on mobile
- support multiple images for a MAP
- keep reading preview on page, not in modal
- use modal only for viewing large images

### Theme Toggle

Must:

- be visible in header
- support light and dark mode
- save theme to localStorage
- restore selected theme on reload
- have accessible label
- have keyboard focus-visible state

### Image Gallery

Must:

- lazy load thumbnails
- show loading state
- show fallback if image fails
- support keyboard navigation in modal
- support touch horizontal scroll on mobile
- only probe multiple images on detail page, not on list page

## Accessibility

Target: WCAG 2.2 AA.

Must:

- all interactive elements must be keyboard reachable
- focus-visible must be visible
- text contrast must meet AA
- image alt text must describe MAP number/title when available
- buttons must have descriptive labels
- loading and error states must be visible
- modal must trap focus and close with Escape if implemented
- theme toggle must announce current mode via aria-label or text

## Content Tone

- Vietnamese first
- concise, warm, clear, trustworthy
- avoid overusing emoji in UI chrome
- keep customer-provided content intact inside content sections
- CTA text should be direct:
  - "Xem danh sach MAP"
  - "Doc thu"
  - "Lien he tu van"
  - "Nhan ban MAP day du"

## Anti-patterns

Do not:

- make MAP categories look like generic flat cards
- load all preview content at once
- probe multiple images in list view
- hide focus indicators
- use low-contrast gray text
- stretch cover images
- place long reading content inside modal
- hard-code raw colors everywhere
- change data schema without backward compatibility

## QA Checklist

- Home page shows intro image and full opening content
- Light/dark theme works and persists
- Category shelf looks like book covers
- MAP list looks like book covers
- chap3 category supports 23-1.jpeg, 23-2.jpeg, etc.
- chap4 category supports 41.jpeg
- Detail page can show multiple images if they exist
- Image probing is cached
- Missing images show fallback
- Preview data still lazy loads
- Mobile layout does not break
- Keyboard navigation works
- GitHub Pages still works
