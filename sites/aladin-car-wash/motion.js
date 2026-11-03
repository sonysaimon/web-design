/* Scroll motion: Lenis smooth scroll + GSAP ScrollTrigger reveals and parallax.
   Switches itself off for prefers-reduced-motion. Markup is declarative:
   data-animate="fade-up|fade-left|fade-in|image-reveal", data-stagger, data-parallax, data-split-words. */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !window.gsap || !window.ScrollTrigger) { document.documentElement.classList.add('no-motion'); return; }
  gsap.registerPlugin(ScrollTrigger, window.CustomEase ? CustomEase : undefined);
  const EASE = window.CustomEase ? CustomEase.create('fast', 'M0,0 C0.3,0 0.14,1 1,1') : 'power1.out';

  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true, syncTouch: false, wheelMultiplier: 1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const id = a.getAttribute('href'); if (id.length < 2) return;
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -72 }); history.pushState(null, '', id); }
    }));
  }

  const reveal = (el, extra) => ({ trigger: el, start: el.dataset.animateStart || 'top 85%', toggleActions: 'play none none none', once: true, ...extra });
  const num = (el, k, d) => (el.dataset[k] !== undefined ? parseFloat(el.dataset[k]) : d);
  const done = (el) => el.classList.add('is-motion-done');

  const presets = {
    'fade-in': (el) => gsap.from(el, { opacity: 0, duration: num(el, 'animateDuration', 0.8), delay: num(el, 'animateDelay', 0), ease: EASE, scrollTrigger: reveal(el), onComplete: () => done(el) }),
    'fade-up': (el) => gsap.from(el, { opacity: 0, y: num(el, 'animateY', 40), duration: num(el, 'animateDuration', 0.8), delay: num(el, 'animateDelay', 0), ease: EASE, scrollTrigger: reveal(el), onComplete: () => done(el) }),
    'fade-left': (el) => gsap.from(el, { opacity: 0, x: num(el, 'animateX', 50), duration: num(el, 'animateDuration', 0.6), delay: num(el, 'animateDelay', 0), ease: EASE, scrollTrigger: reveal(el), onComplete: () => done(el) }),
    'image-reveal': (el) => {
      gsap.set(el, { opacity: 0, scale: 1.01, transformOrigin: 'center center', force3D: true });
      gsap.to(el, { opacity: 1, scale: 1, duration: 0.6, ease: EASE, scrollTrigger: reveal(el), immediateRender: false, onComplete: () => { done(el); gsap.set(el, { clearProps: 'scale' }); } });
    },
  };
  document.querySelectorAll('[data-animate]').forEach((el) => (presets[el.dataset.animate] || presets['fade-up'])(el));

  document.querySelectorAll('[data-stagger]').forEach((row) => {
    const kids = [...row.children]; if (!kids.length) return;
    gsap.set(kids, { opacity: 0, x: 40, force3D: true });
    gsap.to(kids, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: EASE, scrollTrigger: reveal(row),
      onComplete: () => { done(row); kids.forEach((k) => { done(k); gsap.set(k, { clearProps: 'transform' }); }); } });
  });

  document.querySelectorAll('[data-parallax]').forEach((frame) => {
    const img = frame.querySelector('img, video'); if (!img) return;
    const dist = num(frame, 'parallaxDistance', 96), scale = num(frame, 'parallaxScale', 1.12);
    gsap.set(img, { scale, force3D: true, transformOrigin: 'center center' });
    gsap.fromTo(img, { y: -dist }, { y: dist, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  document.querySelectorAll('[data-split-words]').forEach((h) => {
    const words = h.textContent.trim().split(/\s+/);
    h.innerHTML = words.map((w) => `<span class="hero-word"><span>${w}</span></span>`).join(' ');
    gsap.from(h.querySelectorAll('.hero-word > span'), { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.08, ease: EASE, delay: 0.2 });
  });

  // Price toggle re-renders cards after the stagger ran; make sure new nodes are visible.
  const grid = document.getElementById('wash-grid');
  if (grid) new MutationObserver(() => { if (grid.classList.contains('is-motion-done')) gsap.set(grid.children, { clearProps: 'all' }); })
    .observe(grid, { childList: true });
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
