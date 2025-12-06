import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";
import TotalUsers from "../stats/TotalUsers";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2025 Peri Media Group, LLC. All rights reserved.
      </p>

      <div className="footer__links" aria-label="Site policies and safety">
        <a href="https://triggerfeed.com/legal" className="footer-legal">
          Legal Stuff
        </a>
      </div>

      {/* 
      <div className="footer__meta">
        <TotalUsers />
      </div>
      */}
    </footer>
  );
};

export default Footer;
