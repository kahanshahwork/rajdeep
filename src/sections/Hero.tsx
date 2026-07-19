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
          <span className="hero__brand-name">Rajdeep</span>

          {/* Diya — दीप (deep) means lamp; a live flame between the two words */}
          <span className="diya">
            <span className="diya__glow" />
            <svg className="diya__svg" viewBox="0 0 64 92" xmlns="http://www.w3.org/2000/svg">
              {/* flame: three stacked layers, each swaying independently */}
              <g className="diya__flame">
                <path className="diya__flame-outer"
                  d="M32 8 C22 26 20 40 32 54 C44 40 42 26 32 8 Z" />
                <path className="diya__flame-mid"
                  d="M32 18 C26 30 25 40 32 52 C39 40 38 30 32 18 Z" />
                <path className="diya__flame-inner"
                  d="M32 30 C29 37 29 44 32 52 C35 44 35 37 32 30 Z" />
              </g>
              {/* wick */}
              <rect className="diya__wick" x="31" y="52" width="2" height="7" rx="1" />
              {/* clay lamp base */}
              <path className="diya__base"
                d="M8 64 C8 61 15 60 32 60 C49 60 56 61 56 64
                   C56 73 47 79 32 79 C17 79 8 73 8 64 Z" />
              <ellipse className="diya__oil" cx="32" cy="64" rx="21" ry="3.6" />
              <path className="diya__tip" d="M32 79 C33 84 35 87 39 89 C33 88 30 85 32 79 Z" />
            </svg>
          </span>

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
