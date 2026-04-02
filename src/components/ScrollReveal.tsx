"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollReveal({ children, className = "", stagger = false }: Props) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`${stagger ? "reveal-stagger" : ""} ${className}`}>
      {children}
    </div>
  );
}
