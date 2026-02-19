import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/EuroPitch_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/about", label: "About" },
    { path: "/competition", label: "Competition" },
    { path: "/trading", label: "Trading" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="nav-container">
        <NavLink to="/" className="brand">
          <img src={logo} alt="EuroPitch Logo" className="logo" />
        </NavLink>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
          href="https://forms.gle/DDvVPmCQdQvLEg6y6"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link mobile-signup"
          onClick={() => setMenuOpen(false)}
        >
          Sign Up
        </a>
        </nav>

        <a
          href="https://forms.gle/DDvVPmCQdQvLEg6y6"
          target="_blank"
          rel="noopener noreferrer"
          className="signup-btn"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
