There is a mountain in the heart of physics, and its summit is iron-56. Every nucleus lighter than iron wants to climb toward the peak by joining with others; every nucleus heavier than iron wants to climb by breaking apart. In both cases the climb releases energy — millions of electronvolts per nucleon — because binding tightens as you approach the top. **Fission** rolls down from the heavy side; **fusion** rolls up from the light side. They look like opposites, and in a sense they are, but they are powered by the very same curve. Master that curve and you understand both the bomb and the reactor, both the Sun and the dream of clean energy on Earth.

## Fission: splitting the heavy

A heavy nucleus like uranium-235 sits on the gentle downhill slope past iron, only loosely bound at about $7.6\,\text{MeV}$ per nucleon. Split it into two medium-sized fragments, which bind at nearly $8.5\,\text{MeV}$ per nucleon, and the difference — roughly $0.8\,\text{MeV}$ per nucleon, times $235$ nucleons — comes out as about **$200\,\text{MeV}$ per fission**. That is tens of millions of times the energy of a chemical bond. One kilogram of uranium-235, fully fissioned, releases as much energy as burning roughly three thousand tonnes of coal.

Left alone, uranium-235 fissions only very rarely. The trick is to *induce* it: fire a slow neutron at the nucleus, it absorbs it, becomes wildly unstable, and splits. Crucially, each fission spits out two or three fresh neutrons. Those neutrons can strike *other* uranium nuclei, causing more fissions, releasing more neutrons — a **chain reaction**.

:::key The chain reaction in one number
Define $k$ as the average number of neutrons from one fission that go on to cause another fission. If $k < 1$ the reaction dies out. If $k = 1$ it sustains itself steadily — this is **criticality**, the regime of a power reactor. If $k > 1$ it grows exponentially, generation upon generation, in millionths of a second — this is a bomb. The entire art of nuclear engineering is the control of a single number near one.
:::

## Critical mass and the reactor

Most neutrons born in a small lump of uranium simply escape through the surface before finding another nucleus. Make the lump bigger and the volume (where fissions happen) grows faster than the surface (where neutrons leak), so at some size enough neutrons stay to keep $k \ge 1$. That size is the **critical mass** — for a bare sphere of uranium-235, around $52\,\text{kg}$; for plutonium-239, far less, and less still with a neutron-reflecting shell.

A **reactor** holds $k$ at exactly $1$, steadily. Several ingredients make this possible:

- **Moderator** (water, graphite): the neutrons born in fission are too fast to be efficiently captured, so a moderator slows them by collisions, making fission far more likely.
- **Control rods** (boron, cadmium): these greedily absorb neutrons. Slide them in to lower $k$, pull them out to raise it — the throttle.
- **Delayed neutrons**: a tiny fraction of fission neutrons arrive seconds late, not instantly. This sliver of delay is what makes the chain reaction sluggish enough for mechanical control rods to keep up. Without it, no reactor could be governed.

The heat from fission boils water, the steam spins a turbine, the turbine drives a generator — and the rest is ordinary power-plant engineering. The exotic part is purely the nucleus; everything downstream is steam.

## Fusion: joining the light

Now go to the other side of the mountain. The steepest, most energy-rich part of the binding curve is its lower-left rise, among the lightest nuclei. Fuse two of them and you climb dramatically. The Sun runs on the **proton-proton chain**, netting four hydrogen nuclei into one helium-4 and releasing about $26\,\text{MeV}$, but its first step is so slow that an average proton in the solar core waits *billions of years* to fuse. That glacial rate is why the Sun burns steadily for ten billion years rather than exploding — and it is hopeless as an energy recipe on Earth.

For a terrestrial reactor we pick the easiest fusion reaction, **deuterium–tritium (D–T)**:

$$ {}^2\text{H} + {}^3\text{H} \;\rightarrow\; {}^4\text{He} + n + 17.6\,\text{MeV}. $$

Per unit mass, fusion beats even fission, and its fuel is effectively limitless — deuterium is distilled from seawater, tritium bred from lithium. The products are not the long-lived, intensely radioactive waste of fission; the main output is harmless helium.

:::deep Why fusion is so hard, and fission so (relatively) easy
Both nuclei in a fusion reaction are positively charged, so they repel fiercely as they approach — the **Coulomb barrier**. To fuse, they must collide hard enough to get close enough for the short-range strong force to grab, which means temperatures of **$100$ million kelvin or more**, far hotter than the Sun's core (stars cheat with crushing pressure and quantum tunnelling). Fission needs no such heat: a slow, neutral neutron strolls right up to the nucleus with no barrier to climb, because it carries no charge. That asymmetry — neutral neutron versus charged nucleus — is why we have had fission reactors since the 1940s and are still struggling to build a fusion one.
:::

## Confining a star

To fuse on Earth you must hold a $100$-million-degree plasma together long enough and densely enough for fusion to pay back more energy than you spent heating it. No solid wall can touch such a gas. Two strategies dominate:

- **Magnetic confinement.** Because the hot fuel is an ionized plasma, magnetic fields can grip and shape it. The leading design is the **tokamak**, a doughnut-shaped magnetic bottle that winds the plasma into a ring with no ends to leak out of. **ITER**, an enormous international tokamak in France, is being built to demonstrate sustained net-energy-positive fusion in a reactor-scale machine.
- **Inertial confinement.** Blast a tiny fuel pellet from all sides with the world's most powerful lasers, crushing and heating it so fast it fuses before it can fly apart. In **December 2022**, the U.S. National Ignition Facility achieved **ignition** — the fusion reactions released more energy than the laser light delivered to the pellet — the first such demonstration in a laboratory, a genuine scientific milestone.

The criterion both must beat is the **Lawson condition**: the product of plasma density, temperature, and confinement time must clear a threshold for the energy released to exceed the energy invested. Decades of work have been a steady climb toward that line.

## The same curve, two directions

It is worth holding both pictures in one view. Fission takes a loosely bound heavyweight and breaks it into more tightly bound fragments; fusion takes loosely bound lightweights and merges them into a tightly bound product. Different fuels, opposite operations — yet both are simply matter sliding toward the iron-56 peak, paying off the difference in binding energy as released kinetic energy, ultimately as heat.

The promise of fusion is real: abundant fuel, no carbon, no meltdown risk (the reaction stops the instant you stop feeding it), and only short-lived waste. The challenge is equally real: confining a substance hotter than the Sun, in a machine that must produce more power than it consumes, for long enough to matter. After seventy years of "thirty years away," the recent ignition result and the progress on tokamaks suggest the gap is finally, genuinely narrowing — the long climb toward the peak, this time done on purpose, on Earth.

<div class="quiz" data-quiz="app-fission-fusion"></div>
