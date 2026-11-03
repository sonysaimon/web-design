/* Aladin Car Wash — page behaviour: nav, data rendering, price toggle, before/after, FAQ. */
(function () {
  const D = window.ALADIN || {};
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const money = (n) => '$' + n.toFixed(2);

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

  /* Washes */
  const washGrid = $('#wash-grid');
  let mode = 'single';
  const renderWashes = () => {
    washGrid.innerHTML = (D.washes || []).map((w) => `
      <article class="wash ${w.accent ? 'wash-accent' : ''}" id="wash-${w.id}">
        ${w.tag ? `<span class="wash-tag">${esc(w.tag)}</span>` : ''}
        <h3>${esc(w.name)}</h3>
        <p class="wash-price"><span class="num">${money(mode === 'single' ? w.single : w.monthly)}</span><span class="per">${mode === 'single' ? 'per wash' : 'per month, unlimited'}</span></p>
        <p class="wash-blurb">${esc(w.blurb)}</p>
        <ul class="checks">${w.includes.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        ${mode === 'single'
          ? `<p class="wash-foot">Drive in. No booking.</p>`
          : `<a class="btn btn-outline btn-sm" href="${esc(D.membershipForm)}" target="_blank" rel="noopener">Join ${esc(w.name)} plan ↗</a>`}
      </article>`).join('');
  };
  renderWashes();
  document.querySelectorAll('.toggle-btn').forEach((b) => b.addEventListener('click', () => {
    mode = b.dataset.mode;
    document.querySelectorAll('.toggle-btn').forEach((x) => { const on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', String(on)); });
    renderWashes();
    washGrid.querySelectorAll('.wash').forEach((c) => c.classList.add('is-motion-done'));
  }));

  /* Detailing */
  $('#detail-grid').innerHTML = (D.detailing || []).map((d) => `
    <article class="detail">
      <div class="detail-media"><img src="${esc(d.photo)}" width="${d.w}" height="${d.h}" alt="${esc(d.alt)}" loading="lazy" data-animate="image-reveal"></div>
      <div class="detail-body">
        <h3>${esc(d.name)}</h3>
        <p class="detail-price">${esc(d.price)}</p>
        <p>${esc(d.blurb)}</p>
        <ul class="checks">${d.includes.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        <a class="btn btn-primary btn-sm" href="${esc(D.calendly)}" target="_blank" rel="noopener">Book ${esc(d.name.toLowerCase())}</a>
      </div>
    </article>`).join('');

  /* Ozone */
  $('#ozone-table tbody').innerHTML = (D.ozone || []).map((o) => `<tr><td>${esc(o.name)}</td><td>${esc(o.time)}</td><td class="num">${esc(o.price)}</td></tr>`).join('');

  /* Work */
  $('#work-grid').innerHTML = (D.work || []).map((w) => `
    <figure class="work">
      <img src="${esc(w.photo)}" width="${w.w}" height="${w.h}" alt="${esc(w.alt)}" loading="lazy">
      <figcaption><strong>${esc(w.car)}</strong><span>${esc(w.note)}</span></figcaption>
    </figure>`).join('');

  /* Reviews */
  $('#review-grid').innerHTML = (D.reviews || []).map((r) => `
    <blockquote class="review">
      <p>${esc(r.text)}</p>
      <footer><strong>${esc(r.name)}</strong><span>${esc(r.service)}</span></footer>
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

  /* Before / after: hold or toggle */
  const ba = $('#ba');
  if (ba) {
    const btn = $('.ba-btn', ba), tag = $('.ba-tag', ba);
    let pinned = false;
    const show = (before) => {
      ba.classList.toggle('show-before', before);
      tag.textContent = before ? 'Before' : 'After';
      btn.textContent = before ? (pinned ? 'Show after' : 'Release to see after') : 'Hold to see before';
    };
    btn.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse' && e.pointerType !== 'touch' && e.pointerType !== 'pen') return; if (!pinned) show(true); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => btn.addEventListener(ev, () => { if (!pinned) show(false); }));
    btn.addEventListener('click', (e) => { if (e.detail === 0) { pinned = !pinned; btn.setAttribute('aria-pressed', String(pinned)); show(pinned); } });
    ba.querySelector('.ba-stage').addEventListener('click', () => { pinned = !pinned; btn.setAttribute('aria-pressed', String(pinned)); show(pinned); });
  }
})();
