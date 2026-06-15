A planet wheeling around the Sun, a comet swinging in from the dark and slingshotting back out, the Moon held captive by the Earth — all of these are governed by a single force pointing always toward one center, with a strength falling off as the inverse square of distance. The astonishing thing is that this one-line force law produces the exact ellipses Kepler wrenched out of Tycho Brahe's data decades before Newton was born. Let's see how the full three-dimensional problem collapses, through two conservation laws, into something a student can solve — and why orbits are conic sections, no more and no less.

## A central force and two free conservation laws

A **central force** points along the line joining two bodies and depends only on their separation: $\vec F = f(r)\,\hat r$. Gravity is the headline example, $f(r) = -GMm/r^2$. Two facts fall out immediately, before any hard work.

First, **angular momentum is conserved**. The torque about the center is $\vec\tau = \vec r \times \vec F$, but $\vec F$ is parallel to $\vec r$, so the cross product vanishes. With zero torque, $\vec L = \vec r \times \vec p$ is constant — fixed in both magnitude and direction. The fixed *direction* forces the motion into a single plane perpendicular to $\vec L$. A three-dimensional problem is now two-dimensional, for free.

Second, **energy is conserved**, because gravity is conservative: $E = \tfrac12 m v^2 + V(r)$ with $V(r) = -GMm/r$. These two constants, $L$ and $E$, are the entire key to the problem.

:::key Why orbits are flat
You never need to assume planets move in a plane — it's *forced*. Angular momentum is a fixed vector, and the position must always stay perpendicular to it. A central force has no way to tip you out of that plane, so a two-body orbit is rigorously planar. This is the first and cheapest victory of conservation laws.
:::

## Reduction to a one-dimensional problem

Work in polar coordinates $(r,\theta)$ in the orbital plane. The speed splits into radial and angular pieces, $v^2 = \dot r^2 + r^2\dot\theta^2$, and the angular momentum is $L = m r^2 \dot\theta$. Solve that for $\dot\theta = L/(mr^2)$ and substitute into the energy:

$$ E = \tfrac12 m\dot r^2 + \frac{L^2}{2mr^2} + V(r). $$

Stare at this. It has the exact form of a particle moving in *one dimension* — the coordinate $r$ — under an **effective potential**

$$ V_{\text{eff}}(r) = \underbrace{\frac{L^2}{2mr^2}}_{\text{centrifugal barrier}} + \underbrace{\left(-\frac{GMm}{r}\right)}_{\text{gravity}}. $$

The first term is the **centrifugal barrier**: as $r$ shrinks, conservation of angular momentum forces faster and faster rotation, and that $\propto 1/r^2$ wall repels the particle from the center. The second is the familiar gravitational well. Their sum has a minimum — a stable circular orbit sits right at the bottom. A particle with energy just above the minimum rattles back and forth in $r$, which is exactly an orbit oscillating between a nearest point (**perihelion**) and farthest point (**aphelion**).

The energy sets the orbit's character:
- $E < 0$: trapped between two radii — a **bound, elliptical** orbit.
- $E = 0$: just barely unbound — a **parabolic** escape.
- $E > 0$: enough energy to climb out forever — a **hyperbolic** flyby.

## The orbits are conic sections

Solving the radial equation (the slick route substitutes $u = 1/r$ and differentiates with respect to $\theta$) yields a clean shape equation whose solution is

$$ r(\theta) = \frac{p}{1 + e\cos\theta}. $$

This is the polar equation of a **conic section** with one focus at the center of force. The **eccentricity** $e$ decides which conic: $e=0$ is a circle, $0<e<1$ an ellipse, $e=1$ a parabola, $e>1$ a hyperbola — precisely matching the energy cases above. The eccentricity ties directly to the conserved constants,

$$ e = \sqrt{1 + \frac{2EL^2}{m\,(GMm)^2}}, $$

so $E<0$ gives $e<1$ (ellipse), $E=0$ gives $e=1$, and $E>0$ gives $e>1$. The geometry and the dynamics are the same statement in two languages. Spin up a planet in the simulator and watch the closed ellipse emerge, the Sun sitting unmistakably at one focus, not the center:

<div class="sim" data-sim="orbit"></div>

:::try Find the focus, not the center
Start a bound orbit and trace the ellipse. The central mass is *not* in the middle — it sits at a focus, offset toward perihelion. Now nudge the speed upward at perihelion. As you cross escape speed the ellipse opens into a parabola, then a hyperbola that never returns. You are walking through Kepler's conics by hand.
:::

## Kepler's three laws

Everything Kepler extracted from observation now reads as a corollary.

**First law — orbits are ellipses with the Sun at one focus.** This is just $r(\theta)$ above with $0 < e < 1$. The off-center Sun, which baffled astronomers for a millennium, is simply the focus of the conic.

**Second law — equal areas in equal times.** The rate a planet sweeps out area is $\frac{\d A}{\d t} = \frac{L}{2m}$, and since $L$ is conserved, this rate is *constant*. The planet races through perihelion and dawdles at aphelion in exactly the proportion that keeps swept area uniform. Kepler's second law is nothing but angular-momentum conservation in disguise.

**Third law — period squared $\propto$ semi-major axis cubed.** Integrating the area rate over one full orbit relates the period $T$ to the ellipse's semi-major axis $a$:

$$ T^2 = \frac{4\pi^2}{GM}\, a^3. $$

The proportionality constant depends only on the central mass $M$, not on the orbiting body — which is why this one formula lets astronomers weigh the Sun, weigh Jupiter from its moons, and weigh the black hole at the galactic center from the stars whipping around it.

:::history Kepler's war on Mars
Kepler spent the better part of a decade wrestling Tycho's Mars observations, at one point discarding a circular model that fit to within eight arcminutes because he trusted the data more than the dogma. Those eight arcminutes drove him to the ellipse. He published the first two laws in 1609 and the third in 1619 — pure empirical pattern, with no idea *why*. Newton supplied the why in 1687: the inverse-square law and these laws are mathematically the same fact.
:::

## Vis-viva and escape velocity

Combining energy conservation with the geometry of the ellipse gives a single equation relating speed to position — the **vis-viva** ("living force") equation:

$$ v^2 = GM\left(\frac{2}{r} - \frac{1}{a}\right). $$

It is enormously practical: it gives a spacecraft's speed at *any* point of *any* orbit knowing only the current distance $r$ and the semi-major axis $a$. At perihelion $r$ is small and $v$ is large; at aphelion the reverse.

Push $a \to \infty$ and the orbit becomes unbound — the threshold of escape. Setting $1/a = 0$ leaves $v^2 = 2GM/r$, so the **escape velocity** from distance $r$ is

$$ v_{\text{esc}} = \sqrt{\frac{2GM}{r}} = \sqrt{2}\; v_{\text{circular}}. $$

Escape speed is exactly $\sqrt2$ times the speed of a circular orbit at the same radius — a tidy factor worth remembering. For Earth's surface it works out to about $11.2\ \text{km/s}$. Notice escape velocity does not care which *direction* you launch (ignoring the atmosphere and the ground): energy is a scalar, and all that matters is having enough of it to climb out of the well to infinity, where both kinetic and potential energy vanish together.

From one inverse-square force, two conservation laws, and a single radial equation, the entire architecture of the heavens unfolds — Kepler's patterns, the conics, the weighing of stars, and the arithmetic of every spacecraft trajectory ever flown.
