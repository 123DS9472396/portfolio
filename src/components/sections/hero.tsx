import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";

const roles = ["Full Stack Developer", "AI/ML Engineer", "React & TypeScript", "Open Source Builder"];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && typed.length < cur.length) t = setTimeout(() => setTyped(cur.slice(0, typed.length + 1)), 75);
    else if (!deleting && typed.length === cur.length) t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && typed.length > 0) t = setTimeout(() => setTyped(cur.slice(0, typed.length - 1)), 38);
    else { setDeleting(false); setRoleIdx((p) => (p + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const pts: P[] = Array.from({ length: 55 }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.4 + 0.4, a: Math.random() * 0.3 + 0.08 }));
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > canvas.width) p.vx *= -1; if (p.y < 0 || p.y > canvas.height) p.vy *= -1; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(59,130,246,${p.a})`; ctx.fill(); });
      pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => { const d = Math.hypot(a.x - b.x, a.y - b.y); if (d < 120) { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.strokeStyle = `rgba(59,130,246,${0.04 * (1 - d / 120)})`; ctx.lineWidth = 0.6; ctx.stroke(); } }));
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-enter", { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out", delay: 1.8 });
      gsap.fromTo(".hero-photo", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1, ease: "power3.out", delay: 2.1 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="orb orb-blue absolute w-[700px] h-[700px] -top-48 -left-48" />
      <div className="orb orb-teal absolute w-[500px] h-[500px] bottom-0 right-0" />

      <div className="section-container relative z-10 py-36 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="hero-enter flex items-center gap-3 opacity-0">
              <div className="open-to-work-badge px-3 py-1 rounded-full">
                <span className="font-mono text-[11px] text-emerald-200 font-medium tracking-wide">Open to Full-Time Opportunities</span>
              </div>
            </div>

            <div className="hero-enter opacity-0">
              <h1 className="font-display font-bold leading-[0.95] tracking-tight">
                <span className="block text-[clamp(3rem,7vw,5.5rem)] text-foreground">Dipesh</span>
                <span className="block text-[clamp(3rem,7vw,5.5rem)] text-gradient mt-1">Sharma</span>
              </h1>
            </div>

            <div className="hero-enter opacity-0 flex items-center gap-2 h-8">
              <span className="font-mono text-lg text-muted-foreground">{typed}</span>
              <span className="typed-cursor font-mono text-xl font-light">|</span>
            </div>

            <p className="hero-enter opacity-0 text-muted-foreground leading-[1.8] max-w-[540px] text-[0.95rem]">
              Computer Engineering Undergrad (B.E. 2026, CGPA 8.00) with 3 internships in full-stack development and data science. I build production MERN apps, ML-powered recommendation systems, and real-time computer vision platforms. Currently an SDE Intern at ITJOBXS. Actively seeking full-time SDE roles.
            </p>

            <div className="hero-enter opacity-0 flex flex-wrap gap-3">
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="px-6 py-2.5 bg-primary text-white font-medium text-sm rounded-full hover:opacity-90 transition-opacity glow-sm">View Projects</button>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="px-6 py-2.5 border border-border text-foreground font-medium text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200">Get In Touch</button>
              <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-border text-foreground font-medium text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200">Resume</a>
            </div>

            <div className="hero-enter opacity-0 flex items-center gap-4 pt-2">
              {[{ href: siteConfig.social.github, Icon: SiGithub, label: "GitHub" }, { href: siteConfig.social.linkedin, Icon: FaLinkedin, label: "LinkedIn" }, { href: siteConfig.social.leetcode, Icon: SiLeetcode, label: "LeetCode" }].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"><Icon size={15} /></a>
              ))}
              <span className="w-px h-4 bg-border" />
              <a href={`mailto:${siteConfig.email}`} className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors">{siteConfig.email}</a>
              <span className="w-px h-4 bg-border hidden sm:block" />
              <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline">{siteConfig.phone}</span>
            </div>
          </div>

          <div className="hero-photo opacity-0 hidden lg:block">
            <div className="relative">
              <div className="w-[340px] h-[420px] rounded-3xl overflow-hidden border border-border/40 glow-primary">
                <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dipesh Sharma" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[11px] text-foreground">Available for Full-Time Roles</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-anim absolute -top-4 -right-4 glass rounded-xl px-3 py-1.5 font-mono text-[11px] text-primary border border-primary/20">{"<React />"}</div>
              <div className="float-anim-r absolute -bottom-4 -left-4 glass rounded-xl px-3 py-1.5 font-mono text-[11px] text-teal-400 border border-teal-500/20">{"{ AI/ML }"}</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-primary/60" />
          <span className="font-mono text-[9px] text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
