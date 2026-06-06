import { Users, MapPin, ClipboardCheck, Lock, Calendar, GraduationCap, Bell, Bus, IdCard, Home, CreditCard, Siren, ArrowUpRight } from "lucide-react";

const SERVICES = [
  { icon: Users, title: "Student Management", desc: "Complete lifecycle management — from enrollment to alumni, in one unified profile." },
  { icon: MapPin, title: "Campus Navigation", desc: "Real-time indoor navigation with live crowd detection and turn-by-turn guidance." },
  { icon: ClipboardCheck, title: "Smart Attendance", desc: "AI-powered facial recognition, NFC check-in, and geofencing — no more proxy attendance." },
  { icon: Lock, title: "Security Monitoring", desc: "24/7 surveillance integration with intelligent threat detection and access control." },
  { icon: Calendar, title: "Smart Scheduling", desc: "AI-driven timetables that optimize rooms, faculty, and student preferences." },
  { icon: GraduationCap, title: "Faculty Management", desc: "Streamline onboarding, workload tracking, and performance reviews in one dashboard." },
  { icon: Bell, title: "AI Notifications", desc: "Context-aware messages delivered to the right person at the right moment." },
  { icon: Bus, title: "Smart Transport", desc: "Real-time GPS for campus fleets, ETA predictions, and QR boarding." },
  { icon: IdCard, title: "Digital ID Systems", desc: "Biometric-integrated IDs — one credential for access, payments, and identity." },
  { icon: Home, title: "Hostel Management", desc: "Room allocation, maintenance requests, visitor logs, and utility monitoring." },
  { icon: CreditCard, title: "Smart Payments", desc: "Tuition, canteen, library fines, ticketing — unified through secure gateways." },
  { icon: Siren, title: "Emergency Alerts", desc: "Multi-channel broadcasts with evacuation routing and roll-call verification." },
];

export function ServiceCards() {
  return (
    <section id="features" className="section-pad">
      <div className="container-1400">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
              Platform Features
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Everything a campus needs, <span className="text-gradient-amber">nothing it doesn't</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            The unified operating layer connecting every aspect of campus life — from attendance to emergency response.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.title} href="#"
                className="group relative rounded-2xl p-8 glass border-white/10 hover:border-amber-brand/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-amber-brand/0 group-hover:bg-amber-brand/10 blur-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-burgundy grid place-items-center text-amber-brand group-hover:bg-amber-brand group-hover:text-background transition-all">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-amber-brand">
                    Explore
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
