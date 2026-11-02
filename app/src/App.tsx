import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import WhyUs from './sections/WhyUs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Marquee from './components/Marquee';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';

const marqueeRowA = [
  'Siti Web',
  'Web App',
  'Gestionali',
  'Mobile App',
  'Integrazioni AI',
];

const marqueeRowB = [
  'E-commerce',
  'Dashboard',
  'Automazioni',
  'UI / UX Design',
  'SEO & Performance',
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#04050a] text-white overflow-x-hidden">
      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <div className="border-y border-white/5 py-5 space-y-5">
          <Marquee items={marqueeRowA} big />
          <Marquee items={marqueeRowB} big reverse />
        </div>
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
