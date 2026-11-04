/* TeamWell Health — page behaviour: nav, "who to see" chooser, rendering from services.js, FAQ, hours, request form. */
(function () {
  const D = window.TEAMWELL || {};
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

  /* Chooser: what's going on → which first appointment */
  const list = $('#chooser-list'), card = $('#chooser-card');
  const concerns = D.concerns || [];
  const renderCard = (c) => {
    card.innerHTML = `
      <p class="chooser-service">${esc(c.service)}</p>
      <p class="chooser-who">${esc(c.who)}</p>
      <p class="chooser-text">${esc(c.text)}</p>
      <a class="btn btn-primary" href="#book" data-reason="${esc(c.reason)}">Request this appointment</a>`;
  };
  list.innerHTML = concerns.map((c, i) => `<button type="button" role="tab" class="chip ${i === 0 ? 'is-on' : ''}" aria-selected="${i === 0}" data-id="${esc(c.id)}">${esc(c.label)}</button>`).join('');
  if (concerns.length) renderCard(concerns[0]);
  list.addEventListener('click', (e) => {
    const b = e.target.closest('.chip'); if (!b) return;
    list.querySelectorAll('.chip').forEach((x) => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-selected', String(x === b)); });
    renderCard(concerns.find((c) => c.id === b.dataset.id));
  });
  card.addEventListener('click', (e) => {
    const a = e.target.closest('[data-reason]'); if (!a) return;
    const r = $('#f-reason'); if (r && !r.value) r.value = a.dataset.reason;
  });

  /* Services ledger */
  $('#service-ledger').innerHTML = (D.services || []).map((s) => `
    <article class="ledger-row ${s.photo ? 'has-photo' : ''}" id="svc-${esc(s.id)}">
      <div class="ledger-label">
        <h3>${esc(s.name)}</h3>
        <p class="ledger-who">${esc(s.who)}</p>
      </div>
      <div class="ledger-body">
        <p>${esc(s.blurb)}</p>
        <ul class="checks">${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        <a class="text-link" href="#book">Request an appointment</a>
      </div>
      ${s.photo ? `<figure class="ledger-photo"><img src="${esc(s.photo.src)}" width="${s.photo.w}" height="${s.photo.h}" alt="${esc(s.photo.alt)}" loading="lazy" data-animate="image-reveal"></figure>` : ''}
    </article>`).join('');

  /* People */
  $('#people').innerHTML = (D.team || []).map((p) => `
    <article class="person">
      <h3>${esc(p.name)}<span class="cred">${esc(p.cred)}</span></h3>
      <p>${esc(p.bio)}</p>
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

  /* Hours: today highlighted when hours exist; otherwise "Call for hours" */
  const today = new Date().getDay(); // 0 = Sunday
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hours = D.hours || [];
  const tbody = $('#hours-table tbody'), note = $('#hours-note'), inline = $('#hours-inline');
  if (hours.length) {
    tbody.innerHTML = hours.map(([d, h]) => `<tr class="${order[today] === d ? 'is-today' : ''}"><th scope="row">${esc(d)}</th><td>${esc(h)}</td></tr>`).join('');
    note.textContent = D.hoursNote || '';
    inline.innerHTML = hours.map(([d, h]) => `${esc(d.slice(0, 3))} ${esc(h)}`).join(' · ');
  } else {
    tbody.innerHTML = `<tr class="is-today"><th scope="row">Hours</th><td>Call for hours · <a href="${esc(D.phoneHref || '#')}">${esc(D.phone || '')}</a></td></tr>`;
    note.textContent = D.hoursNote || '';
    inline.innerHTML = `Call for hours: <a href="${esc(D.phoneHref || '#')}">${esc(D.phone || '')}</a>. ${esc(D.hoursNote || '')}`;
  }

  /* Request form */
  const form = $('#request-form');
  if (form) {
    const err = $('#form-error'), done = $('#form-done');
    form.addEventListener('submit', (e) => {
      const ok = ['f-name', 'f-phone', 'f-email'].every((id) => $('#' + id).value.trim());
      if (!ok) { e.preventDefault(); err.hidden = false; $('#f-name').focus(); return; }
      err.hidden = true;
      if (form.action.includes('PLACEHOLDER')) { // demo: Formspree not connected yet
        e.preventDefault();
        form.querySelectorAll('input, select, textarea, button').forEach((el) => { el.disabled = true; });
        done.hidden = false;
      }
    });
  }
})();
