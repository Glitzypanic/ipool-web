"use client";

import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";
import { whatsappHref } from "@/lib/site-data";

export function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-4 right-4 z-30 sm:bottom-5 sm:right-5">
      <Link
        href={whatsappHref}
        className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-[#4b85e2] text-white shadow-[0_18px_50px_-20px_rgba(75,133,226,0.85)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5eac] active:scale-95 sm:min-h-14 sm:min-w-14"
        aria-label="Cotizar por WhatsApp"
      >
        <WhatsappLogo size={28} weight="fill" aria-hidden />
      </Link>
    </div>
  );
}
