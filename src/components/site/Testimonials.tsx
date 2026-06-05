import { Star, Quote } from "lucide-react";

const TS = [
  {
    name: "Sara Lindgren", role: "CTO, Northwind Labs",
    text: "We migrated 80+ microservices in a weekend. Latency dropped 60% and our infra bill is half what we paid before. CloudNova just gets out of the way.",
    initials: "SL",
  },
  {
    name: "Marcus Okafor", role: "Lead Engineer, Vexa Health",
    text: "The auto-scaling handled our Black Friday spike without a single alert. Support actually responded in seconds — by humans who knew the product.",
    initials: "MO",
  },
  {
    name: "Yuki Tanaka", role: "Founder, Driftboard",
    text: "Zero-config SSL, instant deploys, and a global edge network for less than I was paying for a single VPS. It feels like cheating.",
    initials: "YT",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-1400">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
            Loved by teams
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            12,000+ teams ship on <span className="text-gradient-amber">CloudNova</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TS.map((t) => (
            <div key={t.name} className="relative rounded-2xl glass p-8 shadow-card hover:-translate-y-1 transition-transform">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-amber-brand/30" />
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-brand to-burgundy grid place-items-center font-bold text-background">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-5 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-brand text-amber-brand" />
                ))}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
