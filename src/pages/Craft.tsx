import { craft } from '../config';

export default function Craft() {
  return (
    <div className="page">
      {/* ---------- Opening ---------- */}
      <section
        className="section"
        style={{ paddingTop: '9rem', paddingBottom: '4rem', textAlign: 'center' }}
      >
        <p className="eyebrow reveal" style={{ marginBottom: '2rem' }}>
          {craft.eyebrow}
        </p>
        <h1
          className="display reveal"
          style={{
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            color: 'var(--maroon)',
            maxWidth: '16ch',
            margin: '0 auto',
          }}
        >
          {craft.title}
        </h1>
        <p
          className="lede reveal"
          style={{ margin: '2.5rem auto 0', maxWidth: '30ch' }}
        >
          {craft.lede}
        </p>
      </section>

      {/* ---------- Full-bleed image ---------- */}
      <section style={{ paddingLeft: 'var(--page-x)', paddingRight: 'var(--page-x)' }}>
        <div className="framed reveal" style={{ aspectRatio: '16 / 8' }}>
          <img src={craft.heroImage} alt="Inside the Rajdeep atelier" loading="lazy" />
        </div>
        <p
          className="reveal"
          style={{
            maxWidth: '54ch',
            margin: '3rem auto 0',
            textAlign: 'center',
            color: 'var(--ink-soft)',
            fontSize: '1.1rem',
          }}
        >
          {craft.intro}
        </p>
      </section>

      {/* ---------- Numbered chapters (alternating) ---------- */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        {craft.chapters.map((ch, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={ch.no}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(2rem, 5vw, 5rem)',
                alignItems: 'center',
                marginBottom: '6rem',
                direction: flip ? 'rtl' : 'ltr',
              }}
            >
              <div className="framed" style={{ aspectRatio: '4 / 5', direction: 'ltr' }}>
                <img src={ch.image} alt={ch.title} loading="lazy" />
              </div>
              <div style={{ direction: 'ltr' }}>
                <span
                  className="display"
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 6rem)',
                    color: 'var(--alabaster-deep)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '-1rem',
                  }}
                >
                  {ch.no}
                </span>
                <h2
                  className="display"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--maroon)' }}
                >
                  {ch.title}
                </h2>
                <div className="gold-rule" style={{ margin: '1.5rem 0' }} />
                <p className="body-copy">{ch.copy}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ---------- Pullquote ---------- */}
      <section
        className="section"
        style={{
          background: 'var(--maroon)',
          color: 'var(--alabaster)',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          textAlign: 'center',
        }}
      >
        <span className="mark-diamond reveal" style={{ background: 'var(--gold)', margin: '0 auto 2rem' }} />
        <p
          className="display reveal"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontStyle: 'italic',
            color: 'var(--alabaster)',
            maxWidth: '20ch',
            margin: '0 auto',
            lineHeight: 1.25,
          }}
        >
          {craft.pullquote}
        </p>
      </section>

      {/* ---------- Facts ---------- */}
      <section className="section" style={{ paddingTop: '5rem', paddingBottom: '7rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
            textAlign: 'center',
          }}
          className="facts-grid"
        >
          {craft.facts.map((f) => (
            <div key={f.k} className="reveal">
              <p
                className="display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--terracotta)' }}
              >
                {f.k}
              </p>
              <p
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-soft)',
                  marginTop: '0.5rem',
                }}
              >
                {f.v}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
