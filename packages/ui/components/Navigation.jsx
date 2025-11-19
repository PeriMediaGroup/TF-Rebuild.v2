"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ links = [] }) {
  const pathname = usePathname();

  return (
    <nav className="tf-nav">
      {links.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "active" : ""}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
