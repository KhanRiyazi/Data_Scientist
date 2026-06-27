# Data Science Robotics Lab — Compound Learning Dashboard

A single-folder, no-build-step vanilla HTML/CSS/JS dashboard for mastering
data science end to end, designed around how learning actually compounds:
earlier topics feed later ones.

## Run it
Open `index.html` directly in a browser — no server or build step required.
(Optionally serve the folder with `python3 -m http.server` for a cleaner
local-dev experience.)

## What's inside
- **Overview** — mastery stats, category progress, a "Compound Learning
  Curve" chart weighted by difficulty, and an AI-style "next up" path.
- **Syllabus** — 18 topics across Foundation → Core → Advanced. Each topic
  now has:
  - **Basic + Advanced definitions** (toggle tabs) — a plain-English
    explanation and a deeper, technical one.
  - **Basic + Advanced runnable examples** (toggle tabs) — a simple example
    plus a more sophisticated, real-world pattern (leak-safe pipelines,
    Bayesian A/B tests, self-attention from scratch, drift detection, etc).
  - **4 curated resources** each (docs, video, article, hands-on practice).
  - **A compound chain** — every topic's modal shows what it builds on and
    what it unlocks next, and each row in the syllabus list shows a small
    ⛓️ badge (prerequisites → unlocks) so the learning order is visible at
    a glance.
  Search, filter by difficulty/completion, and expand/collapse whole levels.
- **Robotics Lab** — an in-browser "notebook" with quick experiment presets
  and a live result chart.
- **Time Manager** — a focus/break Pomodoro-style timer with session logging.
- **Knowledge Map** — a connected view of every topic, color-coded by level.

## Responsive behavior
- **Desktop (>1024px):** full fixed sidebar + 2–4 column grids.
- **Tablet (768–1024px):** narrower sidebar, grids collapse to 1–2 columns.
- **Mobile (<768px):** sidebar becomes a slide-in drawer (hamburger + backdrop),
  a sticky top bar replaces the desktop header, and a bottom tab bar gives
  one-thumb navigation. Touch targets, modal sizing, and code blocks are
  tuned for small screens.

## Files
```
index.html       — structure (mobile topbar, drawer sidebar, bottom tab bar, modal)
css/styles.css   — all styling, tabs/chain-strip UI, responsive breakpoints
js/script.js     — syllabus data (incl. prerequisites + advanced content),
                   view rendering, charts, timer, lab logic, modal tabs
```

## Customizing
- Edit `SYLLABUS_DATA` at the top of `js/script.js`. Each topic supports:
  `definition: { basic, advanced }`, `example`, `advancedExample`,
  `prerequisites: [topicNames]`, and `resources: [{name, url, icon}]` (4
  recommended). Adding a `prerequisites` entry automatically wires up the
  compound-chain visuals — no other code changes needed.
- Color tokens (dark navy + blue/purple accent) live as hex values throughout
  `css/styles.css` — search for `#60a5fa` / `#8b5cf6` to retheme quickly.
