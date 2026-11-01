// Mr. Quick Fob Vancouver: nav, fob checker (hero), compatibility filter, reveal.
(function () {
  var tg = document.querySelector('.nav-tg'), nav = document.getElementById('nav');
  if (tg && nav) {
    tg.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      tg.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Prices from their own pricing page.
  var CK = {
    fob: { p: '$45', u: 'per fob', m: '2–5 min · lifetime warranty · extra copies $30' },
    sticker: { p: '$45', u: 'per sticker', m: 'Stick it on your phone · 2–5 min · lifetime warranty' },
    remote: { p: '$75', u: 'per remote', m: '4-button remote · about 5 min · 1-year warranty' },
    car: { p: 'Quote', u: 'by text', m: 'Text year, make & model · we come to your car' }
  };
  var BRANDS = ['hid', 'awid', 'ioprox', 'indala', 'keyscan', 'keri', 'ict', 'mircom', 'paradox', 'pyramid', 'dks', 'doorking',
    'kantech', 'liftmaster', 'lift master', 'linear', 'cdvi', 'cis', 'erone', 'guardall', 'monarch', 'rcs', 'schlage', 'securakey', 'secura key', 'mifare', 'iclass', 'em'];
  var tabs = document.querySelectorAll('.ck-tabs button');
  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      tabs.forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
      var d = CK[b.dataset.k];
      document.getElementById('ck-price').textContent = d.p;
      document.getElementById('ck-unit').textContent = d.u;
      document.getElementById('ck-meta').textContent = d.m;
    });
  });
  var bi = document.getElementById('ck-brand'), res = document.getElementById('ck-res');
  if (bi) {
    bi.addEventListener('input', function () {
      var q = bi.value.trim().toLowerCase();
      if (!q) { res.textContent = 'We copy about 99% of fobs on the market.'; res.classList.remove('no'); return; }
      var hit = BRANDS.filter(function (x) { return x.indexOf(q) === 0 || q.indexOf(x) === 0; })[0];
      if (hit) { res.textContent = '✓ Yes, we copy ' + bi.value.trim() + ' fobs. Call or text to book.'; res.classList.remove('no'); }
      else if (q.length > 2) { res.textContent = 'Not on our list yet. Text us a photo, we support more than we list.'; res.classList.add('no'); }
    });
  }

  // compatibility filter
  var cq = document.getElementById('cg-q');
  if (cq) {
    var items = document.querySelectorAll('.cg'), none = document.getElementById('cg-none');
    cq.addEventListener('input', function () {
      var q = cq.value.trim().toLowerCase().replace(/\s+/g, ''), n = 0;
      items.forEach(function (f) {
        var ok = !q || f.dataset.b.replace(/\s+/g, '').indexOf(q) > -1;
        f.hidden = !ok; if (ok) n++;
      });
      none.hidden = n > 0;
    });
  }

  // reveal
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var els = document.querySelectorAll('.steps li, .pc, .wk, .rv, .more-card, .svc li');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { el.classList.add('rv-in'); io.observe(el); });
  }
})();
