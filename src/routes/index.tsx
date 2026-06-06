import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  ShieldCheck,
  Layers,
  Users,
  Map,
  CalendarClock,
  CreditCard,
  BellRing,
  BarChart3,
  Plug,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/data/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kumora — The intelligent OS for modern campuses" },
      { name: "description", content: "Kumora unifies student management, navigation, security, scheduling, payments, and analytics into one platform for universities and learning institutions." },
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

const STATS = [
  { value: "200+", label: "Institutions on Kumora" },
  { value: "1.2M", label: "Students managed daily" },
  { value: "99.97%", label: "Platform uptime" },
  { value: "40 hrs", label: "Saved per campus / week" },
];

const MODULES = [
  { icon: Users, title: "Student records", desc: "A single verified profile across enrollment, attendance, hostel, and graduation." },
  { icon: CalendarClock, title: "Smart scheduling", desc: "Conflict-free timetables that adapt to faculty load and room availability." },
  { icon: Map, title: "Campus navigation", desc: "Turn-by-turn indoor and outdoor wayfinding with real-time room status." },
  { icon: BellRing, title: "Emergency alerts", desc: "Multi-channel alerting with verified roll-call across every muster point." },
  { icon: CreditCard, title: "Payments & finance", desc: "Tuition, hostel, library fines — collected and reconciled automatically." },
  { icon: BarChart3, title: "Operational analytics", desc: "Live dashboards for leadership across academics, ops, and finance." },
];

const STEPS = [
  { n: "01", title: "Discovery", desc: "We map your current stack, data sources, and stakeholders in a 2-week sprint." },
  { n: "02", title: "Migration", desc: "Connectors mirror your legacy systems with zero downtime cutover windows." },
  { n: "03", title: "Adoption", desc: "Faculty and staff onboard through guided in-app flows — not 200-page PDFs." },
  { n: "04", title: "Operate", desc: "A dedicated success architect supports your campus from day one." },
];

const COMPLIANCE = ["SOC 2 Type II", "FERPA", "GDPR", "ISO 27001", "WCAG 2.2 AA"];

const FAQS = [
  { q: "How long does a typical rollout take?", a: "Most institutions go live in 6–10 weeks. The fastest migration on record was 48 hours for a 4,000-student college." },
  { q: "Can Kumora integrate with our existing LMS?", a: "Yes. Kumora ships with native connectors for Canvas, Moodle, Blackboard, and any LMS that exposes a REST or LTI 1.3 surface." },
  { q: "Where is our data stored?", a: "Customer data is stored in the region of your choice (US, EU, or APAC). Every byte is encrypted at rest with per-tenant keys." },
  { q: "What does pricing look like?", a: "Pricing scales by enrolled students and modules adopted. Most universities land between $4–$9 per student per year." },
];

function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Stats band */}
      <section className="border-y border-border bg-surface">
        <div className="container-1400 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl font-medium text-ink">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad">
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

      {/* Modules grid */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-1400">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow">The platform</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium tracking-tight">
                One login. Every campus workflow.
              </h2>
            </div>
            <Link to="/solutions" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              See all modules <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {MODULES.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="bg-card p-8 hover:bg-secondary transition-colors">
                  <div className="h-10 w-10 rounded-md bg-accent/30 grid place-items-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-medium">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="container-1400">
          <div className="max-w-3xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium tracking-tight">
              From kickoff to campus-wide in four phases.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-foreground pt-6">
                <div className="font-display text-sm font-semibold text-primary tracking-widest">{s.n}</div>
                <h3 className="mt-4 font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & compliance */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-1400">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow">Security & compliance</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium tracking-tight">
                Built for the strictest institutional standards.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Kumora was engineered from day one for regulated education environments — per-tenant encryption, granular audit trails, and SSO with every major identity provider.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Per-tenant encryption keys, rotated quarterly",
                  "SSO with SAML 2.0, OIDC, and Microsoft Entra",
                  "Immutable audit logs streamed to your SIEM",
                  "Region-pinned data residency: US / EU / APAC",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-foreground/85">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card border border-border p-8 shadow-card">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-primary grid place-items-center text-primary-foreground">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-medium text-ink">Trust & compliance</div>
                  <div className="text-xs text-muted-foreground">Last audited 14 days ago</div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {COMPLIANCE.map((c) => (
                  <div key={c} className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground/85">
                    {c}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-accent/30 border border-accent/40 p-4 text-sm text-ink">
                <span className="font-semibold">100% uptime SLA</span> for Tier-1 institutions, backed by financial credits.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="section-pad">
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

      {/* Quote */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-narrow py-20 md:py-28 text-center">
          <p className="font-display text-2xl md:text-4xl font-medium leading-snug tracking-tight">
            "Kumora replaced four vendors and a decade of duct tape. Our staff now spend
            their days with students — not with spreadsheets."
          </p>
          <div className="mt-8 text-sm opacity-80">
            Dr. Amara Okonkwo · Vice Chancellor, Apex University
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-pad">
        <div className="container-1400">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div>
              <p className="eyebrow">Integrations</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium tracking-tight">
                Plays nicely with everything you already run.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Pre-built connectors for Canvas, Moodle, Blackboard, Microsoft 365, Google Workspace, Stripe, Paystack, and 40+ more — plus a fully documented REST and webhooks API.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                <Plug className="h-4 w-4" /> 40+ native integrations
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {["Canvas", "Moodle", "Blackboard", "Microsoft 365", "Google Workspace", "Stripe", "Paystack", "Okta", "Zoom", "Slack", "Twilio", "Workday"].map((n) => (
                <div key={n} className="aspect-square rounded-xl border border-border bg-card grid place-items-center text-sm font-medium text-foreground/75 hover:border-primary hover:text-primary transition-colors">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-narrow">
          <p className="eyebrow text-center w-full justify-center">FAQ</p>
          <h2 className="mt-4 text-center font-display text-4xl md:text-5xl font-medium tracking-tight">
            Questions, answered.
          </h2>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="font-display text-lg font-medium text-ink">{f.q}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
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
