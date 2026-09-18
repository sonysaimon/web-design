(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BOOK = 'https://a1barbarshop.setmore.com/';

  $('#year').textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = $('.nav-toggle'), menu = $('#mobile-menu');
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open menu'); menu.hidden = true; document.body.classList.remove('menu-open'); };
  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') return closeMenu();
    toggle.setAttribute('aria-expanded', 'true'); toggle.setAttribute('aria-label', 'Close menu'); menu.hidden = false; document.body.classList.add('menu-open');
  });
  $$('a', menu).forEach(a => a.addEventListener('click', closeMenu));

  // Nav state
  const nav = $('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 16);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  // Price list
  const menuEl = $('#menu');
  (window.A1_SERVICES || []).forEach(([name, dur, price, note]) => {
    const row = document.createElement('div');
    row.className = 'svc';
    row.innerHTML = `
      <div class="svc-main"><span class="svc-name">${name}</span>${note ? `<span class="svc-note">${note}</span>` : ''}</div>
      <span class="svc-dur mono">${dur}</span>
      <span class="svc-price mono">${price}</span>
      <a class="svc-book" href="${BOOK}" target="_blank" rel="noopener" aria-label="Book ${name}">Book</a>`;
    menuEl.appendChild(row);
  });

  // Reveal on scroll
  const items = $$('.section-head, .svc, .pick, .barber, .grid figure, .room > *, .quotes blockquote, .rating, .faq > div, .visit-info, .visit-map');
  items.forEach((el, i) => { el.classList.add('reveal'); el.style.setProperty('--i', i % 6); });
  if (reduce || !('IntersectionObserver' in window)) items.forEach(el => el.classList.add('in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    items.forEach(el => io.observe(el));
  }

  // Lightbox
  const lb = $('#lightbox'), lbImg = $('img', lb), lbCap = $('.lb-cap', lb), figs = $$('#gallery figure');
  let idx = -1;
  const show = i => { idx = (i + figs.length) % figs.length; const im = $('img', figs[idx]); lbImg.src = im.src; lbImg.alt = im.alt; lbCap.textContent = ($('figcaption', figs[idx]) || {}).textContent || ''; lb.hidden = false; document.body.classList.add('lb-open'); $('.lb-close', lb).focus(); };
  const hide = () => { lb.hidden = true; document.body.classList.remove('lb-open'); if (figs[idx]) $('img', figs[idx]).focus(); };
  figs.forEach((f, i) => { const im = $('img', f); im.tabIndex = 0; im.setAttribute('role', 'button'); im.addEventListener('click', () => show(i)); im.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); } }); });
  $('.lb-close', lb).addEventListener('click', hide);
  lb.addEventListener('click', e => { if (e.target === lb) hide(); });
  document.addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') hide(); if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1); });
})();
