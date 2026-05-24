import { useEffect, useRef } from "react";
import { educationConfig } from "@/data/config";
import { TbSchool, TbTrophy, TbUsers } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".edu-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".edu-header", start: "top 82%", once: true } });
      gsap.fromTo(".edu-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".edu-card", start: "top 85%", once: true } });
      gsap.fromTo(".edu-highlight", { x: -20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger: ".edu-highlight", start: "top 88%", once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-32 relative">
      <div className="orb orb-warm absolute w-[400px] h-[400px] top-1/2 -right-32 -translate-y-1/2 opacity-40" />
      <div className="section-container relative z-10">
        <div className="edu-header text-center mb-16">
          <div className="section-label justify-center mb-3"><span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Education</span></div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">Academic <span className="text-gradient">Background</span></h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="edu-card glass-card rounded-3xl p-8 border border-border/50 hover:border-primary/25 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <TbSchool size={28} className="text-primary" />
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl">{educationConfig.degree}</h3>
                    <p className="font-mono text-sm text-primary mt-1">{educationConfig.institution}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">{educationConfig.university} &middot; {educationConfig.location}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span className="font-mono text-[11px] text-muted-foreground px-3 py-1.5 rounded-full border border-border/60">{educationConfig.period}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">CGPA:</span>
                      <span className="font-display font-bold text-lg text-emerald-400">{educationConfig.cgpa}</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/40 mb-4" />

                <div className="flex flex-col gap-2.5">
                  {educationConfig.highlights.map((h, i) => (
                    <div key={i} className="edu-highlight flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-secondary/80 flex items-center justify-center flex-shrink-0">
                        {i === 2 ? <TbTrophy size={12} className="text-amber-400" /> : <TbUsers size={12} className="text-primary" />}
                      </div>
                      <span className="text-muted-foreground text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
