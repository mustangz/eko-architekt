import Image from "next/image";

const projects = [
  { src: "/images/eko-arch_1.jpeg", title: "Dom nowoczesny z garażem" },
  { src: "/images/eko-arch_3.jpeg", title: "Rezydencja w stylu góralskim" },
  { src: "/images/eko-arch_5.jpeg", title: "Dom w otoczeniu zieleni" },
  { src: "/images/eko-arch_11.jpeg", title: "Willa z przeszkleniami" },
  { src: "/images/eko-arch_16.jpeg", title: "Dom z poddaszem" },
  { src: "/images/eko-arch_20.jpeg", title: "Nowoczesna rezydencja" },
  { src: "/images/eko-arch_22.jpeg", title: "Dom parterowy" },
  { src: "/images/eko-arch_27.jpeg", title: "Zabudowa bliźniacza" },
  { src: "/images/eko-arch_19.jpeg", title: "Dom jednorodzinny" },
];

export default function Projects() {
  return (
    <section id="projekty" className="py-24 md:py-32 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-wood text-sm tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Wybrane projekty
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-heading text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
