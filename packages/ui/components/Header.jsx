import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header({ links = [] }) {
  return (
    <header className="tf-header">
      <div className="tf-header__inner">
        <Logo />
        <Navigation links={links} />
      </div>
    </header>
  );
}
