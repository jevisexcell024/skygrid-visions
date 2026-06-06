import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, ShieldCheck, Layers } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/data/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kumora — The intelligent OS for modern campuses" },
      { name: "description", content: "Kumora unifies student management, navigation, security, scheduling, and analytics in one coherent platform for universities and learning institutions." },
      { property: "og:title", content: "Kumora — Smart Campus Infrastructure" },
      { property: "og:description", content: "The intelligent operating system for modern campuses. Trusted by 200+ institutions." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  { icon: Brain, title: "AI-first intelligence", desc: "Every module learns your campus patterns and surfaces what matters." },
  { icon: ShieldCheck, title: "Enterprise security", desc: "FERPA, GDPR, and SOC 2 ready. Encryption at rest and in transit, by default." },
  { icon: Layers, title: "One unified platform", desc: "Twelve modules under one login. No more juggling disconnected campus systems." },
];

function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Pillars */}
      <section className="section-pad border-t border-border">
        <div className="container-1400">
          <div className="max-w-3xl">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium tracking-tight">
              Infrastructure that disappears, intelligence that doesn't.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title}>
                  <div className="h-11 w-11 rounded-lg bg-primary/10 grid place-items-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-1400">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow">Customers</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium tracking-tight">
                Real results from real partnerships.
              </h2>
            </div>
            <Link to="/customers" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              View all customers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c) => (
              <Link
                key={c.slug}
                to="/customers/$slug"
                params={{ slug: c.slug }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img src={c.cover} alt={c.client} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {c.category}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">
                    {c.headline}
                  </h3>
                  <div className="mt-5 text-sm font-medium text-primary inline-flex items-center gap-1">
                    Read case study <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-pad">
        <div className="container-narrow text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            Ready to see Kumora on your campus?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a 30-minute walkthrough with a Kumora architect. We'll map your existing systems and propose a phased migration.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/contact">
              <Button size="lg" className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md">
                Schedule consultation
              </Button>
            </Link>
            <Link to="/solutions">
              <Button size="lg" variant="outline" className="h-12 px-6 border-border bg-card hover:bg-secondary font-medium rounded-md">
                Explore solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
