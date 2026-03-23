import { Link, NavLink } from "react-router";

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium ${isActive ? "text-[#632EE3] underline underline-offset-4" : "text-[#001931]/85"}`;

const Header = () => {
  return (
    <header className="border-b border-[#e9e9e9] bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-r from-[#632EE3] to-[#9f62f2] text-white">
            H
          </div>
          <span className="font-bold text-[#001931]">HERO.IO</span>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>
            home
          </NavLink>
          <NavLink to="/apps" className={navLinkClass}>
            apps
          </NavLink>
          <NavLink to="/installation" className={navLinkClass}>
            installation
          </NavLink>
        </nav>

        <a
          href="https://github.com/akhlakur"
          target="_blank"
          rel="noreferrer"
          className="rounded bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-4 py-2 text-sm font-semibold text-white"
        >
          Contribute
        </a>
      </div>
    </header>
  );
};

export default Header;
