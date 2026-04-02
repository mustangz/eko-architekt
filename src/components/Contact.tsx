"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Dziękujemy za wiadomość! Odezwiemy się wkrótce.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontakt" className="relative py-24 md:py-32 bg-warm-beige section-wave-top">
      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="reveal">
            <p className="text-wood text-sm tracking-[0.2em] uppercase mb-4">Kontakt</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">
              Porozmawiajmy<br />o Twoim projekcie
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-8">
              Masz pomysł na dom lub przebudowę? Chcesz dowiedzieć się więcej
              o budownictwie drewnianym? Napisz — chętnie porozmawiam
              o możliwościach.
            </p>

            <div className="space-y-4 text-charcoal-light">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-wood flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>kontakt@ekoarchitekt.pl</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-wood flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+48 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-wood flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Polska</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-warm-white border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-warm-white border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Wiadomość
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-warm-white border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-hover w-full py-3 bg-wood text-white font-medium rounded-lg hover:bg-wood-dark transition-colors duration-300"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
