Lagrangian mechanics gave us a single scalar, $L(q,\dot q)$, from which all of dynamics flows. Hamiltonian mechanics performs a sly change of variables on it — trading velocities for momenta — and in doing so reveals a hidden geometric arena where mechanics looks almost like fluid flow. This **phase space** is where classical mechanics goes to meet statistical mechanics and quantum theory. The equations get more symmetric, the conservation laws get more transparent, and a remarkable theorem about *volume* emerges that underwrites the entire foundation of thermodynamics.

## The Legendre transform: from velocity to momentum

In the Lagrangian picture the natural variables are the coordinate $q$ and its velocity $\dot q$. Hamilton's idea is to replace $\dot q$ with the **conjugate momentum**

$$ p = \frac{\partial L}{\partial \dot q}. $$

For a free particle $L = \tfrac12 m\dot q^2$, this gives $p = m\dot q$ — ordinary momentum. But the definition is more general: the momentum conjugate to an angle is an *angular* momentum, the momentum conjugate to a field is a field momentum. The quantity $p$ is whatever the Lagrangian says it is.

Why bother? Because we want a function of $(q,p)$ rather than $(q,\dot q)$, and you cannot simply substitute — that would lose information. The clean way to swap an active variable for its slope is the **Legendre transform**. Define the **Hamiltonian**

$$ H(q,p) = p\,\dot q - L(q, \dot q), $$

where on the right you eliminate $\dot q$ in favor of $p$ using $p=\partial L/\partial \dot q$. For the standard $L = T - V$ with $T = \tfrac12 m\dot q^2$, a short computation gives the payoff:

$$ H = \tfrac12 m \dot q^2 + V = T + V. $$

The Hamiltonian is the **total energy**, now expressed in terms of position and momentum. The minus sign of the Lagrangian has flipped to a plus.

:::key Two functions, two jobs
$L = T - V$ is the thing you integrate to get the action; its minus sign encodes the kinetic–potential trade-off along a path. $H = T + V$ is the total energy; it generates time evolution. They are Legendre transforms of each other, the same physics seen through conjugate variables — like a curve described by its points versus by its tangent lines.
:::

## Hamilton's equations

Substituting the Legendre transform into the Euler–Lagrange equation and computing the differential $\d H$ both ways, the single second-order equation of Lagrange splits into **two first-order equations**, beautifully symmetric:

$$ \dot q = \frac{\partial H}{\partial p}, \qquad \dot p = -\frac{\partial H}{\partial q}. $$

Read them out loud. The first says the rate of change of position is the slope of the energy with respect to momentum — for $H = p^2/2m + V$, it gives $\dot q = p/m$, the definition of momentum restated. The second says the rate of change of momentum is *minus* the slope of energy with respect to position — that is $\dot p = -\,\d V/\d q$, which is force equals minus the gradient of potential. So Hamilton's two equations together are exactly Newton's second law, factored into halves.

The aesthetic gain is the near-perfect antisymmetry between $q$ and $p$. They are no longer master (position) and servant (velocity); they are *partners*, and many transformations mix them freely. This symmetry is the seed of everything that follows.

## Phase space and flow

A system of $n$ degrees of freedom is a point in a $2n$-dimensional **phase space** with axes $(q_1,\dots,q_n,p_1,\dots,p_n)$. A single point encodes the *complete state* — give me position and momentum, and Hamilton's equations determine the entire future and past. As time runs, the point traces a curve, and the family of all such curves is the **Hamiltonian flow**.

Take the harmonic oscillator, $H = \frac{p^2}{2m} + \tfrac12 m\omega^2 q^2$. Energy conservation means $H = E$ is constant, so each trajectory lies on a curve of fixed $H$ — an **ellipse** in the $(q,p)$ plane. The system orbits this ellipse forever, fast where the ellipse is steep, slow where it is flat. The whole plane fills with nested ellipses, one per energy. You can read the dynamics off the geometry without solving anything: closed curves mean oscillation, open curves mean escape, fixed points are equilibria.

:::note Phase space is not configuration space
A pendulum's *configuration* is one number, the angle. Its *phase space* is two-dimensional, angle and angular momentum, and it is the phase-space picture that is dynamically complete. Knowing only the angle, you cannot say which way the pendulum is about to swing. State means position **and** momentum, always.
:::

## Liouville's theorem: phase-space volume is conserved

Here is the jewel. Imagine not a single state but a little *blob* of nearby states — a cloud of points filling a small region of phase space, representing our uncertainty about the system. As each point flows along Hamilton's equations, the blob drifts and distorts, stretching in some directions and squeezing in others. **Liouville's theorem** says that through all this contortion, the blob's *volume never changes*.

The proof is a one-liner with the right tools. The flow has a velocity field $(\dot q, \dot p)$ in phase space; volume is preserved if and only if that field is divergence-free. Compute it:

$$ \frac{\partial \dot q}{\partial q} + \frac{\partial \dot p}{\partial p} = \frac{\partial}{\partial q}\frac{\partial H}{\partial p} + \frac{\partial}{\partial p}\!\left(-\frac{\partial H}{\partial q}\right) = \frac{\partial^2 H}{\partial q\,\partial p} - \frac{\partial^2 H}{\partial p\,\partial q} = 0. $$

The mixed partial derivatives cancel identically. The phase-space flow is **incompressible**, exactly like an ideal fluid. A region may smear into a wild filamentary tendril, but you can never compress the cloud into a smaller volume, nor inflate it into a larger one.

This is not a minor curiosity. It is the bedrock of **statistical mechanics**: it justifies treating phase space as having a natural, conserved measure, so that "counting states" by phase-space volume is consistent over time. The microcanonical ensemble — equal probability for all microstates of a given energy — is sensible *only because* Liouville guarantees that uniform density stays uniform under evolution.

## Conserved quantities, made obvious

The Hamiltonian formalism reads off conservation laws almost by inspection. If $H$ does not depend explicitly on time, then $H$ itself — the energy — is conserved, since $\frac{\d H}{\d t} = \frac{\partial H}{\partial t}$ along any trajectory. And if a particular coordinate $q_k$ is absent from $H$ (a **cyclic** coordinate), then immediately

$$ \dot p_k = -\frac{\partial H}{\partial q_k} = 0, $$

so its conjugate momentum is constant. A Hamiltonian that ignores your angular position conserves angular momentum; one that ignores your linear position conserves linear momentum. Symmetry visibly *equals* conservation. This is captured compactly by the **Poisson bracket**: a quantity $f(q,p)$ is conserved exactly when $\{f, H\} = 0$, an algebraic structure that translates with almost no change into quantum mechanics.

:::deep The bridge to quantum mechanics
Replace the Poisson bracket $\{f,g\}$ with the commutator $\frac{1}{i\hbar}[\hat f,\hat g]$, and let phase-space functions become operators. Hamilton's equation $\dot f = \{f,H\}$ becomes the Heisenberg equation $\dot{\hat f} = \frac{1}{i\hbar}[\hat f,\hat H]$. Position and momentum, partners in classical phase space, become conjugate operators that fail to commute by exactly $[\hat q,\hat p]=i\hbar$. Quantum mechanics is, in a precise sense, the deformation of Hamiltonian mechanics in which phase-space cells can never be smaller than $\hbar$ — Liouville's volume becomes Heisenberg's uncertainty.
:::

Hamilton recast mechanics in 1833 hoping mainly for elegance. He could not have known that his phase space would become the stage for statistical mechanics, his brackets the skeleton of quantum theory, and his conserved energy the central object of nearly every theory since. The Legendre transform turned out to be a doorway between two of the largest rooms in physics.
