import "@triggerfeed/theme/scss/global.scss";
import { tomorrow, blackOpsOne } from "@triggerfeed/theme/next";
import { headers } from "next/headers";
import { Header, Footer } from "@triggerfeed/ui";
import { navLinks } from "../../navLinks";
import "../styles/pages.scss";
import "../styles/sections/legal.scss";

export const metadata = {
  title: "TriggerFeed",
  description: "TriggerFeed - 2A your way!  Post with the safety off."
};

export default async function RootLayout({ children }) {
  const headerList = await headers();
  const pathname = headerList.get("x-invoke-path") || "/";
  return (
    <html lang="en">
      <body className={`${tomorrow.variable} ${blackOpsOne.variable}`}>
        <Header links={navLinks} currentPath={pathname} />
        <main className="tf-page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
