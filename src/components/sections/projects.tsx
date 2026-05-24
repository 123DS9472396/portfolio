"use client";

import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { SiGithub } from "react-icons/si";
import { HiExternalLink, HiX } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    gsap.fromTo(el, { y: 40, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div ref={modalRef} onClick={(e) => e.stopPropagation()} className="glass-card rounded-3xl border border-border/60 max-w-2xl w-full max-h-[85vh] overflow-y-auto" style={{ opacity: 0 }}>
        <div className="relative h-52 rounded-t-3xl overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover opacity-55" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.color}18 0%, transparent 60%)` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,6%)] via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 right-6">
            <span className="font-mono text-[10px] px-2.5 py-1 rounded-full border" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}>{project.category}</span>
            <h3 className="font-display font-bold text-2xl mt-2">{project.title}</h3>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><HiX size={15} /></button>
        </div>
        <div className="p-6 flex flex-col gap-5">
          <p className="text-muted-foreground leading-[1.8] text-sm">{project.longDescription}</p>
          <div>
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">Key Features</h4>
            <ul className="flex flex-col gap-2">{project.highlights.map((h, i) => (<li key={i} className="flex items-start gap-2.5 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color }} /><span className="text-muted-foreground">{h}</span></li>))}</ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ label: "Frontend", items: project.tech.frontend }, { label: "Backend", items: project.tech.backend }].map(({ label, items }) => (
              <div key={label}><h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">{label}</h4><div className="flex flex-wrap gap-1.5">{items.map((t) => (<span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary/80 text-muted-foreground">{t}</span>))}</div></div>
            ))}
          </div>
          <div className="flex gap-3 pt-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all text-xs font-mono"><SiGithub size={14} /> GitHub</a>
            {project.live && (<a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-mono transition-opacity hover:opacity-90" style={{ background: project.color }}><HiExternalLink size={14} /> Live Demo</a>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <div className={`project-card-${index} glass-card rounded-2xl overflow-hidden cursor-pointer group`} onClick={onClick} style={{ opacity: 0, transform: "translateY(50px)" }}>
      <div className="relative h-52 overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.color}20 0%, transparent 60%)` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,6%)] via-transparent to-transparent" />
        <div className="absolute top-4 left-4"><span className="font-mono text-[10px] px-2 py-1 rounded-full border" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}>{project.category}</span></div>
        <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-7 h-7 rounded-full glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground"><SiGithub size={12} /></a>
          {project.live && (<a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-7 h-7 rounded-full glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground"><HiExternalLink size={12} /></a>)}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors duration-200">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {[...project.tech.frontend, ...project.tech.backend].slice(0, 4).map((t) => (<span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary/80 text-muted-foreground">{t}</span>))}
          {project.tech.frontend.length + project.tech.backend.length > 4 && (<span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary/80 text-muted-foreground">+{project.tech.frontend.length + project.tech.backend.length - 4}</span>)}
        </div>
        <div className="flex items-center gap-1.5 pt-0.5"><span className="font-mono text-[11px] text-primary">View Details</span><span className="text-primary text-xs group-hover:translate-x-1 transition-transform duration-200">&rarr;</span></div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proj-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".proj-header", start: "top 82%", once: true } });
      projects.forEach((_, i) => { gsap.to(`.project-card-${i}`, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: `.project-card-${i}`, start: "top 85%", once: true }, delay: i * 0.1 }); });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative">
      <div className="section-container">
        <div className="proj-header text-center mb-16">
          <div className="section-label justify-center mb-3"><span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Work</span></div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">Featured <span className="text-gradient">Projects</span></h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">Production applications built with modern web technologies and AI/ML capabilities.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">{projects.map((p, i) => (<ProjectCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />))}</div>
        <div className="text-center mt-12"><a href="https://github.com/123DS9472396" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 border border-border rounded-full font-mono text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"><SiGithub size={14} /> More on GitHub</a></div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
