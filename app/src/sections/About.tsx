import { User, Code2, Lightbulb, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: User,
    title: 'Struttura snella',
    description: 'Un unico studio, un referente tecnico diretto per ogni progetto digitale',
  },
  {
    icon: Code2,
    title: 'Sviluppo Web',
    description: 'Competenze tecniche solide in frontend, backend e integrazioni',
  },
  {
    icon: Lightbulb,
    title: 'AI & Automazione',
    description: "Integrazione intelligente dell'IA dove ha senso per il progetto",
  },
  {
    icon: Heart,
    title: 'Qualità Prima di Tutto',
    description: 'Pochi progetti, massima attenzione ai dettagli e al cliente',
  },
];

export default function About() {
  return (
    <section id="chi-siamo" className="relative py-24 lg:py-32">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            align="left"
            eyebrow="Chi Siamo"
            title="Uno studio digitale"
            highlight="indipendente"
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Attila Lab è uno studio digitale indipendente. Si occupa di sviluppo web,
                progettazione di interfacce e integrazioni con sistemi di intelligenza
                artificiale per aziende e professionisti.
              </p>

              <p className="text-gray-400 leading-relaxed">
                L'esperienza nasce da progetti complessi: gestionali operativi, app di
                delivery internazionale, piattaforme di analisi con IA, portali e
                web-app specializzate costruite su casi d'uso reali.
              </p>

              <p className="text-gray-400 leading-relaxed">
                L'organizzazione è essenziale: struttura snella, numero limitato di progetti
                in parallelo, attenzione costante ai dettagli. Nessuna struttura pesante,
                focus sui risultati e sulla qualità del lavoro.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-lime-400/50 to-transparent" />
                <span className="font-display text-sm text-gray-500 uppercase tracking-widest">
                  Surbo · Lecce
                </span>
              </div>
            </motion.div>

            {/* Right Column - Features */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                  whileHover={{ y: -6 }}
                  className="group h-full p-6 rounded-2xl glass border border-white/5 hover:border-lime-400/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-400/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
