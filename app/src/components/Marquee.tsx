interface MarqueeProps {
  items: string[];
  className?: string;
  /** scroll right-to-left (default) or left-to-right */
  reverse?: boolean;
  /** outlined display text instead of small caps */
  big?: boolean;
}

/** Infinite horizontal ticker. Content is duplicated for a seamless loop. */
export default function Marquee({ items, className = '', reverse = false, big = false }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04050a] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04050a] to-transparent z-10" />
      <div
        className="flex w-max animate-marquee gap-0"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {row.map((item, i) => (
          <div key={i} className={`flex items-center whitespace-nowrap ${big ? 'gap-10 px-10' : 'gap-8 px-8'}`}>
            {big ? (
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-outline">
                {item}
              </span>
            ) : (
              <span className="font-display text-sm uppercase tracking-[0.25em] text-gray-500">
                {item}
              </span>
            )}
            <span className={`rounded-full ${big ? 'h-2.5 w-2.5 bg-emerald-500/60' : 'h-1.5 w-1.5 bg-lime-400/50'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
