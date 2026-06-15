/* Modern-physics sims: ideal gas, special relativity, particle-in-a-box,
   quantum tunnelling, free wave packet, Bloch sphere, 2D Ising model. */
(function () {

  /* ---------------- Kinetic theory: ideal gas ---------------- */
  function resetGas(s, c, g) {
    s.N = c.n | 0; s.p = []; s.r = 5; s.pressAcc = 0; s.pressure = 0; s.pt = 0;
    const v0 = c.temp * 0.9 + 12;
    for (let i = 0; i < s.N; i++) {
      const a = Math.random() * 7;
      s.p.push({ x: 20 + Math.random() * (g.w * 0.58 - 40), y: 20 + Math.random() * (g.h - 40), vx: v0 * Math.cos(a), vy: v0 * Math.sin(a) });
    }
  }
  PSim.register("gas", {
    title: "Kinetic Theory: where the bell curve comes from", tag: "statistical mechanics", height: 320,
    caption: "Every particle starts with the same speed. Collisions alone scramble them into the Maxwell–Boltzmann distribution (white curve) — order dissolving into the most probable disorder. Temperature is just average kinetic energy.",
    controls: [
      { id: "n", label: "Particles", type: "range", min: 20, max: 140, step: 5, value: 80, fmt: (v) => v },
      { id: "temp", label: "Temperature", type: "range", min: 8, max: 90, step: 1, value: 40, fmt: (v) => v },
      { id: "reset", type: "button", label: "Reset (equal speeds) ↺", action: (h) => resetGas(h.state, h.cv, h.g) },
    ],
    init(g, s, c) { resetGas(s, c, g); },
    onControl(id, cv, h) { resetGas(h.state, h.cv, h.g); },
    step(dt, s, c) {
      const g = s.canvas; const W = s.boxW, H = s.boxH; if (!W) return;
      const h = Math.min(dt, 0.033), r = s.r;
      // thermostat toward target mean speed
      let mean = 0; s.p.forEach((q) => (mean += Math.hypot(q.vx, q.vy))); mean /= s.N;
      const target = c.temp * 0.9 + 12, scale = mean > 0.1 ? 1 + (target - mean) / mean * 0.02 : 1;
      for (const q of s.p) {
        q.vx *= scale; q.vy *= scale;
        q.x += q.vx * h; q.y += q.vy * h;
        if (q.x < r) { q.x = r; q.vx = Math.abs(q.vx); s.pressAcc += 2 * Math.abs(q.vx); }
        else if (q.x > W - r) { q.x = W - r; q.vx = -Math.abs(q.vx); s.pressAcc += 2 * Math.abs(q.vx); }
        if (q.y < r) { q.y = r; q.vy = Math.abs(q.vy); }
        else if (q.y > H - r) { q.y = H - r; q.vy = -Math.abs(q.vy); }
      }
      // pairwise elastic collisions (equal mass)
      const P = s.p, n = P.length, d2 = (2 * r) * (2 * r);
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
        const a = P[i], b = P[j], dx = b.x - a.x, dy = b.y - a.y, dd = dx * dx + dy * dy;
        if (dd < d2 && dd > 0.01) {
          const dist = Math.sqrt(dd), nx = dx / dist, ny = dy / dist;
          const dvx = a.vx - b.vx, dvy = a.vy - b.vy, p = dvx * nx + dvy * ny;
          if (p > 0) { a.vx -= p * nx; a.vy -= p * ny; b.vx += p * nx; b.vy += p * ny;
            const ov = (2 * r - dist) / 2; a.x -= nx * ov; a.y -= ny * ov; b.x += nx * ov; b.y += ny * ov; }
        }
      }
      s.pt += h; if (s.pt > 0.5) { s.pressure = s.pressAcc / s.pt / (2 * (W + H)); s.pressAcc = 0; s.pt = 0; }
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      s.boxW = w * 0.58; s.boxH = h;
      ctx.strokeStyle = col.axis; ctx.lineWidth = 1.5; ctx.strokeRect(1, 1, s.boxW - 2, h - 2);
      let sum2 = 0, vmax = 0;
      for (const q of s.p) { const sp = Math.hypot(q.vx, q.vy); sum2 += sp * sp; if (sp > vmax) vmax = sp;
        const t = Math.min(1, sp / 90); ctx.fillStyle = `rgb(${90 + t * 165},${150 - t * 60},${255 - t * 120})`;
        ctx.beginPath(); ctx.arc(q.x, q.y, s.r, 0, 7); ctx.fill(); }
      const kT = sum2 / (2 * s.N); s.kT = kT;
      // histogram of speeds + Maxwell-Boltzmann
      const hx = w * 0.62, hw = w * 0.36, bins = 26, bx = 110, counts = new Array(bins).fill(0);
      for (const q of s.p) { const b = Math.min(bins - 1, Math.floor(Math.hypot(q.vx, q.vy) / bx * bins)); counts[b]++; }
      const cmax = Math.max(1, ...counts), bw = hw / bins;
      ctx.fillStyle = col.accent + "88";
      counts.forEach((cnt, i) => { const bh = (cnt / cmax) * (h - 40); ctx.fillRect(hx + i * bw, h - 16 - bh, bw - 1, bh); });
      // theory curve: f(v) ∝ v exp(-v²/2kT)
      ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.beginPath();
      let fmax = 0; const fs = [];
      for (let i = 0; i <= 60; i++) { const v = (i / 60) * bx; const f = (v / kT) * Math.exp(-v * v / (2 * kT)); fs.push(f); if (f > fmax) fmax = f; }
      fs.forEach((f, i) => { const x = hx + (i / 60) * hw, y = h - 16 - (f / fmax) * (h - 40); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
      ctx.stroke();
      ctx.fillStyle = col.soft; ctx.font = "11px JetBrains Mono"; ctx.fillText("speed →", hx + hw - 50, h - 3);
    },
    readout(s) { return { "Temperature (∝ ⟨KE⟩)": (s.kT || 0).toFixed(0), "Pressure (∝)": (s.pressure || 0).toFixed(1), "Particles": s.N }; },
  });

  /* ---------------- Special relativity: light clock ---------------- */
  PSim.register("relativity", {
    title: "Time Dilation — the light clock", tag: "special relativity", height: 330,
    caption: "Both clocks tick when light bounces between their mirrors. The moving clock's light must travel a longer, diagonal path — so it ticks more slowly. Push v toward c and the moving clock nearly freezes. The bar shows length contraction by the same factor γ.",
    controls: [
      { id: "v", label: "Speed (v/c)", type: "range", min: 0, max: 0.97, step: 0.01, value: 0.6, fmt: (v) => v.toFixed(2) + "c" },
      { id: "reset", type: "button", label: "Restart ↺", action: (h) => { h.state.t = 0; h.state.t0 = 0; h.state.tm = 0; h.state.x = 0; } },
    ],
    init(g, s, c) { s.t = 0; s.t0 = 0; s.tm = 0; s.x = 0; },
    step(dt, s, c) {
      const g = 1 / Math.sqrt(1 - c.v * c.v);
      s.t += dt; s.t0 += dt; s.tm += dt / g; s.x += dt * c.v * 90; s.gamma = g;
      if (s.x > 1) s.x = s.x; // continuous
    },
    draw(gg, s, c) {
      const { ctx, w, h, c: col } = gg; ctx.clearRect(0, 0, w, h);
      const L = h * 0.34, midY = h * 0.30;
      const tickPeriod = L / 110; // seconds per one-way for stationary
      // ---- stationary clock (left) ----
      const sx = w * 0.16;
      drawClock(ctx, col, sx, midY, L, (s.t0 % (2 * tickPeriod)) / tickPeriod, 0, col.accent3);
      label(ctx, col, sx, midY + L + 26, "Clock at rest");
      tickText(ctx, col, sx, midY - 16, Math.floor(s.t0 / (2 * tickPeriod)));
      // ---- moving clock (right area, translating) ----
      const g = s.gamma || 1, periodM = tickPeriod * g;
      let mx = w * 0.42 + ((s.x) % (w * 0.5));
      const phase = (s.tm % (2 * tickPeriod)) / tickPeriod;
      drawClock(ctx, col, mx, midY, L, phase, c.v, col.accent, true);
      label(ctx, col, mx, midY + L + 26, "Moving clock");
      tickText(ctx, col, mx, midY - 16, Math.floor(s.tm / (2 * tickPeriod)));
      // ---- length contraction bar ----
      const by = h - 30, barL = 150;
      ctx.fillStyle = col.track; ctx.fillRect(w * 0.12, by, barL, 12);
      ctx.fillStyle = col.warn; ctx.fillRect(w * 0.12, by, barL / g, 12);
      ctx.fillStyle = col.soft; ctx.font = "12px Inter"; ctx.fillText("rest length", w * 0.12, by - 6);
      ctx.fillStyle = col.warn; ctx.fillText("contracted length", w * 0.12 + barL + 10, by + 10);
    },
    readout(s, c) {
      const g = s.gamma || 1;
      return { "γ (Lorentz factor)": g.toFixed(3), "Time at rest": (s.t0 || 0).toFixed(1) + " s", "Moving clock reads": (s.tm || 0).toFixed(1) + " s", "Length × ": (1 / g).toFixed(3) };
    },
  });
  function drawClock(ctx, col, cx, topY, L, phase, v, color, moving) {
    ctx.strokeStyle = col.track; ctx.lineWidth = 6; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(cx - 16, topY); ctx.lineTo(cx + 16, topY); ctx.moveTo(cx - 16, topY + L); ctx.lineTo(cx + 16, topY + L); ctx.stroke();
    // photon position
    const up = phase < 1; const fy = up ? topY + L - phase * L : topY + (phase - 1) * L;
    // diagonal offset for moving clock for visual flavour
    const fx = cx + (moving ? (Math.sin(phase * Math.PI) * 0) : 0);
    ctx.strokeStyle = color + "55"; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(cx, topY + L); ctx.lineTo(cx, topY); ctx.stroke();
    ctx.fillStyle = color; ctx.shadowColor = color; ctx.shadowBlur = 12; ctx.beginPath(); ctx.arc(fx, fy, 5, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
  }
  function label(ctx, col, x, y, t) { ctx.fillStyle = col.soft; ctx.font = "12px Inter"; ctx.textAlign = "center"; ctx.fillText(t, x, y); ctx.textAlign = "left"; }
  function tickText(ctx, col, x, y, n) { ctx.fillStyle = col.ink; ctx.font = "bold 15px JetBrains Mono"; ctx.textAlign = "center"; ctx.fillText(n + " ticks", x, y); ctx.textAlign = "left"; }

  /* ---------------- Particle in a box ---------------- */
  PSim.register("particlebox", {
    title: "Particle in a Box", tag: "quantum mechanics", height: 340,
    caption: "Trap a quantum particle and its energy can only take discrete values Eₙ ∝ n². Pick a level to see its standing wave. Switch on superposition to mix two levels — now the probability cloud sloshes back and forth, the quantum heartbeat.",
    controls: [
      { id: "n", label: "Quantum number n", type: "range", min: 1, max: 6, step: 1, value: 1, fmt: (v) => v },
      { id: "prob", label: "Show probability |ψ|²", type: "checkbox", value: false },
      { id: "sup", label: "Superpose n and n+1", type: "checkbox", value: false },
      { id: "speed", label: "Time speed", type: "range", min: 0, max: 3, step: 0.1, value: 1, fmt: (v) => v.toFixed(1) + "×" },
    ],
    init(g, s, c) { s.t = 0; },
    step(dt, s, c) { s.t += dt * c.speed; },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const padL = 40, padR = w * 0.34, boxW = w - padL - padR - 20, boxTop = 24, boxBot = h - 28, midY = (boxTop + boxBot) / 2;
      // walls
      ctx.strokeStyle = col.axis; ctx.lineWidth = 2; ctx.strokeRect(padL, boxTop, boxW, boxBot - boxTop);
      ctx.fillStyle = col.track; ctx.fillRect(padL - 7, boxTop, 7, boxBot - boxTop); ctx.fillRect(padL + boxW, boxTop, 7, boxBot - boxTop);
      const n1 = c.n, n2 = c.n + 1, E1 = n1 * n1, E2 = n2 * n2;
      const amp = (boxBot - boxTop) * 0.32;
      const psi = (x) => { // x in [0,1]
        let re = Math.sqrt(2) * Math.sin(n1 * Math.PI * x) * Math.cos(E1 * s.t), im = -Math.sqrt(2) * Math.sin(n1 * Math.PI * x) * Math.sin(E1 * s.t);
        if (c.sup) { re += Math.sqrt(2) * Math.sin(n2 * Math.PI * x) * Math.cos(E2 * s.t); im += -Math.sqrt(2) * Math.sin(n2 * Math.PI * x) * Math.sin(E2 * s.t); re /= Math.SQRT2; im /= Math.SQRT2; }
        return [re, im];
      };
      ctx.beginPath();
      if (c.prob) {
        ctx.fillStyle = col.accent + "55"; ctx.strokeStyle = col.accent3; ctx.lineWidth = 2;
        ctx.moveTo(padL, midY);
        for (let i = 0; i <= 200; i++) { const x = i / 200, [re, im] = psi(x); const p = (re * re + im * im); ctx.lineTo(padL + x * boxW, midY - p * amp * 0.6); }
        ctx.lineTo(padL + boxW, midY); ctx.closePath(); ctx.fill(); ctx.stroke();
      } else {
        ctx.strokeStyle = col.accent3; ctx.lineWidth = 2.2;
        for (let i = 0; i <= 200; i++) { const x = i / 200, [re] = psi(x); const px = padL + x * boxW, py = midY - re * amp; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
        ctx.stroke();
        ctx.strokeStyle = col.accent2 + "88"; ctx.lineWidth = 1.2; ctx.beginPath();
        for (let i = 0; i <= 200; i++) { const x = i / 200, [, im] = psi(x); const px = padL + x * boxW, py = midY - im * amp; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
        ctx.stroke();
      }
      ctx.strokeStyle = col.grid; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(padL, midY); ctx.lineTo(padL + boxW, midY); ctx.stroke();
      // energy ladder
      const lx = w - padR + 6, lw = padR - 20, lb = boxBot, lt = boxTop + 6;
      ctx.fillStyle = col.soft; ctx.font = "12px Inter"; ctx.fillText("Energy levels", lx, lt - 8);
      for (let n = 1; n <= 6; n++) { const E = n * n, y = lb - (E / 36) * (lb - lt); const on = n === n1 || (c.sup && n === n2);
        ctx.strokeStyle = on ? col.accent3 : col.grid; ctx.lineWidth = on ? 2.4 : 1; ctx.beginPath(); ctx.moveTo(lx, y); ctx.lineTo(lx + lw, y); ctx.stroke();
        ctx.fillStyle = on ? col.accent3 : col.soft; ctx.font = "11px JetBrains Mono"; ctx.fillText("n=" + n, lx + lw + 2, y + 4); }
    },
    readout(s, c) { return { "Energy ∝": c.sup ? `${c.n}² and ${c.n + 1}²` : c.n * c.n, "State": c.sup ? "superposition (sloshes)" : "stationary" }; },
  });

  /* ---------------- Quantum tunnelling (stationary barrier) ---------------- */
  PSim.register("tunnel", {
    title: "Quantum Tunnelling", tag: "quantum mechanics", height: 330,
    caption: "A particle with less energy than the barrier still has a chance to appear on the far side. Inside the barrier the wave doesn't oscillate — it decays exponentially. Thin or low barriers leak more. This is how the Sun burns and how flash memory works.",
    controls: [
      { id: "E", label: "Particle energy E", type: "range", min: 0.1, max: 2.4, step: 0.02, value: 0.8, fmt: (v) => v.toFixed(2) },
      { id: "V0", label: "Barrier height V₀", type: "range", min: 0.4, max: 3, step: 0.05, value: 1.5, fmt: (v) => v.toFixed(2) },
      { id: "a", label: "Barrier width", type: "range", min: 0.3, max: 2.5, step: 0.05, value: 1, fmt: (v) => v.toFixed(2) },
    ],
    init(g, s, c) { s.t = 0; },
    step(dt, s, c) { s.t += dt * 3; },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const E = c.E, V0 = c.V0, a = c.a;
      const k1 = Math.sqrt(2 * E), kappa = Math.sqrt(2 * Math.max(0.001, V0 - E)), k2r = Math.sqrt(2 * Math.max(0.001, E - V0));
      let T;
      if (E < V0) { const sh = Math.sinh(kappa * a); T = 1 / (1 + (V0 * V0 * sh * sh) / (4 * E * (V0 - E))); }
      else { const sn = Math.sin(k2r * a); T = 1 / (1 + (V0 * V0 * sn * sn) / (4 * E * (E - V0))); }
      s.T = T;
      const x0 = w * 0.4, bx2 = w * 0.4 + 70 * a, midY = h * 0.5, vScale = 46;
      // potential
      ctx.fillStyle = col.track; ctx.fillRect(x0, midY - V0 * vScale, bx2 - x0, V0 * vScale);
      ctx.strokeStyle = col.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(w, midY); ctx.stroke();
      // energy level
      ctx.strokeStyle = col.warn; ctx.setLineDash([6, 5]); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(0, midY - E * vScale); ctx.lineTo(w, midY - E * vScale); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = col.warn; ctx.font = "12px JetBrains Mono"; ctx.fillText("E", 6, midY - E * vScale - 5);
      ctx.fillStyle = col.soft; ctx.fillText("V₀", x0 + 6, midY - V0 * vScale + 14);
      // wavefunction Re(ψ)
      const wamp = 26, decay = Math.exp(-kappa * a), Tamp = Math.sqrt(T);
      ctx.strokeStyle = col.accent3; ctx.lineWidth = 2; ctx.beginPath();
      for (let px = 0; px <= w; px++) {
        let y;
        if (px < x0) { const xx = (px - x0) / 30; y = Math.cos(k1 * xx - s.t); }
        else if (px < bx2) { const xx = (px - x0) / 30; y = Math.exp(-kappa * xx) * Math.cos(-s.t); }
        else { const xx = (px - bx2) / 30; y = Tamp * Math.cos(k1 * xx - s.t); }
        const yy = midY - E * vScale - y * wamp - 60;
        px ? ctx.lineTo(px, yy) : ctx.moveTo(px, yy);
      }
      ctx.stroke();
    },
    readout(s) { return { "Transmission T": ((s.T || 0) * 100).toFixed(2) + " %", "Reflection R": ((1 - (s.T || 0)) * 100).toFixed(2) + " %" }; },
  });

  /* ---------------- Free Gaussian wave packet (dispersion) ---------------- */
  function resetWP(s, c) { s.t = 0; }
  PSim.register("wavepacket", {
    title: "A Quantum Wave Packet Spreads", tag: "quantum mechanics", height: 300,
    caption: "A free particle is a localised packet (blue cloud = |ψ|²) gliding at its group velocity while the carrier wave (green) ripples beneath. Notice it widens as it moves: the tighter you localise a quantum particle, the faster its position smears out — uncertainty in action.",
    controls: [
      { id: "k0", label: "Momentum k₀", type: "range", min: 0.5, max: 4, step: 0.1, value: 2, fmt: (v) => v.toFixed(1) },
      { id: "sig", label: "Initial width", type: "range", min: 0.4, max: 3, step: 0.1, value: 1, fmt: (v) => v.toFixed(1) },
      { id: "reset", type: "button", label: "Re-launch ↺", action: (h) => resetWP(h.state, h.cv) },
    ],
    init(g, s, c) { resetWP(s, c); },
    onControl(id, cv, h) { resetWP(h.state, h.cv); },
    step(dt, s, c) { s.t += dt; if (s.t > 9) s.t = 0; },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const midY = h * 0.55, t = s.t, sig0 = c.sig, k0 = c.k0;
      const sigt = sig0 * Math.sqrt(1 + (t / (2 * sig0 * sig0)) ** 2);
      const vg = k0, x0 = -6 + vg * t; // center in world units
      const worldW = 24, sc = w / worldW, toX = (xw) => (xw + 12) * sc;
      ctx.strokeStyle = col.grid; ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(w, midY); ctx.stroke();
      // |psi|^2 envelope (filled)
      ctx.fillStyle = col.accent + "44"; ctx.strokeStyle = col.accent; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(0, midY);
      const norm = Math.sqrt(sig0 / sigt);
      for (let i = 0; i <= 300; i++) { const xw = -12 + (i / 300) * worldW; const env = norm * Math.exp(-((xw - x0) ** 2) / (2 * sigt * sigt)); ctx.lineTo(toX(xw), midY - env * env * (h * 0.42)); }
      ctx.lineTo(w, midY); ctx.closePath(); ctx.fill();
      // Re(psi) carrier
      ctx.strokeStyle = col.accent3; ctx.lineWidth = 1.6; ctx.beginPath();
      for (let i = 0; i <= 400; i++) { const xw = -12 + (i / 400) * worldW; const env = norm * Math.exp(-((xw - x0) ** 2) / (2 * sigt * sigt)); const carrier = Math.cos(k0 * (xw - x0) - (k0 * k0 / 2) * t); const y = midY - env * carrier * (h * 0.34); i ? ctx.lineTo(toX(xw), y) : ctx.moveTo(toX(xw), y); }
      ctx.stroke();
    },
    readout(s, c) { const sigt = c.sig * Math.sqrt(1 + (s.t / (2 * c.sig * c.sig)) ** 2); return { "Packet width Δx": sigt.toFixed(2), "Group velocity": c.k0.toFixed(1) }; },
  });

  /* ---------------- Bloch sphere (qubit + gates) ---------------- */
  function rot(v, axis, ang) {
    const [ux, uy, uz] = axis, ca = Math.cos(ang), sa = Math.sin(ang), d = 1 - ca;
    const [x, y, z] = v;
    return [
      (ca + ux * ux * d) * x + (ux * uy * d - uz * sa) * y + (ux * uz * d + uy * sa) * z,
      (uy * ux * d + uz * sa) * x + (ca + uy * uy * d) * y + (uy * uz * d - ux * sa) * z,
      (uz * ux * d - uy * sa) * x + (uz * uy * d + ux * sa) * y + (ca + uz * uz * d) * z,
    ];
  }
  function applyGate(s, axis, ang) { s.anim = { from: s.vec.slice(), axis, ang, p: 0 }; }
  PSim.register("bloch", {
    title: "The Bloch Sphere — one qubit", tag: "quantum information", height: 360,
    caption: "A qubit's state is an arrow on a sphere. North = |0⟩, south = |1⟩, the equator = equal superpositions. Quantum gates are just rotations. Hit H (Hadamard) to swing |0⟩ onto the equator — a perfect 50/50 superposition.",
    controls: [
      { id: "X", type: "button", label: "X", action: (h) => applyGate(h.state, [1, 0, 0], Math.PI) },
      { id: "Z", type: "button", label: "Z", variant: "ghost", action: (h) => applyGate(h.state, [0, 0, 1], Math.PI) },
      { id: "H", type: "button", label: "H", action: (h) => applyGate(h.state, [1 / Math.SQRT2, 0, 1 / Math.SQRT2], Math.PI) },
      { id: "S", type: "button", label: "S", variant: "ghost", action: (h) => applyGate(h.state, [0, 0, 1], Math.PI / 2) },
      { id: "reset", type: "button", label: "Reset |0⟩", variant: "ghost", action: (h) => { h.state.vec = [0, 0, 1]; h.state.anim = null; } },
    ],
    init(g, s, c) { s.vec = [0, 0, 1]; s.anim = null; s.spin = 0; },
    step(dt, s, c) {
      s.spin += dt * 0.25;
      if (s.anim) { s.anim.p += dt * 2.2; const p = Math.min(1, s.anim.p); s.vec = rot(s.anim.from, s.anim.axis, s.anim.ang * easeIO(p)); if (p >= 1) s.anim = null; }
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.36;
      const yaw = 0.6, pitch = -0.5;
      const proj = (x, y, z) => { // rotate about y (yaw) then x (pitch), orthographic
        const x1 = x * Math.cos(yaw) + z * Math.sin(yaw), z1 = -x * Math.sin(yaw) + z * Math.cos(yaw), y1 = y;
        const y2 = y1 * Math.cos(pitch) - z1 * Math.sin(pitch), z2 = y1 * Math.sin(pitch) + z1 * Math.cos(pitch);
        return [cx + x1 * R, cy - y2 * R, z2];
      };
      // sphere outline
      ctx.strokeStyle = col.grid; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.stroke();
      // equator + meridian (ellipses via projection)
      for (let m = 0; m < 3; m++) {
        ctx.strokeStyle = col.grid; ctx.beginPath();
        for (let i = 0; i <= 60; i++) { const a = (i / 60) * 2 * Math.PI; let p;
          if (m === 0) p = proj(Math.cos(a), 0, Math.sin(a));
          else if (m === 1) p = proj(Math.cos(a), Math.sin(a), 0);
          else p = proj(0, Math.cos(a), Math.sin(a));
          i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); }
        ctx.stroke();
      }
      // axes
      const drawAxis = (vx, vy, vz, lbl, color) => { const p = proj(vx, vy, vz); ctx.strokeStyle = col.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(p[0], p[1]); ctx.stroke(); ctx.fillStyle = color || col.soft; ctx.font = "12px JetBrains Mono"; ctx.fillText(lbl, p[0] + 4, p[1]); };
      drawAxis(0, 0, 1.15, "|0⟩", col.accent3); drawAxis(0, 0, -1.15, "|1⟩", col.danger);
      drawAxis(1.15, 0, 0, "|+⟩", col.soft); drawAxis(0, 1.15, 0, "i", col.soft);
      // state vector
      const v = s.vec, p = proj(v[0], v[1], v[2]);
      ctx.strokeStyle = col.accent; ctx.fillStyle = col.accent; ctx.lineWidth = 3; PSim.arrow(ctx, cx, cy, p[0], p[1], 9);
      ctx.fillStyle = col.accent; ctx.beginPath(); ctx.arc(p[0], p[1], 5, 0, 7); ctx.fill();
    },
    readout(s) {
      const z = s.vec[2], p0 = (1 + z) / 2, p1 = 1 - p0;
      const theta = Math.acos(Math.max(-1, Math.min(1, z))) * 180 / Math.PI;
      return { "P(measure 0)": (p0 * 100).toFixed(1) + " %", "P(measure 1)": (p1 * 100).toFixed(1) + " %", "Polar angle θ": theta.toFixed(0) + "°" };
    },
  });
  function easeIO(p) { return p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2; }

  /* ---------------- 2D Ising model (Metropolis Monte Carlo) ---------------- */
  function resetIsing(s, c) {
    s.N = 64; s.spin = new Int8Array(s.N * s.N);
    for (let i = 0; i < s.spin.length; i++) s.spin[i] = Math.random() < 0.5 ? 1 : -1;
    s.buf = document.createElement("canvas"); s.buf.width = s.N; s.buf.height = s.N;
  }
  PSim.register("ising", {
    title: "The Ising Model — order from temperature", tag: "phase transitions", height: 330,
    caption: "Each cell is a tiny magnet that prefers to align with its neighbours; temperature fights that order. Below the critical temperature Tc ≈ 2.27 the system locks into large domains (spontaneous magnetism). Above it, thermal noise wins and order dissolves. Slide across Tc and watch a phase transition happen live.",
    controls: [
      { id: "T", label: "Temperature", type: "range", min: 0.4, max: 4, step: 0.02, value: 2.27, fmt: (v) => v.toFixed(2) },
      { id: "speed", label: "Updates / frame", type: "range", min: 1, max: 30, step: 1, value: 14, fmt: (v) => v + "k" },
      { id: "reset", type: "button", label: "Randomise ↺", action: (h) => resetIsing(h.state, h.cv) },
    ],
    init(g, s, c) { resetIsing(s, c); },
    step(dt, s, c) {
      const N = s.N, sp = s.spin, T = c.T, steps = c.speed * 1000;
      const exp4 = Math.exp(-4 / T), exp8 = Math.exp(-8 / T);
      for (let k = 0; k < steps; k++) {
        const i = (Math.random() * N) | 0, j = (Math.random() * N) | 0, idx = i * N + j;
        const sij = sp[idx];
        const nb = sp[((i + 1) % N) * N + j] + sp[((i + N - 1) % N) * N + j] + sp[i * N + (j + 1) % N] + sp[i * N + (j + N - 1) % N];
        const dE = 2 * sij * nb;
        if (dE <= 0 || Math.random() < (dE === 4 ? exp4 : exp8)) sp[idx] = -sij;
      }
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const N = s.N, bctx = s.buf.getContext("2d"), img = bctx.createImageData(N, N);
      const up = hexToRgb(col.accent), dn = document.body.dataset.theme === "light" ? [225, 230, 240] : [20, 26, 40];
      let mag = 0;
      for (let i = 0; i < s.spin.length; i++) { const u = s.spin[i] === 1; mag += s.spin[i]; const col3 = u ? up : dn; const o = i * 4; img.data[o] = col3[0]; img.data[o + 1] = col3[1]; img.data[o + 2] = col3[2]; img.data[o + 3] = 255; }
      bctx.putImageData(img, 0, 0);
      const side = Math.min(w, h) - 8, ox = (w - side) / 2;
      ctx.imageSmoothingEnabled = false; ctx.drawImage(s.buf, 0, 0, N, N, ox, 4, side, side);
      s.mag = Math.abs(mag) / s.spin.length;
    },
    readout(s, c) { return { "Temperature": c.T.toFixed(2), "Tc (theory)": "2.27", "|Magnetisation|": (s.mag || 0).toFixed(2), "Phase": c.T < 2.27 ? "ordered (magnetic)" : "disordered" }; },
  });
  function hexToRgb(hex) { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
})();
