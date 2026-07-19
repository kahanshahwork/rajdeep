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
          <span className="hero__brand-row">
            <span className="hero__brand-name">Rajdeep</span>

            {/* Realistic diya — दीप (deep) = lamp — sits between the two words */}
            <span className="diya">
              <svg className="diya__svg" viewBox="0 0 140 168" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* flame body: white core → gold → orange → deep ember */}
                  <radialGradient id="flameBody" cx="50%" cy="74%" r="60%">
                    <stop offset="0%"  stopColor="#fff8e6" />
                    <stop offset="22%" stopColor="#ffe488" />
                    <stop offset="50%" stopColor="#ffb03a" />
                    <stop offset="80%" stopColor="#f4770f" />
                    <stop offset="100%" stopColor="#cf4606" />
                  </radialGradient>
                  <radialGradient id="flameCore" cx="50%" cy="72%" r="52%">
                    <stop offset="0%"  stopColor="#ffffff" />
                    <stop offset="55%" stopColor="#fff2c4" />
                    <stop offset="100%" stopColor="#ffd66b" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="flameBlue" cx="50%" cy="26%" r="60%">
                    <stop offset="0%" stopColor="#9dc0ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#9dc0ff" stopOpacity="0" />
                  </radialGradient>
                  {/* clay body — warm terracotta with form shading */}
                  <linearGradient id="clay" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"  stopColor="#d59a4c" />
                    <stop offset="40%" stopColor="#a86a2c" />
                    <stop offset="100%" stopColor="#5e3413" />
                  </linearGradient>
                  <radialGradient id="clayShine" cx="38%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#ffdca0" stopOpacity="0.75" />
                    <stop offset="60%" stopColor="#ffdca0" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="clayLip" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#eab866" />
                    <stop offset="100%" stopColor="#9c6428" />
                  </linearGradient>
                  <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"  stopColor="#ffd98a" stopOpacity="0.9" />
                    <stop offset="42%" stopColor="#ffab40" stopOpacity="0.38" />
                    <stop offset="100%" stopColor="#ffab40" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* glow halo */}
                <ellipse className="diya__halo" cx="70" cy="58" rx="56" ry="64" fill="url(#halo)" />

                {/* flame (grouped so it sways subtly from the wick) */}
                <g className="diya__flame">
                  <path fill="url(#flameBody)"
                    d="M70 12
                       C55 42 47 64 52 84
                       C56 100 84 100 88 84
                       C93 64 85 42 70 12 Z" />
                  <path fill="url(#flameBlue)" opacity="0.7"
                    d="M70 44 C60 60 60 78 70 92 C80 78 80 60 70 44 Z" />
                  <path fill="url(#flameCore)"
                    d="M70 46 C62 62 63 78 70 92 C77 78 78 62 70 46 Z" />
                </g>

                {/* wick */}
                <rect x="67.5" y="96" width="5" height="12" rx="2.5" fill="#4a3117" />

                {/* clay diya lamp — wide shallow bowl */}
                <path fill="url(#clay)"
                  d="M10 110
                     C10 102 30 99 70 99
                     C110 99 130 102 130 110
                     C130 130 108 142 70 142
                     C32 142 10 130 10 110 Z" />
                {/* form-shine on the clay */}
                <path fill="url(#clayShine)"
                  d="M10 110 C10 102 30 99 70 99 C110 99 130 102 130 110
                     C130 122 108 130 70 130 C32 130 10 122 10 110 Z" />
                {/* dark oil pool */}
                <ellipse cx="70" cy="110" rx="50" ry="7" fill="#33230f" opacity="0.6" />
                {/* bright rim / lip */}
                <path fill="url(#clayLip)" opacity="0.95"
                  d="M10 110 C10 105 30 102 70 102 C110 102 130 105 130 110
                     C130 114 108 116 70 116 C32 116 10 114 10 110 Z" />
                {/* pinched spout holding the wick */}
                <path fill="url(#clayLip)"
                  d="M70 142 C73 154 78 160 88 166 C75 163 66 158 70 142 Z" />
                {/* tiny base foot for grounding */}
                <ellipse cx="70" cy="143" rx="26" ry="4" fill="#4a2c12" opacity="0.45" />
              </svg>
            </span>

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
