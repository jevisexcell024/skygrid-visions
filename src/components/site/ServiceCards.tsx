import { Server, Globe, Cloud, Database, Lock, Mail, ArrowUpRight } from "lucide-react";

const SERVICES = [
  { icon: Server, title: "Managed VPS", desc: "Dedicated resources with full root access and managed updates." },
  { icon: Cloud, title: "Cloud Hosting", desc: "Auto-scaling cloud servers with zero-downtime deployments." },
  { icon: Globe, title: "Domain Registration", desc: "Register, transfer & manage domains across 400+ extensions." },
  { icon: Database, title: "Managed Databases", desc: "PostgreSQL, MySQL & Redis with point-in-time recovery." },
  { icon: Lock, title: "SSL & Security", desc: "Free wildcard SSL, WAF, and continuous vulnerability scans." },
  { icon: Mail, title: "Business Email", desc: "Professional email with calendar, contacts & 50GB per mailbox." },
];

export function ServiceCards() {
  return (
    <section id="hosting" className="section-pad">
      <div className="container-1400">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
              Services
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Everything you need, <span className="text-gradient-amber">under one roof</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From bare metal to managed platforms, we cover the full stack so you can ship faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.title} href="#"
                className="group relative rounded-2xl p-8 glass border-white/10 hover:border-amber-brand/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-amber-brand/0 group-hover:bg-amber-brand/10 blur-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-burgundy to-burgundy/40 grid place-items-center text-amber-brand group-hover:from-amber-brand group-hover:to-amber-brand/60 group-hover:text-background transition-all">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-amber-brand">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
