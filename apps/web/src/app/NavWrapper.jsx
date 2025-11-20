"use client";

import { Header } from "@triggerfeed/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../navLinks";

export default function NavWrapper() {
  const pathname = usePathname();

  return (
    <Header links={navLinks} LinkComponent={Link} currentPath={pathname} />
  );
}
