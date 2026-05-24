import { useEffect, useState } from "react";
import { siteConfig } from "@/data/config";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/40" : ""}`}>
      <div className="section-container flex items-center justify-between h-16">
        <a href="#hero" className="font-display font-bold text-lg">
          <span className="text-primary">DS</span>
          <span className="text-muted-foreground text-sm">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
          ))}
          <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full border border-primary text-primary font-mono text-xs hover:bg-primary hover:text-white transition-all">Resume</a>
        </nav>
      </div>
    </header>
  );
}
