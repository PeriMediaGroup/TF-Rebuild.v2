import "@triggerfeed/theme/scss/global.scss";
import { tomorrow, blackOpsOne } from "@triggerfeed/theme/next";
import { headers } from "next/headers";
import { Header, Footer } from "@triggerfeed/ui";
import { navLinks } from "../../navLinks";

export const metadata = {
  title: "TriggerFeed Merch",
  description: "TriggerFeed Merch Store"
};

export default async function RootLayout({ children }) {
  const headerList = await headers();
  const pathname = headerList.get("x-invoke-path") || "/";
  return (
    <html lang="en">
      <body className={`${tomorrow.variable}`}>
        <Header links={navLinks} currentPath={pathname} />
        <main className="tf-page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
