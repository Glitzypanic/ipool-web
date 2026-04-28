"use client";

import Image from "next/image";
import { ArrowRight, Drop, SealCheck, ShieldCheck, Sparkle, Sun, Waves, X } from "@phosphor-icons/react";
import { useState } from "react";
import type { revestimientoBenefits } from "@/lib/site-data";

type Benefit = (typeof revestimientoBenefits)[number];

const icons = [ShieldCheck, Sun, Drop, Sparkle, Waves];
const benefitImages = [
  "/images/revestimiento-fibra.webp",
  "/images/mantencion3.webp",
  "/images/pools/piscina1.jpg",
  "/images/pools/piscina2.jpg",
  "/images/pools/piscina3.jpg",
];

export function BenefitsGrid({ items }: { items: Benefit[] }) {
  const [activeBenefit, setActiveBenefit] = useState<Benefit | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const sizeClass =
            index === 0
              ? "md:col-span-4 md:min-h-[20rem]"
              : index === 1
                ? "md:col-span-2 md:min-h-[20rem]"
                : index === 4
                  ? "md:col-span-2"
                  : "md:col-span-2";

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveBenefit(item)}
              className={`group relative overflow-hidden rounded-[1.25rem] border border-[#d5e4f7] bg-[#f3f8ff] p-4 text-left shadow-[0_24px_80px_-64px_rgba(75,133,226,0.42)] outline-none ring-offset-4 ring-offset-white transition duration-300 hover:-translate-y-1 hover:bg-[#eef5ff] focus-visible:ring-2 focus-visible:ring-[#ffb600] active:translate-y-0 sm:rounded-[1.5rem] sm:p-5 ${sizeClass}`}
            >
              <div className="relative flex min-h-full flex-col gap-5">
                <div className="relative overflow-hidden rounded-[1.1rem]">
                  <div className={`relative ${index === 0 ? "aspect-[16/7]" : "aspect-[16/9]"} bg-[#eef5ff]`}>
                    <Image
                      src={benefitImages[index % benefitImages.length]}
                      alt={`${item.title} en piscinas iPool`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#12242c]/10" />
                  <div className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-2xl bg-[#4b85e2] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
                    <Icon size={22} weight="duotone" aria-hidden />
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-white/86 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#2f5eac] backdrop-blur-md sm:text-xs">
                    {item.eyebrow}
                  </span>
                </div>
                <div className="mt-auto">
                  <h3 className="font-[var(--font-display)] text-2xl font-black leading-none tracking-tight text-[#12242c] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[34rem] text-sm font-semibold leading-6 text-slate-600 sm:text-base sm:leading-7">{item.summary}</p>
                  <span className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#4b85e2]/24 bg-[#eef5ff] px-3 text-[0.68rem] font-black uppercase tracking-[0.08em] text-[#2f5eac] transition group-hover:bg-[#4b85e2] group-hover:text-white sm:px-4 sm:text-xs sm:tracking-[0.12em]">
                    Características
                    <ArrowRight size={16} weight="bold" aria-hidden />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeBenefit ? (
          <div
            className="fixed inset-0 z-40 grid place-items-center bg-[#12242c]/70 p-4 backdrop-blur-sm sm:p-6 md:p-8"
            onClick={() => setActiveBenefit(null)}
          >
            <article
              className="mx-auto max-h-[88dvh] w-full max-w-3xl overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_40px_120px_-48px_rgba(0,0,0,0.55)] sm:p-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-[1.35rem]">
                <div className="relative aspect-[16/9] bg-[#eef5ff]">
                  <Image
                    src={benefitImages[items.findIndex((item) => item.id === activeBenefit.id) % benefitImages.length]}
                    alt={`${activeBenefit.title} en piscinas iPool`}
                    fill
                    sizes="(min-width: 768px) 48rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-[#12242c]/12" />
                <p className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#2f5eac] backdrop-blur-md">
                  {activeBenefit.eyebrow}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveBenefit(null)}
                  className="absolute right-4 top-4 grid min-h-11 min-w-11 place-items-center rounded-full border border-white/60 bg-white/86 text-[#12242c] backdrop-blur-md transition hover:bg-white active:scale-95"
                  aria-label="Cerrar beneficio"
                >
                  <X size={20} weight="bold" aria-hidden />
                </button>
              </div>
              <div className="px-1 py-5 sm:px-3 sm:py-6 md:px-4">
                <div className="relative">
                  <div className="pr-0">
                    <h3 className="font-[var(--font-display)] text-3xl font-black tracking-tight text-[#12242c] sm:text-4xl md:text-5xl">
                      {activeBenefit.title}
                    </h3>
                  </div>
                </div>
                <p className="relative mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{activeBenefit.detail}</p>
                <div className="relative mt-7 grid gap-3 sm:grid-cols-3">
                  {activeBenefit.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-extrabold text-[#2f5eac]">
                      <span className="grid h-7 w-7 shrink-0 place-items-center text-[#ffb600]">
                        <SealCheck size={26} weight="fill" aria-hidden />
                      </span>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ) : null}
    </>
  );
}
