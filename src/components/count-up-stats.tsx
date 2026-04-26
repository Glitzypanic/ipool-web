"use client";

import { useEffect, useRef, useState } from "react";
import type { stats } from "@/lib/site-data";

type Stat = (typeof stats)[number];

function CountValue({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    let observer: IntersectionObserver | undefined;

    const animate = () => {
      const startedAt = performance.now();
      const duration = 900;

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        animate();
        observer?.disconnect();
      },
      { rootMargin: "-80px" },
    );

    observer.observe(element);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {suffix}
      {display}
    </span>
  );
}

export function CountUpStats({ items }: { items: Stat[] }) {
  return (
    <div
      className="grid overflow-hidden rounded-[1.25rem] border border-[#d5e4f7] bg-white sm:grid-cols-3"
    >
      {items.map((stat, index) => {
        const isFeatured = index === 1;

        return (
          <div
            key={stat.label}
            className={`group flex items-center gap-4 border-b border-[#d5e4f7] p-5 last:border-b-0 sm:block sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-6 ${
              isFeatured ? "bg-[#4b85e2] text-white" : "bg-[#f3f8ff] text-[#12242c]"
            }`}
          >
            <p className={`min-w-[5.25rem] shrink-0 font-[var(--font-display)] text-4xl font-black tracking-tight sm:min-w-0 sm:text-5xl ${isFeatured ? "text-white" : "text-[#12242c]"}`}>
              <CountValue value={stat.value} suffix={stat.suffix} />
            </p>
            <p className={`text-sm font-extrabold leading-5 sm:mt-2 ${isFeatured ? "text-white/78" : "text-slate-500"}`}>
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
