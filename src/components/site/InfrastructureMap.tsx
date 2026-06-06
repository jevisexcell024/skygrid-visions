import campusNav from "@/assets/campus-nav.png";
import { Navigation, Clock, Footprints, MapPin } from "lucide-react";

const STATS = [
  { value: "4 min", label: "Avg ETA", pos: "top-4 left-2 md:top-12 md:left-12", icon: Clock },
  { value: "120+", label: "Indoor Points", pos: "top-4 right-2 md:top-16 md:right-16", icon: MapPin },
  { value: "Live", label: "Crowd Density", pos: "bottom-4 left-2 md:bottom-20 md:left-20", icon: Footprints },
  { value: "Turn-by-turn", label: "Guidance", pos: "bottom-4 right-2 md:bottom-12 md:right-12", icon: Navigation },
];

export function InfrastructureMap() {
  return (
    <section id="navigation" className="section-pad relative">
      <div className="container-1400">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
            Campus Navigation
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Find anywhere on campus, <span className="text-gradient-amber">in seconds</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Uber-style turn-by-turn navigation for every building, lecture hall, and lab —
            with live crowd detection and accessibility-aware routing.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden glass border-white/10 p-4 md:p-10">
          <div className="absolute inset-0 bg-burgundy/10" />
          <div className="relative aspect-[16/9]">
            <img src={campusNav} alt="Kumora campus navigation map with turn-by-turn directions"
              width={1600} height={900} loading="lazy"
              className="w-full h-full object-cover rounded-2xl opacity-95" />

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

            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className={`absolute ${s.pos} glass rounded-xl px-4 py-3 md:px-5 md:py-4 animate-float`}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-amber-brand" />
                    <div className="font-display text-xl md:text-2xl font-bold text-gradient-amber">{s.value}</div>
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
