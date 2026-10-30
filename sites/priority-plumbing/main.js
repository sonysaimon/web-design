/* Priority Plumbing & Drains — behaviour. Reads window.PP (services.js) and window.PP_REVIEWS (reviews.js). */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const PP = window.PP || {};
  const B = PP.business || {};
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STARS = '<span class="stars" aria-label="5 stars">★★★★★</span>';

  // Year
  $$('.year').forEach(e => { e.textContent = new Date().getFullYear(); });

  // Mobile menu
  const toggle = $('.nav-toggle');
  const menu = $('#mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      menu.hidden = open;
    });
    $$('a', menu).forEach(a => a.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); menu.hidden = true; }));
  }

  // Header shadow
  const nav = $('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const svcById = id => (PP.services || []).find(s => s.id === id);

  // Home: service hub grid
  const grid = $('#services-grid');
  if (grid) {
    grid.innerHTML = (PP.services || []).map(s => `
      <article class="svc reveal">
        <img src="${s.photo}" alt="${esc(s.alt)}" width="1800" height="1350" loading="lazy">
        <div class="body">
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.blurb)}</p>
          <ul>${s.items.slice(0, 5).map(i => `<li>${esc(i[0])}</li>`).join('')}</ul>
          <a class="more" href="${s.page}">See all services <span aria-hidden="true">&rarr;</span></a>
        </div>
      </article>`).join('');
  }

  // Home: symptom picker
  const symWrap = $('#symptoms');
  const result = $('#picker-result');
  if (symWrap && result) {
    const syms = PP.symptoms || [];
    symWrap.innerHTML = syms.map((s, i) => `<button type="button" class="symptom" data-i="${i}" aria-pressed="false">${esc(s.label)}</button>`).join('');
    const render = (i) => {
      $$('.symptom', symWrap).forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.i === i)));
      const s = syms[i]; const svc = svcById(s.service) || {};
      result.innerHTML = `
        <span class="k">We’d send</span>
        <h3>${esc(svc.title || '')}: <em>${esc(s.fix)}</em></h3>
        <p>${esc(s.note)}</p>
        <p>Same-day in most cases. Firm price at the door before any work starts.</p>
        <div class="ctas">
          <a class="btn btn-primary" href="${B.book}" target="_blank" rel="noopener">Book online</a>
          <a class="btn btn-outline on-dark" href="tel:${B.tel}">Call ${esc(B.phone)}</a>
        </div>
        <a class="more" href="${svc.page}">More about ${esc((svc.title || '').toLowerCase())} →</a>`;
    };
    symWrap.addEventListener('click', e => { const b = e.target.closest('.symptom'); if (b) render(+b.dataset.i); });
    result.innerHTML = `
      <span class="k">Start here</span>
      <h3>Tell us what’s <em>going on</em></h3>
      <p>Pick the closest match and we’ll tell you which crew we send, what it usually involves, and how to book them.</p>
      <p>Not sure? Call and describe it. Dispatch will sort it out.</p>
      <div class="ctas"><a class="btn btn-outline on-dark" href="tel:${B.tel}">Call ${esc(B.phone)}</a></div>`;
  }

  // Offers
  const offers = $('#offers');
  if (offers) {
    offers.innerHTML = (PP.offers || []).map(o => `
      <div class="offer reveal">
        <span class="stamp">${esc(o.headline)}</span>
        <div>
          <h3>${esc(o.title)}</h3>
          <p>${esc(o.terms)}</p>
          <a class="btn btn-outline" href="${B.book}" target="_blank" rel="noopener">Book and mention it</a>
        </div>
      </div>`).join('');
  }

  // Service pages: problems + FAQ
  const problems = $('#problems');
  if (problems) {
    const s = svcById(problems.dataset.service);
    if (s) problems.innerHTML = s.items.map(i => `<article class="problem reveal"><h3>${esc(i[0])}</h3><p>${esc(i[1])}</p></article>`).join('');
  }
  const faq = $('#faq[data-service]');
  if (faq) {
    const s = svcById(faq.dataset.service);
    if (s) faq.innerHTML = s.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="a"><p>${esc(a)}</p></div></details>`).join('');
  }

  // Reviews with technician filter
  const quotes = $('#quotes');
  if (quotes) {
    const all = window.PP_REVIEWS || [];
    const svc = quotes.dataset.service;
    const limit = +quotes.dataset.limit || 0;
    let pool = svc ? all.filter(r => r.service === svc || (svc === 'plumbing' && r.service === 'emergency')) : all;
    if (svc && pool.length < 6) pool = pool.concat(all.filter(r => r.service === 'general')).slice(0, 9);
    const techs = $('#techs');
    const counts = {};
    pool.forEach(r => { if (r.tech) counts[r.tech] = (counts[r.tech] || 0) + 1; });
    const names = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
    let current = 'all';
    const draw = () => {
      const list = (current === 'all' ? pool : pool.filter(r => r.tech === current));
      const shown = limit ? list.slice(0, limit) : list;
      quotes.innerHTML = shown.length ? shown.map(r => `
        <article class="quote">
          ${STARS}
          <blockquote>“${esc(r.quote)}”</blockquote>
          <footer><b>${esc(r.name)}</b>${r.tech ? `<span class="by">by ${esc(r.tech)}</span>` : ''}</footer>
        </article>`).join('') : '<p class="quotes-empty">No quotes for that name yet.</p>';
      if (techs) $$('.chip', techs).forEach(c => c.setAttribute('aria-pressed', String(c.dataset.t === current)));
    };
    if (techs && names.length) {
      techs.innerHTML = `<button type="button" class="chip" data-t="all" aria-pressed="true">Everyone<small>${pool.length}</small></button>` +
        names.map(n => `<button type="button" class="chip" data-t="${esc(n)}" aria-pressed="false">${esc(n)}<small>${counts[n]}</small></button>`).join('');
      techs.addEventListener('click', e => { const c = e.target.closest('.chip'); if (c) { current = c.dataset.t; draw(); } });
    }
    draw();
  }

  // Reveal on scroll
  const els = $$('.reveal');
  if (reduce || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); }
  else {
    const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  }
})();
