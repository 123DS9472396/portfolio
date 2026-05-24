"use client";

import { useRef } from "react";
import { skillsConfig } from "@/data/config";
import { motion, useInView } from "motion/react";

const techIcons: Record<string, string> = {
  React: "⚛️",
  TypeScript: "🔷",
  "Next.js": "▲",
  JavaScript: "🟨",
  "HTML/CSS": "🎨",
  GSAP: "🟢",
  "Three.js": "🔲",
  WebGL: "🌐",
  "Tailwind CSS": "💨",
  "Node.js": "🟩",
  Python: "🐍",
  FastAPI: "⚡",
  "Express.js": "🚂",
  PostgreSQL: "🐘",
  Supabase: "⚡",
  MongoDB: "🍃",
  "REST APIs": "🔗",
  YOLOv8: "👁️",
  OpenCV: "📷",
  "scikit-learn": "🤖",
  "LLM Integration": "🧠",
  "RAG Systems": "📚",
  "Claude/Groq API": "🤖",
  "Git/GitHub": "🐙",
  Docker: "🐳",
  Vite: "⚡",
  Vercel: "▲",
  "VS Code": "💙",
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend & Database",
  aiml: "AI / Machine Learning",
  tools: "Tools & DevOps",
};

const categoryColors: Record<string, string> = {
  frontend: "text-blue-400",
  backend: "text-green-400",
  aiml: "text-orange-400",
  tools: "text-teal-400",
};

function SkillTag({ name }: { name: string }) {
  return (
    <div className="group flex items-center gap-2 px-3 py-2 glass rounded-xl border border-border/60 hover:border-primary/40 transition-all duration-200 cursor-default">
      <span className="text-sm">{techIcons[name] || "•"}</span>
      <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(skillsConfig) as [
    keyof typeof skillsConfig,
    (typeof skillsConfig)[keyof typeof skillsConfig]
  ][];

  return (
    <section id="skills" className="py-32 relative">
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
              Tech Stack
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A comprehensive toolkit for building modern web applications and
            AI-powered systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(([key, skills], catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6 border border-border/60"
            >
              <h3
                className={`font-mono text-sm font-medium mb-4 ${categoryColors[key]}`}
              >
                {categoryLabels[key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillTag key={skill.name} name={skill.name} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="marquee-wrapper py-4">
            <div className="marquee-inner">
              {[
                ...Object.values(techIcons).slice(0, 12),
                ...Object.values(techIcons).slice(0, 12),
              ].map((icon, i) => (
                <span
                  key={i}
                  className="text-2xl mx-6 opacity-30 hover:opacity-70 transition-opacity"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
