"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#pracownia", label: "Pracownia" },
  { href: "#projekty", label: "Projekty" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#szkolenia", label: "Szkolenia" },
  { href: "#wspolprace", label: "Współprace" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className={`text-xl font-heading font-bold tracking-wider transition-colors ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
        >
          EKO ARCHITEKT
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-wood ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-warm-white/95 backdrop-blur-sm border-t border-warm-beige">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-charcoal text-sm font-medium tracking-wide hover:text-wood transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
