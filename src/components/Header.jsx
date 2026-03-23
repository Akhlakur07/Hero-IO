import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const navLinkClass = ({ isActive }) =>
  `text-base font-medium ${isActive ? "text-[#632EE3] underline underline-offset-4" : "text-[#001931]/85"}`;

const Header = () => {
  return (
    <header className="border-b border-[#e9e9e9] bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Hero IO logo" className="size-9 object-contain" />
          <span className="text-sm font-bold text-[#001931] md:text-base">HERO.IO</span>
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
          href="#"
          target="_blank"
          rel="noreferrer"
          className="rounded bg-linear-to-r from-[#632EE3] to-[#9f62f2] px-4 py-2 text-sm font-semibold text-white"
        >
          Contribute
        </a>
      </div>
    </header>
  );
};

export default Header;
