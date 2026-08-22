import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** last words rendered with the animated gradient */
  highlight?: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`max-w-4xl mb-16 lg:mb-24 flex flex-col ${alignClass}`}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8% 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.35em] uppercase text-lime-400 mb-6"
      >
        <span className="w-8 h-px bg-lime-400/60" />
        {eyebrow}
        {align === 'center' && <span className="w-8 h-px bg-lime-400/60" />}
      </motion.span>

      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.02] tracking-tight mb-6">
        <AnimatedText text={title} />
        {highlight && (
          <>
            {' '}
            <AnimatedText text={highlight} className="gradient-text" delay={0.15} />
          </>
        )}
      </h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-400 text-lg leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
