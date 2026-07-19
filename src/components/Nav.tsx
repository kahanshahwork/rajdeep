import { useEffect, useState } from 'react';
import { brand, nav } from '../config';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (target: string) => {
    setOpen(false);
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const top = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <button
        className="nav__logo"
        style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        onClick={top}
        aria-label="Rajdeep Jewellers — top"
      >
        <img src="/images/rj-logo.png" alt="" className="nav__logo-img" />
        <span className="mark" style={{ fontSize: '1.5rem' }}>{brand.name}</span>
      </button>

      <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
        {open ? 'Close' : 'Menu'}
      </button>

      <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {nav.map((l) => (
          <button key={l.target} className="nav__link" onClick={() => go(l.target)}>
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
