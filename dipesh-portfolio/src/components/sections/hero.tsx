"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";

const roles = [
  "Full Stack Developer",
  "React & TypeScript",
  "AI / ML Engineer",
  "Open Source Builder",
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  /* ── typewriter ── */
  useEffect(() => {
    const cur = roles[roleIdx];
    let t: NodeJS.Timeout;
    if (!deleting && typed.length < cur.length)
      t = setTimeout(() => setTyped(cur.slice(0, typed.length + 1)), 75);
    else if (!deleting && typed.length === cur.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && typed.length > 0)
      t = setTimeout(() => setTyped(cur.slice(0, typed.length - 1)), 38);
    else {
      setDeleting(false);
      setRoleIdx((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  /* ── particle WebGL canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const pts: P[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.35 + 0.08,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${p.a})`;
        ctx.fill();
      });
      pts.forEach((a, i) =>
        pts.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.04 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        })
      );
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);

  /* ── GSAP entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-enter",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          delay: 1.8,
        }
      );
      gsap.fromTo(
        ".hero-card",
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 2.1 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="orb orb-blue absolute w-[700px] h-[700px] -top-48 -left-48" />
      <div className="orb orb-teal absolute w-[500px] h-[500px] bottom-0 right-0" />

      <div className="section-container relative z-10 py-36 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <div className="hero-enter flex items-center gap-3 opacity-0">
              <div className="w-8 h-px bg-primary" />
              <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
                Hello, I&apos;m
              </span>
            </div>

            <div className="hero-enter opacity-0">
              <h1 className="font-display font-bold leading-[0.95] tracking-tight">
                <span className="block text-[clamp(3.5rem,8vw,6rem)] text-foreground">
                  Dipesh
                </span>
                <span className="block text-[clamp(3.5rem,8vw,6rem)] text-gradient mt-1">
                  Sharma
                </span>
              </h1>
            </div>

            <div className="hero-enter opacity-0 flex items-center gap-2 h-8">
              <span className="font-mono text-lg text-muted-foreground">{typed}</span>
              <span className="typed-cursor font-mono text-xl font-light">|</span>
            </div>

            <p className="hero-enter opacity-0 text-muted-foreground leading-[1.75] max-w-[520px] text-[0.95rem]">
              Building scalable web applications and AI-powered systems.
              Passionate about clean code, great UX, and real-world impact through technology.
              Expected graduation&nbsp;<span className="text-foreground">2026</span>.
            </p>

            <div className="hero-enter opacity-0 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-2.5 bg-primary text-white font-medium text-sm rounded-full hover:opacity-90 transition-opacity glow-sm"
              >
                View Projects
              </button>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-border text-foreground font-medium text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-enter opacity-0 flex items-center gap-4">
              {[
                { href: siteConfig.social.github, Icon: SiGithub, label: "GitHub" },
                { href: siteConfig.social.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
                { href: siteConfig.social.leetcode, Icon: SiLeetcode, label: "LeetCode" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
              <span className="w-px h-4 bg-border" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Right — code card */}
          <div className="hero-card opacity-0 hidden lg:block">
            <div className="relative">
              <div className="glass-card rounded-2xl p-6 glow-primary">
                {/* Terminal bar */}
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="font-mono text-[11px] text-muted-foreground ml-2">
                    ~/dipesh/portfolio.ts
                  </span>
                </div>

                <pre className="font-mono text-[11px] leading-6 text-left select-none">
                  <code>
                    <span className="text-blue-400">const</span>
                    {" "}
                    <span className="text-foreground">developer</span>
                    {" "}
                    <span className="text-blue-400">=</span>
                    {" "}
                    <span className="text-yellow-400">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-400">name</span>
                    <span className="text-foreground">: </span>
                    <span className="text-orange-300">&apos;Dipesh Sharma&apos;</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-400">role</span>
                    <span className="text-foreground">: </span>
                    <span className="text-orange-300">&apos;Full Stack + AI/ML&apos;</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-400">stack</span>
                    <span className="text-foreground">: [</span>
                    {"\n"}
                    {"    "}
                    <span className="text-orange-300">&apos;React&apos;</span>
                    <span className="text-foreground">, </span>
                    <span className="text-orange-300">&apos;TypeScript&apos;</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-orange-300">&apos;Next.js&apos;</span>
                    <span className="text-foreground">, </span>
                    <span className="text-orange-300">&apos;Node.js&apos;</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-orange-300">&apos;Python&apos;</span>
                    <span className="text-foreground">, </span>
                    <span className="text-orange-300">&apos;GSAP&apos;</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-orange-300">&apos;Three.js&apos;</span>
                    <span className="text-foreground">, </span>
                    <span className="text-orange-300">&apos;WebGL&apos;</span>
                    {"\n"}
                    {"  "}
                    <span className="text-foreground">],</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-400">gradYear</span>
                    <span className="text-foreground">: </span>
                    <span className="text-sky-400">2026</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-400">available</span>
                    <span className="text-foreground">: </span>
                    <span className="text-sky-400">true</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    <span className="text-yellow-400">{"}"}</span>
                    <span className="text-foreground">;</span>
                  </code>
                </pre>

                <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                  <div className="flex gap-5">
                    <div className="text-center">
                      <div className="font-display font-bold text-xl text-primary">3+</div>
                      <div className="font-mono text-[10px] text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display font-bold text-xl text-primary">2026</div>
                      <div className="font-mono text-[10px] text-muted-foreground">Grad Year</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-muted-foreground">Available</span>
                  </div>
                </div>
              </div>

              {/* floating chips */}
              <div className="float-anim absolute -top-5 -right-5 glass rounded-xl px-3 py-1.5 font-mono text-[11px] text-primary border border-primary/20">
                {"<TypeScript />"}
              </div>
              <div className="float-anim-r absolute -bottom-5 -left-5 glass rounded-xl px-3 py-1.5 font-mono text-[11px] text-teal-400 border border-teal-500/20">
                {"{ AI / ML }"}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-primary/60" />
          <span className="font-mono text-[9px] text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
