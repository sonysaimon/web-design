/* Brothers Plumbing — behaviour. No dependencies. */
(function () {
  'use strict';

  // Mobile nav
  var burger = document.querySelector('.burger');
  var mnav = document.querySelector('.mobile-nav');
  if (burger && mnav) {
    burger.addEventListener('click', function () {
      var open = mnav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-open', open);
    });
    mnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mnav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // Symptom chips: remember the choice so the booking form can prefill it
  document.querySelectorAll('.chip[data-symptom]').forEach(function (chip) {
    chip.addEventListener('click', function () {
      try { sessionStorage.setItem('bp-symptom', chip.getAttribute('data-symptom')); } catch (e) {}
    });
  });

  // Prefill the "what's going on" field from a chip, a ?issue= param, or the page the visitor came from
  var issue = document.querySelector('[data-prefill-issue]');
  if (issue) {
    var val = '';
    try { val = sessionStorage.getItem('bp-symptom') || ''; } catch (e) {}
    var q = new URLSearchParams(location.search).get('issue');
    if (q) val = q;
    if (val && !issue.value) issue.value = val;
    var sel = document.querySelector('[data-prefill-service]');
    if (sel && val) {
      var opt = Array.prototype.find.call(sel.options, function (o) { return o.textContent.toLowerCase() === val.toLowerCase(); });
      if (opt) sel.value = opt.value;
    }
  }

  // Form: Formspree placeholder. Replace the action in the HTML with the real endpoint.
  var form = document.querySelector('form[data-book]');
  if (form) {
    form.addEventListener('submit', function (e) {
      var status = form.querySelector('.form-status');
      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        if (status) status.textContent = 'Form not connected yet. Call 647-247-2230 to book, or set the Formspree ID in book.html.';
        return;
      }
      e.preventDefault();
      var data = new FormData(form);
      if (status) status.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) { return r.ok; })
        .then(function (ok) {
          if (status) status.textContent = ok ? 'Thanks. We will call you back shortly. For an emergency, call 647-247-2230 now.' : 'Something went wrong. Please call 647-247-2230.';
          if (ok) form.reset();
        })
        .catch(function () { if (status) status.textContent = 'Something went wrong. Please call 647-247-2230.'; });
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
    setTimeout(function () { items.forEach(function (el) { el.classList.add('in'); }); }, 2500);
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Footer year
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());
})();
