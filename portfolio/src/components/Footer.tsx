import { Link } from "react-router-dom";
import { ExternalLink, Mail, Phone, Palette, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { CONTACT_DATA } from "../data/contact";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#10382c] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle art mesh accent in background */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-serif text-3xl font-light tracking-wide text-white">
              Nikole Dixon
            </h2>
            <p className="font-serif italic text-white/70 text-base max-w-md">
              "We define the lines that we color within."
            </p>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-md">
              Software Developer uniting structural engineering rigor, data analytics, and contemporary visual art. Building purposeful digital tools with Python, C#, SQL, and modern web frameworks.
            </p>
          </div>

          {/* Col 2: Navigation Anchors */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs tracking-widest text-[#a3d4c5] uppercase font-medium">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-white/70 font-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home / Overview</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About & Art Practice</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-white transition-colors">Resume & Education</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-white transition-colors">Skills & Tech Stack</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Form</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Links */}
          <div className="md:col-span-4 space-y-4">
            <p className="font-mono text-xs tracking-widest text-[#a3d4c5] uppercase font-medium">
              Connect Directly
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${CONTACT_DATA.email}?subject=Website%20Inquiry`}
                className="inline-flex items-center gap-2.5 text-white/80 hover:text-[#a3d4c5] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#a3d4c5]" />
                <span className="font-mono text-xs">{CONTACT_DATA.email}</span>
              </a>
              <span className="inline-flex items-center gap-2.5 text-white/80">
                <Phone className="w-4 h-4 text-[#a3d4c5]" />
                <span className="font-mono text-xs">{CONTACT_DATA.phone}</span>
              </span>
              <a
                href={CONTACT_DATA.artworkSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white/80 hover:text-[#a3d4c5] transition-colors"
              >
                <Palette className="w-4 h-4 text-[#a3d4c5]" />
                <span className="font-mono text-xs">Fine Art Portfolio (njdartwork.com)</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DATA.artworkSite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all"
                aria-label="Fine Art Website"
              >
                <Palette className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© {new Date().getFullYear()} Nikole Dixon. All rights reserved. Handcrafted with React & Tailwind.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#a3d4c5] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

