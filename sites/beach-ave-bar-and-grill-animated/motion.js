/* Beach Ave Bar & Grill — motion layer (Lenis smooth scroll + GSAP ScrollTrigger).
   Everything here is optional polish: if the libraries fail to load, or the visitor
   has "reduce motion" switched on, this file does nothing and the page is simply static. */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  if (window.CustomEase) gsap.registerPlugin(CustomEase);
  document.documentElement.classList.add("has-motion");

  // One easing curve everywhere (matches --fast-bezier in styles.css)
  const EASE = window.CustomEase ? CustomEase.create("fast", "M0,0 C0.3,0 0.14,1 1,1") : "power2.out";

  // Smooth scroll (wheel/trackpad only; touch scrolling stays native on phones)
  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true, syncTouch: false, wheelMultiplier: 1 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const el = id.length > 1 && document.querySelector(id);
      if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -80 }); }
    }));
  }

  const reveal = (el, extra) => Object.assign({
    trigger: el, start: el.dataset.animateStart || "top 88%",
    toggleActions: "play none none none", once: true,
  }, extra || {});
  const num = (el, k, d) => (el.dataset[k] !== undefined ? parseFloat(el.dataset[k]) : d);
  const done = (el) => el.classList.add("is-motion-done");

  // Reveal presets
  const presets = {
    "fade-in": (el) => gsap.from(el, { opacity: 0, duration: 0.8, delay: num(el, "animateDelay", 0), ease: EASE, scrollTrigger: reveal(el), onComplete: () => done(el) }),
    "fade-up": (el) => gsap.from(el, { opacity: 0, y: num(el, "animateY", 40), duration: 0.8, delay: num(el, "animateDelay", 0), ease: EASE, scrollTrigger: reveal(el), onComplete: () => { done(el); gsap.set(el, { clearProps: "transform" }); } }),
    "fade-left": (el) => gsap.from(el, { opacity: 0, x: num(el, "animateX", 40), duration: 0.6, delay: num(el, "animateDelay", 0), ease: EASE, scrollTrigger: reveal(el), onComplete: () => { done(el); gsap.set(el, { clearProps: "transform" }); } }),
    "image-reveal": (el) => {
      gsap.set(el, { opacity: 0, scale: 1.03, transformOrigin: "center center", force3D: true });
      gsap.to(el, { opacity: 1, scale: 1, duration: 0.7, ease: EASE, scrollTrigger: reveal(el), immediateRender: false,
        onComplete: () => { done(el); gsap.set(el, { clearProps: "scale" }); } });
    },
    // the horizon line draws itself left to right
    "draw-line": (el) => gsap.from(el, { scaleX: 0, transformOrigin: "left center", duration: 1.1, ease: EASE, scrollTrigger: reveal(el) }),
  };
  document.querySelectorAll("[data-animate]").forEach((el) => (presets[el.dataset.animate] || presets["fade-up"])(el));

  // Stagger rows (card grids, lists)
  function staggerRow(row) {
    const kids = [...row.children];
    if (!kids.length) return;
    const axis = row.dataset.stagger === "up" ? { y: 24 } : { x: 36 };
    gsap.set(kids, Object.assign({ opacity: 0, force3D: true }, axis));
    gsap.to(kids, { opacity: 1, x: 0, y: 0, duration: 0.6, stagger: num(row, "staggerEach", 0.09), ease: EASE, scrollTrigger: reveal(row),
      onComplete: () => kids.forEach((k) => { done(k); gsap.set(k, { clearProps: "transform" }); }) });
  }
  document.querySelectorAll("[data-stagger]").forEach(staggerRow);

  // Scrubbed cover parallax: the photo drifts behind its (still) frame.
  // Distance is clamped to the spare image height so an edge can never show.
  document.querySelectorAll("[data-parallax]").forEach((frame) => {
    const img = frame.querySelector("img, video"); if (!img) return;
    const scale = num(frame, "parallaxScale", 1.08);
    const want = num(frame, "parallaxDistance", 96);
    gsap.set(img, { scale, force3D: true, transformOrigin: "center center" });
    const dist = () => Math.max(0, Math.min(want, (img.offsetHeight * scale - frame.offsetHeight) / 2 - 2));
    gsap.fromTo(img, { y: () => -dist() }, { y: () => dist(), ease: "none",
      scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true } });
  });

  // Hero words: split the H1 into words and rise them in on load
  document.querySelectorAll("[data-split-words]").forEach((h) => {
    const words = h.textContent.trim().split(/\s+/);
    h.setAttribute("aria-label", words.join(" "));
    h.innerHTML = words.map((w) => '<span class="hero-word" aria-hidden="true"><span>' + w + "</span></span>").join(" ");
    gsap.from(h.querySelectorAll(".hero-word > span"), { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.08, ease: EASE, delay: 0.15 });
  });
  // On-load (not on-scroll) fades for the first screen
  document.querySelectorAll("[data-load]").forEach((el) => {
    gsap.from(el, { opacity: 0, y: 24, duration: 0.8, ease: EASE, delay: num(el, "load", 0.3),
      onComplete: () => gsap.set(el, { clearProps: "transform" }) });
  });

  // Sunset card: the sun travels along its arc to where it is right now
  const sunCard = document.querySelector(".sunset-card");
  if (sunCard && typeof window.setSun === "function") {
    const state = { p: 0 };
    const target = window.SUN_P || 0;
    window.setSun(0);
    gsap.to(state, { p: target, duration: 1.6, ease: EASE, onUpdate: () => window.setSun(state.p),
      scrollTrigger: { trigger: sunCard, start: "top 80%", once: true } });
  }

  // Trust strip numbers count up once
  document.querySelectorAll("[data-count]").forEach((el) => {
    const end = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length;
    const o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.2, ease: EASE, scrollTrigger: reveal(el, { start: "top 95%" }),
      onUpdate: () => { el.textContent = o.v.toFixed(dec); }, onComplete: () => { el.textContent = end.toFixed(dec); } });
  });

  // Menu page: each time a menu tab renders, ease the categories in
  function animateMenu() {
    const cats = document.querySelectorAll("#menu-app .menu-cat, #menu-app .menu-note");
    if (!cats.length) return;
    gsap.fromTo(cats, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: EASE,
      onComplete: () => gsap.set(cats, { clearProps: "transform" }) });
    ScrollTrigger.refresh();
  }
  document.addEventListener("menu:render", animateMenu);
  animateMenu();

  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
