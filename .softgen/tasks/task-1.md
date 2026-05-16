---
title: The Daily Anchor (Primary Screen)
status: todo
priority: urgent
type: feature
tags: [tab1, core, sanctuary]
created_by: agent
created_at: 2026-05-16T08:02:52Z
position: 1
---

## Notes
Full-screen sanctuary experience — the app's primary surface. Wood-relief art with Ken Burns motion, wisdom quote overlay, seamless piano loop. Digital Chisel logo subtle upper-right. One-click wallpaper download. Long-press gesture hides all UI/typography for pure viewing mode.

Design: Near-white beige background, deep black typography, generous breathing room. Quote text semi-transparent overlay at bottom 20% of screen. Logo watermark opacity 30%.

## Checklist
- [ ] Create DailyAnchor.tsx component with full-screen image container
- [ ] Implement 60-second Ken Burns pan+zoom CSS animation on image
- [ ] Add wisdom quote overlay (bottom-aligned, semi-transparent background, elegant serif typography)
- [ ] Place Digital Chisel logo watermark (upper-right, 30% opacity)
- [ ] Integrate 1-minute piano audio loop (autoplay on mount, gapless)
- [ ] Add "Apply Wallpaper" button (triggers download of current image)
- [ ] Implement long-press gesture to toggle UI visibility (quote + logo + button hidden)
- [ ] Daily quote rotation logic (randomize from wisdom quotes JSON, changes every 24h based on date)
- [ ] Add to index.tsx as Tab 1 content

## Acceptance
- Full-screen image displays with smooth, slow Ken Burns motion
- Wisdom quote appears elegantly at bottom with semi-transparent backing
- Long-pressing the image hides all UI elements, returning to visible on second long-press
- Piano track loops seamlessly without gaps
- Apply Wallpaper button downloads the current image to user's device