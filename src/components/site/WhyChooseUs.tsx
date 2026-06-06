import { Brain, ShieldCheck, Headphones, Layers, BarChart3, Plug } from "lucide-react";
import whyImg from "@/assets/why-choose.png";

const FEATURES = [
  { icon: Brain, title: "AI-first intelligence", desc: "Every module is enhanced by predictive insights that learn your campus patterns." },
  { icon: ShieldCheck, title: "Enterprise security", desc: "FERPA, GDPR, and SOC 2 ready — encryption at rest and in transit, by default." },
  { icon: Layers, title: "Unified platform", desc: "12 modules under one login. No more juggling disconnected campus systems." },
  { icon: BarChart3, title: "Real-time analytics", desc: "Live dashboards for leadership — attendance, finance, wellbeing, all in one view." },
  { icon: Plug, title: "Open integrations", desc: "Plug into your LMS, ERP, payment gateway, and biometric devices in days, not months." },
  { icon: Headphones, title: "24/7 expert support", desc: "Real engineers, not bots. Average first response under 90 seconds." },
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
            alt="Kumora intelligent campus infrastructure dashboard"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full h-auto animate-float-slow drop-shadow-2xl"
          />
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
            Why Kumora
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Infrastructure that <span className="text-gradient-amber">just works</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Built by educators and engineers who got tired of fragmented campus tools.
            Every layer obsessively tuned for reliability, intelligence, and ease of use.
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
