"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { nav, hero } from "@/lib/site";
import { GoogleMark } from "./google-mark";
import { LinkButton } from "./button";

function BrandLockup() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="GDG Belém — início">
      <GoogleMark className="size-8 shrink-0" />
      <span className="flex flex-col leading-[1.05]">
        <span className="text-[9.5px] font-medium tracking-wide text-muted-foreground">
          Google Developer Groups
        </span>
        <span className="text-base font-bold tracking-tight">
          <span className="text-google-blue">G</span>
          <span className="text-google-red">D</span>
          <span className="text-google-yellow">G</span>
          <span className="text-foreground">Belém</span>
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Active when the current path is the route or a child of it.
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

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
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <BrandLockup />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-1.5 text-[15px] font-medium transition-colors hover:text-foreground ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-google-blue transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <LinkButton href={hero.ctaPrimary.href} target="_blank" rel="noopener noreferrer" size="sm">
            {hero.ctaPrimary.label}
          </LinkButton>
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
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block border-b border-muted py-3.5 text-[17px] font-medium ${
                isActive(item.href) ? "text-google-blue" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <LinkButton
            href={hero.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 w-full"
          >
            {hero.ctaPrimary.label}
          </LinkButton>
        </nav>
      )}
    </header>
  );
}
