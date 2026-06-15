/* ============================================================
   Physica curriculum tree.
   Tracks -> Modules -> Lessons. Each lesson points at a markdown
   file under content/. `sims` lists embedded simulations (used for
   search + the "interactive" badge). Order here defines prev/next.
   ============================================================ */
window.CURRICULUM = {
  tracks: [
    {
      id: "hs",
      title: "High School",
      short: "Foundations",
      color: "#5b8cff",
      color2: "#3b6ad6",
      tagline: "The mechanics of the everyday world",
      desc: "Build rock-solid intuition for motion, forces, energy, waves, electricity and light — the physics that explains the world you can see and touch.",
      modules: [
        {
          id: "hs-motion",
          title: "Motion & Forces",
          desc: "How and why things move.",
          lessons: [
            { id: "hs-kinematics", title: "Describing Motion", file: "content/hs/kinematics.md", mins: 14, sims: ["projectile"] },
            { id: "hs-newton", title: "Newton's Three Laws", file: "content/hs/newton.md", mins: 16 },
            { id: "hs-projectile", title: "Projectile Motion", file: "content/hs/projectile.md", mins: 13, sims: ["projectile"] },
            { id: "hs-momentum", title: "Momentum & Collisions", file: "content/hs/momentum.md", mins: 15, sims: ["collisions"] },
          ],
        },
        {
          id: "hs-energy",
          title: "Energy",
          desc: "The universe's most reliable accountant.",
          lessons: [
            { id: "hs-energy", title: "Work, Energy & Power", file: "content/hs/energy.md", mins: 15, sims: ["collisions"] },
          ],
        },
        {
          id: "hs-waves",
          title: "Oscillations, Waves & Sound",
          desc: "Rhythms, ripples and resonance.",
          lessons: [
            { id: "hs-shm", title: "Oscillations & Simple Harmonic Motion", file: "content/hs/shm.md", mins: 15, sims: ["pendulum"] },
            { id: "hs-waves", title: "Waves, Sound & Interference", file: "content/hs/waves.md", mins: 16, sims: ["waves"] },
          ],
        },
        {
          id: "hs-em",
          title: "Electricity, Magnetism & Light",
          desc: "Invisible fields that power civilisation.",
          lessons: [
            { id: "hs-charge", title: "Electric Charge & Fields", file: "content/hs/charge.md", mins: 16, sims: ["efield"] },
            { id: "hs-circuits", title: "Current, Voltage & Circuits", file: "content/hs/circuits.md", mins: 15 },
            { id: "hs-optics", title: "Light, Reflection & Refraction", file: "content/hs/optics.md", mins: 14 },
          ],
        },
        {
          id: "hs-modern",
          title: "A First Look at Modern Physics",
          desc: "Where everyday physics breaks down.",
          lessons: [
            { id: "hs-atom", title: "Atoms, Photons & the Quantum Idea", file: "content/hs/atom.md", mins: 14, sims: ["doubleslit"] },
          ],
        },
      ],
    },

    {
      id: "ug",
      title: "Undergraduate",
      short: "The Core Theories",
      color: "#9b6bff",
      color2: "#7a45d8",
      tagline: "The four pillars of physics, properly",
      desc: "Re-derive the world from deeper principles: Lagrangian and Hamiltonian mechanics, Maxwell's electromagnetism, thermodynamics & statistical mechanics, quantum mechanics and special relativity.",
      modules: [
        {
          id: "ug-mech",
          title: "Classical Mechanics",
          desc: "Mechanics rebuilt on principles of least action.",
          lessons: [
            { id: "ug-lagrange", title: "Lagrangian Mechanics & Least Action", file: "content/ug/lagrange.md", mins: 20 },
            { id: "ug-hamilton", title: "Hamiltonian Mechanics & Phase Space", file: "content/ug/hamilton.md", mins: 18 },
            { id: "ug-orbits", title: "Central Forces & Planetary Orbits", file: "content/ug/orbits.md", mins: 18, sims: ["orbit"] },
            { id: "ug-chaos", title: "Nonlinearity, Chaos & the Double Pendulum", file: "content/ug/chaos.md", mins: 16, sims: ["doublependulum"] },
          ],
        },
        {
          id: "ug-em",
          title: "Electromagnetism",
          desc: "Four equations that contain all of light.",
          lessons: [
            { id: "ug-maxwell", title: "Maxwell's Equations", file: "content/ug/maxwell.md", mins: 22, sims: ["efield"] },
            { id: "ug-emwaves", title: "Electromagnetic Waves & Light", file: "content/ug/emwaves.md", mins: 17, sims: ["waves"] },
          ],
        },
        {
          id: "ug-thermo",
          title: "Thermodynamics & Statistical Mechanics",
          desc: "From atoms in chaos to the laws of heat.",
          lessons: [
            { id: "ug-thermo", title: "The Laws of Thermodynamics", file: "content/ug/thermo.md", mins: 18 },
            { id: "ug-statmech", title: "Kinetic Theory, Entropy & Temperature", file: "content/ug/statmech.md", mins: 19, sims: ["gas"] },
          ],
        },
        {
          id: "ug-qm",
          title: "Quantum Mechanics",
          desc: "The strange, exact rules of the very small.",
          lessons: [
            { id: "ug-wavefunction", title: "The Wavefunction & Schrödinger's Equation", file: "content/ug/wavefunction.md", mins: 22, sims: ["wavepacket"] },
            { id: "ug-particlebox", title: "Particle in a Box & Quantisation", file: "content/ug/particlebox.md", mins: 17, sims: ["particlebox"] },
            { id: "ug-tunnel", title: "Quantum Tunnelling", file: "content/ug/tunnel.md", mins: 15, sims: ["tunnel"] },
          ],
        },
        {
          id: "ug-sr",
          title: "Special Relativity",
          desc: "Space and time as one geometric fabric.",
          lessons: [
            { id: "ug-relativity", title: "Spacetime & Lorentz Transformations", file: "content/ug/relativity.md", mins: 20, sims: ["relativity"] },
          ],
        },
      ],
    },

    {
      id: "grad",
      title: "Graduate & Research",
      short: "Modern Frameworks",
      color: "#2ee6c7",
      color2: "#16b89c",
      tagline: "Fields, geometry and the Standard Model",
      desc: "The machinery of contemporary theoretical physics: quantum field theory, general relativity, the renormalization group, condensed matter and the Standard Model of particle physics.",
      modules: [
        {
          id: "grad-qft",
          title: "Quantum Field Theory",
          desc: "Particles as ripples in quantum fields.",
          lessons: [
            { id: "grad-qft", title: "From Particles to Fields", file: "content/grad/qft.md", mins: 24 },
            { id: "grad-feynman", title: "Feynman Diagrams & Interactions", file: "content/grad/feynman.md", mins: 20 },
          ],
        },
        {
          id: "grad-gr",
          title: "General Relativity",
          desc: "Gravity as the geometry of spacetime.",
          lessons: [
            { id: "grad-gr", title: "Curved Spacetime & Einstein's Equations", file: "content/grad/gr.md", mins: 24 },
            { id: "grad-blackholes", title: "Black Holes & Gravitational Waves", file: "content/grad/blackholes.md", mins: 20, sims: ["orbit"] },
          ],
        },
        {
          id: "grad-cm",
          title: "Statistical & Condensed Matter Physics",
          desc: "How collective behaviour creates new physics.",
          lessons: [
            { id: "grad-rg", title: "Phase Transitions & the Renormalization Group", file: "content/grad/rg.md", mins: 22, sims: ["ising"] },
            { id: "grad-bands", title: "Band Theory & Why Solids Conduct", file: "content/grad/bands.md", mins: 19 },
          ],
        },
        {
          id: "grad-particle",
          title: "Particle Physics",
          desc: "The known elementary constituents of reality.",
          lessons: [
            { id: "grad-standardmodel", title: "The Standard Model", file: "content/grad/standardmodel.md", mins: 23 },
          ],
        },
      ],
    },

    {
      id: "frontier",
      title: "Frontier & New Fields",
      short: "The Open Edge",
      color: "#ffb547",
      color2: "#f0820e",
      tagline: "Where the textbooks run out",
      desc: "The living edge of physics: quantum information and computing, the quest for quantum gravity, holography, topological matter, the physics of complexity and life, and the great open problems.",
      modules: [
        {
          id: "fr-qi",
          title: "Quantum Information & Computing",
          desc: "Computing with superposition and entanglement.",
          lessons: [
            { id: "fr-qubits", title: "Qubits, Entanglement & the Bloch Sphere", file: "content/frontier/qubits.md", mins: 20, sims: ["bloch"] },
            { id: "fr-algorithms", title: "Quantum Algorithms & Why They Win", file: "content/frontier/algorithms.md", mins: 18 },
          ],
        },
        {
          id: "fr-qg",
          title: "Quantum Gravity & Holography",
          desc: "Reconciling Einstein with the quantum.",
          lessons: [
            { id: "fr-quantumgravity", title: "The Problem of Quantum Gravity", file: "content/frontier/quantumgravity.md", mins: 20 },
            { id: "fr-holography", title: "Holography & Black-Hole Information", file: "content/frontier/holography.md", mins: 20 },
          ],
        },
        {
          id: "fr-emergent",
          title: "Emergent & Interdisciplinary Physics",
          desc: "New laws born from many interacting parts.",
          lessons: [
            { id: "fr-topological", title: "Topological Matter", file: "content/frontier/topological.md", mins: 18 },
            { id: "fr-complexity", title: "Complexity, Active Matter & the Physics of Life", file: "content/frontier/complexity.md", mins: 18 },
            { id: "fr-open", title: "Open Problems & Where Physics Goes Next", file: "content/frontier/open.md", mins: 16 },
          ],
        },
      ],
    },

    {
      id: "toolkit",
      title: "The Physicist's Toolkit",
      short: "Skills & Method",
      color: "#7c8aa5",
      color2: "#586379",
      tagline: "How to actually think like a physicist",
      desc: "Cross-cutting skills that make the rest possible: the mathematics behind the physics, dimensional analysis, estimation, and the habits of mind that separate physicists from calculators.",
      modules: [
        {
          id: "tk-method",
          title: "Method & Mathematics",
          desc: "The meta-skills of the discipline.",
          lessons: [
            { id: "tk-thinking", title: "How to Think Like a Physicist", file: "content/toolkit/thinking.md", mins: 14 },
            { id: "tk-dimensions", title: "Units, Dimensions & Fermi Estimation", file: "content/toolkit/dimensions.md", mins: 13 },
            { id: "tk-math", title: "The Mathematics of Physics: a Map", file: "content/toolkit/math.md", mins: 16 },
          ],
        },
      ],
    },
  ],
};

/* ---- flatten helpers (built once) ---- */
(function () {
  const C = window.CURRICULUM;
  const flat = []; // ordered lesson list with back-references
  const byId = {};
  C.tracks.forEach((tr) => {
    tr.lessonCount = 0;
    tr.modules.forEach((mod) => {
      mod.track = tr;
      mod.lessons.forEach((ls) => {
        ls.module = mod;
        ls.track = tr;
        ls.index = flat.length;
        flat.push(ls);
        byId[ls.id] = ls;
        tr.lessonCount++;
      });
    });
  });
  flat.forEach((ls, i) => {
    ls.prev = i > 0 ? flat[i - 1] : null;
    ls.next = i < flat.length - 1 ? flat[i + 1] : null;
  });
  C.flat = flat;
  C.byId = byId;
  C.totalLessons = flat.length;
})();
