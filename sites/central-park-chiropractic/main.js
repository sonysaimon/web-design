/* Central Park Chiropractic & Massage — page behaviour: nav, rendering from services.js, FAQ, hours. */
(function () {
  const D = window.CPC || {};
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
  $('#care-list').innerHTML = (D.services || []).map((s) => `
    <article class="care" id="care-${esc(s.id)}">
      <div class="care-head">
        <h3>${esc(s.name)}</h3>
        <p class="care-who">${esc(s.who)}</p>
      </div>
      <div class="care-body">
        <p class="care-lede">${esc(s.lede)}</p>
        <ul class="care-items">${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      </div>
      <div class="care-foot">
        <span class="care-fee">${[].concat(s.fee).map((f) => `<span>${esc(f)}</span>`).join('')}</span>
        <a class="btn btn-outline btn-sm" href="${esc(D.booking)}" target="_blank" rel="noopener">Book ${esc(s.name.toLowerCase().replace('registered ', '').replace(' & gait scan', ''))}</a>
      </div>
    </article>`).join('');

  /* Conditions */
  $('#cond-groups').innerHTML = (D.conditions || []).map((g) => `
    <div class="cond-group">
      <h3>${esc(g.group)}</h3>
      <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </div>`).join('');

  /* Insurers */
  $('#insurer-list').innerHTML = (D.insurers || []).map((i) => `<li>${esc(i)}</li>`).join('');

  /* Fees */
  $('#fee-grid').innerHTML = (D.fees || []).map((f) => `
    <table class="fee-table">
      <caption><strong>${esc(f.group)}</strong><span>${esc(f.note)}</span></caption>
      <tbody>${f.rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody>
    </table>`).join('');

  /* Team */
  const initials = (n) => n.replace(/^Dr\.\s*/, '').split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  $('#team-grid').innerHTML = (D.team || []).map((t, i) => `
    <article class="member ${i === 0 ? 'member-lead' : ''}">
      <span class="member-mark" aria-hidden="true">${esc(initials(t.name))}</span>
      <h3>${esc(t.name)}<span class="member-creds">${esc(t.creds)}</span></h3>
      <p class="member-role">${esc(t.role)}${t.langs ? ` · ${esc(t.langs)}` : ''}</p>
      <p class="member-bio">${esc(t.bio)}</p>
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
  const today = new Date().getDay();
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $('#hours-table tbody').innerHTML = (D.hours || []).map(([d, h]) => `<tr class="${order[today] === d ? 'is-today' : ''}"><th scope="row">${esc(d)}${order[today] === d ? '<em>today</em>' : ''}</th><td>${esc(h)}</td></tr>`).join('');

  $('#year').textContent = String(new Date().getFullYear());
})();
