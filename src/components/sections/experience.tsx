import { useEffect, useRef } from "react";
import { experienceConfig } from "@/data/config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiGlobe, HiLocationMarker } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const typeIcons: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  Remote: { icon: HiGlobe, color: "#3b82f6", label: "Remote" },
  Hybrid: { icon: HiLocationMarker, color: "#f59e0b", label: "Hybrid (On-site + Remote)" },
};

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".exp-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".exp-header", start: "top 82%", once: true } });
      gsap.fromTo(".timeline-line", { height: "0%" }, { height: "100%", duration: 1.4, ease: "power2.out", scrollTrigger: { trigger: ".timeline-wrap", start: "top 75%", once: true } });
      document.querySelectorAll(".exp-card").forEach((el, i) => { gsap.fromTo(el, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: i * 0.15, scrollTrigger: { trigger: el, start: "top 85%", once: true } }); });
      document.querySelectorAll(".timeline-dot").forEach((dot, i) => { gsap.fromTo(dot, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, delay: i * 0.15 + 0.3, scrollTrigger: { trigger: dot, start: "top 88%", once: true } }); });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb orb-teal absolute w-[450px] h-[450px] bottom-0 -left-32 opacity-40" />
      <div className="section-container relative z-10">
        <div className="exp-header text-center mb-16">
          <div className="section-label justify-center mb-3"><span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Internships</span></div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">Professional <span className="text-gradient">Experience</span></h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">3 internships across full-stack development, ML engineering, and data science.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="timeline-wrap relative pl-8 border-l border-border/30">
            <div className="timeline-line absolute top-0 left-0 w-px" />
            {experienceConfig.map((item, i) => {
              const typeInfo = typeIcons[item.type] || typeIcons.Remote;
              const TypeIcon = typeInfo.icon;
              return (
                <div key={i} className="relative mb-10 last:mb-0">
                  <div className="timeline-dot" style={{ opacity: 0, transform: "scale(0.4)" }} />
                  <div className="exp-card glass-card rounded-2xl p-6 hover:border-primary/25 transition-colors duration-300" style={{ opacity: 0 }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-3">
                        {item.logo ? (
                          <img src={item.logo} alt={item.company} className="w-11 h-11 rounded-xl object-contain bg-white/10 p-1.5 border border-border/40 flex-shrink-0" />
                        ) : (
                          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="font-display font-bold text-sm text-primary">{item.company.charAt(0)}</span>
                          </div>
                        )}
                        <div>
                          <h3 className="font-display font-bold text-lg">{item.role}</h3>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="font-mono text-xs text-primary font-medium">{item.company}</span>
                            {item.subtitle && (<><span className="w-1 h-1 rounded-full bg-border" /><span className="font-mono text-[11px] text-muted-foreground">{item.subtitle}</span></>)}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="font-mono text-[10px] text-muted-foreground px-3 py-1 rounded-full border border-border/60 whitespace-nowrap">{item.period}</span>
                        <div className="flex items-center gap-1.5">
                          <TypeIcon size={11} style={{ color: typeInfo.color }} />
                          <span className="font-mono text-[10px]" style={{ color: typeInfo.color }}>{typeInfo.label}</span>
                          <span className="text-muted-foreground/30 text-[10px]">|</span>
                          <span className="font-mono text-[10px] text-muted-foreground">{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-[1.8] mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">{item.tech.map((t) => (<span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-secondary/80 text-muted-foreground">{t}</span>))}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
