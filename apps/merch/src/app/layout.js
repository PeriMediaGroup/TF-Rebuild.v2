import "@triggerfeed/theme/scss/global.scss";
import { Header, Footer } from "@triggerfeed/ui";

export const metadata = {
  title: "TriggerFeed Merch",
  description: "TriggerFeed Merch Store"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
