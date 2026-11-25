/* Beach Ave Bar & Grill — page behaviour */

/* --- Tonight's sunset at Sunset Beach, False Creek (49.2775, -123.1390) ---
   Classic sunrise/sunset formula (US Naval Observatory method).
   No network calls; shown in Vancouver time. */
function sunsetTonight() {
  const lat = 49.2775, lon = -123.139, zenith = 90.833;
  const rad = Math.PI / 180, deg = 180 / Math.PI;
  // Today's date in Vancouver, not UTC — after ~5pm Pacific, UTC is already tomorrow
  const [y, mo, d] = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Vancouver" })
    .format(new Date()).split("-").map(Number);
  const N = Math.floor((Date.UTC(y, mo - 1, d) - Date.UTC(y, 0, 0)) / 86400000);
  const lngHour = lon / 15;
  const t = N + ((18 - lngHour) / 24);
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
  const H = (deg * Math.acos(cosH)) / 15;
  const T = H + RA - (0.06571 * t) - 6.622;
  const UT = (((T - lngHour) % 24) + 24) % 24;
  const sunset = new Date(Date.UTC(y, mo - 1, d, 0, 0, Math.round(UT * 3600)));
  return sunset;
}

(function initSunsetCard() {
  const timeEl = document.getElementById("sunset-time");
  if (!timeEl) return;
  const s = sunsetTonight();
  if (!s) { timeEl.textContent = "—"; return; }
  timeEl.textContent = new Intl.DateTimeFormat("en-CA", {
    hour: "numeric", minute: "2-digit", timeZone: "America/Vancouver"
  }).format(s).replace(/\./g, "").toLowerCase();
})();

/* --- Live weather (Environment and Climate Change Canada, Vancouver city page) ---
   One request when the page opens. If it fails or is slow, nothing breaks:
   the hero chip simply stays a plain "Vancouver weather forecast" link. */
(function initWeather() {
  const chip = document.getElementById("wx-chip");
  const card = document.getElementById("wx-now");
  if (!chip && !card) return;
  const FEED = "https://api.weather.gc.ca/collections/citypageweather-realtime/items/bc-74?f=json&lang=en";
  const KEY = "beachave-wx", MAX_AGE = 10 * 60 * 1000; // re-ask at most every 10 minutes

  const svg = (d) => '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + d + "</svg>";
  const CLOUD = '<path d="M7 17h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 10.6 3.5 3.5 0 0 0 7 17z"/>';
  const SMALL_CLOUD = '<path d="M8 19h9a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8 13a3 3 0 0 0 0 6z"/>';
  const ICONS = {
    sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: svg('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'),
    partly: svg('<circle cx="8" cy="8" r="3"/><path d="M8 2v1.5M2 8h1.5M3.8 3.8l1 1M12.2 3.8l-1 1"/>' + SMALL_CLOUD),
    cloud: svg(CLOUD),
    rain: svg('<path d="M7 14h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 7.6 3.5 3.5 0 0 0 7 14z"/><path d="M8 17.5l-1 3M12 17.5l-1 3M16 17.5l-1 3"/>'),
    snow: svg('<path d="M7 14h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 7.6 3.5 3.5 0 0 0 7 14z"/><path d="M8 18h.01M12 18h.01M16 18h.01M10 21h.01M14 21h.01"/>'),
    storm: svg('<path d="M7 14h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 7.6 3.5 3.5 0 0 0 7 14z"/><path d="M12.5 15.5l-2 3.5h3l-2 3.5"/>'),
    fog: svg('<path d="M4 9h16M4 13h16M6 17h12"/>'),
  };
  function iconFor(text, night) {
    const t = (text || "").toLowerCase();
    if (/thunder/.test(t)) return ICONS.storm;
    if (/snow|flurr|ice|freezing|hail|sleet/.test(t)) return ICONS.snow;
    if (/rain|shower|drizzle|precip/.test(t)) return ICONS.rain;
    if (/fog|mist|haze|smoke/.test(t)) return ICONS.fog;
    if (/partly|mix|few clouds|mainly (sunny|clear)|clearing|cloudy periods/.test(t)) return night ? ICONS.moon : ICONS.partly;
    if (/cloud|overcast/.test(t)) return ICONS.cloud;
    if (/sun|clear|fair/.test(t)) return night ? ICONS.moon : ICONS.sun;
    return ICONS.cloud;
  }
  const en = (v) => (v && typeof v === "object" && "en" in v ? v.en : v);
  const safe = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

  // Reduce the feed to the few fields the page shows
  function pick(json) {
    const p = (json && json.properties) || {};
    const cc = p.currentConditions || {};
    const temp = Number(en(cc.temperature && cc.temperature.value));
    if (!isFinite(temp) || !cc.temperature) return null;
    const code = Number(cc.iconCode && cc.iconCode.value);
    const f = ((p.forecastGroup || {}).forecasts || [])[0] || {};
    const t0 = (((f.temperatures || {}).temperature) || [])[0] || {};
    const fTemp = Number(en(t0.value));
    return {
      temp: Math.round(temp),
      cond: en(cc.condition) || "",
      night: code >= 30 && code <= 39,
      period: en((f.period || {}).textForecastName) || "",
      outlook: en((f.abbreviatedForecast || {}).textSummary) || "",
      hilo: isFinite(fTemp) && t0.value != null ? en(t0.class) + " " + Math.round(fTemp) + "°" : "",
    };
  }

  function show(w) {
    const icon = iconFor(w.cond || w.outlook, w.night);
    const cond = w.cond ? w.cond.toLowerCase() : "";
    if (chip) {
      chip.querySelector(".wx-icon").innerHTML = icon;
      chip.querySelector(".wx-text").innerHTML = "Vancouver now <strong>" + w.temp + "°</strong>" + (cond ? " · " + safe(cond) : "");
      chip.setAttribute("aria-label", "Vancouver right now: " + w.temp + " degrees" + (cond ? ", " + cond : "") + ". Opens the full forecast.");
      chip.classList.add("is-live");
    }
    if (card) {
      card.querySelector(".wx-icon").innerHTML = icon;
      document.getElementById("wx-temp").textContent = w.temp + "°";
      document.getElementById("wx-cond").textContent = cond;
      const next = [w.outlook, w.hilo].filter(Boolean).join(", ");
      document.getElementById("wx-next").textContent = w.period && next ? w.period + ": " + next + "." : "";
      card.hidden = false;
    }
  }

  try {
    const saved = JSON.parse(sessionStorage.getItem(KEY) || "null");
    if (saved && Date.now() - saved.at < MAX_AGE) { show(saved.w); return; }
  } catch (e) { /* storage unavailable: just fetch */ }

  if (!window.fetch) return;
  const ctl = window.AbortController ? new AbortController() : null;
  if (ctl) setTimeout(() => ctl.abort(), 8000);
  fetch(FEED, ctl ? { signal: ctl.signal } : undefined)
    .then((r) => (r.ok ? r.json() : null))
    .then((json) => {
      const w = pick(json);
      if (!w) return;
      show(w);
      try { sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), w })); } catch (e) { /* fine */ }
    })
    .catch(() => { /* leave the plain forecast link in place */ });
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

/* --- Reveal on scroll --- */
(function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
})();
