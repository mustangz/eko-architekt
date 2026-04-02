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
    <section id="szkolenia" className="py-24 md:py-32 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-wood text-sm tracking-[0.2em] uppercase mb-4">Edukacja</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">
              Szkolenia i warsztaty
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-8">
              Dzielę się wiedzą i doświadczeniem z branży budownictwa drewnianego.
              Prowadzę szkolenia dostosowane do potrzeb różnych grup odbiorców
              — od praktyków po teoretyków.
            </p>
          </div>

          <div className="space-y-6">
            {audiences.map((item, i) => (
              <div
                key={i}
                className="bg-warm-white rounded-lg p-6 border-l-4 border-wood hover:shadow-md transition-shadow duration-300"
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
        </div>
      </div>
    </section>
  );
}
