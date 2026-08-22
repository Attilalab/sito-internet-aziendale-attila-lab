import { UserCheck, Settings, Brain, Wrench, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

const reasons = [
  {
    icon: UserCheck,
    title: 'Rapporto diretto',
    description:
      'La comunicazione avviene direttamente con chi progetta e sviluppa. Questo riduce passaggi intermedi, fraintendimenti e tempi morti.',
  },
  {
    icon: Settings,
    title: 'Progetti su misura',
    description:
      'Non vengono utilizzati template rigidi come punto di arrivo. Ogni soluzione è progettata sui requisiti effettivi, con margine per crescere nel tempo.',
  },
  {
    icon: Brain,
    title: 'Approccio tecnico ma comprensibile',
    description:
      'Le scelte tecniche sono spiegate in modo chiaro, senza linguaggio inutilmente complesso. Ogni decisione è supportata da motivazioni verificabili.',
  },
  {
    icon: Wrench,
    title: 'AI solo dove ha senso',
    description:
      "L'intelligenza artificiale è trattata come uno strumento. Viene adottata solo quando produce un valore reale e misurabile per il progetto.",
  },
  {
    icon: MessageCircle,
    title: 'Attenzione nel tempo',
    description:
      'Dopo il lancio è possibile mantenere un rapporto continuativo per aggiornamenti, correzioni e miglioramenti progressivi. I progetti digitali sono considerati sistemi in evoluzione, non consegne puntuali e chiuse.',
  },
];

function handleSpotlight(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--x', `${e.clientX - rect.left}px`);
  el.style.setProperty('--y', `${e.clientY - rect.top}px`);
}

export default function WhyUs() {
  return (
    <section id="perche-noi" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Vantaggi"
            title="Perché scegliere"
            highlight="Attila Lab"
            description="Alcuni elementi che caratterizzano il modo di lavorare dello studio e che possono fare la differenza in un progetto digitale."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: EASE }}
                whileHover={{ y: -6 }}
                onMouseMove={handleSpotlight}
                className="spotlight-card group h-full p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-lime-400/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}

            {/* CTA card fills the 6th slot */}
            <motion.a
              href="#contatti"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contatti')?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-600 hover:shadow-[0_20px_60px_rgba(163, 230, 53,0.25)] transition-shadow duration-300"
            >
              <h3 className="font-display text-xl font-bold text-[#04050a] mb-3">
                Hai un progetto digitale in mente?
              </h3>
              <div className="flex items-center gap-2 font-medium text-[#04050a]">
                Parliamone
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
