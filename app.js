(function () {
  const { order, branches, build } = window.SCENES;
  const stage = document.getElementById("stage");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const lockMs = () => (reduce.matches ? 220 : 1000);
  const els = {};
  Object.keys(build).forEach(id => {
    const d = document.createElement("section");
    d.className = "scene"; d.id = "scene-" + id; d.dataset.scene = id;
    d.innerHTML = build[id]();
    stage.appendChild(d); els[id] = d;
  });

  let current = "cover", locked = false, timer = null;

  function show(id, animate) {
    const prev = els[current], next = els[id];
    clearTimeout(timer);
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
    timer = setTimeout(() => {
      prev.className = "scene";
      next.className = "scene active";
      locked = false; timer = null;
    }, lockMs());
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
    clearTimeout(timer); timer = null;
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

  window.addEventListener("wheel", e => e.preventDefault(), { passive: false });
  window.__story = { get current() { return current; }, get locked() { return locked; } };
  reset();
})();
