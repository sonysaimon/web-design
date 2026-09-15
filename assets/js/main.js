/* Atlantis Dental Yaletown — site behaviour (no dependencies) */
(function () {
  'use strict';
  var d = document;
  d.documentElement.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Announcement bar (CDCP) ---------- */
  var announce = d.querySelector('.announce');
  if (announce) {
    var KEY = 'ady-announce-dismissed';
    try { if (localStorage.getItem(KEY) === '1') announce.hidden = true; } catch (e) {}
    var closeBtn = announce.querySelector('.announce__close');
    if (closeBtn) closeBtn.addEventListener('click', function () {
      announce.hidden = true;
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = d.querySelector('.header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Desktop dropdowns (click + keyboard) ---------- */
  var items = d.querySelectorAll('.nav__item--has-menu');
  function closeAll(except) {
    items.forEach(function (it) {
      if (it !== except) {
        it.classList.remove('is-open');
        var b = it.querySelector('.nav__link'); if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  }
  items.forEach(function (it, idx) {
    var btn = it.querySelector('.nav__link');
    if (!btn) return;
    var menu = it.querySelector('.nav__menu');
    if (menu) { menu.id = menu.id || 'nav-menu-' + idx; btn.setAttribute('aria-controls', menu.id); }
    // Arrow-key navigation inside the dropdown (WAI-ARIA menu button pattern)
    it.addEventListener('keydown', function (e) {
      var links = Array.prototype.slice.call(it.querySelectorAll('.nav__menu a'));
      var i = links.indexOf(d.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); it.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); (links[i + 1] || links[0]).focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (i <= 0) { btn.focus(); } else { links[i - 1].focus(); } }
      else if (e.key === 'Home' && i >= 0) { e.preventDefault(); links[0].focus(); }
      else if (e.key === 'End' && i >= 0) { e.preventDefault(); links[links.length - 1].focus(); }
      else if (e.key === 'Escape') { it.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
    it.addEventListener('focusout', function (e) { if (!it.contains(e.relatedTarget)) { it.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); } });
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = it.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      closeAll(it);
    });
    it.addEventListener('mouseenter', function () { it.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); });
    it.addEventListener('mouseleave', function () { it.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); });
  });
  d.addEventListener('click', function (e) { if (!e.target.closest('.nav__item--has-menu')) closeAll(); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAll(); closeDrawer(); } });

  /* ---------- Mobile drawer ---------- */
  var drawer = d.querySelector('.drawer');
  var toggle = d.querySelector('.nav-toggle');
  var lastFocus = null;
  function openDrawer() {
    if (!drawer) return;
    lastFocus = d.activeElement;
    drawer.setAttribute('data-open', 'true');
    d.body.classList.add('no-scroll');
    toggle && toggle.setAttribute('aria-expanded', 'true');
    var first = drawer.querySelector('.drawer__close'); if (first) first.focus();
  }
  function closeDrawer() {
    if (!drawer || drawer.getAttribute('data-open') !== 'true') return;
    drawer.setAttribute('data-open', 'false');
    d.body.classList.remove('no-scroll');
    toggle && toggle.setAttribute('aria-expanded', 'false');
    if (lastFocus) lastFocus.focus();
  }
  if (toggle) toggle.addEventListener('click', function () {
    drawer.getAttribute('data-open') === 'true' ? closeDrawer() : openDrawer();
  });
  if (drawer) {
    drawer.querySelectorAll('.drawer__scrim, .drawer__close').forEach(function (el) { el.addEventListener('click', closeDrawer); });
    // Focus trap: Tab / Shift+Tab cycle inside the open drawer
    drawer.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || drawer.getAttribute('data-open') !== 'true') return;
      var f = Array.prototype.filter.call(drawer.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])'), function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    drawer.querySelectorAll('.drawer__list button').forEach(function (b) {
      b.addEventListener('click', function () {
        var sub = b.nextElementSibling;
        var open = sub.getAttribute('data-open') === 'true';
        sub.setAttribute('data-open', String(!open));
        b.setAttribute('aria-expanded', String(!open));
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = d.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Carousels ---------- */
  d.querySelectorAll('.carousel').forEach(function (c) {
    var track = c.querySelector('.carousel__track');
    var prev = c.querySelector('[data-dir="prev"]');
    var next = c.querySelector('[data-dir="next"]');
    function step() { var it = track.querySelector('.carousel__item'); return it ? it.getBoundingClientRect().width + 16 : 320; }
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: reduceMotion ? 'auto' : 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: reduceMotion ? 'auto' : 'smooth' }); });
  });

  /* ---------- Lazy YouTube (click to load) ---------- */
  d.querySelectorAll('.yt[data-id]').forEach(function (el) {
    el.addEventListener('click', function () {
      var id = el.getAttribute('data-id');
      var iframe = d.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = el.getAttribute('data-title') || 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.setAttribute('allowfullscreen', '');
      el.innerHTML = '';
      el.appendChild(iframe);
      el.classList.add('is-playing');
    }, { once: true });
  });

  /* ---------- Hours: highlight today ---------- */
  var today = new Date().getDay(); // 0 = Sunday
  d.querySelectorAll('.hours [data-day]').forEach(function (li) {
    if (parseInt(li.getAttribute('data-day'), 10) === today) {
      li.classList.add('is-today');
      var lbl = li.querySelector('span'); if (lbl && !lbl.querySelector('.sr-only')) lbl.insertAdjacentHTML('beforeend', '<span class="sr-only"> (today)</span>');
    }
  });

  /* ---------- Appointment / contact form ---------- */
  d.querySelectorAll('form[data-form]').forEach(function (form) {
    var status = form.querySelector('.form__status');
    var submitBtn = form.querySelector('[type="submit"]');
    var phone = form.querySelector('input[type="tel"]');

    // Phone mask (999) 999-9999 — same as the current site
    if (phone) phone.addEventListener('input', function () {
      var v = phone.value.replace(/\D/g, '').slice(0, 10);
      var out = v;
      if (v.length > 6) out = '(' + v.slice(0, 3) + ') ' + v.slice(3, 6) + '-' + v.slice(6);
      else if (v.length > 3) out = '(' + v.slice(0, 3) + ') ' + v.slice(3);
      else if (v.length > 0) out = '(' + v;
      phone.value = out;
    });

    function setError(field, msg) {
      var wrap = field.closest('.field');
      if (!wrap) return;
      var err = wrap.querySelector('.field__error');
      if (msg) { wrap.classList.add('has-error'); if (err) err.textContent = msg; field.setAttribute('aria-invalid', 'true'); }
      else { wrap.classList.remove('has-error'); field.removeAttribute('aria-invalid'); }
    }
    function validate() {
      var ok = true, firstBad = null;
      form.querySelectorAll('[required]').forEach(function (f) {
        var msg = '';
        if (!f.value.trim()) msg = 'This field is required.';
        else if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value)) msg = 'Please enter a valid email address.';
        setError(f, msg);
        if (msg && !firstBad) firstBad = f;
        if (msg) ok = false;
      });
      if (firstBad) firstBad.focus();
      return ok;
    }
    form.querySelectorAll('[required]').forEach(function (f) {
      f.addEventListener('blur', function () { if (f.value.trim()) setError(f, ''); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) { status.className = 'form__status'; status.textContent = ''; }
      if (!validate()) return;
      var action = form.getAttribute('action') || '';
      if (action.indexOf('FORM_ID') !== -1 || !action) {
        // Endpoint not configured yet: open a pre-filled email as a fallback so no enquiry is lost.
        var fd = new FormData(form), lines = [];
        fd.forEach(function (v, k) { if (k.indexOf('_') !== 0) lines.push(k + ': ' + v); });
        window.location.href = 'mailto:yaletown@atlantisdental.ca?subject=' + encodeURIComponent('Appointment request from website') + '&body=' + encodeURIComponent(lines.join('\n'));
        if (status) { status.className = 'form__status is-success'; status.textContent = 'Opening your email app so you can send this request to yaletown@atlantisdental.ca. You can also call us at (604) 899-0775.'; }
        return;
      }
      var original = submitBtn.textContent;
      submitBtn.disabled = true; submitBtn.textContent = 'Sending…';
      fetch(action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad'); return r.json(); })
        .then(function () {
          form.reset();
          if (status) { status.className = 'form__status is-success'; status.textContent = 'Thank you! Your request has been received. Our team will contact you shortly to confirm your appointment.'; status.focus && status.focus(); }
        })
        .catch(function () {
          if (status) { status.className = 'form__status is-error'; status.textContent = 'Sorry, something went wrong sending your request. Please call us at (604) 899-0775 or email yaletown@atlantisdental.ca.'; }
        })
        .finally(function () { submitBtn.disabled = false; submitBtn.textContent = original; });
    });
  });

  /* ---------- Current year ---------- */
  d.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
