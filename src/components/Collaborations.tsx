import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Collaborations() {
  return (
    <section id="wspolprace" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16 reveal">
            <p className="text-wood text-sm tracking-[0.2em] uppercase mb-4">Partnerzy</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Współprace
            </h2>
          </div>
        </ScrollReveal>

        {/* Domy ze Słomy */}
        <ScrollReveal>
          <div className="reveal bg-warm-beige rounded-2xl overflow-hidden card-lift">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                  Domy ze Słomy
                </h3>
                <p className="text-charcoal-light leading-relaxed mb-6">
                  Współpracuję z marką Domy ze Słomy, promując ekologiczne
                  budownictwo z wykorzystaniem naturalnych materiałów izolacyjnych.
                  Słoma to doskonały izolator termiczny, który w połączeniu
                  z konstrukcją drewnianą tworzy zdrowy i energooszczędny dom.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  Projekty łączą tradycyjne rzemiosło z nowoczesnym podejściem
                  do architektury — udowadniając, że ekologia i estetyka
                  idą w parze.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/sloma-eko_1.jpeg"
                    alt="Dom ze słomy — wizualizacja"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/sloma-eko_2.jpeg"
                    alt="Dom ze słomy — wizualizacja"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* GTF */}
        <ScrollReveal>
          <div className="reveal bg-warm-beige rounded-2xl overflow-hidden mt-8 card-lift">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                GTF
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Zaprzyjaźniona firma specjalizująca się w płytach fundamentowych.
                Solidne fundamenty to podstawa każdego domu — dlatego współpracujemy
                z GTF, łącząc sprawdzoną technologię fundamentów z naszymi projektami
                w konstrukcji drewnianej i murowanej.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
