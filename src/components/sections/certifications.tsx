"use client";

import { useEffect, useRef } from "react";
import { certificationsConfig } from "@/data/config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiAcademicCap } from "react-icons/hi";
import { SiGoogle, SiNvidia } from "react-icons/si";
import { FaAws } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const issuerIcons: Record<string, { icon: React.ElementType; color: string }> = {
  "Google": { icon: SiGoogle, color: "#4285f4" },
  "EduSkills": { icon: SiGoogle, color: "#34a853" },
  "Amazon Web Services": { icon: FaAws, color: "#ff9900" },
  "NVIDIA": { icon: SiNvidia, color: "#76b900" },
};

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-header", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".cert-header", start: "top 82%", once: true },
      });
      gsap.fromTo(".cert-card", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ".cert-card", start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-32 relative">
      <div className="orb orb-warm absolute w-[400px] h-[400px] top-1/4 -right-32 opacity-40" />

      <div className="section-container relative z-10">
        <div className="cert-header text-center mb-16">
          <div className="section-label justify-center mb-3">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Credentials</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">
            Certifications &amp; <span className="text-gradient">Learning</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certificationsConfig.map((cert, i) => {
            const issuerInfo = issuerIcons[cert.issuer];
            const IssuerIcon = issuerInfo?.icon || HiAcademicCap;
            const iconColor = issuerInfo?.color || "hsl(210 100% 56%)";
            return (
              <div key={i} className="cert-card glass-card rounded-2xl p-5 flex flex-col gap-3 hover:border-primary/25 transition-colors" style={{ opacity: 0 }}>
                <div className="w-10 h-10 rounded-xl border border-border/40 flex items-center justify-center" style={{ background: `${iconColor}10` }}>
                  <IssuerIcon size={18} style={{ color: iconColor }} />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-sm leading-tight mb-1">{cert.title}</h4>
                  <p className="font-mono text-[10px] text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="pt-1 border-t border-border/30">
                  <span className="font-mono text-[10px] text-muted-foreground">{cert.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
