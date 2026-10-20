
import React, { useState } from "react";

function Navbar({ theme, isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const t = theme || {
    background: "#0b1020",
    surface: "#151d31",
    text: "#f8fafc",
    accent: "#a78bfa",
    border: "#273149",
  };

  const links = [
    { name: "Home", id: "home", icon: "⌂" },
    { name: "Skills", id: "skills", icon: "✧" },
    { name: "Projects", id: "projects", icon: "▣" },
    { name: "Experience", id: "experience", icon: "◷" },
    { name: "Certificates", id: "certifications", icon: "♧" },
    { name: "Contact", id: "contact", icon: "✉" },
  ];

  const scrollToSection = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <style>{`
        .portfolio-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          box-sizing: border-box;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
        }

        .navbar-inner {
          max-width: 1450px;
          min-height: 72px;
          margin: 0 auto;
          padding: 10px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          box-sizing: border-box;
        }

        .navbar-brand {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          font-size: 27px;
          font-weight: 900;
          letter-spacing: -1.5px;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .navbar-brand:hover {
          transform: translateY(-2px);
        }

        .navbar-brand-dot {
          color: #ec4899;
          font-size: 32px;
          line-height: 1;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1.5vw, 23px);
        }

        .navbar-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 0;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          opacity: 0.82;
          transition:
            color 0.25s ease,
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .navbar-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 3px;
          width: 0;
          height: 2px;
          border-radius: 5px;
          background: linear-gradient(90deg, #a78bfa, #ec4899);
          transition: width 0.25s ease;
        }

        .navbar-link:hover {
          color: ${t.accent} !important;
          opacity: 1;
          transform: translateY(-1px);
        }

        .navbar-link:hover::after {
          width: 100%;
        }

        .navbar-link-icon {
          font-size: 15px;
          color: ${t.accent};
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /* Single circular theme button */
        .theme-button {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid ${t.border};
          background: ${t.surface};
          color: ${isDark ? "#fbbf24" : "#7c3aed"};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          cursor: pointer;
          flex-shrink: 0;
          box-shadow: ${
            isDark
              ? "0 0 14px rgba(167,139,250,0.15)"
              : "0 0 14px rgba(124,58,237,0.12)"
          };
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .theme-button:hover {
          transform: rotate(15deg) scale(1.08);
          box-shadow: 0 0 18px rgba(167, 139, 250, 0.3);
        }

        .theme-button:focus-visible,
        .menu-toggle:focus-visible,
        .navbar-link:focus-visible,
        .navbar-brand:focus-visible {
          outline: 2px solid ${t.accent};
          outline-offset: 4px;
        }

        .menu-toggle {
          display: none;
          width: 38px;
          height: 38px;
          border: 1px solid ${t.border};
          border-radius: 11px;
          background: ${t.surface};
          font-size: 20px;
          cursor: pointer;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .menu-toggle:hover {
          transform: scale(1.04);
          border-color: ${t.accent};
        }

        .portfolio-section {
          width: 100%;
          box-sizing: border-box;
          scroll-margin-top: 85px;
          padding-top: 30px;
          padding-bottom: 30px;
        }

        .home-section {
          padding-bottom: 10px;
        }

        .skills-section {
          padding-top: 10px;
        }

        @media (max-width: 1050px) {
          .navbar-inner {
            gap: 14px;
            padding-left: 3%;
            padding-right: 3%;
          }

          .navbar-links {
            gap: 12px;
          }

          .navbar-link {
            font-size: 12.5px;
          }

          .navbar-link-icon {
            display: none;
          }
        }

        @media (max-width: 900px) {
          .navbar-inner {
            min-height: 66px;
            gap: 12px;
          }

          .navbar-brand {
            font-size: 25px;
          }

          .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .navbar-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            padding: 12px 5% 18px;
            background: ${t.background};
            border-bottom: 1px solid ${t.border};
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.12);
            flex-direction: column;
            align-items: stretch;
            gap: 2px;
          }

          .navbar-links.menu-open {
            display: flex;
            animation: navbarDropdown 0.22s ease;
          }

          .navbar-link {
            padding: 13px 12px;
            border-radius: 10px;
            border-bottom: none;
            font-size: 14px;
            gap: 10px;
          }

          .navbar-link-icon {
            display: inline-block;
            width: 20px;
            text-align: center;
          }

          .navbar-link:hover {
            background: ${t.surface};
          }

          .navbar-link::after {
            display: none;
          }
        }

        @keyframes navbarDropdown {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .navbar-inner {
            min-height: 62px;
            padding: 9px 4%;
          }

          .navbar-brand {
            font-size: 23px;
          }

          .navbar-actions {
            gap: 9px;
          }

          .theme-button {
            width: 38px;
            height: 38px;
            font-size: 20px;
          }

          .portfolio-section {
            padding: 22px 16px;
          }

          .home-section {
            padding-bottom: 6px;
          }

          .skills-section {
            padding-top: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-brand,
          .navbar-link,
          .navbar-link::after,
          .theme-button,
          .menu-toggle {
            transition: none;
          }
        }
      `}</style>

      <nav
        className="portfolio-navbar"
        style={{
          background: isDark
            ? "rgba(11, 16, 32, 0.94)"
            : "rgba(255, 255, 255, 0.94)",
          color: t.text,
          borderBottom: `1px solid ${t.border}`,
        }}
      >
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-brand"
            style={{ color: t.accent }}
            onClick={(event) => scrollToSection(event, "home")}
          >
            HJ<span className="navbar-brand-dot">.</span>
          </a>

          <div
            className={`navbar-links ${menuOpen ? "menu-open" : ""}`}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="navbar-link"
                style={{ color: t.text }}
                onClick={(event) => scrollToSection(event, link.id)}
              >
                <span className="navbar-link-icon">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            {/* Single circular sun/moon button */}
            <button
              type="button"
              className="theme-button"
              onClick={() => setIsDark((previous) => !previous)}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? "☾" : "☀"}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              style={{
                color: t.text,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
