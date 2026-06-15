A classical bit is a switch: it sits in $0$ or $1$, and that exhausts what it can be. A **qubit** — the elementary unit of quantum information — is something genuinely richer. It is a two-level quantum system whose state lives in a continuous space of complex superpositions, and the geometry of that space turns out to be a sphere you can hold in your mind's eye. But the qubit's real power isn't that one qubit holds "more"; it's that *many* qubits can be **entangled**, woven together into joint states no collection of separate bits could ever describe. Entanglement is the resource that quantum computers spend, that quantum cryptography exploits, and that Einstein found so unsettling he called it "spooky." Let's build the qubit from the ground up.

## One qubit: the state $\alpha|0\rangle + \beta|1\rangle$

Pick any quantum system with two distinguishable states — an electron's spin up or down, a photon's polarization horizontal or vertical, two energy levels of an atom. Label them $|0\rangle$ and $|1\rangle$. By the superposition principle, the general state of the qubit is any complex combination

$$ |\psi\rangle = \alpha\,|0\rangle + \beta\,|1\rangle, $$

where $\alpha$ and $\beta$ are complex numbers called **amplitudes**. The Born rule fixes their meaning: measure the qubit in the $\{|0\rangle, |1\rangle\}$ basis and you get outcome $0$ with probability $|\alpha|^2$ and outcome $1$ with probability $|\beta|^2$. Since some outcome must occur,

$$ |\alpha|^2 + |\beta|^2 = 1. $$

This single normalization constraint already tells you the qubit is not a classical probabilistic bit. A coin biased $p$ heads, $1-p$ tails is described by *one real number*; the qubit needs *two complex numbers* subject to one constraint — and crucially, the **relative phase** between $\alpha$ and $\beta$ is physically real even though it never shows up in a single $\{|0\rangle,|1\rangle\}$ measurement. Phase is invisible to one measurement but decisive when amplitudes interfere, exactly as in the double slit.

## The Bloch sphere

Two complex numbers with one normalization constraint is four real numbers minus one. One more is unphysical: multiplying the whole state by a **global phase** $e^{i\gamma}$ changes no measurable probability, so we can throw it away. That leaves two real parameters — and they have a beautiful interpretation as angles on a sphere:

$$ |\psi\rangle = \cos\tfrac{\theta}{2}\,|0\rangle + e^{i\varphi}\sin\tfrac{\theta}{2}\,|1\rangle. $$

Every pure state of a single qubit is a point on the unit sphere — the **Bloch sphere** — at polar angle $\theta$ and azimuth $\varphi$. The north pole is $|0\rangle$, the south pole is $|1\rangle$, and the equator holds the equal superpositions like $|{+}\rangle = (|0\rangle + |1\rangle)/\sqrt 2$, differing only in the relative phase $\varphi$. Opposite points are the perfectly distinguishable (orthogonal) state pairs.

This picture pays off immediately. Quantum **gates** — the operations of a quantum computer — are *rotations* of the Bloch sphere. A bit-flip ($X$ gate, the quantum NOT) is a 180° rotation about the $x$-axis swapping the poles; a phase gate rotates about the $z$-axis, sliding the state around a circle of latitude. The continuous, geometric nature of quantum logic is right there on the sphere's surface.

<div class="sim" data-sim="bloch"></div>

:::try Steer the state around the sphere
Drag the state vector and watch the amplitudes $\alpha,\beta$ and the measurement probabilities update live. Start at the north pole ($|0\rangle$): measurement gives $0$ every time. Slide down to the equator: now it's a perfect 50/50, but rotating *around* the equator changes $\varphi$ — the relative phase — without touching those probabilities at all. That hidden phase is what interference will later cash in. Then try the poles versus the equator to feel how "definite" and "maximally superposed" sit at opposite extremes of the same geometry.
:::

## Measurement and collapse

Between measurements, a qubit evolves smoothly and reversibly — gates spin it around the sphere. Measurement is different and abrupt. Measure in the $\{|0\rangle,|1\rangle\}$ basis and the state **collapses**: with probability $|\alpha|^2$ you read $0$ and the qubit *becomes* $|0\rangle$; otherwise you read $1$ and it becomes $|1\rangle$. The superposition is destroyed, and a second measurement just confirms the first.

Two consequences are worth stressing. First, you cannot read off $\alpha$ and $\beta$ from a single qubit — one measurement yields one classical bit, and the rich continuous state is gone. To estimate the amplitudes you'd need many identically prepared copies. Second, *which* basis you measure in is your choice, and it matters: a state on the equator is sharp ("definite") if you measure along its own axis but maximally random if you measure along the pole. There is no measurement that reveals everything.

## Entanglement and Bell correlations

Now the real magic, which needs two qubits. The joint state space is spanned by $|00\rangle, |01\rangle, |10\rangle, |11\rangle$. Some two-qubit states factor into a state for each qubit separately — those are boring, classical-feeling **product states**. But most do not. Consider the **Bell state**

$$ |\Phi^+\rangle = \frac{1}{\sqrt 2}\big(|00\rangle + |11\rangle\big). $$

There is no way to write this as (something)$\otimes$(something). The qubits have no individual states of their own — only the pair has a state. This is **entanglement**. Measure the first qubit: you get $0$ or $1$ with equal probability, and *instantly* the second is determined to match, no matter how far apart they are. Each qubit alone looks like pure noise; the correlation lives entirely in the joint state.

:::warn Entanglement does not send signals
The "instant" correlation tempts everyone to imagine faster-than-light messaging. It can't be done. Alice's local results are random *whatever* Bob does, and she only discovers the correlation by comparing notes through an ordinary (light-speed-limited) channel. **Bell's theorem** sharpens the real lesson: the correlations are too strong to come from any pre-agreed "hidden variables" the particles carried from the start. Experiments — culminating in the loophole-free tests honored by the 2022 Nobel Prize — confirm Bell-inequality violations. Nature is genuinely nonlocal in its *correlations*, yet still forbids signaling. Both halves of that sentence are true.
:::

## No-cloning, and why all this is a *resource*

A final pillar: the **no-cloning theorem**. There is no physical process that takes an unknown qubit $|\psi\rangle$ and produces two copies $|\psi\rangle|\psi\rangle$. The proof is a one-liner from linearity — a cloning machine that works on $|0\rangle$ and $|1\rangle$ cannot also work on their superpositions, because copying would have to "know" the amplitudes it is forbidden to read. Unknown quantum information cannot be duplicated. That sounds like a limitation, and it is, but it is also a gift: it underwrites **quantum cryptography**, where any eavesdropper who tries to copy the key inevitably disturbs it and is caught.

Step back and the throughline is clear. Superposition gives one qubit a continuous, phase-carrying state; entanglement gives $n$ qubits a state living in a $2^n$-dimensional space that classical bits cannot represent; no-cloning protects that information; measurement is the narrow, lossy window through which we read it. These are not bugs to be engineered away — they are the *resource*. Quantum algorithms are recipes for loading a problem into entangled superpositions, letting amplitudes interfere so that wrong answers cancel and right answers reinforce, and then measuring. The qubit is where that whole story begins.

<div class="quiz" data-quiz="fr-qubits"></div>
