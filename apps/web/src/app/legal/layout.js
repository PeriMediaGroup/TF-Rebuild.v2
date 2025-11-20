import LegalSidebar from "./LegalSidebar";

export default function LegalLayout({ children }) {
  return (
    <div className="tf-page__content legal-layout">
      <aside className="legal-sidebar">
        <LegalSidebar />
      </aside>

      <main className="legal-content">{children}</main>
    </div>
  );
}
