---
title: Core Infrastructure & Systems
status: todo
priority: urgent
type: feature
tags: [core, audio, data]
created_by: agent
created_at: 2026-05-16T08:02:52Z
position: 4
---

## Notes
Foundation systems for the sanctuary app: wisdom quotes data structure, audio player with gapless looping, Ken Burns animation utilities, social export canvas renderer, tab navigation system.

Audio: 1-minute piano track hosted in /public/audio/. Web Audio API for gapless looping. Volume fader using gain nodes.

Data: Wisdom quotes stored in /public/data/wisdom-quotes.json. Each quote has: text, author, category fields.

## Checklist
- [ ] Create /public/data/wisdom-quotes.json with 20+ curated wisdom quotes (philosophers, structural thinkers, inspirational figures)
- [ ] Create /public/audio/ directory with placeholder piano track (user will replace)
- [ ] Create /public/images/gallery/ directory with 6 placeholder wood-relief images
- [ ] Create /public/images/logos/ for Digital Chisel and J.A.Y. Trade School logos (generate or placeholder)
- [ ] Create AudioContext hook (useAudioPlayer.tsx) for gapless looping with volume control
- [ ] Create utility function for Ken Burns keyframe generation
- [ ] Create social export utility (canvas-based) for image + quote rendering
- [ ] Set up main tab navigation in index.tsx (3 tabs: Daily Anchor, Soundscape Gallery, J.A.Y. Embassy)
- [ ] Implement daily quote rotation logic (deterministic based on current date)

## Acceptance
- Wisdom quotes JSON exists with diverse, thoughtful content
- Audio system plays seamlessly without gaps between loops
- Tab navigation switches between all three main views
- Placeholder images and logos in place for immediate preview
- Social export generates branded vertical images with quote overlay