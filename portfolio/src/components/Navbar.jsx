import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/skills", label: "Skills" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200,
        background: scrolled ? "rgba(25,83,66,0.98)" : "rgba(25,83,66,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        height: "58px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2rem",
        transition: "background 0.3s",
      }}>
        <NavLink to="/" style={{
          fontFamily: "var(--serif)", color: "#fff",
          fontSize: "1.25rem", fontWeight: 300, letterSpacing: "0.04em",
        }}>
          Nikole Dixon
        </NavLink>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-desktop">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} style={({ isActive }) => ({
              fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.18em",
              textTransform: "uppercase", color: isActive ? "#fff" : "rgba(255,255,255,0.65)",
              borderBottom: isActive ? "1.5px solid #a3d4c5" : "1.5px solid transparent",
              paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s",
            })}>
              {label}
            </NavLink>
          ))}
          <a href="mailto:njdartwork@outlook.com?subject=Website%20Inquiry"
            style={{
              fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#fff", background: "rgba(255,255,255,0.12)",
              padding: "0.38rem 1.1rem", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.2)",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            Contact
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: "none", background: "none", border: "none",
            color: "#fff", fontSize: "1.3rem", cursor: "pointer",
          }}
          className="nav-hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", top: "58px", left: 0, width: "100%",
        background: "#195342", zIndex: 199,
        padding: menuOpen ? "1.5rem 2rem" : "0 2rem",
        maxHeight: menuOpen ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.35s ease, padding 0.35s ease",
        borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} style={({ isActive }) => ({
              fontFamily: "var(--mono)", fontSize: "0.85rem", letterSpacing: "0.15em",
              textTransform: "uppercase", color: isActive ? "#fff" : "rgba(255,255,255,0.65)",
            })}>
              {label}
            </NavLink>
          ))}
          <a href="mailto:njdartwork@outlook.com?subject=Website%20Inquiry"
            className="btn-primary" style={{ textAlign: "center", marginTop: "0.5rem" }}>
            Contact
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
