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
          {/* Diya — देdeep means lamp; a flickering flame over the name */}
          <span className="diya">
            <span className="diya__glow" />
            <svg className="diya__svg" viewBox="0 0 60 76" xmlns="http://www.w3.org/2000/svg">
              {/* flame (outer + inner), animated via CSS */}
              <g className="diya__flame">
                <path className="diya__flame-outer"
                  d="M30 6 C22 20 20 30 30 40 C40 30 38 20 30 6 Z" />
                <path className="diya__flame-inner"
                  d="M30 18 C26 26 26 32 30 39 C34 32 34 26 30 18 Z" />
              </g>
              {/* wick */}
              <rect className="diya__wick" x="29" y="40" width="2" height="6" rx="1" />
              {/* clay lamp base */}
              <path className="diya__base"
                d="M8 50 C8 47 14 46 30 46 C46 46 52 47 52 50
                   C52 58 44 64 30 64 C16 64 8 58 8 50 Z" />
              <ellipse className="diya__oil" cx="30" cy="50" rx="19" ry="3.4" />
              {/* little decorative tip on the diya lip */}
              <path className="diya__tip" d="M30 64 C31 68 33 70 36 72 C31 71 29 69 30 64 Z" />
            </svg>
          </span>
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
