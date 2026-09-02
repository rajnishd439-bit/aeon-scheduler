import { useState } from "react";

const navItems = [
  { label: "Home", href: "home" },
  { label: "How it Works", href: "how-it-works" },
  { label: "Features", href: "features" },
  { label: "Pricing", href: "pricing" },
  { label: "FAQs", href: "faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (!section) {
      console.log(`Section not found: ${id}`);
      return;
    }

    const navbar = document.querySelector(".site-navbar");
    const navbarHeight = navbar?.offsetHeight || 108;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <header className="site-navbar">
      <div className="site-container navbar-inner">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          aria-label="Aeon Scheduler Home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          <img
            src="/icons/aeon-scheduler-logo.svg"
            alt="Aeon Scheduler"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="navbar-nav"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.href}`}
              className="navbar-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="navbar-actions">
          <a
            href="#login"
            className="ds-button ds-button-outline"
          >
            Log in
          </a>

          <a
            href="#contact"
            className="ds-button ds-button-primary"
          >
            Contact Us
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`navbar-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`navbar-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav
          className="navbar-mobile-nav"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.href}`}
              className="navbar-mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-mobile-actions">
          <a
            href="#login"
            className="ds-button ds-button-outline"
            onClick={() => setMenuOpen(false)}
          >
            Log in
          </a>

          <a
            href="#contact"
            className="ds-button ds-button-primary"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}