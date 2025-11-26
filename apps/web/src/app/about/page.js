import "../../styles/sections/about.scss";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="tf-about tf-page__content">
      <h1>About TriggerFeed</h1>
      <div className="tf-about__columns">
        {/* LEFT COLUMN */}
        <div className="tf-about__col tf-about__col--main  tf-page__content--ghost">
          <p>
            TriggerFeed is a social platform built for the 2A community — shooters,
            collectors, creators, builders, competitors, and defenders of the Constitution.
          </p>

          <p>
            We’re not “censorship-free,” but we are **censorship-resistant**. That means:</p>
          <ul className="tf-about__list">
            <li>We don’t shadowban lawful firearms content.</li>
            <li>We don’t punish creators for photos of gear, builds, ranges, or training.<br />Got full-auto - Let's Go!!!</li>
            <li>We don’t silence normal conversations about the 2A lifestyle, but we also don't push politics.</li>
          </ul>
          <p>But we **do** enforce basic community standards — no hate speech, no illegal activity,
            no harassment, no extremist garbage, and zero tolerance for CSAE or exploitation.
          </p>

          <p>
            TriggerFeed exists to protect everyday 2A voices from unfair platform moderation,
            not to give bad actors a playground. It's a firearm-friendly space where you can
            post freely, connect with like-minded users, and grow a real community without fear
            of being targeted just for your interests.
          </p>

          <h2>What are we building?</h2>

          <ul className="tf-about__list">
            <li>✔ A censorship-resistant 2A-friendly social platform.</li>
            <li>✔ Photos, multi-image posts, GIFs, and now **short-form video**.</li>
            <li>✔ Real-time notifications, @mentions, and friend requests.</li>
            <li>✔ Profiles with privacy controls and rank levels.</li>
            <li>✔ Mobile app for Android, PWA for iOS.</li>
            <li>✔ Merch store, internal ads, and community-driven growth.</li>
            <li>✔ Regular updates fueled by cold beer and stubborn optimism.</li>
          </ul>

          <p>
            We're keeping TriggerFeed independent and community-powered so nobody can
            take it away from us. Ever.
          </p>

          <p><strong>Let’s build something they can’t take down.</strong></p>
        </div>


        {/* RIGHT COLUMN */}
        <div className="tf-about__col tf-about__col--support">
          <h4>🌟 Why Support TriggerFeed?</h4>

          <p>
            TriggerFeed is independently owned and operated — no big tech overlords,
            no outside control, no corporate censors.
          </p>

          <p>Every dollar helps us:</p>

          <ul className="tf-about__list small">
            <li>Scale servers & speed up the feed</li>
            <li>Add new features (video, DMs, ads, groups)</li>
            <li>Keep the platform free & independent</li>
            <li>Avoid ever needing investors who might push censorship</li>
          </ul>

          <div className="tf-about__qr">
            <Image
              src="/images/bmc_qr.png"
              width={160}
              height={160}
              alt="Support TriggerFeed"
            />
          </div>

          <p className="tf-about__support-text">
            Like what we’re building?
            <br />
            <a
              href="https://buymeacoffee.com/triggerfeed"
              target="_blank"
              className="tf-about__support-link"
            >
              Help keep the feed running strong.
            </a>
          </p>

          <p className="tf-about__support-note">
            Even a few bucks keeps TriggerFeed growing — and keeps free expression alive for the 2A world.
          </p>
        </div>

      </div>
    </div>
  );
}
