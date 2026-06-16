A star is a ball of incandescent gas trillions of kilometres away. We will never visit one, never weigh it on a scale, never scoop up a sample. And yet we know its temperature, its size, its chemistry, its speed toward or away from us, often to a few percent. Every bit of that knowledge rides in on a single, thin stream of **light**. Learning to decode that light — to read a star the way you'd read a barcode — is the founding skill of astrophysics. It begins with a deceptively simple fact: hot things glow, and *how* they glow tells you almost everything.

## Why hot things glow: thermal radiation

Heat a poker in a fire. First it just feels hot — invisibly, it's already radiating in the infrared. Push it hotter and it begins to glow a dull red, then orange, then a brilliant yellow-white. The colour is not an accident of the iron; *any* hot, dense object follows the same sequence, because the glow comes from the jostling of its charged particles. Atoms in a warm solid or dense gas are in ceaseless thermal motion, and every accelerating charge radiates electromagnetic waves. The hotter the object, the more violent the jostling, and the more energetic — bluer — the light.

Physicists idealise this as a **blackbody**: a perfect absorber that reflects nothing, so the light it emits depends on one thing only — its temperature. Real stars, lava, even your own body are excellent approximations. The spectrum of a blackbody — its brightness plotted against wavelength — is a smooth, humped curve, low at both ends and peaking somewhere in the middle. The shape of that hump is the same for every blackbody in the universe; only its position and height change with $T$.

## The catastrophe that broke classical physics

Here is where the story turns dramatic. In the 1890s, classical physics tried to predict that hump and produced a disaster. Treating the radiation as a sea of waves sharing energy equally, the theory (the **Rayleigh–Jeans law**) predicted that the shorter the wavelength, the *more* energy it should carry — without limit. Add up all wavelengths and you get infinite energy pouring out of every warm object. Open your oven and you'd be blasted by ultraviolet and X-rays. This absurd prediction was christened the **ultraviolet catastrophe**, and it was a genuine crisis: the math was correct, yet nature plainly disagreed.

The simulation plots both curves — what classical physics predicted, and what nature actually does.

<div class="sim" data-sim="blackbody"></div>

:::try Watch classical physics fail
Switch on "Show classical (Rayleigh–Jeans)" and look at the dashed curve: it tracks the real spectrum at long (red) wavelengths but then shoots upward toward the short-wavelength end, diverging to infinity. That runaway is the ultraviolet catastrophe. Now slide the **Temperature** up and down and watch the solid (Planck) curve: it stays finite, and its peak slides toward the blue as you heat it. The whole hump also grows dramatically taller. You are watching two laws of physics in a single picture — Wien's shift and Stefan–Boltzmann's growth — and the precise difference between a theory that works and one that doesn't.
:::

Max Planck fixed it in 1900 with a desperate guess that turned out to be the birth of quantum theory: the radiating oscillators can only emit energy in discrete chunks of size $E = hf$, not in arbitrarily small amounts. High-frequency (short-wavelength) light requires big chunks, and at a given temperature there simply isn't enough energy on hand to make many of them — so the curve turns over and falls instead of exploding. Planck's formula matched the data perfectly. The catastrophe vanished, and physics was never the same.

## Wien's law: colour is a thermometer

Look again at where the hump peaks. Hotter blackbodies peak at shorter wavelengths — that's why the poker went red, then yellow, then white. **Wien's displacement law** makes this exact:

$$ \lambda_{\text{peak}} = \frac{b}{T}, \qquad b \approx 2.90 \times 10^{-3}\ \text{m}\cdot\text{K}. $$

The peak wavelength is simply inversely proportional to temperature. Plug in the Sun's surface, $T \approx 5800\ \text{K}$, and you get $\lambda_{\text{peak}} \approx 500\ \text{nm}$ — smack in the middle of the visible band, green-yellow. (No coincidence that our eyes evolved most sensitive right there.) A cool red dwarf at $3000\ \text{K}$ peaks in the near-infrared and looks orange-red; the blue supergiant Rigel at $\sim 12{,}000\ \text{K}$ peaks in the ultraviolet and blazes blue-white. So a star's **colour is a direct readout of its surface temperature** — a thermometer you can use across the galaxy.

:::key The colour–temperature link
Blue is hot, red is cool — the opposite of the bathroom-tap convention. A blue-white star may run at 30,000 K; a sullen red one at 3,000 K. From a single colour measurement, Wien's law hands you the temperature of an object you can never touch.
:::

## Stefan–Boltzmann: how stars reveal their size

Temperature also sets how *much* energy a surface radiates. The **Stefan–Boltzmann law** says the power emitted per unit area scales as the fourth power of temperature:

$$ \frac{P}{A} = \sigma T^4, \qquad \sigma \approx 5.67 \times 10^{-8}\ \text{W/m}^2\text{K}^4. $$

That fourth power is fierce: double a star's temperature and each square metre of it shines *sixteen* times brighter. Now multiply by the star's whole surface area, $4\pi R^2$, to get its total luminosity — the energy it pours out every second:

$$ L = 4\pi R^2 \sigma T^4 \quad\Longrightarrow\quad L \propto R^2 T^4. $$

This single relation is a measuring tape for the cosmos. Measure a star's colour (giving $T$ via Wien) and its apparent brightness and distance (giving $L$), and you can solve for $R$ — the star's radius. That's how we know that the red giant Betelgeuse is cool yet staggeringly luminous, which forces it to be enormous: a red supergiant so vast it would swallow Mars if placed where the Sun is. A cool *and* bright star can only be a giant; a cool *and* dim one must be a tiny dwarf. The $L \propto R^2 T^4$ law lets us read sizes off the sky.

## Spectral lines: the fingerprints of atoms

The smooth blackbody curve is only half the story. Pass starlight through a prism or diffraction grating with enough precision and the rainbow is crossed by hundreds of razor-thin dark lines — places where specific colours are missing. These are **absorption lines**, and they are nature's barcodes. Each chemical element, from the energy-level ladders of its atoms, absorbs and emits only a fixed, unique set of wavelengths (the physics of the previous track's quantum atom). Cool gas in a star's outer atmosphere absorbs exactly its own colours out of the blackbody glow streaming up from below, stamping the spectrum with dark gaps.

Read those gaps and you read the star's chemistry. The same pattern of lines we measure in a hydrogen lamp on a lab bench appears in the spectrum of the Sun, of Andromeda, of a quasar near the edge of the observable universe — proof that the laws of physics and the periodic table are the same everywhere. Helium was in fact *discovered in the Sun* (hence its name, from *helios*) before it was ever found on Earth, identified purely by an unexplained spectral line during an 1868 eclipse.

:::history Spectroscopy: the impossible made routine
In 1835 the philosopher Auguste Comte declared that the chemical composition of the stars was something humanity could *never* know. Within a few decades, Kirchhoff and Bunsen had read it straight off the lines in sunlight. Spectroscopy turned the unknowable into a measurement — arguably the single most powerful technique in all of astronomy.
:::

## Redshift: lines that have moved

There's a final secret in those lines. If a whole pattern of an element's lines appears shifted, all together, toward longer (redder) wavelengths, the source is moving *away* from us — its light is **redshifted**, stretched like the lowered pitch of a receding siren. Shifted toward the blue, it's approaching. The size of the shift gives the speed. This is how we clock the orbital wobble of stars tugged by unseen planets, and how, on the grandest scale, Edwin Hubble found that nearly every galaxy's lines are redshifted — that the universe itself is expanding. But that is a story for the cosmology track. For now, hold the key idea: a thin beam of starlight carries a star's temperature, size, composition, and motion, all at once, for anyone who has learned to read it.

<div class="quiz" data-quiz="astro-radiation"></div>
