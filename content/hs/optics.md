Light is the fastest thing in the universe and, for most of history, the most baffling. Yet a huge amount of what light *does* — how mirrors reflect, why a straw looks bent in water, how a rainbow forms, how your glasses fix your vision — follows from just two simple rules about how light travels and changes direction. We'll treat light as a stream of straight rays for now; that picture, called **geometric optics**, is wrong at the deepest level but spectacularly useful, and it explains almost everything you see.

## Reflection: the simplest rule

Light travels in straight lines until it hits something. At a smooth surface it bounces, and the bounce obeys one clean law. Measuring angles from the **normal** (the line perpendicular to the surface):

$$ \theta_{\text{incidence}} = \theta_{\text{reflection}}. $$

The angle in equals the angle out. That's the **law of reflection**, and it's why a flat mirror gives you a faithful image: every ray from your face reflects at a matching angle, and your brain traces the reflected rays back to a virtual "you" standing the same distance behind the glass.

The same law explains why a still pond mirrors the sky while a rough wall does not. Both reflect — but a smooth surface reflects parallel rays *together* (specular reflection, giving an image), while a rough surface scatters them every which way (diffuse reflection, giving you a visible but image-less surface). You see this page by diffuse reflection; you see yourself in a mirror by specular reflection. Same law, different roughness.

## Refraction: light changes speed

Now the interesting part. When light passes from one medium into another — air into glass, air into water — it *bends*. This is **refraction**, and the reason behind it is the single most important idea in this lesson: **light travels at different speeds in different materials.**

In vacuum light goes at $c \approx 3 \times 10^8$ m/s, the cosmic speed limit. In water it slows to about three-quarters of that; in glass, to about two-thirds. We capture this with the **refractive index** $n$, the factor by which a material slows light:

$$ n = \frac{c}{v_{\text{in material}}}. $$

Air is $n \approx 1.0$, water $1.33$, glass about $1.5$, diamond a hefty $2.4$.

:::key Why bending follows from slowing
Picture a column of marching soldiers crossing from pavement onto mud at an angle. The first soldiers to reach the mud slow down while their comrades on pavement keep their pace — so the line *pivots*, swinging to a new direction. Light does exactly this. The side of the wavefront that enters the slow medium first lags behind, and the whole beam swings toward the normal. Refraction isn't a force pushing the light; it's the geometric consequence of one edge slowing before the other. Speed change *is* the cause of bending.
:::

The precise amount of bending is **Snell's law**:

$$ n_1 \sin\theta_1 = n_2 \sin\theta_2. $$

Going into a *slower* (higher-$n$) medium, light bends *toward* the normal; coming out into a *faster* medium, it bends *away*. This is why a straw in a glass of water looks broken at the surface, why a pool is always deeper than it appears (the light from the bottom bends away from the normal as it leaves the water, fooling your eye), and why objects underwater seem closer than they are.

## Total internal reflection: trapping light

Here's where it gets useful. When light travels from a slow medium toward a fast one — say from glass *out* into air — it bends away from the normal. Increase the angle of incidence and the refracted ray bends ever closer to the surface itself. At a special **critical angle**, the refracted ray would bend a full 90° and skim along the boundary. Push past that angle and refraction becomes impossible — the light has nowhere to go but back. *All* of it reflects internally, with no leakage at all. This is **total internal reflection**.

It's a near-perfect mirror with no silvering required, and it's the engine of the modern world's information. **Fibre-optic cables** are hair-thin strands of ultra-pure glass; light fired in at a shallow angle hits the walls beyond the critical angle and bounces, trapped, all the way down the fibre — kilometres of pulses carrying the entire internet across oceans, with almost none escaping. The sparkle of a cut **diamond** is the same effect: its very high index gives a tiny critical angle, so light that enters bounces around inside many times before finally escaping, ablaze.

## Dispersion: splitting white light

White light is a mixture of all colours, and here's the subtlety textbooks often skip: the refractive index depends *slightly* on colour. Glass slows violet light a touch more than red. So when white light refracts through a prism, each colour bends by a slightly different amount, and the single white beam fans out into a spectrum — red bent least, violet most. This colour-dependent bending is **dispersion**.

A **rainbow** is dispersion staged by millions of raindrops. Sunlight enters each spherical drop, refracts (splitting into colours), reflects off the back of the drop by total internal reflection, and refracts again on the way out — emerging as a fan of colours. Every drop sends a different colour to your eye depending on its position in the sky, and the net effect, summed over countless drops, is the familiar arc: red on the outside, violet on the inside, always centred on the point directly opposite the Sun.

:::history Newton and the nature of colour
Before Newton, people thought a prism *added* colour to plain white light, staining it like a window. Around 1666 Newton proved otherwise with a decisive experiment: he passed the spectrum from one prism through a second, recombining the colours back into *white*, and isolated single colours that a prism could no longer split. Colour, he showed, is *already in* the white light — the prism merely sorts it. White is the mixture; the rainbow is the sorting.
:::

## Lenses, briefly

A **lens** is a piece of glass shaped to refract every incoming ray by just the right amount to do something useful. A **converging** (convex) lens, thicker in the middle, bends parallel rays inward to meet at a **focal point** — this is how a magnifying glass concentrates sunlight to a burning dot, and how a camera or your eye gathers a scene onto a sensor or retina. A **diverging** (concave) lens, thinner in the middle, spreads rays apart.

Your eye is a living lens that focuses images onto your retina, with muscles that flex it to focus near or far. When the geometry is slightly off — eyeball too long or too short — the image forms in front of or behind the retina, and the world blurs. **Glasses** and **contact lenses** simply add the exact extra refraction needed to nudge the focus back onto the retina: diverging lenses for the short-sighted, converging lenses for the long-sighted. Refraction, the same effect that bends a straw, is what lets billions of people see clearly.

:::warn Rays are a useful lie
Treating light as straight rays explains mirrors, lenses, and rainbows beautifully — but it's only an approximation. Light is fundamentally a *wave*, and at small scales it diffracts around edges and interferes with itself, behaviours no ray picture can produce. The sharp shadows and clean focal points of geometric optics are what you get when the wavelength is tiny compared to everything else. Push to fine enough scales and the ray picture dissolves into the wave picture — and, as we're about to see, into something stranger still.
:::

## Where this is going

Geometric optics treats light as rays; wave optics treats it as waves. Both work brilliantly in their domains — yet both are incomplete. When light meets matter at the atomic scale, it refuses to be *either* a ray or a wave, behaving instead like a stream of discrete packets of energy. That collision between the wave picture and the particle picture cracked physics open at the start of the 20th century, and it's where we head next: into the quantum world of **photons and atoms**.

<div class="quiz" data-quiz="hs-optics"></div>
