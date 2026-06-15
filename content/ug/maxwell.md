By the 1860s, electricity and magnetism were a sprawling collection of separate laws, each stitched together from a different experiment: Coulomb's force, Faraday's induction, Ampère's currents, the strange fact that magnets have no isolated poles. James Clerk Maxwell took these fragments, found a missing piece by pure consistency, and assembled four equations that together contain the *entire* classical theory of electromagnetism. Then he noticed something staggering: his equations predicted waves that traveled at the measured speed of light. Light, it turned out, *is* electromagnetism. Few moments in physics rival the unification packed into these four lines.

## The fields

Before the equations, the cast. Electromagnetism is described by two vector fields filling all of space: the **electric field** $\vec E$, which pushes on charges, and the **magnetic field** $\vec B$, which pushes on *moving* charges. The combined force on a charge $q$ is the **Lorentz force**,

$$ \vec F = q\big(\vec E + \vec v \times \vec B\big). $$

That is how the fields *act*. Maxwell's equations tell us how the fields are *made* and how they interlock. We'll meet each in words first, then in the compact vector-calculus form, where $\nabla\cdot$ (divergence) measures how much a field spreads out of a point, and $\nabla\times$ (curl) measures how much it circulates around a point.

## 1. Gauss's law: charges make diverging electric fields

Electric charges are sources and sinks of the electric field. Field lines stream outward from positive charge and into negative charge, and the total flux poking out of any closed surface is proportional to the charge enclosed:

$$ \nabla \cdot \vec E = \frac{\rho}{\varepsilon_0}. $$

Here $\rho$ is the charge density and $\varepsilon_0$ the permittivity of free space. This single equation already contains Coulomb's inverse-square law: wrap a sphere around a point charge, and because the flux is fixed but the sphere's area grows as $r^2$, the field must fall as $1/r^2$. The inverse-square law is not separate from Gauss's law — it *is* Gauss's law, applied to a point.

<div class="sim" data-sim="efield"></div>

:::try Read the field lines
Place charges and watch the field lines. They erupt from positive charge and plunge into negative charge — the visual meaning of "charge is the divergence of $\vec E$." Notice the lines never cross and crowd together where the field is strong. The density of lines through a surface *is* the flux in Gauss's law.
:::

## 2. No magnetic monopoles: $\nabla\cdot\vec B = 0$

The magnetic counterpart of Gauss's law looks almost the same — except the right-hand side is *zero*:

$$ \nabla \cdot \vec B = 0. $$

This says there are no magnetic charges. You cannot isolate a north pole. Snap a bar magnet in half and you don't get a lone north and a lone south; you get two complete magnets, each with its own north and south. Magnetic field lines never begin or end — they always form closed loops. Whatever flux of $\vec B$ enters a closed surface must exit it, with nothing left over inside.

This humble equation has profound consequences. It is *why* magnetic fields can be written as the curl of a vector potential, and the apparent absence of monopoles remains one of the genuine open puzzles of physics — grand unified theories predict they should exist, yet none has ever been found.

:::warn A magnet's "poles" are not magnetic charges
It's tempting to picture a magnet's north pole as a blob of "north stuff," the magnetic analog of positive charge. It isn't. Poles are where field lines *emerge*, but the lines continue right through the magnet's interior and close on themselves. There is no point from which $\vec B$ genuinely diverges. That is the entire content of $\nabla\cdot\vec B = 0$.
:::

## 3. Faraday's law: changing magnetism makes circulating electric fields

A changing magnetic field induces a swirling electric field — this is the principle behind every generator, transformer, and induction stovetop:

$$ \nabla \times \vec E = -\frac{\partial \vec B}{\partial t}. $$

The curl of $\vec E$ — its tendency to circulate — is driven by a time-varying $\vec B$. Push a magnet through a coil and the changing flux drives a circulating electric field that pushes current around the loop. The minus sign is **Lenz's law**: the induced effects always oppose the change that caused them, which is just energy conservation refusing to give you something for nothing. Note what's new here — an electric field with no charges anywhere, conjured purely by a changing magnetic field. The two fields have begun to talk to each other.

## 4. Ampère–Maxwell law: currents *and* changing electric fields make circulating magnetic fields

The last equation is where Maxwell earned his name. Ampère had shown that electric currents create circulating magnetic fields. But Maxwell found Ampère's law was *inconsistent* — it failed for a charging capacitor, where current flows into the plates but no current crosses the gap between them, yet a magnetic field plainly circles the gap. Something had to carry the law across the empty space.

Maxwell's fix was to add a term: a *changing electric field* acts like a current too. He called it the **displacement current**. The complete law reads

$$ \nabla \times \vec B = \mu_0 \vec J + \mu_0 \varepsilon_0 \frac{\partial \vec E}{\partial t}. $$

The first term, $\mu_0\vec J$, is Ampère's original current. The second, $\mu_0\varepsilon_0\,\partial\vec E/\partial t$, is the new piece — in the capacitor gap there is no charge flow $\vec J$, but the electric field is building up, and *that change* sources the magnetic field just as a real current would. This term completes the symmetry: a changing $\vec B$ makes $\vec E$ (Faraday), and now a changing $\vec E$ makes $\vec B$ (Maxwell).

:::key The displacement current was no mere patch
Adding $\mu_0\varepsilon_0\,\partial\vec E/\partial t$ wasn't bookkeeping to fix one awkward circuit. It closed the loop between the equations: each changing field now generates the other. That feedback is exactly what lets the fields detach from their sources and sustain *each other* as they fly off through empty space. Without this one term, there are no electromagnetic waves — no light, no radio, no warmth from the Sun.
:::

## The prediction that changed everything

Here is Maxwell's miracle. Take his equations in empty space — no charges, no currents, so $\rho = 0$ and $\vec J = 0$. Faraday's law has a changing $\vec B$ creating $\vec E$; the Ampère–Maxwell law has a changing $\vec E$ creating $\vec B$. Feed each into the other and the fields bootstrap themselves into a self-sustaining disturbance. Doing the calculus carefully, each field obeys a **wave equation**, and the wave's speed pops out of the two constants already sitting in the equations:

$$ c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}. $$

Plug in the numbers — $\mu_0$ measured from magnetic forces, $\varepsilon_0$ from electric ones, both determined in lab experiments having *nothing to do with light* — and out comes $c \approx 3.0 \times 10^8\ \text{m/s}$. That is precisely the measured speed of light. Maxwell wrote, with visible awe, that the agreement was so exact "we can scarcely avoid the inference that light consists in the transverse undulations of the same medium which is the cause of electric and magnetic phenomena."

In one stroke, optics became a branch of electromagnetism. Light, radio, X-rays, the heat from a fire — all the same phenomenon, electromagnetic waves differing only in wavelength, all racing at the speed locked into $\mu_0$ and $\varepsilon_0$.

:::history Four equations, one decade
Maxwell published his full theory in 1865, and it was so mathematically forbidding that few physicists could follow it; he wrote it as twenty coupled equations in scalar components. Oliver Heaviside later compressed them into the four elegant vector statements we use today. Heinrich Hertz then *generated and detected* the predicted waves in his lab in 1887, confirming radio waves two decades after the theory foretold them — and, in a delicious irony, declared he saw "no use whatsoever" for his discovery.
:::

Four equations. They fit on a coffee mug, they unified electricity, magnetism, and light, and they quietly contained the first hint that the speed of light is absolute — the seed from which Einstein would grow relativity. There is no better advertisement for the power of demanding that the universe be *consistent*.

<div class="quiz" data-quiz="ug-maxwell"></div>
