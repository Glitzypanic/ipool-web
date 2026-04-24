"use client";

import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { whatsappHref } from "@/lib/site-data";

export function FloatingWhatsapp() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 140, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 140, damping: 18 });
  const x = useTransform(springX, [-1, 1], [-6, 6]);
  const y = useTransform(springY, [-1, 1], [-4, 4]);

  return (
    <motion.div
      style={{ x, y }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      className="fixed bottom-4 right-4 z-30 sm:bottom-5 sm:right-5"
    >
      <Link
        href={whatsappHref}
        className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-[#4b85e2] text-white shadow-[0_18px_50px_-20px_rgba(75,133,226,0.85)] transition hover:bg-[#2f5eac] active:scale-95 sm:min-h-14 sm:min-w-14"
        aria-label="Cotizar por WhatsApp"
      >
        <WhatsappLogo size={28} weight="fill" aria-hidden />
      </Link>
    </motion.div>
  );
}
