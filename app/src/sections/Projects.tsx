import { ExternalLink, BarChart3, Globe, Database, Sparkles } from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: 'Attila Lab',
    category: 'Sito Web / Brand Identity',
    description:
      'Design e sviluppo del sito vetrina dello studio. Identità visiva coerente, animazioni fluide, ottimizzazione performance e SEO. Progetto realizzato internamente come showcase delle competenze dello studio.',
    tags: ['React', 'Tailwind CSS', 'Responsive', 'Vite'],
    gradient: 'from-cyan-400 to-cyan-500',
    link: 'https://www.attila-lab.com',
    linkText: 'Visita il sito',
  },
  {
    icon: BarChart3,
    title: 'GameMetrics AI',
    category: 'Web-app / Dashboard',
    description:
      'Dashboard di analisi per motore di raccomandazione giochi. Visualizzazione metriche in tempo reale, trend di utilizzo, A/B testing dell\'algoritmo. Interfaccia ottimizzata per decisioni data-driven.',
    tags: ['React', 'TypeScript', 'D3.js', 'AI Integration'],
    gradient: 'from-purple-500 to-purple-600',
    link: null,
    linkText: 'Progetto privato',
  },
  {
    icon: Database,
    title: 'InventoryPro',
    category: 'Web-app / Gestionale',
    description:
      'Pannello gestionale su misura per PMI del settore retail. Gestione inventario, ordini automatici, integrazione con e-commerce e reportistica. Riduzione del 40% del tempo di gestione magazzino.',
    tags: ['Full-stack', 'Node.js', 'PostgreSQL', 'API REST'],
    gradient: 'from-cyan-400 to-purple-500',
    link: null,
    linkText: 'Caso studio su richiesta',
  },
  {
    icon: Sparkles,
    title: 'LegalDocs AI',
    category: 'AI / Automation',
    description:
      'Sistema di elaborazione documenti legali con AI. Estrazione automatica di clausole, summarization contratti, ricerca semantica. Prototipo sviluppato per studio legale partner.',
    tags: ['Python', 'OpenAI API', 'NLP', 'FastAPI'],
    gradient: 'from-purple-500 to-cyan-400',
    link: null,
    linkText: 'Demo su richiesta',
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
              Progetti <span className="gradient-text">realizzati</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Una selezione di lavori completati. Ogni progetto è sviluppato 
              su misura con attenzione ai dettagli e alle esigenze specifiche.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.03]"
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

                {/* Link */}
                <div className="pt-4 border-t border-white/5">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.linkText}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                      <ExternalLink className="w-4 h-4" />
                      {project.linkText}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
