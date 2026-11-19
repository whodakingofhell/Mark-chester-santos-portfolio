---
name: agentic-video-editor
description: Autonomous multi-stage video editing, facial motion transfer, and frame-accurate post-production pipeline (Preprocess/Scene Indexing -> Director/EditPlan -> Trim & Motion Alignment -> FFmpeg/Compositor Editor -> 5-Dimension Visual Reviewer & Retry Loop). Adapted from poseljacob/agentic-video-editor (ave).
---

# Agentic Video Editor (`agentic-video-editor` / `ave`)

An autonomous, multi-agent post-production and video compositing workflow powered by multimodal reasoning and deterministic **FFmpeg** / pixel-level frame processing.

Instead of a single-pass blind render that produces "AI slop" or repetitive artifacts, **Agentic Video Editor (`ave`)** enforces a closed-loop **5-Stage Post-Production Pipeline** with an automated **Reviewer & Visual Diff Critic Gate** that compares the rendered output directly against the reference footage and retries until all quality dimensions pass.

---

## 🎬 The 5-Stage Agentic Post-Production Pipeline

### Stage 1: Preprocess & Reference Indexing (`Preprocess`)
Before touching any pixels or writing an edit script:
1. **Decode & Index Reference Footage:** Extract exact frame timestamps, FPS, resolution, motion-control camera trajectories, lighting/color histograms, and per-frame subject motion metrics from the reference video.
2. **Vocal & Activity Segmentation:** Separate active lead-vocal phrases from instrumental/background ad-lib pauses and silent/bowed-head intervals so the subject ONLY articulates when actually speaking/rapping in the reference video.
3. **Facial Feature & Motion Differential Analysis:** Measure frame-by-frame head pose `(cx, cy, scale, pitch_dy, tilt_angle)`, brow/eye dynamics, and mouth/jaw state `(openness, width, teeth_visibility, lip_closure)` directly from the reference actor's video frames.

### Stage 2: Director & EditPlan (`Director Agent`)
Construct a deterministic `EditPlan` mapping every frame interval `[f_start, f_end]` to:
- **Camera & Scene State:** Exact dolly/pullback scale and framing.
- **Subject Action State:**
  - *Active Lead Vocal Performance* (subject looking at camera, rapping lead lines)
  - *Listening / Nodding / Ad-Lib Pause* (lips relaxed/closed while background ad-libs play, natural head nod & eye blink)
  - *Bowed-Head / Crowd Choreography Synchronization* (matching the exact head pitch/nod rhythm of the original performer in the reference video)

### Stage 3: Trim & Motion Alignment (`Trim Refiner Agent`)
- Align every vocal onset, bilabial closure (`B / M / P`), vowel peak, and phrase pause to the exact frame index of the reference video (`0.0417s` precision at 24 fps).
- Eliminate any continuous/robotic oscillation during pauses or background-only ad-libs.
- Transfer the reference performer's real 2D/3D head micro-motion (nodding, subtle head tilt, natural eye blinks, brow micro-expressions, and dynamic lighting shifts) so the composite moves identically to the live-action plate.

### Stage 4: Deterministic Compositing & FFmpeg Execution (`Editor Agent`)
- Execute frame-accurate compositing with matched 35mm color LUTs, dynamic shadow/lighting transfer from the source frame, natural facial micro-expressions, and depth-aware foreground occlusion.
- Encode via FFmpeg (`libx264 -crf 15 -pix_fmt yuv420p` + `aac 192k` stereo audio) with zero synthetic camera shake.

### Stage 5: 5-Dimension Visual Reviewer & Retry Loop (`Reviewer Agent`)
Inspect side-by-side comparison frames (`Reference Video Frame` vs `Rendered Output Frame`) across the timeline and score 5 dimensions (`0.00` to `1.00`):
1. **Facial Feature & Identity Fidelity:** Does the face preserve 100% of the user's real facial structure, skin texture, eyes, nose, and mouth without uncanny distortion?
2. **Motion & Behavioral Equivalence:** Does the head nod, pause, blink, and move with the exact rhythm and phrasing of the original music video (no frozen-statue look, no non-stop robotic mouth flapping)?
3. **Lip-Sync & Phonetic Accuracy:** Do the lips close completely during pauses, background ad-libs, and `B/M/P` consonants, and open naturally only on the actual sung syllables?
4. **Lighting, Color & Edge Integration:** Do skin tones, shadow floor, collar edges, and foreground dancer occlusions blend seamlessly into the cinema plate?
5. **Anti-Slop Delivery Gate:** Zero jitter, zero fake zoom pulses, zero text/watermarks, zero double-shoulder seams.

> **Mandatory Retry Rule:** If any dimension scores `< 0.90` or if visual inspection reveals a mismatch against the original reference video frames, diagnose the exact root cause, refine the motion/compositing model, and re-render before presenting to the user.
