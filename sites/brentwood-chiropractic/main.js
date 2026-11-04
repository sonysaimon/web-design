/* Brentwood Chiropractic — page behaviour: nav, rendering from services.js, FAQ, hours. */
(function () {
  const D = window.BCSRC || {};
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

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

  /* Care groups with fee lists */
  $('#care-grid').innerHTML = (D.services || []).map((g) => `
    <article class="care" id="care-${esc(g.id)}">
      <header class="care-head">
        <h3>${esc(g.group)}</h3>
        <p class="care-who">${esc(g.who)}</p>
      </header>
      <p class="care-blurb">${esc(g.blurb)}</p>
      <ul class="fees">${g.items.map((i) => `
        <li>
          <span class="fee-name">${esc(i.name)}${i.time ? `<small>${esc(i.time)}</small>` : ''}${i.note ? `<small>${esc(i.note)}</small>` : ''}</span>
          <span class="fee-amt">${esc(i.fee)}</span>
        </li>`).join('')}</ul>
      ${g.foot ? `<p class="care-foot">${esc(g.foot)}</p>` : ''}
      ${g.tel
        ? `<a class="btn btn-outline btn-sm" href="tel:${esc(D.phoneTel)}">${esc(g.cta)}</a>`
        : `<a class="btn btn-outline btn-sm" href="${esc(D.booking)}" target="_blank" rel="noopener">${esc(g.cta || 'Book online')}</a>`}
    </article>`).join('');

  /* Conditions */
  $('#conditions').innerHTML = (D.conditions || []).map((c) => `<li>${esc(c)}</li>`).join('');

  /* Course of care */
  $('#steps').innerHTML = (D.steps || []).map((s) => `<li><span>${esc(s.title)}</span>${esc(s.text)}</li>`).join('');

  /* Team */
  $('#team-grid').innerHTML = (D.team || []).map((t) => `
    <article class="person">
      <h3>${esc(t.name)}${t.creds ? `<span class="creds">${esc(t.creds)}</span>` : ''}</h3>
      <p class="person-role">${esc(t.role)}</p>
      <p>${esc(t.bio)}</p>
      ${t.link ? `<a class="text-link" href="${esc(t.link.href)}" target="_blank" rel="noopener">${esc(t.link.label)} ↗</a>` : ''}
    </article>`).join('');
  const f = D.founder;
  if (f) {
    $('#founder').innerHTML = `
      <p class="eyebrow eyebrow-light"><span class="mark" aria-hidden="true"></span>In memory of the founder</p>
      <h3>${esc(f.name)}<span class="creds">${esc(f.creds)}</span></h3>
      <p class="person-role">${esc(f.years)}</p>
      <p>${esc(f.text)}</p>
      <blockquote class="pull"><p>“${esc(f.quote)}”</p><cite>Dr. Joe Csabai</cite></blockquote>`;
  }

  /* Timeline */
  $('#timeline').innerHTML = (D.timeline || []).map((t) => `
    <li><span class="year">${esc(t.year)}</span><p>${esc(t.text)}</p></li>`).join('');

  /* Reviews */
  $('#review-grid').innerHTML = (D.reviews || []).map((r) => `
    <blockquote class="review">
      <p>${esc(r.text)}</p>
      <footer><strong>${esc(r.name)}</strong><span>${esc(r.note)} · Google</span></footer>
    </blockquote>`).join('');

  /* FAQ */
  $('#faq-list').innerHTML = (D.faq || []).map((q, i) => `
    <details class="faq-item" ${i === 0 ? 'open' : ''}>
      <summary>${esc(q.q)}<span class="faq-plus" aria-hidden="true"></span></summary>
      <p>${esc(q.a)}</p>
    </details>`).join('');

  /* Hours, today highlighted */
  const today = new Date().getDay();
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $('#hours-table tbody').innerHTML = (D.hours || []).map(([d, h]) => `<tr class="${order[today] === d ? 'is-today' : ''}"><th scope="row">${esc(d)}</th><td>${esc(h)}</td></tr>`).join('');
  const open = (D.hours || []).find(([d]) => d === order[today]);
  const status = $('#open-status');
  if (status && open) status.textContent = open[1] === 'Closed' ? 'Closed today · back Monday 9 am' : `Open today ${open[1]}`;
})();
