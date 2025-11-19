/* app/(admin) */

import ProtectedAdminRoute from "../../auth/ProtectedAdminRoute";
import AdminLayout from "../../../components/AdminLayout";

export default function AdminGroupLayout({ children }) {
  return (
    <ProtectedAdminRoute>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedAdminRoute>
  );
}
