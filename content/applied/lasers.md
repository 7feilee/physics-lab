Ordinary light is a riot. A light bulb pours out photons of every colour, in every direction, with phases scrambled at random — a crowd all shouting different words at different times. A laser does something that sounds impossible by comparison: it makes a vast number of photons march in perfect lockstep, all the same colour, all in phase, all heading the same way. A single quiet idea makes this possible, an idea Einstein wrote down in 1917, two full decades before anyone built the thing it predicted. The acronym says it all — Light Amplification by Stimulated Emission of Radiation — and the heart of it is that strange middle phrase: *stimulated emission*.

## Three things light can do to an atom

Recall that atoms have discrete energy levels and jump between them by emitting or absorbing photons. Einstein realized there are exactly three ways light and atoms interact, and a working laser depends on getting the balance among them right.

**Absorption.** An atom in a low level $E_1$ meets a photon whose energy matches the gap to a higher level $E_2$. It swallows the photon and jumps up. One photon in, none out.

**Spontaneous emission.** An atom sitting in the excited level $E_2$ doesn't stay there; after a random wait it drops to $E_1$ on its own, emitting a photon in a random direction with a random phase. This is ordinary glow — the light of flames, bulbs, fireflies. It is incoherent precisely because each atom fires independently, on its own schedule.

**Stimulated emission.** Here is the magic. An atom already in the excited state $E_2$ is struck by a passing photon of exactly the transition energy. Instead of absorbing it, the atom is *triggered* to drop down — and the photon it emits is a perfect clone of the trigger: same frequency, same direction, same phase, even the same polarization. One photon goes in, **two identical photons come out**. Light has been amplified.

:::key Einstein's A and B, in words
Einstein assigned each process a coefficient. The $A$ coefficient sets the rate of spontaneous emission (the random, incoherent glow). The two $B$ coefficients set the rates of absorption and stimulated emission — and, remarkably, the $B$ for stimulated emission *equals* the $B$ for absorption. That equality is the whole game: whether an excited-state photon multiplies your beam or a ground-state atom eats it depends only on *which population is larger*. Tip the balance toward excited atoms and light grows instead of fading.
:::

## Population inversion: the unnatural majority

Normally, atoms overwhelmingly sit in the low-energy state. In thermal equilibrium the lower level is always more populated than the upper one — that is just thermodynamics. So a passing photon is far more likely to meet a ground-state atom and be absorbed than to meet an excited one and be cloned. Send a beam into ordinary matter and it gets weaker, not stronger.

To make a laser you must force the opposite: **more atoms in the excited state than the ground state**, a condition called **population inversion**. It is genuinely unnatural — no system in thermal equilibrium can achieve it (you'd need a "negative temperature"). You must actively **pump** energy in, lifting atoms to the upper level faster than they fall, by flashlamps, electric current, or another laser.

A two-level system can't be inverted by pumping alone (pump too hard and absorption and stimulated emission just balance at fifty-fifty). Real lasers use three or four levels, with a clever arrangement: atoms are pumped to a high level, drop quickly to a **metastable** level where they linger, and pile up there. Because they accumulate in the metastable state while the level just below it stays nearly empty, the inversion builds. The metastable state is the reservoir that makes amplification possible.

## The cavity: turning a flash into a beam

Population inversion gives you amplification, but a single pass through the medium isn't enough — the gain per pass is small, and the cloned photons would just escape. The fix is an **optical cavity**: two mirrors facing each other with the gain medium between them. A photon emitted along the axis bounces back and forth, sweeping through the excited atoms again and again, triggering more and more stimulated emissions on every pass. The beam builds geometrically.

One mirror is fully reflective; the other is *partially* transparent, letting a small fraction of the light leak out — that escaping sliver is your laser beam. The cavity also acts as a filter: only light whose wavelength fits a whole number of half-wavelengths between the mirrors resonates and survives, which sharpens the colour to an exquisitely narrow band. Pumping plus inversion plus feedback equals a self-sustaining flood of identical photons.

<div class="sim" data-sim="laser"></div>

:::try Build the cascade
Turn up the pump and watch the upper level fill. Below the inversion threshold, you get only scattered spontaneous emission — random, dim, incoherent, like a feeble bulb. Push the pump past threshold and the cavity feedback takes over: a single stray photon triggers a clone, the two trigger two more, and the beam erupts as an avalanche of identical photons. Notice the sharpness of the turn-on — lasing is a *threshold* phenomenon, not a gradual brightening. Below the line, noise; above it, a beam.
:::

## What makes laser light special

The lockstep photons give laser light three properties no ordinary source can match:

- **Monochromatic** — essentially a single, pure frequency, because every photon comes from the same atomic transition and the cavity narrows it further. This is why lasers have a definite, vivid colour.
- **Coherent** — all the waves are in phase, crests aligned with crests, so they add up cleanly and produce sharp interference. Coherence is what enables holography, interferometry, and the gravitational-wave detectors of LIGO.
- **Collimated** — the beam barely spreads, because only photons travelling along the cavity axis survive the bounces. A laser can paint a tight dot on the Moon.

## A device for every job

The same principle, with different gain media, spans a staggering range of devices. **Tiny semiconductor diode lasers** read your DVDs, drive fibre-optic internet across oceans, and scan barcodes. **Solid-state and fibre lasers** cut and weld steel. **Gas lasers** and others power eye surgery, tattoo removal, and precision spectroscopy. Pulsed lasers reach **petawatt** peak powers for fundamental research, and the most stable continuous lasers stabilize atomic clocks. From the checkout scanner to the fusion ignition experiments at the National Ignition Facility, all of it traces back to one line in a 1917 paper: an excited atom, struck by the right photon, makes a perfect copy and sends both on their way.

<div class="quiz" data-quiz="app-lasers"></div>
