Energy is the strangest idea in physics. Richard Feynman put it bluntly: we have no picture of *what* energy is — no little blobs, no fluid. All we know is a rule. There is a certain number you can compute, and no matter what a system does — bounce, burn, fall, explode — when you recompute that number afterward, it comes out the same. Energy is not a substance; it's the universe's most rigid bookkeeping law. And that law is so powerful it solves problems force diagrams can't touch.

## Work: how energy gets transferred

You change an object's energy by doing **work** on it, and work has a precise definition: force times the distance moved *along* the force,

$$ W = F\,d \qquad (\text{force and motion in the same direction}). $$

Three subtleties hide in that little equation. First, **no motion, no work** — hold a heavy box perfectly still and you do zero physical work on it, no matter how your arms ache. Second, only the part of the force *along* the displacement counts; carrying that box horizontally does no work against gravity, because gravity points down and the motion is sideways. Third, work has a **sign**: push in the direction of motion and you add energy ($W>0$); push against it, like friction does, and you remove energy ($W<0$). The unit of both work and energy is the **joule** — one newton acting through one metre.

## Kinetic energy and the tyranny of $v^2$

Do positive work on a free object and it speeds up. The energy it gains is its **kinetic energy**, the energy of motion:

$$ KE = \tfrac{1}{2}mv^2. $$

The crucial, life-or-death feature is that **velocity is squared**. Kinetic energy doesn't scale with speed — it scales with speed *squared*. Double your speed and you don't double your energy; you **quadruple** it.

This is not academic. A car's brakes work by doing negative work — friction force times stopping distance removes the kinetic energy. Since the stopping distance must absorb all of $\tfrac{1}{2}mv^2$, **stopping distance grows as the square of speed**. Go from 30 to 60 km/h and your braking distance doesn't double, it *quadruples*. From 50 to 100, it's four times as far. Every speed-limit sign is really a statement about $v^2$, and the grim arithmetic of $v^2$ is why a modest increase in speed makes crashes so much deadlier.

:::warn The most expensive misconception on the road
"I was only going a bit faster." With kinetic energy scaling as $v^2$, a 40% increase in speed nearly *doubles* the energy that must be dissipated in a crash and the distance needed to stop. Speed feels linear to your senses but punishes you quadratically. This is the single most important number in this lesson.
:::

## Potential energy: stored work

Lift an object slowly to height $h$ and you do work $mgh$ against gravity. That work isn't lost — it's *stored*, ready to be handed back the instant you let go. We call it **gravitational potential energy**:

$$ PE = mgh. $$

Potential energy is the energy of *position* or *configuration*. A stretched spring stores it; a drawn bow stores it; water behind a dam stores it. The unifying picture: lift now, cash in later. Drop the object and gravity does positive work, converting that stored $mgh$ back into kinetic $\tfrac{1}{2}mv^2$.

## Conservation: the grand ledger

Here is the payoff. In a system with no friction, energy merely *changes form* — the total stays fixed:

$$ KE + PE = \text{constant}. $$

A roller-coaster car at the top of the first hill is nearly all potential energy. As it plunges, height converts to speed: $PE$ falls, $KE$ rises, the sum holds. At the bottom it's nearly all kinetic; climbing the next hill trades it back. You can find the speed at the bottom of *any* drop, of *any* shape of track, without solving a single force equation — just set $mgh = \tfrac{1}{2}mv^2$ and out comes $v = \sqrt{2gh}$. This is the accountant's trick again, more powerful than ever: connect start to finish through the ledger and skip everything in between.

:::key Where does the "lost" energy go?
Energy is *never* destroyed — but it does get converted into forms we can't easily reclaim, chiefly **heat**. Friction doesn't delete kinetic energy; it shreds the organised motion of a whole object into the disorganised jiggling of its molecules. The total joules are conserved; what changes is how *usable* they are. This subtle downgrade — from ordered to disordered energy — is one of the deepest themes in physics.
:::

## Collisions: watching kinetic energy escape

This is exactly the puzzle momentum left us with. In an **inelastic** collision, momentum is conserved but kinetic energy is not — so where do the joules go? They don't vanish. They convert into heat (the metal warms), sound (the bang), and the permanent work of deforming material (the crumple). Run the simulation: collide two objects elastically and the total kinetic energy survives the bounce; now make them stick together perfectly and watch the kinetic-energy total drop — that missing energy is the joules now hiding as heat and deformation, invisible but fully accounted for.

<div class="sim" data-sim="collisions"></div>

:::try Track the energy, not just the motion
Set up a perfectly inelastic collision where two equal masses moving toward each other stick and stop dead. Momentum (equal and opposite) was zero before and is zero after — conserved. But *all* the kinetic energy is gone. Where did it go? Into heat and deformation. This is energy conservation doing its honest accounting: nothing is lost, but kinetic energy was never promised.
:::

## Power: the rate of energy

Two cranes lift the same load to the same roof. Both do the identical work, $mgh$. But one does it in ten seconds and the other in two minutes. The difference is **power** — the *rate* of doing work:

$$ P = \frac{W}{t}, \qquad \text{measured in watts (1 W = 1 J/s).} $$

Power is what you're really buying with a bigger engine: not more total energy, but the ability to deliver it *faster*. A 100-watt bulb consumes 100 joules every second. Your electricity bill is in **kilowatt-hours** — a unit of *energy* (power × time), namely 1000 watts sustained for one hour, or 3.6 million joules.

:::note A useful gut-check
A fit human sustains roughly 100 W of useful output — about one light bulb's worth. Climb a 3 m flight of stairs (raising 70 kg, so $mgh \approx 2000$ J) in 2 seconds and you've briefly hit 1000 W, ten times your steady rate. That's why stairs leave you puffing: it's not the total energy, it's the *power*.
:::

## Why energy is the universe's accountant

Momentum, energy, charge — physics is full of conserved quantities, but energy is the master ledger because *every* process, mechanical or thermal or electrical or nuclear, can be priced in joules and must balance the books. Burn fuel, run a current, fuse hydrogen in the Sun: the energy is always traceable, always conserved, never created from nothing. When something seems to violate it, the right reaction is not "energy was destroyed" but "we haven't found where it went." That faith has *never* been wrong, and it's quietly led physicists to discover everything from heat to the neutrino.

## Where this is going

We've seen energy slosh between kinetic and potential forms. There's one system where it does this rhythmically, forever, trading back and forth in a perfect periodic dance — the **oscillator**. A mass on a spring, a swinging pendulum, a vibrating atom: all of them run on the constant conversion of $KE$ and $PE$, and all of them obey one elegant law. That's next.

<div class="quiz" data-quiz="hs-energy"></div>
