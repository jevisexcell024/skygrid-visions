import { Check, Sprout, Building2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    icon: Sprout, tier: "Starter", name: "Foundation", price: 499, popular: false,
    desc: "For smaller institutions and colleges starting their digital transformation.",
    specs: ["Up to 2,000 students", "5 core modules", "Standard support", "10 GB storage"],
    features: ["Student & Faculty mgmt", "Smart Attendance", "Basic Analytics", "Email + SMS alerts"],
  },
  {
    icon: Building2, tier: "Growth", name: "Professional", price: 1299, popular: true,
    desc: "For mid-size universities running complex, multi-department operations.",
    specs: ["Up to 15,000 students", "All 12 modules", "Priority support", "Unlimited storage"],
    features: ["Everything in Foundation", "Campus Navigation", "AI Insights & Reports", "Emergency Alert system"],
  },
  {
    icon: Landmark, tier: "Enterprise", name: "Institutional", price: null, popular: false,
    desc: "For multi-campus systems and government education bodies requiring full deployment.",
    specs: ["Unlimited students", "Multi-campus support", "Dedicated CSM", "On-premise option"],
    features: ["Everything in Professional", "Custom integrations", "SLA-backed uptime", "White-label branding"],
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
            Built for institutions of <span className="text-gradient-amber">every scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Transparent monthly pricing. Scale as your campus grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
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
                <div className="mt-5 text-xs uppercase tracking-wider text-amber-brand font-semibold">{plan.tier}</div>
                <h3 className="mt-1 font-display text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  {plan.price ? (
                    <>
                      <span className="text-5xl font-bold font-display">${plan.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold font-display">Custom</span>
                  )}
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
                  {plan.price ? `Choose ${plan.name}` : "Talk to Sales"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
