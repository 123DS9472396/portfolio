"use client";

import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          {new Date().getFullYear()} Dipesh Sharma. Built with Next.js & GSAP.
        </span>
        <a href={`mailto:${siteConfig.email}`} className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">{siteConfig.email}</a>
      </div>
    </footer>
  );
}
