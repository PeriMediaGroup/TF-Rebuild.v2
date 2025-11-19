"use client";

import {
  banUser,
  unbanUser,
  pauseUser,
  unpauseUser,
  promoteUser,
  demoteUser,
} from "../lib/adminApi";
import { useAuth } from "../src/auth/AuthContext";
import "../styles/tables.scss";
import { useState } from "react";

export default function UserTable({ users, refresh }) {
  const { user: adminUser, profile: adminProfile } = useAuth();
  const [loadingAction, setLoadingAction] = useState(null);

  const isCEO = adminProfile?.role === "ceo";
  const isAdmin = adminProfile?.role === "admin";

  const sortedUsers = [...users].sort((a, b) => {
    const rank = { ceo: 3, admin: 2, user: 1 };

    const aRank = rank[a.role] || 0;
    const bRank = rank[b.role] || 0;

    // First sort by role weight
    if (aRank !== bRank) return bRank - aRank;

    // Secondary sort alphabetically by username
    return a.username.localeCompare(b.username);
  });

  async function handleAction(action, targetUser) {
    if (!adminUser || !adminProfile) return;

    // Guards to keep things sane
    if (targetUser.id === adminUser.id) {
      alert("You can't perform actions on your own account.");
      return;
    }

    if (!isCEO && targetUser.role === "admin") {
      alert("Only the CEO can modify admin accounts.");
      return;
    }

    const confirmMsg = {
      ban: `Ban ${targetUser.username}?`,
      unban: `Unban ${targetUser.username}?`,
      pause: `Pause ${targetUser.username}?`,
      unpause: `Unpause ${targetUser.username}?`,
      promote: `Promote ${targetUser.username} to admin?`,
      demote: `Demote ${targetUser.username} from admin?`,
    }[action];

    if (!window.confirm(confirmMsg)) return;

    try {
      setLoadingAction(targetUser.id + "-" + action);

      if (action === "ban") await banUser(adminUser.id, targetUser);
      if (action === "unban") await unbanUser(adminUser.id, targetUser);
      if (action === "pause") await pauseUser(adminUser.id, targetUser);
      if (action === "unpause") await unpauseUser(adminUser.id, targetUser);
      if (action === "promote") await promoteUser(adminUser.id, targetUser);
      if (action === "demote") await demoteUser(adminUser.id, targetUser);

      await refresh();
    } catch (err) {
      console.error(err);
      alert("Action failed. Check console.");
    } finally {
      setLoadingAction(null);
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Role</th>
          <th>User</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {sortedUsers.map((u, i) => {
          const nextUser = sortedUsers[i + 1];
          const ownRow = u.id === adminUser.id;
          const targetIsAdmin = u.role === "admin";
          const needsDivider = nextUser && nextUser.role !== u.role; // role boundary detected

          return (
            <tr
              key={u.id}
              className={`table__row ${
                needsDivider ? "table__row--section-end" : ""
              }`}
            >
              <td>{u.role}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>
                {!u.is_banned && !u.is_paused && (
                  <span className="badge badge--green">Active</span>
                )}
                {u.is_paused && (
                  <span className="badge badge--yellow">Paused</span>
                )}
                {u.is_banned && (
                  <span className="badge badge--red">Banned</span>
                )}
              </td>

              <td className="table__actions">
                {/* PROMOTE / DEMOTE (CEO ONLY) */}
                {isCEO && u.role !== "admin" && u.role !== "ceo" && !ownRow && (
                  <button
                    disabled={loadingAction !== null}
                    onClick={() => handleAction("promote", u)}
                    className="btn btn--primary"
                  >
                    Promote
                  </button>
                )}

                {isCEO && u.role === "admin" && !ownRow && (
                  <button
                    disabled={loadingAction !== null}
                    onClick={() => handleAction("demote", u)}
                    className="btn btn--danger"
                  >
                    Demote
                  </button>
                )}

                {/* PAUSE / UNPAUSE */}
                {!u.is_paused && !ownRow && (
                  <button
                    disabled={loadingAction !== null}
                    onClick={() => handleAction("pause", u)}
                    className="btn btn--warning"
                  >
                    Pause
                  </button>
                )}

                {u.is_paused && (
                  <button
                    disabled={loadingAction !== null}
                    onClick={() => handleAction("unpause", u)}
                    className="btn btn--primary"
                  >
                    Unpause
                  </button>
                )}

                {/* BAN / UNBAN */}
                {!u.is_banned && !ownRow && (
                  <button
                    disabled={loadingAction !== null}
                    onClick={() => handleAction("ban", u)}
                    className="btn btn--danger"
                  >
                    Ban
                  </button>
                )}

                {u.is_banned && (
                  <button
                    disabled={loadingAction !== null}
                    onClick={() => handleAction("unban", u)}
                    className="btn btn--primary"
                  >
                    Unban
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
