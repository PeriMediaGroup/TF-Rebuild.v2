import "@triggerfeed/theme/scss/global.scss";
import { tomorrow, blackOpsOne } from "@triggerfeed/theme";
import { Header, Footer } from "@triggerfeed/ui";
import { navLinks } from "../../navLinks";
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
        <Header links={navLinks} />
        <main className="tf-page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
