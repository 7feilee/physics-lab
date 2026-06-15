/* ============================================================
   Quiz bank. Embed in a lesson with:
       <div class="quiz" data-quiz="hs-kinematics"></div>
   `answer` is the 0-based index of the correct option.
   ============================================================ */
window.QUIZZES = {
  "hs-kinematics": {
    title: "Check yourself: Motion",
    questions: [
      {
        q: "A car's velocity is constant and negative. What is its acceleration?",
        options: ["Negative and constant", "Zero", "Positive", "Increasing in magnitude"],
        answer: 1,
        explain: "Acceleration is the *rate of change* of velocity. If velocity never changes, acceleration is zero — regardless of the velocity's sign.",
      },
      {
        q: "Two balls are dropped from the same height; one is twice as heavy. Ignoring air resistance, which lands first?",
        options: ["The heavy one", "The light one", "They land together", "Impossible to say"],
        answer: 2,
        explain: "In free fall every object accelerates at g ≈ 9.8 m/s² regardless of mass. Galileo's insight — heavier does not mean faster.",
      },
      {
        q: "On a position–time graph, what does the slope represent?",
        options: ["Acceleration", "Velocity", "Distance", "Force"],
        answer: 1,
        explain: "Slope = rise/run = Δposition/Δtime = velocity. The slope of a velocity–time graph would give acceleration.",
      },
    ],
  },
  "hs-newton": {
    title: "Check yourself: Newton's Laws",
    questions: [
      {
        q: "You push a wall and it doesn't move. By Newton's third law, the wall…",
        options: ["pushes back on you with an equal and opposite force", "pushes back with less force", "does not push back", "pushes back only if it moves"],
        answer: 0,
        explain: "Third-law pairs are always equal and opposite, acting on different bodies. The wall doesn't accelerate because other forces (its foundation) balance your push.",
      },
      {
        q: "A 2 kg object experiences a net force of 10 N. Its acceleration is…",
        options: ["20 m/s²", "5 m/s²", "0.2 m/s²", "12 m/s²"],
        answer: 1,
        explain: "Newton's second law: a = F/m = 10 N / 2 kg = 5 m/s².",
      },
      {
        q: "An astronaut floating in deep space throws a wrench. What happens to the astronaut?",
        options: ["Nothing — space has no forces", "Drifts in the same direction as the wrench", "Drifts opposite to the wrench", "Spins but doesn't move"],
        answer: 2,
        explain: "By conservation of momentum (a consequence of the third law), throwing mass one way pushes you the other way. This is exactly how rockets work.",
      },
    ],
  },
  "hs-projectile": {
    title: "Check yourself: Projectiles",
    questions: [
      {
        q: "At the very top of its arc, a projectile's vertical velocity is… and its acceleration is…",
        options: ["zero; zero", "zero; g downward", "maximum; zero", "g; zero"],
        answer: 1,
        explain: "Vertical velocity is momentarily zero at the peak, but gravity never switches off — acceleration is still g downward.",
      },
      {
        q: "Ignoring air resistance, which launch angle gives the maximum range on flat ground?",
        options: ["30°", "45°", "60°", "90°"],
        answer: 1,
        explain: "Range ∝ sin(2θ), which is largest when 2θ = 90°, i.e. θ = 45°. Air resistance lowers this optimal angle in practice.",
      },
    ],
  },
  "hs-momentum": {
    title: "Check yourself: Momentum",
    questions: [
      {
        q: "A 1 kg ball at 4 m/s strikes a stationary 1 kg ball head-on and they stick together. Their common speed is…",
        options: ["4 m/s", "2 m/s", "1 m/s", "0 m/s"],
        answer: 1,
        explain: "Momentum is conserved: (1)(4) = (2)(v), so v = 2 m/s. Kinetic energy is *not* conserved here — this is a perfectly inelastic collision.",
      },
      {
        q: "Why do airbags reduce injury?",
        options: ["They reduce your momentum", "They increase the collision time, lowering the force", "They reduce your mass", "They increase the impulse"],
        answer: 1,
        explain: "Impulse FΔt equals your change in momentum, which is fixed. Stretching Δt out means a smaller peak force F.",
      },
    ],
  },
  "hs-energy": {
    title: "Check yourself: Energy",
    questions: [
      {
        q: "A pendulum swings. Where is its kinetic energy greatest?",
        options: ["At the highest point", "At the lowest point", "Halfway up", "It's constant"],
        answer: 1,
        explain: "At the bottom all the gravitational potential energy has converted to kinetic energy, so speed (and KE) peaks there.",
      },
      {
        q: "Doubling an object's speed changes its kinetic energy by a factor of…",
        options: ["2", "3", "4", "√2"],
        answer: 2,
        explain: "KE = ½mv². Since it depends on v², doubling v multiplies KE by 2² = 4. This is why stopping distances grow so fast with speed.",
      },
    ],
  },
  "hs-shm": {
    title: "Check yourself: Oscillations",
    questions: [
      {
        q: "For a mass on a spring, what happens to the period if you quadruple the mass?",
        options: ["Doubles", "Quadruples", "Halves", "Unchanged"],
        answer: 0,
        explain: "T = 2π√(m/k). Period scales as √m, so 4× the mass gives √4 = 2× the period.",
      },
      {
        q: "A pendulum keeps perfect time on Earth. On the Moon (g ≈ 1/6 of Earth's) it will…",
        options: ["run faster", "run slower", "keep the same time", "stop"],
        answer: 1,
        explain: "T = 2π√(L/g). Smaller g means a longer period — the pendulum swings more slowly and the clock runs slow.",
      },
    ],
  },
  "hs-waves": {
    title: "Check yourself: Waves",
    questions: [
      {
        q: "A wave's frequency doubles while its speed stays constant. Its wavelength…",
        options: ["doubles", "halves", "stays the same", "quadruples"],
        answer: 1,
        explain: "v = fλ. If v is fixed and f doubles, λ must halve to compensate.",
      },
      {
        q: "Two identical waves meet exactly out of phase (crest meets trough). The result is…",
        options: ["a wave of double amplitude", "complete cancellation", "a wave of half frequency", "a standing wave"],
        answer: 1,
        explain: "This is destructive interference. Noise-cancelling headphones exploit exactly this to silence sound.",
      },
    ],
  },
  "hs-charge": {
    title: "Check yourself: Electric Fields",
    questions: [
      {
        q: "If you triple the distance between two point charges, the force between them becomes…",
        options: ["1/3 as strong", "1/9 as strong", "3× as strong", "9× as strong"],
        answer: 1,
        explain: "Coulomb's law is an inverse-square law: F ∝ 1/r². Tripling r divides the force by 3² = 9.",
      },
      {
        q: "Electric field lines always point…",
        options: ["from negative to positive charge", "from positive to negative charge", "in circles", "toward the nearest wall"],
        answer: 1,
        explain: "By convention the field points the way a *positive* test charge would be pushed: away from positive charges, toward negative ones.",
      },
    ],
  },
  "hs-circuits": {
    title: "Check yourself: Circuits",
    questions: [
      {
        q: "A 12 V battery drives 3 A through a resistor. The resistance is…",
        options: ["4 Ω", "36 Ω", "0.25 Ω", "15 Ω"],
        answer: 0,
        explain: "Ohm's law: R = V/I = 12 V / 3 A = 4 Ω.",
      },
      {
        q: "Two identical bulbs in series vs. in parallel across the same battery — which arrangement is brighter overall?",
        options: ["Series", "Parallel", "Same", "Neither lights"],
        answer: 1,
        explain: "Parallel bulbs each get the full voltage and draw more total current, dissipating more power. Series bulbs share the voltage and dim.",
      },
    ],
  },
  "hs-optics": {
    title: "Check yourself: Light",
    questions: [
      {
        q: "Light slows down entering glass. Compared to its path in air, the ray bends…",
        options: ["toward the normal", "away from the normal", "straight back", "not at all"],
        answer: 0,
        explain: "Going from a fast medium (air) to a slow one (glass) bends the ray toward the normal. The reverse happens on the way out.",
      },
      {
        q: "Total internal reflection — the principle behind fibre optics — happens when light tries to go from…",
        options: ["a slow medium to a fast one, beyond a critical angle", "a fast medium to a slow one", "vacuum to glass", "any medium at any angle"],
        answer: 0,
        explain: "Only when moving into a faster medium (e.g. glass→air) can the refracted ray reach 90°; beyond the critical angle it reflects entirely.",
      },
    ],
  },
  "hs-atom": {
    title: "Check yourself: Quantum Ideas",
    questions: [
      {
        q: "In the photoelectric effect, increasing the *intensity* of light below the threshold frequency…",
        options: ["finally ejects electrons", "ejects more energetic electrons", "still ejects no electrons", "heats the metal until it glows"],
        answer: 2,
        explain: "Energy comes in photons of size hf. If each photon is too weak (frequency too low), no number of them ejects an electron. This forced Einstein's photon idea.",
      },
      {
        q: "The double-slit experiment with single electrons shows that…",
        options: ["electrons are tiny balls", "electrons interfere with themselves like waves", "the slits emit light", "electrons repel each other"],
        answer: 1,
        explain: "Even sent one at a time, electrons build up an interference pattern — each one explores both paths as a probability wave.",
      },
    ],
  },
  "ug-lagrange": {
    title: "Check yourself: Least Action",
    questions: [
      {
        q: "The Lagrangian of a simple system is defined as…",
        options: ["L = T + V", "L = T − V", "L = T × V", "L = V − T"],
        answer: 1,
        explain: "L = kinetic minus potential energy. The true path is the one that makes the action S = ∫L dt stationary.",
      },
      {
        q: "A key practical advantage of the Lagrangian method is that…",
        options: ["it requires knowing all constraint forces", "it works only in Cartesian coordinates", "it lets you choose any convenient coordinates and ignore constraint forces", "it ignores energy"],
        answer: 2,
        explain: "You pick coordinates suited to the problem (angles, distances along a wire…) and the formalism handles constraints automatically.",
      },
    ],
  },
  "ug-maxwell": {
    title: "Check yourself: Maxwell",
    questions: [
      {
        q: "Which of Maxwell's equations encodes 'there are no magnetic monopoles'?",
        options: ["Gauss's law for E", "Gauss's law for B (∇·B = 0)", "Faraday's law", "Ampère's law"],
        answer: 1,
        explain: "∇·B = 0 says magnetic field lines never begin or end — every north pole comes with a south. No isolated magnetic charge has ever been found.",
      },
      {
        q: "Maxwell's great prediction, falling straight out of his equations, was that…",
        options: ["light is an electromagnetic wave", "electrons exist", "gravity bends light", "atoms are mostly empty"],
        answer: 0,
        explain: "The equations predict waves travelling at c = 1/√(μ₀ε₀) — numerically the speed of light. Light *is* electromagnetism.",
      },
    ],
  },
  "ug-wavefunction": {
    title: "Check yourself: The Wavefunction",
    questions: [
      {
        q: "In quantum mechanics, |ψ(x)|² represents…",
        options: ["the particle's energy", "the probability density of finding the particle at x", "the particle's exact position", "the particle's charge"],
        answer: 1,
        explain: "Born's rule: the square of the wavefunction's magnitude gives the probability density. ψ itself is not directly observable.",
      },
      {
        q: "Heisenberg's uncertainty principle says that for position and momentum…",
        options: ["both can be known exactly", "the more precisely you know one, the less precisely the other", "neither can ever be measured", "they are always equal"],
        answer: 1,
        explain: "Δx·Δp ≥ ℏ/2. It is a fundamental property of wave-like objects, not a limitation of our instruments.",
      },
    ],
  },
  "ug-relativity": {
    title: "Check yourself: Relativity",
    questions: [
      {
        q: "Einstein's two postulates of special relativity are: the laws of physics are the same in all inertial frames, and…",
        options: ["time is absolute", "the speed of light is the same for all observers", "nothing can move", "mass is constant"],
        answer: 1,
        explain: "The constancy of c for every observer, however they move, is the radical postulate from which time dilation and length contraction follow.",
      },
      {
        q: "A fast-moving clock, as seen from your frame, appears to…",
        options: ["run fast", "run slow", "keep normal time", "stop entirely"],
        answer: 1,
        explain: "Moving clocks run slow by the factor γ = 1/√(1−v²/c²). This is time dilation, confirmed daily in particle accelerators and GPS satellites.",
      },
    ],
  },
  "grad-qft": {
    title: "Check yourself: Fields",
    questions: [
      {
        q: "In quantum field theory, a particle such as an electron is best understood as…",
        options: ["a tiny solid sphere", "a localised excitation (quantum) of an underlying field", "a point with no properties", "a small wave of light"],
        answer: 1,
        explain: "Every particle species is a field filling all space; particles are its quantised ripples. This is why all electrons are identical.",
      },
    ],
  },
  "grad-gr": {
    title: "Check yourself: General Relativity",
    questions: [
      {
        q: "In general relativity, what we feel as the force of gravity is really…",
        options: ["a force carried by gravitons", "objects following the straightest possible paths in curved spacetime", "magnetism", "the expansion of the universe"],
        answer: 1,
        explain: "Mass-energy curves spacetime; freely falling bodies follow geodesics — the straightest available paths. 'Gravity is geometry.'",
      },
    ],
  },
  "fr-qubits": {
    title: "Check yourself: Qubits",
    questions: [
      {
        q: "Unlike a classical bit, a qubit can be…",
        options: ["only 0", "only 1", "a superposition of 0 and 1 at once", "any integer"],
        answer: 2,
        explain: "A qubit's state is α|0⟩ + β|1⟩. Measurement yields 0 or 1 with probabilities |α|² and |β|², but before that it genuinely holds both.",
      },
      {
        q: "Entanglement means that two qubits…",
        options: ["are physically glued together", "share a joint state so measuring one instantly informs the other's outcome", "always give the same energy", "cannot be measured"],
        answer: 1,
        explain: "Entangled qubits have correlations stronger than anything classical, even when separated — the resource behind quantum teleportation and many algorithms.",
      },
    ],
  },
};
