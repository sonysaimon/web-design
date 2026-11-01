// Mobile menu + "open now" line + today's hours highlight (Vancouver time).
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // [open, close] in minutes, index 0 = Monday
  var HOURS = [[510, 1050], [510, 1050], [510, 1050], [510, 1050], [510, 1050], [540, 1020], null];
  var now;
  try {
    var p = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Vancouver', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false })
      .formatToParts(new Date()).reduce(function (a, x) { a[x.type] = x.value; return a; }, {});
    var days = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
    now = { d: days[p.weekday], m: (parseInt(p.hour, 10) % 24) * 60 + parseInt(p.minute, 10) };
  } catch (e) { var d = new Date(); now = { d: (d.getDay() + 6) % 7, m: d.getHours() * 60 + d.getMinutes() }; }

  document.querySelectorAll('.hours tr[data-day="' + now.d + '"]').forEach(function (tr) { tr.classList.add('today'); });

  function fmt(m) { var h = Math.floor(m / 60), mm = m % 60, ap = h >= 12 ? 'pm' : 'am'; h = h % 12 || 12; return h + (mm ? ':' + (mm < 10 ? '0' : '') + mm : '') + ' ' + ap; }
  var t = HOURS[now.d], msg, closed = false;
  if (t && now.m >= t[0] && now.m < t[1]) msg = 'Open now · until ' + fmt(t[1]);
  else {
    closed = true;
    for (var i = 0; i < 8; i++) {
      var dd = (now.d + i) % 7, h = HOURS[dd];
      if (!h || (i === 0 && now.m >= h[0])) continue;
      var names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      msg = 'Closed now · opens ' + (i === 0 ? 'today' : i === 1 ? 'tomorrow' : names[dd]) + ' at ' + fmt(h[0]);
      break;
    }
  }
  document.querySelectorAll('.open-now').forEach(function (el) { el.textContent = msg; if (closed) el.classList.add('closed'); });
})();
