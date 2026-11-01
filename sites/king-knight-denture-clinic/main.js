/* King & Knight: renders services and the "What brings you in?" chooser from services.js */
(function () {
  var S = window.KK_SERVICES || [], N = window.KK_NEEDS || [];
  var byId = {};
  S.forEach(function (s) { byId[s.id] = s; });

  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // services
  var list = document.getElementById("svcList");
  if (list) {
    list.innerHTML = S.map(function (s) {
      return '<article id="svc-' + s.id + '"><p class="grp">' + esc(s.group) + '</p><h3>' + esc(s.name) + '</h3>' +
        '<p class="lead">' + esc(s.lead) + '</p><ul>' + s.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
        (s.link ? '<a class="more" href="' + s.link.href + '">' + esc(s.link.text) + " →</a>" : "") + "</article>";
    }).join("");
  }

  // chooser
  var opts = document.getElementById("needOpts"), out = document.getElementById("needOut");
  if (!opts || !out) return;
  N.forEach(function (n, i) {
    var b = document.createElement("button");
    b.type = "button"; b.setAttribute("role", "tab"); b.id = "need-" + i;
    b.setAttribute("aria-controls", "needOut"); b.textContent = n.label;
    b.addEventListener("click", function () { pick(i, true); });
    b.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        var j = (i + (e.key === "ArrowDown" ? 1 : -1) + N.length) % N.length;
        pick(j, true); document.getElementById("need-" + j).focus();
      }
    });
    opts.appendChild(b);
  });

  function pick(i, user) {
    var n = N[i], s = byId[n.service];
    [].forEach.call(opts.children, function (b, k) {
      b.setAttribute("aria-selected", k === i ? "true" : "false");
      b.tabIndex = k === i ? 0 : -1;
    });
    out.setAttribute("aria-labelledby", "need-" + i);
    out.innerHTML = '<p class="eyebrow">' + esc(s.group) + "</p><h3>" + esc(s.name) + "</h3>" +
      '<p class="next">' + esc(n.next) + "</p><ul>" + s.points.slice(0, 3).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
      '<div class="row"><a class="btn btn--call" href="tel:+16042829817">Call 604-282-9817</a>' +
      (s.link ? '<a class="btn btn--ghost" href="' + s.link.href + '">' + esc(s.link.text) + "</a>" : '<a class="btn btn--ghost" href="#svc-' + s.id + '">See details</a>') + "</div>";
    if (user) {
      [].forEach.call(document.querySelectorAll(".svc article"), function (a) { a.classList.toggle("is-hl", a.id === "svc-" + s.id); });
    }
  }
  pick(0, false);
})();
