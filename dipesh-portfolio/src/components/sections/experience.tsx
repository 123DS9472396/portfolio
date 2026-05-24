"use client";

import { useRef } from "react";
import { experienceConfig } from "@/data/config";
import { motion, useInView } from "motion/react";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-mono text-sm text-primary tracking-widest uppercase">
              Journey
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Experience &amp; <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l border-border/60">
            {experienceConfig.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] w-4 h-4 rounded-full border-2 border-primary bg-background" />

                {/* Card */}
                <div className="glass rounded-2xl p-6 border border-border/60 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-sm text-primary">
                        {exp.company}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground px-3 py-1 rounded-full border border-border/60">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -left-[41px] w-4 h-4 rounded-full border-2 border-teal-500 bg-background" />
              <div className="glass rounded-2xl p-6 border border-border/60 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      Bachelor of Technology
                    </h3>
                    <span className="font-mono text-sm text-teal-400">
                      Computer Science Engineering
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground px-3 py-1 rounded-full border border-border/60">
                    2022 – 2026
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Pursuing B.Tech in Computer Science with a focus on software
                  engineering, algorithms, and AI/ML. Expected graduation in
                  2026.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
