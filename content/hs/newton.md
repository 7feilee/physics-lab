Kinematics told us *how* things move. Newton tells us *why*. In three deceptively short statements published in 1687, he gave us the rules that govern everything from a rolling marble to the orbit of the Moon — and, remarkably, the same three rules cover all of them. The genius isn't in their complexity; it's in their reach.

## The First Law: the law of inertia

> An object continues at rest, or in uniform straight-line motion, unless acted on by a net external force.

Read that carefully, because almost everyone gets the *default* wrong. Aristotle, and your everyday intuition, says the natural state of things is **at rest** — a pushed box stops when you stop pushing, so motion needs a continuous cause. Newton says no: the natural state is **constant velocity**, and *rest is just the special case where that velocity is zero*. The box stops because of friction, an external force you forgot to count. Remove friction — a puck on an air table, a probe coasting through deep space — and motion never needs renewing.

This stubbornness of matter is called **inertia**, and mass is its measure. A loaded shopping cart is harder to get moving *and* harder to stop than an empty one, in exactly the same proportion.

:::key What the First Law really claims
It is not a special case of the Second Law. Its real job is to assert that there *exist* frames of reference — **inertial frames** — in which free objects move in straight lines at constant speed. Everything else in mechanics is built on top of that promise.
:::

## The Second Law: $F = ma$

> The net force on an object equals its mass times its acceleration: $$\vec{F}_{\text{net}} = m\vec{a}.$$

This single equation does double duty, and that's worth slowing down for.

**As a definition,** it tells us what "force" even *means*. Force is the thing that, divided by mass, produces acceleration. Before Newton, "force" was a vague word for any push, shove, or effort; he pinned it to a number.

**As a law of nature,** it makes a falsifiable claim: the *same* force produces *half* the acceleration on twice the mass, every time, for every object, everywhere in the universe. That universality is the physics. You could imagine a cosmos where heavy things responded to force in some other ratio — ours doesn't.

Notice three things. First, it's the **net** force — the vector sum of *all* forces — that matters. A book sitting on a table has gravity pulling down and the table pushing up; they cancel, the net is zero, so $a = 0$ and it stays put. Second, $F$ and $a$ are **vectors** pointing the same direction: push north, accelerate north. Third, this is why a constant force gives constant acceleration, which is exactly the regime that made the kinematics equations work.

A quick reality check on units: one **newton** is the force that accelerates one kilogram at one metre per second squared. Your own weight, say 700 N, is gravity pulling a 70 kg body down at $g \approx 9.8\ \text{m/s}^2$ — because $F = mg = 70 \times 9.8 \approx 686\ \text{N}$.

:::warn Mass is not weight
Mass (kg) is how much *stuff* you are and never changes. Weight (newtons) is the *force* gravity exerts on that stuff, $W = mg$, and it drops to one-sixth on the Moon. An astronaut who is "weightless" in orbit still has every bit of her mass — which is why a careless bump still hurts.
:::

## Free-body thinking

The Second Law is only useful once you can list the forces, and the tool for that is the **free-body diagram**: isolate one object, draw it as a dot, and sketch *every* force acting **on** it as an arrow — and nothing else. No forces the object exerts on other things, no imaginary "force of motion."

The discipline pays off immediately. Consider a 2 kg book pressed against a wall by a horizontal hand and not sliding. Forces on the book: gravity down, the hand's push into the wall (horizontal), the wall's normal push back out (horizontal), and friction from the wall (vertical, holding it up). The horizontal pair cancels; the vertical friction must exactly balance gravity. Once the arrows are on paper, $F=ma$ in each direction is just bookkeeping.

## The Third Law: action and reaction

> For every force, there is an equal and opposite force on the *other* body.

Forces always come in **pairs**, acting on **two different objects**. If you push on a wall with 50 N, the wall pushes back on *you* with 50 N. Lean too hard on a light door and it's you who staggers when it gives way — the door was pushing back the whole time, and when it moved, the balance vanished.

This is how a **rocket** works, and the explanation in most people's heads is wrong. A rocket does *not* push against the air or the ground. It hurls hot exhaust gas backward; by the Third Law the gas pushes the rocket forward with an equal force. That's why rockets work *better* in vacuum — no air to fight. The same logic lets you walk: your foot pushes the Earth backward, the Earth pushes you forward.

:::key Why action–reaction never cancels
The two forces in a Third-Law pair act on *different* objects, so they can never add up to zero on a single body — you can't use them to balance a free-body diagram. The wall's push on you and your push on the wall live in two separate diagrams. Confusing this pair with the *balanced* forces of the First Law is the deepest and most common error in all of Newtonian mechanics.
:::

## The frame-of-reference subtlety

There's a catch hiding in the First Law. Newton's laws hold only in **inertial frames** — frames that are themselves not accelerating. Step on the brakes and you lurch forward against your seatbelt. What pushed you? *Nothing did.* Your body, obeying the First Law, kept moving forward at constant velocity while the car decelerated beneath you. In the car's accelerating frame it *looks* like a mysterious force shoved you; physicists call these "fictitious" or **pseudo-forces** (centrifugal force is another). They're artifacts of describing motion from a non-inertial vantage point.

The honest move is always to retreat to an inertial frame — the ground, the road, the distant stars — where every acceleration has a real, identifiable force behind it, and $F = ma$ tells the truth.

## Where this is going

Three laws, and we can now analyse any system of pushes and pulls. But chasing forces moment by moment gets clumsy fast — especially in collisions, where forces are huge and brief. The next two chapters introduce **momentum** and **energy**, two quantities that Newton's laws keep *conserved*, and which let us solve problems by accounting rather than by tracking every force.

<div class="quiz" data-quiz="hs-newton"></div>
