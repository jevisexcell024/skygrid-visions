import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import kumoraLogo from "@/assets/kumora-logo.png.asset.json";

const NAV = ["Features", "Navigation", "Admin", "Pricing", "Testimonials", "Blog"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container-1400 flex h-20 items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={kumoraLogo.url} alt="Kumora" className="h-10 w-auto" />
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
            Book Demo
          </Button>
          <Button className="bg-amber-brand text-background hover:bg-amber-brand/90 font-semibold shadow-glow-amber">
            Start Free Trial
          </Button>
          <button className="lg:hidden p-2"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
}
