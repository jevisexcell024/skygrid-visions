import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const TLDS = [
  { ext: ".com", price: "$8.99" },
  { ext: ".io", price: "$32.00" },
  { ext: ".dev", price: "$12.99" },
  { ext: ".ai", price: "$54.00" },
  { ext: ".cloud", price: "$6.99" },
  { ext: ".app", price: "$14.99" },
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
                placeholder="Find your perfect domain name..."
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-background/60 border border-white/10 text-base focus:outline-none focus:border-amber-brand/60 focus:ring-2 focus:ring-amber-brand/20"
              />
            </div>
            <Button className="h-14 px-8 bg-amber-brand text-background hover:bg-amber-brand/90 font-semibold shadow-glow-amber">
              Search Domain
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {TLDS.map((t) => (
              <div key={t.ext} className="flex items-baseline gap-1.5">
                <span className="font-display font-semibold text-foreground">{t.ext}</span>
                <span className="text-muted-foreground text-xs">from {t.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
