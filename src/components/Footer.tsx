import { brand, footer, type PageId } from '../config';

interface Props {
  onNavigate: (id: PageId) => void;
}

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="foot section" style={{ paddingTop: '5rem', paddingBottom: '2.5rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.5fr) repeat(2, minmax(0, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
        className="foot-grid"
      >
        <div>
          <div className="mark" style={{ color: 'var(--alabaster)', fontSize: '1.9rem' }}>
            {brand.name}
            <span className="mark-diamond" style={{ background: 'var(--terracotta)' }} />
          </div>
          <p
            className="display"
            style={{
              color: 'var(--alabaster)',
              opacity: 0.85,
              fontSize: '1.5rem',
              marginTop: '1rem',
              maxWidth: '22ch',
              fontStyle: 'italic',
            }}
          >
            {footer.tagline}
          </p>
        </div>

        {footer.columns.map((col) => (
          <div key={col.heading}>
            <p
              className="eyebrow"
              style={{ color: 'var(--gold)', marginBottom: '1.25rem' }}
            >
              {col.heading}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.7rem' }}>
              {col.links.map((link) => (
                <li key={link}>
                  <button onClick={() => onNavigate(col.heading === 'Visit' ? 'visit' : 'collections')}>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr
        style={{
          border: 0,
          height: '1px',
          background: 'rgba(243,236,225,0.14)',
          margin: '3.5rem 0 1.5rem',
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '12px',
          letterSpacing: '0.1em',
          opacity: 0.6,
          textTransform: 'uppercase',
        }}
      >
        <span>{footer.copyright}</span>
        <span>{brand.established}</span>
      </div>
    </footer>
  );
}
