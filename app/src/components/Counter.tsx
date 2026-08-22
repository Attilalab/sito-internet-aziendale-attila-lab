import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Number that counts up when it enters the viewport. */
export default function Counter({ to, suffix = '', duration = 1.8, className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
