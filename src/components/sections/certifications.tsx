"use client";

import { useEffect, useRef } from "react";
import { certificationsConfig } from "@/data/config";
import { SiGoogle, SiNvidia } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ISSUER_META: Record<string, { icon: React.ElementType; color: string }> = {
  Google: { icon: SiGoogle, color: "#4285f4" },
  EduSkills: { icon: TbSchool, color: "#34a853" },
  "Amazon Web Services": { icon: FaAws, color: "#ff9900" },
  NVIDIA: { icon: SiNvidia, color: "#76b900" },
};

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".cert-header", start: "top 82%", once: true } });
      document.querySelectorAll(".cert-card").forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: i * 0.1, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="section-container relative z-10">
        <div className="cert-header text-center mb-16">
          <div className="section-label justify-center mb-3"><span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Credentials</span></div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">Certifications &amp; <span className="text-gradient">Courses</span></h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">Industry-recognized certifications in data analytics, cloud computing, and deep learning.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certificationsConfig.map((cert, i) => {
            const meta = ISSUER_META[cert.issuer] || { icon: TbSchool, color: "#3b82f6" };
            const Icon = meta.icon;
            return (
              <div key={i} className="cert-card glass-card rounded-2xl p-5 hover:border-primary/25 transition-colors duration-300" style={{ opacity: 0 }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${meta.color}15`, border: `1px solid ${meta.color}30` }}>
                    <Icon size={18} style={{ color: meta.color }} />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="font-display font-bold text-sm leading-snug">{cert.title}</h3>
                    <span className="font-mono text-[11px]" style={{ color: meta.color }}>{cert.issuer}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{cert.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
