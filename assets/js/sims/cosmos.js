/* ============================================================
   Astrophysics & cosmology simulations:
   blackbody · cosmo (expanding universe) · rotationcurve · decay
   ============================================================ */
(function () {
  const P = window.PSim;
  const TAU = Math.PI * 2;

  /* ---- blackbody color approximation (T in K -> rgb) ---- */
  function bbColor(T) {
    T = Math.max(1000, Math.min(12000, T)) / 100;
    let r, g, b;
    if (T <= 66) { r = 255; g = 99.47 * Math.log(T) - 161.1; }
    else { r = 329.7 * Math.pow(T - 60, -0.1332); g = 288.1 * Math.pow(T - 60, -0.0755); }
    if (T >= 66) b = 255;
    else if (T <= 19) b = 0;
    else b = 138.5 * Math.log(T - 10) - 305.0;
    const cl = (x) => Math.max(0, Math.min(255, x)) | 0;
    return `rgb(${cl(r)},${cl(g)},${cl(b)})`;
  }

  /* ---------------- Blackbody spectrum (UV catastrophe) ---------------- */
  P.register("blackbody", {
    title: "Blackbody radiation", tag: "thermal light", height: 380,
    caption: "Classical physics (dashed) predicts infinite energy at short wavelengths — the ultraviolet catastrophe. Planck's quantised oscillators (filled curve) cured it and accidentally launched quantum theory.",
    controls: [
      { id: "T", label: "Temperature", type: "range", min: 1000, max: 12000, step: 100, value: 5800, fmt: (v) => v + " K" },
      { id: "rj", label: "Show classical (Rayleigh–Jeans)", type: "checkbox", value: true },
    ],
    init() {},
    step() {},
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g;
      ctx.clearRect(0, 0, w, h);
      const T = c.T, L0 = 40, R0 = h - 36, top = 18, right = w - 16;
      const lamMax = 2200; // nm on x-axis
      const hck = 1.439e7;  // hc/k in nm·K
      const planck = (lam) => (1 / Math.pow(lam, 5)) / (Math.exp(hck / (lam * T)) - 1);
      const rj = (lam) => T / Math.pow(lam, 4) / hck * 1e0 * 1; // classical ∝ T/λ⁴
      // scale to the Planck peak of the HOTTEST setting so hotter really looks brighter
      const peakLam = 2.898e6 / T;
      const norm = planck(peakLam) * Math.pow(12000 / 1, 0); // local norm
      const maxVal = planck(peakLam) * (12000 / T) * 1.05 / (12000 / T); // keep peak ~85% height but grow with T
      // simpler: normalise so the curve for current T peaks at 0.82*plot height, but scale height by (T/12000)^? to show growth
      const scaleY = (R0 - top);
      const peakP = planck(peakLam);
      const heightFrac = 0.25 + 0.62 * (T / 12000); // hotter ⇒ taller (Stefan–Boltzmann flavour)
      const Y = (val) => R0 - (val / peakP) * scaleY * heightFrac;
      const X = (lam) => L0 + (lam / lamMax) * (right - L0);
      // axes
      ctx.strokeStyle = col.axis; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(L0, top - 6); ctx.lineTo(L0, R0); ctx.lineTo(right, R0); ctx.stroke();
      ctx.fillStyle = col.soft; ctx.font = "11px sans-serif";
      ctx.fillText("wavelength →", right - 84, R0 + 22);
      ctx.save(); ctx.translate(14, top + 70); ctx.rotate(-Math.PI / 2); ctx.fillText("intensity →", 0, 0); ctx.restore();
      // visible-light band
      const grd = ctx.createLinearGradient(X(380), 0, X(750), 0);
      ["#7a00ff", "#0040ff", "#00d0a0", "#b8ff00", "#ffd000", "#ff5a00", "#ff0000"].forEach((cc, i, a) => grd.addColorStop(i / (a.length - 1), cc));
      ctx.globalAlpha = 0.16; ctx.fillStyle = grd; ctx.fillRect(X(380), top - 6, X(750) - X(380), R0 - top + 6); ctx.globalAlpha = 1;
      // Rayleigh–Jeans (classical)
      if (c.rj) {
        ctx.strokeStyle = col.danger; ctx.lineWidth = 2; ctx.setLineDash([6, 5]);
        ctx.beginPath();
        for (let lam = 60; lam <= lamMax; lam += 6) { const y = Y(rj(lam)); const px = X(lam), py = Math.max(top - 30, y); lam === 60 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
        ctx.stroke(); ctx.setLineDash([]);
      }
      // Planck curve (filled)
      ctx.beginPath();
      let started = false;
      for (let lam = 60; lam <= lamMax; lam += 4) { const px = X(lam), py = Y(planck(lam)); if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py); }
      ctx.lineTo(X(lamMax), R0); ctx.lineTo(X(60), R0); ctx.closePath();
      const fill = ctx.createLinearGradient(0, top, 0, R0);
      fill.addColorStop(0, "rgba(91,140,255,.45)"); fill.addColorStop(1, "rgba(91,140,255,.04)");
      ctx.fillStyle = fill; ctx.fill();
      ctx.strokeStyle = col.accent; ctx.lineWidth = 2.4; ctx.beginPath();
      for (let lam = 60, st = false; lam <= lamMax; lam += 4) { const px = X(lam), py = Y(planck(lam)); st ? ctx.lineTo(px, py) : (ctx.moveTo(px, py), st = true); }
      ctx.stroke();
      // peak marker
      const pX = X(peakLam);
      if (peakLam < lamMax) { ctx.strokeStyle = col.warn; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(pX, Y(peakP)); ctx.lineTo(pX, R0); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = col.warn; ctx.beginPath(); ctx.arc(pX, Y(peakP), 4, 0, TAU); ctx.fill(); }
      // color swatch
      ctx.fillStyle = bbColor(T); ctx.strokeStyle = col.soft;
      ctx.beginPath(); ctx.arc(right - 26, top + 16, 12, 0, TAU); ctx.fill(); ctx.stroke();
    },
    readout(s, c) {
      const peak = 2.898e6 / c.T;
      const region = peak < 400 ? "ultraviolet" : peak < 750 ? "visible" : "infrared";
      return { "Peak λ": (peak | 0) + " nm (" + region + ")", "Total power ∝ T⁴": (Math.pow(c.T / 1000, 4)).toFixed(1) + " (rel.)", "Looks": c.T < 4000 ? "reddish" : c.T < 6500 ? "white-hot" : "blue-white" };
    },
  });

  /* ---------------- Expanding universe (Friedmann) ---------------- */
  function cosmoReset(s, c) {
    s.a = 0.06; s.t = 0; s.hist = [];
    if (!s.gal) {
      s.gal = [];
      for (let i = 0; i < 90; i++) { const ang = Math.random() * TAU; const r = Math.sqrt(Math.random()) * 1; s.gal.push({ x: Math.cos(ang) * r, y: Math.sin(ang) * r, m: 0.6 + Math.random() }); }
    }
  }
  P.register("cosmo", {
    title: "The expanding universe", tag: "cosmology", height: 400,
    caption: "Space itself stretches: every galaxy sees all others recede, faster the farther they are (Hubble's law). Add dark energy and the expansion stops coasting and accelerates.",
    controls: [
      { id: "OL", label: "Dark energy  Ω_Λ", type: "range", min: 0, max: 0.95, step: 0.05, value: 0.7, fmt: (v) => v.toFixed(2) },
      { id: "rate", label: "Time speed", type: "range", min: 0.2, max: 2.5, step: 0.1, value: 1, fmt: (v) => v.toFixed(1) + "×" },
      { id: "bang", type: "button", label: "↺ Big Bang", action: (sim) => sim.reset() },
    ],
    init(g, s, c) { cosmoReset(s, c); },
    step(dt, s, c) {
      dt = Math.min(dt, 0.05) * c.rate;
      const Om = 1 - c.OL, OL = c.OL;
      const n = 4, hh = dt / n;
      for (let i = 0; i < n; i++) {
        const a = s.a;
        const H = Math.sqrt(Math.max(1e-6, Om / (a * a * a) + OL));
        s.a += a * H * hh; s.t += hh;
      }
      if (s.a > 3.2) cosmoReset(s, c);
      s.hist.push([s.t, s.a]); if (s.hist.length > 600) s.hist.shift();
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, base = Math.min(w, h) * 0.46;
      const Om = 1 - c.OL, OL = c.OL;
      const H = Math.sqrt(Math.max(1e-6, Om / (s.a * s.a * s.a) + OL));
      // galaxies at comoving pos × scale factor
      s.gal.forEach((gx) => {
        const d = Math.hypot(gx.x, gx.y);
        const px = cx + gx.x * s.a * base, py = cy + gx.y * s.a * base;
        if (px < -10 || px > w + 10 || py < -10 || py > h + 10) return;
        const z = s.a; // redshift tint: farther/faster ⇒ redder
        const recede = Math.min(1, H * d * s.a / 1.6);
        ctx.fillStyle = `rgb(${200 + recede * 55|0},${190 - recede * 120|0},${230 - recede * 150|0})`;
        ctx.beginPath(); ctx.arc(px, py, 1.6 + gx.m * 1.6, 0, TAU); ctx.fill();
      });
      // observer
      ctx.fillStyle = col.warn; ctx.beginPath(); ctx.arc(cx, cy, 3.5, 0, TAU); ctx.fill();
      ctx.strokeStyle = "rgba(255,181,71,.4)"; ctx.beginPath(); ctx.arc(cx, cy, 7, 0, TAU); ctx.stroke();
      // a(t) inset
      const ix = 14, iy = h - 14, iw = w * 0.3, ih = h * 0.28;
      ctx.fillStyle = "rgba(20,26,42,.5)"; ctx.fillRect(ix - 4, iy - ih - 8, iw + 10, ih + 16);
      ctx.strokeStyle = col.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ix, iy - ih); ctx.lineTo(ix, iy); ctx.lineTo(ix + iw, iy); ctx.stroke();
      ctx.fillStyle = col.soft; ctx.font = "10px sans-serif"; ctx.fillText("scale factor a(t)", ix + 2, iy - ih - 1);
      if (s.hist.length > 1) {
        const tMax = Math.max(1.2, s.hist[s.hist.length - 1][0]);
        ctx.strokeStyle = col.accent3; ctx.lineWidth = 2; ctx.beginPath();
        s.hist.forEach((p, i) => { const px = ix + (p[0] / tMax) * iw, py = iy - Math.min(1, p[1] / 3.2) * ih; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.stroke();
      }
    },
    readout(s, c) {
      const Om = 1 - c.OL, OL = c.OL;
      const q = 0.5 * Om / (s.a * s.a * s.a) - OL; // deceleration parameter ∝ ; q<0 ⇒ accelerating
      const Heff = Math.sqrt(Math.max(1e-6, Om / (s.a * s.a * s.a) + OL));
      return { "Scale factor a": s.a.toFixed(2), "Hubble rate H": Heff.toFixed(2), "Expansion": (q < -0.01 ? "accelerating" : q > 0.01 ? "decelerating" : "coasting") };
    },
  });

  /* ---------------- Galaxy rotation curve (dark matter) ---------------- */
  function vDisk(r) { return 1.5 * Math.sqrt(r) * Math.exp(-r * 0.55); }          // rises then Keplerian fall
  function vHalo(r, amt) { return amt * Math.sqrt(1 - Math.exp(-r * r * 0.35)); } // isothermal-ish, flat at large r
  function vTot(r, amt) { return Math.sqrt(vDisk(r) * vDisk(r) + vHalo(r, amt) * vHalo(r, amt)); }
  function rcReset(s) {
    s.stars = [];
    for (let i = 0; i < 220; i++) { const r = 0.25 + Math.pow(Math.random(), 0.6) * 3.0; const ph = Math.random() * TAU; s.stars.push({ r, ph }); }
    s.t = 0;
  }
  P.register("rotationcurve", {
    title: "Galaxy rotation & dark matter", tag: "evidence", height: 400,
    caption: "Visible stars alone (dashed) should orbit slower the farther out they are — Kepler's law. Real galaxies stay flat (solid). The gap is the gravity of unseen dark matter.",
    controls: [
      { id: "dm", label: "Dark-matter halo", type: "range", min: 0, max: 1.7, step: 0.05, value: 1.2, fmt: (v) => v.toFixed(2) },
      { id: "halo", label: "Show halo", type: "checkbox", value: true },
    ],
    init(g, s, c) { rcReset(s); },
    step(dt, s, c) {
      dt = Math.min(dt, 0.05);
      s.stars.forEach((st) => { st.ph += (vTot(st.r, c.dm) / st.r) * dt * 0.6; });
      s.t += dt;
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g;
      ctx.clearRect(0, 0, w, h);
      const gx = w * 0.34, gy = h / 2, scale = Math.min(w * 0.3, h * 0.42) / 3.3;
      // halo glow
      if (c.halo && c.dm > 0) {
        const rg = ctx.createRadialGradient(gx, gy, 6, gx, gy, 3.4 * scale);
        rg.addColorStop(0, `rgba(155,107,255,${0.02 + c.dm * 0.05})`); rg.addColorStop(1, "rgba(155,107,255,0)");
        ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(gx, gy, 3.4 * scale, 0, TAU); ctx.fill();
      }
      // bulge
      ctx.fillStyle = col.warn; ctx.shadowColor = col.warn; ctx.shadowBlur = 16; ctx.beginPath(); ctx.arc(gx, gy, 5, 0, TAU); ctx.fill(); ctx.shadowBlur = 0;
      // stars
      s.stars.forEach((st) => { const px = gx + Math.cos(st.ph) * st.r * scale, py = gy + Math.sin(st.ph) * st.r * scale * 0.96; const b = 0.5 + 0.5 * Math.exp(-st.r * 0.4); ctx.fillStyle = `rgba(${200},${220},255,${b})`; ctx.beginPath(); ctx.arc(px, py, 1.4, 0, TAU); ctx.fill(); });
      // v(r) plot on the right
      const px0 = w * 0.62, py0 = h - 40, pw = w * 0.33, ph = h - 80;
      ctx.strokeStyle = col.axis; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(px0, py0 - ph); ctx.lineTo(px0, py0); ctx.lineTo(px0 + pw, py0); ctx.stroke();
      ctx.fillStyle = col.soft; ctx.font = "11px sans-serif"; ctx.fillText("orbital speed v(r)", px0, py0 - ph - 6); ctx.fillText("radius →", px0 + pw - 56, py0 + 18);
      const vmax = 1.6, X = (r) => px0 + (r / 3.3) * pw, Y = (v) => py0 - Math.min(1, v / vmax) * ph;
      // visible-only (dashed)
      ctx.strokeStyle = col.soft; ctx.setLineDash([5, 4]); ctx.lineWidth = 1.8; ctx.beginPath();
      for (let r = 0.05; r <= 3.3; r += 0.05) { const px = X(r), py = Y(vDisk(r)); r === 0.05 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); } ctx.stroke(); ctx.setLineDash([]);
      // total (solid)
      ctx.strokeStyle = col.accent3; ctx.lineWidth = 2.4; ctx.beginPath();
      for (let r = 0.05; r <= 3.3; r += 0.05) { const px = X(r), py = Y(vTot(r, c.dm)); r === 0.05 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); } ctx.stroke();
    },
    readout(s, c) {
      const edge = vTot(3.0, c.dm), vis = vDisk(3.0);
      return { "Speed at edge (observed)": edge.toFixed(2), "If only visible matter": vis.toFixed(2), "Missing mass": c.dm > 0.05 ? "needs dark matter" : "curve falls off — ruled out" };
    },
  });

  /* ---------------- Radioactive decay & half-life ---------------- */
  function decayReset(s, c) {
    s.N0 = 360; s.parent = s.N0; s.t = 0; s.hist = [];
    s.grid = []; const cols = 24, rows = 15;
    for (let i = 0; i < s.N0; i++) s.grid.push(1);
    s.cols = cols; s.rows = rows;
  }
  P.register("decay", {
    title: "Radioactive decay & half-life", tag: "nuclear", height: 380,
    caption: "Each nucleus decays at random, yet a huge population thins out with a fixed half-life. Individually unpredictable, collectively exact — that's the law of large numbers in action.",
    controls: [
      { id: "hl", label: "Half-life", type: "range", min: 0.6, max: 5, step: 0.2, value: 2, fmt: (v) => v.toFixed(1) + " s" },
      { id: "go", type: "button", label: "↺ Fresh sample", action: (sim) => sim.reset() },
    ],
    init(g, s, c) { decayReset(s, c); },
    step(dt, s, c) {
      dt = Math.min(dt, 0.05);
      const lam = Math.LN2 / c.hl;
      const p = 1 - Math.exp(-lam * dt);
      for (let i = 0; i < s.grid.length; i++) { if (s.grid[i] === 1 && Math.random() < p) { s.grid[i] = 0; s.parent--; } }
      s.t += dt;
      s.hist.push([s.t, s.parent / s.N0]); if (s.hist.length > 700) s.hist.shift();
      if (s.parent <= 2) { /* let it sit a moment then refresh */ if ((s._wait = (s._wait || 0) + dt) > 1.4) { s._wait = 0; decayReset(s, c); } }
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g;
      ctx.clearRect(0, 0, w, h);
      // nucleus grid (left)
      const gx0 = 16, gy0 = 18, cell = Math.min((w * 0.46) / s.cols, (h - 60) / s.rows);
      for (let i = 0; i < s.grid.length; i++) { const r = (i / s.cols) | 0, cc = i % s.cols; const px = gx0 + cc * cell + cell / 2, py = gy0 + r * cell + cell / 2; if (s.grid[i] === 1) { ctx.fillStyle = col.accent; ctx.beginPath(); ctx.arc(px, py, cell * 0.32, 0, TAU); ctx.fill(); } else { ctx.fillStyle = col.danger; ctx.globalAlpha = 0.5; ctx.beginPath(); ctx.arc(px, py, cell * 0.22, 0, TAU); ctx.fill(); ctx.globalAlpha = 1; } }
      // decay curve (right)
      const px0 = w * 0.6, py0 = h - 34, pw = w * 0.36, ph = h - 70;
      ctx.strokeStyle = col.axis; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(px0, py0 - ph); ctx.lineTo(px0, py0); ctx.lineTo(px0 + pw, py0); ctx.stroke();
      const tMax = Math.max(5, c.hl * 4.2);
      const X = (t) => px0 + (t / tMax) * pw, Y = (f) => py0 - f * ph;
      // theoretical curve
      ctx.strokeStyle = col.soft; ctx.setLineDash([4, 4]); ctx.beginPath();
      for (let t = 0; t <= tMax; t += tMax / 120) { const f = Math.exp(-Math.LN2 / c.hl * t); const px = X(t), py = Y(f); t === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); } ctx.stroke(); ctx.setLineDash([]);
      // half-life gridlines
      ctx.fillStyle = col.soft; ctx.font = "10px sans-serif";
      for (let k = 1; k <= 4; k++) { const t = k * c.hl; if (t > tMax) break; ctx.strokeStyle = "rgba(120,140,180,.25)"; ctx.beginPath(); ctx.moveTo(X(t), py0); ctx.lineTo(X(t), Y(Math.pow(0.5, k))); ctx.stroke(); ctx.strokeStyle = "rgba(120,140,180,.25)"; ctx.beginPath(); ctx.moveTo(px0, Y(Math.pow(0.5, k))); ctx.lineTo(X(t), Y(Math.pow(0.5, k))); ctx.stroke(); ctx.fillText(k + "T½", X(t) - 8, py0 + 14); }
      // measured points
      ctx.strokeStyle = col.accent3; ctx.lineWidth = 2.2; ctx.beginPath();
      s.hist.forEach((p, i) => { const px = X(p[0]), py = Y(p[1]); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.stroke();
    },
    readout(s, c) {
      return { "Remaining": s.parent + " / " + s.N0, "Fraction": (s.parent / s.N0 * 100).toFixed(0) + "%", "Elapsed": (s.t / c.hl).toFixed(2) + " half-lives" };
    },
  });
})();
