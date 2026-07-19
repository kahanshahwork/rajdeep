import { hero, brand } from '../config';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__aura" />

      <div className="hero__content">
        <p className="eyebrow reveal" style={{ marginBottom: '1.4rem' }}>
          {hero.eyebrow}
        </p>
        <h1 className="hero__title">
          <span className="reveal reveal-d1" style={{ display: 'block' }}>{hero.titleTop}</span>
          <span className="reveal reveal-d2" style={{ display: 'block' }}>
            <em>{hero.titleEm}</em>
          </span>
          <span className="reveal reveal-d3" style={{ display: 'block' }}>{hero.titleBottom}</span>
        </h1>

        <div className="gold-rule reveal reveal-d3" style={{ margin: '1.6rem 0' }} />

        <p className="body-copy reveal reveal-d3" style={{ marginBottom: '1.8rem' }}>
          {hero.copy}
        </p>

        <div className="reveal reveal-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a className="btn btn--solid" href="#collections">View collections</a>
          <a className="btn" href="#story">Our story</a>
        </div>
      </div>

      <div className="hero__media reveal reveal-d2">
        <div className="framed framed--arch parallax" data-parallax="-0.06" style={{ aspectRatio: '3 / 4' }}>
          {/* Desktop: landscape video */}
          <video
            className="hero__video hero__video--desktop"
            src={hero.videoDesktop}
            poster={hero.videoDesktopPoster}
            autoPlay muted loop playsInline preload="metadata"
            aria-label={hero.imageAlt}
          />
          {/* Mobile: portrait video */}
          <video
            className="hero__video hero__video--mobile"
            src={hero.video}
            poster={hero.videoPoster}
            autoPlay muted loop playsInline preload="metadata"
            aria-label={hero.imageAlt}
          />
        </div>

        {/* Mobile-only royal wordmark, sits directly under the image */}
        <div className="hero__brand" aria-hidden="true">
          <img src="/images/rj-logo.png" alt="" className="hero__brand-logo" />
          <span className="hero__brand-row">
            <span className="hero__brand-name">Rajdeep</span>
            <span className="hero__brand-sub">Jewellers</span>
          </span>
          <span className="hero__brand-tag">{brand.tagline}</span>
        </div>
      </div>

      <div className="hero__scrollcue" aria-hidden="true">
        <span>{brand.tagline}</span>
        <span className="line" />
      </div>
    </header>
  );
}
