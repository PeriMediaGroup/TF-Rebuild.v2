export default function Footer() {
  return (
    <footer className="tf-footer">
      <p>
        © {new Date().getFullYear()} TriggerFeed. All rights reserved.
        {" "}•{" "}
        <a href="https://perimediagroup.com" target="_blank">
          Peri Media Group
        </a>
      </p>
    </footer>
  );
}
