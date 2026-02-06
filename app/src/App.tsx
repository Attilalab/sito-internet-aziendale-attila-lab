import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Projects from './sections/Projects';
import WhyUs from './sections/WhyUs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
