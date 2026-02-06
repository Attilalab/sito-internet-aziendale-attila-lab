import { ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Progetti', href: '#progetti' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 bg-[#0a0c10] border-t border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo and Info */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <img
                  src="/logo.jpeg"
                  alt="Attila Lab"
                  className="h-14 w-auto rounded-lg drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-300 hover:scale-105"
                />
              </div>
              <p className="text-sm text-gray-500">
                Digital Studio & AI
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Ditta Individuale di Loredana Guida
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
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-cyan-500/30 transition-colors"
              aria-label="Torna in cima"
            >
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                Torna su
              </span>
              <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </button>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Attila Lab. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-600">
              <span>P.IVA: [in attesa di attribuzione]</span>
              <a 
                href="mailto:attila.lab@hotmail.com"
                className="hover:text-gray-400 transition-colors"
              >
                attila.lab@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
