import { Zap, ShieldCheck, Headphones, Globe2, Database, GitBranch } from "lucide-react";
import whyImg from "@/assets/why-choose.png";

const FEATURES = [
  { icon: Zap, title: "Lightning-fast NVMe", desc: "All-flash storage with 10× faster reads than standard SSDs." },
  { icon: ShieldCheck, title: "Enterprise security", desc: "WAF, DDoS protection, and automated malware scanning included." },
  { icon: Globe2, title: "50+ global regions", desc: "Edge deployments on 6 continents for sub-50ms latency anywhere." },
  { icon: Database, title: "Auto-scaling clusters", desc: "Resources scale instantly with traffic spikes — no downtime." },
  { icon: GitBranch, title: "One-click deploys", desc: "Push to Git and we handle the rest. Atomic, rollback-ready." },
  { icon: Headphones, title: "24/7 expert support", desc: "Real engineers, not bots. Avg first response under 90 seconds." },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad relative">
      <div className="container-1400 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-10 rounded-full bg-burgundy/30 blur-3xl" />
          <div className="absolute inset-20 rounded-full bg-amber-brand/15 blur-3xl animate-pulse-glow" />
          <img
            src={whyImg}
            alt="Cloud infrastructure with floating server clusters and security indicators"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full h-auto animate-float-slow drop-shadow-2xl"
          />
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
            Why CloudNova
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Infrastructure that <span className="text-gradient-amber">just works</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Built by engineers who got tired of paging at 3am. Every layer
            obsessively tuned for speed, reliability, and developer joy.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-7">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group">
                  <div className="h-11 w-11 rounded-xl glass grid place-items-center text-amber-brand group-hover:bg-amber-brand group-hover:text-background transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
