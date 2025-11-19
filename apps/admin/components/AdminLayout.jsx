/* AdminLayout.jsx */

"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../styles/dashboard.scss";

export default function AdminLayout({ children }) {
  return (
    <div className="admin">
      <Sidebar />

      <div className="admin__main">
        <Topbar />
        <div className="admin__content">{children}</div>
      </div>
    </div>
  );
}
