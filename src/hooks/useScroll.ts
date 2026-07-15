import { useEffect } from 'react';

/**
 * Fades in any `.reveal` element as it enters the viewport.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.reveal--in)'));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal--in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/**
 * Applies a vertical parallax translate to elements marked `[data-parallax]`.
 * The attribute value is the speed factor (e.g. -0.15 moves up as you scroll).
 */
export function useParallax() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]')
    );
    if (!nodes.length) return;

    let ticking = false;

    const apply = () => {
      const vh = window.innerHeight;
      for (const node of nodes) {
        const speed = parseFloat(node.dataset.parallax || '0');
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const fromCenter = center - vh / 2;
        const shift = fromCenter * speed;
        node.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
