import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="tf-header">
      <div className="tf-header__inner">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
