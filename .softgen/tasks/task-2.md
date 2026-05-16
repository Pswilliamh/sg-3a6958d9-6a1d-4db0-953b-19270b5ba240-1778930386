---
title: The Soundscape Gallery
status: in_progress
priority: high
type: feature
tags: [tab2, gallery, masonry]
created_by: agent
created_at: 2026-05-16T08:04:20Z
position: 2
---

## Notes
Masonry grid gallery of Indonesian wood-relief prints with modal detail view. Each thumbnail shows subtle Ken Burns motion. Clicking opens full-screen modal with quote overlay and download option. Audio continues across tab switches.

**Design constraints:**
- Clean masonry layout (1/2/3 columns based on breakpoint)
- Ken Burns effect on thumbnails (30s cycle, faster than main screen)
- Modal shows full image with quote + download button
- Volume fader for audio breathing effect

## Checklist
- [x] Create SoundscapeGallery.tsx with masonry grid layout
- [ ] Implement modal/dialog for full-screen image viewing
- [ ] Add Ken Burns effect to thumbnails (30s cycle)
- [ ] Display random wisdom quote in modal overlay
- [ ] Implement volume fader for audio breathing effect
- [ ] Ensure audio plays continuously across tab switches without restarting
- [ ] Thumbnails show subtle motion effect