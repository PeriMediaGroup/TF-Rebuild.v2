export default function Footer() {
  return (
    <footer className="tf-footer">
      <span>
        © {new Date().getFullYear()} TriggerFeed. All rights reserved. •{" "}
        <a href="https://perimediagroup.com" target="_blank">
          Peri Media Group
        </a>
      </span>
      <span>
        <a href="/legal" className="footer-legal">
          Legal Stuff
        </a>
      </span>
    </footer>
  );
}
