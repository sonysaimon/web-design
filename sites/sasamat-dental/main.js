/* Sasamat Dental — page behaviour: nav, rendering from services.js, week strip, FAQ, hours, demo form. */
(function () {
  const D = window.SASAMAT || {};
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

  /* Week strip: seven cells, all open, today ringed. Rendered wherever .week appears. */
  const today = new Date().getDay(); // 0 = Sunday
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hoursFor = (d) => ((D.hours || []).find((h) => h[0] === d) || [d, 'Closed'])[1];
  document.querySelectorAll('.week').forEach((w) => {
    w.innerHTML = weekOrder.map((d) => {
      const open = hoursFor(d) !== 'Closed';
      const is = order[today] === d;
      return `<span class="week-day ${open ? 'is-open' : ''} ${is ? 'is-today' : ''}" title="${esc(d)}: ${esc(hoursFor(d))}"><span class="sr-only">${esc(d)}: ${esc(hoursFor(d))}. </span><span aria-hidden="true">${d[0]}</span></span>`;
    }).join('');
    const note = w.nextElementSibling;
    if (note && note.classList.contains('week-note')) note.textContent = `Today, ${order[today]}: ${hoursFor(order[today])}`;
  });

  /* Services by group */
  $('#service-groups').innerHTML = (D.groups || []).map((g) => `
    <article class="group" id="svc-${esc(g.id)}">
      <div class="group-head">
        <h3>${esc(g.name)}</h3>
        <p>${esc(g.lead)}</p>
      </div>
      <ul class="group-list">${g.items.map(([n, t]) => `<li><strong>${esc(n)}</strong><span>${esc(t)}</span></li>`).join('')}</ul>
    </article>`).join('');

  /* Team */
  $('#team-grid').innerHTML = (D.team || []).map((t) => `
    <article class="person">
      ${t.photo
        ? `<img class="person-photo" src="${esc(t.photo)}" width="${t.w}" height="${t.h}" alt="${esc(t.name)}" loading="lazy">`
        : `<div class="person-mono" aria-hidden="true"><span>${esc(t.initials || t.name[0])}</span></div>`}
      <div class="person-body">
        <h3>${esc(t.name)}</h3>
        <p class="person-role">${esc(t.role)}</p>
        ${t.langs ? `<p class="person-langs">${esc(t.langs)}</p>` : ''}
        <p class="person-bio">${esc(t.bio)}</p>
      </div>
    </article>`).join('');

  /* Reviews */
  $('#review-grid').innerHTML = (D.reviews || []).map((r) => `
    <blockquote class="review">
      <p>${esc(r.text)}</p>
      <footer><strong>${esc(r.name)}</strong><span>Google review</span></footer>
    </blockquote>`).join('');

  /* FAQ */
  $('#faq-list').innerHTML = (D.faq || []).map(([q, a], i) => `
    <details class="faq-item" ${i === 0 ? 'open' : ''}>
      <summary>${esc(q)}<span class="faq-plus" aria-hidden="true"></span></summary>
      <p>${esc(a)}</p>
    </details>`).join('');

  /* Hours table */
  $('#hours-table tbody').innerHTML = (D.hours || []).map(([d, h]) => `<tr class="${order[today] === d ? 'is-today' : ''}"><th scope="row">${esc(d)}</th><td>${esc(h)}</td></tr>`).join('');

  /* Request form: demo placeholder until a Formspree ID is set */
  const form = $('#request-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.action.includes('PLACEHOLDER')) return;
      e.preventDefault();
      const msg = $('.form-msg', form);
      msg.hidden = false;
      msg.textContent = `This demo form is not connected yet. Call ${D.phone} to book, or email ${D.email}.`;
      msg.focus();
    });
  }
})();
