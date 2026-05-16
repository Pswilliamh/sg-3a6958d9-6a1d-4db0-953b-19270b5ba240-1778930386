---
title: The Soundscape Gallery
status: todo
priority: high
type: feature
tags: [tab2, gallery]
created_by: agent
created_at: 2026-05-16T08:02:52Z
position: 2
---

## Notes
Masonry grid layout of the entire wood-relief print library. Each image preview has subtle Ken Burns motion. Clicking an image opens full-screen view with quote overlay (like Tab 1 but for any image). Audio continues seamlessly across navigation. Volume fader gentle in/out on app open/close.

Design: Clean masonry with minimal gaps (8px), images at varying aspect ratios but consistent column width. Hover state: slight scale + shadow.

## Checklist
- [ ] Create SoundscapeGallery.tsx component with responsive masonry grid
- [ ] Display all images from the library (hardcoded array initially, later expandable)
- [ ] Apply Ken Burns effect to each grid thumbnail
- [ ] Implement click handler to open full-screen modal with selected image
- [ ] Full-screen modal includes wisdom quote overlay + Apply Wallpaper button
- [ ] Ensure audio continues playing during navigation (shared audio context)
- [ ] Add volume fader logic (fade in on mount, fade out on unmount — 1s transition)
- [ ] Add to index.tsx as Tab 2 content

## Acceptance
- Gallery displays in clean masonry layout with all library images
- Clicking any image opens full-screen view with quote overlay
- Audio plays continuously across tab switches without restarting
- Thumbnails show subtle motion effect