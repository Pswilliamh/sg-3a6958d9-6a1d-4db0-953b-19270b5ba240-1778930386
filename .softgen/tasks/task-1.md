---
title: The Daily Anchor (Primary Screen)
status: in_progress
priority: urgent
type: feature
tags: [tab1, daily-anchor, core]
created_by: agent
created_at: 2026-05-16T08:04:20Z
position: 1
---

## Notes
Primary screen of the sanctuary app. Full-screen immersive experience with wood-relief art, wisdom quote overlay, and subtle branding. Implements long-press to hide all UI for pure viewing mode. One-click wallpaper download functionality.

**Design constraints:**
- Near-monochrome palette with extreme negative space
- Digital Chisel logo subtle upper corner (30% opacity)
- Typography whisper-quiet, secondary to imagery
- Ken Burns motion creates "living" atmosphere
- Long-press (800ms) toggles UI visibility

## Checklist
- [x] Create DailyAnchor.tsx component with full-screen layout
- [ ] Implement long-press interaction to hide/show UI (800ms threshold)
- [ ] Add randomized daily quote rotation (changes every 24 hours)
- [ ] Integrate 1-minute piano loop audio (gapless playback)
- [ ] Apply Ken Burns effect (60s cycle) to relief art
- [ ] Add subtle Digital Chisel logo placement (upper corner, 30% opacity)
- [ ] Implement "Apply Wallpaper" download button

## Acceptance
- Clicking on the relief art for 800ms hides all UI elements
- Daily quote changes once per day based on calendar date
- Audio loop plays seamlessly without gaps
- Apply Wallpaper button downloads the current image to user's device