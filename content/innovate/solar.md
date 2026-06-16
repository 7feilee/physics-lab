In 2010, electricity from a solar panel cost several times more than electricity from coal, and "renewable energy" was a thing you subsidized out of principle. Within little more than a decade, solar became the **cheapest source of electricity in human history** across much of the planet, with module prices that had fallen by roughly *99%* over forty years. No new law of physics arrived to do this. The physics — the band gap, the photovoltaic effect — was understood by the 1950s. What changed was scale, and the relentless mathematics of a learning curve. Solar cells and their mirror image, the LED, are the cleanest demonstration in this track that *deployment itself* can be the innovation.

## The principle: photons, band gaps, and a built-in field

We met the band gap with the transistor: in a semiconductor, electrons are stuck in a filled **valence band**, separated by a forbidden gap $E_g$ from the empty **conduction band** above. Silicon's gap is about $1.1\ \text{eV}$.

Now shine light on it. A photon of energy $h\nu$ greater than the gap can be absorbed, kicking an electron up into the conduction band and leaving a mobile **hole** behind. You have created a free electron–hole pair — light turned into mobile charge. This is the **photovoltaic effect** (first noticed by Becquerel in 1839; explained only once quantum band theory existed).

But a freed electron will just fall back and recombine unless something *sweeps it away*. That something is a **p–n junction** — the same doped boundary that makes a diode. Its built-in electric field drives electrons one way and holes the other before they can recombine. Pile them up at opposite terminals and you have a voltage, a current, **power straight from sunlight, no moving parts**.

$$\text{photon } (h\nu > E_g) \;\rightarrow\; \text{electron–hole pair} \;\xrightarrow{\text{junction field}}\; \text{current}.$$

:::key The controllable effect, run two ways
A p–n junction couples light and current. Run it *forwards* — photons in, current out — and it is a **solar cell**. Run it *backwards* — current in, photons out — and it is a **light-emitting diode (LED)**, where injected electrons and holes recombine across the gap and emit a photon of energy $\approx E_g$. One piece of physics, the band gap, two world-changing devices that are literally the same effect in reverse.
:::

## The hard ceiling: Shockley–Queisser

Why isn't a solar cell 100% efficient? In 1961 William Shockley and Hans Queisser worked out the fundamental limit for a single-junction cell, and it is a beautiful piece of reasoning about a band gap fighting itself:

- **Photons below the gap** ($h\nu < E_g$) pass straight through — their energy is lost entirely.
- **Photons above the gap** are absorbed, but the *excess* energy above $E_g$ is dumped as heat almost instantly. A blue photon and a red photon each yield only $E_g$ of useful energy.

A small gap captures many photons but wastes much of each; a large gap uses each photon well but ignores most of the spectrum. The optimum, for the Sun's spectrum, sits near $E_g \approx 1.3\ \text{eV}$, giving a maximum efficiency of about

$$\eta_{\max} \approx 33\%.$$

This **Shockley–Queisser limit** is not an engineering shortcoming; it is physics. Silicon ($1.1\ \text{eV}$) sits close to the sweet spot, which is one reason it dominates. (You can beat $33\%$ only by stacking multiple gaps — tandem and multi-junction cells — to slice the spectrum more finely.)

:::note Why the number matters
Shockley–Queisser tells you the prize is bounded but generous: a single junction can't exceed ~33%, yet the Sun delivers about $1\ \text{kW/m}^2$, so even a 20% panel harvests $200\ \text{W/m}^2$ — vastly more energy than civilization uses, if you can make the panels cheap enough. The limit reframed the whole problem: efficiency was *not* the bottleneck. **Cost per watt** was.
:::

## The real story: the learning curve

Here is where solar departs from the laser and the transistor. The physics was essentially settled by 1961. The revolution since has been almost entirely about **manufacturing scale driving cost down a learning curve** — and that curve is astonishingly regular.

**Swanson's law** (solar's version of Moore's law) observes that every time *cumulative* production of solar modules **doubles**, the price per watt falls by roughly **20%**. This is a learning rate of about 20%, and it has held for decades. Stack enough doublings and you get collapse:

| Era | Module price (\$/watt, approx) |
|---|---|
| 1977 | $\sim \$76$ |
| 2000 | $\sim \$5$ |
| 2010 | $\sim \$2$ |
| 2020s | $\sim \$0.20$–$\$0.30$ |

A drop of more than two orders of magnitude — well over **99%** since the 1970s. Crucially, this did not come from a single breakthrough but from thousands of incremental gains compounding: purer silicon, thinner wafers, better passivation, bigger factories, automated handling, global supply chains. **Deployment caused the cost reduction, which caused more deployment** — a virtuous loop. Solar has gone from a niche to the fastest-growing source of new electricity on Earth, and the International Energy Agency now calls it the cheapest electricity in history.

## The LED runs the same play

The reverse device tells the same story. The first practical visible LEDs (red, 1962) were dim indicators. The missing colour was blue — needed, with red and green, to make white light — and it required a wide-gap semiconductor (gallium nitride) that nobody could grow well. **Shuji Nakamura, Isamu Akasaki, and Hiroshi Amano** cracked the bright blue LED in the early 1990s (Nobel Prize 2014), unlocking white LED lighting. Then the same learning-curve collapse: prices fell, efficiency climbed past every older lamp, and LEDs swept incandescent and fluorescent lighting off the market. Lighting is roughly a sixth of global electricity use; LEDs are quietly removing a large slice of it.

## The innovation lesson

:::key Deployment is the innovation
Solar's lesson breaks the romance of the eureka breakthrough. The principle (band gap), the device (p–n junction), and even the efficiency ceiling (Shockley–Queisser, ~33%) were all fixed by the early 1960s. What transformed the world was **scaling and the learning curve**: each doubling of cumulative production cut cost ~20%, and the doublings kept coming. The transferable insight is to treat cost decline as something you can *engineer through volume*, not just hope for. When a technology rides a learning curve, the highest-leverage move is often not a better physics idea but **building more of it** — deploying to drive cost down to drive deployment up. Clean, abundant energy is not arriving because someone reinvented the solar cell. It is arriving because the world finally built enough of them.
:::
