import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import kumoraLogo from "@/assets/kumora-logo.png.asset.json";

const NAV: { label: string; to: string }[] = [
  { label: "Solutions", to: "/solutions" },
  { label: "Customers", to: "/customers" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground border-b border-primary">
      <div className="container-1400 flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={kumoraLogo.url} alt="Kumora" className="h-9 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors rounded-none"
              activeProps={{ className: "text-primary-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden sm:inline-flex">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium rounded-none">
              Get in touch
            </Button>
          </Link>
          <button className="lg:hidden p-2" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
