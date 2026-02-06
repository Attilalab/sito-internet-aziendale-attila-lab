import { UserCheck, Settings, Brain, Wrench, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Rapporto diretto',
    description: 'Nessun intermediario, nessun account manager. Parli direttamente con chi sviluppa il tuo progetto. Comunicazione chiara e immediata.',
  },
  {
    icon: Settings,
    title: 'Progetti su misura',
    description: 'Non usiamo template rigidi o soluzioni preconfezionate. Ogni progetto è pensato e costruito specificamente per le tue esigenze.',
  },
  {
    icon: Brain,
    title: 'Approccio tecnico ma comprensibile',
    description: 'Ti spieghiamo le cose in modo chiaro, senza tecnicismi inutili. Ma dietro c\'è sempre solidità tecnica e codice ben scritto.',
  },
  {
    icon: Wrench,
    title: 'AI solo dove ha senso',
    description: 'Integriamo l\'intelligenza artificiale solo quando aggiunge valore reale al progetto. Niente AI per moda, solo soluzioni utili.',
  },
  {
    icon: MessageCircle,
    title: 'Attenzione nel tempo',
    description: 'Non ti lasciamo solo dopo il lancio. Offriamo supporto continuo, aggiornamenti e manutenzione per far crescere il tuo progetto.',
  },
];

export default function WhyUs() {
  return (
    <section id="perche-noi" className="relative py-24 lg:py-32 bg-[#0a0c10]">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-cyan-400 font-medium tracking-wider uppercase mb-4 block">
              Vantaggi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Perché scegliere <span className="gradient-text">noi</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Motivi concreti per lavorare con Attila Lab. 
              Nessuna promessa vana, solo fatti.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Convinto? Parliamo del tuo progetto.
            </p>
            <a
              href="#contatti"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contatti')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0a0c10] bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300"
            >
              Contattaci ora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
