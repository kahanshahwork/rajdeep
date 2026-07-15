import { useEffect, useRef, useState } from 'react';
import { craft } from '../config';

export default function Craft() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 980px)').matches;
    if (reduce || isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ticking = false;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // total scroll distance available while section is pinned
      const scrollable = section.offsetHeight - vh;
      // how far we've scrolled into the section
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const p = scrollable > 0 ? scrolled / scrollable : 0;

      // distance the track must travel to reveal its full width
      const distance = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-p * distance}px, 0, 0)`;
      setProgress(p);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Section height = enough vertical scroll to pan through all panels.
  // ~ one viewport per panel plus the intro.
  const vhHeight = `${(craft.steps.length + 1) * 85}vh`;

  return (
    <section
      className="craft"
      id="craft"
      ref={sectionRef}
      style={{ height: vhHeight }}
    >
      <div className="craft__sticky">
        <div className="craft__track" ref={trackRef}>
          {/* Intro panel */}
          <div className="craft__intro">
            <p className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: '1.5rem' }}>
              {craft.eyebrow}
            </p>
            <h2
              className="display"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', color: 'var(--ivory)', maxWidth: '16ch' }}
            >
              {craft.introTitle}
            </h2>
            <div className="gold-rule" style={{ margin: '2rem 0' }} />
            <p style={{ maxWidth: '42ch', color: 'rgba(244,236,222,0.72)', fontSize: '1.05rem' }}>
              {craft.introCopy}
            </p>
          </div>

          {/* Step panels */}
          {craft.steps.map((s) => (
            <div className="craft__panel" key={s.no}>
              <div className="shot">
                <div className="framed">
                  <img src={s.image} alt={s.alt} loading="lazy" />
                </div>
              </div>
              <div>
                <span className="craft__num">{s.no}</span>
                <h3
                  className="display"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--ivory)' }}
                >
                  {s.title}
                </h3>
                <div className="gold-rule" style={{ margin: '1.5rem 0' }} />
                <p style={{ color: 'rgba(244,236,222,0.72)', fontSize: '1.02rem', maxWidth: '40ch' }}>
                  {s.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="craft__hint" aria-hidden="true">{craft.hint}</div>
        <div className="craft__progress" aria-hidden="true">
          <span style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
