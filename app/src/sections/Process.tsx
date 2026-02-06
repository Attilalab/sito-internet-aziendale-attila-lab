import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Ascolto e analisi',
    description:
      "Il lavoro inizia dall'ascolto. Vengono raccolti obiettivi, requisiti, materiali e vincoli. L'analisi del contesto porta a definire che tipo di soluzione è effettivamente adatta al caso specifico.",
    color: 'cyan',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Progettazione e wireframe',
    description:
      "Si disegna l'architettura del progetto: funzionalità, flussi utente, struttura delle pagine. Wireframe e prototipi cliccabili consentono di verificare in anticipo il funzionamento complessivo, prima di scrivere codice.",
    color: 'purple',
  },
  {
    number: '03',
    icon: Code,
    title: 'Sviluppo e test',
    description:
      "Viene scritto codice pulito e manutenibile, integrando le funzionalità concordate. Il progetto è testato su dispositivi e browser diversi. L'avanzamento è condiviso con demo periodiche, in modo trasparente.",
    color: 'cyan',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lancio e supporto',
    description:
      "L'ultima fase comprende configurazione di hosting, dominio, certificato SSL e messa online. Dopo il lancio è possibile proseguire con correzioni, ottimizzazioni, aggiornamenti e manutenzione continuativa.",
    color: 'purple',
  },
];

export default function Process() {
  return (
    <section id="metodo" className="relative py-24 lg:py-32 bg-[#0a0c10]">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-cyan-400 font-medium tracking-wider uppercase mb-4 block">
              Metodo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Come <span className="gradient-text">lavoriamo</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Un processo chiaro, articolato in quattro fasi. È sempre evidente 
              a che punto si è arrivati e quale sarà il passo successivo.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection line - desktop only */}
            <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-cyan-500/30" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center lg:text-left">
                    {/* Number and Icon */}
                    <div className="relative inline-flex lg:flex items-center justify-center lg:justify-start gap-4 mb-6">
                      <span className={`text-5xl font-bold ${
                        step.color === 'cyan' ? 'text-cyan-400/20' : 'text-purple-500/20'
                      }`}>
                        {step.number}
                      </span>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        step.color === 'cyan' 
                          ? 'bg-cyan-500/10 border border-cyan-500/20' 
                          : 'bg-purple-500/10 border border-purple-500/20'
                      }`}>
                        <step.icon className={`w-6 h-6 ${
                          step.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
