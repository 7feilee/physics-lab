Why is energy *quantized*? Why do atoms emit only certain colors, why do electrons occupy discrete shells, why does the word "quantum" exist at all? The deepest answer is almost embarrassingly simple, and you can see it whole in the most stripped-down system in quantum mechanics: a single particle trapped between two walls. No forces, no fields, just confinement. Out of that bare constraint, discrete energy levels appear automatically — not bolted on, but forced by the same mathematics that governs a guitar string. Quantization, it turns out, is what waves *do* when you box them in.

## The setup: a particle in a box

Picture a particle confined to a one-dimensional region of length $L$, between $x=0$ and $x=L$, with walls so high the particle can never escape. This is the **infinite square well**. Inside, the potential is zero — the particle is free; outside, the potential is infinite — the particle is forbidden. Mathematically,

$$ V(x) = \begin{cases} 0 & 0 < x < L \\ \infty & \text{otherwise.} \end{cases} $$

Because the walls are infinitely high, the wavefunction must be *exactly zero* outside the box and, by continuity, exactly zero *at* the walls too. The particle simply cannot be found where the potential is infinite. These two conditions,

$$ \psi(0) = 0 \quad\text{and}\quad \psi(L) = 0, $$

are the **boundary conditions**, and they are the entire source of quantization. Hold onto that: everything discrete that follows flows from these two innocuous-looking equations.

## Solving inside the well

Inside the box $V=0$, so the time-independent Schrödinger equation is just

$$ -\frac{\hbar^2}{2m}\frac{\d^2\psi}{\d x^2} = E\,\psi, $$

which rearranges to $\psi'' = -k^2\psi$ with $k^2 = 2mE/\hbar^2$. This is the equation of a sine wave, with general solution

$$ \psi(x) = A\sin(kx) + B\cos(kx). $$

Now impose the walls. At $x=0$ we need $\psi(0)=0$, but $\cos(0)=1$, so the cosine term is forbidden: $B=0$. We're left with $\psi(x) = A\sin(kx)$. At the far wall we need $\psi(L)=0$, which means $\sin(kL)=0$. A sine vanishes only at integer multiples of $\pi$, so

$$ kL = n\pi, \qquad n = 1, 2, 3, \dots $$

There it is. The wavenumber $k$ cannot take just any value — it is *forced* onto a discrete ladder $k_n = n\pi/L$. Not because we postulated it, but because a wave pinned to zero at both ends can only fit a whole number of half-wavelengths between the walls.

:::key This is exactly a guitar string
A string clamped at both ends can vibrate only at frequencies whose half-wavelengths fit the length: the fundamental, then two humps, then three. You can't excite an "in-between" note. The particle in a box is the same physics for matter waves — the wavefunction must vanish at the walls, so only standing waves with a whole number of half-wavelengths survive. Quantization is just the harmonics of a confined wave. Music was quantized centuries before physics noticed.
:::

## Discrete energies: $E_n \propto n^2$

Each allowed $k_n$ corresponds to a definite energy through $E = \hbar^2 k^2/2m$. Substituting $k_n = n\pi/L$:

$$ E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}, \qquad n = 1, 2, 3, \dots $$

The energy is **quantized** — the particle can only have these specific values, never anything between. And the spacing is not uniform: because $E_n \propto n^2$, the levels climb as $1, 4, 9, 16, \dots$, spreading farther apart as you go up. The corresponding wavefunctions are the standing waves

$$ \psi_n(x) = A\sin\!\left(\frac{n\pi x}{L}\right), $$

with $n-1$ nodes inside the box where the particle is never found. Explore the ladder of levels and their standing-wave shapes:

<div class="sim" data-sim="particlebox"></div>

:::try Climb the energy ladder
Step up through $n = 1, 2, 3, \dots$ and watch two things. The wavefunction gains a hump each time — more wiggles mean more curvature, and curvature is kinetic energy in the Schrödinger equation, so higher $n$ costs more energy. And the gaps between levels *widen*, because $E_n$ grows as $n^2$. The particle can sit on any rung but never between them.
:::

## Zero-point energy: the box is never quiet

Look at the lowest allowed state. It is $n=1$, *not* $n=0$ — because $n=0$ would give $\psi = \sin(0) = 0$ everywhere, meaning *no particle at all*. So the minimum possible energy is

$$ E_1 = \frac{\pi^2\hbar^2}{2mL^2} > 0. $$

A confined quantum particle can *never* have zero energy. This irreducible minimum is the **zero-point energy**, and it is pure quantum strangeness — classically, a particle could just sit motionless at the bottom of the box with $E=0$. Quantum mechanics forbids stillness.

The reason is the uncertainty principle. Confining the particle to a region of size $L$ fixes its position spread at $\Delta x \sim L$, which by $\Delta x\,\Delta p \ge \hbar/2$ forces a momentum spread $\Delta p \gtrsim \hbar/L$. A spread in momentum means a spread in *speeds*, including nonzero ones, so there must be kinetic energy of order $(\Delta p)^2/2m \sim \hbar^2/mL^2$ — exactly the scale of $E_1$. You cannot pin a particle in place and also let it hold still; trying to do both violates Heisenberg. Zero-point energy is the uncertainty principle made into a number.

This has teeth. It's why liquid helium never freezes solid under its own vapor pressure even at absolute zero — the zero-point jitter is too large for the atoms to lock into a crystal. It's why the vacuum of space has a nonzero energy. And notice the $1/L^2$ scaling: shrink the box and the energy soars. Tightly confined particles are *expensive*, which is why squeezing electrons into atoms costs so much energy and why nuclei, confined to a region a hundred-thousand times smaller, deal in energies a hundred-thousand-squared times larger.

## Normalization

The Born rule demands the particle be found *somewhere* with total probability one, which fixes the amplitude $A$. We require

$$ \int_0^L |\psi_n|^2\,\d x = A^2\int_0^L \sin^2\!\left(\frac{n\pi x}{L}\right)\d x = 1. $$

The integral of $\sin^2$ over a whole number of half-periods is exactly $L/2$, so $A^2 \cdot L/2 = 1$, giving $A = \sqrt{2/L}$. The properly **normalized** stationary states are

$$ \psi_n(x) = \sqrt{\frac{2}{L}}\,\sin\!\left(\frac{n\pi x}{L}\right). $$

Normalization isn't a technicality — it's what makes $|\psi|^2$ a genuine probability density rather than an arbitrary curve, and it's why $\sqrt{2/L}$ appears: a longer box spreads the same unit of probability over more space, lowering the density everywhere.

:::note Where the classical world hides
Crank $n$ very high and the bumps of $|\psi_n|^2$ crowd so close together they blur into a nearly uniform smear across the box — exactly the classical prediction that a fast particle bouncing between walls is equally likely to be anywhere. This is the **correspondence principle**: quantum results melt into classical ones at large quantum numbers. The discreteness never goes away; it just becomes too fine to notice, which is why we never see quantization in a tennis ball, whose effective $n$ is something like $10^{30}$.
:::

The particle in a box is a cartoon — no real well has infinite walls — but it captures the essential machinery exactly. Confine a wave, demand it vanish at the boundaries, and a discrete spectrum of energies falls out for free, complete with an irreducible zero-point. Quantization was never an extra postulate; it is simply what waves do when the world boxes them in. Every atomic spectrum, every electron shell, every laser line is this same standing-wave arithmetic, dressed up in three dimensions.
