"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { stats } from "@/lib/site-data";

type Stat = (typeof stats)[number];

function CountValue({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 42, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    if (isInView) {
      motionValue.set(value);
    }

    return unsubscribe;
  }, [isInView, motionValue, springValue, value]);

  return (
    <span ref={ref}>
      {suffix}
      {display}
    </span>
  );
}

export function CountUpStats({ items }: { items: Stat[] }) {
  return (
    <motion.div
      className="grid overflow-hidden rounded-[1.25rem] border border-[#d5e4f7] bg-white sm:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {items.map((stat, index) => (
        <motion.div
          key={stat.label}
          className={`group border-b border-[#d5e4f7] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-6 ${
            index === 1 ? "bg-[#4b85e2] text-white" : "bg-[#f3f8ff] text-[#12242c]"
          }`}
          variants={{
            hidden: { opacity: 0, y: 22 },
            show: { opacity: 1, y: 0, transition: { duration: 0.56, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          <p className={`font-[var(--font-display)] text-4xl font-black tracking-tight sm:text-5xl ${index === 1 ? "text-white" : "text-[#12242c]"}`}>
            <CountValue value={stat.value} suffix={stat.suffix} />
          </p>
          <p className={`mt-2 max-w-[12rem] text-sm font-extrabold leading-5 ${index === 1 ? "text-white/78" : "text-slate-500"}`}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
