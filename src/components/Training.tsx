import ScrollReveal from "./ScrollReveal";

const audiences = [
  {
    title: "Wykonawcy",
    description: "Szkolenia z technologii budowy domów drewnianych — od fundamentów po dach.",
  },
  {
    title: "Projektanci",
    description: "Warsztaty projektowe z zakresu konstrukcji drewnianej i ekologicznego budownictwa.",
  },
  {
    title: "Producenci",
    description: "Konsultacje i szkolenia dla producentów materiałów budowlanych i prefabrykatów.",
  },
];

export default function Training() {
  return (
    <section id="szkolenia" className="relative py-24 md:py-32 bg-warm-beige section-wave-top section-wave-bottom">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="reveal">
              <p className="text-wood text-sm tracking-[0.2em] uppercase mb-4">Edukacja</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">
                Szkolenia i warsztaty
              </h2>
              <p className="text-charcoal-light leading-relaxed">
                Dzielę się wiedzą i doświadczeniem z branży budownictwa drewnianego.
                Prowadzę szkolenia dostosowane do potrzeb różnych grup odbiorców
                — od praktyków po teoretyków.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="space-y-6">
              {audiences.map((item, i) => (
                <div
                  key={i}
                  className="reveal card-lift bg-warm-white rounded-lg p-6 border-l-4 border-wood"
                >
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
