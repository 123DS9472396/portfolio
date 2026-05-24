"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "motion/react";

const roles = [
  "Full Stack Developer",
  "React & TypeScript",
  "AI/ML Integrations",
  "Open Source Builder",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="orb orb-blue absolute w-[600px] h-[600px] -top-32 -left-32 opacity-40" />
      <div className="orb orb-teal absolute w-[400px] h-[400px] bottom-0 right-0 opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-sm text-primary tracking-widest uppercase">
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-bold leading-none"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-foreground">
                Dipesh
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient mt-1">
                Sharma
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 h-8"
            >
              <span className="font-mono text-lg text-muted-foreground">
                {displayed}
              </span>
              <span className="typed-cursor font-mono text-lg">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground leading-relaxed max-w-lg text-base"
            >
              Building scalable web applications and AI-powered systems.
              Passionate about clean code, great UX, and solving real-world
              problems through technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all duration-200 text-sm glow-blue-sm"
              >
                View Projects
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground font-medium rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200 text-sm"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-5"
            >
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
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
              <div className="w-px h-5 bg-border" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {siteConfig.email}
              </a>
            </motion.div>
          </div>

          {/* Right column - visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Code card */}
              <div className="glass rounded-2xl p-6 border border-border/60 w-[380px] glow-blue">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="font-mono text-xs text-muted-foreground ml-2">
                    dipesh.ts
                  </span>
                </div>
                <pre className="font-mono text-xs leading-relaxed text-left">
                  <code>
                    <span className="text-blue-400">const</span>
                    <span className="text-foreground"> developer </span>
                    <span className="text-blue-400">= </span>
                    <span className="text-yellow-400">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">name</span>
                    <span className="text-foreground">: </span>
                    <span className="text-orange-400">
                      &apos;Dipesh Sharma&apos;
                    </span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">role</span>
                    <span className="text-foreground">: </span>
                    <span className="text-orange-400">
                      &apos;Full Stack Dev&apos;
                    </span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">stack</span>
                    <span className="text-foreground">: [</span>
                    {"\n"}
                    {"    "}
                    <span className="text-orange-400">
                      &apos;React&apos;, &apos;TypeScript&apos;,
                    </span>
                    {"\n"}
                    {"    "}
                    <span className="text-orange-400">
                      &apos;Next.js&apos;, &apos;Node.js&apos;,
                    </span>
                    {"\n"}
                    {"    "}
                    <span className="text-orange-400">
                      &apos;Python&apos;, &apos;AI/ML&apos;
                    </span>
                    {"\n"}
                    {"  "}
                    <span className="text-foreground">],</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">available</span>
                    <span className="text-foreground">: </span>
                    <span className="text-blue-400">true</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">gradYear</span>
                    <span className="text-foreground">: </span>
                    <span className="text-purple-400">2026</span>
                    <span className="text-foreground">,</span>
                    {"\n"}
                    <span className="text-yellow-400">{"}"}</span>
                    <span className="text-foreground">;</span>
                  </code>
                </pre>

                <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="font-display font-bold text-lg text-primary">
                        3+
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground">
                        Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-display font-bold text-lg text-primary">
                        2026
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground">
                        Grad Year
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-border/60 text-xs font-mono text-primary"
              >
                {"<TypeScript />"}
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-6 glass rounded-xl px-3 py-2 border border-border/60 text-xs font-mono text-teal-400"
              >
                {"{ AI/ML }"}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown className="text-muted-foreground w-4 h-4" />
          </motion.div>
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
