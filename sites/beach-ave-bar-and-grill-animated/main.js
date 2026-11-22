/* Beach Ave Bar & Grill — page behaviour */

/* --- Sun times at English Bay (49.2775, -123.1390) ---
   Classic sunrise/sunset formula (US Naval Observatory method).
   No network calls; shown in Vancouver time. */
const TZ = "America/Vancouver";
function vancouverToday() {
  // Today's date in Vancouver, not UTC — after ~5pm Pacific, UTC is already tomorrow
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date()).split("-").map(Number);
}
function sunEvent(rising) {
  const lat = 49.2775, lon = -123.139, zenith = 90.833;
  const rad = Math.PI / 180, deg = 180 / Math.PI;
  const [y, mo, d] = vancouverToday();
  const N = Math.floor((Date.UTC(y, mo - 1, d) - Date.UTC(y, 0, 0)) / 86400000);
  const lngHour = lon / 15;
  const t = N + (((rising ? 6 : 18) - lngHour) / 24);
  const M = (0.9856 * t) - 3.289;
  let L = M + (1.916 * Math.sin(M * rad)) + (0.020 * Math.sin(2 * M * rad)) + 282.634;
  L = ((L % 360) + 360) % 360;
  let RA = deg * Math.atan(0.91764 * Math.tan(L * rad));
  RA = ((RA % 360) + 360) % 360;
  RA += (Math.floor(L / 90) * 90) - (Math.floor(RA / 90) * 90);
  RA /= 15;
  const sinDec = 0.39782 * Math.sin(L * rad);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH = (Math.cos(zenith * rad) - (sinDec * Math.sin(lat * rad))) / (cosDec * Math.cos(lat * rad));
  if (cosH < -1 || cosH > 1) return null;
  const H = (rising ? 360 - deg * Math.acos(cosH) : deg * Math.acos(cosH)) / 15;
  const T = H + RA - (0.06571 * t) - 6.622;
  let UT = (((T - lngHour) % 24) + 24) % 24;
  // Vancouver is UTC-7/-8: sunrise falls 12:00–16:30 UTC the same day,
  // sunset falls 00:00–05:00 UTC the *next* day.
  if (!rising && UT < 12) UT += 24;
  return new Date(Date.UTC(y, mo - 1, d, 0, 0, Math.round(UT * 3600)));
}
const fmtTime = (dt) => new Intl.DateTimeFormat("en-CA", { hour: "numeric", minute: "2-digit", timeZone: TZ })
  .format(dt).replace(/\./g, "").replace(/\s+/g, "").toLowerCase();

/* Place the sun on the arc: p = 0 at sunrise, 1 at sunset */
window.setSun = function (p) {
  const dot = document.getElementById("sun-dot"), glow = document.getElementById("sun-glow"), trail = document.getElementById("sun-trail");
  if (!dot) return;
  const x = 150 - 130 * Math.cos(Math.PI * p), y = 120 - 100 * Math.sin(Math.PI * p);
  [dot, glow].forEach((c) => { if (c) { c.setAttribute("cx", x.toFixed(1)); c.setAttribute("cy", y.toFixed(1)); } });
  if (trail) trail.style.strokeDashoffset = String(1 - p);
};

(function initSunsetCard() {
  const set = (id, txt) => { const e = document.getElementById(id); if (e) e.textContent = txt; };
  const rise = sunEvent(true), sunset = sunEvent(false);
  if (!rise || !sunset) { set("sunset-time", "—"); return; }
  set("sunset-time", fmtTime(sunset));
  set("sunset-time-hero", fmtTime(sunset));
  set("sunrise-time", fmtTime(rise));
  set("golden-time", fmtTime(new Date(sunset.getTime() - 60 * 60000)));
  const now = Date.now();
  const p = Math.min(1, Math.max(0, (now - rise.getTime()) / (sunset.getTime() - rise.getTime())));
  window.SUN_P = p;
  window.setSun(p);
  const card = document.querySelector(".sunset-card");
  let note;
  if (now < rise.getTime()) note = "The sun's not up yet. Tonight's show starts at golden hour.";
  else if (now > sunset.getTime()) { note = "The sun's down for today. The patio heaters and the taps are still on."; if (card) card.classList.add("is-night"); }
  else {
    const mins = Math.round((sunset.getTime() - now) / 60000);
    note = mins <= 75 ? "Golden hour is on right now. Get down here."
      : Math.floor(mins / 60) + "h " + (mins % 60) + "m of daylight left over the bay.";
  }
  set("sun-note", note);
})();

/* --- Live status: open now + happy hour (Vancouver time) --- */
(function initLiveStatus() {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
  const get = (t) => parts.find((x) => x.type === t).value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const mins = (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10);
  const weekend = day === 0 || day === 6;
  const openAt = weekend ? 600 : 690, closeAt = 1320;
  const openLabel = (wk) => (wk ? "10am" : "11:30am");

  const chip = document.getElementById("open-chip");
  if (chip) {
    let txt, on = false;
    if (mins >= openAt && mins < closeAt) { on = true; txt = "Open now · until 10pm"; }
    else if (mins < openAt) txt = "Opens today at " + openLabel(weekend);
    else { const tmr = (day + 1) % 7; txt = "Opens tomorrow at " + openLabel(tmr === 0 || tmr === 6); }
    chip.querySelector("span").textContent = txt;
    chip.classList.toggle("is-on", on);
  }

  const hh = document.getElementById("hh-status");
  if (hh) {
    let txt, on = false;
    const weekday = !weekend;
    if (weekday && mins >= 900 && mins < 1020) { on = true; txt = "On right now · until 5pm"; }
    else if (weekday && mins < 900) txt = "Today from 3pm";
    else if (day === 5 || weekend) txt = "Back Monday at 3pm";
    else txt = "Back tomorrow at 3pm";
    hh.querySelector("span").textContent = txt;
    hh.classList.toggle("is-on", on);
  }
})();

/* --- Render helpers --- */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const money = (p) => /^[\d.]+$/.test(p) ? "$" + p : p;

/* --- Home: happy hour board --- */
(function initHHBoard() {
  const board = document.getElementById("hh-board");
  if (!board || typeof MENUS === "undefined") return;
  MENUS.happyhour.categories.forEach((cat) => {
    const col = el("div", "hh-col");
    col.setAttribute("data-stagger", "up");
    col.setAttribute("data-stagger-each", "0.05");
    col.appendChild(el("h3", null, esc(cat.name)));
    cat.items.forEach((it) => {
      const row = el("div", "hh-item");
      row.appendChild(el("span", "nm", esc(it.name) + (it.desc ? '<span class="ds">' + esc(it.desc) + "</span>" : "")));
      row.appendChild(el("span", "pr", money(it.price)));
      col.appendChild(row);
    });
    board.appendChild(col);
  });
})();

/* --- Menu page: tabs + full menu render --- */
(function initMenuPage() {
  const app = document.getElementById("menu-app");
  if (!app || typeof MENUS === "undefined") return;
  const tabsWrap = document.getElementById("menu-tabbar");
  const keys = Object.keys(MENUS);

  function render(key) {
    const menu = MENUS[key];
    app.innerHTML = "";
    if (menu.note) app.appendChild(el("p", "menu-note", esc(menu.note)));
    menu.categories.forEach((cat) => {
      const sec = el("div", "menu-cat");
      sec.appendChild(el("h2", null, esc(cat.name)));
      if (cat.note) sec.appendChild(el("p", "cat-note", esc(cat.note)));
      const grid = el("div", "menu-items");
      cat.items.forEach((it) => {
        const item = el("div", "menu-item");
        item.appendChild(el("h3", null, esc(it.name)));
        item.appendChild(el("span", "price", money(it.price)));
        if (it.desc) item.appendChild(el("p", null, esc(it.desc)));
        grid.appendChild(item);
      });
      sec.appendChild(grid);
      app.appendChild(sec);
    });
    tabsWrap.querySelectorAll(".menu-tab").forEach((b) => {
      const on = b.dataset.key === key;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (history.replaceState) history.replaceState(null, "", "#" + key);
    document.title = MENUS[key].label + " Menu — Beach Ave Bar & Grill";
    document.dispatchEvent(new Event("menu:render"));
  }

  keys.forEach((key) => {
    const b = el("button", "menu-tab", esc(MENUS[key].label));
    b.type = "button";
    b.dataset.key = key;
    b.setAttribute("role", "tab");
    b.addEventListener("click", () => render(key));
    tabsWrap.appendChild(b);
  });

  const initial = location.hash.replace("#", "");
  render(keys.includes(initial) ? initial : "food");
})();
