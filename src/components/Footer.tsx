export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-heading text-lg font-bold tracking-wider">
              EKO ARCHITEKT
            </p>
            <p className="text-sm mt-1">Pracownia Architektoniczna</p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="#projekty" className="hover:text-white transition-colors">Projekty</a>
            <a href="#pracownia" className="hover:text-white transition-colors">Pracownia</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </div>

          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} EKO ARCHITEKT. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
