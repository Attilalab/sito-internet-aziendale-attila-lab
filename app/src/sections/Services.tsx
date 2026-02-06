import { Globe, LayoutDashboard, Bot, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Siti web e landing page',
    description:
      'Progettiamo e sviluppiamo siti web moderni, veloci e ottimizzati. Dalle landing page mirate ai siti vetrina completi: curiamo il design responsivo, lo sviluppo frontend e il supporto alla pubblicazione. Ogni sito è pensato per rappresentare al meglio la tua attività e convertire i visitatori.',
    gradient: 'from-cyan-400 to-cyan-500',
    bgGradient: 'from-cyan-500/10 to-cyan-500/5',
  },
  {
    icon: LayoutDashboard,
    title: 'Web-app e dashboard su misura',
    description:
      'Costruiamo strumenti online personalizzati: pannelli di controllo, aree riservate, gestionali leggeri e interfacce per la visualizzazione dati. Tutto è progettato sulle tue esigenze specifiche, senza forzare template preconfezionati che non si adattano al tuo flusso di lavoro.',
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-500/10 to-purple-500/5',
  },
  {
    icon: Bot,
    title: 'Integrazioni AI e automazioni',
    description:
      'Integriamo l\'intelligenza artificiale nei tuoi progetti dove ha davvero senso: chatbot intelligenti, analisi automatizzate di dati, piccoli motori di raccomandazione e workflow automatizzati. Nessuna buzzword, solo soluzioni concrete che migliorano l\'esperienza utente e ottimizzano i processi.',
    gradient: 'from-cyan-400 to-purple-500',
    bgGradient: 'from-cyan-500/10 to-purple-500/5',
  },
  {
    icon: Lightbulb,
    title: 'Consulenza e prototipi digitali',
    description:
      'Hai un\'idea ma non sai da dove partire? Ti aiutiamo a definirla. Analizziamo il tuo progetto, definiamo le funzionalità essenziali, creiamo prototipi cliccabili e ti forniamo una roadmap tecnica chiara. Così puoi valutare il percorso prima di impegnarti nello sviluppo completo.',
    gradient: 'from-purple-500 to-cyan-400',
    bgGradient: 'from-purple-500/10 to-cyan-500/5',
  },
];

export default function Services() {
  return (
    <section id="servizi" className="relative py-24 lg:py-32 bg-[#0a0c10]">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-cyan-400 font-medium tracking-wider uppercase mb-4 block">
              Servizi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Cosa possiamo fare per <span className="gradient-text">te</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Servizi digitali concreti, senza fronzoli. Ogni progetto è sviluppato 
              su misura per rispondere alle tue esigenze specifiche.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
