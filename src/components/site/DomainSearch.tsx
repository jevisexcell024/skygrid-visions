import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { label: "Institutions", value: "200+" },
  { label: "Students", value: "12M+" },
  { label: "Uptime", value: "99.97%" },
  { label: "Daily Ops", value: "48M+" },
  { label: "Countries", value: "32" },
  { label: "Modules", value: "12" },
];

export function DomainSearch() {
  return (
    <section className="relative -mt-10">
      <div className="container-1400">
        <div className="glass rounded-3xl p-6 md:p-8 shadow-card border-white/10">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Find your institution or request a campus demo..."
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-background/60 border border-white/10 text-base focus:outline-none focus:border-amber-brand/60 focus:ring-2 focus:ring-amber-brand/20"
              />
            </div>
            <Button className="h-14 px-8 bg-amber-brand text-background hover:bg-amber-brand/90 font-semibold shadow-glow-amber">
              Request Demo
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            {STATS.map((t) => (
              <div key={t.label} className="flex items-baseline gap-1.5">
                <span className="font-display font-semibold text-foreground">{t.value}</span>
                <span className="text-muted-foreground text-xs uppercase tracking-wider">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
