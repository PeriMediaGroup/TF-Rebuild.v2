import "../styles/sections/home.scss";

export default function HomePage() {
  return (
    <div className="tf-home tf-page__content">

      {/* HERO */}
      <section className="tf-home__hero">
        <h1 className="tf-home__title">TriggerFeed</h1>
        <p className="tf-home__tagline">Post With The Safety Off.</p>

        <p className="tf-home__sub">
          The home for shooters, builders, creators and collectors tired of censorship.
        </p>

        <div className="tf-home__cta">
          <a href="/install" className="btn btn-primary">Get the App</a>
          <a href="https://app.triggerfeed.com/signup" className="btn btn-secondary">Join Now</a>
        </div>

        <div className="tf-home__badges">
          <a href="https://play.google.com/store/apps/details?id=com.perimediagroup.triggerfeed" target="_blank"><img src="/images/google-play.svg" className="google-image" alt="Get it on Google Play" /></a>
          <img src="/images/ios-soon.png" className="ios-image" alt="iOS App Coming soon" />
        </div>
      </section>


      {/* VALUE PROPS */}
      <section className="tf-home__values">
        <div className="value">
          <h3>No Shadowbans</h3>
          <p>Your posts get seen. Not throttled.</p>
        </div>

        <div className="value">
          <h3>Freedom to Share</h3>
          <p>Builds, gear, ranges, content — without platform panic.</p>
        </div>

        <div className="value">
          <h3>Real Community</h3>
          <p>Creators, shooters, collectors — all in one place.</p>
        </div>
      </section>


      {/* APP PREVIEW */}
      <section className="tf-home__preview">
        <h2>Inside the App</h2>

        <div className="preview-grid">
          <img src="/images/preview-feed.png" alt="Feed" className="preview-grid__image" />
          <img src="/images/preview-post.png" alt="Post" className="preview-grid__image" />
          <img src="/images/preview-profile.png" alt="Profile" className="preview-grid__image" />
        </div>
      </section>


      {/* TRENDING PREVIEW */}
      <section className="tf-home__trending">
        <h2>Trending On TriggerFeed</h2>

        <div className="trending-grid">
          <div className="trending-item">Coming Soon</div>
          <div className="trending-item">Trending Posts</div>
          <div className="trending-item">Community Highlights</div>
        </div>

        <p className="coming-soon-note">
          Live data feed coming after API hook-up.
        </p>
      </section>


      {/* SAFETY + LEGAL */}
      <section className="tf-home__legal">
        <h2>Our Commitment to Safety</h2>
        <p>
          TriggerFeed has zero tolerance for illegal content or exploitation.  
          Learn more about our:
        </p>

        <ul className="tf-home__legal-list">
          <li><a href="/legal#terms">Terms of Service</a></li>
          <li><a href="/legal#privacy">Privacy Policy</a></li>
          <li><a href="/legal#csae">CSAE Policy</a></li>
          <li><a href="/legal#abuse">Report Abuse</a></li>
        </ul>
      </section>


      {/* FINAL CTA */}
      <section className="tf-home__final">
        <h2>Join the 2A Community</h2>
        <p>Post freely. Connect openly. Build your feed your way.</p>

        <div className="tf-home__cta">
          <a href="https://app.triggerfeed.com/signup" className="btn btn-primary">Get Started</a>
          <a href="/install" className="btn btn-secondary">Install the App</a>
        </div>
      </section>

    </div>
  );
}

