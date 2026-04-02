"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    const remove = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-charcoal flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Animated line */}
        <div className="loader-line mx-auto mb-8" />

        {/* Logo */}
        <h1 className="loader-title text-3xl md:text-5xl font-heading font-bold text-white tracking-wider">
          EKO ARCHITEKT
        </h1>

        {/* Subtitle */}
        <p className="loader-subtitle text-white/40 text-xs md:text-sm tracking-[0.3em] uppercase mt-3">
          Pracownia Architektoniczna
        </p>
      </div>
    </div>
  );
}
