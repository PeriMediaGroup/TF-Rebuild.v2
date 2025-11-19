/* app/layout.js */

import "@triggerfeed/theme/scss/global.scss";
import { tomorrow, blackOpsOne } from "@triggerfeed/theme";
import { AuthProvider } from "../auth/AuthContext";

export const metadata = {
  title: "TriggerFeed Admin",
  description: "TriggerFeed Admin Dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tomorrow.variable} ${blackOpsOne.variable}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
