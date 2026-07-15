import { visit } from '../config';

export default function Visit() {
  return (
    <div className="page">
      {/* ---------- Split hero ---------- */}
      <section
        className="section"
        style={{
          minHeight: '90vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
          paddingTop: '9rem',
          paddingBottom: '4rem',
        }}
      >
        <div className="reveal">
          <p className="eyebrow" style={{ marginBottom: '2rem' }}>
            {visit.eyebrow}
          </p>
          <h1
            className="display"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', color: 'var(--maroon)' }}
          >
            {visit.title}
          </h1>
          <div className="gold-rule" style={{ margin: '2.25rem 0' }} />
          <p className="body-copy" style={{ marginBottom: '2.5rem' }}>
            {visit.copy}
          </p>
          <a className="btn btn--solid" href={`mailto:${visit.contact.email}`}>
            {visit.cta}
          </a>
        </div>

        <div className="reveal framed framed--arch" style={{ aspectRatio: '3 / 4' }}>
          <img src={visit.image} alt="The Rajdeep atelier" loading="lazy" />
        </div>
      </section>

      {/* ---------- Studios ---------- */}
      <section
        className="section"
        style={{
          background: 'var(--maroon)',
          color: 'var(--alabaster)',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <p className="eyebrow reveal" style={{ color: 'var(--gold)', marginBottom: '2.5rem' }}>
          Where to find us
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
          }}
          className="studios-grid"
        >
          {visit.studios.map((s) => (
            <div
              key={s.city}
              className="reveal"
              style={{ borderTop: '1px solid rgba(243,236,225,0.22)', paddingTop: '1.5rem' }}
            >
              <h3
                className="display"
                style={{ fontSize: '2rem', color: 'var(--alabaster)' }}
              >
                {s.city}
              </h3>
              <p
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  margin: '0.5rem 0 1rem',
                }}
              >
                {s.role}
              </p>
              <p style={{ opacity: 0.78, fontSize: '0.95rem' }}>{s.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section
        className="section"
        style={{ paddingTop: '5rem', paddingBottom: '7rem', textAlign: 'center' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {[
            { k: 'Call', v: visit.contact.phone },
            { k: 'Write', v: visit.contact.email },
            { k: 'Hours', v: visit.contact.hours },
          ].map((c) => (
            <div key={c.k} className="reveal">
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                {c.k}
              </p>
              <p className="display" style={{ fontSize: '1.3rem', color: 'var(--maroon)' }}>
                {c.v}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
