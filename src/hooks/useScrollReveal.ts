"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all reveal variants
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const revealElements = el.querySelectorAll(selectors);
    revealElements.forEach((child) => observer.observe(child));

    const revealClasses = ["reveal", "reveal-left", "reveal-right", "reveal-scale"];
    if (revealClasses.some((c) => el.classList.contains(c))) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
