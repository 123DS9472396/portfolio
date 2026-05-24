"use client";

import { useEffect, useRef } from "react";
import { certificationsConfig, leadershipConfig } from "@/data/config";
import { SiGoogle, SiNvidia, SiCisco } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbSchool, TbTrophy, TbUsers } from "react-icons/tb";
import { HiExternalLink } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ISSUER_META: Record<string, { icon: React.ElementType; color: string }> = {
  Google: { icon: SiGoogle, color: "#4285f4" },
  EduSkills: { icon: TbSchool, color: "#34a853" },
  "Amazon Web Services": { icon: FaAws, color: "#ff9900" },
  NVIDIA: { icon: SiNvidia, color: "#76b900" },
  Cisco: { icon: SiCisco, color: "#1ba0d7" },
};

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".cert-header", start: "top 82%", once: true } });
      document.querySelectorAll(".cert-card").forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: i * 0.08, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
      gsap.fromTo(".leader-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".leader-card", start: "top 85%", once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="section-container relative z-10">
        <div className="cert-header text-center mb-16">
          <div className="section-label justify-center mb-3"><span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Credentials</span></div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">Certifications &amp; <span className="text-gradient">Leadership</span></h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">Industry-recognized certifications and leadership roles in tech communities.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
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

        <div className="max-w-4xl mx-auto">
          <h3 className="font-mono text-xs text-primary tracking-[0.2em] uppercase text-center mb-8">Leadership & Community</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {leadershipConfig.map((item, i) => (
              <div key={i} className="leader-card glass-card rounded-2xl p-5 hover:border-primary/25 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  {i === 0 ? <TbTrophy size={16} className="text-amber-400" /> : <TbUsers size={16} className="text-primary" />}
                  <h4 className="font-display font-bold text-sm">{item.role}</h4>
                </div>
                <p className="font-mono text-xs text-primary mb-2">{item.org}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors">
                    <HiExternalLink size={11} /> LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
