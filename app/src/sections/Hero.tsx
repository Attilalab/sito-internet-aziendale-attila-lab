import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[#0a0c10]">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Digital Studio & AI</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 leading-tight">
            Attila Lab
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            Progettiamo e costruiamo siti web, web-app e soluzioni su misura, 
            integrando dove serve l'intelligenza artificiale.
          </p>
          
          <p className="text-base text-gray-500 mb-10 max-w-xl mx-auto">
            Dal primo wireframe alla messa online, seguiamo tutto il ciclo del progetto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#contatti"
              onClick={handleCTAClick}
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0a0c10] bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Parliamo del tuo progetto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servizi"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#servizi')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Scopri i servizi
            </a>
          </div>

          {/* Trust indicator */}
          <p className="text-sm text-gray-500">
            Rispondiamo in poche ore
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0c10] to-transparent" />
    </section>
  );
}
