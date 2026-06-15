Before we can explain *why* things move, we need a precise language for *how* they move. That language is **kinematics** — the geometry of motion, stripped of any mention of forces or causes. Master it and the rest of mechanics has somewhere to stand.

## Position, velocity, acceleration

Everything starts with **position** $x$: where an object is, measured from some chosen origin. How fast position changes is the **velocity**:

$$ v = \frac{\d x}{\d t} $$

and how fast the velocity itself changes is the **acceleration**:

$$ a = \frac{\d v}{\d t} = \frac{\d^2 x}{\d t^2}. $$

These three quantities are the entire cast of characters. The subtle part is that they are *signed*: velocity tells you both speed **and** direction, and acceleration can point opposite to the motion — that's just slowing down.

:::key The single most common mistake
A large velocity does **not** mean a large acceleration, and zero velocity does **not** mean zero acceleration. At the top of its flight a tossed ball is momentarily at rest, yet gravity is accelerating it the entire time. Velocity is *where you're going*; acceleration is *how that's changing*.
:::

## Reading motion off a graph

Graphs turn calculus into something you can see with your eyes:

- On a **position–time** graph, the *slope* is the velocity.
- On a **velocity–time** graph, the *slope* is the acceleration, and the *area* underneath is the distance travelled.

That second fact — area equals distance — is secretly an integral, and it's the bridge between a velocity graph and how far something actually goes.

## Constant acceleration: the workhorse equations

When acceleration $a$ is constant (free fall near Earth's surface, a car braking evenly), the calculus collapses into four algebraic relations between initial velocity $u$, final velocity $v$, displacement $s$, and time $t$:

$$ v = u + at, \qquad s = ut + \tfrac{1}{2}at^2, \qquad v^2 = u^2 + 2as. $$

You don't memorise these so much as recognise which one fits the quantities a problem hands you. Notice the middle equation has a term linear in time and a term quadratic in time — that quadratic is what makes a dropped object cover more ground each successive second.

:::history Galileo's inclined planes
Around 1604 Galileo couldn't build a clock fast enough to time a falling body, so he *diluted gravity* by rolling balls down gentle ramps. He found the distance grew as the **square** of the time — the $\tfrac{1}{2}at^2$ law — and in doing so replaced Aristotle's "heavier falls faster" with a single law obeyed by everything.
:::

## Motion in two dimensions

Here is the idea that makes the whole subject click: **the horizontal and vertical directions are completely independent.** A bullet fired horizontally and a bullet simply dropped from the same height hit the ground at the *same instant*, because gravity acts only on the vertical motion and knows nothing about the horizontal.

Try it. Fire the projectile below at different angles and speeds, and watch how the horizontal velocity stays rock-steady while gravity quietly bends the vertical one:

<div class="sim" data-sim="projectile"></div>

:::try Predict before you drag
Set the angle to 30°, note the range, then set it to 60° and predict the range before releasing. Surprised? Angles that add up to 90° give the *same* range on flat ground — a direct consequence of the independence of horizontal and vertical motion.
:::

## Where this is going

Kinematics describes motion but never explains it. *Why* does the projectile accelerate downward at all? Why does the horizontal velocity stay constant? For that we need the concept of **force** — and Newton's three laws, which are next.

<div class="quiz" data-quiz="hs-kinematics"></div>
