# Data Science Robotics Lab — Compound Learning Dashboard

A single-folder, no-build-step vanilla HTML/CSS/JS dashboard for mastering
Python and data science end to end — aligned to the official **IBM Data
Science Professional Certificate**, with a full **Python Key Programs**
reference and revision-checklist system built in.

## Run it
Open `index.html` directly in a browser — no server or build step required.

## 🐍 Python Key Programs — now 82 programs across 16 categories

Covers the full beginner → professional path:

**Language fundamentals**
- Variables, Data Types & Type Casting
- Input/Output & Operators (incl. conditionals, ternary, grading-system pattern)
- Loops & Iteration (for/while, comprehensions, enumerate, zip, generators)
- Tuples, Sets & Dictionaries
- Functions (*args/**kwargs, lambda, map/filter, closures, decorators)
- File Handling (read/write/append, line-by-line, CSV)
- Exception Handling (try/except/else/finally, custom exceptions, chaining)
- Modules, Packages & Virtual Environments

**Object-Oriented Programming**
- Classes & OOP — constructors, instance vs. class attributes, inheritance
  + super(), polymorphism, encapsulation + @property, dunder methods,
  @staticmethod/@classmethod, abstract base classes

**Algorithms & professional practice**
- Numbers, Strings, Lists & Arrays, Patterns & Logic, Recursion & Data
  Structures (the original "interview formula" set)
- Iterators & the iteration protocol (iter/next, custom iterators, itertools)
- API Calls & Automation Scripts (GET/POST + JSON, file automation, the
  task-vs-trigger pattern for scheduled scripts)

**Two ways to use it:**
- **📖 Study mode** — each card leads with a 🔑 key idea (the reusable
  "formula"), then expands to show the code, expected output, a real-world
  use case, and a common beginner mistake to avoid.
- **📋 Revision checklist** — a compact, code-free list so you can test
  yourself by recalling each key idea from memory before checking it off.
  A ✅/⏳ progress count tracks how much you've reviewed.

Search works across all 82 programs at once, and categories expand/collapse
independently.

## Everything else
- **Overview** — mastery stats, a "Compound Learning Curve" chart.
- **Syllabus** — 23 data-science topics mapped to the official IBM
  certificate courses (or flagged "Supplementary"), each with basic/advanced
  definitions, basic/advanced examples, 4 resources, and a compound
  prerequisite chain.
- **Robotics Lab**, **Time Manager**, **Knowledge Map** — runnable-code
  sandbox, focus timer, connected topic map.

## Responsive behavior
Desktop: full sidebar + multi-column grids. Tablet: narrower sidebar,
1–2 column grids. Mobile (<768px): drawer sidebar (hamburger + backdrop),
sticky top bar, and a 6-tab bottom nav bar for one-thumb navigation.

## Files
```
index.html       — structure (mobile topbar, drawer sidebar, 6-tab bottom bar, modal)
css/styles.css   — styling: syllabus + Python-formula cards, study/checklist
                   modes, tabs, chain-strip, responsive breakpoints
js/script.js     — SYLLABUS_DATA (23 topics) + PY_FORMULAS_DATA (82 programs,
                   16 categories), view rendering, charts, timer, lab logic
```

## Customizing
Each program in `PY_FORMULAS_DATA` supports: `name`, `difficulty`,
`mastered` (revision tracking), `key` (the one-line takeaway), `code`,
`output`, and optionally `realWorld` / `mistake` / `explanation` / `practice`
for extra depth (rendered automatically in Study mode when present).

Color tokens (dark navy + blue/purple accent) live as hex values throughout
`css/styles.css` — search for `#60a5fa` / `#8b5cf6` to retheme.
