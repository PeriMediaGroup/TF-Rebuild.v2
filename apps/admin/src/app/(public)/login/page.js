"use client";

import { useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMsg("");
    setSubmitting(true);

    console.log("Supabase env present?", {
      url: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
      anonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    });

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Supabase login error:", error);
        setErrorMsg(error.message ?? "Login failed");
        return;
      }

      console.log("Supabase login success:", data?.session?.user?.id);
      router.replace("/");
    } catch (err) {
      console.error("Unexpected login error:", err);
      setErrorMsg("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h1>TriggerFeed Admin Login</h1>

      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "300px",
        }}
      >
        <input
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          style={{ padding: ".5rem" }}
        />

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          style={{ padding: ".5rem" }}
        />

        {errorMsg && (
          <div style={{ color: "red", fontSize: ".875rem" }}>
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          style={{ padding: ".5rem", marginTop: "1rem" }}
        >
          {submitting ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}
