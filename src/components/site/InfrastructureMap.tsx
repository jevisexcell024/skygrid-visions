import mapImg from "@/assets/world-map.png";

const STATS = [
  { value: "99.99%", label: "Uptime SLA", pos: "top-4 left-2 md:top-12 md:left-12" },
  { value: "120+", label: "Countries", pos: "top-4 right-2 md:top-16 md:right-16" },
  { value: "50+", label: "Data Centers", pos: "bottom-4 left-2 md:bottom-20 md:left-20" },
  { value: "<50ms", label: "Avg Latency", pos: "bottom-4 right-2 md:bottom-12 md:right-12" },
];

export function InfrastructureMap() {
  return (
    <section className="section-pad relative">
      <div className="container-1400">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
            Global Network
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Closer to your users, <span className="text-gradient-amber">everywhere</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A planet-scale network of data centers with intelligent routing and anycast DNS.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden glass border-white/10 p-4 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/10 via-transparent to-amber-brand/5" />
          <div className="relative aspect-[16/9]">
            <img src={mapImg} alt="Global data center network map" width={1600} height={900} loading="lazy"
              className="w-full h-full object-cover rounded-2xl opacity-90" />
            {/* Pulsing dots overlay (a few extra) */}
            {[
              { top: "30%", left: "18%" }, { top: "32%", left: "48%" },
              { top: "40%", left: "76%" }, { top: "62%", left: "82%" },
              { top: "55%", left: "30%" },
            ].map((p, i) => (
              <span key={i} className="absolute" style={p}>
                <span className="block h-3 w-3 rounded-full bg-amber-brand shadow-[0_0_12px_#FFC107] animate-pulse" />
                <span className="absolute inset-0 h-3 w-3 rounded-full bg-amber-brand/40 animate-ping" />
              </span>
            ))}

            {STATS.map((s) => (
              <div key={s.label} className={`absolute ${s.pos} glass rounded-xl px-4 py-3 md:px-5 md:py-4 animate-float`}>
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient-amber">{s.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
