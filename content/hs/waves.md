Drop a pebble in a pond and rings spread outward. But watch a floating leaf: it bobs up and down and goes *nowhere*. This is the secret of every wave. A wave moves **energy and pattern** across space, while the medium itself just oscillates in place and stays home. Light, sound, earthquakes, the ripples on that pond, even the probability waves of quantum mechanics — all of them are this same trick, a disturbance that travels without the stuff travelling with it.

## The master equation

A wave is an oscillation that propagates. Three quantities describe it:

- **Wavelength** $\lambda$: the distance between one crest and the next.
- **Frequency** $f$: how many crests pass a fixed point each second (in hertz).
- **Speed** $v$: how fast a crest travels.

They're locked together by one relation that you'll meet again and again:

$$ v = f\lambda. $$

The logic is simple bookkeeping: if $f$ crests pass you each second and each crest is $\lambda$ apart, then a length $f\lambda$ of wave sweeps past you per second — and that's the speed. The crucial consequence: **the speed is set by the medium, not by the source.** Sound travels at about 340 m/s through air no matter the pitch. So if you raise the frequency, the wavelength *must* shrink to keep the product fixed. A high note and a low note race to your ear at the same speed; they differ in wavelength.

## Two ways to wiggle

Waves come in two flavours, distinguished by *which way* the medium oscillates relative to the wave's travel:

- **Transverse:** the medium moves *perpendicular* to the wave's direction — up and down while the wave goes sideways. A wave on a rope, ripples on water, and light are transverse.
- **Longitudinal:** the medium moves *along* the same line the wave travels, making compressions and rarefactions like a pushed Slinky. **Sound** is longitudinal — air molecules jostle back and forth in the same direction the sound is heading, squeezing and stretching the air.

:::key The leaf doesn't travel
In every wave, the medium oscillates about a fixed home and the *pattern* moves on. Sound reaching your ear is not air blown from the speaker — it's a squeeze-and-stretch pattern passing through air that, on average, stays put. Confusing the travelling pattern with travelling matter is the root misconception about waves. This is also why sound needs a medium and can't cross the vacuum of space, while light, needing none, can.
:::

## Superposition: waves add up

Here is the property that makes waves endlessly rich. When two waves overlap, the medium simply does *both at once* — the displacements **add**. This is the **principle of superposition**, and unlike colliding billiard balls, waves pass right through each other and emerge unchanged. Two conversations cross the same air without scrambling; two ripples overlap and then continue on their separate ways.

Where two crests coincide, the medium is pushed twice as far: **constructive interference**, a bigger wave. Where a crest meets a trough, they cancel: **destructive interference**, stillness. Whether you get reinforcement or cancellation at a given point depends entirely on whether the two waves arrive *in step* (in phase) or *out of step* (a half-wavelength apart).

Play with the simulation. Launch two waves and watch them pass through each other; line up their crests for a tall combined wave, then offset them by half a wavelength and watch them flatten to nothing.

<div class="sim" data-sim="waves"></div>

:::try Make a wave by adding two waves
In the simulation, overlap two waves of equal frequency travelling in *opposite* directions. Instead of a moving wave you'll get a pattern that vibrates in place — bulging fat in some spots and dead still in others. You've just built a **standing wave** out of two travelling ones. The still points are where the two cancel forever.
:::

## Standing waves and music

When a wave is trapped between two boundaries — the ends of a guitar string, the closed end of a flute — it reflects back and interferes with itself. Only waves whose wavelengths fit the length *just right* survive; the rest cancel themselves out. The survivors are **standing waves**, frozen patterns with motionless **nodes** and wildly oscillating **antinodes**.

This is why instruments make definite *notes*. A given string length permits only a specific set of frequencies — a lowest **fundamental** and its **harmonics** (integer multiples). Pluck the string and it rings out that exact recipe of frequencies; press it shorter and the permitted wavelengths shrink, so by $v = f\lambda$ the frequency rises and the pitch climbs. Every melody is the geometry of standing waves.

## Beats: when frequencies almost match

Sound two notes of *nearly* the same frequency together and something eerie happens: the loudness throbs, swelling and fading in a slow *wah... wah... wah*. These are **beats**, pure superposition in action. The two waves drift in and out of step: when momentarily in phase they reinforce (loud), when out of phase they cancel (soft). The throbbing rate is exactly the *difference* of the two frequencies:

$$ f_{\text{beat}} = |f_1 - f_2|. $$

Musicians live by this. Tune a guitar against a reference and the beats slow as you close in; when the throbbing stops entirely, the strings are in perfect unison.

## The Doppler effect

A passing ambulance siren drops in pitch the instant it passes you — high as it approaches, low as it recedes. The siren itself never changes. What changes is the *wavelength you receive*. As the source races toward you it chases its own forward crests, bunching them closer: shorter wavelength, higher frequency. Behind it, the crests are stretched apart: longer wavelength, lower frequency. This is the **Doppler effect**, and it isn't just for sound. The light from distant galaxies is shifted toward longer, *redder* wavelengths — the famous **redshift** — telling us the universe is expanding, every galaxy receding. The same physics catches speeders on radar and lets ultrasound watch blood flow.

:::history From siren to expanding universe
Christian Doppler proposed the effect in 1842 to explain star colours. He got the stellar application wrong, but the principle was right, and a century later Edwin Hubble used the Doppler redshift of galaxies to discover that the cosmos is expanding — arguably the most consequential measurement of the 20th century. A back-of-the-envelope idea about pitch grew into the story of the Big Bang.
:::

## Noise-cancelling: destructive interference for sale

Superposition can be weaponised against unwanted sound. **Noise-cancelling headphones** carry a tiny microphone that samples the droning noise around you — an aeroplane engine, say. Electronics generate a second sound wave that is the *exact inverse*: every crest of the noise is met with a trough. By superposition the two add to near-silence. It is destructive interference, manufactured on demand, dozens of times per millisecond. The same waves that can reinforce into a thunderous standing wave can also be tuned to erase each other completely — superposition cutting both ways.

## Where this is going

We've treated waves abstractly — disturbances obeying $v = f\lambda$ and superposition. But one kind of wave runs the visible world and obeys no medium at all: **light**, an electromagnetic wave. To understand where it comes from we need the electric and magnetic fields it's made of, and that begins with the humblest ingredient of electricity — **charge**.

<div class="quiz" data-quiz="hs-waves"></div>
