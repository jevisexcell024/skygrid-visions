import { Check, Rocket, Server, Cpu, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    icon: Rocket, name: "Starter", price: 4, popular: false,
    specs: ["1 vCPU Core", "2 GB RAM", "50 GB NVMe SSD", "1 TB Bandwidth"],
    features: ["Free SSL Certificate", "Daily Backups", "24/7 Support", "1 Website"],
  },
  {
    icon: Server, name: "Growth", price: 12, popular: false,
    specs: ["2 vCPU Cores", "4 GB RAM", "100 GB NVMe SSD", "3 TB Bandwidth"],
    features: ["Free SSL & CDN", "Daily Backups", "Priority Support", "Unlimited Sites"],
  },
  {
    icon: Cpu, name: "Professional", price: 28, popular: true,
    specs: ["4 vCPU Cores", "8 GB RAM", "250 GB NVMe SSD", "Unmetered Bandwidth"],
    features: ["Free SSL, CDN, WAF", "Hourly Backups", "Dedicated Support", "Advanced Caching"],
  },
  {
    icon: Crown, name: "Enterprise", price: 64, popular: false,
    specs: ["8 vCPU Cores", "16 GB RAM", "500 GB NVMe SSD", "Unmetered Bandwidth"],
    features: ["Everything in Pro", "DDoS Protection", "Dedicated Engineer", "Custom SLAs"],
  },
];

export function HostingPlans() {
  return (
    <section id="pricing" className="section-pad relative">
      <div className="container-1400">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
            Pricing
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Plans engineered for <span className="text-gradient-amber">every workload</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Transparent pricing. No surprise fees. Scale up or down anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "glass border-amber-brand/40 shadow-glow-amber scale-[1.03] bg-gradient-to-b from-burgundy/15 to-transparent"
                    : "glass hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-brand text-background text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className={`h-12 w-12 rounded-xl grid place-items-center ${plan.popular ? "bg-amber-brand text-background" : "bg-white/5 text-amber-brand"}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-bold font-display">${plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <ul className="space-y-2.5 text-sm">
                  {plan.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-foreground/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-brand" /> {s}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-amber-brand shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-7 w-full h-12 font-semibold ${
                    plan.popular
                      ? "bg-amber-brand text-background hover:bg-amber-brand/90"
                      : "bg-white/5 text-foreground hover:bg-white/10"
                  }`}
                >
                  Get {plan.name}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
