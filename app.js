(function () {
  const { order, branches, build } = window.SCENES;
  const stage = document.getElementById("stage");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  /* input stays locked until every animated element of the entering scene has settled (R still works) */
  const secs = v => v.split(",").map(t => parseFloat(t) * (t.trim().endsWith("ms") ? 1 : 1000));
  const lockMs = el => {
    if (reduce.matches) return 220;
    let m = 700;
    el.querySelectorAll(".a").forEach(a => {
      const cs = getComputedStyle(a), d = secs(cs.animationDelay), u = secs(cs.animationDuration);
      u.forEach((x, i) => { m = Math.max(m, (d[i] || d[0] || 0) + x); });
    });
    return Math.ceil(m) + 60;
  };
  const els = {};
  Object.keys(build).forEach(id => {
    const d = document.createElement("section");
    d.className = "scene"; d.id = "scene-" + id; d.dataset.scene = id;
    d.innerHTML = build[id]();
    stage.appendChild(d); els[id] = d;
  });

  let current = "cover", locked = false, timer = null, lastLock = 0, seq = 0;

  function show(id, animate) {
    const prev = els[current], next = els[id];
    clearTimeout(timer); seq++;
    Object.values(els).forEach(e => { if (e !== prev && e !== next) e.className = "scene"; });
    if (!animate || prev === next) {
      prev.className = "scene"; next.className = "scene active";
      current = id; locked = false; return;
    }
    locked = true;
    prev.className = "scene active leaving";
    next.className = "scene active entering";
    current = id;
    stage.dataset.current = id;
    lastLock = lockMs(next);
    const my = ++seq;
    const finish = () => {
      if (my !== seq) return; /* a reset happened meanwhile */
      prev.className = "scene";
      next.className = "scene active";
      locked = false; timer = null;
    };
    timer = setTimeout(() => {
      /* if a slow device started the animations late, wait for them to settle (capped at 800 ms) */
      const pending = next.getAnimations({ subtree: true }).filter(a => a.playState === "running" && !(window.CSSTransition && a instanceof CSSTransition));
      if (!pending.length) return finish();
      Promise.race([Promise.all(pending.map(a => a.finished.catch(() => {}))), new Promise(r => setTimeout(r, 800))]).then(finish);
    }, lastLock);
  }

  function go(id) {
    if (locked || !els[id] || id === current) return;
    show(id, true);
    stage.dataset.current = id;
  }

  function advance() {
    if (locked) return;
    if (branches[current]) return go(branches[current]); /* branch: Space returns to its parent scene */
    const i = order.indexOf(current);
    if (i < 0 || i >= order.length - 1) return; /* final scene: nothing */
    go(order[i + 1]);
  }

  function reset() {
    clearTimeout(timer); timer = null; seq++;
    Object.values(els).forEach(e => { e.className = "scene"; });
    els.cover.className = "scene active";
    current = "cover"; locked = false;
    stage.dataset.current = "cover";
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  }

  const editable = t => t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));

  document.addEventListener("keydown", e => {
    if (editable(e.target)) return;
    if (e.code === "Space" || e.key === " ") {
      e.preventDefault();
      if (e.repeat) return;
      advance();
    } else if ((e.key === "r" || e.key === "R") && !e.ctrlKey && !e.metaKey && !e.altKey) {
      if (e.repeat) return;
      e.preventDefault();
      reset();
    } else if (e.key === "Enter" && e.target.classList && e.target.classList.contains("hit")) {
      e.preventDefault();
      if (!e.repeat) go(e.target.dataset.go);
    }
  });

  stage.addEventListener("click", e => {
    const h = e.target.closest(".hit");
    if (!h || !h.closest(".scene.active") || h.closest(".leaving")) return;
    go(h.dataset.go);
  });

  document.getElementById("rotate-btn").addEventListener("click", () => document.body.classList.add("rotated"));
  document.getElementById("unrotate").addEventListener("click", () => document.body.classList.remove("rotated"));

  window.addEventListener("wheel", e => e.preventDefault(), { passive: false });
  window.__story = { get current() { return current; }, get locked() { return locked; }, get lastLock() { return lastLock; } };
  reset();
})();
