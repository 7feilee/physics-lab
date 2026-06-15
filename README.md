# Physica — Interactive Physics, High School to the Frontier

A free, open, **interactive physics learning platform**. Learn physics in English from
high-school mechanics all the way to the research frontier — every big idea paired with a
**live simulation you can grab, tune and break**, real KaTeX-typeset mathematics, and
short conceptual quizzes.

🔭 **Live site:** https://7feilee.github.io/physics-lab/

## What's inside

- **5 tracks · 40 lessons · ~56,000 words**, climbing one ladder:
  1. **High School** — motion, forces, energy, waves, electricity, light, first quantum ideas
  2. **Undergraduate** — Lagrangian/Hamiltonian mechanics, Maxwell, thermodynamics & stat-mech, quantum mechanics, special relativity
  3. **Graduate & Research** — QFT, general relativity, the renormalization group, band theory, the Standard Model
  4. **Frontier & New Fields** — quantum information, quantum gravity & holography, topological matter, the physics of complexity & life, open problems
  5. **The Physicist's Toolkit** — how to think like a physicist, dimensional analysis & Fermi estimation, a map of the mathematics
- **15 hand-built, real-physics simulations** running on `<canvas>` at 60 fps: projectile motion, collisions, pendulum, orbits, the chaotic double pendulum, an ideal gas, EM & sound waves, electric fields, the double slit, quantum wave-packets, particle-in-a-box, tunnelling, special relativity, the Ising model, and the Bloch sphere.
- Search, dark/light themes, keyboard navigation, and locally-saved progress — **no accounts, no tracking, no build step.**

## How it works

Pure static site — open `index.html` over HTTP and it runs. No framework, no bundler.

| Path | Role |
|------|------|
| `index.html` | Shell: topbar, sidebar, content host |
| `assets/css/style.css` | The entire design system (dark/light) |
| `assets/js/app.js` | Hash router, sidebar, the markdown→KaTeX pipeline, sim/quiz mounting, search, progress |
| `assets/js/curriculum.js` | The curriculum tree (tracks → modules → lessons) |
| `assets/js/quizzes.js` | The quiz bank |
| `assets/js/sims/` | `PSim` micro-framework (`registry.js`) + the 15 simulations |
| `content/**/*.md` | The lessons, in Markdown, fetched at runtime |

### Authoring a lesson

Lessons are Markdown with a few conventions handled by `app.js`:

- Math with `$inline$` and `$$display$$` (KaTeX).
- Callouts: `:::key`, `:::try`, `:::history`, `:::warn`, `:::note`, `:::deep` … closed with `:::`.
- Embed a simulation: `<div class="sim" data-sim="NAME"></div>`.
- Embed a quiz: `<div class="quiz" data-quiz="LESSON-ID"></div>`.

## Run locally

```bash
# any static server works; fetch() needs HTTP, not file://
python3 -m http.server 8000
# then open http://localhost:8000/
```

## License

Content and code are released for free educational use. Built for curious minds.
