/* Pristine Plumbing & Drainage — behaviour. Reads window.PP from services.js. */
(function () {
  var D = window.PP || {};
  var byId = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var svc = function (slug) { return (D.services || []).filter(function (s) { return s.slug === slug; })[0]; };

  /* Year */
  var y = byId('year'); if (y) y.textContent = new Date().getFullYear();

  /* Mobile menu */
  var burger = document.querySelector('.burger'), menu = byId('mobilemenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.hasAttribute('hidden');
      if (open) menu.removeAttribute('hidden'); else menu.setAttribute('hidden', '');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') { menu.setAttribute('hidden', ''); burger.setAttribute('aria-expanded', 'false'); } });
  }

  /* Services grid (home) */
  var grid = byId('servicegrid');
  if (grid && D.groups) {
    grid.innerHTML = D.groups.map(function (g) {
      var cards = D.services.filter(function (s) { return s.group === g.id; }).map(function (s) {
        return '<a class="card' + (s.slug === 'emergency-plumbing' ? ' card--em' : '') + '" href="' + s.slug + '.html">' +
          '<img src="' + s.photo + '" alt="' + esc(s.photoAlt) + '" loading="lazy" width="800" height="500">' +
          '<div class="card__body"><p class="card__eyebrow">' + esc(s.eyebrow) + '</p><h4>' + esc(s.name) + '</h4><p>' + esc(s.card) + '</p><span class="card__more">See how we handle it →</span></div></a>';
      }).join('');
      return '<div class="group"><div class="group__head"><h3>' + esc(g.label) + '</h3><p>' + esc(g.blurb) + '</p></div><div class="cards">' + cards + '</div></div>';
    }).join('');
  }

  /* Picker */
  var picker = byId('picker');
  if (picker && D.picker) {
    var chips = picker.querySelector('.picker__chips'), ans = picker.querySelector('.picker__answer');
    var labels = { call: 'Call now', sameday: 'Same-day visit', book: 'Book a visit' };
    chips.innerHTML = D.picker.map(function (p, i) { return '<button type="button" class="chip" aria-pressed="false" data-i="' + i + '">' + esc(p.label) + '</button>'; }).join('');
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      var p = D.picker[+b.dataset.i]; var s = svc(p.service); var also = p.also ? svc(p.also) : null;
      chips.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      var links = (p.urgency === 'call'
        ? '<a class="btn btn--call" href="tel:' + D.business.phoneE164 + '">Call ' + D.business.phone + '</a>'
        : '<a class="btn btn--primary" href="#request">Request a visit</a><a class="btn btn--outline" href="tel:' + D.business.phoneE164 + '">or call ' + D.business.phone + '</a>') +
        '<a class="link" href="' + s.slug + '.html">' + esc(s.name) + ' →</a>' + (also ? '<a class="link" href="' + also.slug + '.html">' + esc(also.name) + ' →</a>' : '');
      ans.innerHTML = '<span class="urgency urgency--' + p.urgency + '">' + labels[p.urgency] + '</span><p>' + esc(p.advice) + '</p><div class="picker__links">' + links + '</div>';
      ans.removeAttribute('hidden');
    });
  }

  /* Work grid */
  var wg = byId('workgrid');
  if (wg && D.work) {
    wg.innerHTML = D.work.map(function (w) {
      var s = svc(w.service);
      return '<article class="job"><img src="' + w.photo + '" alt="' + esc(w.title) + ', ' + esc(w.place) + '" loading="lazy" width="800" height="600"><div class="job__body"><div class="job__meta"><span>' + esc(w.place) + '</span><span>' + esc(s ? s.eyebrow : '') + '</span></div><h3>' + esc(w.title) + '</h3><p>' + esc(w.text) + '</p>' + (s ? '<a class="link job__link" href="' + s.slug + '.html">' + esc(s.name) + ' →</a>' : '') + '</div></article>';
    }).join('');
  }

  /* Quotes (home and service pages) */
  document.querySelectorAll('[data-ids]').forEach(function (el) {
    var ids = el.getAttribute('data-ids').split(',');
    el.innerHTML = ids.map(function (id) {
      var r = D.reviews[id.trim()]; if (!r) return '';
      return '<blockquote class="quote"><span class="quote__stars" aria-label="5 stars">★★★★★</span><p>“' + esc(r.text) + '”</p><footer><b>' + esc(r.name) + '</b> · Google · ' + esc(r.when) + '<br><span class="quote__tag">' + esc(r.service) + (r.tech ? ' · with ' + esc(r.tech) : '') + '</span></footer></blockquote>';
    }).join('');
  });

  /* Areas list */
  var al = byId('arealist');
  if (al && D.areas) {
    al.innerHTML = D.areas.map(function (a) {
      var id = a.name.toLowerCase().replace(/&/g, '').replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
      return '<li' + (a.home ? ' class="home"' : '') + '><a href="service-areas.html#' + id + '">' + esc(a.name) + (a.home ? ' <small>(home base)</small>' : '') + '</a></li>';
    }).join('');
  }

  /* Team */
  var tg = byId('teamgrid');
  if (tg && D.team) {
    tg.innerHTML = D.team.map(function (m) {
      var media = m.photo ? '<img src="' + m.photo + '" alt="' + esc(m.name) + ', ' + esc(m.role) + '" loading="lazy" width="600" height="600">' : '<div class="member__name" aria-hidden="true"><span>' + esc(m.name) + '</span></div>';
      return '<article class="member">' + media + '<div class="member__body"><h3>' + esc(m.name) + '</h3><p class="member__role">' + esc(m.role) + '</p><p>' + esc(m.note) + '</p></div></article>';
    }).join('');
  }

  /* FAQ (home) */
  var fl = byId('faqlist');
  if (fl && D.faq) {
    fl.innerHTML = D.faq.map(function (q) { return '<details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }).join('');
  }

  /* Form: Formspree via fetch, with graceful fallback */
  var form = document.querySelector('form.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var required = form.querySelectorAll('[required]'), ok = true;
      required.forEach(function (f) { var valid = f.type === 'checkbox' ? f.checked : f.value.trim() !== ''; f.closest('label').style.outline = valid ? '' : '2px solid var(--coral)'; if (!valid) ok = false; });
      if (!ok) { e.preventDefault(); return; }
      if (!window.fetch || /REPLACE_ME/.test(form.action)) {
        // Demo mode: no endpoint yet. Show the thank-you without sending.
        e.preventDefault(); form.querySelector('.form__ok').removeAttribute('hidden'); form.querySelector('button[type=submit]').disabled = true; return;
      }
      e.preventDefault();
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad'); form.querySelector('.form__ok').removeAttribute('hidden'); form.querySelector('button[type=submit]').disabled = true; })
        .catch(function () { form.submit(); });
    });
  }
})();
