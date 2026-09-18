(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Year
  $('#year').textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = $('.nav-toggle');
  const menu = $('#mobile-menu');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    menu.hidden = open;
    document.body.classList.toggle('menu-open', !open);
  });
  $$('a', menu).forEach(a => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    document.body.classList.remove('menu-open');
  }));

  // Nav shadow on scroll
  const nav = $('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Services menu
  const data = window.HER_SERVICES || [];
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
      <h3 class="cat-title">${cat.title}</h3>
      <ul class="svc-list">
        ${cat.items.map(([name, dur, cost, desc]) => `
          <li class="svc">
            <div class="svc-main">
              <span class="svc-name">${name}</span>
              ${desc ? `<span class="svc-desc">${desc}</span>` : ''}
            </div>
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
  const revealables = $$('.section-head, .lounge-text, .lounge-photos figure, .lounge-wide, .cat, .guide, .masonry figure, .swatch-row > *, .names li, .quotes blockquote, .ratings, .visit-info, .visit-map');
  revealables.forEach(el => el.classList.add('reveal'));
  $$('.names li').forEach((li, i) => li.style.setProperty('--i', i));
  if (reduce || !('IntersectionObserver' in window)) {
    revealables.forEach(el => el.classList.add('in'));
  } else {
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealables.forEach(el => ro.observe(el));
  }

  // Lightbox for gallery
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
