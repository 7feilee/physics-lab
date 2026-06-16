Pass sunlight through a prism and you get a smooth rainbow. But pass the light of a glowing hydrogen tube through it and you get something stranger and far more revealing: not a continuous band but a handful of sharp, brightly coloured lines, separated by darkness — a red, a blue-green, two violets. Every element has its own such pattern, a barcode of light as unique as a fingerprint. For decades these lines were a mystery measured to absurd precision but explained by no one. Cracking them launched quantum mechanics, gave us the ability to read the composition of stars we will never visit, and led, eventually, to lasers and atomic clocks.

## The puzzle of the lines

By the late nineteenth century, spectroscopists had catalogued the emission lines of the elements with extraordinary accuracy. Hydrogen, the simplest atom, showed a beautiful regular series of lines in the visible spectrum. In 1885 a Swiss schoolteacher, Johann Balmer, found by trial that their wavelengths fit a simple numerical formula — but he had no idea *why*. Classical physics made the situation worse, not better. An electron orbiting a proton is an accelerating charge, and accelerating charges radiate; the electron should spiral into the nucleus in about $10^{-11}$ seconds, emitting a continuous smear of light as it fell. Atoms should not exist, and if they did, they should not produce sharp lines. They flatly contradicted everything known.

## Bohr's audacious fix

In 1913 Niels Bohr made a leap that was less a derivation than a decree. He simply *postulated* that the electron is allowed only certain special orbits — **stationary states** — in which, contrary to all of electromagnetism, it does *not* radiate. The atom emits or absorbs light only when the electron **jumps** between two such allowed orbits, and the photon carries exactly the energy difference:

$$ h\nu = E_{\text{final}} - E_{\text{initial}}. $$

Sharp lines, then, are nothing but sharp energy *differences* made visible. To pick out the allowed orbits, Bohr quantized the electron's angular momentum in whole units of $\hbar$. Running this through Newtonian mechanics and Coulomb's law, he derived the energy levels of hydrogen:

$$ E_n = -\frac{13.6\,\text{eV}}{n^2}, \qquad n = 1, 2, 3, \dots $$

The integer $n$ is the **principal quantum number**. The ground state ($n=1$) sits at $-13.6\,\text{eV}$; that $13.6\,\text{eV}$ is the **ionization energy**, the work needed to rip the electron free entirely. The negative sign means the electron is bound — you must add energy to climb to higher $n$, and the levels crowd together toward zero as $n$ grows.

:::history A formula that simply worked
Bohr's model has no business being as good as it is. It grafts a quantum rule onto classical orbits with no deeper justification, and it fails for any atom more complex than hydrogen. Yet it spat out the $13.6\,\text{eV}$ ionization energy and the entire hydrogen spectrum on the first try, matching Balmer's mysterious numbers exactly. It was right enough to be undeniable and wrong enough to demand something better — the perfect provocation. Within fifteen years it was superseded by full quantum mechanics, but it lit the path.
:::

## The Rydberg formula and the hydrogen series

Combine the energy levels with $h\nu = E_{\text{final}} - E_{\text{initial}}$ and you recover the **Rydberg formula** for every hydrogen wavelength:

$$ \frac{1}{\lambda} = R_\text{H}\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right), $$

where $R_\text{H} \approx 1.097\times10^{7}\,\text{m}^{-1}$ is the **Rydberg constant** and the electron falls from level $n_i$ to a lower level $n_f$. Group the transitions by where they land and you get the named **series**:

- **Lyman series** ($n_f = 1$): falls all the way to the ground state, emitting ultraviolet light.
- **Balmer series** ($n_f = 2$): the famous visible lines — red at $656\,\text{nm}$ (the $3\to2$ jump), blue-green at $486\,\text{nm}$, and violets beyond.
- **Paschen series** ($n_f = 3$): lands one rung up, emitting in the infrared.

The same ladder explains **absorption** too. Shine white light through cool hydrogen gas and the atoms absorb exactly the photons that match their upward jumps, punching dark lines into the spectrum at the very wavelengths they would emit. This is why the Sun's spectrum is crossed by dark **Fraunhofer lines**: sunlight filtering through the cooler outer atmosphere loses precisely the colours those elements absorb.

## A unique barcode for every element

Hydrogen is simple because it has one electron. Heavier atoms have many, arranged in shells, screening one another, so their level structures are richer and their line patterns more intricate. But the essential idea holds: each element has its own fixed set of energy levels, hence its own fixed set of allowed jumps, hence its own unique pattern of spectral lines. No two elements share a barcode.

:::key Reading the universe by its light
Because the pattern is unique and unchanging, you can identify an element from its lines alone — even across the galaxy. Helium was discovered *in the Sun* in 1868, spotted as an unexplained yellow line in the solar spectrum, decades before it was found on Earth (hence its name, from *helios*). Every claim about what stars and nebulae are made of, the expansion of the universe (read from how far the lines are redshifted), even the atmospheres of planets orbiting other suns — all of it is decoded from these barcodes. Spectral lines are how physics does chemistry at a distance of light-years.
:::

## Fine structure and the limits of Bohr

Look closely — really closely — and a single Bohr line splits into two or more very nearly overlapping lines. This **fine structure** is a small effect, set by a fundamental number called the fine-structure constant $\alpha \approx 1/137$, and Bohr's model cannot explain it at all. It arises from corrections Bohr never imagined: the electron's own intrinsic **spin** coupling to its orbital motion, and relativistic tweaks to its energy. Capturing these requires the full machinery of quantum mechanics and, ultimately, Dirac's relativistic equation.

This is the honest verdict on the Bohr model: it is a brilliant, lucky scaffold. The real atom has no little orbits at all. The electron is a three-dimensional standing wave — an **orbital**, a smeared cloud of probability — described by the Schrödinger equation, and labelled not by one quantum number but by several ($n$, $\ell$, $m$, and spin). Yet for hydrogen's gross energy levels, Bohr's simple $-13.6\,\text{eV}/n^2$ survives intact, which is why we still teach it first.

## Where this leads

Energy levels and the jumps between them are not merely a tool for stargazing. The fact that an atom emits a photon of one exact frequency when it drops between two precise levels is the seed of two of the most important technologies in modern physics. Coax a whole population of atoms to drop in lockstep, and you get a **laser** — light of a single colour, all in step. Pin the frequency of one ultra-narrow atomic transition and count its oscillations, and you get an **atomic clock**, the most accurate measuring device humans have ever built, accurate enough to keep GPS running and to detect the slowing of time atop a tall building. Both rest entirely on the quantized ladder of energy levels first glimpsed in those sharp, mysterious lines of hydrogen.
