(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

(function () {
  var mark = document.querySelector(".hero-mark");
  if (!mark) {
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  var maxShift = 12;
  var ease = 0.08;
  var targetX = 0;
  var targetY = 0;
  var currentX = 0;
  var currentY = 0;
  var idleT = 0;
  var frame = 0;

  function applyTransform() {
    mark.style.transform =
      "translate3d(" + currentX.toFixed(2) + "px," + currentY.toFixed(2) + "px,0)";
  }

  function stopMotion() {
    targetX = 0;
    targetY = 0;
    currentX = 0;
    currentY = 0;
    mark.style.transform = "";
    if (frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  }

  function tick() {
    if (reduceMotion.matches) {
      stopMotion();
      return;
    }

    if (!finePointer.matches) {
      idleT += 0.01;
      targetX = Math.sin(idleT) * 4;
      targetY = Math.cos(idleT * 0.65) * 3;
    }

    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;
    applyTransform();
    if (
      finePointer.matches &&
      Math.abs(targetX - currentX) < 0.02 &&
      Math.abs(targetY - currentY) < 0.02
    ) {
      currentX = targetX;
      currentY = targetY;
      applyTransform();
      frame = 0;
      return;
    }
    frame = requestAnimationFrame(tick);
  }

  function startMotion() {
    if (reduceMotion.matches || frame) {
      return;
    }
    frame = requestAnimationFrame(tick);
  }

  function onPointerMove(event) {
    if (reduceMotion.matches || !finePointer.matches) {
      return;
    }
    var rect = mark.getBoundingClientRect();
    var nx = (event.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width / 2, 1);
    var ny = (event.clientY - (rect.top + rect.height / 2)) / Math.max(rect.height / 2, 1);
    targetX = Math.max(-1, Math.min(1, nx)) * maxShift;
    targetY = Math.max(-1, Math.min(1, ny)) * maxShift;
    startMotion();
  }

  function onPointerLeave() {
    targetX = 0;
    targetY = 0;
  }

  var hero = mark.closest(".hero") || mark;
  if (finePointer.matches) {
    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);
  }

  startMotion();

  reduceMotion.addEventListener("change", function () {
    if (reduceMotion.matches) {
      stopMotion();
      return;
    }
    startMotion();
  });
})();
