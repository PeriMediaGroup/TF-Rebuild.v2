"use client";

import { usePathname } from "next/navigation";

export default function Navigation({ links = [], currentPath }) {
  const pathFromRouter = usePathname();
  const activePath = pathFromRouter || currentPath || "/";

  return (
    <nav className="tf-nav">
      {links.map((item) => {
        const isActive =
          activePath === item.href ||
          (item.href !== "/" && activePath.startsWith(item.href));

        return (
          <a
            key={item.href}
            href={item.href}
            className={isActive ? "active" : ""}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
