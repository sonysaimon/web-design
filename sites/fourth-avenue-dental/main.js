/* Fourth Avenue Dental Clinic — page behaviour: nav, rendering from services.js, open-now line, FAQ, hours. */
(function () {
  const D = window.FAD || {};
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
  $('#service-groups').innerHTML = (D.groups || []).map((g) => `
    <section class="group" id="svc-${esc(g.id)}" aria-labelledby="g-${esc(g.id)}">
      <div class="group-head">
        <h3 id="g-${esc(g.id)}">${esc(g.name)}</h3>
        <p>${esc(g.lede)}</p>
      </div>
      <ul class="group-list" data-stagger>
        ${g.items.map((i) => `<li><strong>${esc(i.name)}</strong><span>${esc(i.text)}</span></li>`).join('')}
      </ul>
    </section>`).join('');

  /* Team */
  $('#team-list').innerHTML = (D.team || []).map((t) => `
    <article class="person">
      <h3>${esc(t.name)}</h3>
      <p class="person-role">${esc(t.role)}</p>
      <p>${esc(t.text)}</p>
      ${t.instagram ? `<a class="text-link" href="${esc(t.instagram)}" target="_blank" rel="noopener">Dr. Goswami on Instagram ↗</a>` : ''}
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

  /* Hours table with today highlighted */
  const now = new Date();
  const today = now.getDay(); // 0 = Sunday
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $('#hours-table tbody').innerHTML = (D.hours || []).map(([d, h]) => `<tr class="${order[today] === d ? 'is-today' : ''}"><th scope="row">${esc(d)}</th><td>${esc(h)}</td></tr>`).join('');

  /* "Open now" line in the hero and the visit block */
  const fmt = (h) => (h === 12 ? '12 pm' : h > 12 ? `${h - 12} pm` : `${h} am`);
  const openLine = () => {
    const H = D.hours24 || []; const t = H[today]; const hr = now.getHours() + now.getMinutes() / 60;
    if (t && hr >= t[0] && hr < t[1]) return { on: true, text: `Open now until ${fmt(t[1])}` };
    if (t && hr < t[0]) return { on: false, text: `Opens today at ${fmt(t[0])}` };
    for (let i = 1; i <= 7; i++) { const n = H[(today + i) % 7]; if (n) return { on: false, text: `Closed now, opens ${i === 1 ? 'tomorrow' : order[(today + i) % 7]} at ${fmt(n[0])}` }; }
    return { on: false, text: 'Call for hours' };
  };
  document.querySelectorAll('[data-open-now]').forEach((el) => { const o = openLine(); el.textContent = o.text; el.classList.toggle('is-open', o.on); });
})();
