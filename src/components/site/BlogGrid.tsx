import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

const POSTS = [
  {
    img: blog1, tag: "Case Study",
    title: "How Apex University onboarded 18,000 students in a single semester",
    summary: "A playbook for rolling out a campus OS without disrupting the academic calendar.",
    author: "Elena Park", date: "Mar 12, 2025", read: "8 min read",
  },
  {
    img: blog2, tag: "Security",
    title: "Inside Kumora's 8-minute campus evacuation drill",
    summary: "Breaking down the alert flow, roll-call mechanics, and lessons learned.",
    author: "Devon Wright", date: "Mar 5, 2025", read: "12 min read",
  },
  {
    img: blog3, tag: "AI",
    title: "Why we built our attendance engine on edge-side facial recognition",
    summary: "The privacy, latency, and cost reasons NFC + on-device AI beat the cloud.",
    author: "Riya Mehta", date: "Feb 28, 2025", read: "6 min read",
  },
];

export function BlogGrid() {
  return (
    <section id="blog" className="section-pad">
      <div className="container-1400">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-amber-brand uppercase tracking-wider">
              Insights
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              From the <span className="text-gradient-amber">Kumora journal</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-amber-brand hover:underline">View all articles →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {POSTS.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden glass border-white/10 hover:border-amber-brand/30 hover:-translate-y-1 transition-all">
              <div className="aspect-[16/9] overflow-hidden bg-burgundy/20">
                <img src={p.img} alt={p.title} width={1280} height={720} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="inline-flex px-2.5 py-1 rounded-md bg-amber-brand/15 text-amber-brand text-[10px] font-semibold uppercase tracking-wider">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold leading-snug group-hover:text-amber-brand transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/80">{p.author}</span>
                  <span>{p.date} · {p.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
