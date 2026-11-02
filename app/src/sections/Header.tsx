import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Contatti', href: '#contatti' },
];

const SHOP_URL = 'https://shop.attila-lab.net/';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass border-b border-white/5 py-0' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, '#home')}>
            <img
              src="/robot-head.png"
              alt="Attila Lab"
              className="h-12 w-12 object-contain drop-shadow-[0_0_12px_rgba(163,230,53,0.35)] transition-transform duration-300 hover:scale-105"
            />
            <span className="font-display font-semibold text-lg tracking-tight hidden sm:block">
              Attila<span className="text-lime-400">Lab</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-lime-400 to-emerald-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noreferrer"
              title="Accessori gaming, miniature da foto e creazioni su misura"
              className="text-sm text-lime-300 hover:text-lime-200 transition-colors duration-200"
            >
              Shop
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <a
            href="#contatti"
            onClick={(e) => handleNavClick(e, '#contatti')}
            className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-[#04050a] bg-white rounded-full hover:bg-lime-300 transition-all duration-300"
          >
            Parliamo del tuo progetto
            <ArrowUpRight className="w-4 h-4" />
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
        className={`lg:hidden absolute top-full left-0 right-0 glass border-b border-white/5 transition-all duration-300 ${
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
            href={SHOP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-base text-lime-300 hover:text-lime-200 transition-colors py-2"
          >
            Shop
            <span className="mt-1 block text-xs font-normal text-gray-500">
              Accessori gaming, miniature da foto e creazioni su misura
            </span>
          </a>
          <a
            href="#contatti"
            onClick={(e) => handleNavClick(e, '#contatti')}
            className="mt-4 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#04050a] bg-white rounded-full"
          >
            Parliamo del tuo progetto
          </a>
        </nav>
      </div>
    </header>
  );
}
