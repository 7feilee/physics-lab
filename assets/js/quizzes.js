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
  "astro-radiation": {
    title: "Check yourself: Starlight",
    questions: [
      {
        q: "One star glows blue-white, another deep red. Which is hotter?",
        options: ["The red one", "The blue-white one", "They're the same", "Colour says nothing about temperature"],
        answer: 1,
        explain: "Wien's law: hotter bodies peak at shorter (bluer) wavelengths. Blue-white stars can exceed 10,000 K; red ones are around 3,000 K.",
      },
      {
        q: "Doubling a star's surface temperature multiplies the power it radiates per unit area by…",
        options: ["2", "4", "8", "16"],
        answer: 3,
        explain: "The Stefan–Boltzmann law says radiated power per area ∝ $T^4$, so $2^4 = 16$.",
      },
      {
        q: "The dark absorption lines in a star's spectrum reveal mainly its…",
        options: ["distance", "chemical composition", "age in years", "rotation direction"],
        answer: 1,
        explain: "Each element absorbs at signature wavelengths. Those missing slivers of colour are a fingerprint of what the star is made of — spectroscopy is how we know the composition of things we can never touch.",
      },
    ],
  },
  "astro-expansion": {
    title: "Check yourself: The Expanding Universe",
    questions: [
      {
        q: "Galaxy B is twice as far from us as galaxy A. According to Hubble's law, B recedes…",
        options: ["at the same speed as A", "twice as fast as A", "half as fast as A", "four times as fast as A"],
        answer: 1,
        explain: "Hubble's law is $v = H_0 d$: recession speed is proportional to distance. Twice the distance, twice the speed.",
      },
      {
        q: "Cosmological redshift happens because…",
        options: ["galaxies move through space like fired bullets", "space itself stretches, stretching the light's wavelength with it", "light gets tired over long distances", "our galaxy is at the centre"],
        answer: 1,
        explain: "It isn't ordinary motion-through-space Doppler shift — the fabric of space expands, lengthening the wavelength of light in transit. And every observer sees the same thing; there is no centre.",
      },
    ],
  },
  "astro-darkmatter": {
    title: "Check yourself: Dark Matter",
    questions: [
      {
        q: "Stars at a galaxy's edge orbit far faster than its visible mass can explain. The leading explanation is…",
        options: ["the stars are about to fly off", "a halo of unseen 'dark' matter adds gravity", "Newton's law of gravity is simply wrong everywhere", "the stars are much heavier than they look"],
        answer: 1,
        explain: "Flat rotation curves imply much more mass than we see in stars and gas — an extended dark-matter halo. (Modified-gravity alternatives exist but fit the full range of evidence less well.)",
      },
      {
        q: "Dark matter is called 'dark' because it…",
        options: ["is black in colour", "neither emits nor absorbs light, betraying itself only by gravity", "exists only at night", "absorbs all light that hits it"],
        answer: 1,
        explain: "It doesn't interact with light at all as far as we can tell — we map it purely through its gravitational pull on stars, gas and bent light.",
      },
    ],
  },
  "app-radioactivity": {
    title: "Check yourself: Radioactivity",
    questions: [
      {
        q: "After exactly 3 half-lives, the fraction of the original nuclei still undecayed is…",
        options: ["1/3", "1/6", "1/8", "zero"],
        answer: 2,
        explain: "Each half-life halves the survivors: $\\tfrac12 \\to \\tfrac14 \\to \\tfrac18$.",
      },
      {
        q: "Whether one particular nucleus decays in the next second is…",
        options: ["fixed by its age", "fundamentally random, with a constant probability per second", "decided by temperature", "predictable if we measure carefully enough"],
        answer: 1,
        explain: "Individual decays are genuinely probabilistic — a nucleus doesn't 'age'. Yet across trillions of nuclei the law of large numbers makes the half-life razor-sharp.",
      },
    ],
  },
  "app-lasers": {
    title: "Check yourself: Lasers",
    questions: [
      {
        q: "Compared with a light bulb, what makes laser light special is that it is…",
        options: ["brighter", "coherent — one wavelength, marching in phase", "hotter", "made of faster photons"],
        answer: 1,
        explain: "LASER = Light Amplification by Stimulated Emission of Radiation. The output is coherent (one colour, one phase, one direction), which is why it stays a tight beam.",
      },
      {
        q: "To amplify light you first need a population inversion, meaning…",
        options: ["more atoms in the ground state than excited", "more atoms excited than in the ground state", "all atoms in the ground state", "the atoms moving very fast"],
        answer: 1,
        explain: "Normally most atoms sit in the ground state and absorb light. Pump enough of them up so the excited population dominates, and a passing photon triggers more emission than absorption — net gain.",
      },
      {
        q: "In stimulated emission, the newly emitted photon is…",
        options: ["random in direction and phase", "an identical twin of the photon that triggered it", "always lower energy", "absorbed immediately"],
        answer: 1,
        explain: "The stimulated photon copies the triggering photon's direction, phase and wavelength exactly — that cloning is what builds coherence.",
      },
    ],
  },
  "app-fission-fusion": {
    title: "Check yourself: Nuclear Energy",
    questions: [
      {
        q: "Both fission of heavy nuclei and fusion of light nuclei release energy because both move nuclei toward…",
        options: ["lower binding energy per nucleon", "higher binding energy per nucleon (the iron peak)", "more protons", "a larger size"],
        answer: 1,
        explain: "The binding-energy-per-nucleon curve peaks near iron. Splitting very heavy nuclei or fusing very light ones both climb toward that peak, releasing the difference as energy.",
      },
      {
        q: "The Sun's energy comes from…",
        options: ["burning hydrogen gas chemically", "fusing hydrogen into helium", "splitting uranium", "gravitational collapse alone"],
        answer: 1,
        explain: "In the core, hydrogen nuclei fuse to helium, converting a tiny fraction of mass to energy via $E = mc^2$ — about 4 million tonnes of mass per second.",
      },
    ],
  },
  "inv-playbook": {
    title: "Check yourself: Innovation",
    questions: [
      {
        q: "The recurring top-down pattern of physics-driven invention is: find a controllable physical effect, then…",
        options: ["publish and stop", "engineer it into a device and scale it up", "patent the equation", "wait for someone else"],
        answer: 1,
        explain: "Innovation turns a reliable, controllable effect (stimulated emission, the transistor effect, nuclear magnetic resonance) into an engineered, manufacturable, scalable device.",
      },
      {
        q: "A striking lesson from the laser, transistor and GPS is that many world-changing technologies began as…",
        options: ["targeted product development", "curiosity-driven basic research with no application in mind", "military secrets", "accidents no one understood"],
        answer: 1,
        explain: "Einstein's 1917 paper on stimulated emission, quantum theory of solids, and relativity were all 'useless' when discovered. Basic research is the seed corn of future industries.",
      },
    ],
  },
  "inv-gps": {
    title: "Check yourself: GPS & Relativity",
    questions: [
      {
        q: "GPS satellite clocks, after combining special and general relativity, run __ relative to clocks on the ground.",
        options: ["slower", "faster", "at exactly the same rate", "randomly"],
        answer: 1,
        explain: "Velocity time-dilation slows them (~7 µs/day) but weaker gravity high up speeds them more (~45 µs/day). The net ~38 µs/day means orbiting clocks tick faster — and it must be corrected.",
      },
      {
        q: "If GPS ignored relativity entirely, position errors would accumulate at roughly…",
        options: ["a few millimetres per year", "a centimetre per day", "several kilometres per day", "no error at all"],
        answer: 2,
        explain: "An uncorrected ~38 µs/day timing drift corresponds to about 10 km/day of position error — GPS would be useless within minutes. Relativity is load-bearing infrastructure.",
      },
    ],
  },
  "disc-playbook": {
    title: "Check yourself: Finding New Physics",
    questions: [
      {
        q: "In the discovery method, a small but rock-solid disagreement between a precise measurement and theory is…",
        options: ["noise to be ignored", "a clue worth chasing — possibly a door to new physics", "always an instrument error", "proof the measurement is wrong"],
        answer: 1,
        explain: "Mercury's 43″/century, the muon's anomalous moment, galaxy rotation — revolutions hide in stubborn small discrepancies that survive every attempt to explain them away mundanely.",
      },
      {
        q: "Any successful new theory must, in the regime where the old theory already worked,…",
        options: ["contradict it completely", "reproduce its successful predictions", "ignore it", "be untestable"],
        answer: 1,
        explain: "The correspondence principle: relativity reduces to Newton at low speed, quantum mechanics to classical for big systems. New physics extends the old, it doesn't erase its proven wins.",
      },
    ],
  },
  "disc-blackbody": {
    title: "Check yourself: The UV Catastrophe",
    questions: [
      {
        q: "Classical physics predicted that a hot body should radiate…",
        options: ["no energy at all", "infinite energy at short (ultraviolet) wavelengths", "only red light", "energy only when touched"],
        answer: 1,
        explain: "Treating each mode as an equally-shared classical oscillator (Rayleigh–Jeans) makes the predicted intensity blow up as wavelength shrinks — the absurd 'ultraviolet catastrophe'.",
      },
      {
        q: "Planck fixed it by assuming the oscillators could only exchange energy…",
        options: ["continuously", "in discrete lumps, $E = hf$", "very slowly", "as heat only"],
        answer: 1,
        explain: "Quantising energy in packets $E = hf$ suppresses the high-frequency modes (they cost too much), bending the curve back down. It was a desperate trick — and the birth of quantum theory.",
      },
    ],
  },
  "disc-mercury": {
    title: "Check yourself: Mercury's Wobble",
    questions: [
      {
        q: "Mercury's orbit precesses 43 arcseconds per century more than Newton predicts. The correct explanation turned out to be…",
        options: ["an undiscovered planet 'Vulcan'", "general relativity — curved spacetime near the Sun", "errors in the telescopes", "the influence of the Moon"],
        answer: 1,
        explain: "Astronomers first hunted for a hidden planet. There was none — Einstein's curved spacetime predicted exactly 43″/century, one of general relativity's first triumphs.",
      },
      {
        q: "The Mercury story shows that when an anomaly appears, you should first…",
        options: ["immediately invent new physics", "exhaust conventional explanations, and only then conclude the theory itself must change", "ignore it", "change the data"],
        answer: 1,
        explain: "The same anomaly (an orbital wobble) was once solved by predicting Neptune, and once by overturning gravity itself. Discipline is knowing which kind you're facing — rule out the mundane first.",
      },
    ],
  },
};
