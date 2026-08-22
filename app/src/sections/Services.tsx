import { Globe, LayoutDashboard, Bot, Lightbulb, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: Globe,
    title: 'Siti web e landing page',
    description:
      "Progettiamo e sviluppiamo siti web moderni, veloci e ottimizzati. Dalle landing page mirate ai siti vetrina completi: curiamo design responsivo, sviluppo frontend e supporto alla pubblicazione. Ogni sito è pensato per rappresentare al meglio l'attività e trasformare i visitatori in contatti reali.",
    tags: ['SEO-ready', 'Responsive', 'Performance'],
  },
  {
    icon: LayoutDashboard,
    title: 'Web-app e gestionali su misura',
    description:
      'Realizziamo strumenti online personalizzati: pannelli di controllo, aree riservate, gestionali operativi e interfacce per la visualizzazione dei dati. Le funzionalità vengono definite sui processi esistenti, senza forzare modelli standard.',
    tags: ['Dashboard', 'Gestionali', 'Dati in tempo reale'],
  },
  {
    icon: Bot,
    title: 'Integrazioni AI e automazioni',
    description:
      "L'intelligenza artificiale viene integrata solo dove genera un beneficio misurabile: chatbot intelligenti, analisi automatizzate dei dati, motori di raccomandazione e workflow automatizzati. L'obiettivo è semplificare il lavoro e migliorare le performance del progetto.",
    tags: ['Machine Learning', 'Automazioni', 'Analisi dati'],
  },
  {
    icon: Lightbulb,
    title: 'Consulenza e prototipi digitali',
    description:
      "Quando l'idea è ancora da definire, il primo passo è l'analisi. Vengono chiariti obiettivi, contesto e vincoli, individuate le funzionalità essenziali e realizzati prototipi cliccabili. Una roadmap tecnica precisa permette di valutare il progetto prima di impegnarsi nello sviluppo completo.",
    tags: ['Analisi', 'Wireframe', 'Roadmap'],
  },
];

function handleSpotlight(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--x', `${e.clientX - rect.left}px`);
  el.style.setProperty('--y', `${e.clientY - rect.top}px`);
}

export default function Services() {
  return (
    <section id="servizi" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] max-md:blur-[60px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Servizi"
            title="Cosa possiamo fare"
            highlight="per te"
            description="Servizi digitali progettati in modo mirato. Ogni soluzione è sviluppata a partire da esigenze specifiche e obiettivi misurabili."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: EASE }}
                onMouseMove={handleSpotlight}
                className="spotlight-card group relative h-full p-8 rounded-3xl glass border border-white/5 hover:border-white/15 transition-colors duration-500 overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-400/20 to-emerald-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <service.icon className="w-7 h-7 text-lime-300" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-400 bg-white/5 border border-white/5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
