"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="tf-nav">
      <Link href="/">Main</Link>
      <Link href="/friends">Friends</Link>
      <Link href="/trending">Trending</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
