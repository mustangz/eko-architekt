import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Projekty w drewnie",
    description:
      "Nowoczesne domy w konstrukcji drewnianej — szkieletowej, CLT i słupowo-ryglowej. Energooszczędne, ekologiczne i szybkie w realizacji.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Projekty murowane",
    description:
      "Klasyczne budownictwo murowane — solidne, trwałe i sprawdzone. Domy jednorodzinne, bliźniaki i obiekty wielorodzinne.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Przebudowy i zabytki",
    description:
      "Przebudowy, rozbudowy i adaptacje istniejących budynków, w tym obiektów zabytkowych. Szacunek dla historii z myślą o przyszłości.",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16 reveal">
            <p className="text-wood text-sm tracking-[0.2em] uppercase mb-4">Oferta</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Zakres usług
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="reveal card-lift bg-warm-beige rounded-lg p-8 text-center"
              >
                <div className="text-wood mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
