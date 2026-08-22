import { motion } from 'framer-motion';

const brand = 'ATTILA LAB';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04050a]"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex overflow-hidden font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
        {brand.split('').map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: '115%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15 + i * 0.055, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={i > 5 ? 'text-lime-400' : 'text-white'}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="mt-6 h-px w-40 origin-left bg-gradient-to-r from-lime-400 to-emerald-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
      />
      <motion.p
        className="mt-4 text-xs uppercase tracking-[0.4em] text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Digital Studio & AI
      </motion.p>
    </motion.div>
  );
}
