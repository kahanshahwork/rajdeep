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
              <svg className="diya__svg" viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* flame body: blue base → deep orange → gold → white core */}
                  <radialGradient id="flameBody" cx="50%" cy="72%" r="62%">
                    <stop offset="0%"  stopColor="#fff7e0" />
                    <stop offset="26%" stopColor="#ffe07a" />
                    <stop offset="55%" stopColor="#ffab2e" />
                    <stop offset="82%" stopColor="#f4770f" />
                    <stop offset="100%" stopColor="#d84e08" />
                  </radialGradient>
                  <radialGradient id="flameCore" cx="50%" cy="70%" r="55%">
                    <stop offset="0%"  stopColor="#ffffff" />
                    <stop offset="55%" stopColor="#fff2c4" />
                    <stop offset="100%" stopColor="#ffd66b" stopOpacity="0" />
                  </radialGradient>
                  {/* faint blue flame root */}
                  <radialGradient id="flameBlue" cx="50%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#8fb7ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#8fb7ff" stopOpacity="0" />
                  </radialGradient>
                  {/* clay lamp shading */}
                  <linearGradient id="clay" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"  stopColor="#c98a3e" />
                    <stop offset="45%" stopColor="#9c6326" />
                    <stop offset="100%" stopColor="#6d3f16" />
                  </linearGradient>
                  <linearGradient id="clayLip" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e0aa5c" />
                    <stop offset="100%" stopColor="#a06a2c" />
                  </linearGradient>
                  <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"  stopColor="#ffd98a" stopOpacity="0.85" />
                    <stop offset="45%" stopColor="#ffab40" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#ffab40" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* glow halo */}
                <ellipse className="diya__halo" cx="60" cy="52" rx="46" ry="52" fill="url(#halo)" />

                {/* flame (grouped so it sways subtly from the wick) */}
                <g className="diya__flame">
                  <path fill="url(#flameBody)"
                    d="M60 14
                       C48 40 42 58 46 74
                       C49 88 71 88 74 74
                       C78 58 72 40 60 14 Z" />
                  <path fill="url(#flameBlue)" opacity="0.7"
                    d="M60 40 C52 54 52 68 60 80 C68 68 68 54 60 40 Z" />
                  <path fill="url(#flameCore)"
                    d="M60 40 C54 54 55 66 60 78 C65 66 66 54 60 40 Z" />
                </g>

                {/* wick */}
                <rect x="58.5" y="84" width="3" height="10" rx="1.5" fill="#4a3117" />

                {/* clay diya lamp */}
                <path fill="url(#clay)"
                  d="M14 96
                     C14 90 30 88 60 88
                     C90 88 106 90 106 96
                     C106 112 88 122 60 122
                     C32 122 14 112 14 96 Z" />
                {/* oil pool + lip highlight */}
                <ellipse cx="60" cy="96" rx="40" ry="6" fill="#3a2a14" opacity="0.55" />
                <path fill="url(#clayLip)" opacity="0.9"
                  d="M14 96 C14 92 30 90 60 90 C90 90 106 92 106 96
                     C106 99 90 101 60 101 C30 101 14 99 14 96 Z" />
                {/* pinched spout holding the wick */}
                <path fill="url(#clayLip)"
                  d="M60 122 C62 132 66 138 74 143 C64 141 58 136 60 122 Z" />
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
