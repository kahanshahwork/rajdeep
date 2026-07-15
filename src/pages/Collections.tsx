import { useState } from 'react';
import { collections, type PageId, type Piece } from '../config';

interface Props {
  onNavigate: (id: PageId) => void;
}

export default function Collections({ onNavigate }: Props) {
  const [active, setActive] = useState<Piece | null>(null);

  return (
    <div className="page">
      {/* ---------- Opening ---------- */}
      <section
        className="section"
        style={{ paddingTop: '9rem', paddingBottom: '3.5rem' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'end',
          }}
          className="col-head"
        >
          <div className="reveal">
            <p className="eyebrow" style={{ marginBottom: '1.75rem' }}>
              {collections.eyebrow}
            </p>
            <h1
              className="display"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', color: 'var(--maroon)' }}
            >
              {collections.title}
            </h1>
          </div>
          <p className="body-copy reveal" style={{ marginLeft: 'auto' }}>
            {collections.intro}
          </p>
        </div>
      </section>

      {/* ---------- Grid ---------- */}
      <section className="section" style={{ paddingBottom: '5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
          }}
          className="pieces-grid"
        >
          {collections.pieces.map((p) => (
            <button
              key={p.name}
              className="reveal"
              onClick={() => setActive(p)}
              style={{
                background: 'none',
                border: 0,
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
              }}
            >
              <div className="framed" style={{ aspectRatio: '4 / 5', marginBottom: '1.25rem' }}>
                <img src={p.src} alt={p.name} loading="lazy" />
              </div>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>
                {p.line}
              </p>
              <h3
                className="display"
                style={{ fontSize: '1.55rem', color: 'var(--maroon)' }}
              >
                {p.name}
              </h3>
            </button>
          ))}
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section
        className="section"
        style={{ paddingTop: '3rem', paddingBottom: '7rem', textAlign: 'center' }}
      >
        <div className="hair reveal" style={{ maxWidth: '120px', margin: '0 auto 3rem' }} />
        <p
          className="lede reveal"
          style={{ maxWidth: '24ch', margin: '0 auto 2.5rem' }}
        >
          {collections.closing}
        </p>
        <button className="btn btn--solid reveal" onClick={() => onNavigate('visit')}>
          Request an appointment
        </button>
      </section>

      {/* ---------- Lightbox ---------- */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(42, 33, 28, 0.82)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--page-x)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--alabaster)',
              maxWidth: '860px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
            }}
            className="lightbox"
          >
            <div style={{ aspectRatio: '4 / 5' }}>
              <img
                src={active.src}
                alt={active.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>
                {active.line}
              </p>
              <h3
                className="display"
                style={{ fontSize: '2rem', color: 'var(--maroon)', marginBottom: '1.25rem' }}
              >
                {active.name}
              </h3>
              <p className="body-copy" style={{ marginBottom: '2rem' }}>
                {active.note}
              </p>
              <button
                className="link-arrow"
                onClick={() => {
                  setActive(null);
                  onNavigate('visit');
                }}
              >
                Enquire <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
