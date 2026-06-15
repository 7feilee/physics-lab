Nature loves to repeat itself. A plucked guitar string, a child on a swing, the quartz crystal keeping time in your watch, the atoms vibrating in every solid around you — all of them do the same thing, the same way, governed by the same equation. When you understand the **simple harmonic oscillator**, you've understood the single most universal pattern of motion in physics. And the reason it's so universal is almost suspiciously simple.

## The one ingredient: a restoring force

Pull a mass on a spring to the right and the spring pulls it back left. Push it left and the spring pushes back right. The force always points *toward* the resting position, and — this is the magic — its strength is *proportional to how far you've displaced it*. That's **Hooke's law**:

$$ F = -kx. $$

The minus sign is the entire story. It says: *the force always opposes the displacement.* The $k$ is the spring's stiffness. Displace the mass and it accelerates back toward home; but it overshoots, builds an opposing displacement on the other side, gets pulled back again, and overshoots once more. The result is endless oscillation. Any system with a force obeying $F = -kx$ performs **simple harmonic motion (SHM)** — a smooth, sinusoidal back-and-forth.

:::key Why SHM is everywhere
*Any* stable equilibrium, looked at closely enough, behaves like $F = -kx$. Zoom in on the bottom of almost any energy valley and it looks like a parabola, whose force is a straight line through the origin — exactly Hooke's law. That's why springs, pendula, molecular bonds, and bridges all oscillate the same way near their resting points. SHM isn't a special case; it's what *every* small wobble defaults to.
:::

## The period: how the clock keeps time

For a mass $m$ on a spring of stiffness $k$, working through Newton's law gives a period — the time for one complete cycle — of

$$ T = 2\pi\sqrt{\frac{m}{k}}. $$

Read the physics in it. A **heavier** mass swings *slower* (more inertia, more sluggish), so $m$ is on top. A **stiffer** spring snaps back harder, so it oscillates *faster*, putting $k$ on the bottom. And notice what's gloriously *absent*: the **amplitude**. How far you pull the mass back doesn't appear at all.

## Amplitude independence: the surprise that built clocks

This deserves a full stop. Pull the mass back a little or a lot — *the period is the same.* A bigger pull means a longer journey each cycle, but it also means a bigger restoring force, hence higher speeds, and the two effects cancel exactly. Big swings and small swings take the same time.

Legend says Galileo noticed this watching a cathedral lamp sway, timing it against his own pulse: as the draughts died down and the swings shrank, each swing still took the same number of heartbeats. That single observation made the **pendulum clock** possible.

## The pendulum

A pendulum is a mass on a string of length $L$, and for *small* swings it too is a simple harmonic oscillator with

$$ T = 2\pi\sqrt{\frac{L}{g}}. $$

Two facts leap out, and both are genuinely strange. First, the period depends only on the **length** and on **gravity** — *not on the mass*. A heavy bob and a light bob on equal strings keep identical time, because gravity accelerates all masses equally (the same fact behind free fall). Second, the amplitude is again missing. A grandfather-clock pendulum about 1 metre long has a period close to 2 seconds — try it: $T = 2\pi\sqrt{1/9.8} \approx 2.0$ s.

Set the pendulum below swinging at different amplitudes and lengths, and watch the period for yourself.

<div class="sim" data-sim="pendulum"></div>

:::try Test the two claims
First swing the pendulum gently, then pull it back much further, and compare the time per swing — nearly identical, as long as the angle stays modest. Then change the mass of the bob: the period doesn't budge. Now change the *length* and watch the period shift. Length and gravity rule the clock; mass and amplitude are bystanders.
:::

:::warn "Simple" has fine print
The amplitude independence is only *approximately* true, and only for **small angles** (below roughly 15°). The pendulum's true restoring force depends on $\sin\theta$, not $\theta$, and for small angles $\sin\theta \approx \theta$ — which is precisely what makes the force proportional to displacement. Swing it hard, near horizontal, and the approximation breaks: large swings actually take slightly *longer*. Perfect SHM is the small-angle idealisation.
:::

## Energy: the endless trade

An oscillator is a perpetual energy exchange — exactly the $KE \leftrightarrow PE$ dance from the energy chapter, now made rhythmic. At the extremes of the swing the mass is momentarily at rest: zero kinetic energy, maximum potential energy (a fully stretched spring, or a raised pendulum bob). At the centre it whips through at top speed: maximum kinetic, minimum potential. The total stays constant, sloshing back and forth twice per cycle:

$$ E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}mv_{\max}^2, $$

where $A$ is the amplitude. The energy is proportional to amplitude *squared* — a swing twice as wide stores four times the energy. In a real oscillator, friction and air drag slowly drain this energy to heat, and the amplitude decays. We call that **damping**; it's why a real pendulum eventually stops, and why your car has shock absorbers that *deliberately* damp the bounce of the springs.

## Resonance: pushing at the right moment

Every oscillator has a **natural frequency**, $f = 1/T$ — its favourite rate of vibration. Now push it rhythmically. If your pushes are timed to match that natural frequency, each one arrives just as the system is ready to receive it, and the energy you add accumulates cycle after cycle. The amplitude grows enormously. This is **resonance**.

You used it every time you pumped a swing as a child — small, perfectly-timed pushes building to a thrilling arc. It's how a radio tunes to one station out of hundreds, how an opera singer can shatter a wine glass by sounding its natural pitch, and how a microwave oven heats food by driving water molecules near their resonant frequency. It also has a dark side: soldiers break step crossing footbridges, because a marching rhythm that hits a bridge's natural frequency can drive its oscillations to destruction.

:::history The Tacoma Narrows lesson
In 1940 the Tacoma Narrows Bridge in Washington twisted itself apart in a 64 km/h wind. The popular "resonance" label is a simplification — the real culprit was a wind-driven *self-amplifying* oscillation called aeroelastic flutter — but the moral stands: feed energy into an oscillator in time with its own motion and the amplitude can grow without obvious limit, until something gives.
:::

## Where this is going

A single oscillator just sits there and vibrates. But couple many oscillators together — a row of masses on springs, the molecules of air, the particles of a string — and a disturbance in one can pass to the next, and the next. The vibration *travels*. That travelling, self-propagating oscillation is a **wave**, and it carries the rhythm of SHM across space. That's where we go next.

<div class="quiz" data-quiz="hs-shm"></div>
