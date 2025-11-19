"use client";

import { useAuth } from "../src/auth/AuthContext";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";
import "../styles/dashboard.scss";

export default function Topbar() {
  const { user } = useAuth() || {};
  const router = useRouter();

  async function handleLogout() {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error("Logout error:", err);
      // Even if signOut fails, force a client redirect to clear UI state.
      router.replace("/login");
      return;
    }
    router.replace("/login");
  }

  return (
    <header className="topbar">
      <div className="topbar__left">
        <h1 className="topbar__title">Admin Panel</h1>
      </div>

      <div className="topbar__right">
        {user && (
          <>
            <span className="topbar__user">{user.email}</span>
            <button className="topbar__logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}
