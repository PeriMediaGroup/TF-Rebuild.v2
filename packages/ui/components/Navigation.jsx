"use client";

import Link from "next/link";

export default function Navigation({ links = [] }) {
  return (
    <nav className="tf-nav">
      {links.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
