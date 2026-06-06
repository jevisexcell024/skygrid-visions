import { Star, Quote } from "lucide-react";

const TS = [
  {
    name: "Dr. Amara Okonkwo", role: "Vice Chancellor · Apex University",
    text: "Kumora transformed how we manage our 18,000-student campus. The smart attendance system alone saved us 40 staff-hours per week. The AI insights are genuinely remarkable.",
    initials: "AO",
  },
  {
    name: "Marcus Thompson", role: "Head of IT · Northfield College",
    text: "Our IT team was skeptical about migration, but the Kumora onboarding was flawless. The API documentation is world-class and integration with our existing LMS took two days.",
    initials: "MT",
  },
  {
    name: "Sandra Kwame", role: "Campus Security Director · Global Tech Institute",
    text: "The emergency alert system is what sold us. During our campus drill, we evacuated 4,200 students with verified roll-call in under 8 minutes. That's Kumora's power.",
    initials: "SK",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-1400">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
            What Institutions Say
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Campus leaders love <span className="text-gradient-amber">Kumora</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TS.map((t) => (
            <div key={t.name} className="relative rounded-2xl glass p-8 shadow-card hover:-translate-y-1 transition-transform">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-amber-brand/30" />
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-amber-brand grid place-items-center font-bold text-background">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-5 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-brand text-amber-brand" />
                ))}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
