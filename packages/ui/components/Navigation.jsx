"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation({ links = [], currentPath = "/" }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activePath = pathname || currentPath || "/";

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const renderLinks = (onClick) =>
    links.map((item) => {
      const isActive =
        activePath === item.href ||
        (item.href !== "/" && activePath.startsWith(item.href));

      return (
        <a
          key={item.href}
          href={item.href}
          className={isActive ? "active" : ""}
          onClick={onClick}
        >
          {item.label}
        </a>
      );
    });

  return (
    <>
      {/* Backdrop behind drawer on mobile */}
      <div
        className={`tf-nav__backdrop ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />

      <nav className="tf-nav">
        {/* Desktop inline links */}
        <div className="tf-nav__links">{renderLinks(undefined)}</div>

        {/* Mobile hamburger (turns into X via .is-open in SCSS) */}
        <button
          type="button"
          className={`tf-nav__hamburger ${isOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile slide-out drawer */}
        <div className={`tf-nav__drawer ${isOpen ? "is-open" : ""}`}>
          <div className="tf-nav__drawer-inner">
            {renderLinks(closeMenu)}
          </div>
        </div>
      </nav>
    </>
  );
}
