import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white pt-24 md:pt-32 pb-20 md:pb-28">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#FFC107" />
      <div className="container-1400 relative z-[2]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight text-white">
              The intelligent OS
              <br />
              for the <span style={{ color: "var(--amber-brand)" }}>modern campus</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              Kumora unifies student management, navigation, security, scheduling, and
              analytics into one coherent platform — purpose-built for universities and
              learning institutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md">
                  Schedule consultation
                </Button>
              </Link>
              <Link to="/customers">
                <Button size="lg" variant="outline" className="h-12 px-6 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium rounded-md">
                  View case studies
                </Button>
              </Link>
            </div>
          </div>

          <HeroPanel />
        </div>

        <div className="mt-24 md:mt-32 border-t border-white/10 pt-10">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/50">
            Trusted by leading institutions
          </p>
          <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max gap-16 animate-marquee">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex shrink-0 gap-16 pr-16">
                  {["APEX UNIVERSITY", "NORTHFIELD", "GLOBAL TECH", "MERIDIAN", "ATLAS COLLEGE", "RIDGEMONT", "CASCADE TECH", "HARBOR STATE"].map((n) => (
                    <div key={n} className="font-display text-base font-semibold tracking-wider text-white/65 whitespace-nowrap">
                      {n}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function HeroPanel() {
  return (
    <div className="relative">
      <div className="rounded-2xl bg-card border border-border shadow-card p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-md bg-primary/10 grid place-items-center">
              <span className="h-2.5 w-2.5 rounded-sm bg-primary" />
            </span>
            <span className="text-sm font-medium text-foreground">Campus OS Active</span>
          </div>
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-3 w-0.5 bg-primary/70" style={{ opacity: 0.4 + i * 0.2 }} />
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {[
            { label: "Students", value: "12,847" },
            { label: "Attendance", value: "94.7%" },
            { label: "Uptime", value: "99.97%" },
            { label: "Faculty", value: "142" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-secondary p-4">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                {s.label}
              </div>
              <div className="mt-1 font-display text-2xl font-medium text-ink">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-border p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium">SYSTEM</span>
            <span className="text-muted-foreground">Production</span>
          </div>
          <div className="mt-1 flex items-end justify-between">
            <div>
              <div className="font-display text-lg font-medium text-ink">Autonomous Campus Engine</div>
              <div className="text-xs text-muted-foreground mt-0.5">1,284 events processed today</div>
            </div>
            <ArrowRight className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
