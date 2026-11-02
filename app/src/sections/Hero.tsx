import { useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ParticleField from '@/components/ParticleField';
import Magnetic from '@/components/Magnetic';
import Counter from '@/components/Counter';
import Cube3D from '@/components/Cube3D';

const EASE = [0.22, 1, 0.36, 1] as const;
const BASE_DELAY = 1.5; // after preloader

function AnimatedLine({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]" aria-label={text}>
      {text.split('').map((letter, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className={`inline-block will-change-transform ${className}`}
          initial={{ y: '115%', rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: delay + i * 0.035, ease: EASE }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}

const stats = [
  { value: 10, suffix: '+', label: 'Progetti consegnati' },
  { value: 4, suffix: '', label: 'Settori coperti' },
  { value: 100, suffix: '%', label: 'Su misura' },
  { value: 24, suffix: 'h', label: 'Tempo di risposta' },
];

export default function Hero() {
  // Mouse parallax for the aurora blobs
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const orb1X = useTransform(sx, (v) => v * 40);
  const orb1Y = useTransform(sy, (v) => v * 40);
  const orb2X = useTransform(sx, (v) => v * -60);
  const orb2Y = useTransform(sy, (v) => v * -60);

  useEffect(() => {
    // Mouse parallax only where a fine pointer exists (not on touch devices)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const move = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [mx, my]);

  const scrollTo = (selector: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-svh flex flex-col overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0 bg-[#04050a]">
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-lime-500/15 rounded-full blur-[140px] max-md:blur-[60px]"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[150px] max-md:blur-[60px]"
        />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[130px] max-md:blur-[50px] animate-aurora-3" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
          }}
        />

        <ParticleField className="absolute inset-0 w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: BASE_DELAY, ease: EASE }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/10 mb-10"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="text-sm text-gray-300">Disponibili per nuovi progetti</span>
              </motion.div>

              {/* Giant title */}
              <h1 className="font-display font-bold tracking-tight leading-[0.92] text-[13vw] sm:text-[11vw] lg:text-[6.5rem] xl:text-[8rem]">
                <AnimatedLine text="CREIAMO" className="text-white" delay={BASE_DELAY + 0.1} />
                <AnimatedLine text="PRODOTTI" className="gradient-text" delay={BASE_DELAY + 0.35} />
                <AnimatedLine text="DIGITALI" className="text-outline" delay={BASE_DELAY + 0.6} />
              </h1>
            </div>

            {/* Rotating cube */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: BASE_DELAY + 0.8, ease: EASE }}
              className="flex items-center justify-center relative mt-4 lg:mt-0"
            >
              <div className="absolute w-72 h-72 bg-lime-400/10 rounded-full blur-[80px]" />
              <div className="animate-float-slow scale-75 sm:scale-90 lg:scale-100">
                <Cube3D />
              </div>
            </motion.div>
          </div>

          {/* Subtitle + CTA row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mt-12">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: BASE_DELAY + 0.9, ease: EASE }}
              className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              Siti web, web-app, gestionali e integrazioni AI — progettati e sviluppati
              interamente dal nostro studio, dal primo wireframe alla messa online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: BASE_DELAY + 1.05, ease: EASE }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Magnetic>
                <a
                  href="#contatti"
                  onClick={scrollTo('#contatti')}
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#04050a] bg-white rounded-full hover:bg-lime-300 transition-colors duration-300 shadow-[0_0_40px_rgba(163, 230, 53,0.25)]"
                >
                  Parliamo del tuo progetto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: BASE_DELAY + 1.2, ease: EASE }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/5"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE_DELAY + 1.6, duration: 0.8 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <ChevronDown className="w-6 h-6 text-gray-500 animate-scroll-hint" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04050a] to-transparent pointer-events-none" />
    </section>
  );
}
