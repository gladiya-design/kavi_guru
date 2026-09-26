# Happy Birthday Machan ❤️ | A Premium Interactive Birthday Experience

A professional, interactive birthday gift website created specially for my **machan**. It features a sophisticated purple visual identity, smooth cinematic transitions, multilingual support (**தமிழ்**, **Tanglish**, **English**), editorial photography, comedy interactions, rapid-fire choices, and heartfelt emotional messages.

---

## 🚀 Quick Start

```bash
# Install dependencies (already completed)
npm install

# Run the local development server
npm run dev
```

Visit the website at: **[http://localhost:5173/](http://localhost:5173/)**

---

## 🎨 Visual Identity & Design System
- **Colors:** Deep purple (`#160B2E`), Royal purple (`#5B21B6`), Violet (`#7C3AED`), Lavender (`#A78BFA`), Soft lavender (`#DDD6FE`), Pure white (`#FFFFFF`), Light lavender (`#F5F3FF`).
- **Typography:** `Playfair Display`, `Inter`, `Noto Sans Tamil`, and `Noto Serif Tamil` for natural, high-fidelity Tamil and English rendering.
- **Aesthetic:** Glassmorphism, purple glow shadows, smooth parallax, blur-to-focus, subtle floating particles, and cinematic lighting.

---

## 🌐 Multilingual System (தமிழ் | Tanglish | English)
The top-right floating language control allows instant switching between:
- **தமிழ் (Tamil):** Deep, heartfelt, natural tone.
- **Tanglish:** Casual, brotherly, humorous tone.
- **English:** Warm, polished, elegant tone.

All texts, questions, options, and captions update dynamically without page reloads!

---

## 📸 How to Add Your Real Photographs

You have two convenient ways to use your real photos:

### Option 1: Drop Files into `public/photos/`
Place your photos in `public/photos/` with any of these filenames:
- `fun-mall-1.jpg` — 23 April 2025 memory
- `lake-1.jpg` — Ordinary days
- `trouble.jpg` — Unfiltered us
- `ukkadam.jpg` — Night pickup
- `marudhamalai-1.jpg` — First mini trip
- `lake-2.jpg` — Calm afternoons
- `polar-bear.jpg` — Ice cream run
- `final-photo.jpg` — Trio / Final screen hero photo

### Option 2: Live Browser Uploader
Click the **"Upload"** button on any photo card directly in the browser to preview your own images in real time!

---

## 🎵 How to Add Your Background Song

Place your song file at:
`public/music/birthday-song.mp3`

Supported formats: `.mp3`, `.m4a`, `.wav`, `.ogg`.

> **Note:** If you haven't placed an mp3 file yet, the website automatically plays a soothing, built-in ambient melodic music-box chime via the Web Audio API!

---

## ✏️ Customizing Texts, Questions & Messages

All content is cleanly centralized in:
[`src/data/birthdayData.js`](src/data/birthdayData.js)

You can easily adjust any line, quiz question, or message across Tamil, Tanglish, and English!
