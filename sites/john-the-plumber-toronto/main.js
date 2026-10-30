/* John The Plumber Toronto — behaviour: nav, symptom router, reveal, form, year */
(function () {
  "use strict";

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  // Symptom router (hero)
  var router = document.querySelector("[data-router]");
  if (router && window.JTP_SERVICES) {
    var chips = router.querySelectorAll(".chip");
    var img = router.querySelector("[data-proof-img]");
    var job = router.querySelector("[data-proof-job]");
    var where = router.querySelector("[data-proof-where]");
    var what = router.querySelector("[data-proof-what]");
    var first = router.querySelector("[data-proof-first]");
    var timing = router.querySelector("[data-proof-timing]");
    var link = router.querySelector("[data-proof-link]");
    var page = router.querySelector("[data-proof-page]");

    function show(key) {
      var s = window.JTP_SERVICES[key];
      if (!s) return;
      chips.forEach(function (c) { c.setAttribute("aria-pressed", c.dataset.key === key ? "true" : "false"); });
      if (img) { img.src = s.image; img.alt = s.imageAlt; }
      if (job) job.textContent = s.job;
      if (where) where.textContent = s.where;
      if (what) what.textContent = s.what;
      if (first) first.textContent = s.first;
      if (timing) timing.textContent = s.timing;
      if (link) link.href = "book.html?issue=" + encodeURIComponent(key);
      if (page) { page.href = s.page; page.textContent = s.pageLabel; }
    }
    chips.forEach(function (c) { c.addEventListener("click", function () { show(c.dataset.key); }); });
    var initial = router.querySelector('.chip[aria-pressed="true"]');
    show(initial ? initial.dataset.key : chips[0].dataset.key);
  }

  // Pre-fill the booking form from ?issue=
  var issueSel = document.querySelector('select[name="issue"]');
  if (issueSel) {
    var m = /[?&]issue=([^&]+)/.exec(location.search);
    if (m) {
      var v = decodeURIComponent(m[1]);
      for (var i = 0; i < issueSel.options.length; i++) {
        if (issueSel.options[i].value === v) { issueSel.selectedIndex = i; break; }
      }
    }
  }

  // Forms: Formspree placeholder → show a thank-you without leaving the page
  document.querySelectorAll("form[data-request]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var action = form.getAttribute("action") || "";
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      function done() { form.classList.add("sent"); form.querySelector(".ok").scrollIntoView({ block: "nearest" }); }
      if (action.indexOf("YOUR_FORM_ID") !== -1 || !action) { setTimeout(done, 500); return; }
      fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function () { done(); })
        .catch(function () { if (btn) { btn.disabled = false; btn.textContent = "Try again"; } });
    });
  });

  // Reveal on scroll
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Year
  // Text us widget
  document.querySelectorAll("[data-textus]").forEach(function (w) {
    var btn = w.querySelector(".textus-btn"), panel = w.querySelector(".textus-panel"), close = w.querySelector(".textus-close");
    function open() { panel.hidden = false; w.classList.add("open"); btn.setAttribute("aria-expanded", "true"); var f = panel.querySelector("input"); if (f) f.focus(); }
    function shut() { panel.hidden = true; w.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.focus(); }
    btn.addEventListener("click", function () { panel.hidden ? open() : shut(); });
    close.addEventListener("click", shut);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) shut(); });
  });

  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
