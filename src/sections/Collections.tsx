import CircularGallery from '../components/CircularGallery';
import { collections } from '../config';

export default function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="collections__head">
        <p className="eyebrow reveal" style={{ marginBottom: '1rem' }}>{collections.eyebrow}</p>
        <h2
          className="display reveal reveal-d1"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: 'var(--ink)' }}
        >
          {collections.title}
        </h2>
        <div className="gold-rule gold-rule--center reveal reveal-d1" style={{ margin: '1.5rem auto' }} />
        <p
          className="reveal reveal-d2"
          style={{ color: 'var(--ink-soft)', fontSize: '0.98rem', maxWidth: '38ch', margin: '0 auto' }}
        >
          {collections.copy}
        </p>
      </div>

      <div className="collections__stage reveal reveal-d2">
        <CircularGallery
          items={collections.items}
          bend={2.4}
          textColor="#8A4B2F"
          borderRadius={0.06}
          scrollEase={0.03}
          scrollSpeed={2}
          font="500 28px 'Cormorant Garamond', Georgia, serif"
        />
      </div>
    </section>
  );
}
