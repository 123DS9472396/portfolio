"use client";

import { useEffect, useRef } from "react";
import { skillsConfig } from "@/data/config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TECH_TAGS = [
  "React", "TypeScript", "Next.js", "Node.js", "Python", "FastAPI",
  "GSAP", "Three.js", "WebGL", "Tailwind CSS", "Supabase", "PostgreSQL",
  "YOLOv8", "OpenCV", "scikit-learn", "LLM APIs", "Docker", "Git",
];

const CAT_META: Record<string, { label: string; accent: string }> = {
  frontend: { label: "Frontend", accent: "#3b82f6" },
  backend:  { label: "Backend & Database", accent: "#10b981" },
  aiml:     { label: "AI / Machine Learning", accent: "#f59e0b" },
  tools:    { label: "Tools & DevOps", accent: "#14b8a6" },
};

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-header",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".skill-header", start: "top 82%", once: true },
        }
      );

      gsap.fromTo(
        ".skill-cat",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".skill-cat", start: "top 80%", once: true },
        }
      );

      // Animate skill bars on scroll
      document.querySelectorAll<HTMLElement>(".skill-bar-fill").forEach((bar) => {
        const level = bar.getAttribute("data-level") || "0";
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: parseFloat(level) / 100,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: bar, start: "top 90%", once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-36 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb orb-blue absolute w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="skill-header text-center mb-16">
          <div className="section-label justify-center mb-3">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Stack</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            A full toolkit for building modern web apps and AI-powered systems — from pixel-perfect frontends to intelligent backends.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {(Object.entries(skillsConfig) as [keyof typeof skillsConfig, typeof skillsConfig[keyof typeof skillsConfig]][]).map(
            ([key, skills]) => {
              const meta = CAT_META[key];
              return (
                <div key={key} className="skill-cat glass-card rounded-2xl p-6">
                  <h3
                    className="font-mono text-xs font-semibold mb-5 uppercase tracking-widest"
                    style={{ color: meta.accent }}
                  >
                    {meta.label}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {skills.map((s) => (
                      <div key={s.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-mono text-xs text-foreground/80">{s.name}</span>
                          <span className="font-mono text-[10px] text-muted-foreground">{s.level}%</span>
                        </div>
                        <div className="skill-bar-track">
                          <div
                            className="skill-bar-fill"
                            data-level={s.level}
                            style={{ background: `linear-gradient(90deg, ${meta.accent}, ${meta.accent}99)` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Marquee */}
        <div className="marquee-outer py-1">
          <div className="marquee-track">
            <div className="marquee-track-inner">
              {TECH_TAGS.map((t) => (
                <span key={t} className="font-mono text-xs text-muted-foreground/50 px-2 py-1 border border-border/30 rounded-md whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
            <div className="marquee-track-inner" aria-hidden="true">
              {TECH_TAGS.map((t) => (
                <span key={t + "-2"} className="font-mono text-xs text-muted-foreground/50 px-2 py-1 border border-border/30 rounded-md whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
