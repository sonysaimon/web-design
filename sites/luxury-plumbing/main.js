/* Luxury Plumbing — behaviour: nav, reveal, symptom chips, form, year. */
(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  // Mobile nav
  const toggle = $('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    $$('.nav a').forEach(a => a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Scroll reveal
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = $$('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(e => io.observe(e));
  }

  // Symptom chips prefill the details field
  const msg = $('#f-msg');
  $$('.chip').forEach(chip => {
    chip.setAttribute('aria-pressed', 'false');
    chip.addEventListener('click', () => {
      const on = chip.getAttribute('aria-pressed') !== 'true';
      $$('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', String(on));
      if (msg) {
        const tag = chip.textContent.trim() + ': ';
        const cleaned = msg.value.replace(/^[^:\n]{3,30}: /, '');
        msg.value = on ? tag + cleaned : cleaned;
        if (on) msg.focus();
      }
    });
  });

  // Form: validate, submit via fetch, friendly status
  const form = $('#request-form');
  if (form) {
    const status = $('.form-status', form);
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      status.className = 'form-status';
      const name = $('#f-name').value.trim(), phone = $('#f-phone').value.trim();
      if (!name || !phone) { status.textContent = 'Add your name and a phone number so we can call you back.'; status.classList.add('err'); return; }
      if (form.action.includes('YOUR_FORM_ID')) {
        status.textContent = 'Form not connected yet. Call (647) 560-2948 and we will book you in.'; status.classList.add('err'); return;
      }
      const btn = $('button[type=submit]', form); btn.disabled = true;
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (res.ok) { status.textContent = 'Sent. We will call you back shortly.'; status.classList.add('ok'); form.reset(); $$('.chip').forEach(c => c.setAttribute('aria-pressed', 'false')); }
        else throw new Error('bad');
      } catch (e) {
        status.textContent = 'Could not send. Call (647) 560-2948 instead.'; status.classList.add('err');
      } finally { btn.disabled = false; }
    });
  }

  const y = $('#year'); if (y) y.textContent = String(new Date().getFullYear());
})();
