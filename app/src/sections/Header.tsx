import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Progetti', href: '#progetti' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0c10]/90 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, '#home')}>
            <img
              src="/logo.jpeg"
              alt="Attila Lab"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <a
            href="#contatti"
            onClick={(e) => handleNavClick(e, '#contatti')}
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium text-[#0a0c10] bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300"
          >
            Parliamo del tuo progetto
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0c10]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col px-4 py-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-base text-gray-300 hover:text-white transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={(e) => handleNavClick(e, '#contatti')}
            className="mt-4 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#0a0c10] bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"
          >
            Parliamo del tuo progetto
          </a>
        </nav>
      </div>
    </header>
  );
}
