---
title: Core Infrastructure & Systems
status: in_progress
priority: urgent
type: feature
tags: [infrastructure, audio, animations, data]
created_by: agent
created_at: 2026-05-16T08:04:20Z
position: 4
---

## Notes
Core systems that support all three tabs: wisdom quotes data, gapless audio player, Ken Burns animation system, and social export functionality. These systems must work seamlessly across the entire sanctuary experience.

**Technical requirements:**
- Audio must loop without gaps using Web Audio API
- Ken Burns effect: 60s cycle for main view, 30s for thumbnails
- Daily quote rotation based on day of year
- Image download functionality for wallpaper application

## Checklist
- [x] Create wisdom-quotes.json with 24+ curated quotes
- [x] Build useAudioPlayer hook with gapless loop support
- [x] Implement Ken Burns CSS animations (60s and 30s variants)
- [x] Create gallery utility functions (daily quote, random image, download)
- [x] Generate Indonesian wood-relief prints for gallery (6 images)
- [x] Generate Digital Chisel and J.A.Y. Trade School logos
- [ ] Add 1-minute instrumental piano track to /public/audio/
- [ ] Implement volume fade in/out for audio breathing effect
- [ ] Create social export function (art + quote → branded vertical image)
- [ ] Set up tab navigation with persistent audio playback

## Acceptance
- Wisdom quotes load correctly from JSON file
- Audio loops seamlessly without gaps (requires audio file upload)
- Ken Burns animations run at correct speeds on all images
- Gallery images are in place for immediate preview
- Social export generates branded vertical images with quote overlay