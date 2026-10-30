/* Grand Renovations demo: menu, planner tabs, form prefill + validation, year. */
(function () {
  "use strict";

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var burger = document.querySelector(".burger");
  var mobileNav = document.getElementById("mobile-nav");
  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      burger.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      mobileNav.hidden = open;
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        burger.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      }
    });
  }

  // Planner tabs (signature element)
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-planner]"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".planner-panel"));
  function showPlanner(id) {
    tabs.forEach(function (t) { t.setAttribute("aria-selected", String(t.dataset.planner === id)); });
    panels.forEach(function (p) { p.hidden = p.id !== "panel-" + id; });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { showPlanner(t.dataset.planner); });
    t.addEventListener("keydown", function (e) {
      var n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : -1;
      if (n < 0 || n >= tabs.length) return;
      e.preventDefault();
      tabs[n].focus();
      showPlanner(tabs[n].dataset.planner);
    });
  });

  // Prefill the project-type select from planner buttons
  var typeSelect = document.getElementById("f-type");
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-prefill]");
    if (!a || !typeSelect) return;
    var want = a.getAttribute("data-prefill");
    Array.prototype.forEach.call(typeSelect.options, function (o) { if (o.value === want) typeSelect.value = want; });
  });

  // Estimate form validation (Formspree handles delivery once the ID is set)
  var form = document.querySelector(".estimate-form");
  if (form) {
    var err = form.querySelector(".form-error");
    form.addEventListener("submit", function (e) {
      var bad = false;
      var name = form.querySelector("#f-name");
      var phone = form.querySelector("#f-phone");
      var email = form.querySelector("#f-email");
      var type = form.querySelector("#f-type");
      [name, phone, email, type].forEach(function (f) { f.classList.remove("invalid"); });
      if (!name.value.trim()) { name.classList.add("invalid"); bad = true; }
      if (phone.value.replace(/\D/g, "").length < 10) { phone.classList.add("invalid"); bad = true; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { email.classList.add("invalid"); bad = true; }
      if (!type.value) { type.classList.add("invalid"); bad = true; }
      if (bad) {
        e.preventDefault();
        err.hidden = false;
        (form.querySelector(".invalid") || name).focus();
        return;
      }
      err.hidden = true;
      if (form.action.indexOf("PLACEHOLDER_ID") !== -1) {
        // Demo mode: no endpoint wired yet, show the thank-you state locally.
        e.preventDefault();
        var done = document.createElement("p");
        done.className = "form-sent";
        done.textContent = "Thanks, " + name.value.trim().split(" ")[0] + ". Grand Renovations will call you within one business day.";
        form.replaceWith(done);
      }
    });
  }
})();
