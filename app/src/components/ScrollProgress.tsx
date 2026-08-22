import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient bar at the top of the page showing scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-lime-400 via-emerald-400 to-emerald-500"
      style={{ scaleX }}
    />
  );
}
