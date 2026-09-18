(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  $('#year').textContent = new Date().getFullYear();

  // Promo bar: show only when it has text
  const promo = $('#promo');
  if (promo && $('p', promo).textContent.trim()) promo.hidden = false;

  // Mobile menu
  const toggle = $('.nav-toggle');
  const menu = $('#mobile-menu');
  const setMenu = open => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));

  // Nav hairline
  const nav = $('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu from services.js
  const data = window.HD_SERVICES || [];
  const catNav = $('#cat-nav');
  const menuEl = $('#menu');
  const price = p => {
    const from = /^from\s+/i.test(p);
    const n = p.replace(/^from\s+/i, '');
    return from ? `<span class="from">from</span> ${n}` : n;
  };
  data.forEach(cat => {
    const a = document.createElement('a');
    a.href = `#svc-${cat.id}`;
    a.textContent = cat.title;
    a.dataset.cat = cat.id;
    catNav.appendChild(a);

    const sec = document.createElement('section');
    sec.className = 'cat';
    sec.id = `svc-${cat.id}`;
    sec.innerHTML = `
      <div class="cat-head">
        <h3 class="cat-title">${cat.title}</h3>
        ${cat.intro ? `<p class="cat-intro">${cat.intro}</p>` : ''}
      </div>
      <ul class="svc-list">
        ${cat.items.map(([name, dur, cost, note]) => `
          <li class="svc">
            <span class="svc-name">${name}${note ? `<span class="svc-note">${note}</span>` : ''}</span>
            <span class="svc-dur">${dur}</span>
            <span class="svc-price">${price(cost)}</span>
          </li>`).join('')}
      </ul>`;
    menuEl.appendChild(sec);
  });

  // Active category while scrolling
  const links = $$('a', catNav);
  const cats = $$('.cat', menuEl);
  if ('IntersectionObserver' in window && cats.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = e.target.id.replace('svc-', '');
        links.forEach(l => l.classList.toggle('active', l.dataset.cat === id));
        const active = catNav.querySelector('.active');
        if (active) active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    cats.forEach(c => io.observe(c));
  }

  // Reveal on scroll
  const revealables = $$('.section-head, .cat, .masonry figure, .by-list li, .team-cta, .quotes blockquote, .ratings, .know-list > div, .visit-info, .visit-side > *, .salon-strip figure');
  revealables.forEach(el => el.classList.add('reveal'));
  $$('.by-list li, .know-list > div, .quotes blockquote, .salon-strip figure').forEach((el, i) => el.style.setProperty('--i', i % 9));
  if (reduce || !('IntersectionObserver' in window)) {
    revealables.forEach(el => el.classList.add('in'));
  } else {
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealables.forEach(el => ro.observe(el));
  }

  // Lightbox
  const lb = $('#lightbox');
  const lbImg = $('img', lb);
  const lbCap = $('.lb-cap', lb);
  const figures = $$('#masonry figure');
  let idx = -1;
  const show = i => {
    idx = (i + figures.length) % figures.length;
    const img = $('img', figures[idx]);
    lbImg.src = img.src; lbImg.alt = img.alt;
    lbCap.textContent = $('figcaption', figures[idx])?.textContent || '';
    lb.hidden = false; document.body.classList.add('lb-open');
    $('.lb-close', lb).focus();
  };
  const hide = () => { lb.hidden = true; document.body.classList.remove('lb-open'); figures[idx] && $('img', figures[idx]).focus(); };
  figures.forEach((f, i) => {
    const img = $('img', f);
    img.tabIndex = 0; img.setAttribute('role', 'button');
    img.addEventListener('click', () => show(i));
    img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); } });
  });
  $('.lb-close', lb).addEventListener('click', hide);
  lb.addEventListener('click', e => { if (e.target === lb) hide(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });
})();
