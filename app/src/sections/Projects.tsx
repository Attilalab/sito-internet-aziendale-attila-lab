import { ExternalLink, Smartphone, Trophy, Heart, Globe, LayoutDashboard, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import TiltCard from '@/components/TiltCard';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Project {
  icon: typeof Globe;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string | null;
  linkText: string;
  visual: string;
}

const projects: Project[] = [
  {
    icon: Smartphone,
    title: 'GustaGo',
    category: 'Mobile App · Delivery',
    description:
      "App di delivery internazionale per food & beverage: ordini multi-paese, pagamenti e integrazione spedizioni BRT con tracking in tempo reale.",
    tags: ['Mobile App', 'Integrazione BRT', 'Tracking'],
    link: null,
    linkText: 'Demo su richiesta',
    visual: 'from-lime-500/40 via-lime-600/15 to-transparent',
  },
  {
    icon: Trophy,
    title: 'FromZeroToHero.io',
    category: 'Piattaforma AI · Gaming',
    description:
      "Analisi multigioco con intelligenza artificiale: statistiche, progressione del giocatore e insight generati dall'AI per migliorare partita dopo partita.",
    tags: ['AI', 'Analytics', 'Multigioco'],
    link: 'https://fromzerotohero.io',
    linkText: 'Visita la piattaforma',
    visual: 'from-emerald-500/40 via-teal-600/15 to-transparent',
  },
  {
    icon: LayoutDashboard,
    title: 'Gestionale PVR DAZN',
    category: 'Web-app · Gestionale',
    description:
      "Gestionale per Punti Vendita Ricariche DAZN: attivazioni e rinnovi abbonamenti, anagrafica clienti e reportistica vendite.",
    tags: ['Gestionale', 'PVR DAZN', 'Reportistica'],
    link: null,
    linkText: 'Caso studio su richiesta',
    visual: 'from-teal-500/40 via-emerald-600/15 to-transparent',
  },
  {
    icon: Heart,
    title: 'InRicordoDiTe.it',
    category: 'Portale Web · Memoriale',
    description:
      "Portale memoriale per custodire il ricordo delle persone care: profili dedicati, foto e pensieri condivisi, accessibili ovunque.",
    tags: ['Portale', 'Community', 'SEO'],
    link: 'https://inricordodite.it',
    linkText: 'Visita il sito',
    visual: 'from-green-600/40 via-emerald-700/15 to-transparent',
  },
  {
    icon: Globe,
    title: 'Siti Web & Portali',
    category: 'Siti Web · Brand Identity',
    description:
      "Siti vetrina e corporate per attività e professionisti: identità visiva coerente, performance elevate e SEO curata.",
    tags: ['React', 'Tailwind', 'SEO'],
    link: 'https://www.attila-lab.com',
    linkText: 'attila-lab.com',
    visual: 'from-lime-400/40 via-emerald-600/15 to-transparent',
  },
];

export default function Projects() {
  return (
    <section id="progetti" className="relative py-24 lg:py-32 noise">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-lime-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Portfolio"
            title="Lavori"
            highlight="realizzati"
            description="Una selezione di progetti completati e in produzione: app, gestionali, piattaforme AI e siti web."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: EASE }}
              >
                <TiltCard className="rounded-3xl glass border border-white/10 hover:border-lime-400/40 transition-colors duration-300 overflow-hidden">
                  {/* Visual header */}
                  <div className={`relative h-36 bg-gradient-to-br ${project.visual} overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)`,
                        backgroundSize: '28px 28px',
                      }}
                    />
                    <span className="absolute -bottom-4 right-3 font-display font-bold text-7xl leading-none text-white/10 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-black/30 backdrop-blur border border-white/20 flex items-center justify-center"
                      style={{ transform: 'translateZ(40px)' }}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col" style={{ transform: 'translateZ(24px)' }}>
                    <span className="text-[11px] text-lime-400 uppercase tracking-[0.2em] mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] text-gray-400 bg-white/5 border border-white/5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-white/5 mt-auto">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-lime-400 hover:text-lime-300 transition-colors"
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
                </TiltCard>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            >
              <TiltCard max={6} className="rounded-3xl">
                <a
                  href="#contatti"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contatti')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex flex-col justify-between h-full min-h-[320px] p-8 rounded-3xl bg-gradient-to-br from-lime-400 to-emerald-600 hover:shadow-[0_20px_60px_rgba(163,230,53,0.25)] transition-shadow duration-300"
                >
                  <h3 className="font-display text-2xl font-bold text-[#04050a] leading-tight">
                    Il prossimo progetto potrebbe essere il tuo.
                  </h3>
                  <div className="flex items-center gap-2 font-semibold text-[#04050a]">
                    Parliamone
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
