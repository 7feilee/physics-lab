Throw a ball and it traces a graceful arch through the air. That curve looks like it needs a complicated explanation — and for two thousand years people thought it did. The truth is almost embarrassingly simple: a projectile is just **two separate, simple motions happening at once**, glued together by sharing a clock. Pull them apart and the mystery dissolves.

## Two motions, one object

Once a projectile leaves your hand — and as long as we ignore air resistance — the *only* force on it is gravity, pointing straight down. Gravity has no horizontal component whatsoever. So:

- **Horizontally**, there is no force, so by Newton's First Law the velocity is *constant*. The ball drifts sideways at a steady rate, forever (until it lands).
- **Vertically**, there is a constant downward acceleration $g \approx 9.8\ \text{m/s}^2$. This is exactly the free-fall kinematics you already know.

The two axes don't talk to each other. They only share the time $t$. Write it all out and the position at any instant is:

$$ x = v_0\cos\theta \cdot t, \qquad y = v_0\sin\theta \cdot t - \tfrac{1}{2}g t^2, $$

where $v_0$ is the launch speed and $\theta$ the launch angle. The horizontal equation is a straight line in time; the vertical one is the same parabolic free-fall law from kinematics.

:::key Independence is the whole idea
Drop a ball and *simultaneously* fire another one horizontally from the same height. They hit the floor at the **same instant**. The fired ball's huge sideways speed buys it no extra hang time, because horizontal motion cannot affect vertical motion. If you internalise one thing about projectiles, make it this.
:::

## Why the path is a parabola

We have $x$ growing linearly with $t$ and $y$ containing a $t^2$. Solve the first for $t = x / (v_0\cos\theta)$ and substitute into the second, and the time vanishes:

$$ y = (\tan\theta)\, x - \frac{g}{2 v_0^2 \cos^2\theta}\, x^2. $$

That's of the form $y = ax - bx^2$ — a **parabola**, opening downward. Galileo was the first to prove this, and it was a genuine shock: the heavens supposedly ran on perfect circles, yet here was a humble cannonball obeying a clean, earthly curve. The same shape governs a fountain's water, a basketball's arc, and a long jumper's flight.

Drag the launch settings below and watch the parabola emerge. Notice the horizontal velocity arrow never changes length, while the vertical one shrinks, dies at the peak, and grows again on the way down.

<div class="sim" data-sim="projectile"></div>

:::try Find the peak
Launch at a steep angle and pause at the very top of the arc. The vertical velocity is exactly zero there — but the ball is *not* at rest. Its full horizontal velocity is still carrying it forward. "Momentarily at rest" only ever means *vertically* at rest.
:::

## Range, and why 45° wins

On flat ground, how far does it go? Find the flight time by asking when $y$ returns to zero, then multiply by the horizontal speed. The algebra collapses, with a trig identity, into one beautiful result:

$$ R = \frac{v_0^2 \sin(2\theta)}{g}. $$

Everything you need to know is in that $\sin(2\theta)$. Since the sine function peaks at $90°$, the range is greatest when $2\theta = 90°$, that is, when

$$ \boxed{\theta = 45°}. $$

There's a tug-of-war behind this. A *higher* angle gives more hang time (good — more seconds to travel) but a *smaller* horizontal speed (bad). A *lower* angle does the reverse. Forty-five degrees is the exact compromise that maximises the product of the two.

:::warn The 45° rule has fine print
It's optimal *only* with no air resistance and *only* when you launch and land at the same height. Real shot-putters and golfers throw at noticeably less than 45°, because air drag and the release point being above the ground both shift the optimum down. Idealised physics gives the clean rule; reality bends it.
:::

## Complementary angles hit the same spot

Look again at $\sin(2\theta)$. Because $\sin(2 \times 30°) = \sin 60° = \sin 120° = \sin(2 \times 60°)$, launching at **30°** and at **60°** gives the *identical* range. In general, any two angles that add to $90°$ — a **complementary pair** — land in the same place. The steep shot loops high and slow; the shallow shot fires low and fast; they meet at the same target. Artillery crews have known this for centuries: for any reachable target there are two firing solutions, a "low" trajectory and a "high" lob.

## The monkey and the hunter

Here is the classic puzzle that turns independence into a party trick. A hunter aims a dart *directly at* a monkey hanging from a branch. At the exact instant the dart fires, the startled monkey lets go and drops. Where should the hunter aim to hit it?

Straight at the monkey — and the monkey's clever dodge does no good at all. Here's why. If gravity didn't exist, the dart would fly in a straight line *right to the monkey*. Gravity makes the dart fall below that line by $\tfrac{1}{2}g t^2$. But gravity makes the monkey fall by *exactly the same* $\tfrac{1}{2}g t^2$ in the same time. Both drop by the identical amount, so they meet. The shared acceleration cancels out of the chase entirely.

:::key The monkey-and-hunter lesson
Gravity pulls the projectile and the target downward at the same rate, so it cancels when you compare them. This is independence of motion in its most surprising costume: aim along the *straight-line* path, and gravity quietly takes care of the rest.
:::

## Where this is going

Projectiles showed us how to break a curved motion into simple, independent pieces — and how a conserved horizontal velocity (no force, no change) makes life easy. That hint, that *some quantities just don't change*, is about to become a powerful tool. Next we meet **momentum**, a quantity that stays fixed not just for one object but for whole systems, even in violent collisions where tracking forces would be hopeless.

<div class="quiz" data-quiz="hs-projectile"></div>
