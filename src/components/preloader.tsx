"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!overlayRef.current || !barRef.current || !countRef.current) return;

    const tl = gsap.timeline();
    const count = { val: 0 };

    tl.to(count, {
      val: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate() {
        if (countRef.current) countRef.current.textContent = `${Math.round(count.val)}`;
        if (barRef.current) barRef.current.style.width = `${count.val}%`;
      },
    })
      .to(nameRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.8")
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        delay: 0.2,
        onComplete: () => setVisible(false),
      });

    return () => { tl.kill(); };
  }, []);

  if (!visible) return null;

  return (
    <div ref={overlayRef} className="preloader-overlay">
      <div className="flex flex-col items-center gap-10 w-64">
        <div
          ref={nameRef}
          className="font-display font-bold text-3xl text-gradient opacity-0"
          style={{ transform: "translateY(20px)" }}
        >
          Dipesh Sharma
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="h-px bg-border w-full overflow-hidden rounded-full">
            <div
              ref={barRef}
              className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
              style={{ width: "0%" }}
            />
          </div>
          <div className="flex justify-between">
            <span className="font-mono text-xs text-muted-foreground">Loading</span>
            <span className="font-mono text-xs text-primary">
              <span ref={countRef}>0</span>%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
