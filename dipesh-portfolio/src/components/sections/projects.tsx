"use client";

import { useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { motion, useInView, AnimatePresence } from "motion/react";
import { SiGithub } from "react-icons/si";
import { HiExternalLink, HiX } from "react-icons/hi";
import Image from "next/image";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative glass rounded-3xl border border-border/60 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden rounded-t-3xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-60"
            />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: `linear-gradient(135deg, ${project.color}20, transparent)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span
                className="font-mono text-xs px-2 py-1 rounded-full border"
                style={{
                  color: project.color,
                  borderColor: `${project.color}40`,
                  background: `${project.color}10`,
                }}
              >
                {project.category}
              </span>
              <h3 className="font-display font-bold text-2xl mt-2 text-foreground">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <HiX size={16} />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>

            {/* Highlights */}
            <div>
              <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Key Features
              </h4>
              <ul className="flex flex-col gap-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: project.color }}
                    />
                    <span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.frontend.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-1 rounded-md bg-secondary text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.backend.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-1 rounded-md bg-secondary text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all text-sm"
              >
                <SiGithub size={16} />
                <span className="font-mono">GitHub</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white transition-all text-sm"
                  style={{ background: project.color }}
                >
                  <HiExternalLink size={16} />
                  <span className="font-mono">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="project-card glass rounded-2xl border border-border/60 overflow-hidden cursor-pointer hover:border-primary/30 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${project.color}30, transparent)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-full border"
            style={{
              color: project.color,
              borderColor: `${project.color}40`,
              background: `${project.color}15`,
            }}
          >
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 rounded-full glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <SiGithub size={12} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-full glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <HiExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {[...project.tech.frontend, ...project.tech.backend]
            .slice(0, 4)
            .map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground"
              >
                {t}
              </span>
            ))}
          {project.tech.frontend.length + project.tech.backend.length > 4 && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">
              +{project.tech.frontend.length + project.tech.backend.length - 4}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 pt-1">
          <span className="font-mono text-xs text-primary">View Details</span>
          <span className="text-primary text-xs">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-mono text-sm text-primary tracking-widest uppercase">
              Work
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Real-world applications combining modern web development with AI/ML
            capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/123DS9472396"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all text-sm font-mono"
          >
            <SiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
