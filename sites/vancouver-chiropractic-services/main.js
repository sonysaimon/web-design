/* Vancouver Chiropractic Services — page behaviour: nav, rendering from services.js, hours highlight. */
(function () {
  const D = window.VCS || {};
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* Nav */
  const nav = $('.nav'), toggle = $('.nav-toggle'), menu = $('#menu');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  /* Care */
  $('#care-grid').innerHTML = (D.services || []).map((s) => `
    <article class="care" id="care-${esc(s.id)}">
      <h3>${esc(s.name)}</h3>
      <p class="care-lead">${esc(s.lead)}</p>
      <ul class="checks">${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      <footer><span class="care-who">${esc(s.who)}</span><a href="${esc(D.booking)}" target="_blank" rel="noopener">Book ↗</a></footer>
    </article>`).join('');

  $('#condition-list').innerHTML = (D.conditions || []).map((c) => `<li>${esc(c)}</li>`).join('');

  /* Fees and billing */
  $('#fee-table tbody').innerHTML = (D.fees || []).map((f) => `
    <tr><th scope="row">${esc(f.name)}${f.note ? `<small>${esc(f.note)}</small>` : ''}</th><td>${esc(f.time)}</td><td class="num">${esc(f.price)}</td></tr>`).join('');
  $('#insurer-list').innerHTML = (D.insurers || []).map((i) => `<li>${esc(i)}</li>`).join('');

  /* Team */
  $('#team-grid').innerHTML = (D.team || []).map((t) => `
    <article class="member">
      <div class="member-photo"><img src="${esc(t.photo)}" width="${t.w}" height="${t.h}" alt="${esc(t.alt)}" loading="lazy"></div>
      <div class="member-body">
        <h3>${esc(t.name)}</h3>
        <p class="member-role">${esc(t.role)}</p>
        <p>${esc(t.bio)}</p>
        <ul class="tags">${t.tags.map((g) => `<li>${esc(g)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');

  /* Reviews */
  $('#review-grid').innerHTML = (D.reviews || []).map((r) => `
    <blockquote class="review">
      <p>${esc(r.text)}</p>
      <footer><strong>${esc(r.name)}</strong><span>${esc(r.tag)}</span></footer>
    </blockquote>`).join('');

  /* FAQ */
  $('#faq-list').innerHTML = (D.faq || []).map((f, i) => `
    <details class="faq-item" ${i === 0 ? 'open' : ''}>
      <summary>${esc(f.q)}<span class="faq-plus" aria-hidden="true"></span></summary>
      <p>${esc(f.a)}</p>
    </details>`).join('');

  /* Hours */
  const today = new Date().getDay(); // 0 = Sunday
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $('#hours-table tbody').innerHTML = (D.hours || []).map(([d, h]) => `<tr class="${order[today] === d ? 'is-today' : ''}"><th scope="row">${esc(d)}</th><td>${esc(h)}</td></tr>`).join('');
})();
