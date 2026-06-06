import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import kumoraLogo from "@/assets/kumora-logo.png.asset.json";

const COLS: { title: string; items: { label: string; to: string }[] }[] = [
  {
    title: "Product",
    items: [
      { label: "Solutions", to: "/solutions" },
      { label: "Customers", to: "/customers" },
      { label: "Resources", to: "/resources" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border bg-surface">
      <div className="container-1400">
        <div className="py-20 border-b border-border">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
              Transform your campus<br />
              <span className="text-primary">infrastructure today.</span>
            </h2>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact">
                <Button size="lg" className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/customers">
                <Button size="lg" variant="outline" className="h-12 px-6 border-border bg-card text-foreground hover:bg-secondary font-medium rounded-md">
                  View customers
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-14 grid lg:grid-cols-[1.6fr_repeat(2,1fr)] gap-10">
          <div>
            <Link to="/" className="flex items-center">
              <img src={kumoraLogo.url} alt="Kumora" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              The intelligent operating system for modern campuses. One platform for every department.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-foreground/90">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-7 border-t border-border flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Kumora, Inc. All rights reserved.</p>
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
