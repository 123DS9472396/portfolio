import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".preloader-char", { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: "power3.out" })
      .to(".preloader-char", { y: -40, opacity: 0, stagger: 0.03, duration: 0.4, ease: "power2.in" }, "+=0.6")
      .to(ref.current, { yPercent: -100, duration: 0.7, ease: "power3.inOut" }, "-=0.2");
  }, []);

  const chars = "DS.dev".split("");

  return (
    <div ref={ref} className="preloader">
      <div className="preloader-text flex">
        {chars.map((c, i) => (
          <span key={i} className="preloader-char inline-block" style={{ opacity: 0 }}>
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </div>
    </div>
  );
}
