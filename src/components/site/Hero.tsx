import { ArrowRight, PlayCircle, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCloud from "@/assets/hero-cloud.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden section-pad">
      {/* Background blurs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 h-[500px] w-[500px] rounded-full bg-burgundy/30 blur-[120px]" />
        <div className="absolute -bottom-20 right-0 h-[600px] w-[600px] rounded-full bg-amber-brand/15 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container-1400 grid lg:grid-cols-[45fr_55fr] gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-amber-brand animate-pulse" />
            <span className="text-amber-brand">NEW</span>
            <span className="text-muted-foreground">·  Enterprise-grade NVMe servers now live</span>
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Cloud hosting
            <br />
            built for{" "}
            <span className="text-gradient-amber">scale</span>.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Lightning-fast infrastructure spanning 50+ global data centers. Deploy in seconds,
            scale infinitely, and sleep well with 99.99% uptime guaranteed.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" className="h-13 px-7 bg-amber-brand text-background hover:bg-amber-brand/90 font-semibold shadow-glow-amber group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-7 glass border-white/15 hover:bg-white/5">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-amber-brand" /> SOC 2 Type II</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-amber-brand" /> 99.99% Uptime</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-amber-brand" /> 4.9/5 · 12k+ reviews</div>
          </div>
        </div>

        {/* Right — illustration */}
        <HeroIllustration />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[700px] mx-auto">
      {/* Background glows */}
      <div className="absolute inset-10 rounded-full bg-amber-brand/20 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-20 rounded-full bg-burgundy/30 blur-3xl" />

      {/* Rotating ring */}
      <div className="absolute inset-0 animate-spin-slow opacity-60">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" strokeDasharray="4 8" />
          <defs>
            <linearGradient id="ringGrad" x1="0" x2="1">
              <stop offset="0" stopColor="#FFC107" stopOpacity="0.6" />
              <stop offset="1" stopColor="#66001F" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main image */}
      <img
        src={heroCloud}
        alt="CloudNova cloud infrastructure platform with floating servers and dashboards"
        width={1024}
        height={1024}
        className="relative z-10 w-full h-full object-contain animate-float drop-shadow-2xl"
      />

      {/* Floating stat cards */}
      <FloatingStat
        className="top-6 -left-2 md:left-0"
        label="CPU"
        value="42%"
        accent="amber"
        delay="0s"
      />
      <FloatingStat
        className="top-1/4 -right-2 md:-right-4"
        label="Uptime"
        value="99.99%"
        accent="green"
        delay="1.5s"
      />
      <FloatingStat
        className="bottom-16 -left-4 md:-left-6"
        label="Bandwidth"
        value="2.4 TB/s"
        accent="burgundy"
        delay="0.8s"
      />
      <FloatingStat
        className="bottom-2 right-4"
        label="RAM"
        value="64 GB"
        accent="amber"
        delay="2.2s"
      />

      {/* Particles */}
      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-amber-brand"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.6,
            animation: `pulse-glow ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
            boxShadow: "0 0 8px #FFC107",
          }}
        />
      ))}
    </div>
  );
}

function FloatingStat({
  className, label, value, accent, delay,
}: { className: string; label: string; value: string; accent: "amber" | "green" | "burgundy"; delay: string }) {
  const dot = accent === "amber" ? "bg-amber-brand" : accent === "green" ? "bg-emerald-400" : "bg-burgundy";
  return (
    <div
      className={`absolute glass rounded-xl px-4 py-3 shadow-card z-20 ${className}`}
      style={{ animation: `float 5s ease-in-out ${delay} infinite` }}
    >
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
        <span className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse`} />
        {label}
      </div>
      <div className="mt-1 font-display text-xl font-bold text-foreground">{value}</div>
    </div>
  );
}
