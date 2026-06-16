An unstable nucleus is a loaded coin that flips itself at random. You cannot say when any single nucleus will decay — it might be in the next second or in a billion years, and nothing about the nucleus's history makes it "due." Yet hand me a lump of *many* such nuclei and I will tell you, to exquisite precision, how much will remain at any future time. This is the central paradox of radioactivity: perfect unpredictability for the individual, perfect law for the crowd. From that paradox we get glowing dials, cancer therapy, smoke detectors, and a clock that reads the age of bones and rocks.

## Three ways a nucleus comes apart

A nucleus off the valley of stability sheds its excess by emitting radiation. Historically these came in three flavours, named before anyone knew what they were, by how far they penetrated matter.

**Alpha ($\alpha$) decay.** The nucleus ejects a tight bundle of two protons and two neutrons — a helium-4 nucleus. This drops the atomic number by 2 and the mass number by 4. Alpha particles are heavy and doubly charged, so they dump their energy fast: a sheet of paper or a few centimetres of air stops them. Harmless outside the body, dangerous if inhaled. Uranium-238 and radon-222 are alpha emitters.

**Beta ($\beta$) decay.** Inside the nucleus a neutron turns into a proton, spitting out a high-speed electron (the beta particle) and an antineutrino. The atomic number rises by 1 while the mass number stays the same — one element transmutes into the next. Beta particles are light and fast; they need a few millimetres of aluminium to stop. Carbon-14 and strontium-90 decay this way.

**Gamma ($\gamma$) decay.** After an alpha or beta event the daughter nucleus is often left "excited," holding extra energy. It relaxes by emitting a **gamma ray** — a photon of enormous energy, the same stuff as light but far up the spectrum. No change in $Z$ or $A$; just a release of energy. Gammas are the most penetrating of all, needing dense lead or thick concrete to attenuate.

:::key Penetration tells the story
$\alpha$: stopped by paper, heavy and slow. $\beta$: stopped by aluminium, light and quick. $\gamma$: stopped by lead, a pure photon. The order of penetration ($\alpha < \beta < \gamma$) is the order of how easily each gives up its energy to matter — which is exactly what makes alphas the most dangerous *internally* and gammas the hardest to shield against.
:::

## The decay law

Here is the one assumption that explains everything: **each nucleus has a fixed probability per unit time of decaying, independent of its age and of every other nucleus.** Call that probability per second the **decay constant** $\lambda$. A nucleus does not "wear out." A thousand-year-old atom of uranium is statistically identical to a brand-new one. Decay is memoryless.

From this single rule the mathematics is forced. If you have $N$ nuclei, the number decaying in a short time $\d t$ is $\lambda N\,\d t$, so

$$ \frac{\d N}{\d t} = -\lambda N. $$

The rate of loss is proportional to how many are left — the signature of exponential decay. Integrating gives the **radioactive decay law**:

$$ N(t) = N_0\, e^{-\lambda t}, $$

where $N_0$ is the number present at $t=0$. The population doesn't dwindle linearly; it falls off in an ever-flattening exponential curve, halving again and again forever in principle, never quite reaching zero.

## Half-life and activity

Exponentials are awkward to picture, so we quote the **half-life** $t_{1/2}$: the time for half the sample to decay. Setting $N = N_0/2$ in the decay law gives

$$ t_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda}. $$

After one half-life, half remains; after two, a quarter; after three, an eighth. Ten half-lives leave about a thousandth. Half-lives span an absurd range — from $10^{-7}$ seconds for some isotopes to $4.5\times10^9$ years for uranium-238 (conveniently, the age of the Earth) to over $10^{19}$ years for some borderline-stable nuclei.

What a Geiger counter actually measures is not $N$ but the **activity** $A$ — the number of decays per second:

$$ A = \lambda N = A_0\, e^{-\lambda t}. $$

Activity is measured in **becquerels** (1 Bq = one decay per second) or the older **curie** ($1\,\text{Ci} = 3.7\times10^{10}\,\text{Bq}$, roughly the activity of a gram of radium). Notice that activity falls off with the *same* exponential and the *same* half-life as the population — so a sample's clicks per second is a direct readout of how much radioactive material is left.

## Randomness for one, certainty for many

Watch a single nucleus and you see pure caprice — it decays when it decays, no warning, no pattern. Watch a trillion and the law of large numbers takes over: the *fraction* that decays in each interval is pinned down with statistical precision. This is the same trick as a casino, which cannot predict one roulette spin yet knows its monthly profit to the dollar.

The randomness is not mere ignorance of hidden machinery; as far as anyone can tell it is fundamental quantum chance, the same indeterminism that governs tunnelling (indeed, alpha decay *is* tunnelling out of the nucleus). The sharpness of the macroscopic law is bought entirely by large numbers. With few nuclei left, the clicks become visibly irregular — the statistics get noisy precisely because the crowd has thinned.

<div class="sim" data-sim="decay"></div>

:::try Watch the law emerge from chaos
Start with a large population and let it run. The decay curve traces a smooth exponential, and the half-life is rock-steady — every half-life, the count halves like clockwork. Now restart with only a handful of nuclei. The same underlying probability governs each, but now the decays come in unpredictable jolts and the "curve" is jagged. The law was never about any individual; it is the crowd's behaviour made visible. Big $N$ is what turns quantum dice into a precise clock.
:::

## Reading time with carbon-14

Because the half-life is a fixed property of each isotope, a decaying population is a clock. The most famous is **radiocarbon dating**. The atmosphere contains a steady trace of carbon-14 (half-life $5{,}730$ years), produced by cosmic rays. Living things constantly exchange carbon with the air, so while alive they hold the atmospheric ratio of carbon-14 to ordinary carbon-12. The moment an organism dies, intake stops and the carbon-14 clock starts ticking down by the decay law.

Measure the surviving carbon-14 fraction in an old bone, fabric, or charcoal, and invert the exponential to find the elapsed time:

$$ t = \frac{1}{\lambda}\ln\!\frac{N_0}{N} = \frac{t_{1/2}}{\ln 2}\,\ln\!\frac{N_0}{N}. $$

A sample with a quarter of the living carbon-14 ratio has passed two half-lives — about $11{,}500$ years. The method reaches back roughly $50{,}000$ years before too little carbon-14 remains to measure. For older things, geologists switch isotopes: the uranium-lead clock, riding uranium-238's $4.5$-billion-year half-life, dates rocks and meteorites and gives the age of the Earth itself at $4.54$ billion years. Different clock, same exponential law — the one a single restless nucleus has been obeying, by pure chance, all along.

<div class="quiz" data-quiz="app-radioactivity"></div>
