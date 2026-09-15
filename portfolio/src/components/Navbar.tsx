import { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Menu, X, Sparkles, Send } from "lucide-react";

interface NavItem {
  to: string;
  label: string;
}

const NAV_LINKS: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#195342]/95 backdrop-blur-md shadow-md py-3"
            : "bg-[#195342]/90 backdrop-blur-sm py-4"
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 border border-[#a3d4c5]/40 flex items-center justify-center text-[#a3d4c5] group-hover:bg-[#a3d4c5]/20 transition-colors">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-light tracking-wide text-white leading-tight">
                Nikole Dixon
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#a3d4c5] uppercase -mt-0.5">
                Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `font-mono text-xs tracking-widest uppercase transition-all duration-200 py-1 border-b-2 ${
                    isActive
                      ? "text-white border-[#a3d4c5] font-semibold"
                      : "text-white/70 border-transparent hover:text-white hover:border-white/30"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Quick Contact CTA */}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs tracking-wider uppercase transition-all duration-200 hover:scale-[1.02]"
            >
              <Send className="w-3 h-3 text-[#a3d4c5]" />
              <span>Get in Touch</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded text-white hover:text-[#a3d4c5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#a3d4c5]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[65px] left-0 w-full z-40 bg-[#195342] border-b border-white/10 shadow-2xl transition-all duration-300 md:hidden overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `font-mono text-sm tracking-widest uppercase py-2 transition-colors border-l-2 pl-3 ${
                  isActive
                    ? "text-[#a3d4c5] border-[#a3d4c5] font-semibold bg-white/5"
                    : "text-white/80 border-transparent hover:text-white hover:border-white/40"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="btn-primary w-full mt-2 text-center"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}

