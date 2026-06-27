# Data Science Robotics Lab — Compound Learning Dashboard

A single-folder, no-build-step vanilla HTML/CSS/JS dashboard for tracking a
data science learning journey end to end.

## Run it
Just open `index.html` in a browser — no server or build step required.
(For local development with relative paths behaving consistently, you can
also serve the folder with `python3 -m http.server` and visit
`https://khanriyazi.github.io/Data_Scientist/`.)

## What's inside
- **Overview** — mastery stats, category progress, a "Compound Learning
  Curve" chart that visualizes how mastering easier topics compounds into
  harder ones, and an AI-style "next up" learning path.
- **Syllabus** — 18 topics across Foundation → Core → Advanced, each with a
  definition, runnable example, and curated resources. Search, filter by
  difficulty/completion, and expand/collapse whole levels.
- **Robotics Lab** — an in-browser "notebook" with quick experiment presets
  (linear regression, k-means, a tiny neural net, PCA) and a live result chart.
- **Time Manager** — a focus/break Pomodoro-style timer with session logging
  and a weekly focus-minutes chart.
- **Knowledge Map** — a connected view of every topic, color-coded by level.

## Responsive behavior
- **Desktop (>1024px):** full fixed sidebar + 2–4 column grids.
- **Tablet (768–1024px):** narrower sidebar, grids collapse to 1–2 columns.
- **Mobile (<768px):** sidebar becomes a slide-in drawer (hamburger button +
  backdrop), a sticky top bar replaces the desktop header, and a bottom tab
  bar provides one-thumb navigation between the five sections. Touch targets,
  modal sizing, and code blocks are all tuned for small screens.

## Files
```
index.html       — structure (mobile topbar, drawer sidebar, bottom tab bar, modal)
css/styles.css   — all styling + responsive breakpoints
js/script.js     — syllabus data, view rendering, charts, timer, lab logic
```

## Customizing
- Edit `SYLLABUS_DATA` at the top of `js/script.js` to add/change topics,
  definitions, code examples, or resource links.
- Color tokens (dark navy + blue/purple accent) live as hex values throughout
  `css/styles.css` — search for `#60a5fa` / `#8b5cf6` to retheme quickly.
