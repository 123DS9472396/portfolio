"use client";

import { siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-display font-bold text-lg"
            >
              <span className="text-gradient">DS</span>
              <span className="text-foreground/40 ml-1 text-sm font-normal font-mono">
                .dev
              </span>
            </a>
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Dipesh Sharma. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
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
                className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="font-mono text-xs text-muted-foreground">
              Built with Next.js + TypeScript
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              GSAP + Three.js + WebGL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
