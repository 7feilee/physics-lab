Once you accept that the world is made of quantum fields, an immediate problem appears: the fields are coupled, and coupled quantum systems are almost never exactly solvable. The equations of quantum electrodynamics — the QFT of electrons and photons — cannot be solved in closed form. What saves us is that the coupling between fields is *weak*. The strength of the electromagnetic interaction is governed by a small number, and "small" means we can compute by **perturbation theory**: solve the easy, non-interacting problem exactly, then add corrections in powers of the small coupling. Richard Feynman's genius was to realize that every term in this expansion corresponds to a *picture* — a diagram of particles meeting, exchanging, and scattering — and that you can read the mathematics straight off the picture. **Feynman diagrams** turned an intractable bookkeeping nightmare into something a physicist can draw on a napkin.

## Perturbation theory as a sum over diagrams

The quantity we usually want is an **amplitude**: a complex number whose squared magnitude gives the probability of some process, such as "two electrons come in, two electrons go out." In an interacting field theory this amplitude is an infinite sum. Perturbation theory organizes that sum by how many times the fields interact. The zeroth term is "nothing happens." The next term involves one elementary interaction, the next two, and so on — each successive term smaller than the last because each carries another factor of the small coupling.

Feynman's insight is that each term in this sum is a specific *spacetime story*, and you can enumerate the terms by drawing all the distinct stories. A diagram has time running one way (here, left to right) and space the other. **External lines** are the real particles you put in and take out. **Internal lines** and **vertices** are everything that happens in between. To get the total amplitude you draw every topologically distinct diagram with the given incoming and outgoing particles, translate each into a number by fixed rules, and add them up.

:::key A diagram is a term, not a photograph
A Feynman diagram is not a literal movie of particles moving along trajectories. It is a *mnemonic for a mathematical term* in the perturbation series. Each line and vertex stands for a specific factor in an integral. The particles do not "really" follow these paths — in fact the full amplitude sums over *all* the diagrams at once. The picture is a calculational tool of extraordinary power, but read it as algebra, not as a snapshot.
:::

## Vertices, propagators, and the coupling

Every diagram is built from just two kinds of ingredient, and each carries a precise mathematical meaning.

**Vertices** are the points where lines meet — where the fields interact. In quantum electrodynamics there is exactly *one* fundamental vertex: two electron lines and one photon line meeting at a point. This single vertex encodes every electromagnetic phenomenon. It says "an electron can emit or absorb a photon." Each vertex contributes a factor of the **coupling constant** $e$ (the electron's charge) to the amplitude. The number of vertices in a diagram is its *order* in perturbation theory; more vertices means a smaller contribution.

**Propagators** are the internal lines — particles traveling between vertices. A propagator is a mathematical factor describing how a disturbance in a field gets from one vertex to another. Crucially, internal-line particles are **virtual**: they need not obey the usual relation $E^2 = (pc)^2 + (mc^2)^2$ that real particles satisfy. The propagator for a particle of mass $m$ has the schematic form

$$ \frac{1}{p^2 - m^2c^2}, $$

which blows up precisely when the virtual particle *would* be a real, on-shell particle, and is otherwise a finite off-shell contribution. The propagator is how the diagram "remembers" what kind of particle is being exchanged.

The size of every quantum-electrodynamic effect is set by how strongly the vertex couples, captured by the **fine-structure constant**

$$ \alpha = \frac{e^2}{4\pi\varepsilon_0\hbar c} \approx \frac{1}{137}. $$

This is the genuinely small number that makes perturbation theory work. Each additional vertex pair in a diagram costs roughly a factor of $\alpha \approx 0.0073$, so the series converges fast: the leading diagram dominates, and each correction is a hundred-odd times smaller than the last. The smallness of $\alpha$ is *why* we can compute electromagnetism to twelve decimal places. If the coupling were of order one — as it is for the strong force at low energies — this whole strategy would collapse.

:::note Why "virtual" is not a fudge
A virtual particle is an internal line: a propagator carrying energy and momentum that don't lie on the mass shell $E^2 = (pc)^2 + (mc^2)^2$. This is allowed because, by the energy-time uncertainty relation, a state can borrow energy for a short enough time. Virtual particles cannot be detected directly — you cannot put a detector on an internal line — but their effects are utterly real, showing up in forces, in tiny shifts of atomic energy levels, and in the magnetic moment of the electron computed to a dozen digits.
:::

## A worked example: electron–electron scattering

Take the cleanest case: two electrons approach, interact electromagnetically, and fly apart — Møller scattering. With one fundamental vertex available, what is the simplest diagram?

Two vertices. Electron $A$ emits a virtual photon at one vertex; electron $B$ absorbs it at the other. The photon is the **internal line**, the **propagator** carrying momentum from one electron to the other; the four electron segments are external lines coming in and going out. This single diagram *is* the electromagnetic repulsion between the electrons — the Coulomb force, re-derived as the exchange of a virtual photon. Reading off the rules: two vertices give a factor $e^2 \propto \alpha$, and the photon propagator gives the $1/q^2$ that, Fourier-transformed, becomes the familiar $1/r$ Coulomb potential. The everyday inverse-square law falls out of the lowest-order diagram.

There is a subtlety even here: the two outgoing electrons are identical, so there is a *second* diagram with the outgoing legs swapped, and quantum statistics requires you to subtract its amplitude. Both diagrams contribute at order $\alpha$; you add the amplitudes (with the right sign) and *then* square. This interference between indistinguishable possibilities has no classical analog and is built into the diagrammatic rules.

This leading result is already accurate to about a percent — but it is only the first term.

## Loops and the need for renormalization

Beyond the leading diagram come corrections with more vertices, and the interesting ones contain **loops** — closed internal cycles. The virtual photon, in flight, can briefly split into a virtual electron–positron pair that then recombines; or the electron can emit and reabsorb its own virtual photon. Each such embellishment adds vertices, so each is suppressed by another power of $\alpha$ — a small correction, in principle.

In practice the loops bite back. A loop contains an internal momentum that is *not* fixed by the incoming and outgoing particles, so the rules say to **integrate over all possible values** of that loop momentum, from zero to infinity. And those integrals frequently diverge: they give infinity. The amplitude for the electron's magnetic moment, computed naively at one loop, is infinite. For a while this looked fatal.

The resolution is **renormalization**, one of the subtlest and most successful ideas in physics. The key realization is that the parameters in the original equations — the "bare" mass and charge of the electron — are *not* the quantities we actually measure. What we measure is always the electron *dressed* in its cloud of virtual particles. When you carefully express predictions in terms of the *measured* mass and charge rather than the unmeasurable bare ones, the infinities cancel, systematically, order by order, and every remaining prediction is finite. The divergences were an artifact of asking the wrong question (the value of unobservable bare parameters), not a sickness of the theory.

:::warn Renormalization is physics, not a swindle
It is tempting to dismiss renormalization as sweeping infinities under the rug. It is the opposite. The infinities signal that the bare parameters are unphysical placeholders; the finite, measured parameters are what nature reports. Re-expressing everything in measurable terms is mandatory, not a trick. The proof is in the numbers: the electron's magnetic moment, computed through many loops, agrees with experiment to better than one part in a *trillion* — the most precisely verified prediction in all of science. A swindle does not predict twelve decimal places correctly.
:::

## The payoff

Feynman diagrams take the impossible — solving a system of infinitely many coupled quantum fields — and reduce it to a recipe a graduate student can execute: draw the diagrams, write a factor of the coupling per vertex, a propagator per internal line, integrate over the loops, sum the terms, square the result. Vertices encode the couplings; internal lines encode virtual exchange; the smallness of $\alpha$ guarantees the series converges; loops demand renormalization, which trades unmeasurable bare parameters for measured ones and yields finite, staggeringly accurate predictions. The same diagrammatic philosophy, with different vertices and couplings, runs the weak and strong interactions and the entire computational engine of the Standard Model. Feynman gave physics not just an answer but a *way of seeing* — a visual grammar for the quantum world.
