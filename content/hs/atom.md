For two centuries, physics was a triumph of clockwork certainty: tell me where everything is and how fast it's going, and I'll tell you the future. Then, around 1900, the universe revealed that at its smallest scales it doesn't work that way at all. Light turned out to be lumpy, atoms turned out to be picky, and particles turned out to be waves. This is the **quantum revolution** — the strangest and most successful idea in all of science, and the bridge from the physics you've learned to the physics that runs reality. Hold on to your intuitions loosely; several are about to break.

## The photoelectric effect: light comes in lumps

Shine light on certain metals and electrons fly off. Simple enough — but the *details* made no sense to classical physics. According to the wave theory of light, a brighter beam carries more energy, so it should knock electrons off with more energy. It doesn't. Brighter light ejects *more* electrons, but each one comes off with the *same* energy. What controls an electron's energy is the **frequency** (colour) of the light, not its brightness. And below a certain threshold frequency, *no* electrons come off at all — no matter how blindingly bright the light, no matter how long you wait.

In 1905 Einstein cracked it with a radical proposal: light isn't a smooth continuous wave but a stream of discrete energy packets, later called **photons**. Each photon carries an energy fixed entirely by the light's frequency:

$$ E = hf, $$

where $h \approx 6.63 \times 10^{-34}\ \text{J}\cdot\text{s}$ is **Planck's constant**, the fundamental quantum of action. Now everything fits. One photon knocks loose one electron, all-or-nothing, in a single collision. A photon needs a minimum energy $hf$ to free an electron, so dim red light (low $f$, weak photons) can't do it however bright, while even faint blue light (high $f$, energetic photons) can. Brightness just means *more photons*, hence more electrons — but each photon's punch depends only on its frequency. This won Einstein his Nobel Prize, and it forced physics to accept that energy itself comes in indivisible grains.

:::key Quantisation: nature comes in chunks
The deepest idea here is that energy is not infinitely divisible. Light delivers its energy in whole photons of size $hf$, never in fractions — the way money comes in whole pennies, not arbitrary amounts. This "graininess" of the world is hidden at everyday scales only because $h$ is so absurdly tiny. Quantisation is the thread that runs through everything that follows.
:::

## Atomic spectra: nature's barcodes

Heat a gas — neon, hydrogen, sodium — until it glows, then split its light with a prism. You don't get a smooth rainbow. You get a handful of *sharp, specific coloured lines*, and a different, unique set for every element. Hydrogen always shows the same red, blue-green, and violet lines; sodium burns the same deep yellow (the colour of old streetlamps). These spectral fingerprints are so reliable we use them to identify the composition of stars millions of light-years away, just from their light.

But *why* discrete lines? Why would an atom emit only certain exact colours and never the ones in between?

## Energy levels: electrons on a ladder

Niels Bohr's 1913 answer was as bold as Einstein's. The electrons in an atom cannot have just any energy — they are restricted to specific, discrete **energy levels**, like rungs on a ladder. An electron can sit on a rung, but never *between* rungs. To jump from a low rung to a high one, it must absorb a photon carrying *exactly* the energy gap. To fall from a high rung to a low one, it *emits* a photon carrying exactly that gap's worth of energy:

$$ E_{\text{photon}} = hf = E_{\text{high}} - E_{\text{low}}. $$

Now the spectrum makes perfect sense. Because the energy levels are fixed, the *gaps* between them are fixed, so only photons of certain exact energies — exact frequencies, exact colours — can ever be emitted. Each spectral line is the signature of one specific jump between two specific rungs. The discrete lines are a direct image of the discrete energy ladder inside the atom. The continuous classical atom is gone; in its place, a quantised one.

:::history Why atoms don't collapse
Classical physics predicted disaster: an electron orbiting a nucleus is an accelerating charge, and accelerating charges radiate energy. The electron should spiral into the nucleus in a hundred-millionth of a second, and all matter should instantly collapse. It doesn't — you're still here. Quantisation is *why*. There is a lowest rung, a **ground state**, below which the electron cannot fall, because there's no lower energy level to drop to. Quantisation doesn't just explain spectra; it's the reason atoms — and therefore everything — are stable.
:::

## Wave–particle duality: the deepest twist

So light, which we proved was a wave (interference, diffraction, refraction), is *also* a stream of particles. Which is it? The unsettling answer: **both, and neither.** Light is a single quantum object that shows wave behaviour in some experiments and particle behaviour in others, and our everyday words "wave" and "particle" are simply too small to contain it.

Then Louis de Broglie asked the question that completed the symmetry: if waves can act like particles, can *particles* act like waves? In 1924 he proposed that *every* piece of matter — every electron, every atom, even you — has a wavelength,

$$ \lambda = \frac{h}{p}, $$

inversely proportional to its momentum. For a baseball this wavelength is so unimaginably tiny it's utterly undetectable, which is why cricket and billiards never look quantum. But for an electron, light and slow, the wavelength is comparable to atomic sizes — and it shows. Fire electrons at a crystal and they **diffract**, forming interference patterns, behaving for all the world like waves. Matter waves are real.

## The single-electron double slit

Here is the experiment Feynman called the heart of quantum mechanics, "containing the only mystery." Send a beam through two narrow slits onto a screen. With light, you get an **interference pattern** — bright and dark bands where the waves from the two slits reinforce and cancel. Classic wave behaviour. With electrons, fired one at a time, each lands as a single tiny dot — a particle, unmistakably. But let the dots pile up, thousands of them, and they assemble themselves into the *same striped interference pattern*. Each lonely electron, passing through the apparatus with nothing else around, somehow interferes *with itself*.

Watch this unfold in the simulation. Fire electrons one by one; each arrives as a point, but the pattern that builds is the signature of a wave passing through *both* slits at once.

<div class="sim" data-sim="doubleslit"></div>

:::try The question that has no comfortable answer
In the simulation, send electrons through one at a time and watch the interference bands emerge from thousands of single dots. Now ask: which slit did each electron go through? The maddening truth is that *trying to find out* — placing a detector at the slits — destroys the pattern entirely. Look, and the electron picks one slit and behaves like a particle: the bands vanish. Don't look, and it goes through both as a wave. The act of measurement changes the outcome. No one fully agrees what this *means*; everyone agrees it's what *happens*.
:::

:::warn Don't try to picture it too hard
It is tempting to imagine the electron as a tiny ball that secretly went through one slit, or splits into two and recombines. Both pictures are wrong, and they'll lead you astray. Quantum mechanics says the electron is described by a *probability wave* that genuinely passes through both slits and interferes, and only becomes a definite particle at a definite place when it's detected. The math predicts the pattern with flawless precision. The "what's really going on" is a question physicists still argue about a century later — and the honest stance is to follow the equations and resist forcing the answer into everyday imagery.
:::

## Where this is going

You've now seen the three pillars that toppled classical certainty: energy comes in quanta ($E = hf$), atoms have discrete energy levels (hence sharp spectra), and everything is both wave and particle ($\lambda = h/p$). These aren't loose ends — they are the foundation of all modern physics. Lasers, transistors, MRI scanners, solar cells, the chemistry of every molecule in your body: all of it runs on quantum mechanics. The Undergraduate track picks up exactly here, replacing the probability *waves* of this lesson with their precise mathematical engine — the **wavefunction** and Schrödinger's equation — and following the strangeness all the way down.

<div class="quiz" data-quiz="hs-atom"></div>
