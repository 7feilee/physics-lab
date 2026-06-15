Imagine trying to analyse a car crash with $F = ma$. The forces are enormous, last only milliseconds, and vary wildly from instant to instant. Hopeless. Yet there is a single number you can write down *before* the crash and read off *after* it, and it will be exactly the same — no matter how complicated the mangling in between. That number is **momentum**, and conservation laws like this one are physics' greatest shortcut: they let you ignore the messy middle entirely.

## Momentum: mass in motion

The momentum of an object is its mass times its velocity:

$$ \vec{p} = m\vec{v}. $$

It's a vector — it points the way the motion points. A loaded truck rolling slowly and a bullet flying fast can carry the *same* momentum, because momentum trades mass against speed. Intuitively, momentum measures how hard something is to stop: both the truck and the bullet demand a serious effort to bring to rest, for different reasons.

Newton actually wrote his Second Law in terms of momentum, and that original form is more general than $F=ma$:

$$ \vec{F} = \frac{\d \vec{p}}{\d t}. $$

Force is the *rate of change of momentum*. When mass is constant this reduces to $F = ma$, but the momentum form survives even when mass changes — which, as we'll see, is exactly what a rocket needs.

## Conservation, straight from Newton's Third Law

Here's the beautiful part. Take two objects — call them A and B — that collide. During the collision A pushes on B with some force, and by **Newton's Third Law** B pushes back on A with an equal and opposite force, at every instant. Equal and opposite forces, acting for the same duration, produce equal and opposite *changes in momentum*. So whatever momentum A gains, B loses, exactly. The **total** momentum of the pair is unchanged:

$$ \vec{p}_{\text{before}} = \vec{p}_{\text{after}}. $$

This is the **law of conservation of momentum**, and notice it isn't a new postulate — it falls straight out of the Third Law. The only condition is that no *external* force acts on the system (internal forces always cancel in pairs). For a brief, violent collision, the internal forces are so huge that external ones like friction or gravity are negligible over those few milliseconds, so momentum is conserved to excellent accuracy.

:::key The accountant's trick
Conservation laws let you connect "before" to "after" without knowing anything about the "during." You never need the collision forces, the contact time, or the deformation — just add up momentum before, set it equal to momentum after, and solve. This is why momentum is the tool of choice for collisions and explosions.
:::

## Impulse: changing momentum on purpose

Rearrange the force law over a time interval and you get the **impulse–momentum theorem**:

$$ \vec{F}\,\Delta t = \Delta \vec{p}. $$

The left side, force times the time it acts, is the **impulse**. To produce a given change in momentum, you can use a big force for a short time *or* a small force for a long time — the product is what matters. This one idea quietly saves lives.

A car crash must bring you from highway speed to zero — a fixed change in momentum, $\Delta p$. You can't change that. But you *can* change $\Delta t$, the time over which it happens. An **airbag** and a **crumple zone** stretch the stopping out over a tenth of a second instead of a thousandth, and since $F = \Delta p / \Delta t$, lengthening the time slashes the force on your body. The same logic explains why you bend your knees when you land, why boxers "roll with" a punch, and why catching an egg in your moving hands beats catching it against a brick wall.

:::note A number that surprises people
Stopping a 70 kg passenger from 30 m/s means absorbing $\Delta p = 70 \times 30 = 2100\ \text{kg}\cdot\text{m/s}$. Do it in 0.001 s against a rigid dashboard and the average force is over two million newtons. Do it in 0.1 s against an airbag and it drops to about 21,000 N — survivable. Same $\Delta p$, hundred-fold gentler force.
:::

## Elastic and inelastic collisions

Momentum is *always* conserved in a collision. **Kinetic energy** — the energy of motion, $\tfrac{1}{2}mv^2$ — is not. This gives us two clean extremes:

- **Elastic collision:** kinetic energy is also conserved. Nothing is permanently deformed and no heat is generated. Billiard balls and gas molecules come close. Famously, when a moving ball strikes an identical stationary one head-on, the first stops dead and the second takes off with its entire velocity — the only outcome that conserves both momentum *and* energy.
- **Inelastic collision:** kinetic energy is lost — to heat, sound, and bending metal — even though momentum is untouched. In a **perfectly inelastic** collision the objects stick together and move off as one. Clay balls, train cars coupling, a crash where the cars crumple into each other.

Play with the simulation below. Set the masses and speeds, switch between elastic and sticky collisions, and watch that the total momentum arrow always comes out the same length — even when the bounciness changes everything else.

<div class="sim" data-sim="collisions"></div>

:::try Conserved no matter what
Run a head-on collision as fully elastic, then make it perfectly inelastic so the objects stick. The final velocities are wildly different — but check the total momentum before and after in each case. It's identical. Momentum doesn't care whether energy was lost; that's what makes it so dependable.
:::

## Rockets: throwing mass to go forward

A rocket is conservation of momentum made into an engine, and it needs the momentum form of Newton's law because its mass is dropping every second. The system — rocket plus fuel — starts with zero momentum sitting on the pad. The engine flings exhaust gas *backward* with a lot of momentum, so the rocket must gain an equal momentum *forward* to keep the total at zero. No air, no ground, nothing to push against is required; the rocket pushes against its own ejected fuel. This is precisely why a rocket accelerates better in the vacuum of space than in the atmosphere.

:::history Conservation predates Newton's calculus
The principle that "quantity of motion" is conserved was glimpsed by Descartes and sharpened by Huygens and Wallis studying collisions in the 1660s — before Newton's *Principia*. Newton's contribution was to show *why*: it's a direct consequence of his Third Law. A conservation law and a force law turned out to be two faces of one coin.
:::

## Where this is going

Momentum is the universe's first great conserved quantity, and it solved collisions by sheer accounting. But we kept bumping into a second quantity — kinetic energy — that *sometimes* survives a collision and sometimes vanishes. Where does it go, and why is it so picky? That question opens the door to **energy**, the most powerful accounting principle in all of physics.

<div class="quiz" data-quiz="hs-momentum"></div>
