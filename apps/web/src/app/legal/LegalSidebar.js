"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "terms", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "cookies", label: "Cookie Policy" },
  { id: "csae", label: "CSAE Policy" },
  { id: "abuse", label: "Report Abuse" }
];

export default function LegalSidebar() {
  const [activeId, setActiveId] = useState(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const headerOffset = 160; // matches sticky header spacing

    const updateActive = () => {
      let current = navItems[0].id;

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();
        if (top <= headerOffset) {
          current = section.id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  return (
    <nav>
      <ul>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeId === id ? "active" : ""}
              aria-current={activeId === id ? "true" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
