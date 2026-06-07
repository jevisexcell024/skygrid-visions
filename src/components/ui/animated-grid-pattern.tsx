import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  width?: number;
  height?: number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
};

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  numSquares = 40,
  className,
  maxOpacity = 0.4,
  duration = 4,
}: Props) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares, { width: 0, height: 0 }));

  function getPos(d: { width: number; height: number }) {
    return [
      Math.floor((Math.random() * d.width) / width),
      Math.floor((Math.random() * d.height) / height),
    ];
  }
  function generateSquares(count: number, d: { width: number; height: number }) {
    return Array.from({ length: count }, (_, i) => ({ id: i, pos: getPos(d) }));
  }
  function updateSquare(sqId: number) {
    setSquares((cur) =>
      cur.map((sq) => (sq.id === sqId ? { ...sq, pos: getPos(dimensions) } : sq)),
    );
  }

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares, dimensions));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, numSquares]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        setDimensions({ width: e.contentRect.width, height: e.contentRect.height });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-current/20 stroke-current/20",
        className,
      )}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={0} y={0}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={0} y={0} className="overflow-visible">
        {squares.map(({ pos: [x, y], id: sqId }, i) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: Infinity,
              delay: i * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquare(sqId)}
            key={`${x}-${y}-${i}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
