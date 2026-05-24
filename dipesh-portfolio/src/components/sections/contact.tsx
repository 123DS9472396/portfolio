"use client";

import { useRef, useState } from "react";
import { siteConfig } from "@/data/config";
import { motion, useInView } from "motion/react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactLinks = [
    {
      icon: HiMail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: "text-blue-400",
    },
    {
      icon: SiGithub,
      label: "GitHub",
      value: "123DS9472396",
      href: siteConfig.social.github,
      color: "text-foreground",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "contact-dipesh-sharma",
      href: siteConfig.social.linkedin,
      color: "text-blue-500",
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      value: "0Gnp35bsad",
      href: siteConfig.social.leetcode,
      color: "text-orange-400",
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-mono text-sm text-primary tracking-widest uppercase">
              Contact
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            {"Let's"} <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Available for freelance work, internships, and full-time
            opportunities. {"Let's"} build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-8 border border-border/60">
              <h3 className="font-display font-bold text-xl mb-6">
                Get In Touch
              </h3>

              <div className="flex flex-col gap-4">
                {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl glass border border-border/60 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <Icon className={`${color} w-4 h-4`} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {label}
                      </div>
                      <div className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-border/60">
              <div className="flex items-center gap-3 mb-3">
                <HiLocationMarker className="text-primary w-4 h-4" />
                <span className="font-mono text-sm text-muted-foreground">
                  Location
                </span>
              </div>
              <p className="text-foreground">India</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-muted-foreground">
                  Open to remote & on-site opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-border/60 flex flex-col gap-5"
            >
              <h3 className="font-display font-bold text-xl">
                Send a Message
              </h3>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your name"
                  className="bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className="bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Your message..."
                  className="bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 disabled:opacity-60 transition-all text-sm glow-blue-sm"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message Sent!"
                  : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-center font-mono text-xs text-green-400">
                  Thanks! {"I'll"} get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
