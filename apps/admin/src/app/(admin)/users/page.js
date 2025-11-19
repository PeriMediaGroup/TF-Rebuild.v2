"use client";

import { useEffect, useState } from "react";
import { getAllUsers } from "../../../../lib/adminApi";
import UserTable from "../../../../components/UserTable";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    setError(null);
    setLoading(true);
    try {
      console.log("UsersPage: fetching users");
      const data = await getAllUsers();
      console.log("UsersPage: users loaded", data?.length);
      setUsers(data);
    } catch (err) {
      console.error("Failed to load users:", err);
      setError("Could not load users. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  // Failsafe: if we're still loading after 8s, surface an error instead of hanging.
  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setError((prev) => prev ?? "Loading users is taking too long. Please retry.");
      setLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div>
      <h2>Users</h2>
      {loading && <p>Loading users...</p>}
      {error && (
        <p style={{ color: "salmon", marginTop: "0.5rem" }}>
          {error}
        </p>
      )}
      {!loading && !error && <UserTable users={users} refresh={refresh} />}
    </div>
  );
}
