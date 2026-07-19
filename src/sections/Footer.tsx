import { brand, footer, visit } from '../config';

// small helper: which section a footer link scrolls to
const targetFor = (heading: string) => (heading === 'Visit' ? 'visit' : 'collections');

export default function Footer() {
  const s = visit.store;

  const go = (target: string) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="foot">
      <div className="foot__grid">
        <div>
          <div className="mark mark--light" style={{ fontSize: '1.9rem' }}>
            {brand.name}
            <span className="mark-diamond" />
          </div>
          <p
            className="display"
            style={{ color: 'var(--ivory)', opacity: 0.85, fontSize: '1.5rem', marginTop: '1rem', maxWidth: '22ch', fontStyle: 'italic' }}
          >
            {footer.tagline}
          </p>
        </div>

        {footer.columns.map((col) => (
          <div className="foot__col" key={col.heading}>
            <p className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: '1.25rem' }}>
              {col.heading}
            </p>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <button onClick={() => go(targetFor(col.heading))}>{link}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Showroom address + contact */}
        <div className="foot__col foot__store">
          <p className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: '1.25rem' }}>
            Showroom
          </p>
          <address className="foot__addr">
            <span className="foot__store-name">{s.name}</span>
            {s.line1}<br />
            {s.line2}<br />
            {s.city}
          </address>
          <div className="foot__store-meta">
            <a href={`tel:${s.phoneDial}`}>{s.phoneDisplay}</a>
            <span>{s.hours}</span>
          </div>
        </div>
      </div>

      <hr style={{ border: 0, height: '1px', background: 'rgba(244,236,222,0.16)', margin: '3.5rem 0 1.5rem' }} />

      <div
        style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '12px', letterSpacing: '0.1em', opacity: 0.6, textTransform: 'uppercase' }}
      >
        <span>{footer.copyright}</span>
        <span>{visit.contact.phoneDisplay}</span>
      </div>
    </footer>
  );
}
