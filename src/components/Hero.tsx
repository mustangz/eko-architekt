"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax image */}
      <div
        className="absolute inset-0 hero-entrance"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <Image
          src="/images/eko-arch_1.jpeg"
          alt="Nowoczesny dom w konstrukcji drewnianej"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <p className="hero-tagline text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-white/80">
          Pracownia Architektoniczna
        </p>
        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6">
          EKO ARCHITEKT
        </h1>
        <p className="hero-subtitle text-lg md:text-xl max-w-2xl text-white/90 leading-relaxed">
          Projektujemy domy w harmonii z naturą. Konstrukcja drewniana, ekologiczne materiały, ponadczasowa architektura.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="hero-cta absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#pracownia" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Odkryj</span>
          <svg
            className="w-6 h-6 animate-bounce-slow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
