import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/customers/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.study.client} — Kumora case study` },
          { name: "description", content: loaderData.study.summary },
          { property: "og:title", content: `${loaderData.study.client} — Kumora` },
          { property: "og:description", content: loaderData.study.summary },
          { property: "og:image", content: loaderData.study.cover },
        ]
      : [],
  }),
  component: CaseStudyPage,
  notFoundComponent: () => (
    <main className="min-h-screen">
      <Header />
      <div className="container-narrow py-32 text-center">
        <h1 className="font-display text-4xl font-medium">Case study not found</h1>
        <Link to="/customers" className="mt-6 inline-block text-primary">← Back to customers</Link>
      </div>
      <Footer />
    </main>
  ),
  errorComponent: ({ reset }) => (
    <main className="min-h-screen">
      <Header />
      <div className="container-narrow py-32 text-center">
        <h1 className="font-display text-4xl font-medium">Something went wrong</h1>
        <button onClick={reset} className="mt-6 text-primary">Try again</button>
      </div>
      <Footer />
    </main>
  ),
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <main className="min-h-screen">
      <Header />

      <article>
        {/* Hero */}
        <section className="pt-20 md:pt-24 pb-12">
          <div className="container-narrow">
            <Link
              to="/customers"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All customers
            </Link>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.15em] text-primary font-medium">
                {study.category} · {study.client}
              </div>
              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
                {study.headline}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {study.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Cover */}
        <section className="pb-16">
          <div className="container-1400">
            <div className="aspect-[16/8] rounded-2xl overflow-hidden bg-secondary border border-border">
              <img src={study.cover} alt={study.client} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="pb-16">
          <div className="container-narrow">
            <div className="grid sm:grid-cols-3 gap-4">
              {study.metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-border bg-card p-6">
                  <div className="font-display text-4xl font-medium text-ink">{m.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="pb-16">
          <div className="container-narrow grid md:grid-cols-[160px_1fr] gap-10">
            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium sticky top-28">
                The challenge
              </div>
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">{study.challenge}</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-narrow grid md:grid-cols-[160px_1fr] gap-10">
            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium sticky top-28">
                Our approach
              </div>
            </div>
            <ul className="space-y-4">
              {study.approach.map((a, i) => (
                <li key={i} className="flex gap-4 text-lg leading-relaxed text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-narrow grid md:grid-cols-[160px_1fr] gap-10">
            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium sticky top-28">
                The outcome
              </div>
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">{study.outcome}</p>
          </div>
        </section>

        {/* Quote */}
        {study.quote && (
          <section className="pb-24">
            <div className="container-narrow">
              <figure className="rounded-2xl border border-border bg-surface p-10">
                <Quote className="h-8 w-8 text-primary" />
                <blockquote className="mt-5 font-display text-2xl md:text-3xl font-medium leading-snug text-ink">
                  "{study.quote.text}"
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium text-foreground">{study.quote.author}</span>
                  <span className="text-muted-foreground"> — {study.quote.role}</span>
                </figcaption>
              </figure>
            </div>
          </section>
        )}
      </article>

      {/* More */}
      {others.length > 0 && (
        <section className="section-pad bg-surface border-y border-border">
          <div className="container-1400">
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">More customer stories</h2>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  to="/customers/$slug"
                  params={{ slug: c.slug }}
                  className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-secondary">
                    <img src={c.cover} alt={c.client} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{c.client}</div>
                    <h3 className="mt-2 font-display text-xl font-medium group-hover:text-primary transition-colors">
                      {c.headline}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-pad">
        <div className="container-narrow text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            Want results like {study.client}?
          </h2>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/contact">
              <Button size="lg" className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md">
                Schedule consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
