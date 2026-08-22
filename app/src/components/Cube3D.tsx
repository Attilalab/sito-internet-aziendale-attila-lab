import { Globe, Bot, Smartphone, Search, Database, Braces } from 'lucide-react';

const SIZE = 200; // cube edge in px
const HALF = SIZE / 2;

const faces = [
  { icon: Globe, label: 'WEB', transform: `rotateY(0deg) translateZ(${HALF}px)` },
  { icon: Bot, label: 'AI', transform: `rotateY(90deg) translateZ(${HALF}px)` },
  { icon: Smartphone, label: 'APP', transform: `rotateY(180deg) translateZ(${HALF}px)` },
  { icon: Search, label: 'SEO', transform: `rotateY(-90deg) translateZ(${HALF}px)` },
  { icon: Database, label: 'DATA', transform: `rotateX(90deg) translateZ(${HALF}px)` },
  { icon: Braces, label: 'API', transform: `rotateX(-90deg) translateZ(${HALF}px)` },
];

/** Continuously rotating 3D glass cube with capability labels on each face. */
export default function Cube3D({ className = '' }: { className?: string }) {
  return (
    <div className={`cube-scene ${className}`} aria-hidden="true">
      <div className="cube" style={{ width: SIZE, height: SIZE }}>
        {faces.map((face) => (
          <div
            key={face.label}
            className="cube-face"
            style={{ transform: face.transform }}
          >
            <face.icon className="w-10 h-10 text-lime-400" strokeWidth={1.5} />
            <span className="font-display text-sm font-semibold tracking-[0.3em] text-white/80">
              {face.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
