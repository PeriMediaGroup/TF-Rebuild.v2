/* Sidebar.jsx */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../navLinks";
import "../styles/sidebar.scss";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__logo">TF Admin</span>
      </div>

      <nav className="sidebar__nav">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`sidebar__link ${isActive ? "sidebar__link--active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
