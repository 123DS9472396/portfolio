"use client";

import { useEffect, useRef } from "react";
import { experienceConfig } from "@/data/config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".exp-header", start: "top 82%", once: true } }
      );

      // Animate timeline line
      gsap.fromTo(
        ".timeline-line",
        { height: "0%" },
        { height: "100%", duration: 1.4, ease: "power2.out",
          scrollTrigger: { trigger: ".timeline-wrap", start: "top 75%", once: true } }
      );

      // Animate each card
      document.querySelectorAll(".exp-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: { trigger: el, start: "top 85%", once: true } }
        );
      });

      // Animate dots
      document.querySelectorAll(".timeline-dot").forEach((dot, i) => {
        gsap.to(dot, {
          opacity: 1, scale: 1, duration: 0.4, delay: i * 0.15 + 0.3,
          scrollTrigger: { trigger: dot, start: "top 88%", once: true },
        });
        gsap.fromTo(dot, { scale: 0.4 }, { scale: 1, duration: 0.4, delay: i * 0.15 + 0.3,
          scrollTrigger: { trigger: dot, start: "top 88%", once: true } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-36 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb orb-teal absolute w-[450px] h-[450px] bottom-0 -left-32 opacity-40" />

      <div className="section-container relative z-10">
        <div className="exp-header text-center mb-16">
          <div className="section-label justify-center mb-3">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Journey</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="timeline-wrap relative pl-8 border-l border-border/30">
            {/* Animated gradient line */}
            <div className="timeline-line absolute top-0 left-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            {[...experienceConfig, {
              role: "B.Tech — Computer Science",
              company: "Engineering College",
              period: "2022 – 2026",
              description: "Pursuing B.Tech in Computer Science with focus on software engineering, AI/ML, and modern web development. Expected graduation 2026.",
              tech: ["Data Structures", "Algorithms", "DBMS", "OS", "ML"],
            }].map((item, i) => (
              <div key={i} className="relative mb-10 last:mb-0">
                <div className="timeline-dot" style={{ opacity: 0, transform: "scale(0.4)" }} />
                <div className="exp-card glass-card rounded-2xl p-6 hover:border-primary/25 transition-colors duration-300" style={{ opacity: 0 }}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg">{item.role}</h3>
                      <span className="font-mono text-xs text-primary">{item.company}</span>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground px-3 py-1 rounded-full border border-border/60 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-[1.8] mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-secondary/80 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
