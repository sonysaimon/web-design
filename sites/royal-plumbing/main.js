/* Royal Plumbing — behaviour: nav, dispatch picker, reviews, reveal, form guard. */
(function () {
  const D = window.ROYAL || { reviews: [], team: [] };
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  /* Mobile nav */
  const toggle = $(".nav-toggle"), nav = $(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });
  }

  /* Dispatch picker (hero) */
  const ROUTES = {
    drain: { what: "Clogged or slow drain", next: "A snake, auger or hydro-jet clears it, and we camera the line if it keeps coming back. Most clogs are cleared in one visit, with the price agreed first.", href: "drains-and-sewers.html", label: "Drains & sewers" },
    hotwater: { what: "No hot water", next: "We repair every brand of tank and tankless heater, and replace the same day when it can't be saved. Energy-efficient options explained before you decide.", href: "water-heaters.html", label: "Water heaters" },
    leak: { what: "A leak or a drip", next: "Shut it off, find the source, fix it properly. Free estimate and the full price before work starts. Old galvanized pipe? We repipe in copper or PEX.", href: "leaks-and-repipes.html", label: "Leaks & repipes" },
    basement: { what: "Water in the basement", next: "Sump pump, backwater valve, drain tile or waterproofing, chosen for your house. The City of Toronto subsidy covers up to $6,650 of eligible work.", href: "wet-basements.html", label: "Wet basements" },
    fixture: { what: "Toilet, sink or faucet trouble", next: "Running, clogged, cracked or dripping: repaired the same day where possible, replaced with a full price up front when it's past saving.", href: "#request", label: "Request service" },
    sewer: { what: "Sewer smell or backup", next: "A camera inspection shows roots, breaks or open clay joints. We clear, repair or replace the line, and fit a backwater valve so it doesn't happen twice.", href: "drains-and-sewers.html", label: "Drains & sewers" },
    commercial: { what: "Commercial or property management", next: "Priority 24/7 dispatch for restaurants, offices, condos and facilities: drains, boilers, grease traps, repipes and planned maintenance.", href: "commercial.html", label: "Commercial plumbing" }
  };
  const chips = $$(".chip[data-route]"), result = $("#dispatch-result");
  if (chips.length && result) {
    const render = (key) => {
      const r = ROUTES[key]; if (!r) return;
      chips.forEach(c => c.setAttribute("aria-pressed", String(c.dataset.route === key)));
      result.innerHTML =
        '<p class="what">' + r.what + '</p>' +
        '<p class="next">' + r.next + '</p>' +
        '<div class="row"><a class="btn btn-red" href="tel:' + D.tel + '">' + phoneIcon() + ' Call ' + D.phone + '</a>' +
        '<a class="more" href="' + r.href + '">' + r.label + ' &rarr;</a></div>';
    };
    chips.forEach(c => c.addEventListener("click", () => render(c.dataset.route)));
    render(chips[0].dataset.route);
  }

  function phoneIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.7a2 2 0 0 1 1.7 2z"/></svg>';
  }

  /* Reviews */
  const stars = '<span class="stars" aria-label="5 out of 5 stars">★★★★★</span>';
  $$("[data-reviews]").forEach(el => {
    const tag = el.dataset.reviews, limit = parseInt(el.dataset.limit || "6", 10);
    let list = D.reviews;
    if (tag === "home") list = list.filter(r => r.home);
    else if (tag) list = list.filter(r => r.tags.includes(tag));
    el.innerHTML = list.slice(0, limit).map(r =>
      '<article class="review">' + stars +
      '<blockquote>&ldquo;' + r.text + '&rdquo;</blockquote>' +
      '<p class="who"><b>' + r.who + '</b> &middot; Google review &middot; with ' + r.tech + '</p></article>').join("");
  });
  $$("[data-rating-count]").forEach(el => { el.textContent = D.rating.count.toLocaleString("en-CA"); });
  $$("[data-rating-score]").forEach(el => { el.textContent = D.rating.score.toFixed(1); });

  /* Team */
  const team = $("[data-team]");
  if (team) team.innerHTML = D.team.map(t => '<div class="name"><b>' + t.name + '</b><small>' + t.note + '</small></div>').join("");

  /* Reveal on scroll */
  const items = $$(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    items.forEach(i => io.observe(i));
  } else items.forEach(i => i.classList.add("in"));

  /* Form guard: Formspree ID not set yet */
  $$("form.form").forEach(f => {
    f.addEventListener("submit", (e) => {
      if (/YOUR_FORM_ID/.test(f.action)) {
        e.preventDefault();
        let n = $(".note", f); if (!n) { n = document.createElement("p"); n.className = "note"; f.appendChild(n); }
        n.textContent = "The request form isn't connected yet. Please call " + D.phone + " and we'll take it from there.";
        n.style.color = "#C4202E";
      }
    });
  });

  /* Year */
  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
