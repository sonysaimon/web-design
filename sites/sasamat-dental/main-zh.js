/* Sasamat Dental — Chinese page behaviour: main.js with Chinese labels, rendering from services-zh.js. */
(function () {
  const D = window.SASAMAT || {};
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* Nav */
  const nav = $('.nav'), toggle = $('.nav-toggle'), menu = $('#menu');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
  };
  toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  /* Week strip: seven cells, all open, today ringed. Rendered wherever .week appears. */
  const today = new Date().getDay(); // 0 = Sunday
  const order = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const weekOrder = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
  const hoursFor = (d) => ((D.hours || []).find((h) => h[0] === d) || [d, '休息'])[1];
  document.querySelectorAll('.week').forEach((w) => {
    w.innerHTML = weekOrder.map((d) => {
      const open = hoursFor(d) !== '休息';
      const is = order[today] === d;
      return `<span class="week-day ${open ? 'is-open' : ''} ${is ? 'is-today' : ''}" title="${esc(d)}: ${esc(hoursFor(d))}"><span class="sr-only">${esc(d)}: ${esc(hoursFor(d))}. </span><span aria-hidden="true">${d[2]}</span></span>`;
    }).join('');
    const note = w.nextElementSibling;
    if (note && note.classList.contains('week-note')) note.textContent = `今天（${order[today]}）：${hoursFor(order[today])}`;
  });

  /* Services by group */
  $('#service-groups').innerHTML = (D.groups || []).map((g) => `
    <article class="group" id="svc-${esc(g.id)}">
      <div class="group-head">
        <h3>${esc(g.name)}</h3>
        <p>${esc(g.lead)}</p>
      </div>
      <ul class="group-list">${g.items.map(([n, t]) => `<li><strong>${esc(n)}</strong><span>${esc(t)}</span></li>`).join('')}</ul>
    </article>`).join('');

  /* Team */
  $('#team-grid').innerHTML = (D.team || []).map((t) => `
    <article class="person">
      ${t.photo
        ? `<img class="person-photo" src="${esc(t.photo)}" width="${t.w}" height="${t.h}" alt="${esc(t.name)}" loading="lazy">`
        : `<div class="person-mono" aria-hidden="true"><span>${esc(t.initials || t.name[0])}</span></div>`}
      <div class="person-body">
        <h3>${esc(t.name)}</h3>
        <p class="person-role">${esc(t.role)}</p>
        ${t.langs ? `<p class="person-langs">${esc(t.langs)}</p>` : ''}
        <p class="person-bio">${esc(t.bio)}</p>
      </div>
    </article>`).join('');

  /* Reviews */
  $('#review-grid').innerHTML = (D.reviews || []).map((r) => `
    <blockquote class="review">
      <p lang="en">${esc(r.text)}</p>
      <footer><strong>${esc(r.name)}</strong><span>Google 评价（英文原文）</span></footer>
    </blockquote>`).join('');

  /* FAQ */
  $('#faq-list').innerHTML = (D.faq || []).map(([q, a], i) => `
    <details class="faq-item" ${i === 0 ? 'open' : ''}>
      <summary>${esc(q)}<span class="faq-plus" aria-hidden="true"></span></summary>
      <p>${esc(a)}</p>
    </details>`).join('');

  /* Hours table */
  $('#hours-table tbody').innerHTML = (D.hours || []).map(([d, h]) => `<tr class="${order[today] === d ? 'is-today' : ''}"><th scope="row">${esc(d)}</th><td>${esc(h)}</td></tr>`).join('');

  /* Request form: demo placeholder until a Formspree ID is set */
  const form = $('#request-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.action.includes('PLACEHOLDER')) return;
      e.preventDefault();
      const msg = $('.form-msg', form);
      msg.hidden = false;
      msg.textContent = `此演示表格尚未连接。请致电 ${D.phone} 预约，或发邮件至 ${D.email}。`;
      msg.focus();
    });
  }
})();
