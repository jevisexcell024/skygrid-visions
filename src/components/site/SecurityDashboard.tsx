import { Shield, Activity, Siren, HardDriveDownload } from "lucide-react";
import securityImg from "@/assets/security-dashboard.png";

const ITEMS = [
  { icon: Shield, title: "Access Control", desc: "Biometric & RFID access for every gate, hostel, lab, and restricted facility." },
  { icon: Activity, title: "Real-time Monitoring", desc: "Continuous CCTV analysis with intelligent anomaly detection across campus." },
  { icon: Siren, title: "Emergency Alerts", desc: "Multi-channel broadcasts with evacuation routing and verified roll-call in minutes." },
  { icon: HardDriveDownload, title: "Incident Reporting", desc: "One-tap incident logging with location, evidence capture, and auto-escalation." },
];

export function SecurityDashboard() {
  return (
    <section id="admin" className="section-pad relative">
      <div className="container-1400 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
            Security & Admin
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Command every dimension of <span className="text-gradient-amber">campus operations</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg">
            The Kumora admin portal gives institutional leadership a real-time, bird's-eye view
            of everything happening on campus — consolidated into a single, intelligent interface.
          </p>

          <div className="mt-10 space-y-5">
            {ITEMS.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.title} className="flex gap-4 group">
                  <div className="h-12 w-12 shrink-0 rounded-xl glass grid place-items-center text-amber-brand group-hover:bg-amber-brand group-hover:text-background transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{it.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-10 rounded-full bg-burgundy/40 blur-3xl" />
          <div className="absolute inset-20 rounded-full bg-amber-brand/20 blur-3xl animate-pulse-glow" />
          <img src={securityImg} alt="Kumora admin dashboard with security, attendance and operations panels"
            width={1024} height={1024} loading="lazy"
            className="relative w-full h-auto animate-float drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
