Rub a balloon on your hair and it sticks to the wall. Lightning leaps between cloud and ground. Your phone screen responds to a fingertip. Every one of these — and the entire chemistry of life, and the rigidity of the chair you're sitting on — traces back to a single property of matter that comes in just two kinds: **electric charge**. It is as fundamental as mass, but with a twist mass never has: it can attract *and* repel.

## Two kinds of charge

There are exactly two flavours of charge, which Benjamin Franklin arbitrarily named **positive** and **negative**. The rule of their interaction is short enough to memorise in one breath:

> **Like charges repel; opposite charges attract.**

Ordinary matter is built from positive **protons** locked in the nucleus and negative **electrons** swarming around it, in equal numbers — so most things are electrically **neutral**, their charges perfectly balanced and hidden. You don't create charge when you rub the balloon; you merely *transfer* it, scraping loose electrons from your hair onto the rubber. The hair, now short of electrons, is left positive; the balloon, with a surplus, is negative; and the two attract. Charge is measured in **coulombs** (C), and it is **conserved** — the total never changes, only moves around. It also comes in indivisible lumps: every charge is a whole-number multiple of the electron's charge, $e \approx 1.6 \times 10^{-19}$ C. You never find half an electron's worth.

## Coulomb's law: an inverse-square force

How *strong* is the attraction or repulsion? In the 1780s Charles-Augustin de Coulomb measured it and found a law of striking elegance — and striking familiarity:

$$ F = k\,\frac{q_1 q_2}{r^2}. $$

The force between two charges is proportional to the *product* of the charges and *inversely proportional to the square of the distance* between them. Here $k \approx 9 \times 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$ is a (large!) constant.

That $1/r^2$ should ring a bell — it's the *exact same mathematical form* as Newton's law of gravity. Move the charges twice as far apart and the force drops to a *quarter*; ten times as far, a hundredth. Nature reuses the inverse-square shape because it's the natural law for an influence spreading out evenly in three-dimensional space.

:::key Gravity's wild cousin
The electric force and gravity share the same $1/r^2$ form, but electricity is staggeringly stronger and it can *repel*. Between two electrons the electric repulsion is about $10^{42}$ times their gravitational attraction — a one followed by 42 zeros. The only reason gravity rules the cosmos is that positive and negative charges almost perfectly cancel over large scales, leaving gravity, which never cancels, to win by default.
:::

## The field concept: replace "spooky action"

Coulomb's law has a quietly disturbing feature. It says charge A exerts a force on charge B across empty space, *instantly*, with nothing in between. How does B "know" A is there? Newton himself was uneasy about this same problem for gravity — **action at a distance** felt, in his words, like an absurdity.

Michael Faraday's answer reshaped physics. Don't think of A reaching out to grab B. Instead, say a charge fills the space around it with an **electric field** — a condition of space itself, present at every point whether or not anything is there to feel it. A second charge, dropped into that field, responds to the field *right where it sits*, locally. The field is the messenger; nothing acts across a gap.

We define the field at a point as the force a charge would feel there, *per unit charge*:

$$ \vec{E} = \frac{\vec{F}}{q}. $$

Divide out the test charge and what remains is a property of *space*, created by the source charges alone. Multiply the field at any point by a charge you place there, $\vec{F} = q\vec{E}$, and you recover the force. The field has units of newtons per coulomb. Notice the field points the way a *positive* charge would be pushed: away from positives, toward negatives.

Explore the field around charges in the simulation. Drop down positive and negative charges and watch the field fill the space around them — then place a test charge and see it pushed along the field.

<div class="sim" data-sim="efield"></div>

:::try Read the field, predict the force
In the simulation, set up one positive and one negative charge side by side. Watch how the field arrows stream *out* of the positive and *into* the negative, bending through the space between. Now drop a positive test charge nearby and confirm it gets pushed exactly the way the arrows point. The field was there all along; the test charge just samples it.
:::

## Field lines: drawing the invisible

We picture fields with **field lines**, and they follow a strict grammar that lets you read a field at a glance:

- Lines start on **positive** charges and end on **negative** ones (or run off to infinity).
- The **direction** of a line at any point is the direction of the force on a positive charge there.
- Where lines crowd **close together**, the field is **strong**; where they spread thin, it's weak.
- Lines **never cross** — if they did, the field would point two ways at one spot, which is impossible.

A single positive charge has lines radiating outward like a sea-urchin's spines, thinning with distance — a direct picture of the inverse-square weakening. Two opposite charges (a **dipole**) have lines arcing gracefully from the positive to the negative, densest in the gap where the pull is strongest. The picture *is* the physics: the lines show you both where a charge would go and how hard it would be shoved.

:::warn Field lines are a map, not a track
A charge released in a field does **not** travel *along* a field line like a train on rails. The line tells you the direction of the *force* — hence the *acceleration* — at each point, not the path. A charge with sideways velocity will curve across the lines, exactly as a thrown ball arcs across the downward lines of gravity rather than falling straight down. Field lines give direction of push, not direction of motion.
:::

## Why bother with fields?

You might think the field is just a bookkeeping convenience — a way to compute Coulomb's law in two steps instead of one. For static charges, that's nearly true. But the field turns out to be *physically real*, with a life of its own, and here is the decisive clue: **fields carry energy, and changes in them travel at a finite speed.** Wiggle a charge and the kink in its field doesn't update everywhere at once — it ripples outward at the speed of light. That travelling disturbance in the electric (and magnetic) field *is light itself*. Action at a distance can't explain that; a field with its own dynamics can. The field isn't a fiction standing in for the "true" force between charges — it's the more fundamental thing, and the force is what we notice when a charge happens to be there to sample it.

## Where this is going

A static field just sits there exerting forces. But let charge *flow* — set those electrons marching through a wire — and the field does work, lights bulbs, spins motors. The organised motion of charge is **electric current**, and the energy it carries per charge is **voltage**. Those two ideas, and how they run through circuits, are next.

<div class="quiz" data-quiz="hs-charge"></div>
