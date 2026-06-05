import { Cloud, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = ["Hosting", "Domains", "Servers", "Security", "Pricing", "Blog"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container-1400 flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-brand rounded-lg blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-amber-brand to-burgundy grid place-items-center">
              <Cloud className="h-5 w-5 text-background" strokeWidth={2.5} />
            </div>
          </div>
          <span className="font-display text-xl font-bold tracking-tight">CloudNova</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-brand group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex text-foreground/80 hover:text-foreground">
            Sign In
          </Button>
          <Button className="bg-amber-brand text-background hover:bg-amber-brand/90 font-semibold shadow-glow-amber">
            Get Started
          </Button>
          <button className="lg:hidden p-2"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
}
