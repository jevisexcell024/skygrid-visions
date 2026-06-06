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
      { title: "Kumora — The Intelligent Campus Operating System" },
      { name: "description", content: "Kumora is the smart campus management platform for universities and institutions. Manage learning, security, navigation, communications & operations in one intelligent system." },
      { property: "og:title", content: "Kumora — Smart Campus Infrastructure" },
      { property: "og:description", content: "The intelligent operating system for modern campuses. Trusted by 200+ institutions." },
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
