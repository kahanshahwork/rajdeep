import { visit } from '../config';

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="reveal">
        <p className="eyebrow" style={{ marginBottom: '2rem' }}>{visit.eyebrow}</p>
        <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--ink)' }}>
          {visit.title}
        </h2>
        <div className="gold-rule" style={{ margin: '2rem 0' }} />
        <p className="body-copy" style={{ marginBottom: '2.5rem' }}>{visit.copy}</p>
        <a className="btn btn--solid" href={`mailto:${visit.contact.email}`}>{visit.cta}</a>

        <div className="studios">
          {visit.studios.map((s) => (
            <div className="studio" key={s.city}>
              <h3 className="display" style={{ fontSize: '1.5rem', color: 'var(--ink)' }}>{s.city}</h3>
              <p className="eyebrow" style={{ margin: '0.4rem 0 0.6rem' }}>{s.role}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)' }}>{s.address}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="visit__media reveal reveal-d1">
        <div className="framed framed--arch parallax" data-parallax="-0.05" style={{ height: '100%' }}>
          <img src={visit.image} alt={visit.alt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
