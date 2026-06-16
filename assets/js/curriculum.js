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
      id: "astro",
      title: "Astrophysics & Cosmology",
      short: "Stars to the Cosmos",
      color: "#ff8c5a",
      color2: "#e8693a",
      tagline: "The physics of stars, galaxies and the whole universe",
      desc: "Aim the laws you've built at the sky: how to read a star from its light, how stars live and die forging the elements, and how the entire universe began, expanded, and is now being torn apart by the dark sector.",
      modules: [
        {
          id: "astro-stars",
          title: "Stars & Stellar Physics",
          desc: "Furnaces of light and the elements.",
          lessons: [
            { id: "astro-radiation", title: "Reading Starlight: Blackbody & Spectra", file: "content/astro/radiation.md", mins: 16, sims: ["blackbody"] },
            { id: "astro-stellar", title: "Stellar Structure & Nuclear Furnaces", file: "content/astro/stars.md", mins: 17 },
            { id: "astro-deaths", title: "Stellar Death: Dwarfs, Neutron Stars & Supernovae", file: "content/astro/deaths.md", mins: 17 },
          ],
        },
        {
          id: "astro-cosmo",
          title: "Cosmology",
          desc: "The origin and fate of everything.",
          lessons: [
            { id: "astro-expansion", title: "The Expanding Universe & Hubble's Law", file: "content/astro/expansion.md", mins: 16, sims: ["cosmo"] },
            { id: "astro-bigbang", title: "The Big Bang & the Cosmic Microwave Background", file: "content/astro/bigbang.md", mins: 18 },
            { id: "astro-darkmatter", title: "Dark Matter & the Cosmic Web", file: "content/astro/darkmatter.md", mins: 17, sims: ["rotationcurve"] },
            { id: "astro-darkenergy", title: "Dark Energy & the Fate of the Universe", file: "content/astro/darkenergy.md", mins: 16, sims: ["cosmo"] },
          ],
        },
      ],
    },

    {
      id: "applied",
      title: "Nuclear, Atomic & Applied Physics",
      short: "Matter, Light & Machines",
      color: "#5ec26a",
      color2: "#3f9e54",
      tagline: "From the nucleus to lasers, fluids and plasma",
      desc: "The physics of real materials and devices: what holds the nucleus together and how we release that energy, how atoms trade light to give us lasers and atomic clocks, and how fluids and plasmas — the states most of the universe is actually in — flow, lift and burn.",
      modules: [
        {
          id: "app-nuclear",
          title: "Nuclear Physics",
          desc: "The energy that lights the stars and the cities.",
          lessons: [
            { id: "app-nucleus", title: "Inside the Nucleus: Binding Energy & Stability", file: "content/applied/nucleus.md", mins: 16 },
            { id: "app-radioactivity", title: "Radioactivity & Half-Life", file: "content/applied/radioactivity.md", mins: 15, sims: ["decay"] },
            { id: "app-fission-fusion", title: "Fission, Fusion & Nuclear Energy", file: "content/applied/fission-fusion.md", mins: 17 },
          ],
        },
        {
          id: "app-amo",
          title: "Atomic, Molecular & Optical",
          desc: "Controlling atoms and light, one quantum at a time.",
          lessons: [
            { id: "app-spectra", title: "The Quantum Atom & Spectral Lines", file: "content/applied/spectra.md", mins: 16 },
            { id: "app-lasers", title: "Lasers: From Stimulated Emission to Coherent Light", file: "content/applied/lasers.md", mins: 16, sims: ["laser"] },
            { id: "app-cold", title: "Ultracold Atoms & Bose–Einstein Condensates", file: "content/applied/cold.md", mins: 16 },
          ],
        },
        {
          id: "app-continuum",
          title: "Fluids, Continua & Plasma",
          desc: "The physics of the flowing and the deformable.",
          lessons: [
            { id: "app-fluids", title: "Fluid Dynamics: Flow, Lift & Turbulence", file: "content/applied/fluids.md", mins: 17, sims: ["fluid"] },
            { id: "app-plasma", title: "Plasma: The Fourth State & Fusion Confinement", file: "content/applied/plasma.md", mins: 16 },
            { id: "app-continuum-mech", title: "Elasticity, Sound & Continuum Mechanics", file: "content/applied/continuum.md", mins: 15 },
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
      id: "innovate",
      title: "Physics → Innovation",
      short: "Top-Down: Principle to Invention",
      color: "#36c5d6",
      color2: "#1f9fb0",
      tagline: "How a single line of physics becomes a world-changing technology",
      desc: "The top-down craft of innovation: take a deep principle and engineer it into something that never existed before. First the method, then six true case studies where one equation spawned an industry — the laser, the transistor, GPS, MRI, the solar cell and the new quantum machines.",
      modules: [
        {
          id: "inv-method",
          title: "The Innovation Method",
          desc: "Turning understanding into invention.",
          lessons: [
            { id: "inv-playbook", title: "How Physics Becomes Technology", file: "content/innovate/playbook.md", mins: 15 },
          ],
        },
        {
          id: "inv-cases",
          title: "Case Studies in Invention",
          desc: "One principle, one revolution.",
          lessons: [
            { id: "inv-laser", title: "The Laser — One Equation, a Thousand Inventions", file: "content/innovate/laser.md", mins: 15, sims: ["laser"] },
            { id: "inv-transistor", title: "The Transistor & the Information Age", file: "content/innovate/transistor.md", mins: 16 },
            { id: "inv-gps", title: "GPS — Relativity You Use Every Day", file: "content/innovate/gps.md", mins: 15, sims: ["relativity"] },
            { id: "inv-mri", title: "MRI — Spin, Resonance & Seeing Inside", file: "content/innovate/mri.md", mins: 15 },
            { id: "inv-solar", title: "Solar Cells & LEDs — Bandgaps to Clean Energy", file: "content/innovate/solar.md", mins: 15 },
            { id: "inv-quantumtech", title: "The Second Quantum Revolution: Clocks, Sensors & Computers", file: "content/innovate/quantumtech.md", mins: 16, sims: ["bloch"] },
          ],
        },
      ],
    },

    {
      id: "discover",
      title: "Discovering New Physics",
      short: "Bottom-Up: Anomaly to Revolution",
      color: "#ec5a72",
      color2: "#cf3b58",
      tagline: "How a stubborn discrepancy overturns the textbooks",
      desc: "The bottom-up art of discovery: physics rarely changes because someone is clever — it changes because a measurement refuses to fit. A method for taking anomalies seriously, then the real stories where a tiny mismatch became quantum theory, relativity, dark matter and neutrino mass — plus the live anomalies that might be next.",
      modules: [
        {
          id: "disc-method",
          title: "The Discovery Method",
          desc: "Taking anomalies seriously.",
          lessons: [
            { id: "disc-playbook", title: "How New Physics Is Found", file: "content/discover/playbook.md", mins: 16 },
          ],
        },
        {
          id: "disc-cases",
          title: "Revolutions from Anomalies",
          desc: "When the data wouldn't fit.",
          lessons: [
            { id: "disc-blackbody", title: "The Ultraviolet Catastrophe → Quantum Theory", file: "content/discover/blackbody.md", mins: 15, sims: ["blackbody"] },
            { id: "disc-mercury", title: "Mercury's Wobble → General Relativity", file: "content/discover/mercury.md", mins: 15, sims: ["orbit"] },
            { id: "disc-michelson", title: "The Aether That Wasn't → Special Relativity", file: "content/discover/michelson.md", mins: 15 },
            { id: "disc-darkmatter", title: "Galaxies Spinning Too Fast → Dark Matter", file: "content/discover/darkmatter.md", mins: 15, sims: ["rotationcurve"] },
            { id: "disc-neutrino", title: "The Missing Neutrinos → Neutrino Mass", file: "content/discover/neutrino.md", mins: 15 },
            { id: "disc-anomalies", title: "Today's Anomalies → Tomorrow's Physics", file: "content/discover/anomalies.md", mins: 16 },
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
