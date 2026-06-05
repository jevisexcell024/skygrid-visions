import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { DomainSearch } from "@/components/site/DomainSearch";
import { HostingPlans } from "@/components/site/HostingPlans";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { InfrastructureMap } from "@/components/site/InfrastructureMap";
import { ServiceCards } from "@/components/site/ServiceCards";
import { SecurityDashboard } from "@/components/site/SecurityDashboard";
import { Testimonials } from "@/components/site/Testimonials";
import { BlogGrid } from "@/components/site/BlogGrid";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CloudNova — Cloud hosting built for scale" },
      { name: "description", content: "Lightning-fast NVMe cloud hosting across 50+ global data centers. 99.99% uptime, enterprise security, and developer-first tooling." },
      { property: "og:title", content: "CloudNova — Cloud hosting built for scale" },
      { property: "og:description", content: "Deploy in seconds, scale infinitely, sleep well. 99.99% uptime guaranteed." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DomainSearch />
      <HostingPlans />
      <WhyChooseUs />
      <InfrastructureMap />
      <ServiceCards />
      <SecurityDashboard />
      <Testimonials />
      <BlogGrid />
      <Footer />
    </main>
  );
}
