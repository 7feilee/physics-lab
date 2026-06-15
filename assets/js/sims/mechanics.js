/* Mechanics simulations: projectile, collisions, pendulum, double pendulum, orbit */
(function () {
  const A = PSim.arrow;

  /* ---------------- Projectile motion ---------------- */
  function launchProj(s, c) {
    const ang = (c.angle * Math.PI) / 180;
    s.pos = { x: 0, y: 0 };
    s.vel = { x: c.speed * Math.cos(ang), y: c.speed * Math.sin(ang) };
    s.trail = [];
    s.landed = false; s.t = 0; s.range = 0; s.hmax = 0; s.relaunchT = 0;
    const R = (c.speed * c.speed * Math.sin(2 * ang)) / c.g;
    const H = Math.pow(c.speed * Math.sin(ang), 2) / (2 * c.g);
    s.worldW = Math.max(R * 1.12, 12);
    s.worldH = Math.max(H * 1.3, 7);
  }
  PSim.register("projectile", {
    title: "Projectile Motion", tag: "mechanics", height: 340,
    caption: "With no air resistance the range peaks at exactly 45°. Switch on air resistance and re-test — the best angle drops below 45° and the path becomes lopsided.",
    controls: [
      { id: "angle", label: "Launch angle", type: "range", min: 5, max: 85, step: 1, value: 45, fmt: (v) => v + "°" },
      { id: "speed", label: "Launch speed", type: "range", min: 8, max: 55, step: 1, value: 32, fmt: (v) => v + " m/s" },
      { id: "g", label: "Gravity", type: "range", min: 1.6, max: 25, step: 0.1, value: 9.8, fmt: (v) => v.toFixed(1) },
      { id: "drag", label: "Air resistance", type: "checkbox", value: false },
      { id: "launch", type: "button", label: "Launch ↺", action: (h) => launchProj(h.state, h.cv) },
    ],
    init(g, s, c) { launchProj(s, c); },
    onControl(id, cv, h) { launchProj(h.state, h.cv); },
    step(dt, s, c) {
      if (s.landed) { s.relaunchT += dt; if (s.relaunchT > 1.3) launchProj(s, c); return; }
      const sub = 6, k = 0.011;
      for (let i = 0; i < sub; i++) {
        const h = dt / sub;
        let ax = 0, ay = -c.g;
        if (c.drag) { const v = Math.hypot(s.vel.x, s.vel.y); ax += -k * v * s.vel.x; ay += -k * v * s.vel.y; }
        s.vel.x += ax * h; s.vel.y += ay * h;
        s.pos.x += s.vel.x * h; s.pos.y += s.vel.y * h; s.t += h;
        if (s.pos.y > s.hmax) s.hmax = s.pos.y;
        if (s.pos.y <= 0 && s.t > 0.03) { s.pos.y = 0; s.landed = true; s.range = s.pos.x; break; }
      }
      s.trail.push({ x: s.pos.x, y: s.pos.y });
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g;
      ctx.clearRect(0, 0, w, h);
      const padL = 40, padR = 18, padT = 16, padB = 30;
      const sc = Math.min((w - padL - padR) / s.worldW, (h - padT - padB) / s.worldH);
      const ox = padL, oy = h - padB;
      const X = (wx) => ox + wx * sc, Y = (wy) => oy - wy * sc;
      // ground + grid
      ctx.strokeStyle = col.grid; ctx.lineWidth = 1;
      for (let m = 0; m <= s.worldW; m += niceStep(s.worldW)) { ctx.beginPath(); ctx.moveTo(X(m), padT); ctx.lineTo(X(m), oy); ctx.stroke(); }
      ctx.strokeStyle = col.axis; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(w - padR, oy); ctx.stroke();
      ctx.fillStyle = col.soft; ctx.font = "11px JetBrains Mono, monospace";
      ctx.fillText(s.worldW.toFixed(0) + " m", w - padR - 34, oy + 18);
      // trail
      ctx.strokeStyle = col.accent; ctx.lineWidth = 2; ctx.beginPath();
      s.trail.forEach((p, i) => { const px = X(p.x), py = Y(p.y); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); });
      ctx.stroke();
      // projectile
      const px = X(s.pos.x), py = Y(s.pos.y);
      ctx.fillStyle = col.glow; ctx.beginPath(); ctx.arc(px, py, 11, 0, 7); ctx.fill();
      ctx.fillStyle = col.accent3; ctx.beginPath(); ctx.arc(px, py, 5.5, 0, 7); ctx.fill();
      // velocity vector
      if (!s.landed) {
        ctx.strokeStyle = col.warn; ctx.fillStyle = col.warn; ctx.lineWidth = 2;
        A(ctx, px, py, px + s.vel.x * 4, py - s.vel.y * 4, 7);
      }
    },
    readout(s, c) {
      return {
        "Range": (s.landed ? s.range : s.pos.x).toFixed(1) + " m",
        "Peak": s.hmax.toFixed(1) + " m",
        "Flight time": s.t.toFixed(2) + " s",
        "Speed": Math.hypot(s.vel.x, s.vel.y).toFixed(1) + " m/s",
      };
    },
  });
  function niceStep(range) { const r = range / 6; const p = Math.pow(10, Math.floor(Math.log10(r))); const n = r / p; return (n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7 ? 5 : 10) * p; }

  /* ---------------- 1D Collisions ---------------- */
  function resetColl(s, c) {
    s.b1 = { x: -3.2, v: c.v1, m: c.m1 };
    s.b2 = { x: 3.2, v: c.v2, m: c.m2 };
    s.half = 6.2;
  }
  PSim.register("collisions", {
    title: "Collisions: Momentum vs. Energy", tag: "mechanics", height: 250,
    caption: "Momentum (Σmv) is always conserved. Kinetic energy is conserved only when the restitution is 1 (perfectly elastic). Slide restitution to 0 for a sticky, energy-eating crash.",
    controls: [
      { id: "m1", label: "Mass — blue", type: "range", min: 0.5, max: 6, step: 0.5, value: 2, fmt: (v) => v + " kg" },
      { id: "m2", label: "Mass — purple", type: "range", min: 0.5, max: 6, step: 0.5, value: 4, fmt: (v) => v + " kg" },
      { id: "v1", label: "Start v — blue", type: "range", min: -6, max: 6, step: 0.5, value: 4, fmt: (v) => v + " m/s" },
      { id: "v2", label: "Start v — purple", type: "range", min: -6, max: 6, step: 0.5, value: -2, fmt: (v) => v + " m/s" },
      { id: "e", label: "Restitution", type: "range", min: 0, max: 1, step: 0.05, value: 1, fmt: (v) => v.toFixed(2) },
      { id: "reset", type: "button", label: "Restart ↺", action: (h) => resetColl(h.state, h.cv) },
    ],
    init(g, s, c) { resetColl(s, c); },
    onControl(id, cv, h) { if (id === "m1") h.state.b1.m = cv.m1; else if (id === "m2") h.state.b2.m = cv.m2; else resetColl(h.state, h.cv); },
    step(dt, s, c) {
      const { b1, b2 } = s; const sub = 4;
      for (let i = 0; i < sub; i++) {
        const h = dt / sub;
        b1.x += b1.v * h; b2.x += b2.v * h;
        const r1 = blockHalf(b1.m), r2 = blockHalf(b2.m);
        // walls
        if (b1.x - r1 < -s.half) { b1.x = -s.half + r1; b1.v = Math.abs(b1.v); }
        if (b2.x + r2 > s.half) { b2.x = s.half - r2; b2.v = -Math.abs(b2.v); }
        if (b1.x + r1 < -s.half) { b1.x = -s.half - r1; b1.v = Math.abs(b1.v); }
        // collision
        if (b1.x + r1 >= b2.x - r2 && b1.v - b2.v > 0) {
          const m1 = b1.m, m2 = b2.m, u1 = b1.v, u2 = b2.v, e = c.e;
          b1.v = (m1 * u1 + m2 * u2 + m2 * e * (u2 - u1)) / (m1 + m2);
          b2.v = (m1 * u1 + m2 * u2 + m1 * e * (u1 - u2)) / (m1 + m2);
          const overlap = (b1.x + r1) - (b2.x - r2);
          b1.x -= overlap / 2; b2.x += overlap / 2;
        }
      }
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const sc = (w - 40) / (2 * s.half), ox = w / 2, gy = h - 56;
      const X = (wx) => ox + wx * sc;
      ctx.strokeStyle = col.axis; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(X(-s.half), gy + 24); ctx.lineTo(X(s.half), gy + 24); ctx.stroke();
      // walls
      ctx.fillStyle = col.track; ctx.fillRect(X(-s.half) - 8, gy - 46, 8, 70); ctx.fillRect(X(s.half), gy - 46, 8, 70);
      drawBlock(ctx, X(s.b1.x), gy, s.b1.m, col.accent, col, s.b1.v);
      drawBlock(ctx, X(s.b2.x), gy, s.b2.m, col.accent2, col, s.b2.v);
    },
    readout(s, c) {
      const p = s.b1.m * s.b1.v + s.b2.m * s.b2.v;
      const ke = 0.5 * s.b1.m * s.b1.v ** 2 + 0.5 * s.b2.m * s.b2.v ** 2;
      return { "Total momentum": p.toFixed(2) + " kg·m/s", "Kinetic energy": ke.toFixed(2) + " J" };
    },
  });
  function blockHalf(m) { return 0.35 + 0.18 * Math.cbrt(m); }
  function drawBlock(ctx, cx, gy, m, color, col, v) {
    const wpx = blockHalf(m) * 2 * 38, hpx = 30 + 9 * Math.cbrt(m);
    ctx.fillStyle = color; roundRect(ctx, cx - wpx / 2, gy - hpx, wpx, hpx, 5); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.font = "bold 12px Inter, sans-serif"; ctx.textAlign = "center";
    ctx.fillText(m + "kg", cx, gy - hpx / 2 + 4);
    ctx.textAlign = "left";
    // velocity arrow
    ctx.strokeStyle = col.warn; ctx.fillStyle = col.warn; ctx.lineWidth = 2;
    if (Math.abs(v) > 0.05) PSim.arrow(ctx, cx, gy - hpx - 10, cx + Math.sign(v) * Math.min(Math.abs(v) * 8 + 8, 40), gy - hpx - 10, 6);
  }
  function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }

  /* ---------------- Simple pendulum (real vs small-angle) ---------------- */
  function resetPend(s, c) {
    s.th = (c.amp * Math.PI) / 180; s.w = 0;
    s.thL = s.th; s.wL = 0;            // linear (small-angle) ghost
    s.t = 0; s.lastCross = 0; s.period = 0; s.lastSign = Math.sign(s.th) || 1;
  }
  PSim.register("pendulum", {
    title: "The Pendulum: when does 'simple' break?", tag: "oscillations", height: 330,
    caption: "The dashed ghost is the small-angle approximation θ(t)=θ₀cos(ωt). At small amplitudes the two lock together; past ~30° the real pendulum (solid) visibly lags — its period grows with amplitude.",
    controls: [
      { id: "L", label: "Length", type: "range", min: 0.3, max: 3, step: 0.1, value: 1.6, fmt: (v) => v.toFixed(1) + " m" },
      { id: "g", label: "Gravity", type: "range", min: 1.6, max: 25, step: 0.1, value: 9.8, fmt: (v) => v.toFixed(1) },
      { id: "amp", label: "Amplitude", type: "range", min: 5, max: 175, step: 1, value: 100, fmt: (v) => v + "°" },
      { id: "damp", label: "Damping", type: "range", min: 0, max: 0.6, step: 0.02, value: 0, fmt: (v) => v.toFixed(2) },
      { id: "ghost", label: "Show small-angle ghost", type: "checkbox", value: true },
      { id: "reset", type: "button", label: "Release ↺", action: (h) => resetPend(h.state, h.cv) },
    ],
    init(g, s, c) { resetPend(s, c); },
    onControl(id, cv, h) { if (id !== "ghost" && id !== "damp") resetPend(h.state, h.cv); },
    step(dt, s, c) {
      const sub = 8;
      for (let i = 0; i < sub; i++) {
        const h = dt / sub, k = c.g / c.L;
        s.w += (-k * Math.sin(s.th) - c.damp * s.w) * h; s.th += s.w * h;
        s.wL += (-k * s.thL - c.damp * s.wL) * h; s.thL += s.wL * h;
        s.t += h;
        const sign = Math.sign(s.th);
        if (sign !== 0 && sign !== s.lastSign) { if (s.lastCross) s.period = 2 * (s.t - s.lastCross); s.lastCross = s.t; s.lastSign = sign; }
      }
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const px = w / 2, py = 34;
      const Lpx = (c.L / 3) * (h - 90);
      ctx.fillStyle = col.track; ctx.fillRect(px - 26, py - 8, 52, 8);
      const drawBob = (th, color, dashed, r) => {
        const bx = px + Lpx * Math.sin(th), by = py + Lpx * Math.cos(th);
        ctx.strokeStyle = dashed ? col.soft : col.ink; ctx.lineWidth = dashed ? 1.5 : 2;
        ctx.setLineDash(dashed ? [5, 5] : []); ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(bx, by); ctx.stroke(); ctx.setLineDash([]);
        if (!dashed) { ctx.fillStyle = col.glow; ctx.beginPath(); ctx.arc(bx, by, r + 6, 0, 7); ctx.fill(); }
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(bx, by, r, 0, 7); ctx.fill();
      };
      if (c.ghost) drawBob(s.thL, col.soft, true, 8);
      drawBob(s.th, col.accent3, false, 12);
      // arc
      ctx.strokeStyle = col.grid; ctx.beginPath(); ctx.arc(px, py, Lpx, Math.PI / 2 - 1.4, Math.PI / 2 + 1.4); ctx.stroke();
    },
    readout(s, c) {
      const Tlin = 2 * Math.PI * Math.sqrt(c.L / c.g);
      return { "Angle": ((s.th * 180) / Math.PI).toFixed(0) + "°", "Measured period": (s.period || 0).toFixed(2) + " s", "Small-angle T": Tlin.toFixed(2) + " s" };
    },
  });

  /* ---------------- Double pendulum (chaos) ---------------- */
  function dpAccel(a1, a2, w1, w2, c) {
    const m1 = 1, m2 = c.massRatio, L1 = 1.1, L2 = 1.1, g = c.g;
    const d = a1 - a2, den = 2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2);
    const a1dd = (-g * (2 * m1 + m2) * Math.sin(a1) - m2 * g * Math.sin(a1 - 2 * a2)
      - 2 * Math.sin(d) * m2 * (w2 * w2 * L2 + w1 * w1 * L1 * Math.cos(d))) / (L1 * den);
    const a2dd = (2 * Math.sin(d) * (w1 * w1 * L1 * (m1 + m2) + g * (m1 + m2) * Math.cos(a1)
      + w2 * w2 * L2 * m2 * Math.cos(d))) / (L2 * den);
    return [a1dd, a2dd];
  }
  function stepDP(p, c, h) {
    // RK4 on [a1,a2,w1,w2]
    const f = (st) => { const ac = dpAccel(st[0], st[1], st[2], st[3], c); return [st[2], st[3], ac[0], ac[1]]; };
    const y = [p.a1, p.a2, p.w1, p.w2];
    const add = (a, b, s) => a.map((v, i) => v + b[i] * s);
    const k1 = f(y), k2 = f(add(y, k1, h / 2)), k3 = f(add(y, k2, h / 2)), k4 = f(add(y, k3, h));
    for (let i = 0; i < 4; i++) y[i] += (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
    p.a1 = y[0]; p.a2 = y[1]; p.w1 = y[2]; p.w2 = y[3];
  }
  function resetDP(s, c) {
    const a0 = (c.angle * Math.PI) / 180;
    s.copies = [];
    const n = c.spread ? 3 : 1;
    for (let i = 0; i < n; i++) s.copies.push({ a1: a0 + i * 0.0025, a2: a0, w1: 0, w2: 0, trail: [] });
  }
  PSim.register("doublependulum", {
    title: "Chaos: the Double Pendulum", tag: "nonlinear dynamics", height: 380,
    caption: "Three pendulums start with angles differing by a thousandth of a degree. Watch them track together — then diverge completely. This is deterministic chaos: exact laws, yet practically unpredictable.",
    controls: [
      { id: "angle", label: "Release angle", type: "range", min: 30, max: 179, step: 1, value: 120, fmt: (v) => v + "°" },
      { id: "massRatio", label: "Lower / upper mass", type: "range", min: 0.3, max: 4, step: 0.1, value: 1, fmt: (v) => v.toFixed(1) },
      { id: "g", label: "Gravity", type: "range", min: 4, max: 25, step: 0.5, value: 9.8, fmt: (v) => v.toFixed(1) },
      { id: "spread", label: "Three near-identical copies", type: "checkbox", value: true },
      { id: "trace", label: "Trace the tip", type: "checkbox", value: true },
      { id: "reset", type: "button", label: "Release ↺", action: (h) => resetDP(h.state, h.cv) },
    ],
    init(g, s, c) { resetDP(s, c); },
    onControl(id, cv, h) { if (id !== "trace") resetDP(h.state, h.cv); },
    step(dt, s, c) { const sub = 6, h = Math.min(dt, 0.033) / sub; for (let i = 0; i < sub; i++) s.copies.forEach((p) => stepDP(p, c, h)); },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const px = w / 2, py = h * 0.42, scale = Math.min(w, h) * 0.21;
      const colors = [col.accent3, col.accent, col.accent2];
      s.copies.forEach((p, idx) => {
        const x1 = px + scale * Math.sin(p.a1), y1 = py + scale * Math.cos(p.a1);
        const x2 = x1 + scale * Math.sin(p.a2), y2 = y1 + scale * Math.cos(p.a2);
        if (c.trace) {
          p.trail.push({ x: x2, y: y2 }); if (p.trail.length > 220) p.trail.shift();
          ctx.strokeStyle = colors[idx % 3] + "66"; ctx.lineWidth = 1.5; ctx.beginPath();
          p.trail.forEach((q, i) => (i ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y))); ctx.stroke();
        }
        ctx.strokeStyle = colors[idx % 3]; ctx.lineWidth = idx === 0 ? 2.5 : 1.8; ctx.globalAlpha = idx === 0 ? 1 : 0.85;
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        ctx.fillStyle = colors[idx % 3]; ctx.beginPath(); ctx.arc(x1, y1, 5, 0, 7); ctx.fill(); ctx.beginPath(); ctx.arc(x2, y2, 6, 0, 7); ctx.fill();
        ctx.globalAlpha = 1;
      });
      ctx.fillStyle = col.track; ctx.beginPath(); ctx.arc(px, py, 5, 0, 7); ctx.fill();
    },
  });

  /* ---------------- Orbit / central force ---------------- */
  function resetOrbit(s, c) {
    s.r0 = 1.0; s.pos = { x: s.r0, y: 0 }; s.vel = { x: 0, y: c.speed }; s.trail = []; s.GM = 1.0;
  }
  function orbAccel(pos, c, GM) {
    const r = Math.hypot(pos.x, pos.y), r3 = r * r * r;
    const base = -GM / r3;
    const gr = -c.precess * GM / (r3 * r * r); // ∝ 1/r^5 force → perihelion precession
    return { x: (base + gr) * pos.x, y: (base + gr) * pos.y };
  }
  PSim.register("orbit", {
    title: "Orbits & Kepler's Laws", tag: "gravitation", height: 380,
    caption: "Tune the launch speed: too slow and the planet plunges in; just right gives a circle; faster gives an ellipse; faster still and it escapes on a hyperbola. Add 'relativistic precession' to make the ellipse slowly rosette — exactly what Mercury does.",
    controls: [
      { id: "speed", label: "Launch speed", type: "range", min: 0.4, max: 1.6, step: 0.02, value: 0.95, fmt: (v) => v.toFixed(2) },
      { id: "precess", label: "Relativistic precession", type: "range", min: 0, max: 0.08, step: 0.002, value: 0, fmt: (v) => v.toFixed(3) },
      { id: "trace", label: "Trace orbit", type: "checkbox", value: true },
      { id: "reset", type: "button", label: "Re-launch ↺", action: (h) => resetOrbit(h.state, h.cv) },
    ],
    init(g, s, c) { resetOrbit(s, c); },
    onControl(id, cv, h) { if (id !== "trace") resetOrbit(h.state, h.cv); },
    step(dt, s, c) {
      const sub = 8, h = Math.min(dt, 0.033) / sub;
      for (let i = 0; i < sub; i++) {
        let a = orbAccel(s.pos, c, s.GM);
        s.vel.x += a.x * h / 2; s.vel.y += a.y * h / 2;
        s.pos.x += s.vel.x * h; s.pos.y += s.vel.y * h;
        a = orbAccel(s.pos, c, s.GM);
        s.vel.x += a.x * h / 2; s.vel.y += a.y * h / 2;
        const r = Math.hypot(s.pos.x, s.pos.y);
        if (r < 0.06) resetOrbit(s, c); // fell into the star
        if (r > 6) resetOrbit(s, c);    // escaped — recycle
      }
      if (c.trace) { s.trail.push({ x: s.pos.x, y: s.pos.y }); if (s.trail.length > 1400) s.trail.shift(); }
      else s.trail = [];
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, sc = Math.min(w, h) / 4.4;
      const X = (x) => cx + x * sc, Y = (y) => cy + y * sc;
      if (c.trace) { ctx.strokeStyle = col.accent + "88"; ctx.lineWidth = 1.4; ctx.beginPath(); s.trail.forEach((p, i) => (i ? ctx.lineTo(X(p.x), Y(p.y)) : ctx.moveTo(X(p.x), Y(p.y)))); ctx.stroke(); }
      // star
      ctx.fillStyle = col.warn; ctx.shadowColor = col.warn; ctx.shadowBlur = 22; ctx.beginPath(); ctx.arc(cx, cy, 11, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
      // planet
      const px = X(s.pos.x), py = Y(s.pos.y);
      ctx.fillStyle = col.accent3; ctx.beginPath(); ctx.arc(px, py, 6.5, 0, 7); ctx.fill();
      // velocity
      ctx.strokeStyle = col.soft; ctx.fillStyle = col.soft; ctx.lineWidth = 1.5;
      PSim.arrow(ctx, px, py, px + s.vel.x * sc * 0.5, py + s.vel.y * sc * 0.5, 6);
    },
    readout(s, c) {
      const r = Math.hypot(s.pos.x, s.pos.y), v = Math.hypot(s.vel.x, s.vel.y);
      const E = 0.5 * v * v - s.GM / r, L = s.pos.x * s.vel.y - s.pos.y * s.vel.x;
      return { "Distance r": r.toFixed(2), "Speed v": v.toFixed(2), "Energy E": E.toFixed(3) + (E < 0 ? " (bound)" : " (escape)"), "Ang. mom. L": L.toFixed(3) };
    },
  });
})();
