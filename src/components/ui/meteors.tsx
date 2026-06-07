import { cn } from "@/lib/utils";

export function Meteors({ number = 20, className }: { number?: number; className?: string }) {
  const meteors = new Array(number).fill(true);
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {meteors.map((_, idx) => {
        const left = Math.floor(Math.random() * 100);
        const delay = (Math.random() * 5).toFixed(2);
        const duration = (Math.floor(Math.random() * 8) + 5).toFixed(2);
        return (
          <span
            key={idx}
            className="meteor absolute top-0 h-0.5 w-0.5 rotate-[215deg]"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              background: "var(--amber-brand)",
              boxShadow: "0 0 0 1px color-mix(in oklab, var(--amber-brand) 30%, transparent)",
            }}
          >
            <span
              className="absolute top-1/2 -z-10 h-px w-[60px] -translate-y-1/2"
              style={{
                background: "linear-gradient(90deg, var(--amber-brand), transparent)",
              }}
            />
          </span>
        );
      })}
    </div>
  );
}
