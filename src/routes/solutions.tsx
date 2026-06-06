import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceCards } from "@/components/site/ServiceCards";
import { HostingPlans } from "@/components/site/HostingPlans";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Kumora" },
      { name: "description", content: "Twelve modules under one platform: student management, navigation, security, attendance, and more." },
      { property: "og:title", content: "Solutions — Kumora" },
      { property: "og:description", content: "Twelve modules under one platform for the modern campus." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 md:pt-32 pb-12">
        <div className="container-1400">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-4xl">
            Everything a campus needs,
            <br />
            <span className="text-primary">nothing it doesn't.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            The unified operating layer connecting every aspect of campus life — from attendance to emergency response.
          </p>
        </div>
      </section>

      <ServiceCards />
      <WhyChooseUs />
      <HostingPlans />

      <Footer />
    </main>
  );
}
