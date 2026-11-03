/* Century Music School — renders content from services.js on every page; nav, open status, FAQ. */
(function () {
  const D = window.CMS; if (!D) return;
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.innerHTML = h; return e; };
  const root = document.body.dataset.root || "";           /* "" on top-level pages, "../" inside blog/ */

  /* Programs */
  const lg = $("#lesson-grid");
  if (lg) D.lessons.forEach((l) => {
    const a = el("article", "lesson"); a.id = "lesson-" + l.id;
    const media = l.image ? `<img src="${root}${l.image}" alt="${esc(l.alt)}" width="1200" height="640" loading="lazy">` : `<div class="lesson__tile">${esc(l.tile || l.title)}</div>`;
    const href = l.link ? root + l.link : D.business.trialUrl;
    const ext = l.link ? "" : ' target="_blank" rel="noopener"';
    const label = l.link ? "About the course" : "Try " + l.title.toLowerCase();
    a.innerHTML = `<div class="lesson__img">${media}</div>
      <div class="lesson__body"><p class="lesson__age">${esc(l.age)}</p><h3>${esc(l.title)}</h3><p>${esc(l.lead)}</p>
      <ul>${l.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <a class="btn btn--ghost btn--sm" href="${href}"${ext}>${esc(label)}</a></div>`;
    lg.appendChild(a);
  });

  /* Trial */
  const to = $("#trial-options");
  if (to) D.trial.options.forEach((o) => to.appendChild(el("li", "trial__opt", `<strong>${esc(o.name)}</strong><span>${esc(o.who)}</span><em>${esc(o.what)}</em>`)));
  const tn = $("#trial-note"); if (tn) tn.textContent = D.trial.note;
  const ta = $("#trial-after"); if (ta) ta.textContent = D.trial.after;

  /* Tuition */
  const tt = $("#tuition-rows");
  if (tt) D.tuition.forEach((t) => {
    tt.appendChild(el("tr", null, `<td>${esc(t.pack)}</td><td class="num">${esc(t.price)}${t.unit ? ` <small>${esc(t.unit)}</small>` : ""}${t.save ? ` <span class="save">${esc(t.save)}</span>` : ""}</td>`));
  });
  const tnotes = $("#tuition-notes"); if (tnotes) D.tuitionNotes.forEach((n) => tnotes.appendChild(el("li", null, esc(n))));

  /* Teacher cards (home) */
  const tg = $("#teacher-grid");
  if (tg) D.teachers.forEach((t) => {
    const a = el("a", "tcard"); a.href = `${root}teachers.html#${t.slug}`;
    a.innerHTML = `<img src="${root}photos/teachers/${t.photo}" alt="${esc(t.name)}" width="480" height="640" loading="lazy"><strong>${esc(t.name)}</strong><span class="tcard__cred">${esc(t.cred)}</span><span class="tcard__teaches">${esc(t.teaches)}</span>`;
    tg.appendChild(a);
  });

  /* Full bios (teachers.html) */
  const bl = $("#bio-list");
  if (bl) D.teachers.forEach((t) => {
    const art = el("article", "bio" + (t.english ? " bio--english" : "")); art.id = t.slug;
    art.innerHTML = `<div class="bio__photo"><img src="${root}photos/teachers/${t.photo}" alt="${esc(t.name)}" width="480" height="640" loading="lazy"></div>
      <div class="bio__text"><p class="eyebrow">${esc(t.teaches)}</p><h2>${esc(t.name)}</h2><p class="bio__cred">${esc(t.cred)}</p>${t.bio.map((p) => `<p>${esc(p)}</p>`).join("")}</div>`;
    bl.appendChild(art);
  });

  /* RCM results */
  const rr = $("#results-rows");
  if (rr) D.results.forEach((r) => rr.appendChild(el("tr", null, `<td>${esc(r[0])}</td><td>${esc(r[1])}</td><td class="result">${esc(r[2])}</td>`)));

  /* Reviews */
  const rv = $("#review-cards");
  if (rv) D.reviews.forEach((r) => rv.appendChild(el("figure", "review", `<blockquote>${esc(r.text)}</blockquote><figcaption><strong>${esc(r.name)}</strong> · ${esc(r.source)}${r.when ? " · " + esc(r.when) : ""}</figcaption>`)));

  /* FAQ, grouped */
  const fq = $("#faq-list");
  if (fq) { let g = null; D.faq.forEach((f) => {
    if (f.g !== g) { g = f.g; fq.appendChild(el("h3", "faq-group", esc(g))); }
    fq.appendChild(el("details", "faq", `<summary>${esc(f.q)}</summary><p>${esc(f.a)}</p>`));
  }); }

  /* Open status (Vancouver). Mon 15:00–19:00, Tue–Fri 15:00–19:30, Sat 8:30–18:00, Sun closed. */
  const st = $("#open-status");
  if (st) {
    try {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Vancouver" }));
      const d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
      const hours = { 1: [900, 1140], 2: [900, 1170], 3: [900, 1170], 4: [900, 1170], 5: [900, 1170], 6: [510, 1080] };
      const h = hours[d]; let text, cls;
      const fmt = (x) => { const hh = Math.floor(x / 60), mm = x % 60, ap = hh >= 12 ? "pm" : "am"; return `${hh % 12 || 12}${mm ? ":" + String(mm).padStart(2, "0") : ""} ${ap}`; };
      if (h && m >= h[0] && m < h[1]) { text = `Open now · lessons until ${fmt(h[1])}`; cls = "is-open"; }
      else if (h && m < h[0]) { text = `Opens today at ${fmt(h[0])}`; cls = "is-closed"; }
      else { const next = d === 6 ? "Monday 3 pm" : d === 0 ? "Monday 3 pm" : (d === 5 ? "Saturday 8:30 am" : "tomorrow 3 pm"); text = `Closed · opens ${next}`; cls = "is-closed"; }
      st.textContent = text; st.classList.add(cls);
    } catch (e) {}
  }

  /* Nav */
  const toggle = $(".nav-toggle"), nav = $("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => { const open = nav.classList.toggle("is-open"); toggle.setAttribute("aria-expanded", String(open)); document.body.classList.toggle("nav-open", open); });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); document.body.classList.remove("nav-open"); }));
  }
  const header = $(".site-header"); const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  document.querySelectorAll("#year").forEach((y) => { y.textContent = new Date().getFullYear(); });
})();
