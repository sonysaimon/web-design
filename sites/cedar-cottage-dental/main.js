/* Cedar Cottage Dental — page behaviour: nav, rendering from services.js, hours, open-now line, request form. */
(function () {
  const D = window.CCD || {};
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
  $('#service-groups').innerHTML = (D.services || []).map((g) => `
    <div class="svc-group" id="svc-${esc(g.id)}">
      <div class="svc-head">
        <h3>${esc(g.name)}</h3>
        <p>${esc(g.lead)}</p>
      </div>
      <ul class="svc-list" data-stagger>${g.items.map((i) => `<li><strong>${esc(i.name)}</strong><span>${esc(i.note)}</span></li>`).join('')}</ul>
    </div>`).join('');

  /* Dentists */
  $('#dentist-grid').innerHTML = (D.dentists || []).map((d) => `
    <article class="dentist">
      <p class="dentist-role">${esc(d.role)}</p>
      <h3>${esc(d.name)}</h3>
      <p class="dentist-quote">${esc(d.quote)}</p>
      <ul class="creds">${d.credentials.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
      <p class="dentist-bio">${esc(d.bio)}</p>
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
  const fmt = (t) => { const [h, m] = t.split(':').map(Number); const ap = h >= 12 ? 'pm' : 'am'; const hh = ((h + 11) % 12) + 1; return m ? `${hh}:${String(m).padStart(2, '0')} ${ap}` : `${hh} ${ap}`; };
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date(), todayName = order[now.getDay()];
  const hours = D.hours || [];
  $('#hours-table tbody').innerHTML = hours.map(([d, o, c]) => `<tr class="${d === todayName ? 'is-today' : ''}"><th scope="row">${esc(d)}</th><td>${o ? `${fmt(o)} – ${fmt(c)}` : 'Closed'}</td></tr>`).join('');

  /* Open-now line in the hero */
  const openLine = $('#open-now');
  if (openLine && hours.length) {
    const byDay = Object.fromEntries(hours.map(([d, o, c]) => [d, o ? [o, c] : null]));
    const mins = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    const cur = now.getHours() * 60 + now.getMinutes();
    const nextOpen = (fromOffset) => { for (let i = fromOffset; i < fromOffset + 7; i++) { const d = order[(now.getDay() + i) % 7]; if (byDay[d]) return { day: d, open: byDay[d][0], offset: i }; } return null; };
    const t = byDay[todayName]; let text;
    if (t && cur < mins(t[0])) text = `Opens today at ${fmt(t[0])}`;
    else if (t && cur < mins(t[1])) text = `Open today until ${fmt(t[1])}`;
    else { const n = nextOpen(1); text = n ? `Closed now. Opens ${n.offset === 1 ? 'tomorrow' : n.day} at ${fmt(n.open)}` : 'Call for hours'; }
    openLine.textContent = text;
  }

  /* Request form: demo mode until a real Formspree id is set */
  const form = $('#request-form');
  if (form) {
    if (D.formAction) form.action = D.formAction;
    const status = $('#form-status');
    form.addEventListener('submit', (e) => {
      if (!form.action.includes('PLACEHOLDER')) return; // real endpoint: let it submit
      e.preventDefault();
      if (!form.reportValidity()) return;
      const name = (form.elements.name.value || '').trim().split(' ')[0];
      status.textContent = `Thanks${name ? ', ' + name : ''}. This is the demo site, so nothing was sent. On the live site this request goes straight to the front desk, who call back to confirm a time.`;
      status.classList.add('is-visible');
      form.reset();
    });
  }
})();
