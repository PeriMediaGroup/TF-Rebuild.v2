"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";

export default function ProtectedAdminRoute({ children }) {
  const router = useRouter();
  const { user, profile, loading, ready } = useAuth();

  useEffect(() => {
    if (!ready || loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (!profile || (profile.role !== "admin" && profile.role !== "ceo")) {
      router.replace("/not-authorized");
    }
  }, [loading, profile, ready, router, user]);

  const isAuthorized =
    ready &&
    !!user &&
    !!profile &&
    (profile.role === "admin" || profile.role === "ceo");

  if (!ready) {
    return <p style={{ padding: "1rem" }}>Loading admin session.</p>;
  }

  if (!user) {
    return <p style={{ padding: "1rem" }}>Redirecting to login.</p>;
  }

  if (!profile) {
    return <p style={{ padding: "1rem" }}>Loading admin profile.</p>;
  }

  if (!isAuthorized) {
    return <p style={{ padding: "1rem" }}>Redirecting.</p>;
  }

  return children;
}
