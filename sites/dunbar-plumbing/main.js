// Dunbar Plumbing Ltd. — behaviour: mobile menu, reveal on scroll, request form, copyright year.
(function () {
  'use strict';

  // Mobile menu
  var burger = document.querySelector('.burger');
  var mnav = document.getElementById('mnav');
  if (burger && mnav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      mnav.hidden = open;
    });
    mnav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { mnav.hidden = true; burger.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Reveal sections as they scroll in (respects reduced motion via CSS)
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.svc, .review, .why-list li, .steps-list li, .area-card');
  if (!reduce && 'IntersectionObserver' in window) {
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function (t) { io.observe(t); });
  }

  // Request form: submit via fetch to Formspree, show a confirmation in place
  document.querySelectorAll('form.req').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = form.querySelector('.req-ok');
      var err = form.querySelector('.req-err');
      ok.hidden = true; err.hidden = true;
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (/FORM_ID/.test(form.action)) {
        // Form not connected yet (demo). Show the fallback message.
        err.textContent = 'The request form is not connected yet. Please call or text (604) 312-2686.';
        err.hidden = false;
        return;
      }
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true; btn.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad status'); form.classList.add('sent'); ok.hidden = false; })
        .catch(function () { err.hidden = false; })
        .finally(function () { btn.disabled = false; btn.textContent = 'Send request'; });
    });
  });

  // After-hours note in the utility bar (Vancouver time, Mon–Fri 8:30–17:00)
  try {
    var now = new Date();
    var parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Vancouver', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(now);
    var get = function (t) { var p = parts.find(function (x) { return x.type === t; }); return p ? p.value : ''; };
    var wd = get('weekday'), mins = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
    var open = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].indexOf(wd.replace('.', '')) > -1 && mins >= 510 && mins < 1020;
    var note = document.querySelector('.util-closed');
    if (note && !open) { note.textContent = ' · Closed now, leave a message or text a photo'; note.hidden = false; }
  } catch (e) {}

  // Copyright year
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
