/* Plumber To Your Door — nav toggle, symptom picker, reveal on scroll. No dependencies. */
(function () {
  "use strict";

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        toggle.focus();
      }
    });
  }

  // Symptom picker (home hero)
  var picker = document.getElementById("picker");
  if (picker) {
    var chips = picker.querySelectorAll(".chip");
    var text = picker.querySelector(".picker-text");
    var link = picker.querySelector(".picker-link");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
        text.textContent = chip.getAttribute("data-what") + " ";
        link.href = chip.getAttribute("data-href");
        link.textContent = "See " + chip.getAttribute("data-label").toLowerCase() + " →";
        link.hidden = false;
      });
    });
  }

  // Reveal on scroll
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".service-card, .project, .review, .price-card, .team-list li");
  if (!reduce && "IntersectionObserver" in window) {
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    targets.forEach(function (el) { io.observe(el); });
    // Anything already at or above the viewport (hash links, back navigation) shows immediately.
    var sweep = function () {
      targets.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) { el.classList.add("is-in"); io.unobserve(el); }
      });
    };
    sweep();
    window.addEventListener("hashchange", function () { setTimeout(sweep, 50); });
    window.addEventListener("load", sweep);
    setTimeout(sweep, 400);
  }
})();
