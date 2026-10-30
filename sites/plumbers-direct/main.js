/* Plumbers Direct — behaviour: nav toggle, hero problem picker, home grids, reveal, form. */
(function () {
  "use strict";
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* nav */
  const toggle = $(".nav-toggle"), nav = $("#nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.focus(); } });
  }

  /* mark current page in nav */
  const here = location.pathname.split("/").pop() || "index.html";
  $$("#nav a").forEach((a) => { const h = a.getAttribute("href"); if (h === here || (here === "index.html" && h === "./")) a.setAttribute("aria-current", "page"); });

  const S = window.PD_SERVICES || [];
  const R = window.PD_REVIEWS || [];
  const bySlug = (slug) => S.find((s) => s.slug === slug);

  /* hero picker: the billboard words */
  const picker = $("#picker");
  if (picker && S.length) {
    const words = [
      { w: "Drip", slug: "faucet-toilet-repair", fact: "Dripping tap, running toilet, low pressure at one fixture. Usually fixed the same day in under an hour on site." },
      { w: "Leak", slug: "leaking-frozen-pipes", fact: "Burst, pinhole or frozen pipe. Shut the main valve if you can, then call. Reviews mention a plumber within the hour." },
      { w: "Clog", slug: "drain-cleaning", fact: "Slow sink, blocked tub, kitchen drain. Snaked the same day; camera inspection if it keeps coming back." },
      { w: "Flood", slug: "sump-pumps-flooding", fact: "Wet basement, sewer back-up, dead sump pump. We find the cause first, and the City subsidises the fix." },
      { w: "No hot water", slug: "hot-water-tanks", fact: "Leaking or failed tank, lukewarm water, rumbling heater. Repair if it is a part, replace if it is the tank. You get both prices." },
    ];
    const list = $(".picker-words", picker), answer = $(".picker-answer", picker);
    words.forEach((x, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<button type="button" role="tab" aria-selected="${i === 0}" data-i="${i}">${esc(x.w)}</button>`;
      list.appendChild(li);
      if (i < words.length - 1) { const s = document.createElement("li"); s.className = "sym"; s.setAttribute("aria-hidden", "true"); s.textContent = ["·", "·", "·", "·"][i]; list.appendChild(s); }
    });
    const show = (i) => {
      const x = words[i], svc = bySlug(x.slug);
      $$("button", list).forEach((b) => b.setAttribute("aria-selected", String(+b.dataset.i === i)));
      answer.innerHTML = `<span class="pa-title">${esc(svc ? svc.name : x.w)}</span><span class="pa-fact">${esc(x.fact)}</span><a href="${esc(x.slug)}.html">What we do for this →</a>`;
    };
    list.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) show(+b.dataset.i); });
    show(0);
  }

  /* home services grid */
  const grid = $("#services-grid");
  if (grid && S.length) {
    grid.innerHTML = S.map((s) => `
      <a class="svc-card${s.slug === "emergency-plumber" ? " svc-card--emerg" : ""}" href="${esc(s.slug)}.html">
        <span class="sym" aria-hidden="true">${esc(s.sym)}</span>
        <h3>${esc(s.problem)}</h3>
        <p>${esc(s.short)}</p>
        <ul>${s.includes.slice(0, 3).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
        <span class="more">${esc(s.name)} →</span>
      </a>`).join("");
  }

  /* reviews: home (6 picked) and reviews page (all) */
  const card = (r) => `
    <article class="review">
      <div class="stars" aria-label="5 stars">★★★★★</div>
      <span class="job">${esc(r.job)}</span>
      <blockquote>“${esc(r.text)}”</blockquote>
      <div class="who"><b>${esc(r.name)}</b> · ${esc(r.when)}${r.tech ? ` · with ${esc(r.tech)}` : ""}</div>
    </article>`;
  const homeRev = $("#reviews-home");
  if (homeRev && R.length) {
    const pick = ["carol", "peter_s", "anna", "joyce_s", "karl", "pm"].map((id) => R.find((r) => r.id === id)).filter(Boolean);
    homeRev.innerHTML = pick.map(card).join("");
  }
  const allRev = $("#reviews-all");
  if (allRev && R.length) allRev.innerHTML = R.map(card).join("");
  const svcRev = $("#reviews-service");
  if (svcRev && R.length) {
    const ids = (svcRev.dataset.ids || "").split(",").filter(Boolean);
    svcRev.innerHTML = ids.map((id) => R.find((r) => r.id === id)).filter(Boolean).map(card).join("");
  }

  /* reveal on scroll */
  const rv = $$(".reveal");
  if (rv.length && "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add("in"));

  /* request form (Formspree) */
  $$("form.form").forEach((form) => {
    const status = $(".form-status", form);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = $("button[type=submit]", form);
      btn.disabled = true; status.textContent = "Sending…";
      try {
        const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (res.ok) { form.reset(); status.textContent = "Sent. Joyce will call you back shortly. If it is urgent, call 416-402-7798 now."; }
        else throw new Error("bad status");
      } catch (err) {
        status.textContent = "That did not send. Please call 416-402-7798.";
      } finally { btn.disabled = false; }
    });
  });

  /* footer year */
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
})();
