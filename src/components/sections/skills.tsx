"use client";

import { useEffect, useRef } from "react";
import { skillsConfig } from "@/data/config";
import {
  SiReact, SiTypescript, SiNextdotjs, SiJavascript, SiHtml5, SiTailwindcss,
  SiGreensock, SiBootstrap, SiNodedotjs, SiPython, SiExpress,
  SiPostgresql, SiSupabase, SiMongodb, SiMysql, SiFirebase,
  SiOpencv, SiScikitlearn, SiTensorflow, SiNumpy,
  SiGit, SiPostman, SiVercel, SiGooglecolab
} from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { BsBraces, BsShieldLock } from "react-icons/bs";
import { VscCode } from "react-icons/vsc";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILL_ICONS: Record<string, React.ElementType> = {
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "SQL": SiPostgresql,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "HTML/CSS": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  "GSAP": SiGreensock,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "Supabase": SiSupabase,
  "Firebase": SiFirebase,
  "Scikit-Learn": SiScikitlearn,
  "TensorFlow": SiTensorflow,
  "NumPy/Pandas": SiNumpy,
  "Matplotlib": TbBrandPython,
  "OpenCV": SiOpencv,
  "YOLOv8": BsBraces,
  "Git/GitHub": SiGit,
  "VS Code": VscCode,
  "Postman": SiPostman,
  "JWT": BsShieldLock,
  "Google Colab": SiGooglecolab,
  "Render/Vercel": SiVercel,
};

const CAT_META: Record<string, { label: string; accent: string }> = {
  languages: { label: "Languages", accent: "#f59e0b" },
  frontend: { label: "Frontend", accent: "#3b82f6" },
  backend: { label: "Backend & Database", accent: "#10b981" },
  mlds: { label: "ML / Data Science", accent: "#ef4444" },
  tools: { label: "Tools & Platforms", accent: "#14b8a6" },
};

const TECH_MARQUEE = [
  "React.js", "TypeScript", "Next.js", "Node.js", "Python", "Express.js",
  "Tailwind CSS", "Supabase", "PostgreSQL", "MongoDB", "MySQL",
  "YOLOv8", "OpenCV", "Scikit-Learn", "TensorFlow", "Docker", "Git",
  "Streamlit", "Vercel", "Firebase", "JWT", "Socket.IO", "Pandas",
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skill-header", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".skill-header", start: "top 82%", once: true },
      });
      gsap.fromTo(".skill-cat", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ".skill-cat", start: "top 80%", once: true },
      });
      document.querySelectorAll<HTMLElement>(".skill-bar-fill").forEach((bar) => {
        const level = bar.getAttribute("data-level") || "0";
        gsap.fromTo(bar, { scaleX: 0 }, {
          scaleX: parseFloat(level) / 100,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: bar, start: "top 90%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb orb-blue absolute w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="section-container relative z-10">
        <div className="skill-header text-center mb-16">
          <div className="section-label justify-center mb-3">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Technical Skills</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            Full-stack development, machine learning, and data science — from responsive UIs to intelligent backends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {(Object.entries(skillsConfig) as [string, { name: string; level: number }[]][]).map(
            ([key, skills]) => {
              const meta = CAT_META[key];
              if (!meta) return null;
              return (
                <div key={key} className="skill-cat glass-card rounded-2xl p-5">
                  <h3
                    className="font-mono text-xs font-semibold mb-4 uppercase tracking-widest"
                    style={{ color: meta.accent }}
                  >
                    {meta.label}
                  </h3>
                  <div className="flex flex-col gap-3.5">
                    {skills.map((s) => {
                      const IconComp = SKILL_ICONS[s.name];
                      return (
                        <div key={s.name}>
                          <div className="flex justify-between items-center mb-1.5">
                            <div className="flex items-center gap-2">
                              {IconComp && <IconComp size={13} style={{ color: meta.accent }} />}
                              <span className="font-mono text-xs text-foreground/80">{s.name}</span>
                            </div>
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
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className="marquee-outer py-1">
          <div className="marquee-track">
            <div className="marquee-track-inner">
              {TECH_MARQUEE.map((t) => (
                <span key={t} className="font-mono text-xs text-muted-foreground/50 px-2 py-1 border border-border/30 rounded-md whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
            <div className="marquee-track-inner" aria-hidden="true">
              {TECH_MARQUEE.map((t) => (
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
