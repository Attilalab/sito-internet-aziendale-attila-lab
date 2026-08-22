import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    icon: MessageSquare,
    title: 'Ascolto e analisi',
    description:
      "Il lavoro inizia dall'ascolto. Vengono raccolti obiettivi, requisiti, materiali e vincoli. L'analisi del contesto porta a definire che tipo di soluzione è effettivamente adatta al caso specifico.",
  },
  {
    icon: PenTool,
    title: 'Progettazione e wireframe',
    description:
      "Si disegna l'architettura del progetto: funzionalità, flussi utente, struttura delle pagine. Wireframe e prototipi cliccabili consentono di verificare in anticipo il funzionamento complessivo, prima di scrivere codice.",
  },
  {
    icon: Code,
    title: 'Sviluppo e test',
    description:
      "Viene scritto codice pulito e manutenibile, integrando le funzionalità concordate. Il progetto è testato su dispositivi e browser diversi. L'avanzamento è condiviso con demo periodiche, in modo trasparente.",
  },
  {
    icon: Rocket,
    title: 'Lancio e supporto',
    description:
      "L'ultima fase comprende configurazione di hosting, dominio, certificato SSL e messa online. Dopo il lancio è possibile proseguire con correzioni, ottimizzazioni, aggiornamenti e manutenzione continuativa.",
  },
];

export default function Process() {
  return (
    <section id="metodo" className="relative py-24 lg:py-32">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Metodo"
            title="Come"
            highlight="lavoriamo"
            description="Un processo chiaro, articolato in quattro fasi. È sempre evidente a che punto si è arrivati e quale sarà il passo successivo."
          />

          <div className="relative">
            {/* Animated connection line - desktop only */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1.4, ease: EASE }}
              className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px origin-left bg-gradient-to-r from-lime-400/40 via-emerald-500/40 to-lime-400/40"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
                  className="group relative text-center lg:text-left"
                >
                  <div className="relative flex items-center justify-center lg:justify-start mb-6">
                    <div className="relative w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:border-lime-400/40 group-hover:shadow-[0_0_30px_rgba(163, 230, 53,0.2)] group-hover:-translate-y-1 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-lime-400" />
                      <span className="absolute -top-2 -right-2 font-display text-xs font-bold text-[#04050a] bg-lime-400 rounded-full w-6 h-6 flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <span className="hidden lg:block absolute left-20 top-1/2 -translate-y-1/2 font-display font-bold text-6xl text-white/[0.04] select-none pointer-events-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
