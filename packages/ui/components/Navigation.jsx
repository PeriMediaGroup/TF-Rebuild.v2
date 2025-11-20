"use client";

import { useState } from "react";

export default function Navigation({
  links = [],
  LinkComponent = "a",
  currentPath = "/"
}) {
  const [open, setOpen] = useState(false);

  const isActive = (href) => {
    return (
      currentPath === href ||
      (href !== "/" && currentPath.startsWith(href))
    );
  };

  return (
    <div className="tf-nav-wrapper">
      {/* Mobile Hamburger */}
      <button
        className={`tf-nav__hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Desktop Nav */}
      <nav className="tf-nav tf-nav--desktop">
        {links.map((item) => (
          <LinkComponent
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : ""}
          >
            {item.label}
          </LinkComponent>
        ))}
      </nav>

      {/* Mobile Nav */}
      <nav className={`tf-nav tf-nav--mobile ${open ? "open" : ""}`}>
        {links.map((item) => (
          <LinkComponent
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </LinkComponent>
        ))}
      </nav>
    </div>
  );
}
