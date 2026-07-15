import { story } from '../config';

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="story__imgwrap reveal">
        <div className="framed parallax" data-parallax="-0.08">
          <img src={story.image} alt={story.imageAlt} loading="lazy" />
        </div>
        <span className="story__year parallax" data-parallax="0.12" aria-hidden="true">
          {story.year}
        </span>
      </div>

      <div className="reveal reveal-d1">
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>{story.eyebrow}</p>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', color: 'var(--ink)' }}>
          {story.title}
        </h2>
        <div className="gold-rule" style={{ margin: '2rem 0' }} />
        {story.paras.map((p, i) => (
          <p key={i} className="body-copy" style={{ marginBottom: '1.25rem' }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
