import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BlogGrid } from "@/components/site/BlogGrid";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Kumora" },
      { name: "description", content: "Articles, playbooks, and engineering deep-dives from the Kumora team." },
      { property: "og:title", content: "Resources — Kumora" },
      { property: "og:description", content: "Articles and playbooks from the Kumora team." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 md:pt-32 pb-8">
        <div className="container-1400">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-4xl">
            From the <span className="text-primary">Kumora journal.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Playbooks, engineering write-ups, and field notes from the campuses we work with.
          </p>
        </div>
      </section>

      <BlogGrid />

      <Footer />
    </main>
  );
}
