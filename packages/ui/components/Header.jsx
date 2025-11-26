import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header({ links = [], currentPath = "/" }) {
  return (
    <header className="tf-header">
      <div className="tf-header__inner">
        <Logo />
        <Navigation links={links} currentPath={currentPath} />
      </div>
    </header>
  );
}
