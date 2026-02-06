import { ExternalLink, BarChart3, Globe, Database } from 'lucide-react';

const projects = [
  {
    icon: BarChart3,
    title: 'Dashboard Analytics Gaming',
    category: 'Web-app / Dashboard',
    description:
      'Sviluppo di una dashboard di analisi dati per un motore di raccomandazione di videogiochi. Interfaccia per visualizzare metriche, trend di utilizzo e performance dell\'algoritmo AI. Progetto realizzato per partner tecnologico con focus su usabilità e velocità di caricamento.',
    tags: ['React', 'TypeScript', 'Data Visualization', 'AI Integration'],
    gradient: 'from-cyan-400 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'Sito Vetrina Professionale',
    category: 'Sito Web',
    description:
      'Design e sviluppo di un sito vetrina per uno studio professionale. Curato nell\'estetica, ottimizzato per i motori di ricerca, con form di contatto integrato e area riservata per documenti. Responsive su tutti i dispositivi, con tempi di caricamento ottimizzati.',
    tags: ['Responsive Design', 'SEO', 'Form Integration'],
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: Database,
    title: 'Pannello Gestionale Custom',
    category: 'Web-app / Backend',
    description:
      'Sviluppo di un pannello di controllo su misura per la gestione di inventario e ordini. Interfaccia intuitiva, integrazione con API esterne, sistema di notifiche e reportistica automatica. Progettato per semplificare il flusso di lavoro quotidiano del cliente.',
    tags: ['Full-stack', 'API Integration', 'Automation'],
    gradient: 'from-cyan-400 to-purple-500',
  },
];

export default function Projects() {
  return (
    <section id="progetti" className="relative py-24 lg:py-32 bg-[#0a0c10]">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-cyan-400 font-medium tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Alcuni <span className="gradient-text">progetti</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Esempi di lavori svolti. Ogni progetto è unico e sviluppato 
              su misura per le esigenze specifiche del cliente.
            </p>
          </div>

          {/* Notice */}
          <div className="mb-12 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
            <p className="text-sm text-yellow-200/80 text-center">
              <strong>Nota:</strong> Questi sono esempi rappresentativi del tipo di lavoro svolto. 
              I progetti reali saranno pubblicati prossimamente con l'autorizzazione dei clienti.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link placeholder */}
                <div className="pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <ExternalLink className="w-4 h-4" />
                    Progetto in fase di pubblicazione
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
