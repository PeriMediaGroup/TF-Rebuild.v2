export default function LegalLayout({ children }) {
    return (
        <div className="tf-page__content legal-layout">
            <aside className="legal-sidebar">
                <nav>
                    <ul>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#cookies">Cookie Policy</a></li>
                        <li><a href="#csae">CSAE Policy</a></li>
                        <li><a href="#abuse">Report Abuse</a></li>
                    </ul>
                </nav>
            </aside>

            <main className="legal-content">
                {children}
            </main>
        </div>
    );
}
