import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="pracownia" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <ScrollReveal>
            <div className="reveal">
              <p className="text-wood text-sm tracking-[0.2em] uppercase mb-4">O Pracowni</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">
                Architektura z szacunkiem<br />dla natury i tradycji
              </h2>
              <div className="space-y-5 text-charcoal-light leading-relaxed">
                <p>
                  Specjalizuję się w projektowaniu budynków w konstrukcji drewnianej
                  — od nowoczesnych domów jednorodzinnych po obiekty inspirowane
                  tradycyjną architekturą regionalną.
                </p>
                <p>
                  Realizuję również projekty murowane oraz przebudowy istniejących
                  budynków, w tym obiektów zabytkowych. Każdy projekt traktuję
                  indywidualnie, łącząc funkcjonalność z estetyką i poszanowaniem
                  otoczenia.
                </p>
                <p>
                  Wierzę, że dobra architektura to taka, która służy ludziom
                  i współgra z krajobrazem — nie dominuje, lecz dopełnia.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Photo placeholder */}
          <ScrollReveal>
            <div className="reveal relative">
              <div className="aspect-[3/4] bg-warm-beige rounded-lg flex items-center justify-center">
                <div className="text-center text-charcoal-light/50 px-8">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm">Zdjęcie z sesji biznesowej</p>
                  <p className="text-xs mt-1">(wkrótce)</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-wood/20 rounded-lg -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
