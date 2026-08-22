import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

/** Splits text into words and reveals them with a sliding mask animation on scroll. */
export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
  once = true,
}: AnimatedTextProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '115%' }}
            whileInView={{ y: 0 }}
            viewport={{ once, margin: '-8% 0px' }}
            transition={{ duration: 0.75, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < text.split(' ').length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
