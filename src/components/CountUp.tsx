"use client";

import { useEffect, useRef, useState } from "react";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = "",
  duration = 1200,
  delay = 0,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0" + suffix);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          setTimeout(() => {
            el.style.transform = "scale(1)";
            el.style.opacity = "1";

            let start: number | null = null;
            function animate(timestamp: number) {
              if (!start) start = timestamp;
              const elapsed = timestamp - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = easeOutQuart(progress);
              const current = Math.round(eased * target);
              setDisplay(current + suffix);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            }
            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration, delay]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        transform: "scale(0.95)",
        opacity: 0,
        transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
        display: "inline-block",
      }}
    >
      {display}
    </span>
  );
}
