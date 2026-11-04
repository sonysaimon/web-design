/* Broadway Family Dental Centre — page behaviour: nav, rendering from services.js, FAQ, hours. */
(function () {
  const D = window.BFD || {};
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

  /* Services by group */
  $('#service-grid').innerHTML = (D.services || []).map((g) => `
    <article class="service-group">
      <h3>${esc(g.group)}</h3>
      <p class="service-note">${esc(g.note)}</p>
      <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </article>`).join('');

  /* Insurers */
  const chips = $('#insurer-chips');
  if (chips) chips.innerHTML = (D.insurers || []).map((i) => `<li>${esc(i)}</li>`).join('') + '<li class="chip-more">and more</li>';

  /* Team */
  $('#team-grid').innerHTML = (D.team || []).map((t) => `
    <article class="person">
      <h3>${esc(t.name)}</h3>
      <p class="person-role">${esc(t.role)}${t.creds ? ` · <span>${esc(t.creds)}</span>` : ''}</p>
      <p>${esc(t.bio)}</p>
    </article>`).join('');

  /* Reviews */
  $('#review-grid').innerHTML = (D.reviews || []).map((r) => `
    <blockquote class="review">
      <p>${esc(r.text)}</p>
      <footer><strong>${esc(r.name)}</strong><span>Google review</span></footer>
    </blockquote>`).join('');

  /* FAQ */
  $('#faq-list').innerHTML = (D.faq || []).map((f, i) => `
    <details class="faq-item" ${i === 0 ? 'open' : ''}>
      <summary>${esc(f.q)}<span class="faq-plus" aria-hidden="true"></span></summary>
      <p>${esc(f.a)}</p>
    </details>`).join('');

  /* Hours, today highlighted */
  const today = new Date().getDay(); // 0 = Sunday
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $('#hours-table tbody').innerHTML = (D.hours || []).map(([d, h]) => `<tr class="${order[today] === d ? 'is-today' : ''}${h === 'Closed' ? ' is-closed' : ''}"><th scope="row">${esc(d)}</th><td>${esc(h)}</td></tr>`).join('');

  /* Form: keep the page on the form after a Formspree redirect-less submit */
  const form = $('.book-form');
  if (form) form.addEventListener('submit', () => { const b = form.querySelector('button[type="submit"]'); if (b) { b.disabled = true; b.textContent = 'Sending…'; } });
})();
