"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/config";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail, HiLocationMarker, HiArrowRight } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-header", start: "top 82%", once: true } }
      );
      gsap.fromTo(
        ".contact-left",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-left", start: "top 80%", once: true } }
      );
      gsap.fromTo(
        ".contact-right",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: ".contact-right", start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-36 relative">
      <div className="orb orb-blue absolute w-[500px] h-[500px] top-1/2 right-0 -translate-y-1/2 opacity-25" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="contact-header text-center mb-16">
          <div className="section-label justify-center mb-3">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Contact</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">
            {"Let's"} <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            Open to freelance work, internships, and full-time opportunities.
            Shoot me a message and {"I'll"} get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10">
          {/* Left — info */}
          <div className="contact-left flex flex-col gap-5" style={{ opacity: 0 }}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg mb-5">Get In Touch</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: HiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "text-blue-400" },
                  { icon: SiGithub, label: "GitHub", value: "123DS9472396", href: siteConfig.social.github, color: "text-foreground" },
                  { icon: FaLinkedin, label: "LinkedIn", value: "contact-dipesh-sharma", href: siteConfig.social.linkedin, color: "text-blue-500" },
                  { icon: SiLeetcode, label: "LeetCode", value: "0Gnp35bsad", href: siteConfig.social.leetcode, color: "text-orange-400" },
                ].map(({ icon: Icon, label, value, href, color }) => (
                  <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors">
                    <div className="w-9 h-9 rounded-xl border border-border/60 flex items-center justify-center glass group-hover:border-primary/30 transition-colors flex-shrink-0">
                      <Icon className={`${color} w-4 h-4`} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] text-muted-foreground">{label}</div>
                      <div className="text-sm text-foreground group-hover:text-primary transition-colors truncate">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-2">
                <HiLocationMarker className="text-primary w-4 h-4" />
                <span className="font-mono text-xs text-muted-foreground">Location</span>
              </div>
              <p className="text-sm text-foreground">India</p>
              <div className="flex items-center gap-2 mt-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-muted-foreground">Open to remote &amp; on-site roles</span>
              </div>
            </div>

            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:border-primary/30 transition-colors"
            >
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-1">Resume</div>
                <div className="text-sm text-foreground group-hover:text-primary transition-colors">
                  Download CV / Resume
                </div>
              </div>
              <HiArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all w-5 h-5" />
            </a>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="contact-right glass-card rounded-2xl p-8 flex flex-col gap-5"
            style={{ opacity: 0 }}
          >
            <h3 className="font-display font-semibold text-xl">Send a Message</h3>

            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col gap-1.5">
                <label htmlFor={id} className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{label}</label>
                <input
                  id={id}
                  type={type}
                  required
                  value={form[id as "name" | "email"]}
                  onChange={(e) => setForm((p) => ({ ...p, [id]: e.target.value }))}
                  placeholder={placeholder}
                  className="bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                placeholder="Tell me about your project or opportunity..."
                className="bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="py-3 bg-primary text-white font-medium text-sm rounded-xl hover:opacity-90 disabled:opacity-60 transition-opacity glow-sm"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-center font-mono text-xs text-emerald-400">
                Thanks! {"I'll"} reply soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
