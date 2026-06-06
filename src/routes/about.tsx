import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kumora" },
      { name: "description", content: "Kumora is building the operating system for the modern campus, designed by educators and engineers." },
      { property: "og:title", content: "About Kumora" },
      { property: "og:description", content: "Built by educators and engineers tired of fragmented campus tools." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Educator-led", desc: "Every feature is reviewed by the educators and administrators who'll actually live with it." },
  { title: "Engineering bar", desc: "We treat reliability as a feature. 99.97% measured uptime, not a marketing claim." },
  { title: "Open by default", desc: "We publish our APIs and our data schema, so you're never locked in." },
];

function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 md:pt-32 pb-20">
        <div className="container-1400">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-4xl">
            We're building the operating system for the
            <span className="text-primary"> modern campus.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Kumora was started by educators and engineers who got tired of fragmented campus tools.
            Today, we serve 200+ institutions and 12 million students worldwide.
          </p>
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-border">
        <div className="container-1400 grid md:grid-cols-3 gap-10">
          {VALUES.map((v) => (
            <div key={v.title}>
              <h2 className="font-display text-2xl font-medium">{v.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-1400 grid md:grid-cols-4 gap-10">
          {[
            { v: "200+", l: "Institutions" },
            { v: "12M+", l: "Students managed" },
            { v: "99.97%", l: "Uptime" },
            { v: "8 yrs", l: "Building Kumora" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl font-medium text-ink">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            Want to work with us?
          </h2>
          <div className="mt-9">
            <Link to="/contact">
              <Button size="lg" className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
