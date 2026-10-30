// CDP Plumbing of Toronto — behaviour. No dependencies.
(function () {
  "use strict";
  var D = window.CDP || {};
  var root = document.body.dataset.root || ""; // "" on home, "../" on service pages
  var $ = function (s, c) { return (c || document).querySelector(s); };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---- nav ---- */
  var toggle = $(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  /* ---- year ---- */
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  /* ---- triage picker (hero) ---- */
  var chips = $("#triage-chips"), answer = $("#triage-answer");
  if (chips && answer && D.triage) {
    var tagClass = { now: "tag-now", today: "tag-today", sched: "tag-sched" };
    function show(item) {
      chips.querySelectorAll(".chip").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.id === item.id ? "true" : "false"); });
      answer.innerHTML =
        '<span class="tag ' + tagClass[item.urgency] + '">' + esc(item.tag) + "</span>" +
        "<p>" + esc(item.text) + "</p>" +
        '<div class="row"><a class="btn btn-call" href="tel:' + D.tel + '">Call ' + esc(D.phone) + "</a>" +
        '<a href="' + root + esc(item.link) + '">' + esc(item.linkText) + " →</a></div>";
    }
    D.triage.forEach(function (item) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.textContent = item.label; b.dataset.id = item.id; b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () { show(item); });
      li.appendChild(b); chips.appendChild(li);
    });
    show(D.triage[0]);
  }

  /* ---- services grid ---- */
  var sg = $("#services-grid");
  if (sg && D.services) {
    var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
    sg.innerHTML = D.services.map(function (s) {
      if (s.emergency) {
        return '<a class="service-card emergency reveal" href="' + s.anchor + '"><div class="body"><h3>' + esc(s.title) + arrow + "</h3><p>" + esc(s.desc) + '</p><span class="big">' + esc(D.phone) + "</span></div></a>";
      }
      return '<a class="service-card reveal" href="' + root + "services/" + s.slug + '.html">' +
        '<img src="' + root + s.photo + '" width="1200" height="710" alt="" loading="lazy">' +
        '<div class="body"><h3>' + esc(s.title) + arrow + "</h3><p>" + esc(s.desc) + "</p></div></a>";
    }).join("");
  }

  /* ---- work grid + lightbox ---- */
  var wg = $("#work-grid");
  if (wg && D.work) {
    wg.innerHTML = D.work.map(function (w, i) {
      return '<figure class="work-card reveal' + (w.wide ? " wide" : "") + '" data-i="' + i + '" tabindex="0" role="button" aria-label="Enlarge: ' + esc(w.title) + '">' +
        '<img src="' + root + w.photo + '" width="' + w.w + '" height="' + w.h + '" alt="' + esc(w.title) + ": " + esc(w.cap) + '" loading="lazy">' +
        "<figcaption><b>" + esc(w.title) + "</b><span>" + esc(w.cap) + "</span></figcaption></figure>";
    }).join("");
    var lb = $("#lightbox"), lbImg = $("#lightbox-img"), lbCap = $("#lightbox-cap"), lbClose = $("#lightbox-close"), last;
    function openLb(i) {
      var w = D.work[i]; lbImg.src = root + w.photo; lbImg.alt = w.title + ": " + w.cap; lbCap.textContent = w.title + " — " + w.cap;
      lb.classList.add("open"); last = document.activeElement; lbClose.focus();
    }
    function closeLb() { lb.classList.remove("open"); lbImg.src = ""; if (last) last.focus(); }
    wg.addEventListener("click", function (e) { var f = e.target.closest(".work-card"); if (f) openLb(+f.dataset.i); });
    wg.addEventListener("keydown", function (e) { var f = e.target.closest(".work-card"); if (f && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLb(+f.dataset.i); } });
    lbClose.addEventListener("click", closeLb);
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && lb.classList.contains("open")) closeLb(); });
  }

  /* ---- reviews ---- */
  var rg = $("#reviews-grid");
  if (rg && D.reviews) {
    rg.innerHTML = D.reviews.map(function (r) {
      return '<article class="review reveal"><span class="stars" aria-label="5 stars">★★★★★</span><blockquote>“' + esc(r.text) + "”</blockquote>" +
        "<footer><b>" + esc(r.name) + "</b> · " + esc(r.when) + '<br><span class="job">' + esc(r.job) + "</span></footer></article>";
    }).join("");
  }

  /* ---- callback form (Formspree) ---- */
  var form = $("#callback-form"), status = $("#form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim(), phone = form.phone.value.trim(), msg = form.message.value.trim();
      if (!name || !phone || !msg) { status.textContent = "Please add your name, phone number and a line about the problem."; status.style.color = "#D9412B"; return; }
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        status.textContent = "Demo site: the form isn't connected yet. Please call " + D.phone + ".";
        status.style.color = "#0B2B5E"; return;
      }
      status.textContent = "Sending…"; status.style.color = "";
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error(); status.textContent = "Got it. We'll call you back shortly."; status.style.color = "#1D4FD7"; form.reset(); })
        .catch(function () { status.textContent = "Couldn't send. Please call " + D.phone + "."; status.style.color = "#D9412B"; });
    });
  }

  /* ---- reveal on scroll ---- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }
})();
