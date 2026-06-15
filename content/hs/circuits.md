Flip a switch and a room floods with light, instantly, as if the energy were already waiting in the wire. In a sense it was. A circuit is a closed loop around which charge circulates, carrying energy from a source — a battery, a power station — to wherever you want it spent. The whole of practical electricity is three ideas, **current**, **voltage**, and **resistance**, and one tidy equation tying them together. Get those clear and circuits stop being mysterious boxes and become something you can reason about.

## Current: the flow of charge

**Current** is simply the rate at which charge flows past a point:

$$ I = \frac{Q}{t}, $$

measured in **amperes** — one amp is one coulomb of charge per second, an enormous number of electrons ($6 \times 10^{18}$ of them) marching past every second. In a metal wire, the charges that actually move are the loosely-held outer electrons of the atoms, drifting through the lattice.

Here's a fact that surprises everyone: those electrons drift *astonishingly slowly* — less than a millimetre per second, slower than an ant. So why does the light come on instantly? Because the wire is already packed end-to-end with electrons, and the *electric field* that pushes them propagates through the wire at nearly the speed of light. Push at one end and the whole column shifts at once, like a tube already full of water: turn the tap and water leaves the far end immediately, even though any single water molecule crawls along.

:::note A historical wrinkle worth knowing
By convention, **current points the way positive charge would flow** — from + to − around the circuit. But in metals the actual carriers are *negative* electrons, drifting the opposite way. Franklin guessed the sign before anyone knew about electrons, and we've kept his convention ever since. It rarely matters for circuit analysis, but it's why "conventional current" runs backwards from the real electron traffic.
:::

## Voltage: energy per charge

If current is the *flow*, **voltage** is what *drives* it. Voltage (or potential difference) is the **energy delivered per unit charge**:

$$ V = \frac{\text{energy}}{\text{charge}}, $$

measured in **volts** — one volt is one joule per coulomb. A 9-volt battery gives every coulomb of charge that passes through it 9 joules of energy, which the charge then spends going around the circuit, dropping its energy into bulbs and motors and heaters along the way.

This is the single most useful way to think about voltage: it is *energy per charge*, not a force and not a flow. A battery is an energy *pump*, lifting charge to a higher energy "level" the way a water pump lifts water uphill. The charge then "falls" back down through the circuit, releasing that energy where you put your devices.

## The water analogy — and where it breaks

The plumbing picture is genuinely useful, so let's make it precise:

| Electrical | Water analogy |
|---|---|
| Charge | Water |
| Current $I$ (charge/second) | Flow rate (litres/second) |
| Voltage $V$ (energy/charge) | Pressure (from a pump or height) |
| Battery | Pump |
| Resistor | Narrow pipe |
| Wire | Wide, easy pipe |

Voltage is the *pressure* pushing the flow; current is the *flow rate* that results; a resistor is a *constriction* that fights the flow. The picture predicts real behaviour: more pressure (voltage) gives more flow (current); a narrower pipe (more resistance) gives less.

:::warn The analogy has hard limits
Water can spray out of a broken pipe and pool on the floor; charge cannot leak out of a wire — it must flow in a complete *closed loop* or nothing moves at all. Water flows even with one open end; an electrical circuit with a break (an open switch) carries **zero** current, instantly. And current is the same all the way around a simple loop — charge isn't used up or "consumed" by a bulb the way water might be drunk. It's the *energy* that gets spent, not the charge. Lean on the analogy for intuition, but never trust it past these breaks.
:::

## Ohm's law: tying it together

For most everyday conductors, the current that flows is proportional to the voltage that pushes it. The constant of proportionality is the **resistance** $R$ — how hard the material fights the flow — measured in **ohms** ($\Omega$). This is **Ohm's law**:

$$ V = IR. $$

Read it three ways. For a fixed resistor, doubling the voltage doubles the current. For a fixed voltage, *raising* the resistance *throttles* the current. And resistance itself is just the ratio $R = V/I$, the "stubbornness" of a component. A thin, long wire of a poor conductor resists a lot; a thick copper wire barely at all. (Strictly, Ohm's law is an *empirical rule* that holds for "ohmic" materials like metals at steady temperature — a glowing bulb filament, whose resistance climbs as it heats, only roughly obeys it. It is not a fundamental law like conservation of charge.)

## Series and parallel: the two ways to wire

Connect components in a single chain and they're in **series**; give the current multiple branches and they're in **parallel**. The two arrangements behave oppositely, and the difference is the heart of practical circuit design.

**Series** — one path, like beads on a string:
- The *same current* flows through every component (it has nowhere else to go).
- The voltages *add up* — each component takes a share of the battery's total.
- Resistances *add*: $R_{\text{total}} = R_1 + R_2 + \cdots$. More resistors in a row means more total resistance, less current.
- The fatal flaw: break *one* component and the whole loop opens — the entire string goes dark. This is why old Christmas lights all failed when a single bulb blew.

**Parallel** — multiple paths, like lanes on a motorway:
- The *same voltage* sits across every branch (each connects to the same two points).
- The currents *add up* — the branches split the total flow.
- Total resistance *drops below* the smallest branch, because you've opened extra lanes for current: $\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots$.
- The virtue: each branch is independent. Switch off one lamp and the rest stay lit.

:::key Why your house is wired in parallel
Every outlet and light in your home hangs in **parallel** across the same ~120 or 230 V supply. That guarantees each appliance gets the full voltage it's designed for, and each works independently of the others — unplug the toaster and the lamp doesn't care. The price is that adding more appliances lowers the total resistance and pulls *more* total current, which is exactly what a tripped circuit breaker is protecting you from.
:::

## Power: where the energy goes

Energy doesn't vanish in a circuit — it's converted, in the resistors, into heat and light. The rate of that conversion is the **electrical power**:

$$ P = IV, $$

in **watts**. The derivation is pure logic: voltage is energy *per charge*, current is charge *per second*, so their product is energy *per second* — power. Combine it with Ohm's law and you get two handy cousins, $P = I^2 R$ and $P = V^2/R$.

The $I^2 R$ form explains a lot. The heat dissipated grows with the *square* of the current, which is why a toaster or kettle (high current through a deliberately high-resistance element) glows hot, and why thick supply wires (low resistance) stay cool. It's also why power companies transmit electricity at hundreds of thousands of volts: high voltage means *low* current for the same power $P = IV$, and low current means dramatically less energy wasted as $I^2 R$ heat in the long-distance lines.

:::history Edison, Tesla, and the war of currents
In the 1880s Thomas Edison championed direct current; George Westinghouse and Nikola Tesla backed alternating current. AC won, decisively, for one reason rooted in $P = IV$: transformers can step AC up to very high voltage for efficient long-distance transmission (low current, low $I^2R$ losses), then step it back down for safe household use. The physics of power loss settled a famous commercial brawl.
:::

## Where this is going

We've moved charge through wires and spent its energy. But charge can do more than flow through metal — it can launch waves through *empty space*. Moving and oscillating charges produce electric and magnetic fields that ripple outward as **electromagnetic waves**: radio, microwaves, and visible **light**. The next chapters turn to light — how it reflects, bends, and reveals the deepest puzzles in physics.

<div class="quiz" data-quiz="hs-circuits"></div>
