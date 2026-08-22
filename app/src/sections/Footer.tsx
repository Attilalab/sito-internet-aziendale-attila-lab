import { ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Progetti', href: '#progetti' },
  { label: 'Contatti', href: '#contatti' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Note legali', href: '/note-legali' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-8 left-1/2 -translate-x-1/2 font-display font-bold text-[18vw] leading-none text-outline opacity-40 whitespace-nowrap"
      >
        ATTILA LAB
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo and Info */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <img
                  src="/logo.jpeg"
                  alt="Attila Lab"
                  className="h-12 w-auto rounded-lg drop-shadow-[0_0_12px_rgba(163, 230, 53,0.4)]"
                />
                <div>
                  <p className="font-display font-semibold text-white">
                    Attila<span className="text-lime-400">Lab</span>
                  </p>
                  <p className="text-xs text-gray-500">Digital Studio & AI</p>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                Studio digitale indipendente
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-lime-500/30 transition-colors"
              aria-label="Torna in cima"
            >
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                Torna su
              </span>
              <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-lime-400 transition-colors" />
            </button>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Attila Lab. Tutti i diritti riservati.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-gray-600">
              <span>P.IVA: 05453570755</span>
              <span className="hidden sm:inline">|</span>
              <span>Via Trento 69, 73010 Surbo (LE)</span>
            </div>
          </div>

          {/* Legal links */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
