/* Lotus Dental — page behaviour: nav, rendering from services.js, FAQ, hours, demo form. */
(function () {
  const D = window.LOTUS || {};
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

  /* Services */
  $('#service-grid').innerHTML = (D.services || []).map((s) => `
    <article class="service ${s.signature ? 'service-signature' : ''} ${s.emergency ? 'service-emergency' : ''}" id="svc-${esc(s.id)}">
      <p class="service-lead">${esc(s.lead)}</p>
      <h3>${esc(s.name)}</h3>
      <p class="service-blurb">${esc(s.blurb)}</p>
      <ul class="service-items">${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      ${s.emergency
        ? `<a class="service-link" href="${esc(D.phoneHref)}">Call ${esc(D.phone)}</a>`
        : s.signature ? `<a class="service-link" href="#rootcanal">Why it is done here</a>` : `<a class="service-link" href="#book">Request an appointment</a>`}
    </article>`).join('');

  /* Team */
  $('#team-list').innerHTML = (D.team || []).map((t) => `
    <li><strong>${esc(t.name)}</strong><span>${esc(t.role)}</span>${t.note ? `<small>${esc(t.note)}</small>` : ''}</li>`).join('');

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
  const today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
  $('#hours-table tbody').innerHTML = (D.hours || []).map(([d, h]) => `<tr class="${d === today ? 'is-today' : ''} ${h === 'Closed' ? 'is-closed' : ''}"><th scope="row">${esc(d)}</th><td>${esc(h)}</td></tr>`).join('');

  /* Request form: real submit when a Formspree id is set; demo message until then. */
  const form = $('#book-form'), note = $('#form-note');
  if (form && form.action.includes('PLACEHOLDER')) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      note.textContent = 'Demo site: on the live site this request goes straight to the clinic’s inbox and Noor calls you back. For now, please phone (604) 294-1455.';
      note.classList.add('is-sent');
      note.focus && note.focus();
    });
  }
})();
