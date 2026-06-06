"use client";

import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { buttonVariants } from "@/components/ui/button";
import { nav, hero } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md backdrop-saturate-150 transition-shadow ${
        scrolled ? "border-b border-border bg-background/85" : "bg-background/60"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-baseline gap-1 font-extrabold tracking-tight">
          <span className="text-google-blue">G</span>
          <span className="text-google-red">D</span>
          <span className="text-google-yellow">G</span>
          <span className="ml-1 text-foreground">Belém</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1.5 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-google-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href={hero.ctaPrimary.href} className={buttonVariants({ size: "sm" })}>
            {hero.ctaPrimary.label}
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-xl border border-border md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-5 pt-2 shadow-md md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-muted py-3.5 text-[17px] font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href={hero.ctaPrimary.href}
            onClick={() => setOpen(false)}
            className={buttonVariants({ className: "mt-4 w-full" })}
          >
            {hero.ctaPrimary.label}
          </a>
        </nav>
      )}
    </header>
  );
}
