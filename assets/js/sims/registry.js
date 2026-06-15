/* ============================================================
   PSim — a tiny framework for embeddable physics simulations.

   A sim is registered with PSim.register(name, def) where def is:
   {
     title, tag, caption, height,        // chrome
     controls: [ {id,label,type,min,max,step,value,fmt,options} ],
     init(g, s, c),                      // s = state bag, c = control values
     step(dt, s, c),                     // advance physics (dt seconds, may be 0)
     draw(g, s, c),                      // render every frame
     readout(s, c) -> { "Label": "val" },// optional live numbers
     onPointer(type, x, y, s, c),        // optional: 'down'|'move'|'up'
   }
   PSim.mount(hostEl, name, params) builds the card and runs the loop.
   ============================================================ */
window.PSim = (function () {
  const registry = {};

  function register(name, def) { registry[name] = def; }

  const PALETTES = {
    dark: { ink: "#e3e9f5", soft: "#9aa6bd", grid: "rgba(120,140,180,.16)", axis: "rgba(150,170,210,.35)",
            accent: "#5b8cff", accent2: "#9b6bff", accent3: "#2ee6c7", warn: "#ffb547", danger: "#e35d6a",
            track: "rgba(120,140,180,.25)", glow: "rgba(91,140,255,.5)" },
    light: { ink: "#1b2433", soft: "#566079", grid: "rgba(60,80,120,.12)", axis: "rgba(60,80,120,.35)",
            accent: "#3b6ad6", accent2: "#7a45d8", accent3: "#11a98d", warn: "#d2860b", danger: "#d23b48",
            track: "rgba(60,80,120,.22)", glow: "rgba(59,106,214,.4)" },
  };
  const palette = () => PALETTES[document.body.dataset.theme === "light" ? "light" : "dark"];

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function buildControls(def, cv, wrap, host) {
    (def.controls || []).forEach((ctrl) => {
      if (ctrl.type === "button") {
        const box = el("div", "sim-btns");
        const b = el("button", "sim-btn" + (ctrl.variant === "ghost" ? " ghost" : ""), ctrl.label);
        b.addEventListener("click", () => ctrl.action(host._sim));
        box.appendChild(b);
        wrap.appendChild(box);
        return;
      }
      const c = el("div", "sim-ctrl");
      if (ctrl.type === "range") {
        cv[ctrl.id] = ctrl.value;
        const lab = el("label", null, `<span>${ctrl.label}</span><span class="val"></span>`);
        const input = el("input");
        input.type = "range"; input.min = ctrl.min; input.max = ctrl.max; input.step = ctrl.step; input.value = ctrl.value;
        const valEl = lab.querySelector(".val");
        const fmt = ctrl.fmt || ((v) => v);
        valEl.textContent = fmt(ctrl.value);
        input.addEventListener("input", () => {
          cv[ctrl.id] = parseFloat(input.value);
          valEl.textContent = fmt(cv[ctrl.id]);
          if (def.onControl) def.onControl(ctrl.id, cv, host._sim);
        });
        c.appendChild(lab); c.appendChild(input);
      } else if (ctrl.type === "select") {
        cv[ctrl.id] = ctrl.value;
        const lab = el("label", null, `<span>${ctrl.label}</span>`);
        const sel = el("select");
        ctrl.options.forEach((o) => {
          const opt = el("option", null, o.label);
          opt.value = o.value;
          if (o.value === ctrl.value) opt.selected = true;
          sel.appendChild(opt);
        });
        sel.addEventListener("change", () => {
          cv[ctrl.id] = sel.value;
          if (def.onControl) def.onControl(ctrl.id, cv, host._sim);
        });
        c.appendChild(lab); c.appendChild(sel);
      } else if (ctrl.type === "checkbox") {
        cv[ctrl.id] = !!ctrl.value;
        const lab = el("label", "sim-checkbox");
        const input = el("input"); input.type = "checkbox"; input.checked = !!ctrl.value;
        input.addEventListener("change", () => {
          cv[ctrl.id] = input.checked;
          if (def.onControl) def.onControl(ctrl.id, cv, host._sim);
        });
        lab.appendChild(input); lab.appendChild(document.createTextNode(" " + ctrl.label));
        c.appendChild(lab);
      }
      wrap.appendChild(c);
    });
  }

  function mount(host, name, params) {
    const def = registry[name];
    host.classList.add("sim-card");
    if (!def) {
      host.innerHTML = `<div class="sim-caption">⚠ Simulation "<code>${name}</code>" is not available.</div>`;
      return;
    }

    // chrome
    const head = el("div", "sim-head",
      `<span class="sim-title">${def.title || name}</span><span class="sim-tag">${def.tag || "interactive"}</span>`);
    const canvasWrap = el("div", "sim-canvas-wrap");
    const canvas = el("canvas");
    canvasWrap.appendChild(canvas);
    const readoutEl = el("div", "sim-readout");
    const controlsEl = el("div", "sim-controls");
    host.appendChild(head);
    host.appendChild(canvasWrap);
    if (def.readout) host.appendChild(readoutEl);
    host.appendChild(controlsEl);
    if (def.caption) host.appendChild(el("div", "sim-caption", def.caption));

    const ctx = canvas.getContext("2d");
    const height = def.height || 360;
    const state = {};
    const cv = {};
    const g = { ctx, w: 0, h: 0, dpr: 1, get c() { return palette(); }, params: params || {} };
    state.canvas = canvas;
    state._ptr = { x: 0, y: 0, down: false };

    const simHandle = { def, state, cv, g, name, reset, host };
    host._sim = simHandle;

    buildControls(def, cv, controlsEl, host);

    function resize() {
      const w = canvasWrap.clientWidth || host.clientWidth || 640;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      g.w = w; g.h = height; g.dpr = dpr;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (def.resize) def.resize(g, state, cv);
    }

    function reset() {
      Object.keys(state).forEach((k) => { if (k !== "canvas" && k !== "_ptr") delete state[k]; });
      if (def.init) def.init(g, state, cv);
    }

    // pointer
    function ptr(e, type) {
      const r = canvas.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      const x = (t ? t.clientX - r.left : state._ptr.x);
      const y = (t ? t.clientY - r.top : state._ptr.y);
      state._ptr.x = x; state._ptr.y = y;
      if (type === "down") state._ptr.down = true;
      if (type === "up") state._ptr.down = false;
      if (def.onPointer) def.onPointer(type, x, y, state, cv);
    }
    canvas.addEventListener("pointerdown", (e) => { canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId); ptr(e, "down"); });
    canvas.addEventListener("pointermove", (e) => ptr(e, "move"));
    canvas.addEventListener("pointerup", (e) => ptr(e, "up"));
    canvas.addEventListener("pointerleave", (e) => { if (state._ptr.down) ptr(e, "up"); });

    // loop
    let last = 0, running = true, visible = true, rafId = 0;
    function frame(ts) {
      if (!running) return;
      let dt = last ? (ts - last) / 1000 : 0;
      last = ts;
      if (dt > 0.05) dt = 0.05; // clamp big gaps (tab switches)
      if (visible) {
        if (def.step) def.step(dt, state, cv);
        if (def.draw) def.draw(g, state, cv);
        if (def.readout) {
          const r = def.readout(state, cv);
          readoutEl.innerHTML = Object.keys(r).map((k) => `<span>${k} <b>${r[k]}</b></span>`).join("");
        }
      }
      rafId = requestAnimationFrame(frame);
    }

    // pause when off-screen
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((ents) => { visible = ents[0].isIntersecting; if (visible) last = 0; }, { threshold: 0.01 });
      io.observe(host);
    }
    const ro = ("ResizeObserver" in window) ? new ResizeObserver(() => resize()) : null;
    if (ro) ro.observe(canvasWrap);

    resize();
    reset();
    rafId = requestAnimationFrame(frame);

    // expose teardown for route changes
    host._teardown = () => { running = false; cancelAnimationFrame(rafId); if (ro) ro.disconnect(); };
    return simHandle;
  }

  /* ---- small drawing helpers usable by sims ---- */
  function arrow(ctx, x1, y1, x2, y2, head) {
    head = head || 7;
    const a = Math.atan2(y2 - y1, x2 - x1);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - head * Math.cos(a - 0.4), y2 - head * Math.sin(a - 0.4));
    ctx.lineTo(x2 - head * Math.cos(a + 0.4), y2 - head * Math.sin(a + 0.4));
    ctx.closePath(); ctx.fill();
  }
  function grid(g, step, originY) {
    const { ctx, w, h, c } = g;
    ctx.strokeStyle = c.grid; ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = (originY % step + step) % step; y <= h; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  }

  return { register, mount, list: () => Object.keys(registry), palette, arrow, grid,
           get: (n) => registry[n] };
})();
