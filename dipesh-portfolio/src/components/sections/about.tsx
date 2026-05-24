"use client";

import { useEffect, useRef } from "react";
import { aboutConfig, siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-left",
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-left", start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        ".about-right",
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-right", start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        ".about-stat",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".about-stat", start: "top 85%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-36 relative">
      <div className="orb orb-warm absolute w-[400px] h-[400px] top-1/2 -right-48 -translate-y-1/2 opacity-60" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="about-right mb-16 text-center">
          <div className="section-label justify-center mb-3">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">About</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <div className="about-left relative order-2 lg:order-1">
            <div className="relative max-w-[420px] mx-auto">
              <div className="glass-card rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Developer at work"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                {/* Stats overlay */}
                <div className="absolute bottom-6 left-5 right-5 grid grid-cols-2 gap-2.5">
                  {aboutConfig.facts.map((f) => (
                    <div key={f.label} className="about-stat glass rounded-xl p-3 border border-white/[0.07]">
                      <div className="font-display font-bold text-sm text-primary">{f.value}</div>
                      <div className="font-mono text-[10px] text-muted-foreground mt-0.5">{f.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating tag */}
              <div className="float-anim absolute -top-4 -right-4 glass rounded-2xl px-4 py-2.5 border border-primary/20">
                <div className="font-mono text-xs text-primary">dipeshsharma.me</div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="about-right order-1 lg:order-2 flex flex-col gap-6">
            {aboutConfig.description.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-[1.8] text-[0.95rem]">
                {para}
              </p>
            ))}

            <div className="h-px bg-border/50" />

            <div className="grid grid-cols-2 gap-4 font-mono text-sm">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-primary transition-colors text-xs break-all">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Portfolio</span>
                <a href={siteConfig.site} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors text-xs">
                  dipeshsharma.me
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Graduation</span>
                <span className="text-foreground text-xs">{siteConfig.graduationYear}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Status</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-foreground text-xs">Available</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap pt-1">
              {[
                { href: siteConfig.social.github, icon: SiGithub, label: "GitHub" },
                { href: siteConfig.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                { href: siteConfig.social.leetcode, icon: SiLeetcode, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 text-xs font-mono"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
