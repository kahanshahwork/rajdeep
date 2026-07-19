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
        <div className="pishtaq parallax" data-parallax="-0.06">
          {/* Video sits behind, revealed only through the arch mask */}
          <div className="pishtaq__media">
            <video
              className="hero__video hero__video--desktop"
              src={hero.videoDesktop}
              poster={hero.videoDesktopPoster}
              autoPlay muted loop playsInline preload="metadata"
              aria-label={hero.imageAlt}
            />
            <video
              className="hero__video hero__video--mobile"
              src={hero.video}
              poster={hero.videoPoster}
              autoPlay muted loop playsInline preload="metadata"
              aria-label={hero.imageAlt}
            />
          </div>

          {/* Pishtaq — single thin line, no fill, drawn over the video */}
          <svg
            className="pishtaq__svg"
            viewBox="0 0 600 800"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* outer rectangle keyline */}
            <rect x="8" y="8" width="584" height="784" fill="none"
              stroke="var(--gold)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            {/* the pishtaq arch outline (rectangular jambs → pointed apex) */}
            <path
              d="M150 792 L150 300
                 C150 210 200 120 300 96
                 C400 120 450 210 450 300
                 L450 792"
              fill="none" stroke="var(--gold)" strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Mobile-only royal wordmark, sits directly under the image */}
        <div className="hero__brand" aria-hidden="true">
          <span className="hero__brand-orn">&#10022;</span>
          <span className="hero__brand-name">Rajdeep</span>
          <span className="hero__brand-sub">Jewellers</span>
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
