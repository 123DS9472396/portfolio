"use client";

import { siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const socials = [
  { href: siteConfig.social.github, icon: SiGithub, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: siteConfig.social.leetcode, icon: SiLeetcode, label: "LeetCode" },
  { href: `mailto:${siteConfig.email}`, icon: HiMail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-xl"
          >
            <span className="text-gradient">DS</span>
            <span className="font-mono text-xs text-muted-foreground/40 ml-1">.dev</span>
          </button>

          <p className="font-mono text-[11px] text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Dipesh Sharma &mdash; Built with Next.js, GSAP, Three.js &amp; TypeScript
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
