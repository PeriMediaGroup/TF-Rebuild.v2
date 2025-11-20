import "@triggerfeed/theme/scss/global.scss";
import { tomorrow, blackOpsOne } from "@triggerfeed/theme/next";
import { Header, Footer } from "@triggerfeed/ui";
import NavWrapper from "./NavWrapper";
import "../styles/pages.scss";
import "../styles/sections/legal.scss";

export const metadata = {
  title: "TriggerFeed",
  description: "TriggerFeed - 2A your way!  Post with the safety off."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tomorrow.variable} ${blackOpsOne.variable}`}>
        <NavWrapper />
        <main className="tf-page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
