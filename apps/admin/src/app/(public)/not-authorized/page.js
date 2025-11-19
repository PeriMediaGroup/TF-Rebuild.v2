"use client";

import { useRouter } from "next/navigation";

export default function NotAuthorizedPage() {
  const router = useRouter();

  return (
    <div style={{
      padding: "2rem",
      color: "#fff",
      maxWidth: "500px",
      margin: "4rem auto",
      textAlign: "center",
      background: "#1f1f1f",
      borderRadius: "8px",
      border: "1px solid #333"
    }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Access Denied</h1>
      <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
        Sorry, you don’t have permission to access the admin dashboard.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          onClick={() => router.replace("/login")}
          style={{
            padding: "0.6rem 1.2rem",
            background: "#b22222",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
