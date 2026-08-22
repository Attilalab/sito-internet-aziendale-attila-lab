import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SIZE = 600;

/** Soft light halo that follows the mouse (desktop pointers only). */
export default function CursorGlow() {
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { stiffness: 70, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 70, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-20 rounded-full mix-blend-screen hidden md:block"
      style={{
        x: springX,
        y: springY,
        width: SIZE,
        height: SIZE,
        background:
          'radial-gradient(circle, rgba(163, 230, 53,0.08) 0%, rgba(16, 185, 129,0.05) 35%, transparent 65%)',
      }}
    />
  );
}
