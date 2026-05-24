"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".contact-header", start: "top 82%", once: true } });
      gsap.fromTo(".contact-left", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".contact-left", start: "top 80%", once: true } });
      gsap.fromTo(".contact-right", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".contact-right", start: "top 80%", once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative">
      <div className="orb orb-blue absolute w-[500px] h-[500px] bottom-0 right-0 opacity-30" />
      <div className="section-container relative z-10">
        <div className="contact-header text-center mb-16">
          <div className="section-label justify-center mb-3"><span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Contact</span></div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">Get In <span className="text-gradient">Touch</span></h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">Open to full-time SDE roles. Let&apos;s connect and discuss how I can contribute to your team.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="contact-left flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg mb-5">Contact Information</h3>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><HiMail size={18} className="text-primary" /></div>
                  <div><span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Email</span><p className="font-mono text-xs text-foreground group-hover:text-primary transition-colors">{siteConfig.email}</p></div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"><HiPhone size={18} className="text-emerald-400" /></div>
                  <div><span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Phone</span><p className="font-mono text-xs text-foreground">{siteConfig.phone}</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center"><HiLocationMarker size={18} className="text-amber-400" /></div>
                  <div><span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Location</span><p className="font-mono text-xs text-foreground">Thane, Maharashtra, India</p></div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-sm mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {[
                  { href: siteConfig.social.github, icon: SiGithub, label: "GitHub", color: "#f0f0f0" },
                  { href: siteConfig.social.linkedin, icon: FaLinkedin, label: "LinkedIn", color: "#0077b5" },
                  { href: siteConfig.social.leetcode, icon: SiLeetcode, label: "LeetCode", color: "#ffa116" },
                ].map(({ href, icon: Icon, label, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all text-xs font-mono">
                    <Icon size={14} style={{ color }} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 flex flex-col gap-4">
              <h3 className="font-display font-bold text-lg mb-1">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Name</label>
                  <input type="text" required className="bg-secondary/50 border border-border/60 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Email</label>
                  <input type="email" required className="bg-secondary/50 border border-border/60 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Subject</label>
                <input type="text" required className="bg-secondary/50 border border-border/60 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="What's this about?" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Message</label>
                <textarea required rows={4} className="bg-secondary/50 border border-border/60 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" disabled={submitted} className="mt-2 px-6 py-3 bg-primary text-white font-medium text-sm rounded-xl hover:opacity-90 transition-opacity glow-sm disabled:opacity-60">
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
