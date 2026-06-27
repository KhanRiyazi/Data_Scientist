# Data Science Robotics Lab — Compound Learning Dashboard

A single-folder, no-build-step vanilla HTML/CSS/JS dashboard for mastering
data science end to end — now aligned to the official **IBM Data Science
Professional Certificate** (Coursera, 12-course series).

## Run it
Open `index.html` directly in a browser — no server or build step required.

## What's inside
- **Overview** — mastery stats, category progress, a "Compound Learning
  Curve" chart, and an AI-style "next up" path.
- **Syllabus** — 23 topics across Foundation → Core → Advanced, with a
  banner linking to the official IBM program. Every topic shows:
  - Which **official IBM course** it maps to (e.g. "Course 9 · Machine
    Learning with Python"), or is flagged **Supplementary** if it goes
    beyond the official 12-course curriculum.
  - **Basic + Advanced definitions** and **Basic + Advanced runnable
    examples** (toggle tabs).
  - **4 curated resources** each — including a direct link to the matching
    official Coursera course where one exists.
  - A **compound chain** (⛓️ badge + modal strip) showing what each topic
    builds on and what it unlocks.
  Search, filter by difficulty/completion, expand/collapse whole levels.
- **Robotics Lab**, **Time Manager**, **Knowledge Map** — unchanged from
  the previous build: a runnable-code sandbox, a focus timer, and a
  connected topic map.

## How the syllabus maps to the real certificate
| IBM Course (official) | Covered by |
|---|---|
| 1–3: What is Data Science? / Tools / Methodology | Data Science Methodology & Tools |
| 4: Python for Data Science, AI & Development | Python for Data Science |
| 6: Databases and SQL for Data Science with Python | SQL & Relational Databases |
| 7: Data Analysis with Python | Data Wrangling (Pandas), Feature Engineering |
| 8: Data Visualization with Python | Data Visualization (Matplotlib) |
| 9: Machine Learning with Python | Supervised/Unsupervised Learning, Model Evaluation, Decision Trees |
| 10: Applied Data Science Capstone | Applied Capstone Project & Portfolio |
| 11: Generative AI: Elevate Your Data Science Career | Generative AI for Data Science, AI Ethics |
| 12: Career Guide and Interview Preparation | Career Guide & Interview Prep |

Topics like Linear Algebra, Calculus, Neural Networks, Deep Learning, NLP,
Big Data, MLOps, and Reinforcement Learning are marked **Supplementary** —
they aren't part of IBM's official syllabus but are commonly expected for
data science roles, so they're included for deeper, employer-ready mastery.

*(Course names, structure, and links reflect IBM's program as published on
Coursera; verify current pricing/length directly on Coursera, as program
details can change over time.)*

## Responsive behavior
- **Desktop (>1024px):** full fixed sidebar + 2–4 column grids.
- **Tablet (768–1024px):** narrower sidebar, grids collapse to 1–2 columns.
- **Mobile (<768px):** sidebar becomes a slide-in drawer (hamburger +
  backdrop), a sticky top bar replaces the desktop header, and a bottom
  tab bar gives one-thumb navigation.

## Files
```
index.html       — structure (mobile topbar, drawer sidebar, bottom tab bar, modal)
css/styles.css   — styling, tabs/chain-strip/IBM-badge UI, responsive breakpoints
js/script.js     — syllabus data (23 topics incl. ibmCourse + prerequisites),
                   view rendering, charts, timer, lab logic, modal tabs
```

## Customizing
- Edit `SYLLABUS_DATA` at the top of `js/script.js`. Each topic supports:
  `definition: { basic, advanced }`, `example`, `advancedExample`,
  `prerequisites: [topicNames]`, `ibmCourse: 'Course N · Name'` (or a
  string starting with `'Supplementary'`), and `resources: [{name, url, icon}]`.
- Color tokens (dark navy + blue/purple accent) live as hex values
  throughout `css/styles.css` — search for `#60a5fa` / `#8b5cf6` to retheme.
