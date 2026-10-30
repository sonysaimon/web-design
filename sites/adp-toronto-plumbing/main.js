/* ADP Toronto Plumbing — behaviour: nav, rebate calculator, reveal, form */
(function () {
  'use strict';

  /* ---- Header menu ---- */
  var header = document.querySelector('.header');
  var burger = document.querySelector('.burger');
  if (burger && header) {
    burger.addEventListener('click', function () {
      var open = header.getAttribute('data-menu') === 'open';
      header.setAttribute('data-menu', open ? 'closed' : 'open');
      burger.setAttribute('aria-expanded', String(!open));
    });
  }
  document.querySelectorAll('.nav li > button').forEach(function (btn) {
    var li = btn.parentElement;
    btn.addEventListener('click', function () {
      var open = li.getAttribute('data-open') === 'true';
      document.querySelectorAll('.nav li[data-open="true"]').forEach(function (o) { o.setAttribute('data-open', 'false'); });
      li.setAttribute('data-open', open ? 'false' : 'true');
      btn.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav')) {
      document.querySelectorAll('.nav li[data-open="true"]').forEach(function (o) {
        o.setAttribute('data-open', 'false');
        o.querySelector('button').setAttribute('aria-expanded', 'false');
      });
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav li[data-open="true"]').forEach(function (o) { o.setAttribute('data-open', 'false'); });
      if (header) header.setAttribute('data-menu', 'closed');
    }
  });

  /* ---- Rebate calculator ---- */
  var calc = document.querySelector('.calc');
  if (calc) {
    var cap = Number(calc.getAttribute('data-cap')) || 6650;
    var total = calc.querySelector('.calc-total .num');
    var inputs = calc.querySelectorAll('input[type="checkbox"]');
    var fmt = function (n) { return '$' + n.toLocaleString('en-CA'); };
    var update = function () {
      var sum = 0;
      var sumChecked = false;
      inputs.forEach(function (cb) {
        var id = cb.getAttribute('data-id');
        var amount = Number(cb.getAttribute('data-amount'));
        var qtySel = calc.querySelector('select[data-qty-for="' + id + '"]');
        var qty = qtySel ? Number(qtySel.value) : 1;
        var on = cb.checked;
        if (id === 'sump' && on) sumChecked = true;
        if (id === 'battery') {
          var sumpCb = calc.querySelector('input[data-id="sump"]');
          if (sumpCb && !sumpCb.checked) { cb.checked = false; on = false; }
        }
        if (on) sum += amount * qty;
        calc.querySelectorAll('[data-dg="' + id + '"]').forEach(function (el) { el.classList.toggle('on', on); });
        if (qtySel) qtySel.disabled = !on;
      });
      var shown = Math.min(sum, cap);
      total.textContent = fmt(shown);
      total.classList.toggle('capped', sum > cap);
      calc.querySelector('.calc-total .lbl').innerHTML = sum > cap
        ? 'Eligible subsidy<br>(City cap per property)'
        : 'Eligible subsidy<br>(80% of invoiced cost, up to)';
      var batteryLabel = calc.querySelector('input[data-id="battery"]');
      if (batteryLabel) batteryLabel.disabled = !sumChecked;
    };
    calc.addEventListener('change', update);
    update();
  }

  /* ---- Reveal on scroll ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---- Estimate form (Formspree) ---- */
  var form = document.querySelector('form.form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = form.getAttribute('action') || '';
      if (/YOUR_FORM_ID/.test(action)) {
        status.textContent = 'Demo site: the form is not connected yet. Please call 416-822-2221.';
        status.classList.add('err');
        return;
      }
      status.textContent = 'Sending…'; status.classList.remove('err');
      fetch(action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad'); form.reset(); status.textContent = 'Sent. We will call you back shortly.'; })
        .catch(function () { status.textContent = 'Could not send. Please call 416-822-2221.'; status.classList.add('err'); });
    });
  }

  /* ---- Current year ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
