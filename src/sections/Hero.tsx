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

          {/* Pishtaq façade — frame, spandrels, arch outline — drawn over the video */}
          <svg
            className="pishtaq__svg"
            viewBox="0 0 600 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* the pointed (four-centred) arch opening path, reused for mask + outline */}
              <path
                id="rj-arch"
                d="M150 720 L150 360
                   C150 268 194 150 300 128
                   C406 150 450 268 450 360
                   L450 720 Z"
              />
              {/* mask: white = frame is visible, black hole = arch shows the video */}
              <mask id="rj-open">
                <rect width="600" height="800" fill="#fff" />
                <use href="#rj-arch" fill="#000" />
              </mask>
              {/* subtle gold gradient for the border */}
              <linearGradient id="rj-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#C39A55" />
                <stop offset="0.5" stopColor="#A9803C" />
                <stop offset="1" stopColor="#C39A55" />
              </linearGradient>
              {/* arabesque motif tile for the spandrels */}
              <pattern id="rj-arabesque" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
                <path d="M23 6 C31 14 31 32 23 40 C15 32 15 14 23 6 Z" fill="none" stroke="rgba(201,154,85,0.55)" strokeWidth="1.1" />
                <path d="M6 23 C14 15 32 15 40 23 C32 31 14 31 6 23 Z" fill="none" stroke="rgba(201,154,85,0.4)" strokeWidth="1" />
                <circle cx="23" cy="23" r="2.1" fill="rgba(201,154,85,0.6)" />
              </pattern>
            </defs>

            {/* Solid façade panel covering everything (masked so the arch is a hole) */}
            <g mask="url(#rj-open)">
              {/* deep base so nothing shows behind the façade */}
              <rect width="600" height="800" fill="#5A1A16" />
              {/* spandrel field — arabesque inlay across the façade */}
              <rect width="600" height="800" fill="url(#rj-arabesque)" />
              {/* outer flat frame border (ivory-gold) */}
              <rect x="0" y="0" width="600" height="800" fill="none" stroke="url(#rj-gold)" strokeWidth="34" />
              <rect x="26" y="26" width="548" height="748" fill="none" stroke="rgba(244,236,222,0.85)" strokeWidth="6" />
              {/* inner rectangle framing the arch (the iwan surround) */}
              <rect x="118" y="96" width="364" height="624" fill="none" stroke="rgba(201,154,85,0.9)" strokeWidth="7" />
            </g>

            {/* Gold keyline tracing the arch opening itself */}
            <use href="#rj-arch" fill="none" stroke="url(#rj-gold)" strokeWidth="7" />
            <use href="#rj-arch" fill="none" stroke="rgba(244,236,222,0.7)" strokeWidth="2" />

            {/* little apex finial */}
            <circle cx="300" cy="120" r="6" fill="url(#rj-gold)" />
            <path d="M300 106 l4 10 -4 4 -4 -4 Z" fill="url(#rj-gold)" />
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
