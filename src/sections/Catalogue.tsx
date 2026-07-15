import { useState } from 'react';
import { catalogue } from '../config';

export default function Catalogue() {
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState<'' | 'flip-next' | 'flip-prev'>('');
  const leaf = catalogue.leaves[i];
  const total = catalogue.leaves.length;

  const turn = (dir: 1 | -1) => {
    const next = i + dir;
    if (next < 0 || next >= total) return;
    setFlip(dir === 1 ? 'flip-next' : 'flip-prev');
    // swap content mid-flip for a page-turn feel
    window.setTimeout(() => setI(next), 180);
    window.setTimeout(() => setFlip(''), 600);
  };

  return (
    <section className="catalogue" id="catalogue">
      <div className="catalogue__head">
        <p className="eyebrow reveal" style={{ marginBottom: '1rem' }}>{catalogue.eyebrow}</p>
        <h2
          className="display reveal reveal-d1"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: 'var(--ink)' }}
        >
          {catalogue.title}
        </h2>
        <div className="gold-rule gold-rule--center reveal reveal-d1" style={{ margin: '1.5rem auto' }} />
        <p className="reveal reveal-d2" style={{ color: 'var(--ink-soft)', fontSize: '0.98rem' }}>
          {catalogue.copy}
        </p>
      </div>

      <div className="book reveal reveal-d2">
        <div className={`book__spread ${flip}`}>
          <div className="book__page book__page--img">
            <img src={leaf.image} alt={leaf.alt} loading="lazy" />
          </div>
          <div className="book__page book__page--text">
            <span className="book__folio">{leaf.folio}</span>
            <h3 className="display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: 'var(--ink)' }}>
              {leaf.name}
            </h3>
            <p className="eyebrow" style={{ margin: '0.85rem 0 1.5rem' }}>{leaf.line}</p>
            <p className="body-copy">{leaf.note}</p>
          </div>
        </div>
      </div>

      <div className="book__controls">
        <button
          className="book__btn"
          onClick={() => turn(-1)}
          disabled={i === 0}
          aria-label="Previous page"
        >
          ‹
        </button>
        <span className="book__count">
          {String(i + 1).padStart(2, '0')} — {String(total).padStart(2, '0')}
        </span>
        <button
          className="book__btn"
          onClick={() => turn(1)}
          disabled={i === total - 1}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
    </section>
  );
}
