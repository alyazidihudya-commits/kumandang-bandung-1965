"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/Container";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/struktur-organisasi", label: "Struktur Organisasi" },
  { href: "/agenda", label: "Agenda" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink-900/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link
          href="/"
          className="font-display shrink-0 text-sm font-bold tracking-tight text-white sm:text-base"
        >
          KUMANDANG <span className="text-gradient-accent">BANDUNG</span>
        </Link>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-3.5 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex lg:gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active ? "text-white" : "text-ink-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && <span className="mx-auto mt-1 block h-0.5 w-5 rounded-full bg-accent-gradient" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-ink-900 lg:hidden">
          <ul className="flex flex-col px-4 py-3">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-3 py-3 text-base ${
                      active ? "bg-white/5 text-white" : "text-ink-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
