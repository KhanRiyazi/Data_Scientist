# Data Science Robotics Lab — Compound Learning Dashboard

A single-folder, no-build-step vanilla HTML/CSS/JS dashboard for mastering
data science end to end — aligned to the official **IBM Data Science
Professional Certificate** (Coursera, 12-course series), now with a
**Python Key Programs** reference built in.

## Run it
Open `index.html` directly in a browser — no server or build step required.

## What's inside

### 🐍 Python Key Programs (new)
A "formula sheet" for Python — the same way `x = (-b ± √(b²-4ac)) / 2a` solves
every quadratic equation, each program here is a fixed, reusable pattern that
solves a whole class of problems. 31 programs across 5 categories:
- **Numbers** — factorial, Fibonacci, prime check, GCD/LCM, Armstrong number, leap year, swap without temp, etc.
- **Strings** — reverse, palindrome check, anagram check, word frequency, vowel count, etc.
- **Lists & Arrays** — linear/binary search, bubble sort, second largest, Two Sum, missing number, etc.
- **Patterns & Logic** — FizzBuzz, pyramid pattern, Pascal's Triangle.
- **Recursion & Data Structures** — recursive factorial/Fibonacci (with memoization), recursive binary search, stack/queue, reversing a linked list.

Each card leads with a **🔑 key idea** (the "formula" to remember) before the
code — search across all programs, expand/collapse by category, and toggle
each program's code + expected output independently.

### Other sections
- **Overview** — mastery stats, category progress, a "Compound Learning Curve" chart.
- **Syllabus** — 23 data-science topics mapped to the official IBM
  certificate courses (or flagged "Supplementary"), each with basic/advanced
  definitions, basic/advanced runnable examples, 4 resources, and a compound
  prerequisite chain.
- **Robotics Lab** — an in-browser notebook with quick experiment presets.
- **Time Manager** — a focus/break Pomodoro-style timer with session logging.
- **Knowledge Map** — a connected view of every data-science topic.

## Responsive behavior
- **Desktop (>1024px):** full fixed sidebar + 2–4 column grids.
- **Tablet (768–1024px):** narrower sidebar, grids collapse to 1–2 columns.
- **Mobile (<768px):** sidebar becomes a slide-in drawer (hamburger +
  backdrop), a sticky top bar replaces the desktop header, and a bottom tab
  bar (now 6 sections) gives one-thumb navigation.

## Files
```
index.html       — structure (mobile topbar, drawer sidebar, 6-tab bottom bar, modal)
css/styles.css   — styling: syllabus + Python-formula cards, tabs, chain-strip, responsive
js/script.js     — SYLLABUS_DATA (23 topics) + PY_FORMULAS_DATA (31 programs),
                   view rendering, charts, timer, lab logic, modal tabs
```

## Customizing
- Edit `SYLLABUS_DATA` for data-science topics (see prior notes on
  `definition`, `example`/`advancedExample`, `prerequisites`, `ibmCourse`,
  `resources`).
- Edit `PY_FORMULAS_DATA` for Python programs. Each entry under a category's
  `programs` array supports: `name`, `difficulty`, `key` (the one-line
  takeaway), `code` (runnable example), `output` (expected printed output,
  use `\n` for multiple lines).
- Color tokens (dark navy + blue/purple accent) live as hex values
  throughout `css/styles.css` — search for `#60a5fa` / `#8b5cf6` to retheme.
