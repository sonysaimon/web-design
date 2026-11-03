/* Broadway Locksmith — page behaviour: render data, nav, open-status, FAQ, lightbox. */
(function () {
  const D = window.BROADWAY;
  if (!D) return;
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* Keys we cut: pegboard tags */
  const keyWall = $("#key-tags");
  if (keyWall) {
    D.keys.forEach((k) => {
      const li = el("li", "tag");
      li.innerHTML = `<span class="tag__hole" aria-hidden="true"></span><strong>${esc(k.name)}</strong><span>${esc(k.note)}</span>`;
      keyWall.appendChild(li);
    });
  }

  /* Services */
  const svc = $("#service-cards");
  if (svc) {
    D.services.forEach((s) => {
      const art = el("article", "service");
      art.id = "svc-" + s.id;
      art.innerHTML = `
        ${s.image ? `<div class="service__img"><img src="${s.image}" alt="${esc(s.alt || "")}" width="520" height="520" loading="lazy"></div>` : ""}
        <div class="service__body">
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.lead)}</p>
          <ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
          <a class="btn btn--ghost btn--sm" href="tel:+1${D.business.phone.replace(/\D/g, "")}">Ask about ${esc(s.title.toLowerCase())}</a>
        </div>`;
      svc.appendChild(art);
    });
  }

  /* Brands */
  const br = $("#brands");
  if (br) D.brands.forEach((b) => br.appendChild(el("li", null, esc(b))));

  /* Reviews */
  const rv = $("#review-cards");
  if (rv) {
    D.reviews.forEach((r) => {
      const q = el("figure", "review");
      q.innerHTML = `<blockquote>${esc(r.text)}</blockquote><figcaption><strong>${esc(r.name)}</strong> · Google · ${esc(r.when)}</figcaption>`;
      rv.appendChild(q);
    });
  }

  /* FAQ */
  const faq = $("#faq-list");
  if (faq) {
    D.faq.forEach((f) => {
      const d = el("details", "faq");
      d.innerHTML = `<summary>${esc(f.q)}</summary><p>${esc(f.a)}</p>`;
      faq.appendChild(d);
    });
  }

  /* Open-now status (Vancouver time). Counter 9:00–17:30 Mon–Fri; phones from 8:30. */
  const status = $("#open-status");
  if (status) {
    try {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Vancouver" }));
      const day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
      const weekday = day >= 1 && day <= 5;
      let text, cls;
      if (weekday && mins >= 540 && mins < 1050) { text = "Open now · counter until 5:30 pm"; cls = "is-open"; }
      else if (weekday && mins >= 510 && mins < 540) { text = "Phones open · counter opens at 9:00 am"; cls = "is-open"; }
      else if (weekday && mins < 510) { text = "Closed · phones from 8:30 am, counter from 9:00 am"; cls = "is-closed"; }
      else if (day === 5 && mins >= 1050) { text = "Closed · opens Monday 8:30 am"; cls = "is-closed"; }
      else if (weekday) { text = "Closed · opens tomorrow 8:30 am"; cls = "is-closed"; }
      else { text = "Closed weekends · opens Monday 8:30 am"; cls = "is-closed"; }
      status.textContent = text; status.classList.add(cls);
    } catch (e) { /* leave the static text */ }
  }

  /* Mobile nav */
  const toggle = $(".nav-toggle"), nav = $("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); document.body.classList.remove("nav-open");
    }));
  }

  /* Header shadow after scroll */
  const header = $(".site-header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  /* Year */
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
})();
