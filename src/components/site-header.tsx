"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, List, X } from "@phosphor-icons/react";
import { navItems, whatsappHref } from "@/lib/site-data";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 80 || scrollDelta < -8) {
        setIsHeaderVisible(true);
      } else if (scrollDelta > 8 && currentScrollY > 140) {
        setIsHeaderVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-[#12242c]/58 backdrop-blur-[0.18rem] lg:hidden"
          aria-label="Cerrar menú"
          onClick={closeMenu}
        />
      ) : null}
      <header
        className={`fixed inset-x-0 top-0 z-50 px-3 py-3 transition-transform duration-300 ease-out sm:px-4 sm:py-4 md:px-6 ${
          isHeaderVisible || isMenuOpen ? "translate-y-0" : "-translate-y-[115%]"
        }`}
      >
      <div className="liquid-panel relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full px-3 py-2.5 sm:px-4 sm:py-3">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="relative h-11 w-20 shrink-0 sm:h-12 sm:w-24"
          aria-label="iPool inicio"
        >
          <Image
            src="/images/ipool-logo-blue.png"
            alt="iPool"
            fill
            sizes="96px"
            className="object-contain drop-shadow-[0_0.35rem_0.9rem_rgba(75,133,226,0.22)]"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#4b85e2]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={whatsappHref}
            onClick={closeMenu}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-[#4b85e2] px-4 text-sm font-extrabold text-white shadow-[0_14px_34px_-24px_rgba(75,133,226,0.72)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5eac] active:translate-y-0 lg:inline-flex"
          >
            Cotiza
            <ArrowRight size={16} weight="bold" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid min-h-11 min-w-11 place-items-center rounded-full border border-slate-200 bg-white/78 text-[#12242c] shadow-[0_14px_34px_-28px_rgba(18,36,44,0.45)] transition hover:bg-white active:scale-95 lg:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={21} weight="bold" aria-hidden /> : <List size={23} weight="bold" aria-hidden />}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="relative z-20 mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/94 p-3 shadow-[0_24px_80px_-48px_rgba(75,133,226,0.45)] backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center justify-between rounded-2xl px-4 text-base font-extrabold text-slate-700 transition hover:bg-[#eef5ff] hover:text-[#2f5eac]"
                >
                  {item.label}
                  <ArrowRight size={16} weight="bold" aria-hidden />
                </Link>
              ))}
            </nav>
            <Link
              href={whatsappHref}
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#4b85e2] px-5 text-sm font-black text-white transition hover:bg-[#2f5eac] active:scale-[0.99]"
            >
              Cotiza por WhatsApp
              <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          </div>
        ) : null}
      </header>
    </>
  );
}
