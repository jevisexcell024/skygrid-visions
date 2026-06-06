import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CASE_STUDIES } from "@/data/case-studies";

export const Route = createFileRoute("/customers/")({
  head: () => ({
    meta: [
      { title: "Customers — Kumora case studies" },
      { name: "description", content: "See how universities and institutions transform their operations with Kumora." },
      { property: "og:title", content: "Customers — Kumora" },
      { property: "og:description", content: "Real results from real partnerships with leading institutions." },
    ],
  }),
  component: CustomersPage,
});

function CustomersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 md:pt-32 pb-12">
        <div className="container-1400">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-4xl">
            Real results
            <br />
            from <span className="text-primary">real partnerships.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            See how we've helped universities and institutions transform their operations with Kumora.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-1400">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    {c.category} · {c.client}
                  </div>
                  <h2 className="mt-2 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">
                    {c.headline}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {c.summary}
                  </p>
                  <div className="mt-6 text-sm font-medium text-primary inline-flex items-center gap-1">
                    Read case study <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
