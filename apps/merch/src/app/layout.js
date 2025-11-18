import "@triggerfeed/theme/scss/global.scss";
import { tomorrow } from "@triggerfeed/theme";
import { Header, Footer } from "@triggerfeed/ui";
import { navLinks } from "../../navLinks";

export const metadata = {
  title: "TriggerFeed Merch",
  description: "TriggerFeed Merch Store"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tomorrow.variable}`}>
        <Header links={navLinks} />
        <main className="tf-page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
