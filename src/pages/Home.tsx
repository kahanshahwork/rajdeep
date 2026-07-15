import { home, brand, type PageId } from '../config';

interface Props {
  onNavigate: (id: PageId) => void;
}

export default function Home({ onNavigate }: Props) {
  return (
    <div className="page">
      {/* ---------- Hero ---------- */}
      <section
        className="section"
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          alignItems: 'center',
          gap: 'clamp(2rem, 5vw, 5rem)',
          paddingTop: '9rem',
          paddingBottom: '4rem',
        }}
      >
        <div className="reveal">
          <p className="eyebrow" style={{ marginBottom: '2rem' }}>
            {home.eyebrow}
          </p>
          <h1
            className="display"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.2rem)', color: 'var(--maroon)' }}
          >
            {home.heroLine1}
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              {home.heroLine2}
            </span>
          </h1>

          <div className="gold-rule" style={{ margin: '2.25rem 0' }} />

          <p className="body-copy" style={{ marginBottom: '2.5rem' }}>
            {home.heroCopy}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn--solid" onClick={() => onNavigate('collections')}>
              View the collections
            </button>
            <button className="btn" onClick={() => onNavigate('craft')}>
              Our story
            </button>
          </div>
        </div>

        <div className="reveal" style={{ position: 'relative' }}>
          <div className="framed framed--arch" style={{ aspectRatio: '3 / 4' }}>
            <img src={home.heroImage} alt="Rajdeep bridal portrait" loading="eager" />
          </div>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
              marginTop: '1rem',
              textAlign: 'right',
            }}
          >
            {home.heroCaption}
          </p>
        </div>
      </section>

      {/* ---------- Feature moment ---------- */}
      <section
        className="section"
        style={{
          background: 'var(--maroon)',
          color: 'var(--alabaster)',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          display: 'grid',
          gridTemplateColumns: '0.95fr 1.05fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
        }}
      >
        <div className="reveal framed" style={{ aspectRatio: '4 / 5' }}>
          <img src={home.feature.image} alt="The house of Rajdeep" loading="lazy" />
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '1.5rem' }}>
            {home.feature.eyebrow}
          </p>
          <h2
            className="display"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: 'var(--alabaster)' }}
          >
            {home.feature.title}
          </h2>
          <div className="gold-rule" style={{ margin: '2rem 0' }} />
          <p style={{ maxWidth: '46ch', opacity: 0.85, fontSize: '1.05rem' }}>
            {home.feature.copy}
          </p>
        </div>
      </section>

      {/* ---------- Three chapters ---------- */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '7rem' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>
            {brand.tagline}
          </p>
          <h2
            className="display"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--maroon)' }}
          >
            Three ways into the house
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
          }}
          className="chapters-grid"
        >
          {home.chapters.map((ch) => (
            <button
              key={ch.no}
              onClick={() => onNavigate(ch.to)}
              className="reveal"
              style={{
                background: 'none',
                border: 0,
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
              }}
            >
              <div className="framed" style={{ aspectRatio: '4 / 5', marginBottom: '1.5rem' }}>
                <img src={ch.image} alt={ch.title} loading="lazy" />
              </div>
              <p
                className="display"
                style={{ fontSize: '1.1rem', color: 'var(--terracotta)', fontStyle: 'italic' }}
              >
                Chapter {ch.no}
              </p>
              <h3
                className="display"
                style={{ fontSize: '1.7rem', color: 'var(--maroon)', margin: '0.35rem 0 0.75rem' }}
              >
                {ch.title}
              </h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '0.98rem', marginBottom: '1rem' }}>
                {ch.copy}
              </p>
              <span className="link-arrow">
                Read <span>→</span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
