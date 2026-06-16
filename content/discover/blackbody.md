Heat any object — a poker, a star, the filament of a lamp — and it glows. Cool it glows red, hotter it glows white, hotter still blue-white. By 1900 this everyday fact had become a precise science: physicists could measure the exact *spectrum* of light pouring out of a hot cavity, intensity at every wavelength, to a few percent. And classical physics, the proud and complete physics of Newton and Maxwell, made a clear prediction for that spectrum. The prediction was not a little off. It was infinitely off. It said a warm object should blaze with *unlimited* energy at short wavelengths — that opening your oven door should bathe the room in lethal ultraviolet and X-rays. The world is not like that. This absurd failure, christened the **ultraviolet catastrophe**, is where classical physics broke, and where the quantum world was forced into existence.

## A spectrum measured, a spectrum predicted

A **blackbody** is an idealised perfect absorber and emitter — well approximated by a small hole in a heated cavity. The light leaking out depends on one thing only: the temperature. By the 1890s, German experimentalists had measured these curves beautifully. Each is a smooth hump: intensity climbs from long wavelengths, peaks at a wavelength that shifts bluer as you heat the body, then falls back toward zero in the ultraviolet. The Sun's surface at about 5800 K peaks in the visible; that is no accident — our eyes evolved tuned to the star we live beside.

So the data were clean and reproducible. The challenge was theory. What does classical physics predict?

<div class="sim" data-sim="blackbody"></div>

:::try See the catastrophe with your own eyes
In the simulation, the filled curve is reality — Planck's law — and the dashed red curve is the classical Rayleigh–Jeans prediction. Make sure **Show classical (Rayleigh–Jeans)** is on. Now look at what the dashed curve does as you move toward short wavelengths (the left side): instead of turning over and coming back down like the real curve, it shoots *up off the top of the plot*, heading for infinity. That run-away is the ultraviolet catastrophe — classical physics demanding more and more energy from shorter and shorter waves, without limit. Slide the temperature up and down: the real (filled) curve obeys the data, peaking and growing sensibly, while the classical curve always diverges. The whole quantum revolution lives in the gap between those two lines.
:::

## The catastrophe

Classical physics reasoned like this. The light in the cavity is a sum of standing waves — "modes," like the harmonics of a violin string. Thermodynamics had a cherished theorem, *equipartition*: in thermal equilibrium, every mode gets, on average, the same share of energy, $k_B T$. Count the modes, give each its fair share, add them up: that is the **Rayleigh–Jeans law**.

The trouble is *counting the modes*. There are only a few long-wavelength modes that fit in the box, but as you go to shorter and shorter wavelengths, you can pack in more and more — without limit. Short-wavelength modes are essentially infinite in number. Hand each of that infinity its equal portion $k_B T$ of energy, and the total energy radiated is infinite, concentrated at the short-wavelength (ultraviolet) end. The predicted intensity rises as $1/\lambda^4$ and never turns over:

$$ I_{\text{RJ}}(\lambda) \propto \frac{T}{\lambda^4}. $$

It matched the data at long wavelengths and then diverged spectacularly toward the blue. This was not a small discrepancy to be patched. It was classical physics, applied honestly, predicting that every warm object in the universe should instantly radiate infinite energy. The catastrophe was a flat contradiction between two pillars — electromagnetism and thermodynamics — and the plain fact that ovens are safe to stand near.

## Planck's desperate act

Into this walked Max Planck in 1900. A deep conservative who revered classical thermodynamics, Planck wanted nothing less than to overthrow it. He just wanted a formula that fit the measured curve. Working partly backward from the data, he found one — the **Planck law** — that bent gracefully over at short wavelengths and matched experiment at every temperature.

But a fitting formula is not physics until you can derive it. And when Planck tried, he found he could get his formula *only* by making an assumption he called, in his own words, "an act of desperation." He had to suppose that each mode (each oscillator in the cavity wall) could not absorb or emit energy in any amount it liked. It could only exchange energy in discrete lumps — **quanta** — of size proportional to its frequency $f$:

$$ E = h f, $$

where $h$ is a tiny new constant of nature, **Planck's constant**, $h \approx 6.6 \times 10^{-34}\ \text{J}\cdot\text{s}$.

See what this does to the catastrophe. The high-frequency (short-wavelength) modes now demand a *large* quantum, $hf$, just to get started. At ordinary temperatures there simply isn't enough thermal energy to pay that entrance fee, so those modes stay dark — they get *frozen out*. Equipartition's promise that every mode receives $k_B T$ silently fails: the expensive modes get almost nothing. The infinity is cured at its source. The curve turns over. The catastrophe is gone.

:::history The reluctant revolutionary
Planck did not believe he had discovered anything fundamental. He thought $E = hf$ was a mathematical trick, a temporary scaffolding to be removed once someone found a proper classical derivation. He spent years trying to *un*-discover quantisation, to make $h$ go away. It never went away. Planck had stumbled, against his own wishes, onto the single most important idea of twentieth-century physics — and he knew it troubled the foundations far more than he was comfortable admitting.
:::

## Einstein takes the quantum seriously

Planck quantised the *oscillators in the walls*. He still imagined light itself as a smooth classical wave. It was **Einstein**, in 1905, who took the radical step Planck had flinched from: maybe light itself comes in quanta. Maybe a beam of light is a hail of discrete energy packets — **photons** — each carrying $E = hf$.

Einstein's evidence was the **photoelectric effect**: shine light on a metal and it ejects electrons, but only if the light's *frequency* is high enough, no matter how bright a low-frequency beam you use. A wave picture cannot explain this — a bright wave should always, eventually, shake an electron loose. A particle picture explains it instantly: one photon kicks out one electron, and a low-frequency photon ($E = hf$ too small) simply can't deliver the needed punch, however many of them arrive. This won Einstein his Nobel Prize and made the quantum unavoidable. Light was both wave *and* particle. The classical world had cracked open.

:::key Believe the data, even when it breaks your theory
The ultraviolet catastrophe is the cleanest case of a precise measurement detonating a complete, beloved theory. Classical physics didn't disagree with the blackbody curve by a hair — it disagreed by *infinity*, and the experiment was right. Planck's lesson is humbling and exact: when a careful measurement contradicts your most cherished principles, the measurement wins. Sometimes the only way out is an idea so strange that even its inventor refuses to believe it. The seventh decimal was, this time, the whole spectrum — and it gave us the quantum age.
:::

<div class="quiz" data-quiz="disc-blackbody"></div>
