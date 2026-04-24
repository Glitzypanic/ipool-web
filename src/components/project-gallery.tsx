"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, X } from "@phosphor-icons/react";
import { useState } from "react";
import type { projects } from "@/lib/site-data";

type Project = (typeof projects)[number];

export function ProjectGallery({ items }: { items: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.09 } },
        }}
      >
        {items.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => setActiveProject(project)}
            className="group relative min-h-[18rem] overflow-hidden rounded-[1.25rem] text-left shadow-[0_24px_80px_-52px_rgba(75,133,226,0.5)] outline-none ring-offset-4 ring-offset-white transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#ffb600] active:translate-y-0 sm:min-h-[20rem] sm:rounded-[1.5rem] lg:min-h-[22rem]"
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.64, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#12242c]/58" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
              <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-bold backdrop-blur-md">
                <MapPin size={14} weight="bold" aria-hidden />
                <span className="truncate">{project.location}</span>
              </div>
              <h3 className="font-[var(--font-display)] text-xl font-black leading-tight tracking-tight sm:text-2xl">
                {project.title}
              </h3>
              <div className="mt-4 flex items-center gap-2 text-sm font-extrabold text-[#bff3fb]">
                Ver antes y despues
                <ArrowRight size={16} weight="bold" aria-hidden />
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-40 flex items-end bg-[#12242c]/72 p-3 backdrop-blur-sm md:items-center md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.article
              className="mx-auto max-h-[92dvh] w-full max-w-5xl overflow-y-auto rounded-[1.5rem] bg-white shadow-[0_40px_120px_-48px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5 md:p-7">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#4b85e2] sm:text-sm">
                    Proyecto iPool
                  </p>
                  <h3 className="mt-2 font-[var(--font-display)] text-2xl font-black tracking-tight text-[#12242c] sm:text-3xl md:text-5xl">
                    {activeProject.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{activeProject.summary}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="grid min-h-11 min-w-11 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 active:scale-95"
                  aria-label="Cerrar proyecto"
                >
                  <X size={20} weight="bold" aria-hidden />
                </button>
              </div>
              <div className="grid gap-4 p-5 md:grid-cols-2 md:p-7">
                {[
                  ["Antes", activeProject.before],
                  ["Despues", activeProject.after],
                ].map(([label, src]) => (
                  <div key={label} className="overflow-hidden rounded-[1.25rem] bg-slate-100">
                    <div className="relative aspect-[4/3]">
                      <Image src={src} alt={`${label} de ${activeProject.title}`} fill className="object-cover" />
                    </div>
                    <div className="grid gap-1 px-4 py-3 sm:flex sm:items-center sm:justify-between">
                      <span className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{label}</span>
                      <span className="text-sm font-bold text-[#2f5eac]">{activeProject.location}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 px-5 py-5 md:px-7">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">Servicios realizados</p>
                <p className="mt-2 text-lg font-extrabold text-[#12242c]">{activeProject.service}</p>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
