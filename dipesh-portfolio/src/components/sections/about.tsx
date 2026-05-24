"use client";

import { useEffect, useRef } from "react";
import { aboutConfig, siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "motion/react";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left - visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative glass rounded-3xl overflow-hidden border border-border/60 aspect-square max-w-[420px] mx-auto">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Developer workspace"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {aboutConfig.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="glass rounded-xl p-3 border border-border/40"
                  >
                    <div className="font-display font-bold text-sm text-primary">
                      {fact.value}
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-primary/10 hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border border-teal-500/10 hidden lg:block" />
          </div>

          {/* Right - content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-sm text-primary tracking-widest uppercase">
                About Me
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-tight">
              Crafting Digital{" "}
              <span className="text-gradient">Experiences</span>
            </h2>

            <div className="flex flex-col gap-4">
              {aboutConfig.description.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground w-24">Email</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-sm text-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground w-24">Graduation</span>
                <span className="font-mono text-sm text-foreground">
                  {siteConfig.graduationYear}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground w-24">Portfolio</span>
                <a
                  href={siteConfig.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-foreground hover:text-primary transition-colors"
                >
                  dipeshsharma.me
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              {[
                {
                  href: siteConfig.social.github,
                  icon: SiGithub,
                  label: "GitHub",
                },
                {
                  href: siteConfig.social.linkedin,
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: siteConfig.social.leetcode,
                  icon: SiLeetcode,
                  label: "LeetCode",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 text-sm"
                >
                  <Icon size={14} />
                  <span className="font-mono text-xs">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
