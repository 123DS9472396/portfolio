"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const navLinks = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "certifications", label: "Certifications" },
  { href: "contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (progressRef.current) {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        progressRef.current.style.transform = `scaleX(${pct})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2.2, ease: "power3.out" }
    );
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />
      <header
        ref={headerRef}
        style={{ opacity: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3 bg-[hsl(0,0%,3%)]/95 backdrop-blur-md border-b border-border/40" : "py-5"
        )}
      >
        <div className="section-container flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-lg tracking-tight"
          >
            <span className="text-gradient">DS</span>
            <span className="text-muted-foreground/40 font-mono text-xs ml-1">.dev</span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={cn(
                  "nav-link text-muted-foreground hover:text-foreground transition-colors duration-200",
                  active === href && "text-foreground active"
                )}
              >
                {label}
              </button>
            ))}
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 rounded-full border border-primary/40 font-mono text-xs text-primary hover:bg-primary/10 hover:border-primary/70 transition-all duration-200"
            >
              Resume
            </a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "block w-5 h-px bg-foreground transition-all duration-300",
                  menuOpen && i === 0 && "rotate-45 translate-y-[6px]",
                  menuOpen && i === 1 && "opacity-0",
                  menuOpen && i === 2 && "-rotate-45 -translate-y-[6px]"
                )}
              />
            ))}
          </button>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-400 bg-[hsl(0,0%,3%)] border-b border-border/40",
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          )}
        >
          <nav className="section-container flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left py-3 font-mono text-sm text-muted-foreground hover:text-foreground border-b border-border/30 last:border-0 transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
