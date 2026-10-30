/* Waller Plumbing — behaviour: live status line, tank-age checker, drawer, reveal, form. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* Live status in the utility bar: viewer's local time, always "open" because the line is 24/7. */
  var status = document.querySelector('[data-status]');
  if (status) {
    var tick = function () {
      var now = new Date();
      var day = now.toLocaleDateString('en-CA', { weekday: 'long' });
      var time = now.toLocaleTimeString('en-CA', { hour: 'numeric', minute: '2-digit' }).replace(/\./g, '').toLowerCase();
      var h = now.getHours();
      var note = (h >= 22 || h < 6) ? 'the emergency line is open' : (now.getDay() === 0 || now.getDay() === 6 ? 'open, weekends included' : 'the line is open');
      status.textContent = 'It’s ' + time + ' ' + day + ' — ' + note;
    };
    tick(); setInterval(tick, 30000);
  }

  /* Hot water tank age checker. Guidance mirrors Waller's own 8–12 year rule. */
  var sel = document.getElementById('tank-year');
  if (sel) {
    var thisYear = new Date().getFullYear();
    var ph = document.createElement('option'); ph.value = ''; ph.textContent = 'Pick a year'; sel.appendChild(ph);
    for (var y = thisYear; y >= thisYear - 30; y--) { var o = document.createElement('option'); o.value = y; o.textContent = y; sel.appendChild(o); }
    var older = document.createElement('option'); older.value = thisYear - 31; older.textContent = 'Before ' + (thisYear - 30); sel.appendChild(older);
    var out = document.getElementById('tank-verdict');
    var age = document.getElementById('tank-age');
    var render = function () {
      if (!sel.value) { out.className = 'verdict'; out.innerHTML = '<b>Pick the year it was made</b>You’ll find it on the rating plate, the sticker on the side of the tank.'; age.textContent = ''; return; }
      var a = thisYear - parseInt(sel.value, 10);
      age.textContent = a <= 0 ? 'New this year' : a + (a === 1 ? ' year old' : ' years old');
      if (a < 8) {
        out.className = 'verdict ok';
        out.innerHTML = '<b>Still in its prime.</b>If it’s leaking, noisy or short on hot water, that’s almost always one part. Worth repairing. A flush and anode check now buys it years.';
      } else if (a <= 12) {
        out.className = 'verdict';
        out.innerHTML = '<b>In the replacement window.</b>Tanks last 8 to 12 years. Small repairs still make sense, but start budgeting for a new one and don’t ignore a damp floor underneath.';
      } else {
        out.className = 'verdict warn';
        out.innerHTML = '<b>Living on borrowed time.</b>Tanks this age fail by leaking from the bottom, usually at night. Replacing it on your schedule beats replacing it at 2 am. Call for a same-day price.';
      }
    };
    sel.addEventListener('change', render); render();
  }

  /* Mobile drawer */
  var drawer = document.querySelector('.drawer');
  var openBtn = document.querySelector('.menu-btn');
  if (drawer && openBtn) {
    var closeBtn = drawer.querySelector('.close');
    var setOpen = function (v) { drawer.classList.toggle('open', v); openBtn.setAttribute('aria-expanded', String(v)); drawer.setAttribute('aria-hidden', String(!v)); document.body.style.overflow = v ? 'hidden' : ''; if (v) closeBtn.focus(); else openBtn.focus(); };
    openBtn.addEventListener('click', function () { setOpen(true); });
    closeBtn.addEventListener('click', function () { setOpen(false); });
    drawer.addEventListener('click', function (e) { if (e.target === drawer || e.target.tagName === 'A') setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && drawer.classList.contains('open')) setOpen(false); });
  }

  /* Reveal on scroll */
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  /* Request form: posts to Formspree (placeholder ID), shows a thank-you inline. */
  var form = document.querySelector('form.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]'); btn.disabled = true; btn.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad'); form.classList.add('is-sent'); })
        .catch(function () { btn.disabled = false; btn.textContent = 'Send request'; var err = form.querySelector('.err'); if (err) err.hidden = false; });
    });
  }

  /* Current year */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
