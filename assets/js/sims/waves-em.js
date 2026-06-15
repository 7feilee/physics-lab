/* Waves & electromagnetism sims: ripple-tank interference, electric field, double slit */
(function () {

  /* ---------------- Ripple-tank interference ---------------- */
  PSim.register("waves", {
    title: "Wave Interference (ripple tank)", tag: "waves", height: 320,
    caption: "Two sources sending out identical waves. Bright bands are constructive interference (crests meeting crests); dark channels are destructive interference. Bring the sources together or stretch the wavelength and watch the pattern breathe.",
    controls: [
      { id: "lambda", label: "Wavelength", type: "range", min: 14, max: 70, step: 1, value: 34, fmt: (v) => v + " px" },
      { id: "sep", label: "Source separation", type: "range", min: 0, max: 240, step: 4, value: 130, fmt: (v) => v + " px" },
      { id: "two", label: "Two sources", type: "checkbox", value: true },
      { id: "speed", label: "Animate", type: "checkbox", value: true },
    ],
    init(g, s, c) { s.t = 0; s.buf = document.createElement("canvas"); },
    step(dt, s, c) { if (c.speed) s.t += dt * 6; },
    draw(g, s, c) {
      const { ctx, w, h } = g;
      const cell = 3, gw = Math.ceil(w / cell), gh = Math.ceil(h / cell);
      const buf = s.buf; if (buf.width !== gw || buf.height !== gh) { buf.width = gw; buf.height = gh; }
      const bctx = buf.getContext("2d");
      const img = bctx.createImageData(gw, gh);
      const k = (2 * Math.PI) / c.lambda, w0 = k * 3.2;
      const srcs = c.two ? [{ x: w / 2 - c.sep / 2, y: h * 0.5 }, { x: w / 2 + c.sep / 2, y: h * 0.5 }] : [{ x: w / 2, y: h * 0.5 }];
      const light = document.body.dataset.theme === "light";
      const n = srcs.length;
      for (let j = 0; j < gh; j++) {
        for (let i = 0; i < gw; i++) {
          const x = i * cell, y = j * cell; let v = 0;
          for (let m = 0; m < n; m++) {
            const r = Math.hypot(x - srcs[m].x, y - srcs[m].y);
            v += Math.cos(k * r - w0 * s.t) / (1 + r * 0.012);
          }
          const norm = (v / n) * 0.5 + 0.5; // 0..1
          const idx = (j * gw + i) * 4;
          if (light) {
            img.data[idx] = 30 + (1 - norm) * 200; img.data[idx + 1] = 70 + (1 - norm) * 150; img.data[idx + 2] = 150 + norm * 90;
          } else {
            img.data[idx] = norm * 70; img.data[idx + 1] = 40 + norm * 170; img.data[idx + 2] = 90 + norm * 165;
          }
          img.data[idx + 3] = 255;
        }
      }
      bctx.putImageData(img, 0, 0);
      ctx.imageSmoothingEnabled = true; ctx.drawImage(buf, 0, 0, gw, gh, 0, 0, w, h);
      // mark sources
      ctx.fillStyle = "#fff";
      srcs.forEach((sp) => { ctx.beginPath(); ctx.arc(sp.x, sp.y, 4, 0, 7); ctx.fill(); });
    },
  });

  /* ---------------- Electric field (draggable charges) ---------------- */
  function fieldAt(px, py, charges) {
    let ex = 0, ey = 0;
    for (const q of charges) {
      const dx = px - q.x, dy = py - q.y, r2 = dx * dx + dy * dy + 80;
      const inv = q.q / (r2 * Math.sqrt(r2));
      ex += inv * dx; ey += inv * dy;
    }
    return [ex, ey];
  }
  function resetField(s) { s.charges = [{ x: 0, y: 0, q: 90 }, { x: 0, y: 0, q: -90 }]; s.placed = false; s.drag = -1; }
  PSim.register("efield", {
    title: "Electric Field — drag the charges", tag: "electromagnetism", height: 380,
    caption: "Field lines stream out of positive charges (blue) and into negative ones (red). Drag a charge to feel how the whole field reshapes instantly. Add charges to build dipoles, lines and grids.",
    controls: [
      { id: "lines", label: "Field lines", type: "checkbox", value: true },
      { id: "vectors", label: "Vector grid", type: "checkbox", value: true },
      { id: "addp", type: "button", label: "Add +", action: (h) => h.state.charges.push({ x: h.g.w * 0.5, y: h.g.h * 0.35, q: 90 }) },
      { id: "addn", type: "button", label: "Add −", variant: "ghost", action: (h) => h.state.charges.push({ x: h.g.w * 0.5, y: h.g.h * 0.65, q: -90 }) },
      { id: "reset", type: "button", label: "Reset", variant: "ghost", action: (h) => { resetField(h.state); h.state.placed = false; } },
    ],
    init(g, s, c) { resetField(s); },
    onPointer(type, x, y, s, c) {
      if (type === "down") { let best = -1, bd = 26 * 26; s.charges.forEach((q, i) => { const d = (q.x - x) ** 2 + (q.y - y) ** 2; if (d < bd) { bd = d; best = i; } }); s.drag = best; }
      else if (type === "move" && s.drag >= 0) { s.charges[s.drag].x = x; s.charges[s.drag].y = y; }
      else if (type === "up") s.drag = -1;
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      if (!s.placed) { s.charges.forEach((q, i) => { q.x = w / 2; q.y = h / 2 + (i === 0 ? -70 : 70); }); s.placed = true; }
      // vector grid
      if (c.vectors) {
        const step = 30;
        for (let x = step / 2; x < w; x += step) for (let y = step / 2; y < h; y += step) {
          const [ex, ey] = fieldAt(x, y, s.charges); const mag = Math.hypot(ex, ey); if (mag < 1e-9) continue;
          const len = Math.min(13, 4 + Math.log(1 + mag * 4e4) * 2.2);
          const ux = ex / mag, uy = ey / mag;
          const t = Math.min(1, Math.log(1 + mag * 6e4) / 8);
          ctx.strokeStyle = `rgba(${90 + t * 120},${150},${255 - t * 60},${0.25 + t * 0.5})`;
          ctx.lineWidth = 1.2; ctx.fillStyle = ctx.strokeStyle;
          PSim.arrow(ctx, x - ux * len / 2, y - uy * len / 2, x + ux * len / 2, y + uy * len / 2, 4);
        }
      }
      // field lines
      if (c.lines) {
        ctx.lineWidth = 1.6;
        s.charges.filter((q) => q.q > 0).forEach((q) => {
          const N = 16;
          for (let a = 0; a < N; a++) {
            let x = q.x + 12 * Math.cos((a / N) * 2 * Math.PI), y = q.y + 12 * Math.sin((a / N) * 2 * Math.PI);
            ctx.strokeStyle = col.accent + "cc"; ctx.beginPath(); ctx.moveTo(x, y);
            for (let st = 0; st < 360; st++) {
              const [ex, ey] = fieldAt(x, y, s.charges); const m = Math.hypot(ex, ey); if (m < 1e-9) break;
              x += (ex / m) * 4; y += (ey / m) * 4; ctx.lineTo(x, y);
              if (x < -10 || x > w + 10 || y < -10 || y > h + 10) break;
              if (s.charges.some((c2) => c2.q < 0 && (c2.x - x) ** 2 + (c2.y - y) ** 2 < 130)) break;
            }
            ctx.stroke();
          }
        });
      }
      // charges
      s.charges.forEach((q) => {
        const r = 12;
        ctx.fillStyle = q.q > 0 ? col.accent : col.danger;
        ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 14;
        ctx.beginPath(); ctx.arc(q.x, q.y, r, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
        ctx.fillStyle = "#fff"; ctx.font = "bold 15px Inter, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(q.q > 0 ? "+" : "−", q.x, q.y + 1); ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
      });
    },
    readout(s) { const np = s.charges.filter((q) => q.q > 0).length, nn = s.charges.length - np; return { "Charges": `${np} positive, ${nn} negative`, "Tip": "drag any charge" }; },
  });

  /* ---------------- Double-slit, one particle at a time ---------------- */
  function dsIntensity(y, c) {
    // y in [-1,1] across screen; alpha~fringe density (d/λ), beta~envelope width (slit/λ)
    const alpha = (c.d / c.lambda) * 9, beta = 2.4 / c.lambda * 60;
    const env = sinc(beta * y); const e = env * env;
    if (!c.two) return e;
    const fr = Math.cos(alpha * y); return e * fr * fr;
  }
  function sinc(x) { return x === 0 ? 1 : Math.sin(x) / x; }
  PSim.register("doubleslit", {
    title: "Double-Slit: the pattern builds itself", tag: "quantum", height: 360,
    caption: "Each particle lands as a single dot — random, unpredictable. Yet thousands of them assemble interference fringes, as if each passed through both slits. Cover one slit and the fringes vanish.",
    controls: [
      { id: "d", label: "Slit separation", type: "range", min: 0.4, max: 2.4, step: 0.05, value: 1.2, fmt: (v) => v.toFixed(2) },
      { id: "lambda", label: "Wavelength", type: "range", min: 0.5, max: 2.2, step: 0.05, value: 1, fmt: (v) => v.toFixed(2) },
      { id: "rate", label: "Beam rate", type: "range", min: 1, max: 40, step: 1, value: 12, fmt: (v) => v + "/s" },
      { id: "two", label: "Both slits open", type: "checkbox", value: true },
      { id: "reset", type: "button", label: "Clear screen", action: (h) => { h.state.dots = []; h.state.bins.fill(0); h.state.count = 0; } },
    ],
    init(g, s, c) { s.dots = []; s.bins = new Array(70).fill(0); s.count = 0; s.acc = 0; },
    onControl(id, cv, h) { if (id !== "rate") { h.state.dots = []; h.state.bins.fill(0); h.state.count = 0; } },
    step(dt, s, c) {
      s.acc += dt * c.rate;
      while (s.acc >= 1) {
        s.acc -= 1;
        // rejection sample y in [-1,1]
        let y, tries = 0;
        do { y = Math.random() * 2 - 1; tries++; } while (Math.random() > dsIntensity(y, c) && tries < 40);
        s.dots.push({ y, jx: Math.random() }); if (s.dots.length > 4000) s.dots.shift();
        const b = Math.min(s.bins.length - 1, Math.max(0, Math.floor(((y + 1) / 2) * s.bins.length)));
        s.bins[b]++; s.count++;
      }
    },
    draw(g, s, c) {
      const { ctx, w, h, c: col } = g; ctx.clearRect(0, 0, w, h);
      const slitX = w * 0.16, screenX = w * 0.6, histX = w * 0.64, histW = w * 0.33;
      // source
      ctx.fillStyle = col.warn; ctx.beginPath(); ctx.arc(20, h / 2, 5, 0, 7); ctx.fill();
      ctx.strokeStyle = col.warn + "55"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(24, h / 2); ctx.lineTo(slitX, h / 2); ctx.stroke();
      // barrier with slits
      ctx.fillStyle = col.track;
      const sy = h / 2, gap = 12, off = 18 * c.d;
      ctx.fillRect(slitX - 4, 0, 8, sy - off - gap);
      if (c.two) { ctx.fillRect(slitX - 4, sy - off + gap, 8, 2 * off - 2 * gap); ctx.fillRect(slitX - 4, sy + off + gap, 8, h - (sy + off + gap)); }
      else { ctx.fillRect(slitX - 4, sy + gap, 8, h - (sy + gap)); }
      // screen
      ctx.strokeStyle = col.axis; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(screenX, 10); ctx.lineTo(screenX, h - 10); ctx.stroke();
      // dots
      s.dots.forEach((d) => { const y = h / 2 + d.y * (h / 2 - 14); ctx.fillStyle = col.accent3 + "cc"; ctx.fillRect(screenX - 2 + d.jx * 4, y, 1.6, 1.6); });
      // histogram (rotated): bars growing right
      const maxB = Math.max(1, ...s.bins);
      ctx.fillStyle = col.accent + "66";
      const bh = (h - 20) / s.bins.length;
      ctx.beginPath();
      s.bins.forEach((b, i) => { const y = 10 + i * bh + bh / 2; const x = histX + (b / maxB) * histW; i ? ctx.lineTo(x, y) : ctx.moveTo(histX, y); });
      ctx.lineTo(histX, h - 10); ctx.lineTo(histX, 10); ctx.closePath(); ctx.fill();
      // theory curve
      ctx.strokeStyle = col.accent3; ctx.lineWidth = 2; ctx.beginPath();
      for (let i = 0; i <= 120; i++) { const yy = -1 + (i / 120) * 2; const I = dsIntensity(yy, c); const py = 10 + ((yy + 1) / 2) * (h - 20); ctx.lineTo(histX + I * histW, py); }
      ctx.stroke();
    },
    readout(s) { return { "Particles detected": s.count.toLocaleString() }; },
  });
})();
