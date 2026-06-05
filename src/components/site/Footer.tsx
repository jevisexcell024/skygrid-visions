import { Cloud, Twitter, Github, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const COLS = [
  { title: "Product", items: ["Cloud Hosting", "VPS Servers", "Domains", "SSL Certificates", "Email Hosting"] },
  { title: "Solutions", items: ["WordPress", "Ecommerce", "Startups", "Enterprise", "Agencies"] },
  { title: "Resources", items: ["Documentation", "API Reference", "Status Page", "Engineering Blog", "Community"] },
  { title: "Company", items: ["About", "Careers", "Press Kit", "Partners", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative mt-10" style={{ backgroundColor: "#111111" }}>
      <div className="container-1400">
        {/* CTA */}
        <div className="py-20 border-b border-white/5">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Ready to build on a cloud that <span className="text-gradient-amber">never sleeps</span>?
            </h2>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button size="lg" className="h-14 px-8 bg-amber-brand text-background hover:bg-amber-brand/90 font-semibold shadow-glow-amber">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-white/15 bg-white/5 hover:bg-white/10">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Middle nav */}
        <div className="py-16 grid lg:grid-cols-[1.4fr_repeat(4,1fr)] gap-10">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-brand to-burgundy grid place-items-center">
                <Cloud className="h-5 w-5 text-background" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-bold">CloudNova</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Cloud infrastructure designed for teams who can't afford to slow down.
            </p>
            <form className="mt-6 flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-amber-brand/60"
              />
              <Button className="h-11 px-4 bg-amber-brand text-background hover:bg-amber-brand/90 font-semibold">
                Subscribe
              </Button>
            </form>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/90">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-amber-brand transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-7 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} CloudNova, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-lg bg-white/5 grid place-items-center hover:bg-amber-brand hover:text-background transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
