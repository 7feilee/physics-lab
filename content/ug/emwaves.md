Maxwell's four equations don't just describe charges and magnets sitting still — buried inside them is a prediction that the fields can tear loose from their sources and propagate through utterly empty space as a self-sustaining wave. That wave is light. It is also radio, microwaves, X-rays, and the warmth on your face from the Sun. Here we'll extract the wave from the equations, see why $\vec E$ and $\vec B$ ride along perpendicular to each other and to their direction of travel, and follow the energy they carry across the vacuum.

## Deriving the wave equation

Start in empty space — no charges, no currents — where Maxwell's curl equations read

$$ \nabla \times \vec E = -\frac{\partial \vec B}{\partial t}, \qquad \nabla \times \vec B = \mu_0\varepsilon_0\,\frac{\partial \vec E}{\partial t}. $$

These two say a changing $\vec B$ makes a circulating $\vec E$, and a changing $\vec E$ makes a circulating $\vec B$. To see what that *feedback* produces, take the curl of the first equation and substitute the second. Using the vector identity $\nabla\times(\nabla\times\vec E) = \nabla(\nabla\cdot\vec E) - \nabla^2\vec E$, and noting $\nabla\cdot\vec E = 0$ in empty space, the gradient term vanishes and we are left with

$$ \nabla^2 \vec E = \mu_0\varepsilon_0\,\frac{\partial^2 \vec E}{\partial t^2}. $$

This is the **wave equation**. Anyone who has met it before recognizes the form $\nabla^2 f = \frac{1}{v^2}\partial_t^2 f$, describing a disturbance traveling at speed $v$. Matching, the propagation speed is

$$ c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3.0\times10^8\ \text{m/s}. $$

The identical manipulation on $\vec B$ gives the same wave equation with the same speed. The electric and magnetic fields each obey a wave equation, both moving at $c$ — the speed of light, assembled out of two constants measured in entirely electric and magnetic experiments.

## Transverse fields, locked in step

Solve the wave equation with the simplest case, a plane wave moving in the $x$-direction. The other Maxwell equations — $\nabla\cdot\vec E = 0$ and $\nabla\cdot\vec B = 0$ — impose a strict geometry. A diverging-free wave traveling along $x$ can have *no* component of $\vec E$ or $\vec B$ along $x$. Both fields must point **perpendicular** to the direction of travel: the wave is **transverse**.

Faraday's law then locks $\vec E$ and $\vec B$ together. A plane wave looks like

$$ \vec E = E_0\,\hat y\,\cos(kx - \omega t), \qquad \vec B = B_0\,\hat z\,\cos(kx - \omega t). $$

Three facts fall out. First, $\vec E$, $\vec B$, and the direction of propagation $\hat x$ are *mutually perpendicular* — and in that order they obey the right-hand rule, $\vec E \times \vec B$ pointing the way the wave goes. Second, the two fields are **in phase**: they peak together, cross zero together. Third, their amplitudes are tied by

$$ E_0 = c\,B_0. $$

The electric field is numerically much larger (by the factor $c$), which is why we usually speak of the "electric" interaction of light with matter, even though the magnetic field is its equal partner. Drag the wave in the simulator and watch the two perpendicular fields oscillate together, neither leading nor lagging:

<div class="sim" data-sim="waves"></div>

:::key The wave needs no medium
Sound needs air; water waves need water. For a century physicists invented a "luminiferous ether" for light to wave *in*. But Maxwell's derivation used no medium at all — the changing $\vec E$ and $\vec B$ are each other's medium. Each field's change sustains the other, and the pair propagates through pure vacuum. The Michelson–Morley experiment confirmed there is no ether, and Einstein took $c$'s independence from any medium as a founding postulate.
:::

## The electromagnetic spectrum

Nothing in the wave equation fixes the wavelength — any $\lambda$ works, all traveling at the same $c$, with frequency set by $c = f\lambda$. The continuous range of possible wavelengths is the **electromagnetic spectrum**, and it is all the same physics:

| Band | Wavelength | Typical source |
|------|-----------|----------------|
| Radio | $> 1\ \text{m}$ | antennas, pulsars |
| Microwave | $1\ \text{mm} - 1\ \text{m}$ | molecular rotations |
| Infrared | $700\ \text{nm} - 1\ \text{mm}$ | warm objects |
| Visible | $400 - 700\ \text{nm}$ | electron transitions |
| Ultraviolet | $10 - 400\ \text{nm}$ | the Sun, sparks |
| X-ray | $0.01 - 10\ \text{nm}$ | inner-shell electrons |
| Gamma | $< 0.01\ \text{nm}$ | nuclei, annihilation |

The visible slice your eyes detect spans less than one octave of frequency — a sliver of a spectrum that runs over twenty orders of magnitude. A radio wave and a gamma ray are the same kind of object, differing only in how tightly the fields oscillate.

## Energy and the Poynting vector

An electromagnetic wave carries energy — that is how sunlight warms the Earth across $150$ million kilometers of vacuum. The energy density stored in the fields is

$$ u = \tfrac12\varepsilon_0 E^2 + \frac{1}{2\mu_0}B^2, $$

and using $E = cB$ one can show the electric and magnetic contributions are *exactly equal* — the energy is shared evenly between the two fields. The flow of this energy is described by the **Poynting vector**

$$ \vec S = \frac{1}{\mu_0}\,\vec E \times \vec B. $$

Its direction is the direction of energy flow (the same $\hat x$ the wave travels), and its magnitude is the power per unit area — the **intensity**. Averaged over a cycle,

$$ \langle S\rangle = \frac{1}{2}\varepsilon_0 c E_0^2. $$

For sunlight at Earth this comes to about $1360\ \text{W/m}^2$, the solar constant that sets the power available to every solar panel and every leaf. The wave also carries **momentum** $p = U/c$, so light exerts pressure when it lands — the basis of solar sails and the reason a comet's tail points away from the Sun.

:::note Intensity goes as the square of the field
Double the amplitude $E_0$ and you *quadruple* the intensity, since $S \propto E_0^2$. This quadratic relationship between field strength and power runs through all of wave physics — it's the same reason doubling a sound wave's pressure amplitude quadruples its loudness in energy terms.
:::

## Polarization

Because the wave is transverse, $\vec E$ has freedom in *which* perpendicular direction it points — and that choice is the wave's **polarization**. If $\vec E$ oscillates along a fixed line, the light is **linearly polarized**. If two perpendicular components oscillate a quarter-cycle out of phase, the field vector sweeps in a circle as the wave advances: **circular polarization**. Ordinary sunlight is *unpolarized* — a jumble of every orientation arriving at random.

Polarization is not an abstraction; it is everywhere. A polarizing filter transmits only the component of $\vec E$ along its axis, which is why polarized sunglasses cut glare — light reflected off water or roads is partially polarized horizontally, and the filter is oriented to block it. Twist two polarizers to $90^\circ$ and they go black, since the first lets through only vertical $\vec E$ and the second admits only horizontal. LCD screens, 3D cinema glasses, and the stress patterns engineers see in transparent plastic all exploit the same simple fact: a transverse wave remembers which way it wiggles.

:::history From prediction to wireless world
Maxwell predicted these waves in 1865 and died in 1879, never seeing one detected. Heinrich Hertz produced and measured radio waves in his laboratory in 1887, proving they reflect, refract, and interfere exactly like light. Within a decade Marconi had turned the curiosity into wireless telegraphy. The chain from a consistency argument about a charging capacitor to a planet wrapped in radio is one of the great vindications of theory predicting reality.
:::

From four field equations to a transverse, energy-carrying, polarizable wave traveling at a speed built from electric and magnetic constants — the entire nature of light, deduced rather than discovered. Newton thought light was particles; Maxwell proved it was waves; quantum mechanics would later reveal it is somehow both. But the wave he found is exact, and it lights the world.
