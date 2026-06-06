import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kumora" },
      { name: "description", content: "Get in touch with the Kumora team to schedule a consultation or campus demo." },
      { property: "og:title", content: "Contact Kumora" },
      { property: "og:description", content: "Schedule a consultation or campus demo." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 md:pt-32 pb-24">
        <div className="container-1400 grid lg:grid-cols-[1fr_1fr] gap-16">
          <div>
            <h1 className="font-display text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight">
              Let's talk about your <span className="text-primary">campus.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              Tell us about your institution and current systems. A Kumora architect will get back within one business day.
            </p>

            <div className="mt-12 space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@kumora.io" },
                { icon: MessageSquare, label: "Sales", value: "sales@kumora.io" },
                { icon: MapPin, label: "Headquarters", value: "London · Singapore · Nairobi" },
              ].map((i) => {
                const Icon = i.icon;
                return (
                  <div key={i.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{i.label}</div>
                      <div className="mt-1 font-medium text-foreground">{i.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form
            className="rounded-2xl bg-card border border-border p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch within one business day.");
            }}
          >
            <Field label="Full name" name="name" placeholder="Dr. Amara Okonkwo" />
            <Field label="Work email" name="email" type="email" placeholder="you@institution.edu" />
            <Field label="Institution" name="institution" placeholder="Apex University" />
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Tell us about your needs</label>
              <textarea
                rows={4}
                placeholder="What systems are you running today?"
                className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <Button type="submit" size="lg" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md">
              Schedule consultation
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
    </div>
  );
}
