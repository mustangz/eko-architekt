"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Lightbox from "./Lightbox";

const projects = [
  { src: "/images/eko-arch_1.jpeg", title: "Dom nowoczesny z garażem", category: "drewno" },
  { src: "/images/eko-arch_3.jpeg", title: "Rezydencja w stylu góralskim", category: "drewno" },
  { src: "/images/eko-arch_5.jpeg", title: "Dom w otoczeniu zieleni", category: "drewno" },
  { src: "/images/eko-arch_11.jpeg", title: "Willa z przeszkleniami", category: "murowane" },
  { src: "/images/eko-arch_16.jpeg", title: "Dom z poddaszem", category: "murowane" },
  { src: "/images/eko-arch_20.jpeg", title: "Nowoczesna rezydencja", category: "murowane" },
  { src: "/images/eko-arch_22.jpeg", title: "Dom parterowy", category: "przebudowy" },
  { src: "/images/eko-arch_27.jpeg", title: "Zabudowa bliźniacza", category: "drewno" },
  { src: "/images/eko-arch_19.jpeg", title: "Dom jednorodzinny", category: "przebudowy" },
];

const categories = [
  { key: "all", label: "Wszystkie" },
  { key: "drewno", label: "Drewno" },
  { key: "murowane", label: "Murowane" },
  { key: "przebudowy", label: "Przebudowy" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useScrollReveal();

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projekty" className="relative py-24 md:py-32 bg-warm-beige section-wave-top section-wave-bottom">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-wood text-sm tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Wybrane projekty
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-wood text-white shadow-md"
                  : "bg-warm-white text-charcoal-light hover:bg-wood/10 border border-wood/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {filtered.map((project, i) => (
            <div
              key={project.src}
              className="reveal group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer card-lift"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-heading text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs mt-1 uppercase tracking-wider">
                  {project.category === "drewno" ? "Konstrukcja drewniana" : project.category === "murowane" ? "Budynek murowany" : "Przebudowa"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filtered.length)}
        />
      )}
    </section>
  );
}
