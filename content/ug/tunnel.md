Roll a ball at a hill. If it doesn't have enough energy to reach the top, it rolls back down — always, without exception. That is the iron rule of classical mechanics: you cannot pass a barrier taller than your energy. Now do the same with an electron and a thin enough wall, and something impossible happens. Some fraction of the time, the electron is simply *found on the other side*, having crossed a region it could never have entered classically. This is **quantum tunnelling**, and it is not a rare laboratory curiosity. It powers the Sun, lets us image individual atoms, stores the data on flash drives, and sets a quiet limit on how small we can build computer chips.

## The classically forbidden region

Set up a barrier: a region where the potential energy $V_0$ exceeds the particle's total energy $E$. Classically, inside that region the kinetic energy $E - V_0$ would be *negative*, which means an imaginary speed — flatly impossible. So a classical particle is forbidden from ever being there, full stop. The barrier is a wall.

Quantum mechanically, we don't ask where the particle *is*; we solve the Schrödinger equation for its wavefunction $\psi$. Outside the barrier, where $E > V$, the equation gives oscillating waves — the particle propagates freely. But *inside* the barrier, where $V_0 > E$, the equation changes character. Writing the time-independent Schrödinger equation in the barrier:

$$ \frac{\d^2\psi}{\d x^2} = \frac{2m(V_0 - E)}{\hbar^2}\,\psi = \kappa^2\psi, \qquad \kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}. $$

Because $V_0 > E$, the coefficient $\kappa^2$ is *positive*, and the solutions are no longer oscillating sines but **real exponentials**:

$$ \psi(x) \sim e^{-\kappa x}. $$

The wavefunction doesn't stop dead at the barrier — it *decays*, smoothly and exponentially, as it penetrates. And here is the crucial point: if the barrier has a finite width, the wavefunction is small but *nonzero* when it reaches the far side. A nonzero $\psi$ means, by the Born rule, a nonzero probability of finding the particle there. The particle has tunnelled through.

:::key The wavefunction leaks where the particle "can't go"
There's no contradiction with energy conservation. The particle is never *measured* inside the barrier with negative kinetic energy — if you catch it on the far side, it has its full original energy. What penetrates the barrier is the *wavefunction*, the amplitude of possibility, decaying exponentially as it crosses. Tunnelling is the leakage of probability through a region that classical particles treat as solid. The wave doesn't obey the wall; only the particle-picture did.
:::

## The transmission probability

How likely is the crossing? The wavefunction decays as $e^{-\kappa x}$ across a barrier of width $L$, so by the time it emerges, its amplitude has shrunk by $e^{-\kappa L}$. Probability goes as amplitude squared, so the **transmission probability** — the chance of getting through — is approximately

$$ T \approx e^{-2\kappa L} = \exp\!\left(-\frac{2L}{\hbar}\sqrt{2m(V_0 - E)}\right). $$

Three things about this formula control all of tunnelling, and each appears inside an *exponential*, which makes the dependence ferociously sensitive:

- **Barrier width $L$.** Double the width and you square the smallness — tunnelling collapses. Thin barriers leak; thick ones don't.
- **Barrier height $V_0 - E$.** The taller the wall above your energy, the larger $\kappa$, the steeper the decay. Being far below the barrier top kills the crossing.
- **Mass $m$.** Heavier particles have larger $\kappa$ and tunnel exponentially less. This is *the* reason tunnelling is an electron's game — an electron tunnels readily where a proton (1800 times heavier) essentially never does, and a dust grain never, ever does.

Slide the barrier's width and height in the simulator and watch the transmitted wave swell and vanish — the exponential is brutal:

<div class="sim" data-sim="tunnel"></div>

:::try Feel the exponential
Start with a thin, low barrier and a healthy transmitted wave on the far side. Now nudge the width wider, just a little. The transmitted amplitude doesn't shrink gently — it *plummets*, because it lives inside $e^{-2\kappa L}$. A barrier twice as wide isn't twice as hard to cross; it can be a *million* times harder. This savage sensitivity is why tunnelling matters enormously at the atomic scale and not at all at the human one.
:::

## Why it's impossible classically — and why scale is everything

The exponential also explains why you never see your coffee cup tunnel through the table. Plug in a macroscopic object: a large mass $m$, a barrier height measured in everyday joules, a width of centimeters. The exponent $2\kappa L/\hbar$ becomes a number with dozens of zeros, and $e^{-(\text{huge})}$ is so close to zero that you'd wait many times the age of the universe for a single crossing. Tunnelling is always *allowed* — it's just overwhelmingly improbable for anything bigger than an atom. The tininess of $\hbar$ is what hides the quantum world from daily life. Shrink to electron masses and angstrom widths, though, and the exponent becomes a number of order one, and tunnelling turns from impossible to routine.

## Where tunnelling runs the universe

This leak-through-walls effect is not exotic trivia; it does real, load-bearing work.

**The Sun shines because of it.** Two protons fusing in the solar core must approach close enough to feel the strong force, but their like charges repel through a fierce **Coulomb barrier**. At the Sun's temperature, protons simply do not have enough energy to climb that barrier classically — fusion *should not happen*, and the Sun *should not shine*. It shines anyway because protons *tunnel* through the Coulomb barrier. Gamow worked this out in 1928; without quantum tunnelling, the stars would be cold.

**Alpha decay is tunnelling out of a nucleus.** An alpha particle inside a heavy nucleus is trapped behind a potential barrier formed by the nuclear and Coulomb forces. It rattles against that wall trillions of times a second and almost always bounces back — but every so often it tunnels out, and the nucleus decays. The wild range of nuclear half-lives, from microseconds to billions of years, is just the exponential transmission probability translating tiny differences in barrier height and energy into vast differences in escape rate. Gamow explained radioactive half-lives with the very same formula.

**The scanning tunnelling microscope sees single atoms.** Bring a sharp metal tip within a nanometer of a surface — close, but not touching — and electrons tunnel across the vacuum gap, producing a measurable current. Because $T \approx e^{-2\kappa L}$ is so exquisitely sensitive to the gap width $L$, moving the tip by a single atom's height changes the current dramatically. Scanning the tip and holding the current steady traces out the surface atom by atom. The STM, which won the 1986 Nobel Prize, turned tunnelling's exponential sensitivity into the first direct images of individual atoms.

**Flash memory exploits it — and chip design fights it.** Your phone stores data by tunnelling electrons onto an isolated "floating gate," where a thick-enough barrier traps them for years. The very same effect is the bane of modern processors: as transistors shrink, their insulating barriers grow so thin that electrons tunnel through unbidden, leaking current and wasting power. Tunnelling is simultaneously the feature that makes solid-state storage possible and the wall that chip-makers slam into as they try to make things ever smaller.

:::history Gamow's barrier
In 1928 the Russian physicist George Gamow, then in his twenties, applied the brand-new Schrödinger equation to the nucleus and realized that alpha particles escape by tunnelling *out*. Within months Gurney and Condon reached the same conclusion independently, and Gamow soon turned the idea around to explain fusion *into* nuclei in stars. A single quantum effect — probability leaking through a forbidden wall — thus explained both why some atoms fall apart and why stars hold together. Few formulas have reached so far on so little.
:::

Quantum tunnelling is the universe quietly ignoring a rule that classical physics held sacred. Particles cross walls they cannot climb, not by cheating energy conservation, but because they were never little balls to begin with — they are waves, and waves leak. That leak, governed by a single merciless exponential, lights the stars, dates the rocks, images the atoms, and stores the words you are reading right now.
