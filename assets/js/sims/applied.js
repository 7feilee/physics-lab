/* ============================================================
   Applied-physics simulations:
   laser (stimulated emission) · fluid (potential flow & lift)
   ============================================================ */
(function () {
  const P = window.PSim;
  const TAU = Math.PI * 2;

  /* ---------------- Laser: pumping, inversion, stimulated emission ---------------- */
  function laserReset(s, g) {
    s.atoms = [];
    const xL = 60, xR = (g.w || 600) - 60;
    for (let i = 0; i < 64; i++) s.atoms.push({ x: xL + 18 + Math.random() * (xR - xL - 36), y: 30 + Math.random() * ((g.h || 360) - 60), ex: false });
    s.photons = []; s.output = 0; s.outRate = 0; s._acc = 0;
  }
  P.register("laser", {
    title: "How a laser works", tag: "quantum optics", height: 360,
    caption: "Pump energy in to get more atoms excited than relaxed — a population inversion. One photon then triggers an identical twin from each excited atom (stimulated emission); mirrors recycle them into an avalanche of coherent light.",
    controls: [
      { id: "pump", label: "Pump power", type: "range", min: 0, max: 1, step: 0.02, value: 0.5, fmt: (v) => Math.round(v * 100) + "%" },
      { id: "leak", label: "Output mirror", type: "range", min: 0.01, max: 0.2, step: 0.01, value: 0.05, fmt: (v) => Math.round(v * 100) + "%" },
      { id: "go", type: "button", label: "↺ Reset", action: (sim) => sim.reset() },
    ],
    init(g, s, c) { s._w = g.w; s._h = g.h; laserReset(s, g); },
    resize(g, s, c) { s._w = g.w; s._h = g.h; if (!s.atoms) laserReset(s, g); },
    step(dt, s, c) {
      dt = Math.min(dt, 0.05);
      const xL = 60, xR = (s._w || 600) - 60;
      // pump + spontaneous decay
      s.atoms.forEach((a) => {
        if (!a.ex) { if (Math.random() < c.pump * 2.2 * dt) a.ex = true; }
        else if (Math.random() < 0.12 * dt) { a.ex = false; if (s.photons.length < 320 && Math.random() < 0.5) s.photons.push({ x: a.x, y: a.y, dir: Math.random() < 0.5 ? 1 : -1, sp: false }); }
      });
      // seed a little spontaneous light so lasing can start
      if (s.photons.length < 2 && Math.random() < 0.6) { const a = s.atoms[(Math.random() * s.atoms.length) | 0]; s.photons.push({ x: a.x, y: a.y, dir: Math.random() < 0.5 ? 1 : -1, sp: false }); }
      const v = 360;
      const next = [];
      let leaked = 0;
      s.photons.forEach((p) => {
        p.x += p.dir * v * dt;
        // stimulated emission: passing an excited atom clones the photon
        for (let k = 0; k < s.atoms.length; k++) { const a = s.atoms[k]; if (a.ex && Math.abs(a.y - p.y) < 9 && Math.abs(a.x - p.x) < v * dt + 3) { a.ex = false; if (s.photons.length + next.length < 320) next.push({ x: a.x, y: p.y, dir: p.dir, sp: true }); break; } }
        // mirrors
        if (p.x <= xL) { p.x = xL; p.dir = 1; }
        else if (p.x >= xR) { if (Math.random() < c.leak) { leaked++; return; } p.x = xR; p.dir = -1; }
        next.push(p);
      });
      s.photons = next;
      s._acc += dt; s.output += leaked;
      if (s._acc > 0.25) { s.outRate = s.output / s._acc; s.output = 0; s._acc = 0; }
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g;
      s._w = w; s._h = h;
      ctx.clearRect(0, 0, w, h);
      const xL = 60, xR = w - 60;
      // mirrors
      ctx.fillStyle = col.soft; ctx.fillRect(xL - 8, 16, 6, h - 32);
      ctx.fillStyle = "rgba(150,170,210,.5)"; ctx.fillRect(xR + 2, 16, 6, h - 32);
      ctx.fillStyle = col.soft; ctx.font = "10px sans-serif"; ctx.fillText("full mirror", xL - 8, 12); ctx.fillText("output", xR - 6, 12);
      // gain medium box
      ctx.strokeStyle = col.grid; ctx.strokeRect(xL, 16, xR - xL, h - 32);
      // atoms
      s.atoms.forEach((a) => {
        ctx.fillStyle = a.ex ? col.warn : "rgba(120,140,180,.5)";
        if (a.ex) { ctx.shadowColor = col.warn; ctx.shadowBlur = 8; }
        ctx.beginPath(); ctx.arc(a.x, a.y, a.ex ? 4 : 3, 0, TAU); ctx.fill(); ctx.shadowBlur = 0;
      });
      // photons
      ctx.lineWidth = 2;
      s.photons.forEach((p) => { ctx.strokeStyle = p.sp ? col.accent3 : col.accent; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.dir * 9, p.y); ctx.stroke(); });
      // output beam
      const beam = Math.min(1, s.outRate / 60);
      if (beam > 0.02) { const grd = ctx.createLinearGradient(xR, 0, w, 0); grd.addColorStop(0, `rgba(46,230,199,${0.2 + beam * 0.7})`); grd.addColorStop(1, "rgba(46,230,199,0)"); ctx.fillStyle = grd; ctx.fillRect(xR + 8, h / 2 - 6 - beam * 10, w - xR - 8, 12 + beam * 20); }
    },
    readout(s, c) {
      const inv = s.atoms ? s.atoms.filter((a) => a.ex).length / s.atoms.length : 0;
      const lasing = s.photons && s.photons.length > 40;
      return { "Inversion": Math.round(inv * 100) + "%", "Photons in cavity": s.photons ? s.photons.length : 0, "State": lasing ? "LASING ✦" : inv > 0.45 ? "inverted — near threshold" : "below threshold" };
    },
  });
  function g_w(s) { return (s.atoms && s.atoms.length && s.atoms[0]) ? (s._w || 600) : 600; }

  /* ---------------- Fluid: potential flow past a cylinder ---------------- */
  function fluidReset(s, g) {
    s.tr = [];
    const W = g.w || 600, H = g.h || 360;
    for (let i = 0; i < 520; i++) s.tr.push({ x: Math.random() * W, y: Math.random() * H });
  }
  P.register("fluid", {
    title: "Flow past a wing", tag: "fluid dynamics", height: 360,
    caption: "Ideal flow streams around the cylinder. Add circulation (spin) and the streamlines crowd over the top, speed up, and — by Bernoulli — drop the pressure there: that pressure difference is lift. It's why wings fly and spinning balls curve.",
    controls: [
      { id: "U", label: "Flow speed", type: "range", min: 30, max: 160, step: 5, value: 90, fmt: (v) => v + "" },
      { id: "circ", label: "Circulation (spin → lift)", type: "range", min: -1.4, max: 1.4, step: 0.1, value: 0.6, fmt: (v) => v.toFixed(1) },
      { id: "go", type: "button", label: "↺ Reset", action: (sim) => sim.reset() },
    ],
    init(g, s, c) { s._w = g.w; s._h = g.h; fluidReset(s, g); },
    resize(g, s, c) { s._w = g.w; s._h = g.h; if (!s.tr) fluidReset(s, g); },
    step(dt, s, c) {
      dt = Math.min(dt, 0.05);
      const W = g_w2(s), H = s._h || 360, cx = W * 0.42, cy = H / 2, a = Math.min(W, H) * 0.14;
      const a2 = a * a, gamma = c.circ * c.U * a * 2.2;
      s.tr.forEach((p) => {
        const dx = p.x - cx, dy = p.y - cy, r2 = dx * dx + dy * dy;
        if (r2 < a2 * 1.001) { respawn(p, W, H, cx, cy, a); return; }
        const r4 = r2 * r2;
        const u = c.U * (1 - a2 * (dx * dx - dy * dy) / r4) + gamma * dy / (TAU * r2);
        const v = -2 * c.U * a2 * dx * dy / r4 - gamma * dx / (TAU * r2);
        p.x += u * dt; p.y += v * dt; p.sp = Math.hypot(u, v);
        if (p.x > W + 4 || p.y < -4 || p.y > H + 4) respawn(p, W, H, cx, cy, a);
      });
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g;
      s._w = w; s._h = h;
      ctx.fillStyle = col.ink; ctx.globalAlpha = 0.001; ctx.fillRect(0, 0, w, h); ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.42, cy = h / 2, a = Math.min(w, h) * 0.14;
      // tracers as short streaks coloured by speed
      ctx.lineWidth = 1.6;
      s.tr.forEach((p) => {
        const sp = Math.min(1, (p.sp || c.U) / (c.U * 2.2));
        ctx.strokeStyle = `rgb(${80 + sp * 175|0},${160 - sp * 40|0},${255 - sp * 120|0})`;
        ctx.globalAlpha = 0.75; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - 5, p.y); ctx.stroke(); ctx.globalAlpha = 1;
      });
      // cylinder / wing
      ctx.fillStyle = col.surface || "#18202f"; ctx.fillStyle = "rgba(40,50,70,.95)";
      ctx.beginPath(); ctx.arc(cx, cy, a, 0, TAU); ctx.fill();
      ctx.strokeStyle = col.soft; ctx.lineWidth = 2; ctx.stroke();
      // spin indicator
      if (Math.abs(c.circ) > 0.05) { ctx.strokeStyle = col.warn; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, a * 0.5, 0, TAU * 0.78 * Math.sign(c.circ) || 0.01); ctx.stroke(); }
      // lift arrow
      if (Math.abs(c.circ) > 0.05) { const L = c.circ * 60; ctx.strokeStyle = col.accent3; ctx.fillStyle = col.accent3; ctx.lineWidth = 2.5; P.arrow(ctx, cx, cy, cx, cy - L, 8); ctx.fillStyle = col.soft; ctx.font = "11px sans-serif"; ctx.fillText(c.circ > 0 ? "lift" : "down-force", cx + 8, cy - L / 2); }
    },
    readout(s, c) {
      const lift = c.circ * c.U;
      return { "Flow speed U": c.U, "Circulation Γ": c.circ.toFixed(1), "Lift ∝ U·Γ": lift > 5 ? "up ↑" : lift < -5 ? "down ↓" : "none (symmetric)" };
    },
  });
  function g_w2(s) { return s._w || 600; }
  function respawn(p, W, H, cx, cy, a) {
    p.x = -2 + Math.random() * 6;
    p.y = Math.random() * H;
    // avoid spawning inside the cylinder's shadow line
    if (Math.abs(p.y - cy) < a * 1.1 && Math.random() < 0.5) p.y = cy + (Math.random() < 0.5 ? -1 : 1) * (a * 1.4 + Math.random() * H * 0.4);
    p.sp = 0;
  }
})();
