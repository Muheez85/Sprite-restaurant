import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Gallery",
    "Contact",
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          {/* <span className="logo-icon"></span> */}

          <div className="logo-text">
            <span className="logo-name">SPRITE</span>
            <span className="logo-subtitle">FINE DINING</span>
          </div>
        </a>


        {/* Desktop Navigation */}
        <nav className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
          {navLinks.map((link, index) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              className={`nav-link ${index === 0 ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          {/* Mobile reservation button */}
          <a
            href="#reservations"
            className="nav-book mobile-book"
            onClick={() => setMenuOpen(false)}
          >
            Book a Table
          </a>
        </nav>


        {/* Desktop Book Button */}
        <a href="#reservations" className="nav-book desktop-book">
          Book a Table
        </a>


        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "menu-toggle-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;