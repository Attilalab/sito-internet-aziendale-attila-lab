import { User, Code2, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="chi-siamo" className="relative py-24 lg:py-32 bg-[#0a0c10]">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-sm text-cyan-400 font-medium tracking-wider uppercase mb-4 block">
              Chi Siamo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Chi è <span className="gradient-text">Attila Lab</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Attila Lab è lo studio digitale di{' '}
                <span className="text-white font-medium">Loredana Guida</span>.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Sviluppo web, UI/UX e soluzioni AI per aziende e professionisti. 
                Esperienza concreta su progetti complessi: dashboard analitiche, 
                motori di elaborazione dati e integrazioni su misura.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Metodo diretto: un unico referente, pochi progetti contemporanei, 
                massima attenzione ai dettagli. Senza stratificazioni aziendali 
                né fronzoli di marketing.
              </p>
            </div>

            {/* Right Column - Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-medium mb-2">Ditta Individuale</h3>
                <p className="text-sm text-gray-500">
                  Loredana Guida, un unico referente diretto per ogni progetto
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-medium mb-2">Sviluppo Web</h3>
                <p className="text-sm text-gray-500">
                  Competenze tecniche solide in frontend, backend e integrazioni
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-medium mb-2">AI & Automazione</h3>
                <p className="text-sm text-gray-500">
                  Integrazione intelligente dell'IA dove ha senso per il progetto
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-medium mb-2">Qualità Prima di Tutto</h3>
                <p className="text-sm text-gray-500">
                  Pochi progetti, massima attenzione ai dettagli e al cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
