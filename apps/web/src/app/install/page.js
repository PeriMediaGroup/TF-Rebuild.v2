import "../../styles/sections/install.scss";

export default function InstallPage() {
  return (
    <div className="tf-page__content tf-install">

      <h1 className="tf-install__title">Install TriggerFeed</h1>
      <p className="tf-install__intro">
        Choose your device below to install TriggerFeed.  
        You can use the Android app, iOS web app, or the full desktop web version.
      </p>

      <div className="tf-install__columns">

        {/* ANDROID COLUMN */}
        <div className="tf-install__col">
          <h2>Android</h2>

          <p className="tf-install__sub">Option 1: Install Through Google Play</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.perimediagroup.triggerfeed"
            target="_blank"
            className="tf-install__badge"
          >
            <img src="/images/google-play.svg" alt="Get it on Google Play" />
          </a>

          <p className="tf-install__sub">Option 2: Install from the Web App</p>
          <ol>
            <li>Open <a href="https://app.triggerfeed.com" target="_blank">app.TriggerFeed.com</a> in Chrome.</li>
            <li>You should see an “Install App” banner at the bottom.</li>
            <li>Tap <strong>Install</strong>.</li>
          </ol>
        </div>


        {/* IOS COLUMN */}
        <div className="tf-install__col">
          <h2>iPhone (iOS)</h2>

          <p className="tf-install__sub">Install the Web App</p>
          <ol>
            <li>Open <a href="https://app.triggerfeed.com" target="_blank">app.TriggerFeed.com</a> in Safari.</li>
            <li>Tap the <strong>Share</strong> icon.</li>
            <li>Scroll down and choose <strong>Add to Home Screen</strong>.</li>
            <li>Name it <strong>TriggerFeed</strong> and tap <strong>Add</strong>.</li>
          </ol>

          <p className="tf-install__soon">
            iOS App Store version coming soon.
          </p>
          <img src="/images/ios-soon.png" className="ios-image" alt="App Store Coming Soon" />
        </div>

      </div>


      {/* DESKTOP SECTION */}
      <div className="tf-install__desktop">
        <h2>Desktop</h2>
        <p>
          You can access TriggerFeed on any computer by visiting:
        </p>
        <a
          href="https://app.triggerfeed.com"
          target="_blank"
          className="tf-install__link"
        >
          https://app.triggerfeed.com
        </a>
        <p>
          Full functionality: posting, notifications, messaging, profile editing, and more.
        </p>
      </div>

      <p className="tf-install__footer-note">
        If your phone acts up, close the app and try again.  
        Phones love being dramatic.
      </p>

    </div>
  );
}
