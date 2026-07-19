import { visit, reviews } from '../config';

export default function Visit() {
  const s = visit.store;

  return (
    <section className="visit" id="visit">
      {/* ---- Left: details + address + contact ---- */}
      <div className="reveal">
        <p className="eyebrow" style={{ marginBottom: '2rem' }}>{visit.eyebrow}</p>
        <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--ink)' }}>
          {visit.title}
        </h2>
        <div className="gold-rule" style={{ margin: '2rem 0' }} />
        <p className="body-copy" style={{ marginBottom: '2.25rem' }}>{visit.copy}</p>

        {/* Address + contact card */}
        <div className="storecard">
          <h3 className="display" style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>
            {s.name}
          </h3>
          <address className="storecard__addr">
            {s.line1}<br />
            {s.line2}<br />
            {s.city}
          </address>

          <div className="storecard__rows">
            <div className="storecard__row">
              <span className="storecard__label">Phone</span>
              <a className="storecard__value" href={`tel:${s.phoneDial}`}>{s.phoneDisplay}</a>
            </div>
            <div className="storecard__row">
              <span className="storecard__label">Hours</span>
              <span className="storecard__value">{s.hours}</span>
            </div>
          </div>

          <div className="storecard__cta">
            <a className="btn btn--solid" href={`tel:${s.phoneDial}`}>{visit.cta}</a>
            <a className="btn" href={s.directionsLink} target="_blank" rel="noreferrer">Get directions</a>
          </div>
        </div>
      </div>

      {/* ---- Right: embedded Google Map ---- */}
      <div className="visit__map reveal reveal-d1">
        <iframe
          title="Rajdeep Jewellers location — Kalol, Gujarat"
          src={s.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a className="visit__maplink" href={s.mapsLink} target="_blank" rel="noreferrer">
          View on Google Maps →
        </a>
      </div>

      {/* ---- Reviews ---- */}
      <div className="reviews" id="reviews">
        <div className="reviews__head reveal">
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>{reviews.eyebrow}</p>
          <h2 className="display" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)', color: 'var(--ink)' }}>
            {reviews.title}
          </h2>
          <div className="reviews__rating">
            <span className="reviews__stars" aria-hidden="true">★★★★★</span>
            <span className="reviews__ratingtext">
              {reviews.ratingValue} · {reviews.ratingCount} Google reviews
            </span>
          </div>
        </div>

        <div className="reviews__grid">
          {reviews.items.map((r, i) => (
            <figure className={`reviewcard reveal reveal-d${(i % 3) + 1}`} key={r.name}>
              <div className="reviewcard__aura" aria-hidden="true" />
              <div className="reviewcard__inner">
                <span className="reviewcard__quotemark" aria-hidden="true">&ldquo;</span>
                <blockquote className="reviewcard__quote">{r.quote}</blockquote>
                <figcaption className="reviewcard__cap">
                  <span className="reviewcard__name">{r.name}</span>
                  <span className="reviewcard__meta">{r.meta}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
